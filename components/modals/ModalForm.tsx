import React from 'react'
import { Modal, Checkbox, Input, Progress, Skeleton } from 'antd'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const SelectBox = dynamic(() =>
  import('../../components').then((mod) => mod.SelectBox, e => null as never),
{ loading: function loadSkeleton () { return <Skeleton /> } }
)

type ModalFormProps = {
  isModalVisible: boolean,
  onClose: any
}

const ModalForm = (props: ModalFormProps) => {
  const [data] = React.useState([1, 2])
  const [percentage] = React.useState(30)

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  return (
    <div>
      <Modal
        title=''
        visible={props.isModalVisible}
        onOk={props.onClose}
        onCancel={props.onClose}
        className='w-750'
      >
        <div className="flex items-center justify-between w-full -mt-2 pb-4 px-5 border-b border-b-gray border-solid">
          <div className="w-40">
            <SelectBox className="" placeholder="Change status" value='Mark Complete' size={'middle'} options={[{ name: 'Mark Complete' }]} nameField='name' valueField='name' onSelect={() => console.log('selected')}/>
          </div>
          <button className="pr-6 mt-1"><Image alt='image' src="/icons/more-h.svg" width={24} height={24} /></button>
        </div>
        <div className="px-10 py-8">
          <div className="text-2xl font-semibold text-title mb-1">Design Dashboard and UI Kit</div>
          <div className="text-sm text-gray45 mb-6">Added by <span className="text-blue">John Son,</span> 22 hours agao</div>
          <div className="flex pb-8 border-b border-solid border-b-gray">
            <div className="mr-32">
              <div className="text-xs font-semibold text-sub-title mb-1">ASSIGNED TO</div>
              <div className="flex items-center">
                <Image alt='image' src="/icons/_Profile1.svg" width={32} height={32} className="rounded-full" />
                <div className="ml-2 flex items-center"><Image alt='image' src="/icons/_Profile2.svg" width={32} height={32} className="rounded-full" /></div>
                <div className="ml-2 flex items-center"><Image alt='image' src="/icons/_Profile3.svg" width={32} height={32} className="rounded-full" /></div>
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-sub-title mb-2">Due Date</div>
              <div className="text-xs-gray">Tue, 21 May 2019</div>
            </div>
          </div>
          <div className="flex mt-6 mb-3">
            <div className="mr-5 flex items-center"><Image alt='image' src="/icons/description.svg" width={24} height={24} /></div>
            <div className="text-sm font-semibold text-gray-39">Description</div>
          </div>
          <div className="ml-10">
            <div className="text-secondary-black-400 text-sm mb-5">
              Next Friday should be done. Next Monday we should deliver the first iteration. Make sure,
              we have a good result to be delivered by the day.
              I made some wireframes that we would like you to follow since we are building it in Google’s Material Design
              (Please learn more about this and see how to improve standard material design into something beautiful).
              But besides that, you can just do it how you like.
            </div>
            <button className="text-blue-light-blue text-sm mb-8">Show Full Description</button>
          </div>
          <div className="flex mb-3">
            <div className="mr-5 flex items-center"><Image alt='image' src="/icons/attachment.svg" width={24} height={24} /></div>
            <div className="text-sm font-semibold text-gray-39">Attachment</div>
          </div>
          <div className="ml-10 flex -mx-1">
            <div className="m-1 w-full">
              <div className="m-1 flex items-center">
                <Image alt='image' src="/icons/_image-lg1.svg" width={309} height={192} className="object-cover" />
              </div>
              <div className="text-gray400 text-xs ml-1">Dashboard references - 01.png</div>
            </div>
            <div className="m-1 w-full">
              <div className="m-1 flex items-center">
                <Image alt='image' src="/icons/_image-lg2.svg" width={309} height={192} className="object-cover" />
              </div>
              <div className="text-gray400 text-xs ml-1">Dashboard references - 02.png</div>
            </div>
          </div>
          <div className="flex mt-6 mb-3">
            <div className="mr-5 flex items-center"><Image alt='image' src="/icons/projects-gray.svg" width={24} height={24} /></div>
            <div className="text-sm font-semibold text-gray-39">Task List</div>
          </div>
          <div className="flex items-center mb-6">
            <div className="mr-4 text-sm text-gray500">{percentage}%</div>
            <div className="flex-1">
              <Progress percent={percentage} />
            </div>
          </div>
          {data.map((i) =>
            <div className="flex items-center mb-5" key={i}>
              <Checkbox onChange={(e) => onChange(e)}><span className="text-secondary-black-200 text-base">Create Flow Chart</span></Checkbox>
              <div className="ml-3 flex items-center"><Image alt='image' src="/icons/assignments.svg" width={24} height={24} /></div>
              <div className="text-gray54 text-sm ml-1 mr-3">20 Apr, 2018</div>
              <Image alt='image' src="/icons/_Profile.svg" width={20} height={20} className="rounded-full" />
              <div className="text-gray300 text-sm ml-2">Adam Yogle</div>
            </div>
          )}
          <div className="flex mt-6 mb-3">
            <Image alt='image' src="/icons/messages-gray.svg" width={24} height={24} />
            <div className="text-sm font-semibold text-gray-39 ml-5">Comments (1)</div>
          </div>
          <div className="flex items-start">
            <div className="z-10 mt-2 flex items-center">
              <Image alt='image' src="/icons/_Profile.svg" width={32} height={32} className="rounded-full" />
            </div>
            <div className="bg-almost-white-700 rounded-2xl flex-1 -ml-2 p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="text-secondary-black-400 font-semibold text-medium">Joel Hopkins, <span className="font-normal">Project Manager</span></div>
                <div className="flex items-center">
                  <div className="text-secondary-black-400 text-medium mr-3">Dec 14, 2018</div>
                  <button><Image alt='image' src="/icons/more-h.svg" width={24} height={24} /></button>
                </div>
              </div>
              <div className="flex items-center mb-2">
                <Image alt='image' src="/icons/_Profile.svg" width={20} height={24} className="rounded-full" />
                <div className="font-medium text-medium text-secondary-black-400 ml-3">Yogie Ismanda UI Kit + Minor revisi ini ya pak...</div>
              </div>
              <div className="text-medium text-secondary-black-400">
                - We would like to have Pageviews, click, conversion and total revenue up in the right corner of the graph.
                And maybe design them so the look more like buttons that you can turn on/off?
              </div>
              <div className="text-medium text-secondary-black-400">
                - Latest clicks/conversions. Where you currently have the logo for merchant,
                we should instead have a logo that represent the referring traffic sources (ex. Google or Facebook).
                So we’re actually missing a column that should say “Source”. And there should be no icon for the merchants.
              </div>
            </div>
          </div>
          <div className="flex items-start mt-5">
            <div className="z-10 mt-2 flex items-center">
              <Image alt='image' src="/icons/_Profile.svg" width={32} height={32} className="rounded-full" />
            </div>
            <div className="bg-almost-white-700 rounded-2xl flex-1 -ml-2 p-5">
              <Input placeholder="Add a comment or upload a file…" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

ModalForm.displayName = 'ModalForm'

export default ModalForm
