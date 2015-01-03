/**
    js/main.js
*/

var AppView = Backbone.View.extend({
    el: 'h1',
    initialize: function () {
        this.render();
    },
    render: function () {
        this.$el.html('Hello World');
    }
});

var view = new AppView();
