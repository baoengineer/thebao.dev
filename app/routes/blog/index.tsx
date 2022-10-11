import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData() as LoaderData;
  return (
    <main>
      <section className="py-20">
        <div className="container">
          <h1>Blog</h1>
          {/*<Link to="/admin" className="inline-flex text-red-600 underline">*/}
          {/*  Admin*/}
          {/*</Link>*/}
          <ul className="grid lg:grid-cols-2 gap-4">
            {posts.map((post) => (
              <li key={post.slug} className="w-full">
                <Link to={post.slug} className="text-blue-600 group block">
                  <div className="relative flex h-full items-end rounded-3xl border-4 border-black bg-white p-4 lg:p-8 transition group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[8px_8px_0_0_#000]">
                    <div className="lg:group-hover:absolute lg:group-hover:opacity-0 pt-24">
                      <p className="mt-4 text-md lg:text-xl font-medium sm:text-2xl">
                        {post.title}
                      </p>
                    </div>

                    <div className="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100 pt-24">
                      <p className="text-md lg:text-xl font-medium">
                        {post.title}
                      </p>
                      <p className="mt-4 text-md lg:text-sm">
                        {post.description}
                      </p>
                      <small>
                        {new Date(post.updatedAt).toLocaleDateString("en-US", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </small>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
