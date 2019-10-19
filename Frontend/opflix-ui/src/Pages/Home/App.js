import React from 'react';

// Components
import NavBar from '../../Components/NavBars/HomeNavBar';
import Banner from '../../Components/Banner';
import Plataformas from './HomeSections/Plataformas';
import Amostragem from './HomeSections/Amostragem';
import Planos from './HomeSections/Planos';
import Footer from '../../Components/Footer';

// Imports Css
import '../../assets/css/Home.css';
import '../../assets/css/Header.css'

function App() {
  return (
    // ReactDOM.render(<Header/>, document.getElementById('root'));
    <div className="App">
      <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Plataformas />
        <Amostragem />
        <Planos />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
