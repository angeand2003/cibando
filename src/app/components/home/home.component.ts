import { UserService } from './../../services/user.service';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Recipe} from '../../models/recipes.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild('modaleRegistrazione', {static: false}) modale: ElementRef;

  evidenziato = false;
  ricette: Recipe[] = [];
  datiRegistrzione = {};

idModale = '';
nomeModale = '';

  constructor(
    private recipeService: RecipeService,
    private userService: UserService,
    private modalService: NgbModal,
  ){
    this.recipeService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res.sort((a,b) => b._id - a._id).slice(0,4);
      },
      error: (e) => console.error(e)
    })

    this.userService.datiUtente.subscribe(res => {
    console.log(res);
       this.datiRegistrzione = res;
       this.openModal(this.modale);
      })


  }



  onEvidenzazione(){
    this.evidenziato = !this.evidenziato;
  }

  openModal(content: any, id?: string, nome?: string, cognome?: string){
    this.idModale = id;
    this.nomeModale = nome;
this.modalService.open(content, {centered: true, ariaLabelledBy: 'modale di benvenuto', size: 'lg'}).result
.then(
  (res) => {
    console.log('azione da eseguire' + res);
  }
)
.catch((error)=> console.log)
  }
}
