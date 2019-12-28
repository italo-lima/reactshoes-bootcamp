import React, {useState, useEffect} from "react"

import {MdAddShoppingCart} from "react-icons/md"
import {formatPrice} from "../../util/format"
import api from "../../services/api"
import {useDispatch, useSelector} from "react-redux"
import {ProductList} from "./styles"

import * as CartActions from "../../store/modules/cart/actions"

export default function Home(){
    const [products, setProducts] = useState([])

    //useSelector se comunida com o store para buscar state
    const amount = useSelector(state => 
        state.cart.reduce((sumAmount,product) => {
            sumAmount[product.id] = product.amount;

            return sumAmount;
        }, {})
        );

    //responsável por disparar ação
    const dispatch = useDispatch();

    const getProducts = async () => {
        const response = await api.get('products')
        const data = response.data.map(product => ({
            ...product,
            priceFormatted: formatPrice(product.price)
        }))

        setProducts(data)
    }

    useEffect(() => {
        getProducts();
    }, [])

    function handleAddProduct(product){
        //dispara a action
        dispatch(CartActions.addToCartRequest(product));
    }

    return(
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img 
                        src={product.image}
                        alt={product.title}
                    />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormatted}</span>
                    <button type="button" onClick={() => handleAddProduct(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" /> 
                            {amount[product.id] || 0}
                        </div>

                        <span>ADICIONAR AO CARRINHO</span>
                    </button>
                </li>
            ))}
            
        </ProductList>
    )
}