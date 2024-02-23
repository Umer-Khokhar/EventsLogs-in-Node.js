
// package for dates
const dates = require("date-fns")
// package for generating random uinque id
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPormise = require('fs').promises;
const path = require('path');

let dName = 'logs'

let fName = 'event.txt'

let myPath  = path.join(__dirname, dName)
let filePath = path.join(__dirname, dName, fName)

const logEvents = async (message) => {
  const datTime = `${dates.format(new Date(), "dd-MM-yyyy")}`
  const logItems = `${datTime}\t${uuid()}\t${message}\n`

  try {
    if (!fs.existsSync(myPath)) {
      await fsPormise.mkdir(myPath)
    }
    await fsPormise.appendFile(filePath, logItems)
  } catch (err) {
    console.error(err)
  }
}

module.exports = logEvents;