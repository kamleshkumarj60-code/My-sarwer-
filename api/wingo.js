export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const isBig = Math.random() > 0.5;
  const number = Math.floor(Math.random() * 10);
  let color = number==0||number==5?'VIOLET':(number%2==0?'RED':'GREEN');
  return res.status(200).json({
    status: "demo",
    period: Date.now(),
    prediction: isBig?'BIG':'SMALL',
    number: number,
    color: color
  });
}
