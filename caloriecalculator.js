function inputCaloriesByDay(day){
 if ('Monday') {
    return 3500;
  } else if ('Tuesday') {
    return 1500;
  } else if ('Wednesday') {
      return 1800;
    } else if ('Thursday') {
      return 2300;
    } else if ('Friday') {
      return 2400;
    } else if ('Saturday') {
      return 1500;
    } else if ('Sunday') {
      return 1500;
    } else {
      return 'Please choose valid day';
    }
}
function getTotalCalories(){
     return inputCaloriesByDay('Monday') +inputCaloriesByDay('Tuesday') +inputCaloriesByDay('Wednesday') +  inputCaloriesByDay('Thursday') +
  inputCaloriesByDay('Friday') +  inputCaloriesByDay('Saturday') +   inputCaloriesByDay('Sunday');
}
function getIdealCalories(){
    var idealDailyCalories=1500;
    return idealDailyCalories*7;
}

function calculateHealthPlan(){
    var actualCalories=getTotalCalories();
    var idealCalories=getIdealCalories();
    if(actualCalories>idealCalories){
        return 'You need to exercise more!!!!';
    }else if(idealCalories>actualCalories){
        return 'Time for seconds';
    }
    else{
        return 'Just the right amount';
    }
}
calculateHealthPlan();