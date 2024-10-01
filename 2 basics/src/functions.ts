// function with parameter type and return type

function doSomething(param){
    return param+" Run fast"
}

// Same function by TS

function doSomethingByTs(param : string):string{
    return param+" Run fast"
}

// functions with generic data type
// T is used commonly, T stands to type
// when generics used function can accept any type of data

function genericTypeFunc<T>(myParam:T){
    console.log(myParam);
}

genericTypeFunc("hi");
genericTypeFunc(5);

const myObj1 = {
    name:"chama",
    uni:"IIT",
    home:"Mtr",
    id:1
}

const myObj2 = {
    name:"lil",
    uni:"IIT",
    home:"Cmb",
    id:2
}

genericTypeFunc(myObj1);

// following funtion accepts array of generic type
// here in this function accessing a property in generic type. that type needs to be defined
// reduce is js array method
function genericTypeFunc2<T extends {id:number}>(myArray:T[]):number{
   return myArray.reduce((acc,arrayItem) => acc+arrayItem.id,0)
}

const myObjArray = [myObj1,myObj2]

genericTypeFunc2(myObjArray);
