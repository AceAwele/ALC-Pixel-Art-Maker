/**
* @description creates grid
*/
function makeGrid() {
 
let table, cell, gridHeight, gridWidth, rows;
  
  table = $('#pixel_canvas');
  gridHeight = $('#inputHeight').val(); // TODO: store the input value for height
  gridWidth = $('#inputWidth').val();   // TODO: store the input value for width
  
  table.children().remove()
  
  for (let x = 0; x < gridHeight; x++) {
  table.append('<tr></tr>');
  }
  
  rows = $('tr');
  
  for (let y = 0; y < gridWidth; y++) {
  rows.append('<td></td>');
  } 
  
  cell = table.find('td');
  
  cell.click(function() { // TODO: change cell background color
  
    let color;
    color = $('#colorPicker').val(); // TODO: store the value of selected color
    $(this).attr('bgcolor', color);
  });
  
}


let submitButton;

submitButton = $('input[type="submit"]')

submitButton.click(function(evt) {
  evt.preventDefault();
  // prevent creating default grid
  makeGrid();
});
