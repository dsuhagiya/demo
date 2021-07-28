import React, { Component } from "react";
import $ from "jquery";
window.jQuery = $;
require("jquery-clock-timepicker");

// window.jquery = $;

export default class Time extends Component {
  componentDidMount = () => {
    console.log($(".time").val());
    $(".b1").click(function () {
      $(".time").toggle();
    });
    $(".time").clockTimePicker({
      duration: true,
      durationNegative: true,
      precision: 5,
      i18n: {
        cancelButton: "Abbrechen",
      },
      onAdjust: function (newVal, oldVal) {
        //...
      },
    });
  };
  render() {
    return (
      <div>
        <input
          className="time"
          type="text"
          data-precision="5"
          data-minimum="10:00"
          data-maximum="20:00"
        />
        <button className="b1" color="blue" shadowSize={2}>
          Display Time-picker
        </button>
      </div>
    );
  }
}
