using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Agenda.Models;

namespace Agenda.Controllers
{
    [ApiController]
    [Route("/contacto")]
    public class AgendaController : ControllerBase
    {
        public AgendaController()
        {
            
        }

        [HttpGet]
        public BuscarContactosResult Get(string clave)
        {
            BuscarContactosResult res = new BuscarContactosResult();
            if(clave != null)
            {
                res.datos = DataBase.DataBase.ListaContactos.Where(c => c.Nombre.ToLower().Contains(clave) || c.Apellidos.ToLower().Contains(clave)).ToArray();
            }
            else
            {
                res.datos = DataBase.DataBase.ListaContactos.ToArray();
            }

            return res;
        }

        [HttpPost]
        public int Post(Contacto contacto)
        {
            return DataBase.DataBase.insertContacto(contacto);
        }

        [HttpPut]
        public int Put(Contacto nuevoContacto)
        {
            Contacto contactoGuardado = DataBase.DataBase.ListaContactos.Find(c => c.Id == nuevoContacto.Id);

            if (contactoGuardado == null) return -1;

            contactoGuardado.Nombre = nuevoContacto.Nombre;
            contactoGuardado.Apellidos = nuevoContacto.Apellidos;
            contactoGuardado.Telefono = contactoGuardado.Telefono;
            contactoGuardado.Email = contactoGuardado.Email;

            return 1;
        }
    }
}
