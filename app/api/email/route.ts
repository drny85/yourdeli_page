import { EmailBody } from "@/types";
import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

const mailer = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 465,
  secure: true,
  auth: { user: "apikey", pass: process.env.SENDGRID_API_KEY },
});

function sendMail(
  to: "melendez@robertdev.net",
  subject: string,
  html: string,
  from: string
) {
  return mailer.sendMail({
    from,
    to,
    subject,
    html,
  });
}

export async function POST(req: Request, res: NextResponse) {
  try {
    const body = (await req.json()) as EmailBody;

    const data = await sendMail(
      "melendez@robertdev.net",
      body.subject,
      html({
        email: body.email,
        name: body.name,
        subject: body.subject,
        message: body.message,
      }),

      "melendez@robertdev.net"
    );
    return new Response(JSON.stringify(data.accepted));
  } catch (error) {
    console.log(error);
    const err = error as any;
    throw new Error(err.message);
  }
}

const html = (data: EmailBody) => `
<!DOCTYPE html>
	<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Email</title>
</head>
<body>
<main style="width:100%;height:100%;display:flex;justify-content:center;background-color:#efefef;padding:0;marging:0;box-sizing:border-box border-radius:10px;">
<div style="padding:12px;max-width:680px; margin:0 auto;padding:10px;">
    
    <h3 style="text-transform:caoitalize;font-size:20px;margin-bottom:20px;margin-top:20px;font-weight:bold;text-transform:capitalize">You just received an email from ${data.name}</h3>
    <p style="font-size:18px;line-height:24px;margin-bottom:20px;margin-top:20px;font-weight:bold">Email: ${data.email}</p>
    <Subject: style="font-size:18px;line-height:24px;margin-bottom:20px;margin-top:20px;font-weight:bold">Subject: ${data.subject}</h3>
    <p style="font-size:18px;line-height:24px;margin-bottom:20px;margin-top:20px;font-weight:bold">Here is the message:</p>
    <p style="font-size:16px;line-height:24px;margin-bottom:20px;margin-top:20px;">${data.message}</p>
    </div>
</div>
</main>
  <div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5">
    
  
  </div>
</body>
</html>`;
