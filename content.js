// content.js

// Function to hide the targeted elements on YouTube
function hideYtdRichShelfRenderer() {
    const elements = document.querySelectorAll('ytd-rich-shelf-renderer[is-shorts]');
    elements.forEach(element => {
        element.style.display = 'none';
        console.log('removed shorts');
    });
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

// Function to execute when the page finishes loading
function onPageLoad() {
    hideYtdRichShelfRenderer();
    removeShortsTextElements();

    // Check if on Facebook and remove Reels div after a short delay
    if (window.location.hostname.includes('facebook.com')) {
        setTimeout(() => {
            removeFacebookReels();
            removeFacebookReels2();
        }, 2000); // Adjust the delay time as needed
    }
}

// Execute the initial actions when the content script is injected
onPageLoad();

// Observe changes in the DOM
const observer = new MutationObserver(onPageLoad);
observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === 'pageLoad') {
        onPageLoad();
    }
});
