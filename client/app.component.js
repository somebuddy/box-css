(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'box-ui-app',
      template: '<h1>Box UI Styles and Components</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
