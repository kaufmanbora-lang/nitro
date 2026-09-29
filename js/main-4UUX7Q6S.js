var hf=0,yh=1,uf=2;var ws=1,df=2,wr=3,ai=0,Xt=1,St=2,oi=0,qi=1,Sr=2,_h=3,Mh=4,ff=5;var Ss=100,pf=101,mf=102,gf=103,bf=104,xf=200,vf=201,yf=202,_f=203,wh=204,Sh=205,Mf=206,wf=207,Sf=208,Ef=209,Tf=210,Af=211,Rf=212,Cf=213,Pf=214,Co=0,Po=1,Io=2,or=3,Lo=4,Do=5,Fo=6,No=7,tc=0,If=1,Lf=2,mn=0,Eh=1,Th=2,Ah=3,Ea=4,Rh=5,Ch=6,Ph=7,uh="attached",Df="detached",Ih=300,Xi=301,Es=302,nc=303,ic=304,Ta=306,Vn=1e3,Cn=1001,cr=1002,Nt=1003,sc=1004;var Ts=1005;var Ut=1006,Er=1007;var gn=1008;var xn=1009,Lh=1010,Dh=1011,Tr=1012,rc=1013,Xn=1014,_n=1015,Mn=1016,ac=1017,oc=1018,Ar=1020,Fh=35902,Nh=35899,Uh=1021,kh=1022,wn=1023,ei=1026,ji=1027,cc=1028,lc=1029,Ki=1030,hc=1031;var uc=1033,Aa=33776,Ra=33777,Ca=33778,Pa=33779,dc=35840,fc=35841,pc=35842,mc=35843,gc=36196,bc=37492,xc=37496,vc=37488,yc=37489,Ia=37490,_c=37491,Mc=37808,wc=37809,Sc=37810,Ec=37811,Tc=37812,Ac=37813,Rc=37814,Cc=37815,Pc=37816,Ic=37817,Lc=37818,Dc=37819,Fc=37820,Nc=37821,Uc=36492,kc=36494,Oc=36495,Bc=36283,zc=36284,La=36285,Hc=36286,Ff=2200,Nf=2201,Uf=2202,ls=2300,hs=2301,To=2302,dh=2303,as=2400,os=2401,ia=2402,Gc=2500,kf=2501,Oh=0,Da=1,Rr=2,Of=3200;var Fa=0,Bf=1,In="",vt="srgb",pn="srgb-linear",sa="linear",mt="srgb";var Ao=7680;var zf=519,Hf=512,Gf=513,Vf=514,Vc=515,Wf=516,qf=517,Wc=518,Xf=519,Bh=35044,Ln=35048;var zh="300 es",Hn=2e3,lr=2001;function d0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function f0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function hr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function jf(){let r=hr("canvas");return r.style.display="block",r}var Sd={},ur=null;function ra(...r){let e="THREE."+r.shift();ur?ur("log",e,...r):console.log(e,...r)}function Kf(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ue(...r){r=Kf(r);let e="THREE."+r.shift();if(ur)ur("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function qe(...r){r=Kf(r);let e="THREE."+r.shift();if(ur)ur("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function cs(...r){let e=r.join(" ");e in Sd||(Sd[e]=!0,Ue(...r))}function Yf(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var $f={[Co]:Po,[Io]:Fo,[Lo]:No,[or]:Do,[Po]:Co,[Fo]:Io,[No]:Lo,[Do]:or},Wn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ed=1234567,ta=Math.PI/180,us=180/Math.PI;function Gn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[r&255]+sn[r>>8&255]+sn[r>>16&255]+sn[r>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Hh(r,e){return(r%e+e)%e}function p0(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function m0(r,e,t){return r!==e?(t-r)/(e-r):0}function na(r,e,t){return(1-t)*r+t*e}function g0(r,e,t,n){return na(r,e,1-Math.exp(-t*n))}function b0(r,e=1){return e-Math.abs(Hh(r,e*2)-e)}function x0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function v0(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function y0(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _0(r,e){return r+Math.random()*(e-r)}function M0(r){return r*(.5-Math.random())}function w0(r){r!==void 0&&(Ed=r);let e=Ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function S0(r){return r*ta}function E0(r){return r*us}function T0(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function A0(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function R0(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function C0(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*f,o*h,o*l);break;default:Ue("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ci={DEG2RAD:ta,RAD2DEG:us,generateUUID:Gn,clamp:nt,euclideanModulo:Hh,mapLinear:p0,inverseLerp:m0,lerp:na,damp:g0,pingpong:b0,smoothstep:x0,smootherstep:v0,randInt:y0,randFloat:_0,randFloatSpread:M0,seededRandom:w0,degToRad:S0,radToDeg:E0,isPowerOfTwo:T0,ceilPowerOfTwo:A0,floorPowerOfTwo:R0,setQuaternionFromProperEuler:C0,normalize:gt,denormalize:zn},Xh=class Xh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Xh.prototype.isVector2=!0;var Ne=Xh,wt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(u!==b||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o;let y=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=y,l*=y,h*=y,u*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jh=class jh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Td.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jh.prototype.isVector3=!0;var D=jh,zl=new D,Td=new wt,Kh=class Kh{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],y=i[1],S=i[4],_=i[7],M=i[2],x=i[5],T=i[8];return s[0]=a*b+o*y+c*M,s[3]=a*g+o*S+c*x,s[6]=a*p+o*_+c*T,s[1]=l*b+h*y+u*M,s[4]=l*g+h*S+u*x,s[7]=l*p+h*_+u*T,s[2]=d*b+f*y+m*M,s[5]=d*g+f*S+m*x,s[8]=d*p+f*_+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,t)),this}rotate(e){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,t){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kh.prototype.isMatrix3=!0;var je=Kh,Hl=new je,Ad=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P0(){let r={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=vi(i.r),i.g=vi(i.g),i.b=vi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===In?sa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[pn]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),r}var et=P0();function vi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ar(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Gs,Uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=hr("canvas")),Gs.width=e.width,Gs.height=e.height;let i=Gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=vi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vi(t[n]/255)*255):t[n]=vi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},I0=0,dr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Gl(i[a].image)):s.push(Gl(i[a]))}else s=Gl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Gl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}var L0=0,Vl=new D,Wt=class r extends Wn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Cn,i=Cn,s=Ut,a=gn,o=wn,c=xn,l=r.DEFAULT_ANISOTROPY,h=In){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Gn(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ue(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ih)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vn:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vn:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=Ih;Wt.DEFAULT_ANISOTROPY=1;var Yh=class Yh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,_=(f+1)/2,M=(p+1)/2,x=(h+d)/4,T=(u+b)/4,v=(m+g)/4;return S>_&&S>M?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=x/n,s=T/n):_>M?_<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(_),n=x/i,s=v/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=v/s),this.set(n,i,s,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-b)/y,this.z=(d-h)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yh.prototype.isVector4=!0;var ut=Yh,ko=class extends Wn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new Wt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new dr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends ko{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},aa=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Oo=class extends Wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ec=class ec{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),a=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D0,e,F0)}lookAt(e,t,n){let i=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(n,vn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(n,vn)),Ui.normalize(),Ja.crossVectors(vn,Ui),i[0]=Ui.x,i[4]=Ja.x,i[8]=vn.x,i[1]=Ui.y,i[5]=Ja.y,i[9]=vn.y,i[2]=Ui.z,i[6]=Ja.z,i[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],y=n[3],S=n[7],_=n[11],M=n[15],x=i[0],T=i[4],v=i[8],E=i[12],R=i[1],P=i[5],L=i[9],B=i[13],N=i[2],U=i[6],Q=i[10],F=i[14],j=i[3],V=i[7],O=i[11],$=i[15];return s[0]=a*x+o*R+c*N+l*j,s[4]=a*T+o*P+c*U+l*V,s[8]=a*v+o*L+c*Q+l*O,s[12]=a*E+o*B+c*F+l*$,s[1]=h*x+u*R+d*N+f*j,s[5]=h*T+u*P+d*U+f*V,s[9]=h*v+u*L+d*Q+f*O,s[13]=h*E+u*B+d*F+f*$,s[2]=m*x+b*R+g*N+p*j,s[6]=m*T+b*P+g*U+p*V,s[10]=m*v+b*L+g*Q+p*O,s[14]=m*E+b*B+g*F+p*$,s[3]=y*x+S*R+_*N+M*j,s[7]=y*T+S*P+_*U+M*V,s[11]=y*v+S*L+_*Q+M*O,s[15]=y*E+S*B+_*F+M*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],y=c*f-l*d,S=o*f-l*u,_=o*d-c*u,M=a*f-l*h,x=a*d-c*h,T=a*u-o*h;return t*(b*y-g*S+p*_)-n*(m*y-g*M+p*x)+i*(m*S-b*M+p*T)-s*(m*_-b*x+g*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],y=t*o-n*a,S=t*c-i*a,_=t*l-s*a,M=n*c-i*o,x=n*l-s*o,T=i*l-s*c,v=h*b-u*m,E=h*g-d*m,R=h*p-f*m,P=u*g-d*b,L=u*p-f*b,B=d*p-f*g,N=y*B-S*L+_*P+M*R-x*E+T*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/N;return e[0]=(o*B-c*L+l*P)*U,e[1]=(i*L-n*B-s*P)*U,e[2]=(b*T-g*x+p*M)*U,e[3]=(d*x-u*T-f*M)*U,e[4]=(c*R-a*B-l*E)*U,e[5]=(t*B-i*R+s*E)*U,e[6]=(g*_-m*T-p*S)*U,e[7]=(h*T-d*_+f*S)*U,e[8]=(a*L-o*R+l*v)*U,e[9]=(n*R-t*L-s*v)*U,e[10]=(m*x-b*_+p*y)*U,e[11]=(u*_-h*x-f*y)*U,e[12]=(o*E-a*P-c*v)*U,e[13]=(t*P-n*E+i*v)*U,e[14]=(b*S-m*M-g*y)*U,e[15]=(h*M-u*S+d*y)*U,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,m=s*u,b=a*h,g=a*u,p=o*u,y=c*l,S=c*h,_=c*u,M=n.x,x=n.y,T=n.z;return i[0]=(1-(b+p))*M,i[1]=(f+_)*M,i[2]=(m-S)*M,i[3]=0,i[4]=(f-_)*x,i[5]=(1-(d+p))*x,i[6]=(g+y)*x,i[7]=0,i[8]=(m+S)*T,i[9]=(g-y)*T,i[10]=(1-(d+b))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Vs.set(i[0],i[1],i[2]).length(),o=Vs.set(i[4],i[5],i[6]).length(),c=Vs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Un.copy(this);let l=1/a,h=1/o,u=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=h,Un.elements[5]*=h,Un.elements[6]*=h,Un.elements[8]*=u,Un.elements[9]*=u,Un.elements[10]*=u,t.setFromRotationMatrix(Un),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=Hn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,b;if(c)m=s/(a-s),b=a*s/(a-s);else if(o===Hn)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===lr)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Hn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,b;if(c)m=1/(a-s),b=a/(a-s);else if(o===Hn)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===lr)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ec.prototype.isMatrix4=!0;var Re=ec,Vs=new D,Un=new Re,D0=new D(0,0,0),F0=new D(1,1,1),Ui=new D,Ja=new D,vn=new D,Cd=new Re,Pd=new wt,on=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var oa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},N0=0,Id=new D,Ws=new wt,di=new Re,Za=new D,Wr=new D,U0=new D,k0=new wt,Ld=new D(1,0,0),Dd=new D(0,1,0),Fd=new D(0,0,1),Nd={type:"added"},O0={type:"removed"},qs={type:"childadded",child:null},Wl={type:"childremoved",child:null},Ct=class r extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new D,t=new on,n=new wt,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Re},normalMatrix:{value:new je}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,t){return Ws.setFromAxisAngle(e,t),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Dd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Dd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Wr,Za,this.up):di.lookAt(Za,Wr,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Ws.setFromRotationMatrix(di),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),qs.child=e,this.dispatchEvent(qs),qs.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O0),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,U0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,k0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new D(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},B0={type:"move"},fr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(B0)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Jf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function ql(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Hh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ql(a,s,e+1/3),this.g=ql(a,s,e),this.b=ql(a,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ue("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=Jf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return et.workingToColorSpace(rn.copy(this),e),Math.round(nt(rn.r*255,0,255))*65536+Math.round(nt(rn.g*255,0,255))*256+Math.round(nt(rn.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(rn.copy(this),t);let n=rn.r,i=rn.g,s=rn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=vt){et.workingToColorSpace(rn.copy(this),e);let t=rn.r,n=rn.g,i=rn.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(Qa);let n=na(ki.h,Qa.h,t),i=na(ki.s,Qa.s,t),s=na(ki.l,Qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new ye;ye.NAMES=Jf;var ca=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yi=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},kn=new D,fi=new D,Xl=new D,pi=new D,Xs=new D,js=new D,Ud=new D,jl=new D,Kl=new D,Yl=new D,$l=new ut,Jl=new ut,Zl=new ut,xi=class r{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),kn.subVectors(e,t),i.cross(kn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){kn.subVectors(i,t),fi.subVectors(n,t),Xl.subVectors(e,t);let a=kn.dot(kn),o=kn.dot(fi),c=kn.dot(Xl),l=fi.dot(fi),h=fi.dot(Xl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return $l.setScalar(0),Jl.setScalar(0),Zl.setScalar(0),$l.fromBufferAttribute(e,t),Jl.fromBufferAttribute(e,n),Zl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(Jl,s.y),a.addScaledVector(Zl,s.z),a}static isFrontFacing(e,t,n,i){return kn.subVectors(n,t),fi.subVectors(e,t),kn.cross(fi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),kn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Xs.subVectors(i,n),js.subVectors(s,n),jl.subVectors(e,n);let c=Xs.dot(jl),l=js.dot(jl);if(c<=0&&l<=0)return t.copy(n);Kl.subVectors(e,i);let h=Xs.dot(Kl),u=js.dot(Kl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Xs,a);Yl.subVectors(e,s);let f=Xs.dot(Yl),m=js.dot(Yl);if(m>=0&&f<=m)return t.copy(s);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(js,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Ud.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Ud,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Xs,a).addScaledVector(js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qt=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),eo.copy(n.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),to.subVectors(this.max,qr),Ks.subVectors(e.a,qr),Ys.subVectors(e.b,qr),$s.subVectors(e.c,qr),Oi.subVectors(Ys,Ks),Bi.subVectors($s,Ys),ns.subVectors(Ks,$s);let t=[0,-Oi.z,Oi.y,0,-Bi.z,Bi.y,0,-ns.z,ns.y,Oi.z,0,-Oi.x,Bi.z,0,-Bi.x,ns.z,0,-ns.x,-Oi.y,Oi.x,0,-Bi.y,Bi.x,0,-ns.y,ns.x,0];return!Ql(t,Ks,Ys,$s,to)||(t=[1,0,0,0,1,0,0,0,1],!Ql(t,Ks,Ys,$s,to))?!1:(no.crossVectors(Oi,Bi),t=[no.x,no.y,no.z],Ql(t,Ks,Ys,$s,to))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},mi=[new D,new D,new D,new D,new D,new D,new D,new D],On=new D,eo=new qt,Ks=new D,Ys=new D,$s=new D,Oi=new D,Bi=new D,ns=new D,qr=new D,to=new D,no=new D,is=new D;function Ql(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){is.fromArray(r,s);let o=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var zt=new D,io=new Ne,z0=0,Ke=class extends Wn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)io.fromBufferAttribute(this,t),io.applyMatrix3(e),this.setXY(t,io.x,io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ds=class extends Ke{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fs=class extends Ke{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Ke{constructor(e,t,n){super(new Float32Array(e),t,n)}},H0=new qt,Xr=new D,eh=new D,cn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):H0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Xr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(eh)),this.expandByPoint(Xr.copy(e.center).sub(eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},G0=0,Rn=new Re,th=new Ct,Js=new D,yn=new qt,jr=new qt,$t=new D,it=class r extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d0(e)?fs:ds)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,t,n){return Rn.makeTranslation(e,t,n),this.applyMatrix4(Rn),this}scale(e,t,n){return Rn.makeScale(e,t,n),this.applyMatrix4(Rn),this}lookAt(e){return th.lookAt(e),th.updateMatrix(),this.applyMatrix4(th.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];yn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];jr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(yn.min,jr.min),yn.expandByPoint($t),$t.addVectors(yn.max,jr.max),yn.expandByPoint($t)):(yn.expandByPoint(jr.min),yn.expandByPoint(jr.max))}yn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared($t));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$t.fromBufferAttribute(o,l),c&&(Js.fromBufferAttribute(e,l),$t.add(Js)),i=Math.max(i,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let v=0;v<n.count;v++)o[v]=new D,c[v]=new D;let l=new D,h=new D,u=new D,d=new Ne,f=new Ne,m=new Ne,b=new D,g=new D;function p(v,E,R){l.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),d.fromBufferAttribute(s,v),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[v].add(b),o[E].add(b),o[R].add(b),c[v].add(g),c[E].add(g),c[R].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,E=y.length;v<E;++v){let R=y[v],P=R.start,L=R.count;for(let B=P,N=P+L;B<N;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new D,_=new D,M=new D,x=new D;function T(v){M.fromBufferAttribute(i,v),x.copy(M);let E=o[v];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),_.crossVectors(x,E);let P=_.dot(c[v])<0?-1:1;a.setXYZW(v,S.x,S.y,S.z,P)}for(let v=0,E=y.length;v<E;++v){let R=y[v],P=R.start,L=R.count;for(let B=P,N=P+L;B<N;B+=3)T(e.getX(B+0)),T(e.getX(B+1)),T(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ke(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,s=new D,a=new D,o=new D,c=new D,l=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Ke(d,h,u)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ps=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},fn=new D,Gi=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ra("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ke(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ra("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},nh=new D,V0=new D,W0=new je,Bn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=nh.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(nh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||W0.getNormalMatrix(e),i=this.coplanarPoint(nh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},q0=0,ln=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=qi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Sh,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ao,this.stencilZFail=Ao,this.stencilZPass=Ao,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ue(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ue(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Bn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},pr=class extends ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Kr=new D,Qs=new D,er=new D,tr=new Ne,Yr=new Ne,Zf=new Re,so=new D,$r=new D,ro=new D,kd=new Ne,ih=new Ne,Od=new Ne,la=class extends Ct{constructor(e=new pr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new it;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ps(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Gi(n,3,0,!1)),Zs.setAttribute("uv",new Gi(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Ne(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&qe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),Zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;ao(so.set(-.5,-.5,0),er,a,Qs,i,s),ao($r.set(.5,-.5,0),er,a,Qs,i,s),ao(ro.set(.5,.5,0),er,a,Qs,i,s),kd.set(0,0),ih.set(1,0),Od.set(1,1);let o=e.ray.intersectTriangle(so,$r,ro,!1,Kr);if(o===null&&(ao($r.set(-.5,.5,0),er,a,Qs,i,s),ih.set(0,1),o=e.ray.intersectTriangle(so,ro,$r,!1,Kr),o===null))return;let c=e.ray.origin.distanceTo(Kr);c<e.near||c>e.far||t.push({distance:c,point:Kr.clone(),uv:xi.getInterpolation(Kr,so,$r,ro,kd,ih,Od,new Ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function ao(r,e,t,n,i,s){tr.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Yr.x=s*tr.x-i*tr.y,Yr.y=i*tr.x+s*tr.y):Yr.copy(tr),r.copy(e),r.x+=Yr.x,r.y+=Yr.y,r.applyMatrix4(Zf)}var gi=new D,sh=new D,oo=new D,co=new D,ms=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){sh.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),co.copy(this.origin).sub(sh);let s=e.distanceTo(t)*.5,a=-this.direction.dot(oo),o=co.dot(this.direction),c=-co.dot(oo),l=co.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(sh).addScaledVector(oo,d),f}intersectSphere(e,t){if(e.radius<0)return null;gi.subVectors(e.center,this.origin);let n=gi.dot(this.direction),i=gi.dot(gi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=n.x-a.x,y=n.y-a.y,S=n.z-a.z,_=Math.abs(c),M=Math.abs(l),x=Math.abs(h),T,v,E,R,P,L,B,N,U,Q,F,j;if(_>=M&&_>=x?(E=c,L=u,U=m,j=p,c>=0?(T=l,v=h,R=d,P=f,B=b,N=g,Q=y,F=S):(T=h,v=l,R=f,P=d,B=g,N=b,Q=S,F=y)):M>=x?(E=l,L=d,U=b,j=y,l>=0?(T=h,v=c,R=f,P=u,B=g,N=m,Q=S,F=p):(T=c,v=h,R=u,P=f,B=m,N=g,Q=p,F=S)):(E=h,L=f,U=g,j=S,h>=0?(T=c,v=l,R=u,P=d,B=m,N=b,Q=p,F=y):(T=l,v=c,R=d,P=u,B=b,N=m,Q=y,F=p)),E===0)return null;let V=T/E,O=v/E,$=1/E,I=R-V*L,G=P-O*L,ne=B-V*U,se=N-O*U,le=Q-V*j,q=F-O*j,W=le*se-q*ne,he=I*q-G*le,de=ne*G-se*I;if(i){if(W<0||he<0||de<0)return null}else if((W<0||he<0||de<0)&&(W>0||he>0||de>0))return null;let J=W+he+de;if(J===0)return null;let Se=$*(W*L+he*U+de*j);return(J>0?Se<0:Se>0)?null:this.at(Se/J,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Bd=new Re,ss=new ms,lo=new cn,zd=new D,ho=new D,uo=new D,fo=new D,rh=new D,po=new D,Hd=new D,mo=new D,Te=class extends Ct{constructor(e=new it,t=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(rh.fromBufferAttribute(u,e),a?po.addScaledVector(rh,h):po.addScaledVector(rh.sub(t),h))}t.add(po)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),ss.copy(e.ray).recast(e.near),!(lo.containsPoint(ss.origin)===!1&&(ss.intersectSphere(lo,zd)===null||ss.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(Bd.copy(s).invert(),ss.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&ss.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ss)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,M=S;_<M;_+=3){let x=o.getX(_),T=o.getX(_+1),v=o.getX(_+2);i=go(this,p,e,n,l,h,u,x,T,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let y=o.getX(g),S=o.getX(g+1),_=o.getX(g+2);i=go(this,a,e,n,l,h,u,y,S,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,M=S;_<M;_+=3){let x=_,T=_+1,v=_+2;i=go(this,p,e,n,l,h,u,x,T,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let y=g,S=g+1,_=g+2;i=go(this,a,e,n,l,h,u,y,S,_),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function X0(r,e,t,n,i,s,a,o){let c;if(e.side===Xt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===ai,o),c===null)return null;mo.copy(o),mo.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(mo);return l<t.near||l>t.far?null:{distance:l,point:mo.clone(),object:r}}function go(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ho),r.getVertexPosition(c,uo),r.getVertexPosition(l,fo);let h=X0(r,e,t,n,ho,uo,fo,Hd);if(h){let u=new D;xi.getBarycoord(Hd,ho,uo,fo,u),i&&(h.uv=xi.getInterpolatedAttribute(i,o,c,l,u,new Ne)),s&&(h.uv1=xi.getInterpolatedAttribute(s,o,c,l,u,new Ne)),a&&(h.normal=xi.getInterpolatedAttribute(a,o,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};xi.getNormal(ho,uo,fo,d.normal),h.face=d,h.barycoord=u}return h}var Jr=new ut,Gd=new ut,Vd=new ut,j0=new ut,Wd=new Re,bo=new D,ah=new cn,qd=new Re,oh=new ms,ha=class extends Te{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=uh,this.bindMatrix=new Re,this.bindMatrixInverse=new Re,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new qt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingBox.expandByPoint(bo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bo),this.boundingSphere.expandByPoint(bo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(i),e.ray.intersectsSphere(ah)!==!1&&(qd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(qd),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Df?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ue("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Gd.fromBufferAttribute(i.attributes.skinIndex,e),Vd.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Jr.copy(t),t.set(0,0,0,0)):(Jr.set(...t,1),t.set(0,0,0)),Jr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Vd.getComponent(s);if(a!==0){let o=Gd.getComponent(s);Wd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(j0.copy(Jr).applyMatrix4(Wd),a)}}return t.isVector4&&(t.w=Jr.w),t.applyMatrix4(this.bindMatrixInverse)}},mr=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},gr=class extends Wt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Nt,h=Nt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xd=new Re,K0=new Re,ua=class r{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ue("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Re)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Re;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:K0;Xd.multiplyMatrices(o,t[s]),Xd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new gr(t,e,e,wn,_n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(Ue("Skeleton: No bone found with UUID:",s),a=new mr),this.bones.push(a),this.boneInverses.push(new Re().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},It=class extends Ke{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new Re,jd=new Re,xo=[],Kd=new qt,Y0=new Re,Zr=new Te,Qr=new cn,en=class extends Te{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new It(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Y0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Kd.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(Kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),Qr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(Qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),e.ray.intersectsSphere(Qr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,nr),jd.multiplyMatrices(n,nr),Zr.matrixWorld=jd,Zr.raycast(e,xo);for(let a=0,o=xo.length;a<o;a++){let c=xo[a];c.instanceId=s,c.object=this,t.push(c)}xo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new It(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new gr(new Float32Array(i*this.count),i,this.count,cc,_n));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rs=new cn,$0=new Ne(.5,.5),vo=new D,Vi=class{constructor(e=new Bn,t=new Bn,n=new Bn,i=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hn,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],y=s[12],S=s[13],_=s[14],M=s[15];if(i[0].setComponents(l-a,f-h,p-m,M-y).normalize(),i[1].setComponents(l+a,f+h,p+m,M+y).normalize(),i[2].setComponents(l+o,f+u,p+b,M+S).normalize(),i[3].setComponents(l-o,f-u,p-b,M-S).normalize(),n)i[4].setComponents(c,d,g,_).normalize(),i[5].setComponents(l-c,f-d,p-g,M-_).normalize();else if(i[4].setComponents(l-c,f-d,p-g,M-_).normalize(),t===Hn)i[5].setComponents(l+c,f+d,p+g,M+_).normalize();else if(t===lr)i[5].setComponents(c,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);let t=$0.distanceTo(e.center);return rs.radius=.7071067811865476+t,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(vo.x=i.normal.x>0?e.max.x:e.min.x,vo.y=i.normal.y>0?e.max.y:e.min.y,vo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var br=class extends ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Bo=new D,zo=new D,Yd=new Re,ea=new ms,yo=new cn,ch=new D,$d=new D,gs=class extends Ct{constructor(e=new it,t=new br){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Bo.fromBufferAttribute(t,i-1),zo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Bo.distanceTo(zo);e.setAttribute("lineDistance",new ot(n,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,e.ray.intersectsSphere(yo)===!1)return;Yd.copy(i).invert(),ea.copy(e.ray).applyMatrix4(Yd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),y=h.getX(b+1),S=_o(this,e,ea,c,p,y,b);S&&t.push(S)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=_o(this,e,ea,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=_o(this,e,ea,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=_o(this,e,ea,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function _o(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(Bo.fromBufferAttribute(o,i),zo.fromBufferAttribute(o,s),t.distanceSqToSegment(Bo,zo,ch,$d)>n)return;ch.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(ch);if(!(l<e.near||l>e.far))return{distance:l,point:$d.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var Jd=new D,Zd=new D,da=class extends gs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Jd.fromBufferAttribute(t,i),Zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Jd.distanceTo(Zd);e.setAttribute("lineDistance",new ot(n,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},fa=class extends gs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xr=class extends ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new Re,fh=new ms,Mo=new cn,wo=new D,bs=class extends Ct{constructor(e=new it,t=new xr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(i),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Qd.copy(i).invert(),fh.copy(e.ray).applyMatrix4(Qd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);wo.fromBufferAttribute(u,g),ef(wo,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)wo.fromBufferAttribute(u,m),ef(wo,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function ef(r,e,t,n,i,s,a){let o=fh.distanceSqToPoint(r);if(o<t){let c=new D;fh.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var pa=class extends Wt{constructor(e=[],t=Xi,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},_i=class extends Wt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Wi=class extends Wt{constructor(e,t,n=Xn,i,s,a,o=Nt,c=Nt,l,h=ei,u=1){if(h!==ei&&h!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ho=class extends Wi{constructor(e,t=Xn,n=Xi,i,s,a=Nt,o=Nt,c,l=ei){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ma=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Lt=class r extends it{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2));function m(b,g,p,y,S,_,M,x,T,v,E){let R=_/T,P=M/v,L=_/2,B=M/2,N=x/2,U=T+1,Q=v+1,F=0,j=0,V=new D;for(let O=0;O<Q;O++){let $=O*P-B;for(let I=0;I<U;I++){let G=I*R-L;V[b]=G*y,V[g]=$*S,V[p]=N,l.push(V.x,V.y,V.z),V[b]=0,V[g]=0,V[p]=x>0?1:-1,h.push(V.x,V.y,V.z),u.push(I/T),u.push(1-O/v),F+=1}}for(let O=0;O<v;O++)for(let $=0;$<T;$++){let I=d+$+U*O,G=d+$+U*(O+1),ne=d+($+1)+U*(O+1),se=d+($+1)+U*O;c.push(I,G,se),c.push(G,ne,se),j+=6}o.addGroup(f,j,E),f+=j,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},vr=class r extends it{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,b=i+1,g=new D,p=new D;for(let y=0;y<=m;y++){let S=0,_=0,M=0,x=0;if(y<=n){let E=y/n,R=E*Math.PI/2;_=-h-e*Math.cos(R),M=e*Math.sin(R),x=-e*Math.cos(R),S=E*u}else if(y<=n+s){let E=(y-n)/s;_=-h+E*t,M=e,x=0,S=u+E*d}else{let E=(y-n-s)/n,R=E*Math.PI/2;_=h+e*Math.sin(R),M=e*Math.cos(R),x=e*Math.sin(R),S=u+d+E*u}let T=Math.max(0,Math.min(1,S/f)),v=0;y===0?v=.5/i:y===m&&(v=-.5/i);for(let E=0;E<=i;E++){let R=E/i,P=R*Math.PI*2,L=Math.sin(P),B=Math.cos(P);p.x=-M*B,p.y=_,p.z=M*L,o.push(p.x,p.y,p.z),g.set(-M*B,x,M*L),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+v,T)}if(y>0){let E=(y-1)*b;for(let R=0;R<i;R++){let P=E+R,L=E+R+1,B=y*b+R,N=y*b+R+1;a.push(P,L,B),a.push(L,N,B)}}}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},ga=class r extends it{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new D,h=new Ne;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ot(a,3)),this.setAttribute("normal",new ot(o,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mi=class r extends it{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ot(u,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){let _=new D,M=new D,x=0,T=(t-e)/n;for(let v=0;v<=s;v++){let E=[],R=v/s,P=R*(t-e)+e;for(let L=0;L<=i;L++){let B=L/i,N=B*c+o,U=Math.sin(N),Q=Math.cos(N);M.x=P*U,M.y=-R*n+g,M.z=P*Q,u.push(M.x,M.y,M.z),_.set(U,T,Q).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-R),E.push(m++)}b.push(E)}for(let v=0;v<i;v++)for(let E=0;E<s;E++){let R=b[E][v],P=b[E+1][v],L=b[E+1][v+1],B=b[E][v+1];(e>0||E!==0)&&(h.push(R,P,B),x+=3),(t>0||E!==s-1)&&(h.push(P,L,B),x+=3)}l.addGroup(p,x,0),p+=x}function S(_){let M=m,x=new Ne,T=new D,v=0,E=_===!0?e:t,R=_===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let L=0;L<=i;L++){let N=L/i*c+o,U=Math.cos(N),Q=Math.sin(N);T.x=E*Q,T.y=g*R,T.z=E*U,u.push(T.x,T.y,T.z),d.push(0,R,0),x.x=U*.5+.5,x.y=Q*.5*R+.5,f.push(x.x,x.y),m++}for(let L=0;L<i;L++){let B=M+L,N=P+L;_===!0?h.push(N,N+1,B):h.push(N+1,N,B),v+=3}l.addGroup(p,v,_===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ba=class r extends it{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nt(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new D,d=new Ne,f=new D,m=new D,b=new D,g=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:g=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(m)}for(let y=0;y<=t;y++){let S=n+y*h*i,_=Math.sin(S),M=Math.cos(S);for(let x=0;x<=e.length-1;x++){u.x=e[x].x*_,u.y=e[x].y,u.z=e[x].x*M,a.push(u.x,u.y,u.z),d.x=y/t,d.y=x/(e.length-1),o.push(d.x,d.y);let T=c[3*x+0]*_,v=c[3*x+1],E=c[3*x+0]*M;l.push(T,v,E)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let _=S+y*e.length,M=_,x=_+e.length,T=_+e.length+1,v=_+1;s.push(M,x,v),s.push(T,v,x)}this.setIndex(s),this.setAttribute("position",new ot(a,3)),this.setAttribute("uv",new ot(o,2)),this.setAttribute("normal",new ot(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}};var Gt=class r extends it{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let y=p*d-a;for(let S=0;S<l;S++){let _=S*u-s;m.push(_,-y,0),b.push(0,0,1),g.push(S/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let S=y+l*p,_=y+l*(p+1),M=y+1+l*(p+1),x=y+1+l*p;f.push(S,_,x),f.push(_,M,x)}this.setIndex(f),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(b,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var wi=class r extends it{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new D,d=new D,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let y=[],S=p/n,_=a+S*o,M=e*Math.cos(_),x=Math.sqrt(e*e-M*M),T=0;p===0&&a===0?T=.5/t:p===n&&c===Math.PI&&(T=-.5/t);for(let v=0;v<=t;v++){let E=v/t,R=i+E*s;u.x=-x*Math.cos(R),u.y=M,u.z=x*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+T,1-S),y.push(l++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let S=h[p][y+1],_=h[p][y],M=h[p+1][y],x=h[p+1][y+1];(p!==0||a>0)&&f.push(S,_,x),(p!==n-1||c<Math.PI)&&f.push(_,M,x)}this.setIndex(f),this.setAttribute("position",new ot(m,3)),this.setAttribute("normal",new ot(b,3)),this.setAttribute("uv",new ot(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xs=class r extends it{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new D,f=new D,m=new D;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let p=0;p<=i;p++){let y=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(y),f.y=(e+t*Math.cos(g))*Math.sin(y),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=i;g++){let p=(i+1)*b+g-1,y=(i+1)*(b-1)+g-1,S=(i+1)*(b-1)+g,_=(i+1)*b+g;c.push(p,y,_),c.push(y,S,_)}this.setIndex(c),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(h,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function As(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(tf(i))i.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(tf(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function hn(r){let e={};for(let t=0;t<r.length;t++){let n=As(r[t]);for(let i in n)e[i]=n[i]}return e}function tf(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function J0(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Gh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Cr={clone:As,merge:hn},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vt=class extends ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new ye().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(i.value);break;case"v3":this.uniforms[n].value=new D().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new je().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Re().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Go=class extends Vt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ze=class extends ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xa=class extends ln{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=tc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vo=class extends ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Ro(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function eg(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function nf(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function tg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var ti=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qo=class extends ti{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:as,endingEnd:as}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case os:s=e,o=2*t-n;break;case ia:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case os:a=e,c=2*n-t;break;case ia:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,y=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*b+.5*m,_=f*g-f*b;for(let M=0;M!==o;++M)s[M]=p*a[h+M]+y*a[l+M]+S*a[c+M]+_*a[u+M];return s}},va=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Xo=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},jo=class extends ti{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),b=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*b+a[c+g]*m;return s}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[l+m],g=a[c+m],p=f*d+m*2,y=u[p],S=u[p+1],_=e*d+m*2,M=h[_],x=h[_+1],T=ig(n,t,y,M,i);s[m]=Qf(T,b,S,x,g)}return s}};function Qf(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function ng(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function ig(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Qf(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let c=ng(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var bn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hi(t,this.TimeBufferType),this.values=Hi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hi(e.times,Array),values:Hi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Ro(e.settings)&&(n.settings={inTangents:Hi(e.settings.inTangents,Array),outTangents:Hi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new jo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ls:t=this.InterpolantFactoryMethodDiscrete;break;case hs:t=this.InterpolantFactoryMethodLinear;break;case To:t=this.InterpolantFactoryMethodSmooth;break;case dh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ue("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ls;case this.InterpolantFactoryMethodLinear:return hs;case this.InterpolantFactoryMethodSmooth:return To;case this.InterpolantFactoryMethodBezier:return dh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Ro(this.settings)&&(sf(this.settings.inTangents,e),sf(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(qe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(qe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){qe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){qe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&f0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){qe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===To,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Ro(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function sf(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=hs;var Si=class extends bn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ls;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};ya.prototype.ValueTypeName="color";var Ei=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="number";var Ko=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)wt.slerpFlat(s,0,a,l-o,a,l,c);return s}},Pn=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ko(this.times,this.values,this.getValueSize(),e)}};Pn.prototype.ValueTypeName="quaternion";Pn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends bn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=ls;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends bn{constructor(e,t,n,i){super(e,t,n,i)}};qn.prototype.ValueTypeName="vector";var ni=class{constructor(e="",t=-1,n=[],i=Gc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(rg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(bn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=eg(c);c=nf(c,1,h),l=nf(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Ei(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function sg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ei;case"vector":case"vector2":case"vector3":case"vector4":return qn;case"color":return ya;case"quaternion":return Pn;case"bool":case"boolean":return Si;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function rg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=sg(r.type);if(r.times===void 0){let n=[],i=[];tg(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),Ro(r.settings)&&(t.settings={inTangents:Hi(r.settings.inTangents,Float32Array),outTangents:Hi(r.settings.outTangents,Float32Array)}),t}var Qn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(rf(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!rf(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function rf(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Yo=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new Yo,ii=class{constructor(e){this.manager=e!==void 0?e:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var bi={},ph=class extends Error{constructor(e,t){super(e),this.response=t}},yr=class extends ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Qn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:n,onError:i});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ue("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=bi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:_})=>{if(S)p.close();else{b+=_.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let x=0,T=h.length;x<T;x++){let v=h[x];v.onProgress&&v.onProgress(M)}p.enqueue(_),y()}},S=>{p.error(S)})}}});return new Response(g)}else throw new ph(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Qn.add(`file:${e}`,l);let h=bi[e];delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=bi[e];if(h===void 0)throw this.manager.itemError(e),l;delete bi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ir=new WeakMap,$o=class extends ii{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Qn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=ir.get(a);u===void 0&&(u=[],ir.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=hr("img");function c(){h(),t&&t(this);let u=ir.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ir.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Qn.remove(`image:${e}`);let d=ir.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}ir.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var vs=class extends ii{constructor(e){super(e)}load(e,t,n,i){let s=new Wt,a=new $o(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},ys=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_s=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},lh=new Re,af=new D,of=new D,_r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vi,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;af.setFromMatrixPosition(e.matrixWorld),t.position.copy(af),of.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(of),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){lh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(lh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===lr||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},So=new D,Eo=new wt,Zn=new D,_a=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=Hn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(So,Eo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(So,Eo,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(So,Eo,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new D,cf=new Ne,lf=new Ne,Ht=class extends _a{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,cf,lf),t.subVectors(lf,cf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ta*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},mh=class extends _r{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Ma=class extends ys{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new mh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},gh=class extends _r{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},wa=class extends ys{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},si=class extends _a{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bh=class extends _r{constructor(){super(new si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ai=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new bh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ri=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ms=class extends it{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var hh=new WeakMap,Sa=class extends ii{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ue("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ue("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Qn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{hh.has(a)===!0?(i&&i(hh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Qn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),hh.set(c,l),Qn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sr=-90,rr=1,Mr=class extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(sr,rr,e,t);i.layers=this.layers,this.add(i);let s=new Ht(sr,rr,e,t);s.layers=this.layers,this.add(s);let a=new Ht(sr,rr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(sr,rr,e,t);o.layers=this.layers,this.add(o);let c=new Ht(sr,rr,e,t);c.layers=this.layers,this.add(c);let l=new Ht(sr,rr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Hn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Jo=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Zo=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){wt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;wt.multiplyQuaternionsFlat(e,a,e,t,e,n),wt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Vh="\\[\\]\\.:\\/",ag=new RegExp("["+Vh+"]","g"),Wh="[^"+Vh+"]",og="[^"+Vh.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",Wh),lg=/(WCOD+)?/.source.replace("WCOD",og),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),ug=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),dg=new RegExp("^"+cg+lg+hg+ug+"$"),fg=["material","materials","bones","map"],xh=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(e){let t=dg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);fg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ue("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){qe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){qe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){qe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){qe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){qe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){qe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;qe("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){qe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=xh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:as,endingEnd:as};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Nf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case kf:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Gc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===Uf;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Ff){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=os,i.endingEnd=os):(e?i.endingStart=this.zeroSlopeAtStart?os:as:i.endingStart=ia,t?i.endingEnd=this.zeroSlopeAtEnd?os:as:i.endingEnd=ia)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},pg=new Float32Array(1),ri=class extends Wn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Zo(xt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new va(new Float32Array(2),new Float32Array(2),1,pg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?ni.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Gc),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Qo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?ni.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var $h=class $h{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};$h.prototype.isMatrix2=!0;var vh=$h;function qh(r,e,t,n){let i=mg(n);switch(t){case Uh:return r*e;case cc:return r*e/i.components*i.byteLength;case lc:return r*e/i.components*i.byteLength;case Ki:return r*e*2/i.components*i.byteLength;case hc:return r*e*2/i.components*i.byteLength;case kh:return r*e*3/i.components*i.byteLength;case wn:return r*e*4/i.components*i.byteLength;case uc:return r*e*4/i.components*i.byteLength;case Aa:case Ra:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Pa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fc:case mc:return Math.max(r,16)*Math.max(e,8)/4;case dc:case pc:return Math.max(r,8)*Math.max(e,8)/2;case gc:case bc:case vc:case yc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xc:case Ia:case _c:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Sc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Tc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Cc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Dc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Nc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Uc:case kc:case Oc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Bc:case zc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case La:case Hc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(r){switch(r){case xn:case Lh:return{byteLength:1,components:1};case Tr:case Dh:case Mn:return{byteLength:2,components:1};case ac:case oc:return{byteLength:2,components:4};case Xn:case rc:case _n:return{byteLength:4,components:1};case Fh:case Nh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mp(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function xg(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ag=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
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
#endif`,Dg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Gg=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,Wg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,nb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ab=`#ifdef USE_GRADIENTMAP
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
}`,ob=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,ub=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_b=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Db=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ub=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ob=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Yb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$b=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ux=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,px=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Rx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ix=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Ox=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:vg,alphahash_pars_fragment:yg,alphamap_fragment:_g,alphamap_pars_fragment:Mg,alphatest_fragment:wg,alphatest_pars_fragment:Sg,aomap_fragment:Eg,aomap_pars_fragment:Tg,batching_pars_vertex:Ag,batching_vertex:Rg,begin_vertex:Cg,beginnormal_vertex:Pg,bsdfs:Ig,iridescence_fragment:Lg,bumpmap_pars_fragment:Dg,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:kg,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:zg,color_vertex:Hg,common:Gg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Wg,displacementmap_pars_vertex:qg,displacementmap_vertex:Xg,emissivemap_fragment:jg,emissivemap_pars_fragment:Kg,colorspace_fragment:Yg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Zg,envmap_pars_fragment:Qg,envmap_pars_vertex:eb,envmap_physical_pars_fragment:ub,envmap_vertex:tb,fog_vertex:nb,fog_pars_vertex:ib,fog_fragment:sb,fog_pars_fragment:rb,gradientmap_pars_fragment:ab,lightmap_pars_fragment:ob,lights_lambert_fragment:cb,lights_lambert_pars_fragment:lb,lights_pars_begin:hb,lights_toon_fragment:db,lights_toon_pars_fragment:fb,lights_phong_fragment:pb,lights_phong_pars_fragment:mb,lights_physical_fragment:gb,lights_physical_pars_fragment:bb,lights_fragment_begin:xb,lights_fragment_maps:vb,lights_fragment_end:yb,lightprobes_pars_fragment:_b,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Sb,logdepthbuf_vertex:Eb,map_fragment:Tb,map_pars_fragment:Ab,map_particle_fragment:Rb,map_particle_pars_fragment:Cb,metalnessmap_fragment:Pb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Lb,morphcolor_vertex:Db,morphnormal_vertex:Fb,morphtarget_pars_vertex:Nb,morphtarget_vertex:Ub,normal_fragment_begin:kb,normal_fragment_maps:Ob,normal_pars_fragment:Bb,normal_pars_vertex:zb,normal_vertex:Hb,normalmap_pars_fragment:Gb,clearcoat_normal_fragment_begin:Vb,clearcoat_normal_fragment_maps:Wb,clearcoat_pars_fragment:qb,iridescence_pars_fragment:Xb,opaque_fragment:jb,packing:Kb,premultiplied_alpha_fragment:Yb,project_vertex:$b,dithering_fragment:Jb,dithering_pars_fragment:Zb,roughnessmap_fragment:Qb,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:nx,shadowmap_vertex:ix,shadowmask_pars_fragment:sx,skinbase_vertex:rx,skinning_pars_vertex:ax,skinning_vertex:ox,skinnormal_vertex:cx,specularmap_fragment:lx,specularmap_pars_fragment:hx,tonemapping_fragment:ux,tonemapping_pars_fragment:dx,transmission_fragment:fx,transmission_pars_fragment:px,uv_pars_fragment:mx,uv_pars_vertex:gx,uv_vertex:bx,worldpos_vertex:xx,background_vert:vx,background_frag:yx,backgroundCube_vert:_x,backgroundCube_frag:Mx,cube_vert:wx,cube_frag:Sx,depth_vert:Ex,depth_frag:Tx,distance_vert:Ax,distance_frag:Rx,equirect_vert:Cx,equirect_frag:Px,linedashed_vert:Ix,linedashed_frag:Lx,meshbasic_vert:Dx,meshbasic_frag:Fx,meshlambert_vert:Nx,meshlambert_frag:Ux,meshmatcap_vert:kx,meshmatcap_frag:Ox,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:Hx,meshphong_frag:Gx,meshphysical_vert:Vx,meshphysical_frag:Wx,meshtoon_vert:qx,meshtoon_frag:Xx,points_vert:jx,points_frag:Kx,shadow_vert:Yx,shadow_frag:$x,sprite_vert:Jx,sprite_frag:Zx},ve={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new D},probesMax:{value:new D},probesResolution:{value:new D}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},li={basic:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ye(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ye(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([ve.points,ve.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([ve.common,ve.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([ve.sprite,ve.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:hn([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:hn([ve.lights,ve.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};li.physical={uniforms:hn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var qc={r:0,b:0,g:0},Qx=new Re,wp=new je;wp.set(-1,0,0,0,1,0,0,0,1);function ev(r,e,t,n,i,s){let a=new ye(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let _=y.backgroundBlurriness>0;S=e.get(S,_)}return S}function m(y){let S=!1,_=f(y);_===null?g(a,o):_&&_.isColor&&(g(_,1),S=!0);let M=r.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(y,S){let _=f(S);_&&(_.isCubeTexture||_.mapping===Ta)?(l===void 0&&(l=new Te(new Lt(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:As(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,x,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(S.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wp),l.material.toneMapped=et.getTransfer(_.colorSpace)!==mt,(h!==_||u!==_.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Te(new Gt(2,2),new Vt({name:"BackgroundMaterial",uniforms:As(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=et.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function g(y,S){y.getRGB(qc,Gh(r)),t.buffers.color.setClear(qc.r,qc.g,qc.b,S,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:m,addToRenderList:b,dispose:p}}function tv(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(P,L,B,N,U){let Q=!1,F=u(P,N,B,L);s!==F&&(s=F,l(s.object)),Q=f(P,N,B,U),Q&&m(P,N,B,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,_(P,L,B,N),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function c(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function u(P,L,B,N){let U=N.wireframe===!0,Q=n[L.id];Q===void 0&&(Q={},n[L.id]=Q);let F=P.isInstancedMesh===!0?P.id:0,j=Q[F];j===void 0&&(j={},Q[F]=j);let V=j[B.id];V===void 0&&(V={},j[B.id]=V);let O=V[U];return O===void 0&&(O=d(c()),V[U]=O),O}function d(P){let L=[],B=[],N=[];for(let U=0;U<t;U++)L[U]=0,B[U]=0,N[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,L,B,N){let U=s.attributes,Q=L.attributes,F=0,j=B.getAttributes();for(let V in j)if(j[V].location>=0){let $=U[V],I=Q[V];if(I===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),$===void 0||$.attribute!==I||I&&$.data!==I.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function m(P,L,B,N){let U={},Q=L.attributes,F=0,j=B.getAttributes();for(let V in j)if(j[V].location>=0){let $=Q[V];$===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&($=P.instanceColor));let I={};I.attribute=$,$&&$.data&&(I.data=$.data),U[V]=I,F++}s.attributes=U,s.attributesNum=F,s.index=N}function b(){let P=s.newAttributes;for(let L=0,B=P.length;L<B;L++)P[L]=0}function g(P){p(P,0)}function p(P,L){let B=s.newAttributes,N=s.enabledAttributes,U=s.attributeDivisors;B[P]=1,N[P]===0&&(r.enableVertexAttribArray(P),N[P]=1),U[P]!==L&&(r.vertexAttribDivisor(P,L),U[P]=L)}function y(){let P=s.newAttributes,L=s.enabledAttributes;for(let B=0,N=L.length;B<N;B++)L[B]!==P[B]&&(r.disableVertexAttribArray(B),L[B]=0)}function S(P,L,B,N,U,Q,F){F===!0?r.vertexAttribIPointer(P,L,B,U,Q):r.vertexAttribPointer(P,L,B,N,U,Q)}function _(P,L,B,N){b();let U=N.attributes,Q=B.getAttributes(),F=L.defaultAttributeValues;for(let j in Q){let V=Q[j];if(V.location>=0){let O=U[j];if(O===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),O!==void 0){let $=O.normalized,I=O.itemSize,G=e.get(O);if(G===void 0)continue;let ne=G.buffer,se=G.type,le=G.bytesPerElement,q=se===r.INT||se===r.UNSIGNED_INT||O.gpuType===rc;if(O.isInterleavedBufferAttribute){let W=O.data,he=W.stride,de=O.offset;if(W.isInstancedInterleavedBuffer){for(let J=0;J<V.locationSize;J++)p(V.location+J,W.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let J=0;J<V.locationSize;J++)g(V.location+J);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let J=0;J<V.locationSize;J++)S(V.location+J,I/V.locationSize,se,$,he*le,(de+I/V.locationSize*J)*le,q)}else{if(O.isInstancedBufferAttribute){for(let W=0;W<V.locationSize;W++)p(V.location+W,O.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let W=0;W<V.locationSize;W++)g(V.location+W);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let W=0;W<V.locationSize;W++)S(V.location+W,I/V.locationSize,se,$,I*le,I/V.locationSize*W*le,q)}}else if(F!==void 0){let $=F[j];if($!==void 0)switch($.length){case 2:r.vertexAttrib2fv(V.location,$);break;case 3:r.vertexAttrib3fv(V.location,$);break;case 4:r.vertexAttrib4fv(V.location,$);break;default:r.vertexAttrib1fv(V.location,$)}}}}y()}function M(){E();for(let P in n){let L=n[P];for(let B in L){let N=L[B];for(let U in N){let Q=N[U];for(let F in Q)h(Q[F].object),delete Q[F];delete N[U]}}delete n[P]}}function x(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let B in L){let N=L[B];for(let U in N){let Q=N[U];for(let F in Q)h(Q[F].object),delete Q[F];delete N[U]}}delete n[P.id]}function T(P){for(let L in n){let B=n[L];for(let N in B){let U=B[N];if(U[P.id]===void 0)continue;let Q=U[P.id];for(let F in Q)h(Q[F].object),delete Q[F];delete U[P.id]}}}function v(P){for(let L in n){let B=n[L],N=P.isInstancedMesh===!0?P.id:0,U=B[N];if(U!==void 0){for(let Q in U){let F=U[Q];for(let j in F)h(F[j].object),delete F[j];delete U[Q]}delete B[N],Object.keys(B).length===0&&delete n[L]}}}function E(){R(),a=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:x,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:g,disableUnusedAttributes:y}}function nv(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function iv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==wn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let v=T===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==xn&&T!==_n&&!v&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ue("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),_=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),x=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:_,maxSamples:M,samples:x}}function sv(r){let e=this,t=null,n=0,i=!1,s=!1,a=new Bn,o=new je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{let y=s?0:n,S=y*4,_=p.clippingState||null;c.value=_,_=h(m,d,S,f);for(let M=0;M!==S;++M)_[M]=t[M];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,_=f;S!==b;++S,_+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Ir=4,rv=6,av=20,ov=256,Na=new si,tp=new ye,Jh=null,Zh=0,Qh=0,eu=!1,cv=new D,Rs=new D,Dr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=cv}=s;Jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,Zh,Qh),this._renderer.xr.enabled=eu,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),Zh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:Mn,format:wn,colorSpace:pn,depthBuffer:!1},i=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lv(s)),this._blurMaterial=uv(s,e,t),this._ggxMaterial=hv(s,e,t)}return i}_compileMaterial(e){let t=new Te(new it,e);this._renderer.compile(t,Na)}_sceneToCubeUV(e,t,n,i,s){let c=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(tp),u.toneMapping=mn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Te(new Lt,new Qt({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(tp),p=!0);for(let S=0;S<6;S++){let _=S%3;_===0?(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[S],s.y,s.z)):_===1?(c.up.set(0,0,l[S]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[S],s.z)):(c.up.set(0,l[S],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[S]));let M=this._cubeSize;Pr(i,_*M,S>2?M:0,M,M),u.setRenderTarget(i),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Xi||e.mapping===Es;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Na)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-Ir?n-m+Ir:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Pr(s,g,p,3*b,2*b),i.setRenderTarget(s),i.render(o,Na),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Pr(e,g,p,3*b,2*b),i.setRenderTarget(e),i.render(o,Na)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Ir?i-this._lodMax+Ir:0),d=4*(this._cubeSize-h);Pr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Na)}};function lv(r){let e=[],t=[],n=r,i=r-Ir+1+rv;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let y=p%3*2/3-1,S=p>2?0:-1,_=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];m.set(_,f*d*p);for(let M=0;M<d;M++){let x=h[M*2]*2-1,T=h[M*2+1]*2-1;p===0?Rs.set(1,T,x):p===1?Rs.set(-x,1,-T):p===2?Rs.set(-x,T,1):p===3?Rs.set(-1,T,-x):p===4?Rs.set(-x,-1,T):Rs.set(x,T,-1),Rs.toArray(b,(p*d+M)*f)}}let g=new it;g.setAttribute("position",new Ke(m,f)),g.setAttribute("outputDirection",new Ke(b,f)),t.push(new Te(g,null)),n>Ir&&n--}return{lodMeshes:t,sizeLods:e}}function np(r,e,t){let n=new an(r,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function hv(r,e,t){return new Vt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ov,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function uv(r,e,t){return new Vt({name:"SphericalGaussianBlur",defines:{SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ip(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sp(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fr=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Lt(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xt,blending:oi});s.uniforms.tEquirect.value=t;let a=new Te(i,s),o=t.minFilter;return t.minFilter===gn&&(t.minFilter=Ut),new Mr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function dv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===nc||f===ic)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new Fr(m.height);return b.fromEquirectangularTexture(r,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===nc||f===ic,b=f===Xi||f===Es;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Dr(r)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let y=d.image;return m&&y&&y.height>0||b&&y&&c(y)?(n===null&&(n=new Dr(r)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===nc?d.mapping=Xi:f===ic&&(d.mapping=Es),d}function c(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function fv(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&cs("WebGLRenderer: "+n+" extension not supported."),i}}}function pv(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(f!==null){let y=f.array;b=f.version;for(let S=0,_=y.length;S<_;S+=3){let M=y[S+0],x=y[S+1],T=y[S+2];d.push(M,x,x,T,T,M)}}else{let y=m.array;b=m.version;for(let S=0,_=y.length/3-1;S<_;S+=3){let M=S+0,x=S+1,T=S+2;d.push(M,x,x,T,T,M)}}let g=new(m.count>=65535?fs:ds)(d,1);g.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function mv(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function gv(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function bv(r,e,t){let n=new WeakMap,i=new ut;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),b===!0&&(S=3);let _=o.attributes.position.count*S,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let x=new Float32Array(_*M*4*u),T=new aa(x,_,M,u);T.type=_n,T.needsUpdate=!0;let v=S*4;for(let R=0;R<u;R++){let P=g[R],L=p[R],B=y[R],N=_*M*4*R;for(let U=0;U<P.count;U++){let Q=U*v;f===!0&&(i.fromBufferAttribute(P,U),x[N+Q+0]=i.x,x[N+Q+1]=i.y,x[N+Q+2]=i.z,x[N+Q+3]=0),m===!0&&(i.fromBufferAttribute(L,U),x[N+Q+4]=i.x,x[N+Q+5]=i.y,x[N+Q+6]=i.z,x[N+Q+7]=0),b===!0&&(i.fromBufferAttribute(B,U),x[N+Q+8]=i.x,x[N+Q+9]=i.y,x[N+Q+10]=i.z,x[N+Q+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new Ne(_,M)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function xv(r,e,t,n,i){let s=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var vv={[Eh]:"LINEAR_TONE_MAPPING",[Th]:"REINHARD_TONE_MAPPING",[Ah]:"CINEON_TONE_MAPPING",[Ea]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Ph]:"NEUTRAL_TONE_MAPPING",[Rh]:"CUSTOM_TONE_MAPPING"};function yv(r,e,t,n,i,s){let a=new an(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new it;l.setAttribute("position",new ot([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ot([0,2,0,0,2,0],2));let h=new Go({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Te(l,h),d=new si(-1,1,1,-1,0,1),f=null,m=null,b=!1,g,p=null,y=[],S=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),c!==null&&c.setSize(_,M);for(let x=0;x<y.length;x++){let T=y[x];T.setSize&&T.setSize(_,M)}},this.setEffects=function(_){y=_,S=y.length>0&&y[0].isRenderPass===!0;let M=a.width,x=a.height;y.length>0&&o===null&&(o=new an(M,x,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),c=new an(M,x,{type:Mn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<y.length;T++){let v=y[T];v.setSize&&v.setSize(M,x)}},this.begin=function(_,M){if(b||_.toneMapping===mn&&y.length===0)return!1;if(p=M,M!==null){let x=M.width,T=M.height;(a.width!==x||a.height!==T)&&this.setSize(x,T)}return S===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=mn,!0},this.hasRenderPass=function(){return S},this.end=function(_,M){_.toneMapping=g,b=!0;let x=a,T=o;for(let v=0;v<y.length;v++){let E=y[v];E.enabled!==!1&&(E.render(_,T,x,M),E.needsSwap!==!1&&(x=T,T=T===o?c:o))}if(f!==_.outputColorSpace||m!==_.toneMapping){f=_.outputColorSpace,m=_.toneMapping,h.defines={},et.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");let v=vv[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,_.setRenderTarget(p),_.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Sp=new Wt,iu=new Wi(1,1),Ep=new aa,Tp=new Oo,Ap=new pa,rp=[],ap=[],op=new Float32Array(16),cp=new Float32Array(9),lp=new Float32Array(4);function Nr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=rp[i];if(s===void 0&&(s=new Float32Array(i),rp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function jt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Kt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yc(r,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function _v(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Mv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2fv(this.addr,e),Kt(t,e)}}function wv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;r.uniform3fv(this.addr,e),Kt(t,e)}}function Sv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4fv(this.addr,e),Kt(t,e)}}function Ev(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;lp.set(n),r.uniformMatrix2fv(this.addr,!1,lp),Kt(t,n)}}function Tv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;cp.set(n),r.uniformMatrix3fv(this.addr,!1,cp),Kt(t,n)}}function Av(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(jt(t,n))return;op.set(n),r.uniformMatrix4fv(this.addr,!1,op),Kt(t,n)}}function Rv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Cv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2iv(this.addr,e),Kt(t,e)}}function Pv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3iv(this.addr,e),Kt(t,e)}}function Iv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4iv(this.addr,e),Kt(t,e)}}function Lv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;r.uniform2uiv(this.addr,e),Kt(t,e)}}function Fv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;r.uniform3uiv(this.addr,e),Kt(t,e)}}function Nv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;r.uniform4uiv(this.addr,e),Kt(t,e)}}function Uv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(iu.compareFunction=t.isReversedDepthBuffer()?Wc:Vc,s=iu):s=Sp,t.setTexture2D(e||s,i)}function kv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Tp,i)}function Ov(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ap,i)}function Bv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ep,i)}function zv(r){switch(r){case 5126:return _v;case 35664:return Mv;case 35665:return wv;case 35666:return Sv;case 35674:return Ev;case 35675:return Tv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Fv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return kv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}function Hv(r,e){r.uniform1fv(this.addr,e)}function Gv(r,e){let t=Nr(e,this.size,2);r.uniform2fv(this.addr,t)}function Vv(r,e){let t=Nr(e,this.size,3);r.uniform3fv(this.addr,t)}function Wv(r,e){let t=Nr(e,this.size,4);r.uniform4fv(this.addr,t)}function qv(r,e){let t=Nr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xv(r,e){let t=Nr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function jv(r,e){let t=Nr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Kv(r,e){r.uniform1iv(this.addr,e)}function Yv(r,e){r.uniform2iv(this.addr,e)}function $v(r,e){r.uniform3iv(this.addr,e)}function Jv(r,e){r.uniform4iv(this.addr,e)}function Zv(r,e){r.uniform1uiv(this.addr,e)}function Qv(r,e){r.uniform2uiv(this.addr,e)}function ey(r,e){r.uniform3uiv(this.addr,e)}function ty(r,e){r.uniform4uiv(this.addr,e)}function ny(r,e,t){let n=this.cache,i=e.length,s=Yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=iu:a=Sp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function iy(r,e,t){let n=this.cache,i=e.length,s=Yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Tp,s[a])}function sy(r,e,t){let n=this.cache,i=e.length,s=Yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Ap,s[a])}function ry(r,e,t){let n=this.cache,i=e.length,s=Yc(t,i);jt(n,s)||(r.uniform1iv(this.addr,s),Kt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ep,s[a])}function ay(r){switch(r){case 5126:return Hv;case 35664:return Gv;case 35665:return Vv;case 35666:return Wv;case 35674:return qv;case 35675:return Xv;case 35676:return jv;case 5124:case 35670:return Kv;case 35667:case 35671:return Yv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Zv;case 36294:return Qv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}var su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zv(t.type)}},ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}},au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},tu=/(\w+)(\])?(\[|\.)?/g;function hp(r,e){r.seq.push(e),r.map[e.id]=e}function oy(r,e,t){let n=r.name,i=n.length;for(tu.lastIndex=0;;){let s=tu.exec(n),a=tu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){hp(t,l===void 0?new su(o,r,e):new ru(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new au(o),hp(t,u)),t=u}}}var Lr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);oy(o,c,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function up(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var cy=37297,ly=0;function hy(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dp=new je;function uy(r){et._getMatrix(dp,et.workingColorSpace,r);let e=`mat3( ${dp.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case sa:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function fp(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+hy(r.getShaderSource(e),o)}else return s}function dy(r,e){let t=uy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var fy={[Eh]:"Linear",[Th]:"Reinhard",[Ah]:"Cineon",[Ea]:"ACESFilmic",[Ch]:"AgX",[Ph]:"Neutral",[Rh]:"Custom"};function py(r,e){let t=fy[e];return t===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xc=new D;function my(){et.getLuminanceCoefficients(Xc);let r=Xc.x.toFixed(4),e=Xc.y.toFixed(4),t=Xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function by(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ka(r){return r!==""}function pp(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(vy,_y)}var yy=new Map;function _y(r,e){let t=Qe[e];if(t===void 0){let n=yy.get(e);if(n!==void 0)t=Qe[n],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ou(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(r){return r.replace(My,wy)}function wy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bp(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Sy={[ws]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function Ey(r){return Sy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[Xi]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE_UV"};function Ay(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ry={[Es]:"ENVMAP_MODE_REFRACTION"};function Cy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Ry[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Py={[tc]:"ENVMAP_BLENDING_MULTIPLY",[If]:"ENVMAP_BLENDING_MIX",[Lf]:"ENVMAP_BLENDING_ADD"};function Iy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Py[r.combine]||"ENVMAP_BLENDING_NONE"}function Ly(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Dy(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Ey(t),l=Ay(t),h=Cy(t),u=Iy(t),d=Ly(t),f=gy(t),m=by(s),b=i.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ka).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ka).join(`
`),p.length>0&&(p+=`
`)):(g=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),p=[bp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==mn?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,dy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),a=ou(a),a=pp(a,t),a=mp(a,t),o=ou(o),o=pp(o,t),o=mp(o,t),a=gp(a),o=gp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===zh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+g+a,_=y+p+o,M=up(i,i.VERTEX_SHADER,S),x=up(i,i.FRAGMENT_SHADER,_);i.attachShader(b,M),i.attachShader(b,x),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function T(P){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(b)||"",B=i.getShaderInfoLog(M)||"",N=i.getShaderInfoLog(x)||"",U=L.trim(),Q=B.trim(),F=N.trim(),j=!0,V=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,M,x);else{let O=fp(i,M,"vertex"),$=fp(i,x,"fragment");qe("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+O+`
`+$)}else U!==""?Ue("WebGLProgram: Program Info Log:",U):(Q===""||F==="")&&(V=!1);V&&(P.diagnostics={runnable:j,programLog:U,vertexShader:{log:Q,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(M),i.deleteShader(x),v=new Lr(i,b),E=xy(i,b)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(b,cy)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=x,this}var Fy=0,cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lu(e),t.set(e,n)),n}},lu=class{constructor(e){this.id=Fy++,this.code=e,this.usedTimes=0}};function Ny(r){return r===Ki||r===Ia||r===La}function Uy(r,e,t,n,i,s){let a=new oa,o=new cu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function b(v,E,R,P,L,B){let N=P.fog,U=L.geometry,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||Q,F),V=j&&j.mapping===Ta?j.image.height:null,O=f[v.type];v.precision!==null&&(d=n.getMaxPrecision(v.precision),d!==v.precision&&Ue("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));let $=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,I=$!==void 0?$.length:0,G=0;U.morphAttributes.position!==void 0&&(G=1),U.morphAttributes.normal!==void 0&&(G=2),U.morphAttributes.color!==void 0&&(G=3);let ne,se,le,q;if(O){let Tt=li[O];ne=Tt.vertexShader,se=Tt.fragmentShader}else{ne=v.vertexShader,se=v.fragmentShader;let Tt=o.getVertexShaderStage(v),ft=o.getFragmentShaderStage(v);o.update(v,Tt,ft),le=Tt.id,q=ft.id}let W=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),de=L.isInstancedMesh===!0,J=L.isBatchedMesh===!0,Se=!!v.map,Ve=!!v.matcap,Oe=!!j,We=!!v.aoMap,tt=!!v.lightMap,He=!!v.bumpMap&&v.wireframe===!1,$e=!!v.normalMap,Et=!!v.displacementMap,Pt=!!v.emissiveMap,ct=!!v.metalnessMap,lt=!!v.roughnessMap,k=v.anisotropy>0,_t=v.clearcoat>0,at=v.dispersion>0,C=v.retroreflectivity>0,w=v.iridescence>0,X=v.sheen>0,Z=v.transmission>0,te=k&&!!v.anisotropyMap,ue=_t&&!!v.clearcoatMap,pe=_t&&!!v.clearcoatNormalMap,ie=_t&&!!v.clearcoatRoughnessMap,ae=w&&!!v.iridescenceMap,oe=w&&!!v.iridescenceThicknessMap,Ce=X&&!!v.sheenColorMap,me=X&&!!v.sheenRoughnessMap,ge=!!v.specularMap,ke=!!v.specularColorMap,Ge=!!v.specularIntensityMap,Ye=Z&&!!v.transmissionMap,H=Z&&!!v.thicknessMap,be=!!v.gradientMap,re=!!v.alphaMap,xe=v.alphaTest>0,Ee=!!v.alphaHash,ce=!!v.extensions,Be=mn;v.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Be=r.toneMapping);let De={shaderID:O,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:se,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:J,batchingColor:J&&L._colorsTexture!==null,instancing:de,instancingColor:de&&L.instanceColor!==null,instancingMorph:de&&L.morphTexture!==null,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Se,matcap:Ve,envMap:Oe,envMapMode:Oe&&j.mapping,envMapCubeUVHeight:V,aoMap:We,lightMap:tt,bumpMap:He,normalMap:$e,displacementMap:Et,emissiveMap:Pt,normalMapObjectSpace:$e&&v.normalMapType===Bf,normalMapTangentSpace:$e&&v.normalMapType===Fa,packedNormalMap:$e&&v.normalMapType===Fa&&Ny(v.normalMap.format),metalnessMap:ct,roughnessMap:lt,anisotropy:k,anisotropyMap:te,clearcoat:_t,clearcoatMap:ue,clearcoatNormalMap:pe,clearcoatRoughnessMap:ie,dispersion:at,retroreflection:C,iridescence:w,iridescenceMap:ae,iridescenceThicknessMap:oe,sheen:X,sheenColorMap:Ce,sheenRoughnessMap:me,specularMap:ge,specularColorMap:ke,specularIntensityMap:Ge,transmission:Z,transmissionMap:Ye,thicknessMap:H,gradientMap:be,opaque:v.transparent===!1&&v.blending===qi&&v.alphaToCoverage===!1,alphaMap:re,alphaTest:xe,alphaHash:Ee,combine:v.combine,mapUv:Se&&m(v.map.channel),aoMapUv:We&&m(v.aoMap.channel),lightMapUv:tt&&m(v.lightMap.channel),bumpMapUv:He&&m(v.bumpMap.channel),normalMapUv:$e&&m(v.normalMap.channel),displacementMapUv:Et&&m(v.displacementMap.channel),emissiveMapUv:Pt&&m(v.emissiveMap.channel),metalnessMapUv:ct&&m(v.metalnessMap.channel),roughnessMapUv:lt&&m(v.roughnessMap.channel),anisotropyMapUv:te&&m(v.anisotropyMap.channel),clearcoatMapUv:ue&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(v.sheenRoughnessMap.channel),specularMapUv:ge&&m(v.specularMap.channel),specularColorMapUv:ke&&m(v.specularColorMap.channel),specularIntensityMapUv:Ge&&m(v.specularIntensityMap.channel),transmissionMapUv:Ye&&m(v.transmissionMap.channel),thicknessMapUv:H&&m(v.thicknessMap.channel),alphaMapUv:re&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&($e||k),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(Se||re),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&$e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:he,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:G,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:Se&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:Pt&&v.emissiveMap.isVideoTexture===!0&&et.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===St,flipSided:v.side===Xt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||J)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function g(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)E.push(R),E.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(E,v),y(E,v),E.push(r.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function p(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function y(v,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function S(v){let E=f[v.type],R;if(E){let P=li[E];R=Cr.clone(P.uniforms)}else R=v.uniforms;return R}function _(v,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new Dy(r,E,v,i),l.push(R),h.set(E,R)),R}function M(v){if(--v.usedTimes===0){let E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),h.delete(v.cacheKey),v.destroy()}}function x(v){o.remove(v)}function T(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:S,acquireProgram:_,releaseProgram:M,releaseShaderCache:x,programs:l,dispose:T}}function ky(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Oy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function xp(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vp(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let y=r[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},r[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=m,y.materialVariant=a(d),y.groupOrder=b,y.renderOrder=d.renderOrder,y.z=g,y.group=p),e++,y}function c(d,f,m,b,g,p,y){y.reversedDepth===!0&&(g=-g);let S=o(d,f,m,b,g,p);m.transmission>0?n.push(S):m.transparent===!0?i.push(S):t.push(S)}function l(d,f,m,b,g,p){let y=o(d,f,m,b,g,p);m.transmission>0?n.unshift(y):m.transparent===!0?i.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||Oy),n.length>1&&n.sort(f||xp),i.length>1&&i.sort(f||xp)}function u(){for(let d=e,f=r.length;d<f;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function By(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new vp,r.set(n,[a])):i>=s.length?(a=new vp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function zy(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function Hy(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var Gy=0;function Vy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Wy(r){let e=new zy,t=Hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,s=new Re,a=new Re;function o(l){let h=0,u=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,y=0,S=0,_=0,M=0,x=0,T=0,v=0,E=0,R=0;l.sort(Vy);for(let L=0,B=l.length;L<B;L++){let N=l[L],U=N.color,Q=N.intensity,F=N.distance,j=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ki?j=N.shadow.map.texture:j=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=U.r*Q,u+=U.g*Q,d+=U.b*Q;else if(N.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(N.sh.coefficients[V],Q);R++}else if(N.isSunLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let O=N.shadow,$=t.get(N);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),n.sunShadow[m]=$,n.sunShadowMap[m]=j;let I=O.getViewportCount();for(let G=0;G<I;G++)n.sunShadowMatrix[b+G]=O.getMatrix(G),n.sunShadowCascade[b+G]=O._cascadeData[G];b+=I,m++}n.sun[f]=V,f++}else if(N.isDirectionalLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let O=N.shadow,$=t.get(N);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.directionalShadow[g]=$,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=N.shadow.matrix,M++}n.directional[g]=V,g++}else if(N.isSpotLight){let V=e.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(U).multiplyScalar(Q),V.distance=F,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,n.spot[y]=V;let O=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,O.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[y]=O.matrix,N.castShadow){let $=t.get(N);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,n.spotShadow[y]=$,n.spotShadowMap[y]=j,T++}y++}else if(N.isRectAreaLight){let V=e.get(N);V.color.copy(U).multiplyScalar(Q),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),n.rectArea[S]=V,S++}else if(N.isPointLight){let V=e.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let O=N.shadow,$=t.get(N);$.shadowIntensity=O.intensity,$.shadowBias=O.bias,$.shadowNormalBias=O.normalBias,$.shadowRadius=O.radius,$.shadowMapSize=O.mapSize,$.shadowCameraNear=O.camera.near,$.shadowCameraFar=O.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=N.shadow.matrix,x++}n.point[p]=V,p++}else if(N.isHemisphereLight){let V=e.get(N);V.skyColor.copy(N.color).multiplyScalar(Q),V.groundColor.copy(N.groundColor).multiplyScalar(Q),n.hemi[_]=V,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==y||P.rectAreaLength!==S||P.hemiLength!==_||P.numSunShadows!==m||P.numDirectionalShadows!==M||P.numPointShadows!==x||P.numSpotShadows!==T||P.numSpotMaps!==v||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=y,n.rectArea.length=S,n.point.length=p,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.pointShadowMatrix.length=x,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=y,P.rectAreaLength=S,P.hemiLength=_,P.numSunShadows=m,P.numDirectionalShadows=M,P.numPointShadows=x,P.numSpotShadows=T,P.numSpotMaps=v,P.numLightProbes=R,n.version=Gy++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let y=0,S=l.length;y<S;y++){let _=l[y];if(_.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(_.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),m++}else if(_.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(_.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),b++}else if(_.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function yp(r){let e=new Wy(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function qy(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new yp(r),e.set(i,[o])):s>=a.length?(o=new yp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ky=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],Yy=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],_p=new Re,Ua=new D,nu=new D;function $y(r,e,t){let n=new Vi,i=new Ne,s=new Ne,a=new ut,o=new Vo,c=new Wo,l={},h=t.maxTextureSize,u={[ai]:Xt,[Xt]:ai,[St]:St},d=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Xy,fragmentShader:jy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new it;m.setAttribute("position",new Ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Te(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let p=this.type;this.render=function(x,T,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||x.length===0)return;this.type===df&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let E=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),L=r.state;L.setBlending(oi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=p!==this.type;B&&T.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(U=>U.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,U=x.length;N<U;N++){let Q=x[N],F=Q.shadow;if(F===void 0){Ue("WebGLShadowMap:",Q,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let j=F.getFrameExtents();i.multiply(j),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,F.mapSize.y=s.y));let V=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=V,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===wr){if(Q.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new an(i.x,i.y,{format:Ki,type:Mn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),F.map.texture.name=Q.name+".shadowMap",F.map.depthTexture=new Wi(i.x,i.y,_n),F.map.depthTexture.name=Q.name+".shadowMapDepth",F.map.depthTexture.format=ei,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nt,F.map.depthTexture.magFilter=Nt}else Q.isPointLight?(F.map=new Fr(i.x),F.map.depthTexture=new Ho(i.x,Xn)):(F.map=new an(i.x,i.y),F.map.depthTexture=new Wi(i.x,i.y,Xn)),F.map.depthTexture.name=Q.name+".shadowMap",F.map.depthTexture.format=ei,this.type===ws?(F.map.depthTexture.compareFunction=V?Wc:Vc,F.map.depthTexture.minFilter=Ut,F.map.depthTexture.magFilter=Ut):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Nt,F.map.depthTexture.magFilter=Nt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let O=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();Q.isPointLight!==!0&&F.updateMatrices(Q,v);for(let $=0;$<O;$++){let I=F.getCamera($);if(Q.isPointLight){let G=F.camera,ne=F.matrix,se=Q.distance||G.far;se!==G.far&&(G.far=se,G.updateProjectionMatrix()),Ua.setFromMatrixPosition(Q.matrixWorld),G.position.copy(Ua),nu.copy(G.position),nu.add(Ky[$]),G.up.copy(Yy[$]),G.lookAt(nu),G.updateMatrixWorld(),ne.makeTranslation(-Ua.x,-Ua.y,-Ua.z),_p.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),F._frustum.setFromProjectionMatrix(_p,G.coordinateSystem,G.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,$),r.clear();else{$===0&&(r.setRenderTarget(F.map),r.clear());let G=F.getViewport($);a.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(a)}n=F.getFrustum($),_(T,v,I,Q,this.type)}F.isPointLightShadow!==!0&&this.type===wr&&y(F,v),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(E,R,P)};function y(x,T){let v=e.update(b);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null?x.mapPass=new an(i.x,i.y,{format:Ki,type:Mn}):(x.mapPass.width!==x.map.width||x.mapPass.height!==x.map.height)&&x.mapPass.setSize(x.map.width,x.map.height),d.uniforms.shadow_pass.value=x.map.depthTexture,d.uniforms.resolution.value.set(x.map.width,x.map.height),d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(T,null,v,d,b,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value.set(x.map.width,x.map.height),f.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(T,null,v,f,b,null)}function S(x,T,v,E){let R=null,P=v.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(P!==void 0)R=P;else if(R=v.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=R.uuid,B=T.uuid,N=l[L];N===void 0&&(N={},l[L]=N);let U=N[B];U===void 0&&(U=R.clone(),N[B]=U,T.addEventListener("dispose",M)),R=U}if(R.visible=T.visible,R.wireframe=T.wireframe,E===wr?R.side=T.shadowSide!==null?T.shadowSide:T.side:R.side=T.shadowSide!==null?T.shadowSide:u[T.side],R.alphaMap=T.alphaMap,R.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,R.map=T.map,R.clipShadows=T.clipShadows,R.clippingPlanes=T.clippingPlanes,R.clipIntersection=T.clipIntersection,R.displacementMap=T.displacementMap,R.displacementScale=T.displacementScale,R.displacementBias=T.displacementBias,R.wireframeLinewidth=T.wireframeLinewidth,R.linewidth=T.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let L=r.properties.get(R);L.light=v}return R}function _(x,T,v,E,R){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&R===wr)&&(!x.frustumCulled||x.intersectsFrustum(n))){x.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,x.matrixWorld);let B=e.update(x),N=x.material;if(Array.isArray(N)){let U=B.groups;for(let Q=0,F=U.length;Q<F;Q++){let j=U[Q],V=N[j.materialIndex];if(V&&V.visible){let O=S(x,V,E,R);x.onBeforeShadow(r,x,T,v,B,O,j),r.renderBufferDirect(v,null,B,O,x,j),x.onAfterShadow(r,x,T,v,B,O,j)}}}else if(N.visible){let U=S(x,N,E,R);x.onBeforeShadow(r,x,T,v,B,U,null),r.renderBufferDirect(v,null,B,U,x,null),x.onAfterShadow(r,x,T,v,B,U,null)}}let L=x.children;for(let B=0,N=L.length;B<N;B++)_(L[B],T,v,E,R)}function M(x){x.target.removeEventListener("dispose",M);for(let v in l){let E=l[v],R=x.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Jy(r,e){function t(){let H=!1,be=new ut,re=null,xe=new ut(0,0,0,0);return{setMask:function(Ee){re!==Ee&&!H&&(r.colorMask(Ee,Ee,Ee,Ee),re=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,ce,Be,De,Tt){Tt===!0&&(Ee*=De,ce*=De,Be*=De),be.set(Ee,ce,Be,De),xe.equals(be)===!1&&(r.clearColor(Ee,ce,Be,De),xe.copy(be))},reset:function(){H=!1,re=null,xe.set(-1,0,0,0)}}}function n(){let H=!1,be=!1,re=null,xe=null,Ee=null;return{setReversed:function(ce){if(be!==ce){let Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),be=ce;let De=Ee;Ee=null,this.setClear(De)}},getReversed:function(){return be},setTest:function(ce){ce?W(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(ce){re!==ce&&!H&&(r.depthMask(ce),re=ce)},setFunc:function(ce){if(be&&(ce=$f[ce]),xe!==ce){switch(ce){case Co:r.depthFunc(r.NEVER);break;case Po:r.depthFunc(r.ALWAYS);break;case Io:r.depthFunc(r.LESS);break;case or:r.depthFunc(r.LEQUAL);break;case Lo:r.depthFunc(r.EQUAL);break;case Do:r.depthFunc(r.GEQUAL);break;case Fo:r.depthFunc(r.GREATER);break;case No:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}xe=ce}},setLocked:function(ce){H=ce},setClear:function(ce){Ee!==ce&&(Ee=ce,be&&(ce=1-ce),r.clearDepth(ce))},reset:function(){H=!1,re=null,xe=null,Ee=null,be=!1}}}function i(){let H=!1,be=null,re=null,xe=null,Ee=null,ce=null,Be=null,De=null,Tt=null;return{setTest:function(ft){H||(ft?W(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(ft){be!==ft&&!H&&(r.stencilMask(ft),be=ft)},setFunc:function(ft,Nn,$n){(re!==ft||xe!==Nn||Ee!==$n)&&(r.stencilFunc(ft,Nn,$n),re=ft,xe=Nn,Ee=$n)},setOp:function(ft,Nn,$n){(ce!==ft||Be!==Nn||De!==$n)&&(r.stencilOp(ft,Nn,$n),ce=ft,Be=Nn,De=$n)},setLocked:function(ft){H=ft},setClear:function(ft){Tt!==ft&&(r.clearStencil(ft),Tt=ft)},reset:function(){H=!1,be=null,re=null,xe=null,Ee=null,ce=null,Be=null,De=null,Tt=null}}}let s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,y=null,S=null,_=null,M=null,x=null,T=null,v=new ye(0,0,0),E=0,R=!1,P=null,L=null,B=null,N=null,U=null,Q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(V)[1]),F=j>=1):V.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),F=j>=2);let O=null,$={},I=r.getParameter(r.SCISSOR_BOX),G=r.getParameter(r.VIEWPORT),ne=new ut().fromArray(I),se=new ut().fromArray(G);function le(H,be,re,xe){let Ee=new Uint8Array(4),ce=r.createTexture();r.bindTexture(H,ce),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Be=0;Be<re;Be++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(be+Be,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return ce}let q={};q[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(r.DEPTH_TEST),a.setFunc(or),He(!1),$e(yh),W(r.CULL_FACE),We(oi);function W(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function he(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function de(H,be){return d[H]!==be?(r.bindFramebuffer(H,be),d[H]=be,H===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=be),H===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=be),!0):!1}function J(H,be){let re=m,xe=!1;if(H){re=f.get(be),re===void 0&&(re=[],f.set(be,re));let Ee=H.textures;if(re.length!==Ee.length||re[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,Be=Ee.length;ce<Be;ce++)re[ce]=r.COLOR_ATTACHMENT0+ce;re.length=Ee.length,xe=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,xe=!0);xe&&r.drawBuffers(re)}function Se(H){return b!==H?(r.useProgram(H),b=H,!0):!1}let Ve={[Ss]:r.FUNC_ADD,[pf]:r.FUNC_SUBTRACT,[mf]:r.FUNC_REVERSE_SUBTRACT};Ve[gf]=r.MIN,Ve[bf]=r.MAX;let Oe={[xf]:r.ZERO,[vf]:r.ONE,[yf]:r.SRC_COLOR,[wh]:r.SRC_ALPHA,[Tf]:r.SRC_ALPHA_SATURATE,[Sf]:r.DST_COLOR,[Mf]:r.DST_ALPHA,[_f]:r.ONE_MINUS_SRC_COLOR,[Sh]:r.ONE_MINUS_SRC_ALPHA,[Ef]:r.ONE_MINUS_DST_COLOR,[wf]:r.ONE_MINUS_DST_ALPHA,[Af]:r.CONSTANT_COLOR,[Rf]:r.ONE_MINUS_CONSTANT_COLOR,[Cf]:r.CONSTANT_ALPHA,[Pf]:r.ONE_MINUS_CONSTANT_ALPHA};function We(H,be,re,xe,Ee,ce,Be,De,Tt,ft){if(H===oi){g===!0&&(he(r.BLEND),g=!1);return}if(g===!1&&(W(r.BLEND),g=!0),H!==ff){if(H!==p||ft!==R){if((y!==Ss||M!==Ss)&&(r.blendEquation(r.FUNC_ADD),y=Ss,M=Ss),ft)switch(H){case qi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFunc(r.ONE,r.ONE);break;case _h:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Mh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:qe("WebGLState: Invalid blending: ",H);break}else switch(H){case qi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _h:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mh:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",H);break}S=null,_=null,x=null,T=null,v.set(0,0,0),E=0,p=H,R=ft}return}Ee=Ee||be,ce=ce||re,Be=Be||xe,(be!==y||Ee!==M)&&(r.blendEquationSeparate(Ve[be],Ve[Ee]),y=be,M=Ee),(re!==S||xe!==_||ce!==x||Be!==T)&&(r.blendFuncSeparate(Oe[re],Oe[xe],Oe[ce],Oe[Be]),S=re,_=xe,x=ce,T=Be),(De.equals(v)===!1||Tt!==E)&&(r.blendColor(De.r,De.g,De.b,Tt),v.copy(De),E=Tt),p=H,R=!1}function tt(H,be){H.side===St?he(r.CULL_FACE):W(r.CULL_FACE);let re=H.side===Xt;be&&(re=!re),He(re),H.blending===qi&&H.transparent===!1?We(oi):We(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);let xe=H.stencilWrite;o.setTest(xe),xe&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Pt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(H){P!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),P=H)}function $e(H){H!==hf?(W(r.CULL_FACE),H!==L&&(H===yh?r.cullFace(r.BACK):H===uf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),L=H}function Et(H){H!==B&&(F&&r.lineWidth(H),B=H)}function Pt(H,be,re){H?(W(r.POLYGON_OFFSET_FILL),(N!==be||U!==re)&&(N=be,U=re,a.getReversed()&&(be=-be),r.polygonOffset(be,re))):he(r.POLYGON_OFFSET_FILL)}function ct(H){H?W(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function lt(H){H===void 0&&(H=r.TEXTURE0+Q-1),O!==H&&(r.activeTexture(H),O=H)}function k(H,be,re){re===void 0&&(O===null?re=r.TEXTURE0+Q-1:re=O);let xe=$[re];xe===void 0&&(xe={type:void 0,texture:void 0},$[re]=xe),(xe.type!==H||xe.texture!==be)&&(O!==re&&(r.activeTexture(re),O=re),r.bindTexture(H,be||q[H]),xe.type=H,xe.texture=be)}function _t(){let H=$[O];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function at(){try{r.compressedTexImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function w(){try{r.texSubImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function X(){try{r.texSubImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function te(){try{r.compressedTexSubImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function ue(){try{r.texStorage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function pe(){try{r.texStorage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function ie(){try{r.texImage2D(...arguments)}catch(H){qe("WebGLState:",H)}}function ae(){try{r.texImage3D(...arguments)}catch(H){qe("WebGLState:",H)}}function oe(H){return u[H]!==void 0?u[H]:r.getParameter(H)}function Ce(H,be){u[H]!==be&&(r.pixelStorei(H,be),u[H]=be)}function me(H){ne.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function ge(H){se.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),se.copy(H))}function ke(H,be){let re=l.get(be);re===void 0&&(re=new WeakMap,l.set(be,re));let xe=re.get(H);xe===void 0&&(xe=r.getUniformBlockIndex(be,H.name),re.set(H,xe))}function Ge(H,be){let xe=l.get(be).get(H);c.get(be)!==xe&&(r.uniformBlockBinding(be,xe,H.__bindingPointIndex),c.set(be,xe))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},O=null,$={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,y=null,S=null,_=null,M=null,x=null,T=null,v=new ye(0,0,0),E=0,R=!1,P=null,L=null,B=null,N=null,U=null,ne.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:W,disable:he,bindFramebuffer:de,drawBuffers:J,useProgram:Se,setBlending:We,setMaterial:tt,setFlipSided:He,setCullFace:$e,setLineWidth:Et,setPolygonOffset:Pt,setScissorTest:ct,activeTexture:lt,bindTexture:k,unbindTexture:_t,compressedTexImage2D:at,compressedTexImage3D:C,texImage2D:ie,texImage3D:ae,pixelStorei:Ce,getParameter:oe,updateUBOMapping:ke,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:pe,texSubImage2D:w,texSubImage3D:X,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:me,viewport:ge,reset:Ye}}function Zy(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,w){return m?new OffscreenCanvas(C,w):hr("canvas")}function g(C,w,X){let Z=1,te=at(C);if((te.width>X||te.height>X)&&(Z=X/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ue=Math.floor(Z*te.width),pe=Math.floor(Z*te.height);d===void 0&&(d=b(ue,pe));let ie=w?b(ue,pe):d;return ie.width=ue,ie.height=pe,ie.getContext("2d").drawImage(C,0,0,ue,pe),Ue("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ue+"x"+pe+")."),ie}else return"data"in C&&Ue("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function p(C){return C.generateMipmaps}function y(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(C,w,X,Z,te,ue=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pe;Z&&(pe=e.get("EXT_texture_norm16"),pe||Ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ie=w;if(w===r.RED&&(X===r.FLOAT&&(ie=r.R32F),X===r.HALF_FLOAT&&(ie=r.R16F),X===r.UNSIGNED_BYTE&&(ie=r.R8),X===r.UNSIGNED_SHORT&&pe&&(ie=pe.R16_EXT),X===r.SHORT&&pe&&(ie=pe.R16_SNORM_EXT)),w===r.RED_INTEGER&&(X===r.UNSIGNED_BYTE&&(ie=r.R8UI),X===r.UNSIGNED_SHORT&&(ie=r.R16UI),X===r.UNSIGNED_INT&&(ie=r.R32UI),X===r.BYTE&&(ie=r.R8I),X===r.SHORT&&(ie=r.R16I),X===r.INT&&(ie=r.R32I)),w===r.RG&&(X===r.FLOAT&&(ie=r.RG32F),X===r.HALF_FLOAT&&(ie=r.RG16F),X===r.UNSIGNED_BYTE&&(ie=r.RG8),X===r.UNSIGNED_SHORT&&pe&&(ie=pe.RG16_EXT),X===r.SHORT&&pe&&(ie=pe.RG16_SNORM_EXT)),w===r.RG_INTEGER&&(X===r.UNSIGNED_BYTE&&(ie=r.RG8UI),X===r.UNSIGNED_SHORT&&(ie=r.RG16UI),X===r.UNSIGNED_INT&&(ie=r.RG32UI),X===r.BYTE&&(ie=r.RG8I),X===r.SHORT&&(ie=r.RG16I),X===r.INT&&(ie=r.RG32I)),w===r.RGB_INTEGER&&(X===r.UNSIGNED_BYTE&&(ie=r.RGB8UI),X===r.UNSIGNED_SHORT&&(ie=r.RGB16UI),X===r.UNSIGNED_INT&&(ie=r.RGB32UI),X===r.BYTE&&(ie=r.RGB8I),X===r.SHORT&&(ie=r.RGB16I),X===r.INT&&(ie=r.RGB32I)),w===r.RGBA_INTEGER&&(X===r.UNSIGNED_BYTE&&(ie=r.RGBA8UI),X===r.UNSIGNED_SHORT&&(ie=r.RGBA16UI),X===r.UNSIGNED_INT&&(ie=r.RGBA32UI),X===r.BYTE&&(ie=r.RGBA8I),X===r.SHORT&&(ie=r.RGBA16I),X===r.INT&&(ie=r.RGBA32I)),w===r.RGB&&(X===r.UNSIGNED_SHORT&&pe&&(ie=pe.RGB16_EXT),X===r.SHORT&&pe&&(ie=pe.RGB16_SNORM_EXT),X===r.UNSIGNED_INT_5_9_9_9_REV&&(ie=r.RGB9_E5),X===r.UNSIGNED_INT_10F_11F_11F_REV&&(ie=r.R11F_G11F_B10F)),w===r.RGBA){let ae=ue?sa:et.getTransfer(te);X===r.FLOAT&&(ie=r.RGBA32F),X===r.HALF_FLOAT&&(ie=r.RGBA16F),X===r.UNSIGNED_BYTE&&(ie=ae===mt?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT&&pe&&(ie=pe.RGBA16_EXT),X===r.SHORT&&pe&&(ie=pe.RGBA16_SNORM_EXT),X===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(C,w){let X;return C?w===null||w===Xn||w===Ar?X=r.DEPTH24_STENCIL8:w===_n?X=r.DEPTH32F_STENCIL8:w===Tr&&(X=r.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xn||w===Ar?X=r.DEPTH_COMPONENT24:w===_n?X=r.DEPTH_COMPONENT32F:w===Tr&&(X=r.DEPTH_COMPONENT16),X}function x(C,w){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Nt&&C.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function T(C){let w=C.target;w.removeEventListener("dispose",T),E(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&u.delete(w)}function v(C){let w=C.target;w.removeEventListener("dispose",v),P(w)}function E(C){let w=n.get(C);if(w.__webglInit===void 0)return;let X=C.source,Z=f.get(X);if(Z){let te=Z[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(C),Object.keys(Z).length===0&&f.delete(X)}n.remove(C)}function R(C){let w=n.get(C);r.deleteTexture(w.__webglTexture);let X=C.source,Z=f.get(X);delete Z[w.__cacheKey],a.memory.textures--}function P(C){let w=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let te=0;te<w.__webglFramebuffer[Z].length;te++)r.deleteFramebuffer(w.__webglFramebuffer[Z][te]);else r.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[Z]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let X=C.textures;for(let Z=0,te=X.length;Z<te;Z++){let ue=n.get(X[Z]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(X[Z])}n.remove(C)}let L=0;function B(){L=0}function N(){return L}function U(C){L=C}function Q(){let C=L;return C>=i.maxTextures&&Ue("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),L+=1,C}function F(C){let w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function j(C,w){let X=n.get(C);if(C.isVideoTexture&&k(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&X.__version!==C.version){let Z=C.image;if(Z===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{he(X,C,w);return}}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,X.__webglTexture,r.TEXTURE0+w)}function V(C,w){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){he(X,C,w);return}else C.isExternalTexture&&(X.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture,r.TEXTURE0+w)}function O(C,w){let X=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){he(X,C,w);return}t.bindTexture(r.TEXTURE_3D,X.__webglTexture,r.TEXTURE0+w)}function $(C,w){let X=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&X.__version!==C.version){de(X,C,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture,r.TEXTURE0+w)}let I={[Vn]:r.REPEAT,[Cn]:r.CLAMP_TO_EDGE,[cr]:r.MIRRORED_REPEAT},G={[Nt]:r.NEAREST,[sc]:r.NEAREST_MIPMAP_NEAREST,[Ts]:r.NEAREST_MIPMAP_LINEAR,[Ut]:r.LINEAR,[Er]:r.LINEAR_MIPMAP_NEAREST,[gn]:r.LINEAR_MIPMAP_LINEAR},ne={[Hf]:r.NEVER,[Xf]:r.ALWAYS,[Gf]:r.LESS,[Vc]:r.LEQUAL,[Vf]:r.EQUAL,[Wc]:r.GEQUAL,[Wf]:r.GREATER,[qf]:r.NOTEQUAL};function se(C,w){if(w.type===_n&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Er||w.magFilter===Ts||w.magFilter===gn||w.minFilter===Ut||w.minFilter===Er||w.minFilter===Ts||w.minFilter===gn)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,I[w.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,I[w.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,I[w.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,G[w.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,G[w.minFilter]),w.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Nt||w.minFilter!==Ts&&w.minFilter!==gn||w.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function le(C,w){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",T));let Z=w.source,te=f.get(Z);te===void 0&&(te={},f.set(Z,te));let ue=F(w);if(ue!==C.__cacheKey){te[ue]===void 0&&(te[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),te[ue].usedTimes++;let pe=te[C.__cacheKey];pe!==void 0&&(te[C.__cacheKey].usedTimes--,pe.usedTimes===0&&R(w)),C.__cacheKey=ue,C.__webglTexture=te[ue].texture}return X}function q(C,w,X){return Math.floor(Math.floor(C/X)/w)}function W(C,w,X,Z){let ue=C.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,X,Z,w.data);else{ue.sort((Ce,me)=>Ce.start-me.start);let pe=0;for(let Ce=1;Ce<ue.length;Ce++){let me=ue[pe],ge=ue[Ce],ke=me.start+me.count,Ge=q(ge.start,w.width,4),Ye=q(me.start,w.width,4);ge.start<=ke+1&&Ge===Ye&&q(ge.start+ge.count-1,w.width,4)===Ge?me.count=Math.max(me.count,ge.start+ge.count-me.start):(++pe,ue[pe]=ge)}ue.length=pe+1;let ie=t.getParameter(r.UNPACK_ROW_LENGTH),ae=t.getParameter(r.UNPACK_SKIP_PIXELS),oe=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let Ce=0,me=ue.length;Ce<me;Ce++){let ge=ue[Ce],ke=Math.floor(ge.start/4),Ge=Math.ceil(ge.count/4),Ye=ke%w.width,H=Math.floor(ke/w.width),be=Ge,re=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,Ye,H,be,re,X,Z,w.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ie),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function he(C,w,X){let Z=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=r.TEXTURE_3D);let te=le(C,w),ue=w.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+X);let pe=n.get(ue);if(ue.version!==pe.__version||te===!0){if(t.activeTexture(r.TEXTURE0+X),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let re=et.getPrimaries(et.workingColorSpace),xe=w.colorSpace===In?null:et.getPrimaries(w.colorSpace),Ee=w.colorSpace===In||re===xe?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment);let ae=g(w.image,!1,i.maxTextureSize);ae=_t(w,ae);let oe=s.convert(w.format,w.colorSpace),Ce=s.convert(w.type),me=_(w.internalFormat,oe,Ce,w.normalized,w.colorSpace,w.isVideoTexture);se(Z,w);let ge,ke=w.mipmaps,Ge=w.isVideoTexture!==!0,Ye=pe.__version===void 0||te===!0,H=ue.dataReady,be=x(w,ae);if(w.isDepthTexture)me=M(w.format===ji,w.type),Ye&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,me,ae.width,ae.height):t.texImage2D(r.TEXTURE_2D,0,me,ae.width,ae.height,0,oe,Ce,null));else if(w.isDataTexture)if(ke.length>0){Ge&&Ye&&t.texStorage2D(r.TEXTURE_2D,be,me,ke[0].width,ke[0].height);for(let re=0,xe=ke.length;re<xe;re++)ge=ke[re],Ge?H&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,Ce,ge.data):t.texImage2D(r.TEXTURE_2D,re,me,ge.width,ge.height,0,oe,Ce,ge.data);w.generateMipmaps=!1}else Ge?(Ye&&t.texStorage2D(r.TEXTURE_2D,be,me,ae.width,ae.height),H&&W(w,ae,oe,Ce)):t.texImage2D(r.TEXTURE_2D,0,me,ae.width,ae.height,0,oe,Ce,ae.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ge&&Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,me,ke[0].width,ke[0].height,ae.depth);for(let re=0,xe=ke.length;re<xe;re++)if(ge=ke[re],w.format!==wn)if(oe!==null)if(Ge){if(H)if(w.layerUpdates.size>0){let Ee=qh(ge.width,ge.height,w.format,w.type);for(let ce of w.layerUpdates){let Be=ge.data.subarray(ce*Ee/ge.data.BYTES_PER_ELEMENT,(ce+1)*Ee/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,ce,ge.width,ge.height,1,oe,Be)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,oe,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,me,ge.width,ge.height,ae.depth,0,ge.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,ae.depth,oe,Ce,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,me,ge.width,ge.height,ae.depth,0,oe,Ce,ge.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Ge&&Ye&&t.texStorage2D(r.TEXTURE_2D,be,me,ke[0].width,ke[0].height);for(let re=0,xe=ke.length;re<xe;re++)ge=ke[re],w.format!==wn?oe!==null?Ge?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,re,me,ge.width,ge.height,0,ge.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?H&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,oe,Ce,ge.data):t.texImage2D(r.TEXTURE_2D,re,me,ge.width,ge.height,0,oe,Ce,ge.data)}else if(w.isDataArrayTexture)if(Ge){if(Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,be,me,ae.width,ae.height,ae.depth),H)if(w.layerUpdates.size>0){let re=qh(ae.width,ae.height,w.format,w.type);for(let xe of w.layerUpdates){let Ee=ae.data.subarray(xe*re/ae.data.BYTES_PER_ELEMENT,(xe+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xe,ae.width,ae.height,1,oe,Ce,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,oe,Ce,ae.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,me,ae.width,ae.height,ae.depth,0,oe,Ce,ae.data);else if(w.isData3DTexture)Ge?(Ye&&t.texStorage3D(r.TEXTURE_3D,be,me,ae.width,ae.height,ae.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,oe,Ce,ae.data)):t.texImage3D(r.TEXTURE_3D,0,me,ae.width,ae.height,ae.depth,0,oe,Ce,ae.data);else if(w.isFramebufferTexture){if(Ye)if(Ge)t.texStorage2D(r.TEXTURE_2D,be,me,ae.width,ae.height);else{let re=ae.width,xe=ae.height;for(let Ee=0;Ee<be;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,me,re,xe,0,oe,Ce,null),re>>=1,xe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in r){let re=r.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),u.add(w),re.onpaint=xe=>{let Ee=xe.changedElements;for(let ce of u)Ee.includes(ce.image)&&(ce.needsUpdate=!0)},re.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ae);else{let Ee=r.RGBA,ce=r.RGBA,Be=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ee,ce,Be,ae)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(ke.length>0){if(Ge&&Ye){let re=at(ke[0]);t.texStorage2D(r.TEXTURE_2D,be,me,re.width,re.height)}for(let re=0,xe=ke.length;re<xe;re++)ge=ke[re],Ge?H&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,oe,Ce,ge):t.texImage2D(r.TEXTURE_2D,re,me,oe,Ce,ge);w.generateMipmaps=!1}else if(Ge){if(Ye){let re=at(ae);t.texStorage2D(r.TEXTURE_2D,be,me,re.width,re.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Ce,ae)}else t.texImage2D(r.TEXTURE_2D,0,me,oe,Ce,ae);p(w)&&y(Z),pe.__version=ue.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function de(C,w,X){if(w.image.length!==6)return;let Z=le(C,w),te=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+X);let ue=n.get(te);if(te.version!==ue.__version||Z===!0){t.activeTexture(r.TEXTURE0+X);let pe=et.getPrimaries(et.workingColorSpace),ie=w.colorSpace===In?null:et.getPrimaries(w.colorSpace),ae=w.colorSpace===In||pe===ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let oe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ce=w.image[0]&&w.image[0].isDataTexture,me=[];for(let ce=0;ce<6;ce++)!oe&&!Ce?me[ce]=g(w.image[ce],!0,i.maxCubemapSize):me[ce]=Ce?w.image[ce].image:w.image[ce],me[ce]=_t(w,me[ce]);let ge=me[0],ke=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type),Ye=_(w.internalFormat,ke,Ge,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,be=ue.__version===void 0||Z===!0,re=te.dataReady,xe=x(w,ge);se(r.TEXTURE_CUBE_MAP,w);let Ee;if(oe){H&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ye,ge.width,ge.height);for(let ce=0;ce<6;ce++){Ee=me[ce].mipmaps;for(let Be=0;Be<Ee.length;Be++){let De=Ee[Be];w.format!==wn?ke!==null?H?re&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,0,0,De.width,De.height,ke,De.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,Ye,De.width,De.height,0,De.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,0,0,De.width,De.height,ke,Ge,De.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,Ye,De.width,De.height,0,ke,Ge,De.data)}}}else{if(Ee=w.mipmaps,H&&be){Ee.length>0&&xe++;let ce=at(me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,xe,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Ce){H?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,me[ce].width,me[ce].height,ke,Ge,me[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,me[ce].width,me[ce].height,0,ke,Ge,me[ce].data);for(let Be=0;Be<Ee.length;Be++){let Tt=Ee[Be].image[ce].image;H?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,0,0,Tt.width,Tt.height,ke,Ge,Tt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,Ye,Tt.width,Tt.height,0,ke,Ge,Tt.data)}}else{H?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,ke,Ge,me[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,ke,Ge,me[ce]);for(let Be=0;Be<Ee.length;Be++){let De=Ee[Be];H?re&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,0,0,ke,Ge,De.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,Ye,ke,Ge,De.image[ce])}}}p(w)&&y(r.TEXTURE_CUBE_MAP),ue.__version=te.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function J(C,w,X,Z,te,ue){let pe=s.convert(X.format,X.colorSpace),ie=s.convert(X.type),ae=_(X.internalFormat,pe,ie,X.normalized,X.colorSpace),oe=n.get(w),Ce=n.get(X);if(Ce.__renderTarget=w,!oe.__hasExternalTextures){let me=Math.max(1,w.width>>ue),ge=Math.max(1,w.height>>ue);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,ue,ae,me,ge,w.depth,0,pe,ie,null):t.texImage2D(te,ue,ae,me,ge,0,pe,ie,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),lt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,te,Ce.__webglTexture,0,ct(w)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,te,Ce.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(C,w,X){if(r.bindRenderbuffer(r.RENDERBUFFER,C),w.depthBuffer){let Z=w.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,ue=M(w.stencilBuffer,te),pe=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;lt(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct(w),ue,w.width,w.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct(w),ue,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ue,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,pe,r.RENDERBUFFER,C)}else{let Z=w.textures;for(let te=0;te<Z.length;te++){let ue=Z[te],pe=s.convert(ue.format,ue.colorSpace),ie=s.convert(ue.type),ae=_(ue.internalFormat,pe,ie,ue.normalized,ue.colorSpace);lt(w)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct(w),ae,w.width,w.height):X?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct(w),ae,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,ae,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ve(C,w,X){let Z=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(w.depthTexture);if(te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),te.__webglTexture===void 0){te.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,te.__webglTexture),se(r.TEXTURE_CUBE_MAP,w.depthTexture);let oe=s.convert(w.depthTexture.format),Ce=s.convert(w.depthTexture.type),me;w.depthTexture.format===ei?me=r.DEPTH_COMPONENT24:w.depthTexture.format===ji&&(me=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,me,w.width,w.height,0,oe,Ce,null)}}else j(w.depthTexture,0);let ue=te.__webglTexture,pe=ct(w),ie=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+X:r.TEXTURE_2D,ae=w.depthTexture.format===ji?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===ei)lt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,ue,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,ue,0);else if(w.depthTexture.format===ji)lt(w)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ae,ie,ue,0,pe):r.framebufferTexture2D(r.FRAMEBUFFER,ae,ie,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(C){let w=n.get(C),X=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=Z}if(C.depthTexture&&!w.__autoAllocateDepthBuffer)if(X)for(let Z=0;Z<6;Z++)Ve(w.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?Ve(w.__webglFramebuffer[0],C,0):Ve(w.__webglFramebuffer,C,0)}else if(X){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=r.createRenderbuffer(),Se(w.__webglDepthbuffer[Z],C,!1);else{let te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,ue)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Se(w.__webglDepthbuffer,C,!1);else{let te=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function We(C,w,X){let Z=n.get(C);w!==void 0&&J(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),X!==void 0&&Oe(C)}function tt(C){let w=C.texture,X=n.get(C),Z=n.get(w);C.addEventListener("dispose",v);let te=C.textures,ue=C.isWebGLCubeRenderTarget===!0,pe=te.length>1;if(pe||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=w.version,a.memory.textures++),ue){X.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer[ie]=[];for(let ae=0;ae<w.mipmaps.length;ae++)X.__webglFramebuffer[ie][ae]=r.createFramebuffer()}else X.__webglFramebuffer[ie]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){X.__webglFramebuffer=[];for(let ie=0;ie<w.mipmaps.length;ie++)X.__webglFramebuffer[ie]=r.createFramebuffer()}else X.__webglFramebuffer=r.createFramebuffer();if(pe)for(let ie=0,ae=te.length;ie<ae;ie++){let oe=n.get(te[ie]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&lt(C)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ie=0;ie<te.length;ie++){let ae=te[ie];X.__webglColorRenderbuffer[ie]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer[ie]);let oe=s.convert(ae.format,ae.colorSpace),Ce=s.convert(ae.type),me=_(ae.internalFormat,oe,Ce,ae.normalized,ae.colorSpace,C.isXRRenderTarget===!0),ge=ct(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,me,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ie,r.RENDERBUFFER,X.__webglColorRenderbuffer[ie])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(X.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),se(r.TEXTURE_CUBE_MAP,w);for(let ie=0;ie<6;ie++)if(w.mipmaps&&w.mipmaps.length>0)for(let ae=0;ae<w.mipmaps.length;ae++)J(X.__webglFramebuffer[ie][ae],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ae);else J(X.__webglFramebuffer[ie],C,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);p(w)&&y(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ie=0,ae=te.length;ie<ae;ie++){let oe=te[ie],Ce=n.get(oe),me=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(me=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(me,Ce.__webglTexture),se(me,oe),J(X.__webglFramebuffer,C,oe,r.COLOR_ATTACHMENT0+ie,me,0),p(oe)&&y(me)}t.unbindTexture()}else{let ie=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ie=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Z.__webglTexture),se(ie,w),w.mipmaps&&w.mipmaps.length>0)for(let ae=0;ae<w.mipmaps.length;ae++)J(X.__webglFramebuffer[ae],C,w,r.COLOR_ATTACHMENT0,ie,ae);else J(X.__webglFramebuffer,C,w,r.COLOR_ATTACHMENT0,ie,0);p(w)&&y(ie),t.unbindTexture()}C.depthBuffer&&Oe(C)}function He(C){let w=C.textures;for(let X=0,Z=w.length;X<Z;X++){let te=w[X];if(p(te)){let ue=S(C),pe=n.get(te).__webglTexture;t.bindTexture(ue,pe),y(ue),t.unbindTexture()}}}let $e=[],Et=[];function Pt(C){if(C.samples>0){if(lt(C)===!1){let w=C.textures,X=C.width,Z=C.height,te=r.COLOR_BUFFER_BIT,ue=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=n.get(C),ie=w.length>1;if(ie)for(let oe=0;oe<w.length;oe++)t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);let ae=C.texture.mipmaps;ae&&ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let oe=0;oe<w.length;oe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),ie){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,pe.__webglColorRenderbuffer[oe]);let Ce=n.get(w[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ce,0)}r.blitFramebuffer(0,0,X,Z,0,0,X,Z,te,r.NEAREST),c===!0&&($e.length=0,Et.length=0,$e.push(r.COLOR_ATTACHMENT0+oe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&($e.push(ue),Et.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Et)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ie)for(let oe=0;oe<w.length;oe++){t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,pe.__webglColorRenderbuffer[oe]);let Ce=n.get(w[oe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,pe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Ce,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let w=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ct(C){return Math.min(i.maxSamples,C.samples)}function lt(C){let w=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function k(C){let w=a.render.frame;h.get(C)!==w&&(h.set(C,w),C.update())}function _t(C,w){let X=C.colorSpace,Z=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==pn&&X!==In&&(et.getTransfer(X)===mt?(Z!==wn||te!==xn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",X)),w}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=We,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=J,this.useMultisampledRTT=lt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qy(r,e){function t(n,i=In){let s,a=et.getTransfer(i);if(n===xn)return r.UNSIGNED_BYTE;if(n===ac)return r.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Nh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lh)return r.BYTE;if(n===Dh)return r.SHORT;if(n===Tr)return r.UNSIGNED_SHORT;if(n===rc)return r.INT;if(n===Xn)return r.UNSIGNED_INT;if(n===_n)return r.FLOAT;if(n===Mn)return r.HALF_FLOAT;if(n===Uh)return r.ALPHA;if(n===kh)return r.RGB;if(n===wn)return r.RGBA;if(n===ei)return r.DEPTH_COMPONENT;if(n===ji)return r.DEPTH_STENCIL;if(n===cc)return r.RED;if(n===lc)return r.RED_INTEGER;if(n===Ki)return r.RG;if(n===hc)return r.RG_INTEGER;if(n===uc)return r.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Pa)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Aa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Aa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===fc||n===pc||n===mc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===fc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===bc||n===xc||n===vc||n===yc||n===Ia||n===_c)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===bc)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===vc)return s.COMPRESSED_R11_EAC;if(n===yc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ia)return s.COMPRESSED_RG11_EAC;if(n===_c)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Mc||n===wc||n===Sc||n===Ec||n===Tc||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic||n===Lc||n===Dc||n===Fc||n===Nc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ac)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Rc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ic)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Uc||n===kc||n===Oc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Uc)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Oc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bc||n===zc||n===La||n===Hc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Bc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===zc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,t_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Vt({vertexShader:e_,fragmentShader:t_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Te(new Gt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends Wn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new hu,p={},y=t.getContextAttributes(),S=null,_=null,M=[],x=[],T=new Ne,v=null,E=null,R=new Ht;R.viewport=new ut;let P=new Ht;P.viewport=new ut;let L=[R,P],B=new Jo,N=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let W=M[q];return W===void 0&&(W=new fr,M[q]=W),W.getTargetRaySpace()},this.getControllerGrip=function(q){let W=M[q];return W===void 0&&(W=new fr,M[q]=W),W.getGripSpace()},this.getHand=function(q){let W=M[q];return W===void 0&&(W=new fr,M[q]=W),W.getHandSpace()};function Q(q){let W=x.indexOf(q.inputSource);if(W===-1)return;let he=M[W];he!==void 0&&(he.update(q.inputSource,q.frame,l||a),he.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){i.removeEventListener("select",Q),i.removeEventListener("selectstart",Q),i.removeEventListener("selectend",Q),i.removeEventListener("squeeze",Q),i.removeEventListener("squeezestart",Q),i.removeEventListener("squeezeend",Q),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let q=0;q<M.length;q++){let W=x[q];W!==null&&(x[q]=null,M[q].disconnect(W))}N=null,U=null,g.reset();for(let q in p)delete p[q];if(e.setRenderTarget(S),f=null,d=null,u=null,i=null,_=null,le.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),E!==null){let q=E.camera;q.fov=E.fov,q.zoom=E.zoom,q.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(S=e.getRenderTarget(),i.addEventListener("select",Q),i.addEventListener("selectstart",Q),i.addEventListener("selectend",Q),i.addEventListener("squeeze",Q),i.addEventListener("squeezestart",Q),i.addEventListener("squeezeend",Q),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,de=null,J=null;y.depth&&(J=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?ji:ei,de=y.stencil?Ar:Xn);let Se={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Se),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new an(d.textureWidth,d.textureHeight,{format:wn,type:xn,depthTexture:new Wi(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new an(f.framebufferWidth,f.framebufferHeight,{format:wn,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),le.setContext(i),le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(q){for(let W=0;W<q.removed.length;W++){let he=q.removed[W],de=x.indexOf(he);de>=0&&(x[de]=null,M[de].disconnect(he))}for(let W=0;W<q.added.length;W++){let he=q.added[W],de=x.indexOf(he);if(de===-1){for(let Se=0;Se<M.length;Se++)if(Se>=x.length){x.push(he),de=Se;break}else if(x[Se]===null){x[Se]=he,de=Se;break}if(de===-1)break}let J=M[de];J&&J.connect(he)}}let V=new D,O=new D;function $(q,W,he){V.setFromMatrixPosition(W.matrixWorld),O.setFromMatrixPosition(he.matrixWorld);let de=V.distanceTo(O),J=W.projectionMatrix.elements,Se=he.projectionMatrix.elements,Ve=J[14]/(J[10]-1),Oe=J[14]/(J[10]+1),We=(J[9]+1)/J[5],tt=(J[9]-1)/J[5],He=(J[8]-1)/J[0],$e=(Se[8]+1)/Se[0],Et=Ve*He,Pt=Ve*$e,ct=de/(-He+$e),lt=ct*-He;if(W.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(lt),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),J[10]===-1)q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let k=Ve+ct,_t=Oe+ct,at=Et-lt,C=Pt+(de-lt),w=We*Oe/_t*k,X=tt*Oe/_t*k;q.projectionMatrix.makePerspective(at,C,w,X,k,_t),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function I(q,W){W===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(W.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let W=q.near,he=q.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(he=g.depthFar)),B.near=P.near=R.near=W,B.far=P.far=R.far=he,(N!==B.near||U!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,U=B.far),B.layers.mask=q.layers.mask|6,R.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let de=q.parent,J=B.cameras;I(B,de);for(let Se=0;Se<J.length;Se++)I(J[Se],de);J.length===2?$(B,R,P):B.projectionMatrix.copy(R.projectionMatrix),E===null&&q.isPerspectiveCamera&&(E={camera:q,fov:q.fov,zoom:q.zoom}),G(q,B,de)};function G(q,W,he){he===null?q.matrix.copy(W.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(W.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(W.projectionMatrix),q.projectionMatrixInverse.copy(W.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(q){return p[q]};let ne=null;function se(q,W){if(h=W.getViewerPose(l||a),m=W,h!==null){let he=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let de=!1;he.length!==B.cameras.length&&(B.cameras.length=0,de=!0);for(let Oe=0;Oe<he.length;Oe++){let We=he[Oe],tt=null;if(f!==null)tt=f.getViewport(We);else{let $e=u.getViewSubImage(d,We);tt=$e.viewport,Oe===0&&(e.setRenderTargetTextures(_,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(_))}let He=L[Oe];He===void 0&&(He=new Ht,He.layers.enable(Oe),He.viewport=new ut,L[Oe]=He),He.matrix.fromArray(We.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(We.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),de===!0&&B.cameras.push(He)}let J=i.enabledFeatures;if(J&&J.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Oe=u.getDepthInformation(he[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,i.renderState)}if(J&&J.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<he.length;Oe++){let We=he[Oe].camera;if(We){let tt=p[We];tt||(tt=new ma,p[We]=tt);let He=u.getCameraImage(We);tt.sourceTexture=He}}}}for(let he=0;he<M.length;he++){let de=x[he],J=M[he];de!==null&&J!==void 0&&J.update(de,W,l||a)}ne&&ne(q,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let le=new Mp;le.setAnimationLoop(se),this.setAnimationLoop=function(q){ne=q},this.dispose=function(){}}},n_=new Re,Rp=new je;Rp.set(-1,0,0,0,1,0,0,0,1);function i_(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Gh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,y,S,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,y,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,_=y.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(n_.makeRotationFromEuler(_)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Rp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function s_(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,M){let x=M.program;n.uniformBlockBinding(_,x)}function l(_,M){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",y));let T=M.program;n.updateUBOMapping(_,T);let v=e.render.frame;s[_.id]!==v&&(d(_),s[_.id]=v)}function h(_){let M=u();_.__bindingPointIndex=M;let x=r.createBuffer(),T=_.__size,v=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,v),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let M=i[_.id],x=_.uniforms,T=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let v=0,E=x.length;v<E;v++){let R=x[v];if(Array.isArray(R))for(let P=0,L=R.length;P<L;P++)f(R[P],v,P,T);else f(R,v,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,M,x,T){if(b(_,M,x,T)===!0){let v=_.__offset,E=_.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let L=E[P],B=p(L);m(L,_.__data,R),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,_.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,v,_.__data)}}function m(_,M,x){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,x)}function b(_,M,x,T){let v=_.value,E=M+"_"+x;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{let R=T[E];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function g(_){let M=_.uniforms,x=0,T=16;for(let E=0,R=M.length;E<R;E++){let P=Array.isArray(M[E])?M[E]:[M[E]];for(let L=0,B=P.length;L<B;L++){let N=P[L],U=Array.isArray(N.value)?N.value:[N.value];for(let Q=0,F=U.length;Q<F;Q++){let j=U[Q],V=p(j),O=x%T,$=O%V.boundary,I=O+$;x+=$,I!==0&&T-I<V.storage&&(x+=T-I),N.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=V.storage}}}let v=x%T;return v>0&&(x+=T-v),_.__size=x,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ue("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function S(){for(let _ in i)r.deleteBuffer(i[_]);a=[],i={},s={}}return{bind:c,update:l,dispose:S}}var r_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function a_(){return ci===null&&(ci=new gr(r_,16,16,Ki,Mn),ci.name="DFG_LUT",ci.minFilter=Ut,ci.magFilter=Ut,ci.wrapS=Cn,ci.wrapT=Cn,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var jc=class{constructor(e={}){let{canvas:t=jf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=xn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=f,g=new Set([uc,hc,lc]),p=new Set([xn,Xn,Tr,Ar,ac,oc]),y=new Uint32Array(4),S=new Int32Array(4),_=new D,M=null,x=null,T=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,L=null,B=null,N=null,U=null;this._outputColorSpace=vt;let Q=0,F=0,j=null,V=-1,O=null,$=new ut,I=new ut,G=null,ne=new ye(0),se=0,le=t.width,q=t.height,W=1,he=null,de=null,J=new ut(0,0,le,q),Se=new ut(0,0,le,q),Ve=!1,Oe=new Vi,We=!1,tt=!1,He=new Re,$e=new D,Et=new ut,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ct=!1;function lt(){return j===null?W:1}let k=n;function _t(A,z){return t.getContext(A,z)}let at,C,w,X,Z,te,ue,pe,ie,ae,oe,Ce,me,ge,ke,Ge,Ye,H,be,re,xe,Ee,ce;try{let A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Nn,!1),k===null){let z="webgl2";if(k=_t(z,A),k===null)throw _t(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(A){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),qe("WebGLRenderer: "+A.message),A}function Be(){at=new fv(k),at.init(),xe=new Qy(k,at),C=new iv(k,at,e,xe),w=new Jy(k,at),C.reversedDepthBuffer&&d&&w.buffers.depth.setReversed(!0),B=k.createFramebuffer(),N=k.createFramebuffer(),U=k.createFramebuffer(),X=new gv(k),Z=new ky,te=new Zy(k,at,w,Z,C,xe,X),ue=new dv(R),pe=new xg(k),Ee=new tv(k,pe),ie=new pv(k,pe,X,Ee),ae=new xv(k,ie,pe,Ee,X),H=new bv(k,C,te),ke=new sv(Z),oe=new Uy(R,ue,at,C,Ee,ke),Ce=new i_(R,Z),me=new By,ge=new qy(at),Ye=new ev(R,ue,w,ae,m,c),Ge=new $y(R,ae,C),ce=new s_(k,X,C,w),be=new nv(k,at,X),re=new mv(k,at,X),X.programs=oe.programs,R.capabilities=C,R.extensions=at,R.properties=Z,R.renderLists=me,R.shadowMap=Ge,R.state=w,R.info=X}b!==xn&&(E=new yv(b,t.width,t.height,o,i,s));let De=new uu(R,k);this.xr=De,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=at.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=at.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(le,q,!1))},this.getSize=function(A){return A.set(le,q)},this.setSize=function(A,z,ee=!0){if(De.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,q=z,t.width=Math.floor(A*W),t.height=Math.floor(z*W),ee===!0&&(t.style.width=A+"px",t.style.height=z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(le*W,q*W).floor()},this.setDrawingBufferSize=function(A,z,ee){le=A,q=z,W=ee,t.width=Math.floor(A*ee),t.height=Math.floor(z*ee),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(b===xn){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){Ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(J)},this.setViewport=function(A,z,ee,K){A.isVector4?J.set(A.x,A.y,A.z,A.w):J.set(A,z,ee,K),w.viewport($.copy(J).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(Se)},this.setScissor=function(A,z,ee,K){A.isVector4?Se.set(A.x,A.y,A.z,A.w):Se.set(A,z,ee,K),w.scissor(I.copy(Se).multiplyScalar(W).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(A){w.setScissorTest(Ve=A)},this.setOpaqueSort=function(A){he=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,ee=!0){let K=0;if(A){let Y=!1;if(j!==null){let we=j.texture.format;Y=g.has(we)}if(Y){let we=j.texture.type,Pe=p.has(we),_e=Ye.getClearColor(),Ie=Ye.getClearAlpha(),Fe=_e.r,Ze=_e.g,rt=_e.b;Pe?(y[0]=Fe,y[1]=Ze,y[2]=rt,y[3]=Ie,k.clearBufferuiv(k.COLOR,0,y)):(S[0]=Fe,S[1]=Ze,S[2]=rt,S[3]=Ie,k.clearBufferiv(k.COLOR,0,S))}else K|=k.COLOR_BUFFER_BIT}z&&(K|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(K|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&k.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Nn,!1),Ye.dispose(),me.dispose(),ge.dispose(),Z.dispose(),ue.dispose(),ae.dispose(),Ee.dispose(),ce.dispose(),oe.dispose(),De.dispose(),De.removeEventListener("sessionstart",md),De.removeEventListener("sessionend",gd),ts.stop()};function Tt(A){A.preventDefault(),ra("WebGLRenderer: Context Lost."),P=!0}function ft(){ra("WebGLRenderer: Context Restored."),P=!1;let A=X.autoReset,z=Ge.enabled,ee=Ge.autoUpdate,K=Ge.needsUpdate,Y=Ge.type;Be(),X.autoReset=A,Ge.enabled=z,Ge.autoUpdate=ee,Ge.needsUpdate=K,Ge.type=Y}function Nn(A){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $n(A){let z=A.target;z.removeEventListener("dispose",$n),r0(z)}function r0(A){a0(A),Z.remove(A)}function a0(A){let z=Z.get(A).programs;z!==void 0&&(z.forEach(function(ee){oe.releaseProgram(ee)}),A.isShaderMaterial&&oe.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,ee,K,Y,we){z===null&&(z=Pt);let Pe=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_e=l0(A,z,ee,K,Y);w.setMaterial(K,Pe);let Ie=ee.index,Fe=1;if(K.wireframe===!0){if(Ie=ie.getWireframeAttribute(ee),Ie===void 0)return;Fe=2}let Ze=ee.drawRange,rt=ee.attributes.position,Le=Ze.start*Fe,pt=(Ze.start+Ze.count)*Fe;we!==null&&(Le=Math.max(Le,we.start*Fe),pt=Math.min(pt,(we.start+we.count)*Fe)),Ie!==null?(Le=Math.max(Le,0),pt=Math.min(pt,Ie.count)):rt!=null&&(Le=Math.max(Le,0),pt=Math.min(pt,rt.count));let Bt=pt-Le;if(Bt<0||Bt===1/0)return;Ee.setup(Y,K,_e,ee,Ie);let Rt,Mt=be;if(Ie!==null&&(Rt=pe.get(Ie),Mt=re,Mt.setIndex(Rt)),Y.isMesh)K.wireframe===!0?(w.setLineWidth(K.wireframeLinewidth*lt()),Mt.setMode(k.LINES)):Mt.setMode(k.TRIANGLES);else if(Y.isLine){let nn=K.linewidth;nn===void 0&&(nn=1),w.setLineWidth(nn*lt()),Y.isLineSegments?Mt.setMode(k.LINES):Y.isLineLoop?Mt.setMode(k.LINE_LOOP):Mt.setMode(k.LINE_STRIP)}else Y.isPoints?Mt.setMode(k.POINTS):Y.isSprite&&Mt.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(at.get("WEBGL_multi_draw"))Mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let nn=Y._multiDrawStarts,Ae=Y._multiDrawCounts,dn=Y._multiDrawCount,ht=Ie?pe.get(Ie).bytesPerElement:1,An=Z.get(K).currentProgram.getUniforms();for(let Jn=0;Jn<dn;Jn++)An.setValue(k,"_gl_DrawID",Jn),Mt.render(nn[Jn]/ht,Ae[Jn])}else if(Y.isInstancedMesh)Mt.renderInstances(Le,Bt,Y.count);else if(ee.isInstancedBufferGeometry){let nn=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ae=Math.min(ee.instanceCount,nn);Mt.renderInstances(Le,Bt,Ae)}else Mt.render(Le,Bt)};function pd(A,z,ee,K){L!==null&&A.isNodeMaterial&&L.setObject(K,A),We===!0&&ke.setState(A,ee,!1),A.transparent===!0&&A.side===St&&A.forceSinglePass===!1?(A.side=Xt,A.needsUpdate=!0,$a(A,z,K),A.side=ai,A.needsUpdate=!0,$a(A,z,K),A.side=St):$a(A,z,K)}this.compile=function(A,z,ee=null){ee===null&&(ee=A),L!==null&&L.renderStart(A,z,ee),x=ge.get(ee),x.init(z),v.push(x),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),A!==ee&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights(),L!==null&&L.updateLights(x.state.lightsArray),tt=this.localClippingEnabled,We=ke.init(this.clippingPlanes,tt),We===!0&&ke.setGlobalState(this.clippingPlanes,z),L!==null&&Ge.render(x.state.shadowsArray,ee,z);let K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let we=Y.material;if(we)if(Array.isArray(we))for(let Pe=0;Pe<we.length;Pe++){let _e=we[Pe];pd(_e,ee,z,Y),K.add(_e)}else pd(we,ee,z,Y),K.add(we)}),x=v.pop(),L!==null&&L.renderEnd(),K},this.compileAsync=function(A,z,ee=null){let K=this.compile(A,z,ee);return new Promise(Y=>{function we(){if(K.forEach(function(Pe){let Ie=Z.get(Pe).currentProgram;(Ie===void 0||Ie.isReady())&&K.delete(Pe)}),K.size===0){Y(A);return}setTimeout(we,10)}at.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ol=null;function o0(A){Ol&&Ol(A)}function md(){ts.stop()}function gd(){ts.start()}let ts=new Mp;ts.setAnimationLoop(o0),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(A){Ol=A,De.setAnimationLoop(A),A===null?ts.stop():ts.start()},De.addEventListener("sessionstart",md),De.addEventListener("sessionend",gd),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(A,z);let ee=De.enabled===!0&&De.isPresenting===!0,K=E!==null&&(j===null||ee)&&E.begin(R,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(z),z=De.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,z,j),x=ge.get(A,v.length),x.init(z),x.state.textureUnits=te.getTextureUnits(),v.push(x),He.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Oe.setFromProjectionMatrix(He,Hn,z.reversedDepth),tt=this.localClippingEnabled,We=ke.init(this.clippingPlanes,tt),M=me.get(A,T.length),M.init(),T.push(M),De.enabled===!0&&De.isPresenting===!0){let Pe=R.xr.getDepthSensingMesh();Pe!==null&&Bl(Pe,z,-1/0,R.sortObjects)}Bl(A,z,0,R.sortObjects),M.finish(),L!==null&&L.updateLights(x.state.lightsArray),R.sortObjects===!0&&M.sort(he,de),ct=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ct&&Ye.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),We===!0&&ke.beginShadows();let Y=x.state.shadowsArray;if(Ge.render(Y,A,z),We===!0&&ke.endShadows(),(K&&E.hasRenderPass())===!1){let Pe=M.opaque,_e=M.transmissive;if(x.setupLights(),z.isArrayCamera){let Ie=z.cameras;if(_e.length>0)for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){let rt=Ie[Fe];xd(Pe,_e,A,rt)}ct&&Ye.render(A);for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){let rt=Ie[Fe];bd(M,A,rt,rt.viewport)}}else _e.length>0&&xd(Pe,_e,A,z),ct&&Ye.render(A),bd(M,A,z)}j!==null&&F===0&&(te.updateMultisampleRenderTarget(j),te.updateRenderTargetMipmap(j)),K&&E.end(R),A.isScene===!0&&A.onAfterRender(R,A,z),Ee.resetDefaultState(),V=-1,O=null,v.pop(),v.length>0?(x=v[v.length-1],te.setTextureUnits(x.state.textureUnits),We===!0&&ke.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,L!==null&&L.renderEnd()};function Bl(A,z,ee,K){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLightProbeGrid)x.pushLightProbeGrid(A);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Oe)){K&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(He);let Pe=ae.update(A),_e=A.material;_e.visible&&M.push(A,Pe,_e,ee,Et.z,null,z)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Oe))){let Pe=ae.update(A),_e=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Et.copy(Pe.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(He)),Array.isArray(_e)){let Ie=Pe.groups;for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){let rt=Ie[Fe],Le=_e[rt.materialIndex];Le&&Le.visible&&M.push(A,Pe,Le,ee,Et.z,rt,z)}}else _e.visible&&M.push(A,Pe,_e,ee,Et.z,null,z)}}let we=A.children;for(let Pe=0,_e=we.length;Pe<_e;Pe++)Bl(we[Pe],z,ee,K)}function bd(A,z,ee,K){let{opaque:Y,transmissive:we,transparent:Pe}=A;x.setupLightsView(ee),We===!0&&ke.setGlobalState(R.clippingPlanes,ee),K&&w.viewport($.copy(K)),Y.length>0&&Ya(Y,z,ee),we.length>0&&Ya(we,z,ee),Pe.length>0&&Ya(Pe,z,ee),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function xd(A,z,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[K.id]===void 0){let Le=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");x.state.transmissionRenderTarget[K.id]=new an(1,1,{generateMipmaps:!0,type:Le?Mn:xn,minFilter:gn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let we=x.state.transmissionRenderTarget[K.id],Pe=K.viewport||$;we.setSize(Pe.z*R.transmissionResolutionScale,Pe.w*R.transmissionResolutionScale);let _e=R.getRenderTarget(),Ie=R.getActiveCubeFace(),Fe=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(ne),se=R.getClearAlpha(),se<1&&R.setClearColor(16777215,.5),R.clear(),ct&&Ye.render(ee);let Ze=R.toneMapping;R.toneMapping=mn;let rt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),We===!0&&ke.setGlobalState(R.clippingPlanes,K),Ya(A,ee,K),te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we),at.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let pt=0,Bt=z.length;pt<Bt;pt++){let Rt=z[pt],{object:Mt,geometry:nn,material:Ae,group:dn}=Rt;if(Ae.side===St&&Mt.layers.test(K.layers)){let ht=Ae.side;Ae.side=Xt,Ae.needsUpdate=!0,vd(Mt,ee,K,nn,Ae,dn),Ae.side=ht,Ae.needsUpdate=!0,Le=!0}}Le===!0&&(te.updateMultisampleRenderTarget(we),te.updateRenderTargetMipmap(we))}R.setRenderTarget(_e,Ie,Fe),R.setClearColor(ne,se),rt!==void 0&&(K.viewport=rt),R.toneMapping=Ze}function Ya(A,z,ee){let K=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,we=A.length;Y<we;Y++){let Pe=A[Y],{object:_e,geometry:Ie,group:Fe}=Pe,Ze=Pe.material;Ze.allowOverride===!0&&K!==null&&(Ze=K),_e.layers.test(ee.layers)&&vd(_e,z,ee,Ie,Ze,Fe)}}function vd(A,z,ee,K,Y,we){L!==null&&Y.isNodeMaterial&&L.setObject(A,Y),A.onBeforeRender(R,z,ee,K,Y,we),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,z,ee,K,A,we),Y.transparent===!0&&Y.side===St&&Y.forceSinglePass===!1?(Y.side=Xt,Y.needsUpdate=!0,R.renderBufferDirect(ee,z,K,Y,A,we),Y.side=ai,Y.needsUpdate=!0,R.renderBufferDirect(ee,z,K,Y,A,we),Y.side=St):R.renderBufferDirect(ee,z,K,Y,A,we),A.onAfterRender(R,z,ee,K,Y,we)}function $a(A,z,ee){z.isScene!==!0&&(z=Pt);let K=Z.get(A),Y=x.state.lights,we=x.state.shadowsArray,Pe=Y.state.version,_e=oe.getParameters(A,Y.state,we,z,ee,x.state.lightProbeGridArray),Ie=oe.getProgramCacheKey(_e),Fe=K.programs;K.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,K.fog=z.fog;let Ze=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;K.envMap=ue.get(A.envMap||K.environment,Ze),K.envMapRotation=K.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",$n),Fe=new Map,K.programs=Fe);let rt=Fe.get(Ie);if(rt!==void 0){if(K.currentProgram===rt&&K.lightsStateVersion===Pe)return _d(A,_e),rt}else _e.uniforms=oe.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,ee,_e),A.onBeforeCompile(_e,R),rt=oe.acquireProgram(_e,Ie),Fe.set(Ie,rt),K.uniforms=_e.uniforms;let Le=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Le.clippingPlanes=ke.uniform),_d(A,_e),K.needsLights=u0(A),K.lightsStateVersion=Pe,K.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.sunLights.value=Y.state.sun,Le.sunLightShadows.value=Y.state.sunShadow,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.sunShadowMatrix.value=Y.state.sunShadowMatrix,Le.sunShadowCascade.value=Y.state.sunShadowCascade,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=x.state.lightProbeGridArray.length>0,K.currentProgram=rt,K.uniformsList=null,rt}function yd(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=Lr.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function _d(A,z){let ee=Z.get(A);ee.outputColorSpace=z.outputColorSpace,ee.batching=z.batching,ee.batchingColor=z.batchingColor,ee.instancing=z.instancing,ee.instancingColor=z.instancingColor,ee.instancingMorph=z.instancingMorph,ee.skinning=z.skinning,ee.morphTargets=z.morphTargets,ee.morphNormals=z.morphNormals,ee.morphColors=z.morphColors,ee.morphTargetsCount=z.morphTargetsCount,ee.numClippingPlanes=z.numClippingPlanes,ee.numIntersection=z.numClipIntersection,ee.vertexAlphas=z.vertexAlphas,ee.vertexTangents=z.vertexTangents,ee.toneMapping=z.toneMapping}function c0(A,z){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(z.matrixWorld);for(let ee=0,K=A.length;ee<K;ee++){let Y=A[ee];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function l0(A,z,ee,K,Y){z.isScene!==!0&&(z=Pt),te.resetTextureUnits();let we=z.fog,Pe=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?z.environment:null,_e=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:et.workingColorSpace,Ie=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Fe=ue.get(K.envMap||Pe,Ie),Ze=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!ee.morphAttributes.position,pt=!!ee.morphAttributes.normal,Bt=!!ee.morphAttributes.color,Rt=mn;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=R.toneMapping);let Mt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,nn=Mt!==void 0?Mt.length:0,Ae=Z.get(K),dn=x.state.lights;if(We===!0&&(tt===!0||A!==O)){let At=A===O&&K.id===V;ke.setState(K,A,At)}let ht=!1;K.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==dn.state.version||Ae.outputColorSpace!==_e||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Fe||K.fog===!0&&Ae.fog!==we||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ke.numPlanes||Ae.numIntersection!==ke.numIntersection)||Ae.vertexAlphas!==Ze||Ae.vertexTangents!==rt||Ae.morphTargets!==Le||Ae.morphNormals!==pt||Ae.morphColors!==Bt||Ae.toneMapping!==Rt||Ae.morphTargetsCount!==nn||!!Ae.lightProbeGrid!=x.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Ae.__version=K.version);let An=Ae.currentProgram;ht===!0&&(An=$a(K,z,Y),L&&K.isNodeMaterial&&L.onUpdateProgram(K,An,Ae));let Jn=!1,Di=!1,zs=!1,bt=An.getUniforms(),Ft=Ae.uniforms;if(w.useProgram(An.program)&&(Jn=!0,Di=!0,zs=!0),K.id!==V&&(V=K.id,Di=!0),Ae.needsLights){let At=c0(x.state.lightProbeGridArray,Y);Ae.lightProbeGrid!==At&&(Ae.lightProbeGrid=At,Di=!0)}if(Jn||O!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(k,"projectionMatrix",A.projectionMatrix),bt.setValue(k,"viewMatrix",A.matrixWorldInverse);let Ni=bt.map.cameraPosition;Ni!==void 0&&Ni.setValue(k,$e.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),O!==A&&(O=A,Di=!0,zs=!0)}if(Ae.needsLights&&(dn.state.sunShadowMap.length>0&&bt.setValue(k,"sunShadowMap",dn.state.sunShadowMap,te),dn.state.directionalShadowMap.length>0&&bt.setValue(k,"directionalShadowMap",dn.state.directionalShadowMap,te),dn.state.spotShadowMap.length>0&&bt.setValue(k,"spotShadowMap",dn.state.spotShadowMap,te),dn.state.pointShadowMap.length>0&&bt.setValue(k,"pointShadowMap",dn.state.pointShadowMap,te)),Y.isSkinnedMesh){bt.setOptional(k,Y,"bindMatrix"),bt.setOptional(k,Y,"bindMatrixInverse");let At=Y.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),bt.setValue(k,"boneTexture",At.boneTexture,te))}Y.isBatchedMesh&&(bt.setOptional(k,Y,"batchingTexture"),bt.setValue(k,"batchingTexture",Y._matricesTexture,te),bt.setOptional(k,Y,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",Y._indirectTexture,te),bt.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",Y._colorsTexture,te));let Fi=ee.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&H.update(Y,ee,An),(Di||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,bt.setValue(k,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&z.environment!==null&&(Ft.envMapIntensity.value=z.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=a_()),Di){if(bt.setValue(k,"toneMappingExposure",R.toneMappingExposure),Ae.needsLights&&h0(Ft,zs),we&&K.fog===!0&&Ce.refreshFogUniforms(Ft,we),Ce.refreshMaterialUniforms(Ft,K,W,q,x.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let At=Ae.lightProbeGrid;Ft.probesSH.value=At.texture,Ft.probesMin.value.copy(At.boundingBox.min),Ft.probesMax.value.copy(At.boundingBox.max),Ft.probesResolution.value.copy(At.resolution)}Lr.upload(k,yd(Ae),Ft,te)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Lr.upload(k,yd(Ae),Ft,te),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(k,"center",Y.center),bt.setValue(k,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(k,"normalMatrix",Y.normalMatrix),bt.setValue(k,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){let At=K.uniformsGroups;for(let Ni=0,Hs=At.length;Ni<Hs;Ni++){let wd=At[Ni];ce.update(wd,An),ce.bind(wd,An)}}return An}function h0(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function u0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,z,ee){let K=Z.get(A);K.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Z.get(A.texture).__webglTexture=z,Z.get(A.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let ee=Z.get(A);ee.__webglFramebuffer=z,ee.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,ee=0){j=A,Q=z,F=ee;let K=null,Y=!1,we=!1;if(A){let _e=Z.get(A);if(_e.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(k.FRAMEBUFFER,_e.__webglFramebuffer),$.copy(A.viewport),I.copy(A.scissor),G=A.scissorTest,w.viewport($),w.scissor(I),w.setScissorTest(G),V=-1;return}else if(_e.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(_e.__hasExternalTextures)te.rebindTextures(A,Z.get(A.texture).__webglTexture,Z.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ze=A.depthTexture;if(_e.__boundDepthTexture!==Ze){if(Ze!==null&&Z.has(Ze)&&(A.width!==Ze.image.width||A.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let Ie=A.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(we=!0);let Fe=Z.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?K=Fe[z][ee]:K=Fe[z],Y=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?K=Z.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?K=Fe[ee]:K=Fe,$.copy(A.viewport),I.copy(A.scissor),G=A.scissorTest}else $.copy(J).multiplyScalar(W).floor(),I.copy(Se).multiplyScalar(W).floor(),G=Ve;if(ee!==0&&(K=B),w.bindFramebuffer(k.FRAMEBUFFER,K)&&w.drawBuffers(A,K),w.viewport($),w.scissor(I),w.setScissorTest(G),Y){let _e=Z.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,ee)}else if(we){let _e=z;for(let Ie=0;Ie<A.textures.length;Ie++){let Fe=Z.get(A.textures[Ie]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ie,Fe.__webglTexture,ee,_e)}}else if(A!==null&&ee!==0){let _e=Z.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,_e.__webglTexture,ee)}V=-1};function Md(A){let z=Z.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=C.textureFormatReadable(A.format),z.__typeReadable=C.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,ee,K,Y,we,Pe,_e=0){if(!(A&&A.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){w.bindFramebuffer(k.FRAMEBUFFER,Ie);try{let Fe=A.textures[_e],Ze=Fe.format,rt=Fe.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let Le=Md(Fe);if(Le.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-K&&ee>=0&&ee<=A.height-Y&&k.readPixels(z,ee,K,Y,xe.convert(Ze),xe.convert(rt),we)}finally{let Fe=j!==null?Z.get(j).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,z,ee,K,Y,we,Pe,_e=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Z.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie)if(z>=0&&z<=A.width-K&&ee>=0&&ee<=A.height-Y){w.bindFramebuffer(k.FRAMEBUFFER,Ie);let Fe=A.textures[_e],Ze=Fe.format,rt=Fe.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e);let Le=Md(Fe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,we.byteLength,k.STREAM_READ),k.readPixels(z,ee,K,Y,xe.convert(Ze),xe.convert(rt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let Bt=j!==null?Z.get(j).__webglFramebuffer:null;w.bindFramebuffer(k.FRAMEBUFFER,Bt);let Rt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Yf(k,Rt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,we),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(pt),k.deleteSync(Rt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,ee=0){let K=Math.pow(2,-ee),Y=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Pe=z!==null?z.x:0,_e=z!==null?z.y:0;te.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,ee,0,0,Pe,_e,Y,we),w.unbindTexture()},this.copyTextureToTexture=function(A,z,ee=null,K=null,Y=0,we=0){let Pe,_e,Ie,Fe,Ze,rt,Le,pt,Bt,Rt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(ee!==null)Pe=ee.max.x-ee.min.x,_e=ee.max.y-ee.min.y,Ie=ee.isBox3?ee.max.z-ee.min.z:1,Fe=ee.min.x,Ze=ee.min.y,rt=ee.isBox3?ee.min.z:0;else{let Ft=Math.pow(2,-Y);Pe=Math.floor(Rt.width*Ft),_e=Math.floor(Rt.height*Ft),A.isDataArrayTexture?Ie=Rt.depth:A.isData3DTexture?Ie=Math.floor(Rt.depth*Ft):Ie=1,Fe=0,Ze=0,rt=0}K!==null?(Le=K.x,pt=K.y,Bt=K.z):(Le=0,pt=0,Bt=0);let Mt=xe.convert(z.format),nn=xe.convert(z.type),Ae;z.isData3DTexture?(te.setTexture3D(z,0),Ae=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(te.setTexture2DArray(z,0),Ae=k.TEXTURE_2D_ARRAY):(te.setTexture2D(z,0),Ae=k.TEXTURE_2D),w.activeTexture(k.TEXTURE0),w.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),w.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),w.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let dn=w.getParameter(k.UNPACK_ROW_LENGTH),ht=w.getParameter(k.UNPACK_IMAGE_HEIGHT),An=w.getParameter(k.UNPACK_SKIP_PIXELS),Jn=w.getParameter(k.UNPACK_SKIP_ROWS),Di=w.getParameter(k.UNPACK_SKIP_IMAGES);w.pixelStorei(k.UNPACK_ROW_LENGTH,Rt.width),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Rt.height),w.pixelStorei(k.UNPACK_SKIP_PIXELS,Fe),w.pixelStorei(k.UNPACK_SKIP_ROWS,Ze),w.pixelStorei(k.UNPACK_SKIP_IMAGES,rt);let zs=A.isDataArrayTexture||A.isData3DTexture,bt=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let Ft=Z.get(A),Fi=Z.get(z),At=Z.get(Ft.__renderTarget),Ni=Z.get(Fi.__renderTarget);w.bindFramebuffer(k.READ_FRAMEBUFFER,At.__webglFramebuffer),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Hs=0;Hs<Ie;Hs++)zs&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(A).__webglTexture,Y,rt+Hs),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,we,Bt+Hs)),k.blitFramebuffer(Fe,Ze,Pe,_e,Le,pt,Pe,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Z.has(A)){let Ft=Z.get(A),Fi=Z.get(z);w.bindFramebuffer(k.READ_FRAMEBUFFER,N),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let At=0;At<Ie;At++)zs?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ft.__webglTexture,Y,rt+At):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ft.__webglTexture,Y),bt?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Fi.__webglTexture,we,Bt+At):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Fi.__webglTexture,we),Y!==0?k.blitFramebuffer(Fe,Ze,Pe,_e,Le,pt,Pe,_e,k.COLOR_BUFFER_BIT,k.NEAREST):bt?k.copyTexSubImage3D(Ae,we,Le,pt,Bt+At,Fe,Ze,Pe,_e):k.copyTexSubImage2D(Ae,we,Le,pt,Fe,Ze,Pe,_e);w.bindFramebuffer(k.READ_FRAMEBUFFER,null),w.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Ae,we,Le,pt,Bt,Pe,_e,Ie,Mt,nn,Rt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Ae,we,Le,pt,Bt,Pe,_e,Ie,Mt,Rt.data):k.texSubImage3D(Ae,we,Le,pt,Bt,Pe,_e,Ie,Mt,nn,Rt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,we,Le,pt,Pe,_e,Mt,nn,Rt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,we,Le,pt,Rt.width,Rt.height,Mt,Rt.data):k.texSubImage2D(k.TEXTURE_2D,we,Le,pt,Pe,_e,Mt,nn,Rt);w.pixelStorei(k.UNPACK_ROW_LENGTH,dn),w.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht),w.pixelStorei(k.UNPACK_SKIP_PIXELS,An),w.pixelStorei(k.UNPACK_SKIP_ROWS,Jn),w.pixelStorei(k.UNPACK_SKIP_IMAGES,Di),we===0&&z.generateMipmaps&&k.generateMipmap(Ae),w.unbindTexture()},this.initRenderTarget=function(A){Z.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){Q=0,F=0,j=null,w.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function Cp(){let r=n=>{n.preventDefault()};for(let n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,r,{passive:!1});document.addEventListener("touchmove",n=>{if(n.touches.length>1){n.preventDefault();return}(!n.target.closest||!n.target.closest(".scroll, input[type=range]"))&&n.preventDefault()},{passive:!1});let e=0;document.addEventListener("touchend",n=>{let i=n.timeStamp,s=n.target;i-e<320&&!(s.closest&&s.closest("button, input, textarea, select, a, .ctl, #joy, canvas"))&&n.preventDefault(),e=i},{passive:!1}),document.addEventListener("dblclick",r,{passive:!1}),document.addEventListener("contextmenu",n=>{n.target.closest&&n.target.closest("input, textarea")||n.preventDefault()}),document.addEventListener("selectstart",n=>{n.target.closest&&n.target.closest("input, textarea")||n.preventDefault()}),window.addEventListener("wheel",n=>{n.ctrlKey&&n.preventDefault()},{passive:!1}),window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["+","-","=","0"].includes(n.key)&&n.preventDefault()});let t=()=>{let n=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.height=n+"px",window.scrollTo(0,0)};window.addEventListener("resize",t),window.visualViewport&&window.visualViewport.addEventListener("resize",t),window.addEventListener("scroll",()=>window.scrollTo(0,0)),t()}function Pp(){let r=document.documentElement;document.fullscreenElement||!r.requestFullscreen||matchMedia("(pointer: coarse)").matches&&r.requestFullscreen({navigationUI:"hide"}).then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}var Cs=null;async function Ps(r){try{r&&!Cs&&navigator.wakeLock&&(Cs=await navigator.wakeLock.request("screen"),Cs.addEventListener("release",()=>{Cs=null})),!r&&Cs&&(await Cs.release(),Cs=null)}catch{}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ps.want&&Ps(!0)});var Me=(r,e=document)=>e.querySelector(r);var fe=r=>String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var Yi=(r,e,t,n)=>r+(e-r)*(1-Math.exp(-t*n)),Is=r=>{if(!(r>0))return"\u2014";let e=Math.floor(r/60),t=r-e*60;return(e?e+":"+(t<10?"0":""):"")+t.toFixed(e?1:2)},jn=r=>/^https:\/\//.test(r||"")||/^(assets|data:image)/.test(r||"")?r:"";function Sn(r){let e=document.createElement("template");return e.innerHTML=r.trim(),e.content.firstElementChild}var o_=()=>document.getElementById("toasts");function yt(r,{kind:e="",img:t="",ms:n=2600}={}){let i=document.createElement("div");if(i.className="toast "+e,jn(t)){let o=document.createElement("img");o.src=t,o.alt="",i.appendChild(o)}let s=document.createElement("span");s.textContent=r,i.appendChild(s);let a=o_();for(a.appendChild(i);a.children.length>4;)a.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .4s",i.style.opacity="0",setTimeout(()=>i.remove(),400)},n)}var Dt={get(r,e){try{let t=localStorage.getItem("nitro."+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem("nitro."+r,JSON.stringify(e))}catch{}},del(r){try{localStorage.removeItem("nitro."+r)}catch{}}},$c={get(r,e){try{let t=sessionStorage.getItem("nitro."+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{sessionStorage.setItem("nitro."+r,JSON.stringify(e))}catch{}},del(r){try{sessionStorage.removeItem("nitro."+r)}catch{}}},Ur=class{constructor(){this.h=new Map}on(e,t){return this.h.has(e)||this.h.set(e,new Set),this.h.get(e).add(t),()=>this.h.get(e).delete(t)}emit(e,...t){let n=this.h.get(e);if(n)for(let i of[...n])try{i(...t)}catch(s){console.error(e,s)}}};function Lp(r,e,t,n){let i=new ArrayBuffer(29),s=new DataView(i);return s.setUint8(0,1),s.setUint16(1,e&65535,!0),s.setFloat32(3,t,!0),s.setFloat32(7,r.x,!0),s.setFloat32(11,r.y,!0),s.setFloat32(15,r.z,!0),s.setInt16(19,Math.round(r.yaw*1e4),!0),s.setInt16(21,du(r.vx*50),!0),s.setInt16(23,du(r.vz*50),!0),s.setInt8(25,Math.round(Math.max(-1,Math.min(1,r.steer))*127)),s.setUint8(26,n&255),s.setInt16(27,du(r.vy*50),!0),i}var Ls=1,Dp=2,Fp=4,Np=8,Oa=16,Ip=20,c_=50;function Up(r,e=[]){let t=new DataView(r);if(t.getUint8(0)!==2)return null;let n=t.getFloat32(1,!0),i=t.getUint16(5,!0);e.length=0;let s=7;for(let a=0;a<i&&s+15<=r.byteLength;a++,s+=15)e.push({slot:t.getUint8(s),t:n+t.getInt16(s+1,!0)/1e3,x:t.getInt16(s+3,!0)/Ip,y:t.getInt16(s+5,!0)/c_,z:t.getInt16(s+7,!0)/Ip,yaw:t.getInt16(s+9,!0)/1e4,speed:t.getUint16(s+11,!0)/50,steer:t.getInt8(s+13)/127,flags:t.getUint8(s+14)});return{t:n,cars:e}}function du(r){return r=Math.round(r),r<-32768?-32768:r>32767?32767:r}var kp={kty:"EC",crv:"P-256",x:"-HWyHBO4TOHMYdvWTMVi207F0m-ojFeaaQKjO56VWUY",y:"Dwf083PQCROJkxS3WMZynQlos7UPbCdQTffDyx1sGBc"},Op="nitro-live-kvhydijbu8jf";var l_="https://api.github.com/repos/kaufmanbora-lang/nitro/contents/live.json",h_=r=>{try{let e=new URL(r);return e.protocol==="https:"&&(/\.trycloudflare\.com$/.test(e.hostname)||/\.ts\.net$/.test(e.hostname))}catch{return!1}},fu=class extends Ur{constructor(){super(),this.ws=null,this.state="idle",this.offset=0,this.samples=[],this.fail=0,this.base="",this.hello=()=>({t:"hello",v:1})}async discover(){let e=location.hostname;if(!/github\.io$/.test(e))return location.origin;let t=async l=>{try{let h=await fetch(l,{cache:"no-store"});return h.ok?await h.json():null}catch{return null}},[n,i,s]=await Promise.all([t("live.json?t="+Date.now()),t(l_).then(l=>{try{return l&&l.content?JSON.parse(atob(l.content.replace(/\s/g,""))):null}catch{return null}}),u_()]),a=Dt.get("server"),o=(new URLSearchParams(location.search).get("h")||"").replace(/^@/,"").toLowerCase(),c=[n,i,...s,a].filter(l=>l&&h_(l.url));o&&c.some(l=>(l.n||"").toLowerCase()===o)&&(c=c.filter(l=>(l.n||"").toLowerCase()===o)),c.sort((l,h)=>(h.live?1:0)-(l.live?1:0)||(h.ts||0)-(l.ts||0)),c=c.filter((l,h)=>c.findIndex(u=>u.url===l.url)===h);for(let l of c)try{if((await fetch(l.url+"/health",{cache:"no-store",signal:AbortSignal.timeout?AbortSignal.timeout(5e3):void 0})).ok)return Dt.set("server",{url:l.url,ts:l.ts||0}),l.url}catch{}return null}async connect(){if(this.state==="connecting"||this.state==="open")return;this.state="connecting",this.emit("state","connecting");let e=await this.discover();if(!e){this.state="idle",this.emit("state","offline"),this.retryLater(5e3);return}this.base=e;let t=e.replace(/^http/,"ws")+"/ws",n;try{n=new WebSocket(t)}catch{this.state="idle",this.retryLater(3e3);return}n.binaryType="arraybuffer",this.ws=n,n.onopen=()=>{this.state="open",this.fail=0,this.samples=[],this.send(this.hello()),this.ping(),clearInterval(this.pingT),this.pingT=setInterval(()=>this.ping(),2e3),this.emit("state","open")},n.onmessage=i=>{if(i.data instanceof ArrayBuffer){this.emit("bin",i.data);return}let s;try{s=JSON.parse(i.data)}catch{return}if(s.t==="pong")return this.onPong(s);this.emit(s.t,s)},n.onclose=()=>{this.ws===n&&(clearInterval(this.pingT),this.ws=null,this.state="idle",this.fail++,this.emit("state","closed"),this.retryLater(Math.min(8e3,600*2**Math.min(4,this.fail))))},n.onerror=()=>{}}retryLater(e){clearTimeout(this.retryT),this.retryT=setTimeout(()=>this.connect(),e)}send(e){return this.ws&&this.ws.readyState===1?(this.ws.send(JSON.stringify(e)),!0):!1}sendBin(e){this.ws&&this.ws.readyState===1&&this.ws.bufferedAmount<64e3&&this.ws.send(e)}ping(){this.send({t:"ping",c:performance.now()})}onPong(e){let t=performance.now(),n=t-e.c;if(n<0||n>1e4)return;this.samples.push({rtt:n,off:e.s+n/2-Date.now()}),this.samples.length>12&&this.samples.shift();let i=this.samples.reduce((s,a)=>a.rtt<s.rtt?a:s);this.offset=this.samples.length===1?i.off:this.offset+(i.off-this.offset)*.3,this.rtt=i.rtt}now(){return Date.now()+this.offset}},dt=new fu;async function u_(){try{if(!crypto.subtle)return[];let r=await fetch(`https://ntfy.sh/${Op}/json?poll=1&since=13h`,{cache:"no-store",signal:AbortSignal.timeout?AbortSignal.timeout(6e3):void 0});if(!r.ok)return[];let e=(await r.text()).split(`
`).filter(Boolean).slice(-60),t=await crypto.subtle.importKey("jwk",kp,{name:"ECDSA",namedCurve:"P-256"},!1,["verify"]),n=[];for(let i of e)try{let s=JSON.parse(JSON.parse(i).message||"null");if(!s||typeof s.u!="string"||typeof s.s!="string"||!Number.isFinite(s.t)||s.t>Date.now()+5*6e4)continue;let a=Uint8Array.from(atob(s.s.replace(/-/g,"+").replace(/_/g,"/")),c=>c.charCodeAt(0)),o=`${s.u}|${s.t}|${s.live?1:0}|${s.n||""}`;await crypto.subtle.verify({name:"ECDSA",hash:"SHA-256"},t,a,new TextEncoder().encode(o))&&n.push({url:s.u,ts:s.t,live:!!s.live,n:s.n||""})}catch{}return n.filter(i=>!n.some(s=>s.url===i.url&&s.ts>i.ts))}catch{return[]}}var d_={gfx:"auto",res:1,shadows:!0,fps:60,dist:1,vol:.9,volEngine:.8,volFx:.9,volMusic:.45,controls:"buttons",assist:!1,cam:"chase",vibrate:!0,showFps:!1},Je=Object.assign({},d_,Dt.get("settings",{})),pu=new Ur;function Kn(r,e){Je[r]=e,Dt.set("settings",Je),pu.emit("change",r,e)}var Ds={low:{name:"\u041D\u0438\u0437\u043A\u0430\u044F",pr:[1,1.5],aa:!0,shadows:0,dist:520,trees:.4,grass:0,detail:.6,particles:.4,lod0:!1,lod1Cars:5,normalMaps:!1,env:64,crowd:.4},medium:{name:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",pr:[1.25,2],aa:!0,shadows:1024,dist:800,trees:.7,grass:.5,detail:.8,particles:.7,lod0:!0,lod1Cars:9,normalMaps:!0,env:128,crowd:.7},high:{name:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",pr:[1.5,2.5],aa:!0,shadows:2048,dist:1150,trees:1,grass:1,detail:1,particles:1,lod0:!0,lod1Cars:14,normalMaps:!0,env:256,crowd:1},ultra:{name:"\u0423\u043B\u044C\u0442\u0440\u0430",pr:[1.5,3],aa:!0,shadows:4096,dist:1600,trees:1.35,grass:1.4,detail:1.25,particles:1.25,lod0:!0,lod1Cars:24,normalMaps:!0,env:256,crowd:1.2}};function f_(r){let e=matchMedia("(pointer: coarse)").matches,t="";try{let o=r.getExtension("WEBGL_debug_renderer_info");o&&(t=r.getParameter(o.UNMASKED_RENDERER_WEBGL)||"")}catch{}let n=navigator.deviceMemory||4,i=navigator.hardwareConcurrency||4,s=t.toLowerCase();if(!e)return/rtx|radeon rx|arc|apple m[2-9]|geforce (gtx 1[6-9]|[2-9]\d{3})/.test(s)?"ultra":/intel|uhd|iris|mali|adreno|swiftshader|llvmpipe/.test(s)?"medium":"high";if(/apple/.test(s)||/iphone|ipad/i.test(navigator.userAgent))return"high";let a=/adreno \(tm\) (\d+)|adreno (\d+)/.exec(s);if(a){let o=+(a[1]||a[2]);return o>=640?"high":o>=610?"medium":"low"}return/mali-g(6[8-9]|7\d|[89]\d|\d{3})|immortalis|xclipse/.test(s)?"high":/mali-g(5[2-9]|6\d)/.test(s)?"medium":/mali|powervr|sgx|adreno/.test(s)||n<=3?"low":n>=6?"medium":"low"}var Zc=class{constructor(e){this.canvas=e;let t=document.createElement("canvas"),n=t.getContext("webgl2")||t.getContext("webgl");this.auto=n?f_(n):"low";try{n&&n.getExtension("WEBGL_lose_context")?.loseContext()}catch{}this.qName=Je.gfx==="auto"?this.auto:Je.gfx,this.q=Ds[this.qName]||Ds.medium,this.renderer=new jc({canvas:e,antialias:this.q.aa,powerPreference:"high-performance",stencil:!1,depth:!0});let i=this.renderer;i.outputColorSpace=vt,i.toneMapping=Ea,i.toneMappingExposure=1,i.shadowMap.enabled=!!this.q.shadows&&Je.shadows,i.shadowMap.type=ws,this.maxAniso=Math.min(8,i.capabilities.getMaxAnisotropy()),this.scene=new yi,this.camera=new Ht(62,1,.25,this.q.dist*2.2),this.dpr=Math.min(window.devicePixelRatio||1,3),this.scale=Math.min(this.q.pr[1],this.dpr)*(Je.res||1),this.ft=16,this.fpsT=0,this.frames=0,this.fps=60,this.lastAdj=0,this.resize(),addEventListener("resize",()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize())}setQuality(e){this.qName=e==="auto"?this.auto:e,this.q=Ds[this.qName]||Ds.medium,this.renderer.shadowMap.enabled=!!this.q.shadows&&Je.shadows,this.scale=Math.min(this.q.pr[1],this.dpr)*(Je.res||1),this.camera.far=this.q.dist*2.2,this.camera.updateProjectionMatrix(),this.resize()}resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.w=e,this.h=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?72:60,this.camera.updateProjectionMatrix()}adapt(e){this.ft=this.ft*.92+e*.08,this.frames++,this.fpsT+=e,this.fpsT>1e3&&(this.fps=Math.round(this.frames*1e3/this.fpsT),this.frames=0,this.fpsT=0);let t=performance.now();if(t-this.lastAdj<800)return;let n=1e3/(Je.fps||60),i=Math.min(this.q.pr[1],this.dpr)*(Je.res||1),s=Math.min(this.q.pr[0]*(Je.res||1),i),a=this.scale,o=this.ft>n*1.4;o&&a<=s+.001&&this.renderer.shadowMap.enabled?(this.slowT=(this.slowT||0)+(t-(this.lastChk||t)))>4e3&&(this.renderer.shadowMap.enabled=!1,this.scene.traverse(c=>{c.material&&(Array.isArray(c.material)?c.material:[c.material]).forEach(l=>l.needsUpdate=!0)}),this.slowT=0):this.slowT=0,this.lastChk=t,o&&a>s?a=Math.max(s,a-.05):this.ft<n*.9&&a<i&&(a=Math.min(i,a+.05)),a!==this.scale&&(this.scale=a,this.lastAdj=t,this.renderer.setPixelRatio(a),this.renderer.setSize(this.w,this.h,!1))}render(e=this.scene,t=this.camera){this.renderer.render(e,t)}};var Ba=class r extends Te{constructor(){let e=r.SkyShader,t=new Vt({name:e.name,uniforms:Cr.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Xt,depthWrite:!1});super(new Lt(1,1,1),t),this.isSky=!0}};Ba.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new D},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var Bp={city:{elev:19,azim:235,turbidity:5.5,rayleigh:1.5,mie:.004,mieG:.82,exposure:.62,sun:16769213,sunI:3.6,hemiSky:12571890,hemiGround:5918790,hemiI:.55,fog:13028822,fogK:.55,envI:1},snow:{elev:24,azim:200,turbidity:2.2,rayleigh:.9,mie:.003,mieG:.8,exposure:.55,sun:16774374,sunI:3.2,hemiSky:13624063,hemiGround:15265526,hemiI:.75,fog:14477040,fogK:.5,envI:1.1},offroad:{elev:38,azim:150,turbidity:3.5,rayleigh:1.25,mie:.004,mieG:.85,exposure:.6,sun:16773592,sunI:3.8,hemiSky:12376309,hemiGround:5200442,hemiI:.6,fog:12044502,fogK:.5,envI:1}};function zp(r,e){let t=Bp[e]||Bp.city,{renderer:n,scene:i}=r,s=new D().setFromSphericalCoords(1,Ci.degToRad(90-t.elev),Ci.degToRad(t.azim)),a=new Ba;a.scale.setScalar(1e3);let o=a.material.uniforms;o.turbidity.value=t.turbidity,o.rayleigh.value=t.rayleigh,o.mieCoefficient.value=t.mie,o.mieDirectionalG.value=t.mieG,o.sunPosition.value.copy(s);let c=new yi;c.add(a);let l=new Te(new wi(900,32,16,0,Math.PI*2,Math.PI/2+.02,Math.PI/2),new Qt({color:new ye(t.hemiGround).multiplyScalar(.8),side:Xt}));c.add(l);let h=r.q.env>=256?512:r.q.env>=128?256:128,u=new Fr(h,{type:Mn,generateMipmaps:!0,minFilter:gn}),d=new Mr(1,2e3,u),f=n.toneMapping;n.toneMapping=mn,d.update(n,c),n.toneMapping=f;let m=new Dr(n),b=m.fromCubemap(u.texture);m.dispose(),i.background=u.texture,i.backgroundIntensity=1,i.environment=b.texture,i.environmentIntensity=t.envI,n.toneMappingExposure=t.exposure;let g=new ye(t.fog);i.fog=new ca(g,r.q.dist*.18,r.q.dist*1.02);let p=new _s(t.hemiSky,t.hemiGround,t.hemiI);i.add(p);let y=new Ai(t.sun,t.sunI);if(y.position.copy(s).multiplyScalar(200),y.castShadow=!!r.q.shadows&&r.renderer.shadowMap.enabled,y.castShadow){y.shadow.mapSize.set(r.q.shadows,r.q.shadows);let _=r.q.shadows>=4096?70:r.q.shadows>=2048?55:40;Object.assign(y.shadow.camera,{left:-_,right:_,top:_,bottom:-_,near:10,far:500}),y.shadow.bias=-4e-4,y.shadow.normalBias=.04,y.shadow.radius=3}i.add(y,y.target);let S=new D;return{L:t,sun:y,hemi:p,sunDir:s,cubeRT:u,envRT:b,fogCol:g,follow(_){if(!y.castShadow)return;let M=y.shadow.camera.right,x=2*M/y.shadow.mapSize.x;S.copy(_);let T=new Re().lookAt(s,new D,new D(0,1,0)),v=T.clone().invert();S.applyMatrix4(v),S.x=Math.round(S.x/x)*x,S.y=Math.round(S.y/x)*x,S.applyMatrix4(T),y.target.position.copy(S),y.position.copy(S).addScaledVector(s,220)},dispose(){i.remove(p,y,y.target),u.dispose(),b.dispose(),a.material.dispose(),a.geometry.dispose(),l.geometry.dispose(),l.material.dispose(),i.background=null,i.environment=null,i.fog=null}}}function Qc(r=1){let e=new Uint8Array(512),t=new Uint8Array(256),n=r>>>0||1,i=()=>(n=n*1664525+1013904223>>>0)/4294967296;for(let u=0;u<256;u++)t[u]=u;for(let u=255;u>0;u--){let d=Math.floor(i()*(u+1)),f=t[u];t[u]=t[d],t[d]=f}for(let u=0;u<512;u++)e[u]=t[u&255];let s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],a=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;function c(u,d){let f=(u+d)*a,m=Math.floor(u+f),b=Math.floor(d+f),g=(m+b)*o,p=u-(m-g),y=d-(b-g),S=p>y?1:0,_=1-S,M=p-S+o,x=y-_+o,T=p-1+2*o,v=y-1+2*o,E=m&255,R=b&255,P=0,L;if(L=.5-p*p-y*y,L>0){let B=s[e[E+e[R]]&7];L*=L,P+=L*L*(B[0]*p+B[1]*y)}if(L=.5-M*M-x*x,L>0){let B=s[e[E+S+e[R+_]]&7];L*=L,P+=L*L*(B[0]*M+B[1]*x)}if(L=.5-T*T-v*v,L>0){let B=s[e[E+1+e[R+1]]&7];L*=L,P+=L*L*(B[0]*T+B[1]*v)}return 70*P}return{n2:c,fbm:(u,d,f=5)=>{let m=0,b=1,g=.5;for(let p=0;p<f;p++)m+=g*c(u*b,d*b),b*=2.03,g*=.5;return m},ridged:(u,d,f=5)=>{let m=0,b=1,g=.5,p=1;for(let y=0;y<f;y++){let S=1-Math.abs(c(u*b,d*b));S*=S*p,p=Math.min(1,S*1.6),m+=S*g,b*=2.1,g*=.5}return m},rnd:i}}var Zt=(r,e,t)=>{let n=Math.max(0,Math.min(1,(t-r)/(e-r)));return n*n*(3-2*n)};var mu=new Map,p_=new vs,za=0,Gp=[];function En(r,{srgb:e=!1,gfx:t=null,repeat:n=!0}={}){let i=r+(e?":s":"");if(mu.has(i))return mu.get(i);za++;let s=p_.load("assets/tex/"+r+".webp",()=>Hp(),void 0,()=>Hp());return s.colorSpace=e?vt:In,n&&(s.wrapS=s.wrapT=Vn),s.anisotropy=t?t.maxAniso:4,mu.set(i,s),s}function Hp(){za--,za<=0&&(za=0,Gp.splice(0).forEach(r=>r()))}var Vp=()=>new Promise(r=>za?Gp.push(r):r());function Yt(r,e,t,{srgb:n=!0,repeat:i=!0,aniso:s=8}={}){let a=document.createElement("canvas");a.width=r,a.height=e;let o=a.getContext("2d");t(o,r,e);let c=new _i(a);return c.colorSpace=n?vt:In,i&&(c.wrapS=c.wrapT=Vn),c.anisotropy=s,c}function $i(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new it,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Wp(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=Wp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Wp(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Ke(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function gu(r,e){if(e===Oh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Rr||e===Da){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Rr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Fs(r){let e=new Map,t=new Map,n=r.clone();return qp(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function qp(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)qp(r.children[n],e.children[n],t)}var el=class extends ii{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new tl(t,st.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new tl(t,st.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Uu(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ri.extractUrlBase(e);a=Ri.resolveURL(l,this.path)}else a=Ri.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new yr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===$p){try{a[st.KHR_BINARY_GLTF]=new ku(e)}catch(u){i&&i(u);return}s=JSON.parse(a[st.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Wu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case st.KHR_MATERIALS_UNLIT:a[u]=new _u;break;case st.KHR_DRACO_MESH_COMPRESSION:a[u]=new Ou(s,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:a[u]=new Bu;break;case st.KHR_MESH_QUANTIZATION:a[u]=new zu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function m_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function kt(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},yu=class{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new ye(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ai(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wa(h),l.distance=u;break;case"spot":l=new Ma(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),hi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},_u=class{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return Qt}extendParams(e,t,n){let i=[];e.color=new ye(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vt))}return Promise.all(i)}},Mu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},wu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(s,s)}return Promise.all(i)}},Su=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Eu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},Tu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new ye(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],pn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Au=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Ru=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new ye().setRGB(s[0],s[1],s[2],pn),Promise.all(i)}},Cu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Pu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new ye().setRGB(s[0],s[1],s[2],pn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}},Iu=class{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Lu=class{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Jt:null}extendMaterialParams(e,t){let n=kt(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Du=class{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Fu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Nu=class{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},tl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Uu=class{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Dn.TRIANGLES&&l.mode!==Dn.TRIANGLE_STRIP&&l.mode!==Dn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Re,g=new D,p=new wt,y=new D(1,1,1),S=new en(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&y.fromBufferAttribute(c.SCALE,M),S.setMatrixAt(M,b.compose(g,p,y));let _=null;for(let M in c)if(M==="_COLOR_0"){let x=c[M];S.instanceColor=new It(x.array,x.itemSize,x.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(_===null){let T=S.geometry;_=new it,_.name=T.name;for(let v in T.attributes)_.setAttribute(v,T.attributes[v]);for(let v in T.morphAttributes)_.morphAttributes[v]=T.morphAttributes[v];T.index!==null&&_.setIndex(T.index),_.morphTargetsRelative=T.morphTargetsRelative;for(let v of T.groups)_.addGroup(v.start,v.count,v.materialIndex);T.boundingBox!==null&&(_.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(_.boundingSphere=T.boundingSphere.clone()),_.drawRange.start=T.drawRange.start,_.drawRange.count=T.drawRange.count,_.userData=Object.assign({},T.userData),S.geometry=_}let x=c[M];_.setAttribute(M,new It(x.array,x.itemSize,x.normalized))}Ct.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},$p="glTF",Ha=12,Xp={JSON:1313821514,BIN:5130562},ku=class{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==$p)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Ha,s=new DataView(e,Ha),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Xp.JSON){let l=new Uint8Array(e,Ha+a,o);this.content=n.decode(l)}else if(c===Xp.BIN){let l=Ha+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ou=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Gu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Gu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=kr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,pn,d)})})}},Bu=class{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},zu=class{constructor(){this.name=st.KHR_MESH_QUANTIZATION}},nl=class extends ti{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,y=1-g,S=p-d+u;for(let _=0;_!==o;_++){let M=a[b+_+o],x=a[b+_+c]*h,T=a[m+_+o],v=a[m+_]*h;s[_]=y*M+S*x+g*T+p*v}return s}},g_=new wt,Hu=class extends nl{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return g_.fromArray(s).normalize().toArray(s),s}},Dn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},kr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jp={9728:Nt,9729:Ut,9984:sc,9985:Er,9986:Ts,9987:gn},Kp={33071:Cn,33648:cr,10497:Vn},bu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},b_={CUBICSPLINE:void 0,LINEAR:hs,STEP:ls},xu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function x_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ze({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ai})),r.DefaultMaterial}function Ns(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function hi(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function v_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function y_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function __(r){let e,t=r.extensions&&r.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=r.indices+":"+vu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+vu(r.targets[n]);return e}function vu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Vu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function M_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var w_=new Re,Wu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new m_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new vs(this.options.manager):this.textureLoader=new Sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ns(s,o,i),hi(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ri.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=bu[i.type],o=kr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ke(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=bu[i.type],l=kr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,S=t.cache.get(y);S||(b=new l(o,p*f,i.count*f/h),S=new ps(b,f/h),t.cache.add(y,S)),g=new Gi(S,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new Ke(b,c,m);if(i.sparse!==void 0){let p=bu.SCALAR,y=kr[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,M=new y(a[1],S,i.sparse.count*p),x=new l(a[2],_,i.sparse.count*c);o!==null&&(g=new Ke(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let T=0,v=M.length;T<v;T++){let E=M[T];if(g.setX(E,x[T*c]),c>=2&&g.setY(E,x[T*c+1]),c>=3&&g.setZ(E,x[T*c+2]),c>=4&&g.setW(E,x[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=jp[d.magFilter]||Ut,h.minFilter=jp[d.minFilter]||gn,h.wrapS=Kp[d.wrapS]||Vn,h.wrapT=Kp[d.wrapT]||Vn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Nt&&h.minFilter!==Ut,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new Wt(b);g.needsUpdate=!0,d(g)}),t.load(Ri.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),hi(u,a),u.userData.mimeType=a.mimeType||M_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[st.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new xr,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new br,ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ze}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[st.KHR_MATERIALS_UNLIT]){let u=i[st.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new ye(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],pn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=St);let h=s.alphaMode||xu.OPAQUE;if(h===xu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===xu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Qt&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Qt){let u=s.emissiveFactor;o.emissive=new ye().setRGB(u[0],u[1],u[2],pn)}return s.emissiveTexture!==void 0&&a!==Qt&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,vt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),hi(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ns(i,u,s),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Yp(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=__(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[st.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Yp(new it,l,t),l.mode===Dn.TRIANGLE_STRIP?d=d.then(f=>gu(f,Da)):l.mode===Dn.TRIANGLE_FAN&&(d=d.then(f=>gu(f,Rr))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?x_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,y=l[f];if(g.mode===Dn.TRIANGLES||g.mode===Dn.TRIANGLE_STRIP||g.mode===Dn.TRIANGLE_FAN||g.mode===void 0){let S=s.isSkinnedMesh===!0,_=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");S&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&_?new ha(b,y):new Te(b,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===Dn.LINES)p=new da(b,y);else if(g.mode===Dn.LINE_STRIP)p=new gs(b,y);else if(g.mode===Dn.LINE_LOOP)p=new fa(b,y);else if(g.mode===Dn.POINTS)p=new bs(b,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&y_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),hi(p,s),g.extensions&&Ns(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ns(i,u[0],s),u[0];let d=new Xe;s.extensions&&Ns(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(Ci.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new si(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),hi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Re;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ua(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,y=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let S=0,_=d.length;S<_;S++){let M=d[S],x=f[S],T=m[S],v=b[S],E=g[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let R=n._createAnimationTracks(M,x,T,v,E);if(R)for(let P=0;P<R.length;P++)p.push(R[P])}let y=new ni(s,void 0,p);return hi(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,w_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new D().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new mr:l.length>1?h=new Xe:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),hi(h,s),s.extensions&&Ns(n,h,s),s.matrix!==void 0){let u=new Re;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Xe;n.name&&(s.name=i.createUniqueName(n.name)),hi(s,n),n.extensions&&Ns(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?s.add(Fs(d)):s.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof ln||d instanceof Wt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ji[s.path]===Ji.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ji[s.path]){case Ji.weights:h=Ei;break;case Ji.rotation:h=Pn;break;case Ji.translation:case Ji.scale:h=qn;break;default:switch(n.itemSize){case 1:h=Ei;break;case 2:case 3:default:h=qn;break}break}let u=i.interpolation!==void 0?b_[i.interpolation]:hs,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let b=new h(c[f]+"."+Ji[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Pn?Hu:nl;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function S_(r,e,t){let n=e.attributes,i=new qt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){let h=Vu(kr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new D,c=new D;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=Vu(kr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new cn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Yp(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=Gu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return et.workingColorSpace!==pn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),hi(r,e),S_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?v_(r,e.targets,t):r})}var Jp=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),S=0;S<p.length;++S){var _=p.charCodeAt(S);y[S]=_>96?_-97:_>64?_-39:_+4}for(var M=0,S=0;S<p.length;++S)y[M++]=y[S]<60?n[y[S]]:(y[S]-60)*64+y[++S];return y.buffer.slice(0,M)}function c(p,y,S,_,M,x,T){var v=p.exports.sbrk,E=_+3&-4,R=v(E*M),P=v(x.length),L=new Uint8Array(p.exports.memory.buffer);L.set(x,P);var B=y(R,_,M,P,x.length);if(B==0&&T&&T(R,E,M),S.set(L.subarray(R,R+_*M)),v(R-v(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(S){var _=S.data;y.pending-=_.count,y.requests[_.id][_.action](_.value),delete y.requests[_.id]},y}function m(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),S=new Blob([y],{type:"text/javascript"}),_=URL.createObjectURL(S),M=u.length;M<p;++M)u[M]=f(_);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(_)}function b(p,y,S,_,M){for(var x=u[0],T=1;T<u.length;++T)u[T].pending<x.pending&&(x=u[T]);return new Promise(function(v,E){var R=new Uint8Array(S),P=++d;x.pending+=p,x.requests[P]={resolve:v,reject:E},x.object.postMessage({id:P,count:p,size:y,source:R,mode:_,filter:M},[R.buffer])})}function g(p){var y=p.data;self.ready.then(function(S){if(!y.id)return self.close();try{var _=new Uint8Array(y.count*y.size);c(S,S.exports[y.mode],_,y.count,y.size,y.source,S.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:_},[_.buffer])}catch(M){self.postMessage({id:y.id,count:y.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,y,S,_,M){c(s,s.exports.meshopt_decodeVertexBuffer,p,y,S,_,s.exports[l[M]])},decodeIndexBuffer:function(p,y,S,_){c(s,s.exports.meshopt_decodeIndexBuffer,p,y,S,_)},decodeIndexSequence:function(p,y,S,_){c(s,s.exports.meshopt_decodeIndexSequence,p,y,S,_)},decodeGltfBuffer:function(p,y,S,_,M,x){c(s,s.exports[h[M]],p,y,S,_,s.exports[l[x]])},decodeGltfBufferAsync:function(p,y,S,_,M){return u.length>0?b(p,y,S,h[_],l[M]):a.then(function(){var x=new Uint8Array(p*y);return c(s,s.exports[h[_]],x,p,y,S,s.exports[l[M]]),x})}}})();var Tn={city:{id:"city",name:"\u0413\u043E\u0440\u043E\u0434",title:"\u0413\u0440\u0430\u043D-\u043F\u0440\u0438 \u0421\u0438\u0442\u0438",desc:"\u0423\u043B\u0438\u0447\u043D\u0430\u044F \u0433\u043E\u043D\u043E\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430 \u043F\u043E\u0441\u0440\u0435\u0434\u0438 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441\u0430: \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B, \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u0443 \u0440\u0435\u043A\u0438, \u0442\u043E\u043D\u043D\u0435\u043B\u044C",car:"gtr",icon:"\u{1F3D9}\uFE0F",speedK:1},snow:{id:"snow",name:"\u0421\u043D\u0435\u0433",title:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u0430\u043B",desc:"\u0420\u0430\u043B\u043B\u0438 \u043F\u043E \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0438\u043D\u0435: \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u043E, \u0437\u0430\u043D\u043E\u0441\u044B, \u0441\u0435\u0440\u043F\u0430\u043D\u0442\u0438\u043D",car:"impreza",icon:"\u2744\uFE0F",speedK:1},offroad:{id:"offroad",name:"\u0413\u043E\u0440\u044B",title:"\u0413\u043E\u0440\u043D\u044B\u0439 \u043E\u0444\u0444\u0440\u043E\u0443\u0434",desc:"\u0414\u0436\u0438\u043F\u044B \u0432 \u0433\u043E\u0440\u0430\u0445: \u0442\u0440\u0430\u043C\u043F\u043B\u0438\u043D\u044B, \u0431\u0440\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u043A\u0443, \u0433\u0440\u044F\u0437\u044C",car:"sierra",icon:"\u26F0\uFE0F",speedK:1}},I1=Object.keys(Tn);var il=[["\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0440\u0430\u0441\u043D\u044B\u0439","#c8101e","m"],["\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A \u0441\u0438\u043D\u0438\u0439","#1f4fe0","m"],["\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0436\u0451\u043B\u0442\u044B\u0439","#ffc21a","s"],["\u0411\u0435\u043B\u044B\u0439 \u043F\u0435\u0440\u043B\u0430\u043C\u0443\u0442\u0440","#f2f1ec","p"],["\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439","#ff5e0a","s"],["\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439","#08875a","m"],["\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439","#6a1bc2","m"],["\u0420\u043E\u0437\u043E\u0432\u044B\u0439","#ff3d8f","p"],["\u0427\u0451\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0444\u0438\u0442","#141518","m"],["\u0411\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439","#00a9c8","m"],["\u041B\u0430\u0439\u043C","#8fe01a","s"],["\u0421\u0435\u0440\u0435\u0431\u0440\u043E","#aeb3bb","m"],["\u0417\u043E\u043B\u043E\u0442\u043E","#c99a1c","m"],["\u0412\u0438\u0448\u043D\u0451\u0432\u044B\u0439","#6b0d22","m"],["\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439","#63b7ff","p"],["\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u0447\u0451\u0440\u043D\u044B\u0439","#1b1c1e","x"],["\u041C\u0435\u0434\u044C","#b5652e","m"],["\u041C\u044F\u0442\u043D\u044B\u0439","#63dbb8","p"],["\u041D\u043E\u0447\u043D\u043E\u0439 \u0441\u0438\u043D\u0438\u0439","#0c1c58","m"],["\u041C\u0430\u043B\u0438\u043D\u043E\u0432\u044B\u0439","#c9004f","m"],["\u041A\u0438\u0441\u043B\u043E\u0442\u043D\u044B\u0439 \u0437\u0435\u043B\u0451\u043D\u044B\u0439","#39f51a","s"],["\u041F\u0435\u0441\u043E\u0447\u043D\u044B\u0439","#d4bc93","m"],["\u0425\u0430\u043A\u0438","#5f6a4a","x"],["\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u0441\u0435\u0440\u044B\u0439","#6b6f75","x"]];function Ot(r){if(r=Math.max(0,r|0),r<il.length){let[i,s,a]=il[r];return{n:r,name:i,color:s,finish:a}}let e=r*137.508%360,t=60+r%3*12,n=38+r%4*8;return{n:r,name:"\u0426\u0432\u0435\u0442 \u2116"+(r+1),color:E_(e,t,n),finish:["m","p","s"][r%3]}}function E_(r,e,t){e/=100,t/=100;let n=a=>(a+r/30)%12,i=e*Math.min(t,1-t),s=a=>t-i*Math.max(-1,Math.min(n(a)-3,Math.min(9-n(a),1)));return"#"+[s(0),s(8),s(4)].map(a=>Math.round(a*255).toString(16).padStart(2,"0")).join("")}var rm=new el;rm.setMeshoptDecoder(Jp);var Us=r=>new Promise((e,t)=>rm.load(r,n=>e(n),void 0,t));function T_(r,e){let t=new it;for(let[n,i]of Object.entries(r.attributes)){let s=new Float32Array(i.count*i.itemSize);for(let a=0;a<i.count;a++)for(let o=0;o<i.itemSize;o++)s[a*i.itemSize+o]=i.getComponent(a,o);t.setAttribute(n,new Ke(s,i.itemSize))}return r.index&&t.setIndex(new Ke(r.index.array.slice(),1)),t.applyMatrix4(e),t.attributes.normal&&t.normalizeNormals(),t.computeBoundingSphere(),t.computeBoundingBox(),t}function qu(r){r.updateMatrixWorld(!0);let e=[];return r.traverse(t=>{t.isMesh&&e.push({name:t.name,node:t.parent&&t.parent.name,geometry:T_(t.geometry,t.matrixWorld),material:t.material})}),e}var A_=r=>r<=.04045?r/12.92:((r+.055)/1.055)**2.4,sl=["FL","FR","RL","RR"];function am(r,e,t){let n=new D(...e.map(A_));r.userData.paintKey=n,r.onBeforeCompile=i=>{i.uniforms.paintKey={value:n},i.uniforms.paintCol=r.userData.paintCol||{value:new ye(1,1,1)},r.userData.paintCol=i.uniforms.paintCol,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 paintKey;
uniform vec3 paintCol;`).replace("#include <map_fragment>",`
        #ifdef USE_MAP
          vec4 texel = texture2D(map, vMapUv);
          float dk = distance(texel.rgb, paintKey);
          float msk = 1.0 - smoothstep(0.06, 0.28, dk);
          float shade = clamp(dot(texel.rgb, vec3(0.333)) / max(0.02, dot(paintKey, vec3(0.333))), 0.35, 1.6);
          ${t?"vec3 pc = vColor.rgb;":"vec3 pc = paintCol;"}
          diffuseColor.rgb = mix(texel.rgb, pc * shade, msk);
          diffuseColor.a *= texel.a;
        #endif`),t&&(i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",""))},r.customProgramCacheKey=()=>"livery"+(t?"i":"")}var Zp={m:{metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.06},p:{metalness:.3,roughness:.22,clearcoat:1,clearcoatRoughness:.04},s:{metalness:.02,roughness:.3,clearcoat:1,clearcoatRoughness:.05},x:{metalness:.15,roughness:.72,clearcoat:0,clearcoatRoughness:.5}};function R_(r,{src:e,key:t,hq:n,gold:i}){let s=Ot(r),a=i?{metalness:1,roughness:.18,clearcoat:1,clearcoatRoughness:.03}:Zp[s.finish]||Zp.m,o=n?new Jt({...a}):new ze({metalness:a.metalness,roughness:Math.min(.6,a.roughness+.08)}),c=new ye(i?"#d4a22a":s.color);return e&&e.map&&t?(o.map=e.map,o.color.set(1,1,1),o.userData.paintCol={value:c},am(o,t,!1)):o.color.copy(c),o.envMapIntensity=1.15,o.name="paint",o}var rl=class{constructor(e,t="assets/cars/"){this.id=e,this.base=t}async load(e,t){this.meta=await fetch(this.base+this.id+".json").then(a=>a.json());let n=await Promise.all([e.lod0?Us(this.base+this.id+"_0.glb"):null,Us(this.base+this.id+"_1.glb"),Us(this.base+this.id+"_2.glb")]);t&&t(1),[this.g0,this.g1,this.g2]=n,this.hq=e.lod0;let i=a=>{let o=/wheel_(FL|FR|RL|RR|L|R)\b/.exec(a.name+" "+(a.node||""));return o?o[1]:null},s=a=>a&&qu(a.scene).map(o=>({...o,wheel:i(o)}));if(this.p0=s(this.g0),this.p1=s(this.g1),this.p2=s(this.g2),this.p0){for(let a of this.p0)if(a.wheel){let o=this.meta.wheels[a.wheel].c;a.geometry.translate(-o[0],-o[1],-o[2])}}for(let a of this.p0||this.p1)a.material&&a.material.name==="paint"&&(this.paintSrc=a.material);return this}},Pi=class{constructor(e,t){this.a=e,this.root=new Xe,this.body=new Xe,this.root.add(this.body),this.wheels={},this.wheelPivots={};for(let i of sl){let s=new Xe;s.position.set(...e.meta.wheels[i].c);let a=new Xe;s.add(a),this.root.add(s),this.wheelPivots[i]=s,this.wheels[i]=a}let n=(i,s)=>{let a=new Te(i.geometry,i.material);return a.castShadow=!0,a.receiveShadow=!0,s.add(a),a};if(e.p0)for(let i of e.p0)n(i,i.wheel?this.wheels[i.wheel]:this.body);else for(let i of e.p1)if(i.wheel==="L"||i.wheel==="R")for(let s of sl)s[1]===i.wheel&&n(i,this.wheels[s]);else n(i,this.body);this.setPaint(t),this.spin=0}setPaint(e,t=!1){let n=this.a.paintSrc||(this.a.p1.find(s=>s.material&&s.material.name==="paint")||{}).material,i=R_(e,{src:n,key:this.a.meta.paintKey,hq:this.a.hq,gold:t});this.paintMat&&this.paintMat.dispose(),this.paintMat=i,this.root.traverse(s=>{s.isMesh&&s.material&&s.material.name==="paint"&&(s.material=i)})}update(e,t,n,i=0,s=0,a=null){let o=this.a.meta.wheels.FL.r;this.spin+=t/o*e;for(let c of sl){let l=this.wheelPivots[c];l&&(l.rotation.set(0,c[0]==="F"?n:0,0),this.wheels[c].rotation.x=this.spin,a&&(l.position.y=this.a.meta.wheels[c].c[1]+a[c]))}this.body.rotation.set(i,0,s)}dispose(){this.paintMat&&this.paintMat.dispose()}};var Qp=new Re,em=new Re,tm=new wt,nm=new on,im=new D,C_=new D(1,1,1),sm=new ye,al=class{constructor(e,t,n){this.a=e,this.max=t,this.levels=[e.p1,e.p2].map((i,s)=>this.buildLevel(i,s));for(let i of this.levels)for(let s of Object.values(i.meshes))n.add(s);this.n=[0,0]}buildLevel(e,t){let n={},i=s=>e.find(a=>a.name===s||a.node===s);for(let s of["paint","misc","glass","wheel_L","wheel_R"]){let a=i(s);if(!a)continue;let o=s.startsWith("wheel"),c;if(s==="paint"){let u=a.material;c=new ze({metalness:.45,roughness:.3,envMapIntensity:1.2}),u.map&&this.a.meta.paintKey&&(c.map=u.map,am(c,this.a.meta.paintKey,!0))}else s==="glass"?c=new ze({color:856342,metalness:.2,roughness:.05,transparent:!0,opacity:.72,vertexColors:!1,envMapIntensity:1.6}):c=new ze({vertexColors:!0,metalness:o?.25:.3,roughness:o?.7:.55});let l=o?this.max*2:this.max,h=new en(a.geometry,c,l);h.instanceMatrix.setUsage(Ln),s==="paint"&&(h.instanceColor=new It(new Float32Array(l*3).fill(1),3),h.instanceColor.setUsage(Ln)),h.count=0,h.frustumCulled=!1,h.castShadow=t===0&&s!=="glass",h.receiveShadow=s!=="glass",n[s]=h}return{meshes:n}}begin(){this.n[0]=0,this.n[1]=0}add(e,t,n,i,s,a){let o=this.levels[s];if(!o)return;let c=this.n[s]++;if(c>=this.max)return;let l=o.meshes;for(let u of["paint","misc","glass"])l[u]&&l[u].setMatrixAt(c,e);l.paint&&(sm.set(a?"#d4a22a":Ot(t).color),l.paint.setColorAt(c,sm));let h=this.a.meta.wheels;for(let u of sl){let d=u[1]==="L"?"wheel_L":"wheel_R",f=l[d];if(!f)continue;let m=c*2+(u[0]==="F"?0:1);nm.set(i,u[0]==="F"?n:0,0,"YXZ"),tm.setFromEuler(nm),im.set(...h[u].c),em.compose(im,tm,C_),Qp.multiplyMatrices(e,em),f.setMatrixAt(m,Qp)}}commit(){for(let e=0;e<this.levels.length;e++){let t=Math.min(this.max,this.n[e]);for(let[n,i]of Object.entries(this.levels[e].meshes))i.count=n.startsWith("wheel")?t*2:t,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}dispose(e){for(let t of this.levels)for(let n of Object.values(t.meshes))e.remove(n),n.dispose()}};var Xu={},ol=r=>Xu[r]||(Xu[r]=Us("assets/chars/"+r+".glb").catch(e=>{throw delete Xu[r],e})),P_=r=>String(r).replace(/^mixamorig[:_]?/i,"").replace(/_\d+$/,"").replace(/[^a-z0-9]/gi,"").toLowerCase(),cm={pelvis:"hips",spine:"spine",spine1:"spine1",spine2:"spine2",neck:"neck",head:"head"};for(let[r,e]of[["l","left"],["r","right"]])Object.assign(cm,{[r+"clavicle"]:e+"shoulder",[r+"upperarm"]:e+"arm",[r+"forearm"]:e+"forearm",[r+"hand"]:e+"hand",[r+"thigh"]:e+"upleg",[r+"calf"]:e+"leg",[r+"foot"]:e+"foot",[r+"toe0"]:e+"toebase"});var Ga=r=>{let e=P_(r);return e.startsWith("bip001")&&cm[e.slice(6)]||e};function om(r){let e=new Map,t=new Re,n=new Re,i=new D,s=new D;return r.traverse(a=>{a.isSkinnedMesh&&a.skeleton.bones.forEach((o,c)=>{if(e.has(o)||!a.skeleton.boneInverses[c])return;let l=new wt;t.copy(a.skeleton.boneInverses[c]).invert().decompose(i,l,s),l.pos=i.clone(),e.set(o,l)})}),e}function ju(r,e,t,n=30){let i=new Map,s=[];e.traverse(F=>{if(F.isBone){let j=Ga(F.name);i.has(j)||i.set(j,F)}}),t.traverse(F=>{F.isBone&&s.push(F)});let a=[...i.values()].map(F=>[F,F.position.clone(),F.quaternion.clone(),F.scale.clone()]),o=()=>{for(let[F,j,V,O]of a)F.position.copy(j),F.quaternion.copy(V),F.scale.copy(O);e.updateMatrixWorld(!0)};o(),t.updateMatrixWorld(!0);let c=F=>F.getWorldQuaternion(new wt),l=F=>F.getWorldPosition(new D),h=om(e),u=om(t),d=new Map([...i].map(([F,j])=>[F,(h.get(j)||c(j)).invert()])),f=new Map(s.map(F=>[F,u.get(F)||c(F)])),m=new Map(s.map(F=>[F,c(F.parent)])),b=i.get("hips"),g=s.find(F=>Ga(F.name)==="hips"),p=new Set;g&&g.traverse(F=>p.add(F));let y=new Map(s.map(F=>[F,p.has(F)&&i.get(Ga(F.name))]).filter(F=>F[1])),S=g&&l(g),_=l(e),M=Math.max(2,Math.round(r.duration*n)+1),x=new Float32Array(M),T=new Map([...y.keys()].map(F=>[F,new Float32Array(M*4)])),v=new Float32Array(M*3),E=[],R=new ri(e),P=R.clipAction(r);P.play();let L=new Map,B=new wt,N=new Re,U=new D;for(let F=0;F<M;F++){let j=x[F]=Math.min(r.duration,F/n);R.setTime(j),e.updateMatrixWorld(!0),L.clear();for(let V of s){let O=L.get(V.parent)||m.get(V),$=y.get(V);if($){let I=c($).multiply(d.get(Ga(V.name))).multiply(f.get(V));B.copy(O).invert().multiply(I),B.toArray(T.get(V),F*4),L.set(V,I)}else L.set(V,O.clone().multiply(V.quaternion))}g&&b&&E.push(l(b).sub(_))}if(P.stop(),R.uncacheRoot(e),o(),g&&b){let F=E.map(I=>I.y).sort((I,G)=>I-G),j=F[F.length>>1]||1,V=E.reduce((I,G)=>I+G.x,0)/E.length,O=E.reduce((I,G)=>I+G.z,0)/E.length,$=(S.y-l(t).y)/Math.max(.001,j);N.copy(g.parent.matrixWorld).invert(),E.forEach((I,G)=>{U.set((I.x-V)*$+S.x,(I.y-j)*$+S.y,(I.z-O)*$+S.z).applyMatrix4(N).toArray(v,G*3)})}let Q=[...T].map(([F,j])=>new Pn(F.name+".quaternion",x,j));return g&&b&&Q.push(new qn(g.name+".position",x,v)),new ni(r.name+"_rt",r.duration,Q)}function lm(r){return r.updateMatrixWorld(!0),r.traverse(e=>{e.isSkinnedMesh&&(e.skeleton.update(),e.computeBoundingBox(),e.computeBoundingSphere())}),new qt().setFromObject(r)}var Or=null;async function cl(){return Or||(Or=Promise.all(["racedriver","rider","crowd"].map(ol)).then(([r,e,t])=>({driver:r,rider:e,crowd:t})),Or.catch(()=>{Or=null}),Or)}function I_(r,e){let t=r.clone(),n={value:new ye(e)};return t.onBeforeCompile=i=>{i.uniforms.suitCol=n,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 suitCol;`).replace("#include <map_fragment>",`#include <map_fragment>
      { float red = smoothstep(0.06, 0.25, diffuseColor.r - max(diffuseColor.g, diffuseColor.b));
        diffuseColor.rgb = mix(diffuseColor.rgb, suitCol * clamp(diffuseColor.r * 2.2, 0.25, 1.4), red); }`)},t.customProgramCacheKey=()=>"suit",t}function hm(r,{height:e=1.8,clip:t=0,tint:n=null}={}){let i=Fs(r.driver.scene);i.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1,n&&/Outfit_Top|Outfit_Bottom|Headwear/i.test(h.material.name)&&(h.material=I_(h.material,n)))});let s=lm(i),a=e/Math.max(.1,s.max.y-s.min.y);i.scale.setScalar(a);let o=new Xe;o.add(i),i.position.y=-s.min.y*a;let c=new ri(i),l=r.rider.animations.filter(h=>h.duration>1);if(l.length){let h=t%l.length,u=r.rt||(r.rt=[]),d=u[h]||(u[h]=ju(l[h],r.rider.scene,r.driver.scene)),f=c.clipAction(d);f.time=Math.random()*d.duration,f.play()}return o.userData.mixer=c,o.userData.hand=h=>{let u=null;return i.traverse(d=>{!u&&d.isBone&&Ga(d.name)===h+"hand"&&(u=d)}),u},o}function um(r,e=1.75){let t=Fs(r.crowd.scene),n=[];t.traverse(l=>{l.isMesh&&(/pavement|^material$/i.test(l.material.name)?n.push(l):(l.castShadow=!0,l.frustumCulled=!1))}),n.forEach(l=>l.parent.remove(l));let i=lm(t),s=e/Math.max(.1,i.max.y-i.min.y);t.scale.setScalar(s);let a=i.getCenter(new D);t.position.set(-a.x*s,-i.min.y*s,-a.z*s);let o=new Xe;o.add(t);let c=new ri(t);if(r.crowd.animations[0]){let l=c.clipAction(r.crowd.animations[0]);l.time=Math.random()*r.crowd.animations[0].duration,l.play()}return o.userData.mixer=c,o}function dm(r,e,{winter:t=!1,hq:n=!0}={}){let i=new vr(.2,.6,n?2:1,n?6:4);i.translate(0,.52,0);let s=new wi(.13,n?7:5,n?5:3);s.translate(0,1.2,0);let a=new vr(.055,.5,1,n?4:3);a.translate(0,-.27,0),a.rotateZ(-.12),a.translate(-.25,.97,0);let o=a.clone();o.scale(-1,1,1);let c=[i,s,a,o].map((R,P)=>{let L=R.attributes.position.count;return R.setAttribute("part",new Ke(new Float32Array(L).fill(P),1)),R.toNonIndexed()}),l=new it;for(let R of["position","normal","part"]){let P=c.map(U=>U.attributes[R].array),L=c[0].attributes[R].itemSize,B=new Float32Array(P.reduce((U,Q)=>U+Q.length,0)),N=0;for(let U of P)B.set(U,N),N+=U.length;l.setAttribute(R,new Ke(B,L))}let h=new xa({vertexColors:!1}),u={value:0},d={value:0};h.onBeforeCompile=R=>{R.uniforms.uTime=u,R.uniforms.uHype=d,R.uniforms.uHat={value:t?.85:.2},R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
attribute float part; attribute vec3 cloth; attribute vec3 skin; attribute vec3 pants; attribute vec3 hat; attribute float seed; varying vec3 vCol; uniform float uTime; uniform float uHype; uniform float uHat;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float ph = uTime * (2.2 + seed * 1.6) + seed * 40.0;
        float jump = max(0.0, sin(ph * (1.0 + uHype))) * (0.08 + 0.16 * uHype) * step(0.85 - 0.6 * uHype, fract(seed * 7.3));
        vec3 base = transformed;
        if (part > 1.5) {                       // raised arms pumping (cheering fans), the rest hang
          float side = part > 2.5 ? 1.0 : -1.0;
          float up = 0.78 + 0.22 * sin(ph * 1.3 + side);
          vec3 sh2 = vec3(side * 0.25, 0.97, 0.0);
          vec3 p = transformed - sh2;
          float a = side * up * 2.6 * step(0.78 - 0.6 * uHype, fract(seed * (side > 0.0 ? 3.1 : 5.7)));
          p = vec3(p.x * cos(a) - p.y * sin(a), p.x * sin(a) + p.y * cos(a), p.z);
          transformed = p + sh2;
        }
        transformed.y += jump;
        vCol = part < 0.5 ? (base.y < 0.46 ? pants : cloth) : part < 1.5 ? (base.y > 1.235 && fract(seed * 11.0) < uHat ? hat : skin) : (base.y < 0.62 ? skin : cloth);`),R.fragmentShader=R.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCol;`).replace("#include <color_fragment>","diffuseColor.rgb = vCol * 0.8;")};let f=new Ms().copy(l),m=new Float32Array(r*3),b=new Float32Array(r*3),g=new Float32Array(r*3),p=new Float32Array(r*3),y=new Float32Array(r),S=[13111326,2052064,15921906,1776670,3817290,16761370,793688,558938,16735754,8028040,7015714,6535167,16727439,15262416,2829107],_=[2832981,1776670,4869975,7035461,2240583,3356220],M=[15845285,14724230,13011810,9263675,16111296],x=new ye;for(let R=0;R<r;R++)x.set(S[Math.random()*S.length|0]),m.set([x.r,x.g,x.b],R*3),x.set(M[Math.random()*M.length|0]),b.set([x.r,x.g,x.b],R*3),x.set(_[Math.random()*_.length|0]),g.set([x.r,x.g,x.b],R*3),x.set(S[Math.random()*S.length|0]),p.set([x.r,x.g,x.b],R*3),y[R]=Math.random();f.setAttribute("cloth",new It(m,3)),f.setAttribute("skin",new It(b,3)),f.setAttribute("pants",new It(g,3)),f.setAttribute("hat",new It(p,3)),f.setAttribute("seed",new It(y,1));let T=new en(f,h,r),v=new Re,E=0;for(let R=0;R<r;R++){let P=e(R);P&&(v.makeRotationY(P.yaw).setPosition(P.x,P.y,P.z),T.setMatrixAt(E++,v))}return T.count=E,T.frustumCulled=!1,T.castShadow=!1,T.userData.uTime=u,T.userData.uHype=d,T}var Br={stand:{s0:-100,s1:30,side:-1,depth:20},podium:{s:20,s0:2,s1:38,side:1,depth:30}},fm=(r,e)=>e>r.L/2?e-r.L:e;function pm(r,e,t){let n=fm(r,e),i=0;for(let s of[Br.stand,Br.podium]){if(Math.sign(t)!==s.side)continue;let a=Math.min(n-s.s0+14,s.s1+14-n)/14;a>0&&(i=Math.max(i,s.depth*Math.min(1,a)))}return i}function ll(r,e,t){let n=fm(r,e),i=r.halfWidth(e)+r.runoff;for(let s of[Br.stand,Br.podium])if(Math.sign(t)===s.side&&n>s.s0-8&&n<s.s1+8&&Math.abs(t)<i+s.depth+6)return!0;return!1}function Fn(r,e,t,n,i,s,a){let o=new Lt(e-r,n-t,s-i).toNonIndexed();o.translate((r+e)/2,(t+n)/2,(i+s)/2);let c=new ye(a),l=o.attributes.position.count,h=new Float32Array(l*3);for(let u=0;u<l;u++)h.set([c.r,c.g,c.b],u*3);return o.setAttribute("color",new Ke(h,3)),o.deleteAttribute("uv"),o}function L_(r){let e=[["NITRO LIVE",["#ff2d55","#ff7a18"],"#fff"],["TIKTOK LIVE",["#0b0b10","#1a1a24"],"#fff",!0],[r?"@"+r:"RACE DAY",["#1f4fe0","#19b4ff"],"#fff"],["\u{1F94A} = \u0412\u0425\u041E\u0414 \u0412 \u0413\u041E\u041D\u041A\u0423",["#111","#2a2a2a"],"#ffcc00"]];return Yt(2048,128,(t,n,i)=>{let s=n/e.length;e.forEach(([a,[o,c],l,h],u)=>{let d=t.createLinearGradient(u*s,0,(u+1)*s,0);d.addColorStop(0,o),d.addColorStop(1,c),t.fillStyle=d,t.fillRect(u*s,0,s,i),t.font='italic 900 64px "Russo One", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",h&&(t.fillStyle="#25f4ee",t.fillText(a,u*s+s/2-3,i/2+1),t.fillStyle="#fe2c55",t.fillText(a,u*s+s/2+3,i/2+5)),t.fillStyle=l,t.fillText(a,u*s+s/2,i/2+3,s-30),t.fillStyle="rgba(255,255,255,.18)",t.fillRect(u*s,0,3,i)})})}function mm(r,e,t,{hostName:n=""}={}){let i=r.q,s=new Xe;s.name="venue";let a=L_(n),o=D_(i,e,t,a),c=F_(e,t,n);return s.add(o.grp,c.grp),s.userData={podium:c,crowd:o.crowd,stand:o.grp},s}function D_(r,e,t,n){let i=Br.stand,s=e.frame(0),o=e.halfWidth(0)+e.runoff+3.4,c=8,l=.9,h=.5,u=1.25,d=o+c*l,f=u+(c-1)*h,m=f+3.9,b=e.surfaceY(0,0)-.35,g=O=>e.surfaceY(O,0)-.35-b,p=t==="snow"?10988984:10132643,y=2052064,S=15265010,_=16723285,M=[],x=[];for(let O=i.s0+16;O<i.s1-6;O+=22)x.push(O);let T=O=>x.some($=>Math.abs(O-$)<.8);for(let O=0;O<c;O++){M.push(Fn(o+O*l,d,-3,u+O*h,i.s0,i.s1,p));let $=i.s0+.6,I=O===3||O===6?S:O===0?_:y;for(let G of[...x,i.s1-.6])G-.8>$&&M.push(Fn(o+O*l+.12,o+O*l+.56,u+O*h,u+O*h+.4,$,G-.8,I)),$=G+.8}M.push(Fn(d,d+.4,-3,m,i.s0-.4,i.s1+.4,6120043));for(let O of[i.s0-.4,i.s1])M.push(Fn(o-.2,d,-3,f+1.1,O,O+.4,p));M.push(Fn(o-2.2,d+.4,m,m+.35,i.s0-1,i.s1+1,3817290));for(let O=i.s0+4;O<i.s1;O+=12)M.push(Fn(d-.05,d+.5,m-3.2,m,O,O+.3,2764085));let v=$i(M),E=v.attributes.position;for(let O=0;O<E.count;O++)E.setY(O,E.getY(O)+g(E.getZ(O)));let R=new ze({vertexColors:!0,roughness:.85,metalness:.05}),P=new Te(v,R);P.castShadow=!0,P.receiveShadow=!0;let L=new Xe;L.add(P);let B=i.s1-i.s0,N=(O,$,I,G,ne)=>{let se=new Gt(ne-G,I-$);se.rotateY(-Math.PI/2),se.translate(O,($+I)/2,(G+ne)/2);let le=se.attributes.uv;for(let W=0;W<le.count;W++)le.setX(W,le.getX(W)*(ne-G)/((I-$)*16));let q=se.attributes.position;for(let W=0;W<q.count;W++)q.setY(W,q.getY(W)+g(q.getZ(W)));return se},U=new ze({map:n,roughness:.55,emissive:16777215,emissiveMap:n,emissiveIntensity:.18}),Q=new Te($i([N(o-.22,.05,u-.05,i.s0,i.s1),N(o-2.25,m-.05,m+.4,i.s0-1,i.s1+1)]),U);Q.receiveShadow=!0,L.add(Q);let F=Math.min(.95,.25+.55*(r.crowd||.7)),j=[];for(let O=0;O<c;O++)for(let $=i.s0+.9;$<i.s1-.6;$+=.64){if(T($)||Math.random()>F)continue;let I=$+(Math.random()-.5)*.2;j.push({x:o+O*l+.42+(Math.random()-.5)*.1,y:u+O*h-.02+g(I),z:I,yaw:-Math.PI/2+(Math.random()-.5)*.5})}let V=dm(j.length,O=>j[O],{winter:t==="snow",hq:r.detail>=1});return V.receiveShadow=!0,L.add(V),V.computeBoundingSphere(),V.frustumCulled=!0,L.position.set(s.x,b,s.z),L.rotation.y=s.heading,i.side>0&&(L.scale.x=-1),{grp:L,crowd:V}}function F_(r,e,t){let n=Br.podium,i=r.frame(n.s),a=r.halfWidth(n.s)+r.runoff+16,o=i.x+i.nx*n.side*a,c=i.z+i.nz*n.side*a,l=r.surfaceY(n.s,0)-.35,h=new Xe;h.name="podium",h.position.set(o,l,c),h.rotation.y=Math.atan2(-n.side*i.nx,-n.side*i.nz);let u=[];u.push(Fn(-13,13,-2,.14,-7,12,e==="snow"?9278366:7304316)),u.push(Fn(-10,10,0,7.2,-5.2,-4.7,1711138));for(let p of[-10.4,10])u.push(Fn(p,p+.4,0,9.5,-5.3,-4.6,2764085));u.push(Fn(-10.4,10.4,9.1,9.5,-5.3,-4.6,2764085));let d=[[0,1.25],[-2.6,.88],[2.6,.55]];for(let[p,y]of d)u.push(Fn(p-1.3,p+1.3,0,y,-1.3,1.3,13225170));u.push(Fn(-1.3,1.3,.14,.17,1.3,11.5,10489884));let f=new Te($i(u),new ze({vertexColors:!0,roughness:.88,metalness:0}));f.castShadow=f.receiveShadow=!0,h.add(f);let m=Yt(1024,384,(p,y,S)=>{let _=p.createLinearGradient(0,0,y,S);_.addColorStop(0,"#0d1024"),_.addColorStop(.55,"#1b1240"),_.addColorStop(1,"#3a0d2a"),p.fillStyle=_,p.fillRect(0,0,y,S),p.globalAlpha=.18;for(let x=0;x<16;x++)p.fillStyle=x%2?"#ff2d55":"#19e0ff",p.fillRect(x*70-60,0,22,S);p.globalAlpha=1,p.textAlign="center",p.textBaseline="middle",p.font='italic 900 150px "Russo One", "Arial Black", sans-serif';let M=p.createLinearGradient(0,80,0,230);M.addColorStop(0,"#fff"),M.addColorStop(1,"#ffd36b"),p.fillStyle=M,p.fillText("NITRO LIVE",y/2,150),p.font='700 54px "Russo One", "Arial Black", sans-serif',p.fillStyle="#ffcc00",p.fillText("\u{1F3C6}  \u041F\u041E\u0411\u0415\u0414\u0418\u0422\u0415\u041B\u0418 \u0413\u041E\u041D\u041A\u0418  \u{1F3C6}",y/2,262),p.font="600 34px sans-serif",p.fillStyle="rgba(255,255,255,.75)",p.fillText(t?"TikTok LIVE \xB7 @"+t:"TikTok LIVE",y/2,330)},{repeat:!1}),b=new Te(new Gt(19.6,7),new ze({map:m,emissive:16777215,emissiveMap:m,emissiveIntensity:.35,roughness:.6}));b.position.set(0,3.6,-4.68),b.receiveShadow=!0,h.add(b);let g=[["#fff1a8","#d9a520","#8a5a00"],["#ffffff","#c3c8d0","#6b7079"],["#ffd2a8","#c7773a","#6a3510"]];return d.forEach(([p,y],S)=>{let _=Yt(256,128,(x,T,v)=>{let E=x.createLinearGradient(0,0,0,v);E.addColorStop(0,g[S][0]),E.addColorStop(.5,g[S][1]),E.addColorStop(1,g[S][2]),x.fillStyle=E,x.fillRect(0,0,T,v),x.font='italic 900 104px "Russo One", "Arial Black", sans-serif',x.textAlign="center",x.textBaseline="middle",x.fillStyle="rgba(0,0,0,.35)",x.fillText(String(S+1),T/2+4,v/2+8),x.fillStyle="#fff",x.fillText(String(S+1),T/2,v/2+4)},{repeat:!1}),M=new Te(new Gt(2.6,y),new ze({map:_,metalness:.6,roughness:.3}));M.position.set(p,y/2,1.31),h.add(M)}),{grp:h,steps:d.map(([p,y])=>new D(p,y,0))}}var Ku=new WeakMap;function hl(r){if(Ku.has(r))return Ku.get(r);let e=r.zones.find(n=>n.type==="water"),t=null;if(e){let n=(e.from+e.to)/2,i=r.frame(n),s=r.L,a=1/0;for(let u=e.from;u<=e.to;u+=1)a=Math.min(a,r.surfaceY(u,0));let o=a+.14,c=0,l=0;for(let u=e.from;u<=e.to;u+=.5)r.surfaceY(u,0)<o-.02&&(c=Math.min(c,u-n),l=Math.max(l,u-n));let h=u=>{for(let d=30;d<=900;d+=10){let f=r.project(i.x+i.nx*u*d,i.z+i.nz*u*d,-1),m=Math.abs(((f.s-n)%s+s*1.5)%s-s/2);if(f.dist<90&&m>100)return Math.max(60,d-80)}return 900};t={cx:i.x,cz:i.z,tx:i.tx,tz:i.tz,nx:i.nx,nz:i.nz,a:-h(-1),b:h(1),hw:(e.to-e.from)/2,level:o,s:n,wet:[c,l]}}return Ku.set(r,t),t}var Yu=18,gm=70,N_=r=>Yu*Math.min(1,Math.abs(r)/80)*Math.sin(r/gm);function $u(r,e,t){let n=e-r.cx,i=t-r.cz,s=n*r.nx+i*r.nz,a=n*r.tx+i*r.tz-N_(s),o=s<r.a?r.a:s>r.b?r.b:s;return Math.hypot(s-o,a)}function bm(r,e,t,n){let i=r.level-.9+Math.max(0,$u(r,e,t)-r.hw)*.38;return i<n?i:n}function xm(r,e,t=10){let n=e.hw+6+Yu,i=e.b-e.a+2*n,s=new Gt(i,2*n,1,1);s.rotateX(-Math.PI/2);let a={value:0},o=new ze({color:2379866,roughness:.05,metalness:0,transparent:!0,opacity:.85,depthWrite:!1,envMapIntensity:.85});o.onBeforeCompile=h=>{h.uniforms.wTime=a,h.uniforms.wFlow={value:new Ne(-e.nx,-e.nz)},h.uniforms.wC={value:new Ne(e.cx,e.cz)},h.uniforms.wT={value:new Ne(e.tx,e.tz)},h.uniforms.wHW={value:e.hw},h.uniforms.wRoad={value:t},h.vertexShader=h.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWP;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWP; uniform float wTime; uniform vec2 wFlow; uniform vec2 wC; uniform vec2 wT; uniform float wHW; uniform float wRoad;`).replace("#include <color_fragment>",`#include <color_fragment>
      {
        // deep and dark in the middle of the river, clear over the gravel banks and the road ford
        vec2 rel = vWP.xz - wC; float uu = dot(rel, vec2(-wT.y, wT.x)), alongRiver = abs(uu);
        float across = abs(dot(rel, wT) - ${Yu.toFixed(1)} * min(1.0, alongRiver / 80.0) * sin(uu / ${gm.toFixed(1)}));
        float deep = smoothstep(wHW + 4.0, wHW * 0.45, across) * smoothstep(wRoad - 0.5, wRoad + 5.0, alongRiver);
        diffuseColor.rgb = mix(vec3(0.23, 0.38, 0.34), vec3(0.025, 0.1, 0.13), deep);
        diffuseColor.a = mix(alongRiver < wRoad ? 0.38 : 0.8, 0.94, deep);
      }`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      {
        // travelling ripples with analytic slopes, carried downstream; they fade with distance (no shimmer)
        vec2 p = vWP.xz, g = vec2(0.0);
        vec2 side = vec2(-wFlow.y, wFlow.x);
        // six waves, irregular directions / frequencies, patchy amplitude (reads as water, not a pattern)
        float patchy = 0.55 + 0.45 * sin(dot(p, vec2(0.031, 0.047)) + wTime * 0.21) * sin(dot(p, vec2(-0.043, 0.027)) - wTime * 0.17);
        for (int i = 0; i < 6; i++) {
          float fi = float(i), ang = (fract(fi * 0.618) - 0.5) * 2.1;
          vec2 d = normalize(wFlow * cos(ang) + side * sin(ang));
          float f = 0.55 * pow(1.62, fi), sp = 1.0 + f * 0.8;
          float ph = dot(d, p) * f - wTime * sp + fi * 1.7;
          g += d * cos(ph) * (0.085 / (1.0 + fi * 0.45)) * clamp(1.0 - length(vViewPosition) * f / 160.0, 0.0, 1.0);   // fine waves fade first
        }
        g *= patchy;
        g /= 1.0 + length(vViewPosition) * 0.012;
        vec3 nW = normalize(vec3(-g.x, 1.0, -g.y));
        normal = normalize((viewMatrix * vec4(nW, 0.0)).xyz);
      }`)};let c=new Te(s,o),l=(e.a+e.b)/2;return c.position.set(e.cx+e.nx*l,e.level,e.cz+e.nz*l),c.rotation.y=Math.atan2(-e.nz,e.nx),c.receiveShadow=!0,c.renderOrder=2,c.name="water",c.userData.time=a,c}var un=6.8,Zi=9,Ju=new WeakMap;function Zu(r){if(Ju.has(r))return Ju.get(r);let e=r.zones.find(n=>n.type==="tunnel"),t=e?{from:e.from,to:e.to,half:r.halfWidth((e.from+e.to)/2)+r.runoff+.5}:null;return Ju.set(r,t),t}function vm(r,e,t,n,i){let s=Math.min(1,Math.max(0,Math.min(e-(r.from-28),r.to+28-e)/28));if(s<=0||t<r.half+Zi)return i;let a=n+un+.7,o=1-Math.min(1,Math.max(0,(t-r.half-Zi-14)/35)),c=a-(1-s)*(un+1.2)-(1-o*o*(3-2*o))*(a-i);return Math.max(i,c)}function ym(r,e,t,n){return e.i>=0&&e.s>r.from+2&&e.s<r.to-2&&e.dist<r.half&&t<n+un}function ul(r,e,t,n,i){let s=[],a=[],o=[],c=0,l=0,h=null;for(let d=t;d<=n+.01;d+=4){let f=r.frame(d),[m,b]=i(f,d);if(h&&(l+=Math.hypot(f.x-h.x,f.z-h.z)),h={x:f.x,z:f.z},s.push(...m,...b),a.push(l/4,0,l/4,1),c){let g=c*2;o.push(g-2,g-1,g,g-1,g+1,g)}c++}let u=new it;return u.setAttribute("position",new ot(s,3)),u.setAttribute("uv",new ot(a,2)),u.setIndex(o),u.computeVertexNormals(),u}function _m(r,e){let t=Zu(e);if(!t)return null;let n=new Xe;n.name="tunnel";let i=(x,T=0)=>e.surfaceY(x,T),s=(x,T,v,E)=>[x.x+x.nx*v,i(T)+E,x.z+x.nz*v],a=Yt(256,256,(x,T,v)=>{x.fillStyle="#d9dcd8",x.fillRect(0,0,T,v),x.strokeStyle="rgba(80,85,90,.35)",x.lineWidth=2;for(let R=0;R<=8;R++)x.beginPath(),x.moveTo(0,R*32),x.lineTo(T,R*32),x.stroke(),x.beginPath(),x.moveTo(R*32,0),x.lineTo(R*32,v),x.stroke();x.fillStyle="#1f4fe0",x.fillRect(0,150,T,22);let E=x.createLinearGradient(0,190,0,256);E.addColorStop(0,"rgba(40,36,30,0)"),E.addColorStop(1,"rgba(40,36,30,.55)"),x.fillStyle=E,x.fillRect(0,190,T,66)}),o=new ze({map:a,roughness:.45,metalness:0,envMapIntensity:.25,side:St}),c=[];for(let x of[-1,1]){let T=ul(e,t,t.from,t.to,(v,E)=>x>0?[s(v,E,t.half,un),s(v,E,t.half,-.5)]:[s(v,E,-t.half,-.5),s(v,E,-t.half,un)]);c.push(T)}c.forEach((x,T)=>{let v=x.attributes.uv;for(let E=0;E<v.count;E++)v.setX(E,v.getX(E)*4/(un+.5)),v.setY(E,E%2===0==(T===1)?1:0)});let l=new Te($i(c),o);l.receiveShadow=!0,l.castShadow=!0,n.add(l);let h=ul(e,t,t.from,t.to,(x,T)=>[s(x,T,t.half+.3,un),s(x,T,-t.half-.3,un)]),u=new Te(h,new ze({color:5922406,emissive:2762272,roughness:.9,envMapIntensity:.1,side:St}));u.castShadow=!0,n.add(u);let d=ul(e,t,t.from-1,t.to+1,(x,T)=>[s(x,T,-t.half-Zi-1,un+.7),s(x,T,t.half+Zi+1,un+.7)]),f=[-1,1].map(x=>ul(e,t,t.from,t.to,(T,v)=>[s(T,v,x*(t.half+Zi),un+.7),s(T,v,x*(t.half+Zi),-1.5)])),m=new Te($i(f),new ze({color:8027523,roughness:.9,side:St}));m.castShadow=m.receiveShadow=!0,n.add(m);let b=d.attributes.uv;for(let x=0;x<b.count;x++)b.setY(x,b.getY(x)*4);let g=En("t_grass",{srgb:!0,gfx:r}),p=new Te(d,new ze({map:g,color:12109992,roughness:.95,side:St}));p.castShadow=!0,p.receiveShadow=!0,n.add(p);let y=[];for(let x=t.from+3;x<t.to-2;x+=6){let T=e.frame(x);for(let v of[-t.half+2.2,t.half-2.2]){let E=new Lt(.35,.1,2.6);E.rotateY(T.heading);let[R,P,L]=s(T,x,v,un-.08);E.translate(R,P,L),y.push(E)}}let S=new Te($i(y),new ze({color:3153936,emissive:16762997,emissiveIntensity:3.2}));n.add(S);let _=new ze({color:7172215,roughness:.9}),M=Yt(1024,128,(x,T,v)=>{let E=x.createLinearGradient(0,0,T,0);E.addColorStop(0,"#0d1024"),E.addColorStop(1,"#23103a"),x.fillStyle=E,x.fillRect(0,0,T,v),x.font='italic 900 76px "Russo One", "Arial Black", sans-serif',x.textAlign="center",x.textBaseline="middle",x.fillStyle="#ffcc00",x.fillText("NITRO TUNNEL",T/2,v/2+4)},{repeat:!1});for(let[x,T]of[[t.from,-1],[t.to,1]]){let v=e.frame(x),E=i(x),R=new Xe;R.position.set(v.x,E,v.z),R.rotation.y=v.heading+(T<0?Math.PI:0);let P=new Te(new Lt(t.half*2+2,3.4,1.2),_);P.position.set(0,un+1.7,.6),R.add(P);for(let B of[-1,1]){let N=new Te(new Lt(Zi+24,un+4.5,1.2),_);N.position.set(B*(t.half+(Zi+24)/2),(un+4.5)/2-1,.6),R.add(N)}let L=new Te(new Gt(t.half*1.6,2),new ze({map:M,emissive:16777215,emissiveMap:M,emissiveIntensity:.4}));L.position.set(0,un+1.7,1.22),R.add(L),R.traverse(B=>{B.isMesh&&(B.castShadow=!0,B.receiveShadow=!0)}),n.add(R)}return n.userData.T=t,n}var Qu=class{constructor(e,t=520,n=4){this.track=e,this.cell=n;let i=1/0,s=1/0,a=-1/0,o=-1/0;for(let g=0;g<e.N;g++)i=Math.min(i,e.X[g]),a=Math.max(a,e.X[g]),s=Math.min(s,e.Z[g]),o=Math.max(o,e.Z[g]);this.x0=i-t,this.z0=s-t,this.nx=Math.ceil((a-i+2*t)/n)+1,this.nz=Math.ceil((o-s+2*t)/n)+1,this.cx=(i+a)/2,this.cz=(s+o)/2,this.radius=Math.hypot(a-i,o-s)/2;let c=this.nx*this.nz,l=this.near=new Int32Array(c).fill(-1),h=new Float32Array(c).fill(1e9),u=e.X,d=e.Z,f=(g,p)=>{let y=this.x0+g%this.nx*n,S=this.z0+Math.floor(g/this.nx)*n,_=y-u[p],M=S-d[p];return _*_+M*M};for(let g=0;g<e.N;g++){let p=Math.round((u[g]-this.x0)/n),y=Math.round((d[g]-this.z0)/n);for(let S=-3;S<=3;S++)for(let _=-3;_<=3;_++){let M=p+_,x=y+S;if(M<0||x<0||M>=this.nx||x>=this.nz)continue;let T=x*this.nx+M,v=f(T,g);v<h[T]&&(h[T]=v,l[T]=g)}}let m=this.nx,b=(g,p)=>{let y=l[p];if(y<0)return;let S=f(g,y);S<h[g]&&(h[g]=S,l[g]=y)};for(let g=0;g<2;g++){for(let p=0;p<this.nz;p++)for(let y=0;y<m;y++){let S=p*m+y;y>0&&b(S,S-1),p>0&&(b(S,S-m),y>0&&b(S,S-m-1),y<m-1&&b(S,S-m+1))}for(let p=this.nz-1;p>=0;p--)for(let y=m-1;y>=0;y--){let S=p*m+y;y<m-1&&b(S,S+1),p<this.nz-1&&(b(S,S+m),y<m-1&&b(S,S+m+1),y>0&&b(S,S+m-1))}}this.dist=h,this._p={}}query(e,t,n={}){let i=Math.round((e-this.x0)/this.cell),s=Math.round((t-this.z0)/this.cell);if(i<0||s<0||i>=this.nx||s>=this.nz)return n.dist=Math.max(0,Math.hypot(e-this.cx,t-this.cz)-this.radius)+400,n.i=-1,n.s=0,n.d=0,n;let a=this.near[s*this.nx+i],o=this.track.project(e,t,a,this._p,4);return n.i=o.i,n.s=o.s,n.d=o.d,n.dist=Math.abs(o.d),n}},Mm={city:{hills:3,mount:60,mountFrom:700,mountTo:1900,valley:60,rough:.2,seed:11},snow:{hills:14,mount:330,mountFrom:140,mountTo:1100,valley:45,rough:1,seed:23},offroad:{hills:18,mount:260,mountFrom:120,mountTo:1e3,valley:38,rough:.9,seed:37}},dl=class{constructor(e,t){this.track=e,this.P=Mm[t]||Mm.city,this.loc=t,this.field=new Qu(e),this.N=Qc(this.P.seed);let n=0;for(let i=0;i<e.N;i++)n+=e.Y[i];this.meanY=n/e.N,this._q={},this.river=hl(e),this.tunnel=Zu(e)}natural(e,t,n){let i=this.P,s=this.N,a=this.meanY+s.fbm(e/520,t/520,4)*i.hills,o=Zt(i.mountFrom,i.mountTo,n);return o>0&&(a+=o*(s.ridged(e/900+7,t/900-3,5)*.75+s.fbm(e/1600,t/1600,3)*.35+.15)*i.mount),a}height(e,t,n){let i=this.field.query(e,t,this._q),s=this.track,a=i.i>=0?s.halfWidth(i.s):8,o=a+s.runoff+2.5+(i.i>=0?pm(s,i.s,i.d):0),c=this.natural(e,t,i.dist),l;if(i.i<0)l=c;else{let h=s.surfaceY(i.s,Math.max(-a-s.runoff,Math.min(a+s.runoff,i.d))),u=Zt(o,o+this.P.valley,i.dist),d=h-.35-Math.min(1.2,Math.max(0,i.dist-o)*.05);l=d+(c-d)*u,i.dist<o&&(l=h-.35),this.tunnel&&(l=vm(this.tunnel,i.s,i.dist,h,l))}return this.river&&(l=bm(this.river,e,t,l)),n&&(n.dist=i.dist,n.s=i.s,n.d=i.d,n.i=i.i),l}},wm={city:{tex:["t_grass","b_concrete","t_dirt","t_gravel"],scale:[9,5,8,6],rough:[.95,.85,.95,.9],tint:[[.92,1,.86],[1,1,1],[1,1,1],[1,1,1]]},snow:{tex:["t_snow","t_rock2","t_forest","t_gravel"],scale:[11,14,8,6],rough:[.75,.9,.95,.9],tint:[[1,1,1.02],[.9,.92,.98],[.85,.85,.85],[.95,.95,1]]},offroad:{tex:["t_grass","t_dirt","t_rock2","t_forest"],scale:[9,8,16,8],rough:[.95,.95,.9,.95],tint:[[.9,1.02,.85],[1,.98,.95],[1,1,1],[1,1,1]]}};function Sm(r,e,t,n){let i=r.q,s=wm[t]||wm.city,a=n.field,o=i.detail>=1?4:i.detail>=.8?6:8,c=i.detail>=1?256:i.detail>=.8?384:512,l=1024,h=2600,u=Math.floor(a.x0/l)*l,d=Math.floor(a.z0/l)*l,f=Math.ceil((a.x0+a.nx*a.cell)/l)*l,m=Math.ceil((a.z0+a.nz*a.cell)/l)*l,b=u-Math.ceil(h/l)*l,g=d-Math.ceil(h/l)*l,p=f+Math.ceil(h/l)*l,y=m+Math.ceil(h/l)*l,S=[];for(let E=g;E<y;E+=l)for(let R=b;R<p;R+=l)if(R>=u&&R<f&&E>=d&&E<m)for(let P=E;P<E+l;P+=c)for(let L=R;L<R+l;L+=c)S.push([L,P,Math.min(c,R+l-L),Math.min(c,E+l-P)]);else S.push([R,E,l,l]);let _=new Xe;_.name="terrain";let M=k_(r,s,t),x={},T=n.N,v=0;for(let[E,R,P]of S){let L=n.field.query(E+P/2,R+P/2,{}).dist-P*.72,B=P>600?64:L<140?o:L<450?o*2.5:L<1100?32:64,N=Math.round(P/B),U=N+1,Q=new Float32Array(U*U*3),F=new Float32Array(U*U*3),j=new Float32Array(U*U*4),V=new Float32Array((U+2)*(U+2)),O=P/N;for(let J=-1;J<=U;J++)for(let Se=-1;Se<=U;Se++)V[(J+1)*(U+2)+(Se+1)]=n.height(E+Se*O,R+J*O);for(let J=0;J<U;J++)for(let Se=0;Se<U;Se++){let Ve=J*U+Se,Oe=E+Se*O,We=R+J*O,tt=V[(J+1)*(U+2)+(Se+1)],He=V[(J+1)*(U+2)+Se],$e=V[(J+1)*(U+2)+Se+2],Et=V[J*(U+2)+Se+1],Pt=V[(J+2)*(U+2)+Se+1];Q[Ve*3]=Oe,Q[Ve*3+1]=tt,Q[Ve*3+2]=We;let ct=He-$e,lt=2*O,k=Et-Pt,_t=Math.hypot(ct,lt,k);ct/=_t,lt/=_t,k/=_t,F[Ve*3]=ct,F[Ve*3+1]=lt,F[Ve*3+2]=k,n.height(Oe,We,x);let at=U_(t,lt,tt,x,T,Oe,We,n);j.set(at,Ve*4)}let $=[];for(let J=0;J<N;J++)for(let Se=0;Se<N;Se++){let Ve=J*U+Se,Oe=Ve+1,We=Ve+U,tt=We+1;$.push(Ve,We,Oe,Oe,We,tt)}let I=[],G=U*U,ne=[];for(let J=0;J<U;J++)ne.push(J);for(let J=1;J<U;J++)ne.push(J*U+U-1);for(let J=U-2;J>=0;J--)ne.push((U-1)*U+J);for(let J=U-2;J>=1;J--)ne.push(J*U);let se=new Float32Array(Q.length+ne.length*3),le=new Float32Array(F.length+ne.length*3),q=new Float32Array(j.length+ne.length*4);se.set(Q),le.set(F),q.set(j),ne.forEach((J,Se)=>{let Ve=G+Se;se[Ve*3]=Q[J*3],se[Ve*3+1]=Q[J*3+1]-B*.6,se[Ve*3+2]=Q[J*3+2],le[Ve*3]=F[J*3],le[Ve*3+1]=F[J*3+1],le[Ve*3+2]=F[J*3+2],q.set(j.subarray(J*4,J*4+4),Ve*4)});for(let J=0;J<ne.length;J++){let Se=ne[J],Ve=ne[(J+1)%ne.length],Oe=G+J,We=G+(J+1)%ne.length;I.push(Se,Ve,Oe,Ve,We,Oe)}let W=new it;W.setAttribute("position",new Ke(se,3)),W.setAttribute("normal",new Ke(le,3)),W.setAttribute("splat",new Ke(q,4));let he=$.concat(I);W.setIndex(se.length/3>65535?new fs(he,1):new ds(he,1)),W.computeBoundingSphere(),W.computeBoundingBox();let de=new Te(W,M);de.receiveShadow=B<=o*2.5,de.castShadow=!1,de.matrixAutoUpdate=!1,de.updateMatrix(),_.add(de),v+=he.length/3}return _.userData.tris=v,_}function U_(r,e,t,n,i,s,a,o){let c=1-e,l=i.fbm(s/60,a/60,3),h=i.fbm(s/23+50,a/23,2),u=1-Zt(0,22,n.dist-o.track.halfWidth(n.s||0)-o.track.runoff),d;if(r==="city"){let m=Math.max(u,Zt(.15,.4,l)*.8);d=[1-m,m,Zt(.2,.6,h)*(1-m)*.5,u*.2]}else if(r==="snow"){let m=Zt(.18,.42,c)+Zt(.35,.6,h)*Zt(.08,.2,c);d=[1,Math.min(1,m)*1.4,Zt(.35,.65,l)*.4*(1-m),u*.55]}else{let m=Zt(.2,.45,c)+Zt(.4,.7,h)*Zt(.1,.25,c),b=Zt(120,220,t);d=[1-b*.6,u*.9+Zt(.25,.6,l)*.6,Math.min(1,m+b*.5)*1.3,Zt(-.2,.3,h)*.5*(1-u)]}let f=d[0]+d[1]+d[2]+d[3]||1;return[d[0]/f,d[1]/f,d[2]/f,d[3]/f]}function k_(r,e,t){let n=r.q.normalMaps,i=e.tex.map(o=>En(o+"_c",{srgb:!0,gfx:r})),s=n?[En(e.tex[0]+"_n",{gfx:r}),En(e.tex[2]+"_n",{gfx:r})]:null,a=new ze({roughness:1,metalness:0});return a.onBeforeCompile=o=>{o.uniforms.tA={value:i[0]},o.uniforms.tB={value:i[1]},o.uniforms.tC={value:i[2]},o.uniforms.tD={value:i[3]},o.uniforms.sc={value:new ut(...e.scale.map(c=>1/c))},o.uniforms.rough4={value:new ut(...e.rough)},o.uniforms.tints={value:e.tint.map(c=>new D(...c))},n&&(o.uniforms.nA={value:s[0]},o.uniforms.nC={value:s[1]}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat;
varying vec4 vSplat;
varying vec3 vWPos;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSplat = splat;
vWPos = (modelMatrix * vec4(position, 1.0)).xyz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec4 vSplat; varying vec3 vWPos;
        uniform sampler2D tA, tB, tC, tD; uniform vec4 sc; uniform vec4 rough4; uniform vec3 tints[4];
        ${n?"uniform sampler2D nA, nC;":""}
        // two scales of the same texture hide the tiling pattern
        vec3 tri(sampler2D t, vec2 p, float s) { return mix(texture2D(t, p * s).rgb, texture2D(t, p * s * 0.21 + 0.37).rgb, 0.35); }`).replace("#include <map_fragment>",`
        vec2 wp = vWPos.xz;
        vec4 ws = vSplat / max(1e-3, dot(vSplat, vec4(1.0)));
        vec3 col = tri(tA, wp, sc.x) * tints[0] * ws.x + tri(tB, wp, sc.y) * tints[1] * ws.y + tri(tC, wp, sc.z) * tints[2] * ws.z + tri(tD, wp, sc.w) * tints[3] * ws.w;
        diffuseColor.rgb *= col;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = dot(ws, rough4);"),n&&(o.fragmentShader=o.fragmentShader.replace("#include <normal_fragment_maps>",`
        vec3 nA3 = texture2D(nA, wp * sc.x).xyz * 2.0 - 1.0; vec3 nC3 = texture2D(nC, wp * sc.z).xyz * 2.0 - 1.0;
        vec3 tn = normalize(mix(vec3(0.0, 0.0, 1.0), nA3, ws.x + ws.y * 0.5 + ws.w * 0.5) + nC3 * (ws.z * 0.9));
        // terrain tangent frame (view space): world X projected on the surface
        vec3 wx = normalize((viewMatrix * vec4(1.0, 0.0, 0.0, 0.0)).xyz); vec3 T = normalize(wx - normal * dot(normal, wx)); vec3 B = normalize(cross(normal, T));
        normal = normalize(mat3(T, B, normal) * vec3(tn.xy * 0.8, tn.z));`))},a.customProgramCacheKey=()=>"terrain"+t+(n?"n":""),a}var Em=Math.PI*2,fl=r=>(r=(r+Math.PI)%Em,r<0&&(r+=Em),r-Math.PI);function Tm(r,e,t){if(!r||!r.length)return()=>t;let n=r.map(([d,f])=>[(d%e+e)%e,f]).sort((d,f)=>d[0]-f[0]),i=n.length;if(i===1)return()=>n[0][1];let s=[n[i-1][0]-e,...n.map(d=>d[0]),n[0][0]+e,n[1][0]+e],a=[n[i-1][1],...n.map(d=>d[1]),n[0][1],n[1][1]],o=s.length,c=[],l=[],h=[];for(let d=0;d<o-1;d++)c[d]=s[d+1]-s[d],l[d]=a[d+1]-a[d],h[d]=l[d]/c[d];let u=[h[0]];for(let d=1;d<o-1;d++)if(h[d-1]*h[d]<=0)u[d]=0;else{let f=2*c[d]+c[d-1],m=c[d]+2*c[d-1];u[d]=(f+m)/(f/h[d-1]+m/h[d])}return u[o-1]=h[o-2],d=>{d=(d%e+e)%e;let f=0;for(;f<o-2&&s[f+1]<d;)f++;let m=c[f],b=(d-s[f])/m,g=(1+2*b)*(1-b)*(1-b),p=b*(1-b)*(1-b),y=b*b*(3-2*b),S=b*b*(b-1);return g*a[f]+p*m*u[f]+y*a[f+1]+S*m*u[f+1]}}function Am(r){let e=r.path.map(I=>({...I})),t=e.filter(I=>I.adj);if(t.length===2){let I=r.heading||0,G=0,ne=0;for(let W of e)if(W.s)W.adj&&(W.dir=[Math.sin(I),Math.cos(I)]),G+=Math.sin(I)*W.s,ne+=Math.cos(I)*W.s;else{let he=W.a*Math.PI/180,de=Math.abs(he)*W.r,J=Math.max(3,Math.round(de));for(let Se=0;Se<J;Se++)I-=he/J/2,G+=Math.sin(I)*de/J,ne+=Math.cos(I)*de/J,I-=he/J/2}let[se,le]=t,q=se.dir[0]*le.dir[1]-se.dir[1]*le.dir[0];if(Math.abs(q)>.2){let W=(-G*le.dir[1]+ne*le.dir[0])/q,he=(-se.dir[0]*ne+se.dir[1]*G)/q;se.s+=W,le.s+=he}for(let W of t)W.s<10&&(W.s=10);r.solved=t.map(W=>Math.round(W.s))}let n=[0],i=[0],s=[],a=0,o=0,c=r.heading||0;for(let I of e)if(s.push(n.length-1),I.s){let G=Math.max(1,Math.round(I.s));for(let ne=0;ne<G;ne++)a+=Math.sin(c)*I.s/G,o+=Math.cos(c)*I.s/G,n.push(a),i.push(o)}else{let G=I.a*Math.PI/180,ne=Math.abs(G)*I.r,se=Math.max(3,Math.round(ne));for(let le=0;le<se;le++)c-=G/se/2,a+=Math.sin(c)*ne/se,o+=Math.cos(c)*ne/se,c-=G/se/2,n.push(a),i.push(o)}let l=[0];for(let I=1;I<n.length;I++)l[I]=l[I-1]+Math.hypot(n[I]-n[I-1],i[I]-i[I-1]);let h=l[l.length-1],u=n[n.length-1],d=i[i.length-1];for(let I=0;I<n.length;I++){let G=l[I]/h;n[I]-=u*G,i[I]-=d*G}n.pop(),i.pop();let f=n.length;for(let I=0;I<(r.smooth??6);I++){let G=n.slice(),ne=i.slice();for(let se=0;se<f;se++){let le=(se-1+f)%f,q=(se+1)%f;n[se]=G[se]*.5+(G[le]+G[q])*.25,i[se]=ne[se]*.5+(ne[le]+ne[q])*.25}}let m=[0];for(let I=1;I<=f;I++){let G=I%f;m[I]=m[I-1]+Math.hypot(n[G]-n[I-1],i[G]-i[I-1])}let b=m[f],g=Math.round(b/2),p=g*2,y=b/p,S=new Float32Array(g),_=new Float32Array(g),M=new Float32Array(g),x=new Float32Array(g),T=new Float32Array(g),v=new Float32Array(g),E=new Float32Array(g),R=new Float32Array(g),P=0;for(let I=0;I<g;I++){let G=I*2*y;for(;P<f-1&&m[P+1]<G;)P++;let ne=(G-m[P])/Math.max(1e-6,m[P+1]-m[P]),se=P,le=(P+1)%f;S[I]=n[se]+(n[le]-n[se])*ne,_[I]=i[se]+(i[le]-i[se])*ne}let L=new Float32Array(g);for(let I=0;I<g;I++){let G=(I-1+g)%g,ne=(I+1)%g,se=S[ne]-S[G],le=_[ne]-_[G],q=Math.hypot(se,le)||1;x[I]=se/q,T[I]=le/q,L[I]=Math.atan2(x[I],T[I])}for(let I=0;I<g;I++){let G=(I-1+g)%g,ne=(I+1)%g;v[I]=-fl(L[ne]-L[G])/4}let B=new Float32Array(g);for(let I=0;I<g;I++){let G=0;for(let ne=-6;ne<=6;ne++)G+=v[(I+ne+g)%g];B[I]=G/13}let N=s.map(I=>m[Math.min(I,f)]/y),U=(I,G)=>N[I]+((I+1<N.length?N[I+1]:p)-N[I])*G,Q=Tm((r.height||[]).map(([I,G])=>[I*p,G]),p,0),F=Tm(r.widths&&r.widths.map(([I,G])=>[I*p,G]),p,r.width||14),j=(r.jumps||[]).map(I=>({s:U(I.seg,I.at),h:I.h})),V=I=>{let G=0;for(let ne of j){let se=I-ne.s;if(se<-p/2&&(se+=p),se>p/2&&(se-=p),se>-34&&se<=0){let le=(se+34)/34;G+=ne.h*le*le*(3-2*le)}else if(se>0&&se<7){let le=se/7;G+=ne.h*(1-le*le)}}return G};for(let I=0;I<g;I++)M[I]=Q(I*2)+V(I*2),E[I]=r.widths?F(I*2):r.width||14,R[I]=Math.max(-(r.bankMax||0),Math.min(r.bankMax||0,B[I]*(r.bankK||0)));let O=r.sectors||10,$={id:r.id,def:r,N:g,L:p,X:S,Y:M,Z:_,TX:x,TZ:T,K:B,W:E,B:R,runoff:r.runoff??2,sectors:O,segS:N,jumps:j,zones:(r.zones||[]).map(I=>({...I,from:U(I.seg,I.from),to:U(I.seg,I.to)})),wrapS:I=>(I%p+p)%p,at(I){I=(I%p+p)%p;let G=I/2;return[Math.floor(G)%g,G-Math.floor(G)]},frame(I,G={}){let[ne,se]=$.at(I),le=(ne+1)%g;G.x=S[ne]+(S[le]-S[ne])*se,G.z=_[ne]+(_[le]-_[ne])*se,G.y=M[ne]+(M[le]-M[ne])*se;let q=x[ne]+(x[le]-x[ne])*se,W=T[ne]+(T[le]-T[ne])*se,he=Math.hypot(q,W)||1;return G.tx=q/he,G.tz=W/he,G.nx=-G.tz,G.nz=G.tx,G.bank=R[ne]+(R[le]-R[ne])*se,G.w=E[ne]+(E[le]-E[ne])*se,G.k=B[ne]+(B[le]-B[ne])*se,G.heading=Math.atan2(G.tx,G.tz),G},surfaceY(I,G){let[ne,se]=$.at(I),le=(ne+1)%g,q=M[ne]+(M[le]-M[ne])*se,W=R[ne]+(R[le]-R[ne])*se;return q+G*Math.tan(W)},halfWidth(I){let[G,ne]=$.at(I),se=(G+1)%g;return(E[G]+(E[se]-E[G])*ne)/2},project(I,G,ne=-1,se={},le=30){let q=1/0,W=0,he=0,de=He=>{let $e=(He+1)%g,Et=S[He],Pt=_[He],ct=S[$e]-Et,lt=_[$e]-Pt,k=((I-Et)*ct+(G-Pt)*lt)/(ct*ct+lt*lt);k=k<0?0:k>1?1:k;let _t=Et+ct*k-I,at=Pt+lt*k-G,C=_t*_t+at*at;C<q&&(q=C,W=He,he=k)};if(ne<0){for(let $e=0;$e<g;$e+=3)de($e);let He=W;for(let $e=-4;$e<=4;$e++)de((He+$e+g)%g)}else for(let He=-le;He<=le;He++)de((ne+He+g)%g);let J=(W+1)%g,Se=S[W]+(S[J]-S[W])*he,Ve=_[W]+(_[J]-_[W])*he,Oe=x[W]+(x[J]-x[W])*he,We=T[W]+(T[J]-T[W])*he,tt=Math.hypot(Oe,We)||1;return Oe/=tt,We/=tt,se.i=W,se.s=(W+he)*2,se.d=(I-Se)*-We+(G-Ve)*Oe,se.dist=Math.sqrt(q),se},zoneAt(I){for(let G of $.zones)if(I>=G.from&&I<=G.to)return G;return null},gridSlot(I){let G=Math.floor(I/2),ne=I%2?1:-1,se=p-12-G*9-I%2*4,le=$.frame(se),q=ne*Math.min(3.4,le.w/2-2.2);return{s:se,d:q,x:le.x+le.nx*q,z:le.z+le.nz*q,yaw:le.heading}}};return $}var Rm={city:{road:"t_asphalt",roadScale:7,roadTint:[.72,.72,.75],shoulder:"b_concrete",shTint:[.62,.62,.64],lines:!0,kerbs:!0,barrier:"wall"},snow:{road:"t_snow",roadScale:6,roadTint:[.88,.91,.97],shoulder:"t_snow",shTint:[1,1,1.02],lines:!1,kerbs:!1,barrier:"snowbank",ruts:[.72,.78,.88]},offroad:{road:"t_gravel",roadScale:5,roadTint:[.92,.84,.72],shoulder:"t_dirt",shTint:[.85,.8,.72],lines:!1,kerbs:!1,barrier:"tyres",ruts:[.78,.7,.6]}};function Ii(r,e,{yOff:t=0,dOffFn:n=null,step:i=1,s0:s=0,s1:a=null}={}){let o=r.N,c={},l=Math.floor(s/2),h=a==null?o:Math.ceil(a/2),u=[];for(let y=l;y<=h;y+=i)u.push(Math.min(y,h));let d=e.length,f=new Float32Array(u.length*d*3),m=new Float32Array(u.length*d*2),b=new Float32Array(u.length*d*3);u.forEach((y,S)=>{let _=y%o*2;r.frame(_,c);let M=c.w/2;for(let x=0;x<d;x++){let T=e[x],v=typeof T=="function"?T(M,_):T,E=r.surfaceY(_,v)+(typeof t=="function"?t(x,v,M,_):t),R=(S*d+x)*3;f[R]=c.x+c.nx*v,f[R+1]=E,f[R+2]=c.z+c.nz*v;let P=Math.cos(c.bank),L=Math.sin(c.bank);b[R]=-c.nx*L,b[R+1]=P,b[R+2]=-c.nz*L,m[(S*d+x)*2]=v,m[(S*d+x)*2+1]=y*2}});let g=[];for(let y=0;y<u.length-1;y++)for(let S=0;S<d-1;S++){let _=y*d+S,M=(y+1)*d+S;g.push(_,_+1,M,_+1,M+1,M)}let p=new it;return p.setAttribute("position",new Ke(f,3)),p.setAttribute("normal",new Ke(b,3)),p.setAttribute("uv",new Ke(m,2)),p.setIndex(g),p}function Cm(r,e,t,n={},i=200){let s=new Xe;for(let a=0;a<r.L;a+=i){let o=Ii(r,e,{...n,s0:a,s1:Math.min(r.L,a+i)});o.computeBoundingSphere();let c=new Te(o,t);c.receiveShadow=!0,c.matrixAutoUpdate=!1,s.add(c)}return s}var ed=null;function O_(){if(ed)return ed;let r=512,e=new Float32Array(r*r);for(let o=0;o<e.length;o++)e[o]=Math.random();let t=(o,c)=>{let l=new Float32Array(r*r);for(let h=0;h<r;h++)for(let u=0;u<r;u++){let d=0,f=0;for(let m=-c;m<=c;m+=Math.max(1,c>>2))d+=o[h*r+(u+m+r)%r]+o[(h+m+r)%r*r+u],f+=2;l[h*r+u]=d/f}return l},n=t(e,6),i=t(t(e,32),32),s=Yt(r,r,o=>{let c=o.createImageData(r,r);for(let l=0;l<r*r;l++){let h=e[l]-.5,u=e[l]>.93?.18:e[l]<.05?-.12:0,d=.62+h*.22+u+(n[l]-.5)*.35+(i[l]-.5)*.9,f=Math.max(0,Math.min(255,d*118));c.data[l*4]=f,c.data[l*4+1]=f*1.01,c.data[l*4+2]=f*1.05,c.data[l*4+3]=255}o.putImageData(c,0,0)}),a=Yt(r,r,o=>{let c=o.createImageData(r,r);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=l*r+h,d=e[l*r+(h+1)%r]-e[l*r+(h-1+r)%r],f=e[(l+1)%r*r+h]-e[(l-1+r)%r*r+h];c.data[u*4]=128-d*70,c.data[u*4+1]=128-f*70,c.data[u*4+2]=255,c.data[u*4+3]=255}o.putImageData(c,0,0)},{srgb:!1});return ed={col:s,nrm:a}}function B_(r,e,t){let n=En(e.road+"_c",{srgb:!0,gfx:r}),i=r.q.normalMaps?En(e.road+"_n",{gfx:r}):null;if(e.lines){let o=O_();n=o.col,i=r.q.normalMaps?o.nrm:null,e={...e,roadScale:3.2,roadTint:[1,1,1]}}let s=new ze({map:n,normalMap:i,roughness:e.road==="t_asphalt"?.82:.9,metalness:0});i&&s.normalScale.set(.6,.6),s.color.setRGB(...e.roadTint);let a=t.W[0]/2;return s.onBeforeCompile=o=>{o.uniforms.sc={value:1/e.roadScale},o.uniforms.hw={value:a},o.uniforms.rutCol={value:new D(...e.ruts||[0,0,0])},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vRoad;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vRoad = uv;`),o.vertexShader=o.vertexShader.replace("#include <uv_vertex>","#include <uv_vertex>"),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vRoad; uniform float sc; uniform float hw; uniform vec3 rutCol;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`).replace("#include <map_fragment>",`
        vec2 ruv = vec2(vRoad.x, vRoad.y) * sc;
        vec4 texel = texture2D(map, ruv);
        vec4 texel2 = texture2D(map, ruv * 0.27 + 0.5);
        vec3 tc = mix(texel.rgb, texel2.rgb, 0.3);
        diffuseColor.rgb *= tc;
        float ad = abs(vRoad.x);
        ${e.lines?`
        // white edge lines + a darker racing line of rubber
        float line = smoothstep(hw - 0.62, hw - 0.58, ad) * (1.0 - smoothstep(hw - 0.3, hw - 0.26, ad));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.86), line * 0.92);
        diffuseColor.rgb *= 1.0 - 0.18 * exp(-pow((vRoad.x) / 3.0, 2.0));`:`
        // wheel ruts: two darker packed bands per direction
        float r1 = exp(-pow((ad - 1.1) / 0.55, 2.0)) + exp(-pow((ad - 3.2) / 0.6, 2.0));
        float n = hash(floor(vRoad * vec2(3.0, 0.6)));
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * rutCol, clamp(r1 * (0.65 + 0.35 * n), 0.0, 1.0));`}`).replace("#include <normal_fragment_maps>",`
        #ifdef USE_NORMALMAP
          vec3 mapN = texture2D(normalMap, ruv).xyz * 2.0 - 1.0;
          mapN.xy *= normalScale;
          normal = normalize(tbn * mapN);
        #endif`)},s.customProgramCacheKey=()=>"road"+e.road+(i?"n":""),s}function Pm(r,e,t,{hostName:n=""}={}){let i=Rm[t]||Rm.city,s=new Xe;s.name="road";let a=e.runoff,o=[u=>-u,u=>-u*.66,u=>-u*.33,0,u=>u*.33,u=>u*.66,u=>u],c=B_(r,i,e);s.add(Cm(e,o,c));let l=En(i.shoulder+"_c",{srgb:!0,gfx:r}),h=new ze({map:l,roughness:.95});h.color.setRGB(...i.shTint),h.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.18;
#endif`)};for(let u of[-1,1]){let d=u<0?[m=>-m-a-1.2,m=>-m-a-.6,m=>-m-a,m=>-m]:[m=>m,m=>m+a,m=>m+a+.6,m=>m+a+1.2],f=u<0?(m=>m===0?-1.4:-.02):(m=>m===3?-1.4:-.02);s.add(Cm(e,d,h,{yOff:f}))}return i.kerbs&&s.add(z_(r,e)),s.add(H_(r,e)),s.add(V_(r,e,t,n)),s.add(K_(r,e,t,n)),s}function z_(r,e){let t=Yt(64,128,(l,h,u)=>{l.fillStyle="#d8d8d8",l.fillRect(0,0,h,u),l.fillStyle="#c4161c",l.fillRect(0,0,h,u/2)}),n=new ze({map:t,roughness:.6});n.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.x, uv.y / 2.4);
#endif`)};let i=new Xe,s=e.N,a=!1,o=0,c=[];for(let l=0;l<=s;l++){let h=Math.abs(e.K[l%s]);!a&&h>1/140?(a=!0,o=l):a&&h<1/200&&(a=!1,l-o>4&&c.push([o-6,l+6]))}for(let[l,h]of c)for(let u of[-1,1]){let d=u<0?[g=>-g-.35,g=>-g+.9]:[g=>g-.9,g=>g+.35],f=Ii(e,d,{s0:l*2,s1:h*2,yOff:(g,p,y)=>Math.abs(p)<y?.03:.012}),m=f.attributes.uv;for(let g=0;g<m.count;g++)m.setX(g,g%2);f.computeBoundingSphere();let b=new Te(f,n);b.receiveShadow=!0,b.matrixAutoUpdate=!1,i.add(b)}return i}function H_(r,e){let t=new Xe,n=Yt(256,64,(l,h,u)=>{for(let f=0;f<u/16;f++)for(let m=0;m<h/16;m++)l.fillStyle=(m+f)%2?"#111":"#eee",l.fillRect(m*16,f*16,16,16)},{repeat:!1}),i=e.halfWidth(0),s=Ii(e,[-i,i],{s0:0,s1:2,yOff:.02}),a=s.attributes.uv;for(let l=0;l<a.count;l++)a.setX(l,l%2),a.setY(l,l<2?0:1);let o=new Te(s,new ze({map:n,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));o.receiveShadow=!0,t.add(o);let c=new ze({color:14540253,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});for(let l=0;l<24;l++){let h=e.gridSlot(l),u=e.frame(h.s),d=e.surfaceY(h.s,h.d)+.018,f=new Te(new Gt(2.4,.18),c);f.rotation.set(-Math.PI/2,u.heading,0,"YXZ"),f.position.set(h.x+u.tx*2.9,d,h.z+u.tz*2.9),t.add(f)}return t}function G_(r){let e=[["NITRO","#ff2d55","#fff"],["LIVE RACING","#101018","#ffcc00"],[r?"@"+r:"TikTok LIVE","#111","#19e0ff"],["TURBO GIFT","#ffcc00","#111"],["SPEED ENERGY","#19e0ff","#07080d"],["ROSE MOTORS","#fff","#c4161c"],["PODIUM","#2bd96f","#07080d"],["GP CITY","#8b5cf6","#fff"]];return Yt(2048,128,(t,n,i)=>{let s=n/e.length;e.forEach(([a,o,c],l)=>{t.fillStyle=o,t.fillRect(l*s,0,s,i),t.fillStyle=c,t.font=`italic 900 ${i*.5}px "Russo One", "Arial Black", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(a,l*s+s/2,i/2+2,s-20)})})}function V_(r,e,t,n){let i=new Xe,s=e.runoff;if(t==="city"){let a=new ze({map:En("b_concrete_c",{srgb:!0,gfx:r}),roughness:.9,color:14277081});a.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * vec2(0.5, 0.25);
#endif`)};let o=new ze({map:G_(n),roughness:.55});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.y / 64.0, uv.x);
#endif`)};for(let c of[-1,1]){let l=p=>c*(p+s),h=Ii(e,[l,l],{yOff:p=>p===0?0:1.05}),u=h.attributes.uv;for(let p=0;p<u.count;p++)u.setX(p,p%2),c>0&&u.setY(p,-u.getY(p));Va(h,c<0),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Te(h,o);d.receiveShadow=!0,d.castShadow=!0,i.add(d);let f=Ii(e,[p=>c*(p+s),p=>c*(p+s+.55)],{yOff:1.05});Va(f,c>0),f.computeBoundingSphere();let m=new Te(f,a);m.receiveShadow=!0,i.add(m);let b=Ii(e,[p=>c*(p+s+.55),p=>c*(p+s+.55)],{yOff:p=>p===0?1.05:-1.2});Va(b,c<0),b.computeVertexNormals(),b.computeBoundingSphere();let g=new Te(b,a);g.castShadow=!0,i.add(g)}i.add(W_(r,e))}else if(t==="snow"){let a=new ze({map:En("t_snow_c",{srgb:!0,gfx:r}),roughness:.85});a.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.15;
#endif`)};for(let o of[-1,1]){let c=[0,.4,.9,1.5,2.3,3.4],l=[0,.55,1.05,1.35,1.2,-.6],h=c.map(f=>m=>o*(m+s+f)),u=Ii(e,h,{yOff:f=>l[f]});Va(u,o>0),u.computeVertexNormals(),u.computeBoundingSphere();let d=new Te(u,a);d.receiveShadow=!0,d.castShadow=!0,i.add(d)}i.add(q_(r,e,16738816))}else{let a=new ze({map:En("t_dirt_c",{srgb:!0,gfx:r}),roughness:.95,color:13616304});a.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.15;
#endif`)};for(let o of[-1,1]){let c=[0,.5,1.2,2.2,3.4],l=[0,.4,.75,.6,-.8],h=Ii(e,c.map(d=>f=>o*(f+s+d)),{yOff:d=>l[d]});Va(h,o>0),h.computeVertexNormals(),h.computeBoundingSphere();let u=new Te(h,a);u.receiveShadow=!0,i.add(u)}i.add(X_(r,e))}return i}function Va(r,e){if(!e)return;let t=r.index.array;for(let n=0;n<t.length;n+=3){let i=t[n+1];t[n+1]=t[n+2],t[n+2]=i}r.index.needsUpdate=!0}function W_(r,e){let t=new Xe,n=e.runoff,i=new Lt(.1,3.2,.1);i.translate(0,1.6+1.05,0);let s=Math.floor(e.L/6)*2,a=new en(i,new ze({color:10133672,metalness:.8,roughness:.4}),s),o=new Re,c={},l=0;for(let h=0;h<e.L;h+=6)for(let u of[-1,1]){e.frame(h,c);let d=u*(c.w/2+n+.28);o.makeTranslation(c.x+c.nx*d,e.surfaceY(h,u*(c.w/2+n)),c.z+c.nz*d),a.setMatrixAt(l++,o)}if(a.count=l,a.castShadow=!0,t.add(a),r.q.detail>=.8){let h=Yt(64,64,(d,f,m)=>{d.clearRect(0,0,f,m),d.strokeStyle="rgba(200,205,210,0.9)",d.lineWidth=2;for(let b=-f;b<f*2;b+=16)d.beginPath(),d.moveTo(b,0),d.lineTo(b+m,m),d.stroke(),d.beginPath(),d.moveTo(b+m,0),d.lineTo(b,m),d.stroke()}),u=new Qt({map:h,transparent:!0,alphaTest:.3,side:St,depthWrite:!1,fog:!0});u.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.y / 1.2, uv.x * 2.6);
#endif`)};for(let d of[-1,1]){let f=g=>d*(g+n+.28),m=Ii(e,[f,f],{yOff:g=>g===0?1.05:4.2}),b=m.attributes.uv;for(let g=0;g<b.count;g++)b.setX(g,g%2);m.computeBoundingSphere(),t.add(new Te(m,u))}}return t}function q_(r,e,t){let n=new Mi(.06,.06,2.2,6);n.translate(0,1.1,0);let i=new en(n,new ze({color:t,roughness:.6}),800),s=new Re,a={},o=0;for(let c=0;c<e.L&&o<800;c+=7){if(e.frame(c,a),Math.abs(a.k)<1/160)continue;let l=a.k>0?-1:1,h=l*(a.w/2+e.runoff+1.3);s.makeTranslation(a.x+a.nx*h,e.surfaceY(c,l*(a.w/2+e.runoff))+.9,a.z+a.nz*h),i.setMatrixAt(o++,s)}return i.count=o,i.castShadow=!0,i}function X_(r,e){let t=new xs(.36,.14,6,12);t.rotateX(Math.PI/2);let n=[];for(let l=0;l<3;l++){let h=t.clone();h.translate(0,.15+l*.28,0),n.push(h)}let i=j_(n),s=new en(i,new ze({color:1381653,roughness:.85}),1600),a=new Re,o={},c=0;for(let l=0;l<e.L&&c<1600;l+=1.05){if(e.frame(l,o),Math.abs(o.k)<1/120)continue;let h=o.k>0?-1:1,u=h*(o.w/2+e.runoff+.4);a.makeTranslation(o.x+o.nx*u,e.surfaceY(l,h*(o.w/2+e.runoff)),o.z+o.nz*u),s.setMatrixAt(c++,a)}return s.count=c,s.castShadow=!0,s.receiveShadow=!0,s}function j_(r){let e=0,t=0;for(let h of r)e+=h.attributes.position.count,t+=h.index?h.index.count:h.attributes.position.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2),a=new Uint32Array(t),o=0,c=0;for(let h of r){n.set(h.attributes.position.array,o*3),h.attributes.normal&&i.set(h.attributes.normal.array,o*3),h.attributes.uv&&s.set(h.attributes.uv.array,o*2);let u=h.index?h.index.array:[...Array(h.attributes.position.count).keys()];for(let d=0;d<u.length;d++)a[c+d]=u[d]+o;o+=h.attributes.position.count,c+=u.length}let l=new it;return l.setAttribute("position",new Ke(n,3)),l.setAttribute("normal",new Ke(i,3)),l.setAttribute("uv",new Ke(s,2)),l.setIndex(new Ke(a,1)),l}function K_(r,e,t,n){let i=new Xe;i.name="gantry";let s=e.frame(4),a=s.w/2+e.runoff+.6,o=e.surfaceY(4,0),c=new ze({color:2764085,metalness:.7,roughness:.35}),l=new Lt(.7,7.5,.7);l.translate(0,3.75,0);for(let b of[-1,1]){let g=new Te(l,c);g.position.set(s.x+s.nx*b*a,e.surfaceY(4,b*(a-.6)),s.z+s.nz*b*a),g.castShadow=!0,i.add(g)}let h=new Te(new Lt(a*2+.7,1.6,.8),c);h.position.set(s.x,o+7.2,s.z),h.rotation.y=s.heading,h.castShadow=!0,i.add(h);let u=Yt(1024,128,(b,g,p)=>{let y=b.createLinearGradient(0,0,g,0);y.addColorStop(0,"#ff2d55"),y.addColorStop(1,"#ff7a18"),b.fillStyle=y,b.fillRect(0,0,g,p),b.fillStyle="#fff",b.font='italic 900 78px "Russo One", "Arial Black", sans-serif',b.textAlign="center",b.textBaseline="middle",b.fillText("NITRO LIVE  \u2022  START / FINISH",g/2,p/2+4)},{repeat:!1}),d=new Te(new Gt(a*2-1,1.25),new ze({map:u,roughness:.5,emissive:16777215,emissiveMap:u,emissiveIntensity:.25,side:St}));d.position.set(s.x-s.tx*.42,o+7.2,s.z-s.tz*.42),d.rotation.y=s.heading+Math.PI,i.add(d);let f=[],m=new ze({color:723726,roughness:.5});for(let b=0;b<5;b++){let g=(b-2)*1.1,p=new Te(new Lt(.8,1.9,.4),m),y=s.x+s.nx*g-s.tx*.6,S=s.z+s.nz*g-s.tz*.6;p.position.set(y,o+5.2,S),p.rotation.y=s.heading,i.add(p);let _=new ze({color:2229253,emissive:16718382,emissiveIntensity:0});for(let M=0;M<2;M++){let x=new Te(new ga(.26,16),_);x.position.set(y-s.tx*.21,o+5.65-M*.72,S-s.tz*.21),x.rotation.y=s.heading+Math.PI,i.add(x)}f.push(_)}return i.userData.setLights=(b,g)=>{f.forEach((p,y)=>{p.emissive.set(g?2293606:16718382),p.emissiveIntensity=g?4:y<b?5:0,p.color.set(g?405519:y<b?5574676:2229253)})},i.userData.setLights(0,!1),i}var qa={time:{value:0},snow:{value:0}};var td=new Map;async function Y_(r){if(td.has(r))return td.get(r);let e=Us("assets/props/"+r+".glb").then(t=>{let n=qu(t.scene),i=new qt;for(let s of n)i.union(s.geometry.boundingBox);return{name:r,parts:n,box:i,height:i.max.y,radius:Math.max(i.max.x-i.min.x,i.max.z-i.min.z)/2}});return td.set(r,e),e}function $_(r,{leaves:e,snow:t}){let n=r.clone();return e&&(n.alphaTest=.45,n.transparent=!1,n.side=St,n.depthWrite=!0),n.onBeforeCompile=i=>{i.uniforms.uTime=qa.time,i.uniforms.uSnow=qa.snow,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;
varying vec3 vWN;
varying float vH;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vH = position.y;
        ${e?`
        // wind: the higher, the more the branch sways; each tree has its own phase
        #ifdef USE_INSTANCING
          vec3 ip = instanceMatrix[3].xyz;
        #else
          vec3 ip = vec3(0.0);
        #endif
        float ph = uTime * 1.6 + ip.x * 0.13 + ip.z * 0.07;
        float k = pow(max(0.0, position.y) / 12.0, 1.6) * 0.18;
        transformed.x += sin(ph + position.y * 0.4) * k;
        transformed.z += cos(ph * 0.8 + position.x) * k * 0.7;`:""}`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
        #ifdef USE_INSTANCING
          vWN = normalize(mat3(modelMatrix) * mat3(instanceMatrix) * objectNormal);
        #else
          vWN = normalize(mat3(modelMatrix) * objectNormal);
        #endif`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;
varying vec3 vWN;
varying float vH;`).replace("#include <color_fragment>",`#include <color_fragment>
        if (uSnow > 0.0) {
          float up = clamp(vWN.y, 0.0, 1.0);
          float cover = smoothstep(${e?"0.15, 0.6":"0.45, 0.85"}, up) * uSnow;
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 1.0), cover);
        }`)},n.customProgramCacheKey=()=>"scn"+(e?"L":"S"),n}var Im=new Re,nd=new cn,J_=new D,sd=class{constructor(e,t,n,{cast:i=!0,snow:s=!1}={}){this.prop=e,this.max=t,this.n=0,this.M=new Float32Array(t*16),this.C=new Float32Array(t*4),this.meshes=e.parts.map(a=>{let o=a.material.alphaTest>0||a.material.transparent||a.material.name==="leaves",c=new en(a.geometry,$_(a.material,{leaves:o,snow:s}),t);return c.count=0,c.frustumCulled=!1,c.castShadow=i,c.receiveShadow=!0,c.instanceMatrix.setUsage(Ln),n.add(c),c})}add(e,t,n,i,s){if(this.n>=this.max)return;Im.makeRotationY(i).scale(J_.set(s,s,s)).setPosition(e,t,n),Im.toArray(this.M,this.n*16);let a=this.prop.radius*s,o=this.prop.height*s;this.C.set([e,t+o*.5,n,Math.max(a,o*.5)],this.n*4),this.n++}cull(e,t,n,i,s){let a=0,o=t.x,c=t.z,l=n*n,h=i*i,u=this.meshes.map(d=>d.instanceMatrix.array);for(let d=0;d<this.n;d++){let f=d*4,m=this.C[f]-o,b=this.C[f+2]-c,g=m*m+b*b;if(!(g>h)&&(nd.center.set(this.C[f],this.C[f+1],this.C[f+2]),nd.radius=this.C[f+3],!!e.intersectsSphere(nd)))if(g<l){for(let p of u)p.set(this.M.subarray(d*16,d*16+16),a*16);a++}else s&&s.push(d,this)}for(let d of this.meshes)d.count=a,d.instanceMatrix.needsUpdate=!0;return a}dispose(e){for(let t of this.meshes)e.remove(t),t.material.dispose(),t.dispose()}},rd=class{constructor(e,t,n,i){this.props=t,this.max=i;let s=t.length,a=256*s,o=512,c=new an(a*2,o*2,{samples:0,generateMipmaps:!0,minFilter:gn}),l=new yi;l.environment=e.scene.environment,l.environmentIntensity=e.scene.environmentIntensity||1,l.add(new _s(14674431,3815978,.6));let h=new Ai(16777215,2.2);h.position.set(.4,1,.8),l.add(h);let u=e.renderer,d=u.toneMapping,f=u.getClearColor(new ye),m=u.getClearAlpha();u.toneMapping=mn,u.setRenderTarget(c),u.setClearColor(0,0),u.clear(),t.forEach((y,S)=>{let _=new Xe;for(let v of y.parts){let E=v.material.clone();E.alphaTest=.4,E.transparent=!1,E.side=St,_.add(new Te(v.geometry,E))}l.add(_);let M=y.height,x=y.radius*2,T=new si(-x/2,x/2,M,0,-100,100);T.position.set(0,0,20),T.lookAt(0,0,0),c.viewport.set(S*512,0,512,1024),c.scissor.set(S*512,0,512,1024),c.scissorTest=!0,u.setRenderTarget(c),u.render(l,T),l.remove(_),y.bw=x,y.bh=M}),c.scissorTest=!1,u.setRenderTarget(null),u.setClearColor(f,m),u.toneMapping=d,this.rt=c;let b=new Gt(1,1);b.translate(0,.5,0);let g=new Ms().copy(b);this.aPos=new It(new Float32Array(i*4),4).setUsage(Ln),this.aSize=new It(new Float32Array(i*2),2).setUsage(Ln),g.setAttribute("ipos",this.aPos),g.setAttribute("isize",this.aSize),g.instanceCount=0;let p=qa.snow;this.mat=new Vt({uniforms:Object.assign(Cr.clone(ve.fog),{atlas:{value:c.texture},cols:{value:s},uSnow:p}),vertexShader:`
        attribute vec4 ipos; attribute vec2 isize; uniform float cols; varying vec2 vUv;
        #include <fog_pars_vertex>
        void main() {
          vec3 right = normalize(vec3(viewMatrix[0][0], 0.0, viewMatrix[2][0]));
          vec3 wp = ipos.xyz + right * position.x * isize.x + vec3(0.0, position.y * isize.y, 0.0);
          vUv = vec2((ipos.w + uv.x) / cols, uv.y);
          vec4 mvPosition = viewMatrix * vec4(wp, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          #include <fog_vertex>
        }`,fragmentShader:`
        uniform sampler2D atlas; uniform float uSnow; varying vec2 vUv;
        #include <fog_pars_fragment>
        void main() {
          vec4 c = texture2D(atlas, vUv);
          if (c.a < 0.45) discard;
          c.rgb = mix(c.rgb, vec3(0.9, 0.92, 0.97), uSnow * 0.35);
          gl_FragColor = vec4(c.rgb, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
          #include <fog_fragment>
        }`,fog:!0}),this.mesh=new Te(g,this.mat),this.mesh.frustumCulled=!1,n.add(this.mesh),this.list=[],this.geo=g}begin(){this.list.length=0}push(e,t){this.list.push(e,t)}commit(){let e=Math.min(this.max,this.list.length/2),t=this.aPos.array,n=this.aSize.array;for(let i=0;i<e;i++){let s=this.list[i*2],a=this.list[i*2+1],o=a.M,c=s*16,l=Math.hypot(o[c],o[c+1],o[c+2]);t[i*4]=o[c+12],t[i*4+1]=o[c+13],t[i*4+2]=o[c+14],t[i*4+3]=a.impIndex,n[i*2]=a.prop.bw*l,n[i*2+1]=a.prop.bh*l}this.geo.instanceCount=e,this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0}dispose(e){e.remove(this.mesh),this.geo.dispose(),this.mat.dispose(),this.rt.dispose()}},Lm={offroad:{trees:[["pine",3],["fir",3],["noblefir",2],["birch",1.5],["birch2",1],["maple",1],["oak",1],["deadtree",.4]],small:[["shrub",2],["bush",2],["boulder1",.7],["boulder2",.8],["boulder3",1],["stone1",1.2],["stone2",.8],["log",.6]],density:1,snow:0},snow:{trees:[["fir",4],["noblefir",3],["pine",3],["deadtree",.6],["birch2",.4]],small:[["shrub",2],["boulder1",1],["boulder2",.6],["boulder3",1.2],["stone1",1],["log",.5]],density:.9,snow:1},city:{trees:[["maple",2],["oak",2],["birch",1],["birchgold",1]],small:[["bush",2]],density:.3,snow:0}},Wa=["office1","office1b","office5","office5b","artdeco","brutal","public1","resid2","resid3","resid4","harlem","lowrise","lowrise2","classic2","commercial","flatcomplex","chicago1","chicago2"],id=["empire","chrysler","woolworth","metlife","nytimes","sky1","sky2","sky3","sky4"];function Dm(r,e){let t=0;for(let[,i]of r)t+=i;let n=e*t;for(let[i,s]of r)if((n-=s)<=0)return i;return r[0][0]}async function Fm(r,e,t,n,i){let s=r.q,a=r.scene,o=Lm[t]||Lm.offroad;qa.snow.value=o.snow;let c=Qc(99+t.length),l=c.rnd,h=[...new Set([...o.trees.map(F=>F[0]),...o.small.map(F=>F[0]),...t==="city"?[...Wa,...id,"jersey"]:[]])],u={},d=0;await Promise.all(h.map(F=>Y_(F).then(j=>{u[F]=j,i&&i(++d/h.length)})));let f={},m=(F,j,V)=>f[F]||(f[F]=new sd(u[F],j,a,{snow:o.snow>0,...V})),b=n.field,g={},p=F=>e.halfWidth(F)+e.runoff,y=b.radius+450,S=Math.round((t==="city"?1100:5200)*s.trees),_=Math.round((t==="city"?250:2400)*s.trees),M=t==="city"?new Set:null,x=new Map,T=(F,j)=>Math.floor(F/8)+","+Math.floor(j/8);t==="city"&&E();let v=(F,j,V)=>{let O=0,$=0;for(;O<j&&$<j*8;){$++;let I,G;if(l()<V){let de=l()*e.L,J=e.frame(de),Se=l()<.5?-1:1,Ve=p(de)+4+l()**1.6*160;I=J.x+J.nx*Se*Ve,G=J.z+J.nz*Se*Ve}else{let de=l()*Math.PI*2,J=Math.sqrt(l())*y;I=b.cx+Math.cos(de)*J,G=b.cz+Math.sin(de)*J}let ne=n.height(I,G,g);if(g.i>=0&&(g.dist<p(g.s)+3.5||ll(e,g.s,g.d))||x.has(T(I,G))||n.river&&$u(n.river,I,G)<n.river.hw+7)continue;let se=t==="city"?1:Zt(-.35,.25,c.fbm(I/180,G/180,3));if(l()>se*o.density+.08)continue;let le=n.height(I+3,G),q=n.height(I,G+3);if(Math.hypot(le-ne,q-ne)/3>.75)continue;let W=Dm(F,l()),he=.75+l()*.5;m(W,j+50).add(I,ne-.25,G,l()*Math.PI*2,he),O++}};v(o.trees,S,t==="city"?.2:.55),v(o.small,_,.7);function E(){let F=(j,V,O,$,I=3)=>{let G=u[j];if(!G)return!1;let ne=(G.box.max.x-G.box.min.x)/2+I,se=(G.box.max.z-G.box.min.z)/2+I,le=Math.cos($),q=Math.sin($),W=[];for(let de of[-1,-.5,0,.5,1])for(let J of[-1,-.5,0,.5,1])W.push([V+de*ne*le+J*se*q,O-de*ne*q+J*se*le]);for(let[de,J]of W)if(n.height(de,J,g),g.i>=0&&(g.dist<p(g.s)+5.5||ll(e,g.s,g.d))||x.has(T(de,J)))return!1;for(let[de,J]of W)x.set(T(de,J),1);for(let de=-1;de<=1;de+=.25)for(let J=-1;J<=1;J+=.25)x.set(T(V+de*ne*le+J*se*q,O-de*ne*q+J*se*le),1);let he=1/0;for(let[de,J]of W)he=Math.min(he,n.height(de,J));return m(j,60,{cast:!0}).add(V,he-.6,O,$,1),!0};for(let j of[-1,1])for(let V=0;V<e.L;V+=6){let O=e.frame(V),$=Wa[Math.floor(l()*Wa.length)],I=u[$],G=(I.box.max.z-I.box.min.z)/2,ne=p(V)+9.5+G,se=Math.atan2(O.tx,O.tz)+(j>0?Math.PI/2:-Math.PI/2);F($,O.x+O.nx*j*ne,O.z+O.nz*j*ne,se+(l()<.5?0:Math.PI),2)&&(V+=(I.box.max.x-I.box.min.x)*.7)}for(let j=0;j<700;j++){let V=l()*Math.PI*2,O=100+Math.sqrt(l())*(b.radius+600),$=b.cx+Math.cos(V)*O,I=b.cz+Math.sin(V)*O,G=Math.round($/48)*48,ne=Math.round(I/48)*48;F(Wa[Math.floor(l()*Wa.length)],G,ne,Math.floor(l()*4)*Math.PI/2,5)}for(let j=0;j<70;j++){let V=j/70*Math.PI*2+l()*.08,O=b.radius+900+l()*1300,$=b.cx+Math.cos(V)*O,I=b.cz+Math.sin(V)*O,G=id[Math.floor(l()*id.length)];m(G,30,{cast:!1}).add($,n.height($,I)-2,I,l()*Math.PI*2,.7+l()*.5)}for(let j of[-1,1])for(let V=0;V<e.L;V+=13+l()*6){let O=e.frame(V),$=p(V)+4.2,I=O.x+O.nx*j*$,G=O.z+O.nz*j*$;x.has(T(I,G))||(n.height(I,G,g),!(g.dist<p(g.s)+3.2||ll(e,g.s,g.d))&&m(Dm(o.trees,l()),900).add(I,n.height(I,G)-.2,G,l()*6.28,.6+l()*.25))}}let R=o.trees.map(F=>F[0]).filter(F=>f[F]);R.forEach((F,j)=>{f[F].impIndex=j,f[F].isTree=!0});let P=new rd(r,R.map(F=>u[F]),a,8e3),L=new Vi,B=new Re,N=0,U=s.detail>=1.2?260:s.detail>=1?190:s.detail>=.8?130:85,Q=s.dist*.95;return{groups:f,imp:P,props:u,update(F,j,V){if(qa.time.value+=F,N+=F,!(!V&&N<.2)){N=0,B.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),L.setFromProjectionMatrix(B),P.begin();for(let O of Object.values(f))O.cull(L,j.position,O.isTree?U:Q,Q*(O.isTree?1:O.prop.height>60?3:.8),O.isTree?P:null);P.commit()}},dispose(){for(let F of Object.values(f))F.dispose(a);P.dispose(a)}}}var Nm=4,Um=4.2;function Z_(){let r=new Xe,e=new Te(new Mi(.016,.02,1.25,6),new ze({color:2236966,metalness:.6,roughness:.4}));e.position.y=.5,e.castShadow=!0,r.add(e);let t=Yt(128,96,(o,c,l)=>{for(let h=0;h<6;h++)for(let u=0;u<8;u++)o.fillStyle=(u+h)%2?"#111":"#f4f4f4",o.fillRect(u*16,h*16,16,16)},{repeat:!1}),n=new Gt(.95,.66,14,6);n.translate(.475,0,0);let i=new ze({map:t,side:St,roughness:.8}),s={value:0};i.onBeforeCompile=o=>{o.uniforms.fTime=s,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform float fTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float k = position.x / 0.95;
        transformed.z += (sin(position.x * 7.0 - fTime * 13.0) * 0.09 + sin(position.y * 5.0 + position.x * 3.0 - fTime * 9.0) * 0.03) * k;
        transformed.y -= k * k * 0.08;`)};let a=new Te(n,i);return a.position.y=.8,a.castShadow=!0,r.add(a),r.userData.time=s,r}var pl=class{constructor(e,t){this.grp=new Xe,this.grp.name="marshal",this.track=t,this.wave=0,this.ready=!1,this.gone=!1;let n=t.frame(Nm);this.grp.position.set(n.x+n.nx*Um,t.surfaceY(Nm,0)+8,n.z+n.nz*Um),this.grp.rotation.y=n.heading+Math.PI,this.toCentre=new D(-n.nx,0,-n.nz),this.flag=Z_(),this.grp.add(this.flag),this.a=new D,this.b=new D,this.m=new Re,this.load(e)}async load(e){let t,n;try{[t,n]=await Promise.all([ol("racergirl"),ol("rider")])}catch{return}if(this.gone)return;let i=Fs(t.scene);i.updateMatrixWorld(!0),i.traverse(h=>{h.isSkinnedMesh&&(h.skeleton.update(),h.computeBoundingBox()),h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1)});let s=new qt().setFromObject(i),a=1.72/Math.max(.1,s.max.y-s.min.y);i.scale.setScalar(a),i.position.y=-s.min.y*a,this.grp.add(i),this.mixer=new ri(i);let o=t.animations.find(h=>/idle/i.test(h.name))||t.animations[0],c=n.animations.filter(h=>h.duration>1)[0];this.idle=o&&this.mixer.clipAction(o),this.cheer=c&&this.mixer.clipAction(ju(c,n.scene,t.scene)),this.idle&&this.idle.play();let l=h=>{let u=null;return i.traverse(d=>{!u&&d.isBone&&new RegExp(h,"i").test(d.name)&&(u=d)}),u};this.hand=l("R_Hand"),this.fore=l("R_Forearm"),this.ready=!0}update(e){if(this.flag.userData.time.value+=e,!this.ready)return;let t=this.wave>0;if(this.wave>0&&(this.wave-=e),t!==this.waving&&this.cheer){this.waving=t;let n=t?this.cheer:this.idle,i=t?this.idle:this.cheer;n&&(n.reset(),n.play(),n.fadeIn(.35)),i&&i.fadeOut(.35)}if(this.mixer.update(e),this.hand&&this.fore){this.grp.updateMatrixWorld(!0),this.hand.getWorldPosition(this.a),this.fore.getWorldPosition(this.b);let n=this.b.subVectors(this.a,this.b).normalize().multiplyScalar(.7).add({x:0,y:.8,z:0}).normalize(),i=this.toCentre.clone().addScaledVector(n,-this.toCentre.dot(n)).normalize(),s=new D().crossVectors(i,n);this.m.makeBasis(i,n,s).setPosition(this.a),this.m.premultiply(this.grp.matrixWorld.clone().invert()),this.m.decompose(this.flag.position,this.flag.quaternion,this.flag.scale),this.flag.position.addScaledVector(n.transformDirection(this.grp.matrixWorld.clone().invert()),-.35)}else this.flag.position.set(.35,1.2,.2)}dispose(){this.gone=!0,this.mixer&&this.mixer.stopAllAction()}};var km={city:{id:"city",width:17,runoff:2.5,bankK:0,bankMax:0,sectors:12,path:[{s:260,adj:!0},{r:30,a:90},{s:250},{r:26,a:-90},{s:180},{r:26,a:90},{s:330},{r:120,a:70},{s:150},{r:90,a:20},{s:650},{r:19,a:180},{s:120},{r:24,a:-90},{s:700,adj:!0},{r:45,a:50},{s:70},{r:45,a:-30},{s:90},{r:40,a:70},{s:250}],height:[[0,0],[.12,1],[.25,5],[.36,9],[.47,8],[.58,3],[.7,0],[.8,-2],[.92,-1]],zones:[{seg:14,from:.25,to:.7,type:"tunnel"}]},snow:{id:"snow",width:15,runoff:4,bankK:5,bankMax:.09,sectors:12,path:[{s:250,adj:!0},{r:100,a:60},{s:180},{r:80,a:-50},{s:120},{r:70,a:80},{s:250},{r:110,a:60},{s:200},{r:90,a:-40},{s:150},{r:26,a:150},{s:220},{r:80,a:-50},{s:500},{r:90,a:60},{s:300,adj:!0},{r:55,a:90},{s:230}],height:[[0,0],[.15,6],[.3,16],[.45,28],[.52,32],[.62,24],[.75,12],[.88,2],[.95,0]],jumps:[{seg:14,at:.55,h:2}],zones:[]},offroad:{id:"offroad",width:15,runoff:5,bankK:4,bankMax:.1,sectors:12,path:[{s:200,adj:!0},{r:50,a:70},{s:160},{r:40,a:-90},{s:220},{r:40,a:120},{s:150},{r:45,a:-50},{s:160},{r:50,a:100},{s:260},{r:60,a:50},{s:140},{r:50,a:40},{s:250},{r:60,a:-30},{s:200,adj:!0},{r:50,a:150},{s:180}],height:[[0,0],[.1,6],[.22,18],[.3,26],[.38,24],[.45,8],[.5,0],[.55,2],[.64,14],[.72,16],[.82,9],[.92,2]],jumps:[{seg:4,at:.6,h:3.6},{seg:14,at:.55,h:3.8},{seg:16,at:.45,h:3.2}],zones:[{seg:10,from:.4,to:.62,type:"water"}]}},Om={};function ml(r){return km[r]||(r="city"),Om[r]||(Om[r]=Am(km[r]))}var gl=class{constructor(e,t){this.gfx=e,this.loc=t,this.track=ml(t),this.root=new Xe,this.ready=!1}async build(e=()=>{},{hostName:t=""}={}){let n=this.gfx,i=performance.now(),s=async(a,o)=>(e(a),await new Promise(c=>setTimeout(c,0)),o());this.sky=await s(.05,()=>zp(n,this.loc)),this.loc==="city"?(n.scene.fog.far=n.q.dist*2.6,n.camera.far=6500,n.camera.updateProjectionMatrix()):(n.camera.far=n.q.dist*2.4,n.camera.updateProjectionMatrix()),this.hm=await s(.12,()=>new dl(this.track,this.loc)),this.terrain=await s(.25,()=>Sm(n,this.track,this.loc,this.hm)),this.root.add(this.terrain),this.road=await s(.45,()=>Pm(n,this.track,this.loc,{hostName:t})),this.root.add(this.road),this.gantry=this.road.getObjectByName("gantry"),this.venue=mm(n,this.track,this.loc,{hostName:t}),this.root.add(this.venue),this.podium=this.venue.userData.podium,this.crowd=this.venue.userData.crowd,this.marshal=new pl(n,this.track),this.root.add(this.marshal.grp),this.river=hl(this.track),this.river&&(this.water=xm(n,this.river,this.track.halfWidth(this.river.s)+this.track.runoff),this.root.add(this.water)),this.tunnel=_m(n,this.track),this.tunnel&&this.root.add(this.tunnel),this.dark=0,this._q={},n.scene.add(this.root),e(.5),this.scenery=await Fm(n,this.track,this.loc,this.hm,a=>e(.5+a*.4)),await Vp(),e(1);try{await n.renderer.compileAsync(n.scene,n.camera)}catch{}return this.ready=!0,this.buildMs=Math.round(performance.now()-i),this}setLights(e,t){this.gantry&&this.gantry.userData.setLights(e,t)}update(e,t,n){if(!this.ready)return;if(this.scenery.update(e,t),this.marshal.update(e),this.water&&(this.water.userData.time.value+=e),this.tunnel){let s=this.tunnel.userData.T,a=this.hm.field.query(t.position.x,t.position.z,this._q),o=a.i>=0&&ym(s,a,t.position.y,this.track.surfaceY(a.s,0))?1:0;this.dark+=(o-this.dark)*Math.min(1,e*3);let c=this.sky.L,l=1-.72*this.dark;this.sky.sun.intensity=c.sunI*(1-.9*this.dark),this.sky.hemi.intensity=c.hemiI*l,this.gfx.scene.environmentIntensity=(c.envI||1)*l}let i=this.crowd.userData;i.uTime.value+=e,i.uHype.value+=((this.hype||0)-i.uHype.value)*Math.min(1,e*2),n&&this.sky.follow(n)}dispose(){let e=this.gfx.scene;this.scenery&&this.scenery.dispose(),this.marshal&&this.marshal.dispose(),e.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose())}),this.sky&&this.sky.dispose()}};var AE=1/60;function Qi(r,e,t={}){if(t.boost=1,t.slow=1,t.flat=0,t.freeze=!1,t.skid=0,t.drunk=0,t.reverse=!1,t.spin=0,t.shield=!1,t.tornado=0,t.ink=!1,t.fog=0,t.rainbow=!1,t.meteor=!1,r)for(let n of r){if(e<n.t0||e>=n.t1)continue;let i=(e-n.t0)/Math.max(.01,n.t1-n.t0);switch(n.k){case"boost":t.boost=Math.max(t.boost,n.v||2);break;case"slow":t.slow=Math.min(t.slow,n.v||.5);break;case"flat":t.flat=n.side||1;break;case"freeze":t.freeze=!0;break;case"skid":t.skid=Math.max(t.skid,Math.min(1,(1-i)*1.4));break;case"drunk":t.drunk=Math.max(t.drunk,Math.min(1,i*6,(1-i)*4));break;case"reverse":t.reverse=!0;break;case"spin":t.spin=Math.max(t.spin,1-i);break;case"shield":t.shield=!0;break;case"tornado":t.tornado=Math.max(t.tornado,i);break;case"ink":t.ink=!0;break;case"fog":t.fog=Math.max(t.fog,Math.min(1,i*5,(1-i)*4));break;case"rainbow":t.rainbow=!0;break;case"meteor":t.meteor=!0;break}}return t}function Bm(r,e){let t=r.vmax*e.boost*e.slow;return e.flat&&(t*=.7),(e.freeze||e.tornado)&&(t=3),e.spin&&(t*=.6),t}var zm={};function ad(r,e,t=0){let n=r.frame(e+25,zm),i=n.w/2-2;return Math.max(-i,Math.min(i,Math.sign(n.k)*Math.min(1,Math.abs(n.k)*40)*i*.45+t*i*.5))}function Hm(r,e,t,n,i){if(n<14)return!1;let s=n*n/(2*t.brake)+14;for(let a=4;a<s;a+=6){let o=Math.abs(e.frame(r.s+a,zm).k);if(o<1e-4)continue;let c=Math.sqrt(t.latMax*1.05/o)+2;if(n>Math.sqrt(c*c+2*t.brake*.9*Math.max(0,a-6)))return!0}return!1}function Gm(r,e){let t=Math.min(e.sectors-1,Math.floor(r.s/e.L*e.sectors));return t===(r.sector+1)%e.sectors&&(r.sector=t,t===0)?(r.lap++,"lap"):null}var Hr=[{id:"join",title:"\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0433\u043E\u043D\u043A\u0430\u0445",short:"\u0423\u0447\u0430\u0441\u0442\u0438\u0435",icon:"\u{1F94A}",kind:"join",gift:{id:6007,name:"Boxing Gloves"},count:1,desc:"\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0438\u0433\u0440\u0435"},{id:"boost2",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD72",short:"\xD72",icon:"\u26A1",kind:"self",fx:"boost",mul:2,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:3},gift:{id:5879,name:"Doughnut"},count:1},{id:"slow",title:"\u0417\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C \u0442\u043E\u0433\u043E, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u0417\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C",icon:"\u{1F40C}",kind:"target",target:"ahead",fx:"slow",param:{label:"\u0441\u0435\u043A",min:1,max:20,step:1,def:4},gift:{id:6104,name:"Cap"},count:1},{id:"shield",title:"\u0429\u0438\u0442 \u043E\u0442 \u043F\u0430\u043A\u043E\u0441\u0442\u0435\u0439",short:"\u0429\u0438\u0442",icon:"\u{1F6E1}\uFE0F",kind:"self",fx:"shield",param:{label:"\u0441\u0435\u043A",min:3,max:60,step:1,def:12},gift:{id:6097,name:"Little Crown"},count:1},{id:"skid",title:"\u0411\u0430\u043D\u0430\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0436\u0443\u0440\u0430: \u0437\u0430\u043D\u043E\u0441 \u0442\u043E\u043C\u0443, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u0417\u0430\u043D\u043E\u0441",icon:"\u{1F34C}",kind:"target",target:"ahead",fx:"skid",param:{label:"\u0441\u0435\u043A",min:1,max:10,step:1,def:3},gift:{id:6427,name:"Hat and Mustache"},count:1},{id:"flat",title:"\u041F\u0440\u043E\u043A\u043E\u043B\u043E\u0442\u044C \u0448\u0438\u043D\u0443 \u043B\u0438\u0434\u0435\u0440\u0443",short:"\u041F\u0440\u043E\u043A\u043E\u043B",icon:"\u{1F4CC}",kind:"target",target:"leader",fx:"flat",param:{label:"\u0441\u0435\u043A",min:2,max:30,step:1,def:6},gift:{id:5659,name:"Paper Crane"},count:1},{id:"boost3",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD73",short:"\xD73",icon:"\u{1F525}",kind:"self",fx:"boost",mul:3,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:3},gift:{id:5660,name:"Hand Heart"},count:1},{id:"rainbow",title:"\u0420\u0430\u0434\u0443\u0436\u043D\u044B\u0439 \u0441\u043B\u0435\u0434",short:"\u0420\u0430\u0434\u0443\u0433\u0430",icon:"\u{1F308}",kind:"self",fx:"rainbow",param:{label:"\u0441\u0435\u043A",min:5,max:120,step:5,def:30},gift:{id:5585,name:"Confetti"},count:1},{id:"repair",title:"\u0420\u0435\u043C\u043E\u043D\u0442: \u0441\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u043F\u0430\u043A\u043E\u0441\u0442\u0438",short:"\u0420\u0435\u043C\u043E\u043D\u0442",icon:"\u{1F527}",kind:"self",fx:"repair",gift:{id:5566,name:"Mishka Bear"},count:1},{id:"ink",title:"\u041A\u043B\u044F\u043A\u0441\u0430 \u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433\u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0432\u0441\u0435\u043C",short:"\u041A\u043B\u044F\u043A\u0441\u0430",icon:"\u{1F419}",kind:"others",fx:"ink",param:{label:"\u0441\u0435\u043A",min:2,max:15,step:1,def:5},gift:{id:5509,name:"Sunglasses"},count:1},{id:"boost4",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD74",short:"\xD74",icon:"\u{1F680}",kind:"self",fx:"boost",mul:4,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:4},gift:{id:5586,name:"Hearts"},count:1},{id:"fog",title:"\u0413\u0443\u0441\u0442\u043E\u0439 \u0442\u0443\u043C\u0430\u043D \u0432\u0441\u0435\u043C",short:"\u0422\u0443\u043C\u0430\u043D",icon:"\u{1F32B}\uFE0F",kind:"others",fx:"fog",param:{label:"\u0441\u0435\u043A",min:3,max:30,step:1,def:8},gift:{id:6671,name:"Love you"},count:1},{id:"reverse",title:"\u041F\u0435\u0440\u0435\u043F\u0443\u0442\u0430\u0442\u044C \u0440\u0443\u043B\u044C \u0432\u0441\u0435\u043C",short:"\u0420\u0435\u0432\u0435\u0440\u0441",icon:"\u{1F504}",kind:"others",fx:"reverse",param:{label:"\u0441\u0435\u043A",min:2,max:15,step:1,def:5},gift:{id:6267,name:"Corgi"},count:1},{id:"rocket",title:"\u0420\u0430\u043A\u0435\u0442\u0430 \u0432 \u043B\u0438\u0434\u0435\u0440\u0430",short:"\u0420\u0430\u043A\u0435\u0442\u0430",icon:"\u{1F4A5}",kind:"target",target:"leader",fx:"spin",param:{label:"\u0441\u0435\u043A",min:1,max:4,step:.5,def:1.6},gift:{id:7168,name:"Money Gun"},count:1},{id:"freeze",title:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u0438\u0442\u044C \u0432\u0441\u0435\u0445",short:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0430",icon:"\u{1F9CA}",kind:"others",fx:"freeze",param:{label:"\u0441\u0435\u043A",min:1,max:6,step:.5,def:2},gift:{id:5897,name:"Swan"},count:1},{id:"drunk",title:"\u041D\u0430\u043F\u043E\u0438\u0442\u044C \u0432\u0441\u0435\u0445 (\u043A\u0440\u043E\u043C\u0435 \u0442\u0435\u0431\u044F)",short:"\u041D\u0430\u043F\u043E\u0438\u0442\u044C",icon:"\u{1F37A}",kind:"others",fx:"drunk",param:{label:"\u0441\u0435\u043A",min:3,max:30,step:1,def:8},gift:{id:5978,name:"Train"},count:1},{id:"teleport",title:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442 \u0432\u043F\u0435\u0440\u0451\u0434",short:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442",icon:"\u2728",kind:"self",fx:"teleport",param:{label:"\u043C",min:50,max:1500,step:50,def:200},gift:{id:11046,name:"Galaxy"},count:1},{id:"fireworks",title:"\u0421\u0430\u043B\u044E\u0442 \u043D\u0430\u0434 \u0442\u0440\u0430\u0441\u0441\u043E\u0439",short:"\u0421\u0430\u043B\u044E\u0442",icon:"\u{1F386}",kind:"world",fx:"fireworks",gift:{id:6090,name:"Fireworks"},count:1},{id:"boost5",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD75",short:"\xD75",icon:"\u2604\uFE0F",kind:"self",fx:"boost",mul:5,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:5},gift:{id:6820,name:"Whale diving"},count:1},{id:"swap",title:"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0441 \u0442\u0435\u043C, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u041E\u0431\u043C\u0435\u043D",icon:"\u{1F500}",kind:"target",target:"ahead",fx:"swap",gift:{id:5765,name:"Motorcycle"},count:1},{id:"meteor",title:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C: \u0432\u0441\u0435\u0445 \u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C",short:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u044B",icon:"\u2604\uFE0F",kind:"others",fx:"meteor",param:{label:"\u0441\u0435\u043A",min:2,max:20,step:1,def:6},gift:{id:6563,name:"Meteor Shower"},count:1},{id:"tornado",title:"\u0422\u043E\u0440\u043D\u0430\u0434\u043E \u0443\u043D\u043E\u0441\u0438\u0442 \u043B\u0438\u0434\u0435\u0440\u0430 \u043D\u0430\u0437\u0430\u0434",short:"\u0422\u043E\u0440\u043D\u0430\u0434\u043E",icon:"\u{1F32A}\uFE0F",kind:"target",target:"leader",fx:"tornado",param:{label:"\u043C",min:50,max:800,step:50,def:250},gift:{id:5767,name:"Private Jet"},count:1},{id:"gold",title:"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0433\u043E\u043D\u043A\u0438",short:"\u0417\u043E\u043B\u043E\u0442\u043E",icon:"\u{1F451}",kind:"self",fx:"gold",gift:{id:13061,name:"Sports Car"},count:1},{id:"leader",title:"\u0421\u0440\u0430\u0437\u0443 \u0432 \u043B\u0438\u0434\u0435\u0440\u044B",short:"\u0412 \u043B\u0438\u0434\u0435\u0440\u044B",icon:"\u{1F984}",kind:"self",fx:"toleader",gift:{id:6149,name:"Interstellar"},count:1}],ks=Object.fromEntries(Hr.map(r=>[r.id,r]));function od(r,e){let t=r.param;if(!t)return r.title;let n=e??t.def;return t.label==="\u043C"?`${r.title} \u043D\u0430 ${n} \u043C`:`${r.title} \u043D\u0430 ${n} \u0441\u0435\u043A`}var Q_=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new _i(r);return n.colorSpace=vt,n})(),Os=class{constructor(e,t,{additive:n=!1,size:i=1,map:s=Q_}={}){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.max0=new Float32Array(t),this.col=new Float32Array(t*4),this.sz=new Float32Array(t),this.grow=new Float32Array(t);let a=new it;this.aPos=new Ke(this.pos,3).setUsage(Ln),this.aCol=new Ke(this.col,4).setUsage(Ln),this.aSz=new Ke(this.sz,1).setUsage(Ln),a.setAttribute("position",this.aPos),a.setAttribute("color",this.aCol),a.setAttribute("size",this.aSz),this.mat=new Vt({uniforms:{map:{value:s},scale:{value:600}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(1.0, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec4 vC; void main() { vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC.rgb, vC.a * t.a); }",transparent:!0,depthWrite:!1,blending:n?Sr:qi}),this.pts=new bs(a,this.mat),this.pts.frustumCulled=!1,e.add(this.pts),this.g=a}emit(e,t,n,i,s,a,o,c,l,h,u,d,f){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos.set([e,t,n],m*3),this.vel.set([i,s,a],m*3),this.life[m]=o,this.max0[m]=o,this.sz[m]=c,this.grow[m]=l,this.col.set([h,u,d,f],m*4)}update(e,t=0,n=1.5){let i=this.n;for(let s=0;s<i;s++){if(this.life[s]-=e,this.life[s]<=0){i--,s!==i&&(this.pos.copyWithin(s*3,i*3,i*3+3),this.vel.copyWithin(s*3,i*3,i*3+3),this.col.copyWithin(s*4,i*4,i*4+4),this.life[s]=this.life[i],this.max0[s]=this.max0[i],this.sz[s]=this.sz[i],this.grow[s]=this.grow[i],s--);continue}let a=Math.exp(-e*n);this.vel[s*3]*=a,this.vel[s*3+1]=this.vel[s*3+1]*a-t*e,this.vel[s*3+2]*=a,this.pos[s*3]+=this.vel[s*3]*e,this.pos[s*3+1]+=this.vel[s*3+1]*e,this.pos[s*3+2]+=this.vel[s*3+2]*e,this.sz[s]+=this.grow[s]*e}this.n=i,this.g.setDrawRange(0,i),this.aPos.needsUpdate=!0,this.aSz.needsUpdate=!0,this.aCol.needsUpdate=!0;for(let s=0;s<i;s++){let a=this.life[s]/this.max0[s];this.col[s*4+3]=Math.min(this.col[s*4+3],a*.9)}}dispose(e){e.remove(this.pts),this.g.dispose(),this.mat.dispose()}},cd=class{constructor(e,t){this.max=t,this.n=0,this.scene=e,this.p=new Float32Array(t*3),this.v=new Float32Array(t*3),this.r=new Float32Array(t*3),this.w=new Float32Array(t*3),this.life=new Float32Array(t),this.gy=new Float32Array(t),this.sz=new Float32Array(t);let n=new Lt(.34,.05,.5);this.mesh=new en(n,new ze({roughness:.45,metalness:.35}),t),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.instanceColor=new It(new Float32Array(t*3),3),e.add(this.mesh),this.m=new Re,this.q=new wt,this.e=new on,this.s=new D,this.t=new D,this.c=new ye}burst(e,t,n,i,s,a,o,c=1){for(let l=0;l<a;l++){let h=this.n<this.max?this.n++:Math.floor(Math.random()*this.max),u=Math.random()*Math.PI*2,d=(2+Math.random()*5)*c;this.p.set([e+(Math.random()-.5),t+.5+Math.random()*.4,n+(Math.random()-.5)],h*3),this.v.set([i*.6+Math.cos(u)*d,2.5+Math.random()*4*c,s*.6+Math.sin(u)*d],h*3),this.r.set([Math.random()*6,Math.random()*6,Math.random()*6],h*3),this.w.set([(Math.random()-.5)*20,(Math.random()-.5)*20,(Math.random()-.5)*20],h*3),this.life[h]=5+Math.random()*3,this.gy[h]=t-.02,this.sz[h]=.5+Math.random()*.9,this.c.set(Math.random()<.6?o:1381914),this.mesh.instanceColor.setXYZ(h,this.c.r,this.c.g,this.c.b)}this.mesh.instanceColor.needsUpdate=!0}update(e){let t=this.n,n=this.mesh.instanceColor;for(let i=0;i<t;i++){if((this.life[i]-=e)<=0){if(t--,i!==t){for(let o of[this.p,this.v,this.r,this.w])o.copyWithin(i*3,t*3,t*3+3);this.life[i]=this.life[t],this.gy[i]=this.gy[t],this.sz[i]=this.sz[t],n.setXYZ(i,n.getX(t),n.getY(t),n.getZ(t)),i--}continue}let s=i*3;this.v[s+1]-=9.8*e;for(let o=0;o<3;o++)this.p[s+o]+=this.v[s+o]*e,this.r[s+o]+=this.w[s+o]*e;if(this.p[s+1]<this.gy[i]){this.p[s+1]=this.gy[i],this.v[s+1]*=-.3,this.v[s]*=.7,this.v[s+2]*=.7;for(let o=0;o<3;o++)this.w[s+o]*=.6}let a=Math.min(1,this.life[i])*this.sz[i];this.q.setFromEuler(this.e.set(this.r[s],this.r[s+1],this.r[s+2])),this.m.compose(this.t.set(this.p[s],this.p[s+1],this.p[s+2]),this.q,this.s.set(a,a,a)),this.mesh.setMatrixAt(i,this.m)}this.n=t,this.mesh.count=t,this.mesh.instanceMatrix.needsUpdate=!0,n.needsUpdate=!0}dispose(){this.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mesh.material.dispose()}},Vm={city:{dust:[.72,.72,.74],alpha:.5,always:!1},snow:{dust:[.95,.97,1],alpha:.75,always:!0},offroad:{dust:[.62,.52,.4],alpha:.55,always:!0}},bl=class{constructor(e){this.app=e,this.overlay=document.getElementById("fx"),this.screen={},this.built=!1}build(e,t){this.built&&this.dispose(),this.scene=e,this.smoke=new Os(e,Math.round(1600*t.particles)),this.glow=new Os(e,Math.round(900*t.particles),{additive:!0}),this.debris=new cd(e,Math.round(160*Math.max(.5,t.particles))),this.objs=new Map,this.snowfall=null,this.built=!0}update(e,t,n){if(!this.built||!t||!t.loaded)return;let i=Vm[t.loc]||Vm.city,s=this.app.gfx.q,a=this.app.gfx.camera.position;for(let o of t.entries.values()){let c=o.vis;if(!c)continue;let l=Math.hypot(c.x-a.x,c.z-a.z);if(l>160)continue;let h=Qi(o.fx,n,o._fx||(o._fx={})),u=[Math.sin(c.yaw),Math.cos(c.yaw)],d=[-u[1],u[0]],f=-2.1,m=c.flags&Oa,b=c.flags&Ls,g=t.world&&t.world.river,p=!1;if(g){let x=(c.x-g.cx)*g.tx+(c.z-g.cz)*g.tz;if(p=!b&&x>g.wet[0]-1&&x<g.wet[1]+1&&c.speed>1.5,p&&!o._wet&&l<70&&this.app.audio&&this.app.audio.sfx("splash",Math.min(.7,c.speed/30)*(1-l/70),.9+Math.random()*.2),o._wet=p,p){let T=Math.min(1,c.speed/25)*s.particles*(l<60?1:.35);for(let v=0;v<Math.floor(4*T)+(Math.random()<4*T%1?1:0);v++){let E=v%2?1:-1,R=v<2?-1.4:1.3,P=1.5+Math.random()*2.5+c.speed*.12,L=c.x+u[0]*R+d[0]*E*1,B=c.z+u[1]*R+d[1]*E*1;this.smoke.emit(L,g.level+.1,B,d[0]*E*P-u[0]*c.speed*.15,1.5+Math.random()*2+c.speed*.1,d[1]*E*P-u[1]*c.speed*.15,.8+Math.random()*.5,.45,2.2,.86,.93,1,.75)}}}let S=(b||p?0:(i.always?Math.min(1,c.speed/30):0)+(m?1:0))*(l<60?1:.4)*s.particles;if(S>.05&&Math.random()<S*.9)for(let x of[-1,1]){let T=c.x+u[0]*f+d[0]*x*.8,v=c.z+u[1]*f+d[1]*x*.8,E=m&&!i.always?[.85,.85,.87]:i.dust;this.smoke.emit(T,c.y+.25,v,-u[0]*c.speed*.15+(Math.random()-.5)*2,.8+Math.random(),-u[1]*c.speed*.15+(Math.random()-.5)*2,1.2+Math.random()*.8,1.2,3.2,E[0],E[1],E[2],i.alpha)}let _=o.slot===t.you&&t.veh,M=_?t.veh.hp:o.dnf?0:o.hp??100;if(_&&t.veh.scrape&&!b){let x=Math.sign(t.veh.d)||1;for(let T=0;T<3;T++)this.glow.emit(c.x+d[0]*x*1+u[0]*(Math.random()*3-1.5),c.y+.35,c.z+d[1]*x*1+u[1]*(Math.random()*3-1.5),-u[0]*c.speed*.3+(Math.random()-.5)*3,1+Math.random()*3,-u[1]*c.speed*.3+(Math.random()-.5)*3,.25+Math.random()*.2,.18,0,1,.8,.35,1)}if(M<55&&l<120){let x=(55-M)/55,T=c.x+u[0]*1.5,v=c.z+u[1]*1.5,E=.55-.45*x;if(Math.random()<(.25+.7*x)*s.particles&&this.smoke.emit(T,c.y+.95,v,-u[0]*c.speed*.35+(Math.random()-.5),1.2+Math.random()*1.5,-u[1]*c.speed*.35+(Math.random()-.5),1.4+x*1.6,.6,2.4+x*2,E,E,E,.45+.35*x),M<20){let R=M<=0?4:2;for(let P=0;P<R;P++)this.glow.emit(T+(Math.random()-.5)*1.1,c.y+.8+Math.random()*.3,v+(Math.random()-.5)*1.1,-u[0]*c.speed*.3+(Math.random()-.5),1.8+Math.random()*2.2,-u[1]*c.speed*.3+(Math.random()-.5),.35+Math.random()*.3,.7+Math.random()*.5,-.6,1,.45+Math.random()*.35,.08,.95)}}if(h.boost>1)for(let x of[-1,1])for(let T=0;T<2;T++){let v=c.x+u[0]*(f-.3)+d[0]*x*.35,E=c.z+u[1]*(f-.3)+d[1]*x*.35,R=Math.random();this.glow.emit(v,c.y+.45,E,-u[0]*(6+h.boost*3),.2,-u[1]*(6+h.boost*3),.18+Math.random()*.12,.7+h.boost*.12,-1.5,1,.45+R*.4,.12+(h.boost>3?.6:0),.9)}if(h.flat&&Math.random()<.6&&this.glow.emit(c.x+d[0]*h.flat*.9+u[0]*1.3,c.y+.1,c.z+d[1]*h.flat*.9+u[1]*1.3,(Math.random()-.5)*4-u[0]*5,2+Math.random()*3,(Math.random()-.5)*4-u[1]*5,.35,.25,0,1,.75,.3,1),h.rainbow||o.fx.some(x=>x.k==="rainbow"&&n<x.t1)){let x=n*.8%1,T=new ye().setHSL(x,1,.55);this.glow.emit(c.x-u[0]*2.3,c.y+.5,c.z-u[1]*2.3,0,.1,0,1.4,1.4,.3,T.r,T.g,T.b,.8)}this.effectObjects(o,h,c,n,e)}if(t.loc==="snow"&&s.particles>.3)for(let o=0;o<6*s.particles;o++)this.smoke.emit(a.x+(Math.random()-.5)*60,a.y+14+Math.random()*6,a.z+(Math.random()-.5)*60,(Math.random()-.5)*1.5,-3-Math.random()*2,(Math.random()-.5)*1.5,6,.18,0,1,1,1,.85);this.smoke.update(e,0,1.2),this.debris.update(e),this.glow.update(e,0,3)}effectObjects(e,t,n,i,s){let a=e.slot,o=this.objs.get(a),c={shield:t.shield,ice:t.freeze,tornado:t.tornado};o||(o={},this.objs.set(a,o));for(let[l,h]of Object.entries(c))h&&!o[l]&&(o[l]=this.makeObj(l),this.scene.add(o[l])),!h&&o[l]&&(this.scene.remove(o[l]),o[l].geometry.dispose(),o[l].material.dispose(),o[l]=null),o[l]&&(o[l].position.set(n.x,n.y+(l==="tornado"?0:.9),n.z),o[l].rotation.y=l==="tornado"?i*6:n.yaw,l==="shield"&&(o[l].material.uniforms.t.value=i))}makeObj(e){if(e==="shield"){let n=new Vt({uniforms:{t:{value:0}},transparent:!0,depthWrite:!1,blending:Sr,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float t; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)), 2.5); float w = 0.5+0.5*sin(t*6.0+vN.y*8.0); gl_FragColor = vec4(vec3(0.2,0.8,1.0)*(f*1.6+0.08*w), f*0.9+0.05); }"});return new Te(new wi(3.1,24,16),n)}if(e==="ice")return new Te(new Lt(2.6,1.9,5.2),new Jt({color:12577023,roughness:.08,metalness:0,transmission:0,transparent:!0,opacity:.55,clearcoat:1}));let t=new Mi(6,1.2,22,16,6,!0);return t.translate(0,11,0),new Te(t,new Qt({color:10134704,transparent:!0,opacity:.35,side:St,depthWrite:!1}))}carEffect(e,t,n){let i=n.fx;if(!i)return;let s=ks[n.action],a=e.you===t.slot,o=n.byName||"";if(i.k==="blocked"){a&&yt("\u{1F6E1}\uFE0F \u0429\u0438\u0442 \u043E\u0442\u0431\u0438\u043B \u043F\u0430\u043A\u043E\u0441\u0442\u044C!",{kind:"good"});return}if(a&&s){let l=["boost","shield","repair","gold","rainbow","toleader","teleport","swap"].includes(i.k);yt(`${s.icon} ${s.title}${o?" \u2014 "+o:""}`,{kind:l?"good":"bad",ms:3e3}),this.app.settings.vibrate&&navigator.vibrate&&navigator.vibrate(l?[30]:[60,40,60]),!l&&e.chase&&(e.chase.shake=.8)}let c=t.vis;if(i.k==="spin"||i.k==="swap"||i.k==="toleader"||i.k==="teleport")for(let l=0;l<60;l++){let h=Math.random()*Math.PI*2,u=4+Math.random()*10;this.glow.emit(c.x,c.y+1,c.z,Math.cos(h)*u,Math.random()*8,Math.sin(h)*u,.8,1.2,0,i.k==="spin"?1:.4,i.k==="spin"?.5:.8,i.k==="spin"?.1:1,1)}}crash(e,t,n){let i=t.vis;if(!this.built||!i)return;let s=[Math.sin(i.yaw),Math.cos(i.yaw)],a=t.gold?13935146:new ye(Ot(t.paint).color).getHex();this.debris.burst(i.x+s[0]*1.2,i.y,i.z+s[1]*1.2,s[0]*i.speed,s[1]*i.speed,Math.round(3+n*.5),a,.7+n/30);for(let l=0;l<20+n*2;l++){let h=Math.random()*6.28,u=3+Math.random()*6;this.glow.emit(i.x+s[0]*1.5,i.y+.5,i.z+s[1]*1.5,Math.cos(h)*u,1+Math.random()*4,Math.sin(h)*u,.3+Math.random()*.3,.2,0,1,.75,.3,1)}let o=this.app.gfx.camera.position,c=Math.hypot(i.x-o.x,i.z-o.z);c<80&&this.app.audio&&this.app.audio.sfx(n>12?"crash":"hit",Math.min(1,.3+n/25)*(1-c/80),.9+Math.random()*.2),t.slot===e.you&&e.chase&&(e.chase.shake=Math.max(e.chase.shake||0,Math.min(1.2,n/20)))}explode(e,t){let n=t.vis;if(!this.built||!n)return;let i=t.gold?13935146:new ye(Ot(t.paint).color).getHex();this.debris.burst(n.x,n.y,n.z,0,0,34,i,1.6);for(let o=0;o<180;o++){let c=Math.random()*2-1,l=Math.random()*6.28,h=4+Math.random()*9,u=Math.sqrt(1-c*c);this.glow.emit(n.x,n.y+1,n.z,u*Math.cos(l)*h,Math.abs(c)*h+2,u*Math.sin(l)*h,.6+Math.random()*.6,1.6+Math.random(),1.5,1,.35+Math.random()*.45,.05,1)}for(let o=0;o<60;o++)this.smoke.emit(n.x+(Math.random()-.5)*3,n.y+1+Math.random()*2,n.z+(Math.random()-.5)*3,(Math.random()-.5)*3,2+Math.random()*3,(Math.random()-.5)*3,3+Math.random()*2,2,3,.08,.08,.09,.85);let s=this.app.gfx.camera.position,a=Math.hypot(n.x-s.x,n.z-s.z);a<200&&this.app.audio&&this.app.audio.sfx("explosion",Math.max(.2,1-a/200)),a<60&&this.flash()}fireworks(e){if(!this.built)return;let t=this.app.gfx.camera,n=new D;t.getWorldDirection(n);for(let i=0;i<6;i++){let s=t.position.x+n.x*80+(Math.random()-.5)*80,a=t.position.z+n.z*80+(Math.random()-.5)*80,o=t.position.y+35+Math.random()*25,c=new ye().setHSL(Math.random(),1,.6);setTimeout(()=>{for(let l=0;l<90;l++){let h=Math.random()*2-1,u=Math.random()*6.28,d=14+Math.random()*6,f=Math.sqrt(1-h*h);this.glow.emit(s,o,a,f*Math.cos(u)*d,h*d,f*Math.sin(u)*d,1.6+Math.random(),1.1,-.3,c.r,c.g,c.b,1)}this.app.audio&&this.app.audio.sfx("firework")},i*350)}}screenFx(e,t){let n={ink:e.ink,frost:e.freeze,boostlines:e.boost>1,vignette:e.drunk>0||e.spin>0};for(let[s,a]of Object.entries(n)){if(a&&!this.screen[s]){let o=document.createElement("div");o.className=s,this.overlay.appendChild(o),this.screen[s]=o}if(!a&&this.screen[s]){let o=this.screen[s];this.screen[s]=null,o.style.transition="opacity .8s",o.style.opacity="0",setTimeout(()=>o.remove(),800)}}let i=this.app.gfx.canvas;e.drunk>0?(this.wob=(this.wob||0)+t,i.style.transform=`rotate(${Math.sin(this.wob*1.7)*3*e.drunk}deg) scale(${1+.04*e.drunk})`,i.style.filter=`blur(${(.6+Math.sin(this.wob*3.1)*.5)*e.drunk}px)`):i.style.transform&&(i.style.transform="",i.style.filter="")}flash(){let e=document.createElement("div");e.style.cssText="position:absolute;inset:0;background:#fff;opacity:.5;transition:opacity .5s",this.overlay.appendChild(e),requestAnimationFrame(()=>e.style.opacity="0"),setTimeout(()=>e.remove(),600)}clearScreen(){for(let t of Object.keys(this.screen))this.screen[t]&&(this.screen[t].remove(),this.screen[t]=null);let e=this.app.gfx.canvas;e.style.transform="",e.style.filter=""}dispose(){if(this.built){this.smoke.dispose(this.scene),this.glow.dispose(this.scene),this.debris.dispose();for(let e of this.objs.values())for(let t of Object.values(e))t&&(this.scene.remove(t),t.geometry.dispose(),t.material.dispose());this.objs.clear(),this.built=!1}}};var eM={engine_low:"engine_low.wav",engine_high:"engine_high.wav",skid:"skid.wav",hit:"hit.mp3",crash:"crash.mp3",explosion:"explosion.mp3",splash:"splash.mp3",start:"start.mp3",horn:"horn.mp3",thud:"thud.mp3",pop:"pop.mp3"},Wm={city:{cyl:6,low:900,high:7470,pitch:1,growl:.35,turbo:.12,lp:5200,name:"V6 twin-turbo"},snow:{cyl:4,low:900,high:7470,pitch:1.05,growl:.4,turbo:.18,lp:4200,antilag:!0,name:"flat-4 turbo"},offroad:{cyl:8,low:900,high:7470,pitch:.8,growl:.6,turbo:0,lp:2800,name:"V8"}},xl=class{constructor(){this.ctx=null,this.buf={},this.ready=!1,this.engine=null,this.others=[]}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:"interactive"});this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3.5,n.attack.value=.004,n.release.value=.2,this.master.connect(n),n.connect(t.destination),this.engBus=t.createGain(),this.fxBus=t.createGain(),this.musicBus=t.createGain(),this.engBus.connect(this.master),this.fxBus.connect(this.master),this.musicBus.connect(this.master),this.applyVolumes(),pu.on("change",()=>this.applyVolumes());let i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=i.getChannelData(0),a=0;for(let o=0;o<s.length;o++){let c=Math.random()*2-1;a=.97*a+.03*c,s[o]=a*3.2}this.noise=i,this.load(),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(Je.vol,e,.05),this.engBus.gain.setTargetAtTime(Je.volEngine,e,.05),this.fxBus.gain.setTargetAtTime(Je.volFx,e,.05),this.musicBus.gain.setTargetAtTime(Je.volMusic,e,.05)}async load(){await Promise.all(Object.entries(eM).map(async([e,t])=>{try{let n=await fetch("assets/sfx/"+t).then(i=>i.arrayBuffer());this.buf[e]=await this.ctx.decodeAudioData(n)}catch{}})),this.ready=!0}sfx(e,t=1,n=1){if(!this.ctx||!this.buf[e]){e==="firework"&&this.ctx&&this.firework();return}let i=this.ctx.createBufferSource();i.buffer=this.buf[e],i.playbackRate.value=n;let s=this.ctx.createGain();s.gain.value=t,i.connect(s),s.connect(this.fxBus),i.start()}beep(e=880,t=.18,n=.35){if(!this.ctx)return;let i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="square",s.frequency.value=e;let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=2400,a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(n,i+.01),a.gain.setValueAtTime(n,i+t-.03),a.gain.linearRampToValueAtTime(0,i+t),s.connect(o),o.connect(a),a.connect(this.fxBus),s.start(i),s.stop(i+t+.02)}whoosh(e=.5){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noise;let i=this.ctx.createBiquadFilter();i.type="bandpass",i.Q.value=1.2,i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(3500,t+.5);let s=this.ctx.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(e,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.9),n.connect(i),i.connect(s),s.connect(this.fxBus),n.start(t),n.stop(t+1)}firework(){let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noise;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let i=this.ctx.createGain();i.gain.setValueAtTime(.9,e),i.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(i),i.connect(this.fxBus),t.start(e),t.stop(e+1.3)}cheer(e=.4,t=5){if(!this.ctx)return;let n=this.ctx,i=n.sampleRate,s=Math.floor(i*t),a=n.createBuffer(2,s,i);for(let m=0;m<2;m++){let b=a.getChannelData(m);for(let g=0,p=t*38;g<p;g++){let y=Math.floor(Math.random()*s),S=Math.floor(i*(.005+Math.random()*.012)),_=.2+Math.random()*.45,M=S/4;for(let x=0;x<S&&y+x<s;x++)b[y+x]+=(Math.random()*2-1)*_*Math.exp(-x/M)}}let o=n.currentTime,c=n.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(e,o+.35),c.gain.setValueAtTime(e,o+t*.55),c.gain.linearRampToValueAtTime(0,o+t),c.connect(this.fxBus);let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="bandpass",h.frequency.value=1700,h.Q.value=.45,l.connect(h),h.connect(c),l.start(o),l.stop(o+t);let u=n.createBufferSource();u.buffer=this.noise,u.loop=!0;let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=520,d.Q.value=.7;let f=n.createGain();f.gain.setValueAtTime(.12,o),f.gain.linearRampToValueAtTime(.5,o+t*.3),f.gain.linearRampToValueAtTime(.25,o+t),u.connect(d),d.connect(f),f.connect(c),u.start(o),u.stop(o+t)}startEngine(e){if(!this.ctx||!this.ready)return!1;this.stopEngine();let t=this.ctx,n=Wm[e]||Wm.city,i=p=>{let y=t.createBufferSource();y.buffer=p,y.loop=!0;let S=t.createGain();return S.gain.value=0,y.connect(S),y.start(),{s:y,g:S}},s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=n.lp,s.Q.value=.7;let a=i(this.buf.engine_low),o=i(this.buf.engine_high);a.g.connect(s),o.g.connect(s);let c=t.createOscillator();c.type="sawtooth";let l=t.createOscillator();l.type="square";let h=t.createBiquadFilter();h.type="lowpass",h.Q.value=4;let u=t.createGain();u.gain.value=0,c.connect(h),l.connect(h),h.connect(u),u.connect(s),c.start(),l.start();let d=t.createOscillator();d.type="sine";let f=t.createGain();f.gain.value=0,d.connect(f),f.connect(s),d.start();let m=this.buf.skid?i(this.buf.skid):null;m&&m.g.connect(this.engBus);let b=i(this.noise),g=t.createBiquadFilter();return g.type="bandpass",g.frequency.value=700,g.Q.value=.6,b.g.disconnect(),b.s.disconnect(),b.s.connect(g),g.connect(b.g),b.g.connect(this.engBus),s.connect(this.engBus),this.engine={P:n,low:a,high:o,osc:c,osc2:l,gf:h,gg:u,tw:d,tg:f,skid:m,wind:b,lp:s,lastThr:0,boost:0},this.sfx("start",.6),!0}updateEngine(e,t,n,i,s=1,a=!1){let o=this.engine;if(!o)return;let c=this.ctx.currentTime,l=o.P,h=.05,u=Math.max(700,e)*l.pitch,d=Math.max(0,Math.min(1,(u-2200)/2600));o.low.s.playbackRate.setTargetAtTime(Math.max(.7,Math.min(2.6,u/l.low)),c,h),o.high.s.playbackRate.setTargetAtTime(Math.max(.32,Math.min(1.25,u/l.high)),c,h);let f=.55+t*.45;o.low.g.gain.setTargetAtTime((1-d)*.55*f,c,h),o.high.g.gain.setTargetAtTime(d*.62*f,c,h);let m=u/60*l.cyl/2;if(o.osc.frequency.setTargetAtTime(m,c,h),o.osc2.frequency.setTargetAtTime(m*.5,c,h),o.gf.frequency.setTargetAtTime(Math.min(4e3,m*3.2),c,h),o.gg.gain.setTargetAtTime(l.growl*.16*(.35+t*.65),c,h),o.lp.frequency.setTargetAtTime(l.lp*(.6+t*.4)*(s>1?1.4:1),c,.1),l.turbo&&(o.tw.frequency.setTargetAtTime(1800+u*.45,c,h),o.tg.gain.setTargetAtTime(t*l.turbo*.08*Math.min(1,u/4e3),c,.15)),o.lastThr>.7&&t<.2&&u>3800&&(l.turbo&&this.blowoff(l.turbo),l.antilag))for(let b=0;b<3;b++)setTimeout(()=>this.sfx("pop",.35+Math.random()*.3,.8+Math.random()*.5),60+b*(90+Math.random()*80));o.lastThr=t,o.skid&&(o.skid.g.gain.setTargetAtTime(Math.min(.5,Math.max(0,i-2.5)*.08)*(a?.3:1),c,.06),o.skid.s.playbackRate.setTargetAtTime(.9+Math.min(.25,n/200),c,.1)),o.wind.g.gain.setTargetAtTime(Math.min(.5,(n/90)**2*.5)+(s>1?.25:0),c,.2)}blowoff(e){let t=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noise;let i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=2500;let s=this.ctx.createGain();s.gain.setValueAtTime(e*1.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(i),i.connect(s),s.connect(this.engBus),n.start(t),n.stop(t+.5)}stopEngine(){let e=this.engine;if(!e)return;this.engine=null;let t=this.ctx.currentTime;for(let n of[e.low,e.high,e.skid,e.wind])n&&(n.g.gain.setTargetAtTime(0,t,.1),setTimeout(()=>{try{n.s.stop()}catch{}},400));e.gg.gain.setTargetAtTime(0,t,.1),e.tg.gain.setTargetAtTime(0,t,.1),setTimeout(()=>{try{e.osc.stop(),e.osc2.stop(),e.tw.stop()}catch{}},400)}updateOthers(e,t){if(!this.ctx||!this.ready||!this.buf.engine_high)return;let n=this.ctx,i=n.listener,s=n.currentTime;i.positionX?(i.positionX.setTargetAtTime(t.position.x,s,.05),i.positionY.setTargetAtTime(t.position.y,s,.05),i.positionZ.setTargetAtTime(t.position.z,s,.05)):i.setPosition(t.position.x,t.position.y,t.position.z);let a=t.matrixWorld.elements;for(i.forwardX?(i.forwardX.value=-a[8],i.forwardY.value=-a[9],i.forwardZ.value=-a[10],i.upX.value=a[4],i.upY.value=a[5],i.upZ.value=a[6]):i.setOrientation(-a[8],-a[9],-a[10],a[4],a[5],a[6]);this.others.length<3;){let o=n.createBufferSource();o.buffer=this.buf.engine_high,o.loop=!0;let c=n.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=8,c.maxDistance=400,c.rolloffFactor=1.2;let l=n.createGain();l.gain.value=0,o.connect(l),l.connect(c),c.connect(this.engBus),o.start(0,Math.random()*3),this.others.push({s:o,p:c,g:l})}this.others.forEach((o,c)=>{let l=e[c];if(!l){o.g.gain.setTargetAtTime(0,s,.2);return}o.p.positionX?(o.p.positionX.setTargetAtTime(l.x,s,.05),o.p.positionY.setTargetAtTime(l.y+.6,s,.05),o.p.positionZ.setTargetAtTime(l.z,s,.05)):o.p.setPosition(l.x,l.y,l.z),o.s.playbackRate.setTargetAtTime(Math.max(.35,Math.min(1.2,(1800+l.speed*70)/7470)),s,.1),o.g.gain.setTargetAtTime(.35,s,.2)})}silenceOthers(){if(this.ctx)for(let e of this.others)e.g.gain.setTargetAtTime(0,this.ctx.currentTime,.2)}};var vl=class{constructor(){this.left=!1,this.right=!1,this.brake=!1,this.gas=!1,this.gasV=0,this.joy=0,this.tilt=0,this.tiltZero=null,this.keys=new Set,this.value=0,this.el=null,addEventListener("keydown",e=>{e.target.closest&&e.target.closest("input,textarea")||this.keys.add(e.code)}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>{this.keys.clear(),this.left=this.right=this.brake=this.gas=!1})}mount(e){this.unmount();let t=Je.controls,n=Sn('<div class="controls"></div>');if(t==="joystick"){let i=Sn('<div id="joy"><div class="joyb hidden"></div><div class="joyk hidden"></div></div>'),s=i.children[0],a=i.children[1],o=null,c=0,l=0;i.addEventListener("pointerdown",u=>{o=u.pointerId,c=u.clientX,l=u.clientY,i.setPointerCapture(o),s.classList.remove("hidden"),a.classList.remove("hidden"),s.style.left=a.style.left=c+"px",s.style.top=a.style.top=l+"px"}),i.addEventListener("pointermove",u=>{if(u.pointerId!==o)return;let d=Math.max(-60,Math.min(60,u.clientX-c));this.joy=d/60,a.style.left=c+d+"px"});let h=u=>{u.pointerId===o&&(o=null,this.joy=0,s.classList.add("hidden"),a.classList.add("hidden"))};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),n.appendChild(i)}else t==="tilt"?this.enableTilt():(n.appendChild(this.button("left","\u25C0",i=>this.left=i)),n.appendChild(this.button("left2","\u25B6",i=>this.right=i)));n.appendChild(this.button("brake","<b>\u0422\u041E\u0420\u041C\u041E\u0417</b><small>\u0434\u0435\u0440\u0436\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435 \u2014 \u043D\u0430\u0437\u0430\u0434</small>",i=>this.brake=i)),n.appendChild(this.button("gas","<b>\u0413\u0410\u0417</b>",i=>this.gas=i)),e.appendChild(n),this.el=n}button(e,t,n){let i=Sn(`<div class="ctl ${e}">${t}</div>`),s=o=>{o.preventDefault(),i.setPointerCapture&&i.setPointerCapture(o.pointerId),n(!0),i.classList.add("on"),Je.vibrate&&navigator.vibrate&&navigator.vibrate(8)},a=o=>{o.preventDefault(),n(!1),i.classList.remove("on")};return i.addEventListener("pointerdown",s),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a),i.addEventListener("lostpointercapture",a),i}async enableTilt(){try{typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()}catch{}this.tiltOn||(this.tiltOn=!0,addEventListener("deviceorientation",e=>{let n=Math.abs(window.orientation||screen.orientation&&screen.orientation.angle||0)===90?(e.beta||0)*Math.sign(screen.orientation&&screen.orientation.angle||window.orientation||1):e.gamma||0;this.tiltZero==null&&(this.tiltZero=n),this.tilt=Math.max(-1,Math.min(1,(n-this.tiltZero)/25))}))}unmount(){this.el&&(this.el.remove(),this.el=null),this.left=this.right=this.brake=this.gas=!1,this.joy=0}read(e){let t=this.keys,n=this.left||t.has("ArrowLeft")||t.has("KeyA"),s=(this.right||t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0);Je.controls==="joystick"&&this.joy&&(s=this.joy),Je.controls==="tilt"&&this.tiltOn&&(s=Math.abs(this.tilt)>.06?this.tilt:0);let a=s===0?7:Math.sign(s)!==Math.sign(this.value)?9:4.5;this.value+=(s-this.value)*Math.min(1,e*a),Math.abs(this.value)<.01&&s===0&&(this.value=0);let o=this.gas||t.has("ArrowUp")||t.has("KeyW");return this.gasV+=((o?1:0)-this.gasV)*Math.min(1,e*(o?9:14)),this.gasV<.01&&!o&&(this.gasV=0),{steer:this.value,gas:this.gasV,brake:this.brake||t.has("Space")||t.has("ArrowDown")||t.has("KeyS")}}};var qm=r=>jn(r&&r.img)||"assets/gift-unknown.svg",yl=r=>r&&(r.ru||r.name)||"",_l=class{constructor(e){this.app=e,this.root=document.getElementById("ui"),this.cur=null,this.el=null}clear(){this.el&&this.el.remove(),this.el=null,this.cur=null,this.app.controls.unmount()}mount(e,t){return this.clear(),this.cur=e,this.el=Sn(t),this.root.appendChild(this.el),this.el}topbar(e=""){return`<div class="topbar"><div class="row">${e}</div><div class="row">
      <button class="iconbtn" data-a="settings" title="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438">\u2699\uFE0F</button>
      ${this.app.isOp?"":'<button class="iconbtn" data-a="host" title="\u0414\u043B\u044F \u0445\u043E\u0441\u0442\u0430">\u{1F399}\uFE0F</button>'}</div></div>`}wireTop(e){e.querySelectorAll('[data-a="settings"]').forEach(t=>t.onclick=()=>this.settings()),e.querySelectorAll('[data-a="host"]').forEach(t=>t.onclick=()=>this.hostLogin())}liveChip(){let e=this.app.live||{};return this.app.connected?e.state==="connected"?`<span class="chip live"><i class="dot"></i> LIVE @${fe(e.user)}</span>`:'<span class="chip">\u042D\u0444\u0438\u0440 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D</span>':'<span class="chip"><i class="dot pulse"></i> \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u0433\u0440\u0435\u2026</span>'}home(){let e=this.app,t=Tn[e.lobby?.loc||"city"],n=this.mount("home",`<div class="screen dim">
      ${this.topbar(this.liveChip())}
      <div class="card col">
        <div class="logo" style="text-align:center;margin:4px 0 6px">NITRO<span>LIVE</span></div>
        <div class="small" style="text-align:center">\u0413\u043E\u043D\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u044D\u0444\u0438\u0440\u0435: \u0434\u0430\u0440\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u2014 \u0443\u0441\u043A\u043E\u0440\u044F\u0439\u0441\u044F \u0438 \u043C\u0435\u0448\u0430\u0439 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430\u043C</div>
        <div class="loccard"><div class="ic">${t.icon}</div><div><b>${fe(t.title)}</b><div class="small">${fe(t.desc)}</div></div></div>
        <input class="field" id="nick" maxlength="40" placeholder="\u0422\u0432\u043E\u0439 \u043D\u0438\u043A \u0432 TikTok (\u043F\u043E\u0441\u043B\u0435 @)" autocomplete="off" autocapitalize="off" spellcheck="false" value="${fe(Dt.get("nick",""))}">
        <button class="btn primary" id="go">\u0418\u0413\u0420\u0410\u0422\u042C</button>
        <div class="small" id="hint" style="text-align:center">\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u2014 \u043F\u043E\u0434\u0430\u0440\u043E\u043A ${e.joinGift?`<b>${fe(yl(e.joinGift))}</b>`:"\xAB\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438\xBB"} \u0432 \u044D\u0444\u0438\u0440\u0435</div>
      </div></div>`);this.wireTop(n);let i=()=>{e.audio.unlock();let s=Me("#nick",n).value.trim().replace(/^@/,"");if(!s){yt("\u0412\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u043D\u0438\u043A TikTok",{kind:"bad"});return}Dt.set("nick",s),e.login(s)};Me("#go",n).onclick=i,Me("#nick",n).addEventListener("keydown",s=>{s.key==="Enter"&&i()})}verify(e){let t=this.app,n=t.joinGift,i=!!e.ticket,s=!!t.rules?.verifyChat,a=this.mount("verify",`<div class="screen dim">
      ${this.topbar(this.liveChip())}
      <div class="card">
        <h2 style="font-size:22px">\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u043E, ${fe(e.typed||"")}!</h2>
        <div class="steps">
          <div class="step ${i?"done":""}" id="stGift"><div class="st">${i?"\u2713":"1"}</div>
            <img class="giftimg" src="${fe(qm(n))}" alt=""><div><b>\u041E\u0442\u043F\u0440\u0430\u0432\u044C ${fe(yl(n)||"\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438")}</b><div class="small">\u0432 \u044D\u0444\u0438\u0440\u0435 ${e.host?"@"+fe(e.host):"\u0441\u0442\u0440\u0438\u043C\u0435\u0440\u0430"} \u2014 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u0444\u0438\u0440${i?" \xB7 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E!":""}</div></div></div>
          ${s?`<div class="step" id="stCode"><div class="st">2</div><div style="flex:1"><b>\u041D\u0430\u043F\u0438\u0448\u0438 \u0432 \u0447\u0430\u0442 \u044D\u0444\u0438\u0440\u0430 \u044D\u0442\u043E\u0442 \u043A\u043E\u0434</b><div class="small">\u0442\u0430\u043A \u043C\u044B \u0443\u0437\u043D\u0430\u0435\u043C, \u0447\u0442\u043E \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0442\u044B</div></div><div class="code">${fe(e.code)}</div></div>`:""}
        </div>
        ${e.live?"":'<div class="small" style="margin-bottom:10px">\u23F3 \u0425\u043E\u0441\u0442 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043B \u044D\u0444\u0438\u0440 \u043A \u0438\u0433\u0440\u0435 \u2014 \u043A\u043E\u0434 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442.</div>'}
        <div class="row"><button class="btn ghost" id="back" style="flex:1">\u0414\u0440\u0443\u0433\u043E\u0439 \u043D\u0438\u043A</button></div>
        <div class="small" style="margin-top:10px">\u041C\u043E\u0436\u043D\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434, \u0430 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0442\u043E\u043C \u2014 \u0438\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \u042D\u043A\u0440\u0430\u043D \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0441\u0430\u043C.</div>
      </div></div>`);this.wireTop(a),Me("#back",a).onclick=()=>{t.net.send({t:"logout"}),this.home()}}ticketArrived(){let e=this.el&&this.el.querySelector("#stGift");e&&(e.classList.add("done"),e.querySelector(".st").textContent="\u2713",yt("\u{1F94A} \u041F\u043E\u0434\u0430\u0440\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u2014 \u0442\u044B \u0432 \u0438\u0433\u0440\u0435!",{kind:"good"}))}lobby(){let e=this.app,t=e.lobby||{},n=e.you,i=Tn[t.loc||"city"],s=this.mount("lobby",`<div class="screen" id="lobby">
      ${this.topbar(this.liveChip())}
      <div class="sheet">
        <div class="waitline" id="wait"></div>
        <div class="tabs"><button class="tab on" data-t="car">\u{1F697} \u041C\u0430\u0448\u0438\u043D\u0430</button><button class="tab" data-t="players">\u{1F465} \u0418\u0433\u0440\u043E\u043A\u0438</button><button class="tab" data-t="gifts">\u{1F381} \u041F\u043E\u0434\u0430\u0440\u043A\u0438</button><button class="tab" data-t="top">\u{1F3C6} \u0414\u0435\u043D\u044C</button></div>
        <div class="pane scroll" id="pane"></div>
      </div></div>`);this.wireTop(s);let a=s.querySelectorAll(".tab");a.forEach(o=>o.onclick=()=>{a.forEach(c=>c.classList.toggle("on",c===o)),this.lobbyTab=o.dataset.t,this.renderLobby()}),this.lobbyTab=this.lobbyTab||"car",a.forEach(o=>o.classList.toggle("on",o.dataset.t===this.lobbyTab)),this.renderLobby()}renderLobby(){if(this.cur!=="lobby")return;let e=this.app,t=e.lobby||{},n=e.you,i=this.el,s=Tn[t.loc||"city"],a=(t.players||[]).length,o=n&&!n.ticket;Me("#wait",i).innerHTML=o?`\u{1F94A} \u041E\u0442\u043F\u0440\u0430\u0432\u044C <b>${fe(yl(e.joinGift))}</b> \u0432 \u044D\u0444\u0438\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C`:e.phase==="race"||e.phase==="countdown"||e.phase==="intro"?"\u{1F3C1} \u0418\u0434\u0451\u0442 \u0433\u043E\u043D\u043A\u0430 \u2014 \u0442\u044B \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439! \u0421\u043C\u043E\u0442\u0440\u0438 \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044E":`${s.icon} ${fe(s.title)} \xB7 ${t.laps||3} ${Ml(t.laps||3,"\u043A\u0440\u0443\u0433","\u043A\u0440\u0443\u0433\u0430","\u043A\u0440\u0443\u0433\u043E\u0432")} \xB7 ${a} ${Ml(a,"\u0438\u0433\u0440\u043E\u043A","\u0438\u0433\u0440\u043E\u043A\u0430","\u0438\u0433\u0440\u043E\u043A\u043E\u0432")} \xB7 <span class="pulse">\u0436\u0434\u0451\u043C \u0441\u0442\u0430\u0440\u0442\u2026</span>`;let c=Me("#pane",i),l=this.lobbyTab;if(l==="car"){let h=new Set((t.players||[]).filter(f=>!n||f.uid!==n.uid).map(f=>f.paint)),u=n?n.paint:0,d=Math.max(il.length,Math.max(u,...h)+1);c.innerHTML=`<div class="small" style="margin:2px 0 10px">\u0422\u0432\u043E\u0439 \u0446\u0432\u0435\u0442 \u2014 <b>${fe(Ot(u).name)}</b>. \u0417\u0430\u043D\u044F\u0442\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043F\u0440\u0438\u0433\u043B\u0443\u0448\u0435\u043D\u044B.</div>
        <div class="swatches">${Array.from({length:d},(f,m)=>{let b=Ot(m);return`<button class="sw ${m===u?"on":""} ${h.has(m)?"taken":""}" data-p="${m}" title="${fe(b.name)}" style="background:${b.color}"></button>`}).join("")}</div>`,c.querySelectorAll(".sw").forEach(f=>f.onclick=()=>{if(f.classList.contains("taken"))return yt("\u042D\u0442\u043E\u0442 \u0446\u0432\u0435\u0442 \u0443\u0436\u0435 \u0443 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430");e.net.send({t:"paint",n:+f.dataset.p})})}else l==="players"?c.innerHTML=`<div class="plist">${(t.players||[]).map(h=>`<div class="pl ${n&&h.uid===n.uid?"me":""}"><img class="av" src="${fe(jn(h.avatar)||"icon.svg")}" alt=""><span class="car" style="background:${Ot(h.paint).color}"></span><span class="nm">${fe(h.name)}</span>${h.ticket?"":'<span class="small">\u0431\u0435\u0437 \u{1F94A}</span>'}</div>`).join("")||'<div class="small">\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u043E\u0433\u043E \u2014 \u043F\u043E\u0437\u043E\u0432\u0438 \u0434\u0440\u0443\u0437\u0435\u0439!</div>'}</div>`:l==="gifts"?c.innerHTML=this.giftList():c.innerHTML=this.dailyList()}giftList(){return`<div class="col" style="gap:6px">${(this.app.gifts||[]).filter(t=>!t.off&&t.gift).map(t=>`<div class="giftrow"><img class="giftimg" src="${fe(qm(t.gift))}" alt=""><div class="gn">${fe(t.icon)} ${fe(t.text)}<div class="small">${fe(yl(t.gift))}</div></div><span class="cnt">\xD7${t.count}</span></div>`).join("")}</div>`}dailyList(){let e=this.app.daily;if(!e||!e.list.length)return'<div class="small">\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043D\u0430\u0431\u0440\u0430\u043B \u043E\u0447\u043A\u043E\u0432. \u041F\u0435\u0440\u0432\u0430\u044F \u0433\u043E\u043D\u043A\u0430 \u2014 \u0442\u0432\u043E\u044F!</div>';let t=this.app.you&&this.app.you.uid;return`<div class="small" style="margin-bottom:6px">\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F \xB7 \u0433\u043E\u043D\u043E\u043A: ${e.races}</div><div class="plist">${e.list.slice(0,50).map((n,i)=>`<div class="pl ${n.uid===t?"me":""}"><span class="pos p${i+1}">${i+1}</span><img class="av" src="${fe(jn(n.avatar)||"icon.svg")}" alt=""><span class="nm">${fe(n.name)}</span><span class="small">\u{1F3C6}${n.wins}</span><span class="pts">${n.points}</span></div>`).join("")}</div>`}hud(e){let t=this.mount("hud",`<div id="hud">
      <div class="tl"><div class="bigpos" id="pos">\u2014</div><span class="hudchip" id="lap"></span><span class="hudchip" id="time">0:00.0</span><div class="fxicons" id="fxi"></div></div>
      <div class="tr" id="lb"></div>
      <canvas id="minimap" width="240" height="240"></canvas>
      <div class="speedo" id="speedo"><div class="v" id="spd">0</div><div class="u">\u041A\u041C/\u0427 \xB7 <span class="g" id="gear">1</span></div><div class="rpm"><i id="rpm"></i></div><div class="hpbar" title="\u0421\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043C\u0430\u0448\u0438\u043D\u044B"><i id="hp"></i></div></div>
      <div id="count"></div>
    </div>`);return e.you!=null?this.app.controls.mount(t):t.querySelector("#speedo").classList.add("hidden"),this.mm=null,t}updateHud(e,t){if(this.cur!=="hud")return;let n=this.el,i=this.app,s=e.you!=null?e.entries.get(e.you):null,a=e.entries.size,o=e.focusEntry(),c=s||o;c&&(Me("#pos",n).innerHTML=`${c.pos||"\u2014"}<small>/${a}</small>`);let l=s?Math.max(1,Math.min(e.laps,e.local.lap+1)):Math.max(1,Math.min(e.laps,(o?.lap??-1)+1));if(Me("#lap",n).textContent=`\u041A\u0440\u0443\u0433 ${l}/${e.laps}`,Me("#time",n).textContent=t>0?Is(t):"0:00.0",s&&e.veh){let m=e.state;Me("#spd",n).textContent=Math.round((m.speed||0)*3.6),Me("#gear",n).textContent=m.rail?"N\u2082O":m.gear,Me("#rpm",n).style.width=Math.min(100,(m.rpm||0)/e.veh.spec.redline*100)+"%";let b=Math.max(0,e.veh.hp),g=Me("#hp",n);g.style.width=b+"%",g.className=b>60?"":b>30?"mid":"low"}let h=[];e.rank.forEach(([m,b,g,p,y],S)=>{let _=e.entries.get(m);_&&(S<5||m===e.you)&&h.push(`<div class="lb ${m===e.you?"me":""}"><b>${S+1}</b><span class="c" style="background:${_.gold?"#d4a22a":Ot(_.paint).color}"></span><span class="n">${fe(_.name)}</span>${g?"\u{1F3C1}":_.dnf?"\u{1F4A5}":y?'<span class="auto">\u{1F916}</span>':""}</div>`)});let u=Me("#lb",n),d=h.join("");u._h!==d&&(u.innerHTML=d,u._h=d);let f=s||o;if(f){let m=[];for(let p of f.fx)t<p.t1&&t>=p.t0&&m.push(tM(p,t));let b=Me("#fxi",n),g=m.join("");b._h!==g&&(b.innerHTML=g,b._h=g)}this.drawMinimap(e)}drawMinimap(e){let t=Me("#minimap",this.el);if(!t)return;let n=t.getContext("2d"),i=e.track,s=t.width;if(!this.mm||this.mm.id!==i.id){let c=1/0,l=-1/0,h=1/0,u=-1/0;for(let b=0;b<i.N;b++)c=Math.min(c,i.X[b]),l=Math.max(l,i.X[b]),h=Math.min(h,i.Z[b]),u=Math.max(u,i.Z[b]);let d=(s-24)/Math.max(l-c,u-h),f=(b,g)=>[s/2-(b-(c+l)/2)*d,s/2-(g-(h+u)/2)*d],m=new Path2D;for(let b=0;b<=i.N;b+=3){let[g,p]=f(i.X[b%i.N],i.Z[b%i.N]);b?m.lineTo(g,p):m.moveTo(g,p)}m.closePath(),this.mm={id:i.id,P:f,path:m}}n.clearRect(0,0,s,s),n.lineJoin="round",n.strokeStyle="rgba(0,0,0,.55)",n.lineWidth=11,n.stroke(this.mm.path),n.strokeStyle="rgba(255,255,255,.85)",n.lineWidth=5,n.stroke(this.mm.path);let[a,o]=this.mm.P(i.X[0],i.Z[0]);n.fillStyle="#fff",n.fillRect(a-5,o-2,10,4);for(let c of e.entries.values()){if(!c.vis)continue;let[l,h]=this.mm.P(c.vis.x,c.vis.z),u=c.slot===e.you;n.beginPath(),n.arc(l,h,u?8:5.5,0,Math.PI*2),n.fillStyle=c.gold?"#d4a22a":Ot(c.paint).color,n.fill(),n.lineWidth=u?3:1.5,n.strokeStyle=u?"#fff":"rgba(0,0,0,.8)",n.stroke()}}countdown(e){let t=this.el&&this.el.querySelector("#count");t&&(t.innerHTML=e>0?`<div class="lights">${[0,1,2,3,4].map(n=>`<i class="${n<6-e*5/3?"on":""}"></i>`).join("")}</div>`:e===0?'<div class="count"><b>GO!</b></div>':"")}banner(e,t="",n=2400){let i=Sn(`<div class="banner">${fe(e)}${t?`<small>${fe(t)}</small>`:""}</div>`);(this.el||this.root).appendChild(i),setTimeout(()=>i.remove(),n)}results(e){let t=this.app,n=t.you&&t.you.uid,i=this.mount("results",`<div class="screen" id="results">
      ${this.topbar('<span class="chip ok">\u{1F3C1} \u0418\u0442\u043E\u0433\u0438 \u0433\u043E\u043D\u043A\u0438</span>')}
      <div class="sheet"><div class="tabs"><button class="tab on" data-t="race">\u0413\u043E\u043D\u043A\u0430</button><button class="tab" data-t="day">\u{1F3C6} \u0414\u0435\u043D\u044C</button></div>
      <div class="pane scroll" id="pane"></div></div></div>`);this.wireTop(i);let s=Me("#pane",i),a=o=>{s.innerHTML=o==="race"?`<div class="restable">${e.list.map(c=>`<div class="resrow ${c.uid&&c.uid===n?"me":""}"><span class="pos p${c.pos}">${c.pos}</span><span class="c" style="background:${Ot(c.paint).color}"></span><span class="nm" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${fe(c.name)}${c.bot?" \u{1F916}":""}</span><span class="small">${c.finished?Is(c.time):c.dnf?"\u{1F4A5} \u0440\u0430\u0437\u0431\u0438\u0442":"\u043D\u0435 \u0444\u0438\u043D\u0438\u0448\u0438\u0440\u043E\u0432\u0430\u043B"}</span><span class="pts">${c.points?"+"+c.points:""}</span></div>`).join("")}</div>`:this.dailyList()};i.querySelectorAll(".tab").forEach(o=>o.onclick=()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.toggle("on",c===o)),a(o.dataset.t)}),a("race")}settings(){let e=this.app,t=(s,a)=>a.map(([o,c])=>`<option value="${o}" ${String(Je[s])===String(o)?"selected":""}>${c}</option>`).join(""),n=Sn(`<div class="screen dim" style="z-index:30"><div class="card col scroll" style="max-height:92%">
      <div class="row" style="justify-content:space-between"><h2 style="font-size:22px">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</h2><button class="iconbtn" id="x">\u2715</button></div>
      <label class="small">\u0413\u0440\u0430\u0444\u0438\u043A\u0430 (\u0441\u0435\u0439\u0447\u0430\u0441: ${fe(Ds[e.gfx.qName].name)}, \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u2014 ${fe(Ds[e.gfx.auto].name)})</label>
      <select class="field" id="gfx">${t("gfx",[["auto","\u0410\u0432\u0442\u043E (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)"],["low","\u041D\u0438\u0437\u043A\u0430\u044F \u2014 \u0441\u043B\u0430\u0431\u044B\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B"],["medium","\u0421\u0440\u0435\u0434\u043D\u044F\u044F"],["high","\u0412\u044B\u0441\u043E\u043A\u0430\u044F"],["ultra","\u0423\u043B\u044C\u0442\u0440\u0430 \u2014 \u043C\u043E\u0449\u043D\u044B\u0439 \u041F\u041A"]])}</select>
      <label class="small">\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: <b id="resv">${Math.round(Je.res*100)}%</b></label><input class="slider" type="range" id="res" min="0.5" max="1" step="0.05" value="${Je.res}">
      <label class="switch">\u0422\u0435\u043D\u0438 <input type="checkbox" id="shadows" ${Je.shadows?"checked":""}></label>
      <label class="small">\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u043A\u0430\u0434\u0440\u043E\u0432</label><select class="field" id="fps">${t("fps",[[30,"30 \u043A\u0430\u0434\u0440\u043E\u0432 \u2014 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0431\u0430\u0442\u0430\u0440\u0435\u0438"],[60,"60 \u043A\u0430\u0434\u0440\u043E\u0432 \u2014 \u043F\u043B\u0430\u0432\u043D\u043E"],[120,"120 \u043A\u0430\u0434\u0440\u043E\u0432"]])}</select>
      <label class="small">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435</label><select class="field" id="controls">${t("controls",[["buttons","\u041A\u043D\u043E\u043F\u043A\u0438 \u25C0 \u25B6"],["joystick","\u0414\u0436\u043E\u0439\u0441\u0442\u0438\u043A"],["tilt","\u041D\u0430\u043A\u043B\u043E\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"]])}</select>
      <label class="small">\u041A\u0430\u043C\u0435\u0440\u0430</label><select class="field" id="cam">${t("cam",[["chase","\u0417\u0430 \u043C\u0430\u0448\u0438\u043D\u043E\u0439"],["far","\u0414\u0430\u043B\u044C\u043D\u044F\u044F"],["hood","\u0421 \u043A\u0430\u043F\u043E\u0442\u0430"]])}</select>
      <label class="small">\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C: <b id="volv">${Math.round(Je.vol*100)}%</b></label><input class="slider" type="range" id="vol" min="0" max="1" step="0.05" value="${Je.vol}">
      <label class="small">\u041C\u043E\u0442\u043E\u0440</label><input class="slider" type="range" id="volEngine" min="0" max="1" step="0.05" value="${Je.volEngine}">
      <label class="small">\u042D\u0444\u0444\u0435\u043A\u0442\u044B</label><input class="slider" type="range" id="volFx" min="0" max="1" step="0.05" value="${Je.volFx}">
      <label class="small">\u041C\u0443\u0437\u044B\u043A\u0430</label><input class="slider" type="range" id="volMusic" min="0" max="1" step="0.05" value="${Je.volMusic}">
      <label class="switch">\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F <input type="checkbox" id="vibrate" ${Je.vibrate?"checked":""}></label>
      <label class="switch">\u041F\u043E\u043C\u043E\u0449\u043D\u0438\u043A: \u0441\u0430\u043C \u043F\u0440\u0438\u0442\u043E\u0440\u043C\u0430\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0435\u0440\u0435\u0434 \u043A\u0440\u0443\u0442\u044B\u043C\u0438 \u043F\u043E\u0432\u043E\u0440\u043E\u0442\u0430\u043C\u0438 <input type="checkbox" id="assist" ${Je.assist?"checked":""}></label>
      <label class="switch">\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C FPS <input type="checkbox" id="showFps" ${Je.showFps?"checked":""}></label>
      <div class="small">\u0412\u0435\u0440\u0441\u0438\u044F ${fe(e.version||"")}</div>
    </div></div>`);this.root.appendChild(n);let i=s=>n.querySelector(s);i("#x").onclick=()=>n.remove(),n.addEventListener("pointerdown",s=>{s.target===n&&n.remove()}),i("#gfx").onchange=s=>{Kn("gfx",s.target.value),e.gfx.setQuality(s.target.value),yt("\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043E\u043D\u043A\u0435")},i("#res").oninput=s=>{Kn("res",+s.target.value),i("#resv").textContent=Math.round(s.target.value*100)+"%",e.gfx.setQuality(Je.gfx)},i("#shadows").onchange=s=>{Kn("shadows",s.target.checked),e.gfx.setQuality(Je.gfx)},i("#fps").onchange=s=>Kn("fps",+s.target.value),i("#controls").onchange=s=>{Kn("controls",s.target.value),this.cur==="hud"&&this.app.controls.mount(this.el)},i("#cam").onchange=s=>{Kn("cam",s.target.value),e.race&&e.race.chase&&(e.race.chase.mode=s.target.value)};for(let s of["vol","volEngine","volFx","volMusic"])i("#"+s).oninput=a=>{Kn(s,+a.target.value),s==="vol"&&(i("#volv").textContent=Math.round(a.target.value*100)+"%")};i("#vibrate").onchange=s=>Kn("vibrate",s.target.checked),i("#assist").onchange=s=>Kn("assist",s.target.checked),i("#showFps").onchange=s=>Kn("showFps",s.target.checked)}hostLogin(e=""){let t=this.app;if(this.loginBox&&this.loginBox.isConnected)return;let n="",i=[1,2,3,4,5,6,7,8,9,0].sort(()=>Math.random()-.5),s=Sn(`<div class="screen dim" style="z-index:30"><div class="card" style="width:min(340px,100%)">
      <div class="row" style="justify-content:space-between"><h2 style="font-size:20px">\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0445\u043E\u0441\u0442\u0430</h2><button class="iconbtn" id="x">\u2715</button></div>
      <div class="small">\u0412\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C. \u041D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0432\u0438\u0434\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E\u0447\u043A\u0438, \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u2014 \u0437\u0440\u0438\u0442\u0435\u043B\u0438 \u044D\u0444\u0438\u0440\u0430 \u043D\u0435 \u0443\u0432\u0438\u0434\u044F\u0442 \u043A\u043E\u0434.</div>
      <div class="pin" id="pin">${"<i></i>".repeat(4)}</div>
      <div class="small" id="err" style="text-align:center;color:#ff8aa2;min-height:18px">${fe(e)}</div>
      <div class="keypad">${i.slice(0,9).map(h=>`<button data-d="${h}">${h}</button>`).join("")}<button class="fn" data-f="clr">\u0421\u0442\u0435\u0440\u0435\u0442\u044C</button><button data-d="${i[9]}">${i[9]}</button><button class="fn" data-f="ok">\u0412\u043E\u0439\u0442\u0438</button></div>
      <input type="password" id="kb" inputmode="numeric" autocomplete="off" style="position:absolute;opacity:0;width:1px;height:1px;left:-99px">
    </div></div>`);this.root.appendChild(s);let a=s.querySelector("#pin"),o=()=>{a.innerHTML=Array.from({length:Math.max(4,n.length)},(h,u)=>`<i class="${u<n.length?"f":""}"></i>`).join("")},c=()=>{n&&(t.opLogin(n),n="",o())};s.querySelector("#x").onclick=()=>s.remove(),s.querySelectorAll("[data-d]").forEach(h=>h.addEventListener("pointerdown",u=>{u.preventDefault(),n.length<32&&(n+=h.dataset.d),o()})),s.querySelector('[data-f="clr"]').addEventListener("pointerdown",h=>{h.preventDefault(),n="",o()}),s.querySelector('[data-f="ok"]').addEventListener("pointerdown",h=>{h.preventDefault(),c()});let l=h=>{if(!s.isConnected)return removeEventListener("keydown",l);/^\d$/.test(h.key)?(n+=h.key,o()):h.key==="Backspace"?(n=n.slice(0,-1),o()):h.key==="Enter"?c():h.key==="Escape"&&s.remove()};addEventListener("keydown",l),this.loginBox=s,this.loginErr=h=>{let u=s.querySelector("#err");u&&(u.textContent=h)}}};function tM(r,e){let t=Math.max(0,Math.ceil(r.t1-e)),i={boost:["\u26A1","good","\xD7"+(r.v||2)],shield:["\u{1F6E1}\uFE0F","good"],slow:["\u{1F40C}","bad"],skid:["\u{1F34C}","bad"],flat:["\u{1F4CC}","bad"],spin:["\u{1F4A5}","bad"],ink:["\u{1F419}","bad"],drunk:["\u{1F37A}","bad"],fog:["\u{1F32B}\uFE0F","bad"],freeze:["\u{1F9CA}","bad"],reverse:["\u{1F504}","bad"],tornado:["\u{1F32A}\uFE0F","bad"],meteor:["\u2604\uFE0F","bad"],rainbow:["\u{1F308}","good"],gold:["\u{1F451}","good"]}[r.k];return i?`<span class="fxicon ${i[1]}">${i[0]}${i[2]?" "+i[2]:""}${r.k!=="gold"&&t<100?" "+t+"\u0441":""}</span>`:""}function Ml(r,e,t,n){r=Math.abs(r)%100;let i=r%10;return r>10&&r<20?n:i>1&&i<5?t:i===1?e:n}var Xm={rose:"\u0440\u043E\u0437\u0430 \u0440\u043E\u0437\u044B",roses:"\u0440\u043E\u0437\u044B",flower:"\u0446\u0432\u0435\u0442\u043E\u043A \u0446\u0432\u0435\u0442\u044B",flowers:"\u0446\u0432\u0435\u0442\u044B",bouquet:"\u0431\u0443\u043A\u0435\u0442",tulip:"\u0442\u044E\u043B\u044C\u043F\u0430\u043D",tulips:"\u0442\u044E\u043B\u044C\u043F\u0430\u043D\u044B",sunflower:"\u043F\u043E\u0434\u0441\u043E\u043B\u043D\u0443\u0445",daisy:"\u0440\u043E\u043C\u0430\u0448\u043A\u0430",lily:"\u043B\u0438\u043B\u0438\u044F",lotus:"\u043B\u043E\u0442\u043E\u0441",blossom:"\u0446\u0432\u0435\u0442\u0435\u043D\u0438\u0435",sakura:"\u0441\u0430\u043A\u0443\u0440\u0430",cherry:"\u0432\u0438\u0448\u043D\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F",garden:"\u0441\u0430\u0434",garland:"\u0432\u0435\u043D\u043E\u043A \u0433\u0438\u0440\u043B\u044F\u043D\u0434\u0430",headpiece:"\u0432\u0435\u043D\u043E\u043A \u0443\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u0435",heart:"\u0441\u0435\u0440\u0434\u0446\u0435 \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E",hearts:"\u0441\u0435\u0440\u0434\u0446\u0430",love:"\u043B\u044E\u0431\u043E\u0432\u044C",lovely:"\u043C\u0438\u043B\u044B\u0439",kiss:"\u043F\u043E\u0446\u0435\u043B\u0443\u0439",kisses:"\u043F\u043E\u0446\u0435\u043B\u0443\u0438",hug:"\u043E\u0431\u044A\u044F\u0442\u0438\u044F",hugs:"\u043E\u0431\u044A\u044F\u0442\u0438\u044F",sweet:"\u0441\u043B\u0430\u0434\u043A\u0438\u0439",cute:"\u043C\u0438\u043B\u044B\u0439",romance:"\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430",romantic:"\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430",valentine:"\u0432\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u043A\u0430",couple:"\u043F\u0430\u0440\u0430",ring:"\u043A\u043E\u043B\u044C\u0446\u043E",wedding:"\u0441\u0432\u0430\u0434\u044C\u0431\u0430",proposal:"\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",cat:"\u043A\u043E\u0442 \u043A\u043E\u0448\u043A\u0430 \u043A\u043E\u0442\u0438\u043A",kitten:"\u043A\u043E\u0442\u0435\u043D\u043E\u043A",kitty:"\u043A\u043E\u0442\u0438\u043A",dog:"\u0441\u043E\u0431\u0430\u043A\u0430 \u043F\u0435\u0441",puppy:"\u0449\u0435\u043D\u043E\u043A",corgi:"\u043A\u043E\u0440\u0433\u0438",wolf:"\u0432\u043E\u043B\u043A",fox:"\u043B\u0438\u0441\u0430 \u043B\u0438\u0441",bear:"\u043C\u0435\u0434\u0432\u0435\u0434\u044C \u043C\u0438\u0448\u043A\u0430",teddy:"\u043F\u043B\u044E\u0448\u0435\u0432\u044B\u0439 \u043C\u0438\u0448\u043A\u0430",panda:"\u043F\u0430\u043D\u0434\u0430",lion:"\u043B\u0435\u0432",tiger:"\u0442\u0438\u0433\u0440",leon:"\u043B\u0435\u0432 \u043B\u0435\u043E\u043D",rabbit:"\u043A\u0440\u043E\u043B\u0438\u043A \u0437\u0430\u044F\u0446",bunny:"\u0437\u0430\u0439\u0447\u0438\u043A \u043A\u0440\u043E\u043B\u0438\u043A",hamster:"\u0445\u043E\u043C\u044F\u043A",mouse:"\u043C\u044B\u0448\u044C",monkey:"\u043E\u0431\u0435\u0437\u044C\u044F\u043D\u0430",horse:"\u043B\u043E\u0448\u0430\u0434\u044C \u043A\u043E\u043D\u044C",unicorn:"\u0435\u0434\u0438\u043D\u043E\u0440\u043E\u0433",pony:"\u043F\u043E\u043D\u0438",dragon:"\u0434\u0440\u0430\u043A\u043E\u043D",phoenix:"\u0444\u0435\u043D\u0438\u043A\u0441",eagle:"\u043E\u0440\u0435\u043B",falcon:"\u0441\u043E\u043A\u043E\u043B",bird:"\u043F\u0442\u0438\u0446\u0430",owl:"\u0441\u043E\u0432\u0430",swan:"\u043B\u0435\u0431\u0435\u0434\u044C",duck:"\u0443\u0442\u043A\u0430",duckling:"\u0443\u0442\u0435\u043D\u043E\u043A",penguin:"\u043F\u0438\u043D\u0433\u0432\u0438\u043D",flamingo:"\u0444\u043B\u0430\u043C\u0438\u043D\u0433\u043E",peacock:"\u043F\u0430\u0432\u043B\u0438\u043D",parrot:"\u043F\u043E\u043F\u0443\u0433\u0430\u0439",butterfly:"\u0431\u0430\u0431\u043E\u0447\u043A\u0430",bee:"\u043F\u0447\u0435\u043B\u0430",fish:"\u0440\u044B\u0431\u0430",whale:"\u043A\u0438\u0442",dolphin:"\u0434\u0435\u043B\u044C\u0444\u0438\u043D",shark:"\u0430\u043A\u0443\u043B\u0430",octopus:"\u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433",turtle:"\u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",frog:"\u043B\u044F\u0433\u0443\u0448\u043A\u0430",snake:"\u0437\u043C\u0435\u044F",deer:"\u043E\u043B\u0435\u043D\u044C",reindeer:"\u0441\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u043B\u0435\u043D\u044C",cow:"\u043A\u043E\u0440\u043E\u0432\u0430",pig:"\u0441\u0432\u0438\u043D\u044C\u044F",sheep:"\u043E\u0432\u0446\u0430",goat:"\u043A\u043E\u0437\u0430",chicken:"\u043A\u0443\u0440\u0438\u0446\u0430",koala:"\u043A\u043E\u0430\u043B\u0430",sloth:"\u043B\u0435\u043D\u0438\u0432\u0435\u0446",dino:"\u0434\u0438\u043D\u043E\u0437\u0430\u0432\u0440",dinosaur:"\u0434\u0438\u043D\u043E\u0437\u0430\u0432\u0440",rex:"\u0442\u0438\u0440\u0430\u043D\u043D\u043E\u0437\u0430\u0432\u0440",pegasus:"\u043F\u0435\u0433\u0430\u0441",griffin:"\u0433\u0440\u0438\u0444\u043E\u043D",kraken:"\u043A\u0440\u0430\u043A\u0435\u043D",yeti:"\u0439\u0435\u0442\u0438",capybara:"\u043A\u0430\u043F\u0438\u0431\u0430\u0440\u0430",llama:"\u043B\u0430\u043C\u0430",alpaca:"\u0430\u043B\u044C\u043F\u0430\u043A\u0430",jellyfish:"\u043C\u0435\u0434\u0443\u0437\u0430",seal:"\u0442\u044E\u043B\u0435\u043D\u044C",otter:"\u0432\u044B\u0434\u0440\u0430",star:"\u0437\u0432\u0435\u0437\u0434\u0430 \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u0430",stars:"\u0437\u0432\u0435\u0437\u0434\u044B",moon:"\u043B\u0443\u043D\u0430",sun:"\u0441\u043E\u043B\u043D\u0446\u0435",sky:"\u043D\u0435\u0431\u043E",cloud:"\u043E\u0431\u043B\u0430\u043A\u043E",clouds:"\u043E\u0431\u043B\u0430\u043A\u0430",rainbow:"\u0440\u0430\u0434\u0443\u0433\u0430",galaxy:"\u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430",universe:"\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F",planet:"\u043F\u043B\u0430\u043D\u0435\u0442\u0430",space:"\u043A\u043E\u0441\u043C\u043E\u0441",rocket:"\u0440\u0430\u043A\u0435\u0442\u0430",meteor:"\u043C\u0435\u0442\u0435\u043E\u0440 \u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",shower:"\u0434\u043E\u0436\u0434\u044C",rain:"\u0434\u043E\u0436\u0434\u044C",snow:"\u0441\u043D\u0435\u0433",snowflake:"\u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0430",snowman:"\u0441\u043D\u0435\u0433\u043E\u0432\u0438\u043A",ice:"\u043B\u0435\u0434",fire:"\u043E\u0433\u043E\u043D\u044C \u043F\u043B\u0430\u043C\u044F",flame:"\u043F\u043B\u0430\u043C\u044F",thunder:"\u0433\u0440\u043E\u043C",lightning:"\u043C\u043E\u043B\u043D\u0438\u044F",storm:"\u0448\u0442\u043E\u0440\u043C \u0431\u0443\u0440\u044F",wind:"\u0432\u0435\u0442\u0435\u0440",wave:"\u0432\u043E\u043B\u043D\u0430",ocean:"\u043E\u043A\u0435\u0430\u043D",sea:"\u043C\u043E\u0440\u0435",beach:"\u043F\u043B\u044F\u0436",island:"\u043E\u0441\u0442\u0440\u043E\u0432",mountain:"\u0433\u043E\u0440\u0430",volcano:"\u0432\u0443\u043B\u043A\u0430\u043D",forest:"\u043B\u0435\u0441",tree:"\u0434\u0435\u0440\u0435\u0432\u043E \u0435\u043B\u043A\u0430",aurora:"\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",car:"\u043C\u0430\u0448\u0438\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",sports:"\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439",racing:"\u0433\u043E\u043D\u043A\u0430 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0439",race:"\u0433\u043E\u043D\u043A\u0430",train:"\u043F\u043E\u0435\u0437\u0434",plane:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",jet:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",airplane:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",helicopter:"\u0432\u0435\u0440\u0442\u043E\u043B\u0435\u0442",ship:"\u043A\u043E\u0440\u0430\u0431\u043B\u044C",yacht:"\u044F\u0445\u0442\u0430",boat:"\u043B\u043E\u0434\u043A\u0430",bike:"\u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434",motorcycle:"\u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B",bus:"\u0430\u0432\u0442\u043E\u0431\u0443\u0441",truck:"\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",shuttle:"\u0448\u0430\u0442\u0442\u043B",balloon:"\u0448\u0430\u0440\u0438\u043A \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0448\u0430\u0440",balloons:"\u0448\u0430\u0440\u0438\u043A\u0438",airship:"\u0434\u0438\u0440\u0438\u0436\u0430\u0431\u043B\u044C",ufo:"\u043D\u043B\u043E",crown:"\u043A\u043E\u0440\u043E\u043D\u0430",castle:"\u0437\u0430\u043C\u043E\u043A",palace:"\u0434\u0432\u043E\u0440\u0435\u0446",king:"\u043A\u043E\u0440\u043E\u043B\u044C",queen:"\u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430",prince:"\u043F\u0440\u0438\u043D\u0446",princess:"\u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430",knight:"\u0440\u044B\u0446\u0430\u0440\u044C",sword:"\u043C\u0435\u0447",shield:"\u0449\u0438\u0442",treasure:"\u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449\u0435",chest:"\u0441\u0443\u043D\u0434\u0443\u043A",gold:"\u0437\u043E\u043B\u043E\u0442\u043E \u0437\u043E\u043B\u043E\u0442\u043E\u0439",golden:"\u0437\u043E\u043B\u043E\u0442\u043E\u0439",silver:"\u0441\u0435\u0440\u0435\u0431\u0440\u043E \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439",diamond:"\u0431\u0440\u0438\u043B\u043B\u0438\u0430\u043D\u0442 \u0430\u043B\u043C\u0430\u0437",diamonds:"\u0431\u0440\u0438\u043B\u043B\u0438\u0430\u043D\u0442\u044B",gem:"\u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C",crystal:"\u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0445\u0440\u0443\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0439",pearl:"\u0436\u0435\u043C\u0447\u0443\u0433",jewel:"\u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C",money:"\u0434\u0435\u043D\u044C\u0433\u0438",gun:"\u043F\u0443\u0448\u043A\u0430",coin:"\u043C\u043E\u043D\u0435\u0442\u0430",coins:"\u043C\u043E\u043D\u0435\u0442\u044B",cash:"\u0434\u0435\u043D\u044C\u0433\u0438",lucky:"\u0443\u0434\u0430\u0447\u0430 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0439",luck:"\u0443\u0434\u0430\u0447\u0430",box:"\u043A\u043E\u0440\u043E\u0431\u043A\u0430",gift:"\u043F\u043E\u0434\u0430\u0440\u043E\u043A",gifts:"\u043F\u043E\u0434\u0430\u0440\u043A\u0438",present:"\u043F\u043E\u0434\u0430\u0440\u043E\u043A",airdrop:"\u0433\u0440\u0443\u0437",mystery:"\u0442\u0430\u0439\u043D\u0430 \u0437\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0439",magic:"\u043C\u0430\u0433\u0438\u044F \u0432\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439",wand:"\u043F\u0430\u043B\u043E\u0447\u043A\u0430",potion:"\u0437\u0435\u043B\u044C\u0435",hat:"\u0448\u043B\u044F\u043F\u0430",cowboy:"\u043A\u043E\u0432\u0431\u043E\u0439",pink:"\u0440\u043E\u0437\u043E\u0432\u044B\u0439",blue:"\u0441\u0438\u043D\u0438\u0439 \u0433\u043E\u043B\u0443\u0431\u043E\u0439",red:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",green:"\u0437\u0435\u043B\u0435\u043D\u044B\u0439",black:"\u0447\u0435\u0440\u043D\u044B\u0439",white:"\u0431\u0435\u043B\u044B\u0439",purple:"\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",yellow:"\u0436\u0435\u043B\u0442\u044B\u0439",cake:"\u0442\u043E\u0440\u0442",birthday:"\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",cupcake:"\u043A\u0430\u043F\u043A\u0435\u0439\u043A",donut:"\u043F\u043E\u043D\u0447\u0438\u043A",doughnut:"\u043F\u043E\u043D\u0447\u0438\u043A",cookie:"\u043F\u0435\u0447\u0435\u043D\u044C\u0435",candy:"\u043A\u043E\u043D\u0444\u0435\u0442\u0430",lollipop:"\u043B\u0435\u0434\u0435\u043D\u0435\u0446",chocolate:"\u0448\u043E\u043A\u043E\u043B\u0430\u0434",ice_cream:"\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",icecream:"\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",cream:"\u043A\u0440\u0435\u043C",coffee:"\u043A\u043E\u0444\u0435",tea:"\u0447\u0430\u0439",milk:"\u043C\u043E\u043B\u043E\u043A\u043E",juice:"\u0441\u043E\u043A",drink:"\u043D\u0430\u043F\u0438\u0442\u043E\u043A",beer:"\u043F\u0438\u0432\u043E",wine:"\u0432\u0438\u043D\u043E",champagne:"\u0448\u0430\u043C\u043F\u0430\u043D\u0441\u043A\u043E\u0435",pizza:"\u043F\u0438\u0446\u0446\u0430",burger:"\u0431\u0443\u0440\u0433\u0435\u0440",fries:"\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",sushi:"\u0441\u0443\u0448\u0438",ramen:"\u0440\u0430\u043C\u0435\u043D",noodles:"\u043B\u0430\u043F\u0448\u0430",rice:"\u0440\u0438\u0441",bread:"\u0445\u043B\u0435\u0431",watermelon:"\u0430\u0440\u0431\u0443\u0437",apple:"\u044F\u0431\u043B\u043E\u043A\u043E",banana:"\u0431\u0430\u043D\u0430\u043D",strawberry:"\u043A\u043B\u0443\u0431\u043D\u0438\u043A\u0430",peach:"\u043F\u0435\u0440\u0441\u0438\u043A",orange:"\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D",lemon:"\u043B\u0438\u043C\u043E\u043D",grape:"\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434",pineapple:"\u0430\u043D\u0430\u043D\u0430\u0441",avocado:"\u0430\u0432\u043E\u043A\u0430\u0434\u043E",corn:"\u043A\u0443\u043A\u0443\u0440\u0443\u0437\u0430",popcorn:"\u043F\u043E\u043F\u043A\u043E\u0440\u043D",egg:"\u044F\u0439\u0446\u043E",fruit:"\u0444\u0440\u0443\u043A\u0442\u044B",music:"\u043C\u0443\u0437\u044B\u043A\u0430",song:"\u043F\u0435\u0441\u043D\u044F",guitar:"\u0433\u0438\u0442\u0430\u0440\u0430",piano:"\u043F\u0438\u0430\u043D\u0438\u043D\u043E",microphone:"\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",mic:"\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",dj:"\u0434\u0438\u0434\u0436\u0435\u0439",dance:"\u0442\u0430\u043D\u0435\u0446",dancing:"\u0442\u0430\u043D\u0446\u044B",party:"\u0432\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0430",disco:"\u0434\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430",concert:"\u043A\u043E\u043D\u0446\u0435\u0440\u0442",stage:"\u0441\u0446\u0435\u043D\u0430",trophy:"\u0442\u0440\u043E\u0444\u0435\u0439 \u043A\u0443\u0431\u043E\u043A",cup:"\u043A\u0443\u0431\u043E\u043A \u0447\u0430\u0448\u043A\u0430",medal:"\u043C\u0435\u0434\u0430\u043B\u044C",champion:"\u0447\u0435\u043C\u043F\u0438\u043E\u043D",winner:"\u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C",football:"\u0444\u0443\u0442\u0431\u043E\u043B",soccer:"\u0444\u0443\u0442\u0431\u043E\u043B",basketball:"\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B",baseball:"\u0431\u0435\u0439\u0441\u0431\u043E\u043B",game:"\u0438\u0433\u0440\u0430",gamepad:"\u0433\u0435\u0439\u043C\u043F\u0430\u0434 \u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A",controller:"\u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A",fireworks:"\u0444\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043A \u0441\u0430\u043B\u044E\u0442",firework:"\u0444\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043A",confetti:"\u043A\u043E\u043D\u0444\u0435\u0442\u0442\u0438",sparkler:"\u0431\u0435\u043D\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C",lantern:"\u0444\u043E\u043D\u0430\u0440\u0438\u043A",candle:"\u0441\u0432\u0435\u0447\u0430",lamp:"\u043B\u0430\u043C\u043F\u0430",thumbs:"\u043F\u0430\u043B\u0435\u0446 \u043B\u0430\u0439\u043A",up:"\u0432\u0432\u0435\u0440\u0445",like:"\u043B\u0430\u0439\u043A",ok:"\u043E\u043A",hi:"\u043F\u0440\u0438\u0432\u0435\u0442",hello:"\u043F\u0440\u0438\u0432\u0435\u0442",bye:"\u043F\u043E\u043A\u0430",wow:"\u0432\u0430\u0443",cool:"\u043A\u0440\u0443\u0442\u043E",perfect:"\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E",good:"\u0445\u043E\u0440\u043E\u0448\u043E",great:"\u043E\u0442\u043B\u0438\u0447\u043D\u043E",nice:"\u043A\u043B\u0430\u0441\u0441",happy:"\u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0439",smile:"\u0443\u043B\u044B\u0431\u043A\u0430",laugh:"\u0441\u043C\u0435\u0445",cry:"\u043F\u043B\u0430\u0447",tears:"\u0441\u043B\u0435\u0437\u044B",angry:"\u0437\u043B\u043E\u0439",sad:"\u0433\u0440\u0443\u0441\u0442\u043D\u044B\u0439",clap:"\u0445\u043B\u043E\u043F\u0430\u0442\u044C \u0430\u043F\u043B\u043E\u0434\u0438\u0441\u043C\u0435\u043D\u0442\u044B",applause:"\u0430\u043F\u043B\u043E\u0434\u0438\u0441\u043C\u0435\u043D\u0442\u044B",wink:"\u043F\u043E\u0434\u043C\u0438\u0433\u0438\u0432\u0430\u043D\u0438\u0435",hand:"\u0440\u0443\u043A\u0430",hands:"\u0440\u0443\u043A\u0438",finger:"\u043F\u0430\u043B\u0435\u0446",heart_hands:"\u0441\u0435\u0440\u0434\u0446\u0435 \u0440\u0443\u043A\u0430\u043C\u0438",friend:"\u0434\u0440\u0443\u0433",friends:"\u0434\u0440\u0443\u0437\u044C\u044F",family:"\u0441\u0435\u043C\u044C\u044F",mom:"\u043C\u0430\u043C\u0430",dad:"\u043F\u0430\u043F\u0430",baby:"\u043C\u0430\u043B\u044B\u0448",boy:"\u043C\u0430\u043B\u044C\u0447\u0438\u043A",girl:"\u0434\u0435\u0432\u043E\u0447\u043A\u0430",man:"\u043C\u0443\u0436\u0447\u0438\u043D\u0430",lady:"\u043B\u0435\u0434\u0438",super:"\u0441\u0443\u043F\u0435\u0440",mega:"\u043C\u0435\u0433\u0430",ultra:"\u0443\u043B\u044C\u0442\u0440\u0430",big:"\u0431\u043E\u043B\u044C\u0448\u043E\u0439",little:"\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",small:"\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",mini:"\u043C\u0438\u043D\u0438",giant:"\u0433\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0438\u0439",lion_king:"\u043A\u043E\u0440\u043E\u043B\u044C \u043B\u0435\u0432",glasses:"\u043E\u0447\u043A\u0438",sunglasses:"\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u043E\u0447\u043A\u0438",shoe:"\u0442\u0443\u0444\u043B\u044F",shoes:"\u043E\u0431\u0443\u0432\u044C",dress:"\u043F\u043B\u0430\u0442\u044C\u0435",bag:"\u0441\u0443\u043C\u043A\u0430",perfume:"\u0434\u0443\u0445\u0438",lipstick:"\u043F\u043E\u043C\u0430\u0434\u0430",makeup:"\u043C\u0430\u043A\u0438\u044F\u0436",mirror:"\u0437\u0435\u0440\u043A\u0430\u043B\u043E",comb:"\u0440\u0430\u0441\u0447\u0435\u0441\u043A\u0430",crowned:"\u043A\u043E\u0440\u043E\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439",wings:"\u043A\u0440\u044B\u043B\u044C\u044F",wing:"\u043A\u0440\u044B\u043B\u043E",angel:"\u0430\u043D\u0433\u0435\u043B",devil:"\u0434\u044C\u044F\u0432\u043E\u043B",ghost:"\u043F\u0440\u0438\u0437\u0440\u0430\u043A",pumpkin:"\u0442\u044B\u043A\u0432\u0430",halloween:"\u0445\u044D\u043B\u043B\u043E\u0443\u0438\u043D",christmas:"\u0440\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",santa:"\u0441\u0430\u043D\u0442\u0430 \u0434\u0435\u0434 \u043C\u043E\u0440\u043E\u0437",xmas:"\u0440\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",new:"\u043D\u043E\u0432\u044B\u0439",year:"\u0433\u043E\u0434",holiday:"\u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A",festival:"\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C",carnival:"\u043A\u0430\u0440\u043D\u0430\u0432\u0430\u043B",eid:"\u0438\u0434",ramadan:"\u0440\u0430\u043C\u0430\u0434\u0430\u043D",easter:"\u043F\u0430\u0441\u0445\u0430",house:"\u0434\u043E\u043C",home:"\u0434\u043E\u043C",city:"\u0433\u043E\u0440\u043E\u0434",bridge:"\u043C\u043E\u0441\u0442",tower:"\u0431\u0430\u0448\u043D\u044F",ferris:"\u043A\u043E\u043B\u0435\u0441\u043E \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",wheel:"\u043A\u043E\u043B\u0435\u0441\u043E",carousel:"\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C",swing:"\u043A\u0430\u0447\u0435\u043B\u0438",tent:"\u043F\u0430\u043B\u0430\u0442\u043A\u0430",camping:"\u043A\u0435\u043C\u043F\u0438\u043D\u0433",world:"\u043C\u0438\u0440",earth:"\u0437\u0435\u043C\u043B\u044F",globe:"\u0433\u043B\u043E\u0431\u0443\u0441",journey:"\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",travel:"\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",adventure:"\u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",dream:"\u043C\u0435\u0447\u0442\u0430 \u0441\u043E\u043D",dreams:"\u043C\u0435\u0447\u0442\u044B",wish:"\u0436\u0435\u043B\u0430\u043D\u0438\u0435",hope:"\u043D\u0430\u0434\u0435\u0436\u0434\u0430",peace:"\u043C\u0438\u0440",power:"\u0441\u0438\u043B\u0430",energy:"\u044D\u043D\u0435\u0440\u0433\u0438\u044F",boost:"\u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435",level:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C",rising:"\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0439",legend:"\u043B\u0435\u0433\u0435\u043D\u0434\u0430",hero:"\u0433\u0435\u0440\u043E\u0439",warrior:"\u0432\u043E\u0438\u043D",ninja:"\u043D\u0438\u043D\u0434\u0437\u044F",samurai:"\u0441\u0430\u043C\u0443\u0440\u0430\u0439",robot:"\u0440\u043E\u0431\u043E\u0442",alien:"\u043F\u0440\u0438\u0448\u0435\u043B\u0435\u0446",mermaid:"\u0440\u0443\u0441\u0430\u043B\u043A\u0430",fairy:"\u0444\u0435\u044F",wizard:"\u0432\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A",witch:"\u0432\u0435\u0434\u044C\u043C\u0430",vampire:"\u0432\u0430\u043C\u043F\u0438\u0440",zombie:"\u0437\u043E\u043C\u0431\u0438",skull:"\u0447\u0435\u0440\u0435\u043F",mask:"\u043C\u0430\u0441\u043A\u0430",crowd:"\u0442\u043E\u043B\u043F\u0430",fans:"\u0444\u0430\u043D\u0430\u0442\u044B",fan:"\u0444\u0430\u043D\u0430\u0442",vip:"\u0432\u0438\u043F",premium:"\u043F\u0440\u0435\u043C\u0438\u0443\u043C",universe_plus:"\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F",paper:"\u0431\u0443\u043C\u0430\u0436\u043D\u044B\u0439",plane_paper:"\u0431\u0443\u043C\u0430\u0436\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u0438\u043A",letter:"\u043F\u0438\u0441\u044C\u043C\u043E",note:"\u0437\u0430\u043F\u0438\u0441\u043A\u0430",photo:"\u0444\u043E\u0442\u043E",camera:"\u043A\u0430\u043C\u0435\u0440\u0430",phone:"\u0442\u0435\u043B\u0435\u0444\u043E\u043D",tv:"\u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440",computer:"\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",clock:"\u0447\u0430\u0441\u044B",watch:"\u0447\u0430\u0441\u044B",key:"\u043A\u043B\u044E\u0447",lock:"\u0437\u0430\u043C\u043E\u043A",bell:"\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A",flag:"\u0444\u043B\u0430\u0433",map:"\u043A\u0430\u0440\u0442\u0430",compass:"\u043A\u043E\u043C\u043F\u0430\u0441",anchor:"\u044F\u043A\u043E\u0440\u044C",bubble:"\u043F\u0443\u0437\u044B\u0440\u044C",bubbles:"\u043F\u0443\u0437\u044B\u0440\u0438",slime:"\u0441\u043B\u0430\u0439\u043C",toy:"\u0438\u0433\u0440\u0443\u0448\u043A\u0430",doll:"\u043A\u0443\u043A\u043B\u0430",blocks:"\u043A\u0443\u0431\u0438\u043A\u0438",puzzle:"\u043F\u0430\u0437\u043B",kite:"\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0437\u043C\u0435\u0439",pinata:"\u043F\u0438\u043D\u044C\u044F\u0442\u0430",sparkle:"\u0431\u043B\u0435\u0441\u043A",shine:"\u0441\u0438\u044F\u043D\u0438\u0435",shining:"\u0441\u0438\u044F\u044E\u0449\u0438\u0439",glow:"\u0441\u0438\u044F\u043D\u0438\u0435",neon:"\u043D\u0435\u043E\u043D",lights:"\u043E\u0433\u043D\u0438"};function jm(r){let e=[];for(let t of String(r||"").toLowerCase().split(/[^a-z0-9']+/))Xm[t]&&e.push(Xm[t]);return e.join(" ")}var Km=null,Sl=null,wl=null,El=r=>String(r||"").toLowerCase().replace(/[^a-zа-яё0-9]+/gi,"");function Gr(){return wl||(wl=fetch("assets/giftcatalog.json").then(r=>r.json()).then(r=>{Km=r,Sl=new Map;for(let e of r){for(let t of e.ids||[])Sl.set(t,e);e.key=[e.name,e.ru,e.kw||jm(e.name)].map(El).join(" ")}return r.sort((e,t)=>(t.cur||0)-(e.cur||0)||e.coins-t.coins),r}).catch(()=>Km=[]),wl)}function Yn(r){if(!r||!Sl)return r;let e=(r.ids||[]).map(t=>Sl.get(t)).find(Boolean);return e?{...r,img:r.img||e.img,ru:r.ru||e.ru,coins:e.coins}:r}var Tl=r=>jn(r&&r.img)||"assets/gift-unknown.svg",ld=r=>r&&(r.ru||r.name)||"",Al=class{constructor(e){this.app=e,this.tab=Dt.get("opTab","race"),this.st=null,this.feed=[],this.clean=Dt.get("opClean",!1)}mount(){let e=document.getElementById("ui");this.el&&this.el.remove(),this.el=Sn(`<div id="op" class="${this.clean?"clean":""}">
      <div class="stage">
        <div class="ov-stand" id="ovStand"></div>
        <div class="ov-feed" id="ovFeed"></div>
        <div class="ov-gifts" id="ovGifts"></div>
        <div class="ov-join" id="ovJoin"></div>
        <div class="ov-title" id="ovTitle"></div>
        <button class="iconbtn" id="cleanBtn" style="position:absolute;right:12px;bottom:12px;pointer-events:auto" title="\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C / \u0441\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u043D\u0435\u043B\u044C">\u2630</button>
      </div>
      <div class="side">
        <div class="optabs">${[["race","\u{1F3C1} \u0413\u043E\u043D\u043A\u0430"],["players","\u{1F465} \u0418\u0433\u0440\u043E\u043A\u0438"],["gifts","\u{1F381} \u041F\u043E\u0434\u0430\u0440\u043A\u0438"],["top","\u{1F3C6} \u0420\u0435\u0439\u0442\u0438\u043D\u0433"],["live","\u{1F4E1} \u042D\u0444\u0438\u0440"]].map(([t,n])=>`<button class="tab ${t===this.tab?"on":""}" data-t="${t}">${n}</button>`).join("")}</div>
        <div id="opLive"></div>
        <div class="opbody scroll" id="opBody"></div>
      </div></div>`),e.appendChild(this.el),this.el.querySelectorAll(".optabs .tab").forEach(t=>t.onclick=()=>{this.tab=t.dataset.t,Dt.set("opTab",this.tab),this.el.querySelectorAll(".optabs .tab").forEach(n=>n.classList.toggle("on",n===t)),this.render()}),Me("#cleanBtn",this.el).onclick=()=>{this.clean=!this.clean,Dt.set("opClean",this.clean),this.el.classList.toggle("clean",this.clean),setTimeout(()=>this.app.gfx.resize(),50)},Gr().then(()=>{this.render(),this.renderGiftsOverlay()}),this.keysOn||(this.keysOn=!0,addEventListener("keydown",t=>this.camKeys(t))),this.render(),this.renderGiftsOverlay()}unmount(){this.el&&this.el.remove(),this.el=null}op(e,t={}){this.app.net.send({t:"op",a:e,...t})}onState(e){this.st=e;let t=document.activeElement,n=t&&this.el&&this.el.contains(t)&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName);this.dragging||this.editing||n?this.pendingRender||(this.pendingRender=!0,t&&t.addEventListener("blur",()=>{this.pendingRender=!1,setTimeout(()=>this.render(),350)},{once:!0})):this.render(),this.renderGiftsOverlay(),this.renderJoin(),this.renderLive()}renderLive(){let e=this.el&&Me("#opLive",this.el);if(!e||!this.st)return;let t=e.querySelector("input");if(t&&document.activeElement===t)return;let n=this.st.tiktok||{},i=(this.st.settings||{}).hostUser||"";if(n.state==="connected"&&!this.liveEdit){e.className="oplive ok",e.innerHTML=`<span>\u{1F7E2} \u0421\u043B\u0435\u0436\u0443 \u0437\u0430 \u044D\u0444\u0438\u0440\u043E\u043C <b>@${fe(i)}</b> \u2014 \u0432\u0445\u043E\u0434 \u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u044D\u0444\u0438\u0440\u0430</span><button class="mini" id="lvEdit">\u0421\u043C\u0435\u043D\u0438\u0442\u044C</button>`,Me("#lvEdit",e).onclick=()=>{this.liveEdit=!0,this.renderLive()};return}e.className="oplive need";let a=i?n.state==="connecting"?"\u23F3 \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C \u043A \u044D\u0444\u0438\u0440\u0443 @"+i+"\u2026":"\u26A0\uFE0F "+(n.message||"\u042D\u0444\u0438\u0440 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D")+" \u2014 \u0437\u0430\u043F\u0443\u0441\u0442\u0438 \u044D\u0444\u0438\u0440 \u0432 TikTok \u0438 \u043D\u0430\u0436\u043C\u0438 \xAB\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\xBB":"\u0412\u0432\u0435\u0434\u0438 \u0441\u0432\u043E\u0439 \u043D\u0438\u043A TikTok \u2014 \u0438\u0433\u0440\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0437\u0430 \u0442\u0432\u043E\u0438\u043C \u044D\u0444\u0438\u0440\u043E\u043C. \u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432 \u0447\u0443\u0436\u0438\u0445 \u044D\u0444\u0438\u0440\u0430\u0445 \u043D\u0435 \u0437\u0430\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F.";e.innerHTML=`<b>\u{1F4E1} \u0422\u0432\u043E\u0439 \u043D\u0438\u043A TikTok (\u0445\u043E\u0441\u0442)</b><div class="small">${fe(a)}</div>
      <div class="row"><input class="field" id="lvUser" placeholder="\u043D\u0438\u043A \u043F\u043E\u0441\u043B\u0435 @" value="${fe(i)}" autocapitalize="off" spellcheck="false"><button class="btn small" id="lvGo">\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u043C\u043E\u0439 \u044D\u0444\u0438\u0440</button></div>`;let o=()=>{let c=Me("#lvUser",e).value.trim().replace(/^@/,"");if(!c)return yt("\u0412\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u043D\u0438\u043A TikTok");this.liveEdit=!1,this.op("connect",{user:c}),yt("\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C \u043A \u044D\u0444\u0438\u0440\u0443 @"+c+"\u2026")};Me("#lvGo",e).onclick=o,Me("#lvUser",e).onkeydown=c=>{c.key==="Enter"&&o()},!i&&!this.liveFocused&&(this.liveFocused=!0,setTimeout(()=>{let c=Me("#lvUser",e),l=document.activeElement;c&&(!l||l===document.body)&&c.focus()},50))}onGift(e){let t=Yn(e.action?{ids:[e.giftId],name:e.gift}:{ids:[e.giftId],name:e.gift})||{},n=ks[e.action],i=Me("#ovFeed",this.el);if(!i)return;let s=Sn(`<div class="toast ${n&&["slow","skid","flat","rocket","ink","drunk","fog","freeze","reverse","tornado","meteor","swap"].includes(n.id)?"bad":"good"}"><img src="${fe(jn(e.img)||Tl(t))}" alt=""><span></span></div>`);for(s.querySelector("span").textContent=`${e.name}: ${ld(t)||e.gift}${e.count>1?" \xD7"+e.count:""}${n?" \u2192 "+n.short:""}${e.note?" ("+e.note+")":""}`,i.prepend(s);i.children.length>5;)i.lastChild.remove();setTimeout(()=>{s.style.transition="opacity .5s",s.style.opacity="0",setTimeout(()=>s.remove(),500)},6e3),(this.tab==="live"||this.tab==="players")&&this.render()}giftRows(){let e=this.st;return(e&&e.order&&e.order.length?e.order:Hr.map(n=>n.id)).map(n=>ks[n]).filter(Boolean).map(n=>{let i=e&&e.gifts&&e.gifts[n.id]||{},s=i.none?null:Yn(i.gift||{ids:[n.gift.id],name:n.gift.name}),a=i.value!=null?i.value:n.param?n.param.def:null;return{a:n,gift:s,count:i.count||n.count||1,value:a,off:!!i.off,c:i}})}renderGiftsOverlay(){let e=this.el&&Me("#ovGifts",this.el);if(!e)return;let t=this.giftRows().filter(n=>!n.off&&n.gift);e.innerHTML='<div class="ovh" title="\u041F\u0435\u0440\u0435\u0442\u0430\u0449\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044C \xB7 \u043A\u043E\u043B\u0451\u0441\u0438\u043A\u043E \u043C\u044B\u0448\u0438 \u2014 \u0440\u0430\u0437\u043C\u0435\u0440">\u{1F381} \u041F\u041E\u0414\u0410\u0420\u041A\u0418 \u0412 \u0418\u0413\u0420\u0415</div><div class="ovgrid">'+t.map(n=>`<div class="ogr"><img src="${fe(Tl(n.gift))}" alt=""><span class="x">\xD7${n.count}</span><span class="e">${fe(n.a.icon)} ${fe(n.a.id==="join"?"\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0433\u043E\u043D\u043A\u0435":od(n.a,n.value))}</span></div>`).join("")+'</div><i class="ovrs" title="\u041F\u043E\u0442\u044F\u043D\u0438, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440"></i>',this.ovN=t.length,e._wired||this.wireGiftsBox(e),this.placeGifts()}placeGifts(){let e=this.el&&Me("#ovGifts",this.el);if(!e)return;let t=e.parentElement.getBoundingClientRect(),n=t.width,i=t.height;if(n<50||i<50)return;let s=this.ovBox||Dt.get("ovGiftsBox",null);if(!s){let h=Math.min(340,Math.max(230,n*.24)),u=Math.min(i*.8,640);s={x:(n-h-12)/n,y:12/i,w:h/n,h:u/i}}s.w=Math.min(1,Math.max(150/n,s.w)),s.h=Math.min(1,Math.max(90/i,s.h)),s.x=Math.min(1-s.w,Math.max(0,s.x)),s.y=Math.min(1-s.h,Math.max(0,s.y)),this.ovBox=s,Object.assign(e.style,{left:s.x*n+"px",top:s.y*i+"px",width:s.w*n+"px",height:s.h*i+"px"});let a=Math.max(1,this.ovN||1),o=s.w*n-16,c=s.h*i-16,l={c:1,s:0};for(let h=1;h<=4;h++){let u=Math.ceil(a/h),d=Math.min((c-26)/(u*1.13)/30,(o-(h-1)*6)/h/235);d>l.s&&(l={c:h,s:d})}e.style.setProperty("--ovs",Math.max(.3,Math.min(2.4,l.s)).toFixed(3)),e.querySelector(".ovgrid").style.gridTemplateColumns=`repeat(${l.c}, minmax(0, 1fr))`}saveGiftsBox(){Dt.set("ovGiftsBox",this.ovBox)}wireGiftsBox(e){e._wired=!0;let t=()=>e.parentElement.getBoundingClientRect();e.addEventListener("pointerdown",n=>{let i=n.target.closest(".ovrs")?"size":n.target.closest(".ovh")?"move":null;if(!i)return;n.preventDefault(),n.stopPropagation(),e.setPointerCapture(n.pointerId),e.classList.add("grab");let s=t(),a={...this.ovBox},o=n.clientX,c=n.clientY,l=u=>{let d=(u.clientX-o)/s.width,f=(u.clientY-c)/s.height;i==="move"?(this.ovBox.x=a.x+d,this.ovBox.y=a.y+f):(this.ovBox.w=a.w+d,this.ovBox.h=a.h+f),this.placeGifts()},h=()=>{e.removeEventListener("pointermove",l),e.removeEventListener("pointerup",h),e.removeEventListener("pointercancel",h),e.classList.remove("grab"),this.saveGiftsBox()};e.addEventListener("pointermove",l),e.addEventListener("pointerup",h),e.addEventListener("pointercancel",h)}),e.addEventListener("wheel",n=>{n.preventDefault(),n.stopPropagation();let i=n.deltaY<0?1.07:1/1.07,s=this.ovBox,a=s.x+s.w/2,o=s.y+s.h/2;s.w*=i,s.h*=i,s.x=a-s.w/2,s.y=o-s.h/2,this.placeGifts(),clearTimeout(this.ovSaveT),this.ovSaveT=setTimeout(()=>this.saveGiftsBox(),400)},{passive:!1}),e.addEventListener("dblclick",n=>{n.target.closest(".ovh")&&(this.ovBox=null,Dt.del("ovGiftsBox"),this.placeGifts())}),window.ResizeObserver&&new ResizeObserver(()=>this.placeGifts()).observe(e.parentElement)}renderJoin(){let e=this.el&&Me("#ovJoin",this.el);if(!e)return;let t=this.st||{},n=t.site||t.url||location.host,i=this.giftRows().find(s=>s.a.id==="join");e.innerHTML=`<div class="t">\u{1F3AE} \u0418\u0433\u0440\u0430\u0442\u044C \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:</div><div class="u">${fe(String(n).replace(/^https?:\/\//,""))}</div><div class="t" style="display:flex;align-items:center;gap:6px;margin-top:4px">\u0423\u0447\u0430\u0441\u0442\u0438\u0435: <img src="${fe(Tl(i&&i.gift))}" style="width:26px;height:26px" alt=""> ${fe(ld(i&&i.gift)||"\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438")}</div>`}update(e,t){if(!this.el)return;let n=this.app,i=Me("#ovStand",this.el),s=Me("#ovTitle",this.el),a="";if(e&&e.rank.length&&(n.phase==="race"||n.phase==="countdown"))a=e.rank.slice(0,12).map(([c,l,h,u,d],f)=>{let m=e.entries.get(c);return m?`<div class="lb"><b>${f+1}</b><span class="c" style="background:${m.gold?"#d4a22a":Ot(m.paint).color}"></span><span class="n">${fe(m.name)}</span>${h?"\u{1F3C1} "+Is(u):d?'<span class="auto">\u{1F916}</span>':`<span class="small">${Math.max(1,Math.min(e.laps,l+1))}/${e.laps}</span>`}</div>`:""}).join("");else if(n.lobby){let c=n.lobby.players||[];a=`<div class="lb" style="background:rgba(255,45,85,.5)">\u{1F465} \u0412 \u043B\u043E\u0431\u0431\u0438: ${c.length}</div>`+c.slice(0,14).map(l=>`<div class="lb"><span class="c" style="background:${Ot(l.paint).color}"></span><span class="n">${fe(l.name)}</span>${l.ticket?"":'<span class="small">\u0431\u0435\u0437 \u{1F94A}</span>'}</div>`).join("")}i._h!==a&&(i.innerHTML=a,i._h=a);let o="";e&&n.phase==="race"?o=`<span class="hudchip">\u23F1 ${Is(Math.max(0,t))} \xB7 ${e.laps} ${Ml(e.laps,"\u043A\u0440\u0443\u0433","\u043A\u0440\u0443\u0433\u0430","\u043A\u0440\u0443\u0433\u043E\u0432")}</span>`:n.phase==="lobby"&&(o=`<span class="hudchip">${fe(Tn[n.lobby?.loc||"city"].icon+" "+Tn[n.lobby?.loc||"city"].title)} \xB7 \u0436\u0434\u0451\u043C \u0441\u0442\u0430\u0440\u0442</span>`),s._h!==o&&(s.innerHTML=o,s._h=o)}render(){let e=this.el&&Me("#opBody",this.el);if(!e)return;let t=this.st;if(!t){e.innerHTML='<div class="small">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>';return}({race:this.tabRace,players:this.tabPlayers,gifts:this.tabGifts,top:this.tabTop,live:this.tabLive}[this.tab]||this.tabRace).call(this,e,t)}tabRace(e,t){let n=this.app,i=t.settings,s=n.race,a=["intro","countdown","race"].includes(t.phase);e.innerHTML=`
      <div class="opsec"><h3>\u041B\u043E\u043A\u0430\u0446\u0438\u044F</h3><div class="locs">${Object.values(Tn).map(f=>`<button class="loc ${i.location===f.id?"on":""}" data-loc="${f.id}" ${a?"disabled":""}><span class="i">${f.icon}</span>${fe(f.name)}</button>`).join("")}</div></div>
      <div class="opsec"><h3>\u041A\u0440\u0443\u0433\u043E\u0432: <b id="lapsv">${i.laps}</b></h3><input class="slider" type="range" min="1" max="10" step="1" value="${i.laps}" id="laps">
        <h3 style="margin-top:10px">\u0411\u043E\u0442\u044B: <b id="botsv">${i.bots}</b></h3><input class="slider" type="range" min="0" max="8" step="1" value="${i.bots}" id="bots"></div>
      <div class="opsec col">
        <div class="opstat"><span class="chip">${fe(nM(t.phase))}</span><span class="chip">\u{1F465} ${t.players.filter(f=>f.online).length} \u043E\u043D\u043B\u0430\u0439\u043D</span><span class="chip">\u{1F94A} ${t.players.filter(f=>f.ticket&&f.online).length} \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C</span></div>
        ${a?'<button class="btn danger" id="end">\u23F9 \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0433\u043E\u043D\u043A\u0443</button>':'<button class="btn primary" id="start">\u25B6 \u0421\u0422\u0410\u0420\u0422 \u0413\u041E\u041D\u041A\u0418</button>'}
        ${t.phase==="results"?'<button class="btn" id="lobby">\u21A9 \u0412 \u043B\u043E\u0431\u0431\u0438</button>':""}
      </div>
      <div class="opsec"><h3>\u041A\u0430\u043C\u0435\u0440\u0430</h3><div class="row" style="flex-wrap:wrap;gap:6px">
        <button class="btn small ${s&&s.camMode==="director"?"gold":""}" data-cam="director">\u{1F3AC} \u0410\u0432\u0442\u043E-\u0440\u0435\u0436\u0438\u0441\u0441\u0451\u0440</button>
        <button class="btn small" data-cam="leader">\u{1F947} \u041B\u0438\u0434\u0435\u0440</button>
        <button class="btn small ${s&&s.camMode==="free"?"gold":""}" data-cam="free">\u{1F54A}\uFE0F \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u043F\u043E\u043B\u0451\u0442</button></div>
        ${this.camList(s)}
        <div class="small" style="margin-top:6px">\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: W A S D, \u043C\u044B\u0448\u044C (\u0437\u0430\u0436\u0430\u0442\u044C), Q/E \u2014 \u0432\u043D\u0438\u0437/\u0432\u0432\u0435\u0440\u0445, Shift \u2014 \u0431\u044B\u0441\u0442\u0440\u0435\u0435, \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C. \u041D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u2014 \u0442\u044F\u043D\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C.</div></div>`,e.querySelectorAll("[data-loc]").forEach(f=>f.onclick=()=>this.op("setup",{loc:f.dataset.loc}));let o=Me("#laps",e),c=Me("#bots",e);o.oninput=()=>Me("#lapsv",e).textContent=o.value,o.onchange=()=>this.op("setup",{laps:+o.value}),c.oninput=()=>Me("#botsv",e).textContent=c.value,c.onchange=()=>this.op("setup",{bots:+c.value});let l=Me("#start",e);l&&(l.onclick=()=>this.op("start"));let h=Me("#end",e);h&&(h.onclick=()=>{confirm("\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0433\u043E\u043D\u043A\u0443 \u0441\u0435\u0439\u0447\u0430\u0441? \u0418\u0442\u043E\u0433\u0438 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C.")&&this.op("end")});let u=Me("#lobby",e);u&&(u.onclick=()=>this.op("lobby")),e.querySelectorAll("[data-cam]").forEach(f=>f.onclick=()=>{let m=this.app.race;if(!m)return yt("\u041A\u0430\u043C\u0435\u0440\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u043D\u043A\u0438");let b=f.dataset.cam;b==="leader"?m.setCamera("follow",m.rank.length?m.rank[0][0]:null):m.setCamera(b),this.render()}),e.querySelectorAll("[data-follow]").forEach(f=>f.onclick=()=>{let m=this.app.race;m&&(m.setCamera("follow",+f.dataset.follow),this.render())});let d=Me("#camQ",e);if(d){let f=()=>{this.camQ=d.value;let m=d.value.trim().toLowerCase().replace(/^@/,"");e.querySelectorAll("[data-follow]").forEach(b=>{b.style.display=!m||b.dataset.name.includes(m)?"":"none"})};d.oninput=f,d.onfocus=()=>this.editing=!0,d.onblur=()=>this.editing=!1,f()}}camList(e){if(!e)return'<div class="small" style="margin-top:8px">\u{1F4F7} \u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u043D\u043A\u0438 \u0437\u0434\u0435\u0441\u044C \u0432\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u043F\u043E \u043D\u0438\u043A\u0430\u043C \u2014 \u043D\u0430\u0436\u043C\u0438 \u043D\u0438\u043A, \u0438 \u043A\u0430\u043C\u0435\u0440\u0430 \u043F\u043E\u0435\u0434\u0435\u0442 \u0437\u0430 \u0435\u0433\u043E \u043C\u0430\u0448\u0438\u043D\u043E\u0439.</div>';let t=[...e.entries.values()].sort((i,s)=>(i.pos||99)-(s.pos||99)),n=e.camMode==="follow"||e.camMode==="director"?e.follow:null;return`<div class="small" style="margin:8px 0 4px">\u{1F4F7} \u041A\u0430\u043C\u0435\u0440\u0430 \u043D\u0430 \u0438\u0433\u0440\u043E\u043A\u0435 \u2014 \u043D\u0430\u0436\u043C\u0438 \u043D\u0438\u043A (\u0432 \u0433\u043E\u043D\u043A\u0435 ${t.length}):</div>
      ${t.length>6?`<input class="field" id="camQ" placeholder="\u{1F50D} \u041D\u0430\u0439\u0442\u0438 \u043D\u0438\u043A\u2026" value="${fe(this.camQ||"")}" autocomplete="off" spellcheck="false" style="margin-bottom:6px">`:""}
      <div class="col camlist" style="gap:4px">${t.map(i=>`<button class="oprow ${i.slot===n?"camon":""}" data-follow="${i.slot}" data-name="${fe(String(i.name).toLowerCase())}" style="border:0;color:inherit;text-align:left"><b style="width:22px;text-align:center">${i.pos||"\u2014"}</b><span class="car" style="background:${Ot(i.paint).color}"></span><span class="nm">${fe(i.name)}${i.bot?" \u{1F916}":""}</span><span class="small">${i.finished?"\u{1F3C1}":i.dnf?"\u{1F4A5}":i.slot===n?"\u{1F4F7}":""}</span></button>`).join("")}</div>
      <div class="small" style="margin-top:6px">\u041A\u043B\u0430\u0432\u0438\u0448\u0438 (\u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0438 \u0441\u043E \u0441\u043A\u0440\u044B\u0442\u043E\u0439 \u043F\u0430\u043D\u0435\u043B\u044C\u044E): Tab / \u2192 \u2014 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430, \u2190 \u2014 \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F, 1\u20139 \u2014 \u043C\u0430\u0448\u0438\u043D\u0430 \u043D\u0430 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u0442\u0435, 0 \u2014 \u0430\u0432\u0442\u043E-\u0440\u0435\u0436\u0438\u0441\u0441\u0451\u0440, L \u2014 \u043B\u0438\u0434\u0435\u0440.</div>`}camKeys(e){let t=this.app.race;if(!t||!this.el||e.target&&e.target.closest&&e.target.closest("input,textarea,select"))return;let n=[...t.entries.values()].sort((a,o)=>(a.pos||99)-(o.pos||99));if(!n.length)return;let i=a=>{t.setCamera("follow",a),this.tab==="race"&&this.render(),e.preventDefault()};if(t.camMode==="free"&&!/^Digit|^Tab$|^KeyL$/.test(e.code))return;let s=n.findIndex(a=>a.slot===t.follow);if(e.code==="Tab"||e.code==="ArrowRight")i(n[(s+(e.shiftKey?-1:1)+n.length)%n.length].slot);else if(e.code==="ArrowLeft")i(n[(s-1+n.length)%n.length].slot);else if(/^Digit[1-9]$/.test(e.code)){let a=n[+e.code.slice(5)-1];a&&i(a.slot)}else e.code==="Digit0"?(t.setCamera("director"),this.tab==="race"&&this.render()):e.code==="KeyL"&&i(n[0].slot)}tabPlayers(e,t){let n=[...t.players].sort((i,s)=>s.online-i.online||s.join-i.join);e.innerHTML=`<div class="opsec"><h3>\u0418\u0433\u0440\u043E\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 (${n.filter(i=>i.online).length})</h3><div class="col" style="gap:4px">${n.map(i=>`<div class="oprow"><img class="av" src="${fe(jn(i.avatar)||"icon.svg")}" alt=""><span class="car" style="background:${Ot(i.paint).color}"></span><span class="nm">${fe(i.name)} <span class="small">@${fe(i.uid)}</span></span>
      <span class="small">${i.online?"\u{1F7E2}":"\u26AA"}${i.ticket?" \u{1F94A}":""}${i.entry!=null?" \u{1F3C1}":""}${i.gifts?" \u{1FA99}"+i.gifts:""}</span>
      ${i.ticket?"":`<button class="mini" data-grant="${fe(i.uid)}" title="\u041F\u0443\u0441\u0442\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430">\u041F\u0443\u0441\u0442\u0438\u0442\u044C</button>`}
      <button class="mini" data-kick="${fe(i.uid)}">\u041A\u0438\u043A</button><button class="mini red" data-ban="${fe(i.uid)}">${i.banned?"\u0420\u0430\u0437\u0431\u0430\u043D":"\u0411\u0430\u043D"}</button></div>`).join("")||'<div class="small">\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u0430\u0448\u0451\u043B \u043D\u0430 \u0441\u0430\u0439\u0442.</div>'}</div></div>
      <div class="opsec"><h3>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u0438\u044F, \u043D\u043E \u043D\u0435 \u0437\u0430\u0448\u043B\u0438 (${t.buyers.length})</h3><div class="col" style="gap:4px">${t.buyers.map(i=>`<div class="oprow"><img class="av" src="${fe(jn(i.avatar)||"icon.svg")}" alt=""><span class="nm">${fe(i.name)} <span class="small">@${fe(i.uid)}</span></span><span class="small">\u{1F94A}\xD7${i.join}</span></div>`).join("")||'<div class="small">\u2014</div>'}</div></div>`,e.querySelectorAll("[data-grant]").forEach(i=>i.onclick=()=>this.op("grant",{uid:i.dataset.grant})),e.querySelectorAll("[data-kick]").forEach(i=>i.onclick=()=>this.op("kick",{uid:i.dataset.kick})),e.querySelectorAll("[data-ban]").forEach(i=>i.onclick=()=>{let s=t.players.find(a=>a.uid===i.dataset.ban);this.op(s&&s.banned?"unban":"ban",{uid:i.dataset.ban})})}tabTop(e){let t=this.app.daily,n=this.app.lastResults;e.innerHTML=`${n?`<div class="opsec"><h3>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0433\u043E\u043D\u043A\u0430</h3><div class="restable">${n.list.map(i=>`<div class="resrow"><span class="pos p${i.pos}">${i.pos}</span><span class="c" style="background:${Ot(i.paint).color}"></span><span>${fe(i.name)}${i.bot?" \u{1F916}":""}</span><span class="small">${i.finished?Is(i.time):"\u2014"}</span><span class="pts">${i.points?"+"+i.points:""}</span></div>`).join("")}</div></div>`:""}
      <div class="opsec"><h3>\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F ${t?"\xB7 \u0433\u043E\u043D\u043E\u043A "+t.races:""}</h3><div class="col" style="gap:4px">${t&&t.list.length?t.list.map((i,s)=>`<div class="oprow"><span class="pos p${s+1}">${s+1}</span><img class="av" src="${fe(jn(i.avatar)||"icon.svg")}" alt=""><span class="nm">${fe(i.name)}</span><span class="small">\u{1F3C6}${i.wins} \xB7 ${i.races} \u0433\u043E\u043D.</span><span class="pts">${i.points}</span></div>`).join(""):'<div class="small">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E.</div>'}</div>
      <button class="btn small danger" id="resetDay" style="margin-top:10px">\u041E\u0431\u043D\u0443\u043B\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F</button></div>`,Me("#resetDay",e).onclick=()=>{confirm("\u0422\u043E\u0447\u043D\u043E \u043E\u0431\u043D\u0443\u043B\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F?")&&this.op("resetDay")}}tabLive(e,t){let n=t.settings,i=t.tiktok,s=t.site&&t.hostKey&&n.hostUser?t.site+"?h="+encodeURIComponent(n.hostUser):t.site&&t.hostKey?t.site:t.url||t.site||location.origin;e.innerHTML=`
      <div class="opsec col"><h3>\u042D\u0444\u0438\u0440 TikTok</h3>
        <div class="row"><input class="field" id="hostUser" placeholder="\u0422\u0432\u043E\u0439 \u043D\u0438\u043A TikTok" value="${fe(n.hostUser||"")}" autocapitalize="off" spellcheck="false"><button class="btn" id="conn">\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button></div>
        <div class="small">${i.state==="connected"?"\u{1F7E2} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: "+fe(i.message)+" \xB7 \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439 "+(t.viewers||0):"\u26AA "+fe(i.message||i.state)}</div>
        ${i.state!=="idle"?'<button class="btn small ghost" id="disc">\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button>':""}</div>
      <div class="opsec col"><h3>\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439</h3><div class="urlbox">${fe(s)}</div>
        <div class="small">${t.tunnel?fe(t.tunnel):""}</div>${t.url&&t.url!==s?'<div class="small">\u041F\u0440\u044F\u043C\u0430\u044F \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u044D\u0442\u043E\u0442 \u041F\u041A: '+fe(t.url)+"</div>":""}<button class="btn small" id="copy">\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div>
      <div class="opsec col"><h3>\u041A\u043B\u044E\u0447 \u0445\u043E\u0441\u0442\u0430</h3>
        <div class="small">${t.hostKey?"\u2705 \u041A\u043B\u044E\u0447 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043B\u0435\u043D \u2014 \u0441\u0430\u0439\u0442 \u043D\u0430\u0445\u043E\u0434\u0438\u0442 \u044D\u0442\u043E\u0442 \u041F\u041A \u0438\u0437 \u043B\u044E\u0431\u043E\u0439 \u0442\u043E\u0447\u043A\u0438 \u043C\u0438\u0440\u0430":"\u26A0\uFE0F \u041A\u043B\u044E\u0447\u0430 \u043D\u0435\u0442 \u2014 \u0438\u0433\u0440\u043E\u043A\u0438 \u0441 \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0443\u0442 \u044D\u0442\u043E\u0442 \u041F\u041A. \u041A\u043B\u044E\u0447 \u0434\u0430\u0451\u0442 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0438\u0433\u0440\u044B (\u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 NL1.)"}</div>
        <div class="row"><input class="field" type="password" id="hkey" placeholder="NL1.\u2026" autocomplete="off" spellcheck="false"><button class="btn small" id="hkSet">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C</button></div></div>
      <div class="opsec"><h3>\u041F\u0440\u0430\u0432\u0438\u043B\u0430</h3>
        <label class="switch">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044C \u043D\u0438\u043A \u043A\u043E\u0434\u043E\u043C \u0432 \u0447\u0430\u0442\u0435 (\u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0447\u0443\u0436\u0438\u0445 \u043D\u0438\u043A\u043E\u0432) <input type="checkbox" id="verifyChat" ${n.verifyChat?"checked":""}></label>
        <label class="switch">\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u2014 \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u0444\u0438\u0440 (\u0438\u043D\u0430\u0447\u0435 \u043D\u0430 \u043E\u0434\u043D\u0443 \u0433\u043E\u043D\u043A\u0443) <input type="checkbox" id="tmode" ${n.ticketMode==="live"?"checked":""}></label>
        <label class="switch">\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u0445\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 (\u0442\u0435\u0441\u0442) <input type="checkbox" id="free" ${n.free?"checked":""}></label>
        <label class="switch">\u0410\u0432\u0442\u043E-\u0441\u0442\u0430\u0440\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043E\u043D\u043A\u0438, \u0441\u0435\u043A (0 = \u0432\u044B\u043A\u043B.) <input type="number" class="field" id="autoNext" min="0" max="300" value="${n.autoNext||0}" style="width:90px;padding:8px"></label>
        <label class="small">\u041E\u0447\u043A\u0438 \u0437\u0430 \u043C\u0435\u0441\u0442\u0430 (\u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E)</label><input class="field" id="points" value="${fe((n.points||[]).join(", "))}"></div>
      <div class="opsec col"><h3>\u041F\u0430\u0440\u043E\u043B\u044C \u0445\u043E\u0441\u0442\u0430</h3><input class="field" type="password" id="pOld" placeholder="\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" autocomplete="off"><input class="field" type="password" id="pNew" placeholder="\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" autocomplete="off"><button class="btn small" id="pSet">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</button></div>
      <div class="opsec col"><h3>\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 TikTok (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</h3><input class="field" id="euler" placeholder="Euler Stream API key (\u0435\u0441\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \xAB\u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\xBB)" value="${fe(n.eulerApiKey)}"><button class="btn small" id="eSet">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043B\u044E\u0447</button></div>
      <button class="btn ghost" id="logout">\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043C\u0430 \u0445\u043E\u0441\u0442\u0430</button>
      <div class="small" style="margin-top:8px">\u0412\u0435\u0440\u0441\u0438\u044F ${fe(t.version||"")}</div>`,Me("#conn",e).onclick=()=>this.op("connect",{user:Me("#hostUser",e).value});let a=Me("#disc",e);a&&(a.onclick=()=>this.op("disconnect")),Me("#copy",e).onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(s).then(()=>yt("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430"))},Me("#hkSet",e).onclick=()=>{let o=Me("#hkey",e).value.trim();o&&this.op("hostkey",{key:o}),Me("#hkey",e).value=""},Me("#verifyChat",e).onchange=o=>this.op("settings",{verifyChat:o.target.checked}),Me("#tmode",e).onchange=o=>this.op("settings",{ticketMode:o.target.checked?"live":"race"}),Me("#free",e).onchange=o=>this.op("settings",{free:o.target.checked}),Me("#autoNext",e).onchange=o=>this.op("settings",{autoNext:+o.target.value}),Me("#points",e).onchange=o=>this.op("settings",{points:o.target.value.split(/[,\s]+/).map(Number).filter(c=>c>=0)}),Me("#pSet",e).onclick=()=>this.op("password",{old:Me("#pOld",e).value,new:Me("#pNew",e).value}),Me("#eSet",e).onclick=()=>this.op("settings",{eulerApiKey:Me("#euler",e).value.trim()}),Me("#logout",e).onclick=()=>this.app.opLogout()}tabGifts(e){let t=this.giftRows();e.innerHTML=`<div class="small" style="margin-bottom:8px">\u041D\u0430\u0436\u043C\u0438 \xAB\u041F\u043E\u0434\u0430\u0440\u043E\u043A\xBB, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A TikTok. \u0427\u0438\u0441\u043B\u0430: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u043D\u0443\u0436\u043D\u043E (\xD7) \u0438 \u0441\u0438\u043B\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u0430. \u0421\u0442\u0440\u043E\u043A\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439 \u0437\u0430 \u283F \u2014 \u0432 \u0442\u0430\u043A\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u043D\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0432 \u044D\u0444\u0438\u0440\u0435.</div>
      <div class="row" style="margin-bottom:8px"><button class="btn small" id="sortPrice">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u043E \u0446\u0435\u043D\u0435</button><button class="btn small ghost" id="resetAll">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0451</button></div>
      <div id="cfg">${t.map(i=>this.cfgRow(i)).join("")}</div>`,Me("#resetAll",e).onclick=()=>{confirm("\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0438 \u0447\u0438\u0441\u043B\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E?")&&this.op("gifts",{gifts:{},order:[]})},Me("#sortPrice",e).onclick=()=>{let i=a=>(a.gift&&a.gift.coins?a.gift.coins:1e9)*(a.count||1),s=this.giftRows().sort((a,o)=>(o.a.id==="join")-(a.a.id==="join")||i(a)-i(o)).map(a=>a.a.id);this.st.order=s,this.op("gifts",{gifts:this.st.gifts||{},order:s}),yt("\u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u044B \u043F\u043E \u0446\u0435\u043D\u0435")};let n=Me("#cfg",e);n.querySelectorAll(".cfgrow").forEach(i=>this.wireRow(i,t.find(s=>s.a.id===i.dataset.id))),this.wireDrag(n)}cfgRow(e){let t=e.a.param;return`<div class="cfgrow ${e.off?"off":""}" data-id="${e.a.id}">
      <span class="drag">\u283F</span><img class="giftimg" src="${fe(Tl(e.gift))}" alt="">
      <div class="info"><b>${fe(e.a.icon)} ${fe(e.a.id==="join"?e.a.title:od(e.a,e.value))}</b><span>${e.gift?fe(ld(e.gift)):"\u0431\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u2014 \u043D\u0435 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442"}</span></div>
      <div class="ctrls">
        <button class="mini" data-pick>\u{1F381} \u041F\u043E\u0434\u0430\u0440\u043E\u043A</button>
        ${e.a.id==="join"?"":`<span class="num"><button data-cd>\u2212</button><input data-count value="${e.count}" inputmode="numeric"><button data-ci>+</button><small>\u0448\u0442.</small></span>`}
        ${t?`<span class="num"><button data-vd>\u2212</button><input data-val value="${e.value}" inputmode="decimal"><button data-vi>+</button><small>${fe(t.label)}</small></span>`:""}
        ${e.a.id==="join"?"":'<button class="mini" data-test>\u0422\u0435\u0441\u0442</button>'}
        <label class="small" style="display:flex;align-items:center;gap:4px"><input type="checkbox" data-on ${e.off?"":"checked"}>\u0432\u043A\u043B</label>
      </div></div>`}sendCfg(e){let t=this.st,n=JSON.parse(JSON.stringify(t.gifts||{}));e(n);let i=t.order&&t.order.length?t.order:Hr.map(s=>s.id);t.gifts=n,this.op("gifts",{gifts:n,order:i})}wireRow(e,t){let n=t.a.id,i=t.a.param,s=(l,h)=>this.sendCfg(u=>{u[n]={...u[n]||{},[l]:h}});e.querySelector("[data-pick]").onclick=()=>this.picker(t);let a=e.querySelector("[data-count]");if(a){let l=h=>{h=Math.max(1,Math.min(9999,Math.round(h)||1)),a.value=h,s("count",h)};e.querySelector("[data-cd]").onclick=()=>l(+a.value-1),e.querySelector("[data-ci]").onclick=()=>l(+a.value+1),a.onfocus=()=>this.editing=!0,a.onblur=()=>{this.editing=!1,l(+a.value)}}let o=e.querySelector("[data-val]");if(o&&i){let l=h=>{h=Math.max(i.min,Math.min(i.max,Math.round(h/i.step)*i.step)),o.value=+h.toFixed(2),s("value",+h.toFixed(2))};e.querySelector("[data-vd]").onclick=()=>l(+o.value-i.step),e.querySelector("[data-vi]").onclick=()=>l(+o.value+i.step),o.onfocus=()=>this.editing=!0,o.onblur=()=>{this.editing=!1,l(+o.value)}}let c=e.querySelector("[data-test]");c&&(c.onclick=()=>{this.op("test",{action:n}),yt("\u0422\u0435\u0441\u0442: "+t.a.title)}),e.querySelector("[data-on]").onchange=l=>s("off",!l.target.checked)}wireDrag(e){e.querySelectorAll(".drag").forEach(t=>{t.addEventListener("pointerdown",n=>{n.preventDefault();let i=t.closest(".cfgrow");this.dragging=!0,i.classList.add("dragging"),t.setPointerCapture(n.pointerId);let s=o=>{let l=[...e.children].filter(u=>u!==i).find(u=>{let d=u.getBoundingClientRect();return o.clientY<d.top+d.height/2});e.insertBefore(i,l||null);let h=e.closest(".scroll");if(h){let u=h.getBoundingClientRect();o.clientY<u.top+30&&(h.scrollTop-=12),o.clientY>u.bottom-30&&(h.scrollTop+=12)}},a=()=>{t.removeEventListener("pointermove",s),t.removeEventListener("pointerup",a),t.removeEventListener("pointercancel",a),i.classList.remove("dragging"),this.dragging=!1;let o=[...e.children].map(c=>c.dataset.id);this.st.order=o,this.op("gifts",{gifts:this.st.gifts||{},order:o}),this.renderGiftsOverlay()};t.addEventListener("pointermove",s),t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)})})}async picker(e){let t=Sn(`<div class="picker"><div class="pk-box">
      <div class="row" style="justify-content:space-between"><b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0434\u043B\u044F \xAB${fe(e.a.title)}\xBB</b><button class="iconbtn" id="x">\u2715</button></div>
      <input class="field" id="q" placeholder="\u041F\u043E\u0438\u0441\u043A: \u0440\u043E\u0437\u0430, \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438, Rose\u2026 \u0438\u043B\u0438 \u0446\u0435\u043D\u0430 (99)" autocomplete="off">
      <div class="row"><button class="btn small" id="def">\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E (${fe(e.a.gift.name)})</button><button class="btn small ghost" id="none">\u0411\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430</button></div>
      <div class="pk-grid scroll" id="grid"><div class="small">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430\u2026</div></div><div class="small" id="info"></div></div></div>`);document.body.appendChild(t);let n=()=>t.remove();Me("#x",t).onclick=n,t.addEventListener("pointerdown",h=>{h.target===t&&n()});let i=h=>{this.sendCfg(u=>{let d={...u[e.a.id]||{}};if(delete d.none,delete d.gift,h==="none"?d.none=!0:h&&(d.gift=h),u[e.a.id]=d,h&&h!=="none")for(let[f,m]of Object.entries(u))f!==e.a.id&&m.gift&&(m.gift.ids||[]).some(b=>h.ids.includes(b))&&(delete m.gift,m.none=!0)}),n()};Me("#def",t).onclick=()=>i(null),Me("#none",t).onclick=()=>i("none");let s=await Gr(),a=Me("#grid",t),o=Me("#q",t),c=Me("#info",t),l=()=>{let h=o.value.trim(),u=El(h),d=s;if(/^\d+$/.test(h))d=s.filter(f=>String(f.coins)===h||f.ids.includes(+h));else if(u){let f=h.toLowerCase().split(/\s+/).map(El).filter(Boolean);d=s.filter(m=>f.every(b=>m.key.includes(b)))}a.innerHTML=d.slice(0,240).map(f=>`<button class="pk-tile" data-i="${s.indexOf(f)}"><img src="${fe(f.img)}" alt="" loading="lazy"><span>${fe(f.ru||f.name)}</span><i>\u{1FA99} ${f.coins}</i></button>`).join("")||'<div class="small">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</div>',c.textContent=`\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ${d.length}`,a.querySelectorAll("[data-i]").forEach(f=>f.onclick=()=>{let m=s[+f.dataset.i];i({ids:m.ids.slice(),name:m.name,ru:m.ru,img:m.img})})};o.addEventListener("input",l),l(),o.focus()}};function nM(r){return{lobby:"\u23F3 \u041B\u043E\u0431\u0431\u0438",intro:"\u{1F3AC} \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435",countdown:"\u{1F6A6} \u041E\u0442\u0441\u0447\u0451\u0442",race:"\u{1F3C1} \u0413\u043E\u043D\u043A\u0430 \u0438\u0434\u0451\u0442",results:"\u{1F3C6} \u0418\u0442\u043E\u0433\u0438"}[r]||r}var iM=`<svg class="wcar" viewBox="0 0 320 150" aria-hidden="true">
  <defs>
    <linearGradient id="wb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ff3d62"/><stop offset=".55" stop-color="#b0102e"/><stop offset="1" stop-color="#4a0414"/></linearGradient>
    <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd8ff" stop-opacity=".55"/><stop offset="1" stop-color="#0b1830" stop-opacity=".95"/></linearGradient>
    <radialGradient id="wl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#fff"/><stop offset=".25" stop-color="#ff4060"/><stop offset="1" stop-color="#ff0030" stop-opacity="0"/></radialGradient>
  </defs>
  <ellipse cx="160" cy="138" rx="150" ry="10" fill="#000" opacity=".55"/>
  <path d="M60 38 Q70 18 110 14 L210 14 Q250 18 260 38 L268 60 L52 60 Z" fill="url(#wg)" stroke="#2a0a14" stroke-width="3"/>
  <path d="M22 70 Q30 56 56 54 L264 54 Q290 56 298 70 L304 112 Q304 124 290 124 L30 124 Q16 124 16 112 Z" fill="url(#wb)"/>
  <path d="M40 66 L280 66" stroke="#ff8aa0" stroke-width="2" opacity=".6"/>
  <rect x="34" y="74" width="74" height="14" rx="6" fill="#ff1040"/><rect x="212" y="74" width="74" height="14" rx="6" fill="#ff1040"/>
  <rect x="108" y="78" width="104" height="6" rx="3" fill="#ff1040" opacity=".85"/>
  <circle class="wglow" cx="70" cy="81" r="46" fill="url(#wl)"/><circle class="wglow" cx="250" cy="81" r="46" fill="url(#wl)"/>
  <rect x="120" y="96" width="80" height="18" rx="3" fill="#f2f2f2"/><text x="160" y="110" text-anchor="middle" font-family="Russo One, sans-serif" font-size="12" fill="#111">NITRO</text>
  <rect x="26" y="112" width="40" height="30" rx="7" fill="#0b0b0e"/><rect x="254" y="112" width="40" height="30" rx="7" fill="#0b0b0e"/>
  <rect x="96" y="118" width="18" height="8" rx="4" fill="#3a3a44"/><rect x="206" y="118" width="18" height="8" rx="4" fill="#3a3a44"/>
  <path d="M250 12 L300 8 L300 18 L250 20 Z" fill="#1a0610"/><rect x="262" y="18" width="6" height="18" fill="#1a0610"/>
</svg>`,sM=`<svg class="wsky" viewBox="0 0 800 120" preserveAspectRatio="none" aria-hidden="true">
  <path d="M0 120 L0 70 L30 70 L30 40 L60 40 L60 75 L85 75 L85 25 L110 25 L110 60 L140 60 L140 10 L165 10 L165 55 L200 55 L200 80 L230 80 L230 35 L260 35 L260 65 L300 65 L300 20 L318 12 L336 20 L336 70 L370 70 L370 45 L400 45 L400 85 L430 85 L430 30 L470 30 L470 60 L500 60 L500 15 L525 15 L525 70 L560 70 L560 40 L600 40 L600 78 L630 78 L630 22 L660 22 L660 55 L700 55 L700 35 L730 35 L730 72 L770 72 L770 50 L800 50 L800 120 Z" fill="#0c0a1c"/>
  <g fill="#ffcc66" opacity=".55">${Array.from({length:70},(r,e)=>{let t=e*97%780+10,n=30+e*53%70;return`<rect x="${t}" y="${n}" width="3" height="4"/>`}).join("")}</g>
</svg>`,Rl=class{constructor(){this.el=null,this.tries=0}show({host:e="",onRetry:t=null}={}){if(this.tries++,this.el){this.status();return}let i=Hr.filter(a=>a.id!=="join").map(a=>`<span>${fe(a.icon)} ${fe(a.title)}</span>`).join(""),s=this.el=document.createElement("div");s.id="waiting",s.innerHTML=`
      <div class="wstars"></div>
      <div class="wscene">${sM}<div class="wsun"></div>
        <div class="wroadwrap"><div class="wroad"><div class="wlines"></div><div class="wrail l"></div><div class="wrail r"></div></div></div>
        <div class="wcarbox">${iM}<i class="wflame a"></i><i class="wflame b"></i></div>
      </div>
      <div class="wcontent">
        <div class="logo">NITRO<span>LIVE</span></div>
        <div class="wcard">
          <div class="wtitle">\u0413\u043E\u043D\u043A\u0430 \u0441\u043A\u043E\u0440\u043E \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F</div>
          <div class="wsub">${e?`\u0416\u0434\u0451\u043C, \u043A\u043E\u0433\u0434\u0430 <b>@${fe(e)}</b> \u0432\u043A\u043B\u044E\u0447\u0438\u0442 \u0438\u0433\u0440\u0443 \u0432 \u044D\u0444\u0438\u0440\u0435`:"\u0425\u043E\u0441\u0442 \u0435\u0449\u0451 \u043D\u0435 \u0432\u043A\u043B\u044E\u0447\u0438\u043B \u0438\u0433\u0440\u0443 \u2014 \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u044D\u0444\u0438\u0440 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F, \u0432\u0441\u0451 \u043E\u0442\u043A\u0440\u043E\u0435\u0442\u0441\u044F \u0441\u0430\u043C\u043E"}</div>
          <div class="wstatus"><i class="wdot"></i><span id="wstat">\u0418\u0449\u0443 \u0438\u0433\u0440\u0443\u2026</span></div>
          <div class="wsteps">
            <div class="wstep"><b>1</b><span>\u0417\u0430\u0439\u0434\u0438 \u043D\u0430 \u044D\u0444\u0438\u0440 \u0445\u043E\u0441\u0442\u0430 \u0432 TikTok</span></div>
            <div class="wstep"><b>2</b><span>\u041E\u0442\u043F\u0440\u0430\u0432\u044C <img src="assets/giftcat/g6007.webp" alt=""> \xAB\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438\xBB \u2014 \u044D\u0442\u043E \u0432\u0445\u043E\u0434 \u0432 \u0433\u043E\u043D\u043A\u0443</span></div>
            <div class="wstep"><b>3</b><span>\u0412\u043F\u0438\u0448\u0438 \u0437\u0434\u0435\u0441\u044C \u0441\u0432\u043E\u0439 \u043D\u0438\u043A TikTok \u2014 \u0438 \u043D\u0430 \u0441\u0442\u0430\u0440\u0442!</span></div>
          </div>
          <button class="btn primary wbtn" id="wretry">\u041F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0441\u0435\u0439\u0447\u0430\u0441</button>
        </div>
        <div class="wtick"><div class="wtrack">${i}${i}</div></div>
        <div class="small wfoot">\u041F\u043E\u0434\u0430\u0440\u043A\u0438 \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u043D\u043A\u0438 \u0443\u0441\u043A\u043E\u0440\u044F\u044E\u0442 \u0442\u0435\u0431\u044F \u0438 \u043C\u0435\u0448\u0430\u044E\u0442 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430\u043C</div>
      </div>`,document.body.appendChild(s),s.querySelector("#wretry").onclick=()=>{this.flash("\u041F\u0440\u043E\u0432\u0435\u0440\u044F\u044E\u2026"),t&&t()},requestAnimationFrame(()=>s.classList.add("on")),this.status()}status(){let e=this.el&&this.el.querySelector("#wstat");e&&(e.textContent=this.tries>1?`\u0425\u043E\u0441\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438 \xB7 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u043A\u0430\u0436\u0434\u044B\u0435 5 \u0441\u0435\u043A\u0443\u043D\u0434 (${this.tries})`:"\u0425\u043E\u0441\u0442 \u043F\u043E\u043A\u0430 \u043D\u0435 \u0432 \u0441\u0435\u0442\u0438 \xB7 \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u044E \u043A\u0430\u0436\u0434\u044B\u0435 5 \u0441\u0435\u043A\u0443\u043D\u0434")}flash(e){let t=this.el&&this.el.querySelector("#wstat");t&&(t.textContent=e)}hide(){let e=this.el;e&&(this.el=null,this.tries=0,e.classList.remove("on"),e.classList.add("off"),setTimeout(()=>e.remove(),700))}};var ui=null,Ym=null,Vr=new Set((globalThis.process&&process.env.VEH_NO||"").split(",")),$m=()=>Ym||(Ym=import("./c-QBO2FJDF.js").then(async r=>{ui=r.default,await ui.init()})),Jm={city:{name:"Nissan GT-R R35",mass:1780,comY:.36,cdA:.58,rr:.012,downforce:.9,torque:[[900,330],[2e3,520],[3300,633],[5800,633],[6800,590],[7100,520]],idle:900,redline:7100,gears:[4.056,2.301,1.595,1.248,1.001,.796],final:3.7,shift:.09,eff:.88,front:.4,mu:1.18,muOff:.7,side:1.25,restLen:.22,travel:.12,stiff:42,damp:3.2,comp:2.2,steerLo:.56,steerHi:.06,brakeG:1.25,vmax:87.5,revVmax:9},snow:{name:"Subaru Impreza WRC",mass:1350,comY:.34,cdA:.72,rr:.02,downforce:.5,torque:[[1e3,260],[2e3,460],[3e3,650],[4e3,520],[5e3,430],[5500,390],[6800,300]],idle:1e3,redline:6800,gears:[3.3,2.3,1.8,1.45,1.2,1],final:4.12,shift:.06,eff:.86,front:.5,mu:.62,muOff:.42,side:.9,restLen:.26,travel:.16,stiff:30,damp:2.8,comp:2,steerLo:.62,steerHi:.12,brakeG:.62,vmax:57,revVmax:9},offroad:{name:"GMC Sierra 1500 AT4X",mass:2580,comY:.62,cdA:1.45,rr:.02,downforce:.3,torque:[[700,360],[2e3,520],[4100,624],[5e3,600],[5600,555],[6e3,500]],idle:700,redline:6e3,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],final:3.23,shift:.22,eff:.84,front:.4,mu:.82,muOff:.66,side:1,restLen:.34,travel:.26,stiff:22,damp:2.4,comp:1.8,steerLo:.6,steerHi:.14,brakeG:.9,vmax:50,revVmax:8}},rM=1.225,Li=9.81,aM=(r,e)=>{let t=r.torque;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,s]=t[n-1],[a,o]=t[n];return s+(o-s)*(e-i)/(a-i)}return t[t.length-1][1]},Cl=class{constructor(e){this.track=e,this.world=new ui.World({x:0,y:-Li,z:0}),this.world.timestep=1/60;let t=e.N,n=[],i=u=>e.W[u]/2+e.runoff,s=[-1.25,-1,-.62,-.3,0,.3,.62,1,1.25],a=new Float32Array(t*s.length*3),o=[],c={};for(let u=0;u<t;u++){e.frame(u*2,c);let d=i(u)+2;for(let f=0;f<s.length;f++){let m=s[f]*d,b=(u*s.length+f)*3;a[b]=c.x+c.nx*m,a[b+1]=e.surfaceY(u*2,Math.max(-d+2,Math.min(d-2,m))),a[b+2]=c.z+c.nz*m}}for(let u=0;u<t;u++){let d=(u+1)%t;for(let f=0;f<s.length-1;f++){let m=u*s.length+f,b=d*s.length+f;o.push(m,b,m+1,m+1,b,b+1)}}let l=this.world.createRigidBody(ui.RigidBodyDesc.fixed());this.world.createCollider(ui.ColliderDesc.trimesh(a,new Uint32Array(o)).setFriction(.9).setRestitution(.05),l);let h=4;for(let u=0;u<t;u+=h){let d=u*2+h;e.frame(d,c);let f=h*2+1.6,m=e.halfWidth(d)+e.runoff;for(let b of[-1,1]){let g=b*(m+.6),p=c.x+c.nx*g,y=c.z+c.nz*g,S=e.surfaceY(d,b*m)+1.4,_=hd(c.heading);this.world.createCollider(ui.ColliderDesc.cuboid(.6,2.4,f/2).setTranslation(p,S,y).setRotation(_).setFriction(.25).setRestitution(.1),l)}}}step(){this.world.step()}dispose(){this.world.free()}},hd=r=>({x:0,y:Math.sin(r/2),z:0,w:Math.cos(r/2)}),Pl=class{constructor(e,t,n,i){this.tp=e,this.track=e.track,this.spec=Jm[t],this.meta=n;let s=this.spec,a=n.wheels;this.world=e.world;let o=n.size.l,c=n.size.w,l=a.FL.c[2]-a.RL.c[2],h=ui.RigidBodyDesc.dynamic().setCanSleep(!1).setCcdEnabled(!0).setLinearDamping(0).setAngularDamping(.25).setAdditionalMassProperties(s.mass,{x:0,y:0,z:0},{x:s.mass*(1.4**2+o**2)/12*1.2,y:s.mass*(c**2+o**2)/12*1.15,z:s.mass*(c**2+1.2**2)/12*1.6},{x:0,y:0,z:0,w:1});this.body=this.world.createRigidBody(h),this.hp=100,this.hit=0,this.crash=null,this.scrape=!1,this.pull=Math.random()<.5?-1:1,this.joltT=2,this.joltLeft=0,this.jolt=0;let u=Math.min(.55,n.size.h*.35);this.world.createCollider(ui.ColliderDesc.cuboid(c/2-.12,u/2,o/2-.15).setTranslation(0,a.FL.r+u/2-s.comY+.08,0).setDensity(0).setFriction(.3).setRestitution(.05),this.body);let d=this.world.createVehicleController(this.body);d.indexUpAxis=1,d.setIndexForwardAxis=2,this.vc=d,this.keys=["FL","FR","RL","RR"];for(let f of this.keys){let m=a[f];d.addWheel({x:m.c[0],y:m.c[1]-s.comY+s.restLen*.55,z:m.c[2]},{x:0,y:-1,z:0},{x:-1,y:0,z:0},s.restLen,m.r)}for(let f=0;f<4;f++)d.setWheelSuspensionStiffness(f,s.stiff),d.setWheelSuspensionCompression(f,s.comp),d.setWheelSuspensionRelaxation(f,s.damp),d.setWheelMaxSuspensionTravel(f,s.travel),d.setWheelMaxSuspensionForce(f,s.mass*Li*6),d.setWheelFrictionSlip(f,s.mu),d.setWheelSideFrictionStiffness(f,s.side);this.wb=l,this.gear=1,this.rpm=s.idle,this.shiftT=0,this.steer=0,this.clutch=1,this.rail=null,this.air=0,this.off=!1,this.slip=0,this.flipT=0,this.brakeOn=!1,this.fx={},this.reset(i)}reset(e){let t=this.track,n=t.project(e.x,e.z,-1),i=t.surfaceY(n.s,n.d)+this.spec.comY+.12;this.body.setTranslation({x:e.x,y:i,z:e.z},!0),this.body.setRotation(hd(e.yaw),!0);let s=e.speed||0;this.body.setLinvel({x:Math.sin(e.yaw)*s,y:0,z:Math.cos(e.yaw)*s},!0),this.body.setAngvel({x:0,y:0,z:0},!0),this.i=n.i,this.s=n.s,this.d=n.d,this.rail=null,this.gear=s>20?3:1}get pos(){return this.body.translation()}step(e,t,n,i={}){let s=this.spec,a=1/60,o=this.track,c=Qi(t,n,this.fx),l=this.body,h=this.vc;l.resetForces(!1),l.resetTorques(!1);let u=l.translation(),d=l.rotation(),f=l.linvel(),m=Xa(d,0,0,1),b=Xa(d,0,1,0),g=Xa(d,-1,0,0),p=f.x*m[0]+f.y*m[1]+f.z*m[2],y=f.x*g[0]+f.y*g[1]+f.z*g[2],S=Math.hypot(f.x,f.z),_=Math.atan2(m[0],m[2]),M=o.project(u.x,u.z,this.i,{},40);this.i=M.i,this.s=M.s,this.d=M.d;let x=o.halfWidth(M.s);this.off=Math.abs(M.d)>x+.3;let T=o.zoneAt(M.s);if(c.boost>1&&!c.freeze&&!c.tornado)return this.railStep(e,c,n,S,_);this.rail&&this.leaveRail(S);let v=e.steer||0,E=e.brake?1:0,R=i.autopilot?1:Math.max(0,Math.min(1,e.gas||0));if(i.autopilot){let oe=o.frame(M.s+9+S*.5),Ce=ad(o,M.s+9+S*.5),me=Math.atan2(oe.x+oe.nx*Ce-u.x,oe.z+oe.nz*Ce-u.z);v=Math.max(-1,Math.min(1,-fl(me-_)*2.4))}if(c.reverse&&(v=-v),c.drunk&&(v=v*(1-.35*c.drunk)+(Math.sin(n*1.3+3)*.6+Math.sin(n*2.9+1)*.3+Math.sin(n*.55)*.4)*.8*c.drunk),c.flat&&(v+=.16*c.flat),this.hp<40&&!i.autopilot){let oe=1-this.hp/40;v+=this.pull*.12*oe,(this.joltT-=a)<=0&&(this.joltT=1+Math.random()*2.5,this.jolt=(Math.random()<.5?-1:1)*(.25+.3*oe),this.joltLeft=.22),this.joltLeft>0&&(this.joltLeft-=a,v+=this.jolt)}let P=this.hp<=0;P&&(v=0,E=1);let L=c.drunk?3.5:7;this.steer+=(Math.max(-1,Math.min(1,v))-this.steer)*Math.min(1,a*L);let B=Math.min(1,Math.abs(p)/(s.vmax*.85)),N=s.steerLo+(s.steerHi-s.steerLo)*Math.sqrt(B),U=this.steer*N,Q=Math.abs(this.meta.wheels.FL.c[0]-this.meta.wheels.FR.c[0]),F=Math.abs(U)>.001?this.wb/Math.tan(Math.abs(U)):1e9,j=Math.atan(this.wb/Math.max(.5,F-Q/2))*Math.sign(U),V=Math.atan(this.wb/(F+Q/2))*Math.sign(U);h.setWheelSteering(0,-(U>0?V:j)),h.setWheelSteering(1,-(U>0?j:V));let O=Bm({vmax:s.vmax},c)*(this.off?.75:1)*(T&&T.type==="water"?.7:1)*(i.autopilot?.9:1)*(.8+.2*this.hp/100);if(!E&&(i.assist||i.autopilot)&&p>12){let oe=s.mu<.8?.82:1,Ce={brake:s.brakeG*Li*.8*oe,latMax:s.mu*Li*(i.autopilot?.95:1.02)*oe};Hm({s:M.s},o,Ce,p,O)&&(E=.7)}(c.freeze||c.tornado)&&(E=1),this.brakeOn=E>0;let $=this.meta.wheels.RL.r,I=()=>s.gears[this.gear-1]*s.final,G=Math.abs(p)/$*60/(2*Math.PI),ne=Math.max(s.idle,G*I());this.shiftT>0?this.shiftT-=a:p>.5&&(ne>s.redline*.93&&this.gear<s.gears.length?(this.gear++,this.shiftT=s.shift):this.gear>1&&G*s.gears[this.gear-2]*s.final<s.redline*.62&&(this.gear--,this.shiftT=s.shift*.7));let se=R>.1&&!e.brake&&p>-.5?s.launch||s.redline*.5:s.idle;ne=Math.max(se,Math.min(s.redline*1.02,G*I()));let le=E?0:R;(c.freeze||c.tornado||P)&&(le=0),p>O&&(le=0),ne>=s.redline&&(le*=.15),c.slow<1&&(le*=c.slow);let q=le*aM(s,ne)*I()*s.eff/$;this.shiftT>0&&(q*=.25),this.hp<60&&(q*=.6+.4*this.hp/60);let W=this.off?s.muOff:s.mu;q=Math.min(q,s.mass*Li*W*.98),le<.05&&p>2&&(q=-s.mass*Li*.06),e.hold&&R>0&&(ne=Math.max(ne,s.idle+R*(s.redline*.78-s.idle))),this.rpm+=(ne+(le&&G*I()<s.idle*1.5&&p<3?2400:0)-this.rpm)*Math.min(1,a*12);let he=0;e.brake&&!e.hold&&!P&&p<.8&&(he=-s.mass*3.5,p<-s.revVmax&&(he=0));let de=s.front,J=he||q;h.setWheelEngineForce(0,J*de/2),h.setWheelEngineForce(1,J*de/2),h.setWheelEngineForce(2,J*(1-de)/2),h.setWheelEngineForce(3,J*(1-de)/2);let Se=he?0:E*s.mass*Li*s.brakeG/4*a;for(let oe=0;oe<4;oe++)h.setWheelBrake(oe,Se);for(let oe=0;oe<4;oe++){let Ce=W,me=s.side;c.flat&&(c.flat>0&&oe===1||c.flat<0&&oe===0)&&(Ce*=.45,me*=.4),c.skid&&oe>=2&&(Ce*=1-.75*c.skid,me*=1-.85*c.skid),h.setWheelFrictionSlip(oe,Ce),h.setWheelSideFrictionStiffness(oe,me)}let Ve=S*S,Oe=.5*rM*s.cdA*Ve*(1+.5*(1-this.hp/100))+s.rr*s.mass*Li;T&&T.type==="water"&&(Oe+=s.mass*3.5),this.off&&(Oe+=s.mass*1.2);let We=S>.1?1/S:0;Vr.has("drag")||l.addForce({x:-f.x*We*Oe,y:0,z:-f.z*We*Oe},!0);let tt=s.downforce*Ve*1.1;Vr.has("df")||l.addForce({x:-b[0]*tt,y:-b[1]*tt,z:-b[2]*tt},!0);let He=l.angvel(),$e=He.x*b[0]+He.y*b[1]+He.z*b[2],Et=-p*Math.tan(U)/this.wb,Pt=s.mu*Li*1.05/Math.max(5,S),ct=Math.max(-Pt,Math.min(Pt,Et)),lt=c.skid||c.spin?.1:this.air>.1?0:1,k=s.mass*(this.meta.size.w**2+this.meta.size.l**2)/12,_t=ct-$e;if(Vr.has("esc")||l.addTorque({x:b[0]*_t*k*3.2*lt,y:b[1]*_t*k*3.2*lt,z:b[2]*_t*k*3.2*lt},!0),!this.air&&S>3&&!Vr.has("slip")){let oe=(c.skid?.1:1)*(this.track.id==="snow"?.9:2.2)*s.mass;l.addForce({x:-g[0]*y*oe,y:0,z:-g[2]*y*oe},!0)}let at=o.frame(M.s),C=oM(at),w=b[1]*C[2]-b[2]*C[1],X=b[2]*C[0]-b[0]*C[2],Z=b[0]*C[1]-b[1]*C[0],te=s.mass*(this.air>.2?5:14);Vr.has("level")||l.addTorque({x:w*te,y:X*te,z:Z*te},!0);let ue=l.angvel(),pe=s.mass*.9;Vr.has("roll")||l.addTorque({x:-(ue.x-b[0]*$e)*pe,y:0,z:-(ue.z-b[2]*$e)*pe},!0),c.spin&&l.addTorque({x:0,y:s.mass*18*c.spin,z:0},!0),h.updateVehicle(a),this.world.step(),i.autopilot||this.damage(f,M,S,a);let ie=0;for(let oe=0;oe<4;oe++)h.wheelIsInContact(oe)&&ie++;this.air=ie===0?this.air+a:0,this.slip=Math.abs(y),b[1]<.2?this.flipT+=a:this.flipT=Math.max(0,this.flipT-a);let ae=l.translation();if(Math.abs(p)<1.2&&R>.3&&!P&&!e.brake&&!c.freeze&&!c.tornado&&!i.frozen?this.stuckT=(this.stuckT||0)+a:this.stuckT=0,this.flipT>1.6||this.stuckT>2.5||ae.y<o.surfaceY(M.s,M.d)-6){this.stuckT=0;let oe=o.frame(M.s);this.reset({x:oe.x+oe.nx*Math.max(-3,Math.min(3,M.d)),z:oe.z+oe.nz*Math.max(-3,Math.min(3,M.d)),yaw:oe.heading,speed:8}),this.flipT=0,this.onReset&&this.onReset()}this.speedF=p}damage(e,t,n,i){let s=this.track,a=s.halfWidth(t.s)+s.runoff;if(Math.abs(t.d)<a-2.8){this.scrape=!1,this.endCrash();return}let o=s.frame(t.s),c=Math.sign(t.d)||1,l=o.nx*c,h=o.nz*c,u=this.body.linvel(),d=e.x*l+e.z*h,f=u.x*l+u.z*h;d>0&&d-f>1.5&&(this.crash?this.crash.vn=Math.max(this.crash.vn,d):this.crash={vn:d,n:0}),this.crash&&++this.crash.n>4&&this.endCrash(),this.scrape=Math.abs(t.d)>a-1.05&&n>8,this.scrape&&this.hp>0&&(this.hp=Math.max(0,this.hp-i*.25*n/20))}endCrash(){if(!this.crash)return;let e=this.crash.vn;this.crash=null;let t=e<4?0:Math.min(32,.55*(e-4)**1.35);t<=0||this.hp<=0||(this.hp=Math.max(0,this.hp-t),this.hit=Math.max(this.hit,t))}railStep(e,t,n,i,s){let a=this.track,o=1/60,c=this.spec,l=this.body;this.rail||(this.rail={v:Math.max(i,c.vmax*.45),s:this.s,d:this.d,t0:n},l.setBodyType(ui.RigidBodyType.KinematicPositionBased,!0));let h=this.rail,u=c.vmax*t.boost*.92;h.v+=(u-h.v)*Math.min(1,o*1.6),h.s+=h.v*o;let d=a.halfWidth(h.s)-1.6,f=(t.reverse?-1:1)*(e.steer||0);h.d=Math.max(-d,Math.min(d,h.d+f*o*9+(ad(a,h.s)-h.d)*o*.6));let m=a.frame(h.s),b=m.x+m.nx*h.d,g=m.z+m.nz*h.d,p=a.surfaceY(h.s,h.d)+c.comY+.1,y=m.heading-f*.12;l.setNextKinematicTranslation({x:b,y:p,z:g}),l.setNextKinematicRotation(hd(y)),this.steer+=(f-this.steer)*Math.min(1,o*7),this.vc.setWheelSteering(0,-this.steer*.1),this.vc.setWheelSteering(1,-this.steer*.1),this.world.step(),this.i=a.project(b,g,this.i,{},60).i,this.s=h.s%a.L,this.d=h.d,this.railVel={x:m.tx*h.v,z:m.tz*h.v},this.gear=c.gears.length,this.rpm=c.redline*.97,this.air=0,this.off=!1,this.speedF=h.v}leaveRail(e){let t=this.body,n=this.spec,i=this.rail;this.rail=null,t.setBodyType(ui.RigidBodyType.Dynamic,!0);let s=this.track.frame(i.s),a=Math.min(i.v,n.vmax*1.05);t.setLinvel({x:s.tx*a,y:0,z:s.tz*a},!0),t.setAngvel({x:0,y:0,z:0},!0)}state(e={}){let t=this.body,n=t.translation(),i=t.rotation(),s=Xa(i,0,1,0),a=Xa(i,0,0,1),o=this.spec;e.x=n.x-s[0]*o.comY,e.y=n.y-s[1]*o.comY,e.z=n.z-s[2]*o.comY,e.q=i,e.yaw=Math.atan2(a[0],a[2]);let c=this.rail?{x:this.railVel.x,y:0,z:this.railVel.z}:t.linvel();e.vx=c.x,e.vy=c.y||0,e.vz=c.z,e.speed=Math.hypot(c.x,c.z),e.speedF=this.speedF||0,e.steer=this.steer,e.rpm=this.rpm,e.gear=this.gear,e.air=this.air>.08,e.off=this.off,e.slip=this.slip,e.brake=this.brakeOn,e.rail=!!this.rail,e.s=this.s,e.d=this.d,e.i=this.i,e.susp=e.susp||{};for(let l=0;l<4;l++){let h=this.vc.wheelSuspensionLength(l);e.susp[this.keys[l]]=h==null?0:o.restLen*.55-h}return e}dispose(){try{this.world.removeVehicleController(this.vc),this.world.removeRigidBody(this.body)}catch{}}};function Xa(r,e,t,n){let i=r.w*e+r.y*n-r.z*t,s=r.w*t+r.z*e-r.x*n,a=r.w*n+r.x*t-r.y*e,o=-r.x*e-r.y*t-r.z*n;return[i*r.w+o*-r.x+s*-r.z-a*-r.y,s*r.w+o*-r.y+a*-r.x-i*-r.z,a*r.w+o*-r.z+i*-r.y-s*-r.x]}function oM(r){let e=Math.cos(r.bank),t=Math.sin(r.bank);return[-r.nx*t,e,-r.nz*t]}var Il=class{constructor(){this.t=null,this.delay=.2,this.jit=.02,this.down=.05,this.age=.05,this.lastArr=0,this.lastSnapT=null}onSnap(e,t,n){if(this.lastSnapT!=null){let s=Math.abs(t-this.lastArr-(e-this.lastSnapT));this.jit=this.jit*.9+Math.min(.5,s)*.1}this.down=this.down*.9+Math.max(0,Math.min(1,t-e))*.1,this.age=this.age*.9+Math.max(0,Math.min(1,n))*.1,this.lastSnapT=e,this.lastArr=t;let i=Math.min(.6,Math.max(.1,this.down+this.age+.07+this.jit*2.5));this.delay+=(i-this.delay)*.05}step(e,t){let n=t-this.delay;if(this.t==null||Math.abs(n-this.t)>1.5)return this.t=n,this.t;let i=n-this.t,s=1+Math.max(-.05,Math.min(.05,i*.5));return this.t+=e*s,this.t}},Ll=class{constructor(){this.s=[],this.vis=null}push(e){let t=this.s;if(t.length&&e.t<=t[t.length-1].t){t[t.length-1].t-e.t>3&&(this.s=[e],this.teleported=!0);return}if(t.length){let n=t[t.length-1];Math.hypot(e.x-n.x,e.z-n.z)>Math.max(30,e.speed*(e.t-n.t)*3+10)&&(this.s=[],this.teleported=!0)}this.s.push(e),this.s.length>48&&this.s.shift()}sample(e,t){let n=this.s;if(!n.length)return null;if(e<=n[0].t)return Zm(n[0],t);let i=n.length-1;if(e>=n[i].t){let T=n[i],v=Math.min(.25,e-T.t);return Zm(T,t),t.x+=Math.sin(T.yaw)*T.speed*v,t.z+=Math.cos(T.yaw)*T.speed*v,t.stale=e-T.t,t.acc=n.length>1?(T.speed-n[n.length-2].speed)/Math.max(.02,T.t-n[n.length-2].t):0,t}for(;i>0&&n[i-1].t>e;)i--;let s=n[i-1],a=n[i],o=a.t-s.t,c=(e-s.t)/o,l=2*c*c*c-3*c*c+1,h=c*c*c-2*c*c+c,u=-2*c*c*c+3*c*c,d=c*c*c-c*c,f=Math.sin(s.yaw)*s.speed,m=Math.cos(s.yaw)*s.speed,b=Math.sin(a.yaw)*a.speed,g=Math.cos(a.yaw)*a.speed,p=(a.x-s.x)/o,y=(a.z-s.z)/o,S=f*p+m*y>.5*Math.hypot(f,m)*Math.hypot(p,y),_=S?[f,m]:[p,y],M=S?[b,g]:[p,y];t.x=l*s.x+h*o*_[0]+u*a.x+d*o*M[0],t.z=l*s.z+h*o*_[1]+u*a.z+d*o*M[1],t.y=s.y+(a.y-s.y)*c;let x=a.yaw-s.yaw;return x>Math.PI&&(x-=Math.PI*2),x<-Math.PI&&(x+=Math.PI*2),t.yaw=s.yaw+x*c,t.speed=s.speed+(a.speed-s.speed)*c,t.steer=s.steer+(a.steer-s.steer)*c,t.flags=c<.5?s.flags:a.flags,t.acc=(a.speed-s.speed)/o,t.stale=0,t}};function Zm(r,e){return e.x=r.x,e.y=r.y,e.z=r.z,e.yaw=r.yaw,e.speed=r.speed,e.steer=r.steer,e.flags=r.flags,e.stale=0,e.acc=0,e}function Qm(r,e,t,n){let s=r.speed*e+0*e*e;return Math.max(0,s)/Math.max(.5,1-t*n)}var es=new D,e0=new D,Bs=new D,Dl=class{constructor(e){this.cam=e,this.pos=new D,this.look=new D,this.init=!1,this.shake=0,this.fovK=0,this.mode="chase"}update(e,t,{boost:n=1,air:i=!1,portrait:s=!1}={}){let a=this.mode==="far",o=this.mode==="hood",c=o?-.4:(a?11:7.4)+Math.min(3,t.speed*.025)+(s?1.6:0),l=o?1.25:(a?3.9:2.55)+(s?.6:0),h=Math.sin(t.yaw),u=Math.cos(t.yaw);es.set(t.x-h*c,t.y+l,t.z-u*c),Bs.set(t.x+h*(o?20:6),t.y+(o?1.1:1.05),t.z+u*(o?20:6)),this.init||(this.pos.copy(es),this.look.copy(Bs),this.init=!0);let d=o?40:9;if(this.pos.x=Yi(this.pos.x,es.x,d,e),this.pos.z=Yi(this.pos.z,es.z,d,e),this.pos.y=Yi(this.pos.y,es.y,i?3:6,e),this.look.x=Yi(this.look.x,Bs.x,14,e),this.look.z=Yi(this.look.z,Bs.z,14,e),this.look.y=Yi(this.look.y,Bs.y,8,e),this.cam.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-e*2.5);let b=this.shake*.25;this.cam.position.x+=(Math.random()-.5)*b,this.cam.position.y+=(Math.random()-.5)*b}this.cam.lookAt(this.look);let m=(s?72:60)+Math.min(14,t.speed*.07)+(n>1?8+n*2:0);this.fovK=Yi(this.fovK,m,3,e),Math.abs(this.cam.fov-this.fovK)>.05&&(this.cam.fov=this.fovK,this.cam.updateProjectionMatrix())}reset(){this.init=!1}},Fl=class{constructor(e,t){this.cam=e,this.yaw=0,this.pitch=-.2,this.keys=new Set,this.vel=new D,this.on=!1,this.move={x:0,y:0},addEventListener("keydown",i=>{this.on&&!i.target.closest("input,textarea")&&this.keys.add(i.code)}),addEventListener("keyup",i=>this.keys.delete(i.code));let n=null;t.addEventListener("pointerdown",i=>{this.on&&(n={x:i.clientX,y:i.clientY,id:i.pointerId})}),addEventListener("pointermove",i=>{!n||i.pointerId!==n.id||(this.yaw-=(i.clientX-n.x)*.004,this.pitch=Math.max(-1.4,Math.min(1.2,this.pitch-(i.clientY-n.y)*.004)),n.x=i.clientX,n.y=i.clientY)}),addEventListener("pointerup",()=>{n=null}),t.addEventListener("wheel",i=>{this.on&&(this.boost=Math.max(.3,Math.min(6,(this.boost||1)*(i.deltaY>0?.85:1.18))))},{passive:!0})}from(e,t){this.cam.position.copy(e),this.yaw=t,this.pitch=-.25}update(e){let t=this.keys,n=(t.has("ShiftLeft")?90:35)*(this.boost||1),i=(t.has("KeyW")?1:0)-(t.has("KeyS")?1:0)+this.move.y,s=(t.has("KeyD")?1:0)-(t.has("KeyA")?1:0)+this.move.x,a=(t.has("KeyE")||t.has("Space")?1:0)-(t.has("KeyQ")||t.has("ControlLeft")?1:0);es.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),e0.set(-Math.cos(this.yaw),0,Math.sin(this.yaw));let o=Bs.copy(es).multiplyScalar(i*n).addScaledVector(e0,s*n).add({x:0,y:a*n*.6,z:0});this.vel.lerp(o,1-Math.exp(-e*5)),this.cam.position.addScaledVector(this.vel,e),this.cam.lookAt(Bs.copy(this.cam.position).add(es))}},Nl=class{constructor(e){this.cam=e,this.a=0}update(e,t,{r:n=7,h:i=2.2,speed:s=.18,lookY:a=.7}={}){this.a+=e*s,this.cam.position.set(t.x+Math.sin(this.a)*n,t.y+i,t.z+Math.cos(this.a)*n),this.cam.lookAt(t.x,t.y+a,t.z)}};var t0=new Re,cM=new wt,n0=new on(0,0,0,"YXZ"),lM=new D,hM=new D(1,1,1),yT=new D,_T=new D,Ul=class{constructor(e,t){this.app=e,this.id=t.id,this.loc=t.loc,this.laps=t.laps,this.track=ml(this.loc),this.goAt=t.goAt,this.countAt=t.countAt,this.introAt=t.introAt,this.you=t.you,this.entries=new Map;for(let n of t.entries)this.addEntry(n);this.play=new Il,this.rank=[],this.finished=new Set,this.seq=0,this.sendT=0,this.simT=0,this.acc=0,this.local={s:0,lap:-1,sector:this.track.sectors-1},this.state={},this.sampled={},this.follow=null,this.camMode=e.isOp?"director":"chase",this.dirT=0,t.state&&this.you!=null&&(this.pendingFix={state:t.state})}addEntry(e){let t=new Ll;this.entries.set(e.slot,{...e,fx:e.fx||[],trk:t,vis:{x:0,y:0,z:0,yaw:0,speed:0,steer:0,flags:0},spin:0,model:null,pos:0,lap:e.lap??-1,gold:!1,i:-1,shownAt:0,hp:e.hp??100,dnf:!!e.dnf})}async load(e){let t=this.app,n=t.gfx,i=await t.ensureWorld(this.loc,a=>e&&e(a*.8));this.world=i;let s=await t.ensureCarAssets(Tn[this.loc].car);if(this.assets=s,this.fleet=new al(s,Math.max(4,this.entries.size+2),n.scene),this.you!=null){await $m(),this.phys=new Cl(this.track);let a=this.track.gridSlot(this.you);this.veh=new Pl(this.phys,this.loc,s.meta,{x:a.x,z:a.z,yaw:a.yaw}),this.veh.onReset=()=>{t.fx&&t.fx.flash("reset")};let o=this.entries.get(this.you);this.myModel=new Pi(s,o?o.paint:0),n.scene.add(this.myModel.root),this.pendingFix&&this.applyFix(this.pendingFix)}this.chase=new Dl(n.camera),this.chase.mode=t.settings.cam,this.free=t.freeCam||(t.freeCam=new Fl(n.camera,n.canvas)),e&&e(1),this.loaded=!0}raceNow(){return(this.app.net.now()-this.goAt)/1e3}phase(){return this.app.phase}onSnap(e){let t=Up(e,this._snapCars||(this._snapCars=[]));if(!t)return;let n=0;for(let i of t.cars){let s=this.entries.get(i.slot);if(s){if(i.slot===this.you&&this.veh){s.lastServer=i;continue}s.trk.push({t:i.t,x:i.x,y:i.y,z:i.z,yaw:i.yaw,speed:i.speed,steer:i.steer,flags:i.flags}),i.flags&Np||(n=Math.max(n,t.t-i.t))}}this.play.onSnap(t.t,this.raceNow(),n)}onFix(e){this.veh&&this.applyFix(e)}applyFix(e){let t=e.state;if(this.veh.reset({x:t.x,z:t.z,yaw:t.yaw,speed:Math.hypot(t.vx||0,t.vz||0)}),e.seq!=null&&(this.seq=e.seq),t.lap!=null&&(this.local.lap=t.lap,this.local.sector=t.sector),e.fx){let n=this.entries.get(this.you);n&&(n.fx=e.fx)}this.chase&&e.why==="teleport"&&this.chase.reset(),this.simT=Math.max(this.simT,this.raceNow())}onFx(e){let t=this.entries.get(e.slot);t&&(e.all?t.fx=e.all:e.fx&&t.fx.push(e.fx),e.fx&&e.fx.k==="gold"&&(t.gold=!0),e.fx&&e.fx.k==="repair"&&e.slot===this.you&&this.veh&&!t.dnf&&this.veh.hp>0&&(this.veh.hp=Math.min(100,this.veh.hp+50),this.sentHp=-1,this.hpT=0),this.app.fx&&this.app.fx.carEffect(this,t,e))}onDmg(e){let t=this.entries.get(e.slot);t&&(t.hp=e.hp,e.hit&&e.slot!==this.you&&t.vis&&this.app.fx.crash(this,t,e.hit))}onWreck(e){let t=this.entries.get(e.slot);t&&(t.hp=0,t.dnf=!0,e.slot===this.you&&this.veh&&(this.veh.hp=0,this.chase&&(this.chase.shake=1.4)),t.vis&&this.app.fx.explode(this,t))}onRank(e){this.rank=e.list,e.list.forEach(([t,n,i,s,a],o)=>{let c=this.entries.get(t);c&&(c.pos=o+1,c.lap=n,c.finished=!!i,c.finishT=s,c.auto=!!a)})}update(e,t){if(!this.loaded)return;let n=this.app,i=n.gfx,s=n.phase,a=this.raceNow(),o=s==="race";if(this.veh){let f=this.entries.get(this.you),m=f?f.fx:[];if(o&&!(f&&f.finished)){this.simT<a-1.5&&(this.simT=a-.25);let p=0,y={assist:!!n.settings.assist,autopilot:f&&f.finished};for(;this.simT+1/60<=a+.001&&p<8;)this.veh.step(t,m,this.simT,y),this.simT+=1/60,p++,this.local.s=this.veh.s,Gm(this.local,this.track)==="lap"&&this.local.lap>0&&n.onLocalLap&&n.onLocalLap(this.local.lap);if(this.sendT+=e,this.sendT>=.05){this.sendT=0;let M=this.veh.state(this.state),x=(M.air?Ls:0)|(M.brake?Dp:0)|(M.off?Fp:0)|(M.slip>3?Oa:0);n.net.sendBin(Lp(M,this.seq++,this.simT,x))}let S=this.veh,_=Math.ceil(S.hp);this.hpT=(this.hpT||0)-e,(S.hit||_!==this.sentHp)&&(S.hit||_<=0||this.hpT<=0)&&(n.net.send({t:"dmg",hp:_,hit:Math.round(S.hit)}),S.hit&&f&&(n.fx.crash(this,f,S.hit),n.onCrash&&n.onCrash(S.hp,S.hit)),this.sentHp=_,S.hit=0,this.hpT=.25),f&&(f.hp=S.hp)}else f&&f.finished&&o?this.veh.step({steer:0,brake:0},m,a,{autopilot:!0}):(this.veh.step({steer:0,brake:1,hold:!0,gas:t.gas},[],0,{}),this.simT=Math.max(0,a));let b=this.veh.state(this.state),g=this.myModel;g.root.position.set(b.x,b.y,b.z),g.root.quaternion.set(b.q.x,b.q.y,b.q.z,b.q.w),g.update(e,b.speedF,this.veh.steer*.5,0,0,b.susp),f&&Object.assign(f.vis,{x:b.x,y:b.y,z:b.z,yaw:b.yaw,speed:b.speed,steer:b.steer,flags:(b.air?Ls:0)|(b.slip>3?Oa:0)})}let c=this.play.step(e,a),l=Math.max(0,a-c),h=i.camera.position,u=[];for(let f of this.entries.values()){if(f.slot===this.you&&this.veh)continue;let m=f.trk.sample(c,this.sampled);m&&(this.predict(f,m,l,e),u.push(f))}u.sort((f,m)=>ud(f.vis,h)-ud(m.vis,h)),this.fleet.begin();let d=n.isOp?3:i.q.lod0?2:0;if(u.forEach((f,m)=>{let b=Math.sqrt(ud(f.vis,h));m<d&&b<40?(f.model||(f.model=new Pi(this.assets,f.paint),f.gold&&f.model.setPaint(f.paint,!0),i.scene.add(f.model.root)),f.model.root.visible=!0,f.model.root.position.set(f.vis.x,f.vis.y,f.vis.z),f.model.root.quaternion.copy(this.orient(f)),f.model.update(e,f.vis.speed,f.vis.steer*.45)):(f.model&&(f.model.root.visible=!1),f.spin+=f.vis.speed/this.assets.meta.wheels.FL.r*e,t0.compose(lM.set(f.vis.x,f.vis.y,f.vis.z),this.orient(f),hM),this.fleet.add(t0,f.paint,f.vis.steer*.45,f.spin,m<i.q.lod1Cars&&b<90?0:1,f.gold))}),this.fleet.commit(),s==="countdown"){let f=Math.max(0,Math.min(5,Math.floor((a+4)/.75)));this.world.setLights(f,!1)}else s==="race"&&a<3?this.world.setLights(0,!0):s==="race"&&this.world.setLights(0,!1);this.updateCamera(e,a),this.world.update(e,i.camera,this.focus||i.camera.position)}predict(e,t,n,i){let s=this.track,a=s.project(t.x,t.z,e.i,{},30);e.i=a.i;let o=Math.min(n,.6),c=s.frame(a.s),l=Qm(t,o,c.k,a.d)*Math.cos(ja(t.yaw-c.heading)),h=s.frame(a.s+l),u=ja(t.yaw-c.heading),d=h.x+h.nx*a.d,f=h.z+h.nz*a.d,m=t.y-s.surfaceY(a.s,a.d)+s.surfaceY(a.s+l,a.d),b=e.vis;if(e.trk.teleported||!e.shownAt)b.x=d,b.y=m,b.z=f,b.yaw=h.heading+u,e.trk.teleported=!1,e.shownAt=1;else{let g=1-Math.exp(-i*12);b.x+=(d-b.x)*g,b.y+=(m-b.y)*g,b.z+=(f-b.z)*g,b.yaw+=ja(h.heading+u-b.yaw)*g}b.speed=t.speed,b.steer=t.steer,b.flags=t.flags}orient(e){let t=this.track,n=t.project(e.vis.x,e.vis.z,e.i,{},20),i=t.frame(n.s),s=t.surfaceY(n.s+2,n.d)-t.surfaceY(n.s-2,n.d),a=-Math.atan2(s,4)*Math.cos(ja(e.vis.yaw-i.heading)),o=e.vis.flags&Ls?.05:0;return n0.set(a-o,e.vis.yaw,i.bank*Math.cos(ja(e.vis.yaw-i.heading)),"YXZ"),cM.setFromEuler(n0)}focusEntry(){return this.you!=null&&this.veh&&this.camMode==="chase"?this.entries.get(this.you):this.follow!=null&&this.entries.has(this.follow)?this.entries.get(this.follow):(this.rank.length?this.entries.get(this.rank[0][0]):null)||this.entries.values().next().value}updateCamera(e,t){let n=this.app,i=n.gfx,s=i.h>i.w;if(this.camMode==="free"){this.free.on=!0,this.free.update(e),this.focus=i.camera.position;return}this.free.on=!1,this.camMode==="director"&&(this.dirT-=e,(this.dirT<=0||this.follow==null)&&(this.follow=this.pickShot(),this.dirT=7+Math.random()*4,this.chase.reset()));let a=this.focusEntry();if(!a)return;let o=this.you!=null&&a.slot===this.you&&this.veh,c=Qi(a.fx,t,{});this.chase.update(e,a.vis,{boost:c.boost,air:!!(a.vis.flags&Ls),portrait:s}),this.focus=a.vis,o&&this.veh.air>.3&&(this.chase.shake=Math.max(this.chase.shake,.3))}pickShot(){let e=this.rank;if(!e.length)return[...this.entries.keys()][0];let t=e[0][0],n=1/0;for(let i=1;i<Math.min(e.length,8);i++){let s=this.entries.get(e[i-1][0]),a=this.entries.get(e[i][0]);if(!s||!a)continue;let o=Math.hypot(s.vis.x-a.vis.x,s.vis.z-a.vis.z);o<n&&(n=o,t=a.slot)}return n<40&&Math.random()<.7?t:e[Math.random()<.6?0:Math.floor(Math.random()*Math.min(e.length,5))][0]}setCamera(e,t){this.camMode=e,t!=null&&(this.follow=t),this.chase.reset(),e==="free"&&this.free.from(this.app.gfx.camera.position,this.focus&&this.focus.yaw||0)}myPosition(){let e=this.you!=null?this.entries.get(this.you):null;return e?e.pos:0}dispose(){let e=this.app.gfx.scene;this.fleet&&this.fleet.dispose(e);for(let t of this.entries.values())t.model&&(e.remove(t.model.root),t.model.dispose());this.myModel&&(e.remove(this.myModel.root),this.myModel.dispose()),this.veh&&this.veh.dispose(),this.phys&&this.phys.dispose(),this.free&&(this.free.on=!1)}},ud=(r,e)=>(r.x-e.x)**2+(r.z-e.z)**2,ja=r=>(r=(r+Math.PI)%(2*Math.PI),r<0&&(r+=2*Math.PI),r-Math.PI);var i0=[["#ffe27a","#d9a520",16762938],["#ffffff","#b8bec8",14212581],["#ffc79a","#c7773a",13072186]],uM=r=>{r=Math.min(1,Math.max(0,r));let e=1.70158;return 1+(e+1)*(r-1)**3+e*(r-1)**2},dd=r=>(r=Math.min(1,Math.max(0,r)),r*r*(3-2*r));function dM(r,e){let t=[[0,0],[.085,0],[.085,.03],[.035,.05],[.022,.16],[.05,.19],[.1,.25],[.12,.36],[.115,.4],[.105,.4],[.105,.37],[0,.3]].map(([s,a])=>new Ne(s,a)),n=new ze({color:r,metalness:1,roughness:.22}),i=new Te(new ba(t,20),n);for(let s of[-1,1]){let a=new Te(new xs(.055,.012,6,12,Math.PI),n);a.position.set(s*.115,.3,0),a.rotation.z=s>0?-Math.PI/2:Math.PI/2,i.add(a)}return i.scale.setScalar(e),i.castShadow=!0,i}function fM(r,e){let[t,n]=i0[e],i=Yt(512,128,(a,o,c)=>{a.fillStyle="rgba(8,10,20,.78)",a.beginPath(),a.roundRect?a.roundRect(4,14,o-8,c-28,40):a.rect(4,14,o-8,c-28),a.fill();let l=a.createLinearGradient(0,0,0,c);l.addColorStop(0,t),l.addColorStop(1,n),a.fillStyle=l,a.beginPath(),a.arc(64,c/2,44,0,Math.PI*2),a.fill(),a.fillStyle="#1a1206",a.font='900 56px "Russo One", "Arial Black", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(e+1),64,c/2+3),a.fillStyle="#fff",a.font='800 46px "Russo One", "Arial Black", sans-serif',a.textAlign="left",a.fillText(r.length>15?r.slice(0,14)+"\u2026":r,124,c/2+3,o-140)},{repeat:!1}),s=new la(new pr({map:i,transparent:!0,depthWrite:!1}));return s.scale.set(2.6,.65,1),s.renderOrder=5,s}var pM=(()=>{let r=document.createElement("canvas");r.width=r.height=16;let e=r.getContext("2d");e.fillStyle="#fff",e.fillRect(3,5,10,6);let t=new _i(r);return t.colorSpace=vt,t})(),kl=class{constructor(e,t,n){this.app=e,this.race=t,this.results=n,this.pod=t.world.podium,this.t=0,this.ready=!1,this.gone=!1,this.grp=new Xe,this.pod.grp.add(this.grp),this.mixers=[],this.drivers=[],this.cars=[];let i=e.gfx.scene,s=e.gfx.q;this.confetti=new Os(i,Math.round(1400*s.particles),{map:pM}),this.foam=new Os(i,Math.round(700*s.particles)),this.v=new D,this.w=new D,this.load()}async load(){let e;try{e=await cl()}catch{return}if(this.gone)return;let t=this.results.list.slice(0,3),n=this.app.gfx.q;t.forEach((a,o)=>{let c=Ot(a.paint).color,l=hm(e,{tint:c,clip:o===0?0:2}),h=this.pod.steps[o];l.position.set(h.x,h.y,.15),l.scale.setScalar(.001),l.visible=!1,this.grp.add(l),this.mixers.push(l.userData.mixer);let u=dM(i0[o][2],o===0?1.6:1.15);this.grp.add(u),u.visible=!1;let d=fM(a.name+(a.bot?" \u{1F916}":""),o);if(d.position.set(h.x,h.y+2.95,.2),d.visible=!1,this.grp.add(d),this.drivers.push({d:l,cup:u,tag:d,at:Math.max(this.t,.3)+[2,1.1,.3][o],hand:l.userData.hand("right"),left:l.userData.hand("left"),shown:!1}),this.race.assets){let f=new Pi(this.race.assets,a.paint),m=[[0,.17,7.6,.35],[-7.4,.14,-.6,.55],[7.4,.14,-.6,-.55]][o];f.root.position.set(m[0],m[1],m[2]),f.root.rotation.y=m[3],this.grp.add(f.root),this.cars.push(f)}});let i=Math.max(1,Math.round((n.crowd||.7)*3.4)),s=[[-5.6,5.4],[5.6,5.4],[-10.8,5.8],[10.8,5.8]];for(let a=0;a<Math.min(i,s.length);a++){let o=um(e),[c,l]=s[a];o.position.set(c,.14,l),o.rotation.y=Math.atan2(-c,-l),this.grp.add(o),this.mixers.push(o.userData.mixer)}this.ready=!0}update(e,t){this.t+=e;let n=this.t,i=this.pod.grp;if(i.updateMatrixWorld(),this.ready){for(let d of this.mixers)d.update(e);for(let[d,f]of this.drivers.entries()){let m=(n-f.at)/.55;if(m>0&&!f.shown&&(f.shown=!0,f.d.visible=f.tag.visible=f.cup.visible=!0,this.burst(d)),f.shown){let b=Math.max(.001,uM(m));f.d.scale.setScalar(b),f.tag.scale.set(2.6*Math.min(1,b),.65*Math.min(1,b),1)}if(f.hand?(f.hand.getWorldPosition(this.v),this.grp.worldToLocal(this.v),f.cup.position.copy(this.v).add({x:0,y:.02,z:.03})):f.cup.position.set(f.d.position.x+.35,f.d.position.y+1.2,.3),d===0&&f.left&&n>4&&n<13&&Math.random()<.9){f.left.getWorldPosition(this.v);for(let b=0;b<5;b++){let g=Math.sin(n*2.3)*.9+(Math.random()-.5)*.3,p=5+Math.random()*3;this.w.set(Math.sin(g)*p*.6,4+Math.random()*2.5,Math.cos(g)*p).applyQuaternion(i.quaternion),this.foam.emit(this.v.x,this.v.y+.15,this.v.z,this.w.x,this.w.y,this.w.z,1.1+Math.random()*.5,.22,.9,1,.96,.8,.9)}}}for(let d of this.cars)d.update(e,0,0)}if(n>2.6&&Math.random()<.8)for(let d=0;d<3;d++)this.confettiAt((Math.random()-.5)*16,9+Math.random()*3,(Math.random()-.5)*8,0,0);this.confetti.update(e,1.2,2.2),this.foam.update(e,9,.4);let s=t.aspect,a=Math.atan(Math.tan(Ci.degToRad(t.fov)/2)*s),o=!this.app.isOp,c=Math.max(8.5,5.4/Math.tan(a))*(o&&s>=1?1.6:1)*(1.45-.45*dd(n/5)),l=-.55+.4*dd(n/5)+Math.sin(n*.2)*.42,h=3.4+6*(1-dd(n/4.5));this.v.set(Math.sin(l)*c,h,Math.cos(l)*c),i.localToWorld(this.v),this.w.set(0,1.7,0),i.localToWorld(this.w),this.cp=this.cp?this.cp.lerp(this.v,Math.min(1,e*3)):this.v.clone(),t.position.copy(this.cp),t.lookAt(this.w);let u=Math.tan(Ci.degToRad(t.fov)/2);o&&s<1?t.rotateX(-Math.atan(.34*u)):o&&t.rotateY(-Math.atan(.5*u*s))}confettiAt(e,t,n,i,s,a=0){let o=new ye().setHSL(Math.random(),.9,.6);this.v.set(e,t,n),this.pod.grp.localToWorld(this.v),this.confetti.emit(this.v.x,this.v.y,this.v.z,i+(Math.random()-.5)*1.5,s,a+(Math.random()-.5)*1.5,5+Math.random()*3,.12,0,o.r,o.g,o.b,1)}burst(e){let t=e===0?260:90,n=this.app.gfx.q.particles;for(let s=0;s<t*n;s++){let a=s%2?1:-1,o=9+Math.random()*7;this.w.set(-a*(2+Math.random()*4),o,2+Math.random()*3).applyQuaternion(this.pod.grp.quaternion),this.confettiAt(a*10.2,9.6,-4.9,this.w.x,this.w.y,this.w.z)}let i=this.app.audio;i&&(i.cheer&&i.cheer(e===0?.5:.28,e===0?7:3),i.sfx("pop",.5,.7)),e===0&&(this.app.fx.fireworks(),setTimeout(()=>!this.gone&&this.app.fx.fireworks(),2200))}dispose(){this.gone=!0;let e=this.app.gfx.scene;this.pod.grp.remove(this.grp);for(let t of this.cars)t.dispose();this.grp.traverse(t=>{t.isSprite&&(t.material.map.dispose(),t.material.dispose())});for(let t of this.mixers)t.stopAllAction();this.confetti.dispose(e),this.foam.dispose(e)}};function s0(r){let e=null,t=async()=>{try{let n=await fetch("version.json?t="+Date.now(),{cache:"no-store"});if(!n.ok)return;let i=await n.json();if(e==null){e=i.v;return}i.v!==e&&(await Promise.all((i.files||[]).slice(0,40).map(s=>fetch(s).catch(()=>{}))),r.pendingReload=!0,r.maybeUpdate())}catch{}};t(),setInterval(t,6e4),document.addEventListener("visibilitychange",()=>{document.hidden||t()})}var Ka={bar:Me("#bootbar"),text:Me("#boottext"),el:Me("#boot")},mM=(r,e)=>{Ka.bar.style.width=Math.round(r*100)+"%",e&&(Ka.text.textContent=e)},fd=class{constructor(){Cp(),this.settings=Je,this.gfx=new Zc(Me("#c")),this.net=dt,this.controls=new vl,this.audio=new xl,this.fx=new bl(this),this.ui=new _l(this),this.host=new Al(this),this.waiting=new Rl,this.orbit=new Nl(this.gfx.camera),this.worlds=new Map,this.carAssets=new Map,this.phase="lobby",this.lobby=null,this.you=null,this.race=null,this.isOp=!1,this.connected=!1,this.token=Dt.get("token",""),this.opToken=$c.get("op",""),this.last=performance.now(),this.frameAcc=0,dt.hello=()=>({t:"hello",v:1,token:this.token||void 0,op:this.opToken||void 0}),this.wire();let e=()=>{this.audio.unlock(),Pp()};addEventListener("pointerdown",e,{once:!0}),mM(.1,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u0433\u0440\u0435\u2026"),dt.connect(),Gr(),requestAnimationFrame(t=>this.frame(t)),s0(this),"serviceWorker"in navigator&&location.protocol==="https:"&&/github\.io$/.test(location.hostname)&&navigator.serviceWorker.register("sw.js").catch(()=>{}),window.app=this}wire(){dt.on("state",e=>{if(this.connected=e==="open",e==="offline"){let t=(new URLSearchParams(location.search).get("h")||"").replace(/^@/,"").slice(0,40);this.waiting.show({host:t,onRetry:()=>dt.connect()}),this.hideBoot()}e==="open"&&this.waiting.hide(),e==="closed"&&this.ui.cur!=="hud"&&yt("\u0421\u0432\u044F\u0437\u044C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026")}),dt.on("welcome",e=>{this.version=e.version,this.rules=e.rules,this.live=e.live,this.joinGift=Yn(e.rules&&e.rules.joinGift),this.gifts=(e.gifts||[]).map(t=>({...t,gift:Yn(t.gift)})),Gr().then(()=>{this.joinGift=Yn(e.rules&&e.rules.joinGift),this.gifts=(e.gifts||[]).map(t=>({...t,gift:Yn(t.gift)}))}),e.proto!==1&&(this.pendingReload=!0),e.op&&(this.isOp=!0,this.showOp()),this.you=e.you,this.isOp||(this.you?this.showLobby():this.ui.home()),this.hideBoot()}),dt.on("lobby",e=>{let t=!this.lobby||this.lobby.loc!==e.loc;this.lobby=e,this.live=e.live,e.you&&(this.you=e.you),t&&this.phase==="lobby"&&this.preloadLobbyWorld(),this.ui.cur==="lobby"&&this.ui.renderLobby(),this.ui.cur==="home"&&t&&this.ui.home(),this.updateShowroom()}),dt.on("auth",e=>{e.stage==="code"?this.ui.verify(e):e.stage==="ok"?(this.token=e.token,Dt.set("token",e.token),this.you=e.you,yt("\u0422\u044B \u0432 \u0438\u0433\u0440\u0435! \u{1F3C1}",{kind:"good"}),this.showLobby()):e.stage==="error"?yt(e.msg,{kind:"bad",ms:4e3}):e.stage==="out"&&(this.token="",Dt.del("token"),this.you=null,this.ui.home())}),dt.on("ticket",()=>{this.ui.cur==="verify"&&this.ui.ticketArrived(),this.you&&(this.you.ticket=!0,this.ui.renderLobby())}),dt.on("race",e=>this.onRace(e)),dt.on("phase",e=>this.onPhase(e)),dt.on("bin",e=>this.race&&this.race.onSnap(e)),dt.on("rank",e=>this.race&&this.race.onRank(e)),dt.on("fx",e=>{this.race&&(e.byName=this.nameOf(e.by),this.race.onFx(e),e.fx&&e.fx.k==="boost"&&e.slot===this.race.you&&this.audio.whoosh(.6))}),dt.on("fix",e=>this.race&&this.race.onFix(e)),dt.on("dmg",e=>this.race&&this.race.onDmg(e)),dt.on("wreck",e=>{this.race&&(this.race.onWreck(e),e.slot===this.race.you?(this.ui.banner("\u{1F4A5} \u041C\u0410\u0428\u0418\u041D\u0410 \u0412\u0417\u041E\u0420\u0412\u0410\u041B\u0410\u0421\u042C","\u0442\u044B \u0432\u044B\u0431\u044B\u043B \u0438\u0437 \u0433\u043E\u043D\u043A\u0438",4500),this.audio.stopEngine()):yt("\u{1F4A5} "+e.name+" \u0440\u0430\u0437\u0431\u0438\u043B \u043C\u0430\u0448\u0438\u043D\u0443 \u2014 \u0432\u044B\u0431\u044B\u043B",{kind:"bad"}))}),dt.on("finish",e=>this.onFinish(e)),dt.on("results",e=>this.onResults(e)),dt.on("daily",e=>{this.daily=e,(this.ui.cur==="lobby"||this.ui.cur==="results")&&this.ui.renderLobby&&this.ui.cur==="lobby"&&this.ui.renderLobby(),this.isOp&&this.host.render()}),dt.on("gift",e=>this.onGift(e.ev)),dt.on("gifts",e=>{this.gifts=e.gifts.map(t=>({...t,gift:Yn(t.gift)})),this.joinGift=Yn(e.joinGift),this.ui.cur==="lobby"&&this.ui.renderLobby()}),dt.on("world",e=>{e.fx==="fireworks"&&this.fx.fireworks()}),dt.on("toast",e=>yt(e.msg)),dt.on("kicked",e=>{yt(e.ban?"\u0425\u043E\u0441\u0442 \u0437\u0430\u043A\u0440\u044B\u043B \u0442\u0435\u0431\u0435 \u0434\u043E\u0441\u0442\u0443\u043F":"\u0425\u043E\u0441\u0442 \u0443\u0431\u0440\u0430\u043B \u0442\u0435\u0431\u044F \u0438\u0437 \u0433\u043E\u043D\u043A\u0438",{kind:"bad",ms:5e3})}),dt.on("opauth",e=>{e.ok?(this.opToken=e.token,$c.set("op",e.token),this.isOp=!0,this.ui.loginBox&&this.ui.loginBox.remove(),this.showOp(),yt("\u0420\u0435\u0436\u0438\u043C \u0445\u043E\u0441\u0442\u0430")):e.out?this.opLogout(!0):this.ui.loginErr&&this.ui.loginErr(e.wait?`\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u041F\u043E\u0434\u043E\u0436\u0434\u0438 ${e.wait} \u0441`:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")}),dt.on("opstate",e=>{this.isOp&&(this.opState=e,this.host.onState(e))})}nameOf(e){if(!e)return"";let t=this.race&&[...this.race.entries.values()].find(i=>i.uid===e);if(t)return t.name;let n=this.lobby&&this.lobby.players.find(i=>i.uid===e);return n?n.name:"@"+e}login(e){if(!this.connected)return yt("\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0433\u0440\u043E\u0439 \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438 \u0441\u0435\u043A\u0443\u043D\u0434\u0443");dt.send({t:"login",name:e})}opLogin(e){dt.send({t:"oplogin",pass:e})}opLogout(e){dt.send({t:"op",a:"logout"}),$c.del("op"),this.opToken="",this.isOp=!1,this.host.unmount(),e||yt("\u0420\u0435\u0436\u0438\u043C \u0445\u043E\u0441\u0442\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),this.you?this.showLobby():this.ui.home()}onGift(e){if(e){if(this.isOp)this.host.onGift(e);else if(this.ui.cur==="hud"||this.ui.cur==="lobby"){let t=ks[e.action];t&&t.id!=="join"&&e.note!=="\u0433\u043E\u043D\u043A\u0430 \u043D\u0435 \u0438\u0434\u0451\u0442"&&yt(`${e.name}: ${t.icon} ${t.short}`,{img:e.img||(Yn({ids:[e.giftId]})||{}).img,ms:2200})}}}hideBoot(){Ka.el.classList.add("gone"),setTimeout(()=>Ka.el.remove&&(Ka.el.style.display="none"),600)}showLobby(){this.isOp||this.race&&["intro","countdown","race"].includes(this.phase)||(this.ui.lobby(),this.preloadLobbyWorld())}showOp(){this.ui.clear(),this.host.mount(),this.opState&&this.host.onState(this.opState),this.preloadLobbyWorld()}async ensureWorld(e,t){if(this.worlds.has(e)){let s=await this.worlds.get(e);return t&&t(1),s}for(let[s,a]of this.worlds)(await a).dispose(),this.worlds.delete(s);this.fx.dispose();let n=new gl(this.gfx,e),i=n.build(t||(()=>{}),{hostName:this.live&&this.live.user});return this.worlds.set(e,i.then(()=>n)),await i,this.fx.build(this.gfx.scene,this.gfx.q),n}async ensureCarAssets(e){return this.carAssets.has(e)||this.carAssets.set(e,new rl(e).load(this.gfx.q)),this.carAssets.get(e)}async preloadLobbyWorld(){let e=this.lobby&&this.lobby.loc||"city";if(this.showroomLoc===e||this.race)return;this.showroomLoc=e;let t=await this.ensureWorld(e),n=await this.ensureCarAssets(Tn[e].car);this.race||this.showroomLoc!==e||(this.world=t,this.assets=n,this.updateShowroom(),setTimeout(()=>!this.race&&cl().catch(()=>{}),4e3))}updateShowroom(){if(!this.world||!this.assets||this.race)return;let e=this.isOp?(this.lobby?.players||[]).slice(0,24):this.you?[this.you]:[];this.showCars=this.showCars||[];let t=e.map(n=>n.uid+":"+n.paint).join(",")+"|"+this.world.loc;if(this.showKey!==t){this.showKey=t;for(let n of this.showCars)this.gfx.scene.remove(n.root),n.dispose();this.showCars=e.map((n,i)=>{let s=new Pi(this.assets,n.paint),a=this.world.track.gridSlot(i);return s.root.position.set(a.x,this.world.track.surfaceY(a.s,a.d),a.z),s.root.rotation.y=a.yaw,this.gfx.scene.add(s.root),s})}}clearShowroom(){for(let e of this.showCars||[])this.gfx.scene.remove(e.root),e.dispose();this.showCars=[],this.showKey=""}async onRace(e){if(this.race&&this.race.id===e.id)return;this.race&&this.endRace(),this.clearShowroom(),this.phase=e.phase;let t=new Ul(this,e);this.race=t,this.isOp||this.ui.hud(t);let n=document.createElement("div");if(n.className="waitline",n.style.cssText="position:absolute;left:50%;top:40%;transform:translateX(-50%);background:rgba(8,10,18,.8);padding:10px 16px;border-radius:14px;pointer-events:none",n.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0440\u0430\u0441\u0441\u044B\u2026",document.getElementById("ui").appendChild(n),await t.load(i=>n.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0440\u0430\u0441\u0441\u044B\u2026 "+Math.round(i*100)+"%"),n.remove(),this.race!==t){t.dispose();return}t.you!=null&&this.audio.ready&&this.audio.startEngine(t.loc),Ps.want=!0,Ps(!0)}onPhase(e){let t=this.phase;this.phase=e.phase,e.phase==="lobby"&&(this.endRace(),this.showroomLoc=null,this.isOp?this.preloadLobbyWorld():this.showLobby(),this.maybeUpdate()),e.phase==="race"&&t!=="race"&&(this.audio.beep(1320,.5,.4),this.audio.cheer(.22,4.5),this.race&&this.race.world&&(this.race.world.marshal.wave=4),this.ui.countdown&&this.ui.countdown(0),setTimeout(()=>this.ui.countdown&&this.ui.countdown(-1),900)),this.isOp&&this.host.render()}onFinish(e){if(!this.race)return;let t=this.race.you===e.slot;this.race.world&&(this.race.world.marshal.wave=Math.max(this.race.world.marshal.wave,7)),t?(this.ui.banner(e.pos===1?"\u041F\u041E\u0411\u0415\u0414\u0410!":"\u0424\u0418\u041D\u0418\u0428",`${e.pos} \u043C\u0435\u0441\u0442\u043E \xB7 ${e.time.toFixed(2)} \u0441`,3500),this.audio.sfx("horn",.5),this.fx.fireworks()):e.pos<=3&&yt(`\u{1F3C1} ${e.name} \u2014 ${e.pos} \u043C\u0435\u0441\u0442\u043E!`,{kind:"good"})}onResults(e){this.lastResults=e,this.phase="results",this.audio.stopEngine(),this.audio.silenceOthers(),this.race&&this.showPodium(e),this.isOp?this.host.render():this.ui.results(e)}showPodium(e){let t=this.race;!t||!t.world||!t.world.podium||!e.list.length||(this.podium&&this.podium.dispose(),this.podium=new kl(this,t,e))}endRace(){this.podium&&(this.podium.dispose(),this.podium=null),this.race&&(this.race.dispose(),this.race=null),this.dmgLvl=0,this.audio.stopEngine(),this.audio.silenceOthers(),this.fx.clearScreen(),Ps.want=!1,Ps(!1),this.world&&this.world.setLights(0,!1)}onCrash(e,t){this.settings.vibrate&&navigator.vibrate&&navigator.vibrate(t>15?[80,40,120]:[50]);let n=e<=0?5:e<20?4:e<40?3:e<55?2:e<85?1:0;if(n<=(this.dmgLvl||0))return;this.dmgLvl=n;let i=[null,"\u{1F529} \u041E\u0442\u043B\u0435\u0442\u0435\u043B \u0431\u0430\u043C\u043F\u0435\u0440 \u2014 \u0445\u0443\u0436\u0435 \u0430\u044D\u0440\u043E\u0434\u0438\u043D\u0430\u043C\u0438\u043A\u0430","\u{1F4A8} \u0418\u0437-\u043F\u043E\u0434 \u043A\u0430\u043F\u043E\u0442\u0430 \u0434\u044B\u043C \u2014 \u043C\u043E\u0442\u043E\u0440 \u0441\u043B\u0430\u0431\u0435\u0435\u0442","\u26A0\uFE0F \u041C\u0430\u0448\u0438\u043D\u0443 \u0442\u044F\u043D\u0435\u0442 \u0432 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 \u2014 \u0434\u0435\u0440\u0436\u0438 \u0440\u0443\u043B\u044C!","\u{1F525} \u041F\u041E\u0416\u0410\u0420! \u0415\u0449\u0451 \u0443\u0434\u0430\u0440 \u2014 \u0438 \u0432\u0437\u0440\u044B\u0432"][n];i&&yt(i,{kind:"bad",ms:3500})}onLocalLap(e){this.race&&e<this.race.laps&&(this.ui.banner(`\u041A\u0420\u0423\u0413 ${e+1}`,e+1===this.race.laps?"\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439!":"",1600),this.audio.beep(990,.12,.25))}maybeUpdate(){this.pendingReload&&!this.race&&(Dt.set("updatedAt",Date.now()),location.reload())}frame(e){requestAnimationFrame(o=>this.frame(o));let t=e-this.last,n=1e3/(Je.fps||60);if(t<n-2)return;this.last=e;let i=Math.min(.1,t/1e3),s=this.gfx,a=this.race;if(a&&a.loaded){let o=a.raceNow();if(this.phase==="countdown"){let u=Math.max(0,Math.min(5,Math.floor((this.net.now()-a.countAt)/700)+1));u!==this.lastLight&&(this.lastLight=u,u>0&&this.audio.beep(660,.16,.3),this.ui.cur==="hud"&&this.ui.el&&(this.ui.el.querySelector("#count").innerHTML=`<div class="lights">${[0,1,2,3,4].map(d=>`<i class="${d<u?"on":""}"></i>`).join("")}</div>`))}else this.lastLight=-1;let c=this.controls.read(i);if(a.update(i,c),this.fx.update(i,a,o),a.you!=null&&a.veh){let u=a.entries.get(a.you),d=Qi(u?u.fx:[],o,this._fx||(this._fx={})),f=a.state;if(this.audio.updateEngine(f.rpm,c.brake?0:Math.max(.12,c.gas||0),f.speed,f.slip,d.boost,f.off),this.fx.screenFx(d,i),s.scene.fog){let m=s.q.dist;s.scene.fog.far=d.fog?m*(1-.88*d.fog)+40:a.loc==="city"?m*2.6:m*1.02,s.scene.fog.near=d.fog?4:m*.18}}let l=s.camera,h=[...a.entries.values()].filter(u=>u.slot!==a.you&&u.vis).sort((u,d)=>(u.vis.x-l.position.x)**2+(u.vis.z-l.position.z)**2-((d.vis.x-l.position.x)**2+(d.vis.z-l.position.z)**2)).slice(0,3).map(u=>u.vis);this.audio.updateOthers(h,l),this.isOp?this.host.update(a,o):this.ui.updateHud(a,o),this.podium&&this.podium.update(i,s.camera),a.world.hype=this.podium?1:this.phase==="countdown"?.7:this.phase==="race"?o<6?1:.35:.15}else if(this.world&&this.world.ready){let o=this.world.track,c=o.gridSlot(0),l={x:c.x,y:o.surfaceY(c.s,c.d),z:c.z};if(this.isOp){let h=Math.max(1,this.showCars?.length||1),u=o.gridSlot(Math.min(h-1,11)),d=o.frame(u.s-22);this.hostCamT=(this.hostCamT||0)+i;let f=Math.sin(this.hostCamT*.15)*5;s.camera.position.set(d.x+d.nx*f,o.surfaceY(d.s||u.s,0)+11,d.z+d.nz*f);let m=o.frame((c.s+u.s)/2+6);s.camera.lookAt(m.x,o.surfaceY(c.s,0)+.5,m.z)}else this.orbit.update(i,l,{r:7.5,h:2.1,speed:.16,lookY:.6});!this.isOp&&s.camera.aspect>1.2&&this.ui.cur==="lobby"&&s.camera.rotateY(-Math.atan(.5*Math.tan(s.camera.fov*Math.PI/360)*s.camera.aspect)),this.devCam&&(s.camera.position.copy(this.devCam.p),s.camera.lookAt(this.devCam.t)),this.podium&&this.podium.update(i,s.camera),this.world.hype=.1,this.world.update(i,s.camera,l);for(let h of this.showCars||[])h.update(i,0,0);this.isOp&&this.host.update(null,0)}if(s.render(),s.adapt(t),Je.showFps){this.fpsEl=this.fpsEl||document.body.appendChild(Object.assign(document.createElement("div"),{style:"position:fixed;left:4px;bottom:4px;font:11px monospace;color:#9f9;z-index:99;pointer-events:none"}));let o=s.renderer.info.render;this.fpsEl.textContent=`${s.fps} fps \xB7 ${s.qName} \xB7 x${s.scale.toFixed(2)} \xB7 ${o.calls} calls \xB7 ${o.triangles/1e3|0}k`}else this.fpsEl&&(this.fpsEl.remove(),this.fpsEl=null)}};new fd;
