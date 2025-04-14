import './App.css';
/*router*/
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/header';
import Home from './components/home';
import AppListing from './components/listing';
import AppPages from './components/pages';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';
import AppProperty from './components/property';
function App() {
  return (
    <div className="App">
    <Router>
    <AppHeader/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<AppListing/>} />
        <Route path="/pages" element={<AppPages/>} />
        <Route path="/blog" element={<AppBlog/>} />
        <Route path="/contact" element={<AppContact/>} />
        <Route path="/property" element={<AppProperty/>} />
      </Routes>
    <AppFooter/>
    </Router> 
    </div>
  );
}

export default App;
