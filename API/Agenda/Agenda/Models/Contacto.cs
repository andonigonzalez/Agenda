
using System.Collections;

namespace Agenda.Models
{
    public class Contacto
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
    }

    public class BuscarContactosResult
    {
        public IEnumerable datos { get; set; }
    }
}
