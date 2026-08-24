import hubContent from "@/data/game/hub-content.json";
import type { HubData } from "@/types/content";

const hubs = hubContent as Record<string, HubData>;

export const guidesData = hubs.guides;
export const wikiData = hubs.wiki;
export const trainData = hubs.train;
export const locationsData = hubs.locations;
export const enemiesData = hubs.enemies;
export const updatesData = hubs.updates;
