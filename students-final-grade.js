function finalGrade(examGrade, numOfProjects) {
  if (examGrade > 90 || numOfProjects > 10) {
    return 100;
  }
  if (examGrade > 75 && numOfProjects >= 5) {
    return 90;
  }
  if (examGrade > 50 && numOfProjects >= 2) {
    return 75;
  }
  return 0;
}

console.log(finalGrade(100, 12), 100);
console.log(finalGrade(99, 0), 100);
console.log(finalGrade(10, 15), 100);
console.log(finalGrade(85, 5), 90);
console.log(finalGrade(55, 3), 75);
console.log(finalGrade(55, 0), 0);
console.log(finalGrade(20, 2), 0);
