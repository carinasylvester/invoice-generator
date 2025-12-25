# EasyInvoice - Professional Invoice Generator

A clean, professional invoice generator that runs entirely in your browser. No server required, no data stored to ensure complete privacy and control.

Live demo: https://carinasylvester.github.io/invoice-generator/

## Features

- **100% Client-Side**: All processing happens in your browser, no data sent to servers
- **Professional PDF Export**: Download high-quality PDF invoices instantly
- **Real-time Preview**: See your invoice update as you type
- **Logo Upload**: Add your business branding
- **Customizable**: Multiple currencies, adjustable tax rates, flexible line items
- **Mobile Responsive**: Works on desktop and mobile devices
- **Privacy First**: All data cleared on page refresh

## Quick Start

1. Download or clone this repository
2. Open `index.html` in any modern web browser
3. Start creating invoices!

No build process, no dependencies to install - just open and use.

## Usage

### Basic Workflow

1. **Add Your Branding**: Upload your logo (optional)
2. **Enter Invoice Details**: Set invoice number and date
3. **Fill Business Info**: Add your business name, address, and contact info
4. **Add Client Info**: Enter client name and details
5. **Add Line Items**: List products or services with quantities and prices
6. **Add Notes**: Include payment terms or thank you message
7. **Download PDF**: Click "Download PDF" to save your invoice

### Features Explained

#### Logo Upload
- Click the upload area to select your logo
- Supported formats: JPG, PNG, GIF, WebP
- Logo displays in the top-left of the invoice
- Replace or remove logos anytime

#### Line Items
- Add multiple products or services
- Each item has: description, quantity, price
- Automatically calculates totals
- Click × to remove items
- Must have at least one item

#### Settings
- **Tax Rate** - Enter percentage (e.g., 8.5 for 8.5%)
- **Currency** - Choose from USD ($), EUR (€), or GBP (£)
- Tax is calculated automatically on subtotal

#### Reset Form
- Clears all data and returns to defaults
- Requires confirmation to prevent accidents
- Logo is also removed

## Privacy & Security

**Your data never leaves your browser.** This tool:
- Does not send any data to servers
- Does not store data in cookies or databases
- Clears all information when you refresh the page
- Works completely offline (after first load)
- Is compatible with all modern browsers

## Technical Details

Built with:
- Vanilla JavaScript - No frameworks required
- HTML5 & CSS3
- [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) - For PDF generation

## License

This project is provided "as is" without warranty. Feel free to use, modify, and distribute.

## Disclaimer

This tool is for generating invoice documents. Always verify:
- Tax calculations meet your jurisdiction's requirements
- Invoice format complies with local regulations
- All client and business information is accurate

Not a substitute for professional accounting or legal advice.

## Contributing

Found a bug or have a feature request? Feel free to open an issue or submit a pull request.

---

**Made with ❤️ for freelancers, small businesses, and anyone who needs quick, professional invoices.**