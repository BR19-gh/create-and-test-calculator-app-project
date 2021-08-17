class Calculator{
add(a,b)
{
    return a+b;
}

sub(a,b)
{
    return a-b;
}

mult(a,b)
{
    return a*b;
}

div(a,b)
{
return a/b;
}

max(a,b)
{

    if(a>b){return a;}
    else if(a<b){return b;}
}

min(a,b)
{

    if(a<b){return a;}
    else if(a>b){return b;}
}


}

//testing add
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to add two numbers',function(){
        console.log(cal.add(2,6));
        
        expect(cal.add(2,6)).toBe(8);
    });
})

//testing sub
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to sub two numbers',function(){
        console.log(cal.sub(6,2));
        
        expect(cal.sub(6,2)).toBe(4);
    });
})

//testing mult
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to multiply two numbers',function(){
        console.log(cal.mult(2,6));
        
        expect(cal.mult(2,6)).toBe(12);
    });
})

//testing div
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to divide two numbers',function(){
        console.log(cal.div(6,2));
        console.log(cal.div(6,2));
        
        expect(cal.div(6,2)).toBe(3);
        expect(cal.div(6,2)).not.toBe(Infinity);
    });
})

//testing max
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to find the max of two numbers',function(){
        let a=6,b=2;
        if(a>b){
            console.log(cal.max(a,b));
            expect(cal.max(a,b)).toBe(a);
        }
        if(a<b){
            console.log(cal.max(a,b));
            expect(cal.max(a,b)).toBe(b);
        }
    });
})

//testing min
describe("calculater test", function(){
    var cal= new Calculator();
    it('should be able to find the min of two numbers',function(){
        let a=6,b=2;
        if(a>b){
            console.log(cal.min(a,b));
            expect(cal.min(a,b)).toBe(b);
        }
        if(a<b){
            console.log(cal.min(a,b));
            expect(cal.min(a,b)).toBe(a);
        }
    });
})