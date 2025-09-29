import { NextResponse } from "next/server";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

// Logo path
const logoPath = path.join(process.cwd(), "public/images/15-09-Latest-Freedom-Logo-12-15.png");
const logoBytes = fs.readFileSync(logoPath);

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const amountRaw = searchParams.get("amount") || "0";
    const amount = parseFloat(amountRaw.replace(/[^0-9.]/g, "")) || 0;

    const date = searchParams.get("date") || "N/A";
    const method = searchParams.get("method") || "N/A";
    const receiptId = searchParams.get("receiptId") || "N/A";
    const email = searchParams.get("email") || "N/A";

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Header green bar
    page.drawRectangle({
      x: 0,
      y: 740,
      width: 600,
      height: 90,
      color: rgb(0.1, 0.7, 0.2),
    });

    // Logo
    const pngImage = await pdfDoc.embedPng(logoBytes);
    const pngDims = pngImage.scale(0.15);
    page.drawImage(pngImage, {
      x: (600 - pngDims.width) / 2,
      y: 735,
      width: pngDims.width,
      height: pngDims.height,
    });

    // Receipt Title
    page.drawText("Receipt from New business sandbox", {
      x: 150,
      y: 710,
      size: 16,
      font: boldFont,
      color: rgb(0, 0, 0),
    });

    // Receipt ID (right-aligned)
    page.drawText(`Receipt #${receiptId}`, {
      x: 190,
      y: 690,
      size: 11,
      font,
      color: rgb(0.3, 0.3, 0.3),
    });

    // Email
    page.drawText(`Email: ${email}`, { x: 60, y: 660, size: 11, font });
    // page.drawText(email, { x: 110, y: 680, size: 11, font: boldFont, color: rgb(0.1, 0.5, 0.9) });

    // Payment info row
    const startY = 640;
    const col1X = 60;
    const col2X = 250;
    const col3X = 430;

    page.drawText("AMOUNT PAID", { x: col1X, y: startY, size: 10, font: boldFont });
    page.drawText(`A$${amount.toFixed(2)}`, { x: col1X, y: startY - 20, size: 12, font });

    page.drawText("DATE PAID", { x: col2X, y: startY, size: 10, font: boldFont });
    page.drawText(date, { x: col2X, y: startY - 20, size: 12, font });

    page.drawText("PAYMENT METHOD", { x: col3X, y: startY, size: 10, font: boldFont });
    page.drawText(method, { x: col3X, y: startY - 20, size: 12, font });

    // Summary Box
    const summaryY = 480;
    page.drawRectangle({
      x: 50,
      y: summaryY,
      width: 500,
      height: 120,
      borderColor: rgb(0.85, 0.85, 0.85),
      borderWidth: 1,
      color: rgb(0.96, 0.97, 0.99),
    });

    page.drawText("SUMMARY", { x: 60, y: summaryY + 95, size: 12, font: boldFont });

    // Row 1: Payment
    page.drawText("Payment to New business sandbox", { x: 60, y: summaryY + 70, size: 12, font });
    page.drawText(`A$${amount.toFixed(2)}`, { x: 480, y: summaryY + 70, size: 12, font: boldFont });

    // Divider
    page.drawLine({ start: { x: 60, y: summaryY + 55 }, end: { x: 540, y: summaryY + 55 }, thickness: 0.5, color: rgb(0.8, 0.8, 0.8) });

    // Row 2: Amount paid
    page.drawText("Amount paid", { x: 60, y: summaryY + 30, size: 12, font: boldFont });
    page.drawText(`A$${amount.toFixed(2)}`, { x: 480, y: summaryY + 30, size: 12, font: boldFont });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(pdfBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename=Invoice-${receiptId}.pdf`,
      },
    });
  } catch (err) {
    console.error("Error generating PDF:", err);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
