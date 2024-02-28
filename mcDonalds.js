let container = document.querySelector("section");
let checkbox = document.getElementsByClassName("food");
let orderedItems = document.getElementById("ordered-items");
let btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click",function(){
  orderFood(getSelectedItems());
});

const getSelectedItems = () => {
  let arr = [];
  for (let i=0; i < checkbox.length; i++) {
    if(checkbox[i].checked) {
      arr.push(checkbox[i].value);
    }
  }
  return arr;
}


// accepts selected items from the menu as an array
const orderFood = async (items) => {
  // reset bg color
  let orderCardDiv = document.getElementsByClassName('order-card')[0];
  orderCardDiv.style.background = 'white';

  // reset items
  let orderDiv = document.getElementById('ordered-items');
  orderDiv.innerHTML = '';

  // reset order id
  let orderIdDiv = document.getElementById('order-id');
  orderIdDiv.innerHTML = '';

  let foodImages = {
    'Burger': 'burger.jpeg',
    'McPuff': 'mcpuff.jpeg',
    'Wrap' : 'wrap.jpeg',
    'Cold_drink': 'pepis.jpeg',
    'Coffee' : 'coffee.jpeg'
  };

  let promise = new Promise(function () {
    setTimeout(() => {
      items.forEach(ele => {
        let foodImg =document.createElement('img');

        foodImg.src = `./image/${foodImages[ele]}`;
        foodImg.alt = ele;
        foodImg.style.width = '100%';

        let foodItem = document.createElement('p');
        foodItem.id = 'food-item';
        foodItem.textContent = ele;

        orderDiv.append(foodImg,foodItem);
      });
      count++
      orderIdDiv.textContent = 'Order id :' +  count;

      // set bg to gray
      orderCardDiv.style.background = '#e6e6e8'
    }, 700);
  });

  promise.then((data) => {
    console.log(data);
  })
  promise.catch((error) => {
    console.log(error)
  })
  
};



