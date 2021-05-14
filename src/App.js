import './App.css';
import Headers from './components/appbar/headers';
import Footer from './components/footer/footer';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App" id="header">
      <Headers>
        <Portfolio />
        <Footer />
      </Headers>
    </div>
  );
}

export default App;
