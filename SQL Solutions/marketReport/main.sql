CREATE PROCEDURE marketReport()
BEGIN
	SELECT IFNULL(country, 'Total:') AS country,
  COUNT(country) as competitors
  FROM foreignCompetitors
  GROUP BY country WITH ROLLUP;
END
