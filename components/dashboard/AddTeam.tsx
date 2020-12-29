import React from 'react'
import { Alert } from 'antd'
import Button from '@components/common/Button'

export default function AddTeam (props: {handleAddTeam: Function}) {
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState(null)

  const handleAddTeam = () => {
    if (name) {
      props.handleAddTeam(name)
    } else {
      setError('Team name is required!')
    }
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div className="p-6">
    {error && <Alert message={error} type="error" />}
    <h2>Create New Team</h2>
    <input placeholder="team name" className="block border w-full p-1" onChange={onChange} value={name} />
    <Button className="cursor-pointer bg-blue hover:bg-blue-400 shadow-xl px-5 py-2 inline-block text-white rounded mt-4 float-right" onClick={handleAddTeam}>Submit</Button>
    </div>
  )
}
