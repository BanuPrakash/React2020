import React, { Component } from 'react'
import { ProductConsumer } from './Context';
import Product from './Product';
export default class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ProductConsumer>
                        {
                            value => {
                                return value.products.map(p => <Product product={p} key={p.id} />)
                            }
                        }
                    </ProductConsumer>
                </div>
            </div>
        )
    }
}
