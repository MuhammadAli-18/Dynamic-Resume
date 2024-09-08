document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate resume
    var resumeHtml = "\n        <h1>".concat(name, "</h1>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h2>Education</h2>\n        <p>").concat(education, "</p>\n        <h2>Work Experience</h2>\n        <p>").concat(experience, "</p>\n        <h2>Skills</h2>\n        <p>").concat(skills, "</p>\n    ");
    // Display resume
    document.getElementById('resume-output').innerHTML = resumeHtml;
});
