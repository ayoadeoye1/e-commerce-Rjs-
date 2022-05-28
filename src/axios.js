// import axios from 'axios';
// import React, { useContext, useEffect, useState} from 'react'
// import { CommContext } from './context/e-comState'

// const Axios = () => {

//   const { itemHandler } = useContext(CommContext);

//   const res = []
//   useEffect(() => {
//     const func = async() =>{
//       res = await axios('https://fakestoreapi.com/products');
//       // itemHandler(res);
//       console.log('data is below');
//       console.log(res.data);
//     }    

//   }, [])

//   return (
//     <div>
//       hey there !
//       {res}
//     </div>
//   )
// }

// export default Axios