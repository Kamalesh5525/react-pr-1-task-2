import Child from "./Child";
const { Component } = require("react");

class Parents extends Component {
  constructor() {
    super();
    this.employee = [
      {
        empid: 1,
        empname: "abc",
        empemail: "abc@gmail.com",
        empphone: 12345,
        empaddress: {
          country: "india",
          state: "gujarat",
          city: "surat",
          area: "motavarachha"
        },
        empdeg: "junior",
        empsalary: 23000,
        empdepartment: "ui/ux",
        color: "#F5DAD2"
      },
      {
        empid: 2,
        empname: "def",
        empemail: "def@gmail.com",
        empphone: 2121,
        empaddress: {
          country: "india",
          state: "rajasthan",
          city: "jaypur",
          area: "jaypurabc"
        },
        empdeg: "junior",
        empsalary: 21000,
        empdepartment: "web design",
        color: "#FFEAE3"
      },
      {
        empid: 3,
        empname: "ghi",
        empemail: "ghi@gmail.com",
        empphone: 2212,
        empaddress: {
          country: "india",
          state: "maharashtra",
          city: "pune",
          area: "abcpune"
        },
        empdeg: "seniour",
        empsalary: 65000,
        empdepartment: "backend developer",
        color: "#F0EBE3"
      },
      {
        empid: 4,
        empname: "jkl",
        empemail: "jkl@gmail.com",
        empphone: 212112,
        empaddress: {
          country: "india",
          state: "karnatak",
          city: "bengaluru",
          area: "kgf"
        },
        empdeg: "tl",
        empsalary: 150000,
        empdepartment: "frontend developer",
        color: "#E8EFCF"
      }
    ]
  }
  render() {
    return (
      <>
        <Child data={this.employee} />
      </>
    )

  }
}

export default Parents