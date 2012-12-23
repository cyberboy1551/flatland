(function(Game) {

		Game.Models.Point = Backbone.RelationalModel.extend({
				defaults: {
						// The x coord of the point
						x: 0,
						// The y coord of the point
						y: 0,
						// The grayscale value to use to force a sense of perspective
						color: "000000",
						// The distance to the Player point
						dist: 0
				},
				// Takes the object { x: <NUMBER> , y: <NUMBER> }
				initialize: function(options) {
						this.set({ x: options.x, y: options.y });

						this.on("change:dist", this.updateColor, this);						

						// TODO : When the Player position changes, we need to recalc the
						//        dist of each Point
				},
				updateDist: function() {
						
						
				},
				updateColor: function() {

				}
		});

		Game.Collections.Points = Backbone.Collection.extend({
				
		});

})(Flatland.module("Game"));
