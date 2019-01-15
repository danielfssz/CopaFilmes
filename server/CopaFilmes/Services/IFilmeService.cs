using System.Collections.Generic;
using System.Threading.Tasks;
using CopaFilmes.Models;

namespace CopaFilmes.Services {
    public interface IFilmeService {
        Task<List<Filme>> GetFilmesAsync ();
    }
}