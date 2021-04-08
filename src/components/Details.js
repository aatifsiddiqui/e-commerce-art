import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, img,info,price,title,inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div calssName="row">
                                <div className="col-10 max-auto text-center ml-5 text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* endoftitle */}
                            {/* ProductInfo */}
                            <div className="row">
                                <div className="col-10 max-auto col-md-6 my-3" >
                                    <img src={img}  className="img-fluid" alt="product"/>
                                </div>
                                 <div className="col-10 max-auto col-md-6 my-3 text-capitalize" >
                                    <h3>model:{title}</h3>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2"> made By :
                                    <span className="text-uppercase">
                                            {company}
                                    </span>
                                    </h5>
                                    <h5 className="text-blue"><strong>
                                        price: <span>Rs </span>{price}</strong></h5>
                                    <p className="text-capitalize font-weight-bold mt-5 mb-0">
                                        some info about the product:
                                         
                                    </p>
                                    <p className="text-black text-justify">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to='/'>
                                        <ButtonContainer>
                                                Back to product
                                        </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            disabled={inCart?true:false}>
                                            {inCart?"inCart":"Add To Cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>    
)
                }}
            </ProductConsumer>
        )
    }
}
