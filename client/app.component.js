/* global ng */

(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'box-ui-app',
      templateUrl: 'app.component.html',
      directives: [ng.router.ROUTER_DIRECTIVES],
    })
    .Class({
      constructor: [ng.router.Router, function (router) {
        router.config([
          { path: '/docs', component: app.DocsComponent, name: 'Docs' },
          { path: '/examples', component: app.ExamplesComponent, name: 'Examples' }
        ]);
      }]
    });

})(window.app || (window.app = {}));
