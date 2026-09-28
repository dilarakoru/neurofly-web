"""Windows fallback: invoke the already-installed esbuild binary directly."""
from pathlib import Path
import subprocess
import shutil
root=Path(__file__).resolve().parents[1]
binary=root/'node_modules/@esbuild/win32-x64/esbuild.exe'
if not binary.exists():raise SystemExit('Run npm ci first. This fallback targets Windows x64.')
out=root/'dist';(out/'assets').mkdir(parents=True,exist_ok=True)
subprocess.run([str(binary),str(root/'src/main.jsx'),'--bundle','--format=esm','--minify','--jsx=automatic','--define:import.meta.env.BASE_URL="./"','--define:process.env.NODE_ENV="production"','--outfile='+str(out/'assets/app.js'),'--loader:.svg=dataurl'],cwd=root,check=True)
html=(root/'index.html').read_text(encoding='utf-8').replace('<script type="module" src="/src/main.jsx"></script>','<script type="module" src="./assets/app.js"></script><link rel="stylesheet" href="./assets/app.css">')
(out/'index.html').write_text(html,encoding='utf-8')
shutil.copytree(root/'public',out,dirs_exist_ok=True)
print('Built standalone site:',out)
