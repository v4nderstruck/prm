import { faker } from "@faker-js/faker"
import { useEffect, useState } from "react"
type Event = {
  id: number,
  userAvatar: string,
  activity: string,
  date: Date,
}

function fakeEvents() {
  let events = []
  for (let i = 0; i < 5; i++) {
    events.push({
      id: i,
      userAvatar: faker.image.avatar(),
      activity: faker.lorem.words(8),
      date: faker.date.future(),
    })
  }
  return events
}
export default function NextEvents() {
  const [events, setEvents] = useState<Event[]>([])
  useEffect(() => { setEvents(fakeEvents()) }, [])

  return (
    <div className="w-full">
      <p className="text-2xl font-bold mb-4">Next Events 🗓️</p>
      <div className="overflow-x-auto w-full">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Event</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="w-10 rounded-full">
                        <img src={event.userAvatar} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-ellipsis w-auto">{event.activity}</div>
                      <div className="text-sm opacity-50">{event.date.toLocaleDateString()}</div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th><button>Load More</button></th>
              <th></th>
            </tr>
          </tfoot>

        </table>
      </div>
    </div>
  )
}
