(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'box-ui-app',
      template: `
        <nav>
          <a [routerLink]="['Docs']">Docs</a>
          <a [routerLink]="['Examples']">Examples</a>
        </nav>
        <router-outlet></router-outlet>
      `,
      directives: [ng.router.ROUTER_DIRECTIVES],
    })
    .Class({
      constructor: [ng.router.Router, function (router) {
        router.config([
          { path: '/docs', component: app.DocsComponent, name: 'Docs' },
          { path: '/examples', component: app.ExamplesComponent, name: 'Examples' }
        ])
      }]
    });

})(window.app || (window.app = {}));
