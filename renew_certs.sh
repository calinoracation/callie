#!/bin/bash
 
echo "deb http://httpredir.debian.org/debian jessie-backports main" > /etc/apt/sources.list.d/sources.list
apt-get update
apt-get -qq install certbot -t jessie-backports
certbot certonly --webroot -w /usr/share/nginx/html -d calinoracation.com -d www.calinoracation.com