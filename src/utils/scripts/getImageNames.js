import fs from 'fs';
import path from 'path';

// Define the project root directory
const projectRoot = 'D:/Proyectos/km-1clicktarkovmaps'; // Update this path to match your project's root directory

const imageFolderPath = path.join(projectRoot, 'public', 'icons'); // Path to your image folder
const outputFilePath = path.join(projectRoot, 'src', 'imageList.json'); // Output file path

// Read the contents of the image folder
fs.readdir(imageFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading image folder:', err);
  } else {
    // Filter out non-image files (e.g., directories)
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    
    // Write the list of image filenames to a JavaScript file
    const jsContent = JSON.stringify(imageFiles, null, 2);
    fs.writeFile(outputFilePath, jsContent, err => {
      if (err) {
        console.error('Error writing image list file:', err);
      } else {
        console.log('Image list file generated successfully!');
      }
    });
  }
});
