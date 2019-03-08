-- ORIGINAL CODE:
-- CREATE PROCEDURE automaticNotifications()
--     SELECT email
--     FROM users
--     WHERE [...] ("admin", "premium")
--
--     ORDER BY email;


-- SOLUTION: (Replacing the [...] with SQL)
CREATE PROCEDURE automaticNotifications()
    SELECT email
    FROM users
    WHERE LOWER(role) NOT IN ("admin", "premium")

    ORDER BY email;
