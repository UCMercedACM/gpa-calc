var index = 1;
function append_row() {
   if (index < 6){
      var table = document.getElementById("middleTable");
   
      var row = table.insertRow(-1);
   
      var cell1 = row.insertCell(0);
      var t1 = document.createElement("input");
         t1.id = "txtCourse";
   
      var cell2 = row.insertCell(1);
      var t2 = document.createElement("input");
         t2.id = "txtUnits";
   
      var cell3 = row.insertCell(2);
      var t3 = document.createElement("input");
         t3.id = "txtGrade";
   
      var cell4 = row.insertCell(3);
      var t4 = document.createElement("input");
         t4.setAttribute("type", "checkbox");
         t4.id = "Include";
   
      var cell5 = row.insertCell(4);
      var t5 = document.createElement("input");
         t5.id = "txtGradepoints";
      
      cell1.appendChild(t1);
      cell2.appendChild(t2);
      cell3.appendChild(t3);
      cell4.appendChild(t4);
      cell5.appendChild(t5);
   
      index++;
   }
   else if (index >= 6){
      return 0;
   }
 }

function remove_row(){
   if (index > 1){
      var table = document.getElementById("middleTable");
      var row = table.deleteRow(-1);
      index = index - 1;
   }
   else if (index = 1){
      return 0;
   }
}