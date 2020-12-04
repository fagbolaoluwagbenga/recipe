import { RecipesService } from './../recipes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private alertCtrl: AlertController, private router: Router, private recipesService: RecipesService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
            this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'are you sure',
      message: 'do you reall wanna delete this?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.loadedRecipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
