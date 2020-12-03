import React, { Component } from 'react'
import { Button } from './Button';
import { ProductConsumer } from './Context';

export default class CartList extends Component {
    render() {
        let {id, img, price,total, count} = this.props.product;
        return (
            <ProductConsumer>
            {
                value => {
                    return ( <div className="row">
                    <div className="col-md-2">
                        <img src={img} style={{"width": "50px"}}  />
                    </div>
                    <div className="col-md-2">
                        {price}
                    </div>
                    <div className="col-md-2">
                        <Button onClick={() => value.increment(id)}>+</Button>
                    </div>
                    <div className="col-md-2">
                    <Button>-</Button>
                    </div>
                    <div className="col-md-2">
                        {count}
                    </div>
                    <div className="col-md-2">
                        {total}
                    </div>
                </div>)
                }
            }
            </ProductConsumer>
        )
    }
}
