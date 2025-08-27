const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "dist");
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, "output.txt"), "Build réussi !");
console.log("Fichier dist/output.txt généré !");