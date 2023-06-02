import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";


const DatosPersonales = ({ updateStep }) => {

  const [nombre, setNombre] = useState({ value: "",valid: null })
  const [apellido, setApellido] = useState({ value: "",valid: null })
  const [telefono, setTelefono] = useState({ value: "",valid: null })


  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit= {(e) => {
        e.preventDefault();
        updateStep(2)
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ nombre.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarNombre(value)
          setNombre({ value, valid })
          console.log(value, valid);
        }}
        error={ 
          nombre.valid == false
        }
        helperText={
          nombre.valid == false && "Ingresa almenos 2 caracteres y máximo 30 caracteres"
        }
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ apellido.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarApellidos(value)
          setApellido({ value, valid })
          console.log(value, valid);
        }}
        error={ 
          apellido.valid == false
        }
        helperText={
          apellido.valid == false && "Ingresa almenos 2 caracteres y máximo 50 caracteres"
        }
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={ telefono.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarTelefono(value)
          setTelefono({ value, valid })
          console.log(value, valid);
        }}
        error={ 
          telefono.valid == false
        }
        helperText={
          telefono.valid == false && "Ingresa almenos 8 números y máximo 14 números"
        }
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
