
export function each(items:any[], action?) {
  if (items.length == 0)
    return Promise.resolve()

  if (action) {
    let result = action(items[0])
    for (let i = 1; i < items.length; ++i) {
      result = result
        .then(() => action(items[i]))
    }
    return result
  }
  else {
    let result = items[0]()
    for (let i = 1; i < items.length; ++i) {
      result = result
        .then(() => items[i]())
    }
    return result
  }

}