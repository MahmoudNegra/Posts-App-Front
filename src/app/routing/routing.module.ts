import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PotsListComponent } from '../compoments/pots-list/pots-list.component';
import { WelcomeComponent } from '../compoments/welcome/welcome.component';
import { PostdetailsGuard } from '../guards/postdetails.guard';
import { PostDetailsComponent } from '../compoments/post-details/post-details.component';
import { NotfoundComponent } from '../compoments/notfound/notfound.component';

const my_routes = [
  {path: 'list'   , component: PotsListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'detail/:id', canActivate : [PostdetailsGuard] , component: PostDetailsComponent},
  {path: ''       , redirectTo: '/welcome' , pathMatch: 'full'},
  {path: '**', component: NotfoundComponent}
] ;

@NgModule({
  imports: [
    RouterModule.forRoot(my_routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
