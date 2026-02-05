# Image Optimization Script
# Optimizes PNG/JPG images to WebP format at 85% quality

$baseDir = Get-Location

$imagePaths = @(
    "public\assets\images\home\ourVision\1.png",
    "public\assets\images\development\phase1\1.png",
    "public\assets\images\development\phase1\hero.png",
    "public\assets\images\home\management\hero.png",
    "public\assets\images\development\phase1\2.png",
    "public\assets\images\development\phase1\4.png",
    "public\assets\images\development\phase2\hero.png",
    "public\assets\images\news\09-30-25.png",
    "public\assets\images\development\phase1\3.png",
    "public\assets\images\news\10-08-25.png",
    "public\assets\images\news\09-15-25.jpg",
    "public\assets\images\news\09-19-25.png",
    "public\assets\images\news\08-11-25.jpg"
)

foreach ($path in $imagePaths) {
    $fullPath = Join-Path $baseDir $path
    if (Test-Path $fullPath) {
        $dir = Split-Path $fullPath
        $name = [System.IO.Path]::GetFileNameWithoutExtension($fullPath)
        $outputPath = Join-Path $dir "$name.webp"
        
        Write-Host "Optimizing: $path" -ForegroundColor Cyan
        & sharp -i "$fullPath" -o "$outputPath" -f webp -q 85
        
        # Show size comparison
        if (Test-Path $outputPath) {
            $originalSize = [math]::Round((Get-Item $fullPath).Length/1MB, 2)
            $newSize = [math]::Round((Get-Item $outputPath).Length/1MB, 2)
            $savings = [math]::Round((1 - $newSize/$originalSize) * 100, 1)
            Write-Host "  SUCCESS: ${originalSize}MB -> ${newSize}MB (${savings}% smaller)" -ForegroundColor Green
        } else {
            Write-Host "  FAILED to create optimized version" -ForegroundColor Red
        }
    } else {
        Write-Host "  NOT FOUND: $path" -ForegroundColor Yellow
    }
}

Write-Host "`nOptimization complete!" -ForegroundColor Yellow
Write-Host "Next: Update code to use .webp instead of .png/.jpg" -ForegroundColor White
