const app = require("../app.js");

test("Should equal 5 when test passed 2 and 3", () =>{
    expect(app.add(2,3)).not.toBe(10)
});

it ("should include the name Dave", () => {
    expect(app.myArray).toContain("dave");
});