document.getElementById("inSoNguyenTo").onclick = function () {
  var e = document.getElementById("inputNn").value,
    t = "";
  for (n = 1; n <= e; n++) {
    if (checkPrime(n)) t += " " + n;
  }
  document.getElementById("showSoNguyenTo").innerHTML = t;
};
function checkPrime(e) {
  if (e < 2) return false;
  for (var t = 2; t <= Math.sqrt(e); t++) if (e % t == 0) return false;
  return true;
}
