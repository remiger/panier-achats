import './App.scss';
import Entete from './Entete';
import PiedPage from './PiedPage';
import Histoire from './Histoire';
import ListeProduits from './ListeProduits';
import Accueil from './Accueil';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { authFirebase, authGoogle } from './firebase/init';

import { onAuthStateChanged, signInWithPopup } from "firebase/auth";

function App() {
  // Etat de lutilisateur connecte
  const [util, setUtil] = useState(null);


  const etatPanier = useState(() => JSON.parse(window.localStorage.getItem('panier-4pa')) || {});

  // pos 0 = panier, pos 1 = pour changer le panier
  const panier = etatPanier[0];


  // "Persister" (sauvegarder) le panier dans localStorage
  // Utiliser le HOOK useEffect pour executer ce code de facon controlee
  // [panier] = toutes les variables de dependance, donc quand les variables dans le talbeau [] changent, on appelle la fonction en param
  useEffect(() => window.localStorage.setItem('panier-4pa', JSON.stringify(panier)), [panier]);

  /**
   * Declenche le prochessus dauthentification avec Google Auth Provider
   */
  function connexion(){
    signInWithPopup(authFirebase, authGoogle).then(
      objUserGoogle => setUtil(objUserGoogle.user)
    );
  }

  // Attacher un "Observateur" de changement d'etat de connexion (gestionnaire devenement de Firebase)
  useEffect(()=>onAuthStateChanged(authFirebase, user => setUtil(user)),[])

  return (
    <div className="App">
      {
        util ? 
        <>
          <Entete panier={panier} util={util} setUtil={setUtil}/>
          <Routes>
            <Route path='/' element={<Accueil/>}/>
            <Route path='/notre-histoire' element={<Histoire/>}/>
            <Route path='/nos-produits' element={<ListeProduits etatPanier={etatPanier} />}/>
          </Routes>
          <PiedPage />
        </>
        : 
        <button onClick={connexion}>Connexion</button>
      }
    </div>
  );
}

export default App;
