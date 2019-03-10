CREATE PROCEDURE newsSubscribers()
BEGIN
    SELECT DISTINCT subscriber
    FROM full_year
    WHERE newspaper LIKE '%daily%'

    UNION

    SELECT DISTINCT subscriber
    FROM half_year
    WHERE newspaper LIKE '%daily%'

    ORDER BY subscriber;
END
