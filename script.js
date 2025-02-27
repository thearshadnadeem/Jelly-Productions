const darkModeBtn = document.getElementById("dark-mode-toggle");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark Mode CSS
const style = document.createElement("style");
style.innerHTML = `
    .dark-mode {
        background: #333;
        color: white;
    }
    .dark-mode #contact {
        background: #555;
    }
    .dark-mode #contact-form input, 
    .dark-mode #contact-form textarea {
        background: #666;
        color: white;
        border: 1px solid white;
    }
    .dark-mode #contact-form button {
        background: white;
        color: black;
    }
    .dark-mode #dark-mode-toggle {
        background: white;
        color: black;
    }
`;
document.head.appendChild(style);
