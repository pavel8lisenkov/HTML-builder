const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, function(err, files) {
  console.log('');
  if (err)
    console.log(err);
  else {
    files.forEach(function(file) {
      if (file.isFile()) {
        const filePath = path.join(__dirname, file.name);
        let fileName = path.parse(file.name).name;
        let fileType = path.extname(filePath).slice(1);

        fs.stat(path.join(__dirname, 'secret-folder', file.name), function(err, stats) {
          if (err) {
            console.log(err);
          } else {
            let fileSize = stats.size + 'b';

            console.log(`${fileName} - ${fileType} - ${fileSize}`);
          }
        })
      }
    })
  }
})