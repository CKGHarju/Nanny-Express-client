import React, { Component } from 'react'
import './List.css'
import { connect } from 'react-redux'
import NannyItem from './NannyItem'


class List extends Component {

  render () {
    const nannies = this.props.nannies.map((nanny,index) => <NannyItem  key={index} nanny={nanny} > </NannyItem>)
    return (

      <div className="Nannies">
        {/* <h2 className="Title">ALL CONTACTS</h2> */}
        <div className="Nanny-List">{nannies}</div>
      </div>

    )
  }
}

const mapStateToProps = (state, props) => ({
  nannies: state,

})
export default connect(mapStateToProps)(List)
