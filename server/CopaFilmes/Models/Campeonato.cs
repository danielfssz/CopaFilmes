using System;
using System.Collections.Generic;
using System.Linq;

namespace CopaFilmes.Models {
    public class Campeonato {

        private List<Filme> _ListaFilmes { get; set; }

        public Campeonato (List<Filme> listaFilmes) {
            _ListaFilmes = listaFilmes.OrderBy (filme => filme.Titulo).ToList ();
        }

        public List<Filme> IniciarCampeonato () {
            List<Filme> proximaFase = new List<Filme> ();
            List<Filme> vencedores = new List<Filme> ();

            do {
                var vencedorPartida = Partida.RealizarPartida (_ListaFilmes.FirstOrDefault (), _ListaFilmes.LastOrDefault ());
                _ListaFilmes.Remove (_ListaFilmes.FirstOrDefault ());
                _ListaFilmes.Remove (_ListaFilmes.LastOrDefault ());
                proximaFase.Add (vencedorPartida);
            } while (_ListaFilmes.Count > 0);

            do {
                _ListaFilmes.AddRange (proximaFase);
                proximaFase.Clear ();

                do {
                    var vencedorPartida = Partida.RealizarPartida (_ListaFilmes[0], _ListaFilmes[1]);
                    _ListaFilmes.RemoveAt (0);
                    _ListaFilmes.RemoveAt (0);
                    proximaFase.Add (vencedorPartida);
                } while (_ListaFilmes.Count > 0);

                _ListaFilmes.AddRange (proximaFase);
                proximaFase.Clear ();

                if (_ListaFilmes.Count <= 2) {
                    var vencedor = Partida.RealizarPartida (_ListaFilmes.FirstOrDefault (), _ListaFilmes.LastOrDefault ());
                    vencedores.Add (vencedor);

                    if (!vencedor.Equals (_ListaFilmes.LastOrDefault ()))
                        vencedores.Add (_ListaFilmes.LastOrDefault ());
                }
            }
            while (vencedores.Count <= 0);
            return vencedores;
        }

    }
}