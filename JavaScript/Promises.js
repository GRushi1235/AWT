let p = new Promise((resolve, reject) =>{
    let a = 1 + 1
    if (a==2){
        resolve('Success');
   } else {
    reject('Failed')
   }
})
p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})

//implementing several promises in a method and then that method we will use for displaying our result.
function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Promise Done");
        }, 3000);
    });
    let combined_promise = Promise.all([first_promise, second_promise]);
    return combined_promise;
    }
    async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
    }
    display();
