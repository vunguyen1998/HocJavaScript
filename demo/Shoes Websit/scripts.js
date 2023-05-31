
// Thay đổi ảnh lớn khi click vào ảnh nhỏ
small = document.getElementsByClassName('small')
smallLength = small.length

for (var i = 0; i < smallLength; ++i) {
    big = document.getElementById('imagebox')
    small[i].onclick = function(e) {
        big.src = e.target.src
    }
}

// ----------------------------------------
buyBtn = document.querySelectorAll('.box .card .btn')
buyBtnLength = buyBtn.length

for (var i = 0; i < buyBtnLength; ++i) {
    // big = document.getElementById('imagebox')
    // console.log(buyBtn[i].children[2].innerText)
    buyBtn[i].onclick = function(e) {
        alert(`Bạn vừa chọn mua sản phẩm với giá ${e.target.parentElement.children[2].innerText}`)
    }
}