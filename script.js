
"use strict";

/* -------------------- WORLDWIDE CITY DATABASE -------------------- */
/* This is an offline starter database, not a complete world gazetteer. */

const cities = [
  ["Hyderabad","India","Asia","HYD"],["Rajahmundry","India","Asia","RJA"],
  ["Visakhapatnam","India","Asia","VTZ"],["Vijayawada","India","Asia","VGA"],
  ["Tirupati","India","Asia","TIR"],["Chennai","India","Asia","MAA"],
  ["Bengaluru","India","Asia","BLR"],["Mumbai","India","Asia","BOM"],
  ["Delhi","India","Asia","DEL"],["Kolkata","India","Asia","CCU"],
  ["Kochi","India","Asia","COK"],["Goa","India","Asia","GOI"],
  ["Pune","India","Asia","PNQ"],["Jaipur","India","Asia","JAI"],
  ["Ahmedabad","India","Asia","AMD"],["Lucknow","India","Asia","LKO"],
  ["Varanasi","India","Asia","VNS"],["Agra","India","Asia","AGR"],
  ["Amritsar","India","Asia","ATQ"],["Srinagar","India","Asia","SXR"],
  ["Kochi","India","Asia","COK"],["Port Blair","India","Asia","IXZ"],
  ["Thiruvananthapuram","India","Asia","TRV"],["Indore","India","Asia","IDR"],
  ["Bhubaneswar","India","Asia","BBI"],["Nagpur","India","Asia","NAG"],
  ["Coimbatore","India","Asia","CJB"],["Mysuru","India","Asia","MYQ"],
  ["Guwahati","India","Asia","GAU"],["Shimla","India","Asia","SLV"],
  ["Kathmandu","Nepal","Asia","KTM"],["Colombo","Sri Lanka","Asia","CMB"],
  ["Dhaka","Bangladesh","Asia","DAC"],["Malé","Maldives","Asia","MLE"],
  ["Thimphu","Bhutan","Asia","PBH"],["Karachi","Pakistan","Asia","KHI"],
  ["Lahore","Pakistan","Asia","LHE"],["Islamabad","Pakistan","Asia","ISB"],
  ["Dubai","United Arab Emirates","Asia","DXB"],
  ["Abu Dhabi","United Arab Emirates","Asia","AUH"],
  ["Sharjah","United Arab Emirates","Asia","SHJ"],
  ["Doha","Qatar","Asia","DOH"],["Riyadh","Saudi Arabia","Asia","RUH"],
  ["Jeddah","Saudi Arabia","Asia","JED"],["Muscat","Oman","Asia","MCT"],
  ["Kuwait City","Kuwait","Asia","KWI"],["Manama","Bahrain","Asia","BAH"],
  ["Istanbul","Türkiye","Europe","IST"],["Ankara","Türkiye","Europe","ESB"],
  ["Tokyo","Japan","Asia","TYO"],["Osaka","Japan","Asia","KIX"],
  ["Kyoto","Japan","Asia","KIX"],["Sapporo","Japan","Asia","CTS"],
  ["Seoul","South Korea","Asia","ICN"],["Busan","South Korea","Asia","PUS"],
  ["Beijing","China","Asia","PEK"],["Shanghai","China","Asia","PVG"],
  ["Guangzhou","China","Asia","CAN"],["Shenzhen","China","Asia","SZX"],
  ["Hong Kong","Hong Kong","Asia","HKG"],["Macau","Macau","Asia","MFM"],
  ["Taipei","Taiwan","Asia","TPE"],["Bangkok","Thailand","Asia","BKK"],
  ["Phuket","Thailand","Asia","HKT"],["Chiang Mai","Thailand","Asia","CNX"],
  ["Singapore","Singapore","Asia","SIN"],["Kuala Lumpur","Malaysia","Asia","KUL"],
  ["Penang","Malaysia","Asia","PEN"],["Langkawi","Malaysia","Asia","LGK"],
  ["Bali","Indonesia","Asia","DPS"],["Jakarta","Indonesia","Asia","CGK"],
  ["Yogyakarta","Indonesia","Asia","YIA"],["Manila","Philippines","Asia","MNL"],
  ["Cebu","Philippines","Asia","CEB"],["Hanoi","Vietnam","Asia","HAN"],
  ["Ho Chi Minh City","Vietnam","Asia","SGN"],["Da Nang","Vietnam","Asia","DAD"],
  ["Phnom Penh","Cambodia","Asia","PNH"],["Siem Reap","Cambodia","Asia","SAI"],
  ["Yangon","Myanmar","Asia","RGN"],["Tashkent","Uzbekistan","Asia","TAS"],
  ["Almaty","Kazakhstan","Asia","ALA"],["Baku","Azerbaijan","Asia","GYD"],
  ["Tbilisi","Georgia","Asia","TBS"],["Yerevan","Armenia","Asia","EVN"],
  ["Tehran","Iran","Asia","IKA"],["Amman","Jordan","Asia","AMM"],
  ["Tel Aviv","Israel","Asia","TLV"],["Beirut","Lebanon","Asia","BEY"],
  ["Cairo","Egypt","Africa","CAI"],["Cape Town","South Africa","Africa","CPT"],
  ["Johannesburg","South Africa","Africa","JNB"],["Nairobi","Kenya","Africa","NBO"],
  ["Mombasa","Kenya","Africa","MBA"],["Zanzibar","Tanzania","Africa","ZNZ"],
  ["Dar es Salaam","Tanzania","Africa","DAR"],["Kilimanjaro","Tanzania","Africa","JRO"],
  ["Marrakech","Morocco","Africa","RAK"],["Casablanca","Morocco","Africa","CMN"],
  ["Lagos","Nigeria","Africa","LOS"],["Abuja","Nigeria","Africa","ABV"],
  ["Accra","Ghana","Africa","ACC"],["Addis Ababa","Ethiopia","Africa","ADD"],
  ["Kigali","Rwanda","Africa","KGL"],["Mauritius","Mauritius","Africa","MRU"],
  ["Victoria","Seychelles","Africa","SEZ"],["Tunis","Tunisia","Africa","TUN"],
  ["Algiers","Algeria","Africa","ALG"],["Dakar","Senegal","Africa","DSS"],
  ["London","United Kingdom","Europe","LHR"],["Manchester","United Kingdom","Europe","MAN"],
  ["Edinburgh","United Kingdom","Europe","EDI"],["Birmingham","United Kingdom","Europe","BHX"],
  ["Paris","France","Europe","CDG"],["Nice","France","Europe","NCE"],
  ["Lyon","France","Europe","LYS"],["Marseille","France","Europe","MRS"],
  ["Rome","Italy","Europe","FCO"],["Milan","Italy","Europe","MXP"],
  ["Venice","Italy","Europe","VCE"],["Florence","Italy","Europe","FLR"],
  ["Naples","Italy","Europe","NAP"],["Barcelona","Spain","Europe","BCN"],
  ["Madrid","Spain","Europe","MAD"],["Seville","Spain","Europe","SVQ"],
  ["Lisbon","Portugal","Europe","LIS"],["Porto","Portugal","Europe","OPO"],
  ["Amsterdam","Netherlands","Europe","AMS"],["Rotterdam","Netherlands","Europe","RTM"],
  ["Brussels","Belgium","Europe","BRU"],["Bruges","Belgium","Europe","OST"],
  ["Zurich","Switzerland","Europe","ZRH"],["Geneva","Switzerland","Europe","GVA"],
  ["Interlaken","Switzerland","Europe","ZRH"],["Lucerne","Switzerland","Europe","ZRH"],
  ["Berlin","Germany","Europe","BER"],["Munich","Germany","Europe","MUC"],
  ["Frankfurt","Germany","Europe","FRA"],["Hamburg","Germany","Europe","HAM"],
  ["Vienna","Austria","Europe","VIE"],["Salzburg","Austria","Europe","SZG"],
  ["Prague","Czechia","Europe","PRG"],["Budapest","Hungary","Europe","BUD"],
  ["Athens","Greece","Europe","ATH"],["Santorini","Greece","Europe","JTR"],
  ["Mykonos","Greece","Europe","JMK"],["Heraklion","Greece","Europe","HER"],
  ["Copenhagen","Denmark","Europe","CPH"],["Stockholm","Sweden","Europe","ARN"],
  ["Oslo","Norway","Europe","OSL"],["Bergen","Norway","Europe","BGO"],
  ["Helsinki","Finland","Europe","HEL"],["Reykjavik","Iceland","Europe","KEF"],
  ["Warsaw","Poland","Europe","WAW"],["Krakow","Poland","Europe","KRK"],
  ["Bucharest","Romania","Europe","OTP"],["Sofia","Bulgaria","Europe","SOF"],
  ["Dubrovnik","Croatia","Europe","DBV"],["Split","Croatia","Europe","SPU"],
  ["Belgrade","Serbia","Europe","BEG"],["Sarajevo","Bosnia and Herzegovina","Europe","SJJ"],
  ["Tirana","Albania","Europe","TIA"],["Riga","Latvia","Europe","RIX"],
  ["Tallinn","Estonia","Europe","TLL"],["Vilnius","Lithuania","Europe","VNO"],
  ["Moscow","Russia","Europe","SVO"],["Saint Petersburg","Russia","Europe","LED"],
  ["New York","United States","North America","JFK"],
  ["Los Angeles","United States","North America","LAX"],
  ["San Francisco","United States","North America","SFO"],
  ["Chicago","United States","North America","ORD"],
  ["Miami","United States","North America","MIA"],
  ["Orlando","United States","North America","MCO"],
  ["Las Vegas","United States","North America","LAS"],
  ["Seattle","United States","North America","SEA"],
  ["Boston","United States","North America","BOS"],
  ["Washington, D.C.","United States","North America","IAD"],
  ["Honolulu","United States","North America","HNL"],
  ["Dallas","United States","North America","DFW"],
  ["Houston","United States","North America","IAH"],
  ["Atlanta","United States","North America","ATL"],
  ["Denver","United States","North America","DEN"],
  ["Phoenix","United States","North America","PHX"],
  ["Philadelphia","United States","North America","PHL"],
  ["San Diego","United States","North America","SAN"],
  ["Austin","United States","North America","AUS"],
  ["Nashville","United States","North America","BNA"],
  ["Toronto","Canada","North America","YYZ"],["Vancouver","Canada","North America","YVR"],
  ["Montreal","Canada","North America","YUL"],["Calgary","Canada","North America","YYC"],
  ["Ottawa","Canada","North America","YOW"],["Quebec City","Canada","North America","YQB"],
  ["Mexico City","Mexico","North America","MEX"],["Cancún","Mexico","North America","CUN"],
  ["Guadalajara","Mexico","North America","GDL"],["Havana","Cuba","North America","HAV"],
  ["Punta Cana","Dominican Republic","North America","PUJ"],
  ["San Juan","Puerto Rico","North America","SJU"],
  ["Nassau","Bahamas","North America","NAS"],["Kingston","Jamaica","North America","KIN"],
  ["San José","Costa Rica","North America","SJO"],
  ["Panama City","Panama","North America","PTY"],
  ["Guatemala City","Guatemala","North America","GUA"],
  ["Cartagena","Colombia","South America","CTG"],
  ["Bogotá","Colombia","South America","BOG"],
  ["Medellín","Colombia","South America","MDE"],
  ["Lima","Peru","South America","LIM"],["Cusco","Peru","South America","CUZ"],
  ["Rio de Janeiro","Brazil","South America","GIG"],
  ["São Paulo","Brazil","South America","GRU"],
  ["Salvador","Brazil","South America","SSA"],
  ["Buenos Aires","Argentina","South America","EZE"],
  ["Santiago","Chile","South America","SCL"],
  ["Atacama","Chile","South America","CJC"],
  ["Quito","Ecuador","South America","UIO"],
  ["Galápagos Islands","Ecuador","South America","GPS"],
  ["La Paz","Bolivia","South America","LPB"],
  ["Montevideo","Uruguay","South America","MVD"],
  ["Sydney","Australia","Oceania","SYD"],["Melbourne","Australia","Oceania","MEL"],
  ["Brisbane","Australia","Oceania","BNE"],["Perth","Australia","Oceania","PER"],
  ["Adelaide","Australia","Oceania","ADL"],["Gold Coast","Australia","Oceania","OOL"],
  ["Cairns","Australia","Oceania","CNS"],["Canberra","Australia","Oceania","CBR"],
  ["Auckland","New Zealand","Oceania","AKL"],["Queenstown","New Zealand","Oceania","ZQN"],
  ["Wellington","New Zealand","Oceania","WLG"],["Christchurch","New Zealand","Oceania","CHC"],
  ["Nadi","Fiji","Oceania","NAN"],["Papeete","French Polynesia","Oceania","PPT"],
  ["Port Moresby","Papua New Guinea","Oceania","POM"]
].map(([name,country,region,code]) => ({name,country,region,code}));

