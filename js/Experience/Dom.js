import Connection from './Connection'

class DomInstance {
  setButton() {
    const buttonDom =
      '<button id="connection" class="btn notextselect">Send message</button>'
    this.container.innerHTML = `${buttonDom}`

    const button = document.getElementById('connection')
    button.style.opacity = '1'
    button?.addEventListener('click', () => {
      Connection.sendMessage()
    })
  }

  setContainer() {
    this.container = document.getElementById('ui-container')
    setTimeout(() => (this.container.style.opacity = '1'), 250)
  }

  init() {
    this.setContainer()
    this.setButton()
  }
}

const Dom = new DomInstance()
export default Dom
