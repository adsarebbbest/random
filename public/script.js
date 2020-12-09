// Refresh function
function refresh() {
  location.reload();
}

// Event listener
document.getElementById('refresher').addEventListener('click', function() {
  document.getElementById('refresher').blur();
  refresh();
});;