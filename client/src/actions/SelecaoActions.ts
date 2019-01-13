import axios from 'axios';

export const carregaLista = () => {
  return (dispatch: any) => {
    axios
      .get('http://copadosfilmes.azurewebsites.net/api/filmes')
      .then((response: any) => {
        retornaListaSucesso(dispatch, response.data);
      })
      .catch((erro: any) => {
        retornaListaErro(dispatch, erro);
      });
  };
};
const retornaListaSucesso = (dispatch: any, data: any) => {
  dispatch({
    type: 'carrega_lista_sucesso',
    payload: data
  });
};
const retornaListaErro = (dispatch: any, erro: any) => {
  dispatch({
    type: 'carrega_lista_erro',
    payload: erro.message
  });
};
