# Translation Management Scripts

Helper scripts to streamline adding and validating translations for the APOZ bilingual website.

## Quick Start

### Add a new translation key

```bash
npm run translate:add <namespace> <key> "<english>" "<chinese>"
```

**Example:**
```bash
npm run translate:add services hero.subtitle "Premium Services" "优质服务"
```

This adds the key to both:
- `public/locales/en/services.json`
- `public/locales/zh/services.json`

### Validate all translations

```bash
npm run translate:validate
```

This checks:
- ✅ JSON syntax validity
- ✅ Key parity between EN and ZH
- ⚠️ Placeholder markers (TODO:, [TRANSLATE], etc.)
- ⚠️ Empty string values

### Validate specific namespace

```bash
npm run translate:validate services
```

## Available Namespaces

- `common` - Shared UI text, navigation, footer
- `home` - Home page content
- `services` - Services page
- `masterPlan` - Master Plan page
- `development` - Development page
- `investment` - Investment page
- `news` - News/Articles page
- `leadership` - Leadership section

## Usage Examples

### Adding simple text

```bash
npm run translate:add home welcome.message "Welcome to APOZ" "欢迎来到APOZ"
```

### Adding nested keys

```bash
npm run translate:add investment phase1.timeline.step1 "Site Preparation" "场地准备"
```

### Adding table headers

```bash
npm run translate:add masterPlan ftz.customs_header "Customs Benefits" "海关优惠"
```

## Workflow Tips

### Before adding new content:

1. **Plan your key structure** - Use nested keys for related content
   ```
   section.subsection.item_title
   section.subsection.item_description
   ```

2. **Follow naming conventions:**
   - Use lowercase and underscores: `target_partners`, `key_offerings`
   - Use suffixes for clarity: `_title`, `_description`, `_label`, `_header`
   - Group related content: `phase1.timeline1_milestone`, `phase1.timeline2_milestone`

3. **Add keys immediately** - Don't hardcode English first, use the script right away

### After adding translations:

1. **Validate before committing:**
   ```bash
   npm run translate:validate
   ```

2. **Test in browser:**
   - Hard refresh: `Ctrl+Shift+R` (clears cache)
   - Switch between EN/ZH to verify both languages

3. **Check for missing translations:**
   - The validation script will show keys present in one language but not the other

## Common Issues

### "Key already exists"
The key is already in the JSON file. Check if you need to update it manually or use a different key name.

### "Invalid namespace"
Check spelling - namespaces are case-sensitive: `masterPlan` not `masterplan`

### JSON Syntax Errors
- Avoid smart quotes: use `"` not `"` or `"`
- Escape special characters properly
- Check for trailing commas

### Browser not showing new translations
Hard refresh with `Ctrl+Shift+R` to clear the cache

## Manual Editing

You can still edit JSON files directly when needed:
- Complex multi-line text
- Bulk updates
- Restructuring nested keys

After manual edits, always run:
```bash
npm run translate:validate
```

## File Structure

```
public/locales/
  en/
    common.json
    home.json
    services.json
    masterPlan.json
    development.json
    investment.json
    news.json
    leadership.json
  zh/
    (same files with Chinese translations)
```

## Best Practices

1. **Always add to BOTH languages** - Use the script to maintain parity
2. **Validate frequently** - Catch issues early
3. **Use descriptive keys** - `hero.title` not `ht` or `title1`
4. **Group logically** - Keep related translations together
5. **Test immediately** - Verify in browser after adding

## Troubleshooting

### Script won't run
Make sure you're in the project root directory (`c:\Users\simon\Apoz`)

### Chinese characters showing as `?`
Make sure your terminal supports UTF-8. The JSON files are saved correctly even if the terminal display looks wrong.

### Validation shows missing keys
The script found keys in one language file but not the other. Add the missing translations manually or with the add-translation script.

---

**Remember:** These scripts are helpers - your `public/locales/{en,zh}/*.json` files are the source of truth that the website uses at runtime!
