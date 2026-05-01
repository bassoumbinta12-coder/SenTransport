import './Statistique.css';

function Statistique({ chiffre, libelle }) {
  return (
    <div className="stat-card">
      <h2 className="stat-chiffre">{chiffre}</h2>
      <p className="stat-libelle">{libelle}</p>
    </div>
  );
}

export default Statistique;