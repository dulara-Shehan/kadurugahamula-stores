/* ==========================================================================
   Kadurugahamula Stores - Interactive Engine (Leeks Photo Removed Edition)
   ========================================================================== */

// 1. Dual-Language Products Catalog (Rice, Sugar & Leeks Photos Removed)
const PRODUCTS_DATA = [
    // --- FRESH VEGETABLES (එළවළු) ---
    { id: 'v1', nameSi: 'නැවුම් කැරට්', nameEn: 'Fresh Carrots', priceBase: 400, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?auto=format&fit=crop&w=500&q=80', badge: 'Fresh Today', desc: '100% Local farm fresh sweet carrots rich in Vitamin A | දේශීය ගොවිපළෙන් නෙළාගත් නැවුම් කැරට්.' },
    { id: 'v2', nameSi: 'ලීක්ස් (Fresh Leeks)', nameEn: 'Fresh Leeks', priceBase: 380, unit: '1 kg', category: 'vegetables', icon: 'fa-solid fa-seedling', badge: 'Organic', desc: 'Fresh crisp leeks grown organically | කාබනිකව වගාකළ නැවුම් ලීක්ස්.' },
    { id: 'v3', nameSi: 'අල (අර්තාපල්)', nameEn: 'Potatoes', priceBase: 320, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=500&q=80', badge: 'Best Seller', desc: 'High quality clean cooking potatoes | පිරිසිදු උසස් තත්ත්වයේ අල.' },
    { id: 'v4', nameSi: 'තක්කාලි', nameEn: 'Fresh Tomatoes', priceBase: 450, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80', badge: 'Fresh', desc: 'Ripe juicy red tomatoes | ඉදුණු නැවුම් තක්කාලි.' },
    { id: 'v5', nameSi: 'අමු මිරිස්', nameEn: 'Green Chillies', priceBase: 600, unit: '500 g', category: 'vegetables', img: 'https://images.unsplash.com/photo-1588870995846-f4ffbf3d5265?auto=format&fit=crop&w=500&q=80', badge: 'Spicy', desc: 'Spicy green chillies | සැර අමු මිරිස්.' },
    { id: 'v6', nameSi: 'වට්ටක්කා', nameEn: 'Sweet Pumpkin', priceBase: 220, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1570586437263-ab629fccc818?auto=format&fit=crop&w=500&q=80', badge: 'Fresh', desc: 'Golden sweet pumpkin | නැවුම් වට්ටක්කා.' },
    { id: 'v7', nameSi: 'බෝංචි', nameEn: 'Green Beans', priceBase: 420, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?auto=format&fit=crop&w=500&q=80', badge: 'Fresh', desc: 'Crisp green beans | නැවුම් බෝංචි.' },
    { id: 'v8', nameSi: 'ලූණු (රතු / ලොකු)', nameEn: 'Onions', priceBase: 350, unit: '1 kg', category: 'vegetables', img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cf?auto=format&fit=crop&w=500&q=80', badge: 'Essential', desc: 'Clean dry onions | පිරිසිදු ලූණු.' },

    // --- GROCERY ITEMS (සිල්ලර භාණ්ඩ - Rice & Sugar 7% Special Discounts) ---
    { id: 'g1', nameSi: 'සම්බා සහල් (Samba Rice 5kg)', nameEn: 'Samba Rice 5kg', priceBase: 1160, originalPrice: 1250, unit: '5 kg', category: 'groceries', icon: 'fa-solid fa-wheat-awn', badge: '🔥 7% OFF SPECIAL', desc: 'Premium aged white Samba rice with special 7% discount | උසස්ම තත්ත්වයේ සම්බා සහල් 5kg විශේෂ වට්ටම සහිතයි.' },
    { id: 'g2', nameSi: 'නාඩු සහල් (Nadu Rice 5kg)', nameEn: 'Nadu Rice 5kg', priceBase: 1020, originalPrice: 1100, unit: '5 kg', category: 'groceries', icon: 'fa-solid fa-bowl-rice', badge: '🔥 7% OFF SPECIAL', desc: 'White Nadu rice for daily family meals with 7% discount | නාඩු සහල් 5kg විශේෂ වට්ටම.' },
    { id: 'g3', nameSi: 'මයිසූර් පරිප්පු', nameEn: 'Red Lentils (Dhal)', priceBase: 380, unit: '1 kg', category: 'groceries', icon: 'fa-solid fa-circle-dot', badge: 'Popular', desc: 'Clean high quality red lentils | පිරිසිදු මයිසූර් පරිප්පු.' },
    { id: 'g4', nameSi: 'සුදු සීනි (White Sugar 1kg)', nameEn: 'White Sugar 1kg', priceBase: 295, originalPrice: 320, unit: '1 kg', category: 'groceries', icon: 'fa-solid fa-cubes-stacked', badge: '🔥 7% OFF SPECIAL', desc: 'Refined pure white sugar with 7% special discount | සුදු සීනි 1kg විශේෂ 7% වට්ටම.' },
    { id: 'g5', nameSi: 'පොල් තෙල්', nameEn: 'Pure Coconut Oil', priceBase: 850, unit: '1 Litre', category: 'groceries', icon: 'fa-solid fa-bottle-droplet', badge: 'Pure', desc: '100% Pure unrefined coconut oil | පිරිසිදු පොල් තෙල්.' },
    { id: 'g6', nameSi: 'සිලෝන් තේ කොළ', nameEn: 'Ceylon Tea Leaves', priceBase: 360, unit: '250 g', category: 'groceries', icon: 'fa-solid fa-mug-hot', badge: 'Premium', desc: 'Aromatic pure Ceylon black tea | සුවඳවත් තේ කොළ.' },
    { id: 'g7', nameSi: 'කිරි පිටි', nameEn: 'Milk Powder', priceBase: 1050, unit: '400 g', category: 'groceries', icon: 'fa-solid fa-box', badge: 'Top Brand', desc: 'Full cream milk powder | පූර්ණ යොදය සහිත කිරි පිටි.' },

    // --- SCHOOL SUPPLIES (පාසල් උපකරණ) ---
    { id: 's1', nameSi: 'අභ්‍යාස පොත් (80 පිටු)', nameEn: 'Exercise Books 80p', priceBase: 140, unit: '1 Book', category: 'school', img: 'school_supplies.jpg', badge: 'CR Quality', desc: 'Square & Single rule exercise books | අභ්‍යාස පොත්.' },
    { id: 's2', nameSi: 'CR පොත් (120 පිටු)', nameEn: 'CR Hardcover 120p', priceBase: 280, unit: '1 Book', category: 'school', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=500&q=80', badge: 'Hardcover', desc: 'Durable hardcover CR books | CR පොත්.' },
    { id: 's3', nameSi: 'පෑන (Blue/Black Pens)', nameEn: 'Ballpoint Pens Set', priceBase: 150, unit: '5 Pack', category: 'school', img: 'https://images.unsplash.com/photo-1585336261026-8f5786372966?auto=format&fit=crop&w=500&q=80', badge: 'Smooth', desc: 'Smooth writing ballpoint pens | පෑන් 5ක කට්ටලය.' },
    { id: 's4', nameSi: 'පාට පැන්සල්', nameEn: '12 Colour Pencils', priceBase: 450, unit: '1 Pack', category: 'school', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=500&q=80', badge: 'Art Supplies', desc: 'Vibrant non-toxic colour pencils | පාට පැන්සල්.' }
];

// App State
let cart = JSON.parse(localStorage.getItem('kadurugahamula_cart')) || [];
let activeCategory = 'all';
let currentLangMode = localStorage.getItem('kadurugahamula_lang') || 'mixed';
let appliedDiscount = 0;
let deliveryFee = 0;

// On DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLangMode();
    renderProducts();
    updateCartUI();
    setupEventListeners();
    startCountdownTimer();
});

// 2. Render Products Grid with Discount Badges & Photos / Icons
function renderProducts(searchQuery = '') {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    let filtered = [...PRODUCTS_DATA];

    // Category Filter
    if (activeCategory !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(p => 
            p.nameSi.toLowerCase().includes(query) || 
            p.nameEn.toLowerCase().includes(query)
        );
    }

    // Sort Filter
    const sortVal = document.getElementById('sortSelect')?.value || 'default';
    if (sortVal === 'price-low') {
        filtered.sort((a, b) => a.priceBase - b.priceBase);
    } else if (sortVal === 'price-high') {
        filtered.sort((a, b) => b.priceBase - a.priceBase);
    } else if (sortVal === 'name') {
        filtered.sort((a, b) => a.nameEn.localeCompare(b.nameEn));
    }

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 50px 20px;">
                <i class="fa-solid fa-magnifying-glass" style="font-size: 48px; color: var(--text-muted); margin-bottom: 16px;"></i>
                <h3>No Items Found | භාණ්ඩ සොයාගත නොහැකි විය</h3>
                <p style="color: var(--text-secondary);">Please try searching with another keyword.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = filtered.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const qtyInCart = cartItem ? cartItem.qty : 1;
        const displayTitle = getTitleByLang(product.nameSi, product.nameEn);

        return `
            <div class="product-card" id="card-${product.id}">
                ${product.badge ? `<span class="product-badge ${product.originalPrice ? 'discount-badge-highlight' : ''}">${product.badge}</span>` : ''}
                <button class="quick-view-btn-trigger" onclick="openQuickView('${product.id}')" title="Quick Details | ඉක්මන් විස්තර">
                    <i class="fa-solid fa-eye"></i>
                </button>
                
                ${product.img ? `
                    <div class="product-card-img-box" onclick="openQuickView('${product.id}')">
                        <img src="${product.img}" alt="${product.nameEn}" class="product-card-img" loading="lazy">
                    </div>
                ` : `
                    <div class="product-card-icon-box" onclick="openQuickView('${product.id}')">
                        <i class="${product.icon}"></i>
                    </div>
                `}

                <div class="product-info">
                    <h3>${displayTitle}</h3>
                    <div class="sub-title">${product.nameEn} / ${product.nameSi}</div>

                    ${product.category === 'vegetables' || product.id === 'g3' ? `
                        <select class="weight-selector" id="weight-${product.id}" onchange="updateProductCardPrice('${product.id}')">
                            <option value="0.25">250 g</option>
                            <option value="0.5">500 g</option>
                            <option value="1" selected>1 kg</option>
                            <option value="2">2 kg</option>
                        </select>
                    ` : ''}

                    <div class="product-price-row">
                        <div>
                            <span class="product-price" id="price-display-${product.id}">Rs. ${product.priceBase.toLocaleString()}</span>
                            ${product.originalPrice ? `<span class="original-price-strike">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                        <span class="unit-tag">/ ${product.unit}</span>
                    </div>

                    <div class="qty-control">
                        <button class="qty-btn" onclick="adjustCardQty('${product.id}', -1)">-</button>
                        <input type="number" class="qty-input" id="qty-input-${product.id}" value="${qtyInCart}" min="1" max="50">
                        <button class="qty-btn" onclick="adjustCardQty('${product.id}', 1)">+</button>
                    </div>

                    <button class="btn btn-primary btn-full" onclick="addToCart('${product.id}')">
                        <i class="fa-solid fa-cart-plus"></i> Add to Cart | Cart එකට
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Adjust product price based on weight multiplier
function updateProductCardPrice(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    const weightSelect = document.getElementById(`weight-${productId}`);
    const priceDisplay = document.getElementById(`price-display-${productId}`);
    if (product && weightSelect && priceDisplay) {
        const mult = parseFloat(weightSelect.value) || 1;
        const newPrice = Math.round(product.priceBase * mult);
        priceDisplay.innerText = `Rs. ${newPrice.toLocaleString()}`;
    }
}

// Get Title String based on Language Mode
function getTitleByLang(si, en) {
    if (currentLangMode === 'si') return si;
    if (currentLangMode === 'en') return en;
    return `${en} | ${si}`;
}

function adjustCardQty(productId, change) {
    const input = document.getElementById(`qty-input-${productId}`);
    if (input) {
        let currentVal = parseInt(input.value) || 1;
        currentVal += change;
        if (currentVal < 1) currentVal = 1;
        input.value = currentVal;
    }
}

// 3. Cart Logic Functions
function addToCart(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const qtyInput = document.getElementById(`qty-input-${productId}`);
    const qtyToAdd = qtyInput ? (parseInt(qtyInput.value) || 1) : 1;

    let selectedUnit = product.unit;
    let calculatedPrice = product.priceBase;

    const weightSelect = document.getElementById(`weight-${productId}`);
    if (weightSelect) {
        const mult = parseFloat(weightSelect.value);
        if (mult === 0.25) selectedUnit = '250g';
        else if (mult === 0.5) selectedUnit = '500g';
        else if (mult === 1) selectedUnit = '1kg';
        else if (mult === 2) selectedUnit = '2kg';
        calculatedPrice = Math.round(product.priceBase * mult);
    }

    const itemTitle = getTitleByLang(product.nameSi, product.nameEn);

    const existingIndex = cart.findIndex(item => item.id === productId && item.unit === selectedUnit);
    if (existingIndex > -1) {
        cart[existingIndex].qty += qtyToAdd;
    } else {
        cart.push({
            id: product.id,
            nameTitle: itemTitle,
            nameSi: product.nameSi,
            nameEn: product.nameEn,
            price: calculatedPrice,
            unit: selectedUnit,
            qty: qtyToAdd
        });
    }

    saveCart();
    updateCartUI();
    showToastNotification(`Added '${itemTitle}' to Cart!`);
}

function addPackageToCart(packageName, price) {
    const existingIndex = cart.findIndex(item => item.nameTitle === packageName);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            id: 'pkg-' + Date.now(),
            nameTitle: packageName,
            nameSi: packageName,
            nameEn: packageName,
            price: price,
            unit: 'Bundle Package',
            qty: 1
        });
    }
    saveCart();
    updateCartUI();
    openCart();
    showToastNotification(`Package '${packageName}' added to Cart!`);
}

function updateCartQty(cartIndex, change) {
    if (cart[cartIndex]) {
        cart[cartIndex].qty += change;
        if (cart[cartIndex].qty <= 0) {
            cart.splice(cartIndex, 1);
        }
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(cartIndex) {
    if (cart[cartIndex]) {
        cart.splice(cartIndex, 1);
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('kadurugahamula_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    let discountAmount = Math.round((subtotal * appliedDiscount) / 100);
    let grandTotal = subtotal - discountAmount + deliveryFee;
    if (grandTotal < 0) grandTotal = 0;

    // Badges
    document.getElementById('cartBadgeCount').innerText = totalItems;
    document.getElementById('floatingCartCount').innerText = totalItems;
    document.getElementById('cartDrawerCount').innerText = totalItems;

    // Prices
    document.getElementById('cartSubtotal').innerText = `Rs. ${subtotal.toLocaleString()}`;
    document.getElementById('cartDeliveryFee').innerText = `Rs. ${deliveryFee.toLocaleString()}`;
    document.getElementById('cartGrandTotal').innerText = `Rs. ${grandTotal.toLocaleString()}`;

    // Cart Items List
    const emptyView = document.getElementById('emptyCartView');
    const itemsList = document.getElementById('cartItemsList');
    const cartFooter = document.getElementById('cartFooter');

    if (cart.length === 0) {
        emptyView.style.display = 'block';
        itemsList.style.display = 'none';
        cartFooter.style.display = 'none';
    } else {
        emptyView.style.display = 'none';
        itemsList.style.display = 'block';
        cartFooter.style.display = 'block';

        itemsList.innerHTML = cart.map((item, index) => `
            <div class="cart-item-row">
                <div class="cart-item-info">
                    <h4>${item.nameTitle}</h4>
                    <p>Rs. ${item.price.toLocaleString()} / ${item.unit}</p>
                </div>
                <div class="cart-item-actions">
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
                        <span class="qty-input" style="line-height:28px;">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
                    </div>
                    <button class="remove-item-btn" onclick="removeFromCart(${index})" title="Remove">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
}

// 4. Cart Drawer Controls
function openCart() {
    document.getElementById('cartDrawerOverlay').classList.add('active');
    document.getElementById('cartDrawer').classList.add('active');
}

function closeCart() {
    document.getElementById('cartDrawerOverlay').classList.remove('active');
    document.getElementById('cartDrawer').classList.remove('active');
}

// 5. Quick View Modal Engine with Picture or Icon
function openQuickView(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;

    const modalBody = document.getElementById('quickViewModalBody');
    const title = getTitleByLang(product.nameSi, product.nameEn);

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 20px;">
            ${product.img ? `
                <div style="width: 100%; height: 200px; border-radius: 12px; overflow: hidden; margin-bottom: 14px;">
                    <img src="${product.img}" alt="${product.nameEn}" style="width:100%; height:100%; object-fit:cover;">
                </div>
            ` : `
                <div style="font-size: 64px; color: var(--primary-color); margin-bottom: 14px;">
                    <i class="${product.icon}"></i>
                </div>
            `}
            <h2>${title}</h2>
            <span class="product-badge" style="position:static; display:inline-block; margin-top:8px;">${product.badge}</span>
        </div>
        <p style="font-size: 14px; color: var(--text-secondary); text-align: center; margin-bottom: 20px;">
            ${product.desc}
        </p>
        <div style="background: var(--bg-main); padding: 15px; border-radius: 12px; margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                <span>Price per ${product.unit}:</span>
                <div>
                    <strong style="color: var(--primary-color); font-size: 18px;">Rs. ${product.priceBase.toLocaleString()}</strong>
                    ${product.originalPrice ? `<span class="original-price-strike">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
                </div>
            </div>
            <div style="display:flex; justify-content:space-between;">
                <span>Availability:</span>
                <strong style="color: #22c55e;">In Stock (Quality Guaranteed)</strong>
            </div>
        </div>
        <button class="btn btn-primary btn-full btn-lg" onclick="addToCart('${product.id}'); closeQuickView();">
            <i class="fa-solid fa-cart-plus"></i> Add to Cart | Cart එකට එක් කරන්න
        </button>
    `;

    document.getElementById('quickViewOverlay').classList.add('active');
    document.getElementById('quickViewModal').classList.add('active');
}

function closeQuickView() {
    document.getElementById('quickViewOverlay').classList.remove('active');
    document.getElementById('quickViewModal').classList.remove('active');
}

// Photo Lightbox Controls
function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById('lightboxModal');
    const overlay = document.getElementById('lightboxOverlay');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    if (modal && img) {
        img.src = imgSrc;
        if (caption) caption.innerText = captionText;
        overlay.classList.add('active');
        modal.classList.add('active');
    }
}

function closeLightbox() {
    const modal = document.getElementById('lightboxModal');
    const overlay = document.getElementById('lightboxOverlay');
    if (modal && overlay) {
        overlay.classList.remove('active');
        modal.classList.remove('active');
    }
}

// 6. Mobile-Friendly WhatsApp Order Generator
function generateWhatsappOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty! Please add some items.');
        return;
    }

    const name = document.getElementById('cartCustomerName').value.trim();
    const phone = document.getElementById('cartCustomerPhone').value.trim();
    const address = document.getElementById('cartCustomerAddress').value.trim();
    const deliveryTime = document.getElementById('cartDeliveryTime').value;

    if (!name || !phone || !address) {
        alert('Please fill in your Name, Phone Number, and Delivery Address.');
        return;
    }

    let subtotal = 0;
    let itemsText = cart.map((item, i) => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        return `${i + 1}. *${item.nameTitle}* (${item.unit}) x ${item.qty} = Rs. ${itemTotal.toLocaleString()}`;
    }).join('\n');

    let discountAmount = Math.round((subtotal * appliedDiscount) / 100);
    let grandTotal = subtotal - discountAmount + deliveryFee;

    let message = `🛒 *KADURUGAHAMULA STORES - NEW ORDER*\n`;
    message += `----------------------------------------\n`;
    message += `👤 *Customer / නම:* ${name}\n`;
    message += `📞 *Phone / දුරකථනය:* ${phone}\n`;
    message += `📍 *Address / ලිපිනය:* ${address}\n`;
    message += `⏰ *Delivery Slot / වේලාව:* ${deliveryTime}\n`;
    message += `----------------------------------------\n`;
    message += `📦 *ITEMIZED ORDER LIST:*\n${itemsText}\n`;
    message += `----------------------------------------\n`;
    message += `Subtotal: Rs. ${subtotal.toLocaleString()}\n`;
    if (appliedDiscount > 0) message += `Discount (${appliedDiscount}%): -Rs. ${discountAmount.toLocaleString()}\n`;
    if (deliveryFee > 0) message += `Delivery Fee: +Rs. ${deliveryFee.toLocaleString()}\n`;
    message += `💰 *GRAND TOTAL / මුළු එකතුව: Rs. ${grandTotal.toLocaleString()}*\n`;
    message += `----------------------------------------\n`;
    message += `Thank you! Please confirm my order.`;

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/94761586202?text=${encodedMsg}`;

    try {
        const newWin = window.open(waUrl, '_blank');
        if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
            window.location.href = waUrl;
        }
    } catch (e) {
        window.location.href = waUrl;
    }
}

// 7. Promo Code & Delivery Zone Engine
function applyPromoCode() {
    const input = document.getElementById('promoCodeInput');
    const msg = document.getElementById('promoMessage');
    const code = input ? input.value.trim().toUpperCase() : '';

    if (code === 'KADURU10') {
        appliedDiscount = 10;
        msg.innerHTML = '<i class="fa-solid fa-circle-check"></i> 10% Discount Applied Successfully!';
    } else if (code === 'FREEDEL') {
        deliveryFee = 0;
        document.getElementById('deliveryZoneSelect').value = '0';
        document.getElementById('calculatedZoneFee').innerText = 'Rs. 0 (FREE)';
        msg.innerHTML = '<i class="fa-solid fa-circle-check"></i> Free Delivery Promo Applied!';
    } else {
        msg.innerHTML = '<span style="color:#ef4444;"><i class="fa-solid fa-circle-xmark"></i> Invalid Promo Code. Try "KADURU10" or "FREEDEL"</span>';
    }
    updateCartUI();
}

function updateDeliveryZoneFee() {
    const zoneSelect = document.getElementById('deliveryZoneSelect');
    const feeDisplay = document.getElementById('calculatedZoneFee');
    if (zoneSelect) {
        deliveryFee = parseInt(zoneSelect.value) || 0;
        feeDisplay.innerText = deliveryFee === 0 ? 'Rs. 0 (FREE)' : `Rs. ${deliveryFee}`;
        updateCartUI();
    }
}

// 8. Ticking Offer Countdown Timer
function startCountdownTimer() {
    function updateTimer() {
        const now = new Date();
        const midnight = new Date(now);
        midnight.setHours(23, 59, 59, 0);
        const diff = midnight - now;

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        if (document.getElementById('hours')) document.getElementById('hours').innerText = String(h).padStart(2, '0');
        if (document.getElementById('minutes')) document.getElementById('minutes').innerText = String(m).padStart(2, '0');
        if (document.getElementById('seconds')) document.getElementById('seconds').innerText = String(s).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}

// 9. Event Listeners Setup
function setupEventListeners() {
    // Header Scroll Shadow
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (window.scrollY > 20) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Mobile Navigation Drawer Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Category Tabs Switching
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            tabs.forEach(t => t.classList.remove('active'));
            e.currentTarget.classList.add('active');
            activeCategory = e.currentTarget.getAttribute('data-category');
            renderProducts(document.getElementById('productSearchInput').value);
        });
    });

    // Search & Sort Inputs
    const searchInput = document.getElementById('productSearchInput');
    const clearBtn = document.getElementById('clearSearchBtn');
    const sortSelect = document.getElementById('sortSelect');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value;
            if (clearBtn) clearBtn.style.display = query ? 'block' : 'none';
            renderProducts(query);
        });
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            searchInput.value = '';
            clearBtn.style.display = 'none';
            renderProducts('');
        });
    }
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            renderProducts(searchInput ? searchInput.value : '');
        });
    }

    // Language Chips Toggle
    const langChips = document.querySelectorAll('.lang-chip');
    langChips.forEach(chip => {
        chip.addEventListener('click', (e) => {
            langChips.forEach(c => c.classList.remove('active'));
            e.currentTarget.classList.add('active');
            currentLangMode = e.currentTarget.getAttribute('data-lang');
            localStorage.setItem('kadurugahamula_lang', currentLangMode);
            renderProducts(searchInput ? searchInput.value : '');
            updateCartUI();
        });
    });

    // Cart Buttons
    document.getElementById('openCartBtn').addEventListener('click', openCart);
    document.getElementById('floatingCartBtn').addEventListener('click', openCart);
    document.getElementById('closeCartBtn').addEventListener('click', closeCart);
    document.getElementById('cartDrawerOverlay').addEventListener('click', closeCart);

    // Quick View Modal Close
    document.getElementById('closeQuickViewBtn').addEventListener('click', closeQuickView);
    document.getElementById('quickViewOverlay').addEventListener('click', closeQuickView);

    // Lightbox Modal Close
    document.getElementById('closeLightboxBtn').addEventListener('click', closeLightbox);
    document.getElementById('lightboxOverlay').addEventListener('click', closeLightbox);

    // Checkout & Quick Order Actions
    document.getElementById('checkoutWhatsappBtn').addEventListener('click', generateWhatsappOrder);
    document.getElementById('sendQuickOrderBtn').addEventListener('click', sendQuickOrder);
    document.getElementById('sendCustomOrderBtn').addEventListener('click', sendCustomOrderForm);

    // Promo Code & Delivery Zone
    document.getElementById('applyPromoBtn').addEventListener('click', applyPromoCode);
    document.getElementById('deliveryZoneSelect').addEventListener('change', updateDeliveryZoneFee);

    // Theme Toggle Listener
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

    // FAQ Accordions
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}

