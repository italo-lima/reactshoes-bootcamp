/*
1º - criar o store
2º - cria o rootReducer (responsável por combinar todos os reducers)
3º - chamar o Provider do redux e o store no App.js
4º - Cria o dispatch (responsável por disparar ação) no componente que irá realizar ação
5º - 
*/

import {createStore, applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./modules/rootReducer"
import rootSaga from "./modules/rootSaga"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

export default store;