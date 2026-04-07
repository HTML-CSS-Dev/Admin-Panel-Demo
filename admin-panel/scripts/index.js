window.localStorage.setItem("foods" , JSON.stringify([
    {
        id:1,
        food_img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cheeseburger.jpg",
        food_name:"Burger",
        food_price:12,
        plus_id:"plus1",
        minus_id:"minus1",
    }, 
    
    {
        id:2,
        food_img:"https://upload.wikimedia.org/wikipedia/commons/f/fb/Hotdog_-_Evan_Swigart.jpg", 
        food_name:"Hot Dog",
        food_price:6,
        plus_id:"plus2",
        minus_id:"minus2",
    },

    {
        id:3,
        food_img:"https://ik.imagekit.io/wlfr/wellness/images/products/372473-1.jpg/tr:w-3840,c-at_max,cm-pad_resize,ar-1210-700,pr-true,f-auto,q-70,l-image,i-Wellness_logo_BDwqbQao9.png,lfo-bottom_right,w-200,h-90,c-at_least,cm-pad_resize,l-end", 
        food_name:"Chips",
        food_price:10,
        plus_id:1,
        plus_id:"plus3",
        minus_id:"minus3",
    },
]));


const userName = document.getElementById("userName");
userName.textContent = localStorage.getItem("isAdmin");

const parent = document.getElementById("father");
const counters = {
    count1:0,
    count2:0,
    count3:0,
};


function showItems()  {

    const food_data = JSON.parse(localStorage.getItem("foods"));
    
    console.log(food_data)

    for( let i of food_data ) {


        parent.innerHTML += 
    `
    <div class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
    
    <!-- image -->

    <div class="overflow-hidden">
        <img 
            class="w-full h-48 object-cover hover:scale-105 transition duration-300"
            src=${i.food_img} 
            alt=${i.food_name}
        >
    </div>

    <!-- content -->
    <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">
            ${i.food_name}
        </h2>

        <div class="flex justify-between items-center mb-3">
            <span class="text-gray-500 text-sm">Price</span>
            <span  class="text-xl font-bold text-green-600">
               <span>$</span><span>${i.food_price}</span>
            </span>
        </div>

    <!-- counter -->
        <div class="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-2">
            <button id=${i.minus_id} class="text-lg font-bold px-2 hover:text-red-500">-</button>
            <span id = ${i.id} class="font-semibold text-lg">0</span>
            <button id=${i.plus_id} class="text-lg font-bold px-2 hover:text-green-500">+</button>
        </div>

    <!-- total price -->

        <div class="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded-xl shadow-inner">
            <span class="text-gray-600 font-medium">Total Price:</span>
            <span class="text-green-600 font-bold text-lg">
                $<span id="price">0</span>
            </span>
        </div>

         
    <!-- button -->

        <button id = "add" class="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
            Order now
        </button>
    </div>
</div>

`
}
}

showItems();


// counters:
const plus1 = document.getElementById("plus1");
const minus1 = document.getElementById("minus1");


// showModal:
const modal1 = document.querySelector("span[id = '1']");
const modal2 = document.querySelector("span[id = '2']");
const modal3 = document.querySelector("span[id = '3']");


let price1 = modal1.parentElement.previousElementSibling.lastElementChild.lastElementChild.textContent;
let overall_price1 = modal1.parentElement.nextElementSibling.lastElementChild.firstElementChild;

let price2 = modal2.parentElement.previousElementSibling.lastElementChild.lastElementChild.textContent;
let overall_price2 = modal2.parentElement.nextElementSibling.lastElementChild.firstElementChild;

let price3 = modal3.parentElement.previousElementSibling.lastElementChild.lastElementChild.textContent;
let overall_price3 = modal3.parentElement.nextElementSibling.lastElementChild.firstElementChild;


// increase:
plus1.onclick = function() {
    counters.count1++;
    modal1.textContent = counters.count1;
    overall_price1.textContent = counters.count1 * price1;
}

plus2.onclick = function() {
    counters.count2++;
    modal2.textContent = counters.count2;
    overall_price2.textContent = counters.count2 * price2;
}

plus3.onclick = function() {
    counters.count3++;
    modal3.textContent = counters.count3;
    overall_price3.textContent = counters.count3 * price3;

}


// decrease:
minus1.onclick = function() {
    counters.count1--;
    if( counters.count1 < 0 )
        counters.count1 = 0;

    modal1.textContent = counters.count1;
    overall_price1.textContent -= price1;

    if( overall_price1.textContent < 0 ) 
        overall_price1.textContent = 0;
}

minus2.onclick = function() {
    counters.count2--;

    if( counters.count2 < 0 ) {
        counters.count2 = 0;
    }

    modal2.textContent = counters.count2;
    overall_price2.textContent -= price2;

    if( overall_price2.textContent < 0 ) 
        overall_price2.textContent = 0;
    
}

minus3.onclick = function() {
    counters.count3--;
    
    if( counters.count3 < 0 ) {
        counters.count3 = 0;
    }

    modal3.textContent = counters.count3;

    overall_price3.textContent -= price3;

    if( overall_price3.textContent < 0 ) 
        overall_price3.textContent = 0;
}




// hand-made data:


const orders = JSON.parse(localStorage.getItem("orders")) || [];
// order buttons;
const order1 = modal1.parentElement.nextElementSibling.nextElementSibling;
const order2 = modal2.parentElement.nextElementSibling.nextElementSibling;
const order3 = modal3.parentElement.nextElementSibling.nextElementSibling;



order1.onclick = function() {
 
    orders.push({
        title:"Burger",
        price:overall_price1.textContent,
        count:modal1.textContent
    });

    localStorage.setItem("orders" , JSON.stringify(orders));

    overall_price1.textContent = 0;
    modal1.textContent = 0;
}

order2.onclick = function() {

    orders.push({
        title:"Hot Dog",
        price:overall_price2.textContent,
        count:modal2.textContent
    });

    localStorage.setItem("orders" , JSON.stringify(orders));

    overall_price2.textContent = 0;
    modal2.textContent = 0;
}


order3.onclick = function() {
    
    orders.push({
        title:"Chips",
        price:overall_price3.textContent,
        count:modal3.textContent
    });

    localStorage.setItem("orders" , JSON.stringify(orders));

    overall_price3.textContent = 0;
    modal3.textContent = 0;
}



// get Info:
const total = document.getElementById("total");
const quantity = document.getElementById("quantity");
const foodSelector = document.getElementById("select-food");

foodSelector.onchange = function() {
    const userOrder = JSON.parse(localStorage.getItem("orders"));
    
    for( let i of userOrder ) {
        if ( i.title.trim() === foodSelector.value.trim() ) {
            total.textContent = i.price;
            quantity.textContent = i.count;
            return
        }
    }
};

const selection = document.getElementById("select-food");


selection.onchange = function() {
    const userOrder = JSON.parse(localStorage.getItem("orders"));
    let newOrder = userOrder;

    if ( userOrder.length > 3 ) {
        newOrder = userOrder.slice(userOrder.length - 3);
    }

    for( let i of newOrder ) {
        if ( i.title.trim().toLowerCase() === selection.value.trim().toLowerCase()) {
            total.textContent = i.price;
            quantity.textContent = i.count;
            return
        }
    }

    total.textContent = 0;
    quantity.textContent = 0;
}