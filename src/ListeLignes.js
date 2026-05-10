import LigneBus from './LigneBus';

function ListeLignes({ lignes }) {
  return (
    <div>
      <h2>Lignes Dakar Dem Dikk</h2>
      <p>{lignes.length} lignes disponibles</p>
      {lignes.map(ligne => (
        <LigneBus
          key={ligne.nom}
          nom={ligne.nom}
          arrets={ligne.arrets}
          couleur={ligne.couleur}
        />
      ))}
    </div>
  );
}

export default ListeLignes;