import sqlite3 from "sqlite3";

export default function createConnection() {
  const db = new sqlite3.Database("mood-testing.db");
  return db;
}