/* -------------------- DESTINATION COLLECTION -------------------- */

const destinations = [
  {id:"bali",name:"Bali",country:"Indonesia",region:"Asia",style:["beach","nature","romantic"],price:35000,rating:4.9,tag:"Island escape",image:"photo-1537996194471-e657df975ab4",description:"Tropical beaches, beautiful temples and unforgettable sunsets."},
  {id:"paris",name:"Paris",country:"France",region:"Europe",style:["romantic","culture","city"],price:65000,rating:4.8,tag:"Romantic favourite",image:"photo-1502602898657-3e91760cbb34",description:"Charming streets, art, cafés and the magic of the City of Light."},
  {id:"swiss",name:"Swiss Alps",country:"Switzerland",region:"Europe",style:["nature","adventure"],price:85000,rating:4.9,tag:"Mountain magic",image:"photo-1531366936337-7c912a4589a7",description:"Alpine scenery, fresh air, scenic trains and mountain adventures."},
  {id:"dubai",name:"Dubai",country:"United Arab Emirates",region:"Asia",style:["city","adventure","shopping"],price:42000,rating:4.7,tag:"City adventure",image:"photo-1512453979798-5ea266f8880c",description:"Skyline views, desert experiences, shopping and beach clubs."},
  {id:"tokyo",name:"Tokyo",country:"Japan",region:"Asia",style:["culture","city","shopping"],price:72000,rating:4.8,tag:"Culture & cuisine",image:"photo-1540959733332-eab4deabeeaf",description:"Discover lively neighbourhoods, amazing food and Japanese culture."},
  {id:"maldives",name:"Maldives",country:"Maldives",region:"Asia",style:["beach","romantic","nature"],price:78000,rating:4.9,tag:"Ocean paradise",image:"photo-1514282401047-d79a71a590e8",description:"Clear blue water, coral reefs and relaxing island stays."},
  {id:"newyork",name:"New York",country:"United States",region:"North America",style:["city","culture","shopping"],price:105000,rating:4.7,tag:"Big-city energy",image:"photo-1519501025264-65ba15a82390",description:"Iconic sights, neighbourhoods, museums and Broadway nights."},
  {id:"london",name:"London",country:"United Kingdom",region:"Europe",style:["culture","city","shopping"],price:82000,rating:4.7,tag:"Classic city break",image:"photo-1513635269975-59663e0ac1ad",description:"Royal landmarks, historic streets, theatres and cosy cafés."},
  {id:"singapore",name:"Singapore",country:"Singapore",region:"Asia",style:["city","nature","food"],price:38000,rating:4.8,tag:"Modern getaway",image:"photo-1525625293386-3f8f99389edd",description:"Gardens, waterfront views, incredible food and modern design."},
  {id:"goa",name:"Goa",country:"India",region:"Asia",style:["beach","nature","romantic"],price:14000,rating:4.6,tag:"Beach break",image:"photo-1512343879784-a960bf40e7f2",description:"Golden beaches, Portuguese heritage and laid-back evenings."},
  {id:"agra",name:"Agra",country:"India",region:"Asia",style:["culture"],price:9000,rating:4.6,tag:"Timeless wonder",image:"photo-1565967511849-76a60a516170",description:"Explore the Taj Mahal and the extraordinary history of India."},
  {id:"cape",name:"Cape Town",country:"South Africa",region:"Africa",style:["nature","adventure","beach"],price:90000,rating:4.8,tag:"Coastal beauty",image:"photo-1580060839134-75a5edca2e99",description:"Ocean scenery, Table Mountain and beautiful coastal drives."},
  {id:"kyoto",name:"Kyoto",country:"Japan",region:"Asia",style:["culture","nature","romantic"],price:76000,rating:4.8,tag:"Peaceful escape",image:"photo-1493976040374-85c8e12f0c0e",description:"Traditional streets, tranquil gardens and beautiful temples."},
  {id:"santorini",name:"Santorini",country:"Greece",region:"Europe",style:["beach","romantic"],price:95000,rating:4.9,tag:"Sunset views",image:"photo-1570077188670-e3a8d69ac5ff",description:"Whitewashed villages, blue domes and unforgettable sunsets."},
  {id:"rajasthan",name:"Jaipur",country:"India",region:"Asia",style:["culture","shopping"],price:11000,rating:4.6,tag:"Royal heritage",image:"photo-1599661046827-dacff0c0f09a",description:"Palaces, colourful markets and the flavours of Rajasthan."},
  {id:"queenstown",name:"Queenstown",country:"New Zealand",region:"Oceania",style:["adventure","nature"],price:115000,rating:4.9,tag:"Thrill seeker",image:"photo-1507699622108-4be3abd695ad",description:"Mountains, lakes, scenic hikes and outdoor adventures."},
  {id:"cairo",name:"Cairo",country:"Egypt",region:"Africa",style:["culture","adventure"],price:62000,rating:4.6,tag:"Ancient wonders",image:"photo-1572252009286-268acec5ca0a",description:"Discover ancient history, bustling markets and the pyramids."},
  {id:"rio",name:"Rio de Janeiro",country:"Brazil",region:"South America",style:["beach","city","adventure"],price:108000,rating:4.7,tag:"Vibrant escape",image:"photo-1483729558449-99ef09a8c325",description:"Colourful culture, iconic beaches and dramatic mountain views."}
].map(d => ({...d, image:`https://images.unsplash.com/${d.image}?auto=format&fit=crop&w=850&q=80`})); 

