import { Recipe } from './../../../models/recipes.model';
import { RecipeService } from './../../../services/recipe.service';
import { Component, inject, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  standalone: false,


  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
private RecipeService = inject(RecipeService);
private ActivatedRoute = inject(ActivatedRoute);
private Router = inject(Router);

ricetta: Recipe | undefined;

percorsoStelline = "../../../../assets/images/difficolta-"
ngOnInit(): void {

    this.onGetDetail();
}

onGetDetail(){

  const id = Number(this.ActivatedRoute.snapshot.paramMap.get('_id'))


  if(id){

    this.RecipeService.getDetail(id).subscribe({
next: res => {
  this.ricetta = res;
},
error: e => console.log(e)

    })
  }
}

onGetDetail2(){

  this.ActivatedRoute.params.subscribe((urlParams) => {

    const id = urlParams['_id'];
const idNumerico = Number(id);
if (idNumerico){
  this.RecipeService.getDetail(idNumerico).subscribe(res => this.ricetta = res);
}

    // const title = urlParams['title'];
  })

}

navigateToHome() {
  this.Router.navigate(['/']);
}
}
