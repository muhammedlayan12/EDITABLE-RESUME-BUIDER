document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeOutput = document.getElementById('resumeOutput');
    var downloadLink = document.getElementById('downloadLink');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var aboutMe = document.getElementById('aboutMe').value;
        var education = document.getElementById('education').value;
        var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
        var workExperience = document.getElementById('workExperience').value;
        var projects = document.getElementById('projects').value.split(',').map(function (project) { return project.trim(); });
        var skillsList = skills.map(function (skill) { return "- ".concat(skill); }).join('\n');
        var projectsList = projects.map(function (project) { return "- Project: ".concat(project); }).join('\n');
        var resumeText = "\nName: ".concat(name, "\nEmail: ").concat(email, "\nPhone: ").concat(phone, "\n\nAbout Me:\n").concat(aboutMe, "\n\nEducation:\n").concat(education, "\n\nSkills:\n").concat(skillsList, "\n\nWork Experience:\n").concat(workExperience, "\n\nProjects:\n").concat(projectsList, "\n        ");
        var resumeHTML = "\n            <header class=\"personal-info editable\" contenteditable=\"true\">\n                <h1>".concat(name, "</h1>\n                <p>Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n                <p>Phone: <a href=\"tel:").concat(phone, "\">").concat(phone, "</a></p>\n            </header>\n            <section class=\"about-me editable\" contenteditable=\"true\">\n                <h2>About Me</h2>\n                <p>").concat(aboutMe, "</p>\n            </section>\n            <section class=\"education editable\" contenteditable=\"true\">\n                <h2>Education</h2>\n                <p>").concat(education, "</p>\n            </section>\n            <section class=\"skills editable\" contenteditable=\"true\">\n                <h2>Skills</h2>\n                <ul>\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                </ul>\n            </section>\n            <section class=\"work-experience editable\" contenteditable=\"true\">\n                <h2>Work Experience</h2>\n                <p>").concat(workExperience, "</p>\n            </section>\n            <section class=\"projects editable\" contenteditable=\"true\">\n                <h2>Projects</h2>\n                <ul>\n                    ").concat(projects.map(function (project) { return "<li><strong>Project:</strong> ".concat(project, "</li>"); }).join(''), "\n                </ul>\n            </section>\n        ");
        resumeOutput.innerHTML = resumeHTML;
        var blob = new Blob([resumeText], { type: 'text/plain' });
        var url = URL.createObjectURL(blob);
        downloadLink.href = url;
        downloadLink.download = 'resume.txt';
    });
});
