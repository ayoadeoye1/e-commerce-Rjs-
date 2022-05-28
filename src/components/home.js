import React, { useContext, useState, useEffect } from 'react'
import Welcome from './home-components/welcome'
import Categories from './home-components/categories'
import Products from './home-components/products'
import { CommContext } from '../context/e-comState'

// const Products = React.lazy(() => import('./home-components/products'));


const Home = () => {

  const { search, disable, putCart, items, key } = useContext(CommContext);
  const [tem, setTem] = useState([])

  useEffect(()=>{
    setTem(items)
  }, [items])

  return (
    <div>
        <Welcome />
        {
          (key && search)?
          search.map((el) =>
          <div style={{ marginLeft: 'auto', marginRight: 'auto', height: 320, width: 300, marginTop: 10, border: '2px solid gold', borderRadius: 20 }} key={el.id}>
            <img src={el.image} height= '190' width='288' alt='img' style={{ margin: 5 }} />
            <p style={{ height: 20, width: 300, overflowY: 'scroll'}}><b>title:</b> {el.title}</p>
            <p style={{ height: 20, width: 300, overflowX: 'scroll' }}><b>price:</b> ${el.price} &nbsp;&nbsp; <b>category:</b> {el.category}</p>
            {disable ?
              <button 
                onClick={() => putCart({ id: el.id, data: tem })} 
                style={{ height: 30, width: 260, marginLeft: 20, backgroundColor: 'gold', borderRadius: 20, }}
                >Add To Cart
              </button>
            :
            <button 
              // onClick={() => putCart({ id: el.id, data: tem })} 
              style={{ height: 30, width: 260, marginLeft: 20, backgroundColor: 'gold', borderRadius: 20, }}
              >Remove From Cart
            </button>
              }
            </div>
          )
          :
          <div>
            <Categories />
            <Products />
          </div>
        }
    </div>
  )
}

export default Home