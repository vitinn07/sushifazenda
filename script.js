const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealEls.forEach((el) => observer.observe(el));

const whatsappPhone = "5531996559603";
const categoryTabsEl = document.querySelector("#category-tabs");
const menuGridEl = document.querySelector("#menu-grid");
const overlayEl = document.querySelector("#overlay");
const itemModalEl = document.querySelector("#item-modal");
const cartDrawerEl = document.querySelector("#cart-drawer");
const cartItemsEl = document.querySelector("#cart-items");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const cartTriggerEl = document.querySelector("#cart-trigger");
const closeCartEl = document.querySelector("#close-cart");
const checkoutBtnEl = document.querySelector("#checkout-btn");
const closeItemModalEl = document.querySelector("#close-item-modal");
const addToCartBtnEl = document.querySelector("#add-to-cart-btn");
const itemModalImageEl = document.querySelector("#item-modal-image");
const itemModalCategoryEl = document.querySelector("#item-modal-category");
const itemModalNameEl = document.querySelector("#item-modal-name");
const itemModalDescriptionEl = document.querySelector("#item-modal-description");
const itemModalPriceEl = document.querySelector("#item-modal-price");
const promoTrackEl = document.querySelector("#promo-track");
const promoDotsEl = document.querySelector("#promo-dots");
const promoPrevEl = document.querySelector("#promo-prev");
const promoNextEl = document.querySelector("#promo-next");
const occasionSelectEl = document.querySelector("#occasion-select");
const budgetInputEl = document.querySelector("#budget-input");
const profileSelectEl = document.querySelector("#profile-select");
const generateComboBtnEl = document.querySelector("#generate-combo-btn");
const suggestorResultEl = document.querySelector("#suggestor-result");

