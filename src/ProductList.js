import React from 'react';
import NewProductItem from './NewProductItem';


class ProductList extends React.Component {
  render() {
    return (
      <div className='container'>

        {this.props.products.map(item => (
          <NewProductItem           
            product={item}
            key={item.id}
            goToEdit={this.props.goToEdit}
            deleteProduct={this.props.deleteProduct}
          />
        ))}
      </div>


    )
  }
}

export default ProductList;

