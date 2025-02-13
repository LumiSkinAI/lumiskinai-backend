import pool from "../utils/database";

export const findAll = () => {
    return pool.execute("SELECT * FROM users");
};
