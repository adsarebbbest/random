function refresh() {
  location.reload();
}

document.getElementById('refresher').addEventListener('click', function() {
  document.getElementById('refresher').blur();
  refresh();
});