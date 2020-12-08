import React, { useState } from "react";

import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

export function FormularioCadastro({ onSubmit, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [error, setError] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ nome, sobrenome, cpf, promocao, novidades });
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
        fullWidth
        margin="normal"
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
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const valido  = validarCPF(event.target.value);
          setError({cpf : valido})
        }}
        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        type="text"
        id="cpf"
        label="CPF"
        variant="outlined"
        fullWidth
        margin="normal"
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
        Cadastrar
      </Button>
    </form>
  );
}
