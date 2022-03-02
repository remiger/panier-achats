import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import Histoire from './Histoire';
import ListeProduits from './ListeProduits';
import Accueil from './Accueil';
import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';

function App() {
  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

  // pos 0 = panier, pos 1 = pour changer le panier
  const panier = etatPanier[0];

  // const [panier, setPanier] = useState({});

  console.log("Etat panier : ", etatPanier);

  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour executer ce code de facon controlee
  // [panier] = toutes les variables de dependance, donc quand les variables dans le talbeau [] changent, on appelle la fonction en param
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  return (
    <div className="App">
      <Entete panier={panier} test="Allo props"/>

      {/* Composant specifique a chaque route */}
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/notre-histoire' element={<Histoire/>}/>
        <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier} />}/>
      </Routes>

      <PiedPage />
    </div>
  );
}

export default App;
