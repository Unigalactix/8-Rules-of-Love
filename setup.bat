@echo off
echo Installing dependencies for 8 Rules of Love website...

cd /d "C:\Users\kodag\Downloads\GITHUB\8-Rules-of-Love\love-rules-website"

echo.
echo Installing Node.js packages...
call npm install

echo.
echo Dependencies installed successfully!
echo.
echo To run the development server:
echo   npm run dev
echo.
echo To build for production:
echo   npm run build
echo.
echo The website will be available at http://localhost:3000
echo.
pause