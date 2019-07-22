import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        flexWrap: 'wrap',
        marginTop: '20px',
        display: 'flex',
        height: '70px'
    },
    fab: {
        flex: '0 0 56px'
    },
    breadCrumb: {
        flex: 1,
        alignSelf: 'center'
    }
});

class AddButton extends React.Component {
    additionalSection() {
        switch (this.props.section) {
            case 'newProduct':
                return <Typography color="textPrimary">Crear nuevo producto</Typography>;
            case 'editProduct':
                return <Typography color="textPrimary">{this.props.product.name}</Typography>;
            case 'list':
            default:
                return null;
        }
    }

    addNewProductButton() {
        if (this.props.section !== 'newProduct') {
            return (
                <Fab color="primary" aria-label="Add" className={this.props.classes.fab} onClick={this.props.goToNewProduct}>
                    <AddIcon />
                </Fab>
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <Breadcrumbs aria-label="Breadcrumb" className={this.props.classes.breadCrumb}>
                    <Link color="inherit" href="#/" onClick={this.props.goToList}>
                        Productos
                    </Link>
                    {this.additionalSection()}
                </Breadcrumbs>
                {this.addNewProductButton()}
            </div>
        );
    }
}

export default withStyles(styles)(AddButton);