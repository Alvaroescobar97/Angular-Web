import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';
import {ArticleService} from '../../services/article.service';
import { Article} from '../../models/article';
import {Global} from '../../services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public url: string;
  public article: Article;

  constructor(
    public _articleService: ArticleService, 
    private _route: ActivatedRoute, 
    private _router:Router
  ) {
    this.url=Global.url;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id = params['id'];
      this._articleService.getArticle(id).subscribe(response=>{
        if(response.article){
          this.article=response.article;
        }else{
          this._router.navigate(['/home']);
        }
      },
      error=>{
        this._router.navigate(['/home']);
      });
    });
    //this._articleService.getArticle();
  }

  delete(id){

    Swal.fire({
      title: 'Seguro deseas borrar el articulo?',
      text: "No lo podrás revertir o recuperarlo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._articleService.delete(id).subscribe(res=>{
          this._router.navigate(['/blog']);
        },
        error=>{
          console.log(error);
          this._router.navigate(['/blog']);
        });
        Swal.fire(
          'Eliminado!',
          'El articulo ha sido eliminado correctamente.',
          'success'
        )
      }
    });

    
  }
}
