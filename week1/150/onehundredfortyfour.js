/**
 * Function to break down a URL address into protocol, domain, and optional path
 * @param {string} url_add - The URL address to be broken down
 * @returns {array} - An array containing protocol, domain, and optional path (if available)
 */
function break_address(url_add) {
    // Splitting the URL to separate protocol and the rest of the address
    var data = url_add.split("://");
    var protocol = data[0];
    
    // Splitting the rest of the address to extract domain and possible path
    data = data[1].split(".com");
    var domain = data[0];
    
    // Splitting the address after .com to extract the path if available
    data = data[1].split("/");

    // Checking if a path exists and returning the relevant parts
    if (data[1]) {
        return [protocol, domain, data[1]];
    }

    // Returning protocol and domain if path doesn't exist
    return [protocol, domain];
}

// Sample URL address
var url_add = "https://www.w3resource.com/javascript-exercises/";

// Display original address
console.log("Original address: " + url_add);

// Display the broken down parts of the address
console.log(break_address(url_add)); 
