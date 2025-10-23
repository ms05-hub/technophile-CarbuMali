import { useState } from 'react'
import '/src/Globals.css'
import Search_bar from './composants/Search_bar'
import Tableau_search from './composants/Tableau_search'
import Filter from './composants/Filter'
import Connection_header from '../connexion/Connection_header'
function Search() {
  return (
        <>  
            <Connection_header></Connection_header>

            <div className='pt-15'>
                <Search_bar></Search_bar> <br /><br />
                <Filter></Filter><br /><br />
                <Tableau_search></Tableau_search>
            </div>
            
        </>
    )
}

export default Search
