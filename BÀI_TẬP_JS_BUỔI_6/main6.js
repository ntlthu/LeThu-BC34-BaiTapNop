// Bài tập 1:
document.getElementById("xemKetQua").onclick = function () {
  for (var a = 0, b = 0, n = 1; n < 10000; n++)
    if (((a += n), console.log(a), a > 10000)) {
      console.log(n), (b = n);
      break;
    }
  document.getElementById("showKetQua").innerHTML =
    "Số nguyên dương nhỏ nhất: " + b;
};

document.getElementById("tinhTong").onclick = function () {
  for (
    var e = document.getElementById("inputX").value,
      t = document.getElementById("inputN").value,
      n = 0,
      o = 1;
    o <= t;
    o++
  )
    n += Math.pow(e, o);
  document.getElementById("thongBaoTong").innerHTML = "Tổng: " + n;
};

document.getElementById("tinhGiaiThua").onclick = function () {
  for (
    var e = document.getElementById("inputN1").value, t = 1, n = 1;
    n <= e;
    n++
  )
    t *= n;
  document.getElementById("showGiaiThua").innerHTML = "Giai thừa: " + t;
};

document.getElementById("taoThe").onclick = function () {
  for (var e = "", t = 1; t <= 10; t++)
    e +=
      t % 2 == 0
        ? "<div class='bg-danger bg-opacity-75 text-white p-2'>Div chẵn</div>"
        : "<div class='bg-primary bg-opacity-75 text-white  p-2'>Div lẻ </div>";
  document.getElementById("showKetQuaThe").innerHTML = e;
};
