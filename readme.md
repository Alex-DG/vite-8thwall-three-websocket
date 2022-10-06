# ViteJS 8thwall ThreeJS Websocket

## Description 

- Experimental project using 8thwall AR with ThreeJS and WebSocket
- [Live URL](https://vite-8thwall-three-websocket.vercel.app/)

## How is it working?

- on touch the cube mesh: send touch coordinates through websocket
- websocket server code available on [glitch](https://glitch.com/edit/#!/designium-websocket-server)
- check vConsole on the client UI to see the communication

## Demo

- Prototype video: Left Screen is Client / Right Screen is Server

https://user-images.githubusercontent.com/4311684/194185922-f66c4c84-ddf5-4a58-b205-541d2d8373d9.mp4

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
