let cart=[]; 

function money(n){return "฿"+n.toLocaleString("en-US")}
function addToCart(name,price){cart.push({name,price});document.getElementById("cartCount").textContent=cart.length;showToast(name+" added to cart");}
function openCart(){document.getElementById("cartModal").classList.remove("hidden");renderCart()}
function closeCart(){document.getElementById("cartModal").classList.add("hidden")}
function renderCart(){let box=document.getElementById("cartItems"),total=cart.reduce((s,x)=>s+x.price,0);box.innerHTML=cart.length?cart.map((x,i)=>`<div class="cart-line"><span>${i+1}. ${x.name}</span><b>${money(x.price)}</b></div>`).join(""):`<p style="color:#73839a">Your demo cart is empty.</p>`;document.getElementById("cartTotal").textContent=money(total)}
function checkout(){if(!cart.length){showToast("Add a product first.");return}showToast("Demo order created — no real payment is charged.");closeCart()}
function showToast(t){let el=document.getElementById("toast");el.textContent=t;el.classList.add("show");clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>el.classList.remove("show"),2400)}

// New functions for the Image Modal Viewer
function openImageModal(src) {
    document.getElementById('modalImageSrc').src = src;
    document.getElementById('imageModal').classList.remove('hidden');
}
function closeImageModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))}
