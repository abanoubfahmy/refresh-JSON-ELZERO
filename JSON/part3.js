let req = new XMLHttpRequest();
req.open("Get", "articles.json");
req.send();
req.onreadystatechange = function() {
 if (this.readyState === 4 && this.status === 200) {
 let mainData = JSON.parse(this.responseText);
 let data = document.createElement("div");
 data.id = "data";
 for (let i = 0; i < mainData.length; i++) {
 let div = document.createElement("div");
 let h2 = document.createElement("h2");
 h2.textContent = mainData[i].title;
 let p1 = document.createElement("p");
 p1.textContent = mainData[i].body;
 let p2 = document.createElement("p");
 p2.textContent = `Author: ${mainData[i].author}`;
 let p3 = document.createElement("p");
 p3.textContent = `Category: ${mainData[i].category}`;
 div.appendChild(h2);
 div.appendChild(p1);
 div.appendChild(p2);
 div.appendChild(p3);
 data.appendChild(div);
 }
 document.body.prepend(data);
 }
}