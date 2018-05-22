#!/bin/sh

mkdir -p ./build/api/docs
cp ./src/api/docs/*.json ./build/api/docs/
mkdir -p ./build/api/config
cp ./src/api/config/swagger.json ./build/api/config/swagger.json
