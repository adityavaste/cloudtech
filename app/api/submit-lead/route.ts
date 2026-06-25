import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, plan } = body;

    // Validate incoming details
    if (!name || !email || !phone || !plan) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Format the date beautifully for your Google Sheet (IST timezone)
    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // Send data to Make.com Webhook
    const webhookUrl = process.env.NEXT_PUBLIC_MAKE_WEBHOOK_URL;

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: formattedDate,
        name,
        email,
        phone,
        plan,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed forwarding lead to Make.com");
    }

    return NextResponse.json({ success: true, message: "Lead captured!" });
  } catch (error) {
    console.error("Backend Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

