const url = window.location.search.split("&")

const categor = url[0].split("=").at(-1)
console.log(categor);

const id = url[1].split("=").at(-1)

const MEHSUL = []
const content = document.getElementById("content")

fetch(`http://localhost:3000/${categor}/${id}`)
.then(ser => ser.json())
.then(data => {
    MEHSUL.push(data)
    handleCard()
})


function handleCard(){
    MEHSUL.map( item => {
        content.innerHTML +=`
           <section class="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div class="py-6 md:py-0 md:px-6">
                <h1 class="text-4xl font-bold">${item.title}</h1>
                <p class="flex items-center pt-4">
                        <i class="fa-solid fa-plate-wheat text-green-800"> Category: </i>
                        <span class="text-center pl-2 uppercase font-bold text-green-900">${item.category}</span>
                </p>
                <div class="space-y-4">
                    <p class="flex items-center">
                        <h1 class="fa-solid fa-plate-wheat  text-red-800"> Composition :</h1>
                        <span>${item.composition}</span>
                    </p>
                    
                    <p class="flex items-center">
                        <i class="fa-solid fa-money-bill-1-wave  text-red-800"> Price: </i>
                        <span>${item.price}</span>
                    </p>
                    <div class="flex rounded my-2">
                        <a class="bg-green-500 w-[50%] text-center text-white py-1" href="">Ənənəvi</a>
                        <a class="bg-gray-200 w-[50%] text-center text-green-700 py-1" href="">Nazik</a>
                    </div>
                    <div class="py-1 font-semibold w-full">
                        <select class="bg-[#AD0F14] outline-none px-1 text-[15px] text-white w-full h-[30px]">
                            <option value="5.5">Mini pizza, 15 sm - 5.5 M </option>
                            <option value="11">Kiçik, 23 sm - 11 M</option>
                            <option value="17">Orta, 30 sm - 17 M</option>
                            <option value="21">Böyük, 35 sm - 21 M</option>
                        </select>
                    </div>
                    <div class="sebet-mehsulelave flex items-start lg:w-[80%] w-[90%] justify-start py-4">
                        <div class="flex items-start w-full justify-start flex-row">
                            <button onclick="hesabla(-1, ${item.price})" id="btnInc" class="w-[29px] h-[29px] bg-gray-400 text-black text-[14px] font-bold">➖</button>
                             <span id="countDiv-${item.id}" class="bg-gray-200 flex items-center justify-center w-[49px] h-[29px] text-black text-[19px] font-bold">1</span>
                            <button onclick="hesabla(1, ${item.price})" class="w-[29px] h-[29px] bg-green-500 text-white text-[14px] font-bold">➕</button>
                        </div>
                        <p id="qiymetntc" class="text-black text-[15px] font-bold">${item.price}₼</p>
                    </div>
                    <div>
                             <button onclick="addBasket('${item.img}', '${item.title}', ${item.price}, ${item.id}, parseInt(document.getElementById('countDiv-${item.id}').innerText))" class="bg-green-500 p-2 text-white">SƏBƏTƏ ƏLAVƏ ET</button>
                        </div>
                </div>

            </div>
            <form novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                <img src="${item.img}" alt="">
                <button onclick="goBack()" type="button" class=" text-red-800 self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-600 dark:text-gray-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600"><i class="fa-solid fa-circle-left text-4xl text-green-400"></i></button>
            </form>
        </div>
    </section>
        `
    })

}

function goBack() {
    window.location.href = '../index.htm';
}








let basket = [];

function openBasket() {
    document.getElementById("sidebar").style.display = "flex"; 
}

function closeBasket() {
    document.getElementById("sidebar").style.display = "none"; 
}

function addBasket(img, name, price, id, count) {
    const obj = { id, img, name, price, count };
    const element = basket.find(item => item.id == id);

    if (!element) {
        basket.push(obj);
    } else {
        element.count += count;
    }

    sebeteYaz();
}

function sebeteYaz() {
    const sideBar = document.getElementById("sidebar");
    sideBar.innerHTML = '';

    basket.forEach(item => {
        sideBar.innerHTML += `
            <div class="bg-white w-1/3 p-4 rounded-lg">
                <div class="sebet-head flex items-center justify-between">
                    <h2 class="text-[42px] font-bold">Səbət</h2>
                    <span class="close-basket cursor-pointer text-[16px] font-bold">Bağla <i class="fa-solid fa-circle-xmark"></i></span>
                </div>
                <div class="mehsul-say flex items-start">
                    <span id="say">Səbətinizdə məhsulların sayı: ${item.count}</span>
                </div>
                <div class="flex justify-between">
                    <div class="flex">
                        <img class="w-full h-32 object-cover rounded-lg mb-2" src="${item.img}" alt="${item.title}">
                        <h2>${item.title}</h2>
                    </div>
                    <div class="sebet-mehsulelave flex items-start lg:w-[80%] w-[90%] justify-start py-4">
                        <div class="flex items-start w-full justify-start flex-row">
                            <button onclick="hesabla(-1, ${item.price})" id="btnInc" class="w-[29px] h-[29px] bg-gray-400 text-black text-[14px] font-bold">➖</button>
                            <span id="countDiv" class="bg-gray-200 flex items-center justify-center w-[49px] h-[29px] text-black text-[19px] font-bold">1</span>
                            <button onclick="hesabla(1, ${item.price})" class="w-[29px] h-[29px] bg-green-500 text-white text-[14px] font-bold">➕</button>
                        </div>
                        <p id="qiymetntc" class="text-black text-[15px] font-bold">${item.price}₼</p>
                    </div>
                </div>
                <div class="umum-meb flex items-center justify-between">
                <button class="uppercase bg-red-700 text-white rounded-md font-bold p-2">Sifarişi göndər</button>
                    <p class="text-[20px] font-bold">Ümumi məbləğ: ${item.price * item.count}₼</p>
                </div>
            </div>
        `;
    });

    const closeButtons = document.querySelectorAll('.close-basket');
    closeButtons.forEach(button => {
        button.onclick = closeBasket; 
    });
}

document.getElementById('basket-button').onclick = openBasket;

addBasket('path/to/image.jpg', 'Məhsul Adı', 1, 1);