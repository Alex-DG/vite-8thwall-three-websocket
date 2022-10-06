import { Vector2 } from 'three'
import Connection from './Connection'

class TouchHandlerInstance {
  onTouchScene(e) {
    if (e?.touches?.length > 2) return

    // If the canvas is tapped with one finger and hits the "surface", spawn an object.
    const { camera } = XR8.Threejs.xrScene()
    // calculate tap position in normalized device coordinates (-1 to +1) for both components.
    this.tapPosition.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1
    this.tapPosition.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1
    // Update the picking ray with the camera and tap position.
    this.raycaster.setFromCamera(this.tapPosition, camera)
    // Raycast against the "surface" object.
    const intersects = this.raycaster.intersectObject(this.object)
    if (intersects.length === 1 && intersects[0].object === this.object) {
      const object = intersects[0]
      console.log('🖖', { object })
      Connection.sendData(object.point)
    }
  }

  setTouchEvent() {
    const { canvas } = XR8.Threejs.xrScene()
    canvas.addEventListener('touchstart', this.onTouchScene, true)
  }

  bind() {
    this.onTouchScene = this.onTouchScene.bind(this)
  }

  init({ object }) {
    this.object = object
    this.raycaster = new THREE.Raycaster()
    this.tapPosition = new Vector2()

    this.bind()
    this.setTouchEvent()
  }
}

const TouchHandler = new TouchHandlerInstance()
export default TouchHandler
