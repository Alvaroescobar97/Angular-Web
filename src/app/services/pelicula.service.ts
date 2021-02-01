import {Injectable} from '@angular/core';
import {Pelicula} from '../models/pelicula';

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula("Spiderman 4",2016,'https://media.revistagq.com/photos/5d5d19b10ef2260008f5cdb7/master/pass/mejor%20spider-man%20pelicula%20sony%20marvel.jpg'),
            new Pelicula("Avengers",2019,'https://cnet1.cbsistatic.com/img/l-xJp5JmvfZUGTVlfJ7O-wVVRTI=/940x0/2019/03/14/70b49c1d-0d3b-4b75-9225-b898b83cdc9a/avengers-endgame-poster-og-social-crop.jpg'),
            new Pelicula("Soul",2021,'https://shopdisneyeu.scene7.com/is/image/DisneyStoreES/34843_Q121_Soul_tb?$tb$'),
            new Pelicula("Jonh Wick",2018,'https://media.gq.com.mx/photos/5ce19f41d09b9ac33d16885a/16:9/w_1920,c_limit/john%20wick%203.jpg')
        ];
    }

    holaMundo(){
        return"Holi desde el servicio";
    }

    getPeliculas(){
        return this.peliculas;
    }
}