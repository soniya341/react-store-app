import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '20px', padding: '15px', background: '#f0f0f0', borderBottom: '1px solid #ddd' }}>
        <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Home</Link>
        <Link to="/products" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Products</Link>
        <Link to="/contact" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#333' }}>Contact</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}