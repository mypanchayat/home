// Get all profile cards
var cards = document.querySelectorAll('.profile-card');

// Add click event listener to each card
cards.forEach(function(card) {
  card.addEventListener('click', function() {
    // Remove active class from all cards
    cards.forEach(function(c) {
      c.classList.remove('active');
    });
    
    // Add active class to clicked card
    this.classList.add('active');
  });
});

// Add click event listener to close icons
var closeIcons = document.querySelectorAll('.close-icon');
closeIcons.forEach(function(icon) {
  icon.addEventListener('click', function(event) {
    event.stopPropagation();
    // Remove active class from parent card
    this.closest('.profile-card').classList.remove('active');
  });
});
