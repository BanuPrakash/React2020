import React, { Component } from 'react'
import { ProductConsumer } from './Context'
import CartList from './CartList';
export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <ProductConsumer>
                    {
                        value => {
                             return value.cart.map(p => <CartList product={p} key={p.id} />);
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
