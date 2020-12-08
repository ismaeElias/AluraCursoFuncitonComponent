import React, { useState } from 'react';

function useErros(validacoes){

    const estadoInicial = criarEstadoInicial(validacoes);
    const [error, setError] = useState(estadoInicial);  

    function validarCampos(event) {
      const { name, value } = event.target;
      const novoEstado = { ...error };
      novoEstado[name] = validacoes[name](value);
      setError(novoEstado);
    }

    function possoEnviar() {
        for (let campo in error) {
          if (!error[campo].valido) {
            return false;
          }
        }
        return true;
      }

    return [error, validarCampos,possoEnviar];
}

function criarEstadoInicial(validacoes){
    const estadoInicial = {}
    for(let campo in validacoes){
        estadoInicial[campo] =  { valido: true, texto: "" }
    }

    return estadoInicial;
}

export default useErros;