import React from 'react'

import CoffeeList from './CoffeeList'
import Item from './Item'

const Cafe = () =>{

    return (
        <div>
            <h1>Choose your Coffee</h1>
            {CoffeeList.items.map(({name, image, price, id}) => 
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

export default Cafe; 