// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    credits: 3,
    sections: 
    [
        { 
        sectionNum: 1, 
        roomNum: 'STC 353', 
        enrolled: 26, 
        days: 'TTh', 
        instructor: 'Bro T'
        },{ 
        sectionNum: 2, 
        roomNum: 'STC 347', 
        enrolled: 28, 
        days: 'TTh', 
        instructor: 'Sis A'
        }
    ],
    enrollStudent: function(sectionNum) {
        console.log(sectionNum);
        console.log(this.sections);
    }
  };

const section1 = aCourse.sections.find(section => section.sectionNum == 1);

function addCourseName(aCourse){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");
    courseName.innerHTML = aCourse.name;
    courseCode.innerHTML = aCourse.code;
}

aCourse.sections.forEach(section => {
    document.querySelector("#sections").insertAdjacentHTML("beforeend", `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
    )
});

addCourseName(aCourse);
document.querySelector("#enrollStudent").addEventListener('click', function() {
    aCourse.enrollStudent(1);
})