# NgxCrumbs

An ultimate breadcrumbs service for Angular.

Demo on [StackBlitz](https://stackblitz.com/edit/ngx-crumbs-demo)
## Getting started
### Install via NPM
```
npm i ngx-crumbs
```
### Import the `NgxCrumbsModule`
```ts
@NgModule({
  /* ... */
  imports: [
    /* ... */
    NgxCrumbsModule,
  ],
})

export class AppModule { }
```

## Usage

Use the `ngx-crumbs` component to display the breadcrumbs

```html
<!-- The 'breadcrumb' and 'breadcrumb-item' classes are Bootstrap specific  -->
<ngx-crumbs containerClass="breadcrumb" itemClass="breadcrumb-item">
</ngx-crumbs>
```

> You can create a full custom look by using the `NgxCrumbsService.crumbs$` observable

### Defining crumbs in Routes
```ts
// app-routing.module.ts
const routes: Routes = [
  {
    path: '',
    data: { crumb: 'Home' }
    /* component: ... */
  },
  {
    path: 'profile',
    data: { crumb: 'Profile' },
    /* component: ... */
    children: [
      path: 'settings',
      data: { crumb: 'Settings' },
      /* component: ... */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

### Defining crumbs in a component

```html
<!-- profile.component.html -->

<ngx-crumb text="Profile"></ngx-crumb>

<!-- profile nav, content ... -->
```

## Configuring

|parameter|default|description|
|--|--|--|
|noLink|false|true, if the crumb should not point to a path|
|link|undefined||

### Dynamic crumb text

If your breadcrumb depends on dynamic data, you can also pass a function to the `crumb` (or `crumb.text`). This function receives an object containing three fields - `data`, `params` and `queryParams`.

```ts
const routes: Routes = [
  { path: '...', data: { crumb: ({ data, params, queryParams }) => `...` } },
  /* OR */
  {
    path: '...',
    data: {
      crumb: {
        text: ({ data, params, queryParams }) => `...` }
      }
    },
  }
];
```

In a component you can data-bind all available variables.

```html
<!-- post.component.html -->
<ngx-crumb text="{{ post.name }}"></ngx-crumb>
```

### Override default link
```ts
const routes: Routes = [
  {
    path: 'post/:id',
    resolve: { post: PostResolver },
    data: {
      crumb: [
        { text: 'Posts', link: '/posts' },
        { text: ({ data }) => `${data.post.name}` },
      ]
    },
    component: PostComponent
  }
];
```

```html
  <ngx-crumb text="Posts" link="/posts"></ngx-crumb>
  <ngx-crumb text="{{post.name}}"></ngx-crumb>
```

### Multiple crumbs per component


```ts
const routes: Routes = [
  { path: 'posts', data: { crumb: 'Posts' } },
  {
    path: 'post/:id',
    data: {
      crumb: [
        { text: 'Posts', link: '/posts' },
        { text: ({ params }) => `Post: ${params.id}` },
      ]
    },
    /* component: ... */
  }
];
```

```html
<!-- /item/:id -->
<ng-container *ngIf="!isRevision">
  <ngx-crumb text="{{ item.name }}"></ngx-crumb>
</ng-container>

<!-- /item/:id?revision=<revision_date> -->
<ng-container *ngIf="isRevision">
  <ngx-crumb text="{{ item.name }}" link="."></ngx-crumb> <!-- points to: /item/:id -->
  <ngx-crumb text="Revisions" [link]="['revisions']"></ngx-crumb> <!-- points to: /item/:id/revisions -->
  <ngx-crumb text="{{ item.revisionDate | date }}"></ngx-crumb>
</ng-container>
```

## Document title

```ts
export class AppComponent {

  constructor(public crumbsService: NgxCrumbsService) {
    crumbsService.crumbs$.subscribe(x => document.title = x.length
      ? `${x[x.length-1].text} | Demo`
      : 'Demo'
    )
  }

}
```
