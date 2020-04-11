CREATE TABLE IF NOT EXISTS users (
  id            char(32) PRIMARY KEY,
  first_name    varchar(255) NOT NULL,
  last_name     varchar(255) NOT NULL,
  username      varchar(255) UNIQUE NOT NULL,
  email         varchar(255) UNIQUE NOT NULL,
  password      varchar(255) NOT NULL,
  time_created  timestampz NOT NULL,
  time_actived  timestampz NOT NULL
);

CREATE TABLE IF NOT EXISTS users_dev (
  id            char(32) PRIMARY KEY,
  first_name    varchar(255) NOT NULL,
  last_name     varchar(255) NOT NULL,
  username      varchar(255) UNIQUE NOT NULL,
  email         varchar(255) UNIQUE NOT NULL,
  password      varchar(255) NOT NULL,
);
