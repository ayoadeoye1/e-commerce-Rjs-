import React, { useContext } from 'react'
import { CommContext } from '../context/e-comState'

const Search = () => {

  const { subFunc, keyFunc } = useContext(CommContext);
  // console.log(key)
  return (
    <div>
        <form onSubmit={(e) =>{ e.preventDefault(); subFunc()}} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
          <input onChange={(e) => { e.preventDefault(); keyFunc({searc: e.target.value}) }} style={{ height: 30, width: 150, borderRadius: 20, }} type='text' name='search' placeholder='input item name' />
          <input style={{ height: 30, borderRadius: 20, }} type='submit' value='Search' />
        </form>
    </div>
  )
}

export default Search