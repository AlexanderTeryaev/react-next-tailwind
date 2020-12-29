import React from 'react'
import { Alert, Input, DatePicker, Checkbox } from 'antd'
import Button from '@components/common/Button'
import SelectBox from '@components/common/SelectBox'

export default function AddProject (props: { handleAddProject: Function, team: any }) {
  const [name, setName] = React.useState('')
  const [teamId, setTeamId] = React.useState(null)
  const [description, setDescription] = React.useState('')
  const [dueDate, setDueDate] = React.useState(new Date())
  const [isPrivate, setIsPrivate] = React.useState(true)
  const [error, setError] = React.useState(null)

  const handleAddProject = () => {
    if (name !== '' && teamId) {
      props.handleAddProject(name, teamId, description, dueDate, isPrivate)
    } else {
      setError('Required field is missing!')
    }
  }

  const onChange = (e) => {
    setName(e.target.value)
  }

  const onDateChange = (date, dateString) => {
    setDueDate(dateString)
  }

  const onSelect = (e) => {
    setTeamId(e)
  }

  return (
    <div className="px-6 py-2">
      {error && <Alert message={error} type="error" />}
      <div className="text-base font-semibold text-title mb-4">Create New Project</div>
      <Input placeholder="Project name" className="input-border rounded-lg mb-3" onChange={onChange} value={name} />
      <SelectBox
        className="border-b-gray mb-3"
        value={teamId}
        size={'middle'}
        options={props.team}
        nameField='name'
        valueField='team_id'
        onSelect={onSelect}
        placeholder="Choose team"
      />
      <textarea placeholder="Description" rows={5} className="border border-b-gray px-2 py-1 rounded-lg block w-full mb-3" onChange={(e) => setDescription(e.target.value)} value={description} />
      <DatePicker onChange={onDateChange} className="block w-full mb-3 rounded-lg" />
      <Checkbox onChange={(e) => setIsPrivate(e.target.checked)}>
        <span className="text-secondary-black-200 text-xs mb-3">Make project private to only assignees</span>
      </Checkbox>
      <Button className="cursor-pointer bg-blue hover:bg-blue-400 shadow-xl px-5 py-2 inline-block text-white rounded mt-4 float-right" onClick={handleAddProject}>Submit</Button>
    </div>
  )
}
