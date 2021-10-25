// Animation for Navbar Seller
const categoryProducts = document.querySelector('.navbar__seller-category-products');
const categoryProductsJS = document.querySelector('.js-category-products');
const categoryProductsList = document.querySelector('.navbar__seller-category-products-list');
const categoryProductsListItems = document.querySelectorAll('.navbar__seller-category-products-item');

var count = 0;
for (var categoryProductsListItem of categoryProductsListItems) {
    count++;
}

var categoryProductsHeight = categoryProducts.clientHeight;
var height = categoryProductsHeight + count * 29 + 5;

const navbarSeller = document.querySelector('.navbar__seller');
const navbarSellerContent = document.querySelector('.navbar__seller-content');
var navbarSellerContentHeight = navbarSellerContent.clientHeight;
var navbarSellerHeight = navbarSeller.clientHeight;
var listProductsHeight = count * 29 + 5;
var remainHeight = navbarSellerHeight - navbarSellerContentHeight;

categoryProductsJS.addEventListener('click', function() {
    if (categoryProducts.clientHeight == categoryProductsHeight) {
        if (listProductsHeight <= remainHeight) {
            navbarSeller.style = 'height: ' + navbarSellerHeight + 'px';
        } else {
            navbarSeller.style = 'height: calc(' + navbarSellerHeight + 'px + ' + listProductsHeight + 'px - ' + remainHeight + 'px)';
        }
        categoryProductsList.style = 'display: block';
        categoryProducts.style = 'height: ' + height + 'px';
    } else {
        categoryProducts.style = 'height: 50px';
        categoryProductsList.style = 'display: none';
        navbarSeller.style = 'height: ' + navbarSellerHeight + 'px';
    }
    console.log(navbarSellerHeight, listProductsHeight, remainHeight);
});




// Product Catalog Management: tắt/mở
const modal = document.querySelector('.js-modal');
const modalBody = document.querySelector(".js-modal__body");
const productManageBtns = document.querySelectorAll('.js-product-manage');
const addProductBtn = document.querySelector('.js-add-product');
const editProductBtns = document.querySelectorAll('.js-edit-product-btn');
const backBtns = document.querySelectorAll('.js-back-btn');
const manageProductForm = document.querySelector('.js-manage-product-form');
const addProductForm = document.querySelector('.js-add-product-form');
const editProductForm = document.querySelector('.js-edit-product-form');

function showManageProductForm(x) {
    modal.classList.add('open');
    manageProductForm.classList.add('open');
    addProductForm.classList.remove('open');
    editProductForm.classList.remove('open');
}

function showLoginForm() {
    modal.classList.add('open');
    addProductForm.classList.add('open');
    manageProductForm.classList.remove('open');
}

function showEditProductForm() {
    modal.classList.add('open');
    editProductForm.classList.add('open');
    manageProductForm.classList.remove('open');
}

function hideForm() {
    modal.classList.remove('open');
    manageProductForm.classList.remove('open');
    addProductForm.classList.remove('open');
    editProductForm.classList.remove('open');
}

for (const backBtn of backBtns) {
    backBtn.addEventListener('click', hideForm);
}

modal.addEventListener('click', hideForm);

modalBody.addEventListener('click', function(event) {
    event.stopPropagation(modalBody);
})

for (const productManageBtn of productManageBtns) {
    productManageBtn.addEventListener('click', showManageProductForm);
}

addProductBtn.addEventListener('click', showLoginForm);

for (const editProductBtn of editProductBtns) {
    editProductBtn.addEventListener('click', showEditProductForm);
}