/* -------------------- STATE & HELPERS -------------------- */

const $ = id => document.getElementById(id);
const money = amount => "₹" + Math.round(amount).toLocaleString("en-IN");
const safeGet = key => {
  try { return JSON.parse(localStorage.getItem(key) || "[]"); }
  catch { return []; }
};
const safeSet = (key,value) => {
  try { localStorage.setItem(key,JSON.stringify(value)); }
  catch { showToast("Browser storage is unavailable. Your changes may not be saved."); }
};

let service = "flights";
let activeStyle = "all";
let currentResults = [];
let toastTimer;

const serviceLabels = {
  flights:"Flights", hotels:"Hotels", holidays:"Holiday packages",
  buses:"Buses", cabs:"Cabs"
};

const today = new Date();
const dateString = date => {
  const y = date.getFullYear();
  const m = String(date.getMonth()+1).padStart(2,"0");
  const d = String(date.getDate()).padStart(2,"0");
  return `${y}-${m}-${d}`;
};

$("departDate").min = dateString(today);
$("departDate").value = dateString(new Date(today.getTime()+7*86400000));
$("returnDate").min = $("departDate").value;
$("returnDate").value = dateString(new Date(today.getTime()+12*86400000));

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"),3000);
}

function openModal(html) {
  $("modalContent").innerHTML = html;
  $("modalBackdrop").classList.add("show");
}

