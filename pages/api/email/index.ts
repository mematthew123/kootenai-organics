import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import WelcomeEmail from '@/emails/welcome';

const resend = new Resend('re_5dUpXzmG_K5LUAndbbDUnPhWoGy787HPn');

export async function POST(request: Request) {
  try {
    const { firstName, email } = await request.json();

    await resend.sendEmail({
      from: 'mematthew123@gmail.com',
      to: email,
      subject: 'hello world',
      react: WelcomeEmail({
        firstName
      })
    });

    return NextResponse.json({
      status: 'Ok'
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 'Error',
      message: 'Something went wrong'
    }, { status: 500 });
  }
}


