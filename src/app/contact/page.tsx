"use client";
export default function ContactPage() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: 24 }}>
  <h1 style={{ textAlign: 'center', fontSize: 40, color: '#222', fontWeight: 700, margin: '32px 0 24px 0' }}>Kontakt</h1>
      <p>
        Sie können uns jederzeit erreichen! Nutzen Sie das untenstehende Formular oder schreiben Sie uns direkt eine E-Mail.
      </p>
      <form style={{ marginTop: 32 }}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name">Name:</label><br />
          <input id="name" name="name" type="text" style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email">E-Mail:</label><br />
          <input id="email" name="email" type="email" style={{ width: '100%', padding: 8 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="message">Nachricht:</label><br />
          <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: 8 }} />
        </div>
        <button type="submit" style={{ padding: '8px 24px', background: '#1976d2', color: '#fff', border: 'none', borderRadius: 4 }}>Absenden</button>
      </form>
    </main>
  );
}
