CREATE TABLE IF NOT EXISTS users (
  id            char(36) PRIMARY KEY,
  first_name    varchar(255) NOT NULL,
  last_name     varchar(255) NOT NULL,
  username      varchar(255) UNIQUE NOT NULL,
  email         varchar(255) UNIQUE NOT NULL,
  password      varchar(255) NOT NULL,
  refresh_token text NOT NULL,
  time_created  timestamptz DEFAULT now(),
  time_actived  timestamptz DEFAULT now()
);

INSERT INTO users VALUES (
  '00000000-0000-0000-0000-000000000000',
  'James',
  'Bond',
  'jamesbond',
  'jamesbond@gmail.com',
  '$2b$10$giaS5kXc/.BCtC/KdRzvW..B8zA/V3djEc4eeDyWYjAd5UWXs9FbW',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZDMzNjNmLWRjNmItNDAyMS1hNWYxLTMwNzY1ZjFkNGZlNCIsImlhdCI6MTU4NjU3NTYzMn0.LdOJV4bEPTmcOgFOGmK5BMsFrbSxIwuMnA13039vYf4'
);

-- \x expanded display mode
SELECT * FROM users;

SELECT * FROM users1;

DROP TABLE users;
