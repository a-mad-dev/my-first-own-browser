function loadPage() {
  let url = document.getElementById("url").value;

  if (!url.startsWith("http")) {
    url = "https://" + url;
  }

  document.getElementById("view").src = url;
}