// Bài tập 1
var inputDate = document.getElementById("inputDate").value;
var inputMonth = document.getElementById("inputMonth").value;
var inputYear = document.getElementById("inputYear").value;
document.getElementById("yesterday").onclick = function () {
  var yesterdayDate = inputDate - 1;
};
