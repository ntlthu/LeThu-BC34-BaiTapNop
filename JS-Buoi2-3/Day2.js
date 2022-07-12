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
// INPUT: Hardcode chiều dài = 40, chiều rộng =30
// PROCESS:
// B1. Đặt biến chieuDai, chieuRong
// B2. Đặt biến công thức tính của dienTich = chieuDai * chieuRong
// Đặt biến công thức tính của chuVi =  (chieuDai + chieuRong) * 2
// OUTPUT: dienTich = chieuDai * chieuRong; chuVi = (chieuDai + chieuRong) * 2

console.log("Bài 4: Tính diện tích, chu vi hình chữ nhật có:");
var chieuDai = 40;
var chieuRong = 30;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuDai + chieuRong) * 2;
console.log("Chiều Dài = ", chieuDai);
console.log("Chiều Rộng = ", chieuRong);
console.log("Diện Tích = ", dienTich);
console.log("Chu vi = ", chuVi);

// Bài 5: Tính tổng 2 ký số
// INPUT: giả sử 2 ký số được nhập là 42
// PROCESS: B1. Tách số hàng chục theo công thức Math.floor(kySo / 10)
// B2. Tách số hàng đơn vị theo công thức kySo % 10
// B3. Gán biến sum = Number1 + Number2 để tính tổng 2 ký số
// OUTPUT: 4 + 2 = 6
console.log("Bài 5: Tính tổng 2 ký số");
var kySo = 42;
var Number1 = kySo % 10;
var Number2 = Math.floor(kySo / 10);
var sum = Number1 + Number2;
console.log("Số được nhập là: 42");
console.log("Tổng 2 ký số được nhập =", sum);
