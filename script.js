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

// JavaScript for Reviews
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('reviewer-name').value;
  const rating = document.getElementById('review-rating').value;
  const text = document.getElementById('review-text').value;

 
  const review = document.createElement('div');
  review.classList.add('review');
  review.innerHTML = `
    <h4>${name}</h4>
    <p>${'⭐'.repeat(rating)}</p>
    <p>"${text}"</p>
  `;

  // Add review to container
  document.getElementById('reviews-container').appendChild(review);

  // Clear form
  document.getElementById('review-form').reset();
});

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

// JavaScript for Reviews
document.getElementById('reviewForm').addEventListener('submit', function(event) {
  eventById('name').value;
  const review = document.getElementById('review').value;

  // Create new review element
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');
  reviewElement.innerHTML = `
    <h4>${name}</h4>
    <p>"${review}"</p>
  `;

  // Add review to container
  document.getElementById('reviews').appendChild(reviewElement);

  // Clear form
  document.getElementById('reviewForm').reset();
});

document.addEventListener('DOMContentLoaded', function() {
  // For shop buttons
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
