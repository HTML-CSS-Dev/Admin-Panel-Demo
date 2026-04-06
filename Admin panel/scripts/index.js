// window.alert(`Welcome ${localStorage.getItem("user")}!`);


const parent = document.getElementById("father");

(() => {

    for( let i = 0; i < 1; i++ ) {

        parent.innerHTML += 
    `
    <div class="max-w-xs rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
    
    <!-- image -->

    <div class="overflow-hidden">
        <img 
            class="w-full h-48 object-cover hover:scale-105 transition duration-300"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyFcvmHKM1inSOApmGcIYGT_XsE4KF9Pazuw&s" 
            alt="Burger"
        >
    </div>

    <!-- content -->
    <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-800 mb-2">
            Burger
        </h2>

        <div class="flex justify-between items-center mb-3">
            <span class="text-gray-500 text-sm">Price</span>
            <span  class="text-xl font-bold text-green-600">
               <span>$</span><span id="getPrice">12</span>
            </span>
        </div>

    <!-- counter -->
        <div class="flex items-center justify-between bg-gray-100 rounded-xl px-3 py-2">
            <button id="minus" class="text-lg font-bold px-2 hover:text-red-500">-</button>
            <span id="count" class="font-semibold text-lg">0</span>
            <button id="plus" class="text-lg font-bold px-2 hover:text-green-500">+</button>
        </div>

    <!-- total price -->

        <div class="flex justify-between items-center mt-4 p-3 bg-gray-100 rounded-xl shadow-inner">
            <span class="text-gray-600 font-medium">Total Price:</span>
            <span class="text-green-600 font-bold text-lg">
                $<span id="price">0</span>
            </span>
        </div>

         
    <!-- button -->

        <button class="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
            Buy Now
        </button>
    </div>
</div>
        
`
    }
})();


let count = 0;

parent.onclick = function(e) {
    console.log(e.target.textContent)
    
    if( e.target.textContent === "+") {
        count++
        if (e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim().toLowerCase() === "burger") {
            e.target.previousElementSibling.textContent = count;
        
        e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent = count
        e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent = e.target.parentElement.previousElementSibling.lastElementChild.lastElementChild.textContent * count;
    }
}

    if( e.target.textContent === "-" ) {
        count--;

        if (e.target.parentElement.previousElementSibling.previousElementSibling.textContent.trim().toLowerCase() === "burger") {
                if ( count < 0 )
                    count = 0;
            
            e.target.nextElementSibling.textContent = count;
            e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent -= e.target.parentElement.previousElementSibling.lastElementChild.lastElementChild.textContent ;

            if(count === 0)
                e.target.parentElement.nextElementSibling.lastElementChild.firstElementChild.textContent = 0;
    }       
}
}




/* 
 
const decreaser = document.getElementById("minus");
const increaser = document.getElementById("plus");
const counter = document.getElementById("count");

const getPrice = document.getElementById("getPrice"); // backend get
const price = document.getElementById("price"); // backend method post


increaser.onclick = () => {
    count++;
    counter.textContent = count;
    price.textContent = getPrice.textContent * count;
}

decreaser.onclick = () => {
    count--;

    if ( count < 0 )
       count = 0;

    console.log(price.textContent)
    price.textContent -= getPrice.textContent;
    counter.textContent = count;
    
    if( count === 0 )
        price.textContent = 0;
}
    */