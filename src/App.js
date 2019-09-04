import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import AddButton from './AddButton';
import { Fab } from '@material-ui/core';
import NewProductForm from './NewProductForm';
import NewProductItem from './NewProductItem';
import ProductList from './ProductList';
import Container from '@material-ui/core/Container';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: 'list',
      productToEdit: null,
      products: [
        {
          id: 1,
          name: "Amoladora",
          type: "Herramienta Electrica",
          trademark: "Truper",
          description: "Amoladora Truper de 1800W",
          price: "$4990",
          codigo: "C1234"
        }
      ]




    }
  }
  addProduct = (newProduct) => {
    this.setState({
      products: [...this.state.products, {
        id: newProduct.name,
        ...newProduct
      }]
    });
  }
  editProduct = (id, newProductData) => {
    this.setState({
      products: this.state.products.map(item => item.id === id ? newProductData : item)
    })
  }
  deleteProduct = (id) => {
    this.setState({
      products: this.state.products.filter(item => item.id !== id)
    });
  }
  goToNewProduct = () => {
    this.setState({
      section: 'newProduct'
    });
  }
  goToEdit = (product) => {
    this.setState({
      section: 'editProduct',
      productToEdit: product
    });
  }
  goToList = () => {
    this.setState({
      section: 'list'
    });
  }
  currentSection() {
    switch (this.state.section) {
      case 'newProduct':
        return (
          <NewProductForm
            goToList={this.goToList}
            addProduct={this.addProduct}
          />
        );
      case 'editProduct':
        return (
          <NewProductForm
            goToList={this.goToList}
            editProduct={this.editProduct}
            product={this.state.productToEdit}
          />
        );
      case 'list':
      default:
        return (
          <ProductList
            products={this.state.products}
            goToEdit={this.goToEdit}
            deleteProduct={this.deleteProduct}
          />
        );

    }
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <Container maxWidth="lg">
          <AddButton
            product={this.state.productToEdit}
            section={this.state.section}
            goToNewProduct={this.goToNewProduct}
            goToList={this.goToList}
          />
          {this.currentSection()}
        </Container>
      </div>
    );
  }
}

export default App;
