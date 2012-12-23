this.Flatland = (function() {
		return {
				modules: {},
				module: function(name) {
						return this.modules[name] || (this.modules[name] = { Models: {}, Collections: {}, Views: {} });
				},
				app: _.extend({}, Backbone.Events)
		}
})();

var app = Flatland.app;
var Game = Flatland.module('Game');
