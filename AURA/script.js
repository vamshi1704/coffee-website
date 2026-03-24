/* script.js */

// ==========================================
// 1. 3D Circular Carousel Logic (Home Page)
// ==========================================
const slides = document.querySelectorAll('.slide');

if (slides.length === 5) {
    // We define the 5 positions for our 3D circle
    let positions = ['active', 'next', 'hidden-right', 'hidden-left', 'prev'];

    function rotateCarousel() {
        // Remove old classes
        slides.forEach((slide, index) => {
            slide.className = 'slide'; // Reset to base class
            slide.classList.add(positions[index]);
        });

        // Shift the array to the right (creates the circular movement)
        // What was 'prev' moves to the front, pushing everything down
        const lastItem = positions.pop();
        positions.unshift(lastItem);
    }

    // Initialize the first positions
    rotateCarousel();

    // Rotate every 4 seconds
    setInterval(rotateCarousel, 4000);

    // Add click animation and navigation to each slide
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            // Act as a link to the menu when a slide is clicked
            window.location.href = 'menu.html';
        });
    });
}

// ==========================================
// 2. Hardcoded Menu Logic (Menu Page)
// ==========================================
const menuGrid = document.getElementById('local-menu-grid');

if (menuGrid) {
    // No API! Just high-quality hardcoded items.
    const coffeeMenu = [
        {
            title: "Midnight Espresso",
            price: "$4.50",
            desc: "A pure, highly concentrated shot extracted under intense pressure.",
            img: "https://images.unsplash.com/photo-1554605963-c351fce81de4?q=80&w=600"
        },
        {
            title: "Velvet Cappuccino",
            price: "$5.00",
            desc: "Rich espresso layered with silky, perfectly textured microfoam.",
            img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600"
        },
        {
            title: "Pour Over Artisan",
            price: "$6.00",
            desc: "Hand-poured single origin beans for a clean, complex flavor.",
            img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600"
        },
        {
            title: "Nitro Cold Brew",
            price: "$5.50",
            desc: "Steeped for 24 hours and infused with nitrogen for a creamy finish.",
            img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600"
        },
        {
            title: "Signature Latte",
            price: "$5.25",
            desc: "A smooth blend of our house roast and beautifully steamed milk.",
            img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600"
        },
        {
            title: "Mocha Truffle",
            price: "$6.25",
            desc: "Espresso combined with dark Belgian chocolate and steamed milk.",
            img: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=600"
        }
    ];

    coffeeMenu.forEach(coffee => {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        
        card.innerHTML = `
            <img src="${coffee.img}" alt="${coffee.title}">
            <h3>${coffee.title}</h3>
            <p style="color: var(--accent-brown); font-weight: bold; margin: 10px 0;">${coffee.price}</p>
            <p style="color: #a99a8c; font-size: 0.9rem;">${coffee.desc}</p>
        `;

        // Make the whole card clickable and link to nowhere (or an order page)
        card.addEventListener('click', () => {
            alert(`You selected the ${coffee.title}! Added to cart.`);
        });

        menuGrid.appendChild(card);
    });
}

// ==========================================
// 3. Form Handling (Login & Signup)
// ==========================================
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Stop page from refreshing
        alert("Login Successful! Welcome back to Aura Coffee.");
        window.location.href = "menu.html"; // Redirect to menu
    });
}

const signupForm = document.getElementById('signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const pass = document.getElementById('pass').value;
        const confirmPass = document.getElementById('confirm-pass').value;
        
        if(pass !== confirmPass) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        alert("Account created successfully! Let's get you some coffee.");
        window.location.href = "login.html"; // Redirect to login
    });
}