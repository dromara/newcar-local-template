const fs = require('fs');
const path = require('path');

const filePath = path.resolve('./main.mjs');
const savefilePath = path.resolve('./preview/index.js');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const replacedData = data
    .replace(/engine\.createLocalApp\(([^,]+), ([^,]+)\)/g, 'engine.createApp(document.querySelector("#canvas"));')
    .replace(/export default app/g, 'app.play();');

  fs.writeFile(savefilePath, replacedData, 'utf8', (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('文件已成功更新！');
    }
  });
});
