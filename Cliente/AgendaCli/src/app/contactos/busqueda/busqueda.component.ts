import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ContactosService } from '../services/contactos.service';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styles: [
    ]
})
export class BusquedaComponent {

     @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

     constructor(private contactosService: ContactosService) { }

    public buscar(): void{
        const valor = this.txtBuscar.nativeElement.value.trim();

        if(valor.length === 0) return;
        
        this.contactosService.buscarContactos(valor);

        this.txtBuscar.nativeElement.value = '';
    }

}
