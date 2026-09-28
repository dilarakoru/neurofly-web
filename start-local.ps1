Set-Location -LiteralPath $PSScriptRoot
if (Test-Path -LiteralPath 'dist/index.html') { python -m http.server 8003 --bind 127.0.0.1 --directory dist } else { npm run dev }
