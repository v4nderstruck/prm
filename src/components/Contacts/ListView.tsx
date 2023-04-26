"use client"
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

type User = {
  id: number,
  avatar: string,
  name: string,
  location: string,
  lastContact: Date,
  channels: string[],
  tags: string[],

}

function fakeUsers() {
  let users = []
  for (let i = 0; i < 30; i++) {
    users.push({
      id: i,
      avatar: faker.image.avatar(),
      name: faker.name.findName(),
      location: faker.address.cityName(),
      lastContact: faker.date.past(),
      channels: faker.helpers.arrayElements(['Email', 'Phone', 'SMS']),
      tags: faker.helpers.arrayElements(['Blue', 'Green', 'Red', 'Yellow'])
    })
  }
  return users
}

export default function ListView() {
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => { setUsers(fakeUsers()) }, [])
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Location</th>
            <th>Last Contact</th>
            <th>Channels</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img src={user.avatar} />
                  </div>
                </div>
              </td>
              <td>{user.name}</td>
              <td>{user.location}</td>
              <td>{user.lastContact.toLocaleDateString()}</td>
              <td>{user.channels}</td>
              <td>{user.tags}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
