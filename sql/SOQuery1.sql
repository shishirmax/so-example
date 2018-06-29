--https://stackoverflow.com/questions/51090407/replace-value-by-group-with-condition-in-sql
CREATE TABLE dataset(
	Col1 VARCHAR(10),
	Col2 VARCHAR(10)
	) 

INSERT dataset(Col1,Col2)
VALUES
('A','Yes'),
('A','Yes'),
('A','NULL'),
('B','NULL'),
('B','NULL'),
('B','NULL'),
('C','NULL'),
('C','Yes')

SELECT * FROM dataset

UPDATE dataset
SET Col2 = NULL
WHERE Col2 = 'NULL'

/*
Required output:
If the value in Col2 is "Yes" for a specific group such as "A", then replace the NULL values with "No". 
If the Group does not have a "Yes" present, then keep as NULL

Col1    Col2
   A     Yes
   A     Yes
   A      No
   B    NULL
   B    NULL
   B    NULL
   C      No
   C     Yes
*/


SELECT col1,col2
FROM dataset
WHERE col1 IN(SELECT col1 FROM dataset WHERE col2 = 'Yes') AND col2 IS NULL

SELECT
    col1,  
    CASE 
        WHEN col1 IN(SELECT col1 FROM dataset WHERE col2 = 'Yes') AND col2 IS NULL THEN 'No'
        ELSE col2
    END col2
FROM dataset

UPDATE dataset
SET col2 = 'No'
WHERE col2 IS NULL
AND EXISTS (
SELECT *
FROM dataset a
WHERE dataset.col1 = a.col1
AND  col2 = 'Yes')

SELECT * FROM dataset