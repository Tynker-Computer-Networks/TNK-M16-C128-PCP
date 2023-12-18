// Include jQuery from CDN
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
document.head.appendChild(script);

// Add variable to check if advertisement is added and set it to false
var advertisementAdded = false;

// Check if the advertisement exists using flag variable
if (advertisementAdded == false) {
    
    // HTML code for the advertisement div
    var advertisementHTML = '<img style="width: 45%" src="https://s3-whjr-curriculum-uploads.whjr.online/8c849248-90b4-4752-93b4-8bdc0ae5a2cb.png">';

    // Append the HTML code to the body
    $('body').append(advertisementHTML);

    // Set the flag to true to indicate that the advertisement has been added
    advertisementAdded = true;
}
