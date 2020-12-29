/* eslint-disable camelcase */
import React from 'react'
import Image from 'next/image'
import { Avatar } from 'antd'
import { capitalize } from 'lodash'

import PopItem from '../common/PopItem'
import { fetchTeamMembers } from '@actions/team'

const avatarColors = ['#16E0BD', '#f56a00', '#A9CBB7', 'EFECCA']

type Props = {
  data: {
    name: string,
    team_id: number
  }
}

const CardTeam = (props: Props) => {
  const [showPopItem, setShowPopItem] = React.useState(false)
  const [members, setMembers] = React.useState([])

  React.useEffect(() => {
    async function getMembers () {
      const res = await fetchTeamMembers(props.data.team_id)
      setMembers(res.data)
    }

    getMembers()
  }, [])

  const handlePopItem = () => {
    setShowPopItem(!showPopItem)
  }

  return (
    <div className="rounded-2xl bg-white-almost-black p-5">
      <div className="flex w-full items-start justify-between mb-5 relative">
        <div className="flex items-center text-ellipsis">
          <div className="border border-solid border-b-gray h-12 w-12 max-sm:h-8 max-sm:w-8 flex items-center justify-center rounded-lg">
            <Image alt='image' src="/icons/_Iconspace.svg" width={32} height={32} className="rounded" />
          </div>
          <div className="ml-5 text-title font-semibold text-base max-sm:text-sm text-ellipsis">
            {props.data.name && capitalize(props.data.name)}
          </div>
        </div>
        <button onClick={handlePopItem}><Image alt='image' src="/icons/more-h.svg" width={24} height={24} /></button>
        {showPopItem && <PopItem onClose={handlePopItem} />}
      </div>

      <Avatar.Group maxCount={2} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
        {members.map((val, index) => <Avatar key={val.id} style={{ color: 'black', backgroundColor: avatarColors[index] }}>{val.name.substr(0, 1).toUpperCase()}</Avatar>)}
      </Avatar.Group>
    </div>
  )
}

export default CardTeam
