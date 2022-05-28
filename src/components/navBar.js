import React, { useState, useContext } from 'react'
import menu from './image/menu.png'
import cartimg from './image/shopping-cart.png'
import { Link  } from 'react-router-dom'
import Search from './search'
import './navBar.css'
import { CommContext } from '../context/e-comState'

const NavBar = () => {

    const width = window.innerWidth;

    const [bar, setBar] = useState(false)

    const nav = () =>{
        setBar(preState => !preState)
    }
    
    

    const { cart } = useContext(CommContext)

    // <ul style={{ listStyle: 'none',  display: 'flex'}}>
    //     <li style={{ margin: 10 }}>Account </li>
    //     <li style={{ margin: 10 }}>About </li>
    // </ul>  onClick={setBar(preState => !preState)}

    const handle = () =>{
        setBar(preState => !preState)
    }
    const cat = cart.map(el => el)

  return (
        <div>

            {
                bar &&
                <div style={{ marginTop: 100, position: 'fixed', backgroundColor: 'rgba(0,0,0,0.8)', top: 0, bottom: 0, left: 0, right: 0, height: '80%', width: '100%', display: 'block' }}>
                    {/* <button onClick={setBar(preState => !preState)}>x</button> */}
                    <div style={{ textAlign: 'center', width: 200, marginLeft: 'auto', marginRight: 'auto' }}>
                        <ul style={{ listStyle:'none', }}>
                            <li style={{ margin: 10 }}><Link onClick={() => handle() } style={{ color: 'gold'}} to='/account' >Account</Link></li>
                            <li style={{ margin: 10 }}><Link onClick={() => handle() } style={{ color: 'gold'}} to='/about' >About</Link></li>
                        </ul>
                    </div>
                </div>
            }

            {
                (width > 480) ?
                    <div style={{ position: 'fixed', marginBottom: 15, backgroundColor: 'gold', boxShadow: '2px 4px 3px rgba(0,0,0, 0.5)', height: 100, width: width, display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex' }}>
                            <h1 style={{ color: 'black' }}><Link style={{ color: 'black', textDecoration: 'none' }} to='/' >e-commerce</Link></h1>
                        </div>&nbsp;
                        <div style={{ marginTop: 30,}}>
                            <b><Search /></b>
                        </div>
                        <div style={{}}>
                            <ul style={{ listStyle: 'none',  display: 'flex'}}>
                                <li style={{ margin: 10 }}><Link to='/cart' ><b><img alt='pics' src={cartimg} height='25' width='25' /></b><sup style={{ color: 'red', fontWeight: 'bolder', textDecoration: 'none'}}>{cat.length}</sup></Link></li>
                                <li style={{ margin: 10 }}><Link style={{ color: 'black', textDecoration: 'none' }} to='/account' >Account</Link></li>
                                <li style={{ margin: 10 }}><Link style={{ color: 'black', textDecoration: 'none' }} to='/about' >About</Link></li>
                            </ul>
                        </div>
                    </div>

                :

                <div style={{ position: 'fixed', marginBottom: 15, backgroundColor: 'gold', boxShadow: '2px 4px 3px rgba(0,0,0, 0.8)', height: 115, width: width }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: 12, display: 'flex' }}>
                            <h1><Link style={{ color: 'black', textDecoration: 'none' }} to='/' >e-commerce</Link></h1>
                        </div>
                        <div style={{ marginTop: 30,}}>
                                <b style={{ margin: 10 }}><Link to='/cart' ><b><img alt='pics' src={cartimg} height='25' width='25' /></b><sup style={{ color: 'red', fontWeight: 'bolder'}}>{cart.length}</sup></Link></b>
                            {/* <b style={{ fontSize: 12}}><img alt='pics' src={cart} height='20' width='20' /></b><sup style={{ color: 'red', }}><b>0</b></sup> */}
                        </div>
                        <div style={{ marginTop: 30, marginRight: 20}}>
                            <button onClick={() => nav()} style={{ fontSize: 10 }}><img alt='pics' src={menu} height='20' width='20' /></button>
                        </div>
                    </div><br />

                    <div style={{ marginLeft: 'auto', marginRight: 'auto', fontSize: 10, marginTop: 0,}}>
                        <b><Search /></b>
                    </div>
                </div>
            }
        </div>
  )
}

export default NavBar