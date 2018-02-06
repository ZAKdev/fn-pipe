export const pipe = (...fns) => data =>
  fns.reduce((acc, fn) => {
    if(typeof acc.then === 'function'){
      return acc.then(fn)
    } else {
      return fn(acc)
    }
  }, data)