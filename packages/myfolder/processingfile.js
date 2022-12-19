var inputfile = 'input.yml'
var outputfile = 'output.json'
import { load } from 'js-yaml';
import { readFileSync, writeFileSync } from 'fs';
var obj = load(readFileSync(inputfile, {encoding: 'utf-8'}));

console.log(obj)
    // export default obj;

// this code if you want to save
console.log("here")
writeFileSync(outputfile, JSON.stringify(obj, null, 2));
console.log("there")


