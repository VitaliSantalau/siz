/* phones */
const containerPhonesMobile = document.querySelector('.containerPhonesMobile');
const iconTel = document.querySelector('.iconTel');
const closePhones = document.querySelector('.closePhones');

iconTel.onclick = function() {
  containerPhonesMobile.style.display = "flex";
};

closePhones.onclick = function() {
  containerPhonesMobile.style.display = "none";
  headerSecondLevelMobile.style.display = "none";
  navCatalogMobile.style.display = "none";
};


/* menu */
const headerSecondLevelMobile = document.querySelector('.headerSecondLevelMobile');
const iconMenu = document.querySelector('.iconMenu');
const closeMenu = document.querySelector('.closeMenu');

iconMenu.onclick = function() {
  headerSecondLevelMobile.style.display = "flex";
};

closeMenu.onclick = function() {
  containerPhonesMobile.style.display = "none";
  headerSecondLevelMobile.style.display = "none";
  navCatalogMobile.style.display = "none";
};


/* nav catalog */
const navCatalogMobile = document.querySelector('.navCatalogMobile');
const catalogMobile = document.querySelector('.catalogMobile');
const closeNavcatalog = document.querySelector('.closeNavcatalog');

catalogMobile.onclick = function() {
  navCatalogMobile.style.display = "flex";
};

closeNavcatalog.onclick = function() {
  containerPhonesMobile.style.display = "none";
  headerSecondLevelMobile.style.display = "none";
  navCatalogMobile.style.display = "none";
};





