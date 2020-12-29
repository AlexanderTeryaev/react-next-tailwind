/* eslint-disable camelcase */
import * as React from 'react'
import { Modal, message, Skeleton } from 'antd'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { addTeamPost, fetchTeam } from '@actions/team'
import AddTeam from './AddTeam'
import AddItem from '@components/common/AddItem'

const CardTeam = dynamic(() => import('./CardTeam'),
  { loading: () => <Skeleton /> }
)

type User = {
  id: string
}

interface DTProps {
  fetchTeam: Function,
  user: User,
  team: Array<{}>
}

const DashTeamList: React.FC<DTProps> = ({ user, fetchTeam, team }: DTProps) => {
  const handleAddTeam = async (name: string) => {
    try {
      const res = await addTeamPost({ name, user })
      if (res.data.success) {
        fetchTeam(user.id)
        Modal.destroyAll()
        message.success('A new Team has been created!')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const addTeam = () => {
    Modal.confirm({
      icon: null,
      content: <AddTeam handleAddTeam={handleAddTeam} />,
      cancelButtonProps: { style: { display: 'none' } },
      okButtonProps: { style: { display: 'none' } },
      width: '350px',
      closable: true
    })
  }

  return (
    <div className="rounded-3xl w-full border border-b-gray border-solid p-4 max-sm:p-3">
      <div className="flex items-center justify-between w-full">
        <div className="text-base font-semibold mb-4 text-gray45">Teams</div>
      </div>
      <div className="grid gap-0.5 grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-3">
        {Array.isArray(team) && team.map((val: { team_id: number, name: string }) =>
          <CardTeam key={val.team_id} data={val} />
        )}
        <div className="rounded-2xl border border-dashed border-b-gray flex items-center justify-center p-5 max-sm:hidden">
          <AddItem text="Add Team" fn={addTeam} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ team, user }) => {
  return {
    team,
    user
  }
}

export default connect(mapStateToProps, { fetchTeam })(DashTeamList)
