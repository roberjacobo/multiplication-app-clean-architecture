import fs from 'fs';


let outputMessage: string = '';
const base: number = 9;
const headerMessage: string= `
======================================
          Tabla del ${base}
======================================\n
`;

for (let i = 0; i <= 10; i++) {
    outputMessage += `${base} * ${i} = ${base*i}\n`
}

outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

console.log('File created!');