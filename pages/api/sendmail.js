// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import sendMail from "./functions/sendMail";


const people = [{
  name: "Prashant", 
  messages: ["One more hill to go, Sysiphus"],
  subject: "Perseverance", 
  email: "octanesingh@gmail.com"
},
{
  name: "Priyanka", 
  messages: ["Forgive  and move , it takes a strong mind to do that , things will get better"],
  subject: "Forgive and move", 
  email: "priyankamarygeorge@gmail.com"
}
];

export default async function handler(req, res) {

  // let data = (await fetch('https://api.unsplash.com/photos/?client_id=B9wIJPIEyZhQ39u0DCCngIjRJGGQtI-jcCzkvreLdoI&query=songspire'));

  // data = await data.json();


  //let imgUrl = data[0].urls.full;

  let imgUrl = 'https://cdna.artstation.com/p/assets/covers/images/041/486/340/large/andrei-le-mezec-andrei-le-mezec-tree-of-souls2.jpg?1641490058';




  people.forEach(async (person) => {

    const emailContent = `
  <html xmlns:v="urn:schemas-microsoft-com:vml">
  <head>
  </head>
  <body>

  <div style=" background-image: url('${imgUrl}');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0,0,0,0.15); height:200px; "></div>
  
  <table cellpadding="0">
  <tr>
  <td>

  </td>
  </tr>
  </table>
      <div class="container">
          <h1>${person.subject}</h1>
          <p>Hi ${person.name},</p>
          <p> ${person.messages[0]}</p>
      </div>
  </body>
  </html>
`;


    await sendMail('octanesingh@gmail.com', person.subject, emailContent);


  });




  res.status(200).json({ name: 'John Doe' })

}