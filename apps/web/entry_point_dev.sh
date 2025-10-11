#!/bin/sh

setup() {
    echo "環境のセットアップが出来ていませんでした。npm installを実行します..."
    npm install
    echo "npm run dev 実行中..."
    npm run dev
}

npm run dev || setup