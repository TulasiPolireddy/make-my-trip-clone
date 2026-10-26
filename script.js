const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const money = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

const today = new Date();
const formatDate = date =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

$("#year").textContent = today.getFullYear();
$("#depart").min = formatDate(today);
$("#depart").value = formatDate(addDays(today, 7));
$("#return").min = $("#depart").value;
$("#return").value = formatDate(addDays(today, 10));

const services = {
  flights: {
    title: "Sample flights",
    fromLabel: "FROM",
    toLabel: "TO",
    from: "Hyderabad",
    to: "Delhi",
    depart: "DEPARTURE",
    returnLabel: "RETURN",
    returnVisible: true,
    tripTypes: true
  },
  hotels: {
    title: "Sample hotels",
    fromLabel: "DESTINATION",
    toLabel: "AREA",
    from: "Goa",
    to: "Any area",
    depart: "CHECK-IN",
    returnLabel: "CHECK-OUT",
    returnVisible: true,
    tripTypes: false
  },
  holidays: {
    title: "Holiday packages",
    fromLabel: "STARTING CITY",
    toLabel: "DESTINATION",
    from: "Hyderabad",
    to: "Goa",
    depart: "START DATE",
    returnLabel: "END DATE",
    returnVisible: true,
    tripTypes: false
  },
  buses: {
    title: "Sample buses",
    fromLabel: "FROM CITY",
    toLabel: "TO CITY",
    from: "Hyderabad",
    to: "Bengaluru",
    depart: "TRAVEL DATE",
    returnLabel: "RETURN",
    returnVisible: false,
    tripTypes: false
  },
  cabs: {
    title: "Sample cabs",
    fromLabel: "PICK-UP",
    toLabel: "DROP-OFF",
    from: "Hyderabad Airport",
    to: "HITEC City",
    depart: "PICK-UP DATE",
    returnLabel: "RETURN",
    returnVisible: false,
    tripTypes: false
  }
};

