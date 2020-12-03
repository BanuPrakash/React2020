import React, { Component } from 'react';
// import { storeProducts, detailProduct } from '../data';

import axios from 'axios';

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        cart: [],
        detailProduct: {},
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    // called after constructor and render()
    componentDidMount() {
        this.setProducts();
    }

     setProducts = async () => {
        let prds = await axios.get('http://localhost:1234/products');

        // storeProducts.forEach(p => {
        //     prds.push({ ...p });
        // });
        
        this.setState({
            products: prds.data,
            detailProduct: prds.data[0]
        });
    }

    getItem = (id) => {
        let prd = this.state.products.filter(p => p.id == id)[0];
        return prd;
    }

    handleDetail = (id) => {

    }

    addToCart = (id) => {
        console.log("add to cart", id);
        let prd = this.getItem(id);
        prd.inCart = true;
        prd.count = 1; // how many items in cart
        prd.total = prd.price;
        let cartCopy = this.state.cart;
        cartCopy.push(prd);
        this.setState({
            cart: cartCopy
        }, () => this.addTotal())
    }

    increment = (id) => {
        let prd = this.state.cart.filter(p => p.id == id)[0];
        prd.count++;
        prd.total = prd.price * prd.count;
        this.setState({
            cart: this.state.cart
        })

    }

    decrement = (id) => {

    }

    removeItem = (id) => {

    }

    clearCart = () => {

    }

    checkOut = () => {
       axios.post('http://localhost:1234/orders', this.state.cart) 
    }


    addTotal = () => {
        let subTotal = 0.0;
        this.state.cart.map(item => {
            return subTotal += item.total;
        });

        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        });
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };