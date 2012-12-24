module("Triangle Model",{
		setup: function() {
				var p1 = new Game.Models.Point({ x:0, y:0 });
				var p2 = new Game.Models.Point({ x:1, y:0 });
				var p3 = new Game.Models.Point({ x:0, y:1 });
				var p4 = new Game.Models.Point({ x:2, y:0 });

				this.testTriangle = new Game.Models.Triangle();
				this.testTriangle2 = new Game.Models.Triangle();

				this.testTriangle.get("vertices").add(p1);
				this.testTriangle.get("vertices").add(p2);
				this.testTriangle.get("vertices").add(p3);

				this.testTriangle2.get("vertices").add(p1);
				this.testTriangle2.get("vertices").add(p3);
				this.testTriangle2.get("vertices").add(p4);
		}
});

test("Calculate Area", function() {
		equal(this.testTriangle.get("area"), .5, "Passed");
		equal(this.testTriangle2.get('area'),1, "Passed"); 
});
