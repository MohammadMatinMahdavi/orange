export default function AnnouncementBar({ t }) {
  return <div className="announcement flex min-h-[31px] items-center justify-center gap-2.5 px-3 text-center"><span className="status-dot" /><span>{t.eyebrow}</span><span className="announcement-divider">/</span><span>{t.line}</span></div>;
}
