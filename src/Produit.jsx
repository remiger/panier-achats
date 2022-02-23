import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit({etatPanier: [panier, setPanier], nom, pid, prix}){
    //const [panier, setPanier] = etatPanier;

    let qte = 0;

    if(panier[pid]){
        qte = panier[pid].qte;
    }

    console.log("Qte produit ", pid , " : ", panier);

    function ajouterAuPanier(){
        if(panier[pid]){
            panier[pid].qte++;
        }
        else{
            panier[pid] = {
                prix : prix,
                qte : 1
            };
        }

        console.log("Panier ", panier);
        // Notifier react que le panier a changer
        // Il faut cloner l objet panier pour que React detecte que le panier a change
        
        //deep clone (mm objet dans objet sont copies): let clonePanier = JSON.parse(JSON.stringify(panier));
        //shallow clone (les objets dans objet gardent les references): let clonePanier = Object.assign({}, panier);
        setPanier({...panier});
    }

    return (
        <article className="Produit">
            <img src={"images-produits/" + pid + ".webp"} alt={nom} />
            <div className="titre">{nom}</div>
            <div className="prix">{prix}</div>
            <BtnAjoutPanier qte={qte} onClick={ajouterAuPanier} />
        </article>
    );
}