function sapXepSo() {
  var number1Input = document.getElementById('num1')
  var number2Input = document.getElementById('num2')
  var number3Input = document.getElementById('num3')

  var number1 = Number(number1Input.value || 0)
  var number2 = Number(number2Input.value || 0)
  var number3 = Number(number3Input.value || 0)

  if (number1 < number2) {
    var temp = number1
    number1 = number2
    number2 = temp
  }

  if (number1 < number3) {
    var temp = number1
    number1 = number3
    number3 = temp
  }

  if (number2 < number3) {
    var temp = number2
    number2 = number3
    number3 = temp
  }

  var result = document.getElementById('resultBai1')

  result.innerHTML = number3 + '<' + number2 + '<' + number1
}

function goiLoiChao() {
  var chonThanhVien = document.getElementById('selUser')

  console.log('ádasd')
  var result = document.getElementById('resultBai2')

  var thanhvien = 'người lạ'

  switch (chonThanhVien.value) {
    case 'B':
      thanhvien = 'Bố'
      break
    case 'M':
      thanhvien = 'Mẹ'
      break
    case 'A':
      thanhvien = 'Anh Trai'
      break
    case 'E':
      thanhvien = 'Em Gái'
      break
  }

  result.innerHTML = 'Xin chào, ' + thanhvien
}


function demChanLe() {
  var number1 = Number(inputCount1.value || 0)
  var number2 = Number(inputCount2.value || 0)
  var number3 = Number(inputCount3.value || 0)

  var soSoLe = number1 % 2 + number2 % 2 + number3 % 2;
  
  var result = document.getElementById('resultBai3')

  result.innerHTML = soSoLe + " lẻ, " + (3 - soSoLe) + " chẵn"
}


function xacDinhTamGiac() {
  var number1 = Number(inputEdge1.value || 0)
  var number2 = Number(inputEdge2.value || 0)
  var number3 = Number(inputEdge3.value || 0)

  var loaitamgiac = "Tam giác thường"

  if (number1 == number2 && number1 == number3 && number2 == number3) {
    loaitamgiac = "Tam giác đều"
  }
  else if (number1 == number2 || number2 == number3 || number3 == number1) {
    loaitamgiac = "Tam giác cân"
  } else if (number1*number1 == number2*number2 + number3*number3 || number2*number2 == number1*number1 + number3*number3 || number3*number3 == number2*number2 + number1*number1) {
    loaitamgiac = "Tam giác vuông"
  }

  var resultEl = document.getElementById('resultBai4')

  resultEl.innerHTML = loaitamgiac
}