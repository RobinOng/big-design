(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{GGUH:function(e,a,t){"use strict";t.r(a);var r=t("+Ls6"),n=t("ERkP"),i=t.n(n),o=t("GsAr"),l=t("c2K2"),m=t("lIm4"),d=t("nFRM"),p=function(){return i.a.createElement(d.a,null,i.a.createElement(d.a.Prop,{name:"gridAreas",types:"string"},"Defines a grid template by referencing the names of the grid areas which are specified with the grid-area property of a grid item. Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-template-areas")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridAutoColumns",types:"string"},"Specifies the size of any auto-generated column grid tracks. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-auto-columns")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridAutoFlow",types:["row","column","dense","row dense","column dense","inherit","initial","unset"]},"Controls how auto placement of grid items work. Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-auto-flow")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridAutoRows",types:"string"},"Specifies the size of any auto-generated row grid tracks. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-auto-rows")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridColumns",types:"string"},"Defines the columns of the grid with a space-separated list of values. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-template-columns")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridGap",types:"string"},"Controls the spacing between grid items. Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-gap")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridRows",types:"string"},"Defines the rows of the grid with a space-separated list of values. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-template-rows")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridTemplate",types:"string"},"Shorthand for ",i.a.createElement(m.a,{highlight:!1},"grid-template-columns"),","," ",i.a.createElement(m.a,{highlight:!1},"grid-template-rows"),", and ",i.a.createElement(m.a,{highlight:!1},"grid-template-areas"),". Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-template")," CSS property."))},s=function(){return i.a.createElement(d.a,null,i.a.createElement(d.a.Prop,{name:"gridArea",types:"string"},"Gives a grid item and area defined via ",i.a.createElement(m.a,{highlight:!1},"grid-template-areas"),". Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-area")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridColumn",types:"string"},"Shorthand for ",i.a.createElement(m.a,{highlight:!1},"grid-column-start")," and ",i.a.createElement(m.a,{highlight:!1},"grid-column-end"),". Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-column")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridColumnEnd",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-column-end")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridColumnStart",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-column-start")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridRow",types:"string"},"Shorthand for ",i.a.createElement(m.a,{highlight:!1},"grid-row-start")," and ",i.a.createElement(m.a,{highlight:!1},"grid-row-end"),". Same as the ",i.a.createElement(m.a,{highlight:!1},"grid-row")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridRowEnd",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-row-end")," CSS property."),i.a.createElement(d.a.Prop,{name:"gridRowStart",types:"string"},"Determines a grid item's location within the grid by referring to specific grid lines. Same as the"," ",i.a.createElement(m.a,{highlight:!1},"grid-row-start")," CSS property."))},g=t("osqn"),c=t("akZe"),u=t("aw6n"),h=function(e){var a=e.children;return i.a.createElement(r.Box,{backgroundColor:"secondary20",border:"box",padding:"small",style:{height:"100%"}},a)};a.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.H0,null,"Grid"),i.a.createElement(r.Text,null,"The Grid component is useful for creating intrinsicly responsive layouts."," ",i.a.createElement(r.Link,{href:"https://design.bigcommerce.com/components/grid",target:"_blank"},"Grid Design Guidelines"),"."),i.a.createElement(o.a,{scope:{ExampleBox:h}},"<Grid>\n  <Grid.Item>\n    <ExampleBox>Item 1</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 2</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 3</ExampleBox>\n  </Grid.Item>\n  <Grid.Item>\n    <ExampleBox>Item 4</ExampleBox>\n  </Grid.Item>\n</Grid>"),i.a.createElement(r.H1,null,"API"),i.a.createElement(r.H2,null,"Grid"),i.a.createElement(p,null),i.a.createElement(r.H2,null,"Grid.Item"),i.a.createElement(s,null),i.a.createElement(r.H2,null,"Inherited Props"),i.a.createElement(l.a,{title:"Box Props"},i.a.createElement(g.a,null)),i.a.createElement(l.a,{title:"Margin Props"},i.a.createElement(c.a,null)),i.a.createElement(l.a,{title:"Padding Props"},i.a.createElement(u.a,null)),i.a.createElement(r.H1,null,"Examples"),i.a.createElement(r.Text,null,"Grid allows you to create custom layouts using combinations of ",i.a.createElement(m.a,null,"gridTemplate")," and ",i.a.createElement(m.a,null,"gridArea")," ","props."),i.a.createElement(o.a,{scope:{ExampleBox:h}},'function Example() {\n  const template = `\n    "head head" 80px\n    "nav  main" 200px\n    "foot  foot" 50px\n    / 1fr 5fr;\n  `;\n\n  return (\n    <Grid gridTemplate={template}>\n      <Grid.Item gridArea="head">\n        <ExampleBox>Header</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="nav">\n        <ExampleBox>Sidebar</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="main">\n        <ExampleBox>Content</ExampleBox>\n      </Grid.Item>\n      <Grid.Item gridArea="foot">\n        <ExampleBox>Footer</ExampleBox>\n      </Grid.Item>\n    </Grid>\n  );\n}'),i.a.createElement(r.Text,null,"You can use the ",i.a.createElement(m.a,null,"gridColumns")," prop to create columned layouts."),i.a.createElement(o.a,{scope:{ExampleBox:h}},'<Grid gridColumns="repeat(3, 1fr)">\n  <Grid.Item>\n    <ExampleBox>\n      Reprehenderit ullamco et elit eu duis non reprehenderit eiusmod pariatur ea deserunt irure. Reprehenderit et\n      incididunt sit aute sint proident eu eiusmod pariatur Lorem nulla labore irure nisi. Adipisicing do duis\n      occaecat ipsum dolor ea. Qui consectetur sint eu nulla duis et commodo anim commodo. Ullamco consectetur\n      elit ullamco aliquip do id consectetur anim laborum.\n    </ExampleBox>\n  </Grid.Item>\n\n  <Grid.Item>\n    <ExampleBox>\n      In sit dolore culpa reprehenderit tempor laborum. Sit anim voluptate pariatur irure amet mollit. Est mollit\n      ad pariatur esse eu reprehenderit ut veniam. Aliquip anim mollit aliquip quis officia minim esse laboris\n      proident fugiat cillum. Eiusmod culpa eu ea eiusmod nostrud.\n    </ExampleBox>\n  </Grid.Item>\n\n  <Grid.Item>\n    <ExampleBox>\n      Ipsum adipisicing pariatur magna quis incididunt amet pariatur. Aliqua voluptate consequat ut elit ea dolore\n      officia reprehenderit exercitation dolore eiusmod cupidatat quis. Ullamco ipsum do deserunt sunt ad deserunt\n      ut. Elit non velit dolore ad est eu.\n    </ExampleBox>\n  </Grid.Item>\n</Grid>'))}},"Gte+":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Grid/GridPage",function(){var e=t("GGUH");return{page:e.default||e}}])},akZe:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t("ERkP"),n=t.n(r),i=t("nFRM"),o=t("R5dR"),l=function(){return n.a.createElement(i.a,null,n.a.createElement(i.a.Prop,{name:"margin",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginTop",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginRight",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the right margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginBottom",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the bottom margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginLeft",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginVertical",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the top and bottom margin to be applied."),n.a.createElement(i.a.Prop,{name:"marginHorizontal",types:n.a.createElement(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin")},"Determines the left and right margin to be applied."))}},aw6n:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t("ERkP"),n=t.n(r),i=t("nFRM"),o=t("R5dR"),l=function(){return n.a.createElement(i.a,null,n.a.createElement(i.a.Prop,{name:"padding",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingTop",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the top padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingRight",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the right padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingBottom",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the bottom padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingLeft",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the left padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingVertical",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the top and bottom padding to be applied."),n.a.createElement(i.a.Prop,{name:"paddingHorizontal",types:n.a.createElement(o.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding")},"Determines the left and right padding to be applied."))}},c2K2:function(e,a,t){"use strict";var r=t("Dlp7"),n=t("+Ls6"),i=t("BaHq"),o=t("ERkP"),l=t.n(o),m=t("j/s1"),d=Object(m.e)(n.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]);t.d(a,"a",function(){return p});var p=function(e){var a=e.children,t=e.title,m=Object(o.useState)(!0),p=Object(r.default)(m,2),s=p[0],g=p[1],c=function(){return g(!s)};return l.a.createElement("div",null,l.a.createElement(d,{marginBottom:"xLarge",alignItems:"center",onClick:c,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||c()},tabIndex:0},s?l.a.createElement(i.ChevronRightIcon,{title:"Expand"}):l.a.createElement(i.ExpandMoreIcon,{title:"Collapse"}),l.a.createElement(n.Text,null,t)),!s&&a)}},osqn:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var r=t("ERkP"),n=t.n(r),i=t("nFRM"),o=t("R5dR"),l=function(){return n.a.createElement(i.a,null,n.a.createElement(i.a.Prop,{name:"backgroundColor",types:n.a.createElement(o.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color")},"Sets the background color given a color name from our"," ",n.a.createElement(o.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),"."),n.a.createElement(i.a.Prop,{name:"shadow",types:["floating","raised"]},"Determines the type of shadow to be applied."),n.a.createElement(i.a.Prop,{name:"border",types:["box","boxError","none"]},"Determines type of border to be applied."),n.a.createElement(i.a.Prop,{name:"borderBottom",types:["box","boxError","none"]},"Determines type of bottom border to be applied."),n.a.createElement(i.a.Prop,{name:"borderLeft",types:["box","boxError","none"]},"Determines type of left border to be applied."),n.a.createElement(i.a.Prop,{name:"borderRight",types:["box","boxError","none"]},"Determines type of right border to be applied."),n.a.createElement(i.a.Prop,{name:"borderTop",types:["box","boxError","none"]},"Determines type of top border to be applied."),n.a.createElement(i.a.Prop,{name:"borderRadius",types:["normal","circle","none"]},"Determines type of border radius to be applied."))}}},[["Gte+",1,0]]]);