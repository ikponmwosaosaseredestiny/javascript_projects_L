// GPA calculator
// grades equivalent value
// A --- 5
// B --- 4
// C --- 3
// D --- 2
// E --- 1

let grades = [
    {
        course_code: "chmm111",
        grade: "A",
        credit: 3
    },
    {
        course_code: "chmm112",
        grade: "A",
        credit: 3
    },
    {
        course_code: "mth110",
        grade: "A",
        credit: 3
    },
    {
        course_code: "mth112",
        grade: "B",
        credit: 3
    },
    {
        course_code: "phy111",
        grade: "B",
        credit: 2
    },
]



const calculate_gpa = () => {
    let grade_sums = [];
    grade_value = 0;
    let total_credit = 0;

    if (grades.length == 0) return console.log('Please input your grades before you continue!')

    for (let i = 0; i < grades.length; i++) {

        total_credit += grades[i].credit;

        switch (grades[i].grade.toUpperCase()) {
            case "A":
                grade_value = grades[i].credit * 5;
                break;
            case "B":
                grade_value = grades[i].credit * 4;
                break;
            case "C":
                grade_value = grades[i].credit * 3;
                break;
            case "D":
                grade_value = grades[i].credit * 2;
                break;
            case "E":
                grade_value = grades[i].credit * 1;
                break;
        }

        grade_sums.push(grade_value);

    }

    let grade_sum = 0;
    grade_sums.map((item, index) => {
        grade_sum += item;
    })

    let user_gpa = grade_sum / total_credit;
    console.log(user_gpa.toPrecision(3))
}



calculate_gpa()