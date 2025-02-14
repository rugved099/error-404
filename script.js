document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("prediction-form");
    const resultSection = document.getElementById("result-section");
    const resultText = document.getElementById("result-text");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const gpa = document.getElementById("gpa").value;
        const location = document.getElementById("location").value;
        const income = document.getElementById("income").value;
        const skills = document.getElementById("skills").value;

        if (gpa && location && income && skills) {
            resultText.textContent = `Processing data for GPA: ${gpa}, Location: ${location}, Income: ${income}, Skills: ${skills}`;
            resultSection.classList.remove("hidden");
        } else {
            alert("Please fill in all fields.");
        }
    });
});
