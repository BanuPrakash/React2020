import React, { Component } from 'react'
import { ProductConsumer } from './Context';

export default class Details extends Component {
 
    render() {
        let id = this.props.match.params.id;
        return (
            <div>
                Details!!! {id}
                <ProductConsumer>
                    {
                        value => {
                            let pic = value.detailProduct.img;
                            return   <img src={`/${pic}`} />
                        }
                    }
                </ProductConsumer>
            </div>
        )
    }
}
