module("Point Model",{
		setup: function() {
				this.testPoint = new Game.Models.Point({x:1, y:1 });
		}
});

test("Default Values",function() {
		equal(this.testPoint.get("x"), 1, "Passed");
		equal(this.testPoint.get("y"), 1, "Passed"); 
});
