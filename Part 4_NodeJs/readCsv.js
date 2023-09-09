const mongoose = require('mongoose');
const lodashAssign = require('lodash/assign');
const fs = require('fs');
const { parse } = require('csv-parse');
let firstRow = true;
let firstRowArr = [];

mongoose.connect('mongodb://127.0.0.1:27017/fastCoDB');

const csvSchema = new mongoose.Schema({}, { strict: false });
const Csv = mongoose.model('Csv', csvSchema);

const csvObjMapper = (header, data) => {
  let obj = {};
  for (let i = 0; i < header.length; i++) {
    lodashAssign(obj, { [header[i]]: data[i] ?? undefined });
  }
  return obj;
};

fs.createReadStream('./csv/test2.csv')
  .pipe(parse({ delimiter: ',', from_line: 1 }))
  .on('data', function (row) {
    if (firstRow) {
      firstRowArr = [...row];
      firstRow = false;
    } else {
      const csvObj = csvObjMapper(firstRowArr, row);
      const csv = new Csv(csvObj);
      Csv.create(csv);
    }
  })
  .on('end', function () {
    console.log('finished');
  })
  .on('error', function (error) {
    console.log(error.message);
  });
