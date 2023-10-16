
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import CartListing from './containers/CartListing';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<CartListing />} />
          <Route path="*" style={{ marginTop: "200px" }} element={<h1>NO PAGE</h1>}></Route>
          <Route element={<h1>404 not found</h1>}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
