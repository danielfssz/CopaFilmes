import axios from 'axios';

export default class APIService {
  private addressPost: string = 'http://10.19.164.105:5000';

  private axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*'
    }
  };
  public uploadFilme(listaFilmes: any[]): Promise<any> {
    return new Promise((resolve, reject) => {
      axios
        .post(this.addressPost, listaFilmes, this.axiosConfig)
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
        .get('http://copadosfilmes.azurewebsites.net/api/filmes')
        .then((response: any) => {
          resolve(response);
        })
        .catch((erro: any) => {
          resolve(erro);
        });
    });
  }
}
