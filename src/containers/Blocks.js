import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/blocks";
import Block from '../components/Block'
import {
  Box,
} from "@material-ui/core";

export class Blocks extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        this.props.actions.getBlocks(this.props.node)
    }

    render() {
        const { blocks } = this.props;
        return (
            <Box width="100%">
                {blocks.list 
                    ? blocks.list.map((block) => (
                        <Block block={block} key={block.id}/>
                    ))
                    : <p>No blocks</p>
                }
            </Box>
        );
    }
}

Blocks.propTypes = {
  actions: PropTypes.object.isRequired,
  blocks: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        blocks: state.blocks,
    }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Blocks);