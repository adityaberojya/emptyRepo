// var inputfile = 'input.yaml',
var inputfile = 'https://github.com/adityaberojya/backstage-demo-2/blob/master/packages/catalog-model/examples/apis/swapi-graphql.yaml',
    outputfile = 'output.json',
    yaml = require('js-yaml'),
    fs = require('fs')
    // obj = yaml.load(fs.readFileSync({file:inputfile}, {encoding: 'utf-8'}));
//     fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
//     console.log(typeof(obj))

    var rawYaml = fs.readFileSync('input.yaml')
    var yamlfile = yaml.load(rawYaml)

    // console.log(rawYaml)
    console.log(yamlfile.description)

    // let obj11 = {
    //     name:"Adi",
    //     age: 30,
    //     location1: "Khm"
    // }

    // obj11.age+=2;

    // console.log(obj11)
    
    // let str11 = JSON.stringify(obj11)
    // console.log(str11)
    // for (let index = 0; index < yamlfile.length; index++) {
    //     // const element = array[index];
    //     console.log(index, " ",str11[index])
        
    // }









// var answers = JSON.parse('output.json')
// console.log(answers)

// import data from './output.json' assert { type: 'json' }

// let tmp1 = data.description.is_a;

// if(typeof(tmp1)==='string')
// console.log(typeof(tmp1))
// console.log(tmp1[0])
// console.log(tmp1[1])
// console.log(tmp1[2])
// console.log(tmp1[3])
// console.log(tmp1[4])
// console.log(tmp1[6])
// console.log(tmp1[7])
// console.log(tmp1[8])
// console.log(tmp1[9])
// console.log(tmp1[10])
// console.log(tmp1[11])
// console.log(tmp1[12])
// console.log(tmp1[13])
// console.log(tmp1[14])
// console.log(data.hasOwnProperty('description'));



