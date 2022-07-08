import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'

function Header() {
  return (
    <header>
        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/food-delivey-app-963.appspot.com/o/logo.png?alt=media&token=013f506c-aa2e-47b4-8e0a-0b42b641e30a" alt="logo"/>

        <div className='inputBox'>
          <SearchRounded className='searchIcon' />
          <input type="text" placeholder="Search" />
        </div>

        <div className='shoppingCart'>
          <ShoppingCartRounded className='cart' />
          <div className='cartContent'>
            <p>2</p>
          </div>
        </div>

        <div className='profileContainer'>
          <div className='imgBox'>
            <img className='profilePic' src="https://firebasestorage.googleapis.com/v0/b/food-delivey-app-963.appspot.com/o/IMG_20211219_145752_Bokeh.jpg?alt=media&token=0329bfb9-7c85-4fe1-93bb-5a9f1fa2acd2" alt="profileImg"/>
          </div>

          <h2 className='userName'>Akash Kumawat</h2>
        </div>

        <div className='toggleMenu'>
          <BarChart className='toggleIcon' />
        </div>
    </header>
  )
}

export default Header