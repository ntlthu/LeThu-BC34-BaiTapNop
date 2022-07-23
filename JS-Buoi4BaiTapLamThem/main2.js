function isLeapYear(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)
}

var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

document.getElementById('btnYesterday').onclick = function () {
  var day = Number(document.getElementById('inputDay').value)
  var month = Number(document.getElementById('inputMonth').value)
  var year = Number(document.getElementById('inputYear').value)

  var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (isLeapYear) {
    dayInMonth[2] = 29
  }

  day -= 1
  if (day == 0) {
    month -= 1
    if (month == 0) {
      year -= 1
      month = 12
      day = 31
    }

    day = dayInMonth[month]
  }

  var txtDate = document.getElementById('txtDate')

  txtDate.innerHTML = day + '/' + month + '/' + year
}

document.getElementById('btnTomorrow').onclick = function () {
  var day = Number(document.getElementById('inputDay').value)
  var month = Number(document.getElementById('inputMonth').value)
  var year = Number(document.getElementById('inputYear').value)

  var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (isLeapYear(year)) {
    dayInMonth[2] = 29
  }

  day += 1
  if (day > dayInMonth[day]) {
    month += 1
    if (month > 12) {
      year += 1
      month = 1
      day = 1
    }

    day = 1
  }

  var txtDate = document.getElementById('txtDate')

  txtDate.innerHTML = day + '/' + month + '/' + year
}

document.getElementById('btnCalcDay').onclick = function () {
  var month = Number(document.getElementById('inputMonth2').value)
  var year = Number(document.getElementById('inputYear2').value)

  var dayInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  if (isLeapYear(year)) {
    dayInMonth[2] = 29
  }

  var txtCalcDay = document.getElementById('txtCalcDay')

  txtCalcDay.innerHTML = dayInMonth[month] + ' ngày'
}

function getNumberText(numberz) {
  number = Number(numberz)
  switch (number) {
    case 1:
      return 'một'
    case 2:
      return 'hai'
    case 3:
      return 'ba'
    case 4:
      return 'bốn'
    case 5:
      return 'năm'
    case 6:
      return 'sáu'
    case 7:
      return 'bảy'
    case 8:
      return 'tám'
    case 9:
      return 'chín'
  }
}

document.getElementById('btnReadInt').onclick = function () {
  var number = document.getElementById('inputReadInt').value

  var txtReadInt = document.getElementById('txtReadInt')

  txtReadInt.innerHTML =
    getNumberText(number[0]) +
    ' trăm ' +
    getNumberText(number[1]) +
    ' mươi ' +
    getNumberText(number[2])
}



document.getElementById("btnSearch").onclick = function() {
    var nam1 = document.getElementById('inputName1').value
    var x1 = Number(document.getElementById('inputX1').value)
    var y1 = Number(document.getElementById('inputY1').value)

    var nam2 = document.getElementById('inputName2').value
    var x2 = Number(document.getElementById('inputX2').value)
    var y2 = Number(document.getElementById('inputY2').value)

    var nam3 = document.getElementById('inputName3').value
    var x3 = Number(document.getElementById('inputX3').value)
    var y3 = Number(document.getElementById('inputY3').value)


    var x4 = Number(document.getElementById('inputX4').value)
    var y4 = Number(document.getElementById('inputY4').value)



    var dist1 = (x1-x4)*(x1-x4) + (y1-x4)*(y1-y4)
    var dist2 = (x2-x4)*(x1-x4) + (y2-x4)*(y2-y4)
    var dist3 = (x3-x4)*(x1-x4) + (y3-x4)*(y3-y4)

    var txtSearch = document.getElementById('txtSearch')

    var farthest = "Xa đều"

    if (dist1 > dist2 && dist1 > dist3) {
        farthest = nam1
    }
    else if (dist2 > dist1 && dist2 > dist3) {
        farthest = nam2
    }
    else if (dist3 > dist1 && dist3 > dist2) {
        farthest = nam3
    }


    txtSearch.innerHTML = farthest
}