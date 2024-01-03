const cart = ['shoes','pants','sandal'];

//comsume the promises
const promise = createOrder(cart);
//console.log(promise)

promise.then(function(orderId){
    console.log(orderId);
    return orderId;
})
.then(function(orderId){
   return procedToPayment(orderId);
})
.then(function(paymentInfo){
    console.log(paymentInfo);
})
.catch(function(err){
    console.log(err.message)
})

function createOrder(cart){
    const pr = new Promise(function(resolve,reject){
        if(!validateCart(cart)){
            const err = new Error("cart is not valid");
            reject(err);
        }
        const orderId = '12345';
        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            },5000);
            
        }
    });
    return pr;
}
function procedToPayment(orderId){
    return new Promise(function (resolve,reject){
        resolve("Payment successfully");
    })
}
function validateCart(cart){
    return true;
}