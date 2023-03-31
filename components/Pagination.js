import Link from "next/link";
import { PER_PAGE } from "@/config/index";

export default function Pagination({ page, pageCount }) {
  const lastPage = pageCount;
  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`} legacyBehavior>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`} legacyBehavior>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </>
  );
}
