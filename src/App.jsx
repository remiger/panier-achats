import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import ListeProduits from './ListeProduits';
import { useState } from 'react';

function App() {
  const etatPanier = useState({});

  // pos 0 = panier, pos 1 = pour changer le panier
  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

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

  return (
    <div className="App">
      <Entete panier={panier}/>
      <ListeProduits panier={panier} setPanier={setPanier} />
      <PiedPage />
    </div>
  );
}

export default App;
