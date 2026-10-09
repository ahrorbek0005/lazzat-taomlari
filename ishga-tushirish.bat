@echo off
title Lazzat - 54 ta Retsept va Haqiqiy Gemini AI Portali
echo ========================================================
echo   Lazzat - 54 ta Retsept va Haqiqiy Gemini AI Portali
echo   346+ Masalliqlar, Gemini Vision va Sehrli Oshxona
echo ========================================================
echo.
echo Brauzer ochilmoqda: http://localhost:5173
start http://localhost:5173
echo Mahalliy server ishlamoqda...
echo Dasturni to'xtatish uchun: Ctrl + C bosing.
echo.
python -m http.server 5173
pause
