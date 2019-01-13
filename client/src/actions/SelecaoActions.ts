import APIService from '../app/service/api.service';

export const carregaLista = () => {
  let apiService: APIService = new APIService();
  return (dispatch: any) => {
    apiService
      .getFilmes()
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

export const atualizaLista = (filme: any, listaSelecionados: any[]) => {
  let index = listaSelecionados.findIndex(item => item.id === filme.id);

  if (index > -1) listaSelecionados.splice(index, 1);
  else listaSelecionados.push(filme);

  return {
    type: 'atualiza_lista',
    payload: listaSelecionados
  };
};
