// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendMail from "./functions/sendMail"
export default async function handler(req, res) {

  await sendMail('octanesingh@gmail.com', 'Subject', "Just keep going..It does get better");
  console.log("Tiger zinda hai")


  res.status(200).json({ name: 'John Doe' })

}