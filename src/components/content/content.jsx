import React from "react";

class Content extends React.Component {
  state = {
    title: "Students",
    lists: [
      {
        id: 1,
        name: "Rameshwor",
        age: 22,
        course: "MSD",
        pic: "https://picsum.photos/id/1003/60",
      },
      {
        id: 2,
        name: "MISS",
        age: 22,
        course: "MSD",
        pic: "https://picsum.photos/id/1002/60",
      },
      {
        id: 3,
        name: "MIU",
        age: 25,
        course: "COMPRO",
        pic: "https://picsum.photos/id/1001/60",
      },
      {
        id: 4,
        name: "TORI",
        age: 20,
        course: "COMPRO",
        pic: "https://picsum.photos/id/1000/60",
      },
    ],
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.title}{" "}
          <span className="badge badge-secondary bg-dark m-2">
            {this.state.lists.length}
          </span>
          <button className="btn btn-info">Refresh</button>
          <button
            className="btn btn-primary pull pull-right"
            onClick={this.addStudent(this.state.lists.length)}
          >
            Add
          </button>
        </h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>PHOTO</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>COURSE</th>
            </tr>
          </thead>
          <tbody>{this.getStudentsInRows()}</tbody>
        </table>
      </div>
    );
  }

  getStudentsInRows = () => {
    return this.state.lists.map((student) => {
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>
            <img src={student.pic} alt="Student" />
          </td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.course}</td>
        </tr>
      );
    });
  };

  addStudent = (length) => {
    let students = this.state.lists;
    students.push({
      id: length + 1,
      pic: "https://picsum.photos/id/1005/60",
      name: "ADED",
      age: 44,
      course: "AAS",
    });

    // this.setState({ lists: students });
  };
}

export default Content;
