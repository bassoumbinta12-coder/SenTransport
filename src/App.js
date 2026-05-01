import Statistique from './Statistique';
import Footer from './Footer';
import './App.css';
import Header from './Header';
function App () {
  return (
    <div className="App">
     <Header/>
     <div className="stats-container">
        <Statistique chiffre="150" libelle="Lignes de bus" />
        <Statistique chiffre="45" libelle="Arrêts Dakar" />
        <Statistique chiffre="10" libelle="Communes" />
      </div>
      <main className ="contenu">
        <p> Bienvenue! Cette application vous aide a trouver
           votre ligne de bus a Dakar.</p>
     </main>
     <Footer/>
    </div >
  );
}
export default App ;