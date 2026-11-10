import fs from "node:fs";
const prettier = await import("file:///D:/qax/reagent/dev/git/Syntropy/desktop_app/node_modules/prettier/index.mjs");
const [inFile,outFile] = process.argv.slice(2);
const src = fs.readFileSync(inFile,"utf8");
const out = await prettier.format(src,{parser:"babel",printWidth:120,semi:false,filepath:"x.js"});
fs.writeFileSync(outFile,out);
console.log("formatted",(out.length/1024).toFixed(0)+"KB");
