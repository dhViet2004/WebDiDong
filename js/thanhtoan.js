var cart = JSON.parse(localStorage.getItem("selectedProducts")) || [];
var currentUserJSON = localStorage.getItem('currentUser');

// Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
var currentUser = JSON.parse(currentUserJSON);
function calculateTotal() {
    var total = 0;

    // Lặp qua tất cả các sản phẩm trong giỏ hàng
    cart.forEach(function (item) {
        var quantity = item.quantity; // Số lượng của sản phẩm
        var price = parseFloat(item.price.replace(/\D/g, '')); // Giá của sản phẩm (chuyển đổi từ chuỗi sang số)

        // Tính tổng tiền của sản phẩm và cộng vào tổng tiền
        total += quantity * price;
    });
    var formattedTotal = total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    $("#total").text(formattedTotal);

    // Hiển thị tổng tiền

}
$(document).ready(function () {
    showCart();
    calculateTotal();
    $("#checkout-btn").click(function (e) { 
        e.preventDefault();
        alert("thanh toán thàng công");
        window.location.href = "hoaDon.html";
    });

});
function showCart() {
    var cartList = $("#dsthanhtoan");

    cartList.empty();
    if (cart.length === 0) {

        cartList.append("<tr><td colspan='6'><img src='../images/giohang/empty-cart.jpg' alt=''></td></tr>");

        $("#gohome").html(" <tr><td class='d-grid gap-2'><button type='button' class='btn btn-danger btn-block'id='gohome1'>Quay lại Mua Hàng</button></td></tr>")
    } else {
        cart.forEach(function (item, index) {
            if (item.maKH === currentUser.id) {
            var imgColumn = "<td><a href='#' class='tensanpham' onclick='setMasp(" + item.masp + ")'><img src='" + item.img + "' alt=''></a></td>";
            var namePriceRow = "<td><a href='#' class='tensanpham' onclick='setMasp(" + item.masp + ")'>" + item.name + "</a><br><p>Màu sắc: " + item.color + "</p><p>Giá: <span style='color: red;'>" + item.price + "</span></p></td>";
            var quantityInputColumn = "<td><p >Số Lượng: <span style='color: red;'>" + item.quantity + "</span></p></td>";
            var li = "<tr>" + imgColumn + namePriceRow + quantityInputColumn + "</tr>";

            cartList.append(li);
            }
        });
    }

}
$(document).ready(function () {
    showCart();
    calculateTotal();
    $("#checkout-btn").click(function (e) { 
        e.preventDefault();

        // Lấy thông tin từ các trường input
        var name = $("#name").val();
        var phoneNumber = $("#soDienThoai").val();
        var city = $("#city").val();
        var district = $("#district").val();
        var ward = $("#ward").val();
        var address = $("#diaChi").val();
        var note = $("#ghiChu").val();
        var tongtien = $("#total").text(); // Lấy giá trị từ thẻ <span> có id là "total"
        console.log(tongtien);
        // Tạo object chứa thông tin người dùng
        var customer = {
            name: name,
            phoneNumber: phoneNumber,
            city: city,
            district: district,
            ward: ward,
            address: address,
            note: note,
            total: tongtien
        };

        // Lưu object vào localStorage
        localStorage.setItem("userInfo", JSON.stringify(customer));
        
        // Chuyển hướng đến trang chi tiết hóa đơn sau khi lưu thông tin
        window.location.href = "hoaDon.html";
    });
});
