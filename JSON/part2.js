let req = new XMLHttpRequest();
req.open("Get", "articles.json");
req.send();
req.onreadystatechange = function() 
//  if (this.readyState === 4 && this.status === 200) {
//  let mainData = JSON.parse(this.responseText);
//  for (let i = 0; i < mainData.length; i++) {
//  mainData[i].category = "All";
//  }
//  console.log(mainData);
//  let updatedData = JSON.stringify(mainData);
//  console.log(updatedData);
//  }
// }
{
  if(this.readyState === 4&&this.status === 200){
    let mainData=JSON.parse(this.responseText);
    for( let i = 0; i < mainData.length; i++){
      mainData[i].category="All";
    }
    console.log(mainData);
    let updatedData=JSON.stringify(mainData);
    console.log(updatedData);
  }
}