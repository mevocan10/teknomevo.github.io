const productDetails = [
  {
  name: "teknomevo",
  imageUrl:
  "./beyaz.jpg",
  heading: "9000+ farklı ürün çeşidi ile tüm elektronik ve bilgisayar ihtiyaçlarınız için sizi kaliteyle buluşturuyoruz.",
  des:"",
  
  url: "https://www.teknomevo.com/" },
{
  name: "n11",
  imageUrl:
  "https://images.seeklogo.com/logo-png/49/1/n11-com-logo-png_seeklogo-490409.png",
  heading: "Hemen Sipariş Ver",
  des:
  "",
url: "https://www.n11.com/magaza/teknomevo" },

{
  name: "Hepsiburada",
  imageUrl: "https://scontent.fesb6-1.fna.fbcdn.net/v/t39.30808-6/333527885_3032901210350201_2117166944849817883_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vt-V0Qp9LbkQ7kNvwHhpQjF&_nc_oc=AdmoUleVo9-NWL1OsQwwA08kSky8stO_MBOWe7Ktcq5r3QMcA25uu18o3i8FNhlccNU&_nc_zt=23&_nc_ht=scontent.fesb6-1.fna&_nc_gid=VAcA8qJQ3ct_7yXNgDXVUA&oh=00_AfSQ01DKTAqiTrAclq8ivYD9f_mKwuFhAxCanm4BY8cJ0w&oe=689523C7",
  heading: "Hemen Sipariş Ver",
  des:
  "" ,
  url: "https://www.hepsiburada.com/magaza/teknomevo?tab=allproducts" },

{
  name: "Trendyol",
  imageUrl: "https://images.seeklogo.com/logo-png/34/1/trendyol-logo-png_seeklogo-346740.png",
  heading: "Hemen Sipariş Ver",
  des:
  "",
  url: "https://www.trendyol.com/sr?mid=1028377&os=1" },

{
  name: "Teknosa",
  imageUrl:
  "https://images.seeklogo.com/logo-png/43/1/teknosa-logo-png_seeklogo-436810.png",
  heading: "Hemen Sipariş Ver",
  des:
  "" ,
  url: "https://www.teknosa.com/magaza/teknomevo" },

{
  name: "Amazon",
  imageUrl:
  "https://scontent.fesb6-1.fna.fbcdn.net/v/t39.30808-6/302079528_468492145292792_8001810996642439023_n.png?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=d68PBFByvv4Q7kNvwF3VmqA&_nc_oc=AdnXNrHGxYAFkSVyG5WMuD6kwzMrzSNw9E6v0e1vcu-jZs1n9-NYvDk82rXO0dPzaA8&_nc_zt=23&_nc_ht=scontent.fesb6-1.fna&_nc_gid=6TSbqJfRzgX0mxSLMD5vGg&oh=00_AfSz3nJtG2w__p16h_3f0DfE7eE8cNBd-3PcK5okAJlH2g&oe=689566B2",
  heading: "Hemen Sipariş Ver",
  des:
  "" ,
  url: "https://www.amazon.com.tr/sp?ie=UTF8&seller=A22PRJ2XVACGLD&isAmazonFulfilled=0&asin=B07W5JKFQC&ref_=olp_merch_name_1" }];


//click events {


//}

// button components for better Ux {
function AddBtn(name, url) {
  const isTeknomevo = name === "teknomevo";
  const link = isTeknomevo ? "mailto:ticari@teknomevo.com?subject=Teknomevo İletişim" : url;
  const btnText = isTeknomevo ? "  İletişim için : ticari@teknomevo.com" : "Mağaza";

  return `
  <div>
    <a href="${link}" class="add-btn" target="_blank" rel="noopener noreferrer">
      ${btnText} <i class='fas fa-chevron-right'></i>
    </a>
  </div>`;
}




//}

//Ui components {
function Product(product = {}) {
  let { name, imageUrl, heading, des, url } = product;
  return `
<div class='card' data-name='${name}'>
  <div class='img-container'>
    <img class='product-img' src='${imageUrl}' alt='' />
    <div class='out-of-stock-cover'><span>Out Of Stock</span></div>
  </div>
  <div class='details'>
    <div class='name-fav'>
      <strong class='product-name'>${name}</strong>
      <button onclick='this.classList.toggle("fav")' class='heart'><i class='fas fa-heart'></i></button>
    </div>
    <div class='wrapper'>
      <h5>${heading}</h5>
      <p>${des}</p>
    </div>
    <div class='purchase'>
      <span class='btn-add'>${AddBtn(name, url)}</span>
    </div>
  </div>
</div>`;
}



function CartItems(cartItem = {}) {
  let { name, price, imgSrc, qty } = cartItem;
  return `
<div class='cart-item'>
  <div class='cart-img'>
    <img src='${imgSrc}' alt='' />
  </div>
  <strong class='name'>${name}</strong>
  <span class='qty-change'>${QtyBtn(qty)}</span>
  <p class='price'>₹ ${price * qty}</p>
  <button onclick='removeItem(this)'><i class='fas fa-trash'></i></button>
</div>`;
}

function Banner() {
  return `
<div class='banner'>
  <ul class="box-area">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  </ul>
  <div class='main-cart'>${DisplayProducts()}</div>

  <div class='nav'>
  </div>
  <div onclick='sideNav(0)' class='cover'></div>

</div>`;
}



//}

//updates Ui components {
function DisplayProducts() {
  let products = productDetails.map(product => {
    return Product(product);
  });
  return products.join("");
}






window.onload = () => {
  const teknomevoCard = document.querySelector('.card[data-name="teknomevo"]');
  if (teknomevoCard) {
    teknomevoCard.style.width = '95%';    // Yüzde olarak genişlik
    teknomevoCard.style.height = '30vh';  // Görüntü yüksekliğinin %40'ı
    teknomevoCard.style.color = 'white ';
    teknomevoCard.style.backgroundColor = 'white';
    


  }

  
};



function App() {
  return `
<div>
  ${Banner()}
</div>`;
}
//}

// injects the rendered component's html
document.getElementById("app").innerHTML = App();
