# ViteJS 8thwall ThreeJS Websocket

Experimental project using 8thwall AR with ThreeJS and WebSocket

- on touch the cube mesh: send touch coordinates through websocket
- websocket server code available on [glitch](https://glitch.com/edit/#!/designium-websocket-server)
- check vConsole on the client UI to see the communication


- Prototype video: top white screen is the server console getting the data sent from the client app on the phone
https://user-images.githubusercontent.com/4311684/194003023-891c2546-8945-4818-bb38-de2efd2d3402.mp4



## Setup

Run the following commands:

```bash
# Install dependencies (only the first time)
yarn

# Run the local server at localhost:8080
yarn dev

# Run the local server at your public IP address
yarn dev --host

# Build for production in the dist/ directory
yarn build
```
