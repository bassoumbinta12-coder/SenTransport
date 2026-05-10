import './LigneBus.css';

function LigneBus({ numero, depart, arrivee, arrets, estSelectionnee, onClick }) {
  const classeLigne = estSelectionnee ? 'ligne-bus ligne-bus-active' : 'ligne-bus';
  
  return (
    <div className={classeLigne} onClick={onClick}>
      <div className="ligne-numero">{numero}</div>
      <div className="ligne-info">
        <span className="ligne-trajet">
          {depart} &rarr; {arrivee}
        </span>
        <span className="ligne-arrets">{arrets} arrêts</span>
      </div>
    </div>
  );
}

export default LigneBus;