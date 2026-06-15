const fs = require('fs');
const path = require('path');
function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else if (filePath.endsWith('.tsx')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('"framer-motion"')) {
         fs.writeFileSync(filePath, content.replace(/"framer-motion"/g, '"motion/react"'), 'utf8');
         console.log('Fixed', filePath);
      }
    }
  }
}
walk('D:/Compile Creative\'s OS/src');
