import { GuardsCheckEnd, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {CategoryProductComponent} from './components/category-product/category-product.component';


export const routes: Routes = [
    {path:'login', component: LoginComponent, canActivate:[AuthGuard]},
    { path: '', component : ProductListComponent},
    { path: 'products/:id', component : ProductItemComponent},
    { path: 'products/category/:idcategory', component: CategoryProductComponent },
    { path: 'register', component: RegisterComponent, canActivate:[AuthGuard] }
];

