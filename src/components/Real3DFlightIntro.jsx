import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { Icon } from './Icons'
import { playCabinChime, playButtonBeep, playEngineGlide } from '../utils/sound'

export function Real3DFlightIntro({ onFinish }) {
  const mountRef = useRef(null)
  const [isExiting, setIsExiting] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const hasEnteredRef = useRef(false)

  // Ref to trigger 3D warp takeoff animation
  const isTakingOffRef = useRef(false)

  const handleEnter = useCallback(() => {
    if (hasEnteredRef.current) return
    hasEnteredRef.current = true
    if (soundEnabled) {
      playCabinChime()
      playEngineGlide()
    }
    isTakingOffRef.current = true
    setIsExiting(true)
    setTimeout(() => {
      onFinish()
    }, 900)
  }, [onFinish, soundEnabled])

  // ESC shortcut to skip
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        handleEnter()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleEnter])

  // Real 3D WebGL Canvas Scene with Three.js
  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth || window.innerWidth
    const height = container.clientHeight || window.innerHeight

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050d17, 0.012)

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.set(0, 2.5, 9)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x050d17, 1)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0x224455, 1.2)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xfff3e0, 3)
    mainLight.position.set(10, 15, 10)
    scene.add(mainLight)

    const rimLight = new THREE.DirectionalLight(0x00e5ff, 2.5)
    rimLight.position.set(-10, 5, -10)
    scene.add(rimLight)

    const bottomGlow = new THREE.PointLight(0xe6caa0, 2, 20)
    bottomGlow.position.set(0, -3, 2)
    scene.add(bottomGlow)

    // 3. Build Realistic 3D Supersonic Aircraft Model
    const airplane = new THREE.Group()

    // Materials
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x0e1f30,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x05101a,
    })

    const goldAccentMat = new THREE.MeshStandardMaterial({
      color: 0xe6caa0,
      metalness: 0.95,
      roughness: 0.2,
      emissive: 0x332205,
    })

    const cockpitGlassMat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.7,
      emissive: 0x003344,
    })

    const engineGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00ffff,
    })

    // Fuselage (Body)
    const bodyGeo = new THREE.CylinderGeometry(0.55, 0.42, 6.2, 32)
    bodyGeo.rotateX(Math.PI / 2)
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat)
    airplane.add(bodyMesh)

    // Nose Cone (Streamlined)
    const noseGeo = new THREE.ConeGeometry(0.55, 2.2, 32)
    noseGeo.rotateX(-Math.PI / 2)
    const noseMesh = new THREE.Mesh(noseGeo, goldAccentMat)
    noseMesh.position.set(0, 0, 4.2)
    airplane.add(noseMesh)

    // Cockpit Canopy Glass
    const cockpitGeo = new THREE.CylinderGeometry(0.35, 0.48, 1.4, 16)
    cockpitGeo.rotateX(Math.PI / 2)
    const cockpitMesh = new THREE.Mesh(cockpitGeo, cockpitGlassMat)
    cockpitMesh.position.set(0, 0.45, 2.5)
    cockpitMesh.scale.set(0.9, 0.6, 1)
    airplane.add(cockpitMesh)

    // Main Delta Wings
    const wingShape = new THREE.Shape()
    wingShape.moveTo(0, 1.5)
    wingShape.lineTo(4.6, -1.8)
    wingShape.lineTo(4.4, -2.4)
    wingShape.lineTo(0.5, -1.6)
    wingShape.lineTo(-0.5, -1.6)
    wingShape.lineTo(-4.4, -2.4)
    wingShape.lineTo(-4.6, -1.8)
    wingShape.closePath()

    const wingExtrudeSettings = { depth: 0.08, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: 0.02, bevelThickness: 0.02 }
    const wingGeo = new THREE.ExtrudeGeometry(wingShape, wingExtrudeSettings)
    wingGeo.rotateX(Math.PI / 2)
    const wingMesh = new THREE.Mesh(wingGeo, bodyMat)
    wingMesh.position.set(0, 0, 0.4)
    airplane.add(wingMesh)

    // Wing Trim Gold Stripes
    const wingTrimShape = new THREE.Shape()
    wingTrimShape.moveTo(4.6, -1.8)
    wingTrimShape.lineTo(4.4, -2.4)
    wingTrimShape.lineTo(4.1, -2.4)
    wingTrimShape.lineTo(4.3, -1.8)
    wingTrimShape.closePath()
    const wingTrimGeo = new THREE.ExtrudeGeometry(wingTrimShape, wingExtrudeSettings)
    wingTrimGeo.rotateX(Math.PI / 2)
    const rightTrim = new THREE.Mesh(wingTrimGeo, goldAccentMat)
    rightTrim.position.set(0, 0.01, 0.4)
    airplane.add(rightTrim)

    // Vertical Stabilizer (Tail fin)
    const tailShape = new THREE.Shape()
    tailShape.moveTo(0, 0)
    tailShape.lineTo(0.3, 2.0)
    tailShape.lineTo(-0.8, 2.0)
    tailShape.lineTo(-1.6, 0)
    tailShape.closePath()

    const tailGeo = new THREE.ExtrudeGeometry(tailShape, { depth: 0.08, bevelEnabled: false })
    tailGeo.rotateY(Math.PI / 2)
    const tailMesh = new THREE.Mesh(tailGeo, goldAccentMat)
    tailMesh.position.set(0.04, 0.5, -2.2)
    airplane.add(tailMesh)

    // Horizontal Tail Wings
    const hTailShape = new THREE.Shape()
    hTailShape.moveTo(0, 0)
    hTailShape.lineTo(1.6, -0.9)
    hTailShape.lineTo(1.4, -1.2)
    hTailShape.lineTo(-1.4, -1.2)
    hTailShape.lineTo(-1.6, -0.9)
    hTailShape.closePath()

    const hTailGeo = new THREE.ExtrudeGeometry(hTailShape, wingExtrudeSettings)
    hTailGeo.rotateX(Math.PI / 2)
    const hTailMesh = new THREE.Mesh(hTailGeo, bodyMat)
    hTailMesh.position.set(0, 0.2, -2.6)
    airplane.add(hTailMesh)

    // Dual Jet Engines
    const engineGeo = new THREE.CylinderGeometry(0.32, 0.28, 2.2, 24)
    engineGeo.rotateX(Math.PI / 2)

    const leftEngine = new THREE.Mesh(engineGeo, bodyMat)
    leftEngine.position.set(-1.8, -0.28, -0.4)
    airplane.add(leftEngine)

    const rightEngine = new THREE.Mesh(engineGeo, bodyMat)
    rightEngine.position.set(1.8, -0.28, -0.4)
    airplane.add(rightEngine)

    // Jet Engine Exhaust Glowing Nozzles
    const exhaustGeo = new THREE.CircleGeometry(0.24, 24)
    exhaustGeo.rotateY(Math.PI)

    const leftExhaust = new THREE.Mesh(exhaustGeo, engineGlowMat)
    leftExhaust.position.set(-1.8, -0.28, -1.51)
    airplane.add(leftExhaust)

    const rightExhaust = new THREE.Mesh(exhaustGeo, engineGlowMat)
    rightExhaust.position.set(1.8, -0.28, -1.51)
    airplane.add(rightExhaust)

    // Wingtip Strobe Lights
    const portStrobe = new THREE.PointLight(0xff0044, 2, 4)
    portStrobe.position.set(-4.5, 0, -1.8)
    airplane.add(portStrobe)

    const stbdStrobe = new THREE.PointLight(0x00ff88, 2, 4)
    stbdStrobe.position.set(4.5, 0, -1.8)
    airplane.add(stbdStrobe)

    airplane.scale.setScalar(0.78)
    scene.add(airplane)

    // 4. Starfield & Hyperspace Speed Particles (1,800 stars)
    const starCount = 1800
    const starGeo = new THREE.BufferGeometry()
    const starPositions = new Float32Array(starCount * 3)
    const starSpeeds = new Float32Array(starCount)

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 60
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 40
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 120
      starSpeeds[i] = 0.4 + Math.random() * 0.8
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))

    const starMat = new THREE.PointsMaterial({
      color: 0x90e0ef,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
    })

    const starParticles = new THREE.Points(starGeo, starMat)
    scene.add(starParticles)

    // 5. Mouse Interaction for 3D Banking & Pitch
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    function handleMouseMove(e) {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Resize handler
    function handleResize() {
      if (!container) return
      const w = container.clientWidth || window.innerWidth
      const h = container.clientHeight || window.innerHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // 6. Animation Loop
    let animationFrameId
    let clock = new THREE.Clock()

    function animate() {
      animationFrameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()
      const time = clock.getElapsedTime()

      // Smooth mouse follow (Interpolation)
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      // Aircraft flight kinematics (Roll, Pitch, Yaw)
      if (!isTakingOffRef.current) {
        airplane.rotation.z = -targetX * 0.45 + Math.sin(time * 1.5) * 0.04
        airplane.rotation.x = targetY * 0.25 + Math.sin(time * 2.0) * 0.02
        airplane.rotation.y = targetX * 0.25

        airplane.position.x = 1.25 + targetX * 1.5
        airplane.position.y = targetY * 1.2 + Math.sin(time * 2) * 0.08
        airplane.position.z = 0

        camera.position.x = targetX * 0.8
        camera.position.y = 2.5 + targetY * 0.5
      } else {
        // Dramatic Warp Takeoff Climb
        airplane.rotation.x = THREE.MathUtils.lerp(airplane.rotation.x, -0.4, 0.08)
        airplane.position.z -= 0.6
        airplane.position.y += 0.25
        camera.position.z += 0.15
        engineGlowMat.color.setHex(0xffaa00)
      }

      // Strobe beacon flashes
      const strobeOn = Math.floor(time * 3) % 2 === 0
      portStrobe.intensity = strobeOn ? 3.5 : 0.2
      stbdStrobe.intensity = strobeOn ? 3.5 : 0.2

      // Star Particles forward cruise streaming
      const positions = starGeo.attributes.position.array
      const speedMultiplier = isTakingOffRef.current ? 4.5 : 1.0

      for (let i = 0; i < starCount; i++) {
        positions[i * 3 + 2] += starSpeeds[i] * speedMultiplier
        if (positions[i * 3 + 2] > 20) {
          positions[i * 3 + 2] = -100
          positions[i * 3] = (Math.random() - 0.5) * 60
          positions[i * 3 + 1] = (Math.random() - 0.5) * 40
        }
      }
      starGeo.attributes.position.needsUpdate = true

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      starGeo.dispose()
      bodyGeo.dispose()
      noseGeo.dispose()
      cockpitGeo.dispose()
      wingGeo.dispose()
    }
  }, [handleEnter])

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8 bg-[#050d17] text-white overflow-hidden transition-all duration-700 ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 3D WebGL Canvas Layer */}
      <div ref={mountRef} className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing" />

      {/* TOP BAR: Telemetry HUD & Controls */}
      <header className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto pt-2">
        <div className="flex items-center gap-3 bg-[#050d17]/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <span className="w-8 h-8 rounded-full bg-cyan-950 text-[#e6caa0] flex items-center justify-center border border-[#e6caa0]/30 shadow-md">
            <Icon name="plane" size={17} />
          </span>
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-[#e6caa0] uppercase block">
              SKYVISTA · A WORLD OF FLIGHT
            </span>
            <span className="text-[10px] text-white/60 tracking-wider flex items-center gap-1.5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>THOUGHTFUL JOURNEYS · WORLDWIDE</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              playButtonBeep()
              setSoundEnabled(!soundEnabled)
            }}
            className="px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-xs text-white/80 hover:text-white transition-all font-mono flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
            title={soundEnabled ? 'Mute audio' : 'Enable audio'}
          >
            <span>{soundEnabled ? '🔔 Chime On' : '🔕 Muted'}</span>
          </button>

          {/* Skip Intro */}
          <button
            onClick={handleEnter}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 hover:bg-black/70 border border-white/15 hover:border-[#e6caa0]/60 text-xs text-white transition-all backdrop-blur-md cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(230,202,160,0.3)] font-mono"
            aria-label="Skip introduction"
          >
            <span className="tracking-wider text-[11px]">SKIP 3D INTRO</span>
            <span className="text-[#e6caa0] group-hover:translate-x-0.5 transition-transform font-bold">➔</span>
          </button>
        </div>
      </header>

      {/* Editorial welcome message */}
      <div className="absolute inset-0 z-10 flex items-center pointer-events-none select-none">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 pb-28 sm:pb-32">
          <div className="max-w-xl">
            <span className="inline-block mb-5 text-[10px] sm:text-xs font-mono tracking-[0.28em] uppercase text-[#e6caa0]">
              A world of possibility
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.98] tracking-tight text-white drop-shadow-[0_3px_24px_rgba(0,0,0,0.55)]">
              The world,
              <br />
              <span className="italic text-[#e6caa0]">within reach.</span>
            </h1>
            <p className="mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-white/75 drop-shadow-lg">
              Exceptional flights and thoughtfully planned journeys, shaped around you.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM COCKPIT DOCK: Boarding Telemetry & Enter Button */}
      <footer className="relative z-20 w-full max-w-3xl mx-auto pb-4">
        <div className="p-6 sm:p-7 rounded-3xl bg-[#071422]/85 backdrop-blur-xl border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.8),_0_0_35px_rgba(0,229,255,0.2)] space-y-4">
          <div className="flex flex-wrap items-center justify-between text-xs font-mono pb-2 border-b border-white/10">
            <span className="text-[#e6caa0] font-bold tracking-wider">✦ THE JOURNEY STARTS HERE</span>
            <span className="text-white/60">AEROPLANE TOURS &amp; TRAVELS</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
            <div className="text-left font-mono text-[11px] text-white/70">
              <span className="block text-white font-bold text-xs font-serif">Travel, made exceptional.</span>
              <span>Discover flights, stays &amp; journeys made for you.</span>
            </div>

            <button
              onClick={handleEnter}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#e6caa0] via-[#f0dcbe] to-[#d8b884] text-[#050d17] font-mono font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(230,202,160,0.5)] hover:shadow-[0_0_35px_rgba(230,202,160,0.8)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore SkyVista</span>
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
