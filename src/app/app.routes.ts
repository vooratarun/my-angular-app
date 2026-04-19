import { Routes } from '@angular/router';
import { CatalogItemComponent } from './router-examples/catalog-item.component';
import { CatalogOverviewComponent } from './router-examples/catalog-overview.component';
import { CatalogShellComponent } from './router-examples/catalog-shell.component';
import { RoutingHomeComponent } from './router-examples/routing-home.component';
import { UserDetailComponent } from './router-examples/user-detail.component';
import { UsersComponent } from './router-examples/users.component';

export const routes: Routes = [
  {
	path: '',
	redirectTo: 'routing',
	pathMatch: 'full',
  },
  {
	path: 'routing',
	component: RoutingHomeComponent,
  },
  {
	path: 'users',
	component: UsersComponent,
  },
  {
	path: 'users/:id',
	component: UserDetailComponent,
  },
  {
	path: 'catalog',
	component: CatalogShellComponent,
	children: [
	  {
		path: '',
		component: CatalogOverviewComponent,
	  },
	  {
		path: ':itemId',
		component: CatalogItemComponent,
	  },
	],
  },
  {
	path: 'admin',
	loadChildren: () => import('./router-examples/admin/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
  {
	path: 'forms',
	loadChildren: () => import('./forms-examples/forms.routes').then((m) => m.FORMS_ROUTES),
  },
  {
	path: 'http-api',
	loadChildren: () => import('./http-examples/http.routes').then((m) => m.HTTP_ROUTES),
  },
  {
	path: 'signals',
	loadChildren: () => import('./signals-examples/signals.routes').then((m) => m.SIGNALS_ROUTES),
  },
  {
	path: 'auth',
	loadChildren: () => import('./auth-examples/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
	path: 'state-management',
	loadChildren: () =>
	  import('./state-management-examples/state-management.routes').then(
		(m) => m.STATE_MANAGEMENT_ROUTES,
	  ),
  },
  {
	path: 'performance',
	loadChildren: () =>
	  import('./performance-examples/performance.routes').then((m) => m.PERFORMANCE_ROUTES),
  },
  {
	path: 'data-binding',
	loadChildren: () =>
	  import('./data-binding-examples/data-binding.routes').then((m) => m.DATA_BINDING_ROUTES),
  },
  {
	path: '**',
	redirectTo: 'routing',
  },
];
