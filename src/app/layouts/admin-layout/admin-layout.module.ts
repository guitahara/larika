import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductsCreateComponent } from '../../components/products/products-create/products-create.component';
import { ProductsEditComponent } from '../../components/products/products-edit/products-edit.component';
import { UsersComponent } from 'app/components/users/users.component';
import { UsersEditComponent } from 'app/components/users/users-edit/users-edit.component';
import { UsersCreateComponent } from 'app/components/users/users-create/users-create.component';
import { LoginComponent } from '../../components/login/login.component';
import { StoresComponent } from '../../components/stores/stores.component';
import { StoresCreateComponent } from '../../components/stores/stores-create/stores-create.component'
import { StoresEditComponent } from '../../components/stores/stores-edit/stores-edit.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    ProductsComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProductsCreateComponent,
    ProductsEditComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersEditComponent,
    LoginComponent,
    StoresComponent,
    StoresCreateComponent,
    StoresEditComponent
  ]
})

export class AdminLayoutModule {}
