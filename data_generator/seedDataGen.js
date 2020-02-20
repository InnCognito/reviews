const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { Logfile } = require('./Logfile');
const { genReviewObject } = require('./reviewGen');

const formatCsv = (obj) => {
    let result = Object.values(obj);
    for (let i = 0; i < result.length; i++) {
        result[i] = typeof result[i] !== 'string' 
            ? result[i]
            : `"${result[i].replace(/"/g, "'").replace(/\n/g, '\\n')}"`;  
    }
    return result.join(',');
};

const genReviewToFile = (entryCount = 0) => {
    const currentDevStep = `
    testing successful streaming without killing my ram
    using appendfilesync
    using writing cache
    size 5000

    for db insertion test
    with fix for handling new cache appending after new lines

    utilizing updated datashape, representing ratings as integers
    `;

    const outFile = path.resolve(__dirname, '..', 'database', 'seedData.csv');

    let logMessage = `Initial output for ${entryCount} results,
${currentDevStep}`;
    const log = new Logfile(logMessage, 'dataGen');

    const pctStep = 5;
    const hardStep = Math.floor(entryCount / (100 / pctStep));
    let pctCounter = 0;

    let writeCache = [];
    const cacheSize = 5000;

    fs.writeFileSync(outFile, '');
    for (let i = 0; i < entryCount; i++) {
        writeCache.push(formatCsv(genReviewObject()));
        if (i !== 0 && i % cacheSize === 0 || i === entryCount - 1) {
            const output = i <= cacheSize
                ? writeCache.join('\n')
                : '\n' + writeCache.join('\n');
            fs.appendFileSync(outFile, output);
            writeCache = [];
        }
        if (i % hardStep === 0) {
            pctCounter += pctStep;
            console.log('Current Progress: ', pctCounter, '%, of', entryCount);
        }
    }

    log.end();
};

module.exports = { genReviewToFile };

genReviewToFile(30000000);
