const fs = require('fs')
const path = require('path')
const pad = require('./utils/pad')
const Promise = require('bluebird')

const dir = path.join(__dirname, '../files')

function readFile(dir) {
  return new Promise((resolve, reject) => {
    fs.readFile(dir, (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function addFolder(dir, position) {
  let summation = 0
  return new Promise(async (resolve, reject) => {
    try {
      for (let i = 0; i < 10; i += 1) {
        let buffer = await readFile(dir + `/${pad(position + i, 6)}.csv`)
        let data = buffer.toString()
        let stack = ''
        let regx = new RegExp(`[0-9]`)

        for (let i = 0; i < data.length; i++) {
          const element = data[i]

          if (regx.test(element)) {
            stack += element
          } else if (element === '\n' || element === ' ' || element === ',') {
            summation += Number.parseInt(stack, 10)
            stack = ''
          }
        }
      }
      resolve(summation)
    } catch (error) {
      reject(error)
    }
  })
}

console.time('run')
function getPromises() {
  return new Promise((resolve, reject) => {
    try {
      const promises = []
      for (let i = 0; i < 100; i += 10) {
        promises.push(
          addFolder(dir + `/${pad(i + 1, 6)}-${pad(i + 10, 6)}`, i + 1)
        )
      }
      resolve(promises)
    } catch (error) {
      reject(error)
    }
  })
}

getPromises().then((promises) => {
  Promise.all(promises)
    .then((all) => {
      console.log(all)
      Promise.reduce(
        all,
        (accumulator, current) => {
          return accumulator + current
        },
        0
      ).then((num) => {
        console.log(`Sum: ${num}`)
        console.timeEnd('run')
      })
    })
    .catch((errors) => {
      throw Error(errors)
    })
})
