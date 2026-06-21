const view = document.getElementById("view");
const urlInput = document.getElementById("url");
const titleSpan = document.getElementById("title");

function loadPage() {
  let url = document.getElementById("url").value;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  view.src = url;
}

function goBack() {
  if (view.canGoBack()) view.goBack();
}

function goForward() {
  if (view.canGoForward()) view.goForward();
}

function reload() {
  view.reload();
}

view.addEventListener("did-start-loading", () => {
  titleSpan.innerText = "Loading...";
});

view.addEventListener("did-finish-load", () => {
  urlInput.value = view.getURL();
  titleSpan.innerText = view.getTitle();
});

urlInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    loadPage();
  }
});