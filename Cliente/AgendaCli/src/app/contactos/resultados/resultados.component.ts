import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../services/contactos.service';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../interfaces/contacto.interface';

@Component({
    selector: 'app-resultados',
    templateUrl: './resultados.component.html',
    styles: [
    ]
})
export class ResultadosComponent {

    @ViewChild('txtNombre') txtNombre!:ElementRef<HTMLInputElement>;
    @ViewChild('txtApellidos') txtApellidos!:ElementRef<HTMLInputElement>;
    @ViewChild('txtTelefono') txtTelefono!:ElementRef<HTMLInputElement>;
    @ViewChild('txtEmail') txtEmail!:ElementRef<HTMLInputElement>;

    public nuevoContacto: Contacto = {
        nombre: '',
        apellidos: '',
        telefono: '',
        email: ''
    }
    public error: string = '';

    get resultados(): Contacto[]{
        return this.ContactosService.resultados;
    }

    constructor(private ContactosService: ContactosService) { }

    private _validarContacto(contacto: Contacto): boolean{
        if(contacto.nombre.length < 1) return false;
        if(contacto.apellidos.length < 1) return false;
        if(contacto.telefono.length < 1) return false;
        if(contacto.email.length < 1) return false;

        return true;
    }

    public actualizar(contacto: Contacto): void{
        if(!this._validarContacto(contacto)){
            this.error = 'Rellena todos los campos';
            return;
        }

        this.limpiarError();

        this.ContactosService.actualizarContacto(contacto)
            .subscribe(resp => {
                console.log('Actualizado: ', resp);

                if(resp == -1) this.error = 'No se ha podido actualizar';
            });
    }

    public insertar(): void{
        if(!this._validarContacto(this.nuevoContacto)){
            this.error = 'Rellena todos los campos';
            return;
        }

        this.ContactosService.insertarContacto(this.nuevoContacto)
            .subscribe(resp => {
                console.log('Insertado: ', resp);

                this.nuevoContacto.nombre = '';
                this.nuevoContacto.apellidos = '';
                this.nuevoContacto.telefono = '';
                this.nuevoContacto.email = '';
            });
    }

    public limpiarError(): void{
        this.error = '';
    }
    
}
