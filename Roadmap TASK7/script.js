console.log("welcome")
let vgd = new XMLHttpRequest();
console.log(vgd);
vgd.open("get","https://restcountries.com/v3.1/all");
vgd.send();
vgd.onload=function(){
    const data = JSON.parse(vgd.response);
    console.log(data);
    console.log(vgd.status);
/////For each method for getting name, capital, flag
data.forEach((Value)=>{
    console.log(`
Name:${Value.name.common}
flags:${Value.flags.svg}
capital:${Value.capital}
    `);
});
//using filter for gettion Asian countires and population
const FilteredArray=data.filter((Value)=>Value.region ==="Asia")
console.log(FilteredArray)
const FilteredArr=data.filter((Value)=>Value.population <200000)
console.log(FilteredArr)

//Reduce function for getting total population
const overallPop=data.reduce((acc,Value)=>{
    return acc+Value.population;
},0)
console.log(overallPop)




    }