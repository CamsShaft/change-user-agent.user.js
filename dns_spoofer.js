// @name DNS Spoofer
// @description Redirects spoofed domains to fake IPs
// @author YourName
// @version 1.0
// @match *://*/*

// Define the spoofed domains and their fake IPs
const spoofedDomains = {
    "microsoft.com": "198.182.196.56",
    "www.microsoft.com": "198.182.196.56",
    "alor.org": "127.0.0.1",
    "naga.org": "127.0.0.1"
};

// Get the current hostname
let currentDomain = window.location.hostname;

// Check if the domain is in the spoof list
if (spoofedDomains[currentDomain]) {
    console.log("Spoofing " + currentDomain + " -> " + spoofedDomains[currentDomain]);

    // Redirect the user to the fake IP
    window.location.href = "http://" + spoofedDomains[currentDomain];
}
