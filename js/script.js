document.addEventListener('DOMContentLoaded', () => {
    const shoeboxes = document.querySelectorAll('.shoebox');

    shoeboxes.forEach(box => {
        box.addEventListener('click', function(e) {
            // Screen width check for mobile (adjust 768px as needed for your design)
            const isMobile = window.innerWidth <= 768;

            if (isMobile) {
                // Check if this specific box is already 'pulled out'
                if (!this.classList.contains('is-active')) {
                    // FIRST CLICK: Prevent the link from opening
                    e.preventDefault();

                    // Remove 'is-active' from any other boxes (closes other boxes)
                    shoeboxes.forEach(b => b.classList.remove('is-active'));

                    // Add 'is-active' to trigger the CSS animation
                    this.classList.add('is-active');
                    
                    console.log("Box activated. Tap again to open link.");
                } 
                // SECOND CLICK: If it already has 'is-active', the browser 
                // will follow the link normally because we don't call e.preventDefault().
            }
        });
    });

    // Optional: Close boxes if user clicks on the empty "shelf" area
    document.querySelector('.stage').addEventListener('click', (e) => {
        if (!e.target.closest('.shoebox')) {
            shoeboxes.forEach(b => b.classList.remove('is-active'));
        }
    });
});