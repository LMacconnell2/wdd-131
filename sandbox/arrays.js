//arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>` // add the html
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to html
document.querySelector("#mylist").innerHTML = stepsHtml.join("");//set the inner HTML
// build dynamic elements in the HTML file before adding them into the javascript. That way, you will be able to copy that over. 

const grades = ["A", "B", "A"]
function gradeGpa(calc) {
    if (calc == "A") {
        calc = "4.0";
    }
    else {
        calc = "3.0";
    }
    return `<li>${calc}</li>`;
}

const gradesHtml = grades.map(gradeGpa);
document.querySelector("#mylist").innerHTML = gradesHtml.join("");