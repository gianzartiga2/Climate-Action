const modalItems = {
  "fossil-fuels": {
    kicker: "Major cause",
    title: "Fossil Fuel Use",
    image: "assets/images/fossil-fuels.jpg",
    description:
      "Coal, oil, and natural gas release carbon dioxide when burned for power, heating, transport, and manufacturing. These emissions build up in the atmosphere and trap more heat near Earth's surface.",
    strategies: [
      "Shift electricity generation to renewable sources such as solar, wind, hydro, and geothermal.",
      "Improve energy efficiency in homes, offices, factories, and appliances.",
      "Electrify vehicles, heating systems, and industrial equipment where possible.",
      "Support policies and investments that phase down high-emission fuels."
    ]
  },
  deforestation: {
    kicker: "Major cause",
    title: "Deforestation",
    image: "assets/images/forest.jpg",
    description:
      "Forests store carbon in trees and soil. When they are cleared or burned, that carbon is released and the land loses some of its ability to absorb future emissions.",
    strategies: [
      "Protect existing forests, wetlands, and mangroves.",
      "Restore degraded land with native trees and climate-resilient plants.",
      "Use sustainable forestry and verified supply chains.",
      "Reduce pressure on land through smarter agriculture and responsible consumption."
    ]
  },
  transportation: {
    kicker: "Major cause",
    title: "Transportation",
    image: "assets/images/transit.jpg",
    description:
      "Most cars, trucks, ships, and planes still rely on petroleum fuels. Their emissions are a major contributor to climate change, especially in cities and freight corridors.",
    strategies: [
      "Expand reliable public transport and safe walking or cycling routes.",
      "Adopt electric vehicles and clean charging infrastructure.",
      "Improve freight efficiency with better logistics and cleaner fuels.",
      "Design communities so daily needs are closer to where people live."
    ]
  },
  agriculture: {
    kicker: "Major cause",
    title: "Agriculture",
    image: "assets/images/agriculture.jpg",
    description:
      "Agriculture can release methane from livestock and rice fields, nitrous oxide from fertilizers, and carbon dioxide when land is converted for farming.",
    strategies: [
      "Use precision fertilizer practices to reduce nitrous oxide emissions.",
      "Improve livestock feed and manure management.",
      "Protect soil carbon through cover crops and reduced tillage.",
      "Cut food waste across storage, transport, retail, and households."
    ]
  },
  industry: {
    kicker: "Major cause",
    title: "Industrial Processes",
    image: "assets/images/industry.jpg",
    description:
      "Industries such as cement, steel, chemicals, and manufacturing use large amounts of energy and sometimes produce emissions directly through chemical reactions.",
    strategies: [
      "Upgrade factories with efficient motors, heat recovery, and smarter controls.",
      "Use renewable electricity and low-carbon heat.",
      "Recycle materials and design products for longer life.",
      "Develop low-carbon cement, steel, and chemical production methods."
    ]
  },
  "rising-temperatures": {
    kicker: "Global effect",
    title: "Rising Temperatures",
    image: "assets/images/heat.jpg",
    description:
      "Average temperatures are rising, and extreme heat days are becoming more dangerous in many places. Heat affects health, labor, crops, energy systems, and ecosystems.",
    strategies: [
      "Reduce greenhouse gas emissions to limit long-term warming.",
      "Create heat action plans for schools, workplaces, and local governments.",
      "Increase shade, reflective surfaces, and urban green space.",
      "Protect vulnerable groups with cooling centers and early warnings."
    ]
  },
  "sea-level-rise": {
    kicker: "Global effect",
    title: "Sea Level Rise",
    image: "assets/images/sea-level.jpg",
    description:
      "Sea levels rise as ice melts and ocean water expands as it warms. Coastal flooding, erosion, saltwater intrusion, and storm surge risks can increase.",
    strategies: [
      "Protect and restore mangroves, reefs, dunes, and wetlands.",
      "Plan coastal development using updated flood-risk maps.",
      "Upgrade drainage, seawalls, and nature-based defenses where appropriate.",
      "Cut emissions quickly to slow future sea-level rise."
    ]
  },
  "extreme-weather": {
    kicker: "Global effect",
    title: "Extreme Weather",
    image: "assets/images/extreme-weather.jpg",
    description:
      "Climate change can intensify hazards such as heavy rainfall, drought, severe storms, and wildfire conditions. Communities need both emission cuts and stronger preparedness.",
    strategies: [
      "Strengthen early warning systems and emergency response plans.",
      "Improve flood control, water storage, and wildfire prevention.",
      "Protect natural buffers such as wetlands and forests.",
      "Build infrastructure to withstand future climate conditions."
    ]
  },
  "biodiversity-loss": {
    kicker: "Global effect",
    title: "Biodiversity Loss",
    image: "assets/images/biodiversity.jpg",
    description:
      "Changing temperatures, rainfall, ocean chemistry, and habitat conditions can push species beyond their limits. Biodiversity loss weakens ecosystems people depend on.",
    strategies: [
      "Protect connected habitats so species can move and adapt.",
      "Restore forests, wetlands, coral reefs, and grasslands.",
      "Reduce pollution and overexploitation that add stress to ecosystems.",
      "Include biodiversity goals in climate and land-use planning."
    ]
  },
  "food-water-stress": {
    kicker: "Global effect",
    title: "Food and Water Stress",
    image: "assets/images/food-water.jpg",
    description:
      "Heat, drought, floods, and shifting seasons can disrupt crop yields, fisheries, drinking water supplies, and food prices. The impacts are often hardest on vulnerable communities.",
    strategies: [
      "Use climate-smart farming, drought-resistant crops, and efficient irrigation.",
      "Protect watersheds, groundwater, and freshwater ecosystems.",
      "Reduce food waste and improve local storage systems.",
      "Plan water use across households, agriculture, and industry."
    ]
  },
  solar: {
    kicker: "Mitigation project",
    title: "Community Solar Hubs",
    image: "assets/images/solar.jpg",
    referenceUrl: "https://www.energy.gov/cmei/systems/community-solar-basics",
    referenceLabel: "Department of Energy: Community Solar Basics",
    description:
      "Community solar hubs let households, schools, and local businesses share clean electricity from a nearby solar installation. They are especially useful where rooftop solar is not affordable or practical for every building.",
    strategies: [
      "Replace fossil-fuel electricity with renewable solar power.",
      "Use battery storage to reduce peak demand and improve reliability.",
      "Offer shared ownership or subscription models for wider access.",
      "Pair solar generation with public education and energy monitoring."
    ]
  },
  forests: {
    kicker: "Mitigation project",
    title: "Urban Forest Recovery",
    image: "assets/images/forest.jpg",
    referenceUrl: "https://www.epa.gov/heatislands/benefits-trees-and-vegetation",
    referenceLabel: "EPA: Benefits of Trees and Vegetation",
    description:
      "Urban forest recovery restores tree cover in streets, parks, school grounds, and river corridors. Healthy urban forests absorb carbon, cool neighborhoods, reduce flood risk, and create habitat.",
    strategies: [
      "Plant climate-resilient native tree species.",
      "Protect mature trees that already store significant carbon.",
      "Restore soil health and water retention around planting areas.",
      "Prioritize heat-vulnerable neighborhoods for shade and cooling."
    ]
  },
  transit: {
    kicker: "Mitigation project",
    title: "Clean Transit Networks",
    image: "assets/images/transit.jpg",
    referenceUrl: "https://www.epa.gov/ghgemissions/transportation-sector-emissions",
    referenceLabel: "EPA: Transportation Sector Emissions",
    description:
      "Clean transit networks make low-emission travel convenient, affordable, and reliable. A strong network combines electric buses, rail, protected bike routes, sidewalks, and safe connections between them.",
    strategies: [
      "Electrify buses and public vehicle fleets.",
      "Improve service frequency so transit becomes a practical daily choice.",
      "Build protected walking and cycling infrastructure.",
      "Design compact, mixed-use areas that reduce travel distances."
    ]
  },
  buildings: {
    kicker: "Mitigation project",
    title: "Efficient Buildings",
    image: "assets/images/buildings.jpg",
    referenceUrl: "https://www.energy.gov/topics/buildings-energy-efficiency",
    referenceLabel: "Department of Energy: Buildings Energy Efficiency",
    description:
      "Efficient building projects upgrade homes, offices, and public facilities so they use less energy while staying comfortable. Retrofitting existing buildings is one of the fastest ways to lower local emissions.",
    strategies: [
      "Improve insulation, windows, ventilation, and air sealing.",
      "Install efficient heat pumps for heating and cooling.",
      "Use smart controls to reduce wasted energy.",
      "Choose low-carbon materials and efficient lighting systems."
    ]
  }
};

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const themeToggle = document.querySelector(".theme-toggle");
const backToTop = document.querySelector(".back-to-top");
const modal = document.querySelector("#project-modal");
const modalKicker = document.querySelector("#modal-kicker");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalStrategies = document.querySelector("#modal-strategies");
const modalImage = document.querySelector("#modal-image");
const modalReference = document.querySelector("#modal-reference");
let lastFocusedElement = null;

// Keep mobile navigation compact after a destination is selected.
navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal each section element once as it enters the viewport.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

function openModal(itemId) {
  const item = modalItems[itemId];
  if (!item) return;

  // Modal content is driven from one data object so every card can share it.
  lastFocusedElement = document.activeElement;
  modalKicker.textContent = item.kicker;
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalImage.style.backgroundImage = `url("${item.image}")`;
  modalStrategies.innerHTML = "";
  modalReference.hidden = !item.referenceUrl;

  if (item.referenceUrl) {
    modalReference.href = item.referenceUrl;
    modalReference.textContent = item.referenceLabel || "Open reference source";
  }

  item.strategies.forEach((strategy) => {
    const listItem = document.createElement("li");
    listItem.textContent = strategy;
    modalStrategies.appendChild(listItem);
  });

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}

function closeProjectModal() {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

document.querySelectorAll("[data-topic], .project-card").forEach((card) => {
  const itemId = card.dataset.topic || card.dataset.project;

  card.addEventListener("click", () => openModal(itemId));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(itemId);
    }
  });
});


document.querySelectorAll("[data-close-modal]").forEach((control) => {
  control.addEventListener("click", closeProjectModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeProjectModal();
  }
});
