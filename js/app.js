// async function fetchData(url) {
//     const res = await fetch(url);
//     return res.json()
// }

// let DATA = []

// async function datalar() {
//     DATA = await fetchData("https://raw.githubusercontent.com/TheOksigen/purfect_data/refs/heads/main/papajosn.json");
//     show()
// }



let cards = document.querySelector('.cards')


// function show() {
//     let kod = '';
//     DATA.forEach(card => {
//         kod += `
//         <div class="lg:flex justify-center items-center">
//             <div onclick="popup('${card.img}', '${card.name}', '${card.price}', '${card.id}')" class="w-[310px] h-[350px] w-full m-3 shadow-md">
//                 <img src="${card.img}" alt="" class="object-cover object-center w-full h-[200px] ">
//                 <div class="justify-between p-2 space-y-4">
//                     <div class="space-y-2">
//                       <div class="flex justify-between">
//                         <h2 class="text-xl font-bold ">${card.name}</h2>
//                         <button type="button" class="bg-green-600 whitespace-nowrap h-[40px] text-white uppercase font-bold p-2 rounded-md">bunu seç</button>
//                       </div>
//                         <p class="dark:text-gray-800">${card.composition}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>`;
//     });
//     cards.innerHTML = kod;
//   }
//   show()
//   datalar()



function hesabla(arg, price) {
    const countDiv = document.querySelector("#countDiv")
    const qiymetntc = document.querySelector("#qiymetntc")
    let deyer = arg + +countDiv.innerHTML
    console.log(deyer);
    
    if (deyer < 1) {
        countDiv.innerHTML = 1
        document.getElementById("btnInc").disabled = true
    } else {
        document.getElementById("btnInc").disabled = false
        countDiv.innerHTML = deyer 
        qiymetntc.innerHTML = deyer * price + `₼`
    }
}

// let basket = []
// function addBasket(img, name, price, id) {
//     const sideBar = document.getElementById("sideBar")
//     const obj = {
//         id, img, name, price, count: +countDiv.innerHTML, opsi: price * +countDiv.innerHTML
//     }

//     const element = basket.find(item => item.id == id)

//     if (!element) {
//         basket.push(obj)
//     } else {
//         element.count += +countDiv.innerHTML
//     }

//     sebeteYaz()

// }




function secbagla() {
    popupDiv.innerHTML = ""
}

function deleteBasket(id) {
    basket = basket.filter(item => item.id != id);
    sebeteYaz()
}

//umumi mebleg

function toplam() {
    let qiymet =  basket.reduce((acc, item) =>  acc += (item.opsi), 0)
    console.log(qiymet);
}

function getPage() {
    window.location.href = '../index.htm';
}




