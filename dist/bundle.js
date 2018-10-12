!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0),i=n(7);!function(e){e[e.regular=0]="regular",e[e.mid=1]="mid",e[e.premium=2]="premium",e[e.diesel=3]="diesel"}(r=t.FuelType||(t.FuelType={}));var s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return o.createElement("div",{className:"form-group row"},o.createElement("label",{htmlFor:this.props.id.toString(),className:"col-sm col-form-label"},this.props.name),o.createElement("div",{className:"col-sm-8"},o.createElement("input",{className:"form-control",name:this.props.name,type:"number",step:"0.01",min:"0",id:this.props.id.toString(),onChange:this.props.onChange,value:this.props.fuelPrice})))},t}(o.Component),l=function(e){function t(t){var n=e.call(this,t)||this;return n.onChange=n.onChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.state={updateable:!1,ppg:t.ppg,temp_ppg:new Map([[r.regular,t.ppg.get(0).toString()],[r.mid,t.ppg.get(1).toString()],[r.premium,t.ppg.get(2).toString()],[r.diesel,t.ppg.get(3).toString()]])},n}return a(t,e),t.prototype.onChange=function(e){var t=this.state.temp_ppg,n=parseInt(e.target.id);t.set(n,e.target.value),this.setState({updateable:!0,temp_ppg:t})},t.prototype.handleSubmit=function(e){var t=new Map([[r.regular,parseFloat(this.state.temp_ppg.get(r.regular))],[r.mid,parseFloat(this.state.temp_ppg.get(r.mid))],[r.premium,parseFloat(this.state.temp_ppg.get(r.premium))],[r.diesel,parseFloat(this.state.temp_ppg.get(r.diesel))]]);this.props.updateGasPrice(t),e.preventDefault(),this.setState({updateable:!1})},t.prototype.render=function(){var e;return e=this.state.updateable?o.createElement("button",{type:"submit",className:"btn btn-primary"},"Update"):o.createElement("button",{className:"btn btn-primary disabled",disabled:!0},"Update"),o.createElement("div",{className:"card"},o.createElement("div",{className:"card-header"},"Price of Gas ",o.createElement(i.InfoBox,{title:"Good to Know: Fuel"},o.createElement("p",null,'While there may be benefits to using mid-grade (sometimes labelled "Plus") or premium fuel, most consumer vehicles in the US will run just fine on regular unleaded. Generally speaking, it is best to follow the recommendations in your owner\'s manual.'))),o.createElement("div",{className:"card-body"},o.createElement("form",{onSubmit:this.handleSubmit},o.createElement(s,{id:r.regular,name:"Regular",fuelPrice:this.state.temp_ppg.get(r.regular),onChange:this.onChange}),o.createElement(s,{id:r.mid,name:"Mid-Grade",fuelPrice:this.state.temp_ppg.get(r.mid),onChange:this.onChange}),o.createElement(s,{id:r.premium,name:"Premium",fuelPrice:this.state.temp_ppg.get(r.premium),onChange:this.onChange}),o.createElement(s,{id:r.diesel,name:"Diesel",fuelPrice:this.state.temp_ppg.get(r.diesel),onChange:this.onChange}),e)))},t}(o.Component);t.GasPriceChanger=l},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){function t(t){var n=e.call(this,t)||this;return n.state={visible:n.props.visible},n.closeModal=n.closeModal.bind(n),n.handleClick=n.handleClick.bind(n),n}return a(t,e),t.prototype.componentDidUpdate=function(e){e.visible!=this.props.visible&&this.setState({visible:this.props.visible})},t.prototype.handleClick=function(e){this.state.visible?this.setState({visible:!1}):this.setState({visible:!0})},t.prototype.closeModal=function(e){this.setState({visible:!1})},t.prototype.render=function(){var e,t={};return this.state.visible&&(t={display:"block"}),this.props.submit&&(e=r.createElement("button",{type:"submit",className:"btn btn-primary",form:this.props.submit.formName},this.props.submit.buttonName)),r.createElement("div",null,r.createElement("div",{className:"modal",style:t,tabIndex:-1,role:"dialog"},r.createElement("div",{className:"modal-dialog",role:"document"},r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"modal-header"},r.createElement("h5",{className:"modal-title"},this.props.title),r.createElement("button",{type:"button",className:"close",onClick:this.closeModal,"data-dismiss":"modal","aria-label":"Close"},r.createElement("span",{"aria-hidden":"true"},"×"))),r.createElement("div",{className:"modal-body"},this.props.children),r.createElement("div",{className:"modal-footer"},e,r.createElement("button",{type:"button",onClick:this.closeModal,className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),r.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},this.props.triggerText))},t}(r.Component);t.Modal=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(4),o=n(5),i=n(1),s=[{name:"2018 Ford F-150",mpg:23,price:27705,fuelType:i.FuelType.regular,insurance:0,registration:0},{name:"2018 Chevrolet Silverado 1500",mpg:21,price:28300,fuelType:i.FuelType.regular,insurance:0,registration:0},{name:"2018 Ram 1500",mpg:23,price:27295,fuelType:i.FuelType.regular,insurance:0,registration:0},{name:"2018 Toyota RAV4",mpg:26,price:24660,fuelType:i.FuelType.regular,insurance:0,registration:0},{name:"2018 Nissan Rogue",mpg:29,price:24800,fuelType:i.FuelType.regular,insurance:0,registration:0},{name:"2018 Toyota Camry",mpg:34,price:23645,fuelType:i.FuelType.regular,insurance:0,registration:0}];r.render(a.createElement(o.MpgCalculator,{data:s}),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(6),i=n(1),s=n(8),l=n(9),c=n(10),u=n(11),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentDidMount=function(){this.updateChart()},t.prototype.updateChart=function(){c3.generate({bindto:"#chart",data:this.makeData(this.props.data),axis:{x:{label:"Months Driven"},y:{label:"Cost"}}})},t.prototype.makeData=function(e){var t={x:"x",columns:[Array("x").concat(o.range(0,this.props.months))]};for(var n in e){for(var a=e[n],r=this.props.annualMileage/12,i=[a.name],s=0;s<this.props.months;s++)i.push(a.price+s*r/a.mpg*this.props.ppg.get(a.fuelType));t.columns.push(i)}return t},t.prototype.render=function(){return this.updateChart(),r.createElement("div",{id:"chart"})},t}(r.Component),m=function(e){function t(t){var n=e.call(this,t)||this,a=new Map([[i.FuelType.regular,2.87],[i.FuelType.mid,3.15],[i.FuelType.premium,3.4],[i.FuelType.diesel,3.18]]);return n.state={data:t.data,ppg:a,months:48,annualMileage:12e3,activeTab:"Chart"},n.updateGasPrice=n.updateGasPrice.bind(n),n.updateMileage=n.updateMileage.bind(n),n.updateMonths=n.updateMonths.bind(n),n.addCar=n.addCar.bind(n),n.removeAll=n.removeAll.bind(n),n.removeCar=n.removeCar.bind(n),n.setActive=n.setActive.bind(n),n}return a(t,e),t.prototype.updateGasPrice=function(e){this.setState({ppg:e})},t.prototype.updateMileage=function(e){this.setState({annualMileage:e})},t.prototype.updateMonths=function(e){this.setState({months:e})},t.prototype.addCar=function(e){for(var t in this.state.data)if(this.state.data[t].name==e.name)return!1;var n=this.state.data;return n.push(e),this.setState({data:n}),!0},t.prototype.removeAll=function(){this.setState({data:[]})},t.prototype.removeCar=function(e){var t=[];for(var n in this.state.data)e!=this.state.data[n].name&&t.push(this.state.data[n]);this.setState({data:t})},t.prototype.setActive=function(e){this.setState({activeTab:e})},t.prototype.render=function(){var e;return e="Chart"==this.state.activeTab?r.createElement("div",null,r.createElement(p,{annualMileage:this.state.annualMileage,months:this.state.months,data:this.state.data,ppg:this.state.ppg}),r.createElement("div",{style:{width:"100%",display:"flex",alignContent:"space-around",flexDirection:"row"}},r.createElement("div",{style:{width:"72.5%"}},r.createElement(s.MileageChanger,{mileage:this.state.annualMileage,updateMileage:this.updateMileage})),r.createElement("div",{style:{width:"22.5%"}},r.createElement(s.MonthChanger,{months:this.state.months,updateMonths:this.updateMonths})))):r.createElement(c.Table,{annualMileage:this.state.annualMileage,months:this.state.months,data:this.state.data,ppg:this.state.ppg}),r.createElement("div",{className:"container-fluid"},r.createElement("h1",null,"Automobile Cost Calculator"),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"card",id:"graph-panel"},r.createElement("div",{className:"card-header"},r.createElement(l.Tabs,{items:["Chart","Table"],activeItem:this.state.activeTab,setActive:this.setActive})),r.createElement("div",{className:"card-body"},e))),r.createElement("div",{className:"col-4"},r.createElement(i.GasPriceChanger,{ppg:this.state.ppg,updateGasPrice:this.updateGasPrice}),r.createElement(u.CarList,{data:this.state.data,addCar:this.addCar,removeAll:this.removeAll,removeCar:this.removeCar}))))},t}(r.Component);t.MpgCalculator=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.range=function(e,t){for(var n=[],a=e;a<t;a++)n.push(a);return n}},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={modalVisible:!1},n}return a(t,e),t.prototype.render=function(){return r.createElement("div",{style:{display:"inline",float:"right"}},r.createElement(o.Modal,{title:this.props.title,triggerText:"?",visible:this.state.modalVisible},this.props.children))},t}(r.Component);t.InfoBox=i},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){function t(t){var n=e.call(this,t)||this;return n.state={months:n.props.months},n.handleChange=n.handleChange.bind(n),n}return a(t,e),t.prototype.handleChange=function(e){var t=e.target.value;this.setState({months:t}),this.props.updateMonths(t)},t.prototype.render=function(){return r.createElement("form",null,r.createElement("input",{className:"form-control",name:"Months",id:"months",min:"0",step:"1",type:"number",value:this.state.months,onChange:this.handleChange}),r.createElement("label",{htmlFor:"months",className:"col-sm col-form-label"},r.createElement("b",null,"Months to Show")))},t}(r.Component);t.MonthChanger=o;var i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={mileage:12e3},n.handleChange=n.handleChange.bind(n),n}return a(t,e),t.prototype.handleChange=function(e){var t=e.target.value;this.setState({mileage:t}),this.props.updateMileage(t)},t.prototype.render=function(){return r.createElement("form",null,r.createElement("input",{className:"form-control",name:"Mileage",id:"mileage",min:"0",max:"100000",type:"range",value:this.state.mileage,onChange:this.handleChange}),r.createElement("label",{htmlFor:"mileage",className:"col-sm col-form-label"},r.createElement("b",null,"Miles Per: "),"Year: ",this.state.mileage,"   Month: ",Math.round(this.state.mileage/12),"   Day: ",Math.round(this.state.mileage/365)))},t}(r.Component);t.MileageChanger=i},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e="nav-link";return this.props.activeItem==this.props.name&&(e="nav-link active"),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:e,onClick:this.props.setActive,"data-name":this.props.name},this.props.name))},t}(r.Component);t.TabItem=o;var i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={activeItem:n.props.activeItem},n.setActive=n.setActive.bind(n),n}return a(t,e),t.prototype.setActive=function(e){var t=e.target.dataset.name;this.props.setActive(t)},t.prototype.render=function(){var e=this;return r.createElement("ul",{className:"nav nav-tabs card-header-tabs"},this.props.items.map(function(t){return r.createElement(o,{name:t,activeItem:e.props.activeItem,setActive:e.setActive})}))},t}(r.Component);t.Tabs=i},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.costToDrive=function(e,t){return"$"+parseFloat((t/e.mpg*this.props.ppg.get(e.fuelType)).toFixed(2))},t.prototype.render=function(){var e=this;return r.createElement("table",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",{colSpan:3},"Cost to Drive (Gas Only)")),r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"10 Miles"),r.createElement("th",null,"25 Miles"),r.createElement("th",null,"100 Miles")),this.props.data.map(function(t){return r.createElement("tr",null,r.createElement("td",null,t.name),r.createElement("td",null,e.costToDrive(t,10)),r.createElement("td",null,e.costToDrive(t,25)),r.createElement("td",null,e.costToDrive(t,100)))}))},t}(r.Component);t.Table=o},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(1),i=n(2);function s(e){return r.createElement("li",{className:"list-group-item",onMouseEnter:e.hoverOver,onMouseOut:e.hoverOut},e.data.name,r.createElement("button",{type:"button",className:"btn btn-danger btn-sm",style:{float:"right"},onClick:e.removeCar},"x"))}var l=function(e){function t(t){var n=e.call(this,t)||this;return n.state={activeCar:null},n.hoverOver=n.hoverOver.bind(n),n.hoverOut=n.hoverOut.bind(n),n}return a(t,e),t.prototype.hoverOver=function(e,t){this.setState({activeCar:e})},t.prototype.hoverOut=function(e){this.setState({activeCar:null})},t.prototype.render=function(){var e=this,t=r.createElement("p",null,"Fuel Type: ... Price: ...");return this.state.activeCar&&(t=r.createElement("p",null,"Fuel Type: ",this.state.activeCar.fuelType,"Price: ",this.state.activeCar.price)),r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header"},"Vehicles",r.createElement(i.Modal,{title:"Add Vehicle",triggerText:"Add a Vehicle",submit:{buttonName:"Add",formName:"addCar"},visible:!1},r.createElement(c,{addCar:this.props.addCar})),r.createElement("button",{className:"btn btn-primary btn-danger",onClick:this.props.removeAll},"Clear All")),r.createElement("div",{className:"card-body"},t,r.createElement("ul",{className:"list-group list-group-flush"},this.props.data.map(function(t){return r.createElement(s,{data:t,hoverOver:e.hoverOver.bind(e,t),hoverOut:e.hoverOut,removeCar:e.props.removeCar.bind(e,t.name)})}))))},t}(r.Component);t.CarList=l;var c=function(e){function t(t){var n=e.call(this,t)||this;return n.state={car:{name:null,mpg:null,price:0,fuelType:o.FuelType.regular,insurance:0,registration:0},error:!1},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.addCar=n.addCar.bind(n),n}return a(t,e),t.prototype.addCar=function(e){this.props.addCar(e)||this.setState({error:!0})},t.prototype.handleChange=function(e){var t=this.state.car,n=e.target.value;"number"!=e.target.type&&isNaN(e.target.value)||(n=parseFloat(n)),t[e.target.id]=n,this.setState({car:t})},t.prototype.handleSubmit=function(e){this.addCar(this.state.car),e.preventDefault()},t.prototype.render=function(){var e;return this.state.error&&(e=r.createElement("p",null,"Car with the same name already exists.")),r.createElement("form",{onSubmit:this.handleSubmit,id:"addCar"},e,r.createElement("div",{className:"form-group"},r.createElement("label",null,"Name",r.createElement("input",{className:"form-control",name:"Name",id:"name",onChange:this.handleChange,required:!0}))),r.createElement("div",{className:"form-row"},r.createElement("div",{className:"form-group"},r.createElement("label",null,"Fuel Type",r.createElement("select",{className:"form-control",name:"Fuel Type",id:"fuelType",onChange:this.handleChange},r.createElement("option",{value:o.FuelType.regular},"Regular (87)"),r.createElement("option",{value:o.FuelType.mid},"Mid-Grade (89)"),r.createElement("option",{value:o.FuelType.premium},"Premium (92)"),r.createElement("option",{value:o.FuelType.diesel},"Diesel")))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"MPG",r.createElement("input",{className:"form-control",type:"number",min:"0",name:"MPG",id:"mpg",onChange:this.handleChange,required:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Price",r.createElement("input",{className:"form-control",type:"number",min:"0",value:this.state.car.price,name:"Price",id:"price",onChange:this.handleChange,required:!0}))),r.createElement("div",{className:"form-row"},r.createElement("div",{className:"form-group"},r.createElement("label",null,"Insurance",r.createElement("input",{className:"form-control",type:"number",value:this.state.car.insurance,name:"Insurance",id:"insurance",onChange:this.handleChange}))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Vehicle Registration",r.createElement("input",{className:"form-control",type:"number",value:this.state.car.registration,name:"Registration",id:"registration",onChange:this.handleChange})))))},t}(r.Component)}]);
//# sourceMappingURL=bundle.js.map