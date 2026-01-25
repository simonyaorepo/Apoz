#!/usr/bin/env node

/**
 * Translation Validation Script
 * 
 * Checks for:
 * 1. JSON syntax errors
 * 2. Missing keys between EN and ZH
 * 3. Placeholder markers like "TODO:", "[TRANSLATE]"
 * 4. Empty string values
 * 
 * Usage:
 *   node scripts/validate-translations.js [namespace]
 * 
 * Examples:
 *   node scripts/validate-translations.js              # Check all namespaces
 *   node scripts/validate-translations.js services     # Check only services
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const targetNamespace = args[0];

const namespaces = ['common', 'home', 'services', 'masterPlan', 'development', 'investment', 'news', 'leadership'];
const namespacesToCheck = targetNamespace 
  ? (namespaces.includes(targetNamespace) ? [targetNamespace] : [])
  : namespaces;

if (targetNamespace && namespacesToCheck.length === 0) {
  console.error(`❌ Invalid namespace: "${targetNamespace}"`);
  console.log(`Valid namespaces: ${namespaces.join(', ')}`);
  process.exit(1);
}

let hasErrors = false;
let hasWarnings = false;

/**
 * Recursively get all keys from nested object
 */
function getAllKeys(obj, prefix = '') {
  let keys = [];
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys = keys.concat(getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  return keys;
}

/**
 * Get nested value from object using dot notation
 */
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Validate a single namespace
 */
function validateNamespace(namespace) {
  const enPath = path.join(__dirname, '..', 'public', 'locales', 'en', `${namespace}.json`);
  const zhPath = path.join(__dirname, '..', 'public', 'locales', 'zh', `${namespace}.json`);
  
  console.log(`\n📋 Validating: ${namespace}`);
  console.log('─'.repeat(50));
  
  // Check file existence
  if (!fs.existsSync(enPath)) {
    console.error(`  ❌ EN file not found: ${enPath}`);
    hasErrors = true;
    return;
  }
  if (!fs.existsSync(zhPath)) {
    console.error(`  ❌ ZH file not found: ${zhPath}`);
    hasErrors = true;
    return;
  }
  
  // Parse JSON files
  let enData, zhData;
  try {
    enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    console.log('  ✅ EN: Valid JSON');
  } catch (error) {
    console.error(`  ❌ EN: JSON parse error - ${error.message}`);
    hasErrors = true;
    return;
  }
  
  try {
    zhData = JSON.parse(fs.readFileSync(zhPath, 'utf8'));
    console.log('  ✅ ZH: Valid JSON');
  } catch (error) {
    console.error(`  ❌ ZH: JSON parse error - ${error.message}`);
    hasErrors = true;
    return;
  }
  
  // Get all keys from both files
  const enKeys = getAllKeys(enData);
  const zhKeys = getAllKeys(zhData);
  
  // Find missing keys
  const missingInZh = enKeys.filter(key => !zhKeys.includes(key));
  const missingInEn = zhKeys.filter(key => !enKeys.includes(key));
  
  if (missingInZh.length > 0) {
    console.warn(`  ⚠️  ${missingInZh.length} key(s) in EN but missing in ZH:`);
    missingInZh.forEach(key => console.warn(`     - ${key}`));
    hasWarnings = true;
  }
  
  if (missingInEn.length > 0) {
    console.warn(`  ⚠️  ${missingInEn.length} key(s) in ZH but missing in EN:`);
    missingInEn.forEach(key => console.warn(`     - ${key}`));
    hasWarnings = true;
  }
  
  if (missingInZh.length === 0 && missingInEn.length === 0) {
    console.log(`  ✅ Key parity: ${enKeys.length} keys in both EN and ZH`);
  }
  
  // Check for placeholder markers
  const placeholders = ['TODO:', '[TRANSLATE]', 'FIXME:', 'XXX', '待翻译'];
  let foundPlaceholders = [];
  
  enKeys.forEach(key => {
    const value = getNestedValue(enData, key);
    if (typeof value === 'string') {
      const hasPlaceholder = placeholders.some(p => value.includes(p));
      if (hasPlaceholder) {
        foundPlaceholders.push({ key, lang: 'EN', value });
      }
      if (value.trim() === '') {
        foundPlaceholders.push({ key, lang: 'EN', value: '(empty string)' });
      }
    }
  });
  
  zhKeys.forEach(key => {
    const value = getNestedValue(zhData, key);
    if (typeof value === 'string') {
      const hasPlaceholder = placeholders.some(p => value.includes(p));
      if (hasPlaceholder) {
        foundPlaceholders.push({ key, lang: 'ZH', value });
      }
      if (value.trim() === '') {
        foundPlaceholders.push({ key, lang: 'ZH', value: '(empty string)' });
      }
    }
  });
  
  if (foundPlaceholders.length > 0) {
    console.warn(`  ⚠️  Found ${foundPlaceholders.length} placeholder(s) or empty value(s):`);
    foundPlaceholders.forEach(({ key, lang, value }) => {
      console.warn(`     - [${lang}] ${key}: "${value}"`);
    });
    hasWarnings = true;
  } else {
    console.log('  ✅ No placeholders or empty values found');
  }
}

// Main execution
console.log('🔍 Translation Validation Report');
console.log('='.repeat(50));

if (targetNamespace) {
  console.log(`Checking: ${targetNamespace} only`);
} else {
  console.log('Checking: All namespaces');
}

namespacesToCheck.forEach(validateNamespace);

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 Summary');
console.log('='.repeat(50));

if (!hasErrors && !hasWarnings) {
  console.log('✅ All validations passed!');
  console.log('   All JSON files are valid and keys are synchronized.');
} else {
  if (hasErrors) {
    console.log('❌ Found critical errors - please fix JSON syntax issues');
  }
  if (hasWarnings) {
    console.log('⚠️  Found warnings - check missing keys or placeholders');
  }
}

console.log('');

process.exit(hasErrors ? 1 : 0);
