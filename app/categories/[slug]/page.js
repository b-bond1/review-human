import React from 'react';
import { useRouter } from 'next/router';
import { getProductsByCategory } from '../../services/productService'; // Adjust the import according to your services structure

const CategoryPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [products, setProducts] = React.useState([]);

    React.useEffect(() => {
        if (slug) {
            getProductsByCategory(slug).then(setProducts);
        }
    }, [slug]);

    return (
        <div>
            <h1>Products in Category: {slug}</h1>
            {products.length > 0 ? (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No products found in this category.</p>
            )}
        </div>
    );
};

export default CategoryPage;
