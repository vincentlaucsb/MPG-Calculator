!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=React},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(0),o=n(8);function s(e){switch(e){case r.regular:return"Regular (87)";case r.mid:return"Mid-Grade (89)";case r.premium:return"Premium (92)";case r.diesel:return"Diesel"}}!function(e){e[e.regular=0]="regular",e[e.mid=1]="mid",e[e.premium=2]="premium",e[e.diesel=3]="diesel"}(r=t.FuelType||(t.FuelType={})),t.fuelString=s;var l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){return i.createElement("div",{className:"form-group row"},i.createElement("label",{htmlFor:this.props.id.toString(),className:"col-sm col-form-label"},s(this.props.id)),i.createElement("div",{className:"col-sm-8"},i.createElement("input",{className:"form-control",name:s(this.props.id),type:"number",step:"0.01",min:"0",id:this.props.id.toString(),onChange:this.props.onChange,value:this.props.fuelPrice})))},t}(i.Component),c=function(e){function t(t){var n=e.call(this,t)||this;return n.onChange=n.onChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.state={updateable:!1,ppg:t.ppg,temp_ppg:new Map([[r.regular,t.ppg.get(0).toString()],[r.mid,t.ppg.get(1).toString()],[r.premium,t.ppg.get(2).toString()],[r.diesel,t.ppg.get(3).toString()]])},n}return a(t,e),t.prototype.onChange=function(e){var t=this.state.temp_ppg,n=parseInt(e.target.id);t.set(n,e.target.value),this.setState({updateable:!0,temp_ppg:t})},t.prototype.handleSubmit=function(e){var t=new Map([[r.regular,parseFloat(this.state.temp_ppg.get(r.regular))],[r.mid,parseFloat(this.state.temp_ppg.get(r.mid))],[r.premium,parseFloat(this.state.temp_ppg.get(r.premium))],[r.diesel,parseFloat(this.state.temp_ppg.get(r.diesel))]]);this.props.updateGasPrice(t),e.preventDefault(),this.setState({updateable:!1})},t.prototype.render=function(){var e;return e=this.state.updateable?i.createElement("button",{type:"submit",className:"btn btn-primary"},"Update"):i.createElement("button",{className:"btn btn-primary disabled",disabled:!0},"Update"),i.createElement("div",{className:"card"},i.createElement("div",{className:"card-header"},"Price of Gas ",i.createElement(o.InfoBox,{title:"Good to Know: Fuel"},i.createElement("p",null,'While there may be benefits to using mid-grade (sometimes labelled "Plus") or premium fuel, most consumer vehicles in the US will run just fine on regular unleaded. Generally speaking, it is best to follow the recommendations in your owner\'s manual.'))),i.createElement("div",{className:"card-body"},i.createElement("form",{onSubmit:this.handleSubmit},i.createElement(l,{id:r.regular,fuelPrice:this.state.temp_ppg.get(r.regular),onChange:this.onChange}),i.createElement(l,{id:r.mid,fuelPrice:this.state.temp_ppg.get(r.mid),onChange:this.onChange}),i.createElement(l,{id:r.premium,fuelPrice:this.state.temp_ppg.get(r.premium),onChange:this.onChange}),i.createElement(l,{id:r.diesel,fuelPrice:this.state.temp_ppg.get(r.diesel),onChange:this.onChange}),e)))},t}(i.Component);t.GasPriceChanger=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.range=function(e,t){for(var n=[],a=e;a<t;a++)n.push(a);return n},t.money=function(e){return"$"+e.toFixed(2)}},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={visible:n.props.visible},n.closeModal=n.closeModal.bind(n),n.handleClick=n.handleClick.bind(n),n}return a(t,e),t.prototype.componentDidUpdate=function(e){e.visible!=this.props.visible&&this.setState({visible:this.props.visible})},t.prototype.handleClick=function(e){this.state.visible?this.setState({visible:!1}):this.setState({visible:!0})},t.prototype.closeModal=function(e){this.setState({visible:!1})},t.prototype.render=function(){var e,t,n={};return this.state.visible&&(n={display:"block"}),null!==this.props.triggerText&&(e=r.createElement("button",{className:"btn btn-primary",onClick:this.handleClick},this.props.triggerText)),this.props.submit&&(t=r.createElement("button",{type:"submit",className:"btn btn-primary",form:this.props.submit.formName},this.props.submit.buttonName)),r.createElement("div",{style:{display:"inline"}},r.createElement("div",{className:"modal",style:n,tabIndex:-1,role:"dialog"},r.createElement("div",{className:"modal-dialog",role:"document"},r.createElement("div",{className:"modal-content"},r.createElement("div",{className:"modal-header"},r.createElement("h5",{className:"modal-title"},this.props.title),r.createElement("button",{type:"button",className:"close",onClick:this.closeModal,"data-dismiss":"modal","aria-label":"Close"},r.createElement("span",{"aria-hidden":"true"},"×"))),r.createElement("div",{className:"modal-body"},this.props.children),r.createElement("div",{className:"modal-footer"},t,r.createElement("button",{type:"button",onClick:this.closeModal,className:"btn btn-secondary","data-dismiss":"modal"},"Close"))))),e)},t}(r.Component);t.Modal=i},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(1),o=n(3),s=function(e){function t(t){void 0===t&&(t={name:"",price:0,mpg:0,insurance:0,registration:0,fuelType:i.FuelType.regular});var n=e.call(this)||this;return n.name=t.name,n.price=t.price,n.mpg=t.mpg,n.insurance=t.insurance,n.registration=t.registration,n.fuelType=t.fuelType,n}return a(t,e),t.prototype.costToDriveMonth=function(e,t,n){var a=t*e;return this.price+this.insurance*t+this.costToDriveGasOnly(a,n)},t.prototype.costToDriveGasOnly=function(e,t){return e/this.mpg*t.get(this.fuelType)},t}(function(){return function(){}}());function l(e){return r.createElement("li",{className:"car-listing list-group-item",style:{display:"flex",justifyContent:"space-between",flexDirection:"row"}},r.createElement("div",null,r.createElement("span",null,e.data.name),r.createElement("div",{className:"details"},r.createElement("span",null,"MPG: ",e.data.mpg),r.createElement("span",null,"Price: ",e.data.price),r.createElement("span",null,"Fuel Type: ",i.fuelString(e.data.fuelType)))),r.createElement("button",{type:"button",className:"btn btn-danger btn-sm",style:{float:"right"},onClick:e.removeCar},"x"))}t.Car=s;var c=function(e){function t(t){return e.call(this,t)||this}return a(t,e),t.prototype.render=function(){var e=this;return r.createElement("div",{className:"card"},r.createElement("div",{className:"card-header"},"Vehicles",r.createElement("div",{style:{float:"right"}},r.createElement(o.Modal,{title:"Add Vehicle",triggerText:"+",submit:{buttonName:"Add",formName:"addCar"},visible:!1},r.createElement(u,{addCar:this.props.addCar})),r.createElement("button",{className:"btn btn-primary btn-danger",onClick:this.props.removeAll},"x"))),r.createElement("div",{className:"card-body"},r.createElement("ul",{className:"list-group list-group-flush"},this.props.data.map(function(t){return r.createElement(l,{data:t,removeCar:e.props.removeCar.bind(e,t.name)})}))))},t}(r.Component);t.CarList=c;var u=function(e){function t(t){var n=e.call(this,t)||this;return n.state={car:new s,error:!1},n.handleChange=n.handleChange.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.addCar=n.addCar.bind(n),n}return a(t,e),t.prototype.addCar=function(e){this.props.addCar(e)||this.setState({error:!0})},t.prototype.handleChange=function(e){var t=this.state.car,n=e.target.value;"number"!=e.target.type&&isNaN(e.target.value)||(n=parseFloat(n)),t[e.target.id]=n,this.setState({car:t})},t.prototype.handleSubmit=function(e){this.addCar(this.state.car),e.preventDefault(),this.setState({car:new s})},t.prototype.fuelOption=function(e){return r.createElement("option",{value:e},i.fuelString(e))},t.prototype.render=function(){var e;return this.state.error&&(e=r.createElement("p",null,"Car with the same name already exists.")),r.createElement("form",{onSubmit:this.handleSubmit,id:"addCar"},e,r.createElement("div",{className:"form-group"},r.createElement("label",null,"Name",r.createElement("input",{className:"form-control",name:"Name",id:"name",onChange:this.handleChange,required:!0}))),r.createElement("div",{className:"form-row"},r.createElement("div",{className:"form-group"},r.createElement("label",null,"Fuel Type",r.createElement("select",{className:"form-control",name:"Fuel Type",id:"fuelType",onChange:this.handleChange},this.fuelOption(i.FuelType.regular),this.fuelOption(i.FuelType.mid),this.fuelOption(i.FuelType.premium),this.fuelOption(i.FuelType.diesel)))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"MPG",r.createElement("input",{className:"form-control",type:"number",min:"0",name:"MPG",id:"mpg",onChange:this.handleChange,required:!0})))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Price",r.createElement("input",{className:"form-control",type:"number",min:"0",value:this.state.car.price,name:"Price",id:"price",onChange:this.handleChange,required:!0}))),r.createElement("div",{className:"form-row"},r.createElement("div",{className:"form-group"},r.createElement("label",null,"Insurance (Monthly)",r.createElement("input",{className:"form-control",type:"number",value:this.state.car.insurance,name:"Insurance",id:"insurance",onChange:this.handleChange}))),r.createElement("div",{className:"form-group"},r.createElement("label",null,"Vehicle Registration",r.createElement("input",{className:"form-control",type:"number",value:this.state.car.registration,name:"Registration",id:"registration",onChange:this.handleChange})))))},t}(r.Component)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),r=n(6),i=n(7),o=n(4),s=n(1),l=[new o.Car({name:"2018 Ford F-150",mpg:23,price:27705,fuelType:s.FuelType.regular,insurance:0,registration:0}),new o.Car({name:"2018 Chevrolet Silverado 1500",mpg:21,price:28300,fuelType:s.FuelType.regular,insurance:0,registration:0}),new o.Car({name:"2018 Ram 1500",mpg:23,price:27295,fuelType:s.FuelType.regular,insurance:0,registration:0}),new o.Car({name:"2018 Toyota RAV4",mpg:26,price:24660,fuelType:s.FuelType.regular,insurance:0,registration:0}),new o.Car({name:"2018 Nissan Rogue",mpg:29,price:24800,fuelType:s.FuelType.regular,insurance:0,registration:0}),new o.Car({name:"2018 Toyota Camry",mpg:34,price:23645,fuelType:s.FuelType.regular,insurance:0,registration:0})];r.render(a.createElement(i.MpgCalculator,{data:l}),document.getElementById("root"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),o=n(1),s=n(9),l=n(10),c=n(11),u=n(4),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.componentDidMount=function(){this.updateChart()},t.prototype.updateChart=function(){c3.generate({bindto:"#chart",data:this.makeData(this.props.data),axis:{x:{label:"Months Driven"},y:{label:"Cost"}}})},t.prototype.makeData=function(e){var t={x:"x",columns:[Array("x").concat(i.range(0,this.props.months))]};for(var n in e){for(var a=e[n],r=this.props.annualMileage/12,o=[a.name],s=0;s<this.props.months;s++)o.push(a.costToDriveMonth(r,s,this.props.ppg));t.columns.push(o)}return t},t.prototype.render=function(){return this.updateChart(),r.createElement("div",{id:"chart"})},t}(r.Component),m=function(e){function t(t){var n=e.call(this,t)||this,a=new Map([[o.FuelType.regular,2.87],[o.FuelType.mid,3.15],[o.FuelType.premium,3.4],[o.FuelType.diesel,3.18]]);return n.state={data:t.data,ppg:a,months:48,annualMileage:12e3,activeTab:"Chart"},n.updateGasPrice=n.updateGasPrice.bind(n),n.updateMileage=n.updateMileage.bind(n),n.updateMonths=n.updateMonths.bind(n),n.addCar=n.addCar.bind(n),n.removeAll=n.removeAll.bind(n),n.removeCar=n.removeCar.bind(n),n.setActive=n.setActive.bind(n),n}return a(t,e),t.prototype.updateGasPrice=function(e){this.setState({ppg:e})},t.prototype.updateMileage=function(e){this.setState({annualMileage:e})},t.prototype.updateMonths=function(e){this.setState({months:e})},t.prototype.addCar=function(e){for(var t in this.state.data)if(this.state.data[t].name==e.name)return!1;var n=this.state.data;return n.push(e),this.setState({data:n}),!0},t.prototype.removeAll=function(){this.setState({data:[]})},t.prototype.removeCar=function(e){var t=[];for(var n in this.state.data)e!=this.state.data[n].name&&t.push(this.state.data[n]);this.setState({data:t})},t.prototype.setActive=function(e){this.setState({activeTab:e})},t.prototype.render=function(){var e;return e="Chart"==this.state.activeTab?r.createElement("div",null,r.createElement(p,{annualMileage:this.state.annualMileage,months:this.state.months,data:this.state.data,ppg:this.state.ppg}),r.createElement("div",{style:{width:"100%",display:"flex",alignContent:"space-around",flexDirection:"row"}},r.createElement("div",{style:{width:"72.5%"}},r.createElement(s.MileageChanger,{mileage:this.state.annualMileage,updateMileage:this.updateMileage})),r.createElement("div",{style:{width:"22.5%"}},r.createElement(s.MonthChanger,{months:this.state.months,updateMonths:this.updateMonths})))):r.createElement(c.Table,{annualMileage:this.state.annualMileage,months:this.state.months,data:this.state.data,ppg:this.state.ppg}),r.createElement("div",{className:"container-fluid"},r.createElement("h1",null,"Automobile Cost Calculator"),r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("div",{className:"card",id:"graph-panel"},r.createElement("div",{className:"card-header"},r.createElement(l.Tabs,{items:["Chart","Table"],activeItem:this.state.activeTab,setActive:this.setActive})),r.createElement("div",{className:"card-body"},e))),r.createElement("div",{className:"col-4"},r.createElement(o.GasPriceChanger,{ppg:this.state.ppg,updateGasPrice:this.updateGasPrice}),r.createElement(u.CarList,{data:this.state.data,addCar:this.addCar,removeAll:this.removeAll,removeCar:this.removeCar}))))},t}(r.Component);t.MpgCalculator=m},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(3),o=function(e){function t(t){var n=e.call(this,t)||this;return n.state={modalVisible:!1},n}return a(t,e),t.prototype.render=function(){return r.createElement("div",{style:{display:"inline",float:"right"}},r.createElement(i.Modal,{title:this.props.title,triggerText:"?",visible:this.state.modalVisible},this.props.children))},t}(r.Component);t.InfoBox=o},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){function t(t){var n=e.call(this,t)||this;return n.state={months:n.props.months},n.handleChange=n.handleChange.bind(n),n}return a(t,e),t.prototype.handleChange=function(e){var t=e.target.value;this.setState({months:t}),this.props.updateMonths(t)},t.prototype.render=function(){return r.createElement("form",null,r.createElement("input",{className:"form-control",name:"Months",id:"months",min:"0",step:"1",type:"number",value:this.state.months,onChange:this.handleChange}),r.createElement("label",{htmlFor:"months",className:"col-sm col-form-label"},r.createElement("b",null,"Months to Show")))},t}(r.Component);t.MonthChanger=i;var o=function(e){function t(t){var n=e.call(this,t)||this;return n.state={mileage:12e3},n.handleChange=n.handleChange.bind(n),n}return a(t,e),t.prototype.handleChange=function(e){var t=e.target.value;this.setState({mileage:t}),this.props.updateMileage(t)},t.prototype.render=function(){return r.createElement("form",null,r.createElement("input",{className:"form-control",name:"Mileage",id:"mileage",min:"0",max:"100000",type:"range",value:this.state.mileage,onChange:this.handleChange}),r.createElement("label",{htmlFor:"mileage",className:"col-sm col-form-label"},r.createElement("b",null,"Miles Per: "),"Year: ",this.state.mileage,"   Month: ",Math.round(this.state.mileage/12),"   Day: ",Math.round(this.state.mileage/365)))},t}(r.Component);t.MileageChanger=o},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e="nav-link";return this.props.activeItem==this.props.name&&(e="nav-link active"),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:e,onClick:this.props.setActive,"data-name":this.props.name},this.props.name))},t}(r.Component);t.TabItem=i;var o=function(e){function t(t){var n=e.call(this,t)||this;return n.state={activeItem:n.props.activeItem},n.setActive=n.setActive.bind(n),n}return a(t,e),t.prototype.setActive=function(e){var t=e.target.dataset.name;this.props.setActive(t)},t.prototype.render=function(){var e=this;return r.createElement("ul",{className:"nav nav-tabs card-header-tabs"},this.props.items.map(function(t){return r.createElement(i,{name:t,activeItem:e.props.activeItem,setActive:e.setActive})}))},t}(r.Component);t.Tabs=o},function(e,t,n){"use strict";var a=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),o=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return a(t,e),t.prototype.render=function(){var e=this,t=this.props.ppg;return r.createElement("table",null,r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null),r.createElement("th",{colSpan:4},"Cost to Drive (Gas Only)")),r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"10 Miles"),r.createElement("th",null,"25 Miles"),r.createElement("th",null,"100 Miles"),r.createElement("th",null,"One Month"))),r.createElement("tbody",null,this.props.data.map(function(n){return r.createElement("tr",null,r.createElement("td",null,n.name),r.createElement("td",null,i.money(n.costToDriveGasOnly(10,t))),r.createElement("td",null,i.money(n.costToDriveGasOnly(25,t))),r.createElement("td",null,i.money(n.costToDriveGasOnly(100,t))),r.createElement("td",null,i.money(n.costToDriveGasOnly(e.props.annualMileage/12,t))))})))},t}(r.Component);t.Table=o}]);
//# sourceMappingURL=bundle.js.map