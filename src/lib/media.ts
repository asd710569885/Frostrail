import type { ArticleData, ArticleImage, ArticleRecord, ArticleSection, HubTopic } from "@/types/content";

const FALLBACK = "/images/home/frostrail-official-hero.jpg";

const topicImages: Record<string, readonly [string, string]> = {
  "getting-started": ["/images/guides/frozen-expedition.jpg", "Crew leaving the train toward a frozen chapel and cemetery"],
  survival: ["/images/official/steam-current/screenshot-03.jpg", "Cab temperature reading of −28.3 °C during a blizzard"],
  combat: ["/images/enemies/revenant-close-combat.jpg", "Shotgun combat against a humanoid Revenant"],
  train: ["/images/train/eden-engine-cab.jpg", "Inside the Eden Engine locomotive cab"],
  crafting: ["/images/wiki/weapons-crafting.jpg", "Assembly Station modular rifle interface"],
  "co-op": ["/images/guides/coop-train-defense.jpg", "Two players defending a damaged carriage"],
  weapons: ["/images/weapons/weapon-assembly-station.jpg", "Official Assembly Station for a Bolt-Action Rifle"],
  items: ["/images/train/onboard-workstation.jpg", "Metal Hammer equipped inside a train carriage"],
  resources: ["/images/official/steam-current/screenshot-03.jpg", "Logs, fuel canisters, and metal scraps in the cab hotbar"],
  relics: ["/images/wiki/relic-discovery.jpg", "Relic glowing in a dungeon shrine"],
  clothing: ["/images/guides/frozen-expedition.jpg", "Warm clothing on an outdoor expedition"],
  food: ["/images/train/onboard-workstation.jpg", "Cooking station aboard the train"],
  stations: ["/images/train/onboard-workstation.jpg", "Onboard workbench and machinery inside a carriage"],
  lore: ["/images/home/frostrail-official-hero.jpg", "Penitent Gardeners and the armored train"],
  verification: ["/images/official/steam-current/screenshot-05.jpg", "Official Assembly Station screenshot"],
  "eden-engine": ["/images/train/eden-engine-cab.jpg", "Operating the Eden Engine from the cab"],
  upgrades: ["/images/train/onboard-workstation.jpg", "Expanded carriage interior with workbenches and tanks"],
  carriages: ["/images/train/carriages-in-tundra.jpg", "Wooden freight cars moving through the tundra"],
  fuel: ["/images/official/steam-current/screenshot-03.jpg", "Fuel canisters in the cab hotbar"],
  power: ["/images/train/power-system.jpg", "POWER and HEAT machinery inside the train"],
  defense: ["/images/train/defense-encounter.jpg", "Crew firing from a damaged carriage at a track-side threat"],
  tundra: ["/images/locations/frozen-rail-route.jpg", "Train and abandoned sheds on a frozen rail line"],
  dungeons: ["/images/locations/underground-dungeon.jpg", "Torch-lit dungeon during The Trial Below"],
  settlements: ["/images/locations/frozen-rail-route.jpg", "Dilapidated wooden buildings along the tracks"],
  "mining-camps": ["/images/locations/frozen-rail-route.jpg", "Abandoned wooden structures beside the rails"],
  vaults: ["/images/wiki/relic-discovery.jpg", "Subterranean vault shrine"],
  bunkers: ["/images/locations/overgrown-ruins.jpg", "Overgrown stone interior below ground"],
  strongholds: ["/images/locations/overgrown-ruins.jpg", "Stone corridor in a ruined interior"],
  "level-routes": ["/images/train/carriages-in-tundra.jpg", "Train curving through fog along the rails"],
  "playtest-areas": ["/images/official/news/april-playtest-content.webp", "Official April playtest content graphic"],
  revenants: ["/images/enemies/graveyard-revenants.jpg", "Revenants swarming a frozen graveyard"],
  wolves: ["/images/guides/frozen-expedition.jpg", "Wolves in the frozen wilds"],
  "corrupted-soldiers": ["/images/enemies/ruins-encounter.jpg", "Corrupted Soldiers in overgrown ruins"],
  "eldritch-horrors": ["/images/train/defense-encounter.jpg", "Eldritch horror on the tracks during train defense"],
  "enemy-development": ["/images/enemies/ruins-encounter.jpg", "Enemy combat still in development"],
  "closed-beta": ["/images/official/news/closed-beta-august-31.jpg", "Official Closed Beta announcement art dated August 31"],
  "500k-wishlists": ["/images/official/news/closed-beta-august-31.jpg", "Closed Beta press art from the almost 500,000 wishlist update"],
  "spring-development-update": ["/images/official/news/spring-update-03.webp", "Spring development rail landscape"],
  "400k-wishlists": ["/images/official/news/wishlist-400k.webp", "Official 400,000 wishlist artwork"],
  "first-closed-playtest": ["/images/official/news/april-playtest-content.webp", "Official playtest content graphic"],
  "gameplay-trailer": ["/images/enemies/graveyard-revenants.jpg", "Official gameplay trailer still of graveyard combat"],
  "winter-update": ["/images/official/news/winter-update-02.webp", "Winter development blizzard screenshot"],
  "early-access": ["/images/home/frostrail-official-hero.jpg", "Official Frostrail key art"],
};

