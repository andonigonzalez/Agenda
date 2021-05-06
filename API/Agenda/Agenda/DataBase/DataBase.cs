using Agenda.Models;
using System.Collections.Generic;

namespace Agenda.DataBase
{
    public static class DataBase
    {
        public static List<Contacto> ListaContactos;

        static DataBase()
        {
            ListaContactos = new List<Contacto>();

            Contacto c1 = new Contacto()
            {
                Id = 1,
                Nombre = "Andoni",
                Apellidos = "Gonzalez Cortadi",
                Email = "andoni@email.com",
                Telefono = "123456789"
            };
            Contacto c2 = new Contacto()
            {
                Id = 2,
                Nombre = "Francisco",
                Apellidos = "Ferrero Iñurrategi",
                Email = "francisco@email.com",
                Telefono = "987654321"
            };
            Contacto c3 = new Contacto()
            {
                Id = 3,
                Nombre = "Pedro",
                Apellidos = "Garcia Lodosa",
                Email = "pedro@email.com",
                Telefono = "555897561"
            };
            Contacto c4 = new Contacto()
            {
                Id = 4,
                Nombre = "Mikel",
                Apellidos = "Agirre Alvarez",
                Email = "mikel@email.com",
                Telefono = "777566888"
            };

            ListaContactos.Add(c1);
            ListaContactos.Add(c2);
            ListaContactos.Add(c3);
            ListaContactos.Add(c4);
        }

        public static int insertContacto(Contacto nuevo)
        {
            int lastId = ListaContactos[ListaContactos.Count - 1].Id;

            nuevo.Id = lastId + 1;

            ListaContactos.Add(nuevo);

            return 1;
        }
    }
}
