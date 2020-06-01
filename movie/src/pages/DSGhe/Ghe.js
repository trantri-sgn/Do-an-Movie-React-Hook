import React, { Component } from "react";
import "../../sass/Layout/DetailPhim/_Ghe.scss";
export default class Ghe extends Component {
  constructor() {
    super();
    this.state = {
      gheDangDat: false,
      gheDaDat: false,
      ghe: true,
    };
  }
  render() {
    return (
      <td>
        <input type="checkbox" className="seats" />
      </td>
    );
  }
}
