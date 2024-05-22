import React, { Component } from 'react'
import ProductSmallCard from './products/ProductSmallCard'

export class GenresInDb extends Component {
  constructor() {
    super()
    this.state = {
      productsList: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3737/api/products')
      .then(res => res.json())
      .then(products => this.setState({ productsList: products.data }))
      .catch(error => console.log(error.message))
  }

  render() {
    return (
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
          </div>
          <div className="card-body">
            <div className="row">

              {this.state.productsList.map((product) => {
                return <ProductSmallCard
                key={product.id}
                name={product.name}
                price={product.price}
                discount={product.discount}
                image={product.image}
                />
              })}

            </div>
          </div>
        </div>
      </div>
    )
  }
}
