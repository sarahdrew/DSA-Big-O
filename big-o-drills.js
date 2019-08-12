//All drills without JS in google doc with same title

//TOWER OF HANOI

let rodA = [3, 2, 1];
let rodB = [];
let rodC = [];

function towerOfHanoi(disk, start, middle, end) {
    if (disk === 1) {
        return;
    }
    end.push(start.pop());
    towerOfHanoi(-1, start, end, middle);
    towerOfHanoi(-1, end, start, middle);
    towerOfHanoi(-1, start, middle, end);
    towerOfHanoi(-1, middle, end, start)
    towerOfHanoi(-1, middle, start, end)
    towerOfHanoi(-1, start, middle, end);
    console.log(rodA, rodB, rodC);
}

// re-do recursion witth iterative version
//count sheep

function countSheep(num) {
    for (let i = num; i > 0; i--) {
        if (i >= 1) {
            console.log('Anotther sheep jumped over fence!');
        }
    }
    console.log('All sheep jumped over fence!');

}

//big O:  Linear, O(n)

// power calculator

function powerCalculator(base, exp) {
    let result = base;
    for (let i = exp; i > 1; i--) {
        result *= base
    }
    return result;
}

//big O:  Linear, O(n)

//reverse string

function reverseString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = + str[str.length - i - 1];
    }
    return result;
}

//big O:  Linear, O(n)
//triangularNum

function triangularNum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
        console.log(sum);
    }
    return sum;

}
//big O:  Linear, O(n)

//string splitter

function stringSplitter(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '/') {
            result += str[i];
        }
    }
    console.log(result);
    return result;
}
//big O:  Linear, O(n)

//finonacci

function fibonacci(num) {
    const numArr = [];
    for (let i = 0; i < num; i++) {
        if (!numArr.length) {
            numArr.push(1);
            numArr.push(i);
        }
        numArr.push(numArr[i + 1] + numArr[i]);
    }
    numArr.splice(0, 2);
    console.log(numArr);
}

//big O:  Linear, O(n)


//ITERATIVE BIG O:
//big o and time complexity

//Counting Sheep function - Linear, O(n)
//Power Calculator function - Linear, O(n)
//ReverseString function - Linear, O(n)
//Triangular Number function - Linear, O(n)
//String Splitter function - Linear, O(n)
//Factorial function - Linear, O(n)
//Fibonacci function - Linear, O(n)
//Find Way Out of The Maze function - Linear, O(n)
//Find ALL the ways out of the maze function - Linear, O(n)
//Anagramsfunction - Organization Chart function - Linear, O(n)
//binaryRep function - constant, O(1)