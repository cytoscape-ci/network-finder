import React from 'react'
import Paper from 'material-ui/lib/paper'

import TopBar from './topbar/topbar'
import SearchArea from './search/search_area'
import ResultArea from './result/result_area'

export default class NetworkFinder extends React.Component {

  constructor(props) {super(props)}

  render() {
    const style = {
      height: 700,
      width: "90%"
    }
    return (
      <Paper style={style} z={3}>
        <TopBar/>
        <SearchArea/>
        <ResultArea/>
      </Paper>
    )
  }

}