const relatedImages: Record<string, string> = {
  "/wiki/weapons": "/images/weapons/weapon-assembly-station.jpg",
  "/wiki/weapons/pipe-rifle": "/images/enemies/graveyard-revenants.jpg",
  "/wiki/weapons/bolt-action-rifle": "/images/weapons/weapon-assembly-station.jpg",
  "/wiki/crafting": "/images/wiki/weapons-crafting.jpg",
  "/wiki/stations": "/images/train/onboard-workstation.jpg",
  "/wiki/items": "/images/train/onboard-workstation.jpg",
  "/wiki/resources": "/images/official/steam-current/screenshot-03.jpg",
  "/wiki/clothing": "/images/guides/frozen-expedition.jpg",
  "/wiki/food": "/images/train/onboard-workstation.jpg",
  "/wiki/relics": "/images/wiki/relic-discovery.jpg",
  "/wiki/lore": "/images/home/frostrail-official-hero.jpg",
  "/train": "/images/train/eden-engine-cab.jpg",
  "/train/eden-engine": "/images/train/eden-engine-cab.jpg",
  "/train/defense": "/images/train/defense-encounter.jpg",
  "/train/fuel": "/images/official/steam-current/screenshot-03.jpg",
  "/train/power": "/images/train/power-system.jpg",
  "/train/upgrades": "/images/train/onboard-workstation.jpg",
  "/train/carriages": "/images/train/carriages-in-tundra.jpg",
  "/guides/beginner-guide": "/images/guides/frozen-expedition.jpg",
  "/frostrail-multiplayer": "/images/guides/coop-train-defense.jpg",
  "/frostrail-faq": "/images/official/store/steam-header.jpg",
  "/frostrail-closed-beta": "/images/official/news/closed-beta-august-31.jpg",
  "/frostrail-release-date": "/images/home/frostrail-official-hero.jpg",
  "/frostrail-system-requirements": "/images/train/eden-engine-cab.jpg",
  "/frostrail-console": "/images/official/trailers/gameplay-trailer.jpg",
  "/about-frostrail": "/images/home/frostrail-official-hero.jpg",
  "/enemies": "/images/enemies/revenant-close-combat.jpg",
  "/locations": "/images/locations/frozen-rail-route.jpg",
  "/wiki": "/images/wiki/weapons-crafting.jpg",
  "/updates": "/images/official/news/spring-update-03.webp",
};

