import React, { useEffect } from "react";
import "./DoubleRangeSlider.css";

export default function DoubleRangeSlider({min,max,minValue, maxValue, setminPrice, setmaxPrice}) {
  useEffect(() => {
    let lowerSlider = document.querySelector("#lower"),
      upperSlider = document.querySelector("#upper"),
      lowerVal = parseInt(lowerSlider.value),
      upperVal = parseInt(upperSlider.value);

    upperSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      if (upperVal < lowerVal + 4) {
        lowerSlider.value = upperVal - 4;

        if (lowerVal === lowerSlider.min) {
          upperSlider.value = 4;
        }
      }
      setmaxPrice(upperVal)
    };

    lowerSlider.oninput = function () {
      lowerVal = parseInt(lowerSlider.value);
      upperVal = parseInt(upperSlider.value);

      if (lowerVal > upperVal - 4) {
        upperSlider.value = lowerVal + 4;

        if (upperVal === upperSlider.max) {
          lowerSlider.value = parseInt(upperSlider.max) - 4;
        }
      }
      setminPrice(lowerVal);
    };
  }, []);

  return (
    <div className="multi-range">
      <p className="multi-range-slider-heading">Refine search Result</p>
      <input type="range" min={min} max={max} value={minValue} id="lower" />
      <input type="range" min={min} max={max} value={maxValue} id="upper" />
    </div>
  );
}
