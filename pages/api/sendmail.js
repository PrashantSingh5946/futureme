// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendMail from "./functions/sendMail"
export default async function handler(req, res) {
  setInterval(()=>{console.log("Tiger zinda hai")},30000)
  await sendMail('octanesingh@gmail.com','Subject',"Hey you there");
  res.status(200).json({ name: 'John Doe' })
}
