import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit(props){
    let panier = props.panier;
    let setPanier = props.setPanier;
    let qte = 0;
    if(panier[props.pid]){
        qte = panier[props.pid].qte;
    }

    console.log("Qte produit ", props.pid , " : ", panier);

    function ajouterAuPanier(){
        panier[props.pid] = {
            prix : props.prix,
            qte : 1
        };

        console.log("Panier ", panier);
        // Notifier react que le panier a changer
        setPanier({...panier});
        // Mettre a jour le badge du bouton

        // Mettre a jour le badge du Panier dans Entete
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + props.pid + ".webp"} alt={props.nom} />
            <div className="titre">{props.nom}</div>
            <div className="prix">{props.prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />
        </article>
    );
}