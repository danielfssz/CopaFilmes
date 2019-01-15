using System;
using System.Collections.Generic;
using System.Linq;
using CopaFilmes.Models;
using Microsoft.AspNetCore.Mvc;

namespace CopaFilmes.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class CampeonatoController : ControllerBase {

        [HttpPost]
        public void Post ([FromBody] List<Filme> listaFilmes) {
            Campeonato campeonato = new Campeonato (listaFilmes);

            campeonato.IniciarPartidas ();

        }
    }
}