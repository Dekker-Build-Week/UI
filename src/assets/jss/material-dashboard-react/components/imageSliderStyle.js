
const imageSliderStyle = {
    imageSliderContainer: {
        width: "50%",
        height: "50%",
        marginLeft : "5px",
        willChange: "transform",
        overflow : "hidden",
        overscrollBehaviourY: "hidden",
        margin: "0",
        padding: "0",
        fontFamily: "-apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif",
        position: "fixed"
    },
    image : {
      backgroundSize : "cover",
      backgroundRepeat : "no-repeat",
      backgroundPosition : "center",
      width : "100%",
      height : "100%",
      willChange : "transform",
      boxShadow : "0 62.5px 125px -25px rgba(50, 50, 73, 0.5), 0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6)"
    },
    container : {
      userSelect : "none",
      cursor : "-webkit-grab",
      "& :active" : {
        cursor : "-webkit-grabbing"
      }
    }
}

export default imageSliderStyle;