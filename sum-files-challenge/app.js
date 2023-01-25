const fs = require("fs");
const path = require("path");
const { log } = console;

const basePath = path.join(__dirname, "/files");

async function getFiles() {
    const folders = await fs.readdirSync(basePath);
    const Files = folders.map((fname) => {
        const dirPath = path.join(basePath, fname);
        const files = fs.readdirSync(dirPath);
        return files.map((f) => {
            return `${dirPath}/${f}`;
        });
    });
    return new Promise((res, rej) => {
        const allFiles = [];
        Files.map((f) => {
            f.map((data) => {
                allFiles.push(data);
            });
        });
        res(allFiles);
    });
}

console.time("total");

getFiles().then(async (data) => {
    let finalTotal = 0;
    for (const i in data) {
        const res = await calculateSum(data[i]);
        finalTotal += res;
    }
    log(finalTotal);
    // sum of all files: 49947871404
    // total time: 42.329s
    console.timeEnd("total");
});

function calculateSum(fileP) {
    return new Promise((res, rej) => {
        fs.readFile(fileP, (err, data) => {
            if (err) rej(err);
            let fdata = data
                .toString()
                .replace(/\n/gi, ",")
                .split(",")
                .map((i) => +i)
                .reduce((t, ac) => (t += ac), 0);
            res(fdata);
        });
    });
}
