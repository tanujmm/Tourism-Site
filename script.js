const destinations = [
  {
    img: "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
    title: "New Delhi",
    content:
      "Visit the city that never sleeps and discover its iconic landmarks, world-class museums, and diverse neighborhoods.",
  },
  {
    img: "https://media1.thrillophilia.com/filestore/l5stwgse3qt889ohvpojpa13ftp0_Mall_Road_Shimla_1.jpg",
    title: "Shimla",
    content:
      "Experience the romance and culture of the City of Lights, from the Eiffel Tower to the Louvre Museum.",
  },
  {
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VyYWxhfGVufDB8fDB8fHww",
    title: "Kerela",
    content:
      "Explore the vibrant city of Kerela and immerse yourself in its unique blend of ancient traditions and modern technology.",
  },
  {
    img: "https://s7ap1.scene7.com/is/image/incredibleindia/hawa-mahal-jaipur-rajasthan-city-1-hero?qlt=82&ts=1742200253577",
    title: "Rajasthan",
    content:
      "Walk through the historic streets of Rajasthan, explore royal palaces and enjoy indian culture and modern charm.",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVcm5qe_tHNnj6mE2GYlWRZ3ji7-CVElm8ag&s",
    title: "Dehradun",
    content:
      "Discover futuristic skyscrapers, luxury shopping, and desert adventures in the vibrant city of Dubai.",
  },
];

const slider = document.querySelector("#destinationSlider");
let currentIndex = 0;

destinations.forEach((item) => {
  const div = document.createElement("div");
  div.className = "destination-item";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.textContent = item.content;

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(desc);

  slider.appendChild(div);
});

const itemWidth = 320;
const maxIndex = destinations.length - 1;

document.querySelector(".slider-btn.next").onclick = () => {
  if (currentIndex < maxIndex) currentIndex++;
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

document.querySelector(".slider-btn.prev").onclick = () => {
  if (currentIndex > 0) currentIndex--;
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

const hotels = document.querySelector("#hotels .destination-grid");
hotels.innerHTML = "";
const locations = [
  {
    img: "images/hotel-1.jpg",
    title: "Park Ascent",
    content:
      "Experience luxury accommodations and impeccable service at The Park Ascent, located in the heart of the city.",
  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/20/c9/facadenight.jpg?w=1200&h=-1&s=1",
    title: "The Four Season",
    content:
      "Relax in style at The Four Seasons, featuring breathtaking views,an award-winning spa, and gourmet dining options.",
  },
  {
    img: "images/hotel-3.jpg",
    title: "Hotel Paradise Inn",
    content:
      " Indulge in luxury at The Hotel Paradise, a historic landmark hotel renowned for its elegance and sophistication.",
  },
];

locations.forEach((item) => {
  const div = document.createElement("div");
  div.className = "destination-item";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.textContent = item.content;

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(desc);

  hotels.appendChild(div);
});

const services = document.querySelector("#activites .destination-grid");
services.innerHTML = "";
const service = [
  {
    img: "https://blog-content.ixigo.com/wp-content/uploads/2023/02/30-nov.jpeg",
    title: "Flight Booking",
    content:
      "Easily book domestic and international flights at the best prices. Enjoy seamless travel planning with real-time availability and instant confirmations.",
  },
  {
    img: "https://www.siteminder.com/wp-content/uploads/2023/08/vala-hero.jpg",
    title: "Hotel Booking",
    content:
      "Find and reserve top-rated hotels worldwide at competitive prices. Enjoy comfortable stays with easy booking, flexible options, and trusted customer reviews.",
  },
  {
    img: "https://www.informalnewz.com/wp-content/uploads/2023/12/Railways.jpg",
    title: "Railway Booking",
    content:
      " Easily book train tickets with real-time availability and instant confirmations. Enjoy a smooth and convenient railway travel experience at your fingertips.",
  },
];

service.forEach((item) => {
  const div = document.createElement("div");
  div.className = "destination-item";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.title;

  const title = document.createElement("h3");
  title.textContent = item.title;

  const desc = document.createElement("p");
  desc.textContent = item.content;

  div.appendChild(img);
  div.appendChild(title);
  div.appendChild(desc);

  services.appendChild(div);
});

const testimonialForm = document.getElementById("testimonial-form");
const testimonialList = document.getElementById("testimonial-list");

testimonialForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("testimonial-name").value.trim();
  const message = document.getElementById("testimonial-message").value.trim();

  if (name && message) {
    const testimonial = document.createElement("div");
    testimonial.classList.add("testimonial");

    testimonial.innerHTML = `
      <p>"${message}"</p>
      <h4>- ${name}</h4>
    `;

    testimonialList.appendChild(testimonial);

    testimonialForm.reset();
  }
});

const sliderr = document.getElementById("destinationSlider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
  slider.scrollBy({ left: -320, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  slider.scrollBy({ left: 320, behavior: "smooth" });
});
