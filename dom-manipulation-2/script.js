window.onload = function(){ // "onclick" cannot be set to null; wait to load page before running js
    const btn = document.querySelector('#btn');
    btn.onclick = () => alert("Hello World (js)");

    const btnEvent = document.querySelector('#btnEvent');
    btnEvent.addEventListener('click', () => {
        alert("Hello World (eventListener)");
    });

    btn.addEventListener('click', function (e) {
        e.target.style.background = 'blue';
      });
};