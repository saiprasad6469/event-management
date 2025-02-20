// Function to generate a random student ID
function generateID() {
    // Generate a random ID and display it in the 'studentID' element
    const randomID = `STU-${Math.floor(Math.random() * 100000)}`;
    document.getElementById('studentID').innerText = randomID;
}

// Function to download the generated student ID as a text file
function downloadID() {
    const studentID = document.getElementById('studentID').innerText;

    if (!studentID) {
        alert("Please generate a Student ID first.");
        return;
    }

    // Create a blob with the student ID text
    const element = document.createElement('a');
    const file = new Blob([`Student ID: ${studentID}`], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Student_ID.txt'; // Name the download file
    element.click(); // Trigger the download
}

// Function to reset the form and clear the student ID
function closeForm() {
    // Reset the form fields
    document.querySelector('.registration-form').reset();

    // Clear the displayed student ID
    document.getElementById('studentID').innerText = '';
}
