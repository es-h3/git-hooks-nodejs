const mult=require("../src/mult")

it("Should return correct result",()=>
{
    const res=mult(2,5)
    expect(res).toBe(10)
})