/*
1º - criar o store
2º - cria o rootReducer (responsável por combinar todos os reducers)
3º - chamar o Provider do redux e o store no App.js
4º - Cria o dispatch (responsável por disparar ação) no componente que irá realizar ação
5º - 
*/

import {createStore} from "redux"

import rootReducer from "./modules/rootReducer"

const store = createStore(rootReducer)

export default store;