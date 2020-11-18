import React, { Component, useEffect, useRef, useState } from "react";
import "./style.css";
import { Alert, Col, Row, Select, Spin, Typography } from "antd";
import { Line } from "@ant-design/charts";
import { createStructuredSelector } from "reselect";
import { useDispatch, useSelector } from "react-redux";
import {
  makeSelectAddress,
  makeSelectDailyForecasts,
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
} from "./selectors";
import {
  getDataStart,
  changeLocal,
  getDataComplete,
  getDataError,
  searchLocalStart,
} from "./actions";
// https://www.accuweather.com/images/weathericons/18.svg
const apikey = "gcUxb4nA8RDhDqJFhZZy3L8DG40rkuQd";

const cities = [353412, 352954, 353981];

// const stateSelector = createStructuredSelector({
//   loading: makeSelectLoading(),
//   // Err: makeSelectError(),
//   // datas: makeSelectData(),
// });
const { Title } = Typography;
const { Option } = Select;
var data = [];
var wDay = "";
var doC = "";
export default function Dubaothoitiet() {
  const loading = useSelector(makeSelectLoading);
  const getLocal = useSelector(makeSelectAddress);
  const datas = useSelector(makeSelectData);
  const dataForecasts = useSelector(makeSelectDailyForecasts);
  const err = useSelector(makeSelectError);

  const dispatch = useDispatch();
  const [option, setOption] = useState("");

  useEffect(() => {
    dispatch(getDataStart());
    let bgs = document.getElementById("bg1");
    let d = new Date();
    if (d.getHours() > 18) {
      bgs.style.background = "url('images/night.jpg')";
      bgs.style.backgroundRepeat = "no-repeat";
      bgs.style.backgroundSize = "cover";
    } else {
      bgs.style.background = "url('images/day.jpg')";
      bgs.style.backgroundRepeat = "no-repeat";
      bgs.style.backgroundSize = "cover";
    }
  }, [getLocal]);

  const FtoC = (f) => {
    return Math.round(((f - 32) * 5) / 9);
  };
  function onChange(value) {
    console.log(`selected ${value}`);
    dispatch(changeLocal(value));
    data = [];
  }
  function onFocus() {
    setOption(
      <>
        <Option key="353412" value="353412">
          Hà Nội
        </Option>
        <Option key="352954" value="352954">
          Đà Nẵng
        </Option>
        <Option key="353981" value="353981">
          Hồ Chí Minh
        </Option>
      </>
    );
  }

  const iconSrc = (icon) => {
    return `https://www.accuweather.com/images/weathericons/${icon}.svg`;
  };
  const icon5Src = (icon) => {
    if (icon < 10) {
      icon = "0" + icon;
    }
    return `https://developer.accuweather.com/sites/default/files/${icon}-s.png`;
  };
  // function onSearch(val) {
  //   console.log("search:", val);
  //   dispatch(searchLocalStart(val));
  // }
  function weekday(d) {
    let da = new Date(d);
    let days = [
      "Chủ nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    return days[da.getDay()];
  }
  const config = {
    data,
    height: 300,
    width: 800,
    xField: "weekday",
    yField: "value",
    seriesField: "type",
    color: function color(_ref) {
      var type = _ref.type;
      return type === "Nhiệt độ ban ngày" ? "#ff0000" : "#00aaff";
    },
    point: {
      size: 5,
      shape: "diamond",
    },
  };
  function findLocal(params) {
    let patt = /vn\/.*?(.*?)\//i;
    let mat = params.match(patt);
    if (mat[1] == "hanoi") return "Hà Nội";
    else if (mat[1] == "da-nang") return "Đà Nẵng";
    else if (mat[1] == "ho-chi-minh-city") return "Hồ Chí Minh";
    else return mat[1];
  }

  return (
    <div id="bg1">
      <div className="container">
        <Select
          // showSearch
          style={{ width: "50%" }}
          placeholder="Chọn vị trí khác..."
          optionFilterProp="children"
          onChange={onChange}
          // onSearch={onSearch}
          onFocus={onFocus}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {option}
        </Select>
        {loading ? (
          <>
            <Alert
              message="Trang Web đang tải dữ liệu từ accuweather.com"
              description="Đây là bản thử, nên có hạn chế số lượng tải dữ liệu là 50 lần/ngày"
              type="warning"
              showIcon
            />

            <Spin
              tip="Loading..."
              style={{ display: "block", margin: "20pc" }}
            ></Spin>
          </>
        ) : (
          <div
            style={{
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <div className="formthoitiet">
              <marquee behavior="scroll" direction="left">
                <h2>
                  [{findLocal(datas.Headline.Link)}] - {datas.Headline.Text}
                </h2>
              </marquee>
              <Row>
                <Col span={12} className="padding10">
                  <div className="flag">
                    <h3>HÔM NAY</h3>
                  </div>
                  {dataForecasts.map((item, index) => (
                    <div>
                      {index === 0 ? (
                        <>
                          <div className="showTe center">
                            <img
                              alt=""
                              className="weather-icon icon"
                              data-src={iconSrc(item.Day.Icon)}
                              width="128px"
                              height="128px"
                              data-eager=""
                              src={iconSrc(item.Day.Icon)}
                            />
                            <div className="temperature">
                              {FtoC(item.Temperature.Maximum.Value)}°
                              <span>C</span>
                              <div className="texttt">
                                <Title level={5}>{item.Day.IconPhrase}</Title>
                              </div>
                            </div>
                          </div>
                          <div className="ne center"></div>
                        </>
                      ) : null}
                    </div>
                  ))}
                  <div className="tt4day">
                    {dataForecasts.map(
                      (item, index) => (
                        (wDay = weekday(item.Date)),
                        (doC = FtoC(item.Temperature.Maximum.Value)),
                        data.push({
                          weekday: wDay,
                          type: "Nhiệt độ ban ngày",
                          value: doC,
                        }),
                        (
                          <>
                            {index > 0 ? (
                              <div className="t5day">
                                <div className="wday">
                                  <div className="weekday">{wDay}</div>
                                  <div className="wicon">
                                    <img
                                      width="70px"
                                      height="80px"
                                      src={iconSrc(item.Day.Icon)}
                                      alt=""
                                    />
                                  </div>
                                  <div className="wtemp">{doC}&#176;C</div>
                                  <p>{item.Day.IconPhrase}</p>
                                </div>
                              </div>
                            ) : null}
                          </>
                        )
                      )
                    )}
                  </div>
                </Col>
                <Col span={12} className="padding10">
                  <div className="flag">
                    <h3>ĐÊM NAY</h3>{" "}
                  </div>
                  {dataForecasts.map((item, index) => (
                    <>
                      {index === 0 ? (
                        <>
                          <div className="showTe center">
                            <img
                              alt=""
                              className="weather-icon icon"
                              data-src={iconSrc(item.Night.Icon)}
                              width="128px"
                              height="128px"
                              data-eager=""
                              src={iconSrc(item.Night.Icon)}
                            />
                            <div className="temperature">
                              {FtoC(item.Temperature.Minimum.Value)}°
                              <span>C</span>
                              <div className="texttt">
                                <Title level={5}>{item.Night.IconPhrase}</Title>
                              </div>
                            </div>
                          </div>
                          <div className="ne center"></div>
                        </>
                      ) : null}
                    </>
                  ))}
                  <div className="tt4day center">
                    {dataForecasts.map(
                      (item, index) => (
                        (wDay = weekday(item.Date)),
                        (doC = FtoC(item.Temperature.Minimum.Value)),
                        data.push({
                          weekday: wDay,
                          type: "Nhiệt độ ban đêm",
                          value: doC,
                        }),
                        (
                          <>
                            {index > 0 ? (
                              <div className="t5day">
                                <div className="wday">
                                  <div className="weekday">{wDay}</div>
                                  <div className="wicon">
                                    <img
                                      width="70px"
                                      height="80px"
                                      src={iconSrc(item.Night.Icon)}
                                      alt=""
                                    />
                                  </div>
                                  <div className="wtemp">{doC}&#176;C</div>
                                  <p>{item.Night.IconPhrase}</p>
                                </div>
                              </div>
                            ) : null}
                          </>
                        )
                      )
                    )}
                  </div>
                </Col>
              </Row>
              <Row className="padding10">
                <div className="flag">
                  <h3>Biểu đồ nhiệt độ trong 5 ngày tới</h3>
                </div>
                <div style={{ width: "100%" }}>
                  <Line {...config} />
                </div>
              </Row>
              <Row className="padding10"></Row>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
