(function(Game) {
		
		Game.Models.Line = Backbone.RelationalModel.extend({
				relations: [{
						type: Backbone.HasMany,
						key: "points",
						relatedModel: "Flatland.modules.Game.Models.Point",
				}],
				defaults: {
						// The length of the line
						length: 0,
						slope: 0
				},
				// Takes a collection of Game.Models.Point objects
				initialize: function(options) {
						this.on("add:points", this.updateLength, this);
						this.on("add:points", this.updateSlope, this);
						this.on("add:points", this.updatePoints, this);
				},
				updateLength: function() {
						if ((this.get("points")).length > 1) {
								var point1 = (this.get("points")).first();
								var point2 = (this.get("points")).last();
								this.set({ length: Math.sqrt(Math.pow((point2.get("x") - point1.get("x")),2) + Math.pow((point2.get("y") - point1.get("y")),2)) });
						}
				},
				updatePoints: function() {
						// Determine which point moved.
						// Use this.slope to determine how to move the second point
				},
				updateSlope: function() {
						if ((this.get("points")).length > 1 ) {
								var point1 = (this.get("points")).first();
						    var point2 = (this.get("points")).last();
								this.set({ slope: (point2.get("y") - point1.get("y")) /
													        (point2.get("x") - point1.get("x"))  });
						}
				}
		});

})(Flatland.module("Game"));
