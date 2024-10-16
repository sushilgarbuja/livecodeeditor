const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");
const jsCode = document.getElementById("js-code");
const outputFrame = document.getElementById("output");
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

function updateOutput() {
  const html = htmlCode.value;
  const css = "<style>" + cssCode.value + "</style>";
  const js = "<script>" + jsCode.value + "</script>";

  outputFrame.srcdoc = html + css + js;
}
htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);
jsCode.addEventListener("input", updateOutput);

//darkmode
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "🌙 Dark Mode";
  } else {
    darkModeToggle.textContent = "☀️ Light Mode";
  }
});
