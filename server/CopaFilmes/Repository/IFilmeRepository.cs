using System.Collections.Generic;
using System.Threading.Tasks;
using CopaFilmes.Models;

namespace CopaFilmes.Models {
    public interface IFilmeRepository {
        Task<List<Filme>> GetFilmesAsync ();
    }
}