import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarAdminComponent } from './components/adminside/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './components/customerside/navbar-user/navbar-user.component';
import { DashboardComponent } from './components/adminside/dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { UpdateaddonsComponent } from './components/adminside/addons/updateaddons/updateaddons.component';
import { AddaddonsComponent } from './components/adminside/addons/addaddons/addaddons.component';
import { AddonHomeComponent } from './components/adminside/addons/addon-home/addon-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddaddmenuComponent } from './components/adminside/foodmenu/addaddmenu/addaddmenu.component';
import { UpdateaddmenuComponent } from './components/adminside/foodmenu/updateaddmenu/updateaddmenu.component';
import { AddmenuHomeComponent } from './components/adminside/foodmenu/addmenu-home/addmenu-home.component';
import { NewThemeComponent } from './components/adminside/themes/new-theme/new-theme.component';
import { ThemeHomeComponent } from './components/adminside/themes/theme-home/theme-home.component';
import { UpdatethemeComponent } from './components/adminside/themes/updatetheme/updatetheme.component';
import { UserHomepageComponent } from './components/customerside/user-homepage/user-homepage.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ViewbookingComponent } from './components/customerside/mybooking/mybooking.component';
import { AuthComponent } from './components/auth/auth.component';
import { AdminsideComponent } from './components/adminside/adminside.component';
import { AddonsComponent } from './components/adminside/addons/addons.component';
import { FoodmenuComponent } from './components/adminside/foodmenu/foodmenu.component';
import { ThemesComponent } from './components/adminside/themes/themes.component';
import { CustomersideComponent } from './components/customerside/customerside.component';
import { AddeventComponent } from './components/customerside/addevent/addevent.component';
import { RegComponent } from './reg/reg.component';
import { EditEventComponent } from './components/customerside/edit-event/edit-event.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    LoginComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    DashboardComponent,
    UpdateaddonsComponent,
    AddaddonsComponent,
    LogComponent,
    AddonHomeComponent,
    AddaddmenuComponent,
    UpdateaddmenuComponent,
    AddmenuHomeComponent,
    NewThemeComponent,
    ThemeHomeComponent,
    UpdatethemeComponent,
    UserHomepageComponent,
    ViewbookingComponent,
    AuthComponent,
    AdminsideComponent,
    AddonsComponent,
    FoodmenuComponent,
    ThemesComponent,
    CustomersideComponent,
    AddeventComponent,
    RegComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      
    ]),
    FontAwesomeModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
