using System.Collections.Generic;
using System.Linq;

namespace CopaFilmes.Models {
    public static class Partida {
        public static Filme RealizarPartida (Filme filme1, Filme filme2) {
            Filme vencedor;
            if (filme1.Nota > filme2.Nota)
                vencedor = filme1;
            else if (filme2.Nota > filme1.Nota)
                vencedor = filme2;
            else {
                var filmes = new List<Filme> ();
                filmes.Add (filme1);
                filmes.Add (filme2);
                vencedor = filmes.OrderBy (filme => filme.Titulo).FirstOrDefault ();
            }
            return vencedor;
        }
    }
}