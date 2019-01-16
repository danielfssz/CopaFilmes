import APIService from '../app/service/api.service';

export const carregaLista = () => {
  let apiService: APIService = new APIService();
  return (dispatch: any) => {
    apiService
      .getFilmes()
      .then((response: any) => {
        carregaListaSucesso(dispatch, response.data);
      })
      .catch((erro: any) => {
        carregaListaErro(dispatch, erro);
      });
  };
};

export const atualizaListaSelecionados = (
  filme: any,
  listaSelecionados: any[]
) => {
  let index = listaSelecionados.findIndex(item => item.id === filme.id);

  if (index > -1) listaSelecionados.splice(index, 1);
  else listaSelecionados.push(filme);

  return {
    type: 'atualiza_lista',
    payload: listaSelecionados
  };
};

export const carregaVencedores = (listaSelecionados: any[]) => {
  let apiService: APIService = new APIService();
  return (dispatch: any) => {
    apiService
      .uploadFilmes(listaSelecionados)
      .then((response: any) => {
        carregaListaVencedoresSucesso(dispatch, response.data);
      })
      .catch((erro: any) => {
        carregaListaVencedoresErro(dispatch, erro);
      });
  };
};

const carregaListaSucesso = (dispatch: any, data: any) => {
  dispatch({
    type: 'carrega_lista_sucesso',
    payload: data
  });
};

const carregaListaErro = (dispatch: any, erro: any) => {
  dispatch({
    type: 'carrega_lista_erro',
    payload:
      erro.message +
      '- Erro ao recuperar os dados, entre em contato com o desenvolvedor.'
  });
};

const carregaListaVencedoresSucesso = (dispatch: any, data: any) => {
  dispatch({
    type: 'carrega_lista_vencedores_sucesso',
    payload: data
  });
};

const carregaListaVencedoresErro = (dispatch: any, erro: any) => {
  dispatch({
    type: 'carrega_lista_vencedores_erro',
    payload:
      erro.message +
      '- Erro ao recuperar os dados, entre em contato com o desenvolvedor.'
  });
};
