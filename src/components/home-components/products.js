import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { CommContext } from '../../context/e-comState'



const Products = () => {

  const { items, itemHandler, putCart, disable  } = useContext(CommContext);
  useEffect(() =>{
    axios.get('https://fakestoreapi.com/products')
    .then(res => itemHandler({data: res.data}))
    .catch(err => console.log(err))   
  })

  const [tem, setTem] = useState([])

  useEffect(()=>{
    setTem(items)
  }, [items])

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Products</h2>
       {
        tem.map((el) =>
        <div style={{ marginLeft: 'auto', marginRight: 'auto', height: 320, width: 300, marginTop: 10, border: '2px solid gold', borderRadius: 20 }} key={el.id}>
          <img src={el.image} height= '190' width='288' alt='img' style={{ margin: 5 }} />
          <p style={{ height: 20, width: 300, overflowY: 'scroll'}}><b>title:</b> {el.title}</p>
          <p style={{ height: 20, width: 300, overflowX: 'scroll' }}><b>price:</b> ${el.price} &nbsp;&nbsp; <b>category:</b> {el.category}</p>
          {/* {(disable) ? */}
            <button 
              onClick={() => {
                return(
                  putCart({ id: el.id, data: tem }),
                  disable && null
                )
              }}
              
              style={{ height: 30, width: 260, marginLeft: 20, backgroundColor: 'gold', borderRadius: 20, }}
              >Add To Cart
            </button>
          {/* :
            <button 
              // onClick={() => putCart({ id: el.id, data: tem })} 
              style={{ height: 30, width: 260, marginLeft: 20, backgroundColor: 'gold', borderRadius: 20, }}
              >Remove From Cart
            </button>
          } */}
          </div>
        )
       }
    </div>
  )
}

export default Products