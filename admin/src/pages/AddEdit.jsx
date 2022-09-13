
import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { Switch, FormControl, FormControlLabel } from '@mui/material';
import { InputLabel, MenuItem, Select } from '@mui/material';

import useStyles from '../components/Form/styles.js';
import { createPost, updatePost } from '../actions/posts';

const AddEdit = ({ currentId, setCurrentId }) => {

  const [postData, setPostData] = useState({
    brand: '', 
      model: '', 
      version: '', 
      type: '', 
      year: '',
      km: '',
      motor: '',
      owners: '',
      tapizado: '',
      location: '',
      power: '',
      accel: '',
      fuelConsumption: '',
      fuelCapacity: '',
      price: '',
      transmission: '', 
      fuel: '', 
      t4x4: false,
      armor: false,
      folder: '',
      mainImgN: '',
      mainImgD: '',
      othersImgN: [],
      othersImgD: []
  });
  //const [folder, setFolder] = useState("");
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      brand: '', 
      model: '', 
      version: '', 
      type: '', 
      year: '',
      km: '',
      motor: '',
      owners: '',
      tapizado: '',
      location: '',
      power: '',
      accel: '',
      fuelConsumption: '',
      fuelCapacity: '',
      price: '',
      transmission: '', 
      fuel: '', 
      t4x4: false,
      armor: false,
      addInfo: '',
      details: '',
      folder: '',
      mainImgN: '',
      mainImgD: '',
      othersImgN: [],
      othersImgD: []
    });
  };

    //const endpoint = "https://ik.imagekit.io/cdty/tcp/";

    const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  //console.log(postData);

  function getImages(e, prop) {
    //console.log(e);
    const array = [];
    for (const img of e) {
      //array.push(endpoint + folder + "/" + img[prop]); 
      array.push(img[prop]);
    }
    console.log(array);
    return array;
  }
  console.log(post);
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        
        <Typography variant="h6">{currentId ? `Editing "${post._id}"` : 'Creating a Car Entry'}</Typography>


        <TextField name="brand" 
          variant="outlined" 
          label="Marca" 
          fullWidth 
          value={postData.brand} 
          onChange={(e) => setPostData({ ...postData, brand: e.target.value })} />

        <TextField name="model" 
          variant="outlined" 
          label="Modelo" 
          fullWidth 
          value={postData.model} 
          onChange={(e) => setPostData({ ...postData, model: e.target.value })} />

        <TextField name="version" 
          variant="outlined" 
          label="Version" 
          fullWidth 
          value={postData.version} 
          onChange={(e) => setPostData({ ...postData, version: e.target.value })} />

        <FormControl fullWidth>
          <InputLabel id="type-rgb">Tipo</InputLabel>
          <Select
            labelId="type-rgb"
            value={postData.type}
            label="Tipo"
            fullWidth
            onChange={(e) => setPostData({ ...postData, type: e.target.value })}
          >
            <MenuItem value="Carro">Carro</MenuItem>
            <MenuItem value={"Camioneta"}>Camioneta</MenuItem>
            <MenuItem value={"Camion"}>Camion</MenuItem>
          </Select>
        </FormControl>

        <TextField name="year" 
          variant="outlined" 
          label="Año" 
          fullWidth 
          value={postData.year} 
          onChange={(e) => setPostData({ ...postData, year: e.target.value })} />

        <TextField name="km" 
          variant="outlined" 
          label="Kilometraje" 
          fullWidth 
          value={postData.km} 
          onChange={(e) => setPostData({ ...postData, km: e.target.value })} />

        <TextField name="motor" 
          variant="outlined" 
          label="Motor" 
          fullWidth 
          value={postData.motor} 
          onChange={(e) => setPostData({ ...postData, motor: e.target.value })} />

        <TextField name="owners" 
                  variant="outlined" 
                  label="Dueños" 
                  fullWidth 
                  value={postData.owners} 
                  onChange={(e) => setPostData({ ...postData, owners: e.target.value })} />
                  
        <TextField name="tapizado" 
                  variant="outlined" 
                  label="Tapizado" 
                  fullWidth 
                  value={postData.tapizado} 
                  onChange={(e) => setPostData({ ...postData, tapizado: e.target.value })} />

        <TextField name="location" 
                  variant="outlined" 
                  label="Ubicacion" 
                  fullWidth 
                  value={postData.location} 
                  onChange={(e) => setPostData({ ...postData, location: e.target.value })} />

        <TextField name="power" 
          variant="outlined" 
          label="Potencia" 
          fullWidth 
          value={postData.power} 
          onChange={(e) => setPostData({ ...postData, power: e.target.value })} />

        <TextField name="accel" 
                  variant="outlined" 
                  label="Aceleracion" 
                  fullWidth 
                  value={postData.accel} 
                  onChange={(e) => setPostData({ ...postData, accel: e.target.value })} />

        <TextField name="fuelConsumption" 
                  variant="outlined" 
                  label="Consumo de combustible" 
                  fullWidth 
                  value={postData.fuelConsumption} 
                  onChange={(e) => setPostData({ ...postData, fuelConsumption: e.target.value })} />

        <TextField name="fuelCapacity" 
          variant="outlined" 
          label="Capacidad del tanque" 
          fullWidth 
          value={postData.fuelCapacity} 
          onChange={(e) => setPostData({ ...postData, fuelCapacity: e.target.value })} />

        <TextField name="price" 
          variant="outlined" 
          label="Precio" 
          fullWidth 
          value={postData.price} 
          onChange={(e) => setPostData({ ...postData, price: e.target.value })} />

        <FormControl fullWidth>
          <InputLabel id="transmission-rgb">Trasmision</InputLabel>
          <Select
            labelId="transmission-rgb"
            value={postData.transmission}
            label="Trasmision"
            onChange={(e) => setPostData({ ...postData, transmission: e.target.value })}
          >
            <MenuItem value="Manual">Manual</MenuItem>
            <MenuItem value="Automatico">Automatico</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="fuel-rgb">Combustible</InputLabel>
          <Select
            labelId="fuel-rgb"
            value={postData.fuel}
            label="Combustible"
            onChange={(e) => setPostData({ ...postData, fuel: e.target.value })}
          >
            <MenuItem value="Gasolina">Gasolina</MenuItem>
            <MenuItem value="Diesel">Diesel</MenuItem>
            <MenuItem value="Hibrido">Hibrido</MenuItem>
          </Select>
        </FormControl>


        <FormControlLabel control={
          <Switch  
            checked={postData.armor}
            onChange={(e) => setPostData({ ...postData, armor: e.target.checked })}
          />} label="Blindaje" />
 
        <FormControlLabel control={
          <Switch  
            checked={postData.t4x4}
            onChange={(e) => setPostData({ ...postData, t4x4: e.target.checked })} />} 
            label="4x4" />


        <TextField name="addInfo" 
          variant="outlined" 
          label="Informacion Adicional" 
          fullWidth 
          multiline 
          rows={2} 
          value={postData.addInfo} 
          onChange={(e) => setPostData({ ...postData, addInfo: e.target.value })} />

          <TextField name="details" 
          variant="outlined" 
          label="Detalles" 
          fullWidth 
          multiline 
          rows={2} 
          value={postData.details} 
          onChange={(e) => setPostData({ ...postData, details: e.target.value })} />

        <TextField name="folder" 
          variant="outlined" 
          label="Folder" 
          fullWidth 
          //value={folder} 
          value={postData.folder} 
          //onChange={(e) => setFolder(e.target.value)} />
          onChange={(e) => setPostData({ ...postData, folder: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" 
            multiple={false} 
            //onDone={({ name }) => setPostData({ ...postData, mainImg: endpoint + folder + "/" + name })}/>
            onDone={({ name, base64 }) => setPostData({ ...postData, mainImgN: name, mainImgD: base64 })}/>
        </div>
        
        <div className={classes.fileInput}>
          <FileBase type="file" 
            multiple={true} 
            //onDone={(e) => setPostData({ ...postData, othersImg: getImages(e, 'name')})} />       
            onDone={(e) => setPostData({ ...postData, othersImgN: getImages(e, 'name'), othersImgD: getImages(e, 'base64')})} /> 
        </div>
        
        <Button className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth>Submit
        </Button>

        <Button variant="contained" 
          color="secondary" 
          size="small" 
          onClick={clear} fullWidth>Clear
        </Button>

      </form>
    </Paper>
  );
};

export default AddEdit;