function closeModal() {
  $("modalBackdrop").classList.remove("show");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[ch]));
}

function cityLabel(city) {
  return `${city.name}, ${city.country}`;
}

function findCity(value) {
  const query = value.trim().toLowerCase();
  if (!query) return null;

  return cities.find(c =>
    cityLabel(c).toLowerCase() === query ||
    c.name.toLowerCase() === query ||
    `${c.name} ${c.country}`.toLowerCase() === query
  ) || null;
}

/* -------------------- WORLDWIDE CITY AUTOCOMPLETE -------------------- */

function setupCityAutocomplete(inputId, listId) {
  const input = $(inputId);
  const list = $(listId);
  let highlighted = -1;
  let matches = [];

  function renderSuggestions() {
    const query = input.value.trim().toLowerCase();
    highlighted = -1;

    if (!query) {
      list.innerHTML = `
        <div class="suggestion-heading">Popular destinations</div>
        ${cities.filter(c => ["Hyderabad","London","Dubai","Singapore","Tokyo","New York","Paris","Bali"].includes(c.name))
          .map((c,i) => suggestionHTML(c,i)).join("")}`;
      list.classList.add("show");
      return;
    }

    const starts = [];
    const contains = [];

    cities.forEach(city => {
      const name = city.name.toLowerCase();
      const country = city.country.toLowerCase();
      const combined = `${name}, ${country}`;
      const searchText = `${name} ${country} ${city.code.toLowerCase()} ${city.region.toLowerCase()}`;

      if (name.startsWith(query) || country.startsWith(query)) starts.push(city);
      else if (searchText.includes(query) || combined.includes(query)) contains.push(city);
    });

    matches = [...starts,...contains].slice(0,12);

    if (!matches.length) {
      list.innerHTML = `<div class="suggestion-empty">No matching city found in this starter list. Try a city or country name, or check the spelling.</div>`;
    } else {
      list.innerHTML = `<div class="suggestion-heading">Matching cities · ${matches.length}${starts.length+contains.length>12?"+":""} results</div>` +
        matches.map((city,i) => suggestionHTML(city,i)).join("");
    }
    list.classList.add("show");
  }

  function suggestionHTML(city,index) {
    return `<button type="button" class="suggestion-item" data-index="${index}">
      <span class="suggestion-icon">📍</span>
      <span><span class="suggestion-name">${escapeHTML(city.name)}, ${escapeHTML(city.country)}</span>
      <span class="suggestion-meta">${escapeHTML(city.region)} · ${escapeHTML(city.code)}</span></span>
    </button>`;
  }

  function choose(city) {
    input.value = cityLabel(city);
    input.dataset.city = city.name;
    input.dataset.country = city.country;
    list.classList.remove("show");
    input.dispatchEvent(new Event("change",{bubbles:true}));
  }

  input.addEventListener("focus",renderSuggestions);
  input.addEventListener("input",() => {
    delete input.dataset.city;
    delete input.dataset.country;
    renderSuggestions();
  });

  list.addEventListener("mousedown",event => {
    const button = event.target.closest(".suggestion-item");
    if (!button) return;
    event.preventDefault();
    const query = input.value.trim().toLowerCase();
    const popular = cities.filter(c => ["Hyderabad","London","Dubai","Singapore","Tokyo","New York","Paris","Bali"].includes(c.name));
    const pool = query ? matches : popular;
    const city = pool[Number(button.dataset.index)];
    if (city) choose(city);
  });

  input.addEventListener("keydown",event => {
    const buttons = [...list.querySelectorAll(".suggestion-item")];
    if (event.key === "ArrowDown") {
      event.preventDefault();
      highlighted = Math.min(highlighted+1,buttons.length-1);
      buttons.forEach((b,i) => b.style.background = i===highlighted ? "#f0f6ff" : "white");
      buttons[highlighted]?.scrollIntoView({block:"nearest"});
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      highlighted = Math.max(highlighted-1,0);
      buttons.forEach((b,i) => b.style.background = i===highlighted ? "#f0f6ff" : "white");
    } else if (event.key === "Enter" && list.classList.contains("show") && buttons.length) {
      event.preventDefault();
      const selected = highlighted >= 0 ? buttons[highlighted] : buttons[0];
      selected.click();
      const idx = Number(selected.dataset.index);
      const pool = input.value.trim() ? matches : cities.filter(c => ["Hyderabad","London","Dubai","Singapore","Tokyo","New York","Paris","Bali"].includes(c.name));
      if (pool[idx]) choose(pool[idx]);
    } else if (event.key === "Escape") {
      list.classList.remove("show");
    }
  });

  document.addEventListener("click",event => {
    if (!event.target.closest(`#${inputId}`) && !event.target.closest(`#${listId}`)) {
      list.classList.remove("show");
    }
  });

  return {choose};
}

