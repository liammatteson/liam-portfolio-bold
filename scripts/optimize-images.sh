#!/bin/bash

# Create optimized directory if it doesn't exist
mkdir -p public/images/optimized

# Optimize About.jpg
cp public/images/About.jpg public/images/optimized/About.jpg
sips -s format jpeg -s formatOptions 80 public/images/optimized/About.jpg --out public/images/optimized/About.jpg

# Optimize Handwave.jpg
cp public/images/Handwave.jpg public/images/optimized/Handwave.jpg
sips -s format jpeg -s formatOptions 80 public/images/optimized/Handwave.jpg --out public/images/optimized/Handwave.jpg

# Optimize Now.jpeg
cp public/images/Now.jpeg public/images/optimized/Now.jpeg
sips -s format jpeg -s formatOptions 80 public/images/optimized/Now.jpeg --out public/images/optimized/Now.jpeg