const menuData = {
  "Promoções Sushi da Fazenda": [
    {
      name: "Tortinha especial 14 peças",
      price: "R$ 19,90",
      description: "Tortinhas de salmão grelhado com recheios cremosos e finalização da casa.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/19,90(20260410180432).jpg",
    },
    {
      name: "Promoção Barca Alegria da Fazenda (30 peças)",
      price: "R$ 55,00",
      description: "Combinado ideal para compartilhar, com seleção variada de peças.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/19,90(20260410180432).jpg",
    },
    {
      name: "Promoção Combo skin (25 und) 1 coca lata",
      price: "R$ 35,90",
      description: "Combo de 25 unidades com acompanhamentos e 1 coca lata.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/combo_kin(20260304180343).jpg",
    },
    {
      name: "Promoção Combo Full 20 peças",
      price: "R$ 80,00",
      description: "Combinado especial com 20 peças e brinde de hot patê de salmão simples.",
      image: "./imag/sushi.jpg",
    },
  ],
  Acréscimos: [
    {
      name: "Hashi Reutilizável",
      price: "R$ 5,00",
      description: "Hashi reutilizável de melamina, prático para o dia a dia.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/HASHI_NOVO(20260206180239).jpg",
    },
    {
      name: "Gengibre (15g)",
      price: "R$ 5,00",
      description: "Acompanhamento tradicional para limpar o paladar entre as peças.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/gengibre(20250816090805).jpg",
    },
    {
      name: "Molho shoyu Tradicional Sakura (150ml)",
      price: "R$ 14,00",
      description: "Molho shoyu tradicional Sakura na medida certa para seu pedido.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/istockphoto-911290742-612x612(20250816090843).jpg",
    },
    {
      name: "Cebola Crispy",
      price: "R$ 10,00",
      description: "Finalização crocante para deixar os combinados ainda mais saborosos.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/cebola_crispy(20251114121106).webp",
    },
  ],
  Barcas: [
    {
      name: "Barca Combo King puro salmão (54 peças)",
      price: "R$ 145,00",
      description: "Barca premium com destaque para peças de salmão.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/KING_NA_BARCA(20260116120157).png",
    },
    {
      name: "Barca Grelhadinho da Fazenda (35 peças)",
      price: "R$ 105,00",
      description: "Seleção de peças grelhadas com sabor marcante.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/barca_grelhadinho(20260108180126).jpg",
    },
    {
      name: "Barca Combinado Red + Tortinha (40 peças)",
      price: "R$ 145,00",
      description: "Combinacao equilibrada para dividir em boa companhia.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/red_na_barca(20260108180132).jpg",
    },
    {
      name: "Barca Top salmão 33 peças",
      price: "R$ 145,00",
      description: "Barca com 33 peças e brinde de 5 unidades simples.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/combo_top_salmao(20260122190151).jpg",
    },
  ],
  "Para 1 pessoa": [
    {
      name: "Combo Nelore (25 peças)",
      price: "R$ 55,00",
      description: "Combinado completo para 1 pessoa com boa variedade.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/NELORE(20260116120153).jpg",
    },
    {
      name: "Sushi do dia - Quarta (15 peças)",
      price: "R$ 35,00",
      description: "Seleção especial do dia com excelente custo-benefício.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/128(20211020211037).jpeg",
    },
    {
      name: "Mini Temaki Aberto - 4 peças",
      price: "R$ 42,00",
      description: "Opção individual com variedade de sabores e texturas.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/mini_temaki(20260118110130).jpg",
    },
  ],
  Temaki: [
    {
      name: "Temaki Salmão",
      price: "R$ 25,00",
      description: "Clássico preparado com ingredientes frescos e montagem caprichada.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/WhatsApp_Image_2026-01-11_at_10.53.59(20260111110131).jpeg",
    },
    {
      name: "Mini Temaki Aberto",
      price: "R$ 42,00",
      description: "Versão compacta, prática e muito saborosa.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/mini_temaki(20260118110130).jpg",
    },
  ],
  Hots: [
    {
      name: "Hot Patê de Salmão com Doritos",
      price: "R$ 20,00",
      description: "Hot com patê de salmão e finalização crocante com Doritos.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/hot_doritos(20260312130314).jpg",
    },
    {
      name: "Hot Patê de Salmão com couve crispy",
      price: "R$ 20,00",
      description: "Versão especial com couve crispy para mais crocância.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/hot_couve(20260312130314).jpg",
    },
    {
      name: "Hot Patê de Salmão com geleia de pimenta doce",
      price: "R$ 20,00",
      description: "Finalizado com geleia de pimenta doce, equilibrando sabor e intensidade.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/geleia_de_pimenta(20260312130340).jpg",
    },
  ],
  Molhos: [
    {
      name: "Geleia de pimenta doce",
      price: "R$ 6,00",
      description: "Sache individual para acompanhar seus pedidos.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/gelia_pimenta(20230601190652).jpg",
    },
    {
      name: "Molho Agridoce Mitsuwa",
      price: "R$ 3,00",
      description: "Molho agridoce em sache individual.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/AGRIDOCE(20220410200454).jpg",
    },
    {
      name: "Molho Teriaki Mitsuwa",
      price: "R$ 2,00",
      description: "Molho teriaki em sache individual.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/teriaki(20220410200426).jpg",
    },
  ],
};

const categories = Object.keys(menuData);
let activeCategory = categories[0];
let selectedItem = null;
const cart = [];
let promoIndex = 0;
let promoTimer = null;

function parsePriceToNumber(price) {
  return Number(price.replace("R$", "").replace(/\s/g, "").replace(".", "").replace(",", "."));
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function renderTabs() {
  if (!categoryTabsEl) return;
  categoryTabsEl.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = `category-tab${category === activeCategory ? " active" : ""}`;
    button.type = "button";
    button.textContent = category;
    button.addEventListener("click", () => {
      activeCategory = category;
      renderTabs();
      renderMenu();
    });
    categoryTabsEl.appendChild(button);
  });
}

