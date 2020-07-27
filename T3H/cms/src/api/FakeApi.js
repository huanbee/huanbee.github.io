
const fetchCounter = () => new Promise(resolve => {
    setTimeout(() => {
        resolve({ step: 2 })
    }, 1000)
})

export {
    fetchCounter
}