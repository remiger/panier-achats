import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvT3mMs6UUZ6VT4SGZrcNF2BFrQ4A5rMU",
  authDomain: "cours-react-53951.firebaseapp.com",
  projectId: "cours-react-53951",
  storageBucket: "cours-react-53951.appspot.com",
  messagingSenderId: "461390718625",
  appId: "1:461390718625:web:1f80155f5e149adc00f2e0",
  measurementId: "G-NJ1WX8Z46K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firestore
const bd = app.firestore();

// Chercher les donnees dans la collection 'maggen-produits'
bd.collection('maggen-produits').get().then(
  reponse => reponse.forEach(
    prd => console.log('Info du produit ', prd.data(), ' / Id du produit ', prd.id)
  )
);

export default function listeProduits({etatPanier}){
    return(
        <section className="ListeProduits">
        <h2>Nos produits</h2>
        <div className="produits">
          {
            lesProduits.map(p => <Produit etatPanier={etatPanier} key={p.id} nom={p.nom} prix={p.prix} pid={p.id}/>)
          }
        </div>
      </section>
    )
}