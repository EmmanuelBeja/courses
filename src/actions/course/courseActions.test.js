import expect from "expect";
import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import thunk from "redux-thunk";
import nock from "nock";
import configureMockStore from "redux-mock-store";

// test async function
describe("Course Actions", () => {
  it("Should create a CREATE_COURSE_SUCCESS action", () => {
    //arrange
    const course = {id: "clean-code", title: "Clean code"};
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course: course
    };
    // act
    const action = courseActions.createCourseSuccess(course);
    // assert
    expect(action).toEqual(expectedAction);
  });
});


const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it("Should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses", (done) => {
    // example to call nock
    // nock('http://example.com/')
    //   .get('/courses')
    //   .reply(200 { body: {course: [{id: "clean-code", title: "Clean code"}] } })

    const expectedActions = [
      {type: 'BEGIN_AJAX_CALL'},
      {type: 'LOAD_COURSES_SUCCESS', body: {course: [{id: "clean-code", title: "Clean code"}] }}
    ];

    const store = mockStore({courses: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual('BEGIN_AJAX_CALL');
      expect(actions[1].type).toEqual('LOAD_COURSES_SUCCESS');
      // done();
    });

    done();

  });
});
