import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastOrderComponent } from './pages/last-order/last-order.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { SigninComponent } from './pages/signin/signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'pedidos', component: LastOrderComponent },
  { path: 'receitas', component: RecipesComponent },
  { path: 'receitas/:slug', component: RecipeDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
