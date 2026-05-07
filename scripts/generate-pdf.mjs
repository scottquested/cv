import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.resolve(__dirname, "..", "index.html");
const outputPath = path.resolve(
	__dirname,
	"..",
	"assets",
	"Scott_Quested_CV.pdf",
);

const browser = await puppeteer.launch();
const page = await browser.newPage();

await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle0" });

await page.pdf({
	path: outputPath,
	format: "A4",
	margin: { top: "8mm", right: "10mm", bottom: "8mm", left: "10mm" },
	printBackground: true,
});

await browser.close();
console.log(`PDF saved to ${outputPath}`);
