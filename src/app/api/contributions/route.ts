import { getContributionCalendar } from "@/lib/github";
import { NextResponse } from "next/server";

export async function GET() {
    const weeks = await getContributionCalendar();
    return NextResponse.json(weeks);
}
