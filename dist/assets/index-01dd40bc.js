(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="148",Ku=0,Oo=1,Qu=2,mc=1,th=2,pr=3,di=0,Qe=1,no=2,Br=3,Un=0,Ui=1,zo=2,No=3,Uo=4,eh=5,Fi=100,nh=101,ih=102,ko=103,Bo=104,rh=200,sh=201,ah=202,oh=203,gc=204,_c=205,lh=206,ch=207,uh=208,hh=209,dh=210,fh=0,ph=1,mh=2,La=3,gh=4,_h=5,xh=6,vh=7,xc=0,yh=1,Mh=2,Cn=0,bh=1,Sh=2,wh=3,Th=4,Ah=5,vc=300,Hi=301,Wi=302,Da=303,Pa=304,Ts=306,Ra=1e3,an=1001,Ia=1002,fe=1003,Vo=1004,Bs=1005,Ye=1006,Eh=1007,br=1008,fi=1009,Ch=1010,Lh=1011,yc=1012,Dh=1013,ii=1014,ri=1015,Sr=1016,Ph=1017,Rh=1018,ki=1020,Ih=1021,Fh=1022,on=1023,Oh=1024,zh=1025,ai=1026,Xi=1027,Nh=1028,Uh=1029,kh=1030,Bh=1031,Vh=1033,Vs=33776,Gs=33777,Hs=33778,Ws=33779,Go=35840,Ho=35841,Wo=35842,Xo=35843,Gh=36196,qo=37492,$o=37496,Yo=37808,jo=37809,Zo=37810,Jo=37811,Ko=37812,Qo=37813,tl=37814,el=37815,nl=37816,il=37817,rl=37818,sl=37819,al=37820,ol=37821,ll=36492,pi=3e3,kt=3001,Hh=3200,Wh=3201,Mc=0,Xh=1,un="srgb",wr="srgb-linear",Xs=7680,qh=519,cl=35044,ul="300 es",Fa=1035;class er{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,hl=180/Math.PI;function Fr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[o&255]+de[o>>8&255]+de[o>>16&255]+de[o>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function ze(o,t,e){return Math.max(t,Math.min(e,o))}function $h(o,t){return(o%t+t)%t}function $s(o,t,e){return(1-e)*o+e*t}function dl(o){return(o&o-1)===0&&o!==0}function Oa(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Vr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Re(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,a,s,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=s,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],M=i[1],y=i[4],b=i[7],v=i[2],E=i[5],C=i[8];return r[0]=a*d+s*M+c*v,r[3]=a*p+s*y+c*E,r[6]=a*_+s*b+c*C,r[1]=l*d+u*M+h*v,r[4]=l*p+u*y+h*E,r[7]=l*_+u*b+h*C,r[2]=f*d+m*M+g*v,r[5]=f*p+m*y+g*E,r[8]=f*_+m*b+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*s*l-n*r*u+n*s*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],h=u*a-s*l,f=s*c-u*r,m=l*r-a*c,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*l-u*n)*d,t[2]=(s*n-i*a)*d,t[3]=f*d,t[4]=(u*e-i*c)*d,t[5]=(i*r-s*e)*d,t[6]=m*d,t[7]=(n*c-l*e)*d,t[8]=(a*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,s){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*s)+a+t,-i*l,i*c,-i*(-l*a+c*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(Ys.makeScale(t,e)),this}rotate(t){return this.premultiply(Ys.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ys.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new Ue;function bc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function oi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function cs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const js={[un]:{[wr]:oi},[wr]:{[un]:cs}},ye={legacyMode:!0,get workingColorSpace(){return wr},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(js[t]&&js[t][e]!==void 0){const n=js[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},Sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},te={r:0,g:0,b:0},nn={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Zs(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Hr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ye.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ye.workingColorSpace){return this.r=t,this.g=e,this.b=n,ye.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ye.workingColorSpace){if(t=$h(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zs(a,r,t+1/3),this.g=Zs(a,r,t),this.b=Zs(a,r,t-1/3)}return ye.toWorkingColorSpace(this,i),this}setStyle(t,e=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],s=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ye.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ye.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ye.toWorkingColorSpace(this,e),this;if(a===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=un){const n=Sc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return ye.fromWorkingColorSpace(Hr(this,te),t),ze(te.r*255,0,255)<<16^ze(te.g*255,0,255)<<8^ze(te.b*255,0,255)<<0}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ye.workingColorSpace){ye.fromWorkingColorSpace(Hr(this,te),e);const n=te.r,i=te.g,r=te.b,a=Math.max(n,i,r),s=Math.min(n,i,r);let c,l;const u=(s+a)/2;if(s===a)c=0,l=0;else{const h=a-s;switch(l=u<=.5?h/(a+s):h/(2-a-s),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ye.workingColorSpace){return ye.fromWorkingColorSpace(Hr(this,te),e),t.r=te.r,t.g=te.g,t.b=te.b,t}getStyle(t=un){return ye.fromWorkingColorSpace(Hr(this,te),t),t!==un?`color(${t} ${te.r} ${te.g} ${te.b})`:`rgb(${te.r*255|0},${te.g*255|0},${te.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(nn),nn.h+=t,nn.s+=e,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Gr);const n=$s(nn.h,Gr.h,e),i=$s(nn.s,Gr.s,e),r=$s(nn.l,Gr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=Sc;let vi;class wc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Tr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Tc{constructor(t=null){this.isSource=!0,this.uuid=Fr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?r.push(Js(i[a].image)):r.push(Js(i[a]))}else r=Js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Js(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?wc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class we extends er{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,n=an,i=an,r=Ye,a=br,s=on,c=fi,l=we.DEFAULT_ANISOTROPY,u=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Fr(),this.name="",this.source=new Tc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case an:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case an:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}we.DEFAULT_IMAGE=null;we.DEFAULT_MAPPING=vc;we.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,i=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],m=c[5],g=c[9],d=c[2],p=c[6],_=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,b=(m+1)/2,v=(_+1)/2,E=(u+f)/4,C=(h+d)/4,x=(g+p)/4;return y>b&&y>v?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=C/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=x/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=C/r,i=x/r),this.set(n,i,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(h-d)/M,this.z=(f-u)/M,this.w=Math.acos((l+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends er{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new we(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ye,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ac extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jh extends we{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=fe,this.minFilter=fe,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Or{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,s){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],d=r[a+3];if(s===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(s===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||c!==f||l!==m||u!==g){let p=1-s;const _=c*f+l*m+u*g+h*d,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const v=Math.sqrt(y),E=Math.atan2(v,_*M);p=Math.sin(p*E)/v,s=Math.sin(s*E)/v}const b=s*M;if(c=c*p+f*b,l=l*p+m*b,u=u*p+g*b,h=h*p+d*b,p===1-s){const v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,a){const s=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=s*g+u*h+c*m-l*f,t[e+1]=c*g+u*f+l*h-s*m,t[e+2]=l*g+u*m+s*f-c*h,t[e+3]=u*g-s*h-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,a=t._order,s=Math.cos,c=Math.sin,l=s(n/2),u=s(i/2),h=s(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h+f*m*g;break;case"YZX":this._x=f*u*h+l*m*g,this._y=l*m*h+f*u*g,this._z=l*u*g-f*m*h,this._w=l*u*h-f*m*g;break;case"XZY":this._x=f*u*h-l*m*g,this._y=l*m*h-f*u*g,this._z=l*u*g+f*m*h,this._w=l*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],s=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+s+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>s&&n>h){const m=2*Math.sqrt(1+n-s-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(s>h){const m=2*Math.sqrt(1+s-n-h);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-s);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,s=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*s+i*l-r*c,this._y=i*u+a*c+r*s-n*l,this._z=r*u+a*l+n*c-i*s,this._w=a*u-n*s-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let s=a*t._w+n*t._x+i*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-s*s;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,s),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,s=t.z,c=t.w,l=c*e+a*i-s*n,u=c*n+s*e-r*i,h=c*i+r*n-a*e,f=-r*e-a*n-s*i;return this.x=l*c+f*-r+u*-s-h*-a,this.y=u*c+f*-a+h*-r-l*-s,this.z=h*c+f*-s+l*-a-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,s=e.y,c=e.z;return this.x=i*c-r*s,this.y=r*a-n*c,this.z=n*s-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ks.copy(this).projectOnVector(t),this.sub(Ks)}reflect(t){return this.sub(Ks.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ks=new O,fl=new Or;class zr{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],h=t[c+1],f=t[c+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,a=-1/0,s=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),h=t.getY(c),f=t.getZ(c);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>a&&(a=h),f>s&&(s=f)}return this.min.set(e,n,i),this.max.set(r,a,s),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let a=0,s=r.count;a<s;a++)Yn.fromBufferAttribute(r,a).applyMatrix4(t.matrixWorld),this.expandByPoint(Yn)}else n.boundingBox===null&&n.computeBoundingBox(),Qs.copy(n.boundingBox),Qs.applyMatrix4(t.matrixWorld),this.union(Qs);const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Wr.subVectors(this.max,ar),yi.subVectors(t.a,ar),Mi.subVectors(t.b,ar),bi.subVectors(t.c,ar),Pn.subVectors(Mi,yi),Rn.subVectors(bi,Mi),jn.subVectors(yi,bi);let e=[0,-Pn.z,Pn.y,0,-Rn.z,Rn.y,0,-jn.z,jn.y,Pn.z,0,-Pn.x,Rn.z,0,-Rn.x,jn.z,0,-jn.x,-Pn.y,Pn.x,0,-Rn.y,Rn.x,0,-jn.y,jn.x,0];return!ta(e,yi,Mi,bi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!ta(e,yi,Mi,bi,Wr))?!1:(Xr.crossVectors(Pn,Rn),e=[Xr.x,Xr.y,Xr.z],ta(e,yi,Mi,bi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Yn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new O,new O,new O,new O,new O,new O,new O,new O],Yn=new O,Qs=new zr,yi=new O,Mi=new O,bi=new O,Pn=new O,Rn=new O,jn=new O,ar=new O,Wr=new O,Xr=new O,Zn=new O;function ta(o,t,e,n,i){for(let r=0,a=o.length-3;r<=a;r+=3){Zn.fromArray(o,r);const s=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>s)return!1}return!0}const Zh=new zr,or=new O,ea=new O;class As{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ea.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(ea)),this.expandByPoint(or.copy(t.center).sub(ea))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new O,na=new O,qr=new O,In=new O,ia=new O,$r=new O,ra=new O;class Ec{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.direction).multiplyScalar(e).add(this.origin),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){na.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),In.copy(this.origin).sub(na);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qr),s=In.dot(this.direction),c=-In.dot(qr),l=In.lengthSq(),u=Math.abs(1-a*a);let h,f,m,g;if(u>0)if(h=a*c-s,f=a*s-c,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+a*f+2*s)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*r+s)),f=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(h=Math.max(0,-(a*r+s)),f=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+s)),m=-h*h+f*(f+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(qr).multiplyScalar(f).add(na),m}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),i=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),s=n-a,c=n+a;return s<0&&c<0?null:s<0?this.at(c,e):this.at(s,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,s,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(s=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(s=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||s>i)||((s>n||n!==n)&&(n=s),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,i,r){ia.subVectors(e,t),$r.subVectors(n,t),ra.crossVectors(ia,$r);let a=this.direction.dot(ra),s;if(a>0){if(i)return null;s=1}else if(a<0)s=-1,a=-a;else return null;In.subVectors(this.origin,t);const c=s*this.direction.dot($r.crossVectors(In,$r));if(c<0)return null;const l=s*this.direction.dot(ia.cross(In));if(l<0||c+l>a)return null;const u=-s*In.dot(ra);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,a,s,c,l,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=a,_[9]=s,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),a=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),s=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=m+g*l,e[5]=f-d*l,e[9]=-s*c,e[2]=d-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f+d*s,e[4]=g*s-m,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-s,e[2]=m*s-g,e[6]=d+f*s,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*h,g=l*u,d=l*h;e[0]=f-d*s,e[4]=-a*h,e[8]=g+m*s,e[1]=m+g*s,e[5]=a*u,e[9]=d-f*s,e[2]=-a*l,e[6]=s,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*h,g=s*u,d=s*h;e[0]=c*u,e[4]=g*l-m,e[8]=f*l+d,e[1]=c*h,e[5]=d*l+f,e[9]=m*l-g,e[2]=-l,e[6]=s*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=s*c,d=s*l;e[0]=c*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=a*u,e[9]=-s*u,e[2]=-l*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=a*c,m=a*l,g=s*c,d=s*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+d,e[5]=a*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=s*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jh,t,Kh)}lookAt(t,e,n){const i=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),Fn.crossVectors(n,Ie),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),Fn.crossVectors(n,Ie)),Fn.normalize(),Yr.crossVectors(Ie,Fn),i[0]=Fn.x,i[4]=Yr.x,i[8]=Ie.x,i[1]=Fn.y,i[5]=Yr.y,i[9]=Ie.y,i[2]=Fn.z,i[6]=Yr.z,i[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],s=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],M=n[3],y=n[7],b=n[11],v=n[15],E=i[0],C=i[4],x=i[8],w=i[12],L=i[1],z=i[5],G=i[9],R=i[13],P=i[2],N=i[6],q=i[10],j=i[14],B=i[3],et=i[7],Z=i[11],U=i[15];return r[0]=a*E+s*L+c*P+l*B,r[4]=a*C+s*z+c*N+l*et,r[8]=a*x+s*G+c*q+l*Z,r[12]=a*w+s*R+c*j+l*U,r[1]=u*E+h*L+f*P+m*B,r[5]=u*C+h*z+f*N+m*et,r[9]=u*x+h*G+f*q+m*Z,r[13]=u*w+h*R+f*j+m*U,r[2]=g*E+d*L+p*P+_*B,r[6]=g*C+d*z+p*N+_*et,r[10]=g*x+d*G+p*q+_*Z,r[14]=g*w+d*R+p*j+_*U,r[3]=M*E+y*L+b*P+v*B,r[7]=M*C+y*z+b*N+v*et,r[11]=M*x+y*G+b*q+v*Z,r[15]=M*w+y*R+b*j+v*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],s=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*c*h-i*l*h-r*s*f+n*l*f+i*s*m-n*c*m)+d*(+e*c*m-e*l*f+r*a*f-i*a*m+i*l*u-r*c*u)+p*(+e*l*h-e*s*m-r*a*h+n*a*m+r*s*u-n*l*u)+_*(-i*s*u-e*c*h+e*s*f+i*a*h-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],M=h*p*l-d*f*l+d*c*m-s*p*m-h*c*_+s*f*_,y=g*f*l-u*p*l-g*c*m+a*p*m+u*c*_-a*f*_,b=u*d*l-g*h*l+g*s*m-a*d*m-u*s*_+a*h*_,v=g*h*c-u*d*c-g*s*f+a*d*f+u*s*p-a*h*p,E=e*M+n*y+i*b+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=M*C,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*C,t[2]=(s*p*r-d*c*r+d*i*l-n*p*l-s*i*_+n*c*_)*C,t[3]=(h*c*r-s*f*r-h*i*l+n*f*l+s*i*m-n*c*m)*C,t[4]=y*C,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*C,t[6]=(g*c*r-a*p*r-g*i*l+e*p*l+a*i*_-e*c*_)*C,t[7]=(a*f*r-u*c*r+u*i*l-e*f*l-a*i*m+e*c*m)*C,t[8]=b*C,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*C,t[10]=(a*d*r-g*s*r+g*n*l-e*d*l-a*n*_+e*s*_)*C,t[11]=(u*s*r-a*h*r-u*n*l+e*h*l+a*n*m-e*s*m)*C,t[12]=v*C,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*C,t[14]=(g*s*i-a*d*i-g*n*c+e*d*c+a*n*p-e*s*p)*C,t[15]=(a*h*i-u*s*i+u*n*c-e*h*c-a*n*f+e*s*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,s=t.y,c=t.z,l=r*a,u=r*s;return this.set(l*a+n,l*s-i*c,l*c+i*s,0,l*s+i*c,u*s+n,u*c-i*a,0,l*c-i*s,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,s=e._z,c=e._w,l=r+r,u=a+a,h=s+s,f=r*l,m=r*u,g=r*h,d=a*u,p=a*h,_=s*h,M=c*l,y=c*u,b=c*h,v=n.x,E=n.y,C=n.z;return i[0]=(1-(d+_))*v,i[1]=(m+b)*v,i[2]=(g-y)*v,i[3]=0,i[4]=(m-b)*E,i[5]=(1-(f+_))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(g+y)*C,i[9]=(p-M)*C,i[10]=(1-(f+d))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Si.set(i[0],i[1],i[2]).length();const a=Si.set(i[4],i[5],i[6]).length(),s=Si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],rn.copy(this);const l=1/r,u=1/a,h=1/s;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),n.x=r,n.y=a,n.z=s,this}makePerspective(t,e,n,i,r,a){const s=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(a+r)/(a-r),m=-2*a*r/(a-r);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,n,i,r,a){const s=this.elements,c=1/(e-t),l=1/(n-i),u=1/(a-r),h=(e+t)*c,f=(n+i)*l,m=(a+r)*u;return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=-2*u,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new O,rn=new Kt,Jh=new O(0,0,0),Kh=new O(1,1,1),Fn=new O,Yr=new O,Ie=new O,pl=new Kt,ml=new Or;class Nr{constructor(t=0,e=0,n=0,i=Nr.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],s=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ml.setFromEuler(this),this.setFromQuaternion(ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Nr.DefaultOrder="XYZ";Nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qh=0;const gl=new O,wi=new Or,bn=new Kt,jr=new O,lr=new O,td=new O,ed=new Or,_l=new O(1,0,0),xl=new O(0,1,0),vl=new O(0,0,1),nd={type:"added"},yl={type:"removed"};class ce extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ce.DefaultUp.clone();const t=new O,e=new Nr,n=new Or,i=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new Ue}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ce.DefaultMatrixWorldAutoUpdate,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(_l,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return gl.copy(t).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_l,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(lr,jr,this.up):bn.lookAt(jr,lr,this.up),this.quaternion.setFromRotationMatrix(bn),i&&(bn.extractRotation(i.matrixWorld),wi.setFromRotationMatrix(bn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(nd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(yl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,td),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,ed,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const s=i[r];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(s,c){return s[c.uuid]===void 0&&(s[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const c=s.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let c=0,l=this.material.length;c<l;c++)s.push(r(t.materials,this.material[c]));i.material=s}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let s=0;s<this.children.length;s++)i.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let s=0;s<this.animations.length;s++){const c=this.animations[s];i.animations.push(r(t.animations,c))}}if(e){const s=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);s.length>0&&(n.geometries=s),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(s){const c=[];for(const l in s){const u=s[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ce.DefaultUp=new O(0,1,0);ce.DefaultMatrixAutoUpdate=!0;ce.DefaultMatrixWorldAutoUpdate=!0;const sn=new O,Sn=new O,sa=new O,wn=new O,Ti=new O,Ai=new O,Ml=new O,aa=new O,oa=new O,la=new O;class En{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){sn.subVectors(i,e),Sn.subVectors(n,e),sa.subVectors(t,e);const a=sn.dot(sn),s=sn.dot(Sn),c=sn.dot(sa),l=Sn.dot(Sn),u=Sn.dot(sa),h=a*l-s*s;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(l*c-s*u)*f,g=(a*u-s*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,wn),wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getUV(t,e,n,i,r,a,s,c){return this.getBarycoord(t,e,n,i,wn),c.set(0,0),c.addScaledVector(r,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(s,wn.z),c}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),Sn.subVectors(t,e),sn.cross(Sn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),sn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return En.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,s;Ti.subVectors(i,n),Ai.subVectors(r,n),aa.subVectors(t,n);const c=Ti.dot(aa),l=Ai.dot(aa);if(c<=0&&l<=0)return e.copy(n);oa.subVectors(t,i);const u=Ti.dot(oa),h=Ai.dot(oa);if(u>=0&&h<=u)return e.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Ti,a);la.subVectors(t,r);const m=Ti.dot(la),g=Ai.dot(la);if(g>=0&&m<=g)return e.copy(r);const d=m*l-c*g;if(d<=0&&l>=0&&g<=0)return s=l/(l-g),e.copy(n).addScaledVector(Ai,s);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ml.subVectors(r,i),s=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(Ml,s);const _=1/(p+d+f);return a=d*_,s=f*_,e.copy(n).addScaledVector(Ti,a).addScaledVector(Ai,s)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let id=0;class nr extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=Ui,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=gc,this.blendDst=_c,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=La,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==di&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const s in r){const c=r[s];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Lc extends nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const jt=new O,Zr=new It;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Dc extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Pc extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Be extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rd=0;const qe=new Kt,ca=new ce,Ei=new O,Fe=new zr,cr=new zr,ae=new O;class cn extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?Pc:Dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(ae.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(ae),ae.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(ae)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const s=e[r];cr.setFromBufferAttribute(s),this.morphTargetsRelative?(ae.addVectors(Fe.min,cr.min),Fe.expandByPoint(ae),ae.addVectors(Fe.max,cr.max),Fe.expandByPoint(ae)):(Fe.expandByPoint(cr.min),Fe.expandByPoint(cr.max))}Fe.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ae.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ae));if(e)for(let r=0,a=e.length;r<a;r++){const s=e[r],c=this.morphTargetsRelative;for(let l=0,u=s.count;l<u;l++)ae.fromBufferAttribute(s,l),c&&(Ei.fromBufferAttribute(t,l),ae.add(Ei)),i=Math.max(i,n.distanceToSquared(ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,s=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*s),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let L=0;L<s;L++)l[L]=new O,u[L]=new O;const h=new O,f=new O,m=new O,g=new It,d=new It,p=new It,_=new O,M=new O;function y(L,z,G){h.fromArray(i,L*3),f.fromArray(i,z*3),m.fromArray(i,G*3),g.fromArray(a,L*2),d.fromArray(a,z*2),p.fromArray(a,G*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const R=1/(d.x*p.y-p.x*d.y);isFinite(R)&&(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(R),M.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(R),l[L].add(_),l[z].add(_),l[G].add(_),u[L].add(M),u[z].add(M),u[G].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let L=0,z=b.length;L<z;++L){const G=b[L],R=G.start,P=G.count;for(let N=R,q=R+P;N<q;N+=3)y(n[N+0],n[N+1],n[N+2])}const v=new O,E=new O,C=new O,x=new O;function w(L){C.fromArray(r,L*3),x.copy(C);const z=l[L];v.copy(z),v.sub(C.multiplyScalar(C.dot(z))).normalize(),E.crossVectors(x,z);const R=E.dot(u[L])<0?-1:1;c[L*4]=v.x,c[L*4+1]=v.y,c[L*4+2]=v.z,c[L*4+3]=R}for(let L=0,z=b.length;L<z;++L){const G=b[L],R=G.start,P=G.count;for(let N=R,q=R+P;N<q;N+=3)w(n[N+0]),w(n[N+1]),w(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new O,r=new O,a=new O,s=new O,c=new O,l=new O,u=new O,h=new O;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),s.fromBufferAttribute(n,g),c.fromBufferAttribute(n,d),l.fromBufferAttribute(n,p),s.add(u),c.add(u),l.add(u),n.setXYZ(g,s.x,s.y,s.z),n.setXYZ(d,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ae.fromBufferAttribute(t,e),ae.normalize(),t.setXYZ(e,ae.x,ae.y,ae.z)}toNonIndexed(){function t(s,c){const l=s.array,u=s.itemSize,h=s.normalized,f=new l.constructor(c.length*u);let m=0,g=0;for(let d=0,p=c.length;d<p;d++){s.isInterleavedBufferAttribute?m=c[d]*s.data.stride+s.offset:m=c[d]*u;for(let _=0;_<u;_++)f[g++]=l[m++]}return new tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new cn,n=this.index.array,i=this.attributes;for(const s in i){const c=i[s],l=t(c,n);e.setAttribute(s,l)}const r=this.morphAttributes;for(const s in r){const c=[],l=r[s];for(let u=0,h=l.length;u<h;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[s]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,c=a.length;s<c;s++){const l=a[s];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const m=l[h];u.push(m.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(t.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const s=t.boundingBox;s!==null&&(this.boundingBox=s.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const bl=new Kt,Ci=new Ec,ua=new As,ur=new O,hr=new O,dr=new O,ha=new O,Jr=new O,Kr=new It,Qr=new It,ts=new It,da=new O,es=new O;class ln extends ce{constructor(t=new cn,e=new Lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const s=this.morphTargetInfluences;if(r&&s){Jr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=s[c],h=r[c];u!==0&&(ha.fromBufferAttribute(h,t),a?Jr.addScaledVector(ha,u):Jr.addScaledVector(ha.sub(e),u))}e.add(Jr)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),t.ray.intersectsSphere(ua)===!1)||(bl.copy(r).invert(),Ci.copy(t.ray).applyMatrix4(bl),n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1))return;let a;const s=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(s!==null)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(s.count,Math.min(d.start+d.count,f.start+f.count));for(let y=_,b=M;y<b;y+=3){const v=s.getX(y),E=s.getX(y+1),C=s.getX(y+2);a=ns(this,p,t,Ci,l,u,v,E,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(s.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=s.getX(d),M=s.getX(d+1),y=s.getX(d+2);a=ns(this,i,t,Ci,l,u,_,M,y),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}else if(c!==void 0)if(Array.isArray(i))for(let m=0,g=h.length;m<g;m++){const d=h[m],p=i[d.materialIndex],_=Math.max(d.start,f.start),M=Math.min(c.count,Math.min(d.start+d.count,f.start+f.count));for(let y=_,b=M;y<b;y+=3){const v=y,E=y+1,C=y+2;a=ns(this,p,t,Ci,l,u,v,E,C),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=d.materialIndex,e.push(a))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let d=m,p=g;d<p;d+=3){const _=d,M=d+1,y=d+2;a=ns(this,i,t,Ci,l,u,_,M,y),a&&(a.faceIndex=Math.floor(d/3),e.push(a))}}}}function sd(o,t,e,n,i,r,a,s){let c;if(t.side===Qe?c=n.intersectTriangle(a,r,i,!0,s):c=n.intersectTriangle(i,r,a,t.side===di,s),c===null)return null;es.copy(s),es.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(es);return l<e.near||l>e.far?null:{distance:l,point:es.clone(),object:o}}function ns(o,t,e,n,i,r,a,s,c){o.getVertexPosition(a,ur),o.getVertexPosition(s,hr),o.getVertexPosition(c,dr);const l=sd(o,t,e,n,ur,hr,dr,da);if(l){i&&(Kr.fromBufferAttribute(i,a),Qr.fromBufferAttribute(i,s),ts.fromBufferAttribute(i,c),l.uv=En.getUV(da,ur,hr,dr,Kr,Qr,ts,new It)),r&&(Kr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,s),ts.fromBufferAttribute(r,c),l.uv2=En.getUV(da,ur,hr,dr,Kr,Qr,ts,new It));const u={a,b:s,c,normal:new O,materialIndex:0};En.getNormal(ur,hr,dr,u.normal),l.face=u}return l}class ir extends cn{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const s=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Be(l,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(h,2));function g(d,p,_,M,y,b,v,E,C,x,w){const L=b/C,z=v/x,G=b/2,R=v/2,P=E/2,N=C+1,q=x+1;let j=0,B=0;const et=new O;for(let Z=0;Z<q;Z++){const U=Z*z-R;for(let k=0;k<N;k++){const J=k*L-G;et[d]=J*M,et[p]=U*y,et[_]=P,l.push(et.x,et.y,et.z),et[d]=0,et[p]=0,et[_]=E>0?1:-1,u.push(et.x,et.y,et.z),h.push(k/C),h.push(1-Z/x),j+=1}}for(let Z=0;Z<x;Z++)for(let U=0;U<C;U++){const k=f+U+N*Z,J=f+U+N*(Z+1),K=f+(U+1)+N*(Z+1),it=f+(U+1)+N*Z;c.push(k,J,it),c.push(J,K,it),B+=6}s.addGroup(m,B,w),m+=B,f+=j}}static fromJSON(t){return new ir(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function qi(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Me(o){const t={};for(let e=0;e<o.length;e++){const n=qi(o[e]);for(const i in n)t[i]=n[i]}return t}function ad(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}function Rc(o){return o.getRenderTarget()===null&&o.outputEncoding===kt?un:wr}const od={clone:qi,merge:Me};var ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ld,this.fragmentShader=cd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=ad(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ic extends ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class je extends Ic{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hl*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const s=this.filmOffset;s!==0&&(r+=t*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Di=1;class ud extends ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new je(Li,Di,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new je(Li,Di,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const a=new je(Li,Di,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const s=new je(Li,Di,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const c=new je(Li,Di,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new je(Li,Di,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,a,s,c,l]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=Cn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,s),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Fc extends we{constructor(t,e,n,i,r,a,s,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,n,i,r,a,s,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends mi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ir(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Un});r.uniforms.tEquirect.value=e;const a=new ln(i,r),s=e.minFilter;return e.minFilter===br&&(e.minFilter=Ye),new ud(1,10,this).update(t,a),e.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const fa=new O,dd=new O,fd=new Ue;class Qn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fa.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(fa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fd.getNormalMatrix(t),i=this.coplanarPoint(fa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new As,is=new O;class io{constructor(t=new Qn,e=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const s=this.planes;return s[0].copy(t),s[1].copy(e),s[2].copy(n),s[3].copy(i),s[4].copy(r),s[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],a=n[2],s=n[3],c=n[4],l=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return e[0].setComponents(s-i,h-c,d-f,y-p).normalize(),e[1].setComponents(s+i,h+c,d+f,y+p).normalize(),e[2].setComponents(s+r,h+l,d+m,y+_).normalize(),e[3].setComponents(s-r,h-l,d-m,y-_).normalize(),e[4].setComponents(s-a,h-u,d-g,y-M).normalize(),e[5].setComponents(s+a,h+u,d+g,y+M).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSprite(t){return Pi.center.set(0,0,0),Pi.radius=.7071067811865476,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(is.x=i.normal.x>0?t.max.x:t.min.x,is.y=i.normal.y>0?t.max.y:t.min.y,is.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(is)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let o=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function pd(o,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,f=l.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,l),m.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(o.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(r(h.buffer,l,u),h.version=l.version)}return{get:a,remove:s,update:c}}class ro extends cn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,s=Math.floor(n),c=Math.floor(i),l=s+1,u=c+1,h=t/s,f=e/c,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const M=_*f-a;for(let y=0;y<l;y++){const b=y*h-r;g.push(b,-M,0),d.push(0,0,1),p.push(y/s),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let M=0;M<s;M++){const y=M+l*_,b=M+l*(_+1),v=M+1+l*(_+1),E=M+1+l*_;m.push(y,b,E),m.push(b,v,E)}this.setIndex(m),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(p,2))}static fromJSON(t){return new ro(t.width,t.height,t.widthSegments,t.heightSegments)}}var md=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md="vec3 transformed = vec3( position );",bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,kd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,sf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,of=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,hf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,df=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ff=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Af=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ef=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Df=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,If=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Nf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$f=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Yf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Zf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,np=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,op=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,lp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,up=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,hp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ap=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ip=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,qp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mt={alphamap_fragment:md,alphamap_pars_fragment:gd,alphatest_fragment:_d,alphatest_pars_fragment:xd,aomap_fragment:vd,aomap_pars_fragment:yd,begin_vertex:Md,beginnormal_vertex:bd,bsdfs:Sd,iridescence_fragment:wd,bumpmap_pars_fragment:Td,clipping_planes_fragment:Ad,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Ld,color_fragment:Dd,color_pars_fragment:Pd,color_pars_vertex:Rd,color_vertex:Id,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:zd,displacementmap_pars_vertex:Nd,displacementmap_vertex:Ud,emissivemap_fragment:kd,emissivemap_pars_fragment:Bd,encodings_fragment:Vd,encodings_pars_fragment:Gd,envmap_fragment:Hd,envmap_common_pars_fragment:Wd,envmap_pars_fragment:Xd,envmap_pars_vertex:qd,envmap_physical_pars_fragment:sf,envmap_vertex:$d,fog_vertex:Yd,fog_pars_vertex:jd,fog_fragment:Zd,fog_pars_fragment:Jd,gradientmap_pars_fragment:Kd,lightmap_fragment:Qd,lightmap_pars_fragment:tf,lights_lambert_fragment:ef,lights_lambert_pars_fragment:nf,lights_pars_begin:rf,lights_toon_fragment:af,lights_toon_pars_fragment:of,lights_phong_fragment:lf,lights_phong_pars_fragment:cf,lights_physical_fragment:uf,lights_physical_pars_fragment:hf,lights_fragment_begin:df,lights_fragment_maps:ff,lights_fragment_end:pf,logdepthbuf_fragment:mf,logdepthbuf_pars_fragment:gf,logdepthbuf_pars_vertex:_f,logdepthbuf_vertex:xf,map_fragment:vf,map_pars_fragment:yf,map_particle_fragment:Mf,map_particle_pars_fragment:bf,metalnessmap_fragment:Sf,metalnessmap_pars_fragment:wf,morphcolor_vertex:Tf,morphnormal_vertex:Af,morphtarget_pars_vertex:Ef,morphtarget_vertex:Cf,normal_fragment_begin:Lf,normal_fragment_maps:Df,normal_pars_fragment:Pf,normal_pars_vertex:Rf,normal_vertex:If,normalmap_pars_fragment:Ff,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:Nf,iridescence_pars_fragment:Uf,output_fragment:kf,packing:Bf,premultiplied_alpha_fragment:Vf,project_vertex:Gf,dithering_fragment:Hf,dithering_pars_fragment:Wf,roughnessmap_fragment:Xf,roughnessmap_pars_fragment:qf,shadowmap_pars_fragment:$f,shadowmap_pars_vertex:Yf,shadowmap_vertex:jf,shadowmask_pars_fragment:Zf,skinbase_vertex:Jf,skinning_pars_vertex:Kf,skinning_vertex:Qf,skinnormal_vertex:tp,specularmap_fragment:ep,specularmap_pars_fragment:np,tonemapping_fragment:ip,tonemapping_pars_fragment:rp,transmission_fragment:sp,transmission_pars_fragment:ap,uv_pars_fragment:op,uv_pars_vertex:lp,uv_vertex:cp,uv2_pars_fragment:up,uv2_pars_vertex:hp,uv2_vertex:dp,worldpos_vertex:fp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:_p,cube_vert:xp,cube_frag:vp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:bp,distanceRGBA_frag:Sp,equirect_vert:wp,equirect_frag:Tp,linedashed_vert:Ap,linedashed_frag:Ep,meshbasic_vert:Cp,meshbasic_frag:Lp,meshlambert_vert:Dp,meshlambert_frag:Pp,meshmatcap_vert:Rp,meshmatcap_frag:Ip,meshnormal_vert:Fp,meshnormal_frag:Op,meshphong_vert:zp,meshphong_frag:Np,meshphysical_vert:Up,meshphysical_frag:kp,meshtoon_vert:Bp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Hp,shadow_vert:Wp,shadow_frag:Xp,sprite_vert:qp,sprite_frag:$p},rt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ue},uv2Transform:{value:new Ue},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ue}}},dn={basic:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Me([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Me([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Me([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Me([rt.points,rt.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Me([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Me([rt.common,rt.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Me([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Me([rt.sprite,rt.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:Me([rt.common,rt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:Me([rt.lights,rt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};dn.physical={uniforms:Me([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new It(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const rs={r:0,b:0,g:0};function Yp(o,t,e,n,i,r,a){const s=new Ut(0);let c=r===!0?0:1,l,u,h=null,f=0,m=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y));const b=o.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(y=null),y===null?d(s,c):y&&y.isColor&&(d(y,1),M=!0),(o.autoClear||M)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ts)?(u===void 0&&(u=new ln(new ir(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:qi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,C,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=y.encoding!==kt,(h!==y||f!==y.version||m!==o.toneMapping)&&(u.material.needsUpdate=!0,h=y,f=y.version,m=o.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ln(new ro(2,2),new gi({name:"BackgroundMaterial",uniforms:qi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=y.encoding!==kt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||m!==o.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,m=o.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function d(p,_){p.getRGB(rs,Rc(o)),n.buffers.color.setClear(rs.r,rs.g,rs.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(p,_=1){s.set(p),c=_,d(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(s,c)},render:g}}function jp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,s={},c=p(null);let l=c,u=!1;function h(P,N,q,j,B){let et=!1;if(a){const Z=d(j,q,N);l!==Z&&(l=Z,m(l.object)),et=_(P,j,q,B),et&&M(P,j,q,B)}else{const Z=N.wireframe===!0;(l.geometry!==j.id||l.program!==q.id||l.wireframe!==Z)&&(l.geometry=j.id,l.program=q.id,l.wireframe=Z,et=!0)}B!==null&&e.update(B,34963),(et||u)&&(u=!1,x(P,N,q,j),B!==null&&o.bindBuffer(34963,e.get(B).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(P){return n.isWebGL2?o.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?o.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function d(P,N,q){const j=q.wireframe===!0;let B=s[P.id];B===void 0&&(B={},s[P.id]=B);let et=B[N.id];et===void 0&&(et={},B[N.id]=et);let Z=et[j];return Z===void 0&&(Z=p(f()),et[j]=Z),Z}function p(P){const N=[],q=[],j=[];for(let B=0;B<i;B++)N[B]=0,q[B]=0,j[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:j,object:P,attributes:{},index:null}}function _(P,N,q,j){const B=l.attributes,et=N.attributes;let Z=0;const U=q.getAttributes();for(const k in U)if(U[k].location>=0){const K=B[k];let it=et[k];if(it===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(it=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(it=P.instanceColor)),K===void 0||K.attribute!==it||it&&K.data!==it.data)return!0;Z++}return l.attributesNum!==Z||l.index!==j}function M(P,N,q,j){const B={},et=N.attributes;let Z=0;const U=q.getAttributes();for(const k in U)if(U[k].location>=0){let K=et[k];K===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));const it={};it.attribute=K,K&&K.data&&(it.data=K.data),B[k]=it,Z++}l.attributes=B,l.attributesNum=Z,l.index=j}function y(){const P=l.newAttributes;for(let N=0,q=P.length;N<q;N++)P[N]=0}function b(P){v(P,0)}function v(P,N){const q=l.newAttributes,j=l.enabledAttributes,B=l.attributeDivisors;q[P]=1,j[P]===0&&(o.enableVertexAttribArray(P),j[P]=1),B[P]!==N&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),B[P]=N)}function E(){const P=l.newAttributes,N=l.enabledAttributes;for(let q=0,j=N.length;q<j;q++)N[q]!==P[q]&&(o.disableVertexAttribArray(q),N[q]=0)}function C(P,N,q,j,B,et){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(P,N,q,B,et):o.vertexAttribPointer(P,N,q,j,B,et)}function x(P,N,q,j){if(n.isWebGL2===!1&&(P.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const B=j.attributes,et=q.getAttributes(),Z=N.defaultAttributeValues;for(const U in et){const k=et[U];if(k.location>=0){let J=B[U];if(J===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),J!==void 0){const K=J.normalized,it=J.itemSize,$=e.get(J);if($===void 0)continue;const Lt=$.buffer,ct=$.type,xt=$.bytesPerElement;if(J.isInterleavedBufferAttribute){const lt=J.data,Ft=lt.stride,bt=J.offset;if(lt.isInstancedInterleavedBuffer){for(let _t=0;_t<k.locationSize;_t++)v(k.location+_t,lt.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let _t=0;_t<k.locationSize;_t++)b(k.location+_t);o.bindBuffer(34962,Lt);for(let _t=0;_t<k.locationSize;_t++)C(k.location+_t,it/k.locationSize,ct,K,Ft*xt,(bt+it/k.locationSize*_t)*xt)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)v(k.location+lt,J.meshPerAttribute);P.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<k.locationSize;lt++)b(k.location+lt);o.bindBuffer(34962,Lt);for(let lt=0;lt<k.locationSize;lt++)C(k.location+lt,it/k.locationSize,ct,K,it*xt,it/k.locationSize*lt*xt)}}else if(Z!==void 0){const K=Z[U];if(K!==void 0)switch(K.length){case 2:o.vertexAttrib2fv(k.location,K);break;case 3:o.vertexAttrib3fv(k.location,K);break;case 4:o.vertexAttrib4fv(k.location,K);break;default:o.vertexAttrib1fv(k.location,K)}}}}E()}function w(){G();for(const P in s){const N=s[P];for(const q in N){const j=N[q];for(const B in j)g(j[B].object),delete j[B];delete N[q]}delete s[P]}}function L(P){if(s[P.id]===void 0)return;const N=s[P.id];for(const q in N){const j=N[q];for(const B in j)g(j[B].object),delete j[B];delete N[q]}delete s[P.id]}function z(P){for(const N in s){const q=s[N];if(q[P.id]===void 0)continue;const j=q[P.id];for(const B in j)g(j[B].object),delete j[B];delete q[P.id]}}function G(){R(),u=!0,l!==c&&(l=c,m(l.object))}function R(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:G,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:z,initAttributes:y,enableAttribute:b,disableUnusedAttributes:E}}function Zp(o,t,e,n){const i=n.isWebGL2;let r;function a(l){r=l}function s(l,u){o.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,l,u,h),e.update(u,r,h)}this.setMode=a,this.render=s,this.renderInstances=c}function Jp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){if(C==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let s=e.precision!==void 0?e.precision:"highp";const c=r(s);c!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",c,"instead."),s=c);const l=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),M=o.getParameter(36349),y=f>0,b=a||t.has("OES_texture_float"),v=y&&b,E=a?o.getParameter(36183):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:s,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:v,maxSamples:E}}function Kp(o){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Qn,s=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,l()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const M=r?0:n,y=M*4;let b=_.clippingState||null;c.value=b,b=u(g,f,y,m);for(let v=0;v!==y;++v)b[v]=e[v];_.clippingState=b,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=c.value,g!==!0||p===null){const _=m+d*4,M=f.matrixWorldInverse;s.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,b=m;y!==d;++y,b+=4)a.copy(h[y]).applyMatrix4(M,s),a.normal.toArray(p,b),p[b+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Qp(o){let t=new WeakMap;function e(a,s){return s===Da?a.mapping=Hi:s===Pa&&(a.mapping=Wi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Da||s===Pa)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hd(c.height/2);return l.fromEquirectangularTexture(o,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const s=a.target;s.removeEventListener("dispose",i);const c=t.get(s);c!==void 0&&(t.delete(s),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class zc extends Ic{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,s=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,s-=u*this.view.offsetY,c=s-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,s,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Oi=4,Sl=[.125,.215,.35,.446,.526,.582],ni=20,pa=new zc,wl=new Ut;let ma=null;const ti=(1+Math.sqrt(5))/2,Ri=1/ti,Tl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,ti,Ri),new O(0,ti,-Ri),new O(Ri,0,ti),new O(-Ri,0,ti),new O(ti,Ri,0),new O(-ti,Ri,0)];class Al{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ma=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ll(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ma),t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ma=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Sr,format:on,encoding:pi,depthBuffer:!1},i=El(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=El(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(r)),this._blurMaterial=em(r,t,e)}return i}_compileMaterial(t){const e=new ln(this._lodPlanes[0],t);this._renderer.compile(e,pa)}_sceneToCubeUV(t,e,n,i){const s=new je(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(wl),u.toneMapping=Cn,u.autoClear=!1;const m=new Lc({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new ln(new ir,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(wl),d=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(s.up.set(0,c[_],0),s.lookAt(l[_],0,0)):M===1?(s.up.set(0,0,c[_]),s.lookAt(0,l[_],0)):(s.up.set(0,c[_],0),s.lookAt(0,0,l[_]));const y=this._cubeSize;ss(i,M*y,_>2?y:0,y,y),u.setRenderTarget(i),d&&u.render(g,s),u.render(t,s)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Hi||t.mapping===Wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ll()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],r),s=r.uniforms;s.envMap.value=t;const c=this._cubeSize;ss(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,pa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Tl[(i-1)%Tl.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,s){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ln(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const _=[];let M=0;for(let C=0;C<ni;++C){const x=C/d,w=Math.exp(-x*x/2);_.push(w),C===0?M+=w:C<p&&(M+=2*w)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=a==="latitudinal",s&&(f.poleAxis.value=s);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const b=this._sizeLods[i],v=3*b*(i>y-Oi?i-y+Oi:0),E=4*(this._cubeSize-b);ss(e,v,E,3*b,2*b),c.setRenderTarget(e),c.render(h,pa)}}function tm(o){const t=[],e=[],n=[];let i=o;const r=o-Oi+1+Sl.length;for(let a=0;a<r;a++){const s=Math.pow(2,i);e.push(s);let c=1/s;a>o-Oi?c=Sl[a-o+Oi-1]:a===0&&(c=0),n.push(c);const l=1/(s-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,M=new Float32Array(d*g*m),y=new Float32Array(p*g*m),b=new Float32Array(_*g*m);for(let E=0;E<m;E++){const C=E%3*2/3-1,x=E>2?0:-1,w=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];M.set(w,d*g*E),y.set(f,p*g*E);const L=[E,E,E,E,E,E];b.set(L,_*g*E)}const v=new cn;v.setAttribute("position",new tn(M,d)),v.setAttribute("uv",new tn(y,p)),v.setAttribute("faceIndex",new tn(b,_)),t.push(v),i>Oi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function El(o,t,e){const n=new mi(o,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function em(o,t,e){const n=new Float32Array(ni),i=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Cl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Ll(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:so(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function so(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function nm(o){let t=new WeakMap,e=null;function n(s){if(s&&s.isTexture){const c=s.mapping,l=c===Da||c===Pa,u=c===Hi||c===Wi;if(l||u)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let h=t.get(s);return e===null&&(e=new Al(o)),h=l?e.fromEquirectangular(s,h):e.fromCubemap(s,h),t.set(s,h),h.texture}else{if(t.has(s))return t.get(s).texture;{const h=s.image;if(l&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new Al(o));const f=l?e.fromEquirectangular(s):e.fromCubemap(s);return t.set(s,f),s.addEventListener("dispose",r),f.texture}else return null}}}return s}function i(s){let c=0;const l=6;for(let u=0;u<l;u++)s[u]!==void 0&&c++;return c===l}function r(s){const c=s.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function im(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function rm(o,t,e,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function s(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function l(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let y=0,b=M.length;y<b;y+=3){const v=M[y+0],E=M[y+1],C=M[y+2];f.push(v,E,E,C,C,v)}}else{const M=g.array;d=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const v=y+0,E=y+1,C=y+2;f.push(v,E,E,C,C,v)}}const p=new(bc(f)?Pc:Dc)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:s,update:c,getWireframeAttribute:u}}function sm(o,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let s,c;function l(f){s=f.type,c=f.bytesPerElement}function u(f,m){o.drawElements(r,m,s,f*c),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,s,f*c,g),e.update(m,r,g)}this.setMode=a,this.setIndex=l,this.render=u,this.renderInstances=h}function am(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,s){switch(e.calls++,a){case 4:e.triangles+=s*(r/3);break;case 1:e.lines+=s*(r/2);break;case 3:e.lines+=s*(r-1);break;case 2:e.lines+=s*r;break;case 0:e.points+=s*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function om(o,t){return o[0]-t[0]}function lm(o,t){return Math.abs(t[1])-Math.abs(o[1])}function cm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new oe,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function c(l,u,h,f){const m=l.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let q=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",q)};var g=q;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let L=0;b===!0&&(L=1),v===!0&&(L=2),E===!0&&(L=3);let z=u.attributes.position.count*L,G=1;z>t.maxTextureSize&&(G=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const R=new Float32Array(z*G*4*p),P=new Ac(R,z,G,p);P.type=ri,P.needsUpdate=!0;const N=L*4;for(let j=0;j<p;j++){const B=C[j],et=x[j],Z=w[j],U=z*G*4*j;for(let k=0;k<B.count;k++){const J=k*N;b===!0&&(a.fromBufferAttribute(B,k),R[U+J+0]=a.x,R[U+J+1]=a.y,R[U+J+2]=a.z,R[U+J+3]=0),v===!0&&(a.fromBufferAttribute(et,k),R[U+J+4]=a.x,R[U+J+5]=a.y,R[U+J+6]=a.z,R[U+J+7]=0),E===!0&&(a.fromBufferAttribute(Z,k),R[U+J+8]=a.x,R[U+J+9]=a.y,R[U+J+10]=a.z,R[U+J+11]=Z.itemSize===4?a.w:1)}}_={count:p,texture:P,size:new It(z,G)},r.set(u,_),u.addEventListener("dispose",q)}let M=0;for(let b=0;b<m.length;b++)M+=m[b];const y=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(o,"morphTargetBaseInfluence",y),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let v=0;v<d;v++)p[v]=[v,0];n[u.id]=p}for(let v=0;v<d;v++){const E=p[v];E[0]=v,E[1]=m[v]}p.sort(lm);for(let v=0;v<8;v++)v<d&&p[v][1]?(s[v][0]=p[v][0],s[v][1]=p[v][1]):(s[v][0]=Number.MAX_SAFE_INTEGER,s[v][1]=0);s.sort(om);const _=u.morphAttributes.position,M=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const E=s[v],C=E[0],x=E[1];C!==Number.MAX_SAFE_INTEGER&&x?(_&&u.getAttribute("morphTarget"+v)!==_[C]&&u.setAttribute("morphTarget"+v,_[C]),M&&u.getAttribute("morphNormal"+v)!==M[C]&&u.setAttribute("morphNormal"+v,M[C]),i[v]=x,y+=x):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),M&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const b=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(o,"morphTargetBaseInfluence",b),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function um(o,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=t.get(c,u);return i.get(h)!==l&&(t.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",s)===!1&&c.addEventListener("dispose",s),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),h}function a(){i=new WeakMap}function s(c){const l=c.target;l.removeEventListener("dispose",s),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}const Nc=new we,Uc=new Ac,kc=new jh,Bc=new Fc,Dl=[],Pl=[],Rl=new Float32Array(16),Il=new Float32Array(9),Fl=new Float32Array(4);function rr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Dl[i];if(r===void 0&&(r=new Float32Array(i),Dl[i]=r),t!==0){n.toArray(r,0);for(let a=1,s=0;a!==t;++a)s+=e,o[a].toArray(r,s)}return r}function ee(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function ne(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Es(o,t){let e=Pl[t];e===void 0&&(e=new Int32Array(t),Pl[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function hm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function dm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2fv(this.addr,t),ne(e,t)}}function fm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ee(e,t))return;o.uniform3fv(this.addr,t),ne(e,t)}}function pm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4fv(this.addr,t),ne(e,t)}}function mm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Fl.set(n),o.uniformMatrix2fv(this.addr,!1,Fl),ne(e,n)}}function gm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Il.set(n),o.uniformMatrix3fv(this.addr,!1,Il),ne(e,n)}}function _m(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(ee(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),ne(e,t)}else{if(ee(e,n))return;Rl.set(n),o.uniformMatrix4fv(this.addr,!1,Rl),ne(e,n)}}function xm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function vm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2iv(this.addr,t),ne(e,t)}}function ym(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;o.uniform3iv(this.addr,t),ne(e,t)}}function Mm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4iv(this.addr,t),ne(e,t)}}function bm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function Sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ee(e,t))return;o.uniform2uiv(this.addr,t),ne(e,t)}}function wm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ee(e,t))return;o.uniform3uiv(this.addr,t),ne(e,t)}}function Tm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ee(e,t))return;o.uniform4uiv(this.addr,t),ne(e,t)}}function Am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Nc,i)}function Em(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||kc,i)}function Cm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Bc,i)}function Lm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Uc,i)}function Dm(o){switch(o){case 5126:return hm;case 35664:return dm;case 35665:return fm;case 35666:return pm;case 35674:return mm;case 35675:return gm;case 35676:return _m;case 5124:case 35670:return xm;case 35667:case 35671:return vm;case 35668:case 35672:return ym;case 35669:case 35673:return Mm;case 5125:return bm;case 36294:return Sm;case 36295:return wm;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Lm}}function Pm(o,t){o.uniform1fv(this.addr,t)}function Rm(o,t){const e=rr(t,this.size,2);o.uniform2fv(this.addr,e)}function Im(o,t){const e=rr(t,this.size,3);o.uniform3fv(this.addr,e)}function Fm(o,t){const e=rr(t,this.size,4);o.uniform4fv(this.addr,e)}function Om(o,t){const e=rr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function zm(o,t){const e=rr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Nm(o,t){const e=rr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Um(o,t){o.uniform1iv(this.addr,t)}function km(o,t){o.uniform2iv(this.addr,t)}function Bm(o,t){o.uniform3iv(this.addr,t)}function Vm(o,t){o.uniform4iv(this.addr,t)}function Gm(o,t){o.uniform1uiv(this.addr,t)}function Hm(o,t){o.uniform2uiv(this.addr,t)}function Wm(o,t){o.uniform3uiv(this.addr,t)}function Xm(o,t){o.uniform4uiv(this.addr,t)}function qm(o,t,e){const n=this.cache,i=t.length,r=Es(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Nc,r[a])}function $m(o,t,e){const n=this.cache,i=t.length,r=Es(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||kc,r[a])}function Ym(o,t,e){const n=this.cache,i=t.length,r=Es(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Bc,r[a])}function jm(o,t,e){const n=this.cache,i=t.length,r=Es(e,i);ee(n,r)||(o.uniform1iv(this.addr,r),ne(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Uc,r[a])}function Zm(o){switch(o){case 5126:return Pm;case 35664:return Rm;case 35665:return Im;case 35666:return Fm;case 35674:return Om;case 35675:return zm;case 35676:return Nm;case 5124:case 35670:return Um;case 35667:case 35671:return km;case 35668:case 35672:return Bm;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Hm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Ym;case 36289:case 36303:case 36311:case 36292:return jm}}class Jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Dm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Zm(e.type)}}class Qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const s=i[r];s.setValue(t,e[s.id],n)}}}const ga=/(\w+)(\])?(\[|\.)?/g;function Ol(o,t){o.seq.push(t),o.map[t.id]=t}function tg(o,t,e){const n=o.name,i=n.length;for(ga.lastIndex=0;;){const r=ga.exec(n),a=ga.lastIndex;let s=r[1];const c=r[2]==="]",l=r[3];if(c&&(s=s|0),l===void 0||l==="["&&a+2===i){Ol(e,l===void 0?new Jm(s,o,t):new Km(s,o,t));break}else{let h=e.map[s];h===void 0&&(h=new Qm(s),Ol(e,h)),e=h}}}class us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);tg(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const s=e[r],c=n[s.id];c.needsUpdate!==!1&&s.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function zl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let eg=0;function ng(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const s=a+1;n.push(`${s===t?">":" "} ${s}: ${e[a]}`)}return n.join(`
`)}function ig(o){switch(o){case pi:return["Linear","( value )"];case kt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Nl(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ng(o.getShaderSource(t),a)}else return i}function rg(o,t){const e=ig(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function sg(o,t){let e;switch(t){case bh:e="Linear";break;case Sh:e="Reinhard";break;case wh:e="OptimizedCineon";break;case Th:e="ACESFilmic";break;case Ah:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ag(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(mr).join(`
`)}function og(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),a=r.name;let s=1;r.type===35674&&(s=2),r.type===35675&&(s=3),r.type===35676&&(s=4),e[a]={type:r.type,location:o.getAttribLocation(t,a),locationSize:s}}return e}function mr(o){return o!==""}function Ul(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function za(o){return o.replace(cg,ug)}function ug(o,t){const e=Mt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return za(e)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bl(o){return o.replace(hg,dg)}function dg(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Vl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===th?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===pr&&(t="SHADOWMAP_TYPE_VSM"),t}function pg(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Hi:case Wi:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Wi:t="ENVMAP_MODE_REFRACTION";break}return t}function gg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xc:t="ENVMAP_BLENDING_MULTIPLY";break;case yh:t="ENVMAP_BLENDING_MIX";break;case Mh:t="ENVMAP_BLENDING_ADD";break}return t}function _g(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(o,t,e,n){const i=o.getContext(),r=e.defines;let a=e.vertexShader,s=e.fragmentShader;const c=fg(e),l=pg(e),u=mg(e),h=gg(e),f=_g(e),m=e.isWebGL2?"":ag(e),g=og(r),d=i.createProgram();let p,_,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(mr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(mr).join(`
`),_.length>0&&(_+=`
`)):(p=[Vl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),_=[m,Vl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Mt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,rg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=za(a),a=Ul(a,e),a=kl(a,e),s=za(s),s=Ul(s,e),s=kl(s,e),a=Bl(a),s=Bl(s),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+a,b=M+_+s,v=zl(i,35633,y),E=zl(i,35632,b);if(i.attachShader(d,v),i.attachShader(d,E),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const w=i.getProgramInfoLog(d).trim(),L=i.getShaderInfoLog(v).trim(),z=i.getShaderInfoLog(E).trim();let G=!0,R=!0;if(i.getProgramParameter(d,35714)===!1){G=!1;const P=Nl(i,v,"vertex"),N=Nl(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+P+`
`+N)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||z==="")&&(R=!1);R&&(this.diagnostics={runnable:G,programLog:w,vertexShader:{log:L,prefix:p},fragmentShader:{log:z,prefix:_}})}i.deleteShader(v),i.deleteShader(E);let C;this.getUniforms=function(){return C===void 0&&(C=new us(i,d)),C};let x;return this.getAttributes=function(){return x===void 0&&(x=lg(i,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=v,this.fragmentShader=E,this}let vg=0;class yg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mg(t),e.set(t,n)),n}}class Mg{constructor(t){this.id=vg++,this.code=t,this.usedTimes=0}}function bg(o,t,e,n,i,r,a){const s=new Cc,c=new yg,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,z,G){const R=z.fog,P=G.geometry,N=x.isMeshStandardMaterial?z.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||N),j=q&&q.mapping===Ts?q.image.height:null,B=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const et=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=et!==void 0?et.length:0;let U=0;P.morphAttributes.position!==void 0&&(U=1),P.morphAttributes.normal!==void 0&&(U=2),P.morphAttributes.color!==void 0&&(U=3);let k,J,K,it;if(B){const Ft=dn[B];k=Ft.vertexShader,J=Ft.fragmentShader}else k=x.vertexShader,J=x.fragmentShader,c.update(x),K=c.getVertexShaderID(x),it=c.getFragmentShaderID(x);const $=o.getRenderTarget(),Lt=x.alphaTest>0,ct=x.clearcoat>0,xt=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:k,fragmentShader:J,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:it,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:G.isInstancedMesh===!0,instancingColor:G.isInstancedMesh===!0&&G.instanceColor!==null,supportsVertexTextures:f,outputEncoding:$===null?o.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:pi,map:!!x.map,matcap:!!x.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:j,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Xh,tangentSpaceNormalMap:x.normalMapType===Mc,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===kt,clearcoat:ct,clearcoatMap:ct&&!!x.clearcoatMap,clearcoatRoughnessMap:ct&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ct&&!!x.clearcoatNormalMap,iridescence:xt,iridescenceMap:xt&&!!x.iridescenceMap,iridescenceThicknessMap:xt&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Ui,alphaMap:!!x.alphaMap,alphaTest:Lt,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!P.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:G.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:U,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&L.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Cn,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===no,flipSided:x.side===Qe,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),M(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function M(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.map&&s.enable(4),w.matcap&&s.enable(5),w.envMap&&s.enable(6),w.lightMap&&s.enable(7),w.aoMap&&s.enable(8),w.emissiveMap&&s.enable(9),w.bumpMap&&s.enable(10),w.normalMap&&s.enable(11),w.objectSpaceNormalMap&&s.enable(12),w.tangentSpaceNormalMap&&s.enable(13),w.clearcoat&&s.enable(14),w.clearcoatMap&&s.enable(15),w.clearcoatRoughnessMap&&s.enable(16),w.clearcoatNormalMap&&s.enable(17),w.iridescence&&s.enable(18),w.iridescenceMap&&s.enable(19),w.iridescenceThicknessMap&&s.enable(20),w.displacementMap&&s.enable(21),w.specularMap&&s.enable(22),w.roughnessMap&&s.enable(23),w.metalnessMap&&s.enable(24),w.gradientMap&&s.enable(25),w.alphaMap&&s.enable(26),w.alphaTest&&s.enable(27),w.vertexColors&&s.enable(28),w.vertexAlphas&&s.enable(29),w.vertexUvs&&s.enable(30),w.vertexTangents&&s.enable(31),w.uvsVertexOnly&&s.enable(32),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.physicallyCorrectLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.specularIntensityMap&&s.enable(15),w.specularColorMap&&s.enable(16),w.transmission&&s.enable(17),w.transmissionMap&&s.enable(18),w.thicknessMap&&s.enable(19),w.sheen&&s.enable(20),w.sheenColorMap&&s.enable(21),w.sheenRoughnessMap&&s.enable(22),w.decodeVideoTexture&&s.enable(23),w.opaque&&s.enable(24),x.push(s.mask)}function y(x){const w=g[x.type];let L;if(w){const z=dn[w];L=od.clone(z.uniforms)}else L=x.uniforms;return L}function b(x,w){let L;for(let z=0,G=l.length;z<G;z++){const R=l[z];if(R.cacheKey===w){L=R,++L.usedTimes;break}}return L===void 0&&(L=new xg(o,w,x,r),l.push(L)),L}function v(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function E(x){c.remove(x)}function C(){c.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:y,acquireProgram:b,releaseProgram:v,releaseShaderCache:E,programs:l,dispose:C}}function Sg(){let o=new WeakMap;function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function e(r){o.delete(r)}function n(r,a,s){o.get(r)[a]=s}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function wg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Gl(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Hl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(h,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function s(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function c(h,f,m,g,d,p){const _=a(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function l(h,f){e.length>1&&e.sort(h||wg),n.length>1&&n.sort(f||Gl),i.length>1&&i.sort(f||Gl)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:s,unshift:c,finish:u,sort:l}}function Tg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let a;return r===void 0?(a=new Hl,o.set(n,[a])):i>=r.length?(a=new Hl,r.push(a)):a=r[i],a}function e(){o=new WeakMap}return{get:t,dispose:e}}function Ag(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Ut};break;case"SpotLight":e={position:new O,direction:new O,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new O,halfWidth:new O,halfHeight:new O};break}return o[t.id]=e,e}}}function Eg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Cg=0;function Lg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Dg(o,t){const e=new Ag,n=Eg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,a=new Kt,s=new Kt;function c(u,h){let f=0,m=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let d=0,p=0,_=0,M=0,y=0,b=0,v=0,E=0,C=0,x=0;u.sort(Lg);const w=h!==!0?Math.PI:1;for(let z=0,G=u.length;z<G;z++){const R=u[z],P=R.color,N=R.intensity,q=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=P.r*N*w,m+=P.g*N*w,g+=P.b*N*w;else if(R.isLightProbe)for(let B=0;B<9;B++)i.probe[B].addScaledVector(R.sh.coefficients[B],N);else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*w),R.castShadow){const et=R.shadow,Z=n.get(R);Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,i.directionalShadow[d]=Z,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=R.shadow.matrix,b++}i.directional[d]=B,d++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(P).multiplyScalar(N*w),B.distance=q,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,i.spot[_]=B;const et=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,et.updateMatrices(R),R.castShadow&&x++),i.spotLightMatrix[_]=et.matrix,R.castShadow){const Z=n.get(R);Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,i.spotShadow[_]=Z,i.spotShadowMap[_]=j,E++}_++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(P).multiplyScalar(N),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),i.rectArea[M]=B,M++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity*w),B.distance=R.distance,B.decay=R.decay,R.castShadow){const et=R.shadow,Z=n.get(R);Z.shadowBias=et.bias,Z.shadowNormalBias=et.normalBias,Z.shadowRadius=et.radius,Z.shadowMapSize=et.mapSize,Z.shadowCameraNear=et.camera.near,Z.shadowCameraFar=et.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=R.shadow.matrix,v++}i.point[p]=B,p++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(N*w),B.groundColor.copy(R.groundColor).multiplyScalar(N*w),i.hemi[y]=B,y++}}M>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const L=i.hash;(L.directionalLength!==d||L.pointLength!==p||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+C-x,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=p,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=C,i.version=Cg++)}function l(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const b=u[M];if(b.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),f++}else if(b.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const v=i.rectArea[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),s.identity(),a.copy(b.matrixWorld),a.premultiply(_),s.extractRotation(a),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(s),v.halfHeight.applyMatrix4(s),d++}else if(b.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:i}}function Wl(o,t){const e=new Dg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(h){n.push(h)}function s(h){i.push(h)}function c(h){e.setup(n,h)}function l(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:s}}function Pg(o,t){let e=new WeakMap;function n(r,a=0){const s=e.get(r);let c;return s===void 0?(c=new Wl(o,t),e.set(r,[c])):a>=s.length?(c=new Wl(o,t),s.push(c)):c=s[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Rg extends nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ig extends nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zg(o,t,e){let n=new io;const i=new It,r=new It,a=new oe,s=new Rg({depthPacking:Wh}),c=new Ig,l={},u=e.maxTextureSize,h={0:Qe,1:di,2:no},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Fg,fragmentShader:Og}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new cn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ln(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc,this.render=function(b,v,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const C=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),L=o.state;L.setBlending(Un),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let z=0,G=b.length;z<G;z++){const R=b[z],P=R.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",R,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/N.x),i.x=r.x*N.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/N.y),i.y=r.y*N.y,P.mapSize.y=r.y)),P.map===null){const j=this.type!==pr?{minFilter:fe,magFilter:fe}:{};P.map=new mi(i.x,i.y,j),P.map.texture.name=R.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();const q=P.getViewportCount();for(let j=0;j<q;j++){const B=P.getViewport(j);a.set(r.x*B.x,r.y*B.y,r.x*B.z,r.y*B.w),L.viewport(a),P.updateMatrices(R,j),n=P.getFrustum(),y(v,E,P.camera,R,this.type)}P.isPointLightShadow!==!0&&this.type===pr&&_(P,E),P.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(C,x,w)};function _(b,v){const E=t.update(d);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new mi(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,o.setRenderTarget(b.mapPass),o.clear(),o.renderBufferDirect(v,null,E,f,d,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,o.setRenderTarget(b.map),o.clear(),o.renderBufferDirect(v,null,E,m,d,null)}function M(b,v,E,C,x,w){let L=null;const z=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)L=z;else if(L=E.isPointLight===!0?c:s,o.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){const G=L.uuid,R=v.uuid;let P=l[G];P===void 0&&(P={},l[G]=P);let N=P[R];N===void 0&&(N=L.clone(),P[R]=N),L=N}return L.visible=v.visible,L.wireframe=v.wireframe,w===pr?L.side=v.shadowSide!==null?v.shadowSide:v.side:L.side=v.shadowSide!==null?v.shadowSide:h[v.side],L.alphaMap=v.alphaMap,L.alphaTest=v.alphaTest,L.map=v.map,L.clipShadows=v.clipShadows,L.clippingPlanes=v.clippingPlanes,L.clipIntersection=v.clipIntersection,L.displacementMap=v.displacementMap,L.displacementScale=v.displacementScale,L.displacementBias=v.displacementBias,L.wireframeLinewidth=v.wireframeLinewidth,L.linewidth=v.linewidth,E.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(E.matrixWorld),L.nearDistance=C,L.farDistance=x),L}function y(b,v,E,C,x){if(b.visible===!1)return;if(b.layers.test(v.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===pr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const z=t.update(b),G=b.material;if(Array.isArray(G)){const R=z.groups;for(let P=0,N=R.length;P<N;P++){const q=R[P],j=G[q.materialIndex];if(j&&j.visible){const B=M(b,j,C,E.near,E.far,x);o.renderBufferDirect(E,null,z,B,b,q)}}}else if(G.visible){const R=M(b,G,C,E.near,E.far,x);o.renderBufferDirect(E,null,z,R,b,null)}}const L=b.children;for(let z=0,G=L.length;z<G;z++)y(L[z],v,E,C,x)}}function Ng(o,t,e){const n=e.isWebGL2;function i(){let D=!1;const V=new oe;let Q=null;const ot=new oe(0,0,0,0);return{setMask:function(ht){Q!==ht&&!D&&(o.colorMask(ht,ht,ht,ht),Q=ht)},setLocked:function(ht){D=ht},setClear:function(ht,Rt,re,he,Wn){Wn===!0&&(ht*=he,Rt*=he,re*=he),V.set(ht,Rt,re,he),ot.equals(V)===!1&&(o.clearColor(ht,Rt,re,he),ot.copy(V))},reset:function(){D=!1,Q=null,ot.set(-1,0,0,0)}}}function r(){let D=!1,V=null,Q=null,ot=null;return{setTest:function(ht){ht?Lt(2929):ct(2929)},setMask:function(ht){V!==ht&&!D&&(o.depthMask(ht),V=ht)},setFunc:function(ht){if(Q!==ht){switch(ht){case fh:o.depthFunc(512);break;case ph:o.depthFunc(519);break;case mh:o.depthFunc(513);break;case La:o.depthFunc(515);break;case gh:o.depthFunc(514);break;case _h:o.depthFunc(518);break;case xh:o.depthFunc(516);break;case vh:o.depthFunc(517);break;default:o.depthFunc(515)}Q=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ot!==ht&&(o.clearDepth(ht),ot=ht)},reset:function(){D=!1,V=null,Q=null,ot=null}}}function a(){let D=!1,V=null,Q=null,ot=null,ht=null,Rt=null,re=null,he=null,Wn=null;return{setTest:function(Vt){D||(Vt?Lt(2960):ct(2960))},setMask:function(Vt){V!==Vt&&!D&&(o.stencilMask(Vt),V=Vt)},setFunc:function(Vt,xn,Xe){(Q!==Vt||ot!==xn||ht!==Xe)&&(o.stencilFunc(Vt,xn,Xe),Q=Vt,ot=xn,ht=Xe)},setOp:function(Vt,xn,Xe){(Rt!==Vt||re!==xn||he!==Xe)&&(o.stencilOp(Vt,xn,Xe),Rt=Vt,re=xn,he=Xe)},setLocked:function(Vt){D=Vt},setClear:function(Vt){Wn!==Vt&&(o.clearStencil(Vt),Wn=Vt)},reset:function(){D=!1,V=null,Q=null,ot=null,ht=null,Rt=null,re=null,he=null,Wn=null}}}const s=new i,c=new r,l=new a,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,b=null,v=null,E=null,C=null,x=null,w=!1,L=null,z=null,G=null,R=null,P=null;const N=o.getParameter(35661);let q=!1,j=0;const B=o.getParameter(7938);B.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=j>=1):B.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=j>=2);let et=null,Z={};const U=o.getParameter(3088),k=o.getParameter(2978),J=new oe().fromArray(U),K=new oe().fromArray(k);function it(D,V,Q){const ot=new Uint8Array(4),ht=o.createTexture();o.bindTexture(D,ht),o.texParameteri(D,10241,9728),o.texParameteri(D,10240,9728);for(let Rt=0;Rt<Q;Rt++)o.texImage2D(V+Rt,0,6408,1,1,0,6408,5121,ot);return ht}const $={};$[3553]=it(3553,3553,1),$[34067]=it(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(2929),c.setFunc(La),xe(!1),We(Oo),Lt(2884),ge(Un);function Lt(D){f[D]!==!0&&(o.enable(D),f[D]=!0)}function ct(D){f[D]!==!1&&(o.disable(D),f[D]=!1)}function xt(D,V){return m[D]!==V?(o.bindFramebuffer(D,V),m[D]=V,n&&(D===36009&&(m[36160]=V),D===36160&&(m[36009]=V)),!0):!1}function lt(D,V){let Q=d,ot=!1;if(D)if(Q=g.get(V),Q===void 0&&(Q=[],g.set(V,Q)),D.isWebGLMultipleRenderTargets){const ht=D.texture;if(Q.length!==ht.length||Q[0]!==36064){for(let Rt=0,re=ht.length;Rt<re;Rt++)Q[Rt]=36064+Rt;Q.length=ht.length,ot=!0}}else Q[0]!==36064&&(Q[0]=36064,ot=!0);else Q[0]!==1029&&(Q[0]=1029,ot=!0);ot&&(e.isWebGL2?o.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ft(D){return p!==D?(o.useProgram(D),p=D,!0):!1}const bt={[Fi]:32774,[nh]:32778,[ih]:32779};if(n)bt[ko]=32775,bt[Bo]=32776;else{const D=t.get("EXT_blend_minmax");D!==null&&(bt[ko]=D.MIN_EXT,bt[Bo]=D.MAX_EXT)}const _t={[rh]:0,[sh]:1,[ah]:768,[gc]:770,[dh]:776,[uh]:774,[lh]:772,[oh]:769,[_c]:771,[hh]:775,[ch]:773};function ge(D,V,Q,ot,ht,Rt,re,he){if(D===Un){_===!0&&(ct(3042),_=!1);return}if(_===!1&&(Lt(3042),_=!0),D!==eh){if(D!==M||he!==w){if((y!==Fi||E!==Fi)&&(o.blendEquation(32774),y=Fi,E=Fi),he)switch(D){case Ui:o.blendFuncSeparate(1,771,1,771);break;case zo:o.blendFunc(1,1);break;case No:o.blendFuncSeparate(0,769,0,1);break;case Uo:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ui:o.blendFuncSeparate(770,771,1,771);break;case zo:o.blendFunc(770,1);break;case No:o.blendFuncSeparate(0,769,0,1);break;case Uo:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,v=null,C=null,x=null,M=D,w=he}return}ht=ht||V,Rt=Rt||Q,re=re||ot,(V!==y||ht!==E)&&(o.blendEquationSeparate(bt[V],bt[ht]),y=V,E=ht),(Q!==b||ot!==v||Rt!==C||re!==x)&&(o.blendFuncSeparate(_t[Q],_t[ot],_t[Rt],_t[re]),b=Q,v=ot,C=Rt,x=re),M=D,w=!1}function _e(D,V){D.side===no?ct(2884):Lt(2884);let Q=D.side===Qe;V&&(Q=!Q),xe(Q),D.blending===Ui&&D.transparent===!1?ge(Un):ge(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),s.setMask(D.colorWrite);const ot=D.stencilWrite;l.setTest(ot),ot&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Lt(32926):ct(32926)}function xe(D){L!==D&&(D?o.frontFace(2304):o.frontFace(2305),L=D)}function We(D){D!==Ku?(Lt(2884),D!==z&&(D===Oo?o.cullFace(1029):D===Qu?o.cullFace(1028):o.cullFace(1032))):ct(2884),z=D}function Qt(D){D!==G&&(q&&o.lineWidth(D),G=D)}function Ot(D,V,Q){D?(Lt(32823),(R!==V||P!==Q)&&(o.polygonOffset(V,Q),R=V,P=Q)):ct(32823)}function _n(D){D?Lt(3089):ct(3089)}function en(D){D===void 0&&(D=33984+N-1),et!==D&&(o.activeTexture(D),et=D)}function A(D,V,Q){Q===void 0&&(et===null?Q=33984+N-1:Q=et);let ot=Z[Q];ot===void 0&&(ot={type:void 0,texture:void 0},Z[Q]=ot),(ot.type!==D||ot.texture!==V)&&(et!==Q&&(o.activeTexture(Q),et=Q),o.bindTexture(D,V||$[D]),ot.type=D,ot.texture=V)}function S(){const D=Z[et];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function W(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function st(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function vt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(D){J.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function dt(D){K.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),K.copy(D))}function Dt(D,V){let Q=h.get(V);Q===void 0&&(Q=new WeakMap,h.set(V,Q));let ot=Q.get(D);ot===void 0&&(ot=o.getUniformBlockIndex(V,D.name),Q.set(D,ot))}function Bt(D,V){const ot=h.get(V).get(D);u.get(V)!==ot&&(o.uniformBlockBinding(V,ot,D.__bindingPointIndex),u.set(V,ot))}function ie(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},et=null,Z={},m={},g=new WeakMap,d=[],p=null,_=!1,M=null,y=null,b=null,v=null,E=null,C=null,x=null,w=!1,L=null,z=null,G=null,R=null,P=null,J.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:Lt,disable:ct,bindFramebuffer:xt,drawBuffers:lt,useProgram:Ft,setBlending:ge,setMaterial:_e,setFlipSided:xe,setCullFace:We,setLineWidth:Qt,setPolygonOffset:Ot,setScissorTest:_n,activeTexture:en,bindTexture:A,unbindTexture:S,compressedTexImage2D:W,compressedTexImage3D:tt,texImage2D:gt,texImage3D:ut,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:Y,texStorage3D:pt,texSubImage2D:nt,texSubImage3D:st,compressedTexSubImage2D:vt,compressedTexSubImage3D:at,scissor:mt,viewport:dt,reset:ie}}function Ug(o,t,e,n,i,r,a){const s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):Tr("canvas")}function y(A,S,W,tt){let nt=1;if((A.width>tt||A.height>tt)&&(nt=tt/Math.max(A.width,A.height)),nt<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const st=S?Oa:Math.floor,vt=st(nt*A.width),at=st(nt*A.height);d===void 0&&(d=M(vt,at));const Y=W?M(vt,at):d;return Y.width=vt,Y.height=at,Y.getContext("2d").drawImage(A,0,0,vt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+vt+"x"+at+")."),Y}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function b(A){return dl(A.width)&&dl(A.height)}function v(A){return s?!1:A.wrapS!==an||A.wrapT!==an||A.minFilter!==fe&&A.minFilter!==Ye}function E(A,S){return A.generateMipmaps&&S&&A.minFilter!==fe&&A.minFilter!==Ye}function C(A){o.generateMipmap(A)}function x(A,S,W,tt,nt=!1){if(s===!1)return S;if(A!==null){if(o[A]!==void 0)return o[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let st=S;return S===6403&&(W===5126&&(st=33326),W===5131&&(st=33325),W===5121&&(st=33321)),S===33319&&(W===5126&&(st=33328),W===5131&&(st=33327),W===5121&&(st=33323)),S===6408&&(W===5126&&(st=34836),W===5131&&(st=34842),W===5121&&(st=tt===kt&&nt===!1?35907:32856),W===32819&&(st=32854),W===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function w(A,S,W){return E(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==fe&&A.minFilter!==Ye?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function L(A){return A===fe||A===Vo||A===Bs?9728:9729}function z(A){const S=A.target;S.removeEventListener("dispose",z),R(S),S.isVideoTexture&&g.delete(S)}function G(A){const S=A.target;S.removeEventListener("dispose",G),N(S)}function R(A){const S=n.get(A);if(S.__webglInit===void 0)return;const W=A.source,tt=p.get(W);if(tt){const nt=tt[S.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&P(A),Object.keys(tt).length===0&&p.delete(W)}n.remove(A)}function P(A){const S=n.get(A);o.deleteTexture(S.__webglTexture);const W=A.source,tt=p.get(W);delete tt[S.__cacheKey],a.memory.textures--}function N(A){const S=A.texture,W=n.get(A),tt=n.get(S);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++)o.deleteFramebuffer(W.__webglFramebuffer[nt]),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer[nt]);else{if(o.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&o.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&o.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let nt=0;nt<W.__webglColorRenderbuffer.length;nt++)W.__webglColorRenderbuffer[nt]&&o.deleteRenderbuffer(W.__webglColorRenderbuffer[nt]);W.__webglDepthRenderbuffer&&o.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let nt=0,st=S.length;nt<st;nt++){const vt=n.get(S[nt]);vt.__webglTexture&&(o.deleteTexture(vt.__webglTexture),a.memory.textures--),n.remove(S[nt])}n.remove(S),n.remove(A)}let q=0;function j(){q=0}function B(){const A=q;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),q+=1,A}function et(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function Z(A,S){const W=n.get(A);if(A.isVideoTexture&&_n(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const tt=A.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ct(W,A,S);return}}e.bindTexture(3553,W.__webglTexture,33984+S)}function U(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){ct(W,A,S);return}e.bindTexture(35866,W.__webglTexture,33984+S)}function k(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){ct(W,A,S);return}e.bindTexture(32879,W.__webglTexture,33984+S)}function J(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){xt(W,A,S);return}e.bindTexture(34067,W.__webglTexture,33984+S)}const K={[Ra]:10497,[an]:33071,[Ia]:33648},it={[fe]:9728,[Vo]:9984,[Bs]:9986,[Ye]:9729,[Eh]:9985,[br]:9987};function $(A,S,W){if(W?(o.texParameteri(A,10242,K[S.wrapS]),o.texParameteri(A,10243,K[S.wrapT]),(A===32879||A===35866)&&o.texParameteri(A,32882,K[S.wrapR]),o.texParameteri(A,10240,it[S.magFilter]),o.texParameteri(A,10241,it[S.minFilter])):(o.texParameteri(A,10242,33071),o.texParameteri(A,10243,33071),(A===32879||A===35866)&&o.texParameteri(A,32882,33071),(S.wrapS!==an||S.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(A,10240,L(S.magFilter)),o.texParameteri(A,10241,L(S.minFilter)),S.minFilter!==fe&&S.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===fe||S.minFilter!==Bs&&S.minFilter!==br||S.type===ri&&t.has("OES_texture_float_linear")===!1||s===!1&&S.type===Sr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(o.texParameterf(A,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Lt(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",z));const tt=S.source;let nt=p.get(tt);nt===void 0&&(nt={},p.set(tt,nt));const st=et(S);if(st!==A.__cacheKey){nt[st]===void 0&&(nt[st]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,W=!0),nt[st].usedTimes++;const vt=nt[A.__cacheKey];vt!==void 0&&(nt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&P(S)),A.__cacheKey=st,A.__webglTexture=nt[st].texture}return W}function ct(A,S,W){let tt=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(tt=35866),S.isData3DTexture&&(tt=32879);const nt=Lt(A,S),st=S.source;e.bindTexture(tt,A.__webglTexture,33984+W);const vt=n.get(st);if(st.version!==vt.__version||nt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const at=v(S)&&b(S.image)===!1;let Y=y(S.image,at,!1,u);Y=en(S,Y);const pt=b(Y)||s,gt=r.convert(S.format,S.encoding);let ut=r.convert(S.type),mt=x(S.internalFormat,gt,ut,S.encoding,S.isVideoTexture);$(tt,S,pt);let dt;const Dt=S.mipmaps,Bt=s&&S.isVideoTexture!==!0,ie=vt.__version===void 0||nt===!0,D=w(S,Y,pt);if(S.isDepthTexture)mt=6402,s?S.type===ri?mt=36012:S.type===ii?mt=33190:S.type===ki?mt=35056:mt=33189:S.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ai&&mt===6402&&S.type!==yc&&S.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ii,ut=r.convert(S.type)),S.format===Xi&&mt===6402&&(mt=34041,S.type!==ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=ki,ut=r.convert(S.type))),ie&&(Bt?e.texStorage2D(3553,1,mt,Y.width,Y.height):e.texImage2D(3553,0,mt,Y.width,Y.height,0,gt,ut,null));else if(S.isDataTexture)if(Dt.length>0&&pt){Bt&&ie&&e.texStorage2D(3553,D,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],Bt?e.texSubImage2D(3553,V,0,0,dt.width,dt.height,gt,ut,dt.data):e.texImage2D(3553,V,mt,dt.width,dt.height,0,gt,ut,dt.data);S.generateMipmaps=!1}else Bt?(ie&&e.texStorage2D(3553,D,mt,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,Y.width,Y.height,gt,ut,Y.data)):e.texImage2D(3553,0,mt,Y.width,Y.height,0,gt,ut,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Bt&&ie&&e.texStorage3D(35866,D,mt,Dt[0].width,Dt[0].height,Y.depth);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],S.format!==on?gt!==null?Bt?e.compressedTexSubImage3D(35866,V,0,0,0,dt.width,dt.height,Y.depth,gt,dt.data,0,0):e.compressedTexImage3D(35866,V,mt,dt.width,dt.height,Y.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage3D(35866,V,0,0,0,dt.width,dt.height,Y.depth,gt,ut,dt.data):e.texImage3D(35866,V,mt,dt.width,dt.height,Y.depth,0,gt,ut,dt.data)}else{Bt&&ie&&e.texStorage2D(3553,D,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],S.format!==on?gt!==null?Bt?e.compressedTexSubImage2D(3553,V,0,0,dt.width,dt.height,gt,dt.data):e.compressedTexImage2D(3553,V,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?e.texSubImage2D(3553,V,0,0,dt.width,dt.height,gt,ut,dt.data):e.texImage2D(3553,V,mt,dt.width,dt.height,0,gt,ut,dt.data)}else if(S.isDataArrayTexture)Bt?(ie&&e.texStorage3D(35866,D,mt,Y.width,Y.height,Y.depth),e.texSubImage3D(35866,0,0,0,0,Y.width,Y.height,Y.depth,gt,ut,Y.data)):e.texImage3D(35866,0,mt,Y.width,Y.height,Y.depth,0,gt,ut,Y.data);else if(S.isData3DTexture)Bt?(ie&&e.texStorage3D(32879,D,mt,Y.width,Y.height,Y.depth),e.texSubImage3D(32879,0,0,0,0,Y.width,Y.height,Y.depth,gt,ut,Y.data)):e.texImage3D(32879,0,mt,Y.width,Y.height,Y.depth,0,gt,ut,Y.data);else if(S.isFramebufferTexture){if(ie)if(Bt)e.texStorage2D(3553,D,mt,Y.width,Y.height);else{let V=Y.width,Q=Y.height;for(let ot=0;ot<D;ot++)e.texImage2D(3553,ot,mt,V,Q,0,gt,ut,null),V>>=1,Q>>=1}}else if(Dt.length>0&&pt){Bt&&ie&&e.texStorage2D(3553,D,mt,Dt[0].width,Dt[0].height);for(let V=0,Q=Dt.length;V<Q;V++)dt=Dt[V],Bt?e.texSubImage2D(3553,V,0,0,gt,ut,dt):e.texImage2D(3553,V,mt,gt,ut,dt);S.generateMipmaps=!1}else Bt?(ie&&e.texStorage2D(3553,D,mt,Y.width,Y.height),e.texSubImage2D(3553,0,0,0,gt,ut,Y)):e.texImage2D(3553,0,mt,gt,ut,Y);E(S,pt)&&C(tt),vt.__version=st.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function xt(A,S,W){if(S.image.length!==6)return;const tt=Lt(A,S),nt=S.source;e.bindTexture(34067,A.__webglTexture,33984+W);const st=n.get(nt);if(nt.version!==st.__version||tt===!0){e.activeTexture(33984+W),o.pixelStorei(37440,S.flipY),o.pixelStorei(37441,S.premultiplyAlpha),o.pixelStorei(3317,S.unpackAlignment),o.pixelStorei(37443,0);const vt=S.isCompressedTexture||S.image[0].isCompressedTexture,at=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let V=0;V<6;V++)!vt&&!at?Y[V]=y(S.image[V],!1,!0,l):Y[V]=at?S.image[V].image:S.image[V],Y[V]=en(S,Y[V]);const pt=Y[0],gt=b(pt)||s,ut=r.convert(S.format,S.encoding),mt=r.convert(S.type),dt=x(S.internalFormat,ut,mt,S.encoding),Dt=s&&S.isVideoTexture!==!0,Bt=st.__version===void 0||tt===!0;let ie=w(S,pt,gt);$(34067,S,gt);let D;if(vt){Dt&&Bt&&e.texStorage2D(34067,ie,dt,pt.width,pt.height);for(let V=0;V<6;V++){D=Y[V].mipmaps;for(let Q=0;Q<D.length;Q++){const ot=D[Q];S.format!==on?ut!==null?Dt?e.compressedTexSubImage2D(34069+V,Q,0,0,ot.width,ot.height,ut,ot.data):e.compressedTexImage2D(34069+V,Q,dt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(34069+V,Q,0,0,ot.width,ot.height,ut,mt,ot.data):e.texImage2D(34069+V,Q,dt,ot.width,ot.height,0,ut,mt,ot.data)}}}else{D=S.mipmaps,Dt&&Bt&&(D.length>0&&ie++,e.texStorage2D(34067,ie,dt,Y[0].width,Y[0].height));for(let V=0;V<6;V++)if(at){Dt?e.texSubImage2D(34069+V,0,0,0,Y[V].width,Y[V].height,ut,mt,Y[V].data):e.texImage2D(34069+V,0,dt,Y[V].width,Y[V].height,0,ut,mt,Y[V].data);for(let Q=0;Q<D.length;Q++){const ht=D[Q].image[V].image;Dt?e.texSubImage2D(34069+V,Q+1,0,0,ht.width,ht.height,ut,mt,ht.data):e.texImage2D(34069+V,Q+1,dt,ht.width,ht.height,0,ut,mt,ht.data)}}else{Dt?e.texSubImage2D(34069+V,0,0,0,ut,mt,Y[V]):e.texImage2D(34069+V,0,dt,ut,mt,Y[V]);for(let Q=0;Q<D.length;Q++){const ot=D[Q];Dt?e.texSubImage2D(34069+V,Q+1,0,0,ut,mt,ot.image[V]):e.texImage2D(34069+V,Q+1,dt,ut,mt,ot.image[V])}}}E(S,gt)&&C(34067),st.__version=nt.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function lt(A,S,W,tt,nt){const st=r.convert(W.format,W.encoding),vt=r.convert(W.type),at=x(W.internalFormat,st,vt,W.encoding);n.get(S).__hasExternalTextures||(nt===32879||nt===35866?e.texImage3D(nt,0,at,S.width,S.height,S.depth,0,st,vt,null):e.texImage2D(nt,0,at,S.width,S.height,0,st,vt,null)),e.bindFramebuffer(36160,A),Ot(S)?f.framebufferTexture2DMultisampleEXT(36160,tt,nt,n.get(W).__webglTexture,0,Qt(S)):(nt===3553||nt>=34069&&nt<=34074)&&o.framebufferTexture2D(36160,tt,nt,n.get(W).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(A,S,W){if(o.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let tt=33189;if(W||Ot(S)){const nt=S.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ri?tt=36012:nt.type===ii&&(tt=33190));const st=Qt(S);Ot(S)?f.renderbufferStorageMultisampleEXT(36161,st,tt,S.width,S.height):o.renderbufferStorageMultisample(36161,st,tt,S.width,S.height)}else o.renderbufferStorage(36161,tt,S.width,S.height);o.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const tt=Qt(S);W&&Ot(S)===!1?o.renderbufferStorageMultisample(36161,tt,35056,S.width,S.height):Ot(S)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,S.width,S.height):o.renderbufferStorage(36161,34041,S.width,S.height),o.framebufferRenderbuffer(36160,33306,36161,A)}else{const tt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let nt=0;nt<tt.length;nt++){const st=tt[nt],vt=r.convert(st.format,st.encoding),at=r.convert(st.type),Y=x(st.internalFormat,vt,at,st.encoding),pt=Qt(S);W&&Ot(S)===!1?o.renderbufferStorageMultisample(36161,pt,Y,S.width,S.height):Ot(S)?f.renderbufferStorageMultisampleEXT(36161,pt,Y,S.width,S.height):o.renderbufferStorage(36161,Y,S.width,S.height)}}o.bindRenderbuffer(36161,null)}function bt(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z(S.depthTexture,0);const tt=n.get(S.depthTexture).__webglTexture,nt=Qt(S);if(S.depthTexture.format===ai)Ot(S)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,nt):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(S.depthTexture.format===Xi)Ot(S)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,nt):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function _t(A){const S=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");bt(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,S.__webglFramebuffer[tt]),S.__webglDepthbuffer[tt]=o.createRenderbuffer(),Ft(S.__webglDepthbuffer[tt],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=o.createRenderbuffer(),Ft(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ge(A,S,W){const tt=n.get(A);S!==void 0&&lt(tt.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&_t(A)}function _e(A){const S=A.texture,W=n.get(A),tt=n.get(S);A.addEventListener("dispose",G),A.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=S.version,a.memory.textures++);const nt=A.isWebGLCubeRenderTarget===!0,st=A.isWebGLMultipleRenderTargets===!0,vt=b(A)||s;if(nt){W.__webglFramebuffer=[];for(let at=0;at<6;at++)W.__webglFramebuffer[at]=o.createFramebuffer()}else{if(W.__webglFramebuffer=o.createFramebuffer(),st)if(i.drawBuffers){const at=A.texture;for(let Y=0,pt=at.length;Y<pt;Y++){const gt=n.get(at[Y]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ot(A)===!1){const at=st?S:[S];W.__webglMultisampledFramebuffer=o.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let Y=0;Y<at.length;Y++){const pt=at[Y];W.__webglColorRenderbuffer[Y]=o.createRenderbuffer(),o.bindRenderbuffer(36161,W.__webglColorRenderbuffer[Y]);const gt=r.convert(pt.format,pt.encoding),ut=r.convert(pt.type),mt=x(pt.internalFormat,gt,ut,pt.encoding,A.isXRRenderTarget===!0),dt=Qt(A);o.renderbufferStorageMultisample(36161,dt,mt,A.width,A.height),o.framebufferRenderbuffer(36160,36064+Y,36161,W.__webglColorRenderbuffer[Y])}o.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(W.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(nt){e.bindTexture(34067,tt.__webglTexture),$(34067,S,vt);for(let at=0;at<6;at++)lt(W.__webglFramebuffer[at],A,S,36064,34069+at);E(S,vt)&&C(34067),e.unbindTexture()}else if(st){const at=A.texture;for(let Y=0,pt=at.length;Y<pt;Y++){const gt=at[Y],ut=n.get(gt);e.bindTexture(3553,ut.__webglTexture),$(3553,gt,vt),lt(W.__webglFramebuffer,A,gt,36064+Y,3553),E(gt,vt)&&C(3553)}e.unbindTexture()}else{let at=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?at=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,tt.__webglTexture),$(at,S,vt),lt(W.__webglFramebuffer,A,S,36064,at),E(S,vt)&&C(at),e.unbindTexture()}A.depthBuffer&&_t(A)}function xe(A){const S=b(A)||s,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let tt=0,nt=W.length;tt<nt;tt++){const st=W[tt];if(E(st,S)){const vt=A.isWebGLCubeRenderTarget?34067:3553,at=n.get(st).__webglTexture;e.bindTexture(vt,at),C(vt),e.unbindTexture()}}}function We(A){if(s&&A.samples>0&&Ot(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,tt=A.height;let nt=16384;const st=[],vt=A.stencilBuffer?33306:36096,at=n.get(A),Y=A.isWebGLMultipleRenderTargets===!0;if(Y)for(let pt=0;pt<S.length;pt++)e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,at.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,at.__webglFramebuffer);for(let pt=0;pt<S.length;pt++){st.push(36064+pt),A.depthBuffer&&st.push(vt);const gt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(nt|=256),A.stencilBuffer&&(nt|=1024)),Y&&o.framebufferRenderbuffer(36008,36064,36161,at.__webglColorRenderbuffer[pt]),gt===!0&&(o.invalidateFramebuffer(36008,[vt]),o.invalidateFramebuffer(36009,[vt])),Y){const ut=n.get(S[pt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,W,tt,0,0,W,tt,nt,9728),m&&o.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Y)for(let pt=0;pt<S.length;pt++){e.bindFramebuffer(36160,at.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+pt,36161,at.__webglColorRenderbuffer[pt]);const gt=n.get(S[pt]).__webglTexture;e.bindFramebuffer(36160,at.__webglFramebuffer),o.framebufferTexture2D(36009,36064+pt,3553,gt,0)}e.bindFramebuffer(36009,at.__webglMultisampledFramebuffer)}}function Qt(A){return Math.min(h,A.samples)}function Ot(A){const S=n.get(A);return s&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _n(A){const S=a.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function en(A,S){const W=A.encoding,tt=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Fa||W!==pi&&(W===kt?s===!1?t.has("EXT_sRGB")===!0&&tt===on?(A.format=Fa,A.minFilter=Ye,A.generateMipmaps=!1):S=wc.sRGBToLinear(S):(tt!==on||nt!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),S}this.allocateTextureUnit=B,this.resetTextureUnits=j,this.setTexture2D=Z,this.setTexture2DArray=U,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=ge,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Ot}function kg(o,t,e){const n=e.isWebGL2;function i(r,a=null){let s;if(r===fi)return 5121;if(r===Ph)return 32819;if(r===Rh)return 32820;if(r===Ch)return 5120;if(r===Lh)return 5122;if(r===yc)return 5123;if(r===Dh)return 5124;if(r===ii)return 5125;if(r===ri)return 5126;if(r===Sr)return n?5131:(s=t.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(r===Ih)return 6406;if(r===on)return 6408;if(r===Oh)return 6409;if(r===zh)return 6410;if(r===ai)return 6402;if(r===Xi)return 34041;if(r===Fh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Fa)return s=t.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(r===Nh)return 6403;if(r===Uh)return 36244;if(r===kh)return 33319;if(r===Bh)return 33320;if(r===Vh)return 36249;if(r===Vs||r===Gs||r===Hs||r===Ws)if(a===kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Vs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Vs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ws)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Go||r===Ho||r===Wo||r===Xo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Go)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ho)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gh)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qo||r===$o)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(r===qo)return a===kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===$o)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yo||r===jo||r===Zo||r===Jo||r===Ko||r===Qo||r===tl||r===el||r===nl||r===il||r===rl||r===sl||r===al||r===ol)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Yo)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jo)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zo)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jo)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ko)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qo)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tl)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===el)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nl)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===il)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rl)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sl)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===al)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ol)return a===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ll)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(r===ll)return a===kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===ki?n?34042:(s=t.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Bg extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gr extends ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vg={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const s=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n),_=this._getHandJoint(l,d);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));s!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Vg)))}return s!==null&&(s.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gg extends we{constructor(t,e,n,i,r,a,s,c,l,u){if(u=u!==void 0?u:ai,u!==ai&&u!==Xi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ai&&(n=ii),n===void 0&&u===Xi&&(n=ki),super(null,i,r,a,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=s!==void 0?s:fe,this.minFilter=c!==void 0?c:fe,this.flipY=!1,this.generateMipmaps=!1}}class Hg extends er{constructor(t,e){super();const n=this;let i=null,r=1,a=null,s="local-floor",c=null,l=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],M=[],y=new Set,b=new Map,v=new je;v.layers.enable(1),v.viewport=new oe;const E=new je;E.layers.enable(2),E.viewport=new oe;const C=[v,E],x=new Bg;x.layers.enable(1),x.layers.enable(2);let w=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let k=_[U];return k===void 0&&(k=new _a,_[U]=k),k.getTargetRaySpace()},this.getControllerGrip=function(U){let k=_[U];return k===void 0&&(k=new _a,_[U]=k),k.getGripSpace()},this.getHand=function(U){let k=_[U];return k===void 0&&(k=new _a,_[U]=k),k.getHandSpace()};function z(U){const k=M.indexOf(U.inputSource);if(k===-1)return;const J=_[k];J!==void 0&&J.dispatchEvent({type:U.type,data:U.inputSource})}function G(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",R);for(let U=0;U<_.length;U++){const k=M[U];k!==null&&(M[U]=null,_[U].disconnect(k))}w=null,L=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(U){c=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",G),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const k={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,k),i.updateRenderState({baseLayer:f}),p=new mi(f.framebufferWidth,f.framebufferHeight,{format:on,type:fi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let k=null,J=null,K=null;g.depth&&(K=g.stencil?35056:33190,k=g.stencil?Xi:ai,J=g.stencil?ki:ii);const it={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(it),i.updateRenderState({layers:[h]}),p=new mi(h.textureWidth,h.textureHeight,{format:on,type:fi,depthTexture:new Gg(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const $=t.properties.get(p);$.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,a=await i.requestReferenceSpace(s),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(U){for(let k=0;k<U.removed.length;k++){const J=U.removed[k],K=M.indexOf(J);K>=0&&(M[K]=null,_[K].disconnect(J))}for(let k=0;k<U.added.length;k++){const J=U.added[k];let K=M.indexOf(J);if(K===-1){for(let $=0;$<_.length;$++)if($>=M.length){M.push(J),K=$;break}else if(M[$]===null){M[$]=J,K=$;break}if(K===-1)break}const it=_[K];it&&it.connect(J)}}const P=new O,N=new O;function q(U,k,J){P.setFromMatrixPosition(k.matrixWorld),N.setFromMatrixPosition(J.matrixWorld);const K=P.distanceTo(N),it=k.projectionMatrix.elements,$=J.projectionMatrix.elements,Lt=it[14]/(it[10]-1),ct=it[14]/(it[10]+1),xt=(it[9]+1)/it[5],lt=(it[9]-1)/it[5],Ft=(it[8]-1)/it[0],bt=($[8]+1)/$[0],_t=Lt*Ft,ge=Lt*bt,_e=K/(-Ft+bt),xe=_e*-Ft;k.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(xe),U.translateZ(_e),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const We=Lt+_e,Qt=ct+_e,Ot=_t-xe,_n=ge+(K-xe),en=xt*ct/Qt*We,A=lt*ct/Qt*We;U.projectionMatrix.makePerspective(Ot,_n,en,A,We,Qt)}function j(U,k){k===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(k.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;x.near=E.near=v.near=U.near,x.far=E.far=v.far=U.far,(w!==x.near||L!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,L=x.far);const k=U.parent,J=x.cameras;j(x,k);for(let it=0;it<J.length;it++)j(J[it],k);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),U.matrix.copy(x.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const K=U.children;for(let it=0,$=K.length;it<$;it++)K[it].updateMatrixWorld(!0);J.length===2?q(x,v,E):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)},this.getPlanes=function(){return y};let B=null;function et(U,k){if(l=k.getViewerPose(c||a),m=k,l!==null){const J=l.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let K=!1;J.length!==x.cameras.length&&(x.cameras.length=0,K=!0);for(let it=0;it<J.length;it++){const $=J[it];let Lt=null;if(f!==null)Lt=f.getViewport($);else{const xt=u.getViewSubImage(h,$);Lt=xt.viewport,it===0&&(t.setRenderTargetTextures(p,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(p))}let ct=C[it];ct===void 0&&(ct=new je,ct.layers.enable(it),ct.viewport=new oe,C[it]=ct),ct.matrix.fromArray($.transform.matrix),ct.projectionMatrix.fromArray($.projectionMatrix),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),it===0&&x.matrix.copy(ct.matrix),K===!0&&x.cameras.push(ct)}}for(let J=0;J<_.length;J++){const K=M[J],it=_[J];K!==null&&it!==void 0&&it.update(K,k,c||a)}if(B&&B(U,k),k.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let J=null;for(const K of y)k.detectedPlanes.has(K)||(J===null&&(J=[]),J.push(K));if(J!==null)for(const K of J)y.delete(K),b.delete(K),n.dispatchEvent({type:"planeremoved",data:K});for(const K of k.detectedPlanes)if(!y.has(K))y.add(K),b.set(K,k.lastChangedTime),n.dispatchEvent({type:"planeadded",data:K});else{const it=b.get(K);K.lastChangedTime>it&&(b.set(K,K.lastChangedTime),n.dispatchEvent({type:"planechanged",data:K}))}}m=null}const Z=new Oc;Z.setAnimationLoop(et),this.setAnimationLoop=function(U){B=U},this.dispose=function(){}}}function Wg(o,t){function e(d,p){p.color.getRGB(d.fogColor.value,Rc(o)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),l(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,y)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?s(d,p,_,M):p.isSpriteMaterial?c(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Qe&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Qe&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const b=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),d.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uv2Transform.value.copy(y.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function s(d,p,_,M){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=M*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),d.uvTransform.value.copy(y.matrix))}function c(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function l(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Qe&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Xg(o,t,e,n){let i={},r={},a=[];const s=e.isWebGL2?o.getParameter(35375):0;function c(M,y){const b=y.program;n.uniformBlockBinding(M,b)}function l(M,y){let b=i[M.id];b===void 0&&(g(M),b=u(M),i[M.id]=b,M.addEventListener("dispose",p));const v=y.program;n.updateUBOMapping(M,v);const E=t.render.frame;r[M.id]!==E&&(f(M),r[M.id]=E)}function u(M){const y=h();M.__bindingPointIndex=y;const b=o.createBuffer(),v=M.__size,E=M.usage;return o.bindBuffer(35345,b),o.bufferData(35345,v,E),o.bindBuffer(35345,null),o.bindBufferBase(35345,y,b),b}function h(){for(let M=0;M<s;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const y=i[M.id],b=M.uniforms,v=M.__cache;o.bindBuffer(35345,y);for(let E=0,C=b.length;E<C;E++){const x=b[E];if(m(x,E,v)===!0){const w=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let z=0;for(let G=0;G<L.length;G++){const R=L[G],P=d(R);typeof R=="number"?(x.__data[0]=R,o.bufferSubData(35345,w+z,x.__data)):R.isMatrix3?(x.__data[0]=R.elements[0],x.__data[1]=R.elements[1],x.__data[2]=R.elements[2],x.__data[3]=R.elements[0],x.__data[4]=R.elements[3],x.__data[5]=R.elements[4],x.__data[6]=R.elements[5],x.__data[7]=R.elements[0],x.__data[8]=R.elements[6],x.__data[9]=R.elements[7],x.__data[10]=R.elements[8],x.__data[11]=R.elements[0]):(R.toArray(x.__data,z),z+=P.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function m(M,y,b){const v=M.value;if(b[y]===void 0){if(typeof v=="number")b[y]=v;else{const E=Array.isArray(v)?v:[v],C=[];for(let x=0;x<E.length;x++)C.push(E[x].clone());b[y]=C}return!0}else if(typeof v=="number"){if(b[y]!==v)return b[y]=v,!0}else{const E=Array.isArray(b[y])?b[y]:[b[y]],C=Array.isArray(v)?v:[v];for(let x=0;x<E.length;x++){const w=E[x];if(w.equals(C[x])===!1)return w.copy(C[x]),!0}}return!1}function g(M){const y=M.uniforms;let b=0;const v=16;let E=0;for(let C=0,x=y.length;C<x;C++){const w=y[C],L={boundary:0,storage:0},z=Array.isArray(w.value)?w.value:[w.value];for(let G=0,R=z.length;G<R;G++){const P=z[G],N=d(P);L.boundary+=N.boundary,L.storage+=N.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=b,C>0){E=b%v;const G=v-E;E!==0&&G-L.boundary<0&&(b+=v-E,w.__offset=b)}b+=L.storage}return E=b%v,E>0&&(b+=v-E),M.__size=b,M.__cache={},this}function d(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),o.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function _(){for(const M in i)o.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:c,update:l,dispose:_}}function qg(){const o=Tr("canvas");return o.style.display="block",o}function Vc(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:qg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,a=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,s=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",l=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.physicallyCorrectLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const d=this;let p=!1,_=0,M=0,y=null,b=-1,v=null;const E=new oe,C=new oe;let x=null,w=t.width,L=t.height,z=1,G=null,R=null;const P=new oe(0,0,w,L),N=new oe(0,0,w,L);let q=!1;const j=new io;let B=!1,et=!1,Z=null;const U=new Kt,k=new It,J=new O,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return y===null?z:1}let $=e;function Lt(T,F){for(let H=0;H<T.length;H++){const I=T[H],X=t.getContext(I,F);if(X!==null)return X}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:a,preserveDrawingBuffer:s,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",dt,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),$===null){const F=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&F.shift(),$=Lt(F,T),$===null)throw Lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ct,xt,lt,Ft,bt,_t,ge,_e,xe,We,Qt,Ot,_n,en,A,S,W,tt,nt,st,vt,at,Y,pt;function gt(){ct=new im($),xt=new Jp($,ct,o),ct.init(xt),at=new kg($,ct,xt),lt=new Ng($,ct,xt),Ft=new am,bt=new Sg,_t=new Ug($,ct,lt,bt,xt,at,Ft),ge=new Qp(d),_e=new nm(d),xe=new pd($,xt),Y=new jp($,ct,xe,xt),We=new rm($,xe,Ft,Y),Qt=new um($,We,xe,Ft),nt=new cm($,xt,_t),S=new Kp(bt),Ot=new bg(d,ge,_e,ct,xt,Y,S),_n=new Wg(d,bt),en=new Tg,A=new Pg(ct,xt),tt=new Yp(d,ge,_e,lt,Qt,u,a),W=new zg(d,Qt,xt),pt=new Xg($,Ft,xt,lt),st=new Zp($,ct,Ft,xt),vt=new sm($,ct,Ft,xt),Ft.programs=Ot.programs,d.capabilities=xt,d.extensions=ct,d.properties=bt,d.renderLists=en,d.shadowMap=W,d.state=lt,d.info=Ft}gt();const ut=new Hg(d,$);this.xr=ut,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const T=ct.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ct.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(w,L,!1))},this.getSize=function(T){return T.set(w,L)},this.setSize=function(T,F,H){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,L=F,t.width=Math.floor(T*z),t.height=Math.floor(F*z),H!==!1&&(t.style.width=T+"px",t.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(w*z,L*z).floor()},this.setDrawingBufferSize=function(T,F,H){w=T,L=F,z=H,t.width=Math.floor(T*H),t.height=Math.floor(F*H),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(P)},this.setViewport=function(T,F,H,I){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,F,H,I),lt.viewport(E.copy(P).multiplyScalar(z).floor())},this.getScissor=function(T){return T.copy(N)},this.setScissor=function(T,F,H,I){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,F,H,I),lt.scissor(C.copy(N).multiplyScalar(z).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(T){lt.setScissorTest(q=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){R=T},this.getClearColor=function(T){return T.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(T=!0,F=!0,H=!0){let I=0;T&&(I|=16384),F&&(I|=256),H&&(I|=1024),$.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",dt,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),en.dispose(),A.dispose(),bt.dispose(),ge.dispose(),_e.dispose(),Qt.dispose(),Y.dispose(),pt.dispose(),Ot.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",ot),ut.removeEventListener("sessionend",ht),Z&&(Z.dispose(),Z=null),Rt.stop()};function mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ft.autoReset,F=W.enabled,H=W.autoUpdate,I=W.needsUpdate,X=W.type;gt(),Ft.autoReset=T,W.enabled=F,W.autoUpdate=H,W.needsUpdate=I,W.type=X}function Dt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bt(T){const F=T.target;F.removeEventListener("dispose",Bt),ie(F)}function ie(T){D(T),bt.remove(T)}function D(T){const F=bt.get(T).programs;F!==void 0&&(F.forEach(function(H){Ot.releaseProgram(H)}),T.isShaderMaterial&&Ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,H,I,X,ft){F===null&&(F=K);const yt=X.isMesh&&X.matrixWorld.determinant()<0,St=Yu(T,F,H,I,X);lt.setMaterial(I,yt);let wt=H.index,Pt=1;I.wireframe===!0&&(wt=We.getWireframeAttribute(H),Pt=2);const At=H.drawRange,Et=H.attributes.position;let $t=At.start*Pt,De=(At.start+At.count)*Pt;ft!==null&&($t=Math.max($t,ft.start*Pt),De=Math.min(De,(ft.start+ft.count)*Pt)),wt!==null?($t=Math.max($t,0),De=Math.min(De,wt.count)):Et!=null&&($t=Math.max($t,0),De=Math.min(De,Et.count));const vn=De-$t;if(vn<0||vn===1/0)return;Y.setup(X,I,St,H,wt);let Xn,Yt=st;if(wt!==null&&(Xn=xe.get(wt),Yt=vt,Yt.setIndex(Xn)),X.isMesh)I.wireframe===!0?(lt.setLineWidth(I.wireframeLinewidth*it()),Yt.setMode(1)):Yt.setMode(4);else if(X.isLine){let Ct=I.linewidth;Ct===void 0&&(Ct=1),lt.setLineWidth(Ct*it()),X.isLineSegments?Yt.setMode(1):X.isLineLoop?Yt.setMode(2):Yt.setMode(3)}else X.isPoints?Yt.setMode(0):X.isSprite&&Yt.setMode(4);if(X.isInstancedMesh)Yt.renderInstances($t,vn,X.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,zs=Math.min(H.instanceCount,Ct);Yt.renderInstances($t,vn,zs)}else Yt.render($t,vn)},this.compile=function(T,F){function H(I,X,ft){I.transparent===!0&&I.side===Br?(I.side=Qe,I.needsUpdate=!0,Xe(I,X,ft),I.side=di,I.needsUpdate=!0,Xe(I,X,ft),I.side=Br):Xe(I,X,ft)}f=A.get(T),f.init(),g.push(f),T.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(d.physicallyCorrectLights),T.traverse(function(I){const X=I.material;if(X)if(Array.isArray(X))for(let ft=0;ft<X.length;ft++){const yt=X[ft];H(yt,T,I)}else H(X,T,I)}),g.pop(),f=null};let V=null;function Q(T){V&&V(T)}function ot(){Rt.stop()}function ht(){Rt.start()}const Rt=new Oc;Rt.setAnimationLoop(Q),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(T){V=T,ut.setAnimationLoop(T),T===null?Rt.stop():Rt.start()},ut.addEventListener("sessionstart",ot),ut.addEventListener("sessionend",ht),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(F),F=ut.getCamera()),T.isScene===!0&&T.onBeforeRender(d,T,F,y),f=A.get(T,g.length),f.init(),g.push(f),U.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(U),et=this.localClippingEnabled,B=S.init(this.clippingPlanes,et,F),h=en.get(T,m.length),h.init(),m.push(h),re(T,F,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(G,R),B===!0&&S.beginShadows();const H=f.state.shadowsArray;if(W.render(H,T,F),B===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,T),f.setupLights(d.physicallyCorrectLights),F.isArrayCamera){const I=F.cameras;for(let X=0,ft=I.length;X<ft;X++){const yt=I[X];he(h,T,yt,yt.viewport)}}else he(h,T,F);y!==null&&(_t.updateMultisampleRenderTarget(y),_t.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(d,T,F),Y.resetDefaultState(),b=-1,v=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function re(T,F,H,I){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){I&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);const yt=Qt.update(T),St=T.material;St.visible&&h.push(T,yt,St,H,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ft.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ft.render.frame),!T.frustumCulled||j.intersectsObject(T))){I&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(U);const yt=Qt.update(T),St=T.material;if(Array.isArray(St)){const wt=yt.groups;for(let Pt=0,At=wt.length;Pt<At;Pt++){const Et=wt[Pt],$t=St[Et.materialIndex];$t&&$t.visible&&h.push(T,yt,$t,H,J.z,Et)}}else St.visible&&h.push(T,yt,St,H,J.z,null)}}const ft=T.children;for(let yt=0,St=ft.length;yt<St;yt++)re(ft[yt],F,H,I)}function he(T,F,H,I){const X=T.opaque,ft=T.transmissive,yt=T.transparent;f.setupLightsView(H),ft.length>0&&Wn(X,F,H),I&&lt.viewport(E.copy(I)),X.length>0&&Vt(X,F,H),ft.length>0&&Vt(ft,F,H),yt.length>0&&Vt(yt,F,H),lt.buffers.depth.setTest(!0),lt.buffers.depth.setMask(!0),lt.buffers.color.setMask(!0),lt.setPolygonOffset(!1)}function Wn(T,F,H){const I=xt.isWebGL2;Z===null&&(Z=new mi(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Sr:fi,minFilter:br,samples:I&&r===!0?4:0})),d.getDrawingBufferSize(k),I?Z.setSize(k.x,k.y):Z.setSize(Oa(k.x),Oa(k.y));const X=d.getRenderTarget();d.setRenderTarget(Z),d.clear();const ft=d.toneMapping;d.toneMapping=Cn,Vt(T,F,H),d.toneMapping=ft,_t.updateMultisampleRenderTarget(Z),_t.updateRenderTargetMipmap(Z),d.setRenderTarget(X)}function Vt(T,F,H){const I=F.isScene===!0?F.overrideMaterial:null;for(let X=0,ft=T.length;X<ft;X++){const yt=T[X],St=yt.object,wt=yt.geometry,Pt=I===null?yt.material:I,At=yt.group;St.layers.test(H.layers)&&xn(St,F,H,wt,Pt,At)}}function xn(T,F,H,I,X,ft){T.onBeforeRender(d,F,H,I,X,ft),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(d,F,H,I,T,ft),X.transparent===!0&&X.side===Br?(X.side=Qe,X.needsUpdate=!0,d.renderBufferDirect(H,F,I,X,T,ft),X.side=di,X.needsUpdate=!0,d.renderBufferDirect(H,F,I,X,T,ft),X.side=Br):d.renderBufferDirect(H,F,I,X,T,ft),T.onAfterRender(d,F,H,I,X,ft)}function Xe(T,F,H){F.isScene!==!0&&(F=K);const I=bt.get(T),X=f.state.lights,ft=f.state.shadowsArray,yt=X.state.version,St=Ot.getParameters(T,X.state,ft,F,H),wt=Ot.getProgramCacheKey(St);let Pt=I.programs;I.environment=T.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(T.isMeshStandardMaterial?_e:ge).get(T.envMap||I.environment),Pt===void 0&&(T.addEventListener("dispose",Bt),Pt=new Map,I.programs=Pt);let At=Pt.get(wt);if(At!==void 0){if(I.currentProgram===At&&I.lightsStateVersion===yt)return Ro(T,St),At}else St.uniforms=Ot.getUniforms(T),T.onBuild(H,St,d),T.onBeforeCompile(St,d),At=Ot.acquireProgram(St,wt),Pt.set(wt,At),I.uniforms=St.uniforms;const Et=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Et.clippingPlanes=S.uniform),Ro(T,St),I.needsLights=Zu(T),I.lightsStateVersion=yt,I.needsLights&&(Et.ambientLightColor.value=X.state.ambient,Et.lightProbe.value=X.state.probe,Et.directionalLights.value=X.state.directional,Et.directionalLightShadows.value=X.state.directionalShadow,Et.spotLights.value=X.state.spot,Et.spotLightShadows.value=X.state.spotShadow,Et.rectAreaLights.value=X.state.rectArea,Et.ltc_1.value=X.state.rectAreaLTC1,Et.ltc_2.value=X.state.rectAreaLTC2,Et.pointLights.value=X.state.point,Et.pointLightShadows.value=X.state.pointShadow,Et.hemisphereLights.value=X.state.hemi,Et.directionalShadowMap.value=X.state.directionalShadowMap,Et.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Et.spotShadowMap.value=X.state.spotShadowMap,Et.spotLightMatrix.value=X.state.spotLightMatrix,Et.spotLightMap.value=X.state.spotLightMap,Et.pointShadowMap.value=X.state.pointShadowMap,Et.pointShadowMatrix.value=X.state.pointShadowMatrix);const $t=At.getUniforms(),De=us.seqWithValue($t.seq,Et);return I.currentProgram=At,I.uniformsList=De,At}function Ro(T,F){const H=bt.get(T);H.outputEncoding=F.outputEncoding,H.instancing=F.instancing,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Yu(T,F,H,I,X){F.isScene!==!0&&(F=K),_t.resetTextureUnits();const ft=F.fog,yt=I.isMeshStandardMaterial?F.environment:null,St=y===null?d.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:pi,wt=(I.isMeshStandardMaterial?_e:ge).get(I.envMap||yt),Pt=I.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,At=!!I.normalMap&&!!H.attributes.tangent,Et=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,De=!!H.morphAttributes.color,vn=I.toneMapped?d.toneMapping:Cn,Xn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Yt=Xn!==void 0?Xn.length:0,Ct=bt.get(I),zs=f.state.lights;if(B===!0&&(et===!0||T!==v)){const Pe=T===v&&I.id===b;S.setState(I,T,Pe)}let se=!1;I.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==zs.state.version||Ct.outputEncoding!==St||X.isInstancedMesh&&Ct.instancing===!1||!X.isInstancedMesh&&Ct.instancing===!0||X.isSkinnedMesh&&Ct.skinning===!1||!X.isSkinnedMesh&&Ct.skinning===!0||Ct.envMap!==wt||I.fog===!0&&Ct.fog!==ft||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==S.numPlanes||Ct.numIntersection!==S.numIntersection)||Ct.vertexAlphas!==Pt||Ct.vertexTangents!==At||Ct.morphTargets!==Et||Ct.morphNormals!==$t||Ct.morphColors!==De||Ct.toneMapping!==vn||xt.isWebGL2===!0&&Ct.morphTargetsCount!==Yt)&&(se=!0):(se=!0,Ct.__version=I.version);let qn=Ct.currentProgram;se===!0&&(qn=Xe(I,F,X));let Io=!1,sr=!1,Ns=!1;const ve=qn.getUniforms(),$n=Ct.uniforms;if(lt.useProgram(qn.program)&&(Io=!0,sr=!0,Ns=!0),I.id!==b&&(b=I.id,sr=!0),Io||v!==T){if(ve.setValue($,"projectionMatrix",T.projectionMatrix),xt.logarithmicDepthBuffer&&ve.setValue($,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),v!==T&&(v=T,sr=!0,Ns=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Pe=ve.map.cameraPosition;Pe!==void 0&&Pe.setValue($,J.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&ve.setValue($,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||X.isSkinnedMesh)&&ve.setValue($,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){ve.setOptional($,X,"bindMatrix"),ve.setOptional($,X,"bindMatrixInverse");const Pe=X.skeleton;Pe&&(xt.floatVertexTextures?(Pe.boneTexture===null&&Pe.computeBoneTexture(),ve.setValue($,"boneTexture",Pe.boneTexture,_t),ve.setValue($,"boneTextureSize",Pe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Us=H.morphAttributes;if((Us.position!==void 0||Us.normal!==void 0||Us.color!==void 0&&xt.isWebGL2===!0)&&nt.update(X,H,I,qn),(sr||Ct.receiveShadow!==X.receiveShadow)&&(Ct.receiveShadow=X.receiveShadow,ve.setValue($,"receiveShadow",X.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&($n.envMap.value=wt,$n.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),sr&&(ve.setValue($,"toneMappingExposure",d.toneMappingExposure),Ct.needsLights&&ju($n,Ns),ft&&I.fog===!0&&_n.refreshFogUniforms($n,ft),_n.refreshMaterialUniforms($n,I,z,L,Z),us.upload($,Ct.uniformsList,$n,_t)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(us.upload($,Ct.uniformsList,$n,_t),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&ve.setValue($,"center",X.center),ve.setValue($,"modelViewMatrix",X.modelViewMatrix),ve.setValue($,"normalMatrix",X.normalMatrix),ve.setValue($,"modelMatrix",X.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Pe=I.uniformsGroups;for(let ks=0,Ju=Pe.length;ks<Ju;ks++)if(xt.isWebGL2){const Fo=Pe[ks];pt.update(Fo,qn),pt.bind(Fo,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function ju(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Zu(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,F,H){bt.get(T.texture).__webglTexture=F,bt.get(T.depthTexture).__webglTexture=H;const I=bt.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=H===void 0,I.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,F){const H=bt.get(T);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,H=0){y=T,_=F,M=H;let I=!0,X=null,ft=!1,yt=!1;if(T){const wt=bt.get(T);wt.__useDefaultFramebuffer!==void 0?(lt.bindFramebuffer(36160,null),I=!1):wt.__webglFramebuffer===void 0?_t.setupRenderTarget(T):wt.__hasExternalTextures&&_t.rebindTextures(T,bt.get(T.texture).__webglTexture,bt.get(T.depthTexture).__webglTexture);const Pt=T.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(yt=!0);const At=bt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=At[F],ft=!0):xt.isWebGL2&&T.samples>0&&_t.useMultisampledRTT(T)===!1?X=bt.get(T).__webglMultisampledFramebuffer:X=At,E.copy(T.viewport),C.copy(T.scissor),x=T.scissorTest}else E.copy(P).multiplyScalar(z).floor(),C.copy(N).multiplyScalar(z).floor(),x=q;if(lt.bindFramebuffer(36160,X)&&xt.drawBuffers&&I&&lt.drawBuffers(T,X),lt.viewport(E),lt.scissor(C),lt.setScissorTest(x),ft){const wt=bt.get(T.texture);$.framebufferTexture2D(36160,36064,34069+F,wt.__webglTexture,H)}else if(yt){const wt=bt.get(T.texture),Pt=F||0;$.framebufferTextureLayer(36160,36064,wt.__webglTexture,H||0,Pt)}b=-1},this.readRenderTargetPixels=function(T,F,H,I,X,ft,yt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=bt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&yt!==void 0&&(St=St[yt]),St){lt.bindFramebuffer(36160,St);try{const wt=T.texture,Pt=wt.format,At=wt.type;if(Pt!==on&&at.convert(Pt)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=At===Sr&&(ct.has("EXT_color_buffer_half_float")||xt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(At!==fi&&at.convert(At)!==$.getParameter(35738)&&!(At===ri&&(xt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-I&&H>=0&&H<=T.height-X&&$.readPixels(F,H,I,X,at.convert(Pt),at.convert(At),ft)}finally{const wt=y!==null?bt.get(y).__webglFramebuffer:null;lt.bindFramebuffer(36160,wt)}}},this.copyFramebufferToTexture=function(T,F,H=0){const I=Math.pow(2,-H),X=Math.floor(F.image.width*I),ft=Math.floor(F.image.height*I);_t.setTexture2D(F,0),$.copyTexSubImage2D(3553,H,0,0,T.x,T.y,X,ft),lt.unbindTexture()},this.copyTextureToTexture=function(T,F,H,I=0){const X=F.image.width,ft=F.image.height,yt=at.convert(H.format),St=at.convert(H.type);_t.setTexture2D(H,0),$.pixelStorei(37440,H.flipY),$.pixelStorei(37441,H.premultiplyAlpha),$.pixelStorei(3317,H.unpackAlignment),F.isDataTexture?$.texSubImage2D(3553,I,T.x,T.y,X,ft,yt,St,F.image.data):F.isCompressedTexture?$.compressedTexSubImage2D(3553,I,T.x,T.y,F.mipmaps[0].width,F.mipmaps[0].height,yt,F.mipmaps[0].data):$.texSubImage2D(3553,I,T.x,T.y,yt,St,F.image),I===0&&H.generateMipmaps&&$.generateMipmap(3553),lt.unbindTexture()},this.copyTextureToTexture3D=function(T,F,H,I,X=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ft=T.max.x-T.min.x+1,yt=T.max.y-T.min.y+1,St=T.max.z-T.min.z+1,wt=at.convert(I.format),Pt=at.convert(I.type);let At;if(I.isData3DTexture)_t.setTexture3D(I,0),At=32879;else if(I.isDataArrayTexture)_t.setTexture2DArray(I,0),At=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,I.flipY),$.pixelStorei(37441,I.premultiplyAlpha),$.pixelStorei(3317,I.unpackAlignment);const Et=$.getParameter(3314),$t=$.getParameter(32878),De=$.getParameter(3316),vn=$.getParameter(3315),Xn=$.getParameter(32877),Yt=H.isCompressedTexture?H.mipmaps[0]:H.image;$.pixelStorei(3314,Yt.width),$.pixelStorei(32878,Yt.height),$.pixelStorei(3316,T.min.x),$.pixelStorei(3315,T.min.y),$.pixelStorei(32877,T.min.z),H.isDataTexture||H.isData3DTexture?$.texSubImage3D(At,X,F.x,F.y,F.z,ft,yt,St,wt,Pt,Yt.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(At,X,F.x,F.y,F.z,ft,yt,St,wt,Yt.data)):$.texSubImage3D(At,X,F.x,F.y,F.z,ft,yt,St,wt,Pt,Yt),$.pixelStorei(3314,Et),$.pixelStorei(32878,$t),$.pixelStorei(3316,De),$.pixelStorei(3315,vn),$.pixelStorei(32877,Xn),X===0&&I.generateMipmaps&&$.generateMipmap(At),lt.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?_t.setTextureCube(T,0):T.isData3DTexture?_t.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?_t.setTexture2DArray(T,0):_t.setTexture2D(T,0),lt.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,lt.reset(),Y.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class $g extends Vc{}$g.prototype.isWebGL1Renderer=!0;class Yg extends ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Gc extends nr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Xl=new Kt,Na=new Ec,as=new As,os=new O;class jg extends ce{constructor(t=new cn,e=new Gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=r,t.ray.intersectsSphere(as)===!1)return;Xl.copy(i).invert(),Na.copy(t.ray).applyMatrix4(Xl);const s=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=s*s,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=f,d=m;g<d;g++){const p=l.getX(g);os.fromBufferAttribute(h,p),ql(os,p,c,i,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=f,d=m;g<d;g++)os.fromBufferAttribute(h,g),ql(os,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}}function ql(o,t,e,n,i,r,a){const s=Na.distanceSqToPoint(o);if(s<e){const c=new O;Na.closestPointToPoint(o,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(s),point:c,index:t,face:null,object:a})}}class ao extends cn{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,s=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],m=[];let g=0;const d=[],p=n/2;let _=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(m,2));function M(){const b=new O,v=new O;let E=0;const C=(e-t)/n;for(let x=0;x<=r;x++){const w=[],L=x/r,z=L*(e-t)+t;for(let G=0;G<=i;G++){const R=G/i,P=R*c+s,N=Math.sin(P),q=Math.cos(P);v.x=z*N,v.y=-L*n+p,v.z=z*q,h.push(v.x,v.y,v.z),b.set(N,C,q).normalize(),f.push(b.x,b.y,b.z),m.push(R,1-L),w.push(g++)}d.push(w)}for(let x=0;x<i;x++)for(let w=0;w<r;w++){const L=d[w][x],z=d[w+1][x],G=d[w+1][x+1],R=d[w][x+1];u.push(L,z,R),u.push(z,G,R),E+=6}l.addGroup(_,E,0),_+=E}function y(b){const v=g,E=new It,C=new O;let x=0;const w=b===!0?t:e,L=b===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,p*L,0),f.push(0,L,0),m.push(.5,.5),g++;const z=g;for(let G=0;G<=i;G++){const P=G/i*c+s,N=Math.cos(P),q=Math.sin(P);C.x=w*q,C.y=p*L,C.z=w*N,h.push(C.x,C.y,C.z),f.push(0,L,0),E.x=N*.5+.5,E.y=q*.5*L+.5,m.push(E.x,E.y),g++}for(let G=0;G<i;G++){const R=v+G,P=z+G;b===!0?u.push(P,P+1,R):u.push(P+1,P,R),x+=3}l.addGroup(_,x,b===!0?1:2),_+=x}}static fromJSON(t){return new ao(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class oo extends ao{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,s=Math.PI*2){super(0,t,e,n,i,r,a,s),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:s}}static fromJSON(t){return new oo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class lo extends cn{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],s=[],c=[],l=[],u=new O,h=new O,f=new O;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const d=g/i*r,p=m/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(d),h.y=(t+e*Math.cos(p))*Math.sin(d),h.z=e*Math.sin(p),s.push(h.x,h.y,h.z),u.x=t*Math.cos(d),u.y=t*Math.sin(d),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const d=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,_=(i+1)*(m-1)+g,M=(i+1)*m+g;a.push(d,p,M),a.push(p,_,M)}this.setIndex(a),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(c,3)),this.setAttribute("uv",new Be(l,2))}static fromJSON(t){return new lo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zg extends nr{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ut(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $l={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Jg{constructor(t,e,n){const i=this;let r=!1,a=0,s=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){s++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,s),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,s),a===s&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Kg=new Jg;class Hc{constructor(t){this.manager=t!==void 0?t:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Qg extends Hc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=$l.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const s=Tr("img");function c(){u(),$l.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){s.removeEventListener("load",c,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",c,!1),s.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),r.manager.itemStart(t),s.src=t,s}}class t_ extends Hc{constructor(t){super(t)}load(t,e,n,i){const r=new we,a=new Qg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(s){r.image=s,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class e_ extends ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const xa=new Kt,Yl=new O,jl=new O;class n_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yl),jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jl),e.updateMatrixWorld(),xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class i_ extends n_{constructor(){super(new zc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class r_ extends e_{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ce.DefaultUp),this.updateMatrix(),this.target=new ce,this.shadow=new i_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class s_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Zl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Zl(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class mn{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),mn.nextNameID=mn.nextNameID||0,this.$name.id=`lil-gui-name-${++mn.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class a_ extends mn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ua(o){let t,e;return(t=o.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const o_={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:Ua,toHexString:Ua},Ar={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},l_={isPrimitive:!1,match:Array.isArray,fromHexString(o,t,e=1){const n=Ar.fromHexString(o);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([o,t,e],n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Ar.toHexString(i)}},c_={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,t,e=1){const n=Ar.fromHexString(o);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:o,g:t,b:e},n=1){n=255/n;const i=o*n<<16^t*n<<8^e*n<<0;return Ar.toHexString(i)}},u_=[o_,Ar,l_,c_];function h_(o){return u_.find(t=>t.match(o))}class d_ extends mn{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=h_(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Ua(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class va extends mn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class f_ extends mn{constructor(t,e,n,i,r,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(r);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let _=parseFloat(this.$input.value);isNaN(_)||(this._stepExplicit&&(_=this._snap(_)),this.setValue(this._clamp(_)))},e=_=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),e(this._step*this._normalizeMouseWheel(_)))};let r=!1,a,s,c,l,u;const h=5,f=_=>{a=_.clientX,s=c=_.clientY,r=!0,l=this.getValue(),u=0,window.addEventListener("mousemove",m),window.addEventListener("mouseup",g)},m=_=>{if(r){const M=_.clientX-a,y=_.clientY-s;Math.abs(y)>h?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>h&&g()}if(!r){const M=_.clientY-c;u-=M*this._step*this._arrowKeyMultiplier(_),l+u>this._max?u=this._max-l:l+u<this._min&&(u=this._min-l),this._snapClampSetValue(l+u)}c=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",m),window.removeEventListener("mouseup",g)},d=()=>{this._inputFocused=!0},p=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",d),this.$input.addEventListener("blur",p)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(_,M,y,b,v)=>(_-M)/(y-M)*(v-b)+b,e=_=>{const M=this.$slider.getBoundingClientRect();let y=t(_,M.left,M.right,this._min,this._max);this._snapClampSetValue(y)},n=_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{e(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let a=!1,s,c;const l=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),a=!1},u=_=>{_.touches.length>1||(this._hasScrollBar?(s=_.touches[0].clientX,c=_.touches[0].clientY,a=!0):l(_),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=_=>{if(a){const M=_.touches[0].clientX-s,y=_.touches[0].clientY-c;Math.abs(M)>Math.abs(y)?l(_):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else _.preventDefault(),e(_.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},m=this._callOnFinishChange.bind(this),g=400;let d;const p=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const y=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class p_ extends mn{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class m_ extends mn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const g_=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function __(o){const t=document.createElement("style");t.innerHTML=o;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Jl=!1;class co{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:a=!0,touchStyles:s=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),s&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Jl&&a&&(__(g_),Jl=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new p_(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new f_(this,t,e,n,i,r);case"boolean":return new a_(this,t,e);case"string":return new m_(this,t,e);case"function":return new va(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new d_(this,t,e,n)}addFolder(t){return new co({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof va||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof va)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function Tn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Wc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ve={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},uo,ue,Gt,Ze=1e8,Nt=1/Ze,ka=Math.PI*2,x_=ka/4,v_=0,Xc=Math.sqrt,y_=Math.cos,M_=Math.sin,le=function(t){return typeof t=="string"},Xt=function(t){return typeof t=="function"},Ln=function(t){return typeof t=="number"},ho=function(t){return typeof t>"u"},gn=function(t){return typeof t=="object"},Te=function(t){return t!==!1},fo=function(){return typeof window<"u"},ls=function(t){return Xt(t)||le(t)},qc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},me=Array.isArray,Ba=/(?:-?\.?\d|\.)+/gi,$c=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Yc=/[+-]=-?[.\d]+/,jc=/[^,'"\[\]\s]+/gi,b_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ht,hn,Va,po,Ge={},gs={},Zc,Jc=function(t){return(gs=Yi(t,Ge))&&Le},mo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Er=function(t,e){return!e&&console.warn(t)},Kc=function(t,e){return t&&(Ge[t]=e)&&gs&&(gs[t]=e)||Ge},Cr=function(){return 0},S_={suppressEvents:!0,isStart:!0,kill:!1},hs={suppressEvents:!0,kill:!1},w_={suppressEvents:!0},go={},kn=[],Ga={},Qc,Oe={},Ma={},Kl=30,ds=[],_o="",xo=function(t){var e=t[0],n,i;if(gn(e)||Xt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ds.length;i--&&!ds[i].targetTest(e););n=ds[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Su(t[i],n)))||t.splice(i,1);return t},li=function(t){return t._gsap||xo(Je(t))[0]._gsap},tu=function(t,e,n){return(n=t[e])&&Xt(n)?t[e]():ho(n)&&t.getAttribute&&t.getAttribute(e)||n},Ae=function(t,e){return(t=t.split(",")).forEach(e)||t},qt=function(t){return Math.round(t*1e5)/1e5||0},Jt=function(t){return Math.round(t*1e7)/1e7||0},Bi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},T_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},_s=function(){var t=kn.length,e=kn.slice(0),n,i;for(Ga={},kn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},vo=function(t){return!!(t._initted||t._startAt||t.add)},eu=function(t,e,n,i){kn.length&&!ue&&_s(),t.render(e,n,i||!!(ue&&e<0&&vo(t))),kn.length&&!ue&&_s()},nu=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(jc).length<2?e:le(t)?t.trim():t},iu=function(t){return t},He=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},A_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Yi=function(t,e){for(var n in e)t[n]=e[n];return t},Ql=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},xs=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},vr=function(t){var e=t.parent||Ht,n=t.keyframes?A_(me(t.keyframes)):He;if(Te(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},E_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ru=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],s;if(r)for(s=e[r];a&&a[r]>s;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Cs=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Vn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ci=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},C_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ha=function(t,e,n,i){return t._startAt&&(ue?t._startAt.revert(hs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},L_=function o(t){return!t||t._ts&&o(t.parent)},tc=function(t){return t._repeat?ji(t._tTime,t=t.duration()+t._rDelay)*t:0},ji=function(t,e){var n=Math.floor(t=Jt(t/e));return t&&n===t?n-1:n},vs=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ls=function(t){return t._end=Jt(t._start+(t._tDur/Math.abs(t._ts||t._rts||Nt)||0))},Ds=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Jt(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ls(t),n._dirty||ci(n,t)),t},su=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=vs(t.rawTime(),e),(!e._dur||Ur(0,e.totalDuration(),n)-e._tTime>Nt)&&e.render(n,!0)),ci(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Nt}},fn=function(t,e,n,i){return e.parent&&Vn(e),e._start=Jt((Ln(n)?n:n||t!==Ht?$e(t,n,e):t._time)+e._delay),e._end=Jt(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ru(t,e,"_first","_last",t._sort?"_start":0),Wa(e)||(t._recent=e),i||su(t,e),t._ts<0&&Ds(t,t._tTime),t},au=function(t,e){return(Ge.ScrollTrigger||mo("scrollTrigger",e))&&Ge.ScrollTrigger.create(e,t)},ou=function(t,e,n,i,r){if(Mo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Qc!==Ne.frame)return kn.push(t),t._lazy=[r,i],1},D_=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Wa=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},P_=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&D_(t)&&!(!t._initted&&Wa(t))||(t._ts<0||t._dp._ts<0)&&!Wa(t))?0:1,s=t._rDelay,c=0,l,u,h;if(s&&t._repeat&&(c=Ur(0,t._tDur,e),u=ji(c,s),t._yoyo&&u&1&&(a=1-a),u!==ji(t._tTime,s)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||ue||i||t._zTime===Nt||!e&&t._zTime){if(!t._initted&&ou(t,e,i,n,c))return;for(h=t._zTime,t._zTime=e||(n?Nt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&Ha(t,e,n,!0),t._onUpdate&&!n&&ke(t,"onUpdate"),c&&t._repeat&&!n&&t.parent&&ke(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Vn(t,1),!n&&!ue&&(ke(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},R_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Zi=function(t,e,n,i){var r=t._repeat,a=Jt(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Jt(a*(r+1)+t._rDelay*r):a,s>0&&!i&&Ds(t,t._tTime=t._tDur*s),t.parent&&Ls(t),n||ci(t.parent,t),t},ec=function(t){return t instanceof be?ci(t):Zi(t,t._dur)},I_={_start:0,endTime:Cr,totalDuration:Cr},$e=function o(t,e,n){var i=t.labels,r=t._recent||I_,a=t.duration()>=Ze?r.endTime(!1):t._dur,s,c,l;return le(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)==="%",s=e.indexOf("="),c==="<"||c===">"?(s>=0&&(e=e.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(s<0?r:n).totalDuration()/100:1)):s<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(s-1)+e.substr(s+1)),l&&n&&(c=c/100*(me(n)?n[0]:n).totalDuration()),s>1?o(t,e.substr(0,s-1),n)+c:a+c)):e==null?a:+e},yr=function(t,e,n){var i=Ln(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],s,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(s=a,c=n;c&&!("immediateRender"in s);)s=c.vars.defaults||{},c=Te(c.vars.inherit)&&c.parent;a.immediateRender=Te(s.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new Zt(e[0],a,e[r+1])},Hn=function(t,e){return t||t===0?e(t):e},Ur=function(t,e,n){return n<t?t:n>e?e:n},pe=function(t,e){return!le(t)||!(e=b_.exec(t))?"":e[1]},F_=function(t,e,n){return Hn(n,function(i){return Ur(t,e,i)})},Xa=[].slice,lu=function(t,e){return t&&gn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gn(t[0]))&&!t.nodeType&&t!==hn},O_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return le(i)&&!e||lu(i,1)?(r=n).push.apply(r,Je(i)):n.push(i)})||n},Je=function(t,e,n){return Gt&&!e&&Gt.selector?Gt.selector(t):le(t)&&!n&&(Va||!Ji())?Xa.call((e||po).querySelectorAll(t),0):me(t)?O_(t,n):lu(t)?Xa.call(t,0):t?[t]:[]},qa=function(t){return t=Je(t)[0]||Er("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Je(e,n.querySelectorAll?n:n===t?Er("Invalid scope")||po.createElement("div"):t)}},cu=function(t){return t.sort(function(){return .5-Math.random()})},uu=function(t){if(Xt(t))return t;var e=gn(t)?t:{each:t},n=ui(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},s=i>0&&i<1,c=isNaN(i)||s,l=e.axis,u=i,h=i;return le(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!s&&c&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=a[d],_,M,y,b,v,E,C,x,w;if(!p){if(w=e.grid==="auto"?0:(e.grid||[1,Ze])[1],!w){for(C=-Ze;C<(C=g[w++].getBoundingClientRect().left)&&w<d;);w<d&&w--}for(p=a[d]=[],_=c?Math.min(w,d)*u-.5:i%w,M=w===Ze?0:c?d*h/w-.5:i/w|0,C=0,x=Ze,E=0;E<d;E++)y=E%w-_,b=M-(E/w|0),p[E]=v=l?Math.abs(l==="y"?b:y):Xc(y*y+b*b),v>C&&(C=v),v<x&&(x=v);i==="random"&&cu(p),p.max=C-x,p.min=x,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(w>d?d-1:l?l==="y"?d/w:w:Math.max(w,d/w))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=pe(e.amount||e.each)||0,n=n&&d<0?yu(n):n}return d=(p[f]-p.min)/p.max||0,Jt(p.b+(n?n(d):d)*p.v)+p.u}},$a=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Jt(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ln(n)?0:pe(n))}},hu=function(t,e){var n=me(t),i,r;return!n&&gn(t)&&(i=n=t.radius||Ze,t.values?(t=Je(t.values),(r=!Ln(t[0]))&&(i*=i)):t=$a(t.increment)),Hn(e,n?Xt(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var s=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=Ze,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-s,m=t[h].y-c,f=f*f+m*m):f=Math.abs(t[h]-s),f<l&&(l=f,u=h);return u=!i||l<=i?t[u]:a,r||u===a||Ln(a)?u:u+pe(a)}:$a(t))},du=function(t,e,n,i){return Hn(me(t)?!e:n===!0?!!(n=0):!i,function(){return me(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},z_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},N_=function(t,e){return function(n){return t(parseFloat(n))+(e||pe(n))}},U_=function(t,e,n){return pu(t,e,0,1,n)},fu=function(t,e,n){return Hn(n,function(i){return t[~~e(i)]})},k_=function o(t,e,n){var i=e-t;return me(t)?fu(t,o(0,t.length),e):Hn(n,function(r){return(i+(r-t)%i)%i+t})},B_=function o(t,e,n){var i=e-t,r=i*2;return me(t)?fu(t,o(0,t.length-1),e):Hn(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},Lr=function(t){for(var e=0,n="",i,r,a,s;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),s=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(s?jc:Ba),n+=t.substr(e,i-e)+du(s?r:+r[0],s?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},pu=function(t,e,n,i,r){var a=e-t,s=i-n;return Hn(r,function(c){return n+((c-t)/a*s||0)})},V_=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var a=le(t),s={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(me(t)&&!me(e)){for(u=[],h=t.length,f=h-2,l=1;l<h;l++)u.push(o(t[l-1],t[l]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=Yi(me(t)?[]:{},t));if(!u){for(c in e)yo.call(s,t,c,"get",e[c]);r=function(g){return wo(g,s)||(a?t.p:t)}}}return Hn(n,r)},nc=function(t,e,n){var i=t.labels,r=Ze,a,s,c;for(a in i)s=i[a]-e,s<0==!!n&&s&&r>(s=Math.abs(s))&&(c=a,r=s);return c},ke=function(t,e,n){var i=t.vars,r=i[e],a=Gt,s=t._ctx,c,l,u;if(r)return c=i[e+"Params"],l=i.callbackScope||t,n&&kn.length&&_s(),s&&(Gt=s),u=c?r.apply(l,c):r.call(l),Gt=a,u},_r=function(t){return Vn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ue),t.progress()<1&&ke(t,"onInterrupt"),t},Ni,mu=[],gu=function(t){if(t)if(t=!t.name&&t.default||t,fo()||t.headless){var e=t.name,n=Xt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Cr,render:wo,add:yo,kill:i0,modifier:n0,rawVars:0},a={targetTest:0,get:0,getSetter:So,aliases:{},register:0};if(Ji(),t!==i){if(Oe[e])return;He(i,He(xs(t,r),a)),Yi(i.prototype,Yi(r,xs(t,a))),Oe[i.prop=e]=i,t.targetTest&&(ds.push(i),go[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Kc(e,i),t.register&&t.register(Le,i,Ee)}else mu.push(t)},zt=255,xr={aqua:[0,zt,zt],lime:[0,zt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,zt],navy:[0,0,128],white:[zt,zt,zt],olive:[128,128,0],yellow:[zt,zt,0],orange:[zt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[zt,0,0],pink:[zt,192,203],cyan:[0,zt,zt],transparent:[zt,zt,zt,0]},ba=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*zt+.5|0},_u=function(t,e,n){var i=t?Ln(t)?[t>>16,t>>8&zt,t&zt]:0:xr.black,r,a,s,c,l,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xr[t])i=xr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),s=t.charAt(3),t="#"+r+r+a+a+s+s+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&zt,i&zt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&zt,t&zt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Ba),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=ba(c+1/3,r,a),i[1]=ba(c,r,a),i[2]=ba(c-1/3,r,a);else if(~t.indexOf("="))return i=t.match($c),n&&i.length<4&&(i[3]=1),i}else i=t.match(Ba)||xr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/zt,a=i[1]/zt,s=i[2]/zt,h=Math.max(r,a,s),f=Math.min(r,a,s),u=(h+f)/2,h===f?c=l=0:(m=h-f,l=u>.5?m/(2-h-f):m/(h+f),c=h===r?(a-s)/m+(a<s?6:0):h===a?(s-r)/m+2:(r-a)/m+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xu=function(t){var e=[],n=[],i=-1;return t.split(Bn).forEach(function(r){var a=r.match(zi)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},ic=function(t,e,n){var i="",r=(t+i).match(Bn),a=e?"hsla(":"rgba(",s=0,c,l,u,h;if(!r)return t;if(r=r.map(function(f){return(f=_u(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=xu(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(Bn,"1").split(zi),h=l.length-1;s<h;s++)i+=l[s]+(~c.indexOf(s)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=t.split(Bn),h=l.length-1;s<h;s++)i+=l[s]+r[s];return i+l[h]},Bn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),G_=/hsl[a]?\(/,vu=function(t){var e=t.join(" "),n;if(Bn.lastIndex=0,Bn.test(e))return n=G_.test(e),t[1]=ic(t[1],n),t[0]=ic(t[0],n,xu(t[1])),!0},Dr,Ne=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,a=r,s=[],c,l,u,h,f,m,g=function d(p){var _=o()-i,M=p===!0,y,b,v,E;if((_>t||_<0)&&(n+=_-e),i+=_,v=i-n,y=v-a,(y>0||M)&&(E=++h.frame,f=v-h.time*1e3,h.time=v=v/1e3,a+=y+(y>=r?4:r-y),b=1),M||(c=l(d)),b)for(m=0;m<s.length;m++)s[m](v,f,E,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Zc&&(!Va&&fo()&&(hn=Va=window,po=hn.document||{},Ge.gsap=Le,(hn.gsapVersions||(hn.gsapVersions=[])).push(Le.version),Jc(gs||hn.GreenSockGlobals||!hn.gsap&&hn||{}),mu.forEach(gu)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},Dr=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Dr=0,l=Cr},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),a=h.time*1e3+r},add:function(p,_,M){var y=_?function(b,v,E,C){p(b,v,E,C),h.remove(y)}:p;return h.remove(p),s[M?"unshift":"push"](y),Ji(),y},remove:function(p,_){~(_=s.indexOf(p))&&s.splice(_,1)&&m>=_&&m--},_listeners:s},h}(),Ji=function(){return!Dr&&Ne.wake()},Tt={},H_=/^[\d.\-M][\d.\-,\s]/,W_=/["']/g,X_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,s,c,l;r<a;r++)c=n[r],s=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,s),e[i]=isNaN(l)?l.replace(W_,"").trim():+l,i=c.substr(s+1).trim();return e},q_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},$_=function(t){var e=(t+"").split("("),n=Tt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[X_(e[1])]:q_(t).split(",").map(nu)):Tt._CE&&H_.test(t)?Tt._CE("",t):n},yu=function(t){return function(e){return 1-t(1-e)}},Mu=function o(t,e){for(var n=t._first,i;n;)n instanceof be?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ui=function(t,e){return t&&(Xt(t)?t:Tt[t]||$_(t))||e},xi=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ae(t,function(s){Tt[s]=Ge[s]=r,Tt[a=s.toLowerCase()]=n;for(var c in r)Tt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=Tt[s+"."+c]=r[c]}),r},bu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Sa=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/ka*(Math.asin(1/i)||0),s=function(u){return u===1?1:i*Math.pow(2,-10*u)*M_((u-a)*r)+1},c=t==="out"?s:t==="in"?function(l){return 1-s(1-l)}:bu(s);return r=ka/r,c.config=function(l,u){return o(t,l,u)},c},wa=function o(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:bu(n);return i.config=function(r){return o(t,r)},i};Ae("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;xi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Tt.Linear.easeNone=Tt.none=Tt.Linear.easeIn;xi("Elastic",Sa("in"),Sa("out"),Sa());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(s){return s<e?o*s*s:s<n?o*Math.pow(s-1.5/t,2)+.75:s<i?o*(s-=2.25/t)*s+.9375:o*Math.pow(s-2.625/t,2)+.984375};xi("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);xi("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});xi("Circ",function(o){return-(Xc(1-o*o)-1)});xi("Sine",function(o){return o===1?1:-y_(o*x_)+1});xi("Back",wa("in"),wa("out"),wa());Tt.SteppedEase=Tt.steps=Ge.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-Nt;return function(s){return((i*Ur(0,a,s)|0)+r)*n}}};$i.ease=Tt["quad.out"];Ae("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return _o+=o+","+o+"Params,"});var Su=function(t,e){this.id=v_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:tu,this.set=e?e.getSetter:So},Pr=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Zi(this,+e.duration,1,1),this.data=e.data,Gt&&(this._ctx=Gt,Gt.data.push(this)),Dr||Ne.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Zi(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ji(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ds(this,n),!r._dp||r.parent||su(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eu(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?ji(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?vs(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(Ur(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Ls(this),C_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ji(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Te(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vs(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=w_);var i=ue;return ue=n,vo(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ue=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ec(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ec(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime($e(this,n),Te(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Te(i)),this._dur||(this._zTime=-Nt),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Nt)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=Xt(n)?n:iu,s=function(){var l=i.then;i.then=null,Xt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=l),r(a),i.then=l};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?s():i._prom=s})},t.kill=function(){_r(this)},o}();He(Pr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var be=function(o){Wc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Te(n.sortChildren),Ht&&fn(n.parent||Ht,Tn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&au(Tn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return yr(0,arguments,this),this},e.from=function(i,r,a){return yr(1,arguments,this),this},e.fromTo=function(i,r,a,s){return yr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,vr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Zt(i,r,$e(this,a),1),this},e.call=function(i,r,a){return fn(this,Zt.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,s,c,l,u){return a.duration=r,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new Zt(i,a,$e(this,c)),this},e.staggerFrom=function(i,r,a,s,c,l,u){return a.runBackwards=1,vr(a).immediateRender=Te(a.immediateRender),this.staggerTo(i,r,a,s,c,l,u)},e.staggerFromTo=function(i,r,a,s,c,l,u,h){return s.startAt=a,vr(s).immediateRender=Te(s.immediateRender),this.staggerTo(i,r,s,c,l,u,h)},e.render=function(i,r,a){var s=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Jt(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,m,g,d,p,_,M,y,b,v,E,C;if(this!==Ht&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(s!==this._time&&l&&(u+=this._time-s,i+=this._time-s),f=u,b=this._start,y=this._ts,_=!y,h&&(l||(s=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Jt(u%p),u===c?(d=this._repeat,f=l):(v=Jt(u/p),d=~~v,d&&d===v&&(f=l,d--),f>l&&(f=l)),v=ji(this._tTime,p),!s&&this._tTime&&v!==d&&this._tTime-v*p-this._dur<=0&&(v=d),E&&d&1&&(f=l-f,C=1),d!==v&&!this._lock){var x=E&&v&1,w=x===(E&&d&1);if(d<v&&(x=!x),s=x?0:u%l?l:u,this._lock=1,this.render(s||(C?0:Jt(d*p)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ke(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),s&&s!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,w&&(this._lock=2,s=x?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Mu(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=R_(this,Jt(s),Jt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,s=0),!s&&u&&!r&&!v&&(ke(this,"onStart"),this._tTime!==u))return this;if(f>=s&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,a),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=-Nt);break}}m=g}else{m=this._last;for(var L=i<0?i:f;m;){if(g=m._prev,(m._act||L<=m._end)&&m._ts&&M!==m){if(m.parent!==this)return this.render(i,r,a);if(m.render(m._ts>0?(L-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(L-m._start)*m._ts,r,a||ue&&vo(m)),f!==this._time||!this._ts&&!_){M=0,g&&(u+=this._zTime=L?-Nt:Nt);break}}m=g}}if(M&&!r&&(this.pause(),M.render(f>=s?0:-Nt)._zTime=f>=s?1:-1,this._ts))return this._start=b,Ls(this),this.render(i,r,a);this._onUpdate&&!r&&ke(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&s)&&(b===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Vn(this,1),!r&&!(i<0&&!s)&&(u||s||!c)&&(ke(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(Ln(r)||(r=$e(this,r,i)),!(i instanceof Pr)){if(me(i))return i.forEach(function(s){return a.add(s,r)}),this;if(le(i))return this.addLabel(i,r);if(Xt(i))i=Zt.delayedCall(0,i);else return this}return this!==i?fn(this,i,r):this},e.getChildren=function(i,r,a,s){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),s===void 0&&(s=-Ze);for(var c=[],l=this._first;l;)l._start>=s&&(l instanceof Zt?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return le(i)?this.removeLabel(i):Xt(i)?this.killTweensOf(i):(i.parent===this&&Cs(this,i),i===this._recent&&(this._recent=this._last),ci(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Jt(Ne.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=$e(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var s=Zt.delayedCall(0,r||Cr,a);return s.data="isPause",this._hasPause=1,fn(this,s,$e(this,i))},e.removePause=function(i){var r=this._first;for(i=$e(this,i);r;)r._start===i&&r.data==="isPause"&&Vn(r),r=r._next},e.killTweensOf=function(i,r,a){for(var s=this.getTweensOf(i,a),c=s.length;c--;)On!==s[c]&&s[c].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],s=Je(i),c=this._first,l=Ln(r),u;c;)c instanceof Zt?T_(c._targets,s)&&(l?(!On||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(s,r)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,s=$e(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,m,g=Zt.to(a,He({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||Nt,onStart:function(){if(a.pause(),!m){var p=r.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Zi(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,He({startAt:{time:$e(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),nc(this,$e(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),nc(this,$e(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var s=this._first,c=this.labels,l;s;)s._start>=a&&(s._start+=i,s._end+=i),s=s._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return ci(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ci(this)},e.totalDuration=function(i){var r=0,a=this,s=a._last,c=Ze,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),u=s._start,u>c&&a._sort&&s._ts&&!a._lock?(a._lock=1,fn(a,s,u-s._delay,1)._lock=0):c=u,u<0&&s._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),s._end>r&&s._ts&&(r=s._end),s=l;Zi(a,a===Ht&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Ht._ts&&(eu(Ht,vs(i,Ht)),Qc=Ne.frame),Ne.frame>=Kl){Kl+=Ve.autoSleep||120;var r=Ht._first;if((!r||!r._ts)&&Ve.autoSleep&&Ne._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ne.sleep()}}},t}(Pr);He(be.prototype,{_lock:0,_hasPause:0,_forcing:0});var Y_=function(t,e,n,i,r,a,s){var c=new Ee(this._pt,t,e,0,1,Lu,null,r),l=0,u=0,h,f,m,g,d,p,_,M;for(c.b=n,c.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Lr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),f=n.match(ya)||[];h=ya.exec(i);)g=h[0],d=i.substring(l,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Bi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},l=ya.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=s,(Yc.test(i)||_)&&(c.e=0),this._pt=c,c},yo=function(t,e,n,i,r,a,s,c,l,u){Xt(i)&&(i=i(r||0,t,a));var h=t[e],f=n!=="get"?n:Xt(h)?l?t[e.indexOf("set")||!Xt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():h,m=Xt(h)?l?Q_:Eu:bo,g;if(le(i)&&(~i.indexOf("random(")&&(i=Lr(i)),i.charAt(1)==="="&&(g=Bi(f,i)+(pe(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Ya)return!isNaN(f*i)&&i!==""?(g=new Ee(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?e0:Cu,0,m),l&&(g.fp=l),s&&g.modifier(s,this,t),this._pt=g):(!h&&!(e in t)&&mo(e,i),Y_.call(this,t,e,f,i,m,c||Ve.stringFilter,l))},j_=function(t,e,n,i,r){if(Xt(t)&&(t=Mr(t,r,e,n,i)),!gn(t)||t.style&&t.nodeType||me(t)||qc(t))return le(t)?Mr(t,r,e,n,i):t;var a={},s;for(s in t)a[s]=Mr(t[s],r,e,n,i);return a},wu=function(t,e,n,i,r,a){var s,c,l,u;if(Oe[t]&&(s=new Oe[t]).init(r,s.rawVars?e[t]:j_(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Ee(n._pt,r,t,0,1,s.render,s,0,s.priority),n!==Ni))for(l=n._ptLookup[n._targets.indexOf(r)],u=s._props.length;u--;)l[s._props[u]]=c;return s},On,Ya,Mo=function o(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,m=i.autoRevert,g=t._dur,d=t._startAt,p=t._targets,_=t.parent,M=_&&_.data==="nested"?_.vars.targets:p,y=t._overwrite==="auto"&&!uo,b=t.timeline,v,E,C,x,w,L,z,G,R,P,N,q,j;if(b&&(!f||!r)&&(r="none"),t._ease=ui(r,$i.ease),t._yEase=h?yu(ui(h===!0?r:h,$i.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!b&&!!i.runBackwards,!b||f&&!i.stagger){if(G=p[0]?li(p[0]).harness:0,q=G&&i[G.prop],v=xs(i,go),d&&(d._zTime<0&&d.progress(1),e<0&&u&&s&&!m?d.render(-1,!0):d.revert(u&&g?hs:S_),d._lazy=0),a){if(Vn(t._startAt=Zt.set(p,He({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!d&&Te(c),startAt:null,delay:0,onUpdate:l&&function(){return ke(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue||!s&&!m)&&t._startAt.revert(hs),s&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!d){if(e&&(s=!1),C=He({overwrite:!1,data:"isFromStart",lazy:s&&!d&&Te(c),immediateRender:s,stagger:0,parent:_},v),q&&(C[G.prop]=q),Vn(t._startAt=Zt.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue?t._startAt.revert(hs):t._startAt.render(-1,!0)),t._zTime=e,!s)o(t._startAt,Nt,Nt);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Te(c)||c&&!g,E=0;E<p.length;E++){if(w=p[E],z=w._gsap||xo(p)[E]._gsap,t._ptLookup[E]=P={},Ga[z.id]&&kn.length&&_s(),N=M===p?E:M.indexOf(w),G&&(R=new G).init(w,q||v,t,N,M)!==!1&&(t._pt=x=new Ee(t._pt,w,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(B){P[B]=x}),R.priority&&(L=1)),!G||q)for(C in v)Oe[C]&&(R=wu(C,v,t,N,w,M))?R.priority&&(L=1):P[C]=x=yo.call(t,w,C,"get",v[C],N,M,0,i.stringFilter);t._op&&t._op[E]&&t.kill(w,t._op[E]),y&&t._pt&&(On=t,Ht.killTweensOf(w,P,t.globalTime(e)),j=!t.parent,On=0),t._pt&&c&&(Ga[z.id]=1)}L&&Du(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!j,f&&e<=0&&b.render(Ze,!0,!0)},Z_=function(t,e,n,i,r,a,s,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,m;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,m=t._targets.length;m--;){if(u=f[m][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Ya=1,t.vars[e]="+=0",Mo(t,s),Ya=0,c?Er(e+" not eligible for reset"):1;l.push(u)}for(m=l.length;m--;)h=l[m],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=qt(n)+pe(h.e)),h.b&&(h.b=u.s+pe(h.b))},J_=function(t,e){var n=t[0]?li(t[0]).harness:0,i=n&&n.aliases,r,a,s,c;if(!i)return e;r=Yi({},e);for(a in i)if(a in r)for(c=i[a].split(","),s=c.length;s--;)r[c[s]]=r[a];return r},K_=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,s;if(me(e))s=n[t]||(n[t]=[]),e.forEach(function(c,l){return s.push({t:l/(e.length-1)*100,v:c,e:r})});else for(a in e)s=n[a]||(n[a]=[]),a==="ease"||s.push({t:parseFloat(t),v:e[a],e:r})},Mr=function(t,e,n,i,r){return Xt(t)?t.call(e,n,i,r):le(t)&&~t.indexOf("random(")?Lr(t):t},Tu=_o+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Au={};Ae(Tu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Au[o]=1});var Zt=function(o){Wc(t,o);function t(n,i,r,a){var s;typeof i=="number"&&(r.duration=i,i=r,r=null),s=o.call(this,a?i:vr(i))||this;var c=s.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,m=c.overwrite,g=c.keyframes,d=c.defaults,p=c.scrollTrigger,_=c.yoyoEase,M=i.parent||Ht,y=(me(n)||qc(n)?Ln(n[0]):"length"in i)?[n]:Je(n),b,v,E,C,x,w,L,z;if(s._targets=y.length?xo(y):Er("GSAP target "+n+" not found. https://gsap.com",!Ve.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=m,g||f||ls(l)||ls(u)){if(i=s.vars,b=s.timeline=new be({data:"nested",defaults:d||{},targets:M&&M.data==="nested"?M.vars.targets:y}),b.kill(),b.parent=b._dp=Tn(s),b._start=0,f||ls(l)||ls(u)){if(C=y.length,L=f&&uu(f),gn(f))for(x in f)~Tu.indexOf(x)&&(z||(z={}),z[x]=f[x]);for(v=0;v<C;v++)E=xs(i,Au),E.stagger=0,_&&(E.yoyoEase=_),z&&Yi(E,z),w=y[v],E.duration=+Mr(l,Tn(s),v,w,y),E.delay=(+Mr(u,Tn(s),v,w,y)||0)-s._delay,!f&&C===1&&E.delay&&(s._delay=u=E.delay,s._start+=u,E.delay=0),b.to(w,E,L?L(v,w,y):0),b._ease=Tt.none;b.duration()?l=u=0:s.timeline=0}else if(g){vr(He(b.vars.defaults,{ease:"none"})),b._ease=ui(g.ease||i.ease||"none");var G=0,R,P,N;if(me(g))g.forEach(function(q){return b.to(y,q,">")}),b.duration();else{E={};for(x in g)x==="ease"||x==="easeEach"||K_(x,g[x],E,g.easeEach);for(x in E)for(R=E[x].sort(function(q,j){return q.t-j.t}),G=0,v=0;v<R.length;v++)P=R[v],N={ease:P.e,duration:(P.t-(v?R[v-1].t:0))/100*l},N[x]=P.v,b.to(y,N,G),G+=N.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||s.duration(l=b.duration())}else s.timeline=0;return m===!0&&!uo&&(On=Tn(s),Ht.killTweensOf(y),On=0),fn(M,Tn(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),(h||!l&&!g&&s._start===Jt(M._time)&&Te(h)&&L_(Tn(s))&&M.data!=="nested")&&(s._tTime=-Nt,s.render(Math.max(0,-u)||0)),p&&au(Tn(s),p),s}var e=t.prototype;return e.render=function(i,r,a){var s=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Nt&&!u?c:i<Nt?0:i,f,m,g,d,p,_,M,y,b;if(!l)P_(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,a);if(f=Jt(h%d),h===c?(g=this._repeat,f=l):(p=Jt(h/d),g=~~p,g&&g===p?(f=l,g--):f>l&&(f=l)),_=this._yoyo&&g&1,_&&(b=this._yEase,f=l-f),p=ji(this._tTime,d),f===s&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(y&&this._yEase&&Mu(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&f!==d&&this._initted&&(this._lock=a=1,this.render(Jt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(ou(this,u?i:f,a,r,h))return this._tTime=0,this;if(s!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(b||this._ease)(f/l),this._from&&(this.ratio=M=1-M),!s&&h&&!r&&!p&&(ke(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(M,m.d),m=m._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ha(this,i,r,a),ke(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&ke(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ha(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vn(this,1),!r&&!(u&&!s)&&(h||s||_)&&(ke(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,s,c){Dr||Ne.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Mo(this,l),u=this._ease(l/this._dur),Z_(this,i,r,a,s,u,l,c)?this.resetTo(i,r,a,s,1):(Ds(this,0),this.parent||ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?_r(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ue),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,On&&On.vars.overwrite!==!0)._first||_r(this),this.parent&&a!==this.timeline.totalDuration()&&Zi(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,c=i?Je(i):s,l=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&E_(s,c))return r==="all"&&(this._pt=0),_r(this);for(h=this._op=this._op||[],r!=="all"&&(le(r)&&(d={},Ae(r,function(M){return d[M]=1}),r=d),r=J_(s,r)),_=s.length;_--;)if(~c.indexOf(s[_])){f=l[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Cs(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&_r(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return yr(1,arguments)},t.delayedCall=function(i,r,a,s){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},t.fromTo=function(i,r,a){return yr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return Ht.killTweensOf(i,r,a)},t}(Pr);He(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ae("staggerTo,staggerFrom,staggerFromTo",function(o){Zt[o]=function(){var t=new be,e=Xa.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var bo=function(t,e,n){return t[e]=n},Eu=function(t,e,n){return t[e](n)},Q_=function(t,e,n,i){return t[e](i.fp,n)},t0=function(t,e,n){return t.setAttribute(e,n)},So=function(t,e){return Xt(t[e])?Eu:ho(t[e])&&t.setAttribute?t0:bo},Cu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},e0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Lu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},wo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},n0=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},i0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Cs(this,e,"_pt"):e.dep||(n=1),e=i;return!n},r0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Du=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},Ee=function(){function o(e,n,i,r,a,s,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=s||Cu,this.d=c||this,this.set=l||bo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=r0,this.m=n,this.mt=r,this.tween=i},o}();Ae(_o+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return go[o]=1});Ge.TweenMax=Ge.TweenLite=Zt;Ge.TimelineLite=Ge.TimelineMax=be;Ht=new be({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ve.stringFilter=vu;var hi=[],fs={},s0=[],rc=0,a0=0,Ta=function(t){return(fs[t]||s0).map(function(e){return e()})},ja=function(){var t=Date.now(),e=[];t-rc>2&&(Ta("matchMediaInit"),hi.forEach(function(n){var i=n.queries,r=n.conditions,a,s,c,l;for(s in i)a=hn.matchMedia(i[s]).matches,a&&(c=1),a!==r[s]&&(r[s]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Ta("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),rc=t,Ta("matchMedia"))},Pu=function(){function o(e,n){this.selector=n&&qa(n),this.data=[],this._r=[],this.isReverted=!1,this.id=a0++,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Xt(n)&&(r=i,i=n,n=Xt);var a=this,s=function(){var l=Gt,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=qa(r)),Gt=a,h=i.apply(a,arguments),Xt(h)&&a._r.push(h),Gt=l,a.selector=u,a.isReverted=!1,h};return a.last=s,n===Xt?s(a,function(c){return a.add(null,c)}):n?a[n]=s:s},t.ignore=function(n){var i=Gt;Gt=null,n(this),Gt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Zt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var s=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return s.splice(s.indexOf(u),1)}));for(s.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof be?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Zt)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(s){return s.kill&&s.kill()}),this.clear(),i)for(var a=hi.length;a--;)hi[a].id===this.id&&hi.splice(a,1)},t.revert=function(n){this.kill(n||{})},o}(),o0=function(){function o(e){this.contexts=[],this.scope=e,Gt&&Gt.data.push(this)}var t=o.prototype;return t.add=function(n,i,r){gn(n)||(n={matches:n});var a=new Pu(0,r||this.scope),s=a.conditions={},c,l,u;Gt&&!a.selector&&(a.selector=Gt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=hn.matchMedia(n[l]),c&&(hi.indexOf(a)<0&&hi.push(a),(s[l]=c.matches)&&(u=1),c.addListener?c.addListener(ja):c.addEventListener("change",ja)));return u&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),ys={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return gu(i)})},timeline:function(t){return new be(t)},getTweensOf:function(t,e){return Ht.getTweensOf(t,e)},getProperty:function(t,e,n,i){le(t)&&(t=Je(t)[0]);var r=li(t||{}).get,a=n?iu:nu;return n==="native"&&(n=""),t&&(e?a((Oe[e]&&Oe[e].get||r)(t,e,n,i)):function(s,c,l){return a((Oe[s]&&Oe[s].get||r)(t,s,c,l))})},quickSetter:function(t,e,n){if(t=Je(t),t.length>1){var i=t.map(function(u){return Le.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var a=Oe[e],s=li(t),c=s.harness&&(s.harness.aliases||{})[e]||e,l=a?function(u){var h=new a;Ni._pt=0,h.init(t,n?u+n:u,Ni,0,[t]),h.render(1,h),Ni._pt&&wo(1,Ni)}:s.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,s,1)}},quickTo:function(t,e,n){var i,r=Le.to(t,He((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return r.resetTo(e,c,l,u)};return a.tween=r,a},isTweening:function(t){return Ht.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ui(t.ease,$i.ease)),Ql($i,t||{})},config:function(t){return Ql(Ve,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(s){return s&&!Oe[s]&&!Ge[s]&&Er(e+" effect requires "+s+" plugin.")}),Ma[e]=function(s,c,l){return n(Je(s),He(c||{},r),l)},a&&(be.prototype[e]=function(s,c,l){return this.add(Ma[e](s,gn(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){Tt[t]=ui(e)},parseEase:function(t,e){return arguments.length?ui(t,e):Tt},getById:function(t){return Ht.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new be(t),i,r;for(n.smoothChildTiming=Te(t.smoothChildTiming),Ht.remove(n),n._dp=0,n._time=n._tTime=Ht._time,i=Ht._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Zt&&i.vars.onComplete===i._targets[0]))&&fn(n,i,i._start-i._delay),i=r;return fn(Ht,n,0),n},context:function(t,e){return t?new Pu(t,e):Gt},matchMedia:function(t){return new o0(t)},matchMediaRefresh:function(){return hi.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ja()},addEventListener:function(t,e){var n=fs[t]||(fs[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=fs[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:k_,wrapYoyo:B_,distribute:uu,random:du,snap:hu,normalize:U_,getUnit:pe,clamp:F_,splitColor:_u,toArray:Je,selector:qa,mapRange:pu,pipe:z_,unitize:N_,interpolate:V_,shuffle:cu},install:Jc,effects:Ma,ticker:Ne,updateRoot:be.updateRoot,plugins:Oe,globalTimeline:Ht,core:{PropTween:Ee,globals:Kc,Tween:Zt,Timeline:be,Animation:Pr,getCache:li,_removeLinkedListItem:Cs,reverting:function(){return ue},context:function(t){return t&&Gt&&(Gt.data.push(t),t._ctx=Gt),Gt},suppressOverwrites:function(t){return uo=t}}};Ae("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return ys[o]=Zt[o]});Ne.add(be.updateRoot);Ni=ys.to({},{duration:0});var l0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},c0=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=l0(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},Aa=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(s){var c,l;if(le(r)&&(c={},Ae(r,function(u){return c[u]=1}),r=c),e){c={};for(l in r)c[l]=e(r[l]);r=c}c0(s,r)}}}},Le=ys.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,s,c;this.tween=n;for(a in e)c=t.getAttribute(a)||"",s=this.add(t,"setAttribute",(c||0)+"",e[a],i,r,0,0,a),s.op=a,s.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Aa("roundProps",$a),Aa("modifiers"),Aa("snap",hu))||ys;Zt.version=be.version=Le.version="3.13.0";Zc=1;fo()&&Ji();Tt.Power0;Tt.Power1;Tt.Power2;Tt.Power3;Tt.Power4;Tt.Linear;Tt.Quad;Tt.Cubic;Tt.Quart;Tt.Quint;Tt.Strong;Tt.Elastic;Tt.Back;Tt.SteppedEase;Tt.Bounce;Tt.Sine;Tt.Expo;Tt.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var sc,zn,Vi,To,si,ac,Ao,u0=function(){return typeof window<"u"},Dn={},ei=180/Math.PI,Gi=Math.PI/180,Ii=Math.atan2,oc=1e8,Eo=/([A-Z])/g,h0=/(left|right|width|margin|padding|x)/i,d0=/[\s,\(]\S/,pn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Za=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},f0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},p0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},m0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Ru=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Iu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},g0=function(t,e,n){return t.style[e]=n},_0=function(t,e,n){return t.style.setProperty(e,n)},x0=function(t,e,n){return t._gsap[e]=n},v0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},y0=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},M0=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},Wt="transform",Ce=Wt+"Origin",b0=function o(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in Dn&&r){if(this.tfm=this.tfm||{},t!=="transform")t=pn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=An(i,s)}):this.tfm[t]=a.x?a[t]:An(i,t),t===Ce&&(this.tfm.zOrigin=a.zOrigin);else return pn.transform.split(",").forEach(function(s){return o.call(n,s,e)});if(this.props.indexOf(Wt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ce,e,"")),t=Wt}(r||e)&&this.props.push(t,e,r[t])},Fu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},S0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Eo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Ao(),(!r||!r.isStart)&&!n[Wt]&&(Fu(n),i.zOrigin&&n[Ce]&&(n[Ce]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ou=function(t,e){var n={target:t,props:[],revert:S0,save:b0};return t._gsap||Le.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zu,Ja=function(t,e){var n=zn.createElementNS?zn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zn.createElement(t);return n&&n.style?n:zn.createElement(t)},Ke=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Eo,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,Ki(e)||e,1)||""},lc="O,Moz,ms,Ms,Webkit".split(","),Ki=function(t,e,n){var i=e||si,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(lc[a]+t in r););return a<0?null:(a===3?"ms":a>=0?lc[a]:"")+t},Ka=function(){u0()&&window.document&&(sc=window,zn=sc.document,Vi=zn.documentElement,si=Ja("div")||{style:{}},Ja("div"),Wt=Ki(Wt),Ce=Wt+"Origin",si.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zu=!!Ki("perspective"),Ao=Le.core.reverting,To=1)},cc=function(t){var e=t.ownerSVGElement,n=Ja("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Vi.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Vi.removeChild(n),r},uc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Nu=function(t){var e,n;try{e=t.getBBox()}catch{e=cc(t),n=1}return e&&(e.width||e.height)||n||(e=cc(t)),e&&!e.width&&!e.x&&!e.y?{x:+uc(t,["x","cx","x1"])||0,y:+uc(t,["y","cy","y1"])||0,width:0,height:0}:e},Uu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Nu(t))},_i=function(t,e){if(e){var n=t.style,i;e in Dn&&e!==Ce&&(e=Wt),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Eo,"-$1").toLowerCase())):n.removeAttribute(e)}},Nn=function(t,e,n,i,r,a){var s=new Ee(t._pt,e,n,0,1,a?Iu:Ru);return t._pt=s,s.b=i,s.e=r,t._props.push(n),s},hc={deg:1,rad:1,turn:1},w0={grid:1,flex:1},Gn=function o(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",s=si.style,c=h0.test(e),l=t.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;if(i===a||!r||hc[i]||hc[a])return r;if(a!=="px"&&!f&&(r=o(t,e,n,"px")),_=t.getCTM&&Uu(t),(m||a==="%")&&(Dn[e]||~e.indexOf("adius")))return g=_?t.getBBox()[c?"width":"height"]:t[u],qt(m?r/g*h:r/100*g);if(s[c?"width":"height"]=h+(f?a:i),d=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!l?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===zn||!d.appendChild)&&(d=zn.body),p=d._gsap,p&&m&&p.width&&c&&p.time===Ne.time&&!p.uncache)return qt(r/p.width*h);if(m&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+i,g=t[u],M?t.style[e]=M:_i(t,e)}else(m||a==="%")&&!w0[Ke(d,"display")]&&(s.position=Ke(t,"position")),d===t&&(s.position="static"),d.appendChild(si),g=si[u],d.removeChild(si),s.position="absolute";return c&&m&&(p=li(d),p.time=Ne.time,p.width=d[u]),qt(f?g*r/h:g&&r?h/g*r:0)},An=function(t,e,n,i){var r;return To||Ka(),e in pn&&e!=="transform"&&(e=pn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Dn[e]&&e!=="transform"?(r=Ir(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:bs(Ke(t,Ce))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ms[e]&&Ms[e](t,e,n)||Ke(t,e)||tu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gn(t,e,r,n)+n:r},T0=function(t,e,n,i){if(!n||n==="none"){var r=Ki(e,t,1),a=r&&Ke(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Ke(t,"borderTopColor"))}var s=new Ee(this._pt,t.style,e,0,1,Lu),c=0,l=0,u,h,f,m,g,d,p,_,M,y,b,v;if(s.b=n,s.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ke(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(d=t.style[e],t.style[e]=i,i=Ke(t,e)||i,d?t.style[e]=d:_i(t,e)),u=[n,i],vu(u),n=u[0],i=u[1],f=n.match(zi)||[],v=i.match(zi)||[],v.length){for(;h=zi.exec(i);)p=h[0],M=i.substring(c,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),p!==(d=f[l++]||"")&&(m=parseFloat(d)||0,b=d.substr((m+"").length),p.charAt(1)==="="&&(p=Bi(m,p)+b),_=parseFloat(p),y=p.substr((_+"").length),c=zi.lastIndex-y.length,y||(y=y||Ve.units[e]||b,c===i.length&&(i+=y,s.e+=y)),b!==y&&(m=Gn(t,e,d,y)||0),s._pt={_next:s._pt,p:M||l===1?M:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});s.c=c<i.length?i.substring(c,i.length):""}else s.r=e==="display"&&i==="none"?Iu:Ru;return Yc.test(i)&&(s.e=0),this._pt=s,s},dc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},A0=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=dc[n]||n,e[1]=dc[i]||i,e.join(" ")},E0=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,s,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)s=r[l],Dn[s]&&(c=1,s=s==="transformOrigin"?Ce:Wt),_i(n,s);c&&(_i(n,Wt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ir(n,1),a.uncache=1,Fu(i)))}},Ms={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new Ee(t._pt,e,n,0,0,E0);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},Rr=[1,0,0,1,0,0],ku={},Bu=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},fc=function(t){var e=Ke(t,Wt);return Bu(e)?Rr:e.substr(7).match($c).map(qt)},Co=function(t,e){var n=t._gsap||li(t),i=t.style,r=fc(t),a,s,c,l;return n.svg&&t.getAttribute("transform")?(c=t.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Rr:r):(r===Rr&&!t.offsetParent&&t!==Vi&&!n.svg&&(c=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,s=t.nextElementSibling,Vi.appendChild(t)),r=fc(t),c?i.display=c:_i(t,"display"),l&&(s?a.insertBefore(t,s):a?a.appendChild(t):Vi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Qa=function(t,e,n,i,r,a){var s=t._gsap,c=r||Co(t,!0),l=s.xOrigin||0,u=s.yOrigin||0,h=s.xOffset||0,f=s.yOffset||0,m=c[0],g=c[1],d=c[2],p=c[3],_=c[4],M=c[5],y=e.split(" "),b=parseFloat(y[0])||0,v=parseFloat(y[1])||0,E,C,x,w;n?c!==Rr&&(C=m*p-g*d)&&(x=b*(p/C)+v*(-d/C)+(d*M-p*_)/C,w=b*(-g/C)+v*(m/C)-(m*M-g*_)/C,b=x,v=w):(E=Nu(t),b=E.x+(~y[0].indexOf("%")?b/100*E.width:b),v=E.y+(~(y[1]||y[0]).indexOf("%")?v/100*E.height:v)),i||i!==!1&&s.smooth?(_=b-l,M=v-u,s.xOffset=h+(_*m+M*d)-_,s.yOffset=f+(_*g+M*p)-M):s.xOffset=s.yOffset=0,s.xOrigin=b,s.yOrigin=v,s.smooth=!!i,s.origin=e,s.originIsAbsolute=!!n,t.style[Ce]="0px 0px",a&&(Nn(a,s,"xOrigin",l,b),Nn(a,s,"yOrigin",u,v),Nn(a,s,"xOffset",h,s.xOffset),Nn(a,s,"yOffset",f,s.yOffset)),t.setAttribute("data-svg-origin",b+" "+v)},Ir=function(t,e){var n=t._gsap||new Su(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",s="deg",c=getComputedStyle(t),l=Ke(t,Ce)||"0",u,h,f,m,g,d,p,_,M,y,b,v,E,C,x,w,L,z,G,R,P,N,q,j,B,et,Z,U,k,J,K,it;return u=h=f=d=p=_=M=y=b=0,m=g=1,n.svg=!!(t.getCTM&&Uu(t)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[Wt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Wt]!=="none"?c[Wt]:"")),i.scale=i.rotate=i.translate="none"),C=Co(t,n.svg),n.svg&&(n.uncache?(B=t.getBBox(),l=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",j=""):j=!e&&t.getAttribute("data-svg-origin"),Qa(t,j||l,!!j||n.originIsAbsolute,n.smooth!==!1,C)),v=n.xOrigin||0,E=n.yOrigin||0,C!==Rr&&(z=C[0],G=C[1],R=C[2],P=C[3],u=N=C[4],h=q=C[5],C.length===6?(m=Math.sqrt(z*z+G*G),g=Math.sqrt(P*P+R*R),d=z||G?Ii(G,z)*ei:0,M=R||P?Ii(R,P)*ei+d:0,M&&(g*=Math.abs(Math.cos(M*Gi))),n.svg&&(u-=v-(v*z+E*R),h-=E-(v*G+E*P))):(it=C[6],J=C[7],Z=C[8],U=C[9],k=C[10],K=C[11],u=C[12],h=C[13],f=C[14],x=Ii(it,k),p=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),j=N*w+Z*L,B=q*w+U*L,et=it*w+k*L,Z=N*-L+Z*w,U=q*-L+U*w,k=it*-L+k*w,K=J*-L+K*w,N=j,q=B,it=et),x=Ii(-R,k),_=x*ei,x&&(w=Math.cos(-x),L=Math.sin(-x),j=z*w-Z*L,B=G*w-U*L,et=R*w-k*L,K=P*L+K*w,z=j,G=B,R=et),x=Ii(G,z),d=x*ei,x&&(w=Math.cos(x),L=Math.sin(x),j=z*w+G*L,B=N*w+q*L,G=G*w-z*L,q=q*w-N*L,z=j,N=B),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=qt(Math.sqrt(z*z+G*G+R*R)),g=qt(Math.sqrt(q*q+it*it)),x=Ii(N,q),M=Math.abs(x)>2e-4?x*ei:0,b=K?1/(K<0?-K:K):0),n.svg&&(j=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Bu(Ke(t,Wt)),j&&t.setAttribute("transform",j))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(m*=-1,M+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=qt(m),n.scaleY=qt(g),n.rotation=qt(d)+s,n.rotationX=qt(p)+s,n.rotationY=qt(_)+s,n.skewX=M+s,n.skewY=y+s,n.transformPerspective=b+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Ce]=bs(l)),n.xOffset=n.yOffset=0,n.force3D=Ve.force3D,n.renderTransform=n.svg?L0:zu?Vu:C0,n.uncache=0,n},bs=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ea=function(t,e,n){var i=pe(e);return qt(parseFloat(e)+parseFloat(Gn(t,"x",n+"px",i)))+i},C0=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Vu(t,e)},Jn="0deg",fr="0px",Kn=") ",Vu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,M=n.target,y=n.zOrigin,b="",v=_==="auto"&&t&&t!==1||_===!0;if(y&&(h!==Jn||u!==Jn)){var E=parseFloat(u)*Gi,C=Math.sin(E),x=Math.cos(E),w;E=parseFloat(h)*Gi,w=Math.cos(E),a=Ea(M,a,C*w*-y),s=Ea(M,s,-Math.sin(E)*-y),c=Ea(M,c,x*w*-y+y)}p!==fr&&(b+="perspective("+p+Kn),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(v||a!==fr||s!==fr||c!==fr)&&(b+=c!==fr||v?"translate3d("+a+", "+s+", "+c+") ":"translate("+a+", "+s+Kn),l!==Jn&&(b+="rotate("+l+Kn),u!==Jn&&(b+="rotateY("+u+Kn),h!==Jn&&(b+="rotateX("+h+Kn),(f!==Jn||m!==Jn)&&(b+="skew("+f+", "+m+Kn),(g!==1||d!==1)&&(b+="scale("+g+", "+d+Kn),M.style[Wt]=b||"translate(0, 0)"},L0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,s=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,M=n.forceCSS,y=parseFloat(a),b=parseFloat(s),v,E,C,x,w;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Gi,l*=Gi,v=Math.cos(c)*h,E=Math.sin(c)*h,C=Math.sin(c-l)*-f,x=Math.cos(c-l)*f,l&&(u*=Gi,w=Math.tan(l-u),w=Math.sqrt(1+w*w),C*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),v*=w,E*=w)),v=qt(v),E=qt(E),C=qt(C),x=qt(x)):(v=h,x=f,E=C=0),(y&&!~(a+"").indexOf("px")||b&&!~(s+"").indexOf("px"))&&(y=Gn(m,"x",a,"px"),b=Gn(m,"y",s,"px")),(g||d||p||_)&&(y=qt(y+g-(g*v+d*C)+p),b=qt(b+d-(g*E+d*x)+_)),(i||r)&&(w=m.getBBox(),y=qt(y+i/100*w.width),b=qt(b+r/100*w.height)),w="matrix("+v+","+E+","+C+","+x+","+y+","+b+")",m.setAttribute("transform",w),M&&(m.style[Wt]=w)},D0=function(t,e,n,i,r){var a=360,s=le(r),c=parseFloat(r)*(s&&~r.indexOf("rad")?ei:1),l=c-i,u=i+l+"deg",h,f;return s&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*oc)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*oc)%a-~~(l/a)*a)),t._pt=f=new Ee(t._pt,e,n,i,l,f0),f.e=u,f.u="deg",t._props.push(n),f},pc=function(t,e){for(var n in e)t[n]=e[n];return t},P0=function(t,e,n){var i=pc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,s,c,l,u,h,f,m,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[Wt]=e,s=Ir(n,1),_i(n,Wt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Wt],a[Wt]=e,s=Ir(n,1),a[Wt]=l);for(c in Dn)l=i[c],u=s[c],l!==u&&r.indexOf(c)<0&&(m=pe(l),g=pe(u),h=m!==g?Gn(n,c,l,g):parseFloat(l),f=parseFloat(u),t._pt=new Ee(t._pt,s,c,h,f-h,Za),t._pt.u=g||0,t._props.push(c));pc(s,i)};Ae("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(s){return t<2?o+s:"border"+s+o});Ms[t>1?"border"+o:o]=function(s,c,l,u,h){var f,m;if(arguments.length<4)return f=a.map(function(g){return An(s,g,l)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},a.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),s.init(c,m,h)}});var Gu={name:"css",register:Ka,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,s=t.style,c=n.vars.startAt,l,u,h,f,m,g,d,p,_,M,y,b,v,E,C,x;To||Ka(),this.styles=this.styles||Ou(t),x=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Oe[d]&&wu(d,e,n,i,t,r)))){if(m=typeof u,g=Ms[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Lr(u)),g)g(this,t,d,u,n)&&(C=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Bn.lastIndex=0,Bn.test(l)||(p=pe(l),_=pe(u)),_?p!==_&&(l=Gn(t,d,l,_)+_):p&&(u+=p),this.add(s,"setProperty",l,u,i,r,0,0,d),a.push(d),x.push(d,0,s[d]);else if(m!=="undefined"){if(c&&d in c?(l=typeof c[d]=="function"?c[d].call(n,i,t,r):c[d],le(l)&&~l.indexOf("random(")&&(l=Lr(l)),pe(l+"")||l==="auto"||(l+=Ve.units[d]||pe(An(t,d))||""),(l+"").charAt(1)==="="&&(l=An(t,d))):l=An(t,d),f=parseFloat(l),M=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),d in pn&&(d==="autoAlpha"&&(f===1&&An(t,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,s.visibility),Nn(this,s,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=pn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in Dn,y){if(this.styles.save(d),m==="string"&&u.substring(0,6)==="var(--"&&(u=Ke(t,u.substring(4,u.indexOf(")"))),h=parseFloat(u)),b||(v=t._gsap,v.renderTransform&&!e.parseTransform||Ir(t,e.parseTransform),E=e.smoothOrigin!==!1&&v.smooth,b=this._pt=new Ee(this._pt,s,Wt,0,1,v.renderTransform,v,0,-1),b.dep=1),d==="scale")this._pt=new Ee(this._pt,v,"scaleY",v.scaleY,(M?Bi(v.scaleY,M+h):h)-v.scaleY||0,Za),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(Ce,0,s[Ce]),u=A0(u),v.svg?Qa(t,u,0,E,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==v.zOrigin&&Nn(this,v,"zOrigin",v.zOrigin,_),Nn(this,s,d,bs(l),bs(u)));continue}else if(d==="svgOrigin"){Qa(t,u,1,E,0,this);continue}else if(d in ku){D0(this,v,d,f,M?Bi(f,M+u):u);continue}else if(d==="smoothOrigin"){Nn(this,v,"smooth",v.smooth,u);continue}else if(d==="force3D"){v[d]=u;continue}else if(d==="transform"){P0(this,u,t);continue}}else d in s||(d=Ki(d)||d);if(y||(h||h===0)&&(f||f===0)&&!d0.test(u)&&d in s)p=(l+"").substr((f+"").length),h||(h=0),_=pe(u)||(d in Ve.units?Ve.units[d]:p),p!==_&&(f=Gn(t,d,l,_)),this._pt=new Ee(this._pt,y?v:s,d,f,(M?Bi(f,M+h):h)-f,!y&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?m0:Za),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=l,this._pt.r=p0);else if(d in s)T0.call(this,t,d,l,M?M+u:u);else if(d in t)this.add(t,d,l||t[d],M?M+u:u,i,r);else if(d!=="parseTransform"){mo(d,u);continue}y||(d in s?x.push(d,0,s[d]):typeof t[d]=="function"?x.push(d,2,t[d]()):x.push(d,1,l||t[d])),a.push(d)}}C&&Du(this)},render:function(t,e){if(e.tween._time||!Ao())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:An,aliases:pn,getSetter:function(t,e,n){var i=pn[e];return i&&i.indexOf(",")<0&&(e=i),e in Dn&&e!==Ce&&(t._gsap.x||An(t,"x"))?n&&ac===n?e==="scale"?v0:x0:(ac=n||{})&&(e==="scale"?y0:M0):t.style&&!ho(t.style[e])?g0:~e.indexOf("-")?_0:So(t,e)},core:{_removeProperty:_i,_getMatrix:Co}};Le.utils.checkPrefix=Ki;Le.core.getStyleSaver=Ou;(function(o,t,e,n){var i=Ae(o+","+t+","+e,function(r){Dn[r]=1});Ae(t,function(r){Ve.units[r]="deg",ku[r]=1}),pn[i[13]]=o+","+t,Ae(n,function(r){var a=r.split(":");pn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ae("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ve.units[o]="px"});Le.registerPlugin(Gu);var Hu=Le.registerPlugin(Gu)||Le;Hu.core.Tween;const R0=new co,to={materialColor:"#ffeded"},I0=document.querySelector("canvas.webgl"),kr=new Yg,F0=new t_,Wu=F0.load("/textures/gradients/5.jpg");Wu.magFilter=fe;const Ps=new Zg({color:to.materialColor,gradientMap:Wu}),Rs=new ln(new lo(.8,.4,32),Ps),Is=new ln(new oo(1,2,32),Ps),Fs=new ln(new ir(1,1,1),Ps);Rs.position.x=2;Is.position.x=-2;Fs.position.x=2;const Os=4;Rs.position.y=-Os*0;Is.position.y=-Os*1;Fs.position.y=-Os*2;kr.add(Rs,Is,Fs);const Xu=[Rs,Is,Fs],Lo=3e3,ps=new Float32Array(Lo*3),ms=new Float32Array(Lo*3);for(let o=0;o<Lo;o++){const t=o*3;ps[t+0]=(Math.random()-.5)*10,ps[t+1]=(Math.random()-.5)*20,ps[t+2]=(Math.random()-.5)*10,ms[t+0]=Math.random(),ms[t+1]=Math.random(),ms[t+2]=Math.random()}const Do=new cn;Do.setAttribute("position",new tn(ps,3));Do.setAttribute("color",new tn(ms,3));const O0=new Gc({size:.04,sizeAttenuation:!0,vertexColors:!0}),z0=new jg(Do,O0);kr.add(z0);const qu=new r_("#f5ededff",1);qu.position.set(1,1,0);kr.add(qu);R0.addColor(to,"materialColor").onChange(()=>{Ps.color.set(to.materialColor)});const Se={width:window.innerWidth,height:window.innerHeight};let Po=window.scrollY;window.addEventListener("scroll",()=>{Po=window.scrollY});const Ss={x:0,y:0};window.addEventListener("mousemove",o=>{Ss.x=o.clientX/Se.width-.5,Ss.y=o.clientY/Se.height-.5});window.addEventListener("resize",()=>{Se.width=window.innerWidth,Se.height=window.innerHeight,Qi.aspect=Se.width/Se.height,Qi.updateProjectionMatrix(),tr.setSize(Se.width,Se.height),tr.setPixelRatio(Math.min(window.devicePixelRatio,2))});const ws=new gr;kr.add(ws);const Qi=new je(35,Se.width/Se.height,.1,100);Qi.position.z=6;ws.add(Qi);const tr=new Vc({canvas:I0,alpha:!0});tr.setSize(Se.width,Se.height);tr.setPixelRatio(Math.min(window.devicePixelRatio,2));tr.setClearAlpha(0);let Ca=0;window.addEventListener("scroll",()=>{const o=Math.round(Po/Se.height);o!=Ca&&(Ca=o,Hu.to(Xu[Ca].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=1.5"}))});const N0=new s_,$u=()=>{const o=N0.getElapsedTime();for(const n of Xu)n.rotation.x=o*.1,n.rotation.z=o*.12;Qi.position.y=-Po/Se.height*Os;const t=Ss.x*.5,e=-Ss.y*.5;ws.position.x=t,ws.position.y=e,tr.render(kr,Qi),window.requestAnimationFrame($u)};$u();
//# sourceMappingURL=index-01dd40bc.js.map
