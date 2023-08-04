let userPrompt = require('prompt-sync')();



interface Marks {
  [key: string]: number;
}

function getGrade(marks: number):  string {
    if (marks >= 90) {
        return 'A+';
      } else if (marks >= 80) {
        return 'A';
      } else if (marks >= 70) {
        return 'B';
      } else if (marks >= 60) {
        return 'C';
      } else if (marks >= 50) {
        return 'D';
      } else {
        return 'F';
      }
}

function calculateGrades(): void {
  let subjects = ['Database', 'OOP', 'Web Development','Artificial Intelligence '];
  let marks: Marks = {};

  subjects.forEach((subject) => {
    let input = parseFloat(userPrompt(`Enter ${subject} Marks: `));
    if (isNaN(input) || input < 0 || input > 100) {
      console.log('Invalid input! Please enter a valid mark between 0 and 100.');
      process.exit(1);
    }
    marks[subject] = input;
  });

  let totalMarks = Object.values(marks).reduce((sum, mark) => sum + mark, 0);
  let averageMarks = totalMarks / subjects.length;

  console.log('\nSubject-wise Grades:');
  for (let subject in marks) {
    console.log(`${subject}: ${getGrade(marks[subject])}`);
  }

  console.log('\nAverage Marks:', averageMarks.toFixed(2));
  console.log('Average Grade:', getGrade(averageMarks));
}

calculateGrades();
