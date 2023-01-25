const fs = require('fs')
const path = require('path')
const readline = require('readline')
const basePath = path.join(__dirname, "/files");

const getFiles = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(basePath, (err, folders) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(
                    Promise.all(folders.map(dir => {
                        const dirPath = path.join(basePath, dir)
                        return new Promise((resolve, reject) => {
                            fs.readdir(dirPath, (err, files) => {
                                if (err) {
                                    reject(err)
                                }
                                else {
                                    resolve(files.map(file => path.join(dirPath, file)))
                                }
                            })
                        })
                    })).then(files => files.reduce((a, b) => a.concat(b)))
                )
            }
        })
    })
}

console.time('total')
let total = 0
getFiles()
    .then(function* (files) {
        for (let file of files) {
            yield new Promise((resolve, reject) => {
                const lineReader = readline.createInterface({
                    input: fs.createReadStream(file)
                })

                let fileSum = 0

                lineReader.on('line', line => {
                    let lineSum = 0
                    let current = 0
                    for (let i = 0; i < line.length; i++) {
                        let char = line[i]
                        if (char != ',') {
                            if (current === 0) {
                                current = +char
                            }
                            else {
                                current = (current * 10) + (+char)
                            }
                        }
                        if ((char === ',') || (i === (line.length - 1))) {
                            lineSum += current
                            current = 0
                        }
                    }
                    fileSum += lineSum
                })

                lineReader.on('close', () => {
                    total += fileSum
                    resolve(fileSum)
                })
            })
        }
    })
    .then(sums => {
        return Promise.all(sums)
    })
    .then(() => {
        console.log(total)
        console.timeEnd('total')
    })
    .catch(err => {
        console.error(err)
    })