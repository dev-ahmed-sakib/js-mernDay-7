const arr3 = `[{"name":"sakib","age":19,"skill":"MERN","favorite_foods":["Chichen Dum","Kacchi","Morog Polao","Beef"],"location":"chattogram","profession":"student"}]`

let convert = JSON.parse(arr3);
console.log(convert[0].name)