echo off
color 0a
:COPY
xcopy "../AdventureGame" "D:/Programs/XAMPP/htdocs/AdventureGame" /E /F /Y /K
timeout 5
goto COPY