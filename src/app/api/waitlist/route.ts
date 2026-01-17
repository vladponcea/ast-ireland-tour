import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, eventId } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !eventId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Implement actual waitlist storage
    // Options:
    // - Store in a database (Supabase, PlanetScale, etc.)
    // - Send to a CRM (HubSpot, Salesforce, etc.)
    // - Store in a Google Sheet
    // - Send to an email marketing platform (Mailchimp, ConvertKit, etc.)

    console.log("Waitlist signup:", {
      firstName,
      lastName,
      email,
      phone,
      eventId,
      timestamp: new Date().toISOString(),
    });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Successfully added to waitlist",
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
