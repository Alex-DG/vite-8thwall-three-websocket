import Dummy from '../Experience/Dummy'
import ParticleSystem from '../Experience/ParticleSystem'
import Connection from '../Experience/Connection'

import VConsole from 'vconsole'

const IS_CONSOLE = true

export const initWorldPipelineModule = () => {
  let dummy
  let particleSystem

  const init = () => {
    if (IS_CONSOLE) new VConsole({ theme: 'dark' })

    // Objects
    dummy = new Dummy()
    particleSystem = new ParticleSystem({ count: 1000 })

    // Websocket
    Connection.init()
  }

  const updateWorld = () => {
    dummy?.update()
    particleSystem?.update()
  }

  return {
    name: 'world',

    onStart: () => init(),

    onUpdate: () => updateWorld(),
  }
}
