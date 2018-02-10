# fn-pipe

![Travis](https://img.shields.io/travis/ZAKdev/fn-pipe.svg)
![Package Version](https://img.shields.io/npm/v/fn-pipe.svg)

> Pipe pattern for composing your functions in order to complete the required process in much readable way

## Introduction
Pipe is a function where you can pass multiple functions with first function payload and this payload will be passed from function to function in order to complete the required process.

### Normal pipe Example
It is very easy to read and write a single pipe like below.

```javascript
  const numbers = [1, 2, 3, 4, 5];
  const newNumbers = pipe(
    num => num.map(n => n + 1),
    num => num.reduce((acc, n) => [...acc, n * 2], []),
    num => num.map(n => n + 1)
  )(numbers)
  // return [5, 7, 9, 11, 13]
```

So in real world you can simply compose your functions in pipe like below

```javascript
  const userPipe = pipe(
    getUserById,
    getUserHistory,
    transformHistory,
    convertToJson
  )(userId)
```

### Promise pipe Example
In pipe, if any function has promise so pipe will return a new promise

```javascript
  // if you have a promise
  const myPromise = (num) => new Promise((resolve, reject) => {
    if(true){
      setTimeout(() => {
         resolve(num)
      }, 3000)
    } else {
      reject({
        error: "Promise reject"
      })
    }
  })

  // then you have a normal function
  const myOwnFn = (num) => {
    return num.filter(num => num != 5)
  }
  
  // then pipe
  const numbers = [1, 2, 3, 4, 5];
  const promise = pipe(
    myPromise,
    myOwnFn
  )(numbers)
  // return new promise
  promise
    .then(res => console.log(res)) // [1, 2, 3, 4]
    .catch(err => console.log(err))
```

## Installation
Run the below command to install using NPM

```
npm install --save fn-pipe
```

## Contribution
Feel free to fork, extend, create issues, create PRs or spread the word.