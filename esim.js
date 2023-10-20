function openUAEPassApp() {
    window.location.replace('uaepassstg://redirect_uri=https://www.etisalat.ae/b2c/uae-pass-login.html&client_id=etisalat_web_prod&response_type=code&scope=urn:uae:digitalid:profile:general&acr_values=urn:safelayer:tws:policies:authentication:level:low&ui_locales=en&state=WEB');
}
document.addEventListener('click', function(event) {
    var target = event.target;
    var urlString = target.href || '';

    // Simulate your viewModel handling the URL
    handleURL(urlString);

    if (target.tagName === 'A') {
        if (target.protocol === 'http:' || target.protocol === 'https:') {
            // Check if the URL can be opened (may not work in all browsers)
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', urlString, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // URL is valid, open it
                        window.open(urlString, '_blank');
                    } else {
                        // URL is not valid, allow the default behavior
                        location.href = urlString;
                    }
                }
            };
            xhr.send();
            event.preventDefault(); // Prevent the default behavior
        }
    }
});

function handleURL(url) {
    if (url.includes('signature')) {
        console.log('URL contains the word "signature".');
        // Add your specific logic here for URLs containing "signature"
    } else {
        console.log('URL does not contain the word "signature".');
        // Add your logic for URLs that do not contain "signature", if needed
    }
}

