const INITIAL_STATE = {
  listaFilmes: [],
  listaSelecionados: [],
  listaVencedores: [],
  error: ''
};

export default (state: any = INITIAL_STATE, action: any) => {
  if (action.type == 'carrega_lista_sucesso') {
    return { ...state, listaFilmes: action.payload };
  }
  if (action.type == 'carrega_lista_erro') {
    return { ...state, erro: action.payload };
  }
  if (action.type == 'atualiza_lista') {
    return { ...state, listaSelecionados: action.payload };
  }
  if (action.type == 'carrega_lista_vencedores_sucesso') {
    return { ...state, listaVencedores: action.payload };
  }
  if (action.type == 'carrega_lista_vencedores_erro') {
    return { ...state, erro: action.payload };
  }
  return state;
};
