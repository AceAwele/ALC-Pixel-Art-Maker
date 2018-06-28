/**
* @description creates grid
*/
function makeGrid() {
  console.log("create grid")
    
  let table, cell, gridHeight, gridWidth, rows;
  
  table = $('#pixel_canvas');
  gridHeight = $('#inputHeight').val();
  gridWidth = $('#inputWidth').val();
  
  table.children().remove()
  
  for (let x = 0; x < gridHeight; x++) {
  table.append('<tr></tr>');
  }
  
  rows = $('tr');
  
  for (let y = 0; y < gridWidth; y++) {
  rows.append('<td></td>');
  } 
  
  cell = table.find('td');
  
  cell.click(function() { // TODO: change background color
  console.log("put color");
    let color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });
  
}


let submitButton;

submitButton = $('input[type="submit"]')

submitButton.click(function(event) {
  event.preventDefault();
  // prevent creating default grid
  makeGrid();
});
