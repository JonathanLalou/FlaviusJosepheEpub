#!/usr/bin/env bash
rm -rf *.epub
cd src
zip -ll -r ../La_Guerre_des_Judeens-Flavius_Josephe-FR-GR-2019-`date +%Y%m%d-%H%M`.epub .
cd ..