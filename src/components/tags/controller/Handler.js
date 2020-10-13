import React from "react";
// import Slider from "rc-slider";
// import Tooltip from "rc-tooltip";
import { useDispatch } from "react-redux";

//actions
import { bodyBackground, bodyColor } from "../../../redux/index"
import {inputBackground, inputColor} from '../../../redux/index'

import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";

//const { createSliderWithTooltip } = Slider;
//const Range = createSliderWithTooltip(Slider.Range);
//const { Handle } = Slider;
/*
const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
const wrapperStyle = { width: 400, margin: 50 };
*/

function Handler(props) {
  const dispatch = useDispatch();

  const handleChange = (tag, type, value) => {
    //console.log(tag,type,bodyBackground)
    switch (tag) {
      case "body":
        switch (type) {
          case "background":
            dispatch(bodyBackground(value));
            break;
          case "color":
            dispatch(bodyColor(value));
            break;
          default:
            console.log(`No such property ${type} for ${tag}`);
        }
        break;
      case "input":
        switch (type) {
          case "background":
            dispatch(inputBackground(value));
            break;
          case "color":
            dispatch(inputColor(value));
            break;
          default:
            console.log(`No such property ${type} for ${tag}`);
        }
        break;
      default:
        console.log(`No such tag found  : ${tag}`);
    }
  };

  const type = mapTypeToHandler[props.tag];
  return (
    <>
      {type.type === "input" && (
        <input
          type={type.value}
          value={props.value}
          onChange={(e) => handleChange(props.tag, props.type, e.target.value)}
        />
      )}
      <div>{props.value}</div>
    </>
  );
}

export default Handler;

const mapTypeToHandler = {
  body: { type: "input", value: "color" },
  input: { type: "input", value: "color" }
};
/*
const slider = (
  <div style={wrapperStyle}>
    <p>Slider with custom handle</p>
    <Slider min={0} max={20} defaultValue={3} handle={handle} />
  </div>
);
*/
