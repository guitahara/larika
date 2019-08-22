import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductsComponent } from '../../components/products/products.component';
import { ProductsCreateComponent } from '../../components/products/products-create/products-create.component';
import { ProductsEditComponent } from '../../components/products/products-edit/products-edit.component';
import { UsersComponent } from 'app/components/users/users.component';
import { UsersCreateComponent } from 'app/components/users/users-create/users-create.component';
import { LoginComponent } from '../../components/login/login.component';
import { AuthGuardService } from '../../services/route-guard.service';
import { StoresComponent } from '../../components/stores/stores.component';
import { StoresCreateComponent } from '../../components/stores/stores-create/stores-create.component';
import { StoresEditComponent } from '../../components/stores/stores-edit/stores-edit.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService] },
    // { path: 'user-profile',   component: UserProfileComponent },
    { path: 'products',
      canActivate: [AuthGuardService],
      children: [{
        path: '',
        component: ProductsComponent
      }, {
        path: 'create' ,
        component: ProductsCreateComponent
      }, {
        path: 'edit/:id' ,
        component: ProductsEditComponent
      }]},
    { path: 'stores',
      canActivate: [AuthGuardService],
      children: [{
        path: '',
        component: StoresComponent
      }, {
        path: 'create' ,
        component: StoresCreateComponent
      }, {
        path: 'edit/:id' ,
        component: StoresEditComponent
      }]},
    { path: 'users',
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      component: UsersComponent
    }, {
      path: 'create' ,
      component: UsersCreateComponent
    //, {
    //   path: 'edit/:id' ,
    //   component: ProductsEditComponent
    }]},
    { path: 'login', component: LoginComponent},
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
];
