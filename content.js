// content.js

// Function to hide the targeted elements on YouTube
function hideYtdRichShelfRenderer() {
    // weird bug where the foreach wasn't stopping display of the shorts, changed out to elements.remove, foreach may be redundant
    const elements = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    elements.forEach(element => {
        element.style.display = 'none';
        console.log('removed shorts');
    });
    if (elements) {
        console.log('removed shorts');
        elements.remove();
    }
}
// Function to hide and remove elements inside <a> tags with aria-label="reel"
function hideReelElements() {
    const reelLinks = document.querySelectorAll('a[aria-label="reel"]');
    reelLinks.forEach(link => {
        link.style.display = 'none';
        link.innerHTML = '';
    });
}
// Function to remove the div with aria-label="Reels" on Facebook
function removeFacebookReels() {
    const reelsDiv = document.querySelector('div[aria-label="Reels"]');
    if (reelsDiv) {
        console.log('removed Reel');
        reelsDiv.style.display = 'none';
        reelsDiv.remove();
    }
}
function removeFacebookReels2() {
    const reelsDiv = document.querySelector('div[aria-label="Reels"]');
    if (reelsDiv) {
        const parentDiv = reelsDiv.closest('div').closest('div').closest('div');
        if (parentDiv) {
            console.log('removed Reel');
            parentDiv.style.display = 'none';
            parentDiv.remove();
        }
    }
}

// Function to remove yt-formatted-string elements containing the text "Shorts"
function removeShortsTextElements() {
    const textElements = document.querySelectorAll('yt-formatted-string');
    textElements.forEach(element => {
        if (element.innerText.trim() === 'Shorts') {
            element.style.display = 'none';
            element.remove();
            console.log('removed shorts');
        }
    });
}

// Mutation observer to detect changes in the DOM
const observer = new MutationObserver(mutationsList => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if on Facebook and remove Reels div
            hideReelElements();
            removeFacebookReels();
            removeFacebookReels2();
            // hideYtdRichShelfRenderer();

        }
    }
});

// Execute the hiding and removal functions when the page finishes loading
window.addEventListener('load', () => {
    hideYtdRichShelfRenderer();
    removeShortsTextElements();

    // Check if on Facebook and remove Reels div immediately
    if (window.location.hostname.includes('facebook.com')) {
        removeFacebookReels();
        removeFacebookReels2();
    }

    // Observe changes in the DOM
    observer.observe(document.body, { childList: true, subtree: true });
});
