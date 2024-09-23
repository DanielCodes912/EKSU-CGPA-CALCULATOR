// DOM(Document Object Model)
// Select the form and CGPA list elements
const cgpaForm = document.getElementById('cgpa-form');
const cgpaList = document.getElementById('cgpa-list');

// Event listener for form submission
cgpaForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent page reload on form submission

    // Get the input values for grades and units
    const grades = document.getElementById('grades').value.trim().split(" ");
    const units = document.getElementById('units').value.trim().split(" ").map(Number);

    // Check if input values are valid
    if (grades.length !== units.length) {
        alert('Please enter grades and units for the same number of courses.');
        return;
    }

    // Map of grade values to their corresponding credit scores
    const gradeToScore = {
        'A': 5,
        'B': 4,
        'C': 3,
        'D': 2,
        'E': 1,
        'F': 0
    };

    let totalPoints = 0;
    let totalUnits = 0;

    // Loop through grades and units to calculate CGPA
    for (let i = 0; i < grades.length; i++) {
        const grade = grades[i].toUpperCase();
        const unit = units[i];

        // Ensure valid grade and unit
        if (!gradeToScore.hasOwnProperty(grade) || unit < 1 || unit > 200) {
            alert('Invalid grade or unit entered.');
            return;
        }

        // Calculate total points and units
        totalPoints += gradeToScore[grade] * unit;
        totalUnits += unit;
    }

    // Calculate CGPA
    const cgpa = (totalPoints / totalUnits).toFixed(2);

    // Create a new list item to display the calculated CGPA
    const newCgpaItem = document.createElement('li');
    newCgpaItem.textContent = `Calculated CGPA: ${cgpa}`;

    // Append the new CGPA to the CGPA list
    cgpaList.appendChild(newCgpaItem);

    // Reset the form inputs
    cgpaForm.reset();
});
