import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(2, 0),
    width: '100%'
  },
  textField: {
    marginRight: theme.spacing(4),
    width: 300,
  },
  textArea: {
  },
  dense: {
    marginTop: 19,
  },
  button: {
    margin: theme.spacing(1),
  },
  menu: {
    width: 200,
  }
});

class NewProductForm extends React.Component {
  constructor(props) {
    super(props);    
    this.types = ['Herramienta', 'Herramienta Electrica','Sanitaria','Iluminacion', 'Varios'];

    if (this.props.product) {
      // It is an Product EDIT.
      // The form starts with the values of the product to edit.
      this.state = {
        name: this.props.product.name,
        type: this.props.product.type,
        trademark: this.props.product.trademark,        
        description: this.props.product.description,
        price: this.props.product.price,
        codigo: this.props.product.codigo
      };
    } else {
      // It is a NEW Product.
      // The form starts with empty values.
      this.state = {
        name: "",
        type: "",        
        trademark: "",        
        description: "",
        price:"",
        codigo:""
      };
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleContactChange = name => event => {
    this.setState({
      contact: {
        ...this.state.contact,
        [name]: event.target.value
      }
    });
  };

  handleSubmit = () => {
    if (this.props.product) {
      // It is an Product EDIT.
      // Use editProduct method.
      this.props.editProduct(this.props.product.id, {
        id: this.props.product.id,
        name: this.state.name,
        type: this.state.type,        
        trademark: this.state.trademark,        
        description: this.state.description,
        price: this.state.price,
        codigo: this.state.codigo
      });
    } else {
      // It is a NEW Product.
      // Use addProduct method.
      this.props.addProduct({
        name: this.state.name,
        type: this.state.type,
        
        trademark: this.state.trademark,
        
        description: this.state.description,
       price: this.state.price,
       codigo: this.state.codigo
      });
    }

    this.props.goToList();
  }

  render() {
    return (
      <form className={this.props.classes.container} noValidate autoComplete="off">
        <Paper className={this.props.classes.paper}>
          <Typography variant="h5">
            Informaciòn del producto
          </Typography>
          <TextField
            id="name"
            label="Nombre"
            className={this.props.classes.textField}
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />

          <TextField
            id="type"
            select
            label="Tipo"
            className={this.props.classes.textField}
            value={this.state.type}
            onChange={this.handleChange('type')}
            SelectProps={{
              MenuProps: {
                className: this.props.classes.menu,
              },
            }}
            helperText="Por favor elija un tipo de producto"
            margin="normal"
          >
            {this.types.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>      
          <TextField
            id="trademark"
            label="Marca"
            className={this.props.classes.textField}
            value={this.state.trademark}
            onChange={this.handleChange('trademark')}
            margin="normal"
          />

                 
       
          <TextField
            id="description"
            label="Descripcion"
            className={this.props.classes.textArea}
            placeholder="Descripcion del producto"
            helperText="Por favor ingrese una descripcion"
            fullWidth
            margin="normal"
            value={this.state.description}
            onChange={this.handleChange('description')}
          />
           <TextField
            id="price"
            label="Precio"
            className={this.props.classes.textField}
            value={this.state.price}
            onChange={this.handleChange('price')}
            margin="normal"
          />
           <TextField
            id="codigo"
            label="Codigo"
            className={this.props.classes.textField}
            value={this.state.codigo}
            onChange={this.handleChange('codigo')}
            margin="normal"
          />
        </Paper>
       

        <div>
          <Button variant="contained" className={this.props.classes.button} onClick={this.props.goToList}>
            Cancel
        </Button>
          <Button variant="contained" color="primary" className={this.props.classes.button} onClick={this.handleSubmit}>
            {this.props.product ? 'Save' : 'Create'}
          </Button>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(NewProductForm);