function handleLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'admin') {
        sessionStorage.setItem('username', username);
        window.location.href = 'index2.html';
        return false;
    } else {
        alert('Invalid credentials');
        return false; 
    }
}

function handleLogout() {
    var confirmLogout = confirm("Apakah Anda yakin ingin logout?");
    if (confirmLogout) {
        sessionStorage.clear();
        window.location.href = "index.html";
        return false;
    }
    return false;
}
