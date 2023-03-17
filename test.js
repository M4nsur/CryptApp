const arr = ["Ам", "ОМ", "ОАП", "А"]

const x = arr.filter(el => {
    return el.includes("О")
})

console.log(x)