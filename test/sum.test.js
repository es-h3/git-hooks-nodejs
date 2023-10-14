const sum=require("../src/sum")

it("Should return correct sum",()=>
{
    const res=sum(2,5)
    expect(res).toBe(7)
})