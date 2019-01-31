const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const anchor1 = document.querySelector('a:nth-child(1)');
anchor1.textContent = 'Services';
const anchor2 = document.querySelector('a:nth-child(2)');
anchor2.textContent = 'Product';
const anchor3 = document.querySelector('a:nth-child(3)');
anchor3.textContent = 'Vision';
const anchor4 = document.querySelector('a:nth-child(4)');
anchor4.textContent = 'Features';
const anchor5 = document.querySelector('a:nth-child(5)');
anchor5.textContent = 'About';
const anchor6 = document.querySelector('a:nth-child(6)');
anchor6.textContent = 'Content';

let codeSnippet = document.getElementById("cta-img");
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

const br = document.createElement('br');  //??
const h1 = document.querySelector('h1');
h1.textContent = `Dom Is Awesome`;

const button = document.querySelector('button');
button.textContent = 'Get Started';  

const features = document.querySelector('h4:nth-child(1)');
features.textContent = 'Features';
features.style.fontSize = '22px';
features.style.marginRight = '100px';

const firstParagraph = document.querySelector('p:nth-child(1)');
firstParagraph.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const about = document.querySelector('h4:nth-child(2)'); //??
about.textContent = 'About';
about.style.fontSize = '22px';

let midImage = document.getElementById("middle-img");
midImage.setAttribute('src', siteContent['img-src']); //??










