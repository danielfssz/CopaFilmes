import axios from 'axios';

export default class APIService {
  private address: string = 'https://localhost:5001';

  private axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  };
  public uploadFilmes(listaSelecionados: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .post(
          this.address + '/api/campeonato',
          listaSelecionados,
          this.axiosConfig
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
  public getFilmes(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(this.address + '/api/filmes', this.axiosConfig)
        .then((response: any) => {
          resolve(response);
        })
        .catch((erro: any) => {
          reject(erro);
        });
    });
  }
}
