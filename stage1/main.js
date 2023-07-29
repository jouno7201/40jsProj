// 0 -> colorName ,  1 -> hex
let option = 0;

// 색상 이름 리스트
const colorList = [
  "indianred",
  "lightcoral",
  "salmon",
  "darksalmon",
  "lightsalmon",
  "crimson",
  "red",
  "firebrick",
  "darkred",
  "pink",
  "lightpink",
  "hotpink",
  "deeppink",
  "mediumvioletred",
  "palevioletred",
  "lightsalmon",
  "coral",
  "tomato",
  "orangered",
  "darkorange",
  "orange",
  "gold",
  "yellow",
  "lightyellow",
  "lemonchiffon",
  "lightgoldenrodyellow",
  "papayawhip",
  "moccasin",
  "peachpuff",
  "palegoldenrod",
  "khaki",
  "darkkhaki",
  "lavender",
  "thistle",
  "plum",
  "violet",
  "orchid",
  "fuchsia",
  "magenta",
  "mediumorchid",
  "mediumpurple",
  "rebeccapurple",
  "blueviolet",
  "darkviolet",
  "darkorchid",
  "darkmagenta",
  "purple",
  "indigo",
  "slateblue",
  "darkslateblue",
  "mediumslateblue",
  "greenyellow",
  "chartreuse",
  "lawngreen",
  "lime",
  "limegreen",
  "palegreen",
  "lightgreen",
  "mediumspringgreen",
  "springgreen",
  "mediumseagreen",
  "seagreen",
  "forestgreen",
  "green",
  "darkgreen",
  "yellowgreen",
  "olivedrab",
  "olive",
  "darkolivegreen",
  "mediumaquamarine",
  "darkseagreen",
  "lightseagreen",
  "darkcyan",
  "teal",
  "aqua",
  "cyan",
  "lightcyan",
  "paleturquoise",
  "aquamarine",
  "turquoise",
  "mediumturquoise",
  "darkturquoise",
  "cadetblue",
  "steelblue",
  "lightsteelblue",
  "powderblue",
  "lightblue",
  "skyblue",
  "lightskyblue",
  "deepskyblue",
  "dodgerblue",
  "cornflowerblue",
  "mediumslateblue",
  "royalblue",
  "blue",
  "mediumblue",
  "darkblue",
  "navy",
  "midnightblue",
  "cornsilk",
  "blanchedalmond",
  "bisque",
  "navajowhite",
  "wheat",
  "burlywood",
  "tan",
  "rosybrown",
  "sandybrown",
  "goldenrod",
  "darkgoldenrod",
  "peru",
  "chocolate",
  "saddlebrown",
  "sienna",
  "brown",
  "maroon",
  "white",
  "snow",
  "honeydew",
  "mintcream",
  "azure",
  "aliceblue",
  "ghostwhite",
  "whitesmoke",
  "seashell",
  "beige",
  "oldlace",
  "floralwhite",
  "ivory",
  "antiquewhite",
  "linen",
  "lavenderblush",
  "mistyrose",
  "gainsboro",
  "lightgray",
  "silver",
  "darkgray",
  "gray",
  "dimgray",
  "lightslategray",
  "slategray",
  "darkslategray",
  "black",
];

// 색 변경 함수
const changeColor = () => {
  if (option) {
    const ranValue = `#${Math.round(Math.random() * 255).toString(
      16
    )}${Math.round(Math.random() * 255).toString(16)}${Math.round(
      Math.random() * 255
    ).toString(16)}`;

    const main = document.getElementById("mainCotainer");
    main.style.backgroundColor = ranValue;

    main.children[0].innerHTML = `Background Color : ${ranValue} `;
  } else {
    const ranValue = Math.round(
      (Math.random() * colorList.length) % colorList.length
    );

    const main = document.getElementById("mainCotainer");
    main.style.backgroundColor = colorList[ranValue];

    main.children[0].innerHTML = `Background Color : ${colorList[ranValue]} `;
  }
};

// option 변경 함수 tap btn
const changeMode = () => {
  option ? (option = 0) : (option = 1);
  const tapBar = document.getElementById("tapBar");

  tapBar.children[0].setAttribute("class", "");
  tapBar.children[1].setAttribute("class", "");

  option
    ? tapBar.children[1].setAttribute("class", "active")
    : tapBar.children[0].setAttribute("class", "active");
};

changeColor();
