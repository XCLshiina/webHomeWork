// Hàm chạy khi di chuột vào hoặc focus vào ảnh
function upDate(previewPic) {
    console.log("Sự kiện kích hoạt trên ảnh:", previewPic.alt);
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm chạy khi rời chuột hoặc blur khỏi ảnh (trả về trạng thái ban đầu)
function undo() {
    console.log("Rời khỏi ảnh, trả về trạng thái cũ.");
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over or tab through an image below to display here.";
}

// Hàm chạy khi trang web vừa tải xong để tự động thêm tabindex cho các ảnh
function addTabIndex() {
    console.log("Trang đã tải xong! Đang thêm tabindex cho các ảnh...");
    const images = document.querySelectorAll('.container img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex cho ảnh số " + (i + 1));
    }
}