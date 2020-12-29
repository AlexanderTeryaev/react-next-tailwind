import * as React from 'react'
import App from 'next/app'
import 'antd/dist/antd.css'
import '../styles/index.css'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { FETCH_USER } from '../actions/user'
import { FETCH_TEAMS } from '../actions/team'
import { FETCH_PROJECTS } from '@actions/project'

type Props = {
  reduxStore:{
    dispatch: Function
  }
}
class MyApp extends App<Props> {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = { user: null }
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    if (ctx.req && ctx.req.session.passport) {
      pageProps.user = ctx.req.session.passport.user
    }
    return { pageProps }
  }

  async componentDidMount () {
    const { pageProps: { user }, reduxStore: { dispatch } } = this.props
    if (user) {
      const results = await fetch(`/api/user?user_id=${user.id}`)
      const person = await results.json()
      dispatch({
        type: FETCH_USER,
        payload: person[0]
      })

      const teamResults = await fetch(`/api/team?user_id=${user.id}`)
      const teams = await teamResults.json()
      dispatch({
        type: FETCH_TEAMS,
        payload: teams
      })

      const projectResults = await fetch(`/api/project?user_id=${user.id}`)
      const projects = await projectResults.json()
      dispatch({
        type: FETCH_PROJECTS,
        payload: projects
      })
    }
  }

  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
