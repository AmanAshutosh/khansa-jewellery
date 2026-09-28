import { brand } from '../../../config/brand';
import './AnnouncementBar.css';

export default function AnnouncementBar() {
  return (
    <aside className="announcement" aria-label="Announcement">
      <p className="announcement__text">{brand.announcement}</p>
    </aside>
  );
}
