-- ORIGINAL TO ALTER:

-- DROP PROCEDURE IF EXISTS legsCount;
-- CREATE PROCEDURE legsCount()
--     SELECT [..] as summary_legs
--     FROM creatures
--     ORDER BY id;

-- SOLUTION:
DROP PROCEDURE IF EXISTS legsCount;
CREATE PROCEDURE legsCount()
    SELECT SUM(CASE WHEN type='human' THEN 2 ELSE 4 END) as summary_legs
    FROM creatures
    ORDER BY id;

-- ANOTHER CLEVER SOLUTION USING ONLY IF:
-- DROP PROCEDURE IF EXISTS legsCount;
-- CREATE PROCEDURE legsCount()
--     SELECT SUM( IF(type='human', 2, 4) ) as summary_legs
--     FROM creatures
--     ORDER BY id;
