// Function to handle the intersection observer callback
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}

// Set up the Intersection Observer
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust the threshold as needed
};

const observer = new IntersectionObserver(handleIntersection, options);

// Observe all elements with the class 'fade-in' or 'slide-in'
const animationElements = document.querySelectorAll(".fade-in, .slide-in");
animationElements.forEach((element) => {
  observer.observe(element);
});
