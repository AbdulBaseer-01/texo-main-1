import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { Lead } from "@/types/lead";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, message } = body as Partial<Lead>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const submission = {
    name: name.trim(),
    email: email.trim(),
    phone: phone?.trim() || "",
    message: message.trim(),
    created_at: new Date().toISOString(),
  };

  const { error } = await supabaseAdmin.from("contact_submissions").insert(submission);

  if (error) {
    return NextResponse.json({ error: error.message || "Unable to save contact submission." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
