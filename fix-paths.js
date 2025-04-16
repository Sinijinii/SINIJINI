// fix-paths.js
const fs = require('fs');
const path = require('path');

// HTML 파일에서 경로 수정
function processHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processHtmlFiles(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      content = content.replace(/\/_next\//g, './next/');
      fs.writeFileSync(filePath, content);
    }
  });
}

// _next 디렉토리를 next로 복사
function copyNextDirectory() {
  if (fs.existsSync('out/_next')) {
    fs.cpSync('out/_next', 'out/next', { recursive: true });
  }
}

processHtmlFiles('out');
copyNextDirectory();
console.log('Path fixing completed');