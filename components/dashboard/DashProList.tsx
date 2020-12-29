/* eslint-disable camelcase */
import * as React from 'react'
import Image from 'next/image'
import { Modal, message, Skeleton } from 'antd'
import { connect } from 'react-redux'
import dynamic from 'next/dynamic'
import { addProject, fetchProject } from '@actions/project'
import AddProject from './AddProject'
import AddItem from '@components/common/AddItem'

const CardPro = dynamic(() => import('./CardPro'),
  { loading: () => <Skeleton /> }
)

type DPProps = {
  fetchProject: Function,
  user: any,
  project: Array<{}>
  team: any
}

const DashProList = (props: DPProps) => {
  const { user, fetchProject, project, team } = props
  const [showPopPro, setShowPopPro] = React.useState(false)

  const handleAddProject = async (name: string, teamId: string, description: string, dueDate: string, isPrivate: boolean) => {
    if (user.role_id !== 1) {
      Modal.destroyAll()
      message.info('User should be a team lead or admin')
    } else {
      try {
        const index = team.filter(item => (item.team_id === teamId && item.team_lead === true))
        if (index.length === 1) {
          const res = await addProject({ name, teamId, description, dueDate, isPrivate })
          if (res.data.success) {
            fetchProject(user.id)
            Modal.destroyAll()
            message.success('A new Project has been created!')
          }
        } else {
          Modal.destroyAll()
          message.info('User should be a team leader or admin')
        }
      } catch (error) {
        Modal.destroyAll()
        message.error('Fail to create a project')
      }
    }
  }

  const onAddProject = () => {
    Modal.confirm({
      icon: null,
      content: <AddProject handleAddProject={handleAddProject} team={team}/>,
      cancelButtonProps: { style: { display: 'none' } },
      okButtonProps: { style: { display: 'none' } },
      width: '400px',
      closable: true
    })
  }

  return (
    <div className="rounded-3xl w-full border border-b-gray border-solid p-4 max-sm:p-3 mt-5 max-sm:mt-4">
      <div className="flex items-center justify-between w-full relative">
        <div className="text-base font-semibold max-sm:text-sm mb-4 text-gray45">Projects</div>
        {showPopPro === true &&
          <div className="bg-white-popup z-10 w-52 absolute top-32 right-0 box-shadow-popup border border-b-gray rounded-lg p-4">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="text-sm font-medium text-sub-title">List Actions</div>
              <button onClick={() => setShowPopPro(false)}><Image alt='image' src="/icons/close-gray.svg" width={16} height={24}/></button>
            </div>
            <button className="text-sm text-gray25 mb-2">Add New Project...</button>
            <button className="text-sm text-gray25 mb-2">Edit Current Project...</button>
            <button className="text-sm text-gray25 mb-2">Add New Member...</button>
            <button className="text-sm text-gray25 mb-2">Remove Current Member...</button>
          </div>
        }
      </div>
      <div className="grid grid-cols-3 gap-4 max-2xl:grid-cols-2 max-lg:grid-cols-1 max-sm:gap-3">
        {Array.isArray(project) && project.map((val: {id: number, title: string, name: string}) =>
          <CardPro key={val.id} data={val} viewMode={'kanban'} status={'pending'}/>
        )}
        <div className="rounded-2xl border border-dashed border-b-gray flex items-center justify-center p-5 max-sm:hidden">
          <AddItem text="Add Project" fn={onAddProject}/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ project, team, user }) => {
  return {
    project,
    team,
    user
  }
}

export default connect(mapStateToProps, { fetchProject })(DashProList)
