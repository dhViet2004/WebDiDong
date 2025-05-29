
var cart = JSON.parse(localStorage.getItem("cart")) || [];
var currentUserJSON = localStorage.getItem('currentUser');

// Chuyển đổi dữ liệu từ chuỗi JSON thành đối tượng JavaScript
var currentUser = JSON.parse(currentUserJSON);

$("#mua").click(function (e) {
  if(currentUser == null){
    alert("Bạn cần đăng nhập để mua hàng")
    window.location.href = "DangNhap.html";
  }
  else{
  let dssp = JSON.parse(localStorage.getItem("dssp"));
  let masp = localStorage.getItem("masp");

  let temp = dssp.find(sp => sp.masp == masp);

  // Lấy thông tin sản phẩm từ các phần tử HTML
  let name = $("#tensp1").text(); // Lấy tên sản phẩm
  let giaHienTai = $("#giaHienTai").text(); // Lấy giá sản phẩm
  let mausac = $("#mauSac").text(); // Lấy màu sắc sản phẩm
  let hinhanh = $("#hinhanh6").attr("src"); // Lấy đường dẫn của hình ảnh

  // Tạo đối tượng sản phẩm
  let product = {
    maKH:currentUser.id,
    masp: temp.masp,
    name: name,
    price: giaHienTai,
    color: mausac,
    img: hinhanh,
    quantity: 1}
  };
  // Lấy giỏ hàng từ localStorage

  var existingIndex = findProductIndex(product);

  if (existingIndex !== -1) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
    cart[existingIndex].quantity += 1;
  } else {
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
    cart.push(product);
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Thông báo khi sản phẩm được thêm vào giỏ hàng
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
  // Thông báo khi sản phẩm được thêm vào giỏ hàng


  // Chuyển hướng đến trang tiếp theo
  window.location.href = "giohang.html";
});
$("#addgiohang").click(function (e) {
  let dssp = JSON.parse(localStorage.getItem("dssp"));
  let masp = localStorage.getItem("masp");

  let temp = dssp.find(sp => sp.masp == masp);
  // Lấy thông tin sản phẩm từ các phần tử HTML
  let name = $("#tensp1").text(); // Lấy tên sản phẩm
  let giaHienTai = $("#giaHienTai").text(); // Lấy giá sản phẩm
  let mausac = $("#mauSac").text(); // Lấy màu sắc sản phẩm
  let hinhanh = $("#hinhanh6").attr("src"); // Lấy đường dẫn của hình ảnh

  // Tạo đối tượng sản phẩm
  let product = {
    maKH:currentUser.id,
    masp: temp.masp,
    name: name,
    price: giaHienTai,
    color: mausac,
    img: hinhanh,
    quantity: 1
  };
  // Lấy giỏ hàng từ localStorage

  var existingIndex = findProductIndex(product);

  if (existingIndex !== -1) {
    // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
    cart[existingIndex].quantity += 1;
  } else {
    // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm mới vào giỏ hàng
    cart.push(product);
  }

  // Lưu giỏ hàng vào localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Thông báo khi sản phẩm được thêm vào giỏ hàng
  alert("Sản phẩm đã được thêm vào giỏ hàng!");
  // Thông báo khi sản phẩm được thêm vào giỏ hàng


  // Chuyển hướng đến trang tiếp theo

});
function findProductIndex(product) {
  // Tìm kiếm sản phẩm trong giỏ hàng dựa trên masp và maKH
  for (var i = 0; i < cart.length; i++) {
      if (cart[i].masp === product.masp && cart[i].maKH === product.maKH) {
          return i; // Trả về chỉ số của sản phẩm trong giỏ hàng nếu tìm thấy
      }
  }
  return -1; // Trả về -1 nếu không tìm thấy sản phẩm trong giỏ hàng
}
document.addEventListener('DOMContentLoaded', function() {
  const continueShoppingBtn = document.getElementById('gohome1');

  continueShoppingBtn.addEventListener('click', function() {
      window.location.href = '../html/home.html';
  });
});