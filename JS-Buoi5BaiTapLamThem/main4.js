function calcTax() {
  var name = document.getElementById("inputName2").value;
  var salary =
    Number(document.getElementById("inputSalary").value) -
    4000000 -
    1600000 * Number(document.getElementById("inputUser").value);
  var taxMoney = 0;

  if (salary > 0 && salary <= 60000000) {
    taxMoney = 0.05 * salary;
  } else if (salary > 60000000 && salary <= 120000000) {
    taxMoney = 0.1 * salary;
  } else if (salary > 120000000 && salary <= 210000000) {
    taxMoney = 0.15 * salary;
  } else if (salary > 210000000 && salary <= 384000000) {
    taxMoney = 0.2 * salary;
  } else if (salary > 384000000 && salary <= 624000000) {
    taxMoney = 0.25 * salary;
  } else if (salary > 624000000 && salary <= 960000000) {
    taxMoney = 0.3 * salary;
  } else if (salary > 960000000) {
    taxMoney = 0.35 * salary;
  } else alert("Tiền thu nhập không hợp lệ");

  taxMoneyFormated = new Intl.NumberFormat("vn-VN").format(taxMoney);

  document.getElementById("txtTax").innerHTML =
    "Họ tên: " +
    name +
    "; Tiền thuế thu nhập cá nhân: " +
    taxMoneyFormated +
    " VND";
}

document.getElementById("btnTax").onclick = calcTax;

// Tính tiền cáp:
function disableInput() {
  var e = document.getElementById("selCustomer").value;
  document.getElementById("inputConnect").style.display =
    "company" == e ? "block" : "none";
}
function tinhTienCap() {
  var e = document.getElementById("selCustomer").value,
    n = document.getElementById("inputID").value,
    t = document.getElementById("inputChanel").value,
    u = document.getElementById("inputConnect").value,
    c = 0;
  "company" == e
    ? (c = tinhTong(15, 75, 50, t, u, 5))
    : "user" == e
    ? (c = tinhTong(4.5, 20.5, 7.5, t, 0, 0))
    : alert("Hãy chọn loại khách hàng"),
    (document.getElementById("txtNet").innerHTML =
      "Mã khách hàng: " +
      n +
      "; Tiền cáp: " +
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(c));
}
function tinhTong(e, n, t, u, c, l) {
  var m = e + n + t * u;
  return c > 10 && (m += (c - 10) * l), m;
}
document.getElementById("btnNet").onclick = tinhTienCap;
