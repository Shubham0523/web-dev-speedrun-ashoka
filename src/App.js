import './App.css';
// import "./fonts/condor.ttf"
import "./fonts/condor.ttf";
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Hero2 from './Components/Hero2';

function App() {
  return (
    <>
      <Navbar />
    <div className="main">
      <Hero />
      <Hero2 />
    </div>
    </>
  );
}

export default App;
