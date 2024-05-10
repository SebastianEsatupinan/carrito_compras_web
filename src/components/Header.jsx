import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProduct } from '../components/actions';

function Header() {
    const { allProducts, total, countProducts } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            {/* Contenido del componente */}
        </div>
    );
}

export default Header;
