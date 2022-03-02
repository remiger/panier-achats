import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useEffect, useState } from 'react';

function App() {
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

  // pos 0 = panier, pos 1 = pour changer le panier
  const panier = etatPanier[0];

  // const [panier, setPanier] = useState({});

  console.log("Etat panier : ", etatPanier);

  // let panier = {
  //     prd0003 : {
  //         prix : 13.95,
  //         qte : 5
  //     },
  //     prd0001 :{
  //       prix : 62.45,
  //       qte : 2
  //     },
  //     prd0002 :{
  //       prix : 33.95,
  //       qte : 3
  //     }
  //   };

  const [compteur, setCompteur] = useState(0);



  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour executer ce code de facon controlee
  // [panier] = toutes les variables de dependance, donc quand les variables dans le talbeau [] changent, on appelle la fonction en param
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  return (
    <div className="App">
      <Entete panier={panier} test="Allo props"/>
      <ListeProduits etatPanier={etatPanier} />
      <div>
        <span>Nombre de clics : {compteur}</span>
        <button onClick={() => {setCompteur(compteur + 1); console.log('Compteur des clics : ', compteur)}}>Cliquez-moi</button>
      </div>
      <PiedPage />
    </div>
  );
}

export default App;
