import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import { Toc } from '@material-ui/icons';
import { useStyles } from './OTPageStyle';
import { useParams } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Autocomplete from '@material-ui/lab/Autocomplete';

function createData(id, name, cantidad) {
    return {id,  name, cantidad };
}

const Activos = [
    {name: 'Activo 1'},
    {name: 'Activo 2'}
];

const Materiales = [
    {name: 'Material 1'},
    {name: 'Material 2'}
];

let rowsActivos = [
    createData(1, 'Activo 1', '4'),
    createData(2, 'Activo 2', '2'),
];

let rowsMateriales = [
    createData(1, 'Material 1', '7'),
    createData(2, 'Material 2', '2'),
];

export const EditOTPage = () => {

    const [state, setState] = useState({disabled: true})
    const [openActives, setOpenActives] = useState(false);
    const [openMaterials, setOpenMaterials] = useState(false);
    const [active, setActive] = useState({activeValue: ''});
    const [amount, setAmount] = useState({amountValue: ''});
    const [materials, setMaterials] = useState({materialsValue: ''});
    const [location, setLocation] = useState({locationValue: ''});
    const [material, setMaterial] = useState(rowsMateriales)
    const [activo, setActivo] = useState(rowsActivos)
    const classes = useStyles();
    const params = useParams();
    
    let title = '';

    if (params.otId) {
        title = `Editar ${params.otId}`;
    } else {
        title = 'Crear nueva OT';
    }

    //Dialog Actives abrir y agregar
    const handleClickOpenActives = () => {
        setOpenActives(true);
    };

    const handleCloseActives = () => {
        setOpenActives(false);
    };

    const handleCloseSaveActives = (e) => {
        if (activo.length > 0) {
            setActivo([...activo, createData(activo.pop().id + 1, active, amount)]);
        } else {
            setActivo([createData(1, active, amount)]);
        }
        setOpenActives(false);
    }

    const handleChangeActives = (e, value) => {
        if (e.target.id === 'amount') {
            setAmount(e.target.value);
        } else {
            setActive(value.name);
        }
    }

    //Dialog Materils abrir y agregar
    const handleClickOpenMaterials = () => {
        setOpenMaterials(true);
    };

    const handleCloseMaterials = () => {
        setOpenMaterials(false);
    };

    const handleCloseSaveMaterials = (e) => {
        if (material.length > 0) {
            setMaterial([...material, createData(material.pop().id + 1, materials, location)]);
        } else {
            setMaterial([createData(1, materials, location)]);
        }
        setOpenMaterials(false);
    }

    const handleChangeMaterials = (e, value) => {
        if (e.target.id === 'location') {
            setLocation(e.target.value);
        } else {
            setMaterials(value.name);
        }
    }

    //Eliminar data Arreglo
    const handleDelete = (e, arr, deleteData, item) => {
        const deleteArr = arr.filter( data => item.id !== data.id);
        if ('deleteM' === deleteData) {
            setMaterial(deleteArr);
        } else if ('deleteA' === deleteData) {   
            setActivo(deleteArr);
        }
    }

    
    
    const toggleChange = () => {
        setState({disabled: !state.disabled});
    }

    return (
        <div className={classes.root}>
            <Paper elevation={2} className={classes.paper}>
                <Grid container spacing={2}>
                    <Paper elevation={0} item xs={12} sm container className={classes.bar}>
                        <h5><Toc />{ title }</h5>
                    </Paper>
                    
                    <Grid item container>
                        <form className={classes.form}>
                            <Grid className={classes.title}>
                                <h5>Sección Datos Cliente</h5>
                            </Grid>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Grid item>
                                        <TextField label="Nombre " className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Dirección" className={ classes.field } />
                                    </Grid>  
                                </Grid>
                                <Grid item>
                                    <Grid item>
                                        <TextField label="Localidad" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Telefono" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Correo" className={ classes.field } />
                                    </Grid>  
                                </Grid>
                            </Grid>

                            <Grid className={classes.title}>
                                <h5>Sección OT</h5>
                            </Grid>
                            <Grid container justify="center" spacing={2}>
                                <Grid item>
                                    <Grid item>
                                        <TextField label="Tipo de trabajo" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Habilidad requerida" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <div className={classes.field}>
                                            Agendamiento
                                            <Switch
                                                color="primary"
                                                name="checkedB"
                                                onChange={ toggleChange }
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        </div>
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Inicio" className={ classes.field } disabled={state.disabled} />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Termino" className={ classes.field } disabled={state.disabled} />
                                    </Grid>  
                                </Grid>
                                <Grid item>
                                    <Grid item>
                                        <TextField label="Estado" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Movil" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Diagnostico" className={ classes.field } />
                                    </Grid>  
                                    <Grid item>
                                        <TextField label="Solución" className={ classes.field } />
                                    </Grid>  
                                </Grid>
                            </Grid>
                            <Grid className={classes.title}>
                                <h5>Lista relacionada activos afectados</h5>
                            </Grid>
                            <Grid>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table className={classes.table} aria-label="caption table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell align="left">Cantidad</TableCell>
                                                <TableCell align="left">
                                                    <Button color='primary' variant='contained' onClick={ handleClickOpenActives }>
                                                        AÑADIR ACTIVO
                                                    </Button>
                                                    <Dialog open={openActives} onClose={ handleCloseActives } aria-labelledby="form-dialog-title">
                                                        <DialogTitle id="form-dialog-title">Agregar un activo</DialogTitle>
                                                        <DialogContent>
                                                            <Autocomplete
                                                                options={Activos}
                                                                onChange={ handleChangeActives }
                                                                getOptionLabel={(option) => option.name}
                                                                renderInput={(params) => 
                                                                    <TextField 
                                                                        {...params} 
                                                                        id="active"
                                                                        label="Activo"
                                                                        type="input"
                                                                        className={ classes.dialogText }
                                                                    />
                                                                }
                                                            />
                                                            <TextField
                                                                value={ amount.amountValue }
                                                                id="amount"
                                                                label="Cantidad"
                                                                type="input"
                                                                onChange={ handleChangeActives }
                                                                className={ classes.dialogText }
                                                            />
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={ handleCloseMaterials } color="primary">
                                                                Cerrar
                                                            </Button>
                                                            <Button onClick={ e => handleCloseSaveActives(e) } color="primary">
                                                                Guardar
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {activo.map((row) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{ row.name }</TableCell>
                                                    <TableCell align="left">{ row.cantidad }</TableCell>
                                                    <TableCell align="left">
                                                        <Button color='secondary' id='deleteA' variant='contained' onClick={ e => handleDelete(e, activo, 'deleteA', row) }>
                                                            ELIMINAR
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid className={classes.title}>
                                <h5>Lista relacionada materiales utilizados</h5>
                            </Grid>
                            <Grid>
                                <TableContainer elevation={0} component={Paper}>
                                    <Table className={classes.table} aria-label="caption table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Nombre</TableCell>
                                                <TableCell align="left">Localidad</TableCell>
                                                <TableCell align="left">
                                                    <Button color='primary' variant='contained' onClick={handleClickOpenMaterials}>
                                                        AÑADIR MATERIAL
                                                    </Button>
                                                    <Dialog open={openMaterials} onClose={ handleCloseMaterials } aria-labelledby="form-dialog-title">
                                                        <DialogTitle id="form-dialog-title">Agregar un activo</DialogTitle>
                                                        <DialogContent>
                                                            <Autocomplete
                                                                options={Materiales}
                                                                onChange={ handleChangeMaterials }
                                                                getOptionLabel={(option) => option.name}
                                                                renderInput={(params) => 
                                                                    <TextField 
                                                                        {...params} 
                                                                        id="material"
                                                                        label="Material"
                                                                        type="input"
                                                                        className={ classes.dialogText }
                                                                    />
                                                                }
                                                            />
                                                            <TextField
                                                                value={ location.locationValue }
                                                                id="location"
                                                                label="Localidad"
                                                                type="input"
                                                                onChange={ handleChangeMaterials }
                                                                className={ classes.dialogText }
                                                            />
                                                        </DialogContent>
                                                        <DialogActions>
                                                            <Button onClick={ handleCloseMaterials } color="primary">
                                                                Cerrar
                                                            </Button>
                                                            <Button onClick={ e => handleCloseSaveMaterials(e) } color="primary">
                                                                Guardar
                                                            </Button>
                                                        </DialogActions>
                                                    </Dialog>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {material.map((row) => (
                                                <TableRow>
                                                    <TableCell component="th" scope="row">{ row.name }</TableCell>
                                                    <TableCell align="left">{ row.cantidad }</TableCell>
                                                    <TableCell align="left">
                                                        <Button color='secondary' id='deleteM' variant='contained' onClick={ e => handleDelete(e, material, 'deleteM', row) }>
                                                            ELIMINAR
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                            <Grid className={classes.save}>
                                <Button color='primary' variant='contained'>
                                    GUARDAR
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
