$(document).ready(function () {
    let customerId = 1;
    // Tự đặt focus vào trường nhập liệu họ tên khi trang được tải
    $("#inputHoTen").focus();

    // Hàm kiểm tra hợp lệ cho trường họ tên
    function validateHoten() {
        let inputHoTen = $("#inputHoTen").val().trim();
        let regexHoTen = /^([A-Z][a-z]*\s)+([A-Z][a-z]*)$/;

        if (inputHoTen == "") {
            $("#erHoTen").html("Vui lòng nhập đủ họ tên");
            return false;
        } else if (!regexHoTen.test(inputHoTen)) {
            $("#erHoTen").html("Vui lòng nhập họ tên hợp lệ");
            return false;
        } else {
            $("#erHoTen").html("");
            return true;
        }
    }

    // Hàm kiểm tra hợp lệ cho trường số điện thoại
    function validateSDT() {
        let sdt = $("#inputSDT").val();
        let regexSDT = /^0[3-9][0-9]{8}$/;

        if (!regexSDT.test(sdt)) {
            $("#erSDT").html("Vui lòng nhập số điện thoại hợp lệ");
            return false;
        } else {
            $("#erSDT").html("");
            return true;
        }
    }

    // Hàm kiểm tra hợp lệ cho trường email
    function validateEmail() {
        let email = $("#inputEmail").val();
        let regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email !== "") {
            if (!regexEmail.test(email)) {
                $("#erEmail").html("Vui lòng nhập email hợp lệ");
                return false;
            } else {
                $("#erEmail").html("");
                return true;
            }
        } else {
            $("#erEmail").html("");
            return true;
        }
    }

    // Hàm kiểm tra hợp lệ cho trường mật khẩu
    function validatePW() {
        let pw = $("#inputMatKhau").val();
        let regexMatKhau = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[_!@#$%^&*])[A-Za-z\d_!@#$%^&*]{6,}$/;


        if (!regexMatKhau.test(pw)) {
            $("#erPW").html("Vui lòng nhập mật khẩu hợp lệ");
            return false;
        } else {
            $("#erPW").html("");
            return true;
        }
    }

    // Hàm kiểm tra trùng khớp mật khẩu
    function cfmPW() {
        let pw = $("#inputMatKhau").val();
        let pw2 = $("#inputMatKhau2").val();

        if (pw !== pw2) {
            $("#erPW2").html("Mật khẩu không khớp");
            return false;
        } else {
            $("#erPW2").html("");
            return true;
        }
    }

    // Hàm kiểm tra trạng thái của checkbox và mở/khóa nút đăng ký
    function checkCheckBox() {
        if ($("#cbxBanTin").is(":checked") && $("#cbxDongY").is(":checked")) {
            return true;
        } else {
            return false;
        }
    }

    // Hàm kiểm tra tất cả các trường hợp lệ và mở/khóa nút đăng ký
    function checkAllValidate() {
        if (validateHoten() && validateSDT() && validateEmail() && validatePW() && cfmPW() && checkCheckBox()) {
            $("#btnDangKy").prop('disabled', false);
        } else {
            $("#btnDangKy").prop('disabled', true);
        }
    }
    // Gọi các hàm kiểm tra khi một trường thay đổi giá trị
    $("#inputHoTen").blur(validateHoten);
    $("#inputSDT").blur(validateSDT);
    $("#inputEmail").blur(validateEmail);
    $("#inputMatKhau").blur(validatePW);
    $("#inputMatKhau2").blur(cfmPW);

    // Gọi hàm kiểm tra tất cả các trường hợp lệ khi một trường thay đổi giá trị
    $("#inputHoTen, #inputSDT, #inputEmail, #inputMatKhau, #inputMatKhau2, #cbxBanTin, #cbxDongY").on('input', checkAllValidate);


    // Xử lý sự kiện khi nút đăng ký được nhấn

});
var accounts = JSON.parse(localStorage.getItem("accounts")) || [];
var id = parseInt(localStorage.getItem("id")) || 1;

function isPhoneNumberExists(phoneNumber) {
    return accounts.some(function(account) {
        return account.username === phoneNumber;
    });
}

$("#btnDangKy").click(function (e) {
    e.preventDefault();

    var inputSDTValue = $("#inputSDT").val();
    var inputMatKhauValue = $("#inputMatKhau").val();
    var inputHoTenValue = $("#inputHoTen").val();
    var inputEmailValue = $("#inputEmail").val();
    var inputMatKhau2Value = $("#inputMatKhau2").val();
    
    if (inputSDTValue === "" || inputMatKhauValue === "" || inputHoTenValue === "" || inputEmailValue === "" || inputMatKhau2Value === "") {
        alert("Vui lòng điền đầy đủ thông tin");
    } 
    else if(isPhoneNumberExists(inputSDTValue)){
        alert("Số điện thoại đã tồn tại. Vui lòng sử dụng số điện thoại khác.");
    }
    else {
        var newAccount = {
            id: id,
            username: inputSDTValue,
            password: inputMatKhauValue,
            fullName: inputHoTenValue,
            email: inputEmailValue
        };

        accounts.push(newAccount);

        localStorage.setItem("accounts", JSON.stringify(accounts));
        localStorage.setItem("id", id + 1);

        alert("Đăng ký thành công");
        window.location.href = "DangNhap.html";
    }
});