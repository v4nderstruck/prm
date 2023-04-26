import Head from "next/head";
import ListView from "~/components/Contacts/ListView";
import Navbar from "~/components/Navbar";

export default function Contacts() {
  return (
    <>
      <Head>
        <title>PRM - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <Navbar />
        <div className="px-0 lg:px-44 w-full flex flex-col gap-8 items-center">
          <div className="tabs ">
            <a className="tab tab-bordered tab-active">List View</a>
            <a className="tab tab-bordered">Graph View</a>
          </div>
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered max-h-8 w-80" />
              <button className="btn btn-square btn-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>
          <div className="w-full mb-20">
            <ListView />
          </div>
        </div>
      </div>
    </>
  )
}
