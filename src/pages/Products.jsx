import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data from API');
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products from API...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (products.length === 0) return <p>No products found (Empty state).</p>;

  return (
    <div>
      <h2>Products List</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '120px', objectFit: 'cover' }} loading="lazy" />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <Link to={`/products/${item.id}`} style={{ color: 'blue' }}>View Details →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}