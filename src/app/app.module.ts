import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PotsListComponent } from './compoments/pots-list/pots-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './compoments/navbar/navbar.component';
import { FooterComponent } from './compoments/footer/footer.component';
import { WelcomeComponent } from './compoments/welcome/welcome.component';
import { NotfoundComponent } from './compoments/notfound/notfound.component';
import { PostDetailsComponent } from './compoments/post-details/post-details.component';

const my_routes = [
  {path: 'list'   , component: PotsListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'detail/:id', component: PostDetailsComponent},
  {path: ''       , redirectTo: '/Welcome' , pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
] ;



@NgModule({
  declarations: [
    AppComponent,
    PotsListComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(my_routes),
    HttpClientModule // since la version Angular 4.3
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
