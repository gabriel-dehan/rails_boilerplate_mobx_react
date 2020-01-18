import React from "react"
import PropTypes from "prop-types"
import { observer, inject } from 'mobx-react';

import withStores from '../stores/withStores';

@inject('userStore')
@observer
class Example extends React.Component {
  static propTypes = {
  };
  
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render () {
    // Todo: loader
    return <div></div>;
  }
}

export default withStores(Example);
