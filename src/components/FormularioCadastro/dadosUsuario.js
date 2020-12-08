import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import validacoesCadastro from "../../context/validacoes";
import useErros from "../../hooks/useErros";

export function DadosUsuario({ onSubmit }) {
  const validacoes = useContext(validacoesCadastro);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error,validarCampos,possoEnviar] = useErros(validacoes);



  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if(possoEnviar()){
          onSubmit({email,senha});
        }
      }}
    >
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        name="email"
      />
      <TextField
        id="senha"
        label="Senha"
        error={!error.senha.valido}
        helperText={error.senha.texto}
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        name="senha"
      />
      <Button variant="contained" color="primary" type="submit">
        Proximo
      </Button>
    </form>
  );
}
