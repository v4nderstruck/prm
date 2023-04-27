import { api } from "~/utils/api"
import { HiOutlineEmojiHappy } from "react-icons/hi"

type ContactViewProps = {
  id: number
}

export default function ContactView({ id }: ContactViewProps) {
  const contact = api.contacts.getContactById.useQuery(id);
  if (contact.isError || contact.data === undefined || contact.data === null) return <div></div>
  if (contact.isLoading) return <div>Loading...</div>

  return (
    <div>
      <div className="w-full flex flex-row gap-6">
        <div className="avatar">
          <div className="w-24 rounded-xl">
            <img src={contact.data.avatar ? contact.data.avatar : undefined} />
          </div>
        </div>
        <div className="prose py-2 flex flex-col justify-between">
          <h2 className="mb-0 flex items-center gap-2">
            {contact.data.name}
            <HiOutlineEmojiHappy />
          </h2>
          <div className="flex gap-8">
            <p className="m-0">
              Last Contact: {contact.data.lastContacted?.toLocaleDateString()}
            </p>
            <p className="m-0">
              Last Activity Together: {contact.data.lastActivityTogether?.toLocaleDateString()}
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}
