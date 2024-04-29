$(document).ready(function () {
    const currentUserJSON = localStorage.getItem('currentUser');

    // Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
    const currentUser = JSON.parse(currentUserJSON);

    // Lấy dữ liệu từ localStorage
    const username = localStorage.getItem('username');

    if (username !== null) {
        const user = JSON.parse(localStorage.getItem(username));
        if (user !== null) {
            $("#htmlDangNhap").html(user.fullName);
            $("#user").attr('href', 'ThongTinCaNhan.html');
        }
    } else {
        $("#htmlDangNhap").html("Đăng nhập");
        $("#user").attr('href', 'DangNhap.html');
    }

    if (currentUser) {
        // Hiển thị thông tin cá nhân trên HTML
        $('#hoTen').text(currentUser.fullName);
        $('#soDT').text(currentUser.username);
        $('#email').text(currentUser.email);

        document.getElementById("dangXuat").addEventListener("click", function (event) {
            event.preventDefault();
            $('#confirmModal').modal('show');
        });

        document.getElementById("confirmButton").addEventListener("click", function (event) {
            localStorage.removeItem('currentUser');
            window.location.href = "DangNhap.html";
        });
    } else {
        // Nếu không có dữ liệu trong localStorage, bạn có thể hiển thị một thông báo hoặc thực hiện các hành động khác tùy thuộc vào yêu cầu của bạn.
        alert('Không có thông tin người dùng trong localStorage');
    }
});

