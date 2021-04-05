const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');

var pathPrefix = process.argv.slice(2)[0];

// find the styles css file
const files = getAllFiles(`./${pathPrefix}/`, '.css');
let data = [];

if (!files && files.length <= 0) {
  console.log('cannot find style files to purge');
  return;
}

for (let f of files) {
  // get original file size
  const originalSize = getFilesizeInKiloBytes(f) + 'kb';
  var o = { file: f, originalSize: originalSize, newSize: '' };
  data.push(o);
}

console.log('Run PurgeCSS...');

let cmd = [];

for (let d of data) {
  cmd.push(
    `purgecss -css ${d.file} --content ${pathPrefix}/index.html ${pathPrefix}/*.js -o ${d.file}`
  );
}

cmd = cmd.join(' & ');

// console.log(cmd);

exec(cmd, function (error, stdout, stderr) {
  console.log('PurgeCSS done');
  console.log();

  for (let d of data) {
    // get new file size
    const newSize = getFilesizeInKiloBytes(d.file) + 'kb';
    d.newSize = newSize;
  }
  console.table(data);
});

function getFilesizeInKiloBytes(filename) {
  var stats = fs.statSync(filename);
  var fileSizeInBytes = stats.size / 1024;
  return fileSizeInBytes.toFixed(2);
}

function getAllFiles(dir, extension, arrayOfFiles) {
  const files = fs.readdirSync(dir);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dir + '/' + file, extension, arrayOfFiles);
    } else {
      if (file.endsWith(extension)) {
        arrayOfFiles.push(path.join(dir, '/', file));
      }
    }
  });

  return arrayOfFiles;
}
