import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div>
      <Link to="/products">← Back to Products</Link>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} width="200" style={{ borderRadius: '5px' }} />
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
    </div>
  );
}