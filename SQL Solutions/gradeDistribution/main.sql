CREATE PROCEDURE gradeDistribution()
BEGIN
  SELECT Name, ID
  FROM Grades
  WHERE FINAL > 0.5*(Midterm1 + Midterm2)
  ORDER BY LEFT(name, 3) ASC, ID ASC;
END
