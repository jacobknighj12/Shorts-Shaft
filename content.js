// content.js

// Function to hide the targeted elements
function hideYtdRichShelfRenderer() {
    const elements = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    elements.forEach(element => {
        element.style.display = 'none';
    });
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
});
