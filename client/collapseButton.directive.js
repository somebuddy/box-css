/* global ng */

(function(app) {
  app.CollapseButtonDirective = ng.core
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

})(window.app || (window.app = {}));