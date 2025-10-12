let markdown = "Hello World";
let style = "";

function extractId(markdown) {
  const match = markdown.match(/\{id=(\d+)\}/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
}

function translate(markdown) {
  return markdown.split('\n').map(line => {
    // 檢查是否有 {id=...}
    const idMatch = line.match(/\{id=(\d+)\}/);
    let style = "";
    if (idMatch) {
      style = `style-${idMatch[1]}`;
      // 移除 {id=...}
      line = line.replace(/\{id=\d+\}/, "").trim();
    }
    // 處理標題
    if (/^### /.test(line)) {
      return `<h3 class="${style}">${line.replace(/^### /, '').trim()}</h3>`;
    } else if (/^## /.test(line)) {
      return `<h2 class="${style}">${line.replace(/^## /, '').trim()}</h2>`;
    } else if (/^# /.test(line)) {
      return `<h1 class="${style}">${line.replace(/^# /, '').trim()}</h1>`;
    } else if (/^\*\*\*/.test(line)) {
      return `<hr class="${style}">`;
    }
    return line;
  }).join('\n');
}

console.log(translate(markdown));