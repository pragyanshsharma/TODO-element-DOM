/*
function createComplexDomElement() {
		const div = document.createElement("div");

		const h1 = document.createElement("h1");
		h1.innerHTML = "random text";
		
    div.appendChild(h1);
		document.querySelector("body").appendChild(div);
}
*/

// 2nd Approach
function addTodo() {
  // get the value of input element
  let value = document.querySelector("input").value;


  //here we just created two tag components(instead of long textual html) which will be inside div that will be appended and deleted
  let spanel = document.createElement("span"); 
  let spanbuttonel = document.createElement("button");
  //putting values inside created elements
  spanel.innerHTML = value;           
  spanbuttonel.innerHTML = "Delete";
  

  //creating div element and putting span and button inside it
  let divel = document.createElement("div");
  divel.appendChild(spanel);      
  divel.appendChild(spanbuttonel);
  

  // append div element to body
  document.querySelector("body").appendChild(divel);
}










