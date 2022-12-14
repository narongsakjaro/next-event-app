import EventItem from "./event-item";
import css from "./event-item.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={css.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
