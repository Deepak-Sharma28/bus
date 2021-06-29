// const obj3 = function() {
//     console.log(this);
// };


// console.log(obj3());
// const obj = {
//     name: "deepak",
//     hi: function() {
//         return this;
//     }
// };


// const obj1 = {
//     name: "deepak",

//     hi: function() {
//         console.log(this);
//         return () => {
//             console.log(this);
//         };
//     }
// };


// console.log(obj.hi());
// console.log(obj1.hi());



// var array = [1, 2, 3, 4];

// // array.forEach((counter) => {
// //     console.log(counter);
// // });


// var arr = [1, 2, 3, 3];
// var newarr = arr.map((i) => {
//     return i * i;
// });

// console.log(newarr);




// const Mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I love coding");
//     }, 3000);
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });


//promise.race

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I love Web development");
//     }, 5000);

// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I love web development and I do web developemnt");
//     }, 10000);

// });


// Promise.race([promise1, promise2])
//     .then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });
// console.log(Mypromise);

// Promise.race([Promise.resolve(100), Promise.resolve(2)])
//     .then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });


//promise.all()


// const promise1 = Promise.resolve(4);

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello world");
//     }, 3000);
// });

// const promise3 = 42;


// Promise.all([promise1, promise2, promise3])
//     .then(result => {
//         console.log(result);
//     }).catch(err => {
//         console.log(err);
//     });



// var resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];
// console.log(resolvedPromisesArray);

// var p = Promise.all(resolvedPromisesArray);

// p.then(data => {
//     console.log(data);

// }).catch(err => {
//     console.log(err);
// });
// console.log(p);

// (function() {
//     console.log(p);
// }());


// console.log(Promise.allSettled([Promise.resolve(33), Promise.resolve(44)]));


// setTimeout(function() {
//     console.log('the stack is now empty');
//     console.log(p);
// });


// promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I have studied");
//     }, 5000);
// });
// promise1.then(result => {
//     console.log(result);

// }).catch(err => {
//     console.log(err);
// });


//promise.any

// promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I LOve you");
//     });
// });


// Promise.any([Promise.reject(3), Promise.reject(5), Promise.resolve(6)]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// const promise = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));



// const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve("Wanna become IT ICON");
//     // }, 5000);
//     throw 'Uh oh';
// });


// promise.catch(err => {
//     console.error(err);
//     console.log(err);
// });



// Promise.race([Promise.reject(4), Promise.resolve()])



// const a = Promise.allSettled([Promise.resolve(3), Promise.reject(4)]);

// console.log(a);







// console.log("First");

// setTimeout(() => {
//     console.log("second");
// }, 2000);


// console.log("third");


// const input = 4000;

// (async() => {
//     return await new Promise((resolve) => setTimeout(resolve, input));
// })();(



// const input = 4000;
// const fn = (function() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4);
//         }, input);
//     });

//     return promise.then(response => {});
// }(input));


// console.log(fn);

// const input = 4000;
// const promise = Promise.resolve(33);
// setTimeout(() => {
//     promise.then(val => console.log(val));
// }, input);


// console.log("Aam Singles search on google");
// console.log("hey google say I love you");
// console.log("Meanwhile single javascript coders");
// console.log("SetTimeOUt");
// setTimeout(() => {
//     console.log("I love You");
// }, 10000);



// console.log("First test")



// const n = 6;

// for (let counter = 0; counter < n; counter++) {
//     let string = "";
//     for (let counter1 = 0; counter1 <= counter; counter1++) {
//         string += "*";
//     }
//     console.log(string);
// }


//ECMA SCRIPT 2015
//No Promises


//asynchronous operations
//callback
//readibility of code
//call back hell
//promises
//one call

// n = 0;

// function(a, b)

setTimeout(() => {
    console.log("worked after a function");
}, 1000);

//A callback is a function passed as an argument to another function
//A callback function can run after another function has finished


// callback is the arrow
// settimeout

// time();

//parameter

// function hello(argument1) {
//     console.log("hello");
// }

// console.log();


// hello((() => {
//     console.log("world");
// })());
//my argument




//default_key = superAdminkey=""


//superadmin->admin


// const a = {
//     isAdmin: true
// };





// bus = "a-e";

// sonu = "a-c";

//delhi------rajastan

//if booked value "a-e"



// const location = [index 0 {
//     "Delhi": { "timing": "5:00", "price": 100 },
//     "rajasthan": { "timing": "6:00", "price": 100 },
//     "gurjat": { "timing": "7:00", "price": 100 }
// }];



//user delhi-rajasthan
//delhi 5:00
//rajasthan 6:00


// const bus = ["National Travels", "b"]
//a-d exists
//from a to b 
// c-d

//tickets
//a-d
//c-d
//from to !== "c-d"
//a1 a2 = {seat_no = a2
//         from a to b}


// const bus = {
//     location: ["delhi", "banglore"],
//     locations: ref= [[{"place": "ghazibaad", "timing": "xyz"}, {}, {}, {}]]
//     id: 1
// };


// const reverse = {
//     location: ["banglore", "delhi"],
//     locations: [{}, {}, {}, {}],
//     id: 2
// };




//POST `/api/user/signup`
//input
/*{
    name : string,
    email: string,
    password : string,
    confim_password: string
}*/
/*
   const user= await User.findOne({email})

   if(user){
       return res.send("already exists")
   }

   const newData = new User({
       name: "sonu",
       email: "sonu19@navgurukul.org".
       password : "123456"
   })
    
   newData.save()

   res.json({msg:"you have successfully signed up"})
 */




//POST `/api/user/login`

/*
{
    email: string,
    password : string
}


const user  = await User.find({ email})

if(user){
    if(password === user.password){
        return res.json({msg:" you have successfully logged in"})
    }
    else{
        res.json({msg: "Invalid password"})
    }
}
else{
    res.sendStatus(404).send("Not Found")
}
*/


//PUT `api/user/login/resetpassword`

/*
{
    old_password : string,
    new_password : string
}
 */

/*

const user = await User.findOneAndUpdate({email : req.body.email , password: req.body.old_password},{password: req.new_password},{
  new: true
});
    if(user){
        user.save();
        return res.json({msg: "password has changed successfully"}) 
    }
    else{
        res.sendStatus(404).send("Not Found")
    }           
}

*/


/*
 Put `api/user/login/forgotpassward`

 req.body {
     new_password : string,
     confirm_password : string
 }

if(new_password === confirm_password){
    const user= await User.findOneWithUpdate({email},{password : req.body.new_password},{new:true})
    if(user){
        user.save()
      return  res.json({msg: "your password has changed successfully"})
    }
    else {
        res.sendStatus(404).send("Not Found")
    }
}
*/



/*
GET `api/buses/{Filtering Query String}`

const bus = Bus.findMany({query object});
    if(bus){
        res.json(bus)
    }
    else {
        res.sendStatus(404).send("Not Found")
    }
*/


/*
GET `api/buses/:busId/status`
input{
    busId : string
}

const arr = []
const tickets = Tickets.findMany({BusId : BusId,isBooked: true}).populate('bus',['seats']);
if(tickets){
    arr.push(tickets)
   const available_seats = tickets.BusId.seats.length*4 - arr.length;
   res.json({msg: ` ${availabe_seats} are availabe`})
}
else{
res.sendStatus(404).send("Not Found")
}

*/
// [
//     [],
//     [],
//     []
// ]

/*
POST `api/users/user/buses/:busId/rating` 
//need to update a user Id
const reviews = new Reviews({ 


})




/*

POST `api/buses/:busId/tickets`

const newTicket = new Tickets({ 
    isBooked : true,
})


*/