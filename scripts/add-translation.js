#!/usr/bin/env node

/**
 * Translation Key Addition Helper
 * 
 * Usage:
 *   node scripts/add-translation.js <namespace> <key> "<english_text>" "<chinese_text>"
 * 
 * Example:
 *   node scripts/add-translation.js services new_section.title "Our Services" "我们的服务"
 * 
 * This will add the key to both:
 *   - public/locales/en/services.json
 *   - public/locales/zh/services.json
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length < 4) {
  console.error('❌ Missing required arguments\n');
  console.log('Usage: node scripts/add-translation.js <namespace> <key> "<english>" "<chinese>"\n');
  console.log('Example:');
  console.log('  node scripts/add-translation.js services hero.subtitle "Welcome" "欢迎"\n');
  console.log('Namespaces: common, home, services, masterPlan, development, investment, news, leadership');
  process.exit(1);
}

const [namespace, keyPath, englishText, chineseText] = args;

// Validate namespace
const validNamespaces = ['common', 'home', 'services', 'masterPlan', 'development', 'investment', 'news', 'leadership'];
if (!validNamespaces.includes(namespace)) {
  console.error(`❌ Invalid namespace: "${namespace}"`);
  console.log(`Valid namespaces: ${validNamespaces.join(', ')}`);
  process.exit(1);
}

// File paths
const enPath = path.join(__dirname, '..', 'public', 'locales', 'en', `${namespace}.json`);
const zhPath = path.join(__dirname, '..', 'public', 'locales', 'zh', `${namespace}.json`);

// Check if files exist
if (!fs.existsSync(enPath)) {
  console.error(`❌ English file not found: ${enPath}`);
  process.exit(1);
}
if (!fs.existsSync(zhPath)) {
  console.error(`❌ Chinese file not found: ${zhPath}`);
  process.exit(1);
}

/**
 * Set a nested property in an object using dot notation
 */
function setNestedProperty(obj, path, value) {
  const keys = path.split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {};
    }
    current = current[key];
  }
  
  const finalKey = keys[keys.length - 1];
  
  // Check if key already exists
  if (current[finalKey] !== undefined) {
    console.warn(`⚠️  Key "${keyPath}" already exists in ${namespace}.json`);
    return false;
  }
  
  current[finalKey] = value;
  return true;
}

/**
 * Add translation to both EN and ZH files
 */
function addTranslation() {
  try {
    // Read and parse both files
    const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
    
    // Add to English file
    const enAdded = setNestedProperty(enData, keyPath, englishText);
    
    // Add to Chinese file
    const zhAdded = setNestedProperty(zhData, keyPath, chineseText);
    
    if (!enAdded || !zhAdded) {
      console.log('Skipping - key already exists in one or both files');
      return;
    }
    
    // Write back with pretty formatting
    fs.writeFileSync(enPath, JSON.stringify(enData, null, 2) + '\n', 'utf8');
    fs.writeFileSync(zhPath, JSON.stringify(zhData, null, 2) + '\n', 'utf8');
    
    console.log('✅ Translation added successfully!\n');
    console.log(`Namespace: ${namespace}`);
    console.log(`Key: ${keyPath}`);
    console.log(`EN: ${englishText}`);
    console.log(`ZH: ${chineseText}\n`);
    console.log('Files updated:');
    console.log(`  - ${enPath}`);
    console.log(`  - ${zhPath}\n`);
    console.log('💡 Remember to hard refresh (Ctrl+Shift+R) in browser to see changes!');
    
  } catch (error) {
    console.error('❌ Error adding translation:', error.message);
    process.exit(1);
  }
}

// Run the script
addTranslation();
