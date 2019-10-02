import React from "react";
import expect from "expect";
import { mount, shallow } from "enzyme";
import {ManageCoursePage} from "./ManageCoursePage";

describe('manage course page', () => {
  it('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: { saveCourse: () => { return Promise.resolve; }},
      course: {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('button');
    expect(saveButton.prop('type')).toBe('submit');
    wrapper.find("form").simulate("submit");
    expect(wrapper.state().errors.title).toBe('Title must be atleast 5 characters.');
  });
});
