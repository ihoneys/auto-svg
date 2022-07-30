import WebpackIconfontPluginNodejs from "webpack-iconfont-plugin-nodejs";
import path from "path";
const dir = "src";

const options = {
  fontName: "xx-font-icons",
  cssPrefix: "b-font",
  svgs: path.join(dir, "svg/*.svg"),
  fontsOutput: path.join(dir, "fonts/"),
  cssOutput: path.join(dir, "fonts/font.css"),
  htmlOutput: path.join(dir, "fonts/_font-preview.html"),
  jsOutput: path.join(dir, "fonts/fonts.js")
};

new WebpackIconfontPluginNodejs(options).build();
