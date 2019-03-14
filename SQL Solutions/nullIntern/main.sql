CREATE PROCEDURE nullIntern()
BEGIN
	SELECT COUNT(*) AS number_of_nulls
    FROM departments
    WHERE description IS NULL
    OR LOWER(TRIM(description)) IN ('null', 'nil', '-');
END
