#!/bin/bash

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

cd public

ls

git init
git config user.name "Ryan Chu"
git config user.email "ryaneof@gmail.com"

git remote add upstream "https://$GH_TOKEN@github.com/gocn/gocn.github.io.git"
git fetch upstream
git reset upstream/master

touch .

git add -A .
git commit -m "Rebuild pages at ${rev}"
git push -q upstream HEAD:master
