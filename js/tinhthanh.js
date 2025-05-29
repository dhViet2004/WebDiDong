// Sử dụng file tinhthanh.json cho dropdown có ID là "city", "district", và "ward"
var cities = document.getElementById("city");
var districts = document.getElementById("district");
var wards = document.getElementById("ward");

var Parameter = {
    url: '../js/tinhthanh.json',
    method: "GET",
    responseType: "application/json",
};

var promise = axios(Parameter);

promise.then(function (result) {
    renderCity(result.data);
});

function renderCity(data) {
    for (const x of data) {
        var opt = document.createElement('option');
        opt.value = x.Name;
        opt.text = x.Name;
        opt.setAttribute('data-id', x.Id);
        cities.options.add(opt);
    }
    cities.addEventListener('change', function () {
        districts.length = 1;
        wards.length = 1;
        if (this.options[this.selectedIndex].dataset.id != "") {
            const result = data.filter(n => n.Id === this.options[this.selectedIndex].dataset.id);

            for (const k of result[0].Districts) {
                var opt = document.createElement('option');
                opt.value = k.Name;
                opt.text = k.Name;
                opt.setAttribute('data-id', k.Id);
                districts.options.add(opt);
            }
        }
    });

    districts.addEventListener('change', function () {
        wards.length = 1;
        const dataCity = data.filter((n) => n.Id === cities.options[cities.selectedIndex].dataset.id);
        if (this.options[this.selectedIndex].dataset.id != "") {
            const dataWards = dataCity[0].Districts.filter(n => n.Id === this.options[this.selectedIndex].dataset.id)[0].Wards;

            for (const w of dataWards) {
                var opt = document.createElement('option');
                opt.value = w.Name;
                opt.text = w.Name;
                opt.setAttribute('data-id', w.Id);
                wards.options.add(opt);
            }
        }
    });
}

// Sử dụng file tinhthanhCuaHang.json cho dropdown có ID là "city1", "district1", và "ward1"
var cities1 = document.getElementById("city1");
var districts1 = document.getElementById("district1");
var wards1 = document.getElementById("ward1");

var Parameter1 = {
    url: '../js/tinhthanhCuaHang.json',
    method: "GET",
    responseType: "application/json",
};

var promise1 = axios(Parameter1);

promise1.then(function (result) {
    renderCity1(result.data);
});

function renderCity1(data) {
    for (const x of data) {
        var opt = document.createElement('option');
        opt.value = x.Name;
        opt.text = x.Name;
        opt.setAttribute('data-id', x.Id);
        cities1.options.add(opt);
    }
    cities1.addEventListener('change', function () {
        districts1.length = 1;
        wards1.length = 1;
        if (this.options[this.selectedIndex].dataset.id != "") {
            const result = data.filter(n => n.Id === this.options[this.selectedIndex].dataset.id);

            for (const k of result[0].Districts) {
                var opt = document.createElement('option');
                opt.value = k.Name;
                opt.text = k.Name;
                opt.setAttribute('data-id', k.Id);
                districts1.options.add(opt);
            }
        }
    });

    districts1.addEventListener('change', function () {
        wards1.length = 1;
        const dataCity = data.filter((n) => n.Id === cities1.options[cities1.selectedIndex].dataset.id);
        if (this.options[this.selectedIndex].dataset.id != "") {
            const dataWards = dataCity[0].Districts.filter(n => n.Id === this.options[this.selectedIndex].dataset.id)[0].Wards;

            for (const w of dataWards) {
                var opt = document.createElement('option');
                opt.value = w.Name;
                opt.text = w.Name;
                opt.setAttribute('data-id', w.Id);
                wards1.options.add(opt);
            }
        }
    });
}
