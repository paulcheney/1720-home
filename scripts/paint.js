//Grab a reference to the elements
const calculate = document.querySelector("#calculate");
const supplyList = document.querySelector("#supplies");

calculate.addEventListener("click", () => {
  const width = Number(document.querySelector("#width").value);
  //console.log(width);

  const depth = Number(document.querySelector("#depth").value);
  //console.log(depth);

  const height = Number(document.querySelector("#height").value);
  //console.log(height);

  const paintType = document.querySelector("#quality").selectedOptions[0].text;
  const quality = Number(
    document.querySelector("#quality").selectedOptions[0].value
  );
  //console.log(paintType);
  //console.log(quality);

  if (width && depth && height && quality) {
    //calculate yards of carpet from sq ft.
    let carpet = (width * depth) / 9;

    // calculate tack strip from perimeter
    let tackstrip = Number((width + depth) * 2);

    // calculate paint from perimeter times wall height
    let walls = Number((width * height * 2 + depth * height * 2) / quality);

    let ceiling = (width * depth) / quality;
    ceiling = Math.ceil(ceiling);

    supplyList.innerHTML = `
    <h2>Paint Supplies</h2>
    <p>${Math.ceil(walls + ceiling)} gallons of primer paint</p>
    <p>${Math.ceil(ceiling)} gallons of ${paintType} flat ceiling paint</p>
    <p>${Math.ceil(walls)} gallons of ${paintType} semigloss wall paint</p>
    
    <h2>Carpet Supplies</h2>
    <p>${Math.ceil(carpet)} yards of carpet</p>
    <p>${Math.ceil(tackstrip)} feet of tack strip</p>
    `

  } else {
    supplyList.innerHTML ="Complete the form before asking for a supply list"
  }
}); // end function
