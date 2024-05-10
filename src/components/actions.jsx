export const addProduct = product => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const removeProduct = productId => ({
    type: 'REMOVE_PRODUCT',
    payload: { id: productId }
});
