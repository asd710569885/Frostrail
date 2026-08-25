import type { SVGProps } from "react";

export type HomeIconName =
  | "gauge" | "relic" | "crew" | "snowflake"
  | "book" | "campfire" | "train" | "tools" | "target"
  | "weapons" | "items" | "resources" | "medallion" | "clothing" | "station"
  | "engine" | "upgrade" | "fuel" | "carriage" | "defense" | "storage"
  | "brand" | "discord" | "reddit" | "youtube" | "twitter";

type Props = Omit<SVGProps<SVGSVGElement>, "name"> & { name: HomeIconName };

function IconDrawing({ name }: { name: HomeIconName }) {
  switch (name) {
    case "gauge":
      return <><path d="M10 45a23 23 0 0 1 44 0"/><path d="M14 45h5M45 45h5M19 29l4 4M41 33l4-4M32 21v6"/><path d="M32 43l10-13"/><circle cx="32" cy="43" r="3"/><path d="M20 49h24"/></>;
    case "relic":
      return <><path d="M32 8v8M25 11h14M22 18l10-5 10 5v23l-10 12-10-12z"/><path d="M27 25h10v12l-5 6-5-6z"/><circle cx="32" cy="31" r="2.5"/><path d="M18 24h4M42 24h4M18 35h4M42 35h4"/></>;
    case "crew":
      return <><circle cx="32" cy="21" r="7"/><circle cx="17" cy="26" r="5"/><circle cx="47" cy="26" r="5"/><path d="M21 49v-8c0-7 4-11 11-11s11 4 11 11v8z" fill="currentColor" stroke="none"/><path d="M7 49v-7c0-6 4-10 10-10 3 0 5 1 7 3-4 3-6 8-6 14zM57 49v-7c0-6-4-10-10-10-3 0-5 1-7 3 4 3 6 8 6 14z" fill="currentColor" stroke="none"/></>;
    case "snowflake":
      return <><path d="M32 7v50M10 20l44 24M10 44l44-24"/><path d="M26 13l6 6 6-6M26 51l6-6 6 6M13 26l8-2-2-8M51 38l-8 2 2 8M19 48l2-8-8-2M45 16l-2 8 8 2"/></>;
    case "book":
      return <><path d="M7 16c9-2 17 0 25 6v31c-8-6-16-8-25-6zM57 16c-9-2-17 0-25 6v31c8-6 16-8 25-6z"/><path d="M32 22v31M16 20v18l5-4 5 4V22M41 20v18l5-4 5 4V18"/></>;
    case "campfire":
      return <><path d="M12 50l40-10M12 40l40 10M18 55h28"/><path d="M32 39c-9 0-14-6-12-14 1 5 5 6 7 3 3-4 0-9 7-16 0 8 8 9 8 17 0 6-4 10-10 10z" fill="currentColor" stroke="none"/><path d="M31 37c-3 0-5-2-4-5 1 1 2 2 3 1 1-2 0-3 3-6 0 3 3 4 3 6 0 2-2 4-5 4z" fill="#07151e" stroke="none"/></>;
    case "train":
      return <><path d="M18 17h28l5 12v18H13V29z"/><path d="M22 8h20v9H22zM20 23h24v13H20z"/><circle cx="21" cy="47" r="5"/><circle cx="43" cy="47" r="5"/><path d="M9 51h46M26 29h12M32 17v-6M13 31H8M56 31h-5"/></>;
    case "tools":
      return <><path d="M13 11l40 40M51 13L13 51"/><path d="M9 15l6-6 9 9-6 6zM40 46l6-6 9 9-6 6z"/><path d="M43 8c5 0 9 4 9 9l-6-2-4 4 2 6c-5 0-9-4-9-9zM21 43l-5 11-6-6z"/></>;
    case "target":
      return <><circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="3" fill="currentColor"/><path d="M32 4v16M32 44v16M4 32h16M44 32h16"/></>;
    case "weapons":
      return <><path d="M12 49L49 12M16 55l-7-7M48 16l7-7M19 45l-6-6M45 19l6 6"/><path d="M52 48L17 13M48 54l7-7M16 17L9 10M45 45l6-6M19 20l-6 6"/></>;
    case "items":
      return <><path d="M14 23h36l3 30H11z"/><path d="M23 23v-5c0-6 3-9 9-9s9 3 9 9v5M22 33h20M22 41h20"/><path d="M16 16h8M40 16h8"/></>;
    case "resources":
      return <><path d="M9 45l9-24 12 11 8-23 17 36z"/><path d="M18 21l7 24M38 9l7 36M30 32l9 13M15 45h42"/><path d="M7 51h50"/></>;
    case "medallion":
      return <><circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="15"/><path d="M32 12v7M32 45v7M12 32h7M45 32h7M18 18l5 5M41 41l5 5M46 18l-5 5M23 41l-5 5"/><path d="M32 24l4 5 6 1-4 5 1 6-7-3-7 3 1-6-4-5 6-1z"/></>;
    case "clothing":
      return <><path d="M23 13l9 5 9-5 12 9-7 10-5-4v25H23V28l-5 4-7-10z"/><path d="M27 13c0 6 10 6 10 0M23 38h18"/></>;
    case "station":
      return <><path d="M8 52h48M13 52V25l19-14 19 14v27M20 52V35h24v17"/><path d="M25 22h14M32 15v14M18 30h28M26 40h12"/></>;
    case "engine":
      return <><rect x="14" y="13" width="36" height="38" rx="2"/><circle cx="32" cy="33" r="11"/><path d="M32 22v7l6 4M20 12V7h9v6M42 12V7h7v12M8 22h6M50 22h6M8 44h6M50 44h6M20 56v-5M44 56v-5"/></>;
    case "upgrade":
      return <><path d="M15 10h34v44H15zM22 17h20v11H22zM22 35h8v12h-8zM35 35h7v12h-7z"/><path d="M9 20h6M49 20h6M9 44h6M49 44h6M24 8V4M40 8V4"/></>;
    case "fuel":
      return <><path d="M14 49l34-34M19 54l-9-9M45 18l6-6M18 16l30 34M14 11l9 9-6 6-9-9z"/><path d="M39 29c-5-4-2-10 4-16 0 7 8 8 7 16-1 5-4 8-9 8"/></>;
    case "carriage":
      return <><path d="M7 20h50v27H7zM13 26h11v10H13zM28 26h11v10H28zM43 26h8v10h-8z"/><circle cx="17" cy="49" r="5"/><circle cx="47" cy="49" r="5"/><path d="M3 43h4M57 43h4M23 49h19"/></>;
    case "defense":
      return <><path d="M15 48h34M21 48l4-17h15l4 17M28 31v-8h16l9 5-9 5M31 48v8M40 48v8"/><path d="M12 18l8 5M14 11l10 3M10 27l9-1"/></>;
    case "storage":
      return <><path d="M8 19h48v34H8zM8 28h48M32 28v25M14 13h36v6M25 35h14"/><path d="M14 53v4M50 53v4"/></>;
    case "brand":
      return <><circle cx="32" cy="28" r="20"/><circle cx="32" cy="28" r="15"/><path d="M32 8V3M18 12l-3-4M46 12l3-4M12 22l-5-1M52 22l5-1M12 36l-5 2M52 36l5 2"/><path d="M23 24h18l3 9v8H20v-8zM27 18h10v6M25 30h14M26 41l-4 6M38 41l4 6"/><circle cx="26" cy="36" r="2" fill="currentColor"/><circle cx="38" cy="36" r="2" fill="currentColor"/><path d="M10 51h44M15 56h34M20 51l-4 5M30 51l-2 5M40 51l2 5M50 51l-4 5"/></>;
    case "discord":
      return <><path d="M18 18c9-5 19-5 28 0 6 8 8 17 7 27-5 4-9 6-14 7l-3-5c3-1 5-2 7-4-8 4-14 4-22 0 2 2 4 3 7 4l-3 5c-5-1-9-3-14-7-1-10 1-19 7-27z" fill="currentColor" stroke="none"/><circle cx="25" cy="34" r="3" fill="#07151e" stroke="none"/><circle cx="39" cy="34" r="3" fill="#07151e" stroke="none"/></>;
    case "reddit":
      return <><circle cx="32" cy="35" r="18" fill="currentColor" stroke="none"/><circle cx="24" cy="34" r="3" fill="#07151e" stroke="none"/><circle cx="40" cy="34" r="3" fill="#07151e" stroke="none"/><path d="M23 42c6 4 12 4 18 0" stroke="#07151e"/><path d="M32 17l4-8 10 2"/><circle cx="48" cy="12" r="3"/><circle cx="12" cy="32" r="5" fill="currentColor" stroke="none"/><circle cx="52" cy="32" r="5" fill="currentColor" stroke="none"/></>;
    case "youtube":
      return <><rect x="7" y="17" width="50" height="32" rx="8" fill="currentColor" stroke="none"/><path d="M27 25l14 8-14 8z" fill="#07151e" stroke="none"/></>;
    case "twitter":
      return <path d="M54 17c-2 1-4 2-6 2 3-2 4-4 5-7-2 2-5 3-8 4-5-5-14-2-14 6 0 1 0 2 1 3-10-1-19-5-25-13-3 5-1 11 4 14-2 0-4-1-6-2 0 6 4 11 10 12-2 1-4 1-6 0 2 5 7 8 13 8-5 4-12 6-19 5 6 4 13 6 21 6 25 0 39-21 38-40 3-2 5-4 7-7z" fill="currentColor" stroke="none"/>;
  }
}

export function HomeIcon({ name, className, ...props }: Props) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      <IconDrawing name={name} />
    </svg>
  );
}
