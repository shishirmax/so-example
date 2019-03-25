--https://stackoverflow.com/questions/55331762/how-can-i-write-the-sql-query-to-get-the-result-set-get-the-result-set-from-the

CREATE TABLE MaxTime
(
	Name	VARCHAR(100)
	,Longititue   VARCHAR(100)
	,latutute        VARCHAR(100)
	,Time		time
)

SELECT * FROM MaxTime

SELECT MAX(time),Name FROM MaxTime
GROUP BY Name

WITH CTE AS
(
	SELECT Name,Longititue,latutute,Time,DENSE_RANK() OVER(PARTITION BY Name ORDER BY time desc) as RN
	FROM MaxTime
)
SELECT * FROM CTE
WHERE RN = 1

INSERT INTO MaxTime
VALUES
('tharindu','79.94148','6.9748404','00:15:47')
,('shane','79.8630765','6.8910388','13:23:24')
,('shane','79.862815','6.8909349','14:41:29')
,('shane','79.8628665','6.8911084','09:39:33')
,('shane','79.8626956','6.890992','11:00:07')
,('shane','79.8628831','6.89099','11:43:00')