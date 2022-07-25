function inSoNguyenTo() {
  for (
    var e = document.getElementById("inputNn").value, t = "", n = 1;
    n <= e;
    n++
  ) {
    checkPrime(n) && (t += " " + n);
  }
  document.getElementById("showSoNguyenTo").innerHTML = t;
}
function checkPrime(e) {
  if (e < 2) return !1;
  for (var t = 2; t <= Math.sqrt(e); t++) if (e % t == 0) return !1;
  return !0;
}
document.addEventListener(
  "contextmenu",
  function (e) {
    e.preventDefault();
  },
  !1
),
  (document.onkeydown = function (e) {
    return (
      123 != (e = e || window.event).keyCode &&
      (!e.ctrlKey || !e.shiftKey || 73 != e.keyCode) &&
      void 0
    );
  });
