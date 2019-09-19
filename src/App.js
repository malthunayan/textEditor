import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {
  state = {
    fontWeight: "normal",
    fontStyle: "normal",
    textDecoration: "none",
    color: "black"
  };
  selectTypographicalEmphasis = emphasis => {
    if (emphasis === "bold") {
      if (this.state.fontWeight === "bold") {
        this.setState({ fontWeight: "normal" });
      } else {
        this.setState({ fontWeight: "bold" });
      }
    } else if (emphasis === "italic") {
      if (this.state.fontStyle === "italic") {
        this.setState({ fontStyle: "normal" });
      } else {
        this.setState({ fontStyle: "italic" });
      }
    } else if (emphasis === "underline") {
      if (this.state.textDecoration === "underline") {
        this.setState({ textDecoration: "none" });
      } else {
        this.setState({ textDecoration: "underline" });
      }
    }
  };
  selectFontColor = fontColor => {
    this.setState({ color: fontColor });
  };
  render() {
    let styleNames = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleNames.map(style => {
      return (
        <button
          style={styles[style]}
          key={style}
          onClick={() => this.selectTypographicalEmphasis(`${style}`)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectFontColor(`${color}`)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea style={this.state} />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
