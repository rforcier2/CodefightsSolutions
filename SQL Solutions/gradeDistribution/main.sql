CREATE PROCEDURE gradeDistribution()
BEGIN
	SELECT Name, ID
   FROM Grades
   WHERE FINAL > Midterm1* 0.5 + Midterm2*0.5
   ORDER BY SUBSTRING(name, 1,3) ASC, ID ASC;
END
