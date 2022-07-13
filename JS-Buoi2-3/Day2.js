// Bài 1:tính tiền lương nhân viên
document.getElementById("btnTinhLuong").onclick = function () {
  //input:
  var luongMotNgay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value;
  // process:
  var tongLuong = luongMotNgay * soNgayLam;
  //   Format VND
  var currencyFormat = new Intl.NumberFormat("vn-VN");
  var tongLuongVND = currencyFormat.format(tongLuong) + " VND";
  //Hiển thị kết quả ra màn hình
  var showLuong = "";
  showLuong += "<p>Tổng lương là: </p>";
  showLuong += "<p>" + tongLuongVND + "</p>";
  document.getElementById("thongBaoLuong").innerHTML = showLuong;
};

//Bài 2: Tính giá trị trung bình
document.getElementById("giaTriTrungBinh").onclick = function () {
  // input:
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var num3 = document.getElementById("number3").value;
  var num4 = document.getElementById("number4").value;
  var num5 = document.getElementById("number5").value;
  // process:
  var averageValue =
    (Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /
    5;
  // Output ra screen:
  var showAverage = "";
  showAverage += "<p>Giá trị trung bình là: </p>";
  showAverage += "<p>" + averageValue + "</p>";
  document.getElementById("showAverage").innerHTML = showAverage;
};

//Bài 3: Quy đổi tiền
document.getElementById("moneyExchange").onclick = function () {
  var USDrate = 23500;
  var totalUSD = document.getElementById("amountOfMoney").value;
  var exchangeToVND = totalUSD * USDrate;
  var currencyFormat = new Intl.NumberFormat("vn-VN");
  var totalMoneyVND = currencyFormat.format(exchangeToVND) + " VND";

  var showMoney = "";
  showMoney += "<p>Số tiền quy đổi được là : </p>";
  showMoney += "<p>" + totalMoneyVND + "</p>";
  document.getElementById("totalMoney").innerHTML = showMoney;
};

//Bài 4: Tính diện tích, chu vi hình chữ nhật
//Tính diện tích:
document.getElementById("tinhDienTich").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var dienTich = Number(chieuDai) * Number(chieuRong);
  //show diện tích ra màn hình:
  var showDienTich = "";
  showDienTich = "Diện tích = " + dienTich;
  document.getElementById("dienTich").innerHTML = showDienTich;
};
//Tính chu vi
document.getElementById("tinhChuVi").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;
  var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
  var showChuVi = "";
  showChuVi = "Chu vi = " + chuVi;
  document.getElementById("chuVi").innerHTML = showChuVi;
};

// Bài 5: Tính tổng 2 ký số
document.getElementById("tong2KySo").onclick = function () {
  var number = document.getElementById("number").value;
  var kySo1 = number % 10;
  var kySo2 = Math.floor(number / 10);
  var sumNumber = kySo1 + kySo2;
  var showSumNumber = "";
  showSumNumber = "Tổng 2 ký số của số được nhập = " + sumNumber;
  document.getElementById("thongBaoKetQua").innerHTML = showSumNumber;
};
