
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCatogeryInput = document.getElementById("productCatogery");
var productDescriptionInput =document.getElementById("productDescription");
var searchInput =document.getElementById("searchInput");
var addproductBtn =document.getElementById("addProductBtn");
var updateProductBtn =document.getElementById("updateProductBtn");

var productIndexUpdate = 0;

var productContainer =[];
 if (localStorage.getItem("products") != null){

    var productContainer = JSON.parse(localStorage.getItem("products"));
     displayData()
 }

function addProduct(){
   
    var product = {
        name : productNameInput.value,
        price: productPriceInput.value,
        catogery: productCatogeryInput.value,
        description : productDescriptionInput.value
    }

    productContainer.push( product);
    localStorage.setItem("products",JSON.stringify(productContainer))
     
   displayData()
   clearData()
}

function displayData(){

    cartona = '';
      
    for( var i=0 ; i< productContainer.length ; i++){

        cartona += `
        
        <tr>
        <td> ${productContainer[i].name} </td>
        <td> ${ productContainer[i].price} </td>
        <td> ${ productContainer[i].catogery} </td>
        <td> ${productContainer[i].description} </td>

         <td>
         <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">Update</button>
         <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
         </td>

      </tr>
        
        `
    }
   

    document.getElementById("data").innerHTML = cartona;
}

function deleteProduct( index){

   productContainer.splice(index,1)

   localStorage.setItem("products",JSON.stringify(productContainer))
  
   displayData();
  
}

function searchProduct(){

   

    cartona = '';

    var term = searchInput.value ;

   
      
      for( var i=0 ; i< productContainer.length ; i++){

        if(productContainer[i].name.toLowerCase().includes( term.toLowerCase()) ){

        cartona += `
        
        <tr>
        <td>${productContainer[i].name}</td>
        <td>${ productContainer[i].price}</td>
        <td>${ productContainer[i].catogery}</td>
        <td>${productContainer[i].description} </td>

         <td>
         <button class="btn btn-sm btn-outline-warning ">Update</button>
         <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
         </td>

      </tr>
        
        `
      }
    }
    
   
    document.getElementById("data").innerHTML = cartona;
    
}

function setData(productIndex){

  productIndexUpdate = productIndex;
 
var productData = productContainer[productIndex];

 productNameInput.value = productData.name;
 productPriceInput.value = productData.price;
 productCatogeryInput.value = productData.catogery;
 productDescriptionInput.value =productData.description;

 addproductBtn.classList.add("d-none");
 updateProductBtn.classList.remove("d-none")


}


function updateData(){
  
    
  var product = {
    name : productNameInput.value,
    price: productPriceInput.value,
    catogery: productCatogeryInput.value,
    description : productDescriptionInput.value
}

productContainer.splice(productIndexUpdate,1,product)

localStorage.setItem("products",JSON.stringify(productContainer));


addproductBtn.classList.remove("d-none");
updateProductBtn.classList.add("d-none")

displayData()
clearData()


}

function clearData(){
   
  productNameInput.value="";
  productPriceInput.value ="";
  productCatogeryInput.value ="";
  productDescriptionInput.value ="";
}











