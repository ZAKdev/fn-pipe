export const customPromise = (num) => new Promise((resolve, reject) => {
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

export const myOwnFunc = (num) => {
  return num.filter(num => num != 9)
}