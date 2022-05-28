const AppProvider = (state, action) =>{
    switch(action.type){
        case 'ITEMHAND':
        return{
            ...state,
            items: action.payload
        }

        case 'ADDCART':
        return{
            ...state,
            cart: [action.payload, ...state.cart]
        }

        case 'REMCART':
        return{
            ...state,
            cart: state.cart.filter(el => el.id !== action.payload )
        }


        // case 'REMPROD':
        // return{
        //     ...state,
        //     items: state.items.filter(el => el.id !== action.payload)
        // }

        case 'SEARCH':
        return{
            ...state,
            search: state.items.filter(el =>{
                return( //startsWith
                    el.title.toLowerCase().includes(action.payload)
                )
            })
        }

        default: 
        return state
    }
}

export default AppProvider