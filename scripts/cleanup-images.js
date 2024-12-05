const fs = require('fs');
const path = require('path');

const imagesDir = path.join(process.cwd(), 'public', 'images');

try {
  const files = fs.readdirSync(imagesDir);
  
  files.forEach(file => {
    if (file !== 'cash flow.jpg') {
      fs.unlinkSync(path.join(imagesDir, file));
    }
  });
  
  console.log('Successfully cleaned up images directory');
} catch (error) {
  console.error('Error cleaning up images:', error);
}