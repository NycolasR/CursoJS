function l() {
    console.log('<------------------>')
}


let num = [5, 8, 2, 9, 3]
console.log(num)
l()
console.log(`O vetor tem ${num.length} posições`)
l()
num.sort()
console.log(num)
l()
num.push(7)
console.log(num)
l()
num.sort()
console.log(num)
l()
console.log(String(num))
l()
num.forEach(element => {
    console.log(element)
});
l()
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}
l()
for(let i in num) {
    console.log(num[i])
}