/* global ng */

(function(app) {
  app.ExamplesComponent = ng.core.Component({
    selector: 'box-ui-examples',
    templateUrl: 'examples.component.html',
    host: {
      'class': 'page-content'
    }
  })
  .Class({
    constructor: function () {}
  });

})(window.app || (window.app = {}));
