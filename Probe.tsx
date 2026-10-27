'use dom';

function probe(name: 'localStorage' | 'sessionStorage') {
  try {
    const storage = window[name];
    if (storage === null) return `${name}: null`;
    storage.setItem('probe', 'ok');
    return `${name}: works (${storage.getItem('probe')})`;
  } catch (error) {
    return `${name}: throws ${String(error)}`;
  }
}

export default function Probe(_: { dom?: import('expo/dom').DOMProps }) {
  const lines = [probe('localStorage'), probe('sessionStorage')];
  return (
    <div style={{ fontFamily: 'sans-serif', fontSize: 18, padding: 16 }}>
      {lines.map((line) => (
        <p key={line} data-testid="probe">
          {line}
        </p>
      ))}
    </div>
  );
}
