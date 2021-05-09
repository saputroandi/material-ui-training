import './App.css';
import Headers from './components/appbar/headers';
import Portfolio from './pages/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Headers>
        <Portfolio />
      </Headers>
    </div>
  );
}

export default App;
