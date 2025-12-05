#!/bin/bash

# Cleanup script for optimized images
# Removes original files after optimization and keeps only optimized versions

set -e

PUBLIC_DIR="/Users/siaralizadah/haconcepts/public"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🧹 Starting cleanup...${NC}"

# Count files before cleanup
original_count=$(find "$PUBLIC_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | wc -l)
webp_count=$(find "$PUBLIC_DIR" -type f -iname "*.webp" | wc -l)
gif_count=$(find "$PUBLIC_DIR" -type f -iname "*-optimized.gif" | wc -l)

echo -e "${GREEN}📊 Found:${NC}"
echo "  $original_count original images"
echo "  $webp_count WebP images"
echo "  $gif_count optimized GIFs"

# Ask for confirmation
echo -e "${RED}⚠️  This will remove original PNG/JPG/JPEG files if WebP versions exist${NC}"
echo -e "${YELLOW}Continue? (y/N):${NC} "
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    # Remove original PNG/JPG files if WebP exists
    find "$PUBLIC_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*.webp" | while read -r original; do
        webp_file="${original%.*}.webp"
        if [[ -f "$webp_file" ]]; then
            echo "Removing: $(basename "$original") (WebP exists)"
            rm "$original"
        fi
    done
    
    # Replace optimized GIFs with originals
    find "$PUBLIC_DIR" -type f -iname "*-optimized.gif" | while read -r optimized; do
        original="${optimized%-optimized.gif}.gif"
        if [[ -f "$optimized" ]]; then
            echo "Replacing: $(basename "$original") with optimized version"
            mv "$optimized" "$original"
        fi
    done
    
    echo -e "${GREEN}✅ Cleanup complete!${NC}"
else
    echo -e "${YELLOW}❌ Cleanup cancelled${NC}"
fi
