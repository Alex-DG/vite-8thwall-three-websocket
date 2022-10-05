import ParticleMaterial from './Shaders/Particles/ParticleMaterial'

class ParticleSystem {
  constructor(options) {
    const { scene } = XR8.Threejs.xrScene()
    this.scene = scene
    this.count = options.count || 5000
    this.init()
  }

  init() {
    const count = this.count
    this.particleMaterial = new ParticleMaterial()

    const particleGeometry = new THREE.BufferGeometry()

    const positionArray = new Float32Array(count * 3)
    const scaleArray = new Float32Array(count) // add scale randomness

    for (let i = 0; i < count; i++) {
      positionArray.set(
        [
          (Math.random() - 0.5) * 20,
          -Math.random() * 20,
          (Math.random() - 0.5) * 20,
        ],
        i * 3
      )

      scaleArray[i] = Math.random()
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positionArray, 3)
    )
    particleGeometry.setAttribute(
      'aScale',
      new THREE.BufferAttribute(scaleArray, 1)
    )

    this.instance = new THREE.Points(particleGeometry, this.particleMaterial)

    this.scene.add(this.instance)
  }

  update() {
    if (this.particleMaterial) {
      this.particleMaterial.uniforms.uTime.value = performance.now()
    }
  }
}

export default ParticleSystem
