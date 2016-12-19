class Password{
  //The first part of the class.
  constructor(publickey, privatekey){
    this.publickey=publickey
    this.privatekey=privatkey
  }


  //Instance functions below this comment.
  validpublickey(){(
    if(publickey.length>=8 && publickey.length<=25){
      return true;
    }
    else{
      return false;
    }
  }
  validPrivateKey(){

  }

  //Static function below this comment.
  staticmakePrivateKey(){
    let key =""
    let limit = 14
    for(let j = 0; j<limit; j++){

      if(j==4){
        key = key+"-"
      }
      if(j==9){
        key = key+"-"
      }
      else{
        let r = Math.random()*10
        r = Math.floor(r);
        key = key+r
      }

    }
  }
}
