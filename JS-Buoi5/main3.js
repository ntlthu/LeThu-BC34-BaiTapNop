function isCandidatePassed() {
  var passScore = Number(document.getElementById('inputScore1').value)
  var location = document.getElementById('selLocation').value
  var user = document.getElementById('selUser').value
  var first = Number(document.getElementById('inputScore2').value)
  var second = Number(document.getElementById('inputScore3').value)
  var third = Number(document.getElementById('inputScore4').value)

  var locationBonus = 0
  console.log(location)
  if (location === 'A') {
    locationBonus = 2
  } else if (location === 'B') {
    locationBonus = 1
  } else if (location === 'C') {
    locationBonus = 0.5
  } else {
    alert('Chưa chọn khu vực')
    return
  }

  var candidateTypeBonus = 0
  if (user === '1') {
    candidateTypeBonus = 2.5
  } else if (user === '2') {
    candidateTypeBonus = 1.5
  } else if (user === '3') {
    candidateTypeBonus = 1
  } else {
    alert('Chưa chọn đối tượng')
    return
  }

  if (first > 0 && second > 0 && third > 0) {
    var total = first + second + third + locationBonus + candidateTypeBonus
    document.getElementById('txtResult').innerHTML =
      total >= passScore
        ? 'Bạn đã đậu. Tổng điểm: ' + total
        : 'Bạn đã rớt. Tổng điểm: ' + total
  } else
    document.getElementById('txtResult').innerHTML =
      'Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0'
}

document.getElementById('btnResult').onclick = isCandidatePassed

function calcElectricBill() {
  var name = document.getElementById('inputName').value
  var kwh = Number(document.getElementById('inputKW').value)

  var total = 0

  if (kwh > 50) {
    total += 50 * 500
    kwh -= 50
    if (kwh > 50) {
      total += 50 * 650
      kwh -= 50
      if (kwh > 100) {
        total += 100 * 850
        kwh -= 100
        if (kwh > 150) {
          total += 150 * 1100
          kwh -= 150

          if (kwh > 0) {
            total += kwh * 1300
          }
        } else {
          total += kwh * 1100
        }
      } else {
        total += kwh * 850
      }
    } else {
      total += kwh * 650
    }
  } else total += kwh * 500

  document.getElementById('txtBill').innerHTML =
    'Tổng tiền điện của ' + name + ' là ' + total
}

document.getElementById('btnCalcBill').onclick = calcElectricBill

function calcTax() {
  var name = document.getElementById('inputName2').value
   var salary = Number(document.getElementById('inputSalary').value) - 4000000 - 1600000 * Number(document.getElementById('inputUser').value)
    var taxMoney = 0
 
    if (salary > 0 && salary <= 60000000) {
        taxMoney = 0.05 *salary
    }
    else if (salary > 60000000 && salary <= 120000000) {
        taxMoney = 0.1 *salary
    }
    else if (salary > 120000000 && salary <= 210000000) {
        taxMoney = 0.15 *salary
    }
 
    else if (salary > 210000000 && salary <= 384000000) {
        taxMoney = 0.2 *salary
    }
    
    else if (salary > 384000000 && salary <= 624000000) {
        taxMoney = 0.25 *salary
    }
    else if (salary > 624000000 && salary <= 960000000) {
        taxMoney = 0.3 *salary
    }
    else if (salary > 960000000) {
        taxMoney = 0.35 *salary
    }
    else alert('Tiền thu nhập không hợp lệ')


    taxMoneyFormated = new Intl.NumberFormat('vn-VN').format(taxMoney)

    document.getElementById('txtTax').innerHTML =
      'Họ tên: ' + name + '; Tiền thuế thu nhập cá nhân: ' + taxMoneyFormated + ' VND'
}


document.getElementById("btnTax").onclick = calcTax