setupCityAutocomplete("from","fromSuggestions");
setupCityAutocomplete("to","toSuggestions");

/* -------------------- SEARCH FORM CONTROLS -------------------- */

function setService(nextService) {
  service = nextService;
  document.querySelectorAll(".service-tab").forEach(button => {
    button.classList.toggle("active",button.dataset.service===service);
  });

  $("bookingHeading").textContent = {
    flights:"Find your next flight",
    hotels:"Find your perfect stay",
    holidays:"Plan a memorable holiday",
    buses:"Find your bus journey",
    cabs:"Plan your cab ride"
  }[service];

  const isHotel = service === "hotels";
  const isCab = service === "cabs";
  $("tripOptions").classList.toggle("hidden",isHotel || isCab);
  $("returnField").classList.toggle("hidden",isHotel || isCab || document.querySelector('input[name="tripType"]:checked').value==="oneway");
  $("travellersField").classList.toggle("hidden",isCab);
  $("roomsField").classList.toggle("hidden",!isHotel);
  $("departField").querySelector("label").textContent = isHotel ? "CHECK-IN" : isCab ? "PICK-UP DATE" : "DEPARTURE";
  $("returnField").querySelector("label").textContent = isHotel ? "CHECK-OUT" : "RETURN";
  $("departDate").required = true;
  $("returnDate").required = !isHotel && !isCab && document.querySelector('input[name="tripType"]:checked').value==="round";
}

document.querySelectorAll(".service-tab,.offer-link").forEach(button => {
  button.addEventListener("click",() => {
    setService(button.dataset.service);
    $("booking").scrollIntoView({behavior:"smooth"});
  });
});

document.querySelectorAll('input[name="tripType"]').forEach(radio => {
  radio.addEventListener("change",() => setService(service));
});

$("departDate").addEventListener("change",() => {
  $("returnDate").min = $("departDate").value;
  if ($("returnDate").value < $("departDate").value) {
    $("returnDate").value = $("departDate").value;
  }
});

