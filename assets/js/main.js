document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-page");
  const prevButton = document.querySelector(".prev-page");
  const page = document.querySelector(".book-content");

  // Handle Next Animation
  nextButton.addEventListener("click", () => {
    const nextPageUrl = nextButton.getAttribute("data-next-page"); // Get the Next URL
    page.classList.add("fold-next");
    setTimeout(() => {
      // Redirect to the Next after animation
      window.location.href = nextPageUrl;
    }, 600); // Match the duration of the CSS transition
  });

  // Handle previous Animation
  prevButton.addEventListener("click", () => {
    const prevPageUrl = prevButton.getAttribute("data-prev-page"); // Get the previous URL
    page.classList.add("fold-prev");
    setTimeout(() => {
      // Redirect to the previous after animation
      window.location.href = prevPageUrl;
    }, 600); // Match the duration of the CSS transition
  });
});

//Collapse and show menu icon on smaller screens
function toggleMenu() {
  const leftColumn = document.querySelector(".left-column");
  leftColumn.classList.toggle("active");
}
