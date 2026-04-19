# MyAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.7.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Templates and Directives Examples

This project now includes hands-on examples in `src/app/template-examples/` for:

- Interpolation
- Property binding
- Event binding
- Two-way binding with `[(ngModel)]`
- `*ngIf`
- `*ngFor`
- `ngClass`
- `ngStyle`

Open the app and scroll to the **Angular Templates + Directives Demo** section to try each one.

## Services and Dependency Injection Examples

This project now includes examples in `src/app/di-examples/` for:

- Services (`CourseCatalogService`)
- Singleton services (`SelectionService` with `providedIn: 'root'`)
- `inject()` API usage inside standalone components
- `providers` at component level
- DI hierarchy (parent provider inheritance vs child provider override)

Open the app and scroll to the **Angular Services + Dependency Injection** section to explore how parent and child components resolve providers.

## Angular Routing Mastery Examples

This project now includes router-focused examples in `src/app/router-examples/` that cover:

- `RouterOutlet`
- `Routes`
- Dynamic route params (example: `/users/:id`)
- Child routes (example: `/catalog` with nested outlet)
- Lazy loading (example: `/admin` loaded via `loadChildren`)

Key routes to try:

- `/routing`
- `/users`
- `/users/777`
- `/catalog`
- `/catalog/keyboard`
- `/admin`
- `/admin/settings`

## Angular Forms Mastery Examples

This project now includes form-focused examples in `src/app/forms-examples/` that cover:

- Template Forms
- Reactive Forms (priority examples)
- `FormControl`
- `FormGroup`
- Built-in `Validators`
- Custom validators

The forms section is lazy-loaded under `/forms` and split into separate route modules:

- `/forms/template`
- `/forms/reactive-control`
- `/forms/reactive-group`

## Angular HTTP + APIs Examples

This project now includes API-focused examples in `src/app/http-examples/` using JSONPlaceholder.

Covered topics:

- `HttpClient`
- `GET`, `POST`, `PUT`, `DELETE`
- HTTP interceptors
- Error handling

Routes for CRUD examples:

- `/http-api/get`
- `/http-api/post`
- `/http-api/put`
- `/http-api/delete`

## Angular Signals (Modern Angular) Examples

This project now includes signals-focused examples in `src/app/signals-examples/` that cover:

- `signal()`
- `computed()`
- `effect()`
- Cart Counter using signals

Routes for signals examples:

- `/signals/signal`
- `/signals/computed`
- `/signals/effect`
- `/signals/cart-counter`

## Angular Guards + Auth Examples

This project now includes auth-focused examples in `src/app/auth-examples/` that cover:

- Auth Guard
- Route Guard behavior
- JWT login flow (simulated)
- Token storage in `localStorage`
- Protected Dashboard example

Routes to try:

- `/auth/login`
- `/auth/dashboard` (guard-protected)

## Angular State Management Examples

This project now includes state-management examples in `src/app/state-management-examples/` covering:

- Service state (BehaviorSubject)
- Signals state (`signal`, `computed`)
- NgRx basics (optional conceptual overview)
- Mini Ecommerce Cart implementation

Routes to try:

- `/state-management/service-state`
- `/state-management/signals-state`
- `/state-management/ngrx-basics`

