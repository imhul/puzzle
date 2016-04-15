(function(app) {
    app.AppComponent =
        ng.core.Component({
                selector: 'my-app',
                templateUrl: 'app/hero.component.html'
            })
            .Class({
                constructor: function() {
                    this.title = 'Tour of Heroes';
                    this.powers = [
                        'Really smart',
                        'super flexible',
                        'Super hot',
                        'Weather changer',
                        'God-Mod'
                    ];
                    this.hero = {
                        name: 'Batman',
                        color: 'red',
                        power: this.powers[0]
                    };
                },
                onColorGreenChange: function() {
                    this.hero.color = 'green';
                }
            });
})(window.app || (window.app = {}));

// $('div').add('<p>new text</p>');
