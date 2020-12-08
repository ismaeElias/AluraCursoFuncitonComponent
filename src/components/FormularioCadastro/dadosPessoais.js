import React, { useState, useContext } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import validacoesCadastro from "../../context/validacoes";
import useErros from "../../hooks/useErros";

export function DadosPessoais({ onSubmit }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(validacoesCadastro);
  const [error,validarCampos,possoEnviar] = useErros(validacoes);




  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit({ nome, sobrenome, cpf, promocao, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        type="text"
        id="nome"
        label="Nome"
        variant="outlined"
        onBlur={validarCampos}
        error={!error.nome.valido}
        helperText={error.nome.texto}
        fullWidth
        margin="normal"
        required
        name="nome"
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        type="text"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        name="sobrenome"
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        type="text"
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
        required
        name="cpf"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocao(event.target.checked);
            }}
            name="promocao"
            checked={promocao}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Proximo
      </Button>
    </form>
  );
}
