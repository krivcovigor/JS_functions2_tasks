function isEqual(arg1, arg2) {                             // 1. First task.
    return arg1 === arg2;
}

isEqual(3, 3);

function isBigger(arg1, arg2) {                            // 2. Second task.
    return arg1 > arg2;
}

isBigger(5, -1);

function storeNames(...args) {                             // 3. Third task.
    let arr = [];
    for(let el in args) {
        arr[el] = args[el];
    }
    return arr;
}

storeNames('Tommy Shelby', 'Ragnar Lodbrok', 'Tom Hardy');

function getDifference(arg1, arg2) {                       // 4. Fourth task.
    if(arg1 > arg2) {
        return arg1 - arg2;
    }else if(arg1 < arg2) {
        return arg2 - arg1;
    }
    return 0; 

}

getDifference(5, 3);
getDifference(5, 8);

function negativeCount(arr) {                              // 5. Fifth task.
    let counter = 0;
    for(let el of arr) {
        if(el < 0) {
            counter += 1; 
        }
    }
    return counter;
}

negativeCount([
    4,
    3,
    2,
    9
]);
negativeCount([
    0,
    -3,
    5,
    7
]);

function letterCount(str1, str2) {                        // 6. Sixth task.
    return (str1.match(new RegExp(str2, "ug")) || []).length; 
}

letterCount('Marry', 'r');
letterCount('Barny', 'y');
letterCount('', 'z');

function countPoints(arr) {                              // 7. Seventh task.
    let points = 0;
    for(let el of arr) {
        let elArr = el.split(':');
        console.log(`${elArr[0]} + ${elArr[1]}`);
        if(parseInt(elArr[0], 10) > parseInt(elArr[1], 10)) {
            points += 3;
        }else if(parseInt(elArr[0], 10) === parseInt(elArr[1], 10)) {
            points += 1;
        }else {
            points += 0; 
        }
    }
    return points;
}

countPoints([
    '100:90',
    '110:98',
    '100:100',
    '95:46',
    '54:90',
    '99:44',
    '90:90',
    '111:100'
]);