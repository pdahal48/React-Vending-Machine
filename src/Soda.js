import React from 'react'

import SodaList from './SodaList'
import Item from './Item'

const Soda = () =>{

    return (
        <div>
            <h1>Choose your Beverage</h1>
            {SodaList.items.map(({name, image, price, id}) => 
                    <Item 
                        image = {image}
                        name = {name}
                        price = {price}
                        key = {id}
                    />
                )}
        </div>
    )
}

export default Soda; 