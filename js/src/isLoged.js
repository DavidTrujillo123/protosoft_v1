window.onload = function () {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated === 'false' || null) {
        
        let dom = document.body;
        console.log(dom);
        dom.style.display = 'none';
        window.location.href = '../login.html';
    }
};