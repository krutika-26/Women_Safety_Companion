let map;
let userLocation;

// Initialize Google Map without fetching the location initially
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: { lat: 0, lng: 0 }  // Default center if location is not available
    });
}

// Event listener for Panic Button
document.getElementById("panicButton").addEventListener("click", function () {
    // Fetch the location when the panic button is clicked
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            // Update the UI with the latest location details
            document.getElementById("locationLat").textContent = `Latitude: ${userLocation.lat}`;
            document.getElementById("locationLng").textContent = `Longitude: ${userLocation.lng}`;

            // Prepare the message for the SOS email
            const message = `Panic Alert! \n\nLocation: Lat: ${userLocation.lat}, Lng: ${userLocation.lng}\n\nPlease help!`;

            // Set the message content dynamically in the hidden form field
            document.getElementById("sosMessage").value = message;
            
            // Set the location content dynamically in the hidden form field
            document.getElementById("sosLocation").value = `Lat: ${userLocation.lat}, Lng: ${userLocation.lng}`;
            
            // Submit the form to Formspree to send the email
            document.getElementById("sosForm").submit();
        }, function(error) {
            alert("Unable to fetch your location. Please check your browser's permissions.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
});

  