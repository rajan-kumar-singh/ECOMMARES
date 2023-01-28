import React from "react";
import "./css/product.css"
function Product({productsList}){
    return(
        <>
        <div className="products-wrop">
          
        
        <div className="product">
                    <img src="https://m.media-amazon.com/images/I/41l+CjwzlRL._SY300_SX300_.jpg" />
                    <h3>Vivo Y02 (Orchid Blue, 3GB RAM, 32GB Storage) with No Cost EMI/Additional Exchange Offers</h3>
                    <p>-31% ₹8,999</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/61SEEG2LMrS._UY741_.jpg" />
                    <h3>Shaftesbury London Men's Polyester Cotton Solid Sleeveless Regular Nehru Jacket (Group11)</h3>
                    <p>-68% ₹1,299</p>
                    <button>Add to Cart</button>
                </div>

                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/61k7OJwe8IS._SY450_.jpg" />
                    <h3>boAt Immortal IM1000D Dual Channel Gaming Wired Over Ear Headphones with mic, 7.1 Channel Surround Audio</h3>
                    <p>-55% ₹2,699</p>
                    <button>Add to Cart</button>
                </div>
                <div className="product">
                    <img src="https://m.media-amazon.com/images/I/719WthOLZPL._SX679_.jpg" />
                    <h3>Sansui 80cm (32 inches) HD Ready Smart LED TV JSY32SKHD (BLACK) With Bezel-less Design</h3>
                    <p>₹10,990.00</p>
                    <button>Add to Cart</button>
                </div>
        </div>
        </>
    )
    
}
export default Product;