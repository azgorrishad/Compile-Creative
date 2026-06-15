const fs = require('fs');
const path = require('path');

function resetFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<truncated')) {
      let replacement = '';
      if (filePath.endsWith('.css')) {
        replacement = '@import "tailwindcss";';
      } else if (filePath.includes('layout.tsx')) {
        replacement = `export default function Layout({ children }: { children: React.ReactNode }) { return (<html><body>{children}</body></html>); }`;
      } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        replacement = `export default function Component() { return <div>Placeholder</div>; }`;
      }
      fs.writeFileSync(filePath, replacement, 'utf8');
      console.log('Reset', filePath);
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
    if (stat.isDirectory()) {
      if (!filePath.includes('node_modules') && !filePath.includes('.next')) walk(filePath);
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
        resetFile(filePath);
      }
    }
  }
}

walk('D:/Compile Creative\'s OS/src');
console.log('Done resetting files.');
