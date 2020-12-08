import React from "react";
import "./App.css";
import { FormularioCadastro } from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCPF, validarSenha } from "./models/cadastro";
import validacoesCadastro from "./context/validacoes";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulario de cadastro
      </Typography>
      <validacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}
      >
        <FormularioCadastro onSubmit={onSubmitForm} />
      </validacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log(dados);
}

export default App;
