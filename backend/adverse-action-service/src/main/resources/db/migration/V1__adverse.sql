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