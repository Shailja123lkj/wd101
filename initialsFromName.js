function createInitialsFromName(name) {
    let nameParts = name.trim().split(" ");
     // splitter is space
    //single-word case
    if (nameParts.length === 1) {
        return nameParts[0].slice(0, 2).toUpperCase(); 
        // Return first two letters
    }

    // two-word case
    if (nameParts.length === 2) {
        return (nameParts[0][0] + nameParts[1][0]).toUpperCase(); 
        // Return first letter of each word
    }

    /more than two-word case
    if (nameParts.length > 2) {
        return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase(); // First and last word initials
    }
}

// Example 
console.log(createInitialsFromName("John Doe Honai"));  // Output: "JH"
console.log(createInitialsFromName("Jennifer"));//Outut:"JE"
console.log(createInitialsFromName("Jai Shree Krishna"));//Outut:"Jk"
console.log(createInitialsFromName("Los Angela"));//Outut:"LA"
//can able to take any example
//milestone completed
