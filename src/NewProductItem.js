import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class NewProductItem extends React.Component {
  editProduct = () => {
    this.props.goToEdit(this.props.product);
  }

  deleteProduct = () => {
    this.props.deleteProduct(this.props.product.id);
  }

  render() {
    return (
      <TableRow>
        <TableCell component="th" scope="row">
          {this.props.product.name}
        </TableCell>
        <TableCell>{this.props.product.type}</TableCell>
        <TableCell>{this.props.product.trademark}</TableCell>
        <TableCell>{this.props.product.price}</TableCell>
        <TableCell>{this.props.product.codigo}</TableCell>
        <TableCell align="right">
          <IconButton aria-label="Edit" onClick={this.editProduct}>
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton aria-label="Delete" onClick={this.deleteProduct}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }
}

export default NewProductItem;