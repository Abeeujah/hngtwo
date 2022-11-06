const {
    numpy
} = require('./worker');

// Function to Get Enum Type..
function getEnumType(words) {
    const lent = words.split(' ');
    let numType = Object.keys(numpy);
    let ans;
    console.log(numType);
    lent.forEach((word) => {
        switch (word) {
            case 'addition': case 'plus': case 'sum': case 'add': case 'summation': {
                ans = numType[0];
            }
                break;
            case 'subtraction': case 'subtract': case 'difference': case 'minus': {
                ans = numType[1];
            }
                break;
            case 'multiplication': case 'multiply': case 'poduct': case 'times': {
                ans = numType[2];
            }
                break;
        }
    });
    return (ans);
}

// Export Enum Type Function..
module.exports = {
    getEnumType,
}