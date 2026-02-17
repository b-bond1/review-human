import React from 'react';
import { useState, useEffect } from 'react';

const ReviewsListingPage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('/api/reviews')  // Update with actual API endpoint
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, []);

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>{review.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReviewsListingPage;