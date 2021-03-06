using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using CopaFilmes.Models;
using CopaFilmes.Services;
using Microsoft.AspNetCore.Mvc;

namespace CopaFilmes.Controllers {
    [ApiController]
    [Route ("api/[controller]")]
    public class FilmesController : ControllerBase {
        static readonly IFilmeService service = new FilmeService ();

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Filme>>> GetAll () {
            return Ok (await Task.Run (() => service.GetFilmesAsync ()));
        }

    }
}