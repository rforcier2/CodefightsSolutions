-- ORIGNIAL:
-- CREATE PROCEDURE websiteHacking()
--     SELECT id,login,name
--     FROM users
--     WHERE type='user'
--     [...]
--     ORDER BY id

-- SOLUTION:
CREATE PROCEDURE websiteHacking()
    SELECT id,login,name
    FROM users
    WHERE type='user'
    OR NOT type='user'
    ORDER BY id
