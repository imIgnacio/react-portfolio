let array = [1,2,3,4,5,6,7,8,9,10];

const variable = array.filter(number  => number % 2 == 0)


const customFilter = (array, callBack) => {
    array.reduce((initalValue, current) => {
        if(callBack(current)){
            initalValue.push(current);
        }
        return initalValue;
    }, [])
}

const variable2 = customFilter(array, number  => number % 2 == 0);


const sumUp = array.reduce((total, num) => {
    console.log(total + ' ' + num);
    total.push(num)
    return total
}, [])

console.log(sumUp);