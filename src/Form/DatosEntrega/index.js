import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {

  const [address, setAddress] = useState({ value: '', valid: null })
  const [city, setCity] = useState({ value: '', valid: null })
  const [estado, setEstado] = useState({ value: '', valid: null })


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
        updateStep(3)
        console.log( address, city, estado);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ address.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setAddress({ value, valid })
        }}
         error={ 
          address.valid === false
        }
        helperText={
          address.valid === false && "Ingresa almenos 4 acaracteres"
        }
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ city.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setCity({ value, valid })
        } }
         error={ 
          city.valid === false
        }
        helperText={
          city.valid === false && "Ingresa almenos 4 acaracteres"
        }
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ estado.value }
        onChange = { (input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setEstado({ value, valid })
        } }
         error={ 
          estado.valid === false
        }
        helperText={
          estado.valid === false && "Ingresa almenos 4 acaracteres"
        }
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
