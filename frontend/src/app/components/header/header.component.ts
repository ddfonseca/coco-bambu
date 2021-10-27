import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeService } from '@core/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  search: string = '';
  imgSrc: string = '../../assets/img/logo-coco-bambu-mini.png';

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.search = this.recipeService.getSearch();
  }

  onChangeInput() {
    this.recipeService.setSearch(this.search);
  }
}
