module("Triangle Model",{
		setup: function() {
				var p1 = new Game.Models.Point({ x:0, y:0 });
				var p2 = new Game.Models.Point({ x:1, y:0 });
				var p3 = new Game.Models.Point({ x:0, y:1 });

				this.testTriangle = new Game.Models.Triangle();

				this.testTriangle.get("vertices").add(p1);
				this.testTriangle.get("vertices").add(p2);
				this.testTriangle.get("vertices").add(p3);
		}
});

test("Calculate Area", function() {
		equal(this.testTriangle.get("area"), .5, "Passed");
});
