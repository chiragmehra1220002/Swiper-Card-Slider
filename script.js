document.addEventListener("DOMContentLoaded", () => {

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
</svg>
`;

    const svgStar = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
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
          ${svgStar}${svgStar}${svgStar}${svgStar}${svgStar} <span class="fw-normal fs-6 ">(4.7)</span>
        </div>
      </div>
    </div>
    <div class="card-body">
     <p class="card-text">
      I got the opportunity to study data science and machine learning with Python from The loT Academy,and it was an enriching experience. The curriculum was well-structured, covering both foundational and advanced concepts in data science, machine learning, and Python programming.
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
    });
});