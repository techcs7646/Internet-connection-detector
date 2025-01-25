
const statusIcon = document.getElementById('status-icon');
const statusTitle = document.getElementById('status-title');
const statusText = document.getElementById('status-text');

// Function to update connection status
function updateConnectionStatus() {
  if (navigator.onLine) {
    statusIcon.className = 'icon online';
    statusIcon.innerHTML = '<i class="fas fa-wifi"></i>';
    statusTitle.textContent = 'You are Online!';
    statusText.textContent = 'Enjoy seamless browsing. Connection is stable.';
  } else {
    statusIcon.className = 'icon offline';
    statusIcon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    statusTitle.textContent = 'You are Offline!';
    statusText.textContent = 'Please check your internet connection.';
  }
}

// Initial check
updateConnectionStatus();

// Listen for changes
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);