const recordImages: Record<string, readonly [string, string]> = {
  "Pipe Rifle": ["/images/enemies/graveyard-revenants.jpg", "Pipe Rifle on a frozen graveyard expedition"],
  "Bolt-Action Rifle": ["/images/official/steam-current/screenshot-05.jpg", "Assembly Station showing a Bolt-Action Rifle"],
  Pistols: ["/images/official/steam-current/screenshot-07.jpg", "Revolver in the dungeon hotbar"],
  Shotguns: ["/images/official/steam-current/screenshot-04.jpg", "Double-barreled shotgun used against a Revenant"],
  "Machine Guns": ["/images/train/defense-encounter.jpg", "Machine guns during train defense"],
  "Basic Melee": ["/images/official/steam-current/screenshot-03.jpg", "Metal Hammer equipped in the locomotive cab"],
  Ammunition: ["/images/official/steam-current/screenshot-04.jpg", "Ammunition spent in shotgun combat"],
  "Metal Hammer": ["/images/official/steam-current/screenshot-09.jpg", "Metal Hammer equipped inside the train"],
  "Metal Wrench": ["/images/official/steam-current/screenshot-10.jpg", "Metal Wrench equipped beside POWER/HEAT machinery"],
  Torch: ["/images/official/steam-current/screenshot-07.jpg", "Torch equipped during The Trial Below"],
  Crowbar: ["/images/official/steam-current/screenshot-09.jpg", "Crowbar in the train hotbar"],
  "Repair components": ["/images/train/onboard-workstation.jpg", "Repair components at the onboard workbench"],
  Branches: ["/images/official/steam-current/screenshot-03.jpg", "Branches and wood in the cab hotbar"],
  Logs: ["/images/official/steam-current/screenshot-03.jpg", "Logs ×24 in the cab hotbar"],
  Charcoal: ["/images/train/power-system.jpg", "Charcoal feeding the POWER and HEAT furnace"],
  "Metal scraps": ["/images/official/steam-current/screenshot-03.jpg", "Metal scraps ×24 in the cab hotbar"],
  "Slag metal": ["/images/official/steam-current/screenshot-05.jpg", "Slag metal ×5 listed on the Bolt-Action Rifle recipe"],
  "Pure metal": ["/images/official/steam-current/screenshot-05.jpg", "Pure metal refining on the Assembly Station screen"],
  Wood: ["/images/official/steam-current/screenshot-05.jpg", "Wood ×3 listed on the Bolt-Action Rifle recipe"],
  Cloth: ["/images/official/steam-current/screenshot-05.jpg", "Cloth ×2 listed on the Bolt-Action Rifle recipe"],
  Plastic: ["/images/train/onboard-workstation.jpg", "Plastic salvage at the onboard workbench"],
  "Penitent Gardeners": ["/images/home/frostrail-official-hero.jpg", "Penitent Gardeners beside the armored train"],
  "The Void": ["/images/locations/underground-dungeon.jpg", "Void-twisted dungeon below the frozen world"],
  "The Emperor": ["/images/locations/overgrown-ruins.jpg", "Ruined interior of the former empire"],
  "Relic — unnamed": ["/images/wiki/relic-discovery.jpg", "Relic glowing in a dungeon shrine"],
  "Warm clothing set — unnamed": ["/images/guides/frozen-expedition.jpg", "Warm clothing set on an outdoor expedition"],
  "Cooked food — unnamed": ["/images/train/onboard-workstation.jpg", "Cooked food at the onboard cooking station"],
  "Crafting benches": ["/images/train/onboard-workstation.jpg", "Crafting benches inside a train carriage"],
  Refineries: ["/images/train/onboard-workstation.jpg", "Refinery space aboard the train"],
  "Assembly Station": ["/images/official/steam-current/screenshot-05.jpg", "Assembly Station assembling a Bolt-Action Rifle"],
  "Repair workstation": ["/images/train/onboard-workstation.jpg", "Repair workstation aboard the train"],
  "Cooking station": ["/images/train/onboard-workstation.jpg", "Cooking station aboard the train"],
  "Crafting bench": ["/images/train/onboard-workstation.jpg", "Crafting bench inside a train carriage"],
  Refinery: ["/images/train/onboard-workstation.jpg", "Refinery aboard the train"],
  Storage: ["/images/train/onboard-workstation.jpg", "Storage space inside a train carriage"],
};

