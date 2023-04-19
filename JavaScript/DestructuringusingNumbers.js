const arr =[10,20,88,11,99,44,66,75,21,100];
const [x,y,z] = arr;
console.log(x)
console.log(y)
console.log(z)
console.log()
// rest parameter
const score = [100,5,10,6,80,52,9,10,8,22,77,99]
const [a,...others] = score
console.log(a)
console.log(others)
console.log()
//printing alternate of scores
const [b, ,c, , d, , e, ,...rest] = score
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(rest)