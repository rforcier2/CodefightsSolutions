CREATE PROCEDURE securityBreach()
BEGIN
	SELECT *
    FROM users
    WHERE attribute REGEXP CONCAT('.%', BINARY(first_name), '_', BINARY(second_name), '%')
    ORDER BY attribute ASC;
END
