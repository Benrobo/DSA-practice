#!/usr/bin/bash

counter=0
while [ $counter -le 99 ]
do
node ./src/index.js $counter
git add .
git commit -m "chore: generating $counter"
((counter++))
done