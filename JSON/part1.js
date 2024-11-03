let req= new XMLHttpRequest();
 req.open('GET',"articles.json");
 req.send



 req.onreadystatechange= function(){
  if(this.readyState==4 && this.status==200){
    consle.log(this.responseText);
 setTimeout(() => {
  console.log("DATA LOADED")
 }, 0);

  }
 }