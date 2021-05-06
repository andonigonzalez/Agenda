import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        PrincipalComponent,
        BusquedaComponent,
        ResultadosComponent
    ],
    exports: [
        PrincipalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ContactosModule { }
