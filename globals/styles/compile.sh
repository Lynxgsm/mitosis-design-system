#!/bin/bash
for file in components/*.scss; do
  filename=$(basename "$file" .scss)
  sass "${file}" "dist/${filename}.css" --style compressed
done