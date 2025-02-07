import { useState } from "react";
import styles from "@/styles/Timeline.module.css";

interface TimelineEvent {
  date: string;
  description: string;
}

const Timeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  const addEvent = (event: TimelineEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  return (
    <div className={styles.timelineContainer}>
      <h1>Timeline</h1>
      <div className={styles.timeline}>
        {events.map((event, index) => (
          <div className={styles.timelineEvent} key={index}>
            <div>{event.date}</div>
            <div>{event.description}</div>
          </div>
        ))}
      </div>
      <AddTimeLineEventForm onAddEvent={addEvent} />
    </div>
  );
};

const AddTimeLineEventForm = ({ onAddEvent }: { onAddEvent: (event: TimelineEvent) => void }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && description) {
      onAddEvent({ date, description });
      setDate("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addEventForm}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={styles.inputDate}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the event..."
        className={styles.inputDescription}
        required
      />
      <button type="submit" className={styles.addEventButton}>
        Add Event
      </button>
    </form>
  );
};

export default Timeline;
