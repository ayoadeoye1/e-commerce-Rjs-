import React, { useContext, useEffect, useState } from 'react'
import { CommContext, } from '../context/e-comState'
import Welcome from './home-components/welcome';
import { PaystackButton } from 'react-paystack';
// require('dotenv').config();
// import axios from 'axios';

const Pay = () =>{

const { show, payFunc } = useContext(CommContext);

const [name, setName] = useState('')
const [mail, setMail] = useState('')
const [phone, setPhone] = useState('')

const PublicKey = process.env.REACT_APP_PKEY;

const { cart } = useContext(CommContext)

const [acart, setAcart] = useState([])

useEffect(() =>{
  setAcart(cart)
}, [cart])

const amnt = acart.map(el => el.price);
const amount1 = amnt.reduce((preVal, currVal) => (preVal += currVal), 0);
const amount = parseInt(amount1*560);


const compProps = {
  mail,
  amount,
  metadata: {
    name,
    phone,
  },
  PublicKey,
  text: "Pay Now",
  onSucess: () => alert("Thanks for patronising us!"),
  onClose: () => alert("Wait! you'll need this item, dont leave yet!")
}

  return(
    <>
      <button style={{ marginTop: 5, marginRight: 5, display: 'flex', float: 'right', borderRadius: 15}} onClick={()=> payFunc(()=> !show)} >close</button><br />
      <form onSubmit={(e)=>{ e.preventDefault(); }} style={{ margin: 15, textAlign: 'center', paddingTop: 5, }} >
        <input style={{ boxShadow: "inset 1px 3px 1px #fff, inset -1px -3px 1px #000", margin: 10, height: 40, width: 200, borderRadius: 30 }} type='text' name='text' placeholder='Enter Full Name' onChange={(e) => setName(e.target.value) } /><br />
        <input style={{ boxShadow: "inset 1px 3px 1px #fff, inset -1px -3px 1px #000", margin: 10, height: 40, width: 200, borderRadius: 30 }} type='text' name='text' placeholder='Enter Email' onChange={(e) => setMail(e.target.value) } /><br />
        <input style={{ boxShadow: "inset 1px 3px 1px #000, inset -1px -3px 1px #fff", margin: 10, height: 40, width: 200, borderRadius: 30 }} type='number' name='amount' placeholder='Enter Phone' onChange={(e) => setPhone(e.target.value) } /><br />
        <PaystackButton {...compProps} style={{ margin: 10, height: 40, width: 200, borderRadius: 30, backgroundColor: 'blue', color: 'white' }} />
      </form>
    </>
  )
}

const Cart = () => {

  const { cart, payFunc, show, remCart } = useContext(CommContext);

  // useEffect(() =>{
  //   axios.get('https://fakestoreapi.com/products')
  //   .then(res => putCart({data: res.data}))
  //   .catch(err => console.log(err))   
  // })

  const [acart, setAcart] = useState([])

  useEffect(() =>{
    setAcart(cart)
  }, [cart])

    const amount = acart.map(el => el.price);
    const tolAmount = amount.reduce((preVal, currVal) => (preVal += currVal), 0);
    

  return (
    <div>
      <Welcome />
        { 
          (acart.length < 1)? 
            <div><span style={{ textAlign: 'center' }}>No Item</span></div>
            
            : 
            
          (!acart) ? 
          
            <p>loading...</p> 
          
            : 
          
            acart.map(el =>
            <div style={{ height: 310, marginLeft: 'auto', marginRight: 'auto', width: 300, marginTop: 10, border: '2px solid gold', borderRadius: 20 }} key={el.id}>
              <button onClick={() => remCart({id: el.id})} style={{ marginTop: 5, marginRight: 5, display: 'flex', float: 'right', borderRadius: 15}} >X</button>
              <img src={el.image} height= '190' width='288' alt='img' style={{ margin: 5 }} />
              <p style={{ height: 20, width: 300, overflowY: 'scroll'}}><b>title:</b> {el.title}</p>
              <p style={{ height: 20, width: 300, overflowX: 'scroll' }}><b>price:</b> ${el.price} &nbsp;&nbsp; <b>category:</b> {el.category}</p>
            </div>)
        }
        {
          show ?
          <div
          style={{display: 'block', top: 0, bottom: 0, right: 0, left: 0, heigth: '100%', width: '100%', position: 'fixed', backgroundColor: 'rgba(0,0,0,0.3)'}}
          >
            <div style={{ borderRadius: 15, boxShadow: '4px, 4px, 6px, #000', marginLeft: 'auto', marginRight: 'auto', marginTop: 50, width: 300, height: 300, backgroundColor: 'whitesmoke' }} >
              <Pay />
            </div>
          </div>
          
          :

          <div style={{ transform: 'translateX(20%)', marginTop: 10, marginLeft: 'auto', marginRight: 'auto' }}>
            <button onClick={payFunc} style={{ height: 40, width: 260, backgroundColor: 'gold', borderRadius: 20, }}>check out ${tolAmount}</button>
          </div>
        }
         
    </div>
  )
}

export default Cart