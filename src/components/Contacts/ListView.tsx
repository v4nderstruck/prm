"use client"
import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { api } from '~/utils/api';
import { useScrollPosition } from '../helpers/useScrollPosition';


export default function ListView() {
  const router = useRouter()
  const [cursor, setCursor] = useState<{ take: number }>({ take: 20 });
  const contacts = api.contacts.getContactsByCursor.useInfiniteQuery({ take: 20 }, {
    getNextPageParam: (lastPage) => lastPage.nextCursor
    // keepPreviousData: true
  });

  const scrollCb = useCallback(
    (percentage: number) => {
      if (contacts.data === undefined) return;
      if (contacts.data.pages.length < 1) return;
      console.log("scrolled ", percentage);
      console.log("hasNextPage ", contacts.hasNextPage);

      if (percentage > 80 && contacts.hasNextPage) {
        contacts.fetchNextPage()
      }
    },
    [setCursor, contacts],
  )

  useScrollPosition(scrollCb, [contacts, setCursor], 300);

  if (contacts.error || contacts.data === undefined) return <div></div>
  if (contacts.isLoading) return <div>Loading...</div>

  if (contacts.isRefetching) return <div>Refetching...</div>
  console.log(contacts.data)
  return (
    <div className="overflow-x-auto">
      <table
        className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>First Met</th>
            <th>Last Contact</th>
            <th>Last Activity Together</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {contacts.data.pages.map(({ items }) => {
            return items.map((user) => (
              <tr
                key={user.id}
                onClick={() => { router.push(`/contacts/${user.id}`) }}
                className='cursor-pointer' >
                <td>{user.id}</td>
                <td>
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={user.avatar || ""} />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.firstMet}</td>
                <td>{user.lastContacted && user.lastContacted.toLocaleDateString()}</td>
                <td>{user.lastActivityTogether && user.lastActivityTogether.toLocaleString()}</td>
                <td>{user.occupation}</td>
              </tr>
            ))
          })}
        </tbody>
      </table>
    </div >
  )
}
