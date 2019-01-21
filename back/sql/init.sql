CREATE DATABASE activitesecolo CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE USER 'activitesecolo'@'localhost' IDENTIFIED BY 'activitesecolo';

GRANT ALL PRIVILEGES ON activitesecolo.* TO 'activitesecolo'@'localhost';