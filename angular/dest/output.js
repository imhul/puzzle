'use strict';

(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        templateUrl: 'app/hero.component.html'
    }).Class({
        constructor: function constructor() {
            this.title = 'Tour of Heroes';
            this.powers = ['Really smart', 'super flexible', 'Super hot', 'Weather changer', 'God-Mod'];
            this.hero = {
                name: 'Batman',
                color: 'red',
                power: this.powers[0]
            };
        },
        onColorGreenChange: function onColorGreenChange() {
            this.hero.color = 'green';
        }
    });
})(window.app || (window.app = {}));

// $('div').add('<p>new text</p>');
;(function (app) {
    document.addEventListener('DOMContentLoaded', function () {
        ng.platform.browser.bootstrap(app.AppComponent);
    });
})(window.app || (window.app = {}));
