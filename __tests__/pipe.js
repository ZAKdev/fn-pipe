import { pipe } from './../pipe'

const numbers = [1, 2, 3, 4, 5];
const newNumbers = pipe(
  num => num.map(n => n + 1),
  num => num.reduce((acc, n) => [...acc, n * 2], []),
  num => num.map(n => n + 1)
)(numbers)

describe('pipe function', () => {

  it('first param should contain array', () => {
    expect(newNumbers).anything()
  })

})