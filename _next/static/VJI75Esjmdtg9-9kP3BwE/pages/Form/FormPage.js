(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{XWwo:function(e,n,t){"use strict";t.r(n);var a=t("+Ls6"),l=t("ERkP"),r=t.n(l),o=t("lIm4"),u=t("GsAr"),m=t("nFRM"),p=function(){return r.a.createElement(a.Text,null,"Supports all native ",r.a.createElement(o.a,null,"<form />")," element attributes.")},i=function(){return r.a.createElement(a.Text,null,"Supports all native ",r.a.createElement(o.a,null,"<p />")," element attributes.")},c=function(){return r.a.createElement(m.a,null,r.a.createElement(m.a.Prop,{name:"description",types:"ReactChild"},"Pass in a description to display in the fieldset."),r.a.createElement(m.a.Prop,{name:"legend",types:"ReactChild"},"Pass in a legend to display in the fieldset."))},s=function(){return r.a.createElement(a.Text,null,"Supports all native ",r.a.createElement(o.a,null,"<label />")," element attributes.")},d=function(){return r.a.createElement(m.a,null,r.a.createElement(m.a.Prop,{name:"errors",types:["string","React.ReactChild","Array<string | React.ReactChild>"]},"Pass error(s) into the form group to override child input errors."))};n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(a.H0,null,"Forms"),r.a.createElement(a.Text,null,"Form fields are essential to any website or web application. ",r.a.createElement(o.a,null,"id"),"'s' will be auto-generated for input/textarea and labels ",r.a.createElement(o.a,null,"for")," attribute, unless manually specifying one."," ",r.a.createElement(a.Link,{href:"https://design.bigcommerce.com/components/forms",target:"_blank"},"Form Fields Design Guidelines"),"."),r.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input\n      label="Email"\n      type="email"\n      description="Please provide a valid email address."\n      placeholder="Email address"\n    />\n  </Form.Group>\n  <Form.Group>\n    <Input label="Password" type="password" placeholder="Password" />\n  </Form.Group>\n  <Box marginTop="xxLarge">\n    <Button>Sign In</Button>\n  </Box>\n</Form>'),r.a.createElement(a.H1,null,"API"),r.a.createElement(a.H2,null,"Form"),r.a.createElement(p,null),r.a.createElement(a.H2,{id:"error"},"Form.Error"),r.a.createElement(i,null),r.a.createElement(a.H2,null,"Form.Fieldset"),r.a.createElement(c,null),r.a.createElement(a.H2,{id:"label"},"Form.Label"),r.a.createElement(s,null),r.a.createElement(a.H2,null,"Form.Group"),r.a.createElement(d,null),r.a.createElement(a.H1,null,"Input Types"),r.a.createElement(a.Text,null,"BigDesign comes with various input types: ",r.a.createElement(o.a,null,"Input"),", ",r.a.createElement(o.a,null,"Checkbox"),", ",r.a.createElement(o.a,null,"Radio"),","," ",r.a.createElement(o.a,null,"Select"),", and ",r.a.createElement(o.a,null,"Textarea"),"."),r.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input label="Example Input" placeholder="Example" />\n  </Form.Group>\n  <Form.Group>\n    <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />\n  </Form.Group>\n  <Form.Group>\n    <Radio checked={true} onChange={() => null} label="Example Radio" />\n  </Form.Group>\n  <Form.Group>\n    <Select label="Example Select" placeholder="Example" onItemChange={() => null}>\n      <Select.Option value={1}>Option</Select.Option>\n      <Select.Option value={2}>Option</Select.Option>\n      <Select.Option value={3}>Option</Select.Option>\n      <Select.Option value={4}>Option</Select.Option>\n    </Select>\n  </Form.Group>\n  <Form.Group>\n    <Textarea label="Example Textarea" placeholder="Example" />\n  </Form.Group>\n</Form>'),r.a.createElement(a.H1,null,"Layout"),r.a.createElement(a.Text,null,"You can up to 3 ",r.a.createElement(o.a,null,"Input")," components in row to add more dimension to a ",r.a.createElement(o.a,null,"Form.Group"),"."," ",r.a.createElement(o.a,null,"Radio")," and ",r.a.createElement(o.a,null,"Checkbox")," components will never display inline inside a ",r.a.createElement(o.a,null,"Form.Group"),"."),r.a.createElement(u.a,null,'<Form>\n  <Form.Group>\n    <Input label="Company" placeholder="BigCommerce" />\n  </Form.Group>\n  <Form.Group>\n    <Input label="First Name" placeholder="John" />\n    <Input label="Last Name" placeholder="Doe" />\n  </Form.Group>\n  <Form.Group>\n    <Input label="City" placeholder="Austin" />\n    <Input label="State" placeholder="Texas" />\n    <Input label="Postal Code" placeholder="78726" />\n  </Form.Group>\n  <Form.Fieldset legend="Shipping Method">\n    <Form.Group>\n      <Radio label="Free \u2013 Three Day Shipping" checked onChange={() => null} />\n      <Radio label="$4.99 \u2013 Two Day Shipping" />\n      <Radio label="$9.99 \u2013 One Day Shipping" />\n    </Form.Group>\n  </Form.Fieldset>\n</Form>'),r.a.createElement(a.H1,null,"Validation"),r.a.createElement(a.Text,null,"All form controls are tied to ",r.a.createElement(o.a,{primary:!0},"onChange")," or equivalent event handlers. Validation messages can be passed through the ",r.a.createElement(o.a,null,"error")," prop. All input errors in an ",r.a.createElement(o.a,null,"Form.Group")," will appear at the bottom of the group component component."),r.a.createElement(u.a,null,'function Example() {\n  const ERROR_MSG = \'Must be less than or equal to 3 characters long.\';\n\n  const [value, setValue] = React.useState(\'BigCommerce\');\n  const [error, setError] = React.useState(ERROR_MSG);\n\n  const handleSubmit = event => {\n    const form = event.currentTarget;\n\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n  };\n\n  const handleChange = event => {\n    const { target } = event;\n    const regex = RegExp(target.pattern, \'g\');\n\n    regex.test(target.value) ? setError(\'\') : setError(ERROR_MSG);\n\n    setValue(target.value);\n  };\n\n  return (\n    <Form onSubmit={handleSubmit}>\n      <Form.Group>\n        <Input\n          label="Example"\n          description="Remove characters to preview validation."\n          value={value}\n          error={error}\n          onChange={handleChange}\n          pattern="^.{1,3}$"\n        />\n      </Form.Group>\n      <Form.Group>\n        <Input label="City" error="You must enter a valid City." placeholder="Austin" />\n        <Input label="State" placeholder="Texas" />\n        <Input label="Postal Code" error="You must enter a valid Postal Code." placeholder="78726" />\n      </Form.Group>\n    </Form>\n  );\n}'))}},ybwp:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Form/FormPage",function(){var e=t("XWwo");return{page:e.default||e}}])}},[["ybwp",1,0]]]);