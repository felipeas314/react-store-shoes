import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import api from '../../service/api';
import  { ProductList } from './style';
import { formatPrice } from '../../util/format';


export default class Home extends Component{

    state = {
        products: [],
    }

    async componentDidMount(){
        const response = await api.get('products');

        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price),
          }));

        this.setState({products: data});
    }

    render(){ 

        const { products } = this.state;
        return(
           <ProductList>
               {products.map(product => (
                   <li>
                       <img src={product.image} alt={product.title} />
                       <strong>{product.title}</strong>
                       <span>{product.priceFormatted}</span>
                       <button>
                           <div>
                               <MdAddShoppingCart size={16} color="#fff"/>
                           </div>
                           <span>Adicionar ao carrinho</span>
                       </button>
                   </li>
               ))}
           </ProductList>
        );
    }
}