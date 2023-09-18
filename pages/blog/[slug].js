import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  FaAngleRight,
  FaSearch,
  FaHeart,
  FaEye,
  FaCartPlus,
} from "react-icons/fa";
export default function Home() {
  const router = useRouter();
  const { slug } = router.query;
  const blogcats = [
    { title: "my blog post", link: "/k" },
    { title: "my blog post", link: "/k" },
    { title: "my blog post", link: "/k" },
    { title: "my blog post", link: "/k" },
  ];
  return (
    <>
      <Header />
      <div className="block lg:flex mx-4">
        <div className="w-full lg:w-5/6 shadow p-2 flex mx-auto">
          <div className="bg-light-300 shadow mt-10 w-full">
            <p className="rounded-top-lg shadow-lg uppercase bg-light-300 py-3 mb-3  rounded-t flex justify-between">
              <h2 className="ml-3 w-full">My First Post</h2>{" "}
            </p>
            <img
              src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
              alt=""
              class="rounded-t-lg"
            />
            <div className="mt-4 ">jsjssksskkssksksksk</div>
            <div className="bg-gray-50 py-3">
              <form
                method="post"
                action=""
                className="shadow  bg-white flex flex-col w-2/5 px-3 py-3 mx-auto"
              >
                <label>REPLY:</label>
                <input
                  name="name"
                  className="border-2 border-zinc-200 py-2 rounded-xl"
                  placeholder="Name.."
                />
                <input name="id" type="hidden" />
                <textarea
                  name="comment"
                  placeholder="Comment..."
                  className="border-2 border-zinc-200 rounded-xl py-2 my-2"
                ></textarea>
                <button
                  type="submit"
                  name="comment"
                  className="bg-indigo-200 p-1"
                >
                  Comment
                </button>
              </form>
              <ul className="list-none">
                {[
                  { name: "dav", comment: "wjwwjw", date: "20-12-1100" },
                  { name: "dav", comment: "wjwwjw", date: "20-12-1100" },
                  { name: "dav", comment: "wjwwjw", date: "20-12-1100" },
                  { name: "dav", comment: "wjwwjw", date: "20-12-1100" },
                  { name: "dav", comment: "wjwwjw", date: "20-12-1100" },
                ].map((comment) => (
                  <li className="pl-2 pt-2 bg-white border-t-2 border-gray-100">
                    <div className="w-full">{comment.comment}</div>
                    <div className="flex justify-between bg-slate-50 bottom-0 opacity-50 italic">
                      <span className="text-xs">{comment.name}</span>{" "}
                      <span className="text-xs text-blue-300">
                        {comment.date}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside className="leftsidebar shadow  w-full lg:w-1/6 mx-auto">
          <div className="shadow text-weight-bolder uppercase py-2 px-2 mt-4 bg-yellow-400 hover:bg-yellow-300">
            Search Blog
          </div>
          <form
            className="search flex w-full mx-auto mb-4"
            method="get"
            action="/blog/search"
            role="search"
          >
            <input
              class="search-input rounded-l w-3/4 border-2 border-r-0 py-2 focus:border-gray-2"
              type="search"
              name="s"
              id="search-sidebar"
              placeholder="Type here and press enter ..."
            />
            <button
              type="submit"
              className="py-2 rounded-r w-1/4 border-2 border-l-0"
            >
              <FaSearch className="text-xl mx-auto" />
            </button>
          </form>
          <div className="shadow text-weight-bolder py-2 pl-2 uppercase mt-4 bg-yellow-400 hover:bg-yellow-300">
            Latest
          </div>
          {blogcats.map((category) => (
            <div className="py-1" role="none">
              <Link href={category.link}>
                <a className="block px-2  text-left py-2 lg:py-4 text-sm hover:text-black border-b-2  text-gray-500  flex justify-between">
                  {" "}
                  <span className="my-auto truncate">
                    {category.title.toUpperCase()}
                  </span>
                </a>
              </Link>
            </div>
          ))}
          <div className="shadow text-weight-bolder py-2 pl-2 uppercase mt-4 bg-yellow-400 hover:bg-yellow-300">
            Showcased
          </div>
          {[1, 2].map((item) => (
            <div
              class="relative bg-light-100 lg:w-full pb-3 rounded-lg shadow-lg mx-15"
              style={{
                minHeight: "160px",
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80')",
              }}
            >
              <div class="">
                <span class="bg-yellow-400 rounded-full absolute right-0 top-0">
                  -5%
                </span>
                <p className="mt-1 py-3 truncate text-white bg-black opacity-70 rounded-l-lg">
                  This is a little bit better of a card!
                </p>
                <div className="py-6 mt-4 relative h-">
                  <div className="flex w-full  justify-between bottom-5 mt-4">
                    <Link href="#" className="my-auto">
                      <button className="bg-slate-100 hover:bg-slate-200 flex justify-between text-indigo p-2 rounded-l-sm opacity-70">
                        <text className="mx-2 my-auto ">
                          <a className="text-black-900 flex justify-between">
                            <span>$1000</span>
                          </a>
                        </text>
                      </button>
                    </Link>{" "}
                    <br />
                    <Link href="#" className="right-0">
                      <button className="bg-indigo-500 hover:bg-indigo-400 flex justify-between text-white px-2 rounded-full">
                        <text className="mx-2 my-auto">VIEW</text>{" "}
                        <FaEye className="my-auto text-white-300 my-auto" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </div>
      <Footer />
    </>
  );
}
