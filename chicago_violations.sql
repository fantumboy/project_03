drop table chicago;

create table chicago (
	INTERSECTION varchar, 
	CAMERA_ID varchar, 
	ADDRESS varchar, 
	VIOLATION_DATE date,
	VIOLATIONS int, 
	LATITUDE float, 
	LONGITUDE float, 
	Zip_Codes float
);

select * from chicago;

drop table yearmonth;

create table yearmonth (
	INTERSECTION varchar, 
	CAMERA_ID varchar, 
	ADDRESS varchar, 
	VIOLATION_DATE date,
	VIOLATIONS int, 
	LATITUDE float, 
	LONGITUDE float, 
	Zip_Codes float,
	year int,
	month int
);

select count(*) from yearmonth where year = 2019;

