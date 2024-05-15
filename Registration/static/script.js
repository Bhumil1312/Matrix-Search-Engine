const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.toggle-btn');
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const Icon = document.querySelector('.icon');
const Search = document.querySelector('.search');

toggleBtn.addEventListener('click', ()=> { 
    sidebar.classList.toggle('active');
});

Icon.onclick = function() {
    Search.classList.toggle('active')
}

registerLink.addEventListener('click', ()=> { 
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> { 
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> { 
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> { 
    wrapper.classList.remove('active-popup');
});

var q=document.getElementById('matrix'),
        s=window.screen,
        w=q.width=s.width,
        h=q.height=s.height,
        p=Array(256).join(1).split(''),
        c=q.getContext('2d'),
        m=Math;

        setInterval(function(){
            c.fillStyle='rgba(0,0,0,0.05)';
            c.fillRect(0,0,w,h);
            c.fillStyle='rgba(0,255,0,1)';
            p=p.map(function(v,i){
                r=m.random();
                var str = Math.round(r).toString();
                c.fillText(str, i*10,v);
                v+=10;
                var ret = v>768+r*1e4?0:v
                return ret;
            });
        },33);
