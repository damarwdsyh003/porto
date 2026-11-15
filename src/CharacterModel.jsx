import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { ContactShadows, Environment, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function CharacterMesh({ idle = false }) {
  const group = useRef()
  const { scene } = useGLTF('/models/character.glb')
  const { pointer } = useThree()

  useFrame(({ clock }, delta) => {
    if (!group.current) return
    const ease = 1 - Math.pow(0.001, delta)
    const idleRotation = Math.sin(clock.getElapsedTime() * 0.75) * 0.14
    const targetY = idle ? idleRotation : pointer.x * 0.34
    const targetX = idle ? Math.sin(clock.getElapsedTime() * 0.38) * 0.025 : -pointer.y * 0.14
    group.current.rotation.y += (targetY - group.current.rotation.y) * ease
    group.current.rotation.x += (targetX - group.current.rotation.x) * ease
  })

  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true
      object.receiveShadow = true
    }
  })

  return <group ref={group} position={[0, -0.65, 0]} scale={2.25}>
    <primitive object={scene} />
  </group>
}

export default function CharacterModel({ fallback, idle = false }) {
  return <div className="character-stage glb-character-stage" aria-label="Interactive 3D character that follows the cursor" role="img">
    <Canvas camera={{ position: [0, .15, 5.5], fov: 34 }} dpr={[1, 1.35]} gl={{ antialias: true, powerPreference: 'low-power' }} fallback={fallback}>
      <color attach="background" args={['#ece6da']} />
      <ambientLight intensity={1.7} />
      <directionalLight position={[3, 5, 4]} intensity={2.4} />
      <Suspense fallback={null}>
        <CharacterMesh idle={idle} />
        <Environment preset="studio" environmentIntensity={.55} />
      </Suspense>
      <ContactShadows position={[0, -2.2, 0]} opacity={.2} scale={4.5} blur={2.5} far={3} />
    </Canvas>
    {/* <span className="character-caption">01 / interactive character</span> */}
  </div>
}

useGLTF.preload('/models/character.glb')
