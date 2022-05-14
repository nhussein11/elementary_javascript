const users = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

  /*
  Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b.  Create a function called signIn which allows user to sign in to the application

The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  
  */

// signUp function

// const signUp=(user)=>{
//     const usernameToAdd=user.username;
//     let flagUsername=false;
//     Object.entries(users).forEach(([key,value])=>{
//         let {username}=value;
//         username===usernameToAdd?flagUsername=true: flagUsername;
//     })
//     flagUsername
//     ? console.log("username already exists")
//     : users.push(user);
//     console.log(users)
// }
// const newUser={
    
//         _id: '123nico',
//         username: 'Nico',
//         email: 'alex@alex.com',
//         password: '123123',
//         createdAt: '08/01/2020 9:00 AM',
//         isLoggedIn: false,
      
// }
// signUp(newUser);

// signIn function

// const singIn = (user)=>{
//   Object.entries(users).forEach(([key,value])=>{
//     let {_id} = value;
//     let {isLoggedIn}=value;
//     let {username}=value;
//     _id===user._id 
//     ? (!isLoggedIn)
//       ? (value.isLoggedIn=true, 
//         console.log(`User ${username} logged succesfully `))
//       : console.log(`User ${username} is already logged `)
//     : ''

//   })
// }

// singIn(newUser);

//rateProduct function
// const rateProduct = ()=>{
//   let sumRate=0;  
//   Object.entries(products).forEach(([key,values])=>{
//     const {ratings}=values;
    
//     Object.entries(ratings).forEach(([key,values])=>{
//       const {rate}=values;
//       sumRate+=rate;
//     })
//   })
//   return(sumRate)
// }

// console.log(rateProduct());


//averageRating function
// const averageRating = ()=>{
//   let allRatings=0;
//   Object.entries(products).forEach(([key,values])=>{
//     const {ratings}=values;
//     Object.entries(ratings).forEach(([key,values])=>{
//       allRatings+=1
//     })
//   })
//   const average = rateProduct()/allRatings;
//   return average
// }

// console.log(averageRating());

//likeProduct function

const likeProduct = ()=>{
  
  Object.entries(products).forEach(([key,values])=>{
    const {likes}=values;
    likes[0]=='fg12cy'
    ? likes.pop()
    : likes.push('fg12cy')
  })
  return products
}
console.log(products)
console.log(likeProduct());