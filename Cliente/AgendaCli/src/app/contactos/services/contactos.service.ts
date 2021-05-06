import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { BuscarContactosResponse, Contacto } from '../interfaces/contacto.interface';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ContactosService {

    private _historial: string[] = [];
    private _url = 'https://localhost:44327';

    public resultados: Contacto[] = [];

    get historial(){
        return [...this._historial];
    }

    constructor(private http: HttpClient) {
        this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    }

    public buscarContactos(clave: string): void{
        clave = clave.trim().toLocaleLowerCase();

        if(!this._historial.includes(clave)){
            this._historial.unshift(clave);
            this._historial = this._historial.splice(0,10);

            localStorage.setItem('historial', JSON.stringify(this._historial));
        }

        const params = new HttpParams().set('clave', clave);

        this.http.get<BuscarContactosResponse>(`${this._url}/contacto`, { params })
            .subscribe( (resp) => {
                this.resultados = resp.datos;
            })
    }
    
    public actualizarContacto(contacto: Contacto): Observable<number>{
        return this.http.put<number>(`${this._url}/contacto`, contacto);
    }

    public insertarContacto(contacto: Contacto): Observable<number>{
        return this.http.post<number>(`${this._url}/contacto`, contacto);
    }

}
