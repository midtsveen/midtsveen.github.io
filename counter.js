// Get the page view count from local storage (or initialize to 0)
let pageViewCount = parseInt(localStorage.getItem('pageViewCount')) || 0;

// Increment the page view count and update the display
pageViewCount++;
localStorage.setItem('pageViewCount', pageViewCount);

// Display the page view count
const pageViewCounterElement = document.getElementById('pageViewCounter');
pageViewCounterElement.textContent = `Page views: ${pageViewCount}`;