using System;
using System.Collections.Generic;
using System.Linq;

namespace CopaFilmes.Models {
    public class Campeonato {

        private List<Filme> _ListaFilmes { get; set; }

        public Campeonato (List<Filme> listaFilmes) {
            _ListaFilmes = listaFilmes.OrderBy (filme => filme.Titulo).ToList ();
        }

        public void IniciarPartidas () {
            Console.WriteLine (_ListaFilmes);
        }

    }
}