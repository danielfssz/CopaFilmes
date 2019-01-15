using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using CopaFilmes.Models;
using CopaFilmes.Services;
using Newtonsoft.Json;

namespace CopaFilmes.Services {
    public class FilmeService : IFilmeService {
        static readonly HttpClient client = new HttpClient ();
        public FilmeService () {
            // Configura o endereço da api
            client.BaseAddress = new Uri ("http://copadosfilmes.azurewebsites.net/");
            // Add os headers
            client.DefaultRequestHeaders.Accept.Add (new MediaTypeWithQualityHeaderValue ("application/json"));

        }
        public async Task<List<Filme>> GetFilmesAsync () {
            // Configura rota da API para buscar os dados
            HttpResponseMessage response = await client.GetAsync ("api/filmes");

            // Retorno Http.status == 200
            if (response.IsSuccessStatusCode) {
                var dados = await response.Content.ReadAsStringAsync ();

                // Deserializa e converte os dados retornados em um List<Filme>
                return JsonConvert.DeserializeObject<List<Filme>> (dados);
            }
            return new List<Filme> ();
        }

    }
}