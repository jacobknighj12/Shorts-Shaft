// content.js

// Function to hide the targeted elements on YouTube
function hideYtdRichShelfRenderer() {
    const elements = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    elements.forEach(element => {
        element.style.display = 'none';
    });
}

// Function to remove the div with aria-label="Reels" on Facebook
function removeFacebookReels() {
    const reelsDiv = document.querySelector('div[aria-label="Reels"]');
    if (reelsDiv) {
        const parentDiv = reelsDiv.closest('div').closest('div').closest('div');
        if (parentDiv) {
            parentDiv.style.display = 'none';
        }
    }
}

// Function to remove yt-formatted-string elements containing the text "Shorts"
function removeShortsTextElements() {
    const textElements = document.querySelectorAll('yt-formatted-string');
    textElements.forEach(element => {
        if (element.innerText.trim() === 'Shorts') {
            element.remove();
        }
    });
}

// Execute the hiding and removal functions when the page finishes loading
window.addEventListener('load', () => {
    hideYtdRichShelfRenderer();
    removeShortsTextElements();

    // Check if on Facebook and remove Reels div and hide parent
    if (window.location.hostname.includes('facebook.com')) {
        removeFacebookReels();
    }
});
