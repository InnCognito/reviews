const fs = require('fs');

class Logfile {
  constructor(description = '', filename = 'out') {
    this.logStart = Date.now();
    this.description = description;
    this.filename = filename;
  }

  end() {
    this.logEnd = Date.now();
    const logDelta = this.logEnd - this.logStart < 10000
      ? `${this.logEnd - this.logStart}ms`
      : `${(this.logEnd - this.logStart) / 1000}s`;

    // format log output
    const logBody = `Log Start: ${this.logStart},
Log End: ${this.logEnd},
Log Delta: ${logDelta}
Description: ${this.description}
`;

    const logFilename = `${this.filename}_${this.logStart.toString().slice(3)}.log`;

    fs.writeFile(`./${logFilename}`, logBody, () => console.log(`Logfile Created: ${logFilename}`));
  }
}

module.exports = { Logfile };
