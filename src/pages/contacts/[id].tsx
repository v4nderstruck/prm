import Head from "next/head";
import { useRouter } from "next/router";
import ContactView from "~/components/Contacts/ContactView";
import Navbar from "~/components/Navbar";

export default function Contact() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Head>
        <title>PRM - Contacts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen w-screen">
        <Navbar />

        <div className="px-0 lg:px-44 w-full flex flex-col gap-8 items-center">
          <ContactView id={parseInt(id as string)} />
        </div>
      </div>
    </>
  )

}
