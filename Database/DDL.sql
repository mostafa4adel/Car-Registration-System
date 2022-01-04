CREATE SCHEMA car_registration;

CREATE TABLE car_registration.user(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    PASSWORD VARCHAR(100) NOT NULL,
    Sex CHAR(1) NOT NULL CHECK
        (Sex = 'F' OR Sex = 'M'),
        BirthDate DATE,
        Address VARCHAR(1000) NOT NULL,
        PhoneNumber VARCHAR(10)
);

CREATE TABLE car_registration.admin(
    User_Id INT PRIMARY KEY,
    FOREIGN KEY(User_Id) REFERENCES car_registration.user(ID)
);

CREATE TABLE car_registration.Office(
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(100) NOT NULL,
    Location VARCHAR(1000) NOT NULL
);

CREATE TABLE car_registration.car(
    ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Plate VARCHAR(32),
    Model VARCHAR(32),
    Active BOOLEAN NOT NULL,
    Manufacturer VARCHAR(100),
    HorsePower INT,
    Office_Id INT NOT NULL,
    ProductionYear YEAR,
    FOREIGN KEY(Office_ID) REFERENCES car_registration.Office(ID),
    Rented BOOLEAN NOT NULL
);

CREATE TABLE car_registration.rent(
    user_id INT NOT NULL,
    car_id INT NOT NULL,
    payment CHAR(4) CHECK
        (
            payment = 'VISA' OR payment = 'CASH'
        ),
        return_date DATETIME NOT NULL,
        pickup_date DATETIME NOT NULL,
        PRIMARY KEY(user_id, car_id),
        FOREIGN KEY(user_id) REFERENCES car_registration.user(ID),
        FOREIGN KEY(car_id) REFERENCES car_registration.car(ID)
);