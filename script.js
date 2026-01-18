let currentIssue = 2;

function setIssue(issueNum) {
  currentIssue = issueNum;
  renderHome();
}

function openArticle(id) {
  window.location.href = `article.html?id=${id}`;
}
