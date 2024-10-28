document.addEventListener('DOMContentLoaded', () => {
    const authPopup = document.getElementById('authPopup');
    const accountDetails = document.getElementById('accountDetails');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const authTabs = document.querySelectorAll('.auth-tab');
    const backButton = document.getElementById('backButton');
    const userInfo = document.getElementById('userInfo');
    const verificationStatus = document.getElementById('verificationStatus');
    const artisanProductForm = document.getElementById('artisanProductForm');
    const addProductForm = document.getElementById('addProductForm');
    const productList = document.getElementById('productList');

    let currentUser = null;

    // Show auth popup on page load
    authPopup.classList.add('active');

    // Handle auth tab switching
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.tab === 'login') {
                loginForm.style.display = 'flex';
                signupForm.style.display = 'none';
            } else {
                loginForm.style.display = 'none';
                signupForm.style.display = 'flex';
            }
        });
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;
        // Simulate login (replace with actual authentication logic)
        if (email && password) {
            currentUser = { email, name: 'John Doe', type: 'artisan', verified: false };
            showAccountDetails();
        }
    });

    // Handle signup
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = signupForm.querySelector('input[type="text"]').value;
        const email = signupForm.querySelector('input[type="email"]').value;
        const password = signupForm.querySelector('input[type="password"]').value;
        const userType = signupForm.querySelector('#userType').value;
        // Simulate signup (replace with actual registration logic)
        if (name && email && password && userType) {
            currentUser = { email, name, type: userType, verified: false };
            showAccountDetails();
        }
    });

    // Handle back button
    backButton.addEventListener('click', () => {
        // Redirect to the home page
        window.location.href = 'index.html'; // Replace 'index.html' with your actual home page URL
    });

    // Show account details
    function showAccountDetails() {
        authPopup.classList.remove('active');
        accountDetails.style.display = 'block';
        userInfo.innerHTML = `
            <h3>Welcome, ${currentUser.name}</h3>
            <p>Email: ${currentUser.email}</p>
            <p>Account Type: ${currentUser.type}</p>
        `;
        verificationStatus.innerHTML = currentUser.verified
            ? '<span class="verified">Verified</span>'
            : '<span class="unverified">Unverified</span><button class="verify-button">Verify Account</button>';
        
        if (currentUser.type === 'artisan') {
            artisanProductForm.style.display = 'block';
        } else {
            artisanProductForm.style.display = 'none';
        }
    }

    // Handle product addition
    addProductForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = addProductForm.querySelector('input[type="text"]').value;
        const price = addProductForm.querySelector('input[type="number"]').value;
        const imageUrl = addProductForm.querySelector('input[type="text"]:last-of-type').value;
        addProduct({ name, price, imageUrl });
        addProductForm.reset();
    });

    // Add product to list
    function addProduct(product) {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item', 'animate-fadeInUp');
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>$${product.price}</p>
            <button class="delete-product">X</button>
        `;
        productList.appendChild(productItem);

        // Handle product deletion
        productItem.querySelector('.delete-product').addEventListener('click', () => {
            productItem.remove();
        });
    }

    // Handle account verification
    verificationStatus.addEventListener('click', (e) => {
        if (e.target.classList.contains('verify-button')) {
            // Simulate verification process
            setTimeout(() => {
                currentUser.verified = true;
                verificationStatus.innerHTML = '<span class="verified">Verified</span>';
            }, 1000);
        }
    });

    // Handle new product form submission
    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const productName = document.getElementById('productName').value;
            const productPrice = document.getElementById('productPrice').value;
            const productImage = document.getElementById('productImage').value;
            const productDescription = document.getElementById('productDescription').value;

            // Here you would typically send this data to your backend
            console.log('New product:', { productName, productPrice, productImage, productDescription });

            // Clear the form
            addProductForm.reset();

            // Show a success message
            showMessage('Product added successfully!', 'success');
        });
    }

    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.className = type === 'success' ? 'success-message' : 'error-message';
        document.querySelector('.artisan-product-form').appendChild(messageDiv);
        setTimeout(() => messageDiv.remove(), 3000);
    }
});