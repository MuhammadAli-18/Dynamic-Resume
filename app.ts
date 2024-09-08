document.getElementById('resume-form')!.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate resume
    const resumeHtml = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <h2>Education</h2>
        <p>${education}</p>
        <h2>Work Experience</h2>
        <p>${experience}</p>
        <h2>Skills</h2>
        <p>${skills}</p>
    `;

    // Display resume
    (document.getElementById('resume-output') as HTMLDivElement).innerHTML = resumeHtml;
});
