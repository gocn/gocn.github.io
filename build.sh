#!/bin/bash

mkdir -p public/fonts

mkdir -p public/tmp

text=`cat ./pages/*.*`

./node_modules/.bin/fontmin -t "$text" -b ./node_modules/source-han-sans-sc-ttf/dist/* ./public/tmp/

cp ./public/tmp/*.ttf ./public/fonts/

rm -rf ./public/tmp/

