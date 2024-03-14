import React, {Fragment} from 'react'
import Form from './Form'
import Leads from './leads'

export default function Dashboard() {
  return (
    <div>
      <Fragment>
        <Form/>
        <Leads/>
      </Fragment>
    </div>
  )
}
