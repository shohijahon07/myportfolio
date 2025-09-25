import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const payload = await request.json();
  const token = "1544462562:AAHDgqR9Iw1VdOd5br47CwgE_oknF-SlPsA";
  const chat_id = "864029309";

  if (!token || !chat_id) {
    return NextResponse.json(
      {
        success: false,
      },
      { status: 200 }
    );
  }

  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `📩 New message from ${payload.name}\n\n📧 Email: ${payload.email}\n\n📝 Message:\n${payload.message}`;

    const res = await axios.post(url, {
      chat_id,
      text: message,
      parse_mode: "Markdown", // optional, can be removed if you don't need formatting
    });
    if (res.data.ok) {
      return NextResponse.json(
        {
          success: true,
          message: "Message sent successfully!",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Message sending failed!",
        success: false,
      },
      { status: 500 }
    );
  }
}
