document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    once: true,
    easing: "ease-in-out",
  });

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
      img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000&auto=format&fit=crop",
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

  const sliderWrapper = document.getElementById("destinationSlider");
  const prevBtn = document.querySelector(".slider-btn.prev");
  const nextBtn = document.querySelector(".slider-btn.next");

  // Create destination items
  destinations.forEach((item) => {
    const div = document.createElement("div");
    div.className = "destination-item";
    div.innerHTML = `
      <img src="${item.img}" alt="${item.title}" loading="lazy">
      <h3>${item.title}</h3>
      <p>${item.content}</p>
    `;
    sliderWrapper.appendChild(div);
  });

  // Hotels Section
  const hotels = [
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
      title: "Park Ascent",
      content:
        "Experience luxury accommodations and impeccable service at The Park Ascent, located in the heart of the city.",
    },
    {
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/21/20/c9/facadenight.jpg?w=1200&h=-1&s=1",
      title: "The Four Seasons",
      content:
        "Relax in style at The Four Seasons, featuring breathtaking views, an award-winning spa, and gourmet dining options.",
    },
    {
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
      title: "Hotel Paradise Inn",
      content:
        "Indulge in luxury at The Hotel Paradise, a historic landmark hotel renowned for its elegance and sophistication.",
    },
  ];

  const hotelsContainer = document.querySelector("#hotels .destination-grid");
  hotels.forEach((hotel) => {
    const div = document.createElement("div");
    div.className = "destination-item";
    div.innerHTML = `
      <img src="${hotel.img}" alt="${hotel.title}" loading="lazy">
      <h3>${hotel.title}</h3>
      <p>${hotel.content}</p>
    `;
    hotelsContainer.appendChild(div);
  });

  // Activities Section
  const activities = [
    {
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
      title: "Flight Booking",
      content:
        "Easily book domestic and international flights at the best prices with our seamless booking system.",
    },
    {
      img: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1000&auto=format&fit=crop",
      title: "Hotel Booking",
      content:
        "Find and reserve top-rated hotels worldwide at competitive prices with our trusted partners.",
    },
    {
      img: "https://www.informalnewz.com/wp-content/uploads/2023/12/Railways.jpg",
      title: "Railway Booking",
      content:
        "Book train tickets with real-time availability and instant confirmations for a smooth travel experience.",
    },
  ];

  const activitiesContainer = document.querySelector(
    "#activites .destination-grid"
  );
  activities.forEach((activity) => {
    const div = document.createElement("div");
    div.className = "destination-item";
    div.innerHTML = `
      <img src="${activity.img}" alt="${activity.title}" loading="lazy">
      <h3>${activity.title}</h3>
      <p>${activity.content}</p>
    `;
    activitiesContainer.appendChild(div);
  });

  // Testimonials
  const testimonialForm = document.getElementById("testimonial-form");
  const testimonialList = document.getElementById("testimonial-list");

  testimonialForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("testimonial-name").value.trim();
    const message = document.getElementById("testimonial-message").value.trim();

    if (name && message) {
      const testimonial = document.createElement("div");
      testimonial.classList.add("testimonial");
      testimonial.innerHTML = `<p>"${message}"</p><h4>- ${name}</h4>`;
      testimonialList.prepend(testimonial);
      testimonialForm.reset();
    }
  });

  // Slider navigation
  let currentScroll = 0;
  const scrollAmount = 300;

  prevBtn.addEventListener("click", () => {
    currentScroll = Math.max(currentScroll - scrollAmount, 0);
    sliderWrapper.scrollTo({ left: currentScroll, behavior: "smooth" });
  });

  nextBtn.addEventListener("click", () => {
    currentScroll = Math.min(
      currentScroll + scrollAmount,
      sliderWrapper.scrollWidth - sliderWrapper.clientWidth
    );
    sliderWrapper.scrollTo({ left: currentScroll, behavior: "smooth" });
  });
});

window.addEventListener(
  "scroll",
  function () {
    AOS.refresh();
  },
  { passive: true }
);