$("swapBtn").addEventListener("click",() => {
  const from = $("from").value;
  $("from").value = $("to").value;
  $("to").value = from;
  showToast("Your locations have been swapped.");
});

$("searchForm").addEventListener("submit",event => {
  event.preventDefault();

  const from = findCity($("from").value);
  const to = findCity($("to").value);

  if (!from || !to) {
    showToast("Please select both locations from the city suggestions.");
    (!from ? $("from") : $("to")).focus();
    return;
  }

  if (from.name === to.name && from.country === to.country) {
    showToast("Choose two different locations for your trip.");
    return;
  }

  if ($("returnDate").required && $("returnDate").value < $("departDate").value) {
    showToast("Return date must be on or after departure.");
    return;
  }

  searchTrips(from,to);
});

/* -------------------- SAMPLE TRAVEL SEARCH RESULTS -------------------- */

function searchTrips(from,to) {
  const travellers = Number($("travellers").value);
  const budgetValue = $("maxBudget").value;
  const base = {
    flights:9000,
    hotels:3200,
    holidays:22000,
    buses:850,
    cabs:650
  }[service];

  const sameCountry = from.country === to.country;
  const distanceFactor = sameCountry ? 1 : 2.3;
  const seed = (from.name.length*117 + to.name.length*73) % 6500;

  const variations = [
    {name:service==="hotels"?"Comfort Stay":service==="flights"?"Saver Option":service==="buses"?"Standard Bus":"Value Package",factor:.85,rating:4.2,tag:"Budget friendly"},
    {name:service==="hotels"?"City View Hotel":service==="flights"?"Flexible Option":service==="buses"?"Premium Bus":"Comfort Package",factor:1.15,rating:4.6,tag:"Popular choice"},
    {name:service==="hotels"?"Luxury Escape":service==="flights"?"Premium Option":service==="buses"?"Sleeper Bus":"Luxury Package",factor:1.65,rating:4.9,tag:"Premium experience"}
  ];

  currentResults = variations.map((item,index) => {
    let price = Math.round((base*distanceFactor + seed + index*450)*item.factor);
    if (service==="hotels") price = Math.round(price * Number($("rooms").value));
    return {
      id:`${service}-${from.code}-${to.code}-${index}`,
      service:service,
      name:item.name,
      from:cityLabel(from),
      to:cityLabel(to),
      price:price,
      rating:item.rating,
      tag:item.tag,
      date:$("departDate").value,
      returnDate:$("returnDate").value,
      travellers:travellers,
      rooms:Number($("rooms").value),
      days:Math.max(1,Math.round((new Date($("returnDate").value)-new Date($("departDate").value))/86400000)),
      details:service==="hotels"?"Room price estimate · check-in and check-out dates":service==="cabs"?"Sample cab fare estimate":service==="buses"?"Sample bus fare estimate":"Sample travel price · not live availability"
    };
  });

  if (budgetValue!=="any") {
    currentResults = currentResults.filter(item => item.price <= Number(budgetValue));
  }

  $("resultsTitle").textContent = `${serviceLabels[service]} to ${to.name}`;
  $("resultsSubtitle").textContent = `${from.name}, ${from.country} → ${to.name}, ${to.country} · ${$("departDate").value} · ${travellers} traveller${travellers>1?"s":""}`;
  renderResults();
  $("resultsSection").scrollIntoView({behavior:"smooth",block:"start"});
}

function renderResults() {
  const sort = $("sortResults").value;
  const results = [...currentResults];

  if (sort==="low") results.sort((a,b)=>a.price-b.price);
  if (sort==="high") results.sort((a,b)=>b.price-a.price);
  if (sort==="rating") results.sort((a,b)=>b.rating-a.rating);

  if (!results.length) {
    $("results").innerHTML = `<div class="empty-state"><span>🔎</span><h3>No options under this budget</h3><p>Try choosing a higher budget and search again.</p></div>`;
    return;
  }

  $("results").innerHTML = results.map(item => `
    <article class="result-card">
      <div class="result-top"><span class="result-type">${escapeHTML(serviceLabels[item.service])}</span><span class="result-rating">★ ${item.rating.toFixed(1)}</span></div>
      <h3>${escapeHTML(item.name)}</h3>
      <div class="result-route">${escapeHTML(item.from)}<br>↓<br>${escapeHTML(item.to)}</div>
      <div class="result-meta"><span>${escapeHTML(item.tag)}</span><span>${escapeHTML(item.date)}</span><span>${item.travellers} traveller(s)</span></div>
      <p class="muted">${escapeHTML(item.details)}</p>
      <div class="result-footer">
        <div class="result-price"><small>Estimated ${item.service==="hotels"?"room cost":"price"}${item.service==="hotels"?"":" per person"}</small><strong>${money(item.price)}</strong></div>
        <button data-book="${escapeHTML(item.id)}">View / Book</button>
      </div>
    </article>`).join("");
}

$("sortResults").addEventListener("change",renderResults);

$("results").addEventListener("click",event => {
  const button = event.target.closest("[data-book]");
  if (!button) return;
  const item = currentResults.find(result=>result.id===button.dataset.book);
  if (item) showBookingConfirmation(item);
});

