function textCopy() {
  const add = ["dhunganaannanta", "gmail.com"].join("@");
  navigator.clipboard.writeText(add);
  alert("Copied mail address to clipboard");
}
