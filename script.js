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

const menuData = {
  "Promocoes Sushi da Fazenda": [
    {
      name: "Tortinha especial 14 pecas",
      price: "R$ 19,90",
      description: "Tortinhas de salmao grelhado com recheios cremosos e finalizacao da casa.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/19,90(20260410180432).jpg",
    },
    {
      name: "Promocao Barca Alegria da Fazenda (30 pecas)",
      price: "R$ 55,00",
      description: "Combinado ideal para compartilhar, com selecao variada de pecas.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/WhatsApp_Image_2026-04-16_at_20.29.52(20260416200408).jpeg",
    },
    {
      name: "Promocao Combo skin (25 und) 1 coca lata",
      price: "R$ 35,90",
      description: "Combo de 25 unidades com acompanhamentos e 1 coca lata.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/combo_kin(20260304180343).jpg",
    },
    {
      name: "Promocao Combo Full 20 pecas",
      price: "R$ 80,00",
      description: "Combinado especial com 20 pecas e brinde de hot pate de salmao simples.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/Sem_titulo(20260116120101).jpg",
    },
  ],
  Acrescimos: [
    {
      name: "Hashi Reutilizavel",
      price: "R$ 5,00",
      description: "Hashi reutilizavel de melamina, pratico para o dia a dia.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/HASHI_NOVO(20260206180239).jpg",
    },
    {
      name: "Gengibre (15g)",
      price: "R$ 5,00",
      description: "Acompanhamento tradicional para limpar o paladar entre as pecas.",
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
      description: "Finalizacao crocante para deixar os combinados ainda mais saborosos.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/cebola_crispy(20251114121106).webp",
    },
  ],
  Barcas: [
    {
      name: "Barca Combo King puro salmao (54 pecas)",
      price: "R$ 145,00",
      description: "Barca premium com destaque para pecas de salmao.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/KING_NA_BARCA(20260116120157).png",
    },
    {
      name: "Barca Grelhadinho da Fazenda (35 pecas)",
      price: "R$ 105,00",
      description: "Selecao de pecas grelhadas com sabor marcante.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/barca_grelhadinho(20260108180126).jpg",
    },
    {
      name: "Barca Combinado Red + Tortinha (40 pecas)",
      price: "R$ 145,00",
      description: "Combinacao equilibrada para dividir em boa companhia.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/red_na_barca(20260108180132).jpg",
    },
    {
      name: "Barca Top salmao 33 pecas",
      price: "R$ 145,00",
      description: "Barca com 33 pecas e brinde de 5 unidades simples.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/combo_top_salmao(20260122190151).jpg",
    },
  ],
  "Para 1 pessoa": [
    {
      name: "Combo Nelore (25 pecas)",
      price: "R$ 55,00",
      description: "Combinado completo para 1 pessoa com boa variedade.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/NELORE(20260116120153).jpg",
    },
    {
      name: "Sushi do dia - Quarta (15 pecas)",
      price: "R$ 35,00",
      description: "Selecao especial do dia com excelente custo-beneficio.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/128(20211020211037).jpeg",
    },
    {
      name: "Mini Temaki Aberto - 4 pecas",
      price: "R$ 42,00",
      description: "Opcao individual com variedade de sabores e texturas.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/mini_temaki(20260118110130).jpg",
    },
  ],
  Temaki: [
    {
      name: "Temaki Salmao",
      price: "R$ 25,00",
      description: "Classico preparado com ingredientes frescos e montagem caprichada.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/WhatsApp_Image_2026-01-11_at_10.53.59(20260111110131).jpeg",
    },
    {
      name: "Mini Temaki Aberto",
      price: "R$ 42,00",
      description: "Versao compacta, pratica e muito saborosa.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/mini_temaki(20260118110130).jpg",
    },
  ],
  Hots: [
    {
      name: "Hot Pate de Salmao com Doritos",
      price: "R$ 20,00",
      description: "Hot com pate de salmao e finalizacao crocante com Doritos.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/hot_doritos(20260312130314).jpg",
    },
    {
      name: "Hot Pate de Salmao com couve crispy",
      price: "R$ 20,00",
      description: "Versao especial com couve crispy para mais crocancia.",
      image: "https://s3.amazonaws.com/up.pediraqui.com/hot_couve(20260312130314).jpg",
    },
    {
      name: "Hot Pate de Salmao com geleia de pimenta doce",
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

  const promoItems = (menuData["Promocoes Sushi da Fazenda"] || []).slice(0, 4);
  if (!promoItems.length) return;

  promoTrackEl.innerHTML = "";
  promoDotsEl.innerHTML = "";

  promoItems.forEach((item, index) => {
    const slide = document.createElement("article");
    slide.className = "promo-slide";
    slide.innerHTML = `
      <img class="promo-slide-bg" src="${item.image}" alt="${item.name}">
      <div class="promo-content">
        <span class="promo-chip">SELECAO EXCLUSIVA</span>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="promo-footer">
          <span class="promo-price">${item.price}</span>
          <a class="promo-cta" href="https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Oi, quero aproveitar a promocao: ${item.name}`)}" target="_blank" rel="noopener noreferrer">Pedir no WhatsApp</a>
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

renderTabs();
renderMenu();
renderCart();
renderPromoBanner();
