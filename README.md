# NodeRaspberryPiServoController

Raspberry Pi Servo Controller Using Node.js

## Getting Started

In order to start controlling your servo there are a few things to install first

### Install node.js

```bash
wget http://node-arm.herokuapp.com/node_latest_armhf.deb 
sudo dpkg -i node_latest_armhf.deb
```

### Install Pi-Blaster

Please go to [https://github.com/sarfata/pi-blaster/](https://github.com/sarfata/pi-blaster/) for installation instructions.

Also ensure that you have started pi-blaster otherwise the servo won't move.

### npm install

Ensure that you run `npm install` to make sure you have all the dependencies installed.

## Setup your servo

To get your servo to work you need to plug in the 3 wires.

1. The positive (red) wire goes onto pin 2
2. The negative / ground (black) needs to go onto pin 6
3. The last remaining wire needs to be plugged into pin 11

## Run!

There are two things that need to be started.

1. The main app.js file which setups the web socket connection and hosts the UI. This can be hosted on any machine that the pi can connect to.

```bash
npm start
```

2. The client app that runs on the pi which interacts with the servo which must be run on the pi.

```bash
node pi-client.js
```
