import Link from "next/link";
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";
import { PER_PAGE } from "@/config/index";
import Pagination from "@/components/Pagination";

export default function HomePage({ events, pagination }) {
  // console.log(events);
  return (
    <Layout>
      <h1>All Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {/* {events.length > 0 && (
        <Link href="/events" legacyBehavior>
          <a className="btn-secondary">View All Events</a>
        </Link>
      )} */}
      <Pagination page={pagination.page} pageCount={pagination.pageCount} />
    </Layout>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(
    `${API_URL}/api/events?pagination[page]=${page}&pagination[pageSize]=${PER_PAGE}&populate=*`
  );
  const events = await res.json();

  return {
    props: { events: events.data, pagination: events.meta.pagination },
  };
}
