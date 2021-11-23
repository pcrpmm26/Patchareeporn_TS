let profile :[string,string,number,number,number,number,number][];
profile = [
    ["17399019999","CHalermchai sarapee",19,7,8,9,0],
    ["78949848646","Phatchareepron",19,1,23,3,0]
]
profile.forEach(x=>{
    
    x[6] = x[3]+x[4]+x[5] 
    console.log(`${x[0]}||${x[1]}||${x[2]}||${x[3]}:${x[4]}:${x[5]}:Total:${x[6]}`)

})
console.log(profile) 