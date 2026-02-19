import React from 'react';
import Link from 'next/link';
import './Navigation.css';
const Navigation = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/categories">Categories</Link></li>
                <li><Link href="/reviews">Reviews</Link></li>
            </ul>
        </nav>
    );
};
export default Navigation;