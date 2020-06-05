import React, { useMemo, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { asyncGetListSearch } from "../../store/danhSachPhimDC/actions";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { PATHS } from "../../constants";
import { Row, Col, Divider } from "antd";
export default function Search() {
  const location = useLocation();
  const history = useHistory();
  console.log("location", location);
  const dispatch = useDispatch();

  const query = useMemo(() => {
    const parsed = queryString.parse(location.search);
    console.log("parsed", parsed);
    if (parsed.q) {
      return parsed.q;
    } else {
      history.push(PATHS.HOMEPAGE);
    }
  }, [history, location]);
  console.log("tenPhim", query);

  useEffect(() => {
    dispatch(asyncGetListSearch({ query }));
  }, [dispatch, query]);

  const searchResult = useSelector((state) => state.DC.searchResult);

  return (
    <div className="container">
      <div className="col-main">
        <div className="page-title">
          <h1>Search: {query}</h1>
        </div>
        <Divider
          orientation="left"
          style={{ color: "#333", fontWeight: "normal" }}
        >
          <h5> Kết Quả Search: {query}</h5>
        </Divider>
        <Row gutter={[16, 24]}>
          {searchResult.map((i) => {
            return (
              <Col className="gutter-row" span={6} key={i.maPhim}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={i.hinhAnh}
                    style={{ width: "250px", height: "400px", padding: "0" }}
                    alt={i.biDanh}
                  />
                  <div className="card-body">
                    <button className="btn-play">
                      <i className="fas fa-arrow-right"></i>
                      <p>Play</p>
                    </button>
                    <h4 className="card-title">
                      {i.tenPhim.length > 15
                        ? i.moTa.substr(0, 15) + "..."
                        : i.tenPhim}
                    </h4>
                    <Link to={`/datve/${i.maPhim}`} className="btn-title">
                      XEM CHI TIẾT
                    </Link>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
