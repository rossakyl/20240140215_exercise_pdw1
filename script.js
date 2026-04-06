// ================= DATA KERANJANG =================

let keranjang = [];



// ================= BELI PRODUK =================

function beliProduk(nama, harga){

keranjang.push({
nama:nama,
harga:harga
});

alert("Produk " + nama + " berhasil ditambahkan ke keranjang!");

updateCart();

}



// ================= UPDATE KERANJANG =================

function updateCart(){

let cartText = document.getElementById("cartText");

let cartCount = document.getElementById("cartCount");

cartCount.innerText = keranjang.length;



if(keranjang.length === 0){

cartText.innerHTML = "Keranjang kosong";

return;

}



let html = "";

let total = 0;



keranjang.forEach(function(item,index){

total += item.harga;

html += `
<p>
${item.nama} - Rp ${item.harga}
<button onclick="hapusProduk(${index})">❌</button>
</p>
`;

});



html += "<hr>";

html += "<b>Total: Rp " + total + "</b>";



cartText.innerHTML = html;

}



// ================= HAPUS PRODUK =================

function hapusProduk(index){

keranjang.splice(index,1);

updateCart();

}



// ================= SCROLL KE PRODUK =================

function scrollProduk(){

document.getElementById("produk").scrollIntoView({
behavior:"smooth"
});

}



// ================= SEARCH POPUP =================

function toggleSearch(){

document.getElementById("searchBox").style.display="block";

}

function closeSearch(){

document.getElementById("searchBox").style.display="none";

}



// ================= CART POPUP =================

function toggleCart(){

document.getElementById("cartBox").style.display="block";

updateCart();

}

function closeCart(){

document.getElementById("cartBox").style.display="none";

}



// ================= SEARCH PRODUK =================

function cariProduk(){

let input = document.getElementById("searchInput").value.toLowerCase();

let produk = document.querySelectorAll(".card");

let ditemukan = false;

produk.forEach(function(item){

let namaProduk = item.innerText.toLowerCase();

if(namaProduk.includes(input)){

item.scrollIntoView({
behavior:"smooth"
});

ditemukan = true;

}

});

if(!ditemukan){

alert("Produk tidak ditemukan");

}

}



// ================= ENTER UNTUK SEARCH =================

document.getElementById("searchInput").addEventListener("keypress", function(event){

if(event.key === "Enter"){

cariProduk();

}

});