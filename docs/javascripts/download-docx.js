/**
 * Download the current page content as a .doc file.
 * Works by wrapping the article HTML in Word-compatible XML and triggering a Blob download.
 */
function downloadPageAsDoc() {
  var article = document.querySelector(".md-content__inner");
  if (!article) return;

  var clone = article.cloneNode(true);

  // Remove elements that shouldn't appear in the download
  var removeSelectors = [
    ".download-btn-wrapper",
    ".md-source",
    ".headerlink",
    "script",
    "style",
  ];
  removeSelectors.forEach(function (sel) {
    clone.querySelectorAll(sel).forEach(function (el) {
      el.remove();
    });
  });

  var title =
    document.querySelector("h1")?.textContent?.replace(/¶/g, "").trim() ||
    "document";

  // Build a filename from the title
  var filename =
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_|_$/g, "") + ".doc";

  var html =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'><title>" +
    title +
    "</title>" +
    "<style>" +
    "body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; line-height: 1.5; color: #333; max-width: 700px; }" +
    "h1 { font-size: 20pt; color: #004b6c; }" +
    "h2 { font-size: 16pt; color: #004b6c; }" +
    "h3 { font-size: 13pt; color: #1d647d; }" +
    "blockquote { border-left: 3px solid #1d647d; padding: 8px 12px; background: #f4f8fb; margin: 12px 0; }" +
    "table { border-collapse: collapse; width: 100%; }" +
    "th { background: #1d647d; color: #fff; padding: 6px 10px; text-align: left; }" +
    "td { border: 1px solid #ccc; padding: 6px 10px; }" +
    "ul, ol { margin: 6px 0; }" +
    "</style>" +
    "</head><body>" +
    clone.innerHTML +
    "</body></html>";

  var blob = new Blob(["\ufeff" + html], {
    type: "application/msword",
  });

  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
}
