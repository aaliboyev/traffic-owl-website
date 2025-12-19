import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

// Initialize the contacts table
export async function initDb() {
  await db.execute(`
		CREATE TABLE IF NOT EXISTS contacts (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			email TEXT NOT NULL,
			organization TEXT,
			phone TEXT,
			project_type TEXT,
			message TEXT NOT NULL,
			wants_demo INTEGER DEFAULT 0,
			created_at TEXT DEFAULT (datetime('now'))
		)
	`);
}
