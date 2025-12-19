"use server";

import { db, initDb } from "@/lib/db";

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  projectType?: string;
  message: string;
  wantsDemo: boolean;
}

export interface ContactFormResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  data: ContactFormData,
): Promise<ContactFormResult> {
  try {
    // Ensure table exists
    await initDb();

    // Insert the contact form submission
    await db.execute({
      sql: `
				INSERT INTO contacts (name, email, organization, phone, project_type, message, wants_demo)
				VALUES (?, ?, ?, ?, ?, ?, ?)
			`,
      args: [
        data.name,
        data.email,
        data.organization || null,
        data.phone || null,
        data.projectType || null,
        data.message,
        data.wantsDemo ? 1 : 0,
      ],
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to submit contact form:", error);
    return {
      success: false,
      error: "Failed to submit form. Please try again.",
    };
  }
}
