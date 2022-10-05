import TouchHandler from './TouchHandler'

/**
 * Dummy cube
 */
class Dummy {
  constructor() {
    const { scene } = XR8.Threejs.xrScene()
    this.scene = scene
    this.init()
  }

  setCube() {
    this.cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshNormalMaterial()
    )

    this.cube.position.set(0, 0.5, 0)
    this.cube.rotateY(-Math.PI / 4)
    this.cube.castShadow = true

    this.scene.add(this.cube)
    TouchHandler.init({ object: this.cube })
  }

  init() {
    this.setCube()
  }

  update() {}
}

export default Dummy
