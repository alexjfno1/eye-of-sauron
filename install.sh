#!/bin/sh

if [ -z "$1" ]; then
  echo -e "Usage: ./install.sh <SERVO_KEY>"
  exit
fi

# Install Node
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
rm node_lastest_armhf.deb

#Install Pi-Blaster
git clone https://github.com/sarfata/pi-blaster.git
cd pi-blaster
sudo apt-get install autoconf
./autogen.sh
./configure
make
sudo make install
cd ../
rm -rf pi-blaster

#Install dependencies
npm install

#Setup servo key
sed s/SERVO_KEY/$1/ pi-client.js
