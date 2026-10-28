import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Light Clean Hero Section */}
      <div style={{ 
        background: '#f8fafc', 
        border: '1px solid #e2e8f0', 
        borderRadius: '12px', 
        padding: '40px 20px', 
        textAlign: 'center', 
        marginBottom: '30px' 
      }}>
        <h1 style={{ fontSize: '2.5rem', color: '#0f172a', margin: '0 0 10px 0' }}>Welcome to Our Store</h1>
        <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '20px' }}>Discover high-quality products directly from our live catalog.</p>
        <Link to="/products" style={{ 
          background: '#2563eb', 
          color: 'white', 
          padding: '12px 24px', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontWeight: 'bold',
          display: 'inline-block'
        }}>
          Browse Products Now
        </Link>
      </div>

      {/* Highlights / Features Grid */}
      <h2 style={{ textAlign: 'center', color: '#0f172a', marginBottom: '20px' }}>Featured Categories</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80" alt="Electronics" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: '#0f172a' }}>Latest Gadgets</h3>
            <p style={{ color: '#666' }}>Top-tier electronics and daily accessories.</p>
          </div>
        </div>

        <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80" alt="Fashion" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: '#0f172a' }}>Trending Fashion</h3>
            <p style={{ color: '#666' }}>Stylish wear for every season.</p>
          </div>
        </div>

        <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80" alt="Home Essentials" style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
          <div style={{ padding: '15px' }}>
            <h3 style={{ color: '#0f172a' }}>Home Essentials</h3>
            <p style={{ color: '#666' }}>Modern decor and daily necessities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}