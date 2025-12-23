// State
const defaultItems = [{ desc: "Web Development Services", qty: 10, price: 100 }];
let items = [...defaultItems];

document.getElementById('inDate').valueAsDate = new Date();

// Logic
function renderItems() {
	const list = document.getElementById('items-list');
	list.innerHTML = '';
	items.forEach((item, i) => {
		const div = document.createElement('div');
		div.className = 'line-item-row';
		div.innerHTML = `
			<input type="text" placeholder="Description" value="${item.desc}" oninput="updateItem(${i}, 'desc', this.value)">
			<input type="number" placeholder="Qty" value="${item.qty}" oninput="updateItem(${i}, 'qty', this.value)">
			<input type="number" placeholder="Price" value="${item.price}" oninput="updateItem(${i}, 'price', this.value)">
			<button class="remove-btn" onclick="removeItem(${i})">&times;</button>
		`;
		list.appendChild(div);
	});
	updateInvoice();
}

function addItem() {
	items.push({ desc: "", qty: 1, price: 0 });
	renderItems();
}

function removeItem(index) {
	if(items.length > 1) {
		items.splice(index, 1);
		renderItems();
	}
}

function updateItem(index, key, val) {
	items[index][key] = key === 'desc' ? val : parseFloat(val) || 0;
	updateInvoice();
}

// Logo
function triggerUpload() { document.getElementById('logoInput').click(); }

function handleLogoUpload(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = function(e) {
			const img = document.getElementById('prev-logo');
			img.src = e.target.result;
			img.style.display = 'block';
			document.getElementById('uploadText').innerText = file.name;
			document.getElementById('logoActions').style.display = 'flex';
			document.querySelector('.file-upload').style.borderColor = '#2563eb';
			document.querySelector('.file-upload').style.background = '#eff6ff';
		};
		reader.readAsDataURL(file);
	}
}

function removeLogo() {
	const img = document.getElementById('prev-logo');
	img.src = "";
	img.style.display = 'none';
	document.getElementById('logoInput').value = "";
	document.getElementById('uploadText').innerText = "Click to upload Logo (Optional)";
	document.getElementById('logoActions').style.display = 'none';
	document.querySelector('.file-upload').style.borderColor = '#e2e8f0';
	document.querySelector('.file-upload').style.background = '#fafafa';
}

// Reset form 
function resetForm() {
	if(!confirm("Are you sure? This will clear all data.")) return;
	document.querySelectorAll('input:not([type="file"]), textarea').forEach(el => el.value = '');
	document.getElementById('taxRate').value = 0;
	document.getElementById('currency').value = '$';
	document.getElementById('inNumber').value = '#INV-001';
	document.getElementById('inDate').valueAsDate = new Date();
	items = [{ desc: "Web Development Services", qty: 10, price: 100 }];
	removeLogo();
	renderItems();
}

// Update invoice
function updateInvoice() {
	const cur = document.getElementById('currency').value;
	const taxRate = parseFloat(document.getElementById('taxRate').value) || 0;
	
	updateText('prev-from-name', 'fromName', 'Your Business');
	updateText('prev-from-address', 'fromAddress', '');
	updateText('prev-from-phone', 'fromPhone', '');
	updateText('prev-to-name', 'toName', 'Client Name');
	updateText('prev-to-address', 'toAddress', '');
	updateText('prev-to-phone', 'toPhone', '');
	updateText('prev-number', 'inNumber', '#INV-001');
	updateText('prev-date', 'inDate', '');
	
	const notes = document.getElementById('notes').value;
	document.getElementById('prev-notes').innerText = notes || "Payment is due within 14 days. Thank you for your business!";
	
	const tbody = document.getElementById('prev-items');
	tbody.innerHTML = '';
	let subtotal = 0;
	
	items.forEach(item => {
		const total = item.qty * item.price;
		subtotal += total;
		const tr = document.createElement('tr');
		tr.innerHTML = `<td>${item.desc}</td><td class="text-right">${item.qty}</td><td class="text-right">${cur}${item.price.toFixed(2)}</td><td class="text-right">${cur}${total.toFixed(2)}</td>`;
		tbody.appendChild(tr);
	});

	const taxAmt = subtotal * (taxRate / 100);
	const grandTotal = subtotal + taxAmt;

	document.getElementById('prev-subtotal').innerText = cur + subtotal.toFixed(2);
	document.getElementById('prev-tax-rate').innerText = taxRate;
	document.getElementById('prev-tax-amt').innerText = cur + taxAmt.toFixed(2);
	document.getElementById('prev-total').innerText = cur + grandTotal.toFixed(2);
}

function updateText(targetId, inputId, defaultText) {
	const val = document.getElementById(inputId).value;
	document.getElementById(targetId).innerText = val || defaultText;
	document.getElementById(targetId).style.display = (!val && !defaultText) ? 'none' : 'block';
}

// PDF generation
function downloadPDF() {
	const element = document.getElementById('invoice-paper');
	const opt = {
		margin: 0,
		filename: `invoice-${document.getElementById('inNumber').value}.pdf`,
		image: { type: 'jpeg', quality: 0.98 },
		html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
		jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
	};
	html2pdf().set(opt).from(element).save();
}

renderItems();