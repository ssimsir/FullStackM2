import GoBack from "@/components/GoBack";
import Link from "next/link";
import React from "react";

const Users = () => {
  return (
    <div>
      <h1 className="text-2xl text-center">Users</h1>
      <nav className="flex flex-col">
        {[1, 2, 3, 4].map((user) => (
          <Link
            key={user}
            href={`/dashboard/users/${user}`}
            className="underline"
          >
            Go user-{user}{" "}
          </Link>
        ))}
      </nav>
      <GoBack />
    </div>
  );
};

export default Users;
