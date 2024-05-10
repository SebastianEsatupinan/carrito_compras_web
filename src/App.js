import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/components/Store';
import Header from '../src/components/Header';
import { ProductList } from './components/ProductList';

function App() {
    return (
        <Provider store={store}>
            <Header />
            <ProductList />
        </Provider>
    );
}

export default App;
