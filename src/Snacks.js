import React from 'react'

import SnacksList from './SnacksList'
import Item from './Item'

const Snacks = () =>{

    return (
        <div>
            <h1>Choose your Coffee</h1>
            {SnacksList.items.map(({name, image, price, id}) => 
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

export default Snacks; 