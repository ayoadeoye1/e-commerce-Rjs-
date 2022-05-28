import { createContext, useReducer, useState } from "react";
import AppProvider from "./e-comProvider";

const initialState = {
  cart : [],
  items: [],
  search: []
}

export const CommContext = createContext(initialState);

export const CommProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AppProvider, initialState);
    const [disable, setDisable] = useState(true);
    const [key, setKey] = useState('');
    const [show, setShow] = useState(false);


    const itemHandler = ({data}) =>{
        dispatch({
            type: 'ITEMHAND',
            payload: data.map(el => el)
        })
    }

    const putCart = ({ id, data }) =>{
        const filt = data.filter(ele => ele.id === id);
        dispatch({
            type: 'ADDCART',
            payload: Object.assign({}, ...filt)
        })
        const fil = state.cart.filter(ele => ele.id === id);
        fil && setDisable(true)
        // dispatch({
        //     type: 'REMPROD',
        //     payload: id //Object.assign({}, ...fil)
        // })
    }

    const remCart = ({ id }) =>{
       dispatch({
        type: "REMCART",
        payload: id
       })
    }

    const keyFunc = ({ searc }) => {
        setKey(searc);
    }

    const subFunc = () => {
        dispatch({
            type: 'SEARCH',
            payload: key
        })
    }

    const payFunc = () =>{
        setShow(prev => !prev)
    }

    return(
        <CommContext.Provider value={{ items: state.items, itemHandler, cart: state.cart, putCart, subFunc, disable, search: state.search, key, keyFunc, show, payFunc, remCart}}> 
            { children }
        </CommContext.Provider>
    )
}