import React, { useContext } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CounterContext } from "../../Context";
import useAuth from "../../Hooks/useAuth";


// Diferentes formas de construir un componente

// class ComponenteClase extends Reac.Componente {
//     render() {
// Debe retornar y los fracment donde van las funciones del componente
//         return <>Contenido</>
//   }
// }

// La otra forma es en una función 

// function ComponenteFuncion() {
//  return <>Contenido</>
// }

// La tercera es en una constante con una Arrow función anonima

// const ComponenteFuncion = () => {
//  return <>Contenido</>
// }

const Step = ({ data, step, pasos }) => {
  const { inputs, buttonText, onSubmit } = data;

  const counterData = useContext(CounterContext);

  const access = useAuth("counterData.user.jwt");
  console.log(access);

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
      onSubmit={(e) => onSubmit(e, step, pasos)}
    >
      <strong>El valor es { counterData.count } </strong>
      {inputs.map((input, i) => {
        const { label, type, value, valid, onChange, helperText, validator } =
          input;

        return (
          <TextField
            key={i}
            label={label}
            variant="standard"
            fullWidth
            margin="dense"
            type={type}
            error={valid === false}
            helperText={valid === false && helperText}
            value={value}
            onChange={(e) => onChange(e, i, step, validator, pasos)}
          />
        );
      })}

      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;
