function convertHTML(str) {
  // &colon;&rpar;
  document.write(`<h1 class="convert">${str}</h1>`);
  let text = document.getElementsByClassName("convert")[0].innerHTML;
  let html = text.replace(/"/gi, "&quot;").replace(/'/gi, "&apos;");
  document.getElementsByClassName("convert")[0].remove();

  console.log(html);
  return html;
}
console.clear();
convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML('Stuff in "quotation marks"');
