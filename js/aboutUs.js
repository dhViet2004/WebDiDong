$(document).ready(function() {
    const username = localStorage.getItem('username');
    if(username !== null) {
        const user = JSON.parse(localStorage.getItem(username));
        if(user !== null) {
            $("#htmlDangNhap").html(user.fullName);
            $("#user").attr('href', 'ThongTinCaNhan.html');
        }
    } else {
        $("#htmlDangNhap").html("Đăng nhập");
        $("#user").attr('href', 'DangNhap.html');
    }
});