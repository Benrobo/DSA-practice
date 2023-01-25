const Promise = require('bluebird')

const array = 'abcdefghitksjs'

function looper(array) {
  const other = []

  return new Promise((resolve, reject) => {
    try {
      for (let index = 0; index < array.length; index++) {
        const element = array[index]
        other.push(element)
      }
      resolve(other)
    } catch (error) {
      reject(error)
    }
  })
}

async function run() {
  await looper(array)
    .then((data) => console.log(data))
    .catch((error) => {
      throw Error(error)
    })
  console.log('abakd')
}

run()
