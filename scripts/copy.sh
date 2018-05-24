#!/bin/sh

mkdir -p ./build/api/docs
cp ./src/api/docs/*.json ./build/api/docs/
mkdir -p ./build/config
cp ./src/config/swagger.json ./build/config/swagger.json
