import SgMail from "@sendgrid/mail";
import fs from "fs";
import path from "path";
import keys from "../../config/keys";

export default function handler(req, res) {
    const dir = SgMail.setApiKey(keys.SG_API_KEY);

    const { email } = req.body;

    const pathToAttachment = path.join("public", "brochure.pdf");
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

    const msg = {
        to: [email, "info@itcontext.nl"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context offerteaanvraag",
        attachments: [
            {
                content: attachment,
                filename: "Brochure.pdf",
                type: "application/pdf",
                disposition: "attachment",
            },
        ],
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
                <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: #0F284E;">Goede dag ${email}! Hierbij sturen wij jouw offerte als bijlage.</h3>
                </br>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Als je nog interesse hebt in onze diensten, aarzel niet om contact met
                ons op te nemen via ons <a  style=" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;" href='mailto:info@itcontext.nl'>e-mailadress</a> of <a style=" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;" href='tel:0299705072'>telefoon</a>.
                </p>
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

    SgMail.send(msg);

    res.status(200).json({ msg: "Success" });
}
