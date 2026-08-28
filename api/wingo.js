export default function handler(req, res) {
  const now = new Date();
  const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  const totalSec = ist.getHours() * 3600 + ist.getMinutes() * 60 + ist.getSeconds();
  const OFFSET = 50781; // Aapka BDG Period 52145 se fixed
  const index = Math.floor(totalSec / 30);
  const dateStr = ist.getFullYear() + String(ist.getMonth()+1).padStart(2,'0') + String(ist.getDate()).padStart(2,'0');
  const period = dateStr + "1000" + (index + OFFSET);
  const left = 30 - (totalSec % 30);

  // 2 LEVEL SHORTCUT LOGIC
  const lastDigit = parseInt(period.slice(-1));
  let direct = lastDigit >= 5 ? "BIG" : "SMALL";
  let level2 = lastDigit % 2 == 0 ? "SMALL" : "BIG"; // Level 2 opposite shortcut

  res.status(200).json({
    period: period,
    timer: left,
    result: direct,
    level1: direct,
    level2: level2,
    shortcut: `L1: ${direct} -> L2: ${level2}`
  });
}
