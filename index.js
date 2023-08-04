var userPrompt = require('prompt-sync')();
function getGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    }
    else if (marks >= 80) {
        return 'A';
    }
    else if (marks >= 70) {
        return 'B';
    }
    else if (marks >= 60) {
        return 'C';
    }
    else if (marks >= 50) {
        return 'D';
    }
    else {
        return 'F';
    }
}
function calculateGrades() {
    var subjects = ['Database', 'OOP', 'Web Development', 'Artificial Intelligence '];
    var marks = {};
    subjects.forEach(function (subject) {
        var input = parseFloat(userPrompt("Enter ".concat(subject, " Marks: ")));
        if (isNaN(input) || input < 0 || input > 100) {
            console.log('Invalid input! Please enter a valid mark between 0 and 100.');
            process.exit(1);
        }
        marks[subject] = input;
    });
    var totalMarks = Object.values(marks).reduce(function (sum, mark) { return sum + mark; }, 0);
    var averageMarks = totalMarks / subjects.length;
    console.log('\nSubject-wise Grades:');
    for (var subject in marks) {
        console.log("".concat(subject, ": ").concat(getGrade(marks[subject])));
    }
    console.log('\nAverage Marks:', averageMarks.toFixed(2));
    console.log('Average Grade:', getGrade(averageMarks));
}
calculateGrades();
