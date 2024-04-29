$(document).ready(function () {
    let thuongHieu = document.getElementById('menuThuongHieu');
    thuongHieu.innerHTML = "";
    // Tạo giao diện menu thương hiệu
    let hTML = taoGiaoDienThuongHieu("");
    // Gắn giao diện menu thương hiệu vào trang
    thuongHieu.innerHTML = hTML;

    // Kiểm tra xem có dữ liệu được lưu trong localStorage không
    if (localStorage.getItem('selectedBrand')) {
        // Nếu có, lấy dữ liệu và chạy hàm changePage
        let selectedBrand = localStorage.getItem('selectedBrand');
        changePage(selectedBrand);

        // Tra ve dung trang
        localStorage.setItem('rebackTrang', thuongHieuDT);
        
        // Sau khi sử dụng, bạn có thể xóa dữ liệu đã lưu trong localStorage để tránh việc sử dụng lại trong lần tương lai
        localStorage.removeItem('selectedBrand');
    } else {
        if(localStorage.getItem('rebackTrang'))
        {
            let rebackTrang = localStorage.getItem('rebackTrang');
            changePage(rebackTrang)
            localStorage.removeItem('rebackTrang');
        }
        else
        {
            // Nếu không có dữ liệu trong localStorage
            changePage('Iphone')
        }
    }
}); 



function hienThiSanPhamTuLocalStorage() {
    let dsip = JSON.parse(localStorage.getItem("dsIphone"));
    let masp = localStorage.getItem("masp");
    let temp = dsip.find(sp => sp.masp == masp);
    hienThiThongTin(temp);
}

function linkTrang(thuongHieuDT) {
    // Lưu thuongHieuDT vào localStorage
    localStorage.setItem('selectedBrand', thuongHieuDT);
    // Chuyển đến trang mới
    window.location.href = "DanhSachDienThoai.html";
}


function changePage(thuongHieuDT)
{
    // gắn đoạn HTML đó vào selection products      
    $("#linkTrang").html(thuongHieuDT);

    chuyendoituongQuangcaothanhHTML(thuongHieuDT);

    // Thg hieu
    let idmenuThuongHieu = document.getElementById('menuThuongHieu');
    let GiaoDienThuongHieu = taoGiaoDienThuongHieu(thuongHieuDT);
    idmenuThuongHieu.innerHTML = GiaoDienThuongHieu;

    let nodeProducts = document.getElementById('dsDT');
     
    // Lấy danh sách sản phẩm từ localStorage
    let jsondanhsachsanpham = localStorage.getItem('dssp');
     
    let danhsachsanpham =JSON.parse(jsondanhsachsanpham);
    
    // Chuyển danh sách sản phẩm sang đoạn html
    let HTML = chuyendanhsachdoituongsanphamthanhHTML(thuongHieuDT);
    
    // gắn đoạn HTML đó vào selection products
    nodeProducts.innerHTML = HTML;

}

function taoGiaoDienThuongHieu(thuongHieuDT) {
    var html = '';
    var thuongHieu = [
        { ten: 'Iphone', mau: '', icon: '' },
        { ten: 'SamSung', mau: 'blue', icon: '' },
        { ten: 'Xiaomi', mau: 'darkgray', icon: '' },
        { ten: 'Oppo', mau: 'green', icon: '' },
        { ten: 'NOKIA', mau: 'darkblue', icon: '' },
        { ten: 'Vivo', mau: '#1e4f9a', icon: '' }
    ];

    html += '<div class="col-12">';
    html += '<ul>';
    let i=0;
    thuongHieu.forEach(function (item) {
    if(i==0)
       {
        html += '<li style="padding-left: 0;" class="liThuongHieu ms-3">';
        i++;
       }
    else
        html += '<li class="liThuongHieu">'; 
        html += '<button onclick="linkTrang(\'' + item.ten + '\')"  border-width: 2px;" class="iconThuongHieu';

        if(thuongHieuDT==item.ten){
            html += ' "style="background-color: rgb(211, 235, 250); border-width: 2px;"';
        }
        html += '">';
        html += '<b style="color: ' + item.mau + ';">' + item.icon + item.ten + '</b>';
        html += '</button>';
        html += '</li>';
    });

    html += '</ul>';
    html += '</div>';
    i=0;
    return html;
}


