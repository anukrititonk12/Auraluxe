function showAlert() {
  alert("Thank you for exploring Auraluxe luxury cosmetics!");
}

document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  const result = document.getElementById("formResult");
  result.innerHTML = `
    <p>Welcome to our Beauty Club, <strong>${name}</strong>! We've added <strong>${email}</strong> to our mailing list.</p>
    <p>Watch your inbox for exclusive offers and beauty tips!</p>
  `;
  
  result.style.display = "block";
  
  // Reset form
  this.reset();
  
  // Scroll to result
  result.scrollIntoView({ behavior: 'smooth' });
});

// Add smooth scroll for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// For shop buttons
document.addEventListener('DOMContentLoaded', function() {
  const shopButtons = document.querySelectorAll('.shop-button');
  shopButtons.forEach(button => {
    button.addEventListener('click', function() {
      alert("Thank you for shopping!");
    });
  });

  // Review form submission
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert("Thank you for your feedback!");
      this.reset();
    });
  }
});
