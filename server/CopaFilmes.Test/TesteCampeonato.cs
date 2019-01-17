using System;
using System.Collections.Generic;
using System.Linq;
using CopaFilmes.Models;
using Xunit;

namespace CopaFilmes.Test {
    public class TesteCampeonato {
        [Fact]
        public void TestaRetornoDoFilmeCampeaoVingadores () {
            //Given
            var listaFilmes = new List<Filme> ();

            listaFilmes.Add (new Filme { Id = "tt3606756", Titulo = "Os Incríveis 2", Ano = 2018, Nota = 8.5 });
            listaFilmes.Add (new Filme { Id = "tt4881806", Titulo = "Jurassic World: Reino Ameaçado", Ano = 2018, Nota = 6.7 });
            listaFilmes.Add (new Filme { Id = "tt5164214", Titulo = "Oito Mulheres e um Segredo", Ano = 2018, Nota = 6.3 });
            listaFilmes.Add (new Filme { Id = "tt3606756", Titulo = "Hereditário", Ano = 2018, Nota = 7.8 });
            listaFilmes.Add (new Filme { Id = "tt4154756", Titulo = "Vingadores: Guerra Infinita", Ano = 2018, Nota = 8.8 });
            listaFilmes.Add (new Filme { Id = "tt5463162", Titulo = "Deadpool 2", Ano = 2018, Nota = 8.1 });
            listaFilmes.Add (new Filme { Id = "tt3778644", Titulo = "Han Solo: Uma História Star Wars", Ano = 2018, Nota = 7.2 });
            listaFilmes.Add (new Filme { Id = "tt3501632", Titulo = "Thor: Ragnarok", Ano = 2017, Nota = 7.9 });

            var listaDeCampeoesMock = new List<Filme> ();
            listaDeCampeoesMock.Add (new Filme { Id = "tt4154756", Titulo = "Vingadores: Guerra Infinita", Ano = 2018, Nota = 8.8 });
            listaDeCampeoesMock.Add (new Filme { Id = "tt3606756", Titulo = "Os Incríveis 2", Ano = 2018, Nota = 8.5 });

            //When
            var campeonato = new Campeonato (listaFilmes);
            var filmesCampeoesASeremTestados = campeonato.IniciarCampeonato ();

            //Then
            Assert.Equal (listaDeCampeoesMock.FirstOrDefault ().Id, filmesCampeoesASeremTestados.FirstOrDefault ().Id);
        }

        [Fact]
        public void TestaPartida () {
            //Given
            var filmePerdedor = new Filme { Id = "tt3606756", Titulo = "Os Incríveis 2", Ano = 2018, Nota = 8.5 };

            var filmeGanhador = new Filme { Id = "tt4154756", Titulo = "Vingadores: Guerra Infinita", Ano = 2018, Nota = 8.8 };
            //When
            var resultadoDaPartida = Partida.RealizarPartida (filmePerdedor, filmeGanhador);

            //Then
            Assert.Equal (filmeGanhador.Id, resultadoDaPartida.Id);
        }
    }
}