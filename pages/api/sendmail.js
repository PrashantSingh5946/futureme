// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendMail from "./functions/sendMail"
export default async function handler(req, res) {
  setInterval(async () => {
    await sendMail('octanesingh@gmail.com', 'Subject', "Hey you there");
    console.log("Tiger zinda hai")
  }, 300000)

  res.status(200).json({ name: 'John Doe' })
}
