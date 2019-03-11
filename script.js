var checkboxes = [];

function calculate() {
  var averages = [0, 0, 0, 0, 0, 0];

  for(var j = 1; j < 6; j++) {
    var row = [];
    for(var i = 5; i > 0; i--) {
      row.push(document.getElementById(i.toString() + "x" + j.toString()));
    }
    checkboxes.push(row);
  }
  for(var j = 0; j < 5; j++) {
    numCheckedBoxes = 0;
    for(var i = 0; i < 5; i++) {
      if(checkboxes[j][i].checked == true) {
        averages[j] += Number((checkboxes[j][i].id)[0]);
        numCheckedBoxes += 1;
      }
    }
    if(numCheckedBoxes > 0) {
      averages[j] /= numCheckedBoxes;
    }
    console.log(averages[j]);
  }
  for(var n = 0; n < 5; n++) {
    averages[5] += averages[n];
  }
  averages[5] /= 5;
  var averageText = document.getElementById("average");
  averageText.innerHTML = "";

  averageText.innerHTML += ("Thesis: " + averages[0].toString()) + "<br/>";
  averageText.innerHTML += ("Organization: " + averages[1].toString()) + "<br/>";
  averageText.innerHTML += ("Evidence: " + averages[2].toString()) + "<br/>";
  averageText.innerHTML += ("Word Choice: " + averages[3].toString()) + "<br/>";
  averageText.innerHTML += ("MUGS: " + averages[4].toString()) + "<br/>";
  averageText.innerHTML += ("<b>" + "Overall: " + averages[5].toString() + "</b>") + "<br/>";
}