const catalog = {
  flights: [
    {
      id: "f1",
      name: "SkyWays Air",
      description: "Non-stop flight · 2h 10m",
      price: 4299,
      rating: 4.4,
      tags: ["Cabin bag", "Direct flight"],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f2",
      name: "BlueSky Airways",
      description: "Non-stop flight · 2h 15m",
      price: 4890,
      rating: 4.7,
      tags: ["Popular", "Direct flight"],
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f3",
      name: "Air Horizon",
      description: "One stop · 4h 35m",
      price: 3799,
      rating: 4.1,
      tags: ["Budget fare", "One stop"],
      image: "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "f4",
      name: "Premium Skies",
      description: "Non-stop flight · 2h 05m",
      price: 7299,
      rating: 4.9,
      tags: ["Premium", "Extra legroom"],
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=600&q=80"
    }
  ],

  hotels: [
    {
      id: "h1",
      name: "The Palm Retreat",
      description: "Boutique hotel · Swimming pool",
      price: 3499,
      rating: 4.7,
      tags: ["Breakfast", "Free Wi-Fi"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "h2",
      name: "Cloud Nine Suites",
      description: "Modern hotel · City views",
      price: 2899,
      rating: 4.5,
      tags: ["Gym", "Wi-Fi"],
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "h3",
      name: "Heritage House",
      description: "Heritage hotel · Old town",
      price: 4299,
      rating: 4.8,
      tags: ["Restaurant", "Breakfast"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "h4",
      name: "EasyStay Rooms",
      description: "Budget accommodation",
      price: 1599,
      rating: 4.0,
      tags: ["Budget", "Wi-Fi"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80"
    }
  ],

  holidays: [
    {
      id: "p1",
      name: "Goa Coastal Escape",
      description: "3 nights · Beaches and sunset cruise",
      price: 12999,
      rating: 4.7,
      tags: ["Hotel included", "Sightseeing"],
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p2",
      name: "Himalayan Hideaway",
      description: "4 nights · Mountain getaway",
      price: 18999,
      rating: 4.8,
      tags: ["Hotel included", "Nature"],
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p3",
      name: "Royal Rajasthan Trail",
      description: "3 nights · Forts and culture",
      price: 14999,
      rating: 4.5,
      tags: ["Culture", "Local experiences"],
      image: "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "p4",
      name: "Kerala Nature Retreat",
      description: "4 nights · Backwaters and hills",
      price: 16999,
      rating: 4.6,
      tags: ["Nature", "Sightseeing"],
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
    }
  ],

  buses: [
    {
      id: "b1",
      name: "ComfortLine Sleeper",
      description: "AC sleeper coach · Overnight",
      price: 999,
      rating: 4.5,
      tags: ["Sleeper", "Charging point"],
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b2",
      name: "RoadRunner Express",
      description: "AC semi-sleeper coach",
      price: 799,
      rating: 4.2,
      tags: ["Reclining seat", "AC"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "b3",
      name: "BudgetRide",
      description: "AC seater · Day journey",
      price: 599,
      rating: 4.0,
      tags: ["Budget", "Seater"],
      image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&w=600&q=80"
    }
  ],

  cabs: [
    {
      id: "c1",
      name: "Compact AC Cab",
      description: "Hatchback · Up to 3 passengers",
      price: 1299,
      rating: 4.4,
      tags: ["AC", "1 bag"],
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c2",
      name: "Comfort Sedan",
      description: "Sedan · Up to 4 passengers",
      price: 1799,
      rating: 4.7,
      tags: ["AC", "2 bags"],
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "c3",
      name: "Family SUV",
      description: "SUV · Up to 6 passengers",
      price: 2499,
      rating: 4.8,
      tags: ["AC", "4 bags"],
      image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

const state = {
  service: "flights",
  results: [],
  search: null,
  wishlist: loadStorage("tripnestWishlist"),
  trips: loadStorage("tripnestTrips")
};

function loadStorage(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveStorage() {
  localStorage.setItem("tripnestWishlist", JSON.stringify(state.wishlist));
  localStorage.setItem("tripnestTrips", JSON.stringify(state.trips));
  renderWishlist();
  renderTrips();
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");

  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => {
    element.classList.remove("show");
  }, 2600);
}

/* Service tabs */

function setService(service) {
  if (!services[service]) return;

  state.service = service;
  const config = services[service];

  $$(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.service === service);
    tab.setAttribute(
      "aria-pressed",
      String(tab.dataset.service === service)
    );
  });

  $("#fromLabel").textContent = config.fromLabel;
  $("#toLabel").textContent = config.toLabel;
  $("#from").value = config.from;
  $("#to").value = config.to;
  $("#departLabel").textContent = config.depart;
  $("#returnLabel").textContent = config.returnLabel;

  $("#returnField").hidden = !config.returnVisible;
  $("#tripTypes").hidden = !config.tripTypes;

  $("#return").required =
    service === "flights" &&
    $('input[name="trip"]:checked').value === "round";

  if (service === "hotels" || service === "holidays") {
    $("#return").value = formatDate(
      addDays(new Date($("#depart").value), 2)
    );
  }
}

$$(".tab").forEach(tab => {
  tab.addEventListener("click", () => setService(tab.dataset.service));
});

$$("[data-service]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    setService(button.dataset.service);
    $("#booking").scrollIntoView({ behavior: "smooth" });
  });
});

$("#menuButton").addEventListener("click", () => {
  $("#navigation").classList.toggle("open");
});

$$("nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("#navigation").classList.remove("open");
  });
});

/* Search form */

$$('input[name="trip"]').forEach(radio => {
  radio.addEventListener("change", () => {
    const oneWay = $('input[name="trip"]:checked').value === "oneway";

    $("#returnField").hidden = oneWay;
    $("#return").required = !oneWay;
  });
});

$("#swapButton").addEventListener("click", () => {
  const from = $("#from").value;
  $("#from").value = $("#to").value;
  $("#to").value = from;
});

$("#depart").addEventListener("change", () => {
  $("#return").min = $("#depart").value;

  if ($("#return").value < $("#depart").value) {
    $("#return").value = $("#depart").value;
  }
});

