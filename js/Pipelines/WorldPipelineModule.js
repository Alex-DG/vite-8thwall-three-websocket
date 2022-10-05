import Dummy from '../Experience/Dummy'
import ParticleSystem from '../Experience/ParticleSystem'

export const initWorldPipelineModule = () => {
  let dummy
  let particleSystem

  const init = () => {
    dummy = new Dummy()
    particleSystem = new ParticleSystem({ count: 1000 })
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
