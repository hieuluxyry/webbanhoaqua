const btn = document.querySelectorAll("button")
    // console.log(btn)
btn.forEach(function(button, index) {
    button.addEventListener("click", function(event) {
        {
            var btnItem = event.target
            var product = btnItem.parentElement
            var productImg = product.querySelector("img").src
            var productName = product.querySelector("h4").innerText
            var productPrice = product.querySelector("span").innerText
                // console.log(productPrice, productImg, productName)
            addcart(productPrice, productImg, productName)
        }
    })


})

function addcart(productPrice, productImg, productName) {
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".title1")

        if (productT[i].innerHTML == productName) {
            // alert("Sảm phẩm đã có trong giỏ hàng ")
            inputchange()

            return
        }
    }

    var trcontent = '<tr><td style="display: flex; align-items: center ;" class="img-text"><img class="cart-img" width="70px" src="' + productImg + '" alt=" " class="img-items "><span class="title1">' + productName + '</span></td><td><p><span class="price">' + productPrice + '</span><sup>đ</sup></p></td><td><input class="input-number" type="number" value="1" min="1"></td><td><button class="cart-delete" onclick="xoasp(this)">Xóa</button></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
        // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
}

// 

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
        // console.log(carItem)
    for (var i = 0; i < cartItem.length; i++) {
        // console.log(i)
        var inputValue = cartItem[i].querySelector("input").value
            // console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".price").innerHTML
            // console.log(productPrice)
        var totalA
        totalA = inputValue * productPrice * 1000
            // totalB = totalA.toLocaleString('de-DE')
            // console.log(totalB)
        totalC = totalC + totalA
            // console.log(totalC)
            // totalD = totalC.toLocaleString('de-DE')

    }
    var carttotalA = document.querySelector(".price-total span")
    carttotalA.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
}


// delete

function deleteCart() {
    var cartItem = document.querySelectorAll(".body111 tr")
    for (var i = 0; i < cartItem.length; i++) {
        var productT = document.querySelectorAll(".cart-delete")
        console.log(productT)
        productT[i].addEventListener("click", function(event) {
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement

            cartitemR.remove()
                // console.log(cartitemR)
        })

    }

}

function xoasp(x) {
    var tr = x.parentElement.parentElement
    tr.remove();
    carttotal()
}

function inputchange() {
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i = 0; i < cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change", function() {
            carttotal()
        })


    }

}