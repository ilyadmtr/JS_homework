// 1
// let shopList = [
//   {
//     productName: "rice",
//     quantity: 300,
//     bought: true
//   },
//   {
//     productName: "milk",
//     quantity: 900,
//     bought: false
//   },
//   {
//     productName: "meat",
//     quantity: 2000,
//     bought: true
//   },
//   {
//     productName: "tomato",
//     quantity: 1000,
//     bought: false
//   },
//   {
//     productName: "banana",
//     quantity: 1200,
//     bought: false
//   }
// ]

// function sortArr(arr){
//   return arr.sort((a,b)=>{
//     return a.bought == false ? -1:b.bought == false ? 1:0;
//   })
// }

// function showList(arr){
//   sortArr(arr);
//   arr.forEach(element => {
//       console.log(`- ${element.productName} | ${element.quantity} gram ${element.bought ? "bought" : "not bought"}`)
//   });
// }


// function addShopItem(arr, name, qua, bought){
//   let boolCheck = false;
//   arr.forEach(e=>{
//     if(name == e.productName){
//       e.quantity += qua;
//       e.bought = bought;
//       boolCheck= true;
//     }
//   })
//   if(boolCheck == false){
//     arr.push({productName: name, quantity: qua, bought: bought})
//   }
// }

// function buyProduct(arr, name){
//   arr.forEach(e=>{
//     if(e.productName == name){
//       e.bought = true;
//     }
//   })
// }

// addShopItem(shopList, "pasta", 1000, true);
// addShopItem(shopList, "milk", 300, false);
// buyProduct(shopList, "tomato")
// showList(shopList);

// 2

// let cheque = [
//   {
//     name:"Nuts",
//     count: 2,
//     price: 18
//   },
//   {
//     name:"Snickers",
//     count: 3,
//     price: 15
//   },
//   {
//     name:"Bounty",
//     count: 1,
//     price: 21
//   },
//   {
//     name:"Tuc",
//     count: 3,
//     price: 18
//   },
//   {
//     name:"Coca-Cola",
//     count: 1,
//     price: 25
//   }
// ]

// function printCheque(arr){
//     arr.forEach(element => {
//         console.log(`${element.name} (price for one ${element.price}), count: ${element.count}, sum: ${element.price*element.count}`)
//     });
//     console.log(`Total sum: ${totalSum(arr)}`)
//     console.log(`The most expensive product: ${mostPrice(arr)}`)
//     console.log(`Average price of product: ${averagePrice(arr)}`)
// }

// function totalSum(arr){
//   return arr.reduce((sum, item)=>sum+=item.price*item.count,0);
// }

// function averagePrice(arr){
//   return arr.reduce((sum, item)=>sum+=item.price*item.count,0)/(arr.length);
// }

// function mostPrice(arr){
//   let max = 0;
//   arr.forEach(e=>{
//     if(max < e.price){
//       max = e.price;
//     }
//   })
//   return max;
// }


// printCheque(cheque)


// 3
// let cssStyle = [
//   {
//     name: "color",
//     value: "red"
//   },
//   {
//     name: "font-size",
//     value: "50px"
//   },
//   {
//     name: "text-decoration",
//     value: "underline"
//   },
//   {
//     name: "background",
//     value: "blue"
//   },
//   {
//     name: "font-family",
//     value: "'Courier New', Courier, monospace"
//   }
// ]


// function cssRevive(arr, text){
//   let all = "";
//   arr.forEach(element => {
//     all += `${element.name}: ${element.value}; `
//   });
//   document.body.innerHTML = `<p style = "${all}">${text}</p>`
// }

// cssRevive(cssStyle, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae nostrum ab mollitia architecto eum fugit.")


// 4
// let auditorium = [
//   {
//     name: 205,
//     seats: 12,
//     faculty: "frontend"
//   },
//   {
//     name: 718,
//     seats: 17,
//     faculty: "backend"
//   },
//   {
//     name: 515,
//     seats: 19,
//     faculty: "Game Dev"
//   },
//   {
//     name: 111,
//     seats: 20,
//     faculty: "ML"
//   },
//   {
//     name: 287,
//     seats: 14,
//     faculty: "Mobile Dev"
//   }
// ]
// let group = [
//   {
//     name: "F14",
//     students: 16,
//     facultet: "frontend"
//   },
//   {
//     name: "B14",
//     students: 11,
//     facultet: "backend"
//   },
//   {
//     name: "GD14",
//     students: 12,
//     facultet: "Game Dev"
//   },
//   {
//     name: "ML14",
//     students: 20,
//     facultet: "ML"
//   },
//   {
//     name: "MD14",
//     students: 19,
//     facultet: "Mobile Dev"
//   }
// ]

// function showAud(arr){
//     arr.forEach(element => {
//         console.log(`Аудитория номер ${element.name} в которой ${element.seats} мест и принадлежит факультету ${element.faculty} `)
//     });
// }

// // showAud(auditorium)

// function findAud(arr, faculty){
//   console.log(`Подходящие аудитории для факультета: `)
//   arr.forEach(element => {
//       if(faculty == element.faculty){
//         console.log(element.name)
//       }
//   });
// }

// findAud(auditorium, "Game Dev")

// function audForGroup(arrAud, group){
//   console.log("Подходящие аудитории для указанной группы: ")
//   arrAud.forEach(aud=>{
//       // не вижу смысла сравнивать по количеству мест в адуитории, потому что на практике это вообще не логично. Нам либо в приорите важен кабинет, кторый посвящан факультету, либо еолчество мест. Количество мест при том, почти никогда совпадать не будет
//       if(aud.faculty == group.facultet){
//         console.log(aud.name)
//       }
//   })
// }

// audForGroup(auditorium, group[1])

// function sortBySeat(arr){
//   return arr.sort((a,b)=>{
//     return a.seats-b.seats;
//   })
// }

// console.log(sortBySeat(auditorium))

// function sortByGroupName(arr){
//   return arr.sort((a,b)=>{
//     return a.name-b.name;
//   })
// }

// console.log(sortByGroupName(auditorium))