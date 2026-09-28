export const LESSONS = ['platform', 'connection', 'python'];
export function parseProgress(raw) {
  try { const data = JSON.parse(raw); return Array.isArray(data) ? [...new Set(data.filter(id => LESSONS.includes(id)))] : []; }
  catch { return []; }
}
export function toggleLesson(progress, id) {
  if (!LESSONS.includes(id)) return progress;
  return progress.includes(id) ? progress.filter(item => item !== id) : [...progress, id];
}
