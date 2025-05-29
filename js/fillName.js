$(document).ready(function () {
    const currentUserJSON = localStorage.getItem('currentUser');
    // Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
    const currentUser = JSON.parse(currentUserJSON);
    if (currentUser !== null) {

        $("#htmlDangNhap").html(currentUser.fullName);
        $("#user").attr('href', 'ThongTinCaNhan.html');

    } else {
        
        $("#htmlDangNhap").html("Đăng nhập");
        $("#user").attr('href', 'DangNhap.html');
    }
});
