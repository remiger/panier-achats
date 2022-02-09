import './ListeProduits.scss';
import Produit from './Produit';
import lesProduits from './data/produits.json'

export default function listeProduits(){
  // Exemple avec la fonction map
  // let notes = [59.6556, 78.26, 85.264, 35.9595];

  // Pour transformer ce tableau dans un tableau qui contient les notes arrondies en une place decimale
  // let notesArrondies = notes.map(function(uneNote){
  //   return uneNote.toFixed(1) - 0;
  // });

  // Remarquez l'utilisation des fonctions flechees et la methode map
  // let notesArrondies = notes.map(uneNote => uneNote.toFixed(1) - 0);

  // console.log('Le tableau aux valeurs arrondies ', notesArrondies);

    // // console.log('La viariable lesProduits : ', lesProduits);

    // // Methode 1 (programmation useImperativeHandle, avec une boucle for)
    // let composantsProduits = [];
    // // Parcourir le tableau lesProduits et gener un composant Prooduit pour chaque elemnet
    // for(let i = 0; i < lesProduits.length; i++){
    //   composantsProduits.push(<Produit nom={lesProduits[i].nom} prix={lesProduits[i].prix} pid={lesProduits[i].pid}/>);
    // }

    return(
        <section className="ListeProduits">
        <h2>Nos produits</h2>
        <div className="produits">
          {
            lesProduits.map(p => <Produit key={p.id} nom={p.nom} prix={p.prix} pid={p.id}/>)
          }
        </div>
      </section>
    )
}