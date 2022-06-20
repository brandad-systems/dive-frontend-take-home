import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductOverviewComponent} from "./product-overview/product-overview.component";


export const APP_ROUTES:Routes =[
  { path:'',
    redirectTo:'home',
    pathMatch:'full' //vergleicht Angular den gesamten Pfad aus der Konfiguration mit dem gesamten Pfad in der URL.
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'product-add',
    component: ProductAddComponent
  },
  {
    path:'product-overview',
    component: ProductOverviewComponent
  }

]
