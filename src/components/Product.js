import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'
export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={console.log('you clicked me on the img container')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                            console.loh("added to the cart");
                        }}>
                            {inCart ? (<p className="text-capitalize mb-0" disabled>in cart</p>) : (<i className="fas fa-cart-plus" />
                        )}
                        </button>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue mb-0">
                            <span className="mr-1">Rs</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.1s ease-in-out;
}
.card-footer{
    background:transparent;
    border-top:transparent;
    transition:all 0.1s ease-in-out;

}
&:hover{
    .card{
        border:0.2 rem solid rgba(0,0,0,0.2);
    }
   
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 0.2s ease-in-out;
}
.img-container:hover .card-img-top{
transform:scale(1.06);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    background:none;
    border:none;
    color:rgba(2, 0, 94, 0.616);
    font-size:1.2rem;
    transform:translate(100%,-0%);
    width:70px;

}
.img-container:hover .cart-btn{
    transform:translate(0,0);
    transition:all 0.3s ease-in-out;

}
.cart-btn:hover{
    cursor:pointer;
    color:black;

}
`;