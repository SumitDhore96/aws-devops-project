function checkReadiness() {

    const tenth = Number(document.getElementById("tenth").value);
    const twelfth = Number(document.getElementById("twelfth").value);
    const diplomaInput = document.getElementById("diploma").value;
    const cgpa = Number(document.getElementById("cgpa").value);
    const internships = Number(document.getElementById("internships").value);
    const projects = Number(document.getElementById("projects").value);
    const programming = Number(document.getElementById("programming").value);
    const aptitude = Number(document.getElementById("aptitude").value);

    if (
        !tenth ||
        !twelfth ||
        !cgpa ||
        programming === 0 ||
        aptitude < 0 ||
        internships < 0 ||
        projects < 0
    ) {
        alert("Please fill all required fields.");
        return;
    }

    if (
        tenth > 100 ||
        twelfth > 100 ||
        cgpa > 10 ||
        aptitude > 100
    ) {
        alert("Please enter valid values.");
        return;
    }

    let score = 0;

    // Academic performance - 40 points
    score += (tenth / 100) * 10;
    score += (twelfth / 100) * 10;
    score += (cgpa / 10) * 20;

    // Internship - 15 points
    score += Math.min(internships, 3) * 5;

    // Projects - 15 points
    score += Math.min(projects, 3) * 5;

    // Programming - 15 points
    score += (programming / 3) * 15;

    // Aptitude - 15 points
    score += (aptitude / 100) * 15;

    score = Math.round(score);

    const strengths = [];
    const improvements = [];

    if (tenth >= 75) {
        strengths.push("Good 10th academic performance");
    } else {
        improvements.push("Improve academic performance");
    }

    if (twelfth >= 75) {
        strengths.push("Good 12th academic performance");
    } else {
        improvements.push("Strengthen academic fundamentals");
    }

    if (diplomaInput && Number(diplomaInput) >= 75) {
        strengths.push("Good diploma performance");
    }

    if (cgpa >= 8) {
        strengths.push("Strong degree CGPA");
    } else {
        improvements.push("Work on maintaining a higher CGPA");
    }

    if (internships >= 1) {
        strengths.push("Has internship experience");
    } else {
        improvements.push("Gain internship experience");
    }

    if (projects >= 2) {
        strengths.push("Good project experience");
    } else {
        improvements.push("Build more practical projects");
    }

    if (programming >= 2) {
        strengths.push("Good programming skills");
    } else {
        improvements.push("Improve programming and problem-solving skills");
    }

    if (aptitude >= 70) {
        strengths.push("Good aptitude preparation");
    } else {
        improvements.push("Practice quantitative and logical aptitude");
    }

    let category;
    let recommendation;

    if (score >= 80) {
        category = "Highly Prepared";
        recommendation =
            "You have a strong placement profile. Focus on interview preparation, DSA and advanced technical skills.";
    } else if (score >= 60) {
        category = "Moderately Prepared";
        recommendation =
            "Your profile has a good foundation. Strengthen your weaker areas and gain more practical experience.";
    } else {
        category = "Needs Improvement";
        recommendation =
            "Focus on academics, programming, projects, aptitude and internship experience to improve your placement readiness.";
    }

    document.getElementById("score").textContent = score + "/100";
    document.getElementById("category").textContent = category;

    const strengthsList = document.getElementById("strengths");
    const improvementsList = document.getElementById("improvements");

    strengthsList.innerHTML = "";
    improvementsList.innerHTML = "";

    strengths.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        strengthsList.appendChild(li);
    });

    improvements.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        improvementsList.appendChild(li);
    });

    document.getElementById("recommendation").textContent = recommendation;

    document.getElementById("result").classList.remove("hidden");

    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}
