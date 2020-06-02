import React, { Component } from "react";
import Ghe from "./Ghe";
import "../../sass/Layout/DetailPhim/_DanhSachGhe.scss";

export default class DanhSachGhe extends Component {
  render() {
    return (
      <div className="Seat">
        <h1>Movie Seat Selection</h1>
        <div className="container">
          <div className="w3ls-reg">
            <ul className="seat_w3ls">
              <li className="smallBox greenBox">Selected Seat</li>
              <li className="smallBox redBox">Reserved Seat </li>
              <li className="smallBox emptyBox">Empty Seat</li>
            </ul>
            <div className="seatStructure txt-center">
              <p id="notification"></p>
              <table id="seatsBlock">
                <tbody>
                  <tr>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td></td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>A</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>B</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>C</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>D</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>

                  <tr>
                    <td>E</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr className="seatVgap"></tr>
                  <tr>
                    <td>F</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>G</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>H</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>I</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                  <tr>
                    <td>J</td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <td className="seatGap"></td>
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                    <Ghe />
                  </tr>
                </tbody>
              </table>
              <div className="screen">
                <h2 className="wthree">Screen this way</h2>
              </div>
              <button>Confirm Selection</button>
            </div>
            <div className="displayerBoxes txt-center">
              <table className="Displaytable w3ls-table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Number of Seats</th>
                    <th>Seats</th>
                  </tr>
                  <tr>
                    <td>
                      <textarea id="nameDisplay"></textarea>
                    </td>
                    <td>
                      <textarea id="NumberDisplay"></textarea>
                    </td>
                    <td>
                      <textarea id="seatsDisplay"></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
