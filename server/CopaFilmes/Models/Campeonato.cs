using System;
using System.Collections.Generic;
using System.Linq;

namespace CopaFilmes.Models {
    public class Campeonato {

        private List<Filme> _ListaFilmes { get; set; }

        public Campeonato (List<Filme> listaFilmes) {
            // Ordena a lista por ordem alfabetica
            _ListaFilmes = listaFilmes.OrderBy (filme => filme.Titulo).ToList ();
        }

        public List<Filme> IniciarCampeonato () {
            List<Filme> proximaFase = new List<Filme> ();
            List<Filme> vencedores = new List<Filme> ();

            // Realiza a primeira rodada. Primeiro vs Ultimo...
            do {
                var vencedorPartida = Partida.RealizarPartida (_ListaFilmes.FirstOrDefault (), _ListaFilmes.LastOrDefault ());
                _ListaFilmes.Remove (_ListaFilmes.FirstOrDefault ());
                _ListaFilmes.Remove (_ListaFilmes.LastOrDefault ());
                proximaFase.Add (vencedorPartida);
            } while (_ListaFilmes.Count > 0);

            // Realiza as próximas fases, Vencedor do 1 Jogo x 2 Jogo...
            do {
                _ListaFilmes.AddRange (proximaFase);
                proximaFase.Clear ();

                do {
                    var vencedorPartida = Partida.RealizarPartida (_ListaFilmes[0], _ListaFilmes[1]);
                    // Remove os filmes que acabaram de jogar
                    _ListaFilmes.RemoveAt (0);
                    _ListaFilmes.RemoveAt (0);
                    // Adiciona o vencedor a próxima fase
                    proximaFase.Add (vencedorPartida);
                } while (_ListaFilmes.Count > 0);

                _ListaFilmes.AddRange (proximaFase);
                proximaFase.Clear ();

                // Verifica se é a partida final
                if (_ListaFilmes.Count <= 2) {
                    var vencedor = Partida.RealizarPartida (_ListaFilmes.FirstOrDefault (), _ListaFilmes.LastOrDefault ());
                    // Define o campeão como primeira posição na lista
                    vencedores.Add (vencedor);

                    // Verifica se o vencedor é o primeiro ou ultimo na lista dos finalistas e adiciona o segundo lugar.
                    if (vencedor.Equals (_ListaFilmes.FirstOrDefault ())) {
                        vencedores.Add (_ListaFilmes.LastOrDefault ());
                    } else if (vencedor.Equals (_ListaFilmes.LastOrDefault ())) {
                        vencedores.Add (_ListaFilmes.FirstOrDefault ());
                    }
                }
            }
            while (vencedores.Count <= 0);
            return vencedores;
        }

    }
}