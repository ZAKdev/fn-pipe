import { pipe } from './../pipe';
import { customPromise, myOwnFunc } from './../__mocks__/functions';  

const numbers = [1, 2, 3, 4, 5];
const newNumbers = pipe(
  num => num.map(n => n + 1),
  num => num.reduce((acc, n) => [...acc, n * 2], []),
  num => num.map(n => n + 1)
)(numbers)

const promise = pipe(
  customPromise,
  myOwnFunc
)(numbers)

describe('pipe function', () => {

  it('should return an array', () => {
    expect(newNumbers).toEqual([5, 7, 9, 11, 13])
  })

  it('should return promise and resolve it', () => {
    expect(promise).resolves.toEqual([5, 7, 11, 13])
  })

})