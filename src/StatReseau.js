function StatReseau({ lignes }) {
  const totalLignes = lignes.length;
  const totalArrets = lignes.reduce((sum, l) => sum + l.arrets, 0);
  const ligneMax = lignes.reduce((max, l) => 
    l.arrets > max.arrets ? l : max, lignes[0]
  );

  return (
    <div>
      <h3>Statistiques du réseau</h3>
      <p>Nombre de lignes : {totalLignes}</p>
      <p>Total des arrêts : {totalArrets}</p>
      <p>Ligne avec le plus d'arrêts : {ligneMax.nom} ({ligneMax.arrets} arrêts)</p>
    </div>
  );
}

export default StatReseau;