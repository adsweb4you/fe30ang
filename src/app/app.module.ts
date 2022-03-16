import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DashComponent } from './dash/dash.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProdDetalsComponent } from './prod-detals/prod-detals.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CommentsComponent } from './comments/comments.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { PostsComponent } from './Post/posts/posts.component';
import { PostDetalsComponent } from './Post/post-detals/post-detals.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DashComponent,
    AboutComponent,
    ProductComponent,
    ProdDetalsComponent,
    WelcomeComponent,
    NotfoundComponent,
    CommentsComponent,
    UserComponent,
    LoginComponent,
    PostsComponent,
    PostDetalsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
