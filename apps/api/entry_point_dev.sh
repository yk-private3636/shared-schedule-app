#!/bin/sh

setup() {
    echo "環境のセットアップが出来ていませんでした。npm installを実行します..."
    npm install
    echo "npm run start:dev 実行中..."
    npm run start:dev
}

npm run start:dev || setup