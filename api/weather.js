// api/weather.js  — 서버리스 함수 (Node/Edge 가능; 기본 Node)
export default async function handler(req, res) {
  try {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ error: "Missing lat/lon" });
    }

    const key = process.env.OWM_API_KEY; // ← Vercel 환경변수
    const url =
      `https://api.openweathermap.org/data/2.5/weather` +
      `?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=en`;

    const r = await fetch(url);
    const data = await r.json();

    return res.status(r.ok ? 200 : r.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: "Server error", detail: String(e) });
  }
}
