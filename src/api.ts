/**
 * API Service (src/api.ts)
 * ----------------------------------------------------
 * All backend API communications are defined in this single file.
 *
 * If you ever want to connect this form to another service (like
 * Supabase, Google Apps Script, Formspree, or Firebase),
 * you only need to change this function!
 */

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
  _honeypot?: string; // Hidden bot detection trap (must remain empty for humans)
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

/**
 * Submits the visitor's contact form to the backend REST API endpoint.
 *
 * @param payload - Form values (name, email, message, and honeypot)
 * @returns Promise with success status and server message
 */
export async function submitContactMessage(payload: ContactMessagePayload): Promise<ApiResponse> {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Failed to deliver message. Please try again.');
  }

  return data;
}
