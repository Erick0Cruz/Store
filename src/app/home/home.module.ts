import { NgModule } from '@angular/core';
import { BannerComponent } from './componentes/banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModules } from './home-routing.module';

@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent
    ],
    imports:[
        HomeRoutingModules
    ]
})
export class HomeModule{

}