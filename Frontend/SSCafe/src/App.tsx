
import './App.css';


import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Review from './pages/Review';
import Book from './pages/Book';
import  Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <Home />
            <About />
           <Menu />
           <Review />
           <Book />
           <Footer />
        </>
    );
}

export default App;
