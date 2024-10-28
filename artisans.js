// Function to show selected category of artisans
function showCategory(category) {
    const artisanCards = document.querySelectorAll('.artisan-card');
    const categoryTitle = document.getElementById('categoryTitle');

    artisanCards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    categoryTitle.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} Artisans`;
}

// Function to redirect to product page
function redirectToProduct(artisanId) {
    // This function should redirect to the product page for the specific artisan
    console.log(`Redirecting to product page for artisan: ${artisanId}`);
    // Implement the actual redirection logic here
    // window.location.href = `product.html?artisan=${artisanId}`;
}

// Function to submit feedback
function submitFeedback() {
    const feedbackInput = document.getElementById('feedbackInput');
    const feedbackList = document.getElementById('feedbackList');
    
    if (feedbackInput.value.trim() !== '') {
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.innerHTML = `
            <p>${feedbackInput.value}</p>
            <small>${new Date().toLocaleString()}</small>
        `;
        feedbackList.insertBefore(feedbackItem, feedbackList.firstChild);
        feedbackInput.value = '';
    } else {
        alert('Please enter your feedback before submitting.');
    }
}

// Function to open chatbot (placeholder)
function openChatbot() {
    alert('Chatbot feature coming soon!');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Show all artisans by default
    showCategory('all');
});



// Product carousel functionality
document.querySelectorAll('.product-carousel').forEach(carousel => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});