function chuyendanhsachdoituongsanphamthanhHTML(thuongHieuDT) {
    
    // Chọn tập dữ liệu phù hợp dựa trên thương hiệu
    let dssp = [];
    if (thuongHieuDT === "Iphone") {
        dssp = JSON.parse(localStorage.getItem('dsIphone'));
    } else if (thuongHieuDT === "Oppo") {
        dssp = JSON.parse(localStorage.getItem('dsOppo'));
    }
    else if (thuongHieuDT === "Xiaomi") {
        dssp = JSON.parse(localStorage.getItem('dsXiaomi'));
    } else if (thuongHieuDT === "SamSung") {
        dssp = JSON.parse(localStorage.getItem('dsSamsung'));
    }

    var HTMLdanhsachsanpham = '<div class="row justify-content-center">';
    for (var i = 0; i < dssp.length; i++) {
        var sp = dssp[i];
        var htmlsanpham = chuyendoituongsanphamthanhHTML(sp,i+1,thuongHieuDT);
        HTMLdanhsachsanpham += htmlsanpham;
        // Nếu là sản phẩm thứ 5 hoặc là sản phẩm cuối cùng trong danh sách, đóng hàng và bắt đầu hàng mới
        if ((i + 1) % 5 === 0 || i === dssp.length - 1) {
            HTMLdanhsachsanpham += '</div><div class="row justify-content-center">';
        }
    }
    HTMLdanhsachsanpham += '</div>'; // Kết thúc hàng cuối cùng
    return HTMLdanhsachsanpham;
}




function chuyendoituongsanphamthanhHTML(sanpham,i,thuongHieuDT){
    if (thuongHieuDT === "Oppo") {
        i+=20;
    }
    else if (thuongHieuDT === "Xiaomi") {
        i+=30;
    } else if (thuongHieuDT === "SamSung") {
        i+=10;
    }
    var html = '';
    html +=        '<div class="col-lg-2 col-md-6 mb-4">'
    html +=             '<div class="card rounded-4 mt-5" >'
    html +=                 '<div class="btn-outline-light d-flex justify-content-center align-items-center p-4" style="border-radius: 0 0 0 30px; height: 50%; id="hinhanh6">'
    html +=                  '<img src="'+sanpham.hinhanh6+'"  class="card-img-top" alt="..." style="max-width: 100%;" onclick="setMasp('+i+')" >';
    html +=             '</div>' 
    html +=             '<div class="card-body">' 
    html +=                '<p class="card-text"><img src="../images/iconDSDT/giamGia.png" alt=""></p>' 
    html +=                '<h4 class="card-title" id="tensp">'+sanpham.tensp+'</h4>'
    html +=                '<div class="row" style="padding-right: 18px;">' 
    html +=                     '<div class="col-4"><li class="li_ThongSoIPhone"><button class="btn_ThongSoIphone" id="kichThuocManHinh">'+sanpham.kichThuocManHinh+'</button></li></div>' 
    html +=                     '<div class="col-4"><li class="li_ThongSoIPhone"><button class="btn_ThongSoIphone" id="dungLuongRam">'+sanpham.dungLuongRam+'</button></li></div>' 
    html +=                     '<div class="col-4"><li class="li_ThongSoIPhone"></li><button class="btn_ThongSoIphone" id="loaiPhienBan">'+sanpham.loaiPhienBan+'</button></li></div>  ' 
    html +=                 '</div>' 
    html +=                 '<div class="row" style="padding-top: 5px;">' 
    html +=                     '<div class="col-12"><b class="giaDaGiam_TXT">'+sanpham.giaHienTai+'<del class="giaGoc_TXT" style="padding-left: 10px;">'+sanpham.giaGiam+'</del></b></div>'
    html +=                 '</div>' 
    html +=                 '<div class="row" style="padding-top: 5px;">' 
    html +=                     '<p class="card-text" style="clear: both;">' 
    html +=                        '<span class="fa fa-star checked"></span>'
    html +=                        '<span class="fa fa-star checked"></span>'
    html +=                        '<span class="fa fa-star checked"></span>'
    html +=                        '<span class="fa fa-star checked"></span>'
    html +=                        '<span class="fa fa-star checked"></span></p>'
    html +=                 '</div>'
    html +=             '</div>' 
    html +=             '</div>' 
    html +=             '</div>'
    return html;
}  

function chuyendoituongQuangcaothanhHTML(thuongHieuDT) {

    // QC trai
    let temp = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc1.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc1").html(temp)
    let temp1 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc2.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc2").html(temp1)
    let temp3 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc3.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc3").html(temp3)
    let temp4 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc4.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc4").html(temp4)

    // QC phai
    let temp5 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc5.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc5").html(temp5)
    let temp6 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc6.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc6").html(temp6)
    let temp7 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc7.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc7").html(temp7)
    let temp8 = '<img src="../images/QuangCaoDSDT/' + thuongHieuDT + '/qc8.webp" alt="Los Angeles" class="d-block" style="width:100%">'
    $("#qc8").html(temp8)
}


function setMasp(masp) {
    localStorage.setItem("masp", masp);
    window.location.href = "ChiTietSanPham.html";
}

function setThuongHieu(dsTH)
{
    localStorage.setItem("dsTH", dsTH);
    window.location.href = "DanhSachDienThoai.html";
}
