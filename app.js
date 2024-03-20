


let cart=[]

let buy = document.querySelectorAll(".container>div")

buy.forEach((ele)=>{
    
  let addbutton = ele.querySelector(".button.flex")
  
  addbutton.addEventListener("click",()=>{
    let price = ele.querySelector("p")
    let name =ele.querySelector("h3")
    let isthere=false
    for(let i=0;i<cart.length;i++){
        if(cart[i].name==name.innerText){
          isthere =true
          cart[i].quantity=cart[i].quantity+1
        }
    }
    if(!isthere){
        cart.push(
            {
            name:name.innerText,
            price:price.innerText,
            quantity:1
         }
        )
    }
    let cartitems =document.getElementById("cart-value")
      cartitems.innerText=cart.length
  })

})


let cartdiv = document.getElementById("cart")

cartdiv.addEventListener("click",()=>{
   
  let total =0
  cart.forEach((ele,index)=>{
    let price =ele.price.slice(1)
    total += +price * ele.quantity
    console.log(`Item ${index+1} : ${ele.name} quantity : ${ele.quantity}` )
  })

  console.log(`total price : $ ${total}`)

  
    
})