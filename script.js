let add_to_cart=document.getElementsByClassName('btn-primary');
// console.log(add_to_cart);
let main_container=document.getElementsByTagName('tbody')[0];
//console.log(main_container);
let removeBtn=document.getElementsByClassName('remove-btn');

for(let i=0;i<add_to_cart.length;i++){
    add_to_cart[i].addEventListener('click',addtoCart);
}

function addtoCart(event){
    let btn =event.target;
    let btn_parent=btn.parentElement;
    //console.log(btn_parent);
    //let btn_grandParent=btn.parentElement.parentElement;
     //console.log(btn_grandParent);
     let itemImage=btn_parent.children[0].src;
     let itemName=btn_parent.children[1].innerText;
     let itemPrice=btn_parent.children[2].innerText;

     //console.log(itemPrice);
     let itemContainer= document.createElement('tr');
     //console.log(itemContainer);
     itemContainer.innerHTML=`<td style="width:150px; height:150px;text-align:center; vertical-align:middle"><img src="${itemImage}" style="max-height:100%; max-width:100%"/></td>
     <td>${itemName}</td>
     <td class="totalprice">${itemPrice}</td>
     <td><button class="remove-btn" type="button" >Remove</button></td>`
    //  const totalPriceDiv=document.getElementsByClassName("totalPrice")[0]
    //   let totalPrice=document.getElementsByClassName("totalPrice")[0].innerText.split("$")[1]
    //   //console.log(Number(totalPrice),)
    //   totalPrice=Math.round(Number(totalPrice)+Number(itemPrice.split("$")[1]));


    //   totalPriceDiv.innerHTML=`$ ${totalPrice}`
      
     
     main_container.append(itemContainer);
    
     totalprice();
     for(let i=0;i<removeBtn.length;i++){
        removeBtn[i].addEventListener('click',removeItems);
    }
    
   
}

function removeItems(event){
    
    remove_btn=event.target;
    //console.log(remove_btn);
    remove_btn_grandparent=remove_btn.parentElement.parentElement;
    remove_btn_grandparent.remove()
    totalprice()
}


function totalprice(){
    let total=0;
    let totalprice=document.getElementsByClassName('totalPrice')[0];
    //console.log(totalprice);
    let total_price=document.getElementsByClassName('totalprice');
    //console.log(total_price);
    for(var i=0; i<total_price.length; i++){
       total_price_content=Math.round(Number(total_price[i].innerText.replace('$',''))) ;
       //console.log(total_price_content)
       total +=total_price_content;
       //console.log(total);
    }
    totalprice.innerText='$' + total
    //console.log(total);
}