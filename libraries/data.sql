CREATE DATABASE IF NOT EXISTS 'safetytest';

CREATE TABLE IF NOT EXISTS 'testqa' (
    PossibleQuestions varchar(255);
    answers1 varchar(255);
    answers2 varchar(255);
    answers3 varchar(255);
    answers4 varchar(255);
)

INSERT INTO 'testqa' (PossibleQuestions, answers1, answers2, answers3, answers4) 
    VALUES ("What types of things are MSDSs used for?", 0, 0, 0, 0),
    ("What is the unabbreviated form of PPE?", 0, 0, 0, 0),
    ("In what situations do you need proper ventilation?", 0, 0, 0, 0),
    ("In what situations do you need to wear a filter mask?")
    ("What are the most important attributes for safety?", 0, 0, 0, 0),
    ("Which of the following should always be available?", 0, 0, 0, 0),
    ("What is a MSDS?", 0, 0, 0, 0),
    ("Which of the following things should always be followed?", 0, 0, 0, 0),
    ("What risks are inherent in lead-acid batteries?", 0, 0, 0, 0),
    ("What is the job of the Safety Captain?", 0, 0, 0, 0),
    ("When do you NOT use a potentially dangerous tool?", 0, 0, 0, 0),
    ("Which of the following are proper PPE for usage of an angle grinder?", 0, 0, 0, 0),
    ("Which of the following are adequate PPE for normal robot assembly?", 0, 0, 0, 0),
    ("What items should go in the Safety Binder?", 0, 0, 0, 0),
    ("What shouldn't be done for proper electicity use?", 0, 0, 0, 0),
    ("Which of the following items should always be available?", 0, 0, 0, 0),
    ("What items should be noted on a MSDS?", 0, 0, 0, 0),
    ("What person should you go to for safety guidance/instruction?", 0, 0, 0, 0);