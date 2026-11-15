import { useEffect, useRef } from 'react'

export default function CharacterAvatar() {
  const character = useRef(null)
  const target = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const frame = useRef(null)

  useEffect(() => {
    const updateCursorTarget = (event) => {
      target.current.x = (event.clientX / window.innerWidth - 0.5) * 2
      target.current.y = (event.clientY / window.innerHeight - 0.5) * 2
    }

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.08
      current.current.y += (target.current.y - current.current.y) * 0.08
      if (character.current) {
        character.current.style.setProperty('--cursor-x', current.current.x.toFixed(3))
        character.current.style.setProperty('--cursor-y', current.current.y.toFixed(3))
      }
      frame.current = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', updateCursorTarget, { passive: true })
    frame.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('pointermove', updateCursorTarget)
      cancelAnimationFrame(frame.current)
    }
  }, [])

  return <div className="character-stage" aria-label="Animated 3D avatar that follows the cursor" role="img">
    <div className="character-halo" />
    <div className="character-card" ref={character}>
      <div className="character-depth" />
      <img src="/media/damar-avatar.png" alt="Stylized 3D avatar in a black suit" />
      {/* <span className="character-caption">01 / digital builder</span> */}
    </div>
  </div>
}
