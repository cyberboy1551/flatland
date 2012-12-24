module("Line Model",{
		setup: function() {
				var p1 = new Game.Models.Point({x:0, y:0});
				var p2 = new Game.Models.Point({x:1, y:1});
				this.testLine = new Game.Models.Line();
				this.testLine.get("endpoints").add(p1);
				this.testLine.get("endpoints").add(p2);
		}
});

test("Set Slope",function() {
		equal(this.testLine.get("slope"),1,"Passed");
});

test("Set length", function() {
		equal(this.testLine.get("length"),Math.sqrt(2),"Passed");
});
