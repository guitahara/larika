import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductsService } from './services/product.service';
import { UsersService } from './services/users.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LocalStorage } from './helper/localStorage';
import { LoginService } from './services/login.service';
import { AuthGuardService } from './services/route-guard.service';
import { AuthService }  from './services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import {StoresService} from './services/store.service';
import {ListService} from './services/list.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent

  ],
  providers: [ProductsService,
              UsersService,
              LocalStorage,
              LoginService,
              AuthGuardService,
              AuthService,
              JwtHelperService,
              StoresService,
              ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
