(function(Game) {

		Game.Models.Triangle = Backbone.RelationalModel.extend({
				relations: [{
						type: Backbone.HasMany,
						key: "vertices",
						relatedModel: "Flatland.modules.Game.Models.Point"
				}],
				defaults: {
						area: 0
				},
				initialize: function(options) {
						this.on("change:vertices", this.updateArea, this);
				},
				updateArea: function() {
						if ((this.get('vertices')).length == 3) {
								var p1 = this.get("vertices").at(0);
								var p2 = this.get("vertices").at(1);
								var p3 = this.get("vertices").at(2);
								this.set({ area: Math.abs(
										(p1.get("x")*(p2.get("y")-p3.get("y")) + p2.get("x")*(p3.get("y")-p1.get("y")) + p3.get("x")*(p1.get("y")-p2.get("y")))/2
								) });
						}
				}
		});

})(Flatland.module("Game"));
