import './ListeProduits.css';

export default function listeProduits(){
    return(
        <section className="produits">
        <h2>Nos produits</h2>
        <div>
          <article>
                <img src="" alt="" />
                <div className="titre">Titre du produit</div>
                <div className="prix">13.95</div>
                <button>Ajouter au panier</button>
          </article>
          <article>Produit 2</article>
          <article>Produit 3</article>
          <article>Produit 4</article>
          <article>Produit 5</article>
        </div>
      </section>
    )
}