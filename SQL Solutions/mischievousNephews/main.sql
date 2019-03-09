CREATE PROCEDURE mischievousNephews()
BEGIN
    SELECT weekday(mischief_date) AS weekday, mischief_date, author, title
    FROM mischief
    ORDER BY weekday ASC,
             field(author, 'Huey','Dewey','Louie'),
             mischief_date ASC,
             title ASC;
END
