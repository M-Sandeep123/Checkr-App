-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema checkr
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema checkr
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `checkr` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `checkr` ;

-- -----------------------------------------------------
-- Table `checkr`.`candidate`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`candidate` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `dob` DATE NULL DEFAULT NULL,
  `phone_no` VARCHAR(45) NULL DEFAULT NULL,
  `zipcode` INT NULL DEFAULT NULL,
  `social_security` VARCHAR(45) NULL DEFAULT NULL,
  `driver_license` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkr`.`adverse_actions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`adverse_actions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `action_status` ENUM('scheduled', 'pending', 'cancelled') NULL DEFAULT NULL,
  `pre_notice_date` DATE NULL DEFAULT NULL,
  `post_notice_date` DATE NULL DEFAULT NULL,
  `action_update_time` DATETIME NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `candidate_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_adverse_actions_candidate1_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `fk_adverse_actions_candidate1`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `checkr`.`candidate` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkr`.`court_searches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`court_searches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkr`.`candidate_court_searches`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`candidate_court_searches` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` ENUM('clear', 'consider') NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `candidate_id` INT NOT NULL,
  `court_searches_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_candidate_court_searches_candidate_idx` (`candidate_id` ASC) VISIBLE,
  INDEX `fk_candidate_court_searches_court_searches1_idx` (`court_searches_id` ASC) VISIBLE,
  CONSTRAINT `fk_candidate_court_searches_candidate`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `checkr`.`candidate` (`id`),
  CONSTRAINT `fk_candidate_court_searches_court_searches1`
    FOREIGN KEY (`court_searches_id`)
    REFERENCES `checkr`.`court_searches` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkr`.`report`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`report` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `package` VARCHAR(45) NULL DEFAULT NULL,
  `adjudication` ENUM('engage', 'adverse action') NULL DEFAULT NULL,
  `status` ENUM('clear', 'consider') NULL DEFAULT NULL,
  `completed_date` DATETIME NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  `candidate_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_report_candidate1_idx` (`candidate_id` ASC) VISIBLE,
  CONSTRAINT `fk_report_candidate1`
    FOREIGN KEY (`candidate_id`)
    REFERENCES `checkr`.`candidate` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `checkr`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `checkr`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(45) NULL DEFAULT NULL,
  `password` VARCHAR(45) NULL DEFAULT NULL,
  `first_name` VARCHAR(45) NULL DEFAULT NULL,
  `last_name` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `dob` DATE NULL DEFAULT NULL,
  `company_name` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


INSERT INTO checkr.user (id, user_name, password, first_name, last_name, email, dob, company_name, created_at, updated_at)
VALUES (1, 'James Rodriguez', 'James@123', 'James', 'Rodriguez', 'James.co', '1990-06-20', 'Checkr', NOW(), NOW());


INSERT INTO checkr.candidate (id, name, location, email, dob, phone_no, zipcode, social_security, driver_license, created_at, updated_at)
VALUES
(1, 'John Smith', 'Barrouallie', 'John.smith@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(2, 'Serene', 'Vänersborg', 'serene@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(3, 'Walsh', 'Sukamanah', 'walsh@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(4, 'Maurizia', 'Sukamanah', 'maurizia@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(5, 'Kendre', 'Beutong Ateuh', 'kendre@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(6, 'Erastus', 'Höviyn Am', 'erastus@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(7, 'Jereme', 'Sharïngol', 'jereme@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(8, 'John Smith', 'Lianyun', 'johnsmith@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(9, 'Cari', 'Taboão da Serra', 'cari@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW()),
(10, 'Kimble', 'Veselí nad Moravou', 'kimble@checkr.com', '1990-06-20', '(555) 555-5555', 94158, '123-322-6789', 'FTEST1111 (CA)', NOW(), NOW());

INSERT INTO checkr.adverse_actions (id, action_status, pre_notice_date, post_notice_date, action_update_time, created_at, updated_at, candidate_id)
VALUES
(1, 'Scheduled', '2022-02-23', '2022-02-23', NOW(), NOW(), NOW(), 1),
(2, 'Scheduled', '2022-03-13', '2022-03-13', NOW(), NOW(), NOW(), 2),
(3, 'Scheduled', '2023-06-01', '2023-06-01', NOW(), NOW(), NOW(), 3),
(4, 'Scheduled', '2022-02-21', '2022-02-21', NOW(), NOW(), NOW(), 4),
(5, 'Scheduled', '2023-05-19', '2023-05-19', NOW(), NOW(), NOW(), 5),
(6, 'Scheduled', '2021-12-02', '2021-12-02', NOW(), NOW(), NOW(), 6),
(7, 'Scheduled', '2023-06-26', '2023-06-26', NOW(), NOW(), NOW(), 7),
(8, 'Scheduled', '2023-05-27', '2023-05-27', NOW(), NOW(), NOW(), 8),
(9, 'Scheduled', '2023-05-21', '2023-05-21', NOW(), NOW(), NOW(), 9),
(10, 'Scheduled', '2023-12-23', '2023-12-23', NOW(), NOW(), NOW(), 10);


INSERT INTO checkr.court_searches (id, name, created_at, updated_at)
VALUES
(1, 'SSN Verification', NOW(), NOW()),
(2, 'Sex Offender', NOW(), NOW()),
(3, 'Global Watchlist', NOW(), NOW()),
(4, 'Federal Criminal', NOW(), NOW()),
(5, 'County Criminal', NOW(), NOW());

INSERT INTO checkr.candidate_court_searches (id, status, created_at, updated_at, candidate_id, court_searches_id)
VALUES
(1, 'clear', NOW(), NOW(), 1, 1),
(2, 'clear', NOW(), NOW(), 1, 2),
(3, 'consider', NOW(), NOW(), 1, 3),
(4, 'clear', NOW(), NOW(), 1, 4),
(5, 'clear', NOW(), NOW(), 1, 5);

INSERT INTO checkr.report (id, package, adjudication, status, completed_date, created_at, updated_at, candidate_id)
VALUES
(1, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 1),
(2, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 2),
(3, 'Employee pro', NULL, 'Consider', NOW(), NOW(), NOW(), 3),
(4, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 4),
(5, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 5),
(6, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 6),
(7, 'Employee pro', NULL, 'Consider', NOW(), NOW(), NOW(), 7),
(8, 'Employee pro', NULL, 'Consider', NOW(), NOW(), NOW(), 8),
(9, 'Employee pro', NULL, 'Clear', NOW(), NOW(), NOW(), 9),
(10, 'Employee pro', NULL, 'Consider', NOW(), NOW(), NOW(), 10);