
import './App.css';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';
import Header from './containers/Header';
import ProductComponent from './containers/ProductComponent';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
