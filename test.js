const myArray = []
%DebugPrint(myArray);

// continuous,HoleyArry
const arrTwo = [1,2,,4,5]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS

// bound check
// holes are very expense;

const arrThree = [1,2,3,4,5];
console.log(arrThree[2]);
// SMI > Double >PACKED_ELEMENTS > HOLEY_ELEMENTS

// H_SMI >H_DOUBLE > H_PACKED

const arrFour = new Array(3)

// just three holes,HOLEY_SMI_ELEMENTS
arrFour[0] = '1'; // HOLEY ELEMNENTS
arrFour[1] = '2'; // HOLEY ELEMNENTS
arrFour[2] = '3'; // HOLEY ELEMNENTS

const arrfive = []
arrfive.push['1'] // PACKED_ELEMENTS
arrfive.push['2'] //PACKED_ELEMENTS

const arrSix = [1,2,3,4,5]

arrSix.push(Infinity)