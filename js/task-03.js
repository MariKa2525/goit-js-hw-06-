const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallerylistEl = document.querySelector('.gallery');

const markup =  images.map((image) => `<li><a><img src = ${image.url} alt = ${image.alt}></a></li>`).join("");

gallerylistEl.insertAdjacentHTML("beforeend", markup);

gallerylistEl.style.display = "grid";
gallerylistEl.style.gridGap = "10px";
gallerylistEl.style.justifyItems = "center";

const image = document.getElementsByTagName('img');
for (let i = 0; i < image.length; i += 1) image[i].style.width = '800px';