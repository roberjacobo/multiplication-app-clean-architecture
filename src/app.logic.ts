import fs from 'fs';
import { yarg } from "./config/plugins/args.plugin";

const { b:base, l:limit, s:showTable } = yarg;
let outputMessage: string = '';
const headerMessage: string = `
======================================
          Tabla del ${base}
======================================\n
`;

for (let i = 0; i <= limit; i++) {
    outputMessage += `${base} * ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if(showTable) {
    console.log(outputMessage);
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');