# multiplication-app-clean-architecture


command example:
    
    npx ts-node src/app.ts -b 9 -s true -l 20 -n tabla-9-20 -d outputs/table-9
    "dev": "npx ts-node src/app.ts" -> npm run dev -b 9 -s true -l 20 -n tabla-9-20 -d outputs/table-9

    Options:
      --help         Show help                                         [boolean]
      --version      Show version number                               [boolean]
    -b, --base         Multiplication table base               [number] [required]
    -l, --limit        Multiplication table limit           [number] [default: 10]
    -s, --show         Show multiplication table        [boolean] [default: false]
    -n, --name         File name        [string] [default: "multiplication-table"]
    -d, --destination  File destination              [string] [default: "outputs"]