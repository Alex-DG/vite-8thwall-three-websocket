import Dom from './Dom'

const URL = 'wss://designium-websocket-server.glitch.me/'
class ConnectionInstance {
  init() {
    this.websocket = new WebSocket(URL)

    this.websocket.addEventListener('open', function (e) {
      // Connection
      console.log('[ Socket connection successful 🎉]')
      console.log('------------------------------------')

      Dom.init() // show dom elements
    })

    this.websocket.addEventListener('message', function (e) {
      // receive data from the server
      console.log('[ Server listener > data received ✅]')
      console.log(e.data)
      console.log('------------------------------------')
    })
  }

  sendMessage(msg = 'Bonjour 🥖') {
    console.log('[ Client send data 📩]')
    this.websocket.send(`${msg}`) // Send a string to the server via WebSocket
    console.log('------------------------------------')
  }
}

const Connection = new ConnectionInstance()
export default Connection
