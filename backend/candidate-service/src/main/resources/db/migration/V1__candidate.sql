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
