class Cart{
  //What is the first part of every class? Type it below.
  constructor(){
    this.itemList=itemList // An array that contains pre-made item-objects.
    this.itemQuantity=itemQuantity // An array that stores how many of each corresponding item you have in the cart.
  }

  //Type the instance functions below this comment.
  addItem(i,q){
    this.itemList.push(i)
    this.itemQuantity.push(q)
  }

  totalCart(){
    let total=0;
    for(let i=0, i<this.itemQuantity.length, i++){
      total += this.itemList[i].price*this.itemQuantity[i]
    }
    return total;
  }

  subCart(days){
    let subcart = new Cart([],[])
    for(let i=0, i<this.itemQuantity.length, i++){
      if(this.itemlist[i].shipping == days){
        subcart.itemlist.push()
      }
    }
    return subcart
  }

}
