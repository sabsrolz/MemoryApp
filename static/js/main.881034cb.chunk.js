(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,c,o){},15:function(e,c,o){"use strict";o.r(c);var t=o(0),r=o.n(t),a=o(2),s=o.n(a),n=o(3),l=o(4),i=o(7),u=o(5),m=o(8);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var p=function(e){return r.a.createElement("img",{src:e.source,onClick:function(){return e.handleClick(e.id)},alt:e.id,style:{height:"100px",width:"100px"}})};var h=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Current Score: ",e.currentScore),r.a.createElement("h3",null,"Top Score: ",e.topScore," "))};var g=function(e){return r.a.createElement("h4",null,e.message)},w=o(6),f=(o(14),[0]),S=function(e){function c(e){var o;return Object(n.a)(this,c),(o=Object(i.a)(this,Object(u.a)(c).call(this,e))).handleClick=function(e){var c,t=!1,r=o.state.cards.map((function(c){var o=c;return o.id===e&&0===o.clicked&&(o.clicked=1,t=!0),o}));if(t){var a=o.state.Score.currentScore+1;c=Math.max.apply(Math,f),console.log(c),o.setState({cards:o.shuffleCards(r),Score:{currentScore:a,topScore:c},Message:{message:"Please click on another image"}})}else{f.push(o.state.Score.currentScore),c=Math.max.apply(Math,f),console.log(Math.max(f));var s=o.state.cards.map((function(e){var c=e;return c.clicked=0,c}));console.log(c),o.setState({cards:o.shuffleCards(s),Score:{currentScore:0,topScore:c},Message:{message:"You lost"}})}},o.shuffleCards=function(e){for(var c=0;c<e.length;c++){var o=Math.floor(Math.random()*e.length),t=e[c];e[c]=e[o],e[o]=t}return e},o.state={cards:w,Score:{currentScore:0,topScore:0},Message:{message:"Please click on an image"}},o}return Object(m.a)(c,e),Object(l.a)(c,[{key:"render",value:function(){var e=this;return r.a.createElement(d,null,r.a.createElement(h,{currentScore:this.state.Score.currentScore,topScore:this.state.Score.topScore}),r.a.createElement(g,{message:this.state.Message.message}),r.a.createElement("div",{className:"cards-container"},this.state.cards.map((function(c){return r.a.createElement(p,{id:c.id,source:c.source,handleClick:e.handleClick,key:c.id})}))))}}]),c}(t.Component);var k=function(){return r.a.createElement(S,null)};s.a.render(r.a.createElement(k,null),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('[{"id":1,"source":"https://www.colorcombos.com/images/colors/88D2F2.png","clicked":0},{"id":2,"source":"https://www.colorcombos.com/images/colors/e9d65c.png","clicked":0},{"id":3,"source":"https://www.colorcombos.com/images/colors/ac0501.png","clicked":0},{"id":4,"source":"https://www.colorcombos.com/images/colors/501885.png","clicked":0},{"id":5,"source":"https://www.colorcombos.com/images/colors/e7939f.png","clicked":0},{"id":6,"source":"https://www.colorcombos.com/images/colors/f8a000.png","clicked":0},{"id":7,"source":"https://www.colorcombos.com/images/colors/4ab616.png","clicked":0},{"id":8,"source":"https://www.colorcombos.com/images/colors/924900.png","clicked":0},{"id":9,"source":"https://www.colorcombos.com/images/colors/020076.png","clicked":0},{"id":10,"source":"https://www.colorcombos.com/images/colors/4d4d4d.png","clicked":0}]')},9:function(e,c,o){e.exports=o(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.881034cb.chunk.js.map