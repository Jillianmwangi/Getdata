console.log(4567);
const JSONdata = document.querySelector (".JSONdata")
fetch("https://dummyjson.com/products")
.then((res=> res.json()))
.then(data=>{
    console.log(data)
    data.products.forEach(product => {
        console.log(product);
        JSONdata.innerHTML+=`<li>
        <h2>${product.title}</h2>
        <img src="${product.images[0]}" alt=" product image" srcset="">
        <h3>Price:${product.price}</h3>
        <p>${product.description}</p>
          </li>`
    })
   })
   .catch(function(error) {
    console.log("Promise not parsed to JSON");
   })
   .catch(function(error) {
    console.log(error);
  })



