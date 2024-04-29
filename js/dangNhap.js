$(document).ready(function() {
    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const username = $("#inputSDT_DN");
    const password = $("#inputMatKhau_DN");
    const btnDangNhap = $("#btnDangNhap");

    btnDangNhap.click(function(e) {
        e.preventDefault();
        const inputUsernameValue = username.val();
        const inputPasswordValue = password.val();

        if (inputUsernameValue === "" || inputPasswordValue === "") {
            alert("Vui lòng không để trống");
        } else {
            // Tìm kiếm người dùng trong mảng accounts
            const user = accounts.find(function(account) {
                return account.username === inputUsernameValue;
            });

            if (user && user.password === inputPasswordValue) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                alert("Đăng Nhập Thành Công");
                window.location.href = "home.html";
            } else {
                alert("Số điện thoại hoặc mật khẩu không đúng");
            }
        }
    });
});