// Quick Order Helper Functions
function addQuickTag(text) {
    const input = document.getElementById('quickOrderInput');
    if (input) {
        input.value = input.value.trim() ? input.value + ', ' + text : text;
    }
}

function sendQuickOrder() {
    const input = document.getElementById('quickOrderInput');
    const text = input ? input.value.trim() : '';

    if (!text) {
        alert('Please write down items to order.');
        return;
    }

    let message = `🛒 *KADURUGAHAMULA STORES - Quick WhatsApp Order*\n\n`;
    message += `Items List / භාණ්ඩ ලැයිස්තුව:\n${text}\n\n`;
    message += `Please confirm prices & delivery.`;

    const waUrl = `https://wa.me/94761586202?text=${encodeURIComponent(message)}`;

    try {
        const newWin = window.open(waUrl, '_blank');
        if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
            window.location.href = waUrl;
        }
    } catch (e) {
        window.location.href = waUrl;
    }
}

function sendCustomOrderForm() {
    const itemsText = document.getElementById('customItemsText').value.trim();
    const name = document.getElementById('customCustomerName').value.trim();
    const address = document.getElementById('customCustomerAddress').value.trim();

    if (!itemsText) {
        alert('Please enter your custom items list.');
        return;
    }

    let message = `📝 *KADURUGAHAMULA STORES - Custom Order List*\n`;
    message += `----------------------------------------\n`;
    if (name) message += `👤 *Name:* ${name}\n`;
    if (address) message += `📍 *Address:* ${address}\n`;
    message += `----------------------------------------\n`;
    message += `📋 *Custom List:*\n${itemsText}\n`;
    message += `----------------------------------------\n`;
    message += `Please send estimated pricing & availability.`;

    const waUrl = `https://wa.me/94761586202?text=${encodeURIComponent(message)}`;

    try {
        const newWin = window.open(waUrl, '_blank');
        if (!newWin || newWin.closed || typeof newWin.closed === 'undefined') {
            window.location.href = waUrl;
        }
    } catch (e) {
        window.location.href = waUrl;
    }
}

// Light / Dark Theme Engine
function initTheme() {
    const savedTheme = localStorage.getItem('kadurugahamula_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('kadurugahamula_theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
        btn.innerHTML = theme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }
}

function initLangMode() {
    const savedLang = localStorage.getItem('kadurugahamula_lang') || 'mixed';
    currentLangMode = savedLang;
    const langChips = document.querySelectorAll('.lang-chip');
    langChips.forEach(chip => {
        if (chip.getAttribute('data-lang') === currentLangMode) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });
}

// Toast Notifications
function showToastNotification(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'appToast';
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(15, 23, 42, 0.9);
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 30px;
            font-size: 14px;
            font-weight: 600;
            z-index: 2000;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.style.opacity = '1';

    setTimeout(() => {
        toast.style.opacity = '0';
    }, 2500);
}
