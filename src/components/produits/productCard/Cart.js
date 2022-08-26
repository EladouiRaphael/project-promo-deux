import React from 'react';
import { useCart } from 'react-use-cart';


//************************** LE PANIER **************************//

//La constante indique tout les paramètres à utilser dans le panier
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty){
        return(
            <div className='container text-center'>
                <h2 className='text-center'>Votre panier est vide</h2>
            </div>
        )
    }
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                <h5>Panier ({totalUniqueItems}) Nombre d'articles : ({totalItems})</h5>
                <table className='table table-striped table-hover m-0'>
                    <tbody>
                    {items.map((item, index) => {
                        return ( //les parametres du contenu du panier 
                            <tr key ={index}>
                                <td>
                                    <img src={item.img} style={{height:'6rem', width:'10rem'}} alt={item.title} />
                                </td>
                                <td>
                                    <h5>{item.title}</h5>
                                </td>
                                <td>
                                    <h5>{item.desc}</h5>
                                </td>
                                <td>
                                    <h5>{item.price}</h5>
                                </td>
                                <td>
                                    Quantité: ({item.quantity})
                                </td>
                                <td>
                                    <button // Les Boutons pour ajouter, supprimer 1 éléments et tout vider
                                    className='btn btn-info ms-2'
                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-
                                    </button>
                                    <button 
                                    className='btn btn-info ms-2'
                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+
                                    </button>
                                    <button
                                    className='btn btn-danger ms-2'
                                    onClick={() => removeItem(item.id)}>
                                    Retirer
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                {/* l'indication du prix total  */}
                </div> 
                    <div className='col-auto ms-auto'> 
                        <h2>Prix total: {cartTotal} €</h2>
                    </div>
                {/* le bouton pour vider le panier */}
                    <button className='btn btn-danger m-2'
                    onClick={() => emptyCart()}>
                        Vider le panier
                    </button>
                    {/* le bouton pour valider le panier */}
                    <button className='btn btn-primary m-2'>Acheter maintenant</button>
            </div>
        </section>
    );
};

export default Cart;