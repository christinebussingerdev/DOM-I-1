const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// NAV ITEMS
const menuItems = document.querySelectorAll("nav a")
for (i=0; i < menuItems.length; i++) {
  menuItems[i].textContent = siteContent.nav[`nav-item-${i}`]
}

const logo = document.querySelector("img#logo-img")
logo.setAttribute("src", siteContent.images["logo-img"])


// CTA'S
const cta = document.querySelector("section.cta")
cta.querySelector("h1").textContent = siteContent.cta.h1
cta.querySelector("button").textContent = siteContent.cta.button
cta.querySelector("img").setAttribute("src", siteContent.images["cta-img"])


// MAIN CONTENT
const topContent = document.querySelectorAll(".main-content .top-content .text-content")

topContent[0].children[0].textContent = siteContent["main-content"]["features-h4"]
topContent[0].children[1].textContent = siteContent["main-content"]["features-content"]
topContent[1].children[0].textContent = siteContent["main-content"]["about-h4"]
topContent[1].children[1].textContent = siteContent["main-content"]["about-content"]

const midImg = document.querySelector("img.middle-img")
midImg.setAttribute("src", siteContent.images["accent-img"])

const btmContent = document.querySelectorAll(".main-content .bottom-content .text-content")
btmContent[0].children[0].textContent = siteContent["main-content"]["services-h4"]
btmContent[0].children[1].textContent = siteContent["main-content"]["services-content"]
btmContent[1].children[0].textContent = siteContent["main-content"]["product-h4"]
btmContent[1].children[1].textContent = siteContent["main-content"]["product-content"]
btmContent[2].children[0].textContent = siteContent["main-content"]["vision-h4"]
btmContent[2].children[1].textContent = siteContent["main-content"]["vision-content"]

// CONTACT
const contact = document.querySelector("section.contact")
contact.children[0].textContent = siteContent.contact["contact-h4"]
contact.children[1].textContent = siteContent.contact.address
contact.children[2].textContent = siteContent.contact.phone
contact.children[3].textContent = siteContent.contact.email

// FOOTER
const footer = document.querySelector("footer a")
footer.textContent = siteContent.footer.copyright