function readSearch() {
  const oneWay =
    state.service === "flights" &&
    $('input[name="trip"]:checked').value === "oneway";

  return {
    service: state.service,
    from: $("#from").value.trim(),
    to: $("#to").value.trim(),
    depart: $("#depart").value,
    return: $("#returnField").hidden || oneWay
      ? ""
      : $("#return").value,
    travellers: Number($("#travellers").value)
  };
}

$("#searchForm").addEventListener("submit", event => {
  event.preventDefault();

  const search = readSearch();

  if (!search.from || !search.to) {
    toast("Please enter your travel details.");
    return;
  }

  if (search.depart < formatDate(today)) {
    toast("Please choose today or a future date.");
    return;
  }

  if (search.return && search.return < search.depart) {
    toast("Return date must be after departure.");
    return;
  }

  state.search = search;
  state.results = catalog[search.service].map(item => ({ ...item }));

  $("#resultsTitle").textContent = services[search.service].title;
  $("#resultsSubtitle").textContent =
    `${search.from} → ${search.to} · ${search.depart}` +
    `${search.return ? " to " + search.return : ""}` +
    ` · ${search.travellers} traveller(s)`;

  $("#resultsSection").hidden = false;
  $("#priceFilter").value = 25000;
  $("#priceLabel").textContent = money(25000);
  $("#ratingFilter").checked = false;
  $("#savedFilter").checked = false;
  $("#sort").value = "recommended";

  renderResults();

  $("#resultsSection").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/* Filters and sorting */

$("#sort").addEventListener("change", renderResults);

$("#priceFilter").addEventListener("input", () => {
  $("#priceLabel").textContent = money(Number($("#priceFilter").value));
  renderResults();
});

$("#ratingFilter").addEventListener("change", renderResults);
$("#savedFilter").addEventListener("change", renderResults);

$("#resetFilters").addEventListener("click", () => {
  $("#priceFilter").value = 25000;
  $("#priceLabel").textContent = money(25000);
  $("#ratingFilter").checked = false;
  $("#savedFilter").checked = false;
  $("#sort").value = "recommended";
  renderResults();
});

$("#clearResults").addEventListener("click", () => {
  $("#resultsSection").hidden = true;
});

function renderResults() {
  const maximum = Number($("#priceFilter").value);

  let items = state.results.filter(item => item.price <= maximum);

  if ($("#ratingFilter").checked) {
    items = items.filter(item => item.rating >= 4.5);
  }

  if ($("#savedFilter").checked) {
    items = items.filter(item => state.wishlist.includes(item.id));
  }

  const sort = $("#sort").value;

  if (sort === "low") items.sort((a, b) => a.price - b.price);
  if (sort === "high") items.sort((a, b) => b.price - a.price);
  if (sort === "rating") items.sort((a, b) => b.rating - a.rating);

  $("#resultCount").textContent =
    `${items.length} sample option(s)`;

  if (!items.length) {
    $("#results").innerHTML =
      '<div class="no-results">No results found. Try changing your filters.</div>';
    return;
  }

  const priceUnit = {
    flights: "/ person",
    hotels: "/ night",
    holidays: "/ person",
    buses: "/ seat",
    cabs: "/ ride"
  }[state.service];

  $("#results").innerHTML = items.map(item => {
    const saved = state.wishlist.includes(item.id);

    return `
      <article class="result-card">
        <img
          src="${escapeHTML(item.image)}"
          alt="${escapeHTML(item.name)}"
          loading="lazy"
        >

        <div class="result-info">
          <span class="rating-chip">★ ${item.rating.toFixed(1)}</span>
          <h3>${escapeHTML(item.name)}</h3>
          <p>${escapeHTML(item.description)}</p>

          <div class="tags">
            ${item.tags.map(tag =>
              `<span>${escapeHTML(tag)}</span>`
            ).join("")}
          </div>
        </div>

        <div class="result-side">
          <div>
            <div class="result-price">${money(item.price)}</div>
            <small>${priceUnit} · demo price</small>
          </div>

          <div>
            <button class="book-btn" data-book="${item.id}">
              View / Book
            </button>

            <button
              class="save-btn ${saved ? "saved" : ""}"
              data-save="${item.id}"
            >${saved ? "♥ Saved" : "♡ Save"}</button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  $$("[data-book]", $("#results")).forEach(button => {
    button.addEventListener("click", () => openBooking(button.dataset.book));
  });

  $$("[data-save]", $("#results")).forEach(button => {
    button.addEventListener("click", () => toggleWishlist(button.dataset.save));
  });
}

/* Wishlist */

function findItem(id) {
  return Object.values(catalog)
    .flat()
    .find(item => item.id === id);
}

function toggleWishlist(id) {
  if (state.wishlist.includes(id)) {
    state.wishlist = state.wishlist.filter(savedId => savedId !== id);
    toast("Removed from wishlist.");
  } else {
    state.wishlist.push(id);
    toast("Added to wishlist.");
  }

  saveStorage();

  if (!$("#resultsSection").hidden) {
    renderResults();
  }
}

function renderWishlist() {
  $("#wishlistCount").textContent = `(${state.wishlist.length})`;

  const items = state.wishlist.map(findItem).filter(Boolean);

  if (!items.length) {
    $("#wishlistItems").innerHTML =
      '<p class="empty-message">Save a flight, hotel or holiday to see it here.</p>';
    return;
  }

  $("#wishlistItems").innerHTML = items.map(item => `
    <article class="wishlist-card">
      <h3>${escapeHTML(item.name)}</h3>
      <p>★ ${item.rating.toFixed(1)} · ${escapeHTML(item.description)}</p>
      <strong>${money(item.price)}</strong>
      <br>
      <button class="remove-btn" data-remove="${item.id}">
        Remove from wishlist
      </button>
    </article>
  `).join("");

  $$("[data-remove]", $("#wishlistItems")).forEach(button => {
    button.addEventListener("click", () => toggleWishlist(button.dataset.remove));
  });
}

/* Modal helpers */

function openModal(html) {
  $("#modalContent").innerHTML = html;
  $("#modalBackdrop").hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  $("#modalBackdrop").hidden = true;
  document.body.style.overflow = "";
}

$("#closeModal").addEventListener("click", closeModal);

$("#modalBackdrop").addEventListener("click", event => {
  if (event.target === $("#modalBackdrop")) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

/* Demo booking */

function openBooking(id) {
  const item = findItem(id);
  if (!item || !state.search) return;

  const search = state.search;

  let quantity = 1;

  if (search.service === "holidays") {
    quantity = search.travellers;
  }

  if (search.service === "hotels") {
    const nights = Math.max(
      1,
      Math.round(
        (new Date(search.return || addDays(new Date(search.depart), 1)) -
          new Date(search.depart)) / 86400000
      )
    );

    quantity = nights;
  }

  const subtotal = item.price * quantity;
  const fee = Math.round(subtotal * 0.04);
  const total = subtotal + fee;

  openModal(`
    <p class="eyebrow">DEMO RESERVATION</p>
    <h2>Review your booking</h2>
    <p>This is a simulated booking. No real reservation or payment will occur.</p>

    <div class="price-box">
      <div class="price-line">
        <span>${escapeHTML(item.name)}</span>
        <b>${money(subtotal)}</b>
      </div>

      <div class="price-line">
        <span>Demo service fee</span>
        <span>${money(fee)}</span>
      </div>

      <div class="price-line">
        <span>Route</span>
        <span>${escapeHTML(search.from)} → ${escapeHTML(search.to)}</span>
      </div>

      <div class="price-line">
        <span>Departure / check-in</span>
        <span>${escapeHTML(search.depart)}</span>
      </div>

      ${search.return ? `
        <div class="price-line">
          <span>Return / check-out</span>
          <span>${escapeHTML(search.return)}</span>
        </div>
      ` : ""}

      <div class="price-line total">
        <span>Demo total</span>
        <span>${money(total)}</span>
      </div>
    </div>

    <form id="bookingForm" class="modal-form">
      <label>
        Traveller / guest name
        <input name="name" required placeholder="Full name" autocomplete="name">
      </label>

      <label>
        Email address
        <input name="email" type="email" required placeholder="you@example.com" autocomplete="email">
      </label>

      <label>
        Phone number
        <input name="phone" type="tel" required pattern="[0-9+() -]{7,18}" placeholder="Mobile number" autocomplete="tel">
      </label>

      <label class="check-label">
        <input type="checkbox" required>
        I understand this is a demo booking, not a real reservation.
      </label>

      <button type="submit">Confirm Demo Booking →</button>
    </form>
  `);

  $("#bookingForm").addEventListener("submit", event => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const trip = {
      reference: "TN" + Math.random().toString(36).slice(2, 8).toUpperCase(),
      name: item.name,
      price: total,
      service: search.service,
      from: search.from,
      to: search.to,
      depart: search.depart,
      return: search.return,
      traveller: form.get("name"),
      email: form.get("email")
    };

    state.trips.unshift(trip);
    saveStorage();

    openModal(`
      <p class="eyebrow">DEMO CONFIRMED</p>
      <h2>Your sample booking is saved!</h2>

      <div class="success-box">
        <strong>Reference: ${trip.reference}</strong><br><br>
        ${escapeHTML(trip.name)}<br>
        ${escapeHTML(trip.from)} → ${escapeHTML(trip.to)}<br>
        Date: ${escapeHTML(trip.depart)}<br>
        Demo total: ${money(trip.price)}
      </div>

      <p>No travel provider was contacted and no payment was taken.</p>

      <button id="viewTrips" class="book-btn">
        View My Trips
      </button>
    `);

    $("#viewTrips").addEventListener("click", () => {
      closeModal();
      $("#my-trips").scrollIntoView({ behavior: "smooth" });
    });

    toast("Demo booking saved!");
  });
}

/* My Trips */

function renderTrips() {
  const trips = $("#trips");

  if (!state.trips.length) {
    trips.innerHTML =
      '<p class="empty-message">Your booked demo trips will appear here.</p>';
    return;
  }

  trips.innerHTML = state.trips.map(trip => `
    <article class="trip-card">
      <div>
        <h3>${escapeHTML(trip.name)} · Demo</h3>
        <p>${escapeHTML(trip.from)} → ${escapeHTML(trip.to)}</p>
        <p>Date: ${escapeHTML(trip.depart)}</p>
        <p>Reference: ${escapeHTML(trip.reference)}</p>
        <button class="remove-btn" data-delete-trip="${trip.reference}">
          Remove trip
        </button>
      </div>

      <div class="trip-price">
        ${money(trip.price)}
      </div>
    </article>
  `).join("");

  $$("[data-delete-trip]", trips).forEach(button => {
    button.addEventListener("click", () => {
      state.trips = state.trips.filter(
        trip => trip.reference !== button.dataset.deleteTrip
      );

      saveStorage();
      toast("Demo trip removed.");
    });
  });
}

/* Login interface */

$("#loginButton").addEventListener("click", () => {
  openModal(`
    <p class="eyebrow">WELCOME TO TRIPNEST</p>
    <h2>Login / Sign up</h2>
    <p>Front-end demo only. Authentication is not connected to a server.</p>

    <form id="loginForm" class="modal-form">
      <label>
        Email address
        <input type="email" name="email" required placeholder="you@example.com">
      </label>

      <label>
        Password
        <input type="password" name="password" required minlength="6" placeholder="At least 6 characters">
      </label>

      <button type="submit">Continue →</button>
    </form>
  `);

  $("#loginForm").addEventListener("submit", event => {
    event.preventDefault();
    closeModal();
    toast("Demo only: no account was created.");
  });
});

/* Destination selection */

$$("[data-destination]").forEach(button => {
  button.addEventListener("click", () => {
    setService("holidays");
    $("#to").value = button.dataset.destination;
    $("#booking").scrollIntoView({ behavior: "smooth" });
    toast(`${button.dataset.destination} selected!`);
  });
});

/* Newsletter */

$("#newsletterForm").addEventListener("submit", event => {
  event.preventDefault();

  $("#newsletterEmail").value = "";
  toast("Thank you! Demo signup completed. No email was sent.");
});

/* Initial rendering */

renderWishlist();
renderTrips();
