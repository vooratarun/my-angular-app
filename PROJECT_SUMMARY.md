# Project Summary: my-angular-app

## Overview
`my-angular-app` is a small Angular 21 standalone application that demonstrates sibling-to-sibling communication using a parent component as a mediator.

The app showcases:
- standalone components (no NgModules)
- Angular signal-based state in the parent
- child-to-parent event emission
- parent-to-sibling input binding

## Tech Stack
- Angular: `^21.2.x`
- TypeScript: `~5.9.2`
- RxJS: `~7.8.0`
- Build/serve: Angular CLI (`@angular/cli ^21.2.7`)
- Testing: `ng test` with Angular unit-test builder, Vitest present in dev dependencies

## App Architecture
Entry flow:
1. `src/main.ts` bootstraps `AppComponent` with `appConfig`.
2. `src/app/app.component.ts` renders `app-parent`.
3. `src/app/parent/parent.component.ts` coordinates communication between siblings.

Key components:
- `src/app/child/child.component.ts`
  - Receives `title` and `items` via `input()`.
  - Emits selection with `itemSelected = output<string>()`.
- `src/app/parent/parent.component.ts`
  - Holds product list and a signal: `selectedProduct`.
  - Handles child event in `onItemSelected(product)`.
  - Passes selected value to receiver sibling.
- `src/app/sibling-receiver/sibling-receiver.component.ts`
  - Receives `selectedItem` via `input()`.
  - Displays currently selected item.

## Data Flow (Sibling Communication Pattern)
1. User clicks a product button in `ChildComponent`.
2. `ChildComponent` emits `itemSelected` event.
3. `ParentComponent` catches the event and updates `selectedProduct` signal.
4. `ParentComponent` binds `selectedProduct()` into `SiblingReceiverComponent`.
5. `SiblingReceiverComponent` re-renders with the new item.

This demonstrates the standard Angular pattern: sibling A -> parent -> sibling B.

## Routing and Configuration Notes
- `src/app/app.routes.ts` currently exports an empty route array (`[]`).
- Router is configured in `src/app/app.config.ts` but not actively used yet.
- Global styles are minimal in `src/styles.scss`.

## NPM Scripts
From `package.json`:
- `npm run start` -> `ng serve`
- `npm run build` -> `ng build`
- `npm run watch` -> development watch build
- `npm run test` -> `ng test`

## Suggested Next Improvements
- Add real route pages and map them in `src/app/app.routes.ts`.
- Add unit tests for the parent mediator logic and child output behavior.
- Add basic styling to visually separate sender and receiver sections.
- Add an integration test that clicks a child item and verifies receiver update.

