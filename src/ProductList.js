import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NewProductItem from './NewProductItem';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  }
});

class ProductList extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Marca</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Código</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.products.map(item => (
              <NewProductItem
                product={item}
                key={item.id}
                goToEdit={this.props.goToEdit}
                deleteProduct={this.props.deleteProduct}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(ProductList);

