document.addEventListener("DOMContentLoaded", () => {
  const data = document.querySelector(".container");
  data.innerHTML = `
    <div class="row">
      <div class="col-lg-4 col-xxl-6">
        <h2 class="main-heading">
          Our Past <span class="sub-heading">Success Stories</span>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8">
        <p class="main-description">
          We have worked with some of the best companies in the world and
          have helped them achieve their goals. Here are some of our past
          success stories.
        </p>
      </div>
      <div class="col-lg-4 d-flex justify-content-end">
        <div class="button-prev d-flex justify-content-center align-items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none">
            <path d="M13.3623 7.18502L3.08362 7.18502L6.46532 10.5667C6.56166 10.6623 6.63813 10.776 6.69031 10.9012C6.74249 11.0265 6.76936 11.1608 6.76936 11.2965C6.76936 11.4322 6.74249 11.5665 6.69031 11.6918C6.63813 11.8171 6.56166 11.9307 6.46532 12.0263C6.27273 12.2177 6.01222 12.3252 5.74067 12.3252C5.46912 12.3252 5.2086 12.2177 5.01602 12.0263L0.606444 7.60645C0.220388 7.22269 0.00229453 6.70148 -5.39228e-07 6.15715C0.00500164 5.61638 0.222888 5.09936 0.606444 4.71813L5.01602 0.298275C5.11185 0.203112 5.2255 0.127759 5.35045 0.0765157C5.47541 0.0252719 5.60924 -0.00085689 5.7443 -0.000380065C5.87936 9.77145e-05 6.013 0.0271725 6.13759 0.0792975C6.26219 0.131422 6.37529 0.207578 6.47046 0.303415C6.56562 0.399252 6.64097 0.512895 6.69221 0.637855C6.74346 0.762814 6.76959 0.896642 6.76911 1.0317C6.76863 1.16676 6.74156 1.3004 6.68943 1.42499C6.63731 1.54958 6.56115 1.66269 6.46532 1.75785L3.08362 5.12928L13.3623 5.12927C13.6349 5.12927 13.8964 5.23757 14.0892 5.43033C14.2819 5.62309 14.3902 5.88454 14.3902 6.15715C14.3902 6.42975 14.2819 6.6912 14.0892 6.88396C13.8964 7.07672 13.6349 7.18502 13.3623 7.18502Z" fill="white"/>
          </svg>
        </div>
        <div class="button-next d-flex justify-content-center align-items-center text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13" fill="none" style="transform: scaleX(-1);">
            <path d="M13.3623 7.18502L3.08362 7.18502L6.46532 10.5667C6.56166 10.6623 6.63813 10.776 6.69031 10.9012C6.74249 11.0265 6.76936 11.1608 6.76936 11.2965C6.76936 11.4322 6.74249 11.5665 6.69031 11.6918C6.63813 11.8171 6.56166 11.9307 6.46532 12.0263C6.27273 12.2177 6.01222 12.3252 5.74067 12.3252C5.46912 12.3252 5.2086 12.2177 5.01602 12.0263L0.606444 7.60645C0.220388 7.22269 0.00229453 6.70148 -5.39228e-07 6.15715C0.00500164 5.61638 0.222888 5.09936 0.606444 4.71813L5.01602 0.298275C5.11185 0.203112 5.2255 0.127759 5.35045 0.0765157C5.47541 0.0252719 5.60924 -0.00085689 5.7443 -0.000380065C5.87936 9.77145e-05 6.013 0.0271725 6.13759 0.0792975C6.26219 0.131422 6.37529 0.207578 6.47046 0.303415C6.56562 0.399252 6.64097 0.512895 6.69221 0.637855C6.74346 0.762814 6.76959 0.896642 6.76911 1.0317C6.76863 1.16676 6.74156 1.3004 6.68943 1.42499C6.63731 1.54958 6.56115 1.66269 6.46532 1.75785L3.08362 5.12928L13.3623 5.12927C13.6349 5.12927 13.8964 5.23757 14.0892 5.43033C14.2819 5.62309 14.3902 5.88454 14.3902 6.15715C14.3902 6.42975 14.2819 6.6912 14.0892 6.88396C13.8964 7.07672 13.6349 7.18502 13.3623 7.18502Z" fill="white"/>
          </svg>
        </div>
      </div>
    </div>
  `;

  const container = document.querySelector(".swiper-wrapper");
  if (!container) return;

  const cardsData = [
    { name: "Priyanjli Thakur", img: "./profile.png" },
    { name: "Megha Sharma", img: "./profile.png" },
    { name: "Ananya Gupta", img: "./profile.png" },
    { name: "Sneha Reddy", img: "./profile.png" },
    { name: "Sneha Reddy", img: "./profile.png" },
    { name: "Sneha Reddy", img: "./profile.png" },
  ];

  const svgShape = `
    <svg xmlns="http://www.w3.org/2000/svg" width="134" height="134" viewBox="0 0 134 134">
      <path d="M16 18C16 12.4772 20.4772 8 26 8H107.942C116.839 8 121.307 18.7467 115.031 25.0535L75.8511 64.4284L33.0545 107.025C26.7481 113.302 16 108.835 16 99.9375V18Z" fill="#3EA4C1"/>
    </svg>`;

  const svgStar = `
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <path d="M22 8.08874L14.0061 7.56319L10.9956 0L7.9851 7.56319L0 8.08874L6.12451 13.2891L4.11477 21.1777L10.9956 16.8283L17.8765 21.1777L15.8668 13.2891L22 8.08874Z" fill="#3F6686"/>
    </svg>`;

  container.innerHTML = cardsData.map(card => `
    <div class="swiper-slide">
      <div class="card">
        <div class="card-heading">
          <div class="svg-profile">
            <div class="svg-shape">
              ${svgShape}
              <div class="profile-img" style="background-image:url('${card.img}')"></div>
            </div>
          </div>
          <div class="card-title1 pt-3">
            ${card.name}
            <div class="svg-star d-flex justify-content-end">
              ${svgStar}${svgStar}${svgStar}${svgStar}${svgStar}
              <span class="fw-normal fs-6">(4.7)</span>
            </div>
          </div>
        </div>
        <div class="card-body">
          <p class="card-text">
            I got the opportunity to study data science and machine learning with Python from The IoT Academy, and it was an enriching experience. The curriculum was well-structured, covering both foundational and advanced concepts in data science, machine learning, and Python programming.
          </p>
        </div>
      </div>
    </div>
  `).join("");

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    loop: true,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });
});