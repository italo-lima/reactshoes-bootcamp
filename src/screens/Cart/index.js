import React from "react"

import {useDispatch, useSelector} from "react-redux"
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from "react-icons/md"

import * as CardActions from "../../store/modules/cart/actions"

import {Container, ProductTable, Total} from "./styles"
import { formatPrice } from "../../util/format"

export default function Cart(){
/*
    const total = useSelector(state => formatPrice(
        state.cart.reduce((totalSum, product) => {
            return totalSum + product.price * product.amount
        }, 0)
    ))

    const cart = useSelector(state => state.cart.map(product => ({
        ...product,
        subTotal: formatPrice(product.price * product.amount)
    })))
    
    const dispacth = useDispatch();

    function increment(product) {
        dispacth(CardActions.updateAmountResquest(product.id))
    }  */

    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="https://static.netshoes.com.br/produtos/mochila-nike-brasilia-90-24-litros/26/HZM-1709-026/HZM-1709-026_detalhe2.jpg?ims=326x"
                                 alt="Mochila"  
                            />
                        </td>
                        <td>
                            <strong>Mochila muito massa</strong>
                            <span>R$ 129,90</span>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline size={20} color="#7159c1" />
                                </button>
                                <input type="number" readOnly value={2}/>
                                <button type="button">
                                    <MdAddCircleOutline size={20} color="#7159c1" />
                                </button>
                            </div>
                        </td>
                        <td>
                            <strong>R$ 259,80</strong>
                        </td>
                        <td>
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </ProductTable>

            <footer>
                <button type="button">Finalizar pedido</button>

                <Total>
                    <span>TOTAL</span>
                    <strong>R$ 1928,90</strong>
                </Total>
            </footer>
        </Container>
    )
}