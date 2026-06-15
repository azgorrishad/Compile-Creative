const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // If it looks like a doubly-stringified JSON string
    if (content.startsWith('"') && content.endsWith('"')) {
       try {
         const parsed = JSON.parse(content);
         if (typeof parsed === 'string') {
           fs.writeFileSync(filePath, parsed, 'utf8');
           console.log('Fixed', filePath);
         }
       } catch(e) {
         console.log('Failed to parse', filePath, e.message);
       }
    }
  } catch (e) {
    console.error('Error reading', filePath, e.message);
  }
}

function walk(dir) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) {
        walk(filePath);
      }
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.mjs') || filePath.endsWith('.js')) {
        fixFile(filePath);
      }
    }
  }
}

walk('D:/Compile Creative\'s OS/src');
fixFile('D:/Compile Creative\'s OS/next-env.d.ts');
console.log('Done fixing');
