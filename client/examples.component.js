/* global ng */

(function(app) {

  var CollapseButtonDirective = ng.core
  .Directive({
      selector: '.collapse-button',
      host: {
        '(click)': 'onClick()',
      },
      providers: [ng.core.ElementRef]
    })
  .Class({
    constructor: [ng.core.ElementRef, function(elementRef) {
      var el = elementRef.nativeElement;
      this.onClick = function () {
        el.classList.toggle('expand');
      };
    }]
  });

  app.ExamplesComponent = ng.core.Component({
    selector: 'box-ui-examples',
    templateUrl: 'examples.component.html',
    directives: [CollapseButtonDirective],
    host: {
      'class': 'page-content'
    }
  })
  .Class({
    constructor: function () {}
  });

})(window.app || (window.app = {}));