function showBookingConfirmation(item) {
  openModal(`
    <span class="eyebrow">TRIP DETAILS</span>
    <h2>${escapeHTML(item.name)}</h2>
    <p>${escapeHTML(item.from)} → ${escapeHTML(item.to)}</p>
    <div class="modal-item">
      <h3>Estimated price: ${money(item.price)}</h3>
      <p>Service: ${escapeHTML(serviceLabels[item.service])}</p>
      <p>Departure / check-in: ${escapeHTML(item.date)}</p>
      <p>Return: ${escapeHTML(item.returnDate || "Not selected")}</p>
      <p>Travellers: ${item.travellers}</p>
      <p>${escapeHTML(item.details)}</p>
    </div>
    <p><strong>Demo only:</strong> no real ticket, room, cab, or reservation will be created.</p>
    <button class="button button-primary full-button" id="confirmDemo">Save demo trip</button>
  `);

  $("confirmDemo").addEventListener("click",() => {
    const trips = safeGet("tripnest_trips");
    trips.push({...item,bookingRef:"TN"+Date.now().toString().slice(-8),savedAt:new Date().toISOString()});
    safeSet("tripnest_trips",trips);
    closeModal();
    showToast("Demo trip saved! Open My Trips to view it.");
  });
}

/* -------------------- DESTINATION CARDS & FILTERS -------------------- */

function isWishlisted(id) {
  return safeGet("tripnest_wishlist").includes(id);
}

function toggleWishlist(id) {
  let wishlist = safeGet("tripnest_wishlist");
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item=>item!==id);
    showToast("Removed from your wishlist.");
  } else {
    wishlist.push(id);
    showToast("Destination saved to your wishlist!");
  }
  safeSet("tripnest_wishlist",wishlist);
  updateWishlistCount();
  renderDestinations();
}

function updateWishlistCount() {
  $("wishCount").textContent = safeGet("tripnest_wishlist").length;
}

function renderDestinations() {
  let list = destinations.filter(destination =>
    activeStyle==="all" || destination.style.includes(activeStyle)
  );

  if (!$("allDestinationsBtn").dataset.showAll) list = list.slice(0,9);

  $("destinationGrid").innerHTML = list.map(destination => `
    <article class="destination-card">
      <div class="destination-image-wrap">
        <img loading="lazy" src="${destination.image}" alt="${escapeHTML(destination.name)}" onerror="this.style.display='none'">
        <span class="destination-badge">${escapeHTML(destination.tag)}</span>
        <button class="heart-button ${isWishlisted(destination.id)?"saved":""}" data-heart="${destination.id}" aria-label="Save ${escapeHTML(destination.name)}">${isWishlisted(destination.id)?"♥":"♡"}</button>
      </div>
      <div class="destination-info">
        <span class="destination-location">📍 ${escapeHTML(destination.country)}</span>
        <h3>${escapeHTML(destination.name)}</h3>
        <p>${escapeHTML(destination.description)}</p>
        <div class="destination-bottom">
          <div class="destination-price"><small>Estimated trip from</small><strong>${money(destination.price)}</strong></div>
          <button data-explore="${destination.id}">Explore →</button>
        </div>
      </div>
    </article>`).join("") || `<div class="empty-state"><h3>No destinations in this category yet</h3><p>Try another travel style.</p></div>`;
}

$("destinationGrid").addEventListener("click",event => {
  const heart = event.target.closest("[data-heart]");
  const explore = event.target.closest("[data-explore]");
  if (heart) toggleWishlist(heart.dataset.heart);
  if (explore) {
    const destination = destinations.find(d=>d.id===explore.dataset.explore);
    if (destination) exploreDestination(destination);
  }
});

$("styleFilters").addEventListener("click",event => {
  const button = event.target.closest("[data-style]");
  if (!button) return;
  activeStyle = button.dataset.style;
  document.querySelectorAll(".style-chip").forEach(chip=>chip.classList.toggle("active",chip===button));
  renderDestinations();
});

$("allDestinationsBtn").addEventListener("click",() => {
  if ($("allDestinationsBtn").dataset.showAll) {
    delete $("allDestinationsBtn").dataset.showAll;
    $("allDestinationsBtn").textContent = "Show all destinations ↗";
  } else {
    $("allDestinationsBtn").dataset.showAll = "true";
    $("allDestinationsBtn").textContent = "Show fewer ↑";
  }
  renderDestinations();
});

function exploreDestination(destination) {
  const match = cities.find(c=>c.name.toLowerCase()===destination.name.toLowerCase() && c.country===destination.country)
    || cities.find(c=>c.country===destination.country);

  $("to").value = match ? cityLabel(match) : `${destination.name}, ${destination.country}`;
  if (!$("from").value) $("from").value = "Hyderabad, India";
  $("maxBudget").value = "any";
  setService("holidays");
  showToast(`${destination.name} selected! Choose your departure city and search.`);
  $("booking").scrollIntoView({behavior:"smooth"});
  $("to").focus({preventScroll:true});
}

/* -------------------- WISHLIST & MY TRIPS -------------------- */

