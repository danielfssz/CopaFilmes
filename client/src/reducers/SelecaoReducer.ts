const INITIAL_STATE = {
  listaFilmes: [],
  error: ''
};

export default (state: any = INITIAL_STATE, action: any) => {
  if (action.type == 'carrega_lista_sucesso') {
    return { ...state, listaFilmes: action.payload };
  }
  if (action.type == 'carrega_lista_erro') {
    return { ...state, erro: action.payload };
  }
  return state;
};
