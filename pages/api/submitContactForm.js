import SgMail from "@sendgrid/mail";
import Cors from "cors";
import keys from "../../config/keys";

// Initializing the cors middleware
const cors = Cors({
    methods: ["GET", "POST", "OPTIONS"],
    origin: "*",
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
    const token = req.headers.authorization;

    console.log(token, req.headers);

    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            } else if (token.split(" ")[1] !== process.env.TOKEN) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}

export default async function handler(req, res) {
    // Run the middleware
    await runMiddleware(req, res, cors);

    SgMail.setApiKey(keys.SG_API_KEY);

    const { name, email, msg } = req.body;

    const message = {
        to: [email, "info@itcontext.nl"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context formulier ingediend",
        html: `

           <div style=" padding: 10px;">
  <h1
    style="font-family: sans-serif; font-size: 27px; letter-spacing: -1px; font-weight: 600; line-height: 0; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
    <span style="color: #c0392b">IT</span>Context</h1>
  <h2
    style=" font-family: sans-serif; font-size: 23px; letter-spacing: -1px; font-weight: 600; line-height: .5; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
    Web Design <span style="color: #c0392b">Studio</span></h2>
</div>
<div style="padding: 10px;">
  <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: #0F284E;">Goede dag, <strong><span style="color: #c0392b">${name}</span></strong>!
    We hebben uw bericht in goede orde ontvangen!</h3>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Wij streven
    ernaar om je vraag binnen 2 werkdagen te beantwoorden.</p>
  </br>
  <div style="border: 5px solid #c0392b;  padding: 9px; max-width: 600px;">
    <p
      style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin-top: 27px; padding: 9px; ">
      Uw contact
      e-mail: <strong>${email}</strong></p>
    <p
      style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin: 0;margin-bottom: 27px; padding: 9px; ">
      Uw bericht: <strong>${msg}</strong>
    </p>
  </div>
 
  </br>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Met
    vriendelijke groet,</p>
  <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">IT Context
  </p>
  
  <a href="mailto:info@itcontext.nl" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">
    info@itcontext.nl</a>
    </br>
  <a href="tel:0031682307051" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">06 82 30 70 51</a>
</div>
        `,
    };

    SgMail.send(message);

    res.status(200).json({ msg: "Sucess" });
}
