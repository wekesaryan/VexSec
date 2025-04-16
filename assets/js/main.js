document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.querySelector(".next-page");
  const prevButton = document.querySelector(".prev-page");
  const page = document.querySelector(".book-content");

  // Handle Next Page Animation
  nextButton.addEventListener("click", () => {
    const nextPageUrl = nextButton.getAttribute("data-next-page"); // Get the next page URL
    page.classList.add("fold-next");
    setTimeout(() => {
      // Redirect to the next page after animation
      window.location.href = nextPageUrl;
    }, 600); // Match the duration of the CSS transition
  });

  // Handle Previous Page Animation
  prevButton.addEventListener("click", () => {
    const prevPageUrl = prevButton.getAttribute("data-prev-page"); // Get the previous page URL
    page.classList.add("fold-prev");
    setTimeout(() => {
      // Redirect to the previous page after animation
      window.location.href = prevPageUrl;
    }, 600); // Match the duration of the CSS transition
  });
});

//Collapse and show menu icon on smaller screens
function toggleMenu() {
  const leftColumn = document.querySelector(".left-column");
  leftColumn.classList.toggle("active");
}
