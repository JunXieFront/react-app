// import React from 'react';
 //import {render} from 'react-dom';
//React这个对象会将jsx语法解析成React.createElement这个方法
//ReactDom.render(type,props,...children)
const React = {
 createElement(type,props,...children){
    return {
        type,
        props,
        children
    }
 }}
const element = <div>xie<span>jun</span></div>;
const render = (vNode,container) => {
    if(typeof vNode === "string"){
        const text = document.createTextNode(vNode);
        return container.appendChild(text);
    }
    const {type,props,children} = vNode;
    const ele = document.createElement(type);
    for(let key in props){
        if(key.startsWith("__")){
            break;
        }
        ele.setAttribute(key,props[key])
    }
    children.forEach(item =>{
        render(item,ele)
    });
    container.appendChild(ele);
}
render(element,document.getElementById("root"))