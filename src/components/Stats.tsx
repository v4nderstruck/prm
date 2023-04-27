import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { api } from '~/utils/api';

export default function Stats() {
  const totalContacts = api.contacts.getTotalContacts.useQuery();
  if(totalContacts.error || totalContacts.data === undefined) return <div></div>

  return (
    <div >
      <div className='mb-4'>
        <p className="text-3xl font-bold">Welcome back, User 👋!</p>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow overflow-x-scroll">
        <div className="stat">
          <div className="stat-title">Contacts</div>
          <div className="stat-value">{totalContacts.data}</div>
          <div className="stat-desc">Last Updated: Today</div>
        </div>
        <div className="stat">
          <div className="stat-title">Activities</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">Last Activity: Yesterday</div>
        </div>
        <div className="stat">
          <div className="stat-title">Add More</div>
          <div className="stat-value">
            <AiOutlineAppstoreAdd />
          </div>
        </div>
      </div>
    </div>
  )
}
