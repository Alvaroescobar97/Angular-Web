import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo= "Que dice la raza?";
        this.comentario= "Todo bien todo correcto y yo que me alegro";
        this.year=2021; 
        this.mostrarPeliculas = true;
        
        console.log("Componentico");
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}