const initialState = {
    allProducts: [],
    total: 0,
    countProducts: 0
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return { ...state, allProducts: [...state.allProducts, action.payload], countProducts: state.countProducts + 1 };
        case 'REMOVE_PRODUCT':
            return { ...state, allProducts: state.allProducts.filter(product => product.id !== action.payload.id), countProducts: state.countProducts - 1 };
        default:
            return state;
    }
}

export default rootReducer;
