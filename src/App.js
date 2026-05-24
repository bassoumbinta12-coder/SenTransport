import { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Recherche from './Recherche';
import LigneBus from './LigneBus';
import DetailLigne from './DetailLigne';
import Footer from './Footer';

function App() {
  const [recherche, setRecherche] = useState("");
  const [ligneSelectionnee, setLigneSelectionnee] = useState(null);
  const [compteur, setCompteur] = useState(0);

 const [lignes, setLignes] = useState([]);
  const [chargement, setChargement] = useState(true);
  const [erreur, setErreur] = useState(null);
useEffect(() => {
  fetch("http://localhost:5000/lignes")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erreur serveur : " + response.status);
      }
      return response.json();
    })
    .then(data => {
      setLignes(data);
      setChargement(false);
    })
    .catch(error => {
      setErreur(error.message);
      setChargement(false);
    });
}, []);
  const lignesFiltrees = lignes.filter(l =>
    l.depart.toLowerCase().includes(recherche.toLowerCase()) ||
    l.arrivee.toLowerCase().includes(recherche.toLowerCase()) ||
    l.numero.includes(recherche)
  );

  function handleRecherche(valeur) {
    setRecherche(valeur);
    setCompteur(compteur + 1);
  }

  function handleClickLigne(ligne) {
    if (ligneSelectionnee && ligneSelectionnee.id === ligne.id) {
      setLigneSelectionnee(null);
    } else {
      setLigneSelectionnee(ligne);
    }
  }
if (chargement) {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p className="message-chargement">Chargement des lignes...</p>
      </main>
    </div>
  );
}

if (erreur) {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <div className="message-erreur">
          <p>Impossible de charger les lignes.</p>
          <p className="erreur-detail">{erreur}</p>
          <p>Vérifiez que Flask est lancé.</p>
        </div>
      </main>
    </div>
  );
}
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <p className="compteur">
          Vous avez effectue {compteur} recherche{compteur > 1 ? 's' : ''}
        </p>
        <Recherche valeur={recherche} onChange={handleRecherche} />
        <p className="resultat-recherche">
          {lignesFiltrees.length} ligne{lignesFiltrees.length > 1 ? 's' : ''} trouvee{lignesFiltrees.length > 1 ? 's' : ''}
        </p>
        {lignesFiltrees.length === 0 && (
          <p className="aucune-ligne">Aucune ligne trouvee</p>
        )}
        {lignesFiltrees.map(ligne => (
          <LigneBus
            key={ligne.id}
            numero={ligne.numero}
            depart={ligne.depart}
            arrivee={ligne.arrivee}
            arrets={ligne.arrets}
            estSelectionnee={ligneSelectionnee && ligneSelectionnee.id === ligne.id}
            onClick={() => handleClickLigne(ligne)}
          />
        ))}
        {ligneSelectionnee && <DetailLigne ligne={ligneSelectionnee} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;