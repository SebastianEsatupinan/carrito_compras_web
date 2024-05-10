import { data } from '../data';

export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        // Verificación para asegurar que allProducts está definido
        if (!allProducts) {
            console.error('allProducts is undefined');
            return; // Detiene la ejecución si allProducts no está definido
        }

        const existingProduct = allProducts.find(item => item.id === product.id);
        if (existingProduct) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            setAllProducts([...products]);
        } else {
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            setAllProducts([...allProducts, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className='container-items'>
            {data.map(product => (
                <div className='item' key={product.id}>
                    <figure>
                        <img src={product.img} alt={product.nameProduct} />
                    </figure>
                    <div className='info-product'>
                        <h2>{product.nameProduct}</h2>
                        <p className='price'>${product.price}</p>
                        <button onClick={() => onAddProduct(product)}>
                            Añadir al carrito
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};
