// Script to remove "image" fields from news translation files
// Image paths should be in newsMetadata.ts, not in translation files

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  path.join(__dirname, '../public/locales/en/news.json'),
  path.join(__dirname, '../public/locales/zh/news.json')
];

files.forEach(filePath => {
  console.log(`Processing: ${filePath}`);
  
  // Read the file
  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);
  
  // Remove image field from each article
  if (data.articles) {
    Object.keys(data.articles).forEach(articleId => {
      if (data.articles[articleId].image) {
        delete data.articles[articleId].image;
        console.log(`  Removed image from article ${articleId}`);
      }
    });
  }
  
  // Write back with proper formatting
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
  console.log(`✓ Updated ${filePath}\n`);
});

console.log('Done! All image fields removed from news translation files.');
