RENAME TABLE activites TO activite;
ALTER TABLE activite ADD COLUMN date DATETIME NULL AFTER date_publication;
ALTER TABLE activite DROP COLUMN association;
ALTER TABLE activite CHANGE description_activites description VARCHAR (250);
ALTER TABLE association CHANGE description_association description VARCHAR (200);
ALTER TABLE association CHANGE password password CHAR (60); 