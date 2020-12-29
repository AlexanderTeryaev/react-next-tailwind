/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { Skeleton } from 'antd'
import dynamic from 'next/dynamic'
import { connect } from 'react-redux'
import { fetchTeam } from '@actions/team'
import { Layout } from '../../components'

const DashProList = dynamic(() =>
  import('../../components').then((mod) => mod.DashProList),
{ loading: () => <Skeleton /> }
)

const DashTeamList = dynamic(() =>
  import('../../components').then((mod) => mod.DashTeamList),
{ loading: () => <Skeleton /> }
)

type Props = {
  user: {
    name: string,
    id: string,
  },
  fetchTeam: Function
}

function Overview ({ user }: Props) {
  useEffect(() => {

  })
  return (
    <Layout>
      <div className="p-10 max-sm:p-2 max-sm:py-4 flex items-start flex-col w-full">
        <div className="flex max-sm:block items-center mb-8 max-sm:mb-5 max-sm:pl-2">
          <div className="text-title text-2xl max-sm:text-xl font-semibold mr-2">Welcome {user && user.name},</div>
          <div className="mt-1 text-lg max-sm:text-sm text-gray400">Overview</div>
        </div>
        <DashTeamList />
        <DashProList />
      </div>
    </Layout>
  )
}

function mapStateToProps ({ user }) {
  return {
    user
  }
}

export default connect(mapStateToProps, { fetchTeam })(Overview)
