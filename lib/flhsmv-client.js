import 'dotenv/config';

const FLHSMV_REPORTING_MODE = (process.env.FLHSMV_REPORTING_MODE || 'mock').toLowerCase();
const FLHSMV_ENDPOINT_URL = process.env.FLHSMV_ENDPOINT_URL || '';
const FLHSMV_API_KEY = process.env.FLHSMV_API_KEY || '';

/**
 * Send a completion report payload to FLHSMV integration endpoint.
 *
 * Modes:
 * - mock (default): returns simulated success
 * - live: performs HTTP POST to configured endpoint
 */
export async function sendCompletionReport(payload) {
  if (FLHSMV_REPORTING_MODE !== 'live') {
    return {
      ok: true,
      status: 'sent',
      externalReferenceId: `MOCK-${Date.now()}`,
      message: 'Mock FLHSMV report accepted',
    };
  }

  if (!FLHSMV_ENDPOINT_URL || !FLHSMV_API_KEY) {
    return {
      ok: false,
      status: 'failed',
      message: 'FLHSMV live mode missing endpoint/api key configuration',
    };
  }

  try {
    const response = await fetch(FLHSMV_ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${FLHSMV_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();
    let data = null;
    try {
      data = text ? JSON.parse(text) : null;
    } catch {
      data = { raw: text };
    }

    if (!response.ok) {
      return {
        ok: false,
        status: 'failed',
        message: data?.error || data?.message || `FLHSMV endpoint HTTP ${response.status}`,
      };
    }

    return {
      ok: true,
      status: 'sent',
      externalReferenceId: data?.reportId || data?.referenceId || data?.id || null,
      message: data?.message || 'FLHSMV report accepted',
    };
  } catch (error) {
    return {
      ok: false,
      status: 'failed',
      message: error?.message || 'Network error while sending FLHSMV report',
    };
  }
}
