//Grab a reference to the button
const calculate = document.querySelector('#calculate')
const paint = document.querySelector('#paint')
const carpet = document.querySelector('#carpet')

calculate.addEventListener('click', () => {
    //delete previous calculated items.
    document.querySelector('#paint').innerHTML = '';
    document.querySelector('#carpet').innerHTML = '';
    
    const width = Number(document.querySelector('#width').value);
    console.log(width);

    const depth = Number(document.querySelector('#depth').value);
    console.log(depth);

    const height = Number(document.querySelector('#height').value);
    console.log(height);
	
	const paintType = document.querySelector('#quality').selectedOptions[0].text;
    const quality = Number(document.querySelector('#quality').selectedOptions[0].value);
    console.log(paintType);
    console.log(quality);

    //calculate yards of carpet from sq ft.
    let carpet = (width * depth)/9;
    console.log(carpet + " yards");


    // calculate tack strip from perimeter
    let tackstrip = Number((width + depth)*2);
    console.log(tackstrip + " tack strip");

    // calculate paint from perimeter times wall height
    let walls = Number(((width * height * 2)+ (depth * height * 2))/quality);
    console.log(walls + "  wall paint");

    
    let ceiling = (width * depth)/quality;
    console.log(ceiling + " ceiling paint");
    ceiling = Math.ceil(ceiling);


    
    additem('#paint', `${Math.ceil(walls + ceiling)} gallons of primer paint`);
    additem('#paint', `${Math.ceil(ceiling)} gallons of ${paintType} flat ceiling paint`);
    additem('#paint', `${Math.ceil(walls)} gallons of ${paintType} semigloss wall paint`);
    

    additem('#carpet', `${Math.ceil(carpet)} yards of carpet`);
    additem('#carpet', `${Math.ceil(tackstrip)} feet of tack strip`);
    
    
}); // end function


let additem = (list, message) => {
    //console.log(list);
    //console.log(message);
    let theList = document.querySelector(list);
    let myListItem = document.createElement("li");
    myListItem.textContent = message;
    theList.appendChild(myListItem);
} // end add list item

