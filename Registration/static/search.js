// Prevent form submission and perform search redirect
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('Mysearch').value;
    window.location.href = `search.html?q=${encodeURIComponent(query)}`;
});

// Get elements
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const Icon = document.querySelector('.icon');
const Search = document.querySelector('.search');

// Toggle sidebar active class
toggleBtn.addEventListener('click', () => { 
    sidebar.classList.toggle('active');
});

// Toggle search bar active class
Icon.onclick = function() {
    Search.classList.toggle('active');
}

// Open registration form
registerLink.addEventListener('click', () => { 
    wrapper.classList.add('active');
});

// Open login form
loginLink.addEventListener('click', () => { 
    wrapper.classList.remove('active');
});

// Show login popup
btnPopup.addEventListener('click', () => { 
    wrapper.classList.add('active-popup');
});

// Close login popup
iconClose.addEventListener('click', () => { 
    wrapper.classList.remove('active-popup');
});

// Matrix effect
var q = document.getElementById('matrix'),
    s = window.screen,
    w = q.width = s.width,
    h = q.height = s.height,
    p = Array(256).join(1).split(''),
    c = q.getContext('2d'),
    m = Math;

setInterval(function(){
    c.fillStyle = 'rgba(0,0,0,0.05)';
    c.fillRect(0, 0, w, h);
    c.fillStyle = 'rgba(0,255,0,1)';
    p = p.map(function(v, i){
        r = m.random();
        var str = Math.round(r).toString();
        c.fillText(str, i * 10, v);
        v += 10;
        var ret = v > 768 + r * 1e4 ? 0 : v;
        return ret;
    });
}, 33);