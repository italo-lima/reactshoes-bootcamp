import React from 'react';
import {BrowserRouter} from "react-router-dom"

import Routes from "./routes"
import {Provider} from "react-redux"
import store from "./store/index"
import GlobalStyles from "./styles/global"
import Header from "./components/Header"

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
