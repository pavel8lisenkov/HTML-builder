const fs = require('fs');
const path = require('path');
const process = require('process');

let writableStream = fs.createWriteStream(`${path.join(__dirname, 'text.txt')}`);

console.log('Введите текст:');

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(chunk) {
  if (chunk.toString().trim() === 'exit') {
    console.log('Ввод текста завершен');
    process.exit();
  }
  writableStream.write(chunk);
})

process.on('SIGINT', () => {
  console.log('Ввод текста завершен');
  process.exit();
})