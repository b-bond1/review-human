import React, { useEffect, useState } from 'react';

const ListingPage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            // Fetch categories from your API or data source
            const response = await fetch('/api/categories'); // Change this URL to your actual API endpoint
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Product Categories</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListingPage;