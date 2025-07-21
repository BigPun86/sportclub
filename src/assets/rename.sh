#!/bin/bash
# Usage: Run this script in the folder where your images are located.
# It will rename all files in the folder to <foldername>_0.<ext>, <foldername>_1.<ext>, ...

foldername=$(basename "$PWD")
count=0
shopt -s nullglob
for file in *.*; do
  # Skip the script itself
  [[ "$file" == "${0##*/}" ]] && continue
  ext="${file##*.}"
  mv -- "$file" "${foldername}_${count}.${ext}"
  ((count++))
done