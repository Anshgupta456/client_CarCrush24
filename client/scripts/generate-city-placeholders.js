const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'cities');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const cities = [
  { id: 'delhi', name: 'Delhi', state: 'Delhi', color: '#183820', iconColor: '#6FCF3C' },
  { id: 'chandigarh', name: 'Chandigarh', state: 'Punjab', color: '#1B4024', iconColor: '#6FCF3C' },
  { id: 'srinagar', name: 'Srinagar', state: 'Jammu & Kashmir', color: '#13351C', iconColor: '#6FCF3C' },
  { id: 'jammu', name: 'Jammu', state: 'Jammu & Kashmir', color: '#173D21', iconColor: '#6FCF3C' },
  { id: 'dehradun', name: 'Dehradun', state: 'Uttarakhand', color: '#1A3E23', iconColor: '#6FCF3C' },
  { id: 'agra', name: 'Agra', state: 'Uttar Pradesh', color: '#14341B', iconColor: '#6FCF3C' },
  { id: 'patna', name: 'Patna', state: 'Bihar', color: '#193C22', iconColor: '#6FCF3C' },
  { id: 'lucknow', name: 'Lucknow', state: 'Uttar Pradesh', color: '#16371F', iconColor: '#6FCF3C' },
  { id: 'jaipur', name: 'Jaipur', state: 'Rajasthan', color: '#1B4225', iconColor: '#6FCF3C' }
];

for (const c of cities) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="g_${c.id}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c.color}"/>
      <stop offset="100%" stop-color="#08140B"/>
    </linearGradient>
    <radialGradient id="glow_${c.id}" cx="50%" cy="40%" r="50%">
      <stop offset="0%" stop-color="#6FCF3C" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#6FCF3C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  
  <!-- Outer rounded background -->
  <rect width="400" height="400" fill="url(#g_${c.id})"/>
  <circle cx="200" cy="180" r="160" fill="url(#glow_${c.id})"/>
  
  <!-- Subtle circular frame -->
  <circle cx="200" cy="160" r="75" fill="#0C2513" stroke="#6FCF3C" stroke-width="3" stroke-dasharray="6 4"/>
  
  <!-- Location Pin Emblem -->
  <g transform="translate(180, 130) scale(1.4)" fill="#6FCF3C">
    <path d="M14 0C6.27 0 0 6.27 0 14c0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </g>

  <!-- Typography -->
  <text x="200" y="275" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="36" font-weight="900" fill="#FFFFFF" letter-spacing="1">${c.name}</text>
  <text x="200" y="310" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#6FCF3C">${c.state}</text>
  
  <!-- Watermark badge -->
  <rect x="70" y="340" width="260" height="34" rx="17" fill="#6FCF3C" fill-opacity="0.2" stroke="#6FCF3C" stroke-width="1.5"/>
  <text x="200" y="362" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" font-weight="800" fill="#FFFFFF" letter-spacing="0.8">Replace: 400 × 400 px</text>
</svg>`;

  fs.writeFileSync(path.join(dir, c.id + '.svg'), svg);
}

console.log('Regenerated 9 crisp city watermark SVGs');
