#!/usr/bin/env bash
rm -rf *.epub
cd src
zipDate=`date +%Y%m%d-%H%M`
# -0: store without compression
# -X: don't add extra attributes (such as date)
# -r: recursive (useless on a single file)
zip -0 -X -r ../La_Guerre_des_Judeens-Flavius_Josephe-FR-GR-2019-$zipDate.epub mimetype
# -ll: convert LF to CR LF (-ll CR LF to LF)
#  -9: compress better
zip -9 -ll -r ../La_Guerre_des_Judeens-Flavius_Josephe-FR-GR-2019-$zipDate.epub META-INF OEBPS
cd ..