const sectionImages: Record<string, readonly [string, string, string?]> = {
  "how-weapons-work": ["/images/official/steam-current/screenshot-04.jpg", "Shotgun combat against a Revenant", "Official Steam screenshot of close-range shotgun combat."],
  "crafting-and-mods": ["/images/official/steam-current/screenshot-05.jpg", "Assembly Station with modular rifle stocks", "Official Assembly Station screenshot for a pre-release Bolt-Action Rifle."],
  faq: ["/images/official/store/steam-header.jpg", "Official Frostrail Steam header", "Official store listing used as a source for FAQ answers."],
  inventory: ["/images/official/steam-current/screenshot-09.jpg", "Train interior with equipped Metal Hammer", "Official screenshot of onboard tools and hotbar."],
  verification: ["/images/official/steam-current/screenshot-05.jpg", "Official Assembly Station evidence screen", "Official screenshot used as pre-release evidence."],
  "release-window": ["/images/official/store/steam-header.jpg", "Official Steam header for Frostrail", "Official Steam listing for the Q4 2026 Early Access window."],
  "early-access": ["/images/home/frostrail-official-hero.jpg", "Official Frostrail key art", "Official key art for the pre-release Early Access campaign."],
  "beta-before-release": ["/images/official/news/closed-beta-august-31.jpg", "Closed Beta announcement art", "Official announcement for the Closed Beta beginning August 31, 2026."],
  price: ["/images/official/store/steam-header.jpg", "Official Steam store artwork", "Official Steam store artwork for Frostrail."],
  roadmap: ["/images/official/news/spring-update-03.webp", "Spring development landscape", "Official development image accompanying the Spring 2026 update."],
  minimum: ["/images/official/trailers/gameplay-trailer.jpg", "Official gameplay trailer thumbnail", "Official gameplay trailer media for the PC listing."],
  recommended: ["/images/official/trailers/gameplay-trailer.jpg", "Official gameplay trailer thumbnail", "Official gameplay trailer media for the PC listing."],
  "engine-performance": ["/images/official/news/winter-update-02.webp", "Winter development screenshot", "Official development image from the period of performance and AI work."],
  "supported-languages": ["/images/official/store/steam-header.jpg", "Official Steam store header", "Steam currently lists seven interface and subtitle languages."],
  "player-count": ["/images/guides/coop-train-defense.jpg", "Two players defending a carriage", "Official screenshot of a co-op train-defense encounter."],
  "crew-loop": ["/images/official/steam-current/screenshot-06.jpg", "Three crew members running toward a frozen chapel", "Official screenshot of a shared expedition outside the train."],
  "playtest-access": ["/images/official/news/april-playtest-content.webp", "Official April playtest content graphic", "Official test brief covering the April 2026 closed playtest."],
  "network-features": ["/images/guides/coop-train-defense.jpg", "Crew defending the train together", "Official screenshot of online co-op train defense."],
  "official-status": ["/images/official/trailers/gameplay-trailer.jpg", "Official gameplay trailer artwork", "PC and Steam are the announced launch priority."],
  controller: ["/images/official/steam-current/screenshot-03.jpg", "Eden Engine cab controls", "Official cab screenshot of train controls."],
  "linux-mac": ["/images/official/store/steam-header.jpg", "Official Steam listing", "Windows PC remains the only confirmed platform."],
  "what-would-count": ["/images/official/news/closed-beta-august-31.jpg", "Official Closed Beta announcement", "Official Closed Beta announcement media."],
  game: ["/images/home/frostrail-official-hero.jpg", "Penitent Gardeners beside the armored train", "Official key art for Frostrail's dieselpunk survival identity."],
  story: ["/images/locations/frozen-rail-route.jpg", "Abandoned buildings along a frozen rail line", "Official screenshot of the frozen empire's landscape."],
  studio: ["/images/official/store/steam-header.jpg", "Official Steam header", "FakeFish develops Frostrail; Shiro Unlimited publishes it."],
  "core-pillars": ["/images/train/eden-engine-cab.jpg", "Inside the Eden Engine", "The moving train is the first of five developer-described pillars."],
  "world-structure": ["/images/locations/frozen-rail-route.jpg", "Frozen rail route through the tundra", "Official screenshot of the northbound rail journey."],
  languages: ["/images/official/store/steam-header.jpg", "Official Steam store header", "Live Steam languages should be checked against this listing."],
  players: ["/images/guides/coop-train-defense.jpg", "Crew defending a train carriage", "Official FAQ: crews of one to four players."],
  "engine-mods": ["/images/wiki/weapons-crafting.jpg", "Modular weapon crafting", "Unreal Engine 5 and the modular weapon workflow."],
  "understand-the-loop": ["/images/official/steam-current/screenshot-11.jpg", "Locomotive pulling carriages through the tundra", "Official screenshot of the moving-base journey north."],
  prepare: ["/images/official/steam-current/screenshot-03.jpg", "Cab gauges for heat, speed, and consumption", "Official cab screenshot used as context for warmth and train operation."],
  expeditions: ["/images/official/steam-current/screenshot-07.jpg", "Dungeon objective The Trial Below", "Official screenshot of dungeon exploration with a torch."],
  "co-op": ["/images/official/steam-current/screenshot-02.jpg", "Two players defending an open carriage", "Official screenshot of co-op train defense."],
  verify: ["/images/official/news/closed-beta-august-31.jpg", "Closed Beta announcement art", "The Closed Beta beginning August 31, 2026 is the next dated test."],
  overview: ["/images/train/eden-engine-cab.jpg", "Operating the Eden Engine", "Official cab view of the locomotive that defines the run."],
  operation: ["/images/official/steam-current/screenshot-03.jpg", "Cab gauges for pressure, speed, heat, and consumption", "Official screenshot of the instruments used while conducting the train."],
  "cab-interface": ["/images/official/steam-current/screenshot-03.jpg", "Eden Engine cab controls", "Official screenshot of labeled pressure, speed, heat, and consumption gauges."],
  lore: ["/images/home/frostrail-official-hero.jpg", "Penitent Gardeners and the armored train", "Official key art of the pilgrimage north aboard the Eden Engine."],
  unknowns: ["/images/official/store/steam-header.jpg", "Official Steam listing", "Official Steam listing for unpublished values."],
  progression: ["/images/train/onboard-workstation.jpg", "Onboard facilities aboard the train", "Recovered materials are reinvested into train capability."],
  "documented-station": ["/images/official/steam-current/screenshot-05.jpg", "Named Assembly Station interface", "Official screenshot of the Assembly Station and modular rifle workflow."],
  facilities: ["/images/official/steam-current/screenshot-09.jpg", "Expanded carriage interior", "Official screenshot of usable interior space for facilities and storage."],
  "fuel-loop": ["/images/official/steam-current/screenshot-03.jpg", "Fuel canisters and logs in the cab hotbar", "Official cab screenshot showing fuel canisters ×3 and logs ×24 in the hotbar."],
  "public-evidence": ["/images/official/news/april-playtest-content.webp", "Official playtest content graphic", "The April brief covers fueling, scavenging, recycling, crafting, Revenants, and early-game dungeons."],
  "data-limits": ["/images/official/news/april-playtest-content.webp", "Official playtest content graphic", "Playtest tasks confirm the operating systems listed in the brief."],
  "confirmed-links": ["/images/train/power-system.jpg", "Powered machinery aboard the train", "Power supports onboard stations."],
  "visible-machinery": ["/images/official/steam-current/screenshot-10.jpg", "POWER and HEAT gauges on the furnace", "Official screenshot showing POWER / HEAT labels inside the train."],
  encounters: ["/images/official/steam-current/screenshot-02.jpg", "Crew defending an open carriage", "Official screenshot of a train-defense encounter against a large ice-armored creature."],
  failure: ["/images/train/eden-engine-cab.jpg", "Eden Engine locomotive cab", "Developer interviews treat engine destruction as a game-over condition."],
  "mounted-weapons": ["/images/train/defense-encounter.jpg", "Machine guns during train defense", "Official screenshot of crew defending the train with mounted firepower."],
  preparation: ["/images/guides/coop-train-defense.jpg", "Crew defending a damaged carriage", "Confirmed preparation: keep the engine fueled, reinforced, and staffed."],
  "resource-loop": ["/images/official/steam-current/screenshot-03.jpg", "Logs, fuel, and metal scraps in the cab", "Official cab hotbar showing logs ×24, fuel canisters ×3, and metal scraps ×24."],
  "documented-recipe": ["/images/official/steam-current/screenshot-05.jpg", "Bolt-Action Rifle material requirements", "Official screenshot: slag metal ×5, wood ×3, cloth ×2."],
  "missing-fields": ["/images/official/steam-current/screenshot-05.jpg", "Assembly Station material list", "Official screenshot of the named assembly materials."],
  "confirmed-loop": ["/images/wiki/weapons-crafting.jpg", "Modular weapon crafting", "Onboard production turns salvage into persistent capability."],
  "bolt-action-recipe": ["/images/official/steam-current/screenshot-05.jpg", "Assembly Station recipe panel", "The pictured Bolt-Action Rifle recipe: slag metal ×5, wood ×3, cloth ×2."],
  "recipe-policy": ["/images/official/steam-current/screenshot-05.jpg", "Official Assembly Station screenshot", "Official screenshot of visible recipe quantities."],
  "how-relics-work": ["/images/wiki/relic-discovery.jpg", "Relic glowing in a dungeon shrine", "Official playtest trailer still of a Relic discovered below ground."],
  "development-context": ["/images/official/news/spring-update-03.webp", "Spring Development Update landscape", "Relics were reported in the May 13, 2026 development update."],
  "cold-protection": ["/images/guides/frozen-expedition.jpg", "Crew wearing winter clothing outdoors", "Warmer clothing is a confirmed way to mitigate cold."],
  "cold-meter": ["/images/official/steam-current/screenshot-03.jpg", "Cab showing −28.3 °C", "Warmth depletes outdoors; the train is the reliable heat source."],
  "spring-update": ["/images/official/news/spring-update-03.webp", "Spring development screenshot", "The May 2026 update reported multiple new clothing sets."],
  "food-system": ["/images/train/onboard-workstation.jpg", "Cooking station aboard the train", "Food is cooked aboard the train as a buff and preparation system."],
  acquisition: ["/images/guides/frozen-expedition.jpg", "Wolves in the frozen wilds", "Wildlife hunting in the frozen wilderness beyond the rails."],
  expansion: ["/images/train/carriages-in-tundra.jpg", "Train carriages in the tundra", "More carriages expand production, storage, and power demand."],
  "assembly-station": ["/images/official/steam-current/screenshot-05.jpg", "Named Assembly Station interface", "Official screenshot labeling the Assembly Station."],
  premise: ["/images/home/frostrail-official-hero.jpg", "Official key art of Penitent Gardeners", "Steam’s about text is the primary published lore source."],
  tone: ["/images/enemies/revenant-close-combat.jpg", "Close combat against a Revenant", "Lead designer: tension and action, not a dedicated horror game."],
  journey: ["/images/locations/frozen-rail-route.jpg", "Frozen rail route heading north", "Levels connect northward; farther north is colder and harder."],
  stats: ["/images/official/steam-current/screenshot-05.jpg", "Bolt-Action Rifle stat panel", "The only complete public stat panel is the Assembly Station Bolt-Action Rifle."],
  mods: ["/images/official/steam-current/screenshot-05.jpg", "Modular stock options on the Assembly Station", "Documented part options belong to the Bolt-Action Rifle screenshot."],
};

