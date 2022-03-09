import './ListeProduits.scss';
import Produit from './Produit';
import { bdFirestore as bd } from './firebase/init';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";

export default function ListeProduits({etatPanier}){
    // Variable d'etat des produits
    const [produits, setProduits] = useState([]);

    // Obtenir les produits de la collection Firestore
    useEffect(function() {
      // Obtenir tous les documents de 'maggen-produits'
      // Pas garanti recu a cause delai serveur par exemple, donc promesse
      getDocs(collection(bd, 'maggen-produits')).then(
        qs => setProduits(qs.docs.map(doc => ({id: doc.id, ...doc.data()})))
      );
    }, []);

    return(
      <section className="ListeProduits">
        <h2>Nos produits</h2>
        <div className="produits">
          {
            produits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id}/>)
          }
        </div>
      </section>
    )
}