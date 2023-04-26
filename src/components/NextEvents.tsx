export default function NextEvents() {
  return (
    <div>
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
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe's B-Day</div>
                    <div className="text-sm opacity-50">25. März 2023</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe's B-Day</div>
                    <div className="text-sm opacity-50">25. März 2023</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe's B-Day</div>
                    <div className="text-sm opacity-50">25. März 2023</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe's B-Day</div>
                    <div className="text-sm opacity-50">25. März 2023</div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://picsum.photos/200" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe's B-Day</div>
                    <div className="text-sm opacity-50">25. März 2023</div>
                  </div>
                </div>
              </td>
            </tr>
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
