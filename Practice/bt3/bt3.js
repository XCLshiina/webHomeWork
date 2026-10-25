// Hàm hiển thị ảnh và chữ khi di chuột hoặc focus
function upDate(previewPic) {
    console.log("Triggered on:", previewPic.alt);
    document.getElementById('image').innerHTML = previewPic.alt;
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

// Hàm trả về trạng thái ban đầu khi rời chuột hoặc blur
function undo() {
    console.log("Resetting preview box.");
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over or tab through an image below to display here.";
}

// Hàm tự động thêm tabindex cho accessibility
function addTabIndex() {
    console.log("Adding tabindex dynamically...");
    const images = document.querySelectorAll('.container img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}