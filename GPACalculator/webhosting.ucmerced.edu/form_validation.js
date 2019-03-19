$('.surveyform iframe').attr('src', 'https://docs.google.com/forms/d/1lXziUefLEM7J7RJq9-m266ORwFde8cTA7jCsnNegzGY/viewform?embedded=true');

$('.surveyform iframe').ready(function() {
	//console.log($(this).contents().find("form").html());
	//$(this).removeAttr('src');
    //$('iframe').attr('src','');
});
var letter_grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F', 'IP', 'WR', 'I', 'W','N', 'P', 'S', 'NP', 'U'];
var letter_grades_points = [4.0, 4.0, 3.7, 3.3, 3.0, 2.7,2.3,2.0, 1.7, 1.3, 1.0, 0.7, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0];

var number_units_list = [0];
var letter_grades_list = [0];
var excludes_list = [0];

var number_units_total=0;
var grade_points_total=0;

var prevUnits;
var prevGradePoints;

function getinputs() {
  $('input[name=units]').each(function(i, v) {
    number_units_list[i] = Number($(this).val());
  });
  $('.gpoints').each(function(i, v) {
    letter_grades_list[i] = Number($(this).html());
  });
  $('input[name=cnc]').each(function(i, v) {
    excludes_list[i] = Number($(this).is(':checked') ? 1 : 0);
  });
 prevUnits= Number($('input[name=prevUnits]').val());
  prevGradePoints=Number($('input[name=prevGradePoints]').val());
}

function calculate_sem_GPA() {
  number_units_total = 0;
  grade_points_total = 0;
  for (i = 0; i < number_units_list.length; i++) {
    if (excludes_list[i] != 1) {
      number_units_total += number_units_list[i];
      grade_points_total += letter_grades_list[i];
    }
  }
  $('.sem_number_units').html(number_units_total);
  $('.sem_grade_points').html(grade_points_total.toFixed(2));
  var sem_GPA=(grade_points_total / number_units_total).toFixed(2);
  if (!(isNaN(sem_GPA))) {
    $('.semGPA').html(sem_GPA);
  }else{
  	$('.semGPA').html('0.0');
  }
}

function calculateGPA() {
	//if(prevUnits===0 || prevGradePoints===0){
  	//prevUnits=0;
    //prevGradePoints=0;
  //}
  var total_GPA_units= number_units_total + prevUnits;
  var total_GPA_points= grade_points_total + prevGradePoints;
  var result = total_GPA_points / total_GPA_units;
  if (!(isNaN(result))) {
	   $('#result_total_units').html(total_GPA_units);
  		$('#result_total_GradePoints').html(total_GPA_points.toFixed(2));
  	$('#result_total_GPA').html(result.toFixed(2));  
  }else{
	  $('#result_total_units').html(0);
  		$('#result_total_GradePoints').html(0.00);
  	$('#result_total_GPA').html('0.0');
  }
}

$(document).on('keyup change', '.number_units_input,.grade_input, .exclude_checkbox', function() {
  //console.log($(this).attr('class'));
  $(this).closest('tr').find('.gpoints').html('0.00');
  if ($(this).attr('class') === 'grade_input') {
    var x = $(this).val().toUpperCase();
    if ($(this).val().length > 0) {
      if ($.inArray(x, letter_grades) == -1) {
        $(this).val('');
        alert(x + ' is not possible grade');
      }
    }
  }
	
		var units = $(this).closest('tr').find('input[name=units]').val();		
	
	
		var grade = $(this).closest('tr').find('input[name=grade]').val().toUpperCase();
	
	
		var gpoints = (units * letter_grades_points[$.inArray(grade, letter_grades)]).toFixed(2);		
	
  
  if (!(isNaN(gpoints))) {
    $(this).closest('tr').find('.gpoints').html(gpoints);
  }
  getinputs();
  calculate_sem_GPA();
  calculateGPA();
});

$(document).on('click', '.resetrow', function() {
  $(this).closest('tr').find('input:text').val('');
  $(this).closest('tr').find('.gpoints').html('0.00');
  $(this).closest('tr').find('input[name=cnc]').attr('checked', false);
  getinputs();
  calculate_sem_GPA();
  calculateGPA();
})
$(document).ready(function() {
	
$('#addrow_button').on('click',function() {
	//alert("add clicked");
  var x = $('#myTbody tr').html();
  $('#myTbody').append('<tr>' + x + '</tr>');
	$('#myTbody tr:last').find('.gpoints').html('0.00');
  number_units_list.push(0);
  letter_grades_list.push(0);
  excludes_list.push(0);
})

$('#removerow_button').on('click',function() {
  if ($('#myTbody > *').length > 1) {
    number_units_list.splice(-1, 1);
    letter_grades_list.splice(-1, 1);
    excludes_list.splice(-1, 1);
    $('#myTbody tr').last().remove();
  }
  getinputs();
  calculate_sem_GPA();
  calculateGPA();
})

$('#resetall_button').on('click',function() {
  $('#myTbody').find('input:text').val('');
	$('#myTbody').find('.gpoints').html('0.00');
  $('input[name=cnc]').attr('checked', false);
  getinputs();
  calculate_sem_GPA();
  calculateGPA();
})

});

$(document).on('keypress keyup', '#prev_sems input,.nummber', function(e) {
	//alert('key pressed');
	e = e || window.event;
	//alert(e.keyCode);
  if (e.keyCode != 8 && e.keyCode != 0  && e.keyCode != 46 &&  (e.keyCode < 48 || e.keyCode > 57)) {
    	return false;
  }
});

$(document).on('keyup','#prevUnits,#prevGradePoints', function() {
	//alert('called');
	getinputs();
  calculateGPA(); 
});
