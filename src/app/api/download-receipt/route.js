import puppeteer from "puppeteer";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const receiptUrl = searchParams.get("url");

    if (!receiptUrl) {
      return new Response("Missing receipt URL", { status: 400 });
    }

    // Launch headless browser
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(receiptUrl, { waitUntil: "networkidle0" });

    // Generate PDF from Stripe receipt page
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=receipt.pdf",
      },
    });
  } catch (err) {
    console.error("Download receipt failed:", err);
    return new Response("Failed to generate PDF", { status: 500 });
  }
}
