import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import {Pelicula} from '../../models/pelicula';
import {PeliculaService} from '../../services/pelicula.service';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Array<Pelicula>;
  public favorita: Pelicula;
  public fecha: any;

  constructor(private _peliculaService: PeliculaService) { 
    this.titulo = "Componente peliculas";

    this.fecha = new Date(2021,0,20);

    this.peliculas = this._peliculaService.getPeliculas();
  }


  ngOnInit(): void {
    console.log("Comp load");
    console.log(this.peliculas);
    console.log(this._peliculaService.holaMundo());

  }

  ngDoCheck(): void{
    console.log("Do check");
  }

  cambiarTitulo(){
    this.titulo="Titulo cambiado parkour!!!"
  }


  ngOnDestroy(): void {
    console.log("Componente rip en peperonis");

  }

  mostrarFavorita(event){
    console.log("evento");

    console.log(event);
    this.favorita = event.pelicula;
  }
}