function renderMenu() {
  if (!menuGridEl) return;
  const items = menuData[activeCategory] || [];
  menuGridEl.innerHTML = "";

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "menu-item";
    article.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <div class="menu-meta">
        <span>${item.price}</span>
        <a href="#" data-open-item="true">Ver detalhes</a>
      </div>
    `;
    article.addEventListener("click", (event) => {
      event.preventDefault();
      openItemModal(item, activeCategory);
    });
    menuGridEl.appendChild(article);
  });
}

function renderPromoBanner() {
  if (!promoTrackEl || !promoDotsEl) return;

  const promoItems = (menuData["Promoções Sushi da Fazenda"] || []).slice(0, 4);
  if (!promoItems.length) return;

  promoTrackEl.innerHTML = "";
  promoDotsEl.innerHTML = "";

  promoItems.forEach((item, index) => {
    const slide = document.createElement("article");
    slide.className = "promo-slide";
    slide.innerHTML = `
      <img class="promo-slide-bg" src="${item.image}" alt="${item.name}">
      <div class="promo-content">
        <span class="promo-chip">SELEÇÃO EXCLUSIVA</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="promo-footer">
          <span class="promo-price">${item.price}</span>
          <a class="promo-cta" href="https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Oi, quero aproveitar a promoção: ${item.name}`)}" target="_blank" rel="noopener noreferrer">Pedir no WhatsApp</a>
        </div>
      </div>
    `;
    promoTrackEl.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = `promo-dot${index === 0 ? " active" : ""}`;
    dot.type = "button";
    dot.addEventListener("click", () => goToPromo(index));
    promoDotsEl.appendChild(dot);
  });

  const goToPromo = (index) => {
    promoIndex = (index + promoItems.length) % promoItems.length;
    promoTrackEl.style.transform = `translateX(-${promoIndex * 100}%)`;
    [...promoDotsEl.children].forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === promoIndex);
    });
  };

  const nextPromo = () => goToPromo(promoIndex + 1);
  const prevPromo = () => goToPromo(promoIndex - 1);

  promoNextEl?.addEventListener("click", nextPromo);
  promoPrevEl?.addEventListener("click", prevPromo);

  if (promoTimer) clearInterval(promoTimer);
  promoTimer = setInterval(nextPromo, 4500);
}

function openItemModal(item, category) {
  selectedItem = { ...item, category };
  itemModalImageEl.src = item.image;
  itemModalImageEl.alt = item.name;
  itemModalCategoryEl.textContent = category;
  itemModalNameEl.textContent = item.name;
  itemModalDescriptionEl.textContent = item.description;
  itemModalPriceEl.textContent = item.price;
  overlayEl.classList.remove("hidden");
  itemModalEl.classList.remove("hidden");
}

function closeItemModal() {
  itemModalEl.classList.add("hidden");
  if (cartDrawerEl.classList.contains("hidden")) {
    overlayEl.classList.add("hidden");
  }
}

function openCart() {
  overlayEl.classList.remove("hidden");
  cartDrawerEl.classList.remove("hidden");
}

function closeCart() {
  cartDrawerEl.classList.add("hidden");
  if (itemModalEl.classList.contains("hidden")) {
    overlayEl.classList.add("hidden");
  }
}

function addToCart(item) {
  const existingItem = cart.find((entry) => entry.name === item.name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  renderCart();
  closeItemModal();
  openCart();
}

function updateQuantity(itemName, delta) {
  const target = cart.find((entry) => entry.name === itemName);
  if (!target) return;
  target.quantity += delta;
  if (target.quantity <= 0) {
    const idx = cart.findIndex((entry) => entry.name === itemName);
    cart.splice(idx, 1);
  }
  renderCart();
}

function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;
  let count = 0;

  if (!cart.length) {
    cartItemsEl.innerHTML = "<p>Seu carrinho esta vazio.</p>";
  } else {
    cart.forEach((item) => {
      const price = parsePriceToNumber(item.price);
      const subtotal = price * item.quantity;
      total += subtotal;
      count += item.quantity;

      const card = document.createElement("article");
      card.className = "cart-item";
      card.innerHTML = `
        <h4>${item.name}</h4>
        <p>${item.category}</p>
        <div class="cart-row">
          <strong>${formatCurrency(subtotal)}</strong>
          <div class="qty-controls">
            <button type="button" data-action="decrease">-</button>
            <span>${item.quantity}</span>
            <button type="button" data-action="increase">+</button>
          </div>
        </div>
      `;

      card.querySelector('[data-action="decrease"]').addEventListener("click", () => updateQuantity(item.name, -1));
      card.querySelector('[data-action="increase"]').addEventListener("click", () => updateQuantity(item.name, 1));

      cartItemsEl.appendChild(card);
    });
  }

  cartCountEl.textContent = String(count);
  cartTotalEl.textContent = formatCurrency(total);
}

function checkoutWhatsApp() {
  if (!cart.length) return;

  const lines = cart.map((item) => {
    const unit = parsePriceToNumber(item.price);
    const subtotal = unit * item.quantity;
    return `- ${item.name} (${item.quantity}x) - ${formatCurrency(subtotal)}`;
  });
  const totalValue = cart.reduce((sum, item) => sum + parsePriceToNumber(item.price) * item.quantity, 0);

  const message = [
    "Oi! Quero fechar este pedido:",
    "",
    ...lines,
    "",
    `Total: ${formatCurrency(totalValue)}`,
    "",
    "Pode confirmar, por favor?",
  ].join("\n");

  const url = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function scoreItemForProfile(item, profile) {
  const name = item.name.toLowerCase();
  const description = item.description.toLowerCase();
  const text = `${name} ${description}`;
  let score = 0;

  if (profile === "premium") {
    if (text.includes("salm")) score += 4;
    if (text.includes("barca")) score += 2;
    if (parsePriceToNumber(item.price) >= 40) score += 1;
  }

  if (profile === "economico") {
    const price = parsePriceToNumber(item.price);
    if (price <= 35) score += 4;
    if (text.includes("combo") || text.includes("promo")) score += 3;
  }

  if (profile === "equilibrado") {
    if (text.includes("combo") || text.includes("barca")) score += 2;
    if (text.includes("temaki") || text.includes("hot")) score += 1;
  }

  return score;
}

function generateSmartCombo() {
  if (!occasionSelectEl || !budgetInputEl || !profileSelectEl || !suggestorResultEl) return;

  const selectedOccasion = occasionSelectEl.querySelector(".choice-chip.active");
  const selectedProfile = profileSelectEl.querySelector(".choice-chip.active");
  const occasion = selectedOccasion?.dataset.value || "solo";
  const profile = selectedProfile?.dataset.value || "equilibrado";
  const budgetValue = Number(budgetInputEl.value);
  const budget = Number.isFinite(budgetValue) && budgetValue > 0 ? budgetValue : 120;

  const targetCounts = {
    solo: 2,
    casal: 3,
    familia: 5,
  };
  const desiredItems = targetCounts[occasion] || 3;

  const allItems = Object.entries(menuData).flatMap(([category, items]) =>
    items.map((item) => ({ ...item, category }))
  );

  const scored = allItems
    .map((item) => ({
      ...item,
      score: scoreItemForProfile(item, profile) + Math.max(0, 3 - parsePriceToNumber(item.price) / 30),
    }))
    .sort((a, b) => b.score - a.score);

  const selected = [];
  let total = 0;

  for (const item of scored) {
    const price = parsePriceToNumber(item.price);
    if (selected.length < desiredItems && total + price <= budget) {
      selected.push(item);
      total += price;
    }
  }

  if (!selected.length) {
    selected.push(scored[0]);
    total = parsePriceToNumber(scored[0].price);
  }

  suggestorResultEl.innerHTML = `
    <h3>Combo inteligente sugerido</h3>
    <p>Perfil: <strong>${profile}</strong> | Ocasião: <strong>${occasion}</strong> | Total estimado: <strong>${formatCurrency(total)}</strong></p>
    <ul class="suggestor-list">
      ${selected.map((item) => `<li>${item.name} - ${item.price}</li>`).join("")}
    </ul>
    <div class="suggestor-actions">
      <button class="btn" type="button" id="add-suggested-btn">Adicionar combo ao carrinho</button>
      <a class="btn btn-ghost" target="_blank" rel="noopener noreferrer"
        href="https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Oi! Quero este combo sugerido pelo site:\n${selected.map((item) => `- ${item.name} (${item.price})`).join("\n")}\nTotal estimado: ${formatCurrency(total)}`)}">Enviar no WhatsApp</a>
    </div>
  `;

  const addSuggestedBtn = document.querySelector("#add-suggested-btn");
  addSuggestedBtn?.addEventListener("click", () => {
    selected.forEach((item) => addToCart(item));
  });
}

cartTriggerEl.addEventListener("click", openCart);
closeCartEl.addEventListener("click", closeCart);
closeItemModalEl.addEventListener("click", closeItemModal);
overlayEl.addEventListener("click", () => {
  closeItemModal();
  closeCart();
});
addToCartBtnEl.addEventListener("click", () => {
  if (selectedItem) addToCart(selectedItem);
});
checkoutBtnEl.addEventListener("click", checkoutWhatsApp);
generateComboBtnEl?.addEventListener("click", generateSmartCombo);

function setupChoiceGroups() {
  const groups = [occasionSelectEl, profileSelectEl];
  groups.forEach((group) => {
    if (!group) return;
    const chips = group.querySelectorAll(".choice-chip");
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chips.forEach((item) => item.classList.remove("active"));
        chip.classList.add("active");
      });
    });
  });
}

setupChoiceGroups();

renderTabs();
renderMenu();
renderCart();
renderPromoBanner();
