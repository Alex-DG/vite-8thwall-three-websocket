import Dom from './Dom'

const URL = 'wss://designium-websocket-server.glitch.me/'
class ConnectionInstance {
  onConnectionEstablished() {
    console.log('[ Socket connection successful 🎉]')
    Dom.init() // show dom elements
    console.log('------------------------------------')
  }

  onMessageReceived(e) {
    const data = e.data
    // receive data from the server
    console.log('[ Received data from server ✅]')
    if (data.includes('"isId":true')) {
      const clientData = JSON.parse(data)
      this.id = clientData.id
      console.log('id :', this.id)
    } else {
      console.log(data)
    }
    console.log('------------------------------------')
  }

  setEventListeners() {
    this.websocket.addEventListener('open', this.onConnectionEstablished)
    this.websocket.addEventListener('message', this.onMessageReceived)
  }

  bind() {
    this.onConnectionEstablished = this.onConnectionEstablished.bind(this)
    this.onMessageReceived = this.onMessageReceived.bind(this)
  }

  init() {
    this.websocket = new WebSocket(URL)

    this.bind()
    this.setEventListeners()
  }

  sendMessage(msg = 'Randon message 🤖') {
    console.log('[ Client send data > server 📩]')
    this.websocket.send(msg) // Send a string to the server via WebSocket
    console.log('------------------------------------')
  }

  sendData(object) {
    if (object) {
      this.websocket.send(JSON.stringify(object))
    }
  }
}

const Connection = new ConnectionInstance()
export default Connection
