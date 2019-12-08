
var index = 1;
function appendRow() {
   var table = document.getElementById("middleTable");
   
   var row = table.insertRow(-1);

   var cell1 = row.insertCell(0);
   var t1 = document.createElement("input");
      t1.id = "txtCourse" + index;

   var cell2 = row.insertCell(1);
   var t2 = document.createElement("input");
      t2.id = "txtUnits" + index;

   var cell3 = row.insertCell(2);
   var t3 = document.createElement("input");
      t3.id = "txtGrade" + index;

   var cell4 = row.insertCell(3);
   var t4 = document.createElement("input");
      t4.setAttribute("type", "checkbox");
      t4.id = "Include" + index;

   var cell5 = row.insertCell(4);
   var t5 = document.createElement("input");
      t5.id = "txtGradepoints" + index;

   cell1.appendChild(t1);
   cell2.appendChild(t2);
   cell3.appendChild(t3);
   cell4.appendChild(t4);
   cell5.appendChild(t5);

index++;
 }

function deleterow(){
   var table = document.getElementById("middleTable");
   var row = table.deleteRow(-1);
   //if row == table.deleterow(0){
      //then
   //}
}