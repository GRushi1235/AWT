sum_odd = (arr) => {
    let sum = 0;
    for(i=0;i<arr.length;i++)
        if(arr[i] % 2 != 0)
            sum += arr[i];
    return sum
}
sum_even = (arr) => {
    let sum = 0;
    for(i=0;i<arr.length;i++)
        if(arr[i] % 2 == 0)
            sum += arr[i];
    return sum
}
sum = (arr,callback) => {
    console.log(callback(arr))
}
console.log("Sum of all Odd Numbers")
sum([1,2,3,4,5,6,7,8,9,10],sum_odd)
console.log("Sum of all even numbers")
sum([1,2,3,4,5,6,7,8,9,10],sum_even)
