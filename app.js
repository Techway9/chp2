function analyzeSentence(sentence) {
    // Initialize counters
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Define a string of vowels for checking
    const vowels = "aeiouAEIOU";

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        // Stop when a period is encountered
        if (char === ".") {
            break;
        }

        // Count each character
        length++;

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }

        // Count words when a space is encountered
        if (char === " ") {
            wordCount++;
        }
    }

    // Add 1 to word count to account for the last word
    wordCount++;

    // Display results
    console.log("Length of the sentence:", length);
    console.log("Number of words:", wordCount);
    console.log("Number of vowels:", vowelCount);
}

// Example usage
let sentence = "This is a simple example.";
analyzeSentence(sentence);
