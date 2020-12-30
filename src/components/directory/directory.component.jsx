import React from 'react';
import { connect } from 'react-redux';

import "./directory.style.scss";

import MenuItem from "../menu-item/menu-item.component";
import { selectedDirectorySection } from '../../redux/directory/directory.selectors';

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({ id,...otherSectionProps }) => (<MenuItem key={id} {...otherSectionProps}/>))}
    </div>
)


const mapStateToProps = (state) => ({
  sections: selectedDirectorySection(state)
})

export default connect(mapStateToProps)(Directory);