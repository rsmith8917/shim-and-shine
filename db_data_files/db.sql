-- MySQL Script generated by MySQL Workbench
-- Wed Aug  1 09:43:02 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `db` ;

-- -----------------------------------------------------
-- Schema db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db` DEFAULT CHARACTER SET utf8 ;
USE `db` ;

-- -----------------------------------------------------
-- Table `db`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `db`.`users` ;

CREATE TABLE IF NOT EXISTS `db`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL,
  `lastName` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `passwordHash` VARCHAR(100) NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `idusers_UNIQUE` (`id` ASC))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `db`.`users`
-- -----------------------------------------------------
START TRANSACTION;
USE `db`;
INSERT INTO `db`.`users` (`id`, `firstName`, `lastName`, `email`, `passwordHash`, `username`) VALUES (1, 'Robert', 'Smith', 'rsmith8917@gmail.com', '$2b$10$t.u2eGrXRFd2dCnQBbtAK.Lr6dIlRyA4pH36wd9sXdxkc7S6vF4Vi', 'rsmith8917@gmail.com');

COMMIT;

