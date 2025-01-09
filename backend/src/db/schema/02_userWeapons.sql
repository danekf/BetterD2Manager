DROP TABLE IF EXISTS user_weapons CASCADE;

CREATE TABLE user_weapons (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  weapon_name VARCHAR(255),
)