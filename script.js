// Custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => cursor.style.transform = 'scale(0.8)');
document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

// Opening animation
window.addEventListener('load', () => {
    const openingAnimation = document.getElementById('opening-animation');
    setTimeout(() => {
        openingAnimation.style.display = 'none';
    }, 6000);
});

// Sample data for featured products
const featuredProducts = [
    { name: "Handcrafted Vase", description: "Beautifully designed ceramic vase", price: "$45", image: "images/HandCraft_VAse.png" },
    { name: "Woven Wall Hanging", description: "Intricate textile art for your walls", price: "$60", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-ai-image%2Ftranquil-white-flower-vase-realistic-landscape-with-soft-tonal-colors_290268005.htm&psig=AOvVaw10rlFTYJc-ed01YcSQwVp-&ust=1728460785841000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKDw06qo_ogDFQAAAAAdAAAAABAE" },
    { name: "Artisan Jewelry Set", description: "Unique handmade jewelry collection", price: "$80", image: "/placeholder.svg?height=250&width=250" },
    { name: "Wooden Sculpture", description: "Elegant wooden masterpiece", price: "$120", image: "/placeholder.svg?height=250&width=250" },
];

// Function to populate product slideshow
function populateProductSlideshow() {
    const container = document.getElementById('productSlideshow');
    featuredProducts.forEach((product, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">${product.price}</p>
                </div>
            </div>
        `;
        container.appendChild(slide);
    });
}

let slideIndex = 0;


// Sample data for artisans
const artisans = [
    { name: "Maya Sharma", specialty: "Textile Artist", image: "images/Maya_Sharma.jpg" },
    { name: "Rajesh Patel", specialty: "Pottery Master", image: "images/Rajesh_Patel.png" },
    { name: "Anita Desai", specialty: "Jewelry Designer", image: "images/Anita_Desai.png" },
    { name: "Vikram Singh", specialty: "Wood Carver", image: "images/Vikram_Singh.png" },
];

// Function to populate artisan grid
function populateArtisanGrid() {
    const container = document.getElementById('artisanGrid');
    artisans.forEach(artisan => {
        const artisanCard = document.createElement('div');
        artisanCard.className = 'artisan-card';
        artisanCard.innerHTML = `
            <img src="${artisan.image}" alt="${artisan.name}">
            <div class="artisan-info">
                <h3>${artisan.name}</h3>
                <p>${artisan.specialty}</p>
            </div>
        `;
        container.appendChild(artisanCard);
    });
}

// Sample data for workshops
const workshops = [
    { name: "Pottery Basics", date: "October 15, 2024", image: "images/Potter_Basics.png" },
    { name: "Textile Printing", date: "October 20, 2024", image: "images/TExtile_Printing.png" },
    { name: "Jewelry Making", date: "October 25, 2024", image: "images/Jewelry_Making.png" },
];

// Function to populate workshop grid
function populateWorkshopGrid() {
    const container = document.getElementById('workshopGrid');
    workshops.forEach(workshop => {
        const workshopCard = document.createElement('div');
        workshopCard.className = 'workshop-card';
        workshopCard.innerHTML = `
            <img src="${workshop.image}" alt="${workshop.name}">
            <div class="workshop-info">
                <h3>${workshop.name}</h3>
                <p>${workshop.date}</p>
                <a href="" class="register-btn">Register Now</a>
            </div>
        `;
        container.appendChild(workshopCard);
    });
}

// Function to handle category card clicks
function handleCategoryClick(category) {
    console.log(`Category clicked: ${category}`);
    // Here you can add logic to filter products or navigate to a category page
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    populateProductSlideshow();
    populateArtisanGrid();
    populateWorkshopGrid();
    
    // Start the slideshow
    setInterval(() => changeSlide(1), 5000);

    // Add click event listeners to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            handleCategoryClick(category);
        });
    });
});

// Form submission (prevent default for demo)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});