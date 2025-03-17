document.addEventListener('DOMContentLoaded', function() {
    // Password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    const signInBtn = document.querySelector('.sign-in-btn');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? 'Hide' : 'Show';
    });
    
    // Close button functionality
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        // Redirect to index.html when close button is clicked
        window.location.href = 'index.html';
    });
    
    // Check if form is filled to activate button
    function checkFormStatus() {
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            signInBtn.classList.add('active');
        } else {
            signInBtn.classList.remove('active');
        }
    }
    
    // Add input event listeners to both fields
    usernameInput.addEventListener('input', checkFormStatus);
    passwordInput.addEventListener('input', checkFormStatus);
    
    // Form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        // Validation
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
        
        // Show loading animation
        signInBtn.classList.add('loading-active');
        
        // Simulate loading time (2 seconds)
        setTimeout(function() {
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { username, password });
            
            // Redirect to index.html after successful login
            window.location.href = 'index.html';
        }, 2000);
    });
    
    // Input field focus/blur effects
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Google button click event
    const googleBtn = document.querySelector('.google-btn');
    googleBtn.addEventListener('click', function() {
        // Add loading animation to Google button
        googleBtn.innerHTML = '<div class="spinner" style="margin: 0 auto;"></div>';
        
        // Simulate loading time (1.5 seconds)
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 1500);
    });
});
