import './Entete.scss';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import Badge from '@mui/material/Badge';

// remarquez la destructuration de l objet
export default function Entete({panier}) {    
    console.log("Le panier (Entete) : ", panier);
    console.log("Le tableau des valeurs du panier ", Object.values(panier));

    // Obtenir les 5 infos importantes pour le sommaire panier (on passe le tableau (Array) des valeurs dans lobjet 'panier')
    const {articlesDifferents, articlesTotaux, sousTotal, taxes, total} = calculerInfoPanier(Object.values(panier));

    return (
        <header className="Entete">
            <h1>Magasin général</h1>
            <nav>
                {/* Sommaire du panier */}
                <input type="checkbox" id="cc-sommaire-panier" />
                <div className="sommaire-panier">
                    <h3>Sommaire du panier</h3>
                    <div className="info"><span>Articles diffrents</span><span>{articlesDifferents}</span></div>
                    <div className="info"><span>Articles totaux</span><span>{articlesTotaux}</span></div>
                    <div className="info"><span>Sous-total</span><span></span>{sousTotal}</div>
                    <div className="info"><span>Taxes</span><span>{taxes}</span></div>
                    <div className="info"><span>Total</span><span>{total}</span></div>
                </div>
                <Badge badgeContent={Object.values(panier).reduce((acc, article) => acc + article.qte, 0)} color="secondary">
                    <label htmlFor="cc-sommaire-panier"><ShoppingCartSharpIcon /></label>
                </Badge>
                <a href="#">Contactez-nous</a>
            </nav>
        </header>
    );
}


/**
 * Calculer linformation du sommaire du panier
 * 
 * @param Object panier Objet panier dachats
 * 
 * @returns Object objet contenant les 5 infos requises du panier
 */

function calculerInfoPanier(panierAchats){
    const sousTotal = panierAchats.reduce((acc, courante) => acc + courante.qte*courante.prix, 0);
    const taxes = sousTotal * 0.14975;
    return {
        articlesDifferents: panierAchats.lenght,
        articlesTotaux: panierAchats.reduce((acc, courant) => acc + courant.qte, 0),
        sousTotal: sousTotal.toFixed(2),
        taxes: taxes.toFixed(2),
        total: (sousTotal + taxes).toFixed(2)
    }
}