export type MediaRef = { src: string; alt: string; caption?: string };

export function topicMedia(topic: HubTopic): MediaRef {
  if (topic.image) return { src: topic.image, alt: topic.imageAlt ?? topic.title };
  const mapped = topicImages[topic.id];
  if (mapped) return { src: mapped[0], alt: mapped[1] };
  return { src: FALLBACK, alt: topic.title };
}

export function recordMedia(record: ArticleRecord): MediaRef | null {
  if (record.image) return { src: record.image, alt: record.imageAlt ?? record.title };
  const mapped = recordImages[record.title];
  if (mapped) return { src: mapped[0], alt: mapped[1] };
  return null;
}

export function sectionMedia(data: ArticleData, section: ArticleSection, index: number): MediaRef | null {
  if (section.image) {
    return { src: section.image, alt: section.imageAlt ?? section.title, caption: section.caption };
  }
  const mapped = sectionImages[section.id];
  if (mapped) {
    return { src: mapped[0], alt: mapped[1], caption: mapped[2] };
  }
  if (data.gallery?.length) {
    const item = data.gallery[index % data.gallery.length];
    return { src: item.src, alt: item.alt, caption: item.caption };
  }
  if (data.image && index === 0) {
    return { src: data.image, alt: data.imageAlt ?? data.title };
  }
  return null;
}

export function relatedMedia(item: { label: string; href: string; image?: string }): MediaRef {
  if (item.image) return { src: item.image, alt: item.label };
  const src = relatedImages[item.href] ?? FALLBACK;
  return { src, alt: item.label };
}

export function articleCover(data: ArticleData): ArticleImage {
  return {
    src: data.image ?? FALLBACK,
    alt: data.imageAlt ?? data.title,
    caption: data.status,
  };
}