$("wishlistBtn").addEventListener("click",() => {
  const wishlist = safeGet("tripnest_wishlist");
  const saved = destinations.filter(destination=>wishlist.includes(destination.id));

  openModal(`
    <span class="eyebrow">YOUR SAVED PLACES</span>
    <h2>My wishlist ♡</h2>
    ${saved.length ? saved.map(d=>`
      <div class="modal-item">
        <h3>${escapeHTML(d.name)}, ${escapeHTML(d.country)}</h3>
        <p>${escapeHTML(d.description)}</p>
        <p>Estimated trip from <strong>${money(d.price)}</strong></p>
        <button data-modal-explore="${d.id}">Plan this trip</button>
        <button data-remove-wish="${d.id}">Remove</button>
      </div>`).join("") : `<div class="modal-empty"><p>♡</p><h3>Your wishlist is waiting</h3><p>Save destinations you love and they'll appear here.</p></div>`}
  `);

  $("modalContent").addEventListener("click",event => {
    const remove = event.target.closest("[data-remove-wish]");
    const explore = event.target.closest("[data-modal-explore]");
    if (remove) {
      toggleWishlist(remove.dataset.removeWish);
      $("wishlistBtn").click();
    }
    if (explore) {
      const destination = destinations.find(d=>d.id===explore.dataset.modalExplore);
      closeModal();
      if (destination) exploreDestination(destination);
    }
  });
});

$("tripsBtn").addEventListener("click",showMyTrips);

function showMyTrips() {
  const trips = safeGet("tripnest_trips");
  openModal(`
    <span class="eyebrow">YOUR TRAVEL PLANS</span>
    <h2>My Trips 🧳</h2>
    ${trips.length ? [...trips].reverse().map((trip,index)=>`
      <div class="modal-item">
        <h3>${escapeHTML(trip.name)}</h3>
        <p>${escapeHTML(trip.from)} → ${escapeHTML(trip.to)}</p>
        <p>${escapeHTML(trip.date)} · ${escapeHTML(serviceLabels[trip.service] || trip.service)}</p>
        <p>Demo reference: ${escapeHTML(trip.bookingRef || "Saved trip")}</p>
        <p><strong>${money(trip.price)}</strong></p>
        <button data-delete-trip="${trips.length-1-index}">Remove trip</button>
      </div>`).join("") : `<div class="modal-empty"><p>🧳</p><h3>No trips saved yet</h3><p>Search for a trip and save a demo booking to see it here.</p></div>`}
  `);

  $("modalContent").addEventListener("click",event => {
    const button = event.target.closest("[data-delete-trip]");
    if (!button) return;
    const updated = safeGet("tripnest_trips");
    updated.splice(Number(button.dataset.deleteTrip),1);
    safeSet("tripnest_trips",updated);
    showMyTrips();
    showToast("Saved trip removed.");
  });
}

/* -------------------- DEMO LOGIN -------------------- */

$("loginBtn").addEventListener("click",() => {
  openModal(`
    <span class="eyebrow">WELCOME TO TRIPNEST</span>
    <h2>Your adventures, all in one place.</h2>
    <p>This demo sign-in form does not create an account or send your details to a server.</p>
    <form id="demoLoginForm" class="modal-form">
      <label>Email address<input type="email" id="demoEmail" placeholder="you@example.com" required></label>
      <label>Password<input type="password" id="demoPassword" placeholder="Enter any demo password" minlength="4" required></label>
      <button class="button button-primary" type="submit">Continue (demo)</button>
    </form>
  `);

  $("demoLoginForm").addEventListener("submit",event => {
    event.preventDefault();
    closeModal();
    showToast("Demo sign-in complete. No account was created.");
  });
});

/* -------------------- BUDGET CALCULATOR -------------------- */

function calculateBudget() {
  const people = Math.max(1,Math.min(20,Number($("budgetPeople").value)||1));
  const days = Math.max(1,Math.min(90,Number($("budgetDays").value)||1));
  const transport = Math.max(0,Number($("budgetTransport").value)||0);
  const hotel = Math.max(0,Number($("budgetHotel").value)||0);
  const daily = Math.max(0,Number($("budgetDaily").value)||0);
  const rooms = Math.ceil(people/2);
  const transportTotal = transport*people;
  const hotelTotal = hotel*rooms*days;
  const dailyTotal = daily*people*days;
  const total = transportTotal+hotelTotal+dailyTotal;

  $("budgetTotal").textContent = money(total);
  $("budgetBreakdown").textContent =
    `Transport ${money(transportTotal)} · Stay ${money(hotelTotal)} · Food & activities ${money(dailyTotal)}. Estimated for ${people} traveller(s), ${days} day(s), ${rooms} room(s).`;
}

$("calculateBudget").addEventListener("click",calculateBudget);
["budgetPeople","budgetDays","budgetTransport","budgetHotel","budgetDaily"].forEach(id => {
  $(id).addEventListener("input",calculateBudget);
});

/* -------------------- NEWSLETTER DEMO -------------------- */

$("newsletterForm").addEventListener("submit",event => {
  event.preventDefault();
  showToast("Thanks for your interest! Newsletter signup is demo-only.");
  $("newsletterForm").reset();
});

/* -------------------- MOBILE NAVIGATION & MODAL -------------------- */

$("mobileMenu").addEventListener("click",() => {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  $("mobileMenu").textContent = nav.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click",() => {
    document.querySelector(".nav").classList.remove("open");
    $("mobileMenu").textContent = "☰";
  });
});

$("closeModal").addEventListener("click",closeModal);
$("modalBackdrop").addEventListener("click",event => {
  if (event.target === $("modalBackdrop")) closeModal();
});
document.addEventListener("keydown",event => {
  if (event.key === "Escape") closeModal();
});

/* -------------------- STARTUP -------------------- */

setService("flights");
renderDestinations();
updateWishlistCount();
calculateBudget();
