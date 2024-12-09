const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all image files
const imageFiles = fs.readdirSync(inputDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

async function optimizeImage(file) {
  const inputPath = path.join(inputDir, file);
  const outputPath = path.join(outputDir, file);
  
  try {
    await sharp(inputPath)
      .resize(1792, null, { // 2x the display width for retina
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: 82,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    console.log(`✅ Optimized: ${file}`);
    
    // Get file sizes
    const inputSize = fs.statSync(inputPath).size;
    const outputSize = fs.statSync(outputPath).size;
    const savings = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
    
    console.log(`   Original: ${(inputSize / 1024).toFixed(1)}KB`);
    console.log(`   Optimized: ${(outputSize / 1024).toFixed(1)}KB`);
    console.log(`   Saved: ${savings}%\n`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${file}:`, error);
  }
}

async function optimizeAll() {
  console.log('🎨 Starting image optimization...\n');
  
  for (const file of imageFiles) {
    await optimizeImage(file);
  }
  
  console.log('✨ Image optimization complete!');
}

optimizeAll();
