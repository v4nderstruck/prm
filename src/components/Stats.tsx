import { AiOutlineAppstoreAdd } from 'react-icons/ai'

export default function Stats() {
  return (
    <div >
      <div className='mb-4'>
        <p className="text-3xl font-bold">Welcome back, User 👋!</p>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow overflow-x-scroll">
        <div className="stat">
          <div className="stat-title">Contacts</div>
          <div className="stat-value">31K</div>
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
