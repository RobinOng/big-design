(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{L7Pd:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Box/BoxPage",function(){var e=n("guxS");return{page:e.default||e}}])},akZe:function(e,a,n){"use strict";n.d(a,"a",function(){return l});var t=n("ERkP"),r=n.n(t),o=n("nFRM"),i=n("R5dR"),l=function(){return r.a.createElement(o.a,null,r.a.createElement(o.a.Prop,{name:"margin",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginTop",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginRight",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the right margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginBottom",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the bottom margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginLeft",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginVertical",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top and bottom margin to be applied."),r.a.createElement(o.a.Prop,{name:"marginHorizontal",types:r.a.createElement(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left and right margin to be applied."))}},aw6n:function(e,a,n){"use strict";n.d(a,"a",function(){return l});var t=n("ERkP"),r=n.n(t),o=n("nFRM"),i=n("R5dR"),l=function(){return r.a.createElement(o.a,null,r.a.createElement(o.a.Prop,{name:"padding",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingTop",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the top padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingRight",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the right padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingBottom",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the bottom padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingLeft",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the left padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingVertical",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the top and bottom padding to be applied."),r.a.createElement(o.a.Prop,{name:"paddingHorizontal",types:r.a.createElement(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the left and right padding to be applied."))}},c2K2:function(e,a,n){"use strict";var t=n("Dlp7"),r=n("+Ls6"),o=n("BaHq"),i=n("ERkP"),l=n.n(i),d=n("j/s1"),m=Object(d.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);n.d(a,"a",function(){return p});var p=function(e){var a=e.children,n=e.title,d=Object(i.useState)(!0),p=Object(t.default)(d,2),g=p[0],s=p[1],c=function(){return s(!g)};return l.a.createElement("div",null,l.a.createElement(m,{marginBottom:"xLarge",alignItems:"center",onClick:c,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||c()},tabIndex:0},g?l.a.createElement(o.ChevronRightIcon,{title:"Expand"}):l.a.createElement(o.ExpandMoreIcon,{title:"Collapse"}),l.a.createElement(r.Text,null,n)),!g&&a)}},guxS:function(e,a,n){"use strict";n.r(a);var t=n("+Ls6"),r=n("ERkP"),o=n.n(r),i=n("GsAr"),l=n("c2K2"),d=n("osqn"),m=n("akZe"),p=n("aw6n");a.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(t.H0,null,"Box"),o.a.createElement(t.Text,null,"Mostly used as a simple container or as a base to build other components."),o.a.createElement(i.a,null,'<Box backgroundColor="secondary20" border="box" borderRadius="normal" padding="medium">\n  Boxed content\n</Box>'),o.a.createElement(t.H1,null,"API"),o.a.createElement(t.H2,null,"Box"),o.a.createElement(d.a,null),o.a.createElement(t.H2,null,"Inherited Props"),o.a.createElement(l.a,{title:"Margin Props"},o.a.createElement(m.a,null)),o.a.createElement(l.a,{title:"Padding Props"},o.a.createElement(p.a,null)),o.a.createElement(t.H1,null,"Examples"),o.a.createElement(t.Box,null,o.a.createElement(t.Text,null,"Box also supports multiple shadows, here is an example of how they look like:"),o.a.createElement(i.a,null,'<Flex justifyContent="space-around">\n  <Box backgroundColor="secondary10" padding="xxLarge" shadow="floating">\n    Floating\n  </Box>\n  <Box backgroundColor="secondary10" padding="xxLarge" shadow="raised">\n    Raised\n  </Box>\n</Flex>')),o.a.createElement(t.Box,{marginTop:"xxLarge"},o.a.createElement(t.Text,null,"Box is extendable, here is an example on how to create an Avatar component extending from Box with a couple of extra styles:"),o.a.createElement(i.a,null,'function Avatar() {\n  const StyledBox = styled(Box)`\n    box-sizing: content-box;\n    height: ${({ theme }) => theme.spacing.large};\n    width: ${({ theme }) => theme.spacing.large};\n  `;\n\n  return (\n    <StyledBox backgroundColor="secondary20" border="box" borderRadius="circle" padding="medium">\n      BC\n    </StyledBox>\n  );\n}')))}},osqn:function(e,a,n){"use strict";n.d(a,"a",function(){return l});var t=n("ERkP"),r=n.n(t),o=n("nFRM"),i=n("R5dR"),l=function(){return r.a.createElement(o.a,null,r.a.createElement(o.a.Prop,{name:"backgroundColor",types:r.a.createElement(i.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color")},"Sets the background color given a color name from our"," ",r.a.createElement(i.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),"."),r.a.createElement(o.a.Prop,{name:"shadow",types:["floating","raised"]},"Determines the type of shadow to be applied."),r.a.createElement(o.a.Prop,{name:"border",types:["box","boxError","none"]},"Determines type of border to be applied."),r.a.createElement(o.a.Prop,{name:"borderBottom",types:["box","boxError","none"]},"Determines type of bottom border to be applied."),r.a.createElement(o.a.Prop,{name:"borderLeft",types:["box","boxError","none"]},"Determines type of left border to be applied."),r.a.createElement(o.a.Prop,{name:"borderRight",types:["box","boxError","none"]},"Determines type of right border to be applied."),r.a.createElement(o.a.Prop,{name:"borderTop",types:["box","boxError","none"]},"Determines type of top border to be applied."),r.a.createElement(o.a.Prop,{name:"borderRadius",types:["normal","circle","none"]},"Determines type of border radius to be applied."))}}},[["L7Pd",1,0]]]);