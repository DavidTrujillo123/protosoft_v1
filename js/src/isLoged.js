window.onload = function () {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    console.log(isAuthenticated + "aaaa");
    if (isAuthenticated == 'false' || isAuthenticated == null) {
        
        let dom = document.body;
        // console.log(dom);
        dom.style.display = 'none';
        window.location.href = '../login.html';
    }
};