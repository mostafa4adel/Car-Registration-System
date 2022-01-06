select *
FROM user as u
where u.ID = (SELECT *
             from admin)