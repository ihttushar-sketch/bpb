import { SECRETARIAT } from '@/lib/secretariat';
import SafeImage from './SafeImage';

/**
 * “পনডার আলো সচিবালয়” — the home-page block for the person who runs the
 * secretariat and executes the portal. All text and photo names come from
 * lib/secretariat.ts, so it is a one-file edit to update.
 */
export default function SecretariatPortal() {
  const s = SECRETARIAT;

  return (
    <section className="overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-[#141821]">
      <div className="flex items-center justify-between border-b-2 border-brand px-4 py-2.5">
        <h2 className="flex items-center gap-2 text-[18px] font-bold md:text-[20px]">
          <span className="mr-1 inline-block h-5 w-1 rounded-sm bg-brand" />
          পনডার আলো সচিবালয়
        </h2>
        <span className="rounded-full bg-brand-soft px-3 py-1 text-[11px] font-semibold text-brand dark:bg-brand/15">
          {s.role}
        </span>
      </div>

      <div className="grid gap-5 p-4 md:grid-cols-[240px_1fr] md:p-5">
        {/* Portrait */}
        <div>
          <SafeImage
            src={s.portrait}
            alt={`${s.nameBn} (${s.nameEn})`}
            fallbackLabel={`${s.nameBn} — ছবি যোগ করুন`}
            className="aspect-[3/4] w-full"
          />
          <div className="mt-3 text-center md:text-left">
            <h3 className="text-[18px] font-bold leading-tight">{s.nameBn}</h3>
            <p className="text-[12px] font-semibold tracking-wider text-brand">{s.nameEn}</p>
            <p className="mt-1.5 text-[13px] text-neutral-600 dark:text-neutral-400">{s.role}</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={s.contacts.facebook}
              className="flex-1 rounded-md bg-brand px-3 py-1.5 text-center text-[12px] font-semibold text-white transition hover:bg-brand-dark"
            >
              ফেসবুক
            </a>
            <a
              href={`mailto:${s.contacts.email}`}
              className="flex-1 rounded-md border border-brand px-3 py-1.5 text-center text-[12px] font-semibold text-brand transition hover:bg-brand-soft dark:hover:bg-brand/10"
            >
              ইমেইল
            </a>
          </div>
        </div>

        {/* Message + gallery */}
        <div>
          <blockquote className="border-l-4 border-brand bg-brand-soft px-4 py-3 dark:bg-brand/10">
            <p className="bn-lead text-[15px] font-semibold leading-relaxed md:text-[16px]">
              {s.message}
            </p>
            <footer className="mt-2 text-[13px] font-semibold text-brand">— {s.nameBn}</footer>
          </blockquote>

          <p className="mt-3 text-[14px] leading-relaxed text-neutral-700 dark:text-neutral-300">
            {s.bio}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {s.gallery.map((g) => (
              <figure key={g.src}>
                <SafeImage
                  src={g.src}
                  alt={g.caption}
                  fallbackLabel={g.caption}
                  className="aspect-square w-full"
                />
                <figcaption className="mt-1.5 text-[11px] leading-tight text-neutral-500 dark:text-neutral-400">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
