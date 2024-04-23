document.addEventListener('DOMContentLoaded', function() {
    const profileButton = document.getElementById('profileButton');
    const profileCard = document.getElementById('profileCard');

    function toggleProfileCard() {
        profileCard.style.display = profileCard.style.display === 'none' ? 'block' : 'none';
    }

    profileButton.addEventListener('click', function() {
        toggleProfileCard();
    });

    document.addEventListener('click', function(event) {
        if (!profileButton.contains(event.target) && !profileCard.contains(event.target)) {
            profileCard.style.display = 'none';
        }
    });

    
});
