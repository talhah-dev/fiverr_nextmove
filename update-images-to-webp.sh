#!/bin/bash

# Image Update Script for WebP Optimization
# Updates all image references in components to use WebP versions

set -e

PROJECT_DIR="/Users/siaralizadah/haconcepts"
PUBLIC_DIR="/Users/siaralizadah/haconcepts/public"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to check if WebP version exists
webp_exists() {
    local original="$1"
    local webp_file="${original%.*}.webp"
    
    if [[ -f "$PUBLIC_DIR/$webp_file" ]]; then
        return 0
    else
        return 1
    fi
}

# Function to update file with WebP references
update_file_images() {
    local file="$1"
    local changes=0
    
    echo -e "${BLUE}🔍 Processing: $file${NC}"
    
    # Create temporary file
    temp_file="${file}.tmp"
    
    # Process each line, replacing image extensions with WebP where available
    while IFS= read -r line; do
        # Find image references in the line
        if [[ "$line" =~ (src|image|avatar|imgUrl|backgroundImage).*(/[^/]*\.(png|jpg|jpeg)) ]]; then
            original_path="${BASH_REMATCH[2]}"
            filename=$(basename "$original_path")
            webp_filename="${filename%.*}.webp"
            
            if webp_exists "$filename"; then
                # Replace with WebP version
                new_line="${line//$filename/$webp_filename}"
                echo "$new_line" >> "$temp_file"
                echo -e "  ${GREEN}✅ Updated: $filename → $webp_filename${NC}"
                ((changes++))
            else
                # Keep original if no WebP exists
                echo "$line" >> "$temp_file"
                echo -e "  ${YELLOW}⏭️  Kept original: $filename (no WebP)${NC}"
            fi
        else
            # Line without image references
            echo "$line" >> "$temp_file"
        fi
    done < "$file"
    
    # Replace original file if changes were made
    if [[ $changes -gt 0 ]]; then
        mv "$temp_file" "$file"
        echo -e "  ${GREEN}✅ Updated $changes image references${NC}"
    else
        rm "$temp_file"
        echo -e "  ${BLUE}ℹ️  No changes needed${NC}"
    fi
}

# Main processing function
main() {
    echo -e "${GREEN}🔄 Updating image references to WebP...${NC}"
    
    # Files to process
    files=(
        "/Users/siaralizadah/haconcepts/components/Header.tsx"
        "/Users/siaralizadah/haconcepts/components/Footer.tsx"
        "/Users/siaralizadah/haconcepts/components/Hero.tsx"
        "/Users/siaralizadah/haconcepts/components/ui/NextMoveSolution.tsx"
        "/Users/siaralizadah/haconcepts/components/ui/moving-cards.tsx"
        "/Users/siaralizadah/haconcepts/components/ui/carousel.tsx"
        "/Users/siaralizadah/haconcepts/components/unsere-loesung/flip-websites.tsx"
        "/Users/siaralizadah/haconcepts/components/Team.tsx"
        "/Users/siaralizadah/haconcepts/components/CaseStudySection.tsx"
        "/Users/siaralizadah/haconcepts/components/warum-wir/ExpertiseHero.tsx"
        "/Users/siaralizadah/haconcepts/components/warum-wir/TeamExpertise.tsx"
        "/Users/siaralizadah/haconcepts/components/SocialProof.tsx"
        "/Users/siaralizadah/haconcepts/components/FailureReasons.tsx"
        "/Users/siaralizadah/haconcepts/components/WhyUs.tsx"
        "/Users/siaralizadah/haconcepts/components/Testimonials.tsx"
        "/Users/siaralizadah/haconcepts/components/Timeline.tsx"
        "/Users/siaralizadah/haconcepts/components/AdsDesign.tsx"
        "/Users/siaralizadah/haconcepts/components/WhatsAppChat.tsx"
        "/Users/siaralizadah/haconcepts/components/CTA.tsx"
        "/Users/siaralizadah/haconcepts/components/Solutions.tsx"
        "/Users/siaralizadah/haconcepts/components/MarqueeTech.tsx"
    )
    
    total_changes=0
    
    for file in "${files[@]}"; do
        if [[ -f "$file" ]]; then
            update_file_images "$file"
        else
            echo -e "${RED}❌ File not found: $file${NC}"
        fi
    done
    
    echo -e "${GREEN}✅ Image update complete!${NC}"
    echo -e "${YELLOW}💡 Check the updated files and test the application${NC}"
}

# Run main function
main "$@"
