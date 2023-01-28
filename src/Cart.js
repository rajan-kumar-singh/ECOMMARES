import React from "react"
import "./css/cart.css";
function Cart() {
    return (
        <>
            <div className="chechout">
                <div className="checkou-left">
                    <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"className="imgtiti"/>

                    <div>
                        <h3>Hello Rajan singh</h3>
                        <div className="checkoutProduct">
                            <img src="https://m.media-amazon.com/images/I/81LCmZrOezL._AC_UL320_.jpg" />
                            <div className="checkoutProduct-info">
                                <p className="checkoutProduct-title">Product Name</p>
                                <p className="checkoutProduct-price"><strong>₹1,612.00-₹2,199.00
                                </strong></p>
                                <button>Remove from Basket</button>
                            </div>
                        </div>
                        <div className="checkoutProduct">
                            <img src="https://m.media-amazon.com/images/I/81LCmZrOezL._AC_UL320_.jpg" />
                            <div className="checkoutProduct-info">
                                <p className="checkoutProduct-title">Product Name</p>
                                <p className="checkoutProduct-price"><strong>₹1,612.00-₹2,199.00
                                </strong></p>
                                <button>Remove from Basket</button>
                            </div>
                        </div>
                        <div className="checkoutProduct">
                            <img src="https://m.media-amazon.com/images/I/81LCmZrOezL._AC_UL320_.jpg" />
                            <div className="checkoutProduct-info">
                                <p className="checkoutProduct-title">Product Name</p>
                                <p className="checkoutProduct-price"><strong>₹1,612.00-₹2,199.00
                                </strong></p>
                                <button>Remove from Basket</button>
                            </div>
                        </div>
                        <div className="checkoutProduct">
                            <img src="https://m.media-amazon.com/images/I/81LCmZrOezL._AC_UL320_.jpg" />
                            <div className="checkoutProduct-info">
                                <p className="checkoutProduct-title">Product Name</p>
                                <p className="checkoutProduct-price"><strong>₹1,612.00-₹2,199.00
                                </strong></p>
                                <button>Remove from Basket</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkou-right">
                <div className="subtotal">
                    <p>Subtotal (2 items):<strong>₹1,612.00</strong></p>
                    <small className="subtotal-gift">
                        <input type="checkbox" />This order contains a gift

                    </small>
                </div>
                <button>Remove to checkout</button>
                </div>

            </div>
        </>
    )
}
export default Cart