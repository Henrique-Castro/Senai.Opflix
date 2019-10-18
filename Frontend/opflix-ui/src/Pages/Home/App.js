import React from 'react';

// Components
import NavBar from '../../Components/NavBar/NavBar';
import Banner from '../../Components/Banner/Banner';
import Plataformas from '../../Components/Plataformas/Plataformas';
import Amostragem from '../../Components/Amostragem/Amostragem';
import Planos from '../../Components/Planos/Planos';
// Imports Css
import '../../assets/css/Home.css';
import '../../assets/css/Header.css';

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
        {/* TODO: PAREI AQUI */}
      </footer>
    </div>
  );
}

export default App;
