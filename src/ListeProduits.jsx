import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json'

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