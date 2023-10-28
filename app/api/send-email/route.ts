import nodemailer from "nodemailer";

export async function POST(req: Request, res: Response) {
  const { nom, email, message } = await req.json();
  console.log(nom, email, message);

  if (req.method !== "POST") {
    return new Response("405", { status: 405 });
  }

  // Configurez le transporteur (comme précédemment)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL,
      pass: process.env.GMAILPASS, // Utilisez un mot de passe spécifique à l'application
    },
  });

  const mailOptions = {
    from: process.env.GMAIL,
    to: process.env.COMERCIAL_MAIL_ADDRESS,
    subject: "🚨🚨 Nouveau formulaire de contact reçu 🚨🚨",
    text: `Nouveau Formulaire de contact reçu:\n\nNom: ${nom}\nEmail: ${email}\nMessage:\n${message}\n\nPense à répondre à ce message rapidement.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("OK", { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    return new Response("500", { status: 500 });
  }
}
