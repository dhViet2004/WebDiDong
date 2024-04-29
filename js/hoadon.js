document.addEventListener("DOMContentLoaded", function() {
    // Retrieve customer information from localStorage
    const userInfoJSON = localStorage.getItem('userInfo');
    const userInfo = JSON.parse(userInfoJSON);
    // Fill customer information into the invoice
    document.getElementById("name").innerText += userInfo.name;
    document.getElementById("sdt").innerText += userInfo.phoneNumber;
    document.getElementById("diaChi").innerText += userInfo.address;
    document.getElementById("tongTien").innerText+= userInfo.total;
});
// Hàm để tạo mã đơn hàng ngẫu nhiên
function generateRandomOrderId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

$(document).ready(function () {
    // Lấy ngày hiện tại
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    var formattedDate = day + '/' + month + '/' + year;

    // Hiển thị ngày mua trong thẻ có id là "date"
    $("#date").text("Ngày mua: " + formattedDate);

    // Tạo mã đơn hàng ngẫu nhiên và hiển thị trong thẻ có id là "madonHang"
    var randomOrderId = generateRandomOrderId(8); // Tạo mã đơn hàng gồm 8 ký tự
    $("#madonHang").text("Mã đơn hàng: " + randomOrderId);
});
document.addEventListener('DOMContentLoaded', function() {
    const continueShoppingBtn = document.getElementById('muaHang');

    continueShoppingBtn.addEventListener('click', function() {
        window.location.href = '../html/home.html';
    });
});