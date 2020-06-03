const fs = require("fs");
const { getComponents, getName, getDesc, trim, getInputs } = require("./regex");

const sourceFileBasic = String(
   fs.readFileSync("./html-pages/basic-functions.html")
);
const sourceFileIntermediate = String(
   fs.readFileSync("./html-pages/intermediate-functions.html")
);
const sourceFileFunctional = String(
   fs.readFileSync("./html-pages/functional-functions.html")
);
const sourceFileAlgorithm = String(
   fs.readFileSync("./html-pages/algorithm-functions.html")
);

const componentsBasic = getComponents(sourceFileBasic);
const componentsIntermediate = getComponents(sourceFileIntermediate);
const componentsFunctional = getComponents(sourceFileFunctional);
const componentsAlgorithm = getComponents(sourceFileAlgorithm);

const componentObjsBasic = componentsBasic.reverse().map((component, index) => {
   return {
      name: getName(component)[0],
      desc: trim(getDesc(component)[0]),
      inputs: getInputs(component).length,
      type: "basic", // String
      typeNum: 100, // designated for basic.html
      isFavorite: false, // default is false
      order: 100 + index,
   };
});

const componentObjsIntermediate = componentsIntermediate
   .reverse()
   .map((component, index) => {
      return {
         name: getName(component)[0],
         desc: trim(getDesc(component)[0]),
         inputs: getInputs(component).length,
         type: "intermediate", // String
         typeNum: 200, // designated for intermediate.html
         isFavorite: false, // default is false
         order: 200 + index,
      };
   });

const componentObjsFunctional = componentsFunctional
   .reverse()
   .map((component, index) => {
      return {
         name: getName(component)[0],
         desc: trim(getDesc(component)[0]),
         inputs: getInputs(component).length,
         type: "functional", // String
         typeNum: 300, // designated for functional.html
         isFavorite: false, // default is false
         order: 300 + index,
      };
   });

const componentObjsAlgorithm = componentsAlgorithm
   .reverse()
   .map((component, index) => {
      return {
         name: getName(component)[0],
         desc: trim(getDesc(component)[0]),
         inputs: getInputs(component).length,
         type: "algorithm", // String
         typeNum: 400, // designated for algorithm.html
         isFavorite: false, // default is false
         order: 400 + index,
      };
   });

// const reversedObjs = componentObjsBasic.reverse();

// const orderedObjs = [];
// for (let i = 0; i < reversedObjs.length; i++) {
//    const obj = reversedObjs[i];
//    obj.order = obj.typeNum + i;
//    orderedObjs.push(obj);
// }

var orderedObjs = componentObjsBasic.concat(
   componentObjsIntermediate,
   componentObjsFunctional,
   componentObjsAlgorithm
);

console.log(orderedObjs);

const targetFile = "./json-files/basic.json";

fs.writeFileSync(targetFile, JSON.stringify(orderedObjs));
