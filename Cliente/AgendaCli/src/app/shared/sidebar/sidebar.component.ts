import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../../contactos/services/contactos.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: [
    ]
})
export class SidebarComponent {

    get historial(): string[]{
        return this.contactosService.historial;
    }

    constructor(private contactosService: ContactosService) { }

    public buscar(clave: string): void{
        this.contactosService.buscarContactos(clave);
    }

}
