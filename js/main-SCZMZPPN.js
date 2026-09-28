var Zd=0,mh=1,Qd=2;var ys=1,ef=2,yr=3,si=0,Gt=1,Pt=2,ri=0,Vi=1,_r=2,gh=3,bh=4,tf=5;var _s=100,nf=101,sf=102,rf=103,af=104,of=200,cf=201,lf=202,hf=203,xh=204,vh=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,bf=212,xf=213,vf=214,To=0,Eo=1,Ao=2,sr=3,Ro=4,Co=5,Po=6,Io=7,Jo=0,yf=1,_f=2,dn=0,yh=1,_h=2,Mh=3,_a=4,Sh=5,wh=6,Th=7,ah="attached",Mf="detached",Eh=300,Wi=301,Ms=302,Zo=303,Qo=304,Ma=306,Hn=1e3,An=1001,rr=1002,Lt=1003,ec=1004;var Ss=1005;var Dt=1006,Mr=1007;var fn=1008;var bn=1009,Ah=1010,Rh=1011,Sr=1012,tc=1013,Wn=1014,yn=1015,_n=1016,nc=1017,ic=1018,wr=1020,Ch=35902,Ph=35899,Ih=1021,Lh=1022,Mn=1023,Zn=1026,qi=1027,sc=1028,rc=1029,Xi=1030,ac=1031;var oc=1033,Sa=33776,wa=33777,Ta=33778,Ea=33779,cc=35840,lc=35841,hc=35842,uc=35843,dc=36196,fc=37492,pc=37496,mc=37488,gc=37489,Aa=37490,bc=37491,xc=37808,vc=37809,yc=37810,_c=37811,Mc=37812,Sc=37813,wc=37814,Tc=37815,Ec=37816,Ac=37817,Rc=37818,Cc=37819,Pc=37820,Ic=37821,Lc=36492,Dc=36494,Fc=36495,Nc=36283,Uc=36284,Ra=36285,kc=36286,Sf=2200,wf=2201,Tf=2202,as=2300,os=2301,Mo=2302,oh=2303,is=2400,ss=2401,Qr=2402,Oc=2500,Ef=2501,Dh=0,Ca=1,Tr=2,Af=3200;var Pa=0,Rf=1,Cn="",vt="srgb",hn="srgb-linear",ea="linear",mt="srgb";var So=7680;var Cf=519,Pf=512,If=513,Lf=514,Bc=515,Df=516,Ff=517,zc=518,Nf=519,Fh=35044,Pn=35048;var Nh="300 es",Bn=2e3,ar=2001;function Km(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ym(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function or(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Uf(){let r=or("canvas");return r.style.display="block",r}var fd={},cr=null;function ta(...r){let e="THREE."+r.shift();cr?cr("log",e,...r):console.log(e,...r)}function kf(r){let e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Fe(...r){r=kf(r);let e="THREE."+r.shift();if(cr)cr("warn",e,...r);else{let t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function We(...r){r=kf(r);let e="THREE."+r.shift();if(cr)cr("error",e,...r);else{let t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function rs(...r){let e=r.join(" ");e in fd||(fd[e]=!0,Fe(...r))}function Of(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Bf={[To]:Eo,[Ao]:Po,[Ro]:Io,[sr]:Co,[Eo]:To,[Po]:Ao,[Io]:Ro,[Co]:sr},Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pd=1234567,Jr=Math.PI/180,cs=180/Math.PI;function zn(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[r&255]+Qt[r>>8&255]+Qt[r>>16&255]+Qt[r>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Uh(r,e){return(r%e+e)%e}function $m(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Jm(r,e,t){return r!==e?(t-r)/(e-r):0}function Zr(r,e,t){return(1-t)*r+t*e}function Zm(r,e,t,n){return Zr(r,e,1-Math.exp(-t*n))}function Qm(r,e=1){return e-Math.abs(Uh(r,e*2)-e)}function eg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function tg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ng(r,e){return r+Math.floor(Math.random()*(e-r+1))}function ig(r,e){return r+Math.random()*(e-r)}function sg(r){return r*(.5-Math.random())}function rg(r){r!==void 0&&(pd=r);let e=pd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ag(r){return r*Jr}function og(r){return r*cs}function cg(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function lg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function hg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ug(r,e,t,n,i){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*f,o*l);break;case"YXY":r.set(c*f,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*f,o*h,o*l);break;default:Fe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function gt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ri={DEG2RAD:Jr,RAD2DEG:cs,generateUUID:zn,clamp:nt,euclideanModulo:Uh,mapLinear:$m,inverseLerp:Jm,lerp:Zr,damp:Zm,pingpong:Qm,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:sg,seededRandom:rg,degToRad:ag,radToDeg:og,isPowerOfTwo:cg,ceilPowerOfTwo:lg,floorPowerOfTwo:hg,setQuaternionFromProperEuler:ug,normalize:gt,denormalize:On},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;var Be=Hh,Et=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],b=s[a+3];if(u!==b||c!==d||l!==f||h!==m){let g=c*d+l*f+h*m+u*b;g<0&&(d=-d,f=-f,m=-m,b=-b,g=-g);let p=1-o;if(g<.9995){let x=Math.acos(g),w=Math.sin(x);p=Math.sin(p*x)/w,o=Math.sin(o*x)/w,c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+m*o,u=u*p+b*o;let x=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=x,l*=x,h*=x,u*=x}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*f-l*d,e[t+1]=c*m+h*d+l*u-o*f,e[t+2]=l*m+h*f+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(s/2),d=c(n/2),f=c(i/2),m=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-s*c,this._y=i*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gh=class Gh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(md.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(md.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-s*i),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=i+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gh.prototype.isVector3=!0;var L=Gh,Nl=new L,md=new Et,Vh=class Vh{constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],b=i[0],g=i[3],p=i[6],x=i[1],w=i[4],v=i[7],S=i[2],M=i[5],A=i[8];return s[0]=a*b+o*x+c*S,s[3]=a*g+o*w+c*M,s[6]=a*p+o*v+c*A,s[1]=l*b+h*x+u*S,s[4]=l*g+h*w+u*M,s[7]=l*p+h*v+u*A,s[2]=d*b+f*x+m*S,s[5]=d*g+f*w+m*M,s[8]=d*p+f*v+m*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+i*s*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,f=l*s-a*c,m=t*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/m;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(h*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ul.makeScale(e,t)),this}rotate(e){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ul.makeRotation(-e)),this}translate(e,t){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;var qe=Vh,Ul=new qe,gd=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dg(){let r={enabled:!0,workingColorSpace:hn,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Cn?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[hn]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:gd,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:gd,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),r}var et=dg();function xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Bs,Lo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=or("canvas")),Bs.width=e.width,Bs.height=e.height;let i=Bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=xi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fg=0,lr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(kl(i[a].image)):s.push(kl(i[a]))}else s=kl(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Lo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}var pg=0,Ol=new L,zt=class r extends Gn{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=An,i=An,s=Dt,a=fn,o=Mn,c=bn,l=r.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=zn(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ol).x}get height(){return this.source.getSize(Ol).y}get depth(){return this.source.getSize(Ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Fe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Eh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hn:e.x=e.x-Math.floor(e.x);break;case An:e.x=e.x<0?0:1;break;case rr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hn:e.y=e.y-Math.floor(e.y);break;case An:e.y=e.y<0?0:1;break;case rr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=Eh;zt.DEFAULT_ANISOTROPY=1;var Wh=class Wh{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],b=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-b)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+b)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(l+1)/2,v=(f+1)/2,S=(p+1)/2,M=(h+d)/4,A=(u+b)/4,y=(m+g)/4;return w>v&&w>S?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=M/n,s=A/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=M/i,s=y/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=A/s,i=y/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(u-b)*(u-b)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(u-b)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;var ut=Wh,Do=class extends Gn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];let i={width:e,height:t,depth:n.depth},s=new zt(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},tn=class extends Do{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},na=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Fo=class extends zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=An,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var $o=class $o{constructor(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g)}set(e,t,n,i,s,a,o,c,l,h,u,d,f,m,b,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=b,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+m*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d+b*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-m,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,m=l*h,b=l*u;t[0]=d-b*o,t[4]=-a*u,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*h,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,m=o*h,b=o*u;t[0]=c*h,t[4]=m*l-f,t[8]=d*l+b,t[1]=c*u,t[5]=b*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=b-d*u,t[8]=m*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+m,t[10]=d-b*u}else if(e.order==="XZY"){let d=a*c,f=a*l,m=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+b,t[5]=a*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=o*h,t[10]=b*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,gg)}lookAt(e,t,n){let i=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Fi.crossVectors(n,xn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Fi.crossVectors(n,xn)),Fi.normalize(),ja.crossVectors(xn,Fi),i[0]=Fi.x,i[4]=ja.x,i[8]=xn.x,i[1]=Fi.y,i[5]=ja.y,i[9]=xn.y,i[2]=Fi.z,i[6]=ja.z,i[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],b=n[6],g=n[10],p=n[14],x=n[3],w=n[7],v=n[11],S=n[15],M=i[0],A=i[4],y=i[8],E=i[12],R=i[1],P=i[5],D=i[9],B=i[13],N=i[2],k=i[6],ee=i[10],F=i[14],j=i[3],G=i[7],U=i[11],J=i[15];return s[0]=a*M+o*R+c*N+l*j,s[4]=a*A+o*P+c*k+l*G,s[8]=a*y+o*D+c*ee+l*U,s[12]=a*E+o*B+c*F+l*J,s[1]=h*M+u*R+d*N+f*j,s[5]=h*A+u*P+d*k+f*G,s[9]=h*y+u*D+d*ee+f*U,s[13]=h*E+u*B+d*F+f*J,s[2]=m*M+b*R+g*N+p*j,s[6]=m*A+b*P+g*k+p*G,s[10]=m*y+b*D+g*ee+p*U,s[14]=m*E+b*B+g*F+p*J,s[3]=x*M+w*R+v*N+S*j,s[7]=x*A+w*P+v*k+S*G,s[11]=x*y+w*D+v*ee+S*U,s[15]=x*E+w*B+v*F+S*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],b=e[7],g=e[11],p=e[15],x=c*f-l*d,w=o*f-l*u,v=o*d-c*u,S=a*f-l*h,M=a*d-c*h,A=a*u-o*h;return t*(b*x-g*w+p*v)-n*(m*x-g*S+p*M)+i*(m*w-b*S+p*A)-s*(m*v-b*M+g*A)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+i*(s*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],b=e[13],g=e[14],p=e[15],x=t*o-n*a,w=t*c-i*a,v=t*l-s*a,S=n*c-i*o,M=n*l-s*o,A=i*l-s*c,y=h*b-u*m,E=h*g-d*m,R=h*p-f*m,P=u*g-d*b,D=u*p-f*b,B=d*p-f*g,N=x*B-w*D+v*P+S*R-M*E+A*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/N;return e[0]=(o*B-c*D+l*P)*k,e[1]=(i*D-n*B-s*P)*k,e[2]=(b*A-g*M+p*S)*k,e[3]=(d*M-u*A-f*S)*k,e[4]=(c*R-a*B-l*E)*k,e[5]=(t*B-i*R+s*E)*k,e[6]=(g*v-m*A-p*w)*k,e[7]=(h*A-d*v+f*w)*k,e[8]=(a*D-o*R+l*y)*k,e[9]=(n*R-t*D-s*y)*k,e[10]=(m*M-b*v+p*x)*k,e[11]=(u*v-h*M-f*x)*k,e[12]=(o*E-a*P-c*y)*k,e[13]=(t*P-n*E+i*y)*k,e[14]=(b*w-m*S-g*x)*k,e[15]=(h*S-u*w+d*x)*k,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,f=s*h,m=s*u,b=a*h,g=a*u,p=o*u,x=c*l,w=c*h,v=c*u,S=n.x,M=n.y,A=n.z;return i[0]=(1-(b+p))*S,i[1]=(f+v)*S,i[2]=(m-w)*S,i[3]=0,i[4]=(f-v)*M,i[5]=(1-(d+p))*M,i[6]=(g+x)*M,i[7]=0,i[8]=(m+w)*A,i[9]=(g-x)*A,i[10]=(1-(d+b))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=zs.set(i[0],i[1],i[2]).length(),o=zs.set(i[4],i[5],i[6]).length(),c=zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Fn.copy(this);let l=1/a,h=1/o,u=1/c;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=Bn,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,b;if(c)m=s/(a-s),b=a*s/(a-s);else if(o===Bn)m=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===ar)m=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Bn,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,b;if(c)m=1/(a-s),b=a/(a-s);else if(o===Bn)m=-2/(a-s),b=-(a+s)/(a-s);else if(o===ar)m=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$o.prototype.isMatrix4=!0;var Ae=$o,zs=new L,Fn=new Ae,mg=new L(0,0,0),gg=new L(1,1,1),Fi=new L,ja=new L,xn=new L,xd=new Ae,vd=new Et,mn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};mn.DEFAULT_ORDER="XYZ";var ia=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bg=0,yd=new L,Hs=new Et,ui=new Ae,Ka=new L,zr=new L,xg=new L,vg=new Et,_d=new L(1,0,0),Md=new L(0,1,0),Sd=new L(0,0,1),wd={type:"added"},yg={type:"removed"},Gs={type:"childadded",child:null},Bl={type:"childremoved",child:null},At=class r extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new L,t=new mn,n=new Et,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new qe}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ia,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(Sd,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(Sd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ui.lookAt(zr,Ka,this.up):ui.lookAt(Ka,zr,this.up),this.quaternion.setFromRotationMatrix(ui),i&&(ui.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(ui),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yg),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wd),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},_g={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),p=this._getHandJoint(l,b);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function zl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Uh(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zl(a,s,e+1/3),this.g=zl(a,s,e),this.b=zl(a,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=vt){function n(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Fe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return et.workingToColorSpace(en.copy(this),e),Math.round(nt(en.r*255,0,255))*65536+Math.round(nt(en.g*255,0,255))*256+Math.round(nt(en.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(en.copy(this),t);let n=en.r,i=en.g,s=en.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=vt){et.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,i=en.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ya);let n=Zr(Ni.h,Ya.h,t),i=Zr(Ni.s,Ya.s,t),s=Zr(Ni.l,Ya.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Se;Se.NAMES=zf;var sa=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},vi=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new L,di=new L,Hl=new L,fi=new L,Vs=new L,Ws=new L,Td=new L,Gl=new L,Vl=new L,Wl=new L,ql=new ut,Xl=new ut,jl=new ut,bi=class r{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Nn.subVectors(e,t),i.cross(Nn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Nn.subVectors(i,t),di.subVectors(n,t),Hl.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(di),c=Nn.dot(Hl),l=di.dot(di),h=di.dot(Hl),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,m=(a*h-o*c)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return ql.setScalar(0),Xl.setScalar(0),jl.setScalar(0),ql.fromBufferAttribute(e,t),Xl.fromBufferAttribute(e,n),jl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ql,s.x),a.addScaledVector(Xl,s.y),a.addScaledVector(jl,s.z),a}static isFrontFacing(e,t,n,i){return Nn.subVectors(n,t),di.subVectors(e,t),Nn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Nn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,a,o;Vs.subVectors(i,n),Ws.subVectors(s,n),Gl.subVectors(e,n);let c=Vs.dot(Gl),l=Ws.dot(Gl);if(c<=0&&l<=0)return t.copy(n);Vl.subVectors(e,i);let h=Vs.dot(Vl),u=Ws.dot(Vl);if(h>=0&&u<=h)return t.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Vs,a);Wl.subVectors(e,s);let f=Vs.dot(Wl),m=Ws.dot(Wl);if(m>=0&&f<=m)return t.copy(s);let b=f*l-c*m;if(b<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ws,o);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Td.subVectors(s,i),o=(u-h)/(u-h+(f-m)),t.copy(i).addScaledVector(Td,o);let p=1/(g+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Vs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ht=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(s,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$a.copy(n.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}let i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Ja.subVectors(this.max,Hr),qs.subVectors(e.a,Hr),Xs.subVectors(e.b,Hr),js.subVectors(e.c,Hr),Ui.subVectors(Xs,qs),ki.subVectors(js,Xs),Qi.subVectors(qs,js);let t=[0,-Ui.z,Ui.y,0,-ki.z,ki.y,0,-Qi.z,Qi.y,Ui.z,0,-Ui.x,ki.z,0,-ki.x,Qi.z,0,-Qi.x,-Ui.y,Ui.x,0,-ki.y,ki.x,0,-Qi.y,Qi.x,0];return!Kl(t,qs,Xs,js,Ja)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,qs,Xs,js,Ja))?!1:(Za.crossVectors(Ui,ki),t=[Za.x,Za.y,Za.z],Kl(t,qs,Xs,js,Ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},pi=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,$a=new Ht,qs=new L,Xs=new L,js=new L,Ui=new L,ki=new L,Qi=new L,Hr=new L,Ja=new L,Za=new L,es=new L;function Kl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){es.fromArray(r,s);let o=i.x*Math.abs(es.x)+i.y*Math.abs(es.y)+i.z*Math.abs(es.z),c=e.dot(es),l=t.dot(es),h=n.dot(es);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Ut=new L,Qa=new Be,Mg=0,Xe=class extends Gn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fh,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qa.fromBufferAttribute(this,t),Qa.applyMatrix3(e),this.setXY(t,Qa.x,Qa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ls=class extends Xe{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var hs=class extends Xe{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends Xe{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=new Ht,Gr=new L,Yl=new L,nn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);let t=Gr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Yl)),this.expandByPoint(Gr.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},wg=0,En=new Ae,$l=new At,Ks=new L,vn=new Ht,Vr=new Ht,Xt=new L,ot=class r extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Km(e)?hs:ls)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Xt.addVectors(vn.min,Vr.min),vn.expandByPoint(Xt),Xt.addVectors(vn.max,Vr.max),vn.expandByPoint(Xt)):(vn.expandByPoint(Vr.min),vn.expandByPoint(Vr.max))}vn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Xt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Xt));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xt.fromBufferAttribute(o,l),c&&(Ks.fromBufferAttribute(e,l),Xt.add(Ks)),i=Math.max(i,n.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let y=0;y<n.count;y++)o[y]=new L,c[y]=new L;let l=new L,h=new L,u=new L,d=new Be,f=new Be,m=new Be,b=new L,g=new L;function p(y,E,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,R),d.fromBufferAttribute(s,y),f.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),h.sub(l),u.sub(l),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(b.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),o[y].add(b),o[E].add(b),o[R].add(b),c[y].add(g),c[E].add(g),c[R].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,E=x.length;y<E;++y){let R=x[y],P=R.start,D=R.count;for(let B=P,N=P+D;B<N;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let w=new L,v=new L,S=new L,M=new L;function A(y){S.fromBufferAttribute(i,y),M.copy(S);let E=o[y];w.copy(E),w.sub(S.multiplyScalar(S.dot(E))).normalize(),v.crossVectors(M,E);let P=v.dot(c[y])<0?-1:1;a.setXYZW(y,w.x,w.y,w.z,P)}for(let y=0,E=x.length;y<E;++y){let R=x[y],P=R.start,D=R.count;for(let B=P,N=P+D;B<N;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xe(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),b=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,m=0;for(let b=0,g=c.length;b<g;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new Xe(d,h,u)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(i[c]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},us=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fh,this.updateRanges=[],this.version=0,this.uuid=zn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},ln=new L,zi=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),n=gt(n,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ta("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xe(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ta("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jl=new L,Tg=new L,Eg=new qe,kn=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Jl.subVectors(n,t).cross(Tg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let i=e.delta(Jl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Eg.getNormalMatrix(e),i=this.coplanarPoint(Jl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ag=0,sn=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=zn(),this.name="",this.type="Material",this.blending=Vi,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Fe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Fe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(t){let s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Se().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ur=class extends sn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ys,Wr=new L,$s=new L,Js=new L,Zs=new Be,qr=new Be,Hf=new Ae,eo=new L,Xr=new L,to=new L,Ed=new Be,Zl=new Be,Ad=new Be,ra=class extends At{constructor(e=new ur){if(super(),this.isSprite=!0,this.type="Sprite",Ys===void 0){Ys=new ot;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new us(t,5);Ys.setIndex([0,1,2,0,2,3]),Ys.setAttribute("position",new zi(n,3,0,!1)),Ys.setAttribute("uv",new zi(n,2,3,!1))}this.geometry=Ys,this.material=e,this.center=new Be(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&We('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$s.setFromMatrixScale(this.matrixWorld),Hf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$s.multiplyScalar(-Js.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let a=this.center;no(eo.set(-.5,-.5,0),Js,a,$s,i,s),no(Xr.set(.5,-.5,0),Js,a,$s,i,s),no(to.set(.5,.5,0),Js,a,$s,i,s),Ed.set(0,0),Zl.set(1,0),Ad.set(1,1);let o=e.ray.intersectTriangle(eo,Xr,to,!1,Wr);if(o===null&&(no(Xr.set(-.5,.5,0),Js,a,$s,i,s),Zl.set(0,1),o=e.ray.intersectTriangle(eo,to,Xr,!1,Wr),o===null))return;let c=e.ray.origin.distanceTo(Wr);c<e.near||c>e.far||t.push({distance:c,point:Wr.clone(),uv:bi.getInterpolation(Wr,eo,Xr,to,Ed,Zl,Ad,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function no(r,e,t,n,i,s){Zs.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(qr.x=s*Zs.x-i*Zs.y,qr.y=i*Zs.x+s*Zs.y):qr.copy(Zs),r.copy(e),r.x+=qr.x,r.y+=qr.y,r.applyMatrix4(Hf)}var mi=new L,Ql=new L,io=new L,so=new L,ds=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,t),mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),io.copy(t).sub(e).normalize(),so.copy(this.origin).sub(Ql);let s=e.distanceTo(t)*.5,a=-this.direction.dot(io),o=so.dot(this.direction),c=-so.dot(io),l=so.lengthSq(),h=Math.abs(1-a*a),u,d,f,m;if(h>0)if(u=a*c-o,d=a*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let b=1/h;u*=b,d*=b,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ql).addScaledVector(io,d),f}intersectSphere(e,t){if(e.radius<0)return null;mi.subVectors(e.center,this.origin);let n=mi.dot(this.direction),i=mi.dot(mi)-n*n,s=e.radius*e.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,t,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,m=t.x-a.x,b=t.y-a.y,g=t.z-a.z,p=n.x-a.x,x=n.y-a.y,w=n.z-a.z,v=Math.abs(c),S=Math.abs(l),M=Math.abs(h),A,y,E,R,P,D,B,N,k,ee,F,j;if(v>=S&&v>=M?(E=c,D=u,k=m,j=p,c>=0?(A=l,y=h,R=d,P=f,B=b,N=g,ee=x,F=w):(A=h,y=l,R=f,P=d,B=g,N=b,ee=w,F=x)):S>=M?(E=l,D=d,k=b,j=x,l>=0?(A=h,y=c,R=f,P=u,B=g,N=m,ee=w,F=p):(A=c,y=h,R=u,P=f,B=m,N=g,ee=p,F=w)):(E=h,D=f,k=g,j=w,h>=0?(A=c,y=l,R=u,P=d,B=m,N=b,ee=p,F=x):(A=l,y=c,R=d,P=u,B=b,N=m,ee=x,F=p)),E===0)return null;let G=A/E,U=y/E,J=1/E,I=R-G*D,V=P-U*D,ie=B-G*k,re=N-U*k,ce=ee-G*j,X=F-U*j,W=ce*re-X*ie,le=I*X-V*ce,de=ie*V-re*I;if(i){if(W<0||le<0||de<0)return null}else if((W<0||le<0||de<0)&&(W>0||le>0||de>0))return null;let Q=W+le+de;if(Q===0)return null;let ve=J*(W*D+le*k+de*j);return(Q>0?ve<0:ve>0)?null:this.at(ve/Q,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rd=new Ae,ts=new ds,ro=new nn,Cd=new L,ao=new L,oo=new L,co=new L,eh=new L,lo=new L,Pd=new L,ho=new L,Le=class extends At{constructor(e=new ot,t=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(eh.fromBufferAttribute(u,e),a?lo.addScaledVector(eh,h):lo.addScaledVector(eh.sub(t),h))}t.add(lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ro.copy(n.boundingSphere),ro.applyMatrix4(s),ts.copy(e.ray).recast(e.near),!(ro.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ro,Cd)===null||ts.origin.distanceToSquared(Cd)>(e.far-e.near)**2))&&(Rd.copy(s).invert(),ts.copy(e.ray).applyMatrix4(Rd),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ts)))}_computeIntersections(e,t,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),w=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,S=w;v<S;v+=3){let M=o.getX(v),A=o.getX(v+1),y=o.getX(v+2);i=uo(this,p,e,n,l,h,u,M,A,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);i=uo(this,a,e,n,l,h,u,x,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,b=d.length;m<b;m++){let g=d[m],p=a[g.materialIndex],x=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=x,S=w;v<S;v+=3){let M=v,A=v+1,y=v+2;i=uo(this,p,e,n,l,h,u,M,A,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let g=m,p=b;g<p;g+=3){let x=g,w=g+1,v=g+2;i=uo(this,a,e,n,l,h,u,x,w,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Rg(r,e,t,n,i,s,a,o){let c;if(e.side===Gt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===si,o),c===null)return null;ho.copy(o),ho.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ho);return l<t.near||l>t.far?null:{distance:l,point:ho.clone(),object:r}}function uo(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,ao),r.getVertexPosition(c,oo),r.getVertexPosition(l,co);let h=Rg(r,e,t,n,ao,oo,co,Pd);if(h){let u=new L;bi.getBarycoord(Pd,ao,oo,co,u),i&&(h.uv=bi.getInterpolatedAttribute(i,o,c,l,u,new Be)),s&&(h.uv1=bi.getInterpolatedAttribute(s,o,c,l,u,new Be)),a&&(h.normal=bi.getInterpolatedAttribute(a,o,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new L,materialIndex:0};bi.getNormal(ao,oo,co,d.normal),h.face=d,h.barycoord=u}return h}var jr=new ut,Id=new ut,Ld=new ut,Cg=new ut,Dd=new Ae,fo=new L,th=new nn,Fd=new Ae,nh=new ds,aa=class extends Le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ah,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingBox.expandByPoint(fo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new nn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fo),this.boundingSphere.expandByPoint(fo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),th.copy(this.boundingSphere),th.applyMatrix4(i),e.ray.intersectsSphere(th)!==!1&&(Fd.copy(i).invert(),nh.copy(e.ray).applyMatrix4(Fd),!(this.boundingBox!==null&&nh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,nh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ut,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ah?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Mf?this.bindMatrixInverse.copy(this.bindMatrix).invert():Fe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Id.fromBufferAttribute(i.attributes.skinIndex,e),Ld.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(jr.copy(t),t.set(0,0,0,0)):(jr.set(...t,1),t.set(0,0,0)),jr.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let a=Ld.getComponent(s);if(a!==0){let o=Id.getComponent(s);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Cg.copy(jr).applyMatrix4(Dd),a)}}return t.isVector4&&(t.w=jr.w),t.applyMatrix4(this.bindMatrixInverse)}},dr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},fr=class extends zt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Lt,h=Lt,u,d){super(null,a,o,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nd=new Ae,Pg=new Ae,oa=class r{constructor(e=[],t=[]){this.uuid=zn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Fe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){let o=e[s]?e[s].matrixWorld:Pg;Nd.multiplyMatrices(o,t[s]),Nd.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new r(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fr(t,e,e,Mn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let s=e.bones[n],a=t[s];a===void 0&&(Fe("Skeleton: No bone found with UUID:",s),a=new dr),this.bones.push(a),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},Ot=class extends Xe{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new Ae,Ud=new Ae,po=[],kd=new Ht,Ig=new Ae,Kr=new Le,Yr=new nn,un=class extends Le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ot(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),kd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(kd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Yr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Kr.geometry=this.geometry,Kr.material=this.material,Kr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(n),e.ray.intersectsSphere(Yr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Qs),Ud.multiplyMatrices(n,Qs),Kr.matrixWorld=Ud,Kr.raycast(e,po);for(let a=0,o=po.length;a<o;a++){let c=po[a];c.instanceId=s,c.object=this,t.push(c)}po.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Ot(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(i*this.count),i,this.count,sc,yn));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ns=new nn,Lg=new Be(.5,.5),mo=new L,Hi=class{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,a=new kn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn,n=!1){let i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],b=s[9],g=s[10],p=s[11],x=s[12],w=s[13],v=s[14],S=s[15];if(i[0].setComponents(l-a,f-h,p-m,S-x).normalize(),i[1].setComponents(l+a,f+h,p+m,S+x).normalize(),i[2].setComponents(l+o,f+u,p+b,S+w).normalize(),i[3].setComponents(l-o,f-u,p-b,S-w).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,f-d,p-g,S-v).normalize();else if(i[4].setComponents(l-c,f-d,p-g,S-v).normalize(),t===Bn)i[5].setComponents(l+c,f+d,p+g,S+v).normalize();else if(t===ar)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ns)}intersectsSprite(e){ns.center.set(0,0,0);let t=Lg.distanceTo(e.center);return ns.radius=.7071067811865476+t,ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(ns)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(mo.x=i.normal.x>0?e.max.x:e.min.x,mo.y=i.normal.y>0?e.max.y:e.min.y,mo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(mo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var pr=class extends sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},No=new L,Uo=new L,Od=new Ae,$r=new ds,go=new nn,ih=new L,Bd=new L,fs=class extends At{constructor(e=new ot,t=new pr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)No.fromBufferAttribute(t,i-1),Uo.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=No.distanceTo(Uo);e.setAttribute("lineDistance",new ht(n,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(i),go.radius+=s,e.ray.intersectsSphere(go)===!1)return;Od.copy(i).invert(),$r.copy(e.ray).applyMatrix4(Od);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=h.getX(b),x=h.getX(b+1),w=bo(this,e,$r,c,p,x,b);w&&t.push(w)}if(this.isLineLoop){let b=h.getX(m-1),g=h.getX(f),p=bo(this,e,$r,c,b,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let b=f,g=m-1;b<g;b+=l){let p=bo(this,e,$r,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){let b=bo(this,e,$r,c,m-1,f,m-1);b&&t.push(b)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function bo(r,e,t,n,i,s,a){let o=r.geometry.attributes.position;if(No.fromBufferAttribute(o,i),Uo.fromBufferAttribute(o,s),t.distanceSqToSegment(No,Uo,ih,Bd)>n)return;ih.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(ih);if(!(l<e.near||l>e.far))return{distance:l,point:Bd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}var zd=new L,Hd=new L,ca=class extends fs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)zd.fromBufferAttribute(t,i),Hd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zd.distanceTo(Hd);e.setAttribute("lineDistance",new ht(n,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},la=class extends fs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},mr=class extends sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gd=new Ae,ch=new ds,xo=new nn,vo=new L,ps=class extends At{constructor(e=new ot,t=new mr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=s,e.ray.intersectsSphere(xo)===!1)return;Gd.copy(i).invert(),ch.copy(e.ray).applyMatrix4(Gd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,b=f;m<b;m++){let g=l.getX(m);vo.fromBufferAttribute(u,g),Vd(vo,g,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let m=d,b=f;m<b;m++)vo.fromBufferAttribute(u,m),Vd(vo,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Vd(r,e,t,n,i,s,a){let o=ch.distanceSqToPoint(r);if(o<t){let c=new L;ch.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ha=class extends zt{constructor(e=[],t=Wi,n,i,s,a,o,c,l,h){super(e,t,n,i,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yi=class extends zt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gi=class extends zt{constructor(e,t,n=Wn,i,s,a,o=Lt,c=Lt,l,h=Zn,u=1){if(h!==Zn&&h!==qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ko=class extends Gi{constructor(e,t=Wn,n=Wi,i,s,a=Lt,o=Lt,c,l=Zn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ua=class extends zt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jt=class r extends ot{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function m(b,g,p,x,w,v,S,M,A,y,E){let R=v/A,P=S/y,D=v/2,B=S/2,N=M/2,k=A+1,ee=y+1,F=0,j=0,G=new L;for(let U=0;U<ee;U++){let J=U*P-B;for(let I=0;I<k;I++){let V=I*R-D;G[b]=V*x,G[g]=J*w,G[p]=N,l.push(G.x,G.y,G.z),G[b]=0,G[g]=0,G[p]=M>0?1:-1,h.push(G.x,G.y,G.z),u.push(I/A),u.push(1-U/y),F+=1}}for(let U=0;U<y;U++)for(let J=0;J<A;J++){let I=d+J+k*U,V=d+J+k*(U+1),ie=d+(J+1)+k*(U+1),re=d+(J+1)+k*U;c.push(I,V,re),c.push(V,ie,re),j+=6}o.addGroup(f,j,E),f+=j,d+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},gr=class r extends ot{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,m=n*2+s,b=i+1,g=new L,p=new L;for(let x=0;x<=m;x++){let w=0,v=0,S=0,M=0;if(x<=n){let E=x/n,R=E*Math.PI/2;v=-h-e*Math.cos(R),S=e*Math.sin(R),M=-e*Math.cos(R),w=E*u}else if(x<=n+s){let E=(x-n)/s;v=-h+E*t,S=e,M=0,w=u+E*d}else{let E=(x-n-s)/n,R=E*Math.PI/2;v=h+e*Math.sin(R),S=e*Math.cos(R),M=e*Math.sin(R),w=u+d+E*u}let A=Math.max(0,Math.min(1,w/f)),y=0;x===0?y=.5/i:x===m&&(y=-.5/i);for(let E=0;E<=i;E++){let R=E/i,P=R*Math.PI*2,D=Math.sin(P),B=Math.cos(P);p.x=-S*B,p.y=v,p.z=S*D,o.push(p.x,p.y,p.z),g.set(-S*B,M,S*D),g.normalize(),c.push(g.x,g.y,g.z),l.push(R+y,A)}if(x>0){let E=(x-1)*b;for(let R=0;R<i;R++){let P=E+R,D=E+R+1,B=x*b+R,N=x*b+R+1;a.push(P,D,B),a.push(D,N,B)}}}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},da=class r extends ot{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new L,h=new Be;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_i=class r extends ot{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,b=[],g=n/2,p=0;x(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function x(){let v=new L,S=new L,M=0,A=(t-e)/n;for(let y=0;y<=s;y++){let E=[],R=y/s,P=R*(t-e)+e;for(let D=0;D<=i;D++){let B=D/i,N=B*c+o,k=Math.sin(N),ee=Math.cos(N);S.x=P*k,S.y=-R*n+g,S.z=P*ee,u.push(S.x,S.y,S.z),v.set(k,A,ee).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-R),E.push(m++)}b.push(E)}for(let y=0;y<i;y++)for(let E=0;E<s;E++){let R=b[E][y],P=b[E+1][y],D=b[E+1][y+1],B=b[E][y+1];(e>0||E!==0)&&(h.push(R,P,B),M+=3),(t>0||E!==s-1)&&(h.push(P,D,B),M+=3)}l.addGroup(p,M,0),p+=M}function w(v){let S=m,M=new Be,A=new L,y=0,E=v===!0?e:t,R=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,g*R,0),d.push(0,R,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let N=D/i*c+o,k=Math.cos(N),ee=Math.sin(N);A.x=E*ee,A.y=g*R,A.z=E*k,u.push(A.x,A.y,A.z),d.push(0,R,0),M.x=k*.5+.5,M.y=ee*.5*R+.5,f.push(M.x,M.y),m++}for(let D=0;D<i;D++){let B=S+D,N=P+D;v===!0?h.push(N,N+1,B):h.push(N+1,N,B),y+=3}l.addGroup(p,y,v===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fa=class r extends ot{constructor(e=[new Be(0,-.5),new Be(.5,0),new Be(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=nt(i,0,Math.PI*2);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new L,d=new Be,f=new L,m=new L,b=new L,g=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,b.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(b.x,b.y,b.z);break;default:g=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=b.x,f.y+=b.y,f.z+=b.z,f.normalize(),c.push(f.x,f.y,f.z),b.copy(m)}for(let x=0;x<=t;x++){let w=n+x*h*i,v=Math.sin(w),S=Math.cos(w);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*v,u.y=e[M].y,u.z=e[M].x*S,a.push(u.x,u.y,u.z),d.x=x/t,d.y=M/(e.length-1),o.push(d.x,d.y);let A=c[3*M+0]*v,y=c[3*M+1],E=c[3*M+0]*S;l.push(A,y,E)}}for(let x=0;x<t;x++)for(let w=0;w<e.length-1;w++){let v=w+x*e.length,S=v,M=v+e.length,A=v+e.length+1,y=v+1;s.push(S,M,y),s.push(A,y,M)}this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.points,e.segments,e.phiStart,e.phiLength)}};var rn=class r extends ot{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,f=[],m=[],b=[],g=[];for(let p=0;p<h;p++){let x=p*d-a;for(let w=0;w<l;w++){let v=w*u-s;m.push(v,-x,0),b.push(0,0,1),g.push(w/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){let w=x+l*p,v=x+l*(p+1),S=x+1+l*(p+1),M=x+1+l*p;f.push(w,v,M),f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(b,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Mi=class r extends ot{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new L,d=new L,f=[],m=[],b=[],g=[];for(let p=0;p<=n;p++){let x=[],w=p/n,v=a+w*o,S=e*Math.cos(v),M=Math.sqrt(e*e-S*S),A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){let E=y/t,R=i+E*s;u.x=-M*Math.cos(R),u.y=S,u.z=M*Math.sin(R),m.push(u.x,u.y,u.z),d.copy(u).normalize(),b.push(d.x,d.y,d.z),g.push(E+A,1-w),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let w=h[p][x+1],v=h[p][x],S=h[p+1][x],M=h[p+1][x+1];(p!==0||a>0)&&f.push(w,v,M),(p!==n-1||c<Math.PI)&&f.push(v,S,M)}this.setIndex(f),this.setAttribute("position",new ht(m,3)),this.setAttribute("normal",new ht(b,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ms=class r extends ot{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],u=[],d=new L,f=new L,m=new L;for(let b=0;b<=n;b++){let g=a+b/n*o;for(let p=0;p<=i;p++){let x=p/i*s;f.x=(e+t*Math.cos(g))*Math.cos(x),f.y=(e+t*Math.cos(g))*Math.sin(x),f.z=t*Math.sin(g),l.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),m.subVectors(f,d).normalize(),h.push(m.x,m.y,m.z),u.push(p/i),u.push(b/n)}}for(let b=1;b<=n;b++)for(let g=1;g<=i;g++){let p=(i+1)*b+g-1,x=(i+1)*(b-1)+g-1,w=(i+1)*(b-1)+g,v=(i+1)*b+g;c.push(p,x,v),c.push(x,w,v)}this.setIndex(c),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ws(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];if(Wd(i))i.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(Wd(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function an(r){let e={};for(let t=0;t<r.length;t++){let n=ws(r[t]);for(let i in n)e[i]=n[i]}return e}function Wd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Dg(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function kh(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Er={clone:ws,merge:an},Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=Dg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Se().setHex(i.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(i.value);break;case"v3":this.uniforms[n].value=new L().fromArray(i.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ye=class extends sn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},jt=class extends Ye{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pa=class extends sn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Jo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bo=class extends sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bi(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function wo(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}function Ug(r){function e(i,s){return r[i]-r[s]}let t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function qd(r,e,t){let n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){let o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function kg(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}var Qn=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ho=class extends Qn{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:is,endingEnd:is}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ss:s=e,o=2*t-n;break;case Qr:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ss:a=e,c=2*n-t;break;case Qr:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),b=m*m,g=b*m,p=-d*g+2*d*b-d*m,x=(1+d)*g+(-1.5-2*d)*b+(-.5+d)*m+1,w=(-1-f)*g+(1.5+f)*b+.5*m,v=f*g-f*b;for(let S=0;S!==o;++S)s[S]=p*a[h+S]+x*a[l+S]+w*a[c+S]+v*a[u+S];return s}},ma=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Go=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends Qn{interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let m=(n-t)/(i-t),b=1-m;for(let g=0;g!==o;++g)s[g]=a[l+g]*b+a[c+g]*m;return s}let d=o*2,f=e-1;for(let m=0;m!==o;++m){let b=a[l+m],g=a[c+m],p=f*d+m*2,x=u[p],w=u[p+1],v=e*d+m*2,S=h[v],M=h[v+1],A=Bg(n,t,x,S,i);s[m]=Gf(A,b,w,M,g)}return s}};function Gf(r,e,t,n,i){let s=1-r;return s*s*s*e+3*s*s*r*t+3*s*r*r*n+r*r*r*i}function Og(r,e,t,n,i){let s=1-r;return 3*s*s*(t-e)+6*s*r*(n-t)+3*r*r*(i-n)}function Bg(r,e,t,n,i){let s=(r-e)/(i-e);for(let a=0;a<8;a++){let o=Gf(s,e,t,n,i)-r;if(Math.abs(o)<1e-10)break;let c=Og(s,e,t,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var gn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bi(t,this.TimeBufferType),this.values=Bi(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Bi(e.times,Array),values:Bi(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),wo(e.settings)&&(n.settings={inTangents:Bi(e.settings.inTangents,Array),outTangents:Bi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ma(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case as:t=this.InterpolantFactoryMethodDiscrete;break;case os:t=this.InterpolantFactoryMethodLinear;break;case Mo:t=this.InterpolantFactoryMethodSmooth;break;case oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Fe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return as;case this.InterpolantFactoryMethodLinear:return os;case this.InterpolantFactoryMethodSmooth:return Mo;case this.InterpolantFactoryMethodBezier:return oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;wo(this.settings)&&(Xd(this.settings.inTangents,e),Xd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Ym(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){We("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Mo,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let b=t[u+m];if(b!==t[d+m]||b!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,wo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Xd(r,e){for(let t=0,n=r.length;t!==n;t+=2)r[t]*=e}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=os;var Si=class extends gn{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=as;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};ga.prototype.ValueTypeName="color";var wi=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};wi.prototype.ValueTypeName="number";var Wo=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let h=l+o;l!==h;l+=4)Et.slerpFlat(s,0,a,l-o,a,l,c);return s}},Rn=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}};Rn.prototype.ValueTypeName="quaternion";Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends gn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=as;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Vn=class extends gn{constructor(e,t,n,i){super(e,t,n,i)}};Vn.prototype.ValueTypeName="vector";var ei=class{constructor(e="",t=-1,n=[],i=Oc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Hg(n[a]).scale(i));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(gn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);let h=Ug(c);c=qd(c,1,h),l=qd(l,1,h),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new wi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(s);if(h&&h.length>1){let u=h[1],d=i[u];d||(i[u]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function zg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wi;case"vector":case"vector2":case"vector3":case"vector4":return Vn;case"color":return ga;case"quaternion":return Rn;case"bool":case"boolean":return Si;case"string":return Ti}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Hg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zg(r.type);if(r.times===void 0){let n=[],i=[];kg(r.keys,n,i,"value"),r.times=n,r.values=i}let t;return e.parse!==void 0?t=e.parse(r):t=new e(r.name,r.times,r.values,r.interpolation),wo(r.settings)&&(t.settings={inTangents:Bi(r.settings.inTangents,Float32Array),outTangents:Bi(r.settings.outTangents,Float32Array)}),t}var Jn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(jd(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!jd(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function jd(r){try{let e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var qo=class{constructor(e,t,n){let i=this,s=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&i.onStart!==void 0&&i.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],m=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Vf=new qo,ti=class{constructor(e){this.manager=e!==void 0?e:Vf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var gi={},lh=class extends Error{constructor(e,t){super(e),this.response=t}},br=class extends ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=Jn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:i});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Fe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=gi[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,b=0,g=new ReadableStream({start(p){x();function x(){u.read().then(({done:w,value:v})=>{if(w)p.close();else{b+=v.byteLength;let S=new ProgressEvent("progress",{lengthComputable:m,loaded:b,total:f});for(let M=0,A=h.length;M<A;M++){let y=h[M];y.onProgress&&y.onProgress(S)}p.enqueue(v),x()}},w=>{p.error(w)})}}});return new Response(g)}else throw new lh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Jn.add(`file:${e}`,l);let h=gi[e];delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=gi[e];if(h===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=new WeakMap,Xo=class extends ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Jn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=er.get(a);u===void 0&&(u=[],er.set(a,u)),u.push({onLoad:t,onError:i})}return a}let o=or("img");function c(){h(),t&&t(this);let u=er.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}er.delete(this),s.manager.itemEnd(e)}function l(u){h(),i&&i(u),Jn.remove(`image:${e}`);let d=er.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}er.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var gs=class extends ti{constructor(e){super(e)}load(e,t,n,i){let s=new zt,a=new Xo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}},bs=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xs=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sh=new Ae,Kd=new L,Yd=new L,xr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hi,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Kd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Kd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){sh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(sh,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===ar||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yo=new L,_o=new Et,$n=new L,ba=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yo,_o,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,_o,$n.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yo,_o,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yo,_o,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new L,$d=new Be,Jd=new Be,kt=class extends ba{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,$d,Jd),t.subVectors(Jd,$d)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},hh=class extends xr{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},xa=class extends bs{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new hh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},uh=class extends xr{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},va=class extends bs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new uh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ni=class extends ba{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dh=class extends xr{constructor(){super(new ni(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ei=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ai=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},vs=class extends ot{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var rh=new WeakMap,ya=class extends ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Fe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Fe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Jn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{rh.has(a)===!0?(i&&i(rh.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(l),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),rh.set(c,l),Jn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Jn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tr=-90,nr=1,vr=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(tr,nr,e,t);i.layers=this.layers,this.add(i);let s=new kt(tr,nr,e,t);s.layers=this.layers,this.add(s);let a=new kt(tr,nr,e,t);a.layers=this.layers,this.add(a);let o=new kt(tr,nr,e,t);o.layers=this.layers,this.add(o);let c=new kt(tr,nr,e,t);c.layers=this.layers,this.add(c);let l=new kt(tr,nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},jo=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ko=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,s=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[s+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,s,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Et.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){let a=this._workIndex*s;Et.multiplyQuaternionsFlat(e,a,e,t,e,n),Et.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){let a=1-i;for(let o=0;o!==s;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Oh="\\[\\]\\.:\\/",Gg=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",Vg="[^"+Oh.replace("\\.","")+"]",Wg=/((?:WC+[\/:])*)/.source.replace("WC",Bh),qg=/(WCOD+)?/.source.replace("WCOD",Vg),Xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),jg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),Kg=new RegExp("^"+Wg+qg+Xg+jg+"$"),Yg=["material","materials","bones","map"],fh=class{constructor(e,t,n){let i=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gg,"")}static parseTrackName(e){let t=Kg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Yg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Fe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;We("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=fh;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Yo=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let s=t.tracks,a=s.length,o=new Array(a),c={endingStart:is,endingEnd:is};for(let l=0;l!==a;++l){let h=s[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=wf,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,s=e._clip.duration,a=s/i,o=i/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,s=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Ef:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Oc:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,s=this._loopCount,a=n===Tf;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Sf){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,s+=Math.abs(o);let c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(e?i.endingStart=this.zeroSlopeAtStart?ss:is:i.endingStart=Qr,t?i.endingEnd=this.zeroSlopeAtEnd?ss:is:i.endingEnd=Qr)}_scheduleFading(e,t,n){let i=this._mixer,s=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}},$g=new Float32Array(1),ii=class extends Gn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==s;++u){let d=i[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,a[u]=m;else{if(m=a[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let b=t&&t._propertyBindings[u].binding.parsedPath;m=new Ko(xt.create(n,f,b),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[u]=m}o[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,s=this._actionsByClip,a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,s=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ma(new Float32Array(2),new Float32Array(2),1,$g),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let i=t||this._root,s=i.uuid,a=typeof e=="string"?ei.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Oc),c!==void 0){let u=c.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Yo(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,i=n.uuid,s=typeof e=="string"?ei.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,s,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){let a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(let a in s){let o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var qh=class qh{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};qh.prototype.isMatrix2=!0;var ph=qh;function zh(r,e,t,n){let i=Jg(n);switch(t){case Ih:return r*e;case sc:return r*e/i.components*i.byteLength;case rc:return r*e/i.components*i.byteLength;case Xi:return r*e*2/i.components*i.byteLength;case ac:return r*e*2/i.components*i.byteLength;case Lh:return r*e*3/i.components*i.byteLength;case Mn:return r*e*4/i.components*i.byteLength;case oc:return r*e*4/i.components*i.byteLength;case Sa:case wa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Ea:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lc:case uc:return Math.max(r,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(r,8)*Math.max(e,8)/2;case dc:case fc:case mc:case gc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pc:case Aa:case bc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vc:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case _c:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case wc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Pc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lc:case Dc:case Fc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nc:case Uc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ra:case kc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jg(r){switch(r){case bn:case Ah:return{byteLength:1,components:1};case Sr:case Rh:case _n:return{byteLength:2,components:1};case nc:case ic:return{byteLength:2,components:4};case Wn:case tc:case yn:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function up(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function e0(r){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,o),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],b=u[f];b.start<=m.start+m.count+1?m.count=Math.max(m.count,b.start+b.count-m.start):(++d,u[d]=b)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let b=u[f];r.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
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
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
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
#endif`,c0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
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
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,d0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,p0=`#ifdef USE_IRIDESCENCE
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
#endif`,m0=`#ifdef USE_BUMPMAP
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
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,R0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I0="gl_FragColor = linearToOutputTexel( gl_FragColor );",L0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,D0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j0=`#ifdef USE_ENVMAP
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
#endif`,K0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z0=`PhysicalMaterial material;
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
#endif`,Q0=`uniform sampler2D dfgLUT;
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
}`,eb=`
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
#endif`,tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ib=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ub=`#if defined( USE_POINTS_UV )
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
#endif`,db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
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
#endif`,xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ab=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ub=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zb=`float getShadowMask() {
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
}`,Hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gb=`#ifdef USE_SKINNING
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
#endif`,Vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wb=`#ifdef USE_SKINNING
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
#endif`,qb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yb=`#ifdef USE_TRANSMISSION
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
#endif`,$b=`#ifdef USE_TRANSMISSION
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
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nx=`uniform sampler2D t2D;
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
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
}`,cx=`#if DEPTH_PACKING == 3200
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
}`,lx=`#define DISTANCE
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
}`,hx=`#define DISTANCE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fx=`uniform float scale;
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
}`,px=`uniform vec3 diffuse;
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
}`,mx=`#include <common>
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
}`,gx=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,xx=`#define LAMBERT
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
}`,vx=`#define MATCAP
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
}`,yx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,Mx=`#define NORMAL
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
}`,Sx=`#define PHONG
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
}`,wx=`#define PHONG
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
}`,Tx=`#define STANDARD
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
}`,Ex=`#define STANDARD
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
}`,Ax=`#define TOON
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
}`,Rx=`#define TOON
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
}`,Cx=`uniform float size;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Ix=`#include <common>
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
}`,Lx=`uniform vec3 color;
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
}`,Dx=`uniform float rotation;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:t0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:a0,aomap_fragment:o0,aomap_pars_fragment:c0,batching_pars_vertex:l0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:d0,bsdfs:f0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:b0,clipping_planes_pars_vertex:x0,clipping_planes_vertex:v0,color_fragment:y0,color_pars_fragment:_0,color_pars_vertex:M0,color_vertex:S0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:R0,emissivemap_fragment:C0,emissivemap_pars_fragment:P0,colorspace_fragment:I0,colorspace_pars_fragment:L0,envmap_fragment:D0,envmap_common_pars_fragment:F0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:j0,envmap_vertex:k0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:G0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:q0,lights_pars_begin:X0,lights_toon_fragment:K0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:J0,lights_physical_fragment:Z0,lights_physical_pars_fragment:Q0,lights_fragment_begin:eb,lights_fragment_maps:tb,lights_fragment_end:nb,lightprobes_pars_fragment:ib,logdepthbuf_fragment:sb,logdepthbuf_pars_fragment:rb,logdepthbuf_pars_vertex:ab,logdepthbuf_vertex:ob,map_fragment:cb,map_pars_fragment:lb,map_particle_fragment:hb,map_particle_pars_fragment:ub,metalnessmap_fragment:db,metalnessmap_pars_fragment:fb,morphinstance_vertex:pb,morphcolor_vertex:mb,morphnormal_vertex:gb,morphtarget_pars_vertex:bb,morphtarget_vertex:xb,normal_fragment_begin:vb,normal_fragment_maps:yb,normal_pars_fragment:_b,normal_pars_vertex:Mb,normal_vertex:Sb,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:Ab,iridescence_pars_fragment:Rb,opaque_fragment:Cb,packing:Pb,premultiplied_alpha_fragment:Ib,project_vertex:Lb,dithering_fragment:Db,dithering_pars_fragment:Fb,roughnessmap_fragment:Nb,roughnessmap_pars_fragment:Ub,shadowmap_pars_fragment:kb,shadowmap_pars_vertex:Ob,shadowmap_vertex:Bb,shadowmask_pars_fragment:zb,skinbase_vertex:Hb,skinning_pars_vertex:Gb,skinning_vertex:Vb,skinnormal_vertex:Wb,specularmap_fragment:qb,specularmap_pars_fragment:Xb,tonemapping_fragment:jb,tonemapping_pars_fragment:Kb,transmission_fragment:Yb,transmission_pars_fragment:$b,uv_pars_fragment:Jb,uv_pars_vertex:Zb,uv_vertex:Qb,worldpos_vertex:ex,background_vert:tx,background_frag:nx,backgroundCube_vert:ix,backgroundCube_frag:sx,cube_vert:rx,cube_frag:ax,depth_vert:ox,depth_frag:cx,distance_vert:lx,distance_frag:hx,equirect_vert:ux,equirect_frag:dx,linedashed_vert:fx,linedashed_frag:px,meshbasic_vert:mx,meshbasic_frag:gx,meshlambert_vert:bx,meshlambert_frag:xx,meshmatcap_vert:vx,meshmatcap_frag:yx,meshnormal_vert:_x,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:wx,meshphysical_vert:Tx,meshphysical_frag:Ex,meshtoon_vert:Ax,meshtoon_frag:Rx,points_vert:Cx,points_frag:Px,shadow_vert:Ix,shadow_frag:Lx,sprite_vert:Dx,sprite_frag:Fx},be={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},oi={basic:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Se(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:an([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:an([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:an([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:an([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:an([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:an([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:an([be.common,be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:an([be.lights,be.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};oi.physical={uniforms:an([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Hc={r:0,b:0,g:0},Nx=new Ae,dp=new qe;dp.set(-1,0,0,0,1,0,0,0,1);function Ux(r,e,t,n,i,s){let a=new Se(0),o=i===!0?0:1,c,l,h=null,u=0,d=null;function f(x){let w=x.isScene===!0?x.background:null;if(w&&w.isTexture){let v=x.backgroundBlurriness>0;w=e.get(w,v)}return w}function m(x){let w=!1,v=f(x);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?t.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function b(x,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===Ma)?(l===void 0&&(l=new Le(new Jt(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ws(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(S,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(dp),l.material.toneMapped=et.getTransfer(v.colorSpace)!==mt,(h!==v||u!==v.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Le(new rn(2,2),new Bt({name:"BackgroundMaterial",uniforms:ws(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,w){x.getRGB(Hc,kh(r)),t.buffers.color.setClear(Hc.r,Hc.g,Hc.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,w=1){a.set(x),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:m,addToRenderList:b,dispose:p}}function kx(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,a=!1;function o(P,D,B,N,k){let ee=!1,F=u(P,N,B,D);s!==F&&(s=F,l(s.object)),ee=f(P,N,B,k),ee&&m(P,N,B,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,v(P,D,B,N),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return r.createVertexArray()}function l(P){return r.bindVertexArray(P)}function h(P){return r.deleteVertexArray(P)}function u(P,D,B,N){let k=N.wireframe===!0,ee=n[D.id];ee===void 0&&(ee={},n[D.id]=ee);let F=P.isInstancedMesh===!0?P.id:0,j=ee[F];j===void 0&&(j={},ee[F]=j);let G=j[B.id];G===void 0&&(G={},j[B.id]=G);let U=G[k];return U===void 0&&(U=d(c()),G[k]=U),U}function d(P){let D=[],B=[],N=[];for(let k=0;k<t;k++)D[k]=0,B[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:N,object:P,attributes:{},index:null}}function f(P,D,B,N){let k=s.attributes,ee=D.attributes,F=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let J=k[G],I=ee[G];if(I===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(I=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(I=P.instanceColor)),J===void 0||J.attribute!==I||I&&J.data!==I.data)return!0;F++}return s.attributesNum!==F||s.index!==N}function m(P,D,B,N){let k={},ee=D.attributes,F=0,j=B.getAttributes();for(let G in j)if(j[G].location>=0){let J=ee[G];J===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let I={};I.attribute=J,J&&J.data&&(I.data=J.data),k[G]=I,F++}s.attributes=k,s.attributesNum=F,s.index=N}function b(){let P=s.newAttributes;for(let D=0,B=P.length;D<B;D++)P[D]=0}function g(P){p(P,0)}function p(P,D){let B=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;B[P]=1,N[P]===0&&(r.enableVertexAttribArray(P),N[P]=1),k[P]!==D&&(r.vertexAttribDivisor(P,D),k[P]=D)}function x(){let P=s.newAttributes,D=s.enabledAttributes;for(let B=0,N=D.length;B<N;B++)D[B]!==P[B]&&(r.disableVertexAttribArray(B),D[B]=0)}function w(P,D,B,N,k,ee,F){F===!0?r.vertexAttribIPointer(P,D,B,k,ee):r.vertexAttribPointer(P,D,B,N,k,ee)}function v(P,D,B,N){b();let k=N.attributes,ee=B.getAttributes(),F=D.defaultAttributeValues;for(let j in ee){let G=ee[j];if(G.location>=0){let U=k[j];if(U===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(U=P.instanceColor)),U!==void 0){let J=U.normalized,I=U.itemSize,V=e.get(U);if(V===void 0)continue;let ie=V.buffer,re=V.type,ce=V.bytesPerElement,X=re===r.INT||re===r.UNSIGNED_INT||U.gpuType===tc;if(U.isInterleavedBufferAttribute){let W=U.data,le=W.stride,de=U.offset;if(W.isInstancedInterleavedBuffer){for(let Q=0;Q<G.locationSize;Q++)p(G.location+Q,W.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Q=0;Q<G.locationSize;Q++)g(G.location+Q);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let Q=0;Q<G.locationSize;Q++)w(G.location+Q,I/G.locationSize,re,J,le*ce,(de+I/G.locationSize*Q)*ce,X)}else{if(U.isInstancedBufferAttribute){for(let W=0;W<G.locationSize;W++)p(G.location+W,U.meshPerAttribute);P.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let W=0;W<G.locationSize;W++)g(G.location+W);r.bindBuffer(r.ARRAY_BUFFER,ie);for(let W=0;W<G.locationSize;W++)w(G.location+W,I/G.locationSize,re,J,I*ce,I/G.locationSize*W*ce,X)}}else if(F!==void 0){let J=F[j];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(G.location,J);break;case 3:r.vertexAttrib3fv(G.location,J);break;case 4:r.vertexAttrib4fv(G.location,J);break;default:r.vertexAttrib1fv(G.location,J)}}}}x()}function S(){E();for(let P in n){let D=n[P];for(let B in D){let N=D[B];for(let k in N){let ee=N[k];for(let F in ee)h(ee[F].object),delete ee[F];delete N[k]}}delete n[P]}}function M(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let B in D){let N=D[B];for(let k in N){let ee=N[k];for(let F in ee)h(ee[F].object),delete ee[F];delete N[k]}}delete n[P.id]}function A(P){for(let D in n){let B=n[D];for(let N in B){let k=B[N];if(k[P.id]===void 0)continue;let ee=k[P.id];for(let F in ee)h(ee[F].object),delete ee[F];delete k[P.id]}}}function y(P){for(let D in n){let B=n[D],N=P.isInstancedMesh===!0?P.id:0,k=B[N];if(k!==void 0){for(let ee in k){let F=k[ee];for(let j in F)h(F[j].object),delete F[j];delete k[ee]}delete B[N],Object.keys(B).length===0&&delete n[D]}}}function E(){R(),a=!0,s!==i&&(s=i,l(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:E,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Ox(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(r.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Bx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Mn&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let y=A===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==bn&&A!==yn&&!y&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Fe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Fe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=r.getParameter(r.MAX_SAMPLES),M=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:b,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:w,maxFragmentUniforms:v,maxSamples:S,samples:M}}function zx(r){let e=this,t=null,n=0,i=!1,s=!1,a=new kn,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!g)s?h(null):l();else{let x=s?0:n,w=x*4,v=p.clippingState||null;c.value=v,v=h(m,d,w,f);for(let S=0;S!==w;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=c.value,m!==!0||g===null){let p=f+b*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,v=f;w!==b;++w,v+=4)a.copy(u[w]).applyMatrix4(x,o),a.normal.toArray(g,v),g[v+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}var Rr=4,Hx=6,Gx=20,Vx=256,Ia=new ni,Wf=new Se,Xh=null,jh=0,Kh=0,Yh=!1,Wx=new L,Ts=new L,Pr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:a=256,position:o=Wx}=s;Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,jh,Kh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Kh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:_n,format:Mn,colorSpace:hn,depthBuffer:!1},i=qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=qx(s)),this._blurMaterial=jx(s,e,t),this._ggxMaterial=Xx(s,e,t)}return i}_compileMaterial(e){let t=new Le(new ot,e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,i,s){let c=new kt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Wf),u.toneMapping=dn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Jt,new $t({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,p=!1,x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,p=!0):(g.color.copy(Wf),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));let S=this._cubeSize;Ar(i,v*S,w>2?S:0,S,S),u.setRenderTarget(i),p&&u.render(b,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Wi||e.mapping===Ms;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=e;let c=this._cubeSize;Ar(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ia)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:m}=this,b=this._sizeLods[n],g=3*b*(n>m-Rr?n-m+Rr:0),p=4*(this._cubeSize-b);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Ar(s,g,p,3*b,2*b),i.setRenderTarget(s),i.render(o,Ia),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Ar(e,g,p,3*b,2*b),i.setRenderTarget(e),i.render(o,Ia)}_blur(e,t,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],u=3*h*(i>this._lodMax-Rr?i-this._lodMax+Rr:0),d=4*(this._cubeSize-h);Ar(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Ia)}};function qx(r){let e=[],t=[],n=r,i=r-Rr+1+Hx;for(let s=0;s<i;s++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,m=new Float32Array(f*d*u),b=new Float32Array(f*d*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,w=p>2?0:-1,v=[x,w,0,x+2/3,w,0,x+2/3,w+1,0,x,w,0,x+2/3,w+1,0,x,w+1,0];m.set(v,f*d*p);for(let S=0;S<d;S++){let M=h[S*2]*2-1,A=h[S*2+1]*2-1;p===0?Ts.set(1,A,M):p===1?Ts.set(-M,1,-A):p===2?Ts.set(-M,A,1):p===3?Ts.set(-1,A,-M):p===4?Ts.set(-M,-1,A):Ts.set(M,A,-1),Ts.toArray(b,(p*d+S)*f)}}let g=new ot;g.setAttribute("position",new Xe(m,f)),g.setAttribute("outputDirection",new Xe(b,f)),t.push(new Le(g,null)),n>Rr&&n--}return{lodMeshes:t,sizeLods:e}}function qf(r,e,t){let n=new tn(r,e,t);return n.texture.mapping=Ma,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ar(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xx(r,e,t){return new Bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jx(r,e,t){return new Bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Gx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Xf(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jf(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ir=class extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new ha(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Jt(5,5,5),s=new Bt({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:ri});s.uniforms.tEquirect.value=t;let a=new Le(i,s),o=t.minFilter;return t.minFilter===fn&&(t.minFilter=Dt),new vr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}};function Kx(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){let f=d.mapping;if(f===Zo||f===Qo)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let b=new Ir(m.height);return b.fromEquirectangularTexture(r,d),e.set(d,b),d.addEventListener("dispose",l),o(b.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===Zo||f===Qo,b=f===Wi||f===Ms;if(m||b){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Pr(r)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let x=d.image;return m&&x&&x.height>0||b&&x&&c(x)?(n===null&&(n=new Pr(r)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,f){return f===Zo?d.mapping=Wi:f===Qo&&(d.mapping=Ms),d}function c(d){let f=0,m=6;for(let b=0;b<m;b++)d[b]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:u}}function Yx(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&rs("WebGLRenderer: "+n+" extension not supported."),i}}}function $x(r,e,t,n){let i={},s=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,m=u.attributes.position,b=0;if(m===void 0)return;if(f!==null){let x=f.array;b=f.version;for(let w=0,v=x.length;w<v;w+=3){let S=x[w+0],M=x[w+1],A=x[w+2];d.push(S,M,M,A,A,S)}}else{let x=m.array;b=m.version;for(let w=0,v=x.length/3-1;w<v;w+=3){let S=w+0,M=w+1,A=w+2;d.push(S,M,M,A,A,S)}}let g=new(m.count>=65535?hs:ls)(d,1);g.version=b;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Jx(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,d){r.drawElements(n,d,s,u*a),t.update(d,n,1)}function l(u,d,f){f!==0&&(r.drawElementsInstanced(n,d,s,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,u,0,f);let b=0;for(let g=0;g<f;g++)b+=d[g];t.update(b,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Zx(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qx(r,e,t){let n=new WeakMap,i=new ut;function s(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let E=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],w=0;f===!0&&(w=1),m===!0&&(w=2),b===!0&&(w=3);let v=o.attributes.position.count*w,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let M=new Float32Array(v*S*4*u),A=new na(M,v,S,u);A.type=yn,A.needsUpdate=!0;let y=w*4;for(let R=0;R<u;R++){let P=g[R],D=p[R],B=x[R],N=v*S*4*R;for(let k=0;k<P.count;k++){let ee=k*y;f===!0&&(i.fromBufferAttribute(P,k),M[N+ee+0]=i.x,M[N+ee+1]=i.y,M[N+ee+2]=i.z,M[N+ee+3]=0),m===!0&&(i.fromBufferAttribute(D,k),M[N+ee+4]=i.x,M[N+ee+5]=i.y,M[N+ee+6]=i.z,M[N+ee+7]=0),b===!0&&(i.fromBufferAttribute(B,k),M[N+ee+8]=i.x,M[N+ee+9]=i.y,M[N+ee+10]=i.z,M[N+ee+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Be(v,S)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ev(r,e,t,n,i){let s=new WeakMap;function a(l){let h=i.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return d}function o(){s=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var tv={[yh]:"LINEAR_TONE_MAPPING",[_h]:"REINHARD_TONE_MAPPING",[Mh]:"CINEON_TONE_MAPPING",[_a]:"ACES_FILMIC_TONE_MAPPING",[wh]:"AGX_TONE_MAPPING",[Th]:"NEUTRAL_TONE_MAPPING",[Sh]:"CUSTOM_TONE_MAPPING"};function nv(r,e,t,n,i,s){let a=new tn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ot;l.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ht([0,2,0,0,2,0],2));let h=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Le(l,h),d=new ni(-1,1,1,-1,0,1),f=null,m=null,b=!1,g,p=null,x=[],w=!1;this.setSize=function(v,S){a.setSize(v,S),o!==null&&o.setSize(v,S),c!==null&&c.setSize(v,S);for(let M=0;M<x.length;M++){let A=x[M];A.setSize&&A.setSize(v,S)}},this.setEffects=function(v){x=v,w=x.length>0&&x[0].isRenderPass===!0;let S=a.width,M=a.height;x.length>0&&o===null&&(o=new tn(S,M,{type:_n,depthBuffer:!1,stencilBuffer:!1}),c=new tn(S,M,{type:_n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let y=x[A];y.setSize&&y.setSize(S,M)}},this.begin=function(v,S){if(b||v.toneMapping===dn&&x.length===0)return!1;if(p=S,S!==null){let M=S.width,A=S.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=dn,!0},this.hasRenderPass=function(){return w},this.end=function(v,S){v.toneMapping=g,b=!0;let M=a,A=o;for(let y=0;y<x.length;y++){let E=x[y];E.enabled!==!1&&(E.render(v,A,M,S),E.needsSwap!==!1&&(M=A,A=A===o?c:o))}if(f!==v.outputColorSpace||m!==v.toneMapping){f=v.outputColorSpace,m=v.toneMapping,h.defines={},et.getTransfer(f)===mt&&(h.defines.SRGB_TRANSFER="");let y=tv[m];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(p),v.render(u,d),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var fp=new zt,Zh=new Gi(1,1),pp=new na,mp=new Fo,gp=new ha,Kf=[],Yf=[],$f=new Float32Array(16),Jf=new Float32Array(9),Zf=new Float32Array(4);function Lr(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Kf[i];if(s===void 0&&(s=new Float32Array(i),Kf[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Vt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Wt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function qc(r,e){let t=Yf[e];t===void 0&&(t=new Int32Array(e),Yf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2fv(this.addr,e),Wt(t,e)}}function rv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;r.uniform3fv(this.addr,e),Wt(t,e)}}function av(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4fv(this.addr,e),Wt(t,e)}}function ov(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zf.set(n),r.uniformMatrix2fv(this.addr,!1,Zf),Wt(t,n)}}function cv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Jf.set(n),r.uniformMatrix3fv(this.addr,!1,Jf),Wt(t,n)}}function lv(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;$f.set(n),r.uniformMatrix4fv(this.addr,!1,$f),Wt(t,n)}}function hv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function uv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2iv(this.addr,e),Wt(t,e)}}function dv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3iv(this.addr,e),Wt(t,e)}}function fv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4iv(this.addr,e),Wt(t,e)}}function pv(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;r.uniform2uiv(this.addr,e),Wt(t,e)}}function gv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;r.uniform3uiv(this.addr,e),Wt(t,e)}}function bv(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;r.uniform4uiv(this.addr,e),Wt(t,e)}}function xv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Zh.compareFunction=t.isReversedDepthBuffer()?zc:Bc,s=Zh):s=fp,t.setTexture2D(e||s,i)}function vv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mp,i)}function yv(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gp,i)}function _v(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pp,i)}function Mv(r){switch(r){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return av;case 35674:return ov;case 35675:return cv;case 35676:return lv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return _v}}function Sv(r,e){r.uniform1fv(this.addr,e)}function wv(r,e){let t=Lr(e,this.size,2);r.uniform2fv(this.addr,t)}function Tv(r,e){let t=Lr(e,this.size,3);r.uniform3fv(this.addr,t)}function Ev(r,e){let t=Lr(e,this.size,4);r.uniform4fv(this.addr,t)}function Av(r,e){let t=Lr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rv(r,e){let t=Lr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cv(r,e){let t=Lr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pv(r,e){r.uniform1iv(this.addr,e)}function Iv(r,e){r.uniform2iv(this.addr,e)}function Lv(r,e){r.uniform3iv(this.addr,e)}function Dv(r,e){r.uniform4iv(this.addr,e)}function Fv(r,e){r.uniform1uiv(this.addr,e)}function Nv(r,e){r.uniform2uiv(this.addr,e)}function Uv(r,e){r.uniform3uiv(this.addr,e)}function kv(r,e){r.uniform4uiv(this.addr,e)}function Ov(r,e,t){let n=this.cache,i=e.length,s=qc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Zh:a=fp;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Bv(r,e,t){let n=this.cache,i=e.length,s=qc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mp,s[a])}function zv(r,e,t){let n=this.cache,i=e.length,s=qc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gp,s[a])}function Hv(r,e,t){let n=this.cache,i=e.length,s=qc(t,i);Vt(n,s)||(r.uniform1iv(this.addr,s),Wt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pp,s[a])}function Gv(r){switch(r){case 5126:return Sv;case 35664:return wv;case 35665:return Tv;case 35666:return Ev;case 35674:return Av;case 35675:return Rv;case 35676:return Cv;case 5124:case 35670:return Pv;case 35667:case 35671:return Iv;case 35668:case 35672:return Lv;case 35669:case 35673:return Dv;case 5125:return Fv;case 36294:return Nv;case 36295:return Uv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Bv;case 35680:case 36300:case 36308:case 36293:return zv;case 36289:case 36303:case 36311:case 36292:return Hv}}var Qh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mv(t.type)}},eu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gv(t.type)}},tu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(e,t[o.id],n)}}},$h=/(\w+)(\])?(\[|\.)?/g;function Qf(r,e){r.seq.push(e),r.map[e.id]=e}function Vv(r,e,t){let n=r.name,i=n.length;for($h.lastIndex=0;;){let s=$h.exec(n),a=$h.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Qf(t,l===void 0?new Qh(o,r,e):new eu(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new tu(o),Qf(t,u)),t=u}}}var Cr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Vv(o,c,this)}let i=[],s=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function ep(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Wv=37297,qv=0;function Xv(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var tp=new qe;function jv(r){et._getMatrix(tp,et.workingColorSpace,r);let e=`mat3( ${tp.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case ea:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function np(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xv(r.getShaderSource(e),o)}else return s}function Kv(r,e){let t=jv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yv={[yh]:"Linear",[_h]:"Reinhard",[Mh]:"Cineon",[_a]:"ACESFilmic",[wh]:"AgX",[Th]:"Neutral",[Sh]:"Custom"};function $v(r,e){let t=Yv[e];return t===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Gc=new L;function Jv(){et.getLuminanceCoefficients(Gc);let r=Gc.x.toFixed(4),e=Gc.y.toFixed(4),t=Gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function Qv(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ey(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Da(r){return r!==""}function ip(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sp(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ty=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(r){return r.replace(ty,iy)}var ny=new Map;function iy(r,e){let t=Ze[e];if(t===void 0){let n=ny.get(e);if(n!==void 0)t=Ze[n],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nu(t)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(r){return r.replace(sy,ry)}function ry(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ap(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var ay={[ys]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function oy(r){return ay[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cy={[Wi]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Ma]:"ENVMAP_TYPE_CUBE_UV"};function ly(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":cy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var hy={[Ms]:"ENVMAP_MODE_REFRACTION"};function uy(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":hy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[Jo]:"ENVMAP_BLENDING_MULTIPLY",[yf]:"ENVMAP_BLENDING_MIX",[_f]:"ENVMAP_BLENDING_ADD"};function fy(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":dy[r.combine]||"ENVMAP_BLENDING_NONE"}function py(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function my(r,e,t,n){let i=r.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=oy(t),l=ly(t),h=uy(t),u=fy(t),d=py(t),f=Zv(t),m=Qv(s),b=i.createProgram(),g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Da).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(g=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dn?"#define TONE_MAPPING":"",t.toneMapping!==dn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==dn?$v("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Kv("linearToOutputTexel",t.outputColorSpace),Jv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=nu(a),a=ip(a,t),a=sp(a,t),o=nu(o),o=ip(o,t),o=sp(o,t),a=rp(a),o=rp(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=x+g+a,v=x+p+o,S=ep(i,i.VERTEX_SHADER,w),M=ep(i,i.FRAGMENT_SHADER,v);i.attachShader(b,S),i.attachShader(b,M),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function A(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(b)||"",B=i.getShaderInfoLog(S)||"",N=i.getShaderInfoLog(M)||"",k=D.trim(),ee=B.trim(),F=N.trim(),j=!0,G=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,S,M);else{let U=np(i,S,"vertex"),J=np(i,M,"fragment");We("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+U+`
`+J)}else k!==""?Fe("WebGLProgram: Program Info Log:",k):(ee===""||F==="")&&(G=!1);G&&(P.diagnostics={runnable:j,programLog:k,vertexShader:{log:ee,prefix:g},fragmentShader:{log:F,prefix:p}})}i.deleteShader(S),i.deleteShader(M),y=new Cr(i,b),E=ey(i,b)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(b,Wv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qv++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=S,this.fragmentShader=M,this}var gy=0,iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new su(e),t.set(e,n)),n}},su=class{constructor(e){this.id=gy++,this.code=e,this.usedTimes=0}};function by(r){return r===Xi||r===Aa||r===Ra}function xy(r,e,t,n,i,s){let a=new ia,o=new iu,c=new Set,l=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function b(y,E,R,P,D,B){let N=P.fog,k=D.geometry,ee=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,j=e.get(y.envMap||ee,F),G=j&&j.mapping===Ma?j.image.height:null,U=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Fe("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let J=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,I=J!==void 0?J.length:0,V=0;k.morphAttributes.position!==void 0&&(V=1),k.morphAttributes.normal!==void 0&&(V=2),k.morphAttributes.color!==void 0&&(V=3);let ie,re,ce,X;if(U){let St=oi[U];ie=St.vertexShader,re=St.fragmentShader}else{ie=y.vertexShader,re=y.fragmentShader;let St=o.getVertexShaderStage(y),ft=o.getFragmentShaderStage(y);o.update(y,St,ft),ce=St.id,X=ft.id}let W=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),de=D.isInstancedMesh===!0,Q=D.isBatchedMesh===!0,ve=!!y.map,Ge=!!y.matcap,Oe=!!j,Ve=!!y.aoMap,tt=!!y.lightMap,ze=!!y.bumpMap&&y.wireframe===!1,$e=!!y.normalMap,Mt=!!y.displacementMap,Rt=!!y.emissiveMap,rt=!!y.metalnessMap,ct=!!y.roughnessMap,O=y.anisotropy>0,dt=y.clearcoat>0,at=y.dispersion>0,C=y.retroreflectivity>0,_=y.iridescence>0,q=y.sheen>0,Z=y.transmission>0,ne=O&&!!y.anisotropyMap,he=dt&&!!y.clearcoatMap,fe=dt&&!!y.clearcoatNormalMap,K=dt&&!!y.clearcoatRoughnessMap,se=_&&!!y.iridescenceMap,ue=_&&!!y.iridescenceThicknessMap,Ne=q&&!!y.sheenColorMap,xe=q&&!!y.sheenRoughnessMap,pe=!!y.specularMap,Ue=!!y.specularColorMap,He=!!y.specularIntensityMap,je=Z&&!!y.transmissionMap,H=Z&&!!y.thicknessMap,me=!!y.gradientMap,ae=!!y.alphaMap,ge=y.alphaTest>0,we=!!y.alphaHash,oe=!!y.extensions,ke=dn;y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(ke=r.toneMapping);let Ie={shaderID:U,shaderType:y.type,shaderName:y.name,vertexShader:ie,fragmentShader:re,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:X,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Q,batchingColor:Q&&D._colorsTexture!==null,instancing:de,instancingColor:de&&D.instanceColor!==null,instancingMorph:de&&D.morphTexture!==null,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ve,matcap:Ge,envMap:Oe,envMapMode:Oe&&j.mapping,envMapCubeUVHeight:G,aoMap:Ve,lightMap:tt,bumpMap:ze,normalMap:$e,displacementMap:Mt,emissiveMap:Rt,normalMapObjectSpace:$e&&y.normalMapType===Rf,normalMapTangentSpace:$e&&y.normalMapType===Pa,packedNormalMap:$e&&y.normalMapType===Pa&&by(y.normalMap.format),metalnessMap:rt,roughnessMap:ct,anisotropy:O,anisotropyMap:ne,clearcoat:dt,clearcoatMap:he,clearcoatNormalMap:fe,clearcoatRoughnessMap:K,dispersion:at,retroreflection:C,iridescence:_,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:q,sheenColorMap:Ne,sheenRoughnessMap:xe,specularMap:pe,specularColorMap:Ue,specularIntensityMap:He,transmission:Z,transmissionMap:je,thicknessMap:H,gradientMap:me,opaque:y.transparent===!1&&y.blending===Vi&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:ge,alphaHash:we,combine:y.combine,mapUv:ve&&m(y.map.channel),aoMapUv:Ve&&m(y.aoMap.channel),lightMapUv:tt&&m(y.lightMap.channel),bumpMapUv:ze&&m(y.bumpMap.channel),normalMapUv:$e&&m(y.normalMap.channel),displacementMapUv:Mt&&m(y.displacementMap.channel),emissiveMapUv:Rt&&m(y.emissiveMap.channel),metalnessMapUv:rt&&m(y.metalnessMap.channel),roughnessMapUv:ct&&m(y.roughnessMap.channel),anisotropyMapUv:ne&&m(y.anisotropyMap.channel),clearcoatMapUv:he&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:fe&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&m(y.sheenRoughnessMap.channel),specularMapUv:pe&&m(y.specularMap.channel),specularColorMapUv:Ue&&m(y.specularColorMap.channel),specularIntensityMapUv:He&&m(y.specularIntensityMap.channel),transmissionMapUv:je&&m(y.transmissionMap.channel),thicknessMapUv:H&&m(y.thicknessMap.channel),alphaMapUv:ae&&m(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($e||O),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(ve||ae),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&$e===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:le,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:V,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:ve&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===mt,decodeVideoTextureEmissive:Rt&&y.emissiveMap.isVideoTexture===!0&&et.getTransfer(y.emissiveMap.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Pt,flipSided:y.side===Gt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:oe&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&y.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(E,y),x(E,y),E.push(r.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function x(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function w(y){let E=f[y.type],R;if(E){let P=oi[E];R=Er.clone(P.uniforms)}else R=y.uniforms;return R}function v(y,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new my(r,E,y,i),l.push(R),h.set(E,R)),R}function S(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function M(y){o.remove(y)}function A(){o.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:S,releaseShaderCache:M,programs:l,dispose:A}}function vy(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function yy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cp(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,b,g,p){let x=r[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:b,renderOrder:d.renderOrder,z:g,group:p},r[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=a(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=g,x.group=p),e++,x}function c(d,f,m,b,g,p,x){x.reversedDepth===!0&&(g=-g);let w=o(d,f,m,b,g,p);m.transmission>0?n.push(w):m.transparent===!0?i.push(w):t.push(w)}function l(d,f,m,b,g,p){let x=o(d,f,m,b,g,p);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function h(d,f){t.length>1&&t.sort(d||yy),n.length>1&&n.sort(f||op),i.length>1&&i.sort(f||op)}function u(){for(let d=e,f=r.length;d<f;d++){let m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:u,sort:h}}function _y(){let r=new WeakMap;function e(n,i){let s=r.get(n),a;return s===void 0?(a=new cp,r.set(n,[a])):i>=s.length?(a=new cp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function My(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Sy(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var wy=0;function Ty(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ey(r){let e=new My,t=Sy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,s=new Ae,a=new Ae;function o(l){let h=0,u=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,m=0,b=0,g=0,p=0,x=0,w=0,v=0,S=0,M=0,A=0,y=0,E=0,R=0;l.sort(Ty);for(let D=0,B=l.length;D<B;D++){let N=l[D],k=N.color,ee=N.intensity,F=N.distance,j=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Xi?j=N.shadow.map.texture:j=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=k.r*ee,u+=k.g*ee,d+=k.b*ee;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],ee);R++}else if(N.isSunLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,J=t.get(N);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize.copy(U.mapSize).multiply(U.getFrameExtents()),n.sunShadow[m]=J,n.sunShadowMap[m]=j;let I=U.getViewportCount();for(let V=0;V<I;V++)n.sunShadowMatrix[b+V]=U.getMatrix(V),n.sunShadowCascade[b+V]=U._cascadeData[V];b+=I,m++}n.sun[f]=G,f++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let U=N.shadow,J=t.get(N);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=N.shadow.matrix,S++}n.directional[g]=G,g++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(k).multiplyScalar(ee),G.distance=F,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[x]=G;let U=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,U.updateMatrices(N),N.castShadow&&E++),n.spotLightMatrix[x]=U.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,n.spotShadow[x]=J,n.spotShadowMap[x]=j,A++}x++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(k).multiplyScalar(ee),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[w]=G,w++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let U=N.shadow,J=t.get(N);J.shadowIntensity=U.intensity,J.shadowBias=U.bias,J.shadowNormalBias=U.normalBias,J.shadowRadius=U.radius,J.shadowMapSize=U.mapSize,J.shadowCameraNear=U.camera.near,J.shadowCameraFar=U.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=N.shadow.matrix,M++}n.point[p]=G,p++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(ee),G.groundColor.copy(N.groundColor).multiplyScalar(ee),n.hemi[v]=G,v++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.sunLength!==f||P.directionalLength!==g||P.pointLength!==p||P.spotLength!==x||P.rectAreaLength!==w||P.hemiLength!==v||P.numSunShadows!==m||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==y||P.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=g,n.spot.length=x,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.directionalShadowMatrix.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.sunLength=f,P.directionalLength=g,P.pointLength=p,P.spotLength=x,P.rectAreaLength=w,P.hemiLength=v,P.numSunShadows=m,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=y,P.numLightProbes=R,n.version=wy++)}function c(l,h){let u=0,d=0,f=0,m=0,b=0,g=0,p=h.matrixWorldInverse;for(let x=0,w=l.length;x<w;x++){let v=l[x];if(v.isSunLight){let S=n.sun[u];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isSpotLight){let S=n.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),m++}else if(v.isRectAreaLight){let S=n.rectArea[b];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),b++}else if(v.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function lp(r){let e=new Ey(r),t=[],n=[],i=[];function s(d){u.camera=d,t.length=0,n.length=0,i.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){i.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function Ay(r){let e=new WeakMap;function t(i,s=0){let a=e.get(i),o;return a===void 0?(o=new lp(r),e.set(i,[o])):s>=a.length?(o=new lp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cy=`uniform sampler2D shadow_pass;
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
}`,Py=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Iy=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],hp=new Ae,La=new L,Jh=new L;function Ly(r,e,t){let n=new Hi,i=new Be,s=new Be,a=new ut,o=new Bo,c=new zo,l={},h=t.maxTextureSize,u={[si]:Gt,[Gt]:si,[Pt]:Pt},d=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Ry,fragmentShader:Cy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ot;m.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Le(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let p=this.type;this.render=function(M,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===ef&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ys);let E=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(ri),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(k=>k.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,k=M.length;N<k;N++){let ee=M[N],F=ee.shadow;if(F===void 0){Fe("WebGLShadowMap:",ee,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;i.copy(F.mapSize);let j=F.getFrameExtents();i.multiply(j),s.copy(F.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/j.x),i.x=s.x*j.x,F.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/j.y),i.y=s.y*j.y,F.mapSize.y=s.y));let G=r.state.buffers.depth.getReversed();if(F.camera._reversedDepth=G,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===yr){if(ee.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new tn(i.x,i.y,{format:Xi,type:_n,minFilter:Dt,magFilter:Dt,generateMipmaps:!1}),F.map.texture.name=ee.name+".shadowMap",F.map.depthTexture=new Gi(i.x,i.y,yn),F.map.depthTexture.name=ee.name+".shadowMapDepth",F.map.depthTexture.format=Zn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt}else ee.isPointLight?(F.map=new Ir(i.x),F.map.depthTexture=new ko(i.x,Wn)):(F.map=new tn(i.x,i.y),F.map.depthTexture=new Gi(i.x,i.y,Wn)),F.map.depthTexture.name=ee.name+".shadowMap",F.map.depthTexture.format=Zn,this.type===ys?(F.map.depthTexture.compareFunction=G?zc:Bc,F.map.depthTexture.minFilter=Dt,F.map.depthTexture.magFilter=Dt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Lt,F.map.depthTexture.magFilter=Lt);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==i.x||F.map.height!==i.y)&&F.map.setSize(i.x,i.y);let U=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();ee.isPointLight!==!0&&F.updateMatrices(ee,y);for(let J=0;J<U;J++){let I=F.getCamera(J);if(ee.isPointLight){let V=F.camera,ie=F.matrix,re=ee.distance||V.far;re!==V.far&&(V.far=re,V.updateProjectionMatrix()),La.setFromMatrixPosition(ee.matrixWorld),V.position.copy(La),Jh.copy(V.position),Jh.add(Py[J]),V.up.copy(Iy[J]),V.lookAt(Jh),V.updateMatrixWorld(),ie.makeTranslation(-La.x,-La.y,-La.z),hp.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F._frustum.setFromProjectionMatrix(hp,V.coordinateSystem,V.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)r.setRenderTarget(F.map,J),r.clear();else{J===0&&(r.setRenderTarget(F.map),r.clear());let V=F.getViewport(J);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(a)}n=F.getFrustum(J),v(A,y,I,ee,this.type)}F.isPointLightShadow!==!0&&this.type===yr&&x(F,y),F.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(E,R,P)};function x(M,A){let y=e.update(b);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new tn(i.x,i.y,{format:Xi,type:_n}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),d.uniforms.shadow_pass.value=M.map.depthTexture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,r.setRenderTarget(M.mapPass),r.clear(),r.renderBufferDirect(A,null,y,d,b,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,r.setRenderTarget(M.map),r.clear(),r.renderBufferDirect(A,null,y,f,b,null)}function w(M,A,y,E){let R=null,P=y.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)R=P;else if(R=y.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,B=A.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let k=N[B];k===void 0&&(k=R.clone(),N[B]=k,A.addEventListener("dispose",S)),R=k}if(R.visible=A.visible,R.wireframe=A.wireframe,E===yr?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=r.properties.get(R);D.light=y}return R}function v(M,A,y,E,R){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&R===yr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,M.matrixWorld);let B=e.update(M),N=M.material;if(Array.isArray(N)){let k=B.groups;for(let ee=0,F=k.length;ee<F;ee++){let j=k[ee],G=N[j.materialIndex];if(G&&G.visible){let U=w(M,G,E,R);M.onBeforeShadow(r,M,A,y,B,U,j),r.renderBufferDirect(y,null,B,U,M,j),M.onAfterShadow(r,M,A,y,B,U,j)}}}else if(N.visible){let k=w(M,N,E,R);M.onBeforeShadow(r,M,A,y,B,k,null),r.renderBufferDirect(y,null,B,k,M,null),M.onAfterShadow(r,M,A,y,B,k,null)}}let D=M.children;for(let B=0,N=D.length;B<N;B++)v(D[B],A,y,E,R)}function S(M){M.target.removeEventListener("dispose",S);for(let y in l){let E=l[y],R=M.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function Dy(r,e){function t(){let H=!1,me=new ut,ae=null,ge=new ut(0,0,0,0);return{setMask:function(we){ae!==we&&!H&&(r.colorMask(we,we,we,we),ae=we)},setLocked:function(we){H=we},setClear:function(we,oe,ke,Ie,St){St===!0&&(we*=Ie,oe*=Ie,ke*=Ie),me.set(we,oe,ke,Ie),ge.equals(me)===!1&&(r.clearColor(we,oe,ke,Ie),ge.copy(me))},reset:function(){H=!1,ae=null,ge.set(-1,0,0,0)}}}function n(){let H=!1,me=!1,ae=null,ge=null,we=null;return{setReversed:function(oe){if(me!==oe){let ke=e.get("EXT_clip_control");oe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),me=oe;let Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return me},setTest:function(oe){oe?W(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function(oe){ae!==oe&&!H&&(r.depthMask(oe),ae=oe)},setFunc:function(oe){if(me&&(oe=Bf[oe]),ge!==oe){switch(oe){case To:r.depthFunc(r.NEVER);break;case Eo:r.depthFunc(r.ALWAYS);break;case Ao:r.depthFunc(r.LESS);break;case sr:r.depthFunc(r.LEQUAL);break;case Ro:r.depthFunc(r.EQUAL);break;case Co:r.depthFunc(r.GEQUAL);break;case Po:r.depthFunc(r.GREATER);break;case Io:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=oe}},setLocked:function(oe){H=oe},setClear:function(oe){we!==oe&&(we=oe,me&&(oe=1-oe),r.clearDepth(oe))},reset:function(){H=!1,ae=null,ge=null,we=null,me=!1}}}function i(){let H=!1,me=null,ae=null,ge=null,we=null,oe=null,ke=null,Ie=null,St=null;return{setTest:function(ft){H||(ft?W(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(ft){me!==ft&&!H&&(r.stencilMask(ft),me=ft)},setFunc:function(ft,Dn,Kn){(ae!==ft||ge!==Dn||we!==Kn)&&(r.stencilFunc(ft,Dn,Kn),ae=ft,ge=Dn,we=Kn)},setOp:function(ft,Dn,Kn){(oe!==ft||ke!==Dn||Ie!==Kn)&&(r.stencilOp(ft,Dn,Kn),oe=ft,ke=Dn,Ie=Kn)},setLocked:function(ft){H=ft},setClear:function(ft){St!==ft&&(r.clearStencil(ft),St=ft)},reset:function(){H=!1,me=null,ae=null,ge=null,we=null,oe=null,ke=null,Ie=null,St=null}}}let s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,w=null,v=null,S=null,M=null,A=null,y=new Se(0,0,0),E=0,R=!1,P=null,D=null,B=null,N=null,k=null,ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,j=0,G=r.getParameter(r.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=j>=2);let U=null,J={},I=r.getParameter(r.SCISSOR_BOX),V=r.getParameter(r.VIEWPORT),ie=new ut().fromArray(I),re=new ut().fromArray(V);function ce(H,me,ae,ge){let we=new Uint8Array(4),oe=r.createTexture();r.bindTexture(H,oe),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ke=0;ke<ae;ke++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(me,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,we):r.texImage2D(me+ke,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return oe}let X={};X[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(r.DEPTH_TEST),a.setFunc(sr),ze(!1),$e(mh),W(r.CULL_FACE),Ve(ri);function W(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function le(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function de(H,me){return d[H]!==me?(r.bindFramebuffer(H,me),d[H]=me,H===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=me),H===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=me),!0):!1}function Q(H,me){let ae=m,ge=!1;if(H){ae=f.get(me),ae===void 0&&(ae=[],f.set(me,ae));let we=H.textures;if(ae.length!==we.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let oe=0,ke=we.length;oe<ke;oe++)ae[oe]=r.COLOR_ATTACHMENT0+oe;ae.length=we.length,ge=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ge=!0);ge&&r.drawBuffers(ae)}function ve(H){return b!==H?(r.useProgram(H),b=H,!0):!1}let Ge={[_s]:r.FUNC_ADD,[nf]:r.FUNC_SUBTRACT,[sf]:r.FUNC_REVERSE_SUBTRACT};Ge[rf]=r.MIN,Ge[af]=r.MAX;let Oe={[of]:r.ZERO,[cf]:r.ONE,[lf]:r.SRC_COLOR,[xh]:r.SRC_ALPHA,[mf]:r.SRC_ALPHA_SATURATE,[ff]:r.DST_COLOR,[uf]:r.DST_ALPHA,[hf]:r.ONE_MINUS_SRC_COLOR,[vh]:r.ONE_MINUS_SRC_ALPHA,[pf]:r.ONE_MINUS_DST_COLOR,[df]:r.ONE_MINUS_DST_ALPHA,[gf]:r.CONSTANT_COLOR,[bf]:r.ONE_MINUS_CONSTANT_COLOR,[xf]:r.CONSTANT_ALPHA,[vf]:r.ONE_MINUS_CONSTANT_ALPHA};function Ve(H,me,ae,ge,we,oe,ke,Ie,St,ft){if(H===ri){g===!0&&(le(r.BLEND),g=!1);return}if(g===!1&&(W(r.BLEND),g=!0),H!==tf){if(H!==p||ft!==R){if((x!==_s||S!==_s)&&(r.blendEquation(r.FUNC_ADD),x=_s,S=_s),ft)switch(H){case Vi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _r:r.blendFunc(r.ONE,r.ONE);break;case gh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case bh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:We("WebGLState: Invalid blending: ",H);break}else switch(H){case Vi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case _r:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case gh:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bh:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",H);break}w=null,v=null,M=null,A=null,y.set(0,0,0),E=0,p=H,R=ft}return}we=we||me,oe=oe||ae,ke=ke||ge,(me!==x||we!==S)&&(r.blendEquationSeparate(Ge[me],Ge[we]),x=me,S=we),(ae!==w||ge!==v||oe!==M||ke!==A)&&(r.blendFuncSeparate(Oe[ae],Oe[ge],Oe[oe],Oe[ke]),w=ae,v=ge,M=oe,A=ke),(Ie.equals(y)===!1||St!==E)&&(r.blendColor(Ie.r,Ie.g,Ie.b,St),y.copy(Ie),E=St),p=H,R=!1}function tt(H,me){H.side===Pt?le(r.CULL_FACE):W(r.CULL_FACE);let ae=H.side===Gt;me&&(ae=!ae),ze(ae),H.blending===Vi&&H.transparent===!1?Ve(ri):Ve(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);let ge=H.stencilWrite;o.setTest(ge),ge&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function ze(H){P!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),P=H)}function $e(H){H!==Zd?(W(r.CULL_FACE),H!==D&&(H===mh?r.cullFace(r.BACK):H===Qd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),D=H}function Mt(H){H!==B&&(F&&r.lineWidth(H),B=H)}function Rt(H,me,ae){H?(W(r.POLYGON_OFFSET_FILL),(N!==me||k!==ae)&&(N=me,k=ae,a.getReversed()&&(me=-me),r.polygonOffset(me,ae))):le(r.POLYGON_OFFSET_FILL)}function rt(H){H?W(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function ct(H){H===void 0&&(H=r.TEXTURE0+ee-1),U!==H&&(r.activeTexture(H),U=H)}function O(H,me,ae){ae===void 0&&(U===null?ae=r.TEXTURE0+ee-1:ae=U);let ge=J[ae];ge===void 0&&(ge={type:void 0,texture:void 0},J[ae]=ge),(ge.type!==H||ge.texture!==me)&&(U!==ae&&(r.activeTexture(ae),U=ae),r.bindTexture(H,me||X[H]),ge.type=H,ge.texture=me)}function dt(){let H=J[U];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function at(){try{r.compressedTexImage2D(...arguments)}catch(H){We("WebGLState:",H)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(H){We("WebGLState:",H)}}function _(){try{r.texSubImage2D(...arguments)}catch(H){We("WebGLState:",H)}}function q(){try{r.texSubImage3D(...arguments)}catch(H){We("WebGLState:",H)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(H){We("WebGLState:",H)}}function ne(){try{r.compressedTexSubImage3D(...arguments)}catch(H){We("WebGLState:",H)}}function he(){try{r.texStorage2D(...arguments)}catch(H){We("WebGLState:",H)}}function fe(){try{r.texStorage3D(...arguments)}catch(H){We("WebGLState:",H)}}function K(){try{r.texImage2D(...arguments)}catch(H){We("WebGLState:",H)}}function se(){try{r.texImage3D(...arguments)}catch(H){We("WebGLState:",H)}}function ue(H){return u[H]!==void 0?u[H]:r.getParameter(H)}function Ne(H,me){u[H]!==me&&(r.pixelStorei(H,me),u[H]=me)}function xe(H){ie.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),ie.copy(H))}function pe(H){re.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),re.copy(H))}function Ue(H,me){let ae=l.get(me);ae===void 0&&(ae=new WeakMap,l.set(me,ae));let ge=ae.get(H);ge===void 0&&(ge=r.getUniformBlockIndex(me,H.name),ae.set(H,ge))}function He(H,me){let ge=l.get(me).get(H);c.get(me)!==ge&&(r.uniformBlockBinding(me,ge,H.__bindingPointIndex),c.set(me,ge))}function je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),h={},u={},U=null,J={},d={},f=new WeakMap,m=[],b=null,g=!1,p=null,x=null,w=null,v=null,S=null,M=null,A=null,y=new Se(0,0,0),E=0,R=!1,P=null,D=null,B=null,N=null,k=null,ie.set(0,0,r.canvas.width,r.canvas.height),re.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:W,disable:le,bindFramebuffer:de,drawBuffers:Q,useProgram:ve,setBlending:Ve,setMaterial:tt,setFlipSided:ze,setCullFace:$e,setLineWidth:Mt,setPolygonOffset:Rt,setScissorTest:rt,activeTexture:ct,bindTexture:O,unbindTexture:dt,compressedTexImage2D:at,compressedTexImage3D:C,texImage2D:K,texImage3D:se,pixelStorei:Ne,getParameter:ue,updateUBOMapping:Ue,uniformBlockBinding:He,texStorage2D:he,texStorage3D:fe,texSubImage2D:_,texSubImage3D:q,compressedTexSubImage2D:Z,compressedTexSubImage3D:ne,scissor:xe,viewport:pe,reset:je}}function Fy(r,e,t,n,i,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,h=new WeakMap,u=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,_){return m?new OffscreenCanvas(C,_):or("canvas")}function g(C,_,q){let Z=1,ne=at(C);if((ne.width>q||ne.height>q)&&(Z=q/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let he=Math.floor(Z*ne.width),fe=Math.floor(Z*ne.height);d===void 0&&(d=b(he,fe));let K=_?b(he,fe):d;return K.width=he,K.height=fe,K.getContext("2d").drawImage(C,0,0,he,fe),Fe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+he+"x"+fe+")."),K}else return"data"in C&&Fe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function p(C){return C.generateMipmaps}function x(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,_,q,Z,ne,he=!1){if(C!==null){if(r[C]!==void 0)return r[C];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let fe;Z&&(fe=e.get("EXT_texture_norm16"),fe||Fe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===r.RED&&(q===r.FLOAT&&(K=r.R32F),q===r.HALF_FLOAT&&(K=r.R16F),q===r.UNSIGNED_BYTE&&(K=r.R8),q===r.UNSIGNED_SHORT&&fe&&(K=fe.R16_EXT),q===r.SHORT&&fe&&(K=fe.R16_SNORM_EXT)),_===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.R8UI),q===r.UNSIGNED_SHORT&&(K=r.R16UI),q===r.UNSIGNED_INT&&(K=r.R32UI),q===r.BYTE&&(K=r.R8I),q===r.SHORT&&(K=r.R16I),q===r.INT&&(K=r.R32I)),_===r.RG&&(q===r.FLOAT&&(K=r.RG32F),q===r.HALF_FLOAT&&(K=r.RG16F),q===r.UNSIGNED_BYTE&&(K=r.RG8),q===r.UNSIGNED_SHORT&&fe&&(K=fe.RG16_EXT),q===r.SHORT&&fe&&(K=fe.RG16_SNORM_EXT)),_===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RG8UI),q===r.UNSIGNED_SHORT&&(K=r.RG16UI),q===r.UNSIGNED_INT&&(K=r.RG32UI),q===r.BYTE&&(K=r.RG8I),q===r.SHORT&&(K=r.RG16I),q===r.INT&&(K=r.RG32I)),_===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RGB8UI),q===r.UNSIGNED_SHORT&&(K=r.RGB16UI),q===r.UNSIGNED_INT&&(K=r.RGB32UI),q===r.BYTE&&(K=r.RGB8I),q===r.SHORT&&(K=r.RGB16I),q===r.INT&&(K=r.RGB32I)),_===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),q===r.UNSIGNED_INT&&(K=r.RGBA32UI),q===r.BYTE&&(K=r.RGBA8I),q===r.SHORT&&(K=r.RGBA16I),q===r.INT&&(K=r.RGBA32I)),_===r.RGB&&(q===r.UNSIGNED_SHORT&&fe&&(K=fe.RGB16_EXT),q===r.SHORT&&fe&&(K=fe.RGB16_SNORM_EXT),q===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),_===r.RGBA){let se=he?ea:et.getTransfer(ne);q===r.FLOAT&&(K=r.RGBA32F),q===r.HALF_FLOAT&&(K=r.RGBA16F),q===r.UNSIGNED_BYTE&&(K=se===mt?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT&&fe&&(K=fe.RGBA16_EXT),q===r.SHORT&&fe&&(K=fe.RGBA16_SNORM_EXT),q===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(C,_){let q;return C?_===null||_===Wn||_===wr?q=r.DEPTH24_STENCIL8:_===yn?q=r.DEPTH32F_STENCIL8:_===Sr&&(q=r.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===wr?q=r.DEPTH_COMPONENT24:_===yn?q=r.DEPTH_COMPONENT32F:_===Sr&&(q=r.DEPTH_COMPONENT16),q}function M(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Lt&&C.minFilter!==Dt?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function A(C){let _=C.target;_.removeEventListener("dispose",A),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&u.delete(_)}function y(C){let _=C.target;_.removeEventListener("dispose",y),P(_)}function E(C){let _=n.get(C);if(_.__webglInit===void 0)return;let q=C.source,Z=f.get(q);if(Z){let ne=Z[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&R(C),Object.keys(Z).length===0&&f.delete(q)}n.remove(C)}function R(C){let _=n.get(C);r.deleteTexture(_.__webglTexture);let q=C.source,Z=f.get(q);delete Z[_.__cacheKey],a.memory.textures--}function P(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ne=0;ne<_.__webglFramebuffer[Z].length;ne++)r.deleteFramebuffer(_.__webglFramebuffer[Z][ne]);else r.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)r.deleteFramebuffer(_.__webglFramebuffer[Z]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let q=C.textures;for(let Z=0,ne=q.length;Z<ne;Z++){let he=n.get(q[Z]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(q[Z])}n.remove(C)}let D=0;function B(){D=0}function N(){return D}function k(C){D=C}function ee(){let C=D;return C>=i.maxTextures&&Fe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function F(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function j(C,_){let q=n.get(C);if(C.isVideoTexture&&O(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let Z=C.image;if(Z===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{le(q,C,_);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+_)}function G(C,_){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){le(q,C,_);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+_)}function U(C,_){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){le(q,C,_);return}t.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+_)}function J(C,_){let q=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&q.__version!==C.version){de(q,C,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+_)}let I={[Hn]:r.REPEAT,[An]:r.CLAMP_TO_EDGE,[rr]:r.MIRRORED_REPEAT},V={[Lt]:r.NEAREST,[ec]:r.NEAREST_MIPMAP_NEAREST,[Ss]:r.NEAREST_MIPMAP_LINEAR,[Dt]:r.LINEAR,[Mr]:r.LINEAR_MIPMAP_NEAREST,[fn]:r.LINEAR_MIPMAP_LINEAR},ie={[Pf]:r.NEVER,[Nf]:r.ALWAYS,[If]:r.LESS,[Bc]:r.LEQUAL,[Lf]:r.EQUAL,[zc]:r.GEQUAL,[Df]:r.GREATER,[Ff]:r.NOTEQUAL};function re(C,_){if(_.type===yn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Dt||_.magFilter===Mr||_.magFilter===Ss||_.magFilter===fn||_.minFilter===Dt||_.minFilter===Mr||_.minFilter===Ss||_.minFilter===fn)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,I[_.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,I[_.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,I[_.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,V[_.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,V[_.minFilter]),_.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ie[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Lt||_.minFilter!==Ss&&_.minFilter!==fn||_.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ce(C,_){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",A));let Z=_.source,ne=f.get(Z);ne===void 0&&(ne={},f.set(Z,ne));let he=F(_);if(he!==C.__cacheKey){ne[he]===void 0&&(ne[he]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ne[he].usedTimes++;let fe=ne[C.__cacheKey];fe!==void 0&&(ne[C.__cacheKey].usedTimes--,fe.usedTimes===0&&R(_)),C.__cacheKey=he,C.__webglTexture=ne[he].texture}return q}function X(C,_,q){return Math.floor(Math.floor(C/q)/_)}function W(C,_,q,Z){let he=C.updateRanges;if(he.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,_.width,_.height,q,Z,_.data);else{he.sort((Ne,xe)=>Ne.start-xe.start);let fe=0;for(let Ne=1;Ne<he.length;Ne++){let xe=he[fe],pe=he[Ne],Ue=xe.start+xe.count,He=X(pe.start,_.width,4),je=X(xe.start,_.width,4);pe.start<=Ue+1&&He===je&&X(pe.start+pe.count-1,_.width,4)===He?xe.count=Math.max(xe.count,pe.start+pe.count-xe.start):(++fe,he[fe]=pe)}he.length=fe+1;let K=t.getParameter(r.UNPACK_ROW_LENGTH),se=t.getParameter(r.UNPACK_SKIP_PIXELS),ue=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,xe=he.length;Ne<xe;Ne++){let pe=he[Ne],Ue=Math.floor(pe.start/4),He=Math.ceil(pe.count/4),je=Ue%_.width,H=Math.floor(Ue/_.width),me=He,ae=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,je),t.pixelStorei(r.UNPACK_SKIP_ROWS,H),t.texSubImage2D(r.TEXTURE_2D,0,je,H,me,ae,q,Z,_.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,se),t.pixelStorei(r.UNPACK_SKIP_ROWS,ue)}}function le(C,_,q){let Z=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=r.TEXTURE_3D);let ne=ce(C,_),he=_.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+q);let fe=n.get(he);if(he.version!==fe.__version||ne===!0){if(t.activeTexture(r.TEXTURE0+q),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ae=et.getPrimaries(et.workingColorSpace),ge=_.colorSpace===Cn?null:et.getPrimaries(_.colorSpace),we=_.colorSpace===Cn||ae===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment);let se=g(_.image,!1,i.maxTextureSize);se=dt(_,se);let ue=s.convert(_.format,_.colorSpace),Ne=s.convert(_.type),xe=v(_.internalFormat,ue,Ne,_.normalized,_.colorSpace,_.isVideoTexture);re(Z,_);let pe,Ue=_.mipmaps,He=_.isVideoTexture!==!0,je=fe.__version===void 0||ne===!0,H=he.dataReady,me=M(_,se);if(_.isDepthTexture)xe=S(_.format===qi,_.type),je&&(He?t.texStorage2D(r.TEXTURE_2D,1,xe,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,xe,se.width,se.height,0,ue,Ne,null));else if(_.isDataTexture)if(Ue.length>0){He&&je&&t.texStorage2D(r.TEXTURE_2D,me,xe,Ue[0].width,Ue[0].height);for(let ae=0,ge=Ue.length;ae<ge;ae++)pe=Ue[ae],He?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,ae,xe,pe.width,pe.height,0,ue,Ne,pe.data);_.generateMipmaps=!1}else He?(je&&t.texStorage2D(r.TEXTURE_2D,me,xe,se.width,se.height),H&&W(_,se,ue,Ne)):t.texImage2D(r.TEXTURE_2D,0,xe,se.width,se.height,0,ue,Ne,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,xe,Ue[0].width,Ue[0].height,se.depth);for(let ae=0,ge=Ue.length;ae<ge;ae++)if(pe=Ue[ae],_.format!==Mn)if(ue!==null)if(He){if(H)if(_.layerUpdates.size>0){let we=zh(pe.width,pe.height,_.format,_.type);for(let oe of _.layerUpdates){let ke=pe.data.subarray(oe*we/pe.data.BYTES_PER_ELEMENT,(oe+1)*we/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,oe,pe.width,pe.height,1,ue,ke)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,se.depth,ue,pe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,xe,pe.width,pe.height,se.depth,0,pe.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?H&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,pe.width,pe.height,se.depth,ue,Ne,pe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,xe,pe.width,pe.height,se.depth,0,ue,Ne,pe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{He&&je&&t.texStorage2D(r.TEXTURE_2D,me,xe,Ue[0].width,Ue[0].height);for(let ae=0,ge=Ue.length;ae<ge;ae++)pe=Ue[ae],_.format!==Mn?ue!==null?He?H&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,pe.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,xe,pe.width,pe.height,0,pe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,pe.width,pe.height,ue,Ne,pe.data):t.texImage2D(r.TEXTURE_2D,ae,xe,pe.width,pe.height,0,ue,Ne,pe.data)}else if(_.isDataArrayTexture)if(He){if(je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,me,xe,se.width,se.height,se.depth),H)if(_.layerUpdates.size>0){let ae=zh(se.width,se.height,_.format,_.type);for(let ge of _.layerUpdates){let we=se.data.subarray(ge*ae/se.data.BYTES_PER_ELEMENT,(ge+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ge,se.width,se.height,1,ue,Ne,we)}_.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Ne,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,se.width,se.height,se.depth,0,ue,Ne,se.data);else if(_.isData3DTexture)He?(je&&t.texStorage3D(r.TEXTURE_3D,me,xe,se.width,se.height,se.depth),H&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Ne,se.data)):t.texImage3D(r.TEXTURE_3D,0,xe,se.width,se.height,se.depth,0,ue,Ne,se.data);else if(_.isFramebufferTexture){if(je)if(He)t.texStorage2D(r.TEXTURE_2D,me,xe,se.width,se.height);else{let ae=se.width,ge=se.height;for(let we=0;we<me;we++)t.texImage2D(r.TEXTURE_2D,we,xe,ae,ge,0,ue,Ne,null),ae>>=1,ge>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in r){let ae=r.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),se.parentNode!==ae){ae.appendChild(se),u.add(_),ae.onpaint=ge=>{let we=ge.changedElements;for(let oe of u)we.includes(oe.image)&&(oe.needsUpdate=!0)},ae.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,se);else{let we=r.RGBA,oe=r.RGBA,ke=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,we,oe,ke,se)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(He&&je){let ae=at(Ue[0]);t.texStorage2D(r.TEXTURE_2D,me,xe,ae.width,ae.height)}for(let ae=0,ge=Ue.length;ae<ge;ae++)pe=Ue[ae],He?H&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ue,Ne,pe):t.texImage2D(r.TEXTURE_2D,ae,xe,ue,Ne,pe);_.generateMipmaps=!1}else if(He){if(je){let ae=at(se);t.texStorage2D(r.TEXTURE_2D,me,xe,ae.width,ae.height)}H&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Ne,se)}else t.texImage2D(r.TEXTURE_2D,0,xe,ue,Ne,se);p(_)&&x(Z),fe.__version=he.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function de(C,_,q){if(_.image.length!==6)return;let Z=ce(C,_),ne=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+q);let he=n.get(ne);if(ne.version!==he.__version||Z===!0){t.activeTexture(r.TEXTURE0+q);let fe=et.getPrimaries(et.workingColorSpace),K=_.colorSpace===Cn?null:et.getPrimaries(_.colorSpace),se=_.colorSpace===Cn||fe===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,xe=[];for(let oe=0;oe<6;oe++)!ue&&!Ne?xe[oe]=g(_.image[oe],!0,i.maxCubemapSize):xe[oe]=Ne?_.image[oe].image:_.image[oe],xe[oe]=dt(_,xe[oe]);let pe=xe[0],Ue=s.convert(_.format,_.colorSpace),He=s.convert(_.type),je=v(_.internalFormat,Ue,He,_.normalized,_.colorSpace),H=_.isVideoTexture!==!0,me=he.__version===void 0||Z===!0,ae=ne.dataReady,ge=M(_,pe);re(r.TEXTURE_CUBE_MAP,_);let we;if(ue){H&&me&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,je,pe.width,pe.height);for(let oe=0;oe<6;oe++){we=xe[oe].mipmaps;for(let ke=0;ke<we.length;ke++){let Ie=we[ke];_.format!==Mn?Ue!==null?H?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke,je,Ie.width,Ie.height,0,Ie.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke,0,0,Ie.width,Ie.height,Ue,He,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke,je,Ie.width,Ie.height,0,Ue,He,Ie.data)}}}else{if(we=_.mipmaps,H&&me){we.length>0&&ge++;let oe=at(xe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ne){H?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,xe[oe].width,xe[oe].height,Ue,He,xe[oe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,xe[oe].width,xe[oe].height,0,Ue,He,xe[oe].data);for(let ke=0;ke<we.length;ke++){let St=we[ke].image[oe].image;H?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke+1,0,0,St.width,St.height,Ue,He,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke+1,je,St.width,St.height,0,Ue,He,St.data)}}else{H?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,He,xe[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,je,Ue,He,xe[oe]);for(let ke=0;ke<we.length;ke++){let Ie=we[ke];H?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke+1,0,0,Ue,He,Ie.image[oe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ke+1,je,Ue,He,Ie.image[oe])}}}p(_)&&x(r.TEXTURE_CUBE_MAP),he.__version=ne.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Q(C,_,q,Z,ne,he){let fe=s.convert(q.format,q.colorSpace),K=s.convert(q.type),se=v(q.internalFormat,fe,K,q.normalized,q.colorSpace),ue=n.get(_),Ne=n.get(q);if(Ne.__renderTarget=_,!ue.__hasExternalTextures){let xe=Math.max(1,_.width>>he),pe=Math.max(1,_.height>>he);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,he,se,xe,pe,_.depth,0,fe,K,null):t.texImage2D(ne,he,se,xe,pe,0,fe,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),ct(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ne,Ne.__webglTexture,0,rt(_)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,ne,Ne.__webglTexture,he),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ve(C,_,q){if(r.bindRenderbuffer(r.RENDERBUFFER,C),_.depthBuffer){let Z=_.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,he=S(_.stencilBuffer,ne),fe=_.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ct(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(_),he,_.width,_.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(_),he,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,he,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,C)}else{let Z=_.textures;for(let ne=0;ne<Z.length;ne++){let he=Z[ne],fe=s.convert(he.format,he.colorSpace),K=s.convert(he.type),se=v(he.internalFormat,fe,K,he.normalized,he.colorSpace);ct(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,rt(_),se,_.width,_.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,rt(_),se,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,se,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(C,_,q){let Z=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(_.depthTexture);if(ne.__renderTarget=_,(!ne.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),re(r.TEXTURE_CUBE_MAP,_.depthTexture);let ue=s.convert(_.depthTexture.format),Ne=s.convert(_.depthTexture.type),xe;_.depthTexture.format===Zn?xe=r.DEPTH_COMPONENT24:_.depthTexture.format===qi&&(xe=r.DEPTH24_STENCIL8);for(let pe=0;pe<6;pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,xe,_.width,_.height,0,ue,Ne,null)}}else j(_.depthTexture,0);let he=ne.__webglTexture,fe=rt(_),K=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,se=_.depthTexture.format===qi?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(_.depthTexture.format===Zn)ct(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,K,he,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,se,K,he,0);else if(_.depthTexture.format===qi)ct(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,K,he,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,se,K,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Oe(C){let _=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let Z=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Z}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(q)for(let Z=0;Z<6;Z++)Ge(_.__webglFramebuffer[Z],C,Z);else{let Z=C.texture.mipmaps;Z&&Z.length>0?Ge(_.__webglFramebuffer[0],C,0):Ge(_.__webglFramebuffer,C,0)}else if(q){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=r.createRenderbuffer(),ve(_.__webglDepthbuffer[Z],C,!1);else{let ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,he)}}else{let Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=r.createRenderbuffer(),ve(_.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=_.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,he)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(C,_,q){let Z=n.get(C);_!==void 0&&Q(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Oe(C)}function tt(C){let _=C.texture,q=n.get(C),Z=n.get(_);C.addEventListener("dispose",y);let ne=C.textures,he=C.isWebGLCubeRenderTarget===!0,fe=ne.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=_.version,a.memory.textures++),he){q.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer[K]=[];for(let se=0;se<_.mipmaps.length;se++)q.__webglFramebuffer[K][se]=r.createFramebuffer()}else q.__webglFramebuffer[K]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){q.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)q.__webglFramebuffer[K]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(fe)for(let K=0,se=ne.length;K<se;K++){let ue=n.get(ne[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&ct(C)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let K=0;K<ne.length;K++){let se=ne[K];q.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[K]);let ue=s.convert(se.format,se.colorSpace),Ne=s.convert(se.type),xe=v(se.internalFormat,ue,Ne,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),pe=rt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,xe,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,q.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ve(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),re(r.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Q(q.__webglFramebuffer[K][se],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,se);else Q(q.__webglFramebuffer[K],C,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let K=0,se=ne.length;K<se;K++){let ue=ne[K],Ne=n.get(ue),xe=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(xe=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(xe,Ne.__webglTexture),re(xe,ue),Q(q.__webglFramebuffer,C,ue,r.COLOR_ATTACHMENT0+K,xe,0),p(ue)&&x(xe)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,Z.__webglTexture),re(K,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)Q(q.__webglFramebuffer[se],C,_,r.COLOR_ATTACHMENT0,K,se);else Q(q.__webglFramebuffer,C,_,r.COLOR_ATTACHMENT0,K,0);p(_)&&x(K),t.unbindTexture()}C.depthBuffer&&Oe(C)}function ze(C){let _=C.textures;for(let q=0,Z=_.length;q<Z;q++){let ne=_[q];if(p(ne)){let he=w(C),fe=n.get(ne).__webglTexture;t.bindTexture(he,fe),x(he),t.unbindTexture()}}}let $e=[],Mt=[];function Rt(C){if(C.samples>0){if(ct(C)===!1){let _=C.textures,q=C.width,Z=C.height,ne=r.COLOR_BUFFER_BIT,he=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(C),K=_.length>1;if(K)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let se=C.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);let Ne=n.get(_[ue]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ne,0)}r.blitFramebuffer(0,0,q,Z,0,0,q,Z,ne,r.NEAREST),c===!0&&($e.length=0,Mt.length=0,$e.push(r.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&($e.push(he),Mt.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Mt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,fe.__webglColorRenderbuffer[ue]);let Ne=n.get(_[ue]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,Ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let _=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function rt(C){return Math.min(i.maxSamples,C.samples)}function ct(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function dt(C,_){let q=C.colorSpace,Z=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==hn&&q!==Cn&&(et.getTransfer(q)===mt?(Z!==Mn||ne!==bn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",q)),_}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=ee,this.resetTextureUnits=B,this.getTextureUnits=N,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=U,this.setTextureCube=J,this.rebindTextures=Ve,this.setupRenderTarget=tt,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ny(r,e){function t(n,i=Cn){let s,a=et.getTransfer(i);if(n===bn)return r.UNSIGNED_BYTE;if(n===nc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ic)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return r.BYTE;if(n===Rh)return r.SHORT;if(n===Sr)return r.UNSIGNED_SHORT;if(n===tc)return r.INT;if(n===Wn)return r.UNSIGNED_INT;if(n===yn)return r.FLOAT;if(n===_n)return r.HALF_FLOAT;if(n===Ih)return r.ALPHA;if(n===Lh)return r.RGB;if(n===Mn)return r.RGBA;if(n===Zn)return r.DEPTH_COMPONENT;if(n===qi)return r.DEPTH_STENCIL;if(n===sc)return r.RED;if(n===rc)return r.RED_INTEGER;if(n===Xi)return r.RG;if(n===ac)return r.RG_INTEGER;if(n===oc)return r.RGBA_INTEGER;if(n===Sa||n===wa||n===Ta||n===Ea)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cc||n===lc||n===hc||n===uc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dc||n===fc||n===pc||n===mc||n===gc||n===Aa||n===bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===dc||n===fc)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===pc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===mc)return s.COMPRESSED_R11_EAC;if(n===gc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Aa)return s.COMPRESSED_RG11_EAC;if(n===bc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xc||n===vc||n===yc||n===_c||n===Mc||n===Sc||n===wc||n===Tc||n===Ec||n===Ac||n===Rc||n===Cc||n===Pc||n===Ic)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===xc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_c)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ec)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pc)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lc||n===Dc||n===Fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lc)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nc||n===Uc||n===Ra||n===kc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===kc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var Uy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ky=`
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

}`,ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Bt({vertexShader:Uy,fragmentShader:ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Le(new rn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},au=class extends Gn{constructor(e,t){super();let n=this,i=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null,b=typeof XRWebGLBinding<"u",g=new ru,p={},x=t.getContextAttributes(),w=null,v=null,S=[],M=[],A=new Be,y=null,E=null,R=new kt;R.viewport=new ut;let P=new kt;P.viewport=new ut;let D=[R,P],B=new jo,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=S[X];return W===void 0&&(W=new hr,S[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=S[X];return W===void 0&&(W=new hr,S[X]=W),W.getGripSpace()},this.getHand=function(X){let W=S[X];return W===void 0&&(W=new hr,S[X]=W),W.getHandSpace()};function ee(X){let W=M.indexOf(X.inputSource);if(W===-1)return;let le=S[W];le!==void 0&&(le.update(X.inputSource,X.frame,l||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function F(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",j);for(let X=0;X<S.length;X++){let W=M[X];W!==null&&(M[X]=null,S[X].disconnect(W))}N=null,k=null,g.reset();for(let X in p)delete p[X];if(e.setRenderTarget(w),f=null,d=null,u=null,i=null,v=null,ce.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(A.width,A.height,!1),E!==null){let X=E.camera;X.fov=E.fov,X.zoom=E.zoom,X.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",F),i.addEventListener("inputsourceschange",j),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,de=null,Q=null;x.depth&&(Q=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=x.stencil?qi:Zn,de=x.stencil?wr:Wn);let ve={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new tn(d.textureWidth,d.textureHeight,{format:Mn,type:bn,depthTexture:new Gi(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new tn(f.framebufferWidth,f.framebufferHeight,{format:Mn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function j(X){for(let W=0;W<X.removed.length;W++){let le=X.removed[W],de=M.indexOf(le);de>=0&&(M[de]=null,S[de].disconnect(le))}for(let W=0;W<X.added.length;W++){let le=X.added[W],de=M.indexOf(le);if(de===-1){for(let ve=0;ve<S.length;ve++)if(ve>=M.length){M.push(le),de=ve;break}else if(M[ve]===null){M[ve]=le,de=ve;break}if(de===-1)break}let Q=S[de];Q&&Q.connect(le)}}let G=new L,U=new L;function J(X,W,le){G.setFromMatrixPosition(W.matrixWorld),U.setFromMatrixPosition(le.matrixWorld);let de=G.distanceTo(U),Q=W.projectionMatrix.elements,ve=le.projectionMatrix.elements,Ge=Q[14]/(Q[10]-1),Oe=Q[14]/(Q[10]+1),Ve=(Q[9]+1)/Q[5],tt=(Q[9]-1)/Q[5],ze=(Q[8]-1)/Q[0],$e=(ve[8]+1)/ve[0],Mt=Ge*ze,Rt=Ge*$e,rt=de/(-ze+$e),ct=rt*-ze;if(W.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ct),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Q[10]===-1)X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let O=Ge+rt,dt=Oe+rt,at=Mt-ct,C=Rt+(de-ct),_=Ve*Oe/dt*O,q=tt*Oe/dt*O;X.projectionMatrix.makePerspective(at,C,_,q,O,dt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function I(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let W=X.near,le=X.far;g.texture!==null&&(g.depthNear>0&&(W=g.depthNear),g.depthFar>0&&(le=g.depthFar)),B.near=P.near=R.near=W,B.far=P.far=R.far=le,(N!==B.near||k!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),N=B.near,k=B.far),B.layers.mask=X.layers.mask|6,R.layers.mask=B.layers.mask&-5,P.layers.mask=B.layers.mask&-3;let de=X.parent,Q=B.cameras;I(B,de);for(let ve=0;ve<Q.length;ve++)I(Q[ve],de);Q.length===2?J(B,R,P):B.projectionMatrix.copy(R.projectionMatrix),E===null&&X.isPerspectiveCamera&&(E={camera:X,fov:X.fov,zoom:X.zoom}),V(X,B,de)};function V(X,W,le){le===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(X){return p[X]};let ie=null;function re(X,W){if(h=W.getViewerPose(l||a),m=W,h!==null){let le=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let de=!1;le.length!==B.cameras.length&&(B.cameras.length=0,de=!0);for(let Oe=0;Oe<le.length;Oe++){let Ve=le[Oe],tt=null;if(f!==null)tt=f.getViewport(Ve);else{let $e=u.getViewSubImage(d,Ve);tt=$e.viewport,Oe===0&&(e.setRenderTargetTextures(v,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(v))}let ze=D[Oe];ze===void 0&&(ze=new kt,ze.layers.enable(Oe),ze.viewport=new ut,D[Oe]=ze),ze.matrix.fromArray(Ve.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ve.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(tt.x,tt.y,tt.width,tt.height),Oe===0&&(B.matrix.copy(ze.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),de===!0&&B.cameras.push(ze)}let Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Oe=u.getDepthInformation(le[0]);Oe&&Oe.isValid&&Oe.texture&&g.init(Oe,i.renderState)}if(Q&&Q.includes("camera-access")&&b){e.state.unbindTexture(),u=n.getBinding();for(let Oe=0;Oe<le.length;Oe++){let Ve=le[Oe].camera;if(Ve){let tt=p[Ve];tt||(tt=new ua,p[Ve]=tt);let ze=u.getCameraImage(Ve);tt.sourceTexture=ze}}}}for(let le=0;le<S.length;le++){let de=M[le],Q=S[le];de!==null&&Q!==void 0&&Q.update(de,W,l||a)}ie&&ie(X,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),m=null}let ce=new up;ce.setAnimationLoop(re),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}},Oy=new Ae,bp=new qe;bp.set(-1,0,0,0,1,0,0,0,1);function By(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,kh(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(g,p):p.isMeshLambertMaterial?(s(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),b(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,x,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x=e.get(p),w=x.envMap,v=x.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Oy.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(bp),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,x,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=w*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function b(g,p){let x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function zy(r,e,t,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,S){let M=S.program;n.uniformBlockBinding(v,M)}function l(v,S){let M=i[v.id];M===void 0&&(g(v),M=h(v),i[v.id]=M,v.addEventListener("dispose",x));let A=S.program;n.updateUBOMapping(v,A);let y=e.render.frame;s[v.id]!==y&&(d(v),s[v.id]=y)}function h(v){let S=u();v.__bindingPointIndex=S;let M=r.createBuffer(),A=v.__size,y=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,M),M}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let S=i[v.id],M=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let y=0,E=M.length;y<E;y++){let R=M[y];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)f(R[P],y,P,A);else f(R,y,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,S,M,A){if(b(v,S,M,A)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let P=0;P<E.length;P++){let D=E[P],B=p(D);m(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,y,v.__data)}}function m(v,S,M){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,M)}function b(v,S,M,A){let y=v.value,E=S+"_"+M;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let R=A[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function g(v){let S=v.uniforms,M=0,A=16;for(let E=0,R=S.length;E<R;E++){let P=Array.isArray(S[E])?S[E]:[S[E]];for(let D=0,B=P.length;D<B;D++){let N=P[D],k=Array.isArray(N.value)?N.value:[N.value];for(let ee=0,F=k.length;ee<F;ee++){let j=k[ee],G=p(j),U=M%A,J=U%G.boundary,I=U+J;M+=J,I!==0&&A-I<G.storage&&(M+=A-I),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=G.storage}}}let y=M%A;return y>0&&(M+=A-y),v.__size=M,v.__cache={},this}function p(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Fe("WebGLRenderer: Unsupported uniform value type.",v),S}function x(v){let S=v.target;S.removeEventListener("dispose",x);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function w(){for(let v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:w}}var Hy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ai=null;function Gy(){return ai===null&&(ai=new fr(Hy,16,16,Xi,_n),ai.name="DFG_LUT",ai.minFilter=Dt,ai.magFilter=Dt,ai.wrapS=An,ai.wrapT=An,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}var Vc=class{constructor(e={}){let{canvas:t=Uf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=bn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let b=f,g=new Set([oc,ac,rc]),p=new Set([bn,Wn,Sr,wr,nc,ic]),x=new Uint32Array(4),w=new Int32Array(4),v=new L,S=null,M=null,A=[],y=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,D=null,B=null,N=null,k=null;this._outputColorSpace=vt;let ee=0,F=0,j=null,G=-1,U=null,J=new ut,I=new ut,V=null,ie=new Se(0),re=0,ce=t.width,X=t.height,W=1,le=null,de=null,Q=new ut(0,0,ce,X),ve=new ut(0,0,ce,X),Ge=!1,Oe=new Hi,Ve=!1,tt=!1,ze=new Ae,$e=new L,Mt=new ut,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},rt=!1;function ct(){return j===null?W:1}let O=n;function dt(T,z){return t.getContext(T,z)}let at,C,_,q,Z,ne,he,fe,K,se,ue,Ne,xe,pe,Ue,He,je,H,me,ae,ge,we,oe;try{let T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",St,!1),t.addEventListener("webglcontextrestored",ft,!1),t.addEventListener("webglcontextcreationerror",Dn,!1),O===null){let z="webgl2";if(O=dt(z,T),O===null)throw dt(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(T){throw t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),We("WebGLRenderer: "+T.message),T}function ke(){at=new Yx(O),at.init(),ge=new Ny(O,at),C=new Bx(O,at,e,ge),_=new Dy(O,at),C.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),B=O.createFramebuffer(),N=O.createFramebuffer(),k=O.createFramebuffer(),q=new Zx(O),Z=new vy,ne=new Fy(O,at,_,Z,C,ge,q),he=new Kx(R),fe=new e0(O),we=new kx(O,fe),K=new $x(O,fe,q,we),se=new ev(O,K,fe,we,q),H=new Qx(O,C,ne),Ue=new zx(Z),ue=new xy(R,he,at,C,we,Ue),Ne=new By(R,Z),xe=new _y,pe=new Ay(at),je=new Ux(R,he,_,se,m,c),He=new Ly(R,se,C),oe=new zy(O,q,C,_),me=new Ox(O,at,q),ae=new Jx(O,at,q),q.programs=ue.programs,R.capabilities=C,R.extensions=at,R.properties=Z,R.renderLists=xe,R.shadowMap=He,R.state=_,R.info=q}b!==bn&&(E=new nv(b,t.width,t.height,o,i,s));let Ie=new au(R,O);this.xr=Ie,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let T=at.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=at.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(ce,X,!1))},this.getSize=function(T){return T.set(ce,X)},this.setSize=function(T,z,te=!0){if(Ie.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}ce=T,X=z,t.width=Math.floor(T*W),t.height=Math.floor(z*W),te===!0&&(t.style.width=T+"px",t.style.height=z+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(ce*W,X*W).floor()},this.setDrawingBufferSize=function(T,z,te){ce=T,X=z,W=te,t.width=Math.floor(T*te),t.height=Math.floor(z*te),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(b===bn){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){Fe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(J)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,z,te,Y){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,z,te,Y),_.viewport(J.copy(Q).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(ve)},this.setScissor=function(T,z,te,Y){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,z,te,Y),_.scissor(I.copy(ve).multiplyScalar(W).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){_.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){de=T},this.getClearColor=function(T){return T.copy(je.getClearColor())},this.setClearColor=function(){je.setClearColor(...arguments)},this.getClearAlpha=function(){return je.getClearAlpha()},this.setClearAlpha=function(){je.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,te=!0){let Y=0;if(T){let $=!1;if(j!==null){let Me=j.texture.format;$=g.has(Me)}if($){let Me=j.texture.type,Ee=p.has(Me),ye=je.getClearColor(),Re=je.getClearAlpha(),De=ye.r,Je=ye.g,st=ye.b;Ee?(x[0]=De,x[1]=Je,x[2]=st,x[3]=Re,O.clearBufferuiv(O.COLOR,0,x)):(w[0]=De,w[1]=Je,w[2]=st,w[3]=Re,O.clearBufferiv(O.COLOR,0,w))}else Y|=O.COLOR_BUFFER_BIT}z&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),D=T},this.dispose=function(){t.removeEventListener("webglcontextlost",St,!1),t.removeEventListener("webglcontextrestored",ft,!1),t.removeEventListener("webglcontextcreationerror",Dn,!1),je.dispose(),xe.dispose(),pe.dispose(),Z.dispose(),he.dispose(),se.dispose(),we.dispose(),oe.dispose(),ue.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",sd),Ie.removeEventListener("sessionend",rd),Zi.stop()};function St(T){T.preventDefault(),ta("WebGLRenderer: Context Lost."),P=!0}function ft(){ta("WebGLRenderer: Context Restored."),P=!1;let T=q.autoReset,z=He.enabled,te=He.autoUpdate,Y=He.needsUpdate,$=He.type;ke(),q.autoReset=T,He.enabled=z,He.autoUpdate=te,He.needsUpdate=Y,He.type=$}function Dn(T){We("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Kn(T){let z=T.target;z.removeEventListener("dispose",Kn),Hm(z)}function Hm(T){Gm(T),Z.remove(T)}function Gm(T){let z=Z.get(T).programs;z!==void 0&&(z.forEach(function(te){ue.releaseProgram(te)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,te,Y,$,Me){z===null&&(z=Rt);let Ee=$.isMesh&&$.matrixWorld.determinantAffine()<0,ye=qm(T,z,te,Y,$);_.setMaterial(Y,Ee);let Re=te.index,De=1;if(Y.wireframe===!0){if(Re=K.getWireframeAttribute(te),Re===void 0)return;De=2}let Je=te.drawRange,st=te.attributes.position,Ce=Je.start*De,pt=(Je.start+Je.count)*De;Me!==null&&(Ce=Math.max(Ce,Me.start*De),pt=Math.min(pt,(Me.start+Me.count)*De)),Re!==null?(Ce=Math.max(Ce,0),pt=Math.min(pt,Re.count)):st!=null&&(Ce=Math.max(Ce,0),pt=Math.min(pt,st.count));let Nt=pt-Ce;if(Nt<0||Nt===1/0)return;we.setup($,Y,ye,te,Re);let Tt,_t=me;if(Re!==null&&(Tt=fe.get(Re),_t=ae,_t.setIndex(Tt)),$.isMesh)Y.wireframe===!0?(_.setLineWidth(Y.wireframeLinewidth*ct()),_t.setMode(O.LINES)):_t.setMode(O.TRIANGLES);else if($.isLine){let Zt=Y.linewidth;Zt===void 0&&(Zt=1),_.setLineWidth(Zt*ct()),$.isLineSegments?_t.setMode(O.LINES):$.isLineLoop?_t.setMode(O.LINE_LOOP):_t.setMode(O.LINE_STRIP)}else $.isPoints?_t.setMode(O.POINTS):$.isSprite&&_t.setMode(O.TRIANGLES);if($.isBatchedMesh)if(at.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Zt=$._multiDrawStarts,Te=$._multiDrawCounts,cn=$._multiDrawCount,lt=Re?fe.get(Re).bytesPerElement:1,Tn=Z.get(Y).currentProgram.getUniforms();for(let Yn=0;Yn<cn;Yn++)Tn.setValue(O,"_gl_DrawID",Yn),_t.render(Zt[Yn]/lt,Te[Yn])}else if($.isInstancedMesh)_t.renderInstances(Ce,Nt,$.count);else if(te.isInstancedBufferGeometry){let Zt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Te=Math.min(te.instanceCount,Zt);_t.renderInstances(Ce,Nt,Te)}else _t.render(Ce,Nt)};function id(T,z,te,Y){D!==null&&T.isNodeMaterial&&D.setObject(Y,T),Ve===!0&&Ue.setState(T,te,!1),T.transparent===!0&&T.side===Pt&&T.forceSinglePass===!1?(T.side=Gt,T.needsUpdate=!0,Xa(T,z,Y),T.side=si,T.needsUpdate=!0,Xa(T,z,Y),T.side=Pt):Xa(T,z,Y)}this.compile=function(T,z,te=null){te===null&&(te=T),D!==null&&D.renderStart(T,z,te),M=pe.get(te),M.init(z),y.push(M),te.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),T!==te&&T.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(M.pushLight($),$.castShadow&&M.pushShadow($))}),M.setupLights(),D!==null&&D.updateLights(M.state.lightsArray),tt=this.localClippingEnabled,Ve=Ue.init(this.clippingPlanes,tt),Ve===!0&&Ue.setGlobalState(this.clippingPlanes,z),D!==null&&He.render(M.state.shadowsArray,te,z);let Y=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let Me=$.material;if(Me)if(Array.isArray(Me))for(let Ee=0;Ee<Me.length;Ee++){let ye=Me[Ee];id(ye,te,z,$),Y.add(ye)}else id(Me,te,z,$),Y.add(Me)}),M=y.pop(),D!==null&&D.renderEnd(),Y},this.compileAsync=function(T,z,te=null){let Y=this.compile(T,z,te);return new Promise($=>{function Me(){if(Y.forEach(function(Ee){let Re=Z.get(Ee).currentProgram;(Re===void 0||Re.isReady())&&Y.delete(Ee)}),Y.size===0){$(T);return}setTimeout(Me,10)}at.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Dl=null;function Vm(T){Dl&&Dl(T)}function sd(){Zi.stop()}function rd(){Zi.start()}let Zi=new up;Zi.setAnimationLoop(Vm),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(T){Dl=T,Ie.setAnimationLoop(T),T===null?Zi.stop():Zi.start()},Ie.addEventListener("sessionstart",sd),Ie.addEventListener("sessionend",rd),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(T,z);let te=Ie.enabled===!0&&Ie.isPresenting===!0,Y=E!==null&&(j===null||te)&&E.begin(R,j);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(z),z=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,z,j),M=pe.get(T,y.length),M.init(z),M.state.textureUnits=ne.getTextureUnits(),y.push(M),ze.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Oe.setFromProjectionMatrix(ze,Bn,z.reversedDepth),tt=this.localClippingEnabled,Ve=Ue.init(this.clippingPlanes,tt),S=xe.get(T,A.length),S.init(),A.push(S),Ie.enabled===!0&&Ie.isPresenting===!0){let Ee=R.xr.getDepthSensingMesh();Ee!==null&&Fl(Ee,z,-1/0,R.sortObjects)}Fl(T,z,0,R.sortObjects),S.finish(),D!==null&&D.updateLights(M.state.lightsArray),R.sortObjects===!0&&S.sort(le,de),rt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,rt&&je.addToRenderList(S,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ve===!0&&Ue.beginShadows();let $=M.state.shadowsArray;if(He.render($,T,z),Ve===!0&&Ue.endShadows(),(Y&&E.hasRenderPass())===!1){let Ee=S.opaque,ye=S.transmissive;if(M.setupLights(),z.isArrayCamera){let Re=z.cameras;if(ye.length>0)for(let De=0,Je=Re.length;De<Je;De++){let st=Re[De];od(Ee,ye,T,st)}rt&&je.render(T);for(let De=0,Je=Re.length;De<Je;De++){let st=Re[De];ad(S,T,st,st.viewport)}}else ye.length>0&&od(Ee,ye,T,z),rt&&je.render(T),ad(S,T,z)}j!==null&&F===0&&(ne.updateMultisampleRenderTarget(j),ne.updateRenderTargetMipmap(j)),Y&&E.end(R),T.isScene===!0&&T.onAfterRender(R,T,z),we.resetDefaultState(),G=-1,U=null,y.pop(),y.length>0?(M=y[y.length-1],ne.setTextureUnits(M.state.textureUnits),Ve===!0&&Ue.setGlobalState(R.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?S=A[A.length-1]:S=null,D!==null&&D.renderEnd()};function Fl(T,z,te,Y){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Oe)){Y&&Mt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ze);let Ee=se.update(T),ye=T.material;ye.visible&&S.push(T,Ee,ye,te,Mt.z,null,z)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Oe))){let Ee=se.update(T),ye=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Mt.copy(T.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Mt.copy(Ee.boundingSphere.center)),Mt.applyMatrix4(T.matrixWorld).applyMatrix4(ze)),Array.isArray(ye)){let Re=Ee.groups;for(let De=0,Je=Re.length;De<Je;De++){let st=Re[De],Ce=ye[st.materialIndex];Ce&&Ce.visible&&S.push(T,Ee,Ce,te,Mt.z,st,z)}}else ye.visible&&S.push(T,Ee,ye,te,Mt.z,null,z)}}let Me=T.children;for(let Ee=0,ye=Me.length;Ee<ye;Ee++)Fl(Me[Ee],z,te,Y)}function ad(T,z,te,Y){let{opaque:$,transmissive:Me,transparent:Ee}=T;M.setupLightsView(te),Ve===!0&&Ue.setGlobalState(R.clippingPlanes,te),Y&&_.viewport(J.copy(Y)),$.length>0&&qa($,z,te),Me.length>0&&qa(Me,z,te),Ee.length>0&&qa(Ee,z,te),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function od(T,z,te,Y){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[Y.id]===void 0){let Ce=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[Y.id]=new tn(1,1,{generateMipmaps:!0,type:Ce?_n:bn,minFilter:fn,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let Me=M.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||J;Me.setSize(Ee.z*R.transmissionResolutionScale,Ee.w*R.transmissionResolutionScale);let ye=R.getRenderTarget(),Re=R.getActiveCubeFace(),De=R.getActiveMipmapLevel();R.setRenderTarget(Me),R.getClearColor(ie),re=R.getClearAlpha(),re<1&&R.setClearColor(16777215,.5),R.clear(),rt&&je.render(te);let Je=R.toneMapping;R.toneMapping=dn;let st=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),M.setupLightsView(Y),Ve===!0&&Ue.setGlobalState(R.clippingPlanes,Y),qa(T,te,Y),ne.updateMultisampleRenderTarget(Me),ne.updateRenderTargetMipmap(Me),at.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let pt=0,Nt=z.length;pt<Nt;pt++){let Tt=z[pt],{object:_t,geometry:Zt,material:Te,group:cn}=Tt;if(Te.side===Pt&&_t.layers.test(Y.layers)){let lt=Te.side;Te.side=Gt,Te.needsUpdate=!0,cd(_t,te,Y,Zt,Te,cn),Te.side=lt,Te.needsUpdate=!0,Ce=!0}}Ce===!0&&(ne.updateMultisampleRenderTarget(Me),ne.updateRenderTargetMipmap(Me))}R.setRenderTarget(ye,Re,De),R.setClearColor(ie,re),st!==void 0&&(Y.viewport=st),R.toneMapping=Je}function qa(T,z,te){let Y=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Me=T.length;$<Me;$++){let Ee=T[$],{object:ye,geometry:Re,group:De}=Ee,Je=Ee.material;Je.allowOverride===!0&&Y!==null&&(Je=Y),ye.layers.test(te.layers)&&cd(ye,z,te,Re,Je,De)}}function cd(T,z,te,Y,$,Me){D!==null&&$.isNodeMaterial&&D.setObject(T,$),T.onBeforeRender(R,z,te,Y,$,Me),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(R,z,te,Y,T,Me),$.transparent===!0&&$.side===Pt&&$.forceSinglePass===!1?($.side=Gt,$.needsUpdate=!0,R.renderBufferDirect(te,z,Y,$,T,Me),$.side=si,$.needsUpdate=!0,R.renderBufferDirect(te,z,Y,$,T,Me),$.side=Pt):R.renderBufferDirect(te,z,Y,$,T,Me),T.onAfterRender(R,z,te,Y,$,Me)}function Xa(T,z,te){z.isScene!==!0&&(z=Rt);let Y=Z.get(T),$=M.state.lights,Me=M.state.shadowsArray,Ee=$.state.version,ye=ue.getParameters(T,$.state,Me,z,te,M.state.lightProbeGridArray),Re=ue.getProgramCacheKey(ye),De=Y.programs;Y.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;Y.envMap=he.get(T.envMap||Y.environment,Je),Y.envMapRotation=Y.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,De===void 0&&(T.addEventListener("dispose",Kn),De=new Map,Y.programs=De);let st=De.get(Re);if(st!==void 0){if(Y.currentProgram===st&&Y.lightsStateVersion===Ee)return hd(T,ye),st}else ye.uniforms=ue.getUniforms(T),D!==null&&T.isNodeMaterial&&D.build(T,te,ye),T.onBeforeCompile(ye,R),st=ue.acquireProgram(ye,Re),De.set(Re,st),Y.uniforms=ye.uniforms;let Ce=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),hd(T,ye),Y.needsLights=jm(T),Y.lightsStateVersion=Ee,Y.needsLights&&(Ce.ambientLightColor.value=$.state.ambient,Ce.lightProbe.value=$.state.probe,Ce.sunLights.value=$.state.sun,Ce.sunLightShadows.value=$.state.sunShadow,Ce.directionalLights.value=$.state.directional,Ce.directionalLightShadows.value=$.state.directionalShadow,Ce.spotLights.value=$.state.spot,Ce.spotLightShadows.value=$.state.spotShadow,Ce.rectAreaLights.value=$.state.rectArea,Ce.ltc_1.value=$.state.rectAreaLTC1,Ce.ltc_2.value=$.state.rectAreaLTC2,Ce.pointLights.value=$.state.point,Ce.pointLightShadows.value=$.state.pointShadow,Ce.hemisphereLights.value=$.state.hemi,Ce.sunShadowMatrix.value=$.state.sunShadowMatrix,Ce.sunShadowCascade.value=$.state.sunShadowCascade,Ce.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ce.spotLightMatrix.value=$.state.spotLightMatrix,Ce.spotLightMap.value=$.state.spotLightMap,Ce.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.lightProbeGrid=M.state.lightProbeGridArray.length>0,Y.currentProgram=st,Y.uniformsList=null,st}function ld(T){if(T.uniformsList===null){let z=T.currentProgram.getUniforms();T.uniformsList=Cr.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function hd(T,z){let te=Z.get(T);te.outputColorSpace=z.outputColorSpace,te.batching=z.batching,te.batchingColor=z.batchingColor,te.instancing=z.instancing,te.instancingColor=z.instancingColor,te.instancingMorph=z.instancingMorph,te.skinning=z.skinning,te.morphTargets=z.morphTargets,te.morphNormals=z.morphNormals,te.morphColors=z.morphColors,te.morphTargetsCount=z.morphTargetsCount,te.numClippingPlanes=z.numClippingPlanes,te.numIntersection=z.numClipIntersection,te.vertexAlphas=z.vertexAlphas,te.vertexTangents=z.vertexTangents,te.toneMapping=z.toneMapping}function Wm(T,z){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;v.setFromMatrixPosition(z.matrixWorld);for(let te=0,Y=T.length;te<Y;te++){let $=T[te];if($.texture!==null&&$.boundingBox.containsPoint(v))return $}return null}function qm(T,z,te,Y,$){z.isScene!==!0&&(z=Rt),ne.resetTextureUnits();let Me=z.fog,Ee=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,ye=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:et.workingColorSpace,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,De=he.get(Y.envMap||Ee,Re),Je=Y.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!te.morphAttributes.position,pt=!!te.morphAttributes.normal,Nt=!!te.morphAttributes.color,Tt=dn;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Tt=R.toneMapping);let _t=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Zt=_t!==void 0?_t.length:0,Te=Z.get(Y),cn=M.state.lights;if(Ve===!0&&(tt===!0||T!==U)){let wt=T===U&&Y.id===G;Ue.setState(Y,T,wt)}let lt=!1;Y.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==cn.state.version||Te.outputColorSpace!==ye||$.isBatchedMesh&&Te.batching===!1||!$.isBatchedMesh&&Te.batching===!0||$.isBatchedMesh&&Te.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Te.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Te.instancing===!1||!$.isInstancedMesh&&Te.instancing===!0||$.isSkinnedMesh&&Te.skinning===!1||!$.isSkinnedMesh&&Te.skinning===!0||$.isInstancedMesh&&Te.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Te.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Te.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Te.instancingMorph===!1&&$.morphTexture!==null||Te.envMap!==De||Y.fog===!0&&Te.fog!==Me||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ue.numPlanes||Te.numIntersection!==Ue.numIntersection)||Te.vertexAlphas!==Je||Te.vertexTangents!==st||Te.morphTargets!==Ce||Te.morphNormals!==pt||Te.morphColors!==Nt||Te.toneMapping!==Tt||Te.morphTargetsCount!==Zt||!!Te.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Te.__version=Y.version);let Tn=Te.currentProgram;lt===!0&&(Tn=Xa(Y,z,$),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,Tn,Te));let Yn=!1,Ii=!1,ks=!1,bt=Tn.getUniforms(),It=Te.uniforms;if(_.useProgram(Tn.program)&&(Yn=!0,Ii=!0,ks=!0),Y.id!==G&&(G=Y.id,Ii=!0),Te.needsLights){let wt=Wm(M.state.lightProbeGridArray,$);Te.lightProbeGrid!==wt&&(Te.lightProbeGrid=wt,Ii=!0)}if(Yn||U!==T){_.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),bt.setValue(O,"projectionMatrix",T.projectionMatrix),bt.setValue(O,"viewMatrix",T.matrixWorldInverse);let Di=bt.map.cameraPosition;Di!==void 0&&Di.setValue(O,$e.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(O,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,Ii=!0,ks=!0)}if(Te.needsLights&&(cn.state.sunShadowMap.length>0&&bt.setValue(O,"sunShadowMap",cn.state.sunShadowMap,ne),cn.state.directionalShadowMap.length>0&&bt.setValue(O,"directionalShadowMap",cn.state.directionalShadowMap,ne),cn.state.spotShadowMap.length>0&&bt.setValue(O,"spotShadowMap",cn.state.spotShadowMap,ne),cn.state.pointShadowMap.length>0&&bt.setValue(O,"pointShadowMap",cn.state.pointShadowMap,ne)),$.isSkinnedMesh){bt.setOptional(O,$,"bindMatrix"),bt.setOptional(O,$,"bindMatrixInverse");let wt=$.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),bt.setValue(O,"boneTexture",wt.boneTexture,ne))}$.isBatchedMesh&&(bt.setOptional(O,$,"batchingTexture"),bt.setValue(O,"batchingTexture",$._matricesTexture,ne),bt.setOptional(O,$,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",$._indirectTexture,ne),bt.setOptional(O,$,"batchingColorTexture"),$._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",$._colorsTexture,ne));let Li=te.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&H.update($,te,Tn),(Ii||Te.receiveShadow!==$.receiveShadow)&&(Te.receiveShadow=$.receiveShadow,bt.setValue(O,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(It.envMapIntensity.value=z.environmentIntensity),It.dfgLUT!==void 0&&(It.dfgLUT.value=Gy()),Ii){if(bt.setValue(O,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&Xm(It,ks),Me&&Y.fog===!0&&Ne.refreshFogUniforms(It,Me),Ne.refreshMaterialUniforms(It,Y,W,X,M.state.transmissionRenderTarget[T.id]),Te.needsLights&&Te.lightProbeGrid){let wt=Te.lightProbeGrid;It.probesSH.value=wt.texture,It.probesMin.value.copy(wt.boundingBox.min),It.probesMax.value.copy(wt.boundingBox.max),It.probesResolution.value.copy(wt.resolution)}Cr.upload(O,ld(Te),It,ne)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Cr.upload(O,ld(Te),It,ne),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(O,"center",$.center),bt.setValue(O,"modelViewMatrix",$.modelViewMatrix),bt.setValue(O,"normalMatrix",$.normalMatrix),bt.setValue(O,"modelMatrix",$.matrixWorld),Y.uniformsGroups!==void 0){let wt=Y.uniformsGroups;for(let Di=0,Os=wt.length;Di<Os;Di++){let dd=wt[Di];oe.update(dd,Tn),oe.bind(dd,Tn)}}return Tn}function Xm(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.sunLights.needsUpdate=z,T.sunLightShadows.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function jm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(T,z,te){let Y=Z.get(T);Y.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=z,Z.get(T.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:te,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){let te=Z.get(T);te.__webglFramebuffer=z,te.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(T,z=0,te=0){j=T,ee=z,F=te;let Y=null,$=!1,Me=!1;if(T){let ye=Z.get(T);if(ye.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(O.FRAMEBUFFER,ye.__webglFramebuffer),J.copy(T.viewport),I.copy(T.scissor),V=T.scissorTest,_.viewport(J),_.scissor(I),_.setScissorTest(V),G=-1;return}else if(ye.__webglFramebuffer===void 0)ne.setupRenderTarget(T);else if(ye.__hasExternalTextures)ne.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Je=T.depthTexture;if(ye.__boundDepthTexture!==Je){if(Je!==null&&Z.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(T)}}let Re=T.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Me=!0);let De=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(De[z])?Y=De[z][te]:Y=De[z],$=!0):T.samples>0&&ne.useMultisampledRTT(T)===!1?Y=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(De)?Y=De[te]:Y=De,J.copy(T.viewport),I.copy(T.scissor),V=T.scissorTest}else J.copy(Q).multiplyScalar(W).floor(),I.copy(ve).multiplyScalar(W).floor(),V=Ge;if(te!==0&&(Y=B),_.bindFramebuffer(O.FRAMEBUFFER,Y)&&_.drawBuffers(T,Y),_.viewport(J),_.scissor(I),_.setScissorTest(V),$){let ye=Z.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,ye.__webglTexture,te)}else if(Me){let ye=z;for(let Re=0;Re<T.textures.length;Re++){let De=Z.get(T.textures[Re]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Re,De.__webglTexture,te,ye)}}else if(T!==null&&te!==0){let ye=Z.get(T.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ye.__webglTexture,te)}G=-1};function ud(T){let z=Z.get(T);return(z.__readFormat!==T.format||z.__readType!==T.type)&&(z.__readFormat=T.format,z.__readType=T.type,z.__formatReadable=C.textureFormatReadable(T.format),z.__typeReadable=C.textureTypeReadable(T.type)),z}this.readRenderTargetPixels=function(T,z,te,Y,$,Me,Ee,ye=0){if(!(T&&T.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){_.bindFramebuffer(O.FRAMEBUFFER,Re);try{let De=T.textures[ye],Je=De.format,st=De.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Ce=ud(De);if(Ce.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Y&&te>=0&&te<=T.height-$&&O.readPixels(z,te,Y,$,ge.convert(Je),ge.convert(st),Me)}finally{let De=j!==null?Z.get(j).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(T,z,te,Y,$,Me,Ee,ye=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re)if(z>=0&&z<=T.width-Y&&te>=0&&te<=T.height-$){_.bindFramebuffer(O.FRAMEBUFFER,Re);let De=T.textures[ye],Je=De.format,st=De.type;T.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ye);let Ce=ud(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.bufferData(O.PIXEL_PACK_BUFFER,Me.byteLength,O.STREAM_READ),O.readPixels(z,te,Y,$,ge.convert(Je),ge.convert(st),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Nt=j!==null?Z.get(j).__webglFramebuffer:null;_.bindFramebuffer(O.FRAMEBUFFER,Nt);let Tt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Of(O,Tt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,pt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(pt),O.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,te=0){let Y=Math.pow(2,-te),$=Math.floor(T.image.width*Y),Me=Math.floor(T.image.height*Y),Ee=z!==null?z.x:0,ye=z!==null?z.y:0;ne.setTexture2D(T,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Ee,ye,$,Me),_.unbindTexture()},this.copyTextureToTexture=function(T,z,te=null,Y=null,$=0,Me=0){let Ee,ye,Re,De,Je,st,Ce,pt,Nt,Tt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(te!==null)Ee=te.max.x-te.min.x,ye=te.max.y-te.min.y,Re=te.isBox3?te.max.z-te.min.z:1,De=te.min.x,Je=te.min.y,st=te.isBox3?te.min.z:0;else{let It=Math.pow(2,-$);Ee=Math.floor(Tt.width*It),ye=Math.floor(Tt.height*It),T.isDataArrayTexture?Re=Tt.depth:T.isData3DTexture?Re=Math.floor(Tt.depth*It):Re=1,De=0,Je=0,st=0}Y!==null?(Ce=Y.x,pt=Y.y,Nt=Y.z):(Ce=0,pt=0,Nt=0);let _t=ge.convert(z.format),Zt=ge.convert(z.type),Te;z.isData3DTexture?(ne.setTexture3D(z,0),Te=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ne.setTexture2DArray(z,0),Te=O.TEXTURE_2D_ARRAY):(ne.setTexture2D(z,0),Te=O.TEXTURE_2D),_.activeTexture(O.TEXTURE0),_.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),_.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),_.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);let cn=_.getParameter(O.UNPACK_ROW_LENGTH),lt=_.getParameter(O.UNPACK_IMAGE_HEIGHT),Tn=_.getParameter(O.UNPACK_SKIP_PIXELS),Yn=_.getParameter(O.UNPACK_SKIP_ROWS),Ii=_.getParameter(O.UNPACK_SKIP_IMAGES);_.pixelStorei(O.UNPACK_ROW_LENGTH,Tt.width),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Tt.height),_.pixelStorei(O.UNPACK_SKIP_PIXELS,De),_.pixelStorei(O.UNPACK_SKIP_ROWS,Je),_.pixelStorei(O.UNPACK_SKIP_IMAGES,st);let ks=T.isDataArrayTexture||T.isData3DTexture,bt=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){let It=Z.get(T),Li=Z.get(z),wt=Z.get(It.__renderTarget),Di=Z.get(Li.__renderTarget);_.bindFramebuffer(O.READ_FRAMEBUFFER,wt.__webglFramebuffer),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Os=0;Os<Re;Os++)ks&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,$,st+Os),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Z.get(z).__webglTexture,Me,Nt+Os)),O.blitFramebuffer(De,Je,Ee,ye,Ce,pt,Ee,ye,O.DEPTH_BUFFER_BIT,O.NEAREST);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||Z.has(T)){let It=Z.get(T),Li=Z.get(z);_.bindFramebuffer(O.READ_FRAMEBUFFER,N),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,k);for(let wt=0;wt<Re;wt++)ks?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,It.__webglTexture,$,st+wt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,It.__webglTexture,$),bt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Li.__webglTexture,Me,Nt+wt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Li.__webglTexture,Me),$!==0?O.blitFramebuffer(De,Je,Ee,ye,Ce,pt,Ee,ye,O.COLOR_BUFFER_BIT,O.NEAREST):bt?O.copyTexSubImage3D(Te,Me,Ce,pt,Nt+wt,De,Je,Ee,ye):O.copyTexSubImage2D(Te,Me,Ce,pt,De,Je,Ee,ye);_.bindFramebuffer(O.READ_FRAMEBUFFER,null),_.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bt?T.isDataTexture||T.isData3DTexture?O.texSubImage3D(Te,Me,Ce,pt,Nt,Ee,ye,Re,_t,Zt,Tt.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Te,Me,Ce,pt,Nt,Ee,ye,Re,_t,Tt.data):O.texSubImage3D(Te,Me,Ce,pt,Nt,Ee,ye,Re,_t,Zt,Tt):T.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Me,Ce,pt,Ee,ye,_t,Zt,Tt.data):T.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Me,Ce,pt,Tt.width,Tt.height,_t,Tt.data):O.texSubImage2D(O.TEXTURE_2D,Me,Ce,pt,Ee,ye,_t,Zt,Tt);_.pixelStorei(O.UNPACK_ROW_LENGTH,cn),_.pixelStorei(O.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(O.UNPACK_SKIP_PIXELS,Tn),_.pixelStorei(O.UNPACK_SKIP_ROWS,Yn),_.pixelStorei(O.UNPACK_SKIP_IMAGES,Ii),Me===0&&z.generateMipmaps&&O.generateMipmap(Te),_.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&ne.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ne.setTextureCube(T,0):T.isData3DTexture?ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ne.setTexture2DArray(T,0):ne.setTexture2D(T,0),_.unbindTexture()},this.resetState=function(){ee=0,F=0,j=null,_.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};function xp(){let r=n=>{n.preventDefault()};for(let n of["gesturestart","gesturechange","gestureend"])document.addEventListener(n,r,{passive:!1});document.addEventListener("touchmove",n=>{if(n.touches.length>1){n.preventDefault();return}(!n.target.closest||!n.target.closest(".scroll, input[type=range]"))&&n.preventDefault()},{passive:!1});let e=0;document.addEventListener("touchend",n=>{let i=n.timeStamp,s=n.target;i-e<320&&!(s.closest&&s.closest("button, input, textarea, select, a, .ctl, #joy, canvas"))&&n.preventDefault(),e=i},{passive:!1}),document.addEventListener("dblclick",r,{passive:!1}),document.addEventListener("contextmenu",n=>{n.target.closest&&n.target.closest("input, textarea")||n.preventDefault()}),document.addEventListener("selectstart",n=>{n.target.closest&&n.target.closest("input, textarea")||n.preventDefault()}),window.addEventListener("wheel",n=>{n.ctrlKey&&n.preventDefault()},{passive:!1}),window.addEventListener("keydown",n=>{(n.ctrlKey||n.metaKey)&&["+","-","=","0"].includes(n.key)&&n.preventDefault()});let t=()=>{let n=window.visualViewport?window.visualViewport.height:window.innerHeight;document.documentElement.style.height=n+"px",window.scrollTo(0,0)};window.addEventListener("resize",t),window.visualViewport&&window.visualViewport.addEventListener("resize",t),window.addEventListener("scroll",()=>window.scrollTo(0,0)),t()}function vp(){let r=document.documentElement;document.fullscreenElement||!r.requestFullscreen||matchMedia("(pointer: coarse)").matches&&r.requestFullscreen({navigationUI:"hide"}).catch(()=>{})}var Es=null;async function As(r){try{r&&!Es&&navigator.wakeLock&&(Es=await navigator.wakeLock.request("screen"),Es.addEventListener("release",()=>{Es=null})),!r&&Es&&(await Es.release(),Es=null)}catch{}}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&As.want&&As(!0)});var Pe=(r,e=document)=>e.querySelector(r);var _e=r=>String(r??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);var ji=(r,e,t,n)=>r+(e-r)*(1-Math.exp(-t*n)),Rs=r=>{if(!(r>0))return"\u2014";let e=Math.floor(r/60),t=r-e*60;return(e?e+":"+(t<10?"0":""):"")+t.toFixed(e?1:2)},qn=r=>/^https:\/\//.test(r||"")||/^(assets|data:image)/.test(r||"")?r:"";function Sn(r){let e=document.createElement("template");return e.innerHTML=r.trim(),e.content.firstElementChild}var Vy=()=>document.getElementById("toasts");function Ct(r,{kind:e="",img:t="",ms:n=2600}={}){let i=document.createElement("div");if(i.className="toast "+e,qn(t)){let o=document.createElement("img");o.src=t,o.alt="",i.appendChild(o)}let s=document.createElement("span");s.textContent=r,i.appendChild(s);let a=Vy();for(a.appendChild(i);a.children.length>4;)a.firstChild.remove();setTimeout(()=>{i.style.transition="opacity .4s",i.style.opacity="0",setTimeout(()=>i.remove(),400)},n)}var qt={get(r,e){try{let t=localStorage.getItem("nitro."+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{localStorage.setItem("nitro."+r,JSON.stringify(e))}catch{}},del(r){try{localStorage.removeItem("nitro."+r)}catch{}}},Xc={get(r,e){try{let t=sessionStorage.getItem("nitro."+r);return t==null?e:JSON.parse(t)}catch{return e}},set(r,e){try{sessionStorage.setItem("nitro."+r,JSON.stringify(e))}catch{}},del(r){try{sessionStorage.removeItem("nitro."+r)}catch{}}},Dr=class{constructor(){this.h=new Map}on(e,t){return this.h.has(e)||this.h.set(e,new Set),this.h.get(e).add(t),()=>this.h.get(e).delete(t)}emit(e,...t){let n=this.h.get(e);if(n)for(let i of[...n])try{i(...t)}catch(s){console.error(e,s)}}};function _p(r,e,t,n){let i=new ArrayBuffer(29),s=new DataView(i);return s.setUint8(0,1),s.setUint16(1,e&65535,!0),s.setFloat32(3,t,!0),s.setFloat32(7,r.x,!0),s.setFloat32(11,r.y,!0),s.setFloat32(15,r.z,!0),s.setInt16(19,Math.round(r.yaw*1e4),!0),s.setInt16(21,ou(r.vx*50),!0),s.setInt16(23,ou(r.vz*50),!0),s.setInt8(25,Math.round(Math.max(-1,Math.min(1,r.steer))*127)),s.setUint8(26,n&255),s.setInt16(27,ou(r.vy*50),!0),i}var Cs=1,Mp=2,Sp=4,wp=8,Fa=16,yp=20,Wy=50;function Tp(r,e=[]){let t=new DataView(r);if(t.getUint8(0)!==2)return null;let n=t.getFloat32(1,!0),i=t.getUint16(5,!0);e.length=0;let s=7;for(let a=0;a<i&&s+15<=r.byteLength;a++,s+=15)e.push({slot:t.getUint8(s),t:n+t.getInt16(s+1,!0)/1e3,x:t.getInt16(s+3,!0)/yp,y:t.getInt16(s+5,!0)/Wy,z:t.getInt16(s+7,!0)/yp,yaw:t.getInt16(s+9,!0)/1e4,speed:t.getUint16(s+11,!0)/50,steer:t.getInt8(s+13)/127,flags:t.getUint8(s+14)});return{t:n,cars:e}}function ou(r){return r=Math.round(r),r<-32768?-32768:r>32767?32767:r}var qy="https://api.github.com/repos/kaufmanbora-lang/nitro/contents/live.json",Xy=r=>{try{let e=new URL(r);return e.protocol==="https:"&&(/\.trycloudflare\.com$/.test(e.hostname)||/\.ts\.net$/.test(e.hostname))}catch{return!1}},cu=class extends Dr{constructor(){super(),this.ws=null,this.state="idle",this.offset=0,this.samples=[],this.fail=0,this.base="",this.hello=()=>({t:"hello",v:1})}async discover(){let e=location.hostname;if(!/github\.io$/.test(e))return location.origin;let t=async o=>{try{let c=await fetch(o,{cache:"no-store"});return c.ok?await c.json():null}catch{return null}},[n,i]=await Promise.all([t("live.json?t="+Date.now()),t(qy).then(o=>{try{return o&&o.content?JSON.parse(atob(o.content.replace(/\s/g,""))):null}catch{return null}})]),s=qt.get("server"),a=[n,i,s].filter(o=>o&&Xy(o.url)).sort((o,c)=>(c.ts||0)-(o.ts||0));for(let o of a)try{if((await fetch(o.url+"/health",{cache:"no-store",signal:AbortSignal.timeout?AbortSignal.timeout(5e3):void 0})).ok)return qt.set("server",{url:o.url,ts:o.ts||0}),o.url}catch{}return null}async connect(){if(this.state==="connecting"||this.state==="open")return;this.state="connecting",this.emit("state","connecting");let e=await this.discover();if(!e){this.state="idle",this.emit("state","offline"),this.retryLater(5e3);return}this.base=e;let t=e.replace(/^http/,"ws")+"/ws",n;try{n=new WebSocket(t)}catch{this.state="idle",this.retryLater(3e3);return}n.binaryType="arraybuffer",this.ws=n,n.onopen=()=>{this.state="open",this.fail=0,this.samples=[],this.send(this.hello()),this.ping(),clearInterval(this.pingT),this.pingT=setInterval(()=>this.ping(),2e3),this.emit("state","open")},n.onmessage=i=>{if(i.data instanceof ArrayBuffer){this.emit("bin",i.data);return}let s;try{s=JSON.parse(i.data)}catch{return}if(s.t==="pong")return this.onPong(s);this.emit(s.t,s)},n.onclose=()=>{this.ws===n&&(clearInterval(this.pingT),this.ws=null,this.state="idle",this.fail++,this.emit("state","closed"),this.retryLater(Math.min(8e3,600*2**Math.min(4,this.fail))))},n.onerror=()=>{}}retryLater(e){clearTimeout(this.retryT),this.retryT=setTimeout(()=>this.connect(),e)}send(e){return this.ws&&this.ws.readyState===1?(this.ws.send(JSON.stringify(e)),!0):!1}sendBin(e){this.ws&&this.ws.readyState===1&&this.ws.bufferedAmount<64e3&&this.ws.send(e)}ping(){this.send({t:"ping",c:performance.now()})}onPong(e){let t=performance.now(),n=t-e.c;if(n<0||n>1e4)return;this.samples.push({rtt:n,off:e.s+n/2-Date.now()}),this.samples.length>12&&this.samples.shift();let i=this.samples.reduce((s,a)=>a.rtt<s.rtt?a:s);this.offset=this.samples.length===1?i.off:this.offset+(i.off-this.offset)*.3,this.rtt=i.rtt}now(){return Date.now()+this.offset}},yt=new cu;var jy={gfx:"auto",res:1,shadows:!0,fps:60,dist:1,vol:.9,volEngine:.8,volFx:.9,volMusic:.45,controls:"buttons",cam:"chase",vibrate:!0,showFps:!1},Qe=Object.assign({},jy,qt.get("settings",{})),lu=new Dr;function ci(r,e){Qe[r]=e,qt.set("settings",Qe),lu.emit("change",r,e)}var Ps={low:{name:"\u041D\u0438\u0437\u043A\u0430\u044F",pr:[.55,.9],aa:!1,shadows:0,dist:520,trees:.4,grass:0,detail:.6,particles:.4,lod0:!1,lod1Cars:5,normalMaps:!1,env:64,crowd:.4},medium:{name:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",pr:[.7,1.35],aa:!0,shadows:1024,dist:800,trees:.7,grass:.5,detail:.8,particles:.7,lod0:!0,lod1Cars:9,normalMaps:!0,env:128,crowd:.7},high:{name:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",pr:[.85,2],aa:!0,shadows:2048,dist:1150,trees:1,grass:1,detail:1,particles:1,lod0:!0,lod1Cars:14,normalMaps:!0,env:256,crowd:1},ultra:{name:"\u0423\u043B\u044C\u0442\u0440\u0430",pr:[1,2],aa:!0,shadows:4096,dist:1600,trees:1.35,grass:1.4,detail:1.25,particles:1.25,lod0:!0,lod1Cars:24,normalMaps:!0,env:256,crowd:1.2}};function Ky(r){let e=matchMedia("(pointer: coarse)").matches,t="";try{let o=r.getExtension("WEBGL_debug_renderer_info");o&&(t=r.getParameter(o.UNMASKED_RENDERER_WEBGL)||"")}catch{}let n=navigator.deviceMemory||4,i=navigator.hardwareConcurrency||4,s=t.toLowerCase();if(!e)return/rtx|radeon rx|arc|apple m[2-9]|geforce (gtx 1[6-9]|[2-9]\d{3})/.test(s)?"ultra":/intel|uhd|iris|mali|adreno|swiftshader|llvmpipe/.test(s)?"medium":"high";if(/apple/.test(s)||/iphone|ipad/i.test(navigator.userAgent))return n>=6||i>=6?"high":"medium";let a=/adreno \(tm\) (\d+)|adreno (\d+)/.exec(s);if(a){let o=+(a[1]||a[2]);return o>=730?"high":o>=610?"medium":"low"}return/mali-g(7[1-9]|[89]\d|\d{3})|immortalis|xclipse/.test(s)?"high":/mali-g(5[7-9]|6\d|7[0-9])/.test(s)?"medium":/mali|powervr|sgx|adreno/.test(s)||n<=3?"low":n>=6?"medium":"low"}var Kc=class{constructor(e){this.canvas=e;let t=document.createElement("canvas"),n=t.getContext("webgl2")||t.getContext("webgl");this.auto=n?Ky(n):"low";try{n&&n.getExtension("WEBGL_lose_context")?.loseContext()}catch{}this.qName=Qe.gfx==="auto"?this.auto:Qe.gfx,this.q=Ps[this.qName]||Ps.medium,this.renderer=new Vc({canvas:e,antialias:this.q.aa,powerPreference:"high-performance",stencil:!1,depth:!0});let i=this.renderer;i.outputColorSpace=vt,i.toneMapping=_a,i.toneMappingExposure=1,i.shadowMap.enabled=!!this.q.shadows&&Qe.shadows,i.shadowMap.type=ys,this.maxAniso=Math.min(8,i.capabilities.getMaxAnisotropy()),this.scene=new vi,this.camera=new kt(62,1,.25,this.q.dist*2.2),this.dpr=Math.min(window.devicePixelRatio||1,3),this.scale=Math.min(this.q.pr[1],this.dpr)*(Qe.res||1),this.ft=16,this.fpsT=0,this.frames=0,this.fps=60,this.lastAdj=0,this.resize(),addEventListener("resize",()=>this.resize()),window.visualViewport&&window.visualViewport.addEventListener("resize",()=>this.resize())}setQuality(e){this.qName=e==="auto"?this.auto:e,this.q=Ps[this.qName]||Ps.medium,this.renderer.shadowMap.enabled=!!this.q.shadows&&Qe.shadows,this.scale=Math.min(this.q.pr[1],this.dpr)*(Qe.res||1),this.camera.far=this.q.dist*2.2,this.camera.updateProjectionMatrix(),this.resize()}resize(){let e=this.canvas.clientWidth||innerWidth,t=this.canvas.clientHeight||innerHeight;this.w=e,this.h=t,this.renderer.setPixelRatio(this.scale),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.fov=e<t?72:60,this.camera.updateProjectionMatrix()}adapt(e){this.ft=this.ft*.92+e*.08,this.frames++,this.fpsT+=e,this.fpsT>1e3&&(this.fps=Math.round(this.frames*1e3/this.fpsT),this.frames=0,this.fpsT=0);let t=performance.now();if(t-this.lastAdj<700)return;let n=1e3/(Qe.fps||60),i=this.q.pr[0]*(Qe.res||1),s=Math.min(this.q.pr[1],this.dpr)*(Qe.res||1),a=this.scale;this.ft>n*1.25&&a>i?a=Math.max(i,a-.08):this.ft<n*.82&&a<s&&(a=Math.min(s,a+.04)),a!==this.scale&&(this.scale=a,this.lastAdj=t,this.renderer.setPixelRatio(a),this.renderer.setSize(this.w,this.h,!1))}render(e=this.scene,t=this.camera){this.renderer.render(e,t)}};var Na=class r extends Le{constructor(){let e=r.SkyShader,t=new Bt({name:e.name,uniforms:Er.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Gt,depthWrite:!1});super(new Jt(1,1,1),t),this.isSky=!0}};Na.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
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

		}`};var Ep={city:{elev:19,azim:235,turbidity:5.5,rayleigh:1.5,mie:.004,mieG:.82,exposure:.62,sun:16769213,sunI:3.6,hemiSky:12571890,hemiGround:5918790,hemiI:.55,fog:13028822,fogK:.55,envI:1},snow:{elev:24,azim:200,turbidity:2.2,rayleigh:.9,mie:.003,mieG:.8,exposure:.55,sun:16774374,sunI:3.2,hemiSky:13624063,hemiGround:15265526,hemiI:.75,fog:14477040,fogK:.5,envI:1.1},offroad:{elev:38,azim:150,turbidity:3.5,rayleigh:1.25,mie:.004,mieG:.85,exposure:.6,sun:16773592,sunI:3.8,hemiSky:12376309,hemiGround:5200442,hemiI:.6,fog:12044502,fogK:.5,envI:1}};function Ap(r,e){let t=Ep[e]||Ep.city,{renderer:n,scene:i}=r,s=new L().setFromSphericalCoords(1,Ri.degToRad(90-t.elev),Ri.degToRad(t.azim)),a=new Na;a.scale.setScalar(1e3);let o=a.material.uniforms;o.turbidity.value=t.turbidity,o.rayleigh.value=t.rayleigh,o.mieCoefficient.value=t.mie,o.mieDirectionalG.value=t.mieG,o.sunPosition.value.copy(s);let c=new vi;c.add(a);let l=new Le(new Mi(900,32,16,0,Math.PI*2,Math.PI/2+.02,Math.PI/2),new $t({color:new Se(t.hemiGround).multiplyScalar(.8),side:Gt}));c.add(l);let h=r.q.env>=256?512:r.q.env>=128?256:128,u=new Ir(h,{type:_n,generateMipmaps:!0,minFilter:fn}),d=new vr(1,2e3,u),f=n.toneMapping;n.toneMapping=dn,d.update(n,c),n.toneMapping=f;let m=new Pr(n),b=m.fromCubemap(u.texture);m.dispose(),i.background=u.texture,i.backgroundIntensity=1,i.environment=b.texture,i.environmentIntensity=t.envI,n.toneMappingExposure=t.exposure;let g=new Se(t.fog);i.fog=new sa(g,r.q.dist*.18,r.q.dist*1.02);let p=new xs(t.hemiSky,t.hemiGround,t.hemiI);i.add(p);let x=new Ei(t.sun,t.sunI);if(x.position.copy(s).multiplyScalar(200),x.castShadow=!!r.q.shadows&&r.renderer.shadowMap.enabled,x.castShadow){x.shadow.mapSize.set(r.q.shadows,r.q.shadows);let v=r.q.shadows>=4096?70:r.q.shadows>=2048?55:40;Object.assign(x.shadow.camera,{left:-v,right:v,top:v,bottom:-v,near:10,far:500}),x.shadow.bias=-4e-4,x.shadow.normalBias=.04,x.shadow.radius=3}i.add(x,x.target);let w=new L;return{L:t,sun:x,hemi:p,sunDir:s,cubeRT:u,envRT:b,fogCol:g,follow(v){if(!x.castShadow)return;let S=x.shadow.camera.right,M=2*S/x.shadow.mapSize.x;w.copy(v);let A=new Ae().lookAt(s,new L,new L(0,1,0)),y=A.clone().invert();w.applyMatrix4(y),w.x=Math.round(w.x/M)*M,w.y=Math.round(w.y/M)*M,w.applyMatrix4(A),x.target.position.copy(w),x.position.copy(w).addScaledVector(s,220)},dispose(){i.remove(p,x,x.target),u.dispose(),b.dispose(),a.material.dispose(),a.geometry.dispose(),l.geometry.dispose(),l.material.dispose(),i.background=null,i.environment=null,i.fog=null}}}function Yc(r=1){let e=new Uint8Array(512),t=new Uint8Array(256),n=r>>>0||1,i=()=>(n=n*1664525+1013904223>>>0)/4294967296;for(let u=0;u<256;u++)t[u]=u;for(let u=255;u>0;u--){let d=Math.floor(i()*(u+1)),f=t[u];t[u]=t[d],t[d]=f}for(let u=0;u<512;u++)e[u]=t[u&255];let s=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],a=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6;function c(u,d){let f=(u+d)*a,m=Math.floor(u+f),b=Math.floor(d+f),g=(m+b)*o,p=u-(m-g),x=d-(b-g),w=p>x?1:0,v=1-w,S=p-w+o,M=x-v+o,A=p-1+2*o,y=x-1+2*o,E=m&255,R=b&255,P=0,D;if(D=.5-p*p-x*x,D>0){let B=s[e[E+e[R]]&7];D*=D,P+=D*D*(B[0]*p+B[1]*x)}if(D=.5-S*S-M*M,D>0){let B=s[e[E+w+e[R+v]]&7];D*=D,P+=D*D*(B[0]*S+B[1]*M)}if(D=.5-A*A-y*y,D>0){let B=s[e[E+1+e[R+1]]&7];D*=D,P+=D*D*(B[0]*A+B[1]*y)}return 70*P}return{n2:c,fbm:(u,d,f=5)=>{let m=0,b=1,g=.5;for(let p=0;p<f;p++)m+=g*c(u*b,d*b),b*=2.03,g*=.5;return m},ridged:(u,d,f=5)=>{let m=0,b=1,g=.5,p=1;for(let x=0;x<f;x++){let w=1-Math.abs(c(u*b,d*b));w*=w*p,p=Math.min(1,w*1.6),m+=w*g,b*=2.1,g*=.5}return m},rnd:i}}var Kt=(r,e,t)=>{let n=Math.max(0,Math.min(1,(t-r)/(e-r)));return n*n*(3-2*n)};var hu=new Map,Yy=new gs,Ua=0,Cp=[];function Xn(r,{srgb:e=!1,gfx:t=null,repeat:n=!0}={}){let i=r+(e?":s":"");if(hu.has(i))return hu.get(i);Ua++;let s=Yy.load("assets/tex/"+r+".webp",()=>Rp(),void 0,()=>Rp());return s.colorSpace=e?vt:Cn,n&&(s.wrapS=s.wrapT=Hn),s.anisotropy=t?t.maxAniso:4,hu.set(i,s),s}function Rp(){Ua--,Ua<=0&&(Ua=0,Cp.splice(0).forEach(r=>r()))}var Pp=()=>new Promise(r=>Ua?Cp.push(r):r());function on(r,e,t,{srgb:n=!0,repeat:i=!0,aniso:s=8}={}){let a=document.createElement("canvas");a.width=r,a.height=e;let o=a.getContext("2d");t(o,r,e);let c=new yi(a);return c.colorSpace=n?vt:Cn,i&&(c.wrapS=c.wrapT=Hn),c.anisotropy=s,c}function $c(r,e=!1){let t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new ot,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let m=0;m<f.count;++m)u.push(f.getX(m)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Ip(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let b=0;b<a[h].length;++b)f.push(a[h][b][d]);let m=Ip(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function Ip(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*t}let a=new e(s),o=new Xe(a,t,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let m=0;m<t;m++){let b=h.getComponent(d,m);o.setComponent(d+u,m,b)}}else a.set(h.array,c);c+=h.count*t}return i!==void 0&&(o.gpuType=i),o}function uu(r,e){if(e===Dh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Tr||e===Ca){let t=r.getIndex();if(t===null){let s=[],a=r.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}let n=t.count-2,i=[];if(e===Tr)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function Is(r){let e=new Map,t=new Map,n=r.clone();return Lp(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Lp(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Lp(r.children[n],e.children[n],t)}var Jc=class extends ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Zc(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Zc(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Iu(t)})}load(e,t,n,i){let s=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ai.extractUrlBase(e);a=Ai.resolveURL(l,this.path)}else a=Ai.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new br(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s,a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===kp){try{a[it.KHR_BINARY_GLTF]=new Lu(e)}catch(u){i&&i(u);return}s=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Bu(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new gu;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new Du(s,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new Fu;break;case it.KHR_MESH_QUANTIZATION:a[u]=new Nu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}};function $y(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function Ft(r,e,t){let n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},mu=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],l,h=new Se(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],hn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Ei(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new va(h),l.distance=u;break;case"spot":l=new xa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},gu=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return $t}extendParams(e,t,n){let i=[];e.color=new Se(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],hn),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,vt))}return Promise.all(i)}},bu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(s,s)}return Promise.all(i)}},vu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},yu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}},_u=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];if(t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],hn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}},Mu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}},Su=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(s[0],s[1],s[2],hn),Promise.all(i)}},wu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(s[0],s[1],s[2],hn),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(i)}},Eu=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}},Au=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Ft(this.parser,e,this.name)!==null?jt:null}extendMaterialParams(e,t){let n=Ft(this.parser,e,this.name);if(n===null)return Promise.resolve();let i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}},Ru=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}},Cu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Pu=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;let a=s.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Zc=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}},Iu=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let m of u){let b=new Ae,g=new L,p=new Et,x=new L(1,1,1),w=new un(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&x.fromBufferAttribute(c.SCALE,S),w.setMatrixAt(S,b.compose(g,p,x));let v=null;for(let S in c)if(S==="_COLOR_0"){let M=c[S];w.instanceColor=new Ot(M.array,M.itemSize,M.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let A=w.geometry;v=new ot,v.name=A.name;for(let y in A.attributes)v.setAttribute(y,A.attributes[y]);for(let y in A.morphAttributes)v.morphAttributes[y]=A.morphAttributes[y];A.index!==null&&v.setIndex(A.index),v.morphTargetsRelative=A.morphTargetsRelative;for(let y of A.groups)v.addGroup(y.start,y.count,y.materialIndex);A.boundingBox!==null&&(v.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(v.boundingSphere=A.boundingSphere.clone()),v.drawRange.start=A.drawRange.start,v.drawRange.count=A.drawRange.count,v.userData=Object.assign({},A.userData),w.geometry=v}let M=c[S];v.setAttribute(S,new Ot(M.array,M.itemSize,M.normalized))}At.prototype.copy.call(w,m),this.parser.assignFinalMaterial(w),f.push(w)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},kp="glTF",ka=12,Dp={JSON:1313821514,BIN:5130562},Lu=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ka),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==kp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ka,s=new DataView(e,ka),a=0;for(;a<i;){let o=s.getUint32(a,!0);a+=4;let c=s.getUint32(a,!0);if(a+=4,c===Dp.JSON){let l=new Uint8Array(e,ka+a,o);this.content=n.decode(l)}else if(c===Dp.BIN){let l=ka+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=ku[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=ku[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Fr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(let m in f.attributes){let b=f.attributes[m],g=c[m];g!==void 0&&(b.normalized=g)}u(f)},o,l,hn,d)})})}},Fu=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Nu=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},Qc=class extends Qn{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,m=e*l,b=m-l,g=-2*f+3*d,p=f-d,x=1-g,w=p-d+u;for(let v=0;v!==o;v++){let S=a[b+v+o],M=a[b+v+c]*h,A=a[m+v+o],y=a[m+v]*h;s[v]=x*S+w*M+g*A+p*y}return s}},Jy=new Et,Uu=class extends Qc{interpolate_(e,t,n,i){let s=super.interpolate_(e,t,n,i);return Jy.fromArray(s).normalize().toArray(s),s}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Fp={9728:Lt,9729:Dt,9984:ec,9985:Mr,9986:Ss,9987:fn},Np={33071:An,33648:rr,10497:Hn},du={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ku={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ki={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Zy={CUBICSPLINE:void 0,LINEAR:os,STEP:as},fu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Qy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ye({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:si})),r.DefaultMaterial}function Ls(r,e,t){for(let n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function li(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function e_(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(i){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function t_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function n_(r){let e,t=r.extensions&&r.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pu(t.attributes):e=r.indices+":"+pu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+pu(r.targets[n]);return e}function pu(r){let e="",t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Ou(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function i_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var s_=new Ae,Bu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $y,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new gs(this.options.manager):this.textureLoader=new ya(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new br(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Ls(s,o,i),li(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),s=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())s(h,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,a){n.load(Ai.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=du[i.type],o=Fr[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Xe(l,a,c))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){let o=a[0],c=du[i.type],l=Fr[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,b,g;if(f&&f!==u){let p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,w=t.cache.get(x);w||(b=new l(o,p*f,i.count*f/h),w=new us(b,f/h),t.cache.add(x,w)),g=new zi(w,c,d%f/h,m)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),g=new Xe(b,c,m);if(i.sparse!==void 0){let p=du.SCALAR,x=Fr[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new x(a[1],w,i.sparse.count*p),M=new l(a[2],v,i.sparse.count*c);o!==null&&(g=new Xe(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let A=0,y=S.length;A<y;A++){let E=S[A];if(g.setX(E,M[A*c]),c>=2&&g.setY(E,M[A*c+1]),c>=3&&g.setZ(E,M[A*c+2]),c>=4&&g.setW(E,M[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Fp[d.magFilter]||Dt,h.minFilter=Fp[d.minFilter]||fn,h.wrapS=Np[d.wrapS]||Hn,h.wrapT=Np[d.wrapT]||Hn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Lt&&h.minFilter!==Dt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(b){let g=new zt(b);g.needsUpdate=!0,d(g)}),t.load(Ai.resolveURL(u,s.path),m,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),li(u,a),u.userData.mimeType=a.mimeType||i_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){let s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=s.associations.get(a);a=s.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new mr,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new pr,sn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ye}loadMaterial(e){let t=this,n=this.json,i=this.extensions,s=n.materials[e],a,o={},c=s.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=i[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{let u=s.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],hn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,vt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Pt);let h=s.alphaMode||fu.OPAQUE;if(h===fu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===fu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){let u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==$t&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==$t){let u=s.emissiveFactor;o.emissive=new Se().setRGB(u[0],u[1],u[2],hn)}return s.emissiveTexture!==void 0&&a!==$t&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,vt)),Promise.all(l).then(function(){let u=new a(o);return s.name&&(u.name=s.name),li(u,s),t.associations.set(u,{materials:e}),s.extensions&&Ls(i,u,s),u})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Up(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=n_(l),u=i[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Up(new ot,l,t),l.mode===In.TRIANGLE_STRIP?d=d.then(f=>uu(f,Ca)):l.mode===In.TRIANGLE_FAN&&(d=d.then(f=>uu(f,Tr))),i[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?Qy(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let b=h[f],g=a[f],p,x=l[f];if(g.mode===In.TRIANGLES||g.mode===In.TRIANGLE_STRIP||g.mode===In.TRIANGLE_FAN||g.mode===void 0){let w=s.isSkinnedMesh===!0,v=b.hasAttribute("skinIndex")&&b.hasAttribute("skinWeight");w&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=w&&v?new aa(b,x):new Le(b,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===In.LINES)p=new ca(b,x);else if(g.mode===In.LINE_STRIP)p=new fs(b,x);else if(g.mode===In.LINE_LOOP)p=new la(b,x);else if(g.mode===In.POINTS)p=new ps(b,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&t_(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),li(p,s),g.extensions&&Ls(i,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return s.extensions&&Ls(i,u[0],s),u[0];let d=new Ke;s.extensions&&Ls(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt(Ri.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ni(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),li(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let s=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ae;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new oa(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){let f=i.channels[u],m=i.samplers[f.sampler],b=f.target,g=b.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;b.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],b=u[3],g=u[4],p=[];for(let w=0,v=d.length;w<v;w++){let S=d[w],M=f[w],A=m[w],y=b[w],E=g[w];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let R=n._createAnimationTracks(S,M,A,y,E);if(R)for(let P=0;P<R.length;P++)p.push(R[P])}let x=new ei(s,void 0,p);return li(x,i),x})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){let a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,s_)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,m=u[0];h.pivot=new L().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(s.isBone===!0?h=new dr:l.length>1?h=new Ke:l.length===1?h=l[0]:h=new At,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(s.name&&(h.userData.name=s.name,h.name=a),li(h,s),s.extensions&&Ls(n,h,s),s.matrix!==void 0){let u=new Ae;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!i.associations.has(h))i.associations.set(h,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){let u=i.associations.get(h);i.associations.set(h,{...u})}return i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,s=new Ke;n.name&&(s.name=i.createUniqueName(n.name)),li(s,n),n.extensions&&Ls(t,s,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?s.add(Is(d)):s.add(d)}let l=h=>{let u=new Map;for(let[d,f]of i.associations)(d instanceof sn||d instanceof zt)&&u.set(d,f);return h.traverse(d=>{let f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Ki[s.path]===Ki.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ki[s.path]){case Ki.weights:h=wi;break;case Ki.rotation:h=Rn;break;case Ki.translation:case Ki.scale:h=Vn;break;default:switch(n.itemSize){case 1:h=wi;break;case 2:case 3:default:h=Vn;break}break}let u=i.interpolation!==void 0?Zy[i.interpolation]:os,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let b=new h(c[f]+"."+Ki[s.path],t.array,d,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ou(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Rn?Uu:Qc;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function r_(r,e,t){let n=e.attributes,i=new Ht;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){let h=Ou(Fr[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new L,c=new L;for(let l=0,h=s.length;l<h;l++){let u=s[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let b=Ou(Fr[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;let a=new nn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Up(r,e,t){let n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(let a in n){let o=ku[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){let a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return et.workingColorSpace!==hn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),li(r,e),r_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?e_(r,e.targets,t):r})}var Op=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var x=new Uint8Array(p.length),w=0;w<p.length;++w){var v=p.charCodeAt(w);x[w]=v>96?v-97:v>64?v-39:v+4}for(var S=0,w=0;w<p.length;++w)x[S++]=x[w]<60?n[x[w]]:(x[w]-60)*64+x[++w];return x.buffer.slice(0,S)}function c(p,x,w,v,S,M,A){var y=p.exports.sbrk,E=v+3&-4,R=y(E*S),P=y(M.length),D=new Uint8Array(p.exports.memory.buffer);D.set(M,P);var B=x(R,v,S,P,M.length);if(B==0&&A&&A(R,E,S),w.set(D.subarray(R,R+v*S)),y(R-y(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var x={object:new Worker(p),pending:0,requests:{}};return x.object.onmessage=function(w){var v=w.data;x.pending-=v.count,x.requests[v.id][v.action](v.value),delete x.requests[v.id]},x}function m(p){for(var x="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+g.name+";"+c.toString()+g.toString(),w=new Blob([x],{type:"text/javascript"}),v=URL.createObjectURL(w),S=u.length;S<p;++S)u[S]=f(v);for(var S=p;S<u.length;++S)u[S].object.postMessage({});u.length=p,URL.revokeObjectURL(v)}function b(p,x,w,v,S){for(var M=u[0],A=1;A<u.length;++A)u[A].pending<M.pending&&(M=u[A]);return new Promise(function(y,E){var R=new Uint8Array(w),P=++d;M.pending+=p,M.requests[P]={resolve:y,reject:E},M.object.postMessage({id:P,count:p,size:x,source:R,mode:v,filter:S},[R.buffer])})}function g(p){var x=p.data;self.ready.then(function(w){if(!x.id)return self.close();try{var v=new Uint8Array(x.count*x.size);c(w,w.exports[x.mode],v,x.count,x.size,x.source,w.exports[x.filter]),self.postMessage({id:x.id,count:x.count,action:"resolve",value:v},[v.buffer])}catch(S){self.postMessage({id:x.id,count:x.count,action:"reject",value:S})}})}return{ready:a,supported:!0,useWorkers:function(p){m(p)},decodeVertexBuffer:function(p,x,w,v,S){c(s,s.exports.meshopt_decodeVertexBuffer,p,x,w,v,s.exports[l[S]])},decodeIndexBuffer:function(p,x,w,v){c(s,s.exports.meshopt_decodeIndexBuffer,p,x,w,v)},decodeIndexSequence:function(p,x,w,v){c(s,s.exports.meshopt_decodeIndexSequence,p,x,w,v)},decodeGltfBuffer:function(p,x,w,v,S,M){c(s,s.exports[h[S]],p,x,w,v,s.exports[l[M]])},decodeGltfBufferAsync:function(p,x,w,v,S){return u.length>0?b(p,x,w,h[v],l[S]):a.then(function(){var M=new Uint8Array(p*x);return c(s,s.exports[h[v]],M,p,x,w,s.exports[l[S]]),M})}}})();var wn={city:{id:"city",name:"\u0413\u043E\u0440\u043E\u0434",title:"\u0413\u0440\u0430\u043D-\u043F\u0440\u0438 \u0421\u0438\u0442\u0438",desc:"\u0423\u043B\u0438\u0447\u043D\u0430\u044F \u0433\u043E\u043D\u043E\u0447\u043D\u0430\u044F \u0442\u0440\u0430\u0441\u0441\u0430 \u043F\u043E\u0441\u0440\u0435\u0434\u0438 \u043C\u0435\u0433\u0430\u043F\u043E\u043B\u0438\u0441\u0430: \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B, \u0448\u043F\u0438\u043B\u044C\u043A\u0430 \u0443 \u0440\u0435\u043A\u0438, \u0442\u043E\u043D\u043D\u0435\u043B\u044C",car:"gtr",icon:"\u{1F3D9}\uFE0F",speedK:1},snow:{id:"snow",name:"\u0421\u043D\u0435\u0433",title:"\u0421\u043D\u0435\u0436\u043D\u044B\u0439 \u043F\u0435\u0440\u0435\u0432\u0430\u043B",desc:"\u0420\u0430\u043B\u043B\u0438 \u043F\u043E \u0437\u0430\u0441\u043D\u0435\u0436\u0435\u043D\u043D\u043E\u0439 \u0434\u043E\u043B\u0438\u043D\u0435: \u0441\u043A\u043E\u043B\u044C\u0437\u043A\u043E, \u0437\u0430\u043D\u043E\u0441\u044B, \u0441\u0435\u0440\u043F\u0430\u043D\u0442\u0438\u043D",car:"impreza",icon:"\u2744\uFE0F",speedK:1},offroad:{id:"offroad",name:"\u0413\u043E\u0440\u044B",title:"\u0413\u043E\u0440\u043D\u044B\u0439 \u043E\u0444\u0444\u0440\u043E\u0443\u0434",desc:"\u0414\u0436\u0438\u043F\u044B \u0432 \u0433\u043E\u0440\u0430\u0445: \u0442\u0440\u0430\u043C\u043F\u043B\u0438\u043D\u044B, \u0431\u0440\u043E\u0434 \u0447\u0435\u0440\u0435\u0437 \u0440\u0435\u043A\u0443, \u0433\u0440\u044F\u0437\u044C",car:"sierra",icon:"\u26F0\uFE0F",speedK:1}},a1=Object.keys(wn);var el=[["\u0413\u043E\u043D\u043E\u0447\u043D\u044B\u0439 \u043A\u0440\u0430\u0441\u043D\u044B\u0439","#c8101e","m"],["\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A \u0441\u0438\u043D\u0438\u0439","#1f4fe0","m"],["\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0436\u0451\u043B\u0442\u044B\u0439","#ffc21a","s"],["\u0411\u0435\u043B\u044B\u0439 \u043F\u0435\u0440\u043B\u0430\u043C\u0443\u0442\u0440","#f2f1ec","p"],["\u041D\u0435\u043E\u043D\u043E\u0432\u044B\u0439 \u043E\u0440\u0430\u043D\u0436\u0435\u0432\u044B\u0439","#ff5e0a","s"],["\u0418\u0437\u0443\u043C\u0440\u0443\u0434\u043D\u044B\u0439","#08875a","m"],["\u0424\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439","#6a1bc2","m"],["\u0420\u043E\u0437\u043E\u0432\u044B\u0439","#ff3d8f","p"],["\u0427\u0451\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0444\u0438\u0442","#141518","m"],["\u0411\u0438\u0440\u044E\u0437\u043E\u0432\u044B\u0439","#00a9c8","m"],["\u041B\u0430\u0439\u043C","#8fe01a","s"],["\u0421\u0435\u0440\u0435\u0431\u0440\u043E","#aeb3bb","m"],["\u0417\u043E\u043B\u043E\u0442\u043E","#c99a1c","m"],["\u0412\u0438\u0448\u043D\u0451\u0432\u044B\u0439","#6b0d22","m"],["\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439","#63b7ff","p"],["\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u0447\u0451\u0440\u043D\u044B\u0439","#1b1c1e","x"],["\u041C\u0435\u0434\u044C","#b5652e","m"],["\u041C\u044F\u0442\u043D\u044B\u0439","#63dbb8","p"],["\u041D\u043E\u0447\u043D\u043E\u0439 \u0441\u0438\u043D\u0438\u0439","#0c1c58","m"],["\u041C\u0430\u043B\u0438\u043D\u043E\u0432\u044B\u0439","#c9004f","m"],["\u041A\u0438\u0441\u043B\u043E\u0442\u043D\u044B\u0439 \u0437\u0435\u043B\u0451\u043D\u044B\u0439","#39f51a","s"],["\u041F\u0435\u0441\u043E\u0447\u043D\u044B\u0439","#d4bc93","m"],["\u0425\u0430\u043A\u0438","#5f6a4a","x"],["\u041C\u0430\u0442\u043E\u0432\u044B\u0439 \u0441\u0435\u0440\u044B\u0439","#6b6f75","x"]];function Yt(r){if(r=Math.max(0,r|0),r<el.length){let[i,s,a]=el[r];return{n:r,name:i,color:s,finish:a}}let e=r*137.508%360,t=60+r%3*12,n=38+r%4*8;return{n:r,name:"\u0426\u0432\u0435\u0442 \u2116"+(r+1),color:a_(e,t,n),finish:["m","p","s"][r%3]}}function a_(r,e,t){e/=100,t/=100;let n=a=>(a+r/30)%12,i=e*Math.min(t,1-t),s=a=>t-i*Math.max(-1,Math.min(n(a)-3,Math.min(9-n(a),1)));return"#"+[s(0),s(8),s(4)].map(a=>Math.round(a*255).toString(16).padStart(2,"0")).join("")}var Xp=new Jc;Xp.setMeshoptDecoder(Op);var Ds=r=>new Promise((e,t)=>Xp.load(r,n=>e(n),void 0,t));function o_(r,e){let t=new ot;for(let[n,i]of Object.entries(r.attributes)){let s=new Float32Array(i.count*i.itemSize);for(let a=0;a<i.count;a++)for(let o=0;o<i.itemSize;o++)s[a*i.itemSize+o]=i.getComponent(a,o);t.setAttribute(n,new Xe(s,i.itemSize))}return r.index&&t.setIndex(new Xe(r.index.array.slice(),1)),t.applyMatrix4(e),t.attributes.normal&&t.normalizeNormals(),t.computeBoundingSphere(),t.computeBoundingBox(),t}function zu(r){r.updateMatrixWorld(!0);let e=[];return r.traverse(t=>{t.isMesh&&e.push({name:t.name,node:t.parent&&t.parent.name,geometry:o_(t.geometry,t.matrixWorld),material:t.material})}),e}var c_=r=>r<=.04045?r/12.92:((r+.055)/1.055)**2.4,tl=["FL","FR","RL","RR"];function jp(r,e,t){let n=new L(...e.map(c_));r.userData.paintKey=n,r.onBeforeCompile=i=>{i.uniforms.paintKey={value:n},i.uniforms.paintCol=r.userData.paintCol||{value:new Se(1,1,1)},r.userData.paintCol=i.uniforms.paintCol,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
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
        #endif`),t&&(i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",""))},r.customProgramCacheKey=()=>"livery"+(t?"i":"")}var Bp={m:{metalness:.55,roughness:.28,clearcoat:1,clearcoatRoughness:.06},p:{metalness:.3,roughness:.22,clearcoat:1,clearcoatRoughness:.04},s:{metalness:.02,roughness:.3,clearcoat:1,clearcoatRoughness:.05},x:{metalness:.15,roughness:.72,clearcoat:0,clearcoatRoughness:.5}};function l_(r,{src:e,key:t,hq:n,gold:i}){let s=Yt(r),a=i?{metalness:1,roughness:.18,clearcoat:1,clearcoatRoughness:.03}:Bp[s.finish]||Bp.m,o=n?new jt({...a}):new Ye({metalness:a.metalness,roughness:Math.min(.6,a.roughness+.08)}),c=new Se(i?"#d4a22a":s.color);return e&&e.map&&t?(o.map=e.map,o.color.set(1,1,1),o.userData.paintCol={value:c},jp(o,t,!1)):o.color.copy(c),o.envMapIntensity=1.15,o.name="paint",o}var nl=class{constructor(e,t="assets/cars/"){this.id=e,this.base=t}async load(e,t){this.meta=await fetch(this.base+this.id+".json").then(a=>a.json());let n=await Promise.all([e.lod0?Ds(this.base+this.id+"_0.glb"):null,Ds(this.base+this.id+"_1.glb"),Ds(this.base+this.id+"_2.glb")]);t&&t(1),[this.g0,this.g1,this.g2]=n,this.hq=e.lod0;let i=a=>{let o=/wheel_(FL|FR|RL|RR|L|R)\b/.exec(a.name+" "+(a.node||""));return o?o[1]:null},s=a=>a&&zu(a.scene).map(o=>({...o,wheel:i(o)}));if(this.p0=s(this.g0),this.p1=s(this.g1),this.p2=s(this.g2),this.p0){for(let a of this.p0)if(a.wheel){let o=this.meta.wheels[a.wheel].c;a.geometry.translate(-o[0],-o[1],-o[2])}}for(let a of this.p0||this.p1)a.material&&a.material.name==="paint"&&(this.paintSrc=a.material);return this}},Ci=class{constructor(e,t){this.a=e,this.root=new Ke,this.body=new Ke,this.root.add(this.body),this.wheels={},this.wheelPivots={};for(let i of tl){let s=new Ke;s.position.set(...e.meta.wheels[i].c);let a=new Ke;s.add(a),this.root.add(s),this.wheelPivots[i]=s,this.wheels[i]=a}let n=(i,s)=>{let a=new Le(i.geometry,i.material);return a.castShadow=!0,a.receiveShadow=!0,s.add(a),a};if(e.p0)for(let i of e.p0)n(i,i.wheel?this.wheels[i.wheel]:this.body);else for(let i of e.p1)if(i.wheel==="L"||i.wheel==="R")for(let s of tl)s[1]===i.wheel&&n(i,this.wheels[s]);else n(i,this.body);this.setPaint(t),this.spin=0}setPaint(e,t=!1){let n=this.a.paintSrc||(this.a.p1.find(s=>s.material&&s.material.name==="paint")||{}).material,i=l_(e,{src:n,key:this.a.meta.paintKey,hq:this.a.hq,gold:t});this.paintMat&&this.paintMat.dispose(),this.paintMat=i,this.root.traverse(s=>{s.isMesh&&s.material&&s.material.name==="paint"&&(s.material=i)})}update(e,t,n,i=0,s=0,a=null){let o=this.a.meta.wheels.FL.r;this.spin+=t/o*e;for(let c of tl){let l=this.wheelPivots[c];l&&(l.rotation.set(0,c[0]==="F"?n:0,0),this.wheels[c].rotation.x=this.spin,a&&(l.position.y=this.a.meta.wheels[c].c[1]+a[c]))}this.body.rotation.set(i,0,s)}dispose(){this.paintMat&&this.paintMat.dispose()}};var zp=new Ae,Hp=new Ae,Gp=new Et,Vp=new mn,Wp=new L,h_=new L(1,1,1),qp=new Se,il=class{constructor(e,t,n){this.a=e,this.max=t,this.levels=[e.p1,e.p2].map((i,s)=>this.buildLevel(i,s));for(let i of this.levels)for(let s of Object.values(i.meshes))n.add(s);this.n=[0,0]}buildLevel(e,t){let n={},i=s=>e.find(a=>a.name===s||a.node===s);for(let s of["paint","misc","glass","wheel_L","wheel_R"]){let a=i(s);if(!a)continue;let o=s.startsWith("wheel"),c;if(s==="paint"){let u=a.material;c=new Ye({metalness:.45,roughness:.3,envMapIntensity:1.2}),u.map&&this.a.meta.paintKey&&(c.map=u.map,jp(c,this.a.meta.paintKey,!0))}else s==="glass"?c=new Ye({color:856342,metalness:.2,roughness:.05,transparent:!0,opacity:.72,vertexColors:!1,envMapIntensity:1.6}):c=new Ye({vertexColors:!0,metalness:o?.25:.3,roughness:o?.7:.55});let l=o?this.max*2:this.max,h=new un(a.geometry,c,l);h.instanceMatrix.setUsage(Pn),s==="paint"&&(h.instanceColor=new Ot(new Float32Array(l*3).fill(1),3),h.instanceColor.setUsage(Pn)),h.count=0,h.frustumCulled=!1,h.castShadow=t===0&&s!=="glass",h.receiveShadow=s!=="glass",n[s]=h}return{meshes:n}}begin(){this.n[0]=0,this.n[1]=0}add(e,t,n,i,s,a){let o=this.levels[s];if(!o)return;let c=this.n[s]++;if(c>=this.max)return;let l=o.meshes;for(let u of["paint","misc","glass"])l[u]&&l[u].setMatrixAt(c,e);l.paint&&(qp.set(a?"#d4a22a":Yt(t).color),l.paint.setColorAt(c,qp));let h=this.a.meta.wheels;for(let u of tl){let d=u[1]==="L"?"wheel_L":"wheel_R",f=l[d];if(!f)continue;let m=c*2+(u[0]==="F"?0:1);Vp.set(i,u[0]==="F"?n:0,0,"YXZ"),Gp.setFromEuler(Vp),Wp.set(...h[u].c),Hp.compose(Wp,Gp,h_),zp.multiplyMatrices(e,Hp),f.setMatrixAt(m,zp)}}commit(){for(let e=0;e<this.levels.length;e++){let t=Math.min(this.max,this.n[e]);for(let[n,i]of Object.entries(this.levels[e].meshes))i.count=n.startsWith("wheel")?t*2:t,i.instanceMatrix.needsUpdate=!0,i.instanceColor&&(i.instanceColor.needsUpdate=!0)}}dispose(e){for(let t of this.levels)for(let n of Object.values(t.meshes))e.remove(n),n.dispose()}};var Hu={},sl=r=>Hu[r]||(Hu[r]=Ds("assets/chars/"+r+".glb").catch(e=>{throw delete Hu[r],e})),u_=r=>String(r).replace(/^mixamorig[:_]?/i,"").replace(/_\d+$/,"").replace(/[^a-z0-9]/gi,"").toLowerCase(),Yp={pelvis:"hips",spine:"spine",spine1:"spine1",spine2:"spine2",neck:"neck",head:"head"};for(let[r,e]of[["l","left"],["r","right"]])Object.assign(Yp,{[r+"clavicle"]:e+"shoulder",[r+"upperarm"]:e+"arm",[r+"forearm"]:e+"forearm",[r+"hand"]:e+"hand",[r+"thigh"]:e+"upleg",[r+"calf"]:e+"leg",[r+"foot"]:e+"foot",[r+"toe0"]:e+"toebase"});var Oa=r=>{let e=u_(r);return e.startsWith("bip001")&&Yp[e.slice(6)]||e};function Kp(r){let e=new Map,t=new Ae,n=new Ae,i=new L,s=new L;return r.traverse(a=>{a.isSkinnedMesh&&a.skeleton.bones.forEach((o,c)=>{if(e.has(o)||!a.skeleton.boneInverses[c])return;let l=new Et;t.copy(a.skeleton.boneInverses[c]).invert().decompose(i,l,s),l.pos=i.clone(),e.set(o,l)})}),e}function Gu(r,e,t,n=30){let i=new Map,s=[];e.traverse(F=>{if(F.isBone){let j=Oa(F.name);i.has(j)||i.set(j,F)}}),t.traverse(F=>{F.isBone&&s.push(F)});let a=[...i.values()].map(F=>[F,F.position.clone(),F.quaternion.clone(),F.scale.clone()]),o=()=>{for(let[F,j,G,U]of a)F.position.copy(j),F.quaternion.copy(G),F.scale.copy(U);e.updateMatrixWorld(!0)};o(),t.updateMatrixWorld(!0);let c=F=>F.getWorldQuaternion(new Et),l=F=>F.getWorldPosition(new L),h=Kp(e),u=Kp(t),d=new Map([...i].map(([F,j])=>[F,(h.get(j)||c(j)).invert()])),f=new Map(s.map(F=>[F,u.get(F)||c(F)])),m=new Map(s.map(F=>[F,c(F.parent)])),b=i.get("hips"),g=s.find(F=>Oa(F.name)==="hips"),p=new Set;g&&g.traverse(F=>p.add(F));let x=new Map(s.map(F=>[F,p.has(F)&&i.get(Oa(F.name))]).filter(F=>F[1])),w=g&&l(g),v=l(e),S=Math.max(2,Math.round(r.duration*n)+1),M=new Float32Array(S),A=new Map([...x.keys()].map(F=>[F,new Float32Array(S*4)])),y=new Float32Array(S*3),E=[],R=new ii(e),P=R.clipAction(r);P.play();let D=new Map,B=new Et,N=new Ae,k=new L;for(let F=0;F<S;F++){let j=M[F]=Math.min(r.duration,F/n);R.setTime(j),e.updateMatrixWorld(!0),D.clear();for(let G of s){let U=D.get(G.parent)||m.get(G),J=x.get(G);if(J){let I=c(J).multiply(d.get(Oa(G.name))).multiply(f.get(G));B.copy(U).invert().multiply(I),B.toArray(A.get(G),F*4),D.set(G,I)}else D.set(G,U.clone().multiply(G.quaternion))}g&&b&&E.push(l(b).sub(v))}if(P.stop(),R.uncacheRoot(e),o(),g&&b){let F=E.map(I=>I.y).sort((I,V)=>I-V),j=F[F.length>>1]||1,G=E.reduce((I,V)=>I+V.x,0)/E.length,U=E.reduce((I,V)=>I+V.z,0)/E.length,J=(w.y-l(t).y)/Math.max(.001,j);N.copy(g.parent.matrixWorld).invert(),E.forEach((I,V)=>{k.set((I.x-G)*J+w.x,(I.y-j)*J+w.y,(I.z-U)*J+w.z).applyMatrix4(N).toArray(y,V*3)})}let ee=[...A].map(([F,j])=>new Rn(F.name+".quaternion",M,j));return g&&b&&ee.push(new Vn(g.name+".position",M,y)),new ei(r.name+"_rt",r.duration,ee)}function $p(r){return r.updateMatrixWorld(!0),r.traverse(e=>{e.isSkinnedMesh&&(e.skeleton.update(),e.computeBoundingBox(),e.computeBoundingSphere())}),new Ht().setFromObject(r)}var Nr=null;async function rl(){return Nr||(Nr=Promise.all(["racedriver","rider","crowd"].map(sl)).then(([r,e,t])=>({driver:r,rider:e,crowd:t})),Nr.catch(()=>{Nr=null}),Nr)}function d_(r,e){let t=r.clone(),n={value:new Se(e)};return t.onBeforeCompile=i=>{i.uniforms.suitCol=n,i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 suitCol;`).replace("#include <map_fragment>",`#include <map_fragment>
      { float red = smoothstep(0.06, 0.25, diffuseColor.r - max(diffuseColor.g, diffuseColor.b));
        diffuseColor.rgb = mix(diffuseColor.rgb, suitCol * clamp(diffuseColor.r * 2.2, 0.25, 1.4), red); }`)},t.customProgramCacheKey=()=>"suit",t}function Jp(r,{height:e=1.8,clip:t=0,tint:n=null}={}){let i=Is(r.driver.scene);i.traverse(h=>{h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1,n&&/Outfit_Top|Outfit_Bottom|Headwear/i.test(h.material.name)&&(h.material=d_(h.material,n)))});let s=$p(i),a=e/Math.max(.1,s.max.y-s.min.y);i.scale.setScalar(a);let o=new Ke;o.add(i),i.position.y=-s.min.y*a;let c=new ii(i),l=r.rider.animations.filter(h=>h.duration>1);if(l.length){let h=t%l.length,u=r.rt||(r.rt=[]),d=u[h]||(u[h]=Gu(l[h],r.rider.scene,r.driver.scene)),f=c.clipAction(d);f.time=Math.random()*d.duration,f.play()}return o.userData.mixer=c,o.userData.hand=h=>{let u=null;return i.traverse(d=>{!u&&d.isBone&&Oa(d.name)===h+"hand"&&(u=d)}),u},o}function Zp(r,e=1.75){let t=Is(r.crowd.scene),n=[];t.traverse(l=>{l.isMesh&&(/pavement|^material$/i.test(l.material.name)?n.push(l):(l.castShadow=!0,l.frustumCulled=!1))}),n.forEach(l=>l.parent.remove(l));let i=$p(t),s=e/Math.max(.1,i.max.y-i.min.y);t.scale.setScalar(s);let a=i.getCenter(new L);t.position.set(-a.x*s,-i.min.y*s,-a.z*s);let o=new Ke;o.add(t);let c=new ii(t);if(r.crowd.animations[0]){let l=c.clipAction(r.crowd.animations[0]);l.time=Math.random()*r.crowd.animations[0].duration,l.play()}return o.userData.mixer=c,o}function Qp(r,e,{winter:t=!1,hq:n=!0}={}){let i=new gr(.2,.6,n?2:1,n?6:4);i.translate(0,.52,0);let s=new Mi(.13,n?7:5,n?5:3);s.translate(0,1.2,0);let a=new gr(.055,.5,1,n?4:3);a.translate(0,-.27,0),a.rotateZ(-.12),a.translate(-.25,.97,0);let o=a.clone();o.scale(-1,1,1);let c=[i,s,a,o].map((R,P)=>{let D=R.attributes.position.count;return R.setAttribute("part",new Xe(new Float32Array(D).fill(P),1)),R.toNonIndexed()}),l=new ot;for(let R of["position","normal","part"]){let P=c.map(k=>k.attributes[R].array),D=c[0].attributes[R].itemSize,B=new Float32Array(P.reduce((k,ee)=>k+ee.length,0)),N=0;for(let k of P)B.set(k,N),N+=k.length;l.setAttribute(R,new Xe(B,D))}let h=new pa({vertexColors:!1}),u={value:0},d={value:0};h.onBeforeCompile=R=>{R.uniforms.uTime=u,R.uniforms.uHype=d,R.uniforms.uHat={value:t?.85:.2},R.vertexShader=R.vertexShader.replace("#include <common>",`#include <common>
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
varying vec3 vCol;`).replace("#include <color_fragment>","diffuseColor.rgb = vCol * 0.8;")};let f=new vs().copy(l),m=new Float32Array(r*3),b=new Float32Array(r*3),g=new Float32Array(r*3),p=new Float32Array(r*3),x=new Float32Array(r),w=[13111326,2052064,15921906,1776670,3817290,16761370,793688,558938,16735754,8028040,7015714,6535167,16727439,15262416,2829107],v=[2832981,1776670,4869975,7035461,2240583,3356220],S=[15845285,14724230,13011810,9263675,16111296],M=new Se;for(let R=0;R<r;R++)M.set(w[Math.random()*w.length|0]),m.set([M.r,M.g,M.b],R*3),M.set(S[Math.random()*S.length|0]),b.set([M.r,M.g,M.b],R*3),M.set(v[Math.random()*v.length|0]),g.set([M.r,M.g,M.b],R*3),M.set(w[Math.random()*w.length|0]),p.set([M.r,M.g,M.b],R*3),x[R]=Math.random();f.setAttribute("cloth",new Ot(m,3)),f.setAttribute("skin",new Ot(b,3)),f.setAttribute("pants",new Ot(g,3)),f.setAttribute("hat",new Ot(p,3)),f.setAttribute("seed",new Ot(x,1));let A=new un(f,h,r),y=new Ae,E=0;for(let R=0;R<r;R++){let P=e(R);P&&(y.makeRotationY(P.yaw).setPosition(P.x,P.y,P.z),A.setMatrixAt(E++,y))}return A.count=E,A.frustumCulled=!1,A.castShadow=!1,A.userData.uTime=u,A.userData.uHype=d,A}var Ur={stand:{s0:-100,s1:30,side:-1,depth:20},podium:{s:20,s0:2,s1:38,side:1,depth:30}},em=(r,e)=>e>r.L/2?e-r.L:e;function tm(r,e,t){let n=em(r,e),i=0;for(let s of[Ur.stand,Ur.podium]){if(Math.sign(t)!==s.side)continue;let a=Math.min(n-s.s0+14,s.s1+14-n)/14;a>0&&(i=Math.max(i,s.depth*Math.min(1,a)))}return i}function al(r,e,t){let n=em(r,e),i=r.halfWidth(e)+r.runoff;for(let s of[Ur.stand,Ur.podium])if(Math.sign(t)===s.side&&n>s.s0-8&&n<s.s1+8&&Math.abs(t)<i+s.depth+6)return!0;return!1}function Ln(r,e,t,n,i,s,a){let o=new Jt(e-r,n-t,s-i).toNonIndexed();o.translate((r+e)/2,(t+n)/2,(i+s)/2);let c=new Se(a),l=o.attributes.position.count,h=new Float32Array(l*3);for(let u=0;u<l;u++)h.set([c.r,c.g,c.b],u*3);return o.setAttribute("color",new Xe(h,3)),o.deleteAttribute("uv"),o}function f_(r){let e=[["NITRO LIVE",["#ff2d55","#ff7a18"],"#fff"],["TIKTOK LIVE",["#0b0b10","#1a1a24"],"#fff",!0],[r?"@"+r:"RACE DAY",["#1f4fe0","#19b4ff"],"#fff"],["\u{1F94A} = \u0412\u0425\u041E\u0414 \u0412 \u0413\u041E\u041D\u041A\u0423",["#111","#2a2a2a"],"#ffcc00"]];return on(2048,128,(t,n,i)=>{let s=n/e.length;e.forEach(([a,[o,c],l,h],u)=>{let d=t.createLinearGradient(u*s,0,(u+1)*s,0);d.addColorStop(0,o),d.addColorStop(1,c),t.fillStyle=d,t.fillRect(u*s,0,s,i),t.font='italic 900 64px "Russo One", "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",h&&(t.fillStyle="#25f4ee",t.fillText(a,u*s+s/2-3,i/2+1),t.fillStyle="#fe2c55",t.fillText(a,u*s+s/2+3,i/2+5)),t.fillStyle=l,t.fillText(a,u*s+s/2,i/2+3,s-30),t.fillStyle="rgba(255,255,255,.18)",t.fillRect(u*s,0,3,i)})})}function nm(r,e,t,{hostName:n=""}={}){let i=r.q,s=new Ke;s.name="venue";let a=f_(n),o=p_(i,e,t,a),c=m_(e,t,n);return s.add(o.grp,c.grp),s.userData={podium:c,crowd:o.crowd,stand:o.grp},s}function p_(r,e,t,n){let i=Ur.stand,s=e.frame(0),o=e.halfWidth(0)+e.runoff+3.4,c=8,l=.9,h=.5,u=1.25,d=o+c*l,f=u+(c-1)*h,m=f+3.9,b=e.surfaceY(0,0)-.35,g=U=>e.surfaceY(U,0)-.35-b,p=t==="snow"?10988984:10132643,x=2052064,w=15265010,v=16723285,S=[],M=[];for(let U=i.s0+16;U<i.s1-6;U+=22)M.push(U);let A=U=>M.some(J=>Math.abs(U-J)<.8);for(let U=0;U<c;U++){S.push(Ln(o+U*l,d,-3,u+U*h,i.s0,i.s1,p));let J=i.s0+.6,I=U===3||U===6?w:U===0?v:x;for(let V of[...M,i.s1-.6])V-.8>J&&S.push(Ln(o+U*l+.12,o+U*l+.56,u+U*h,u+U*h+.4,J,V-.8,I)),J=V+.8}S.push(Ln(d,d+.4,-3,m,i.s0-.4,i.s1+.4,6120043));for(let U of[i.s0-.4,i.s1])S.push(Ln(o-.2,d,-3,f+1.1,U,U+.4,p));S.push(Ln(o-2.2,d+.4,m,m+.35,i.s0-1,i.s1+1,3817290));for(let U=i.s0+4;U<i.s1;U+=12)S.push(Ln(d-.05,d+.5,m-3.2,m,U,U+.3,2764085));let y=$c(S),E=y.attributes.position;for(let U=0;U<E.count;U++)E.setY(U,E.getY(U)+g(E.getZ(U)));let R=new Ye({vertexColors:!0,roughness:.85,metalness:.05}),P=new Le(y,R);P.castShadow=!0,P.receiveShadow=!0;let D=new Ke;D.add(P);let B=i.s1-i.s0,N=(U,J,I,V,ie)=>{let re=new rn(ie-V,I-J);re.rotateY(-Math.PI/2),re.translate(U,(J+I)/2,(V+ie)/2);let ce=re.attributes.uv;for(let W=0;W<ce.count;W++)ce.setX(W,ce.getX(W)*(ie-V)/((I-J)*16));let X=re.attributes.position;for(let W=0;W<X.count;W++)X.setY(W,X.getY(W)+g(X.getZ(W)));return re},k=new Ye({map:n,roughness:.55,emissive:16777215,emissiveMap:n,emissiveIntensity:.18}),ee=new Le($c([N(o-.22,.05,u-.05,i.s0,i.s1),N(o-2.25,m-.05,m+.4,i.s0-1,i.s1+1)]),k);ee.receiveShadow=!0,D.add(ee);let F=Math.min(.95,.25+.55*(r.crowd||.7)),j=[];for(let U=0;U<c;U++)for(let J=i.s0+.9;J<i.s1-.6;J+=.64){if(A(J)||Math.random()>F)continue;let I=J+(Math.random()-.5)*.2;j.push({x:o+U*l+.42+(Math.random()-.5)*.1,y:u+U*h-.02+g(I),z:I,yaw:-Math.PI/2+(Math.random()-.5)*.5})}let G=Qp(j.length,U=>j[U],{winter:t==="snow",hq:r.detail>=1});return G.receiveShadow=!0,D.add(G),G.computeBoundingSphere(),G.frustumCulled=!0,D.position.set(s.x,b,s.z),D.rotation.y=s.heading,i.side>0&&(D.scale.x=-1),{grp:D,crowd:G}}function m_(r,e,t){let n=Ur.podium,i=r.frame(n.s),a=r.halfWidth(n.s)+r.runoff+16,o=i.x+i.nx*n.side*a,c=i.z+i.nz*n.side*a,l=r.surfaceY(n.s,0)-.35,h=new Ke;h.name="podium",h.position.set(o,l,c),h.rotation.y=Math.atan2(-n.side*i.nx,-n.side*i.nz);let u=[];u.push(Ln(-13,13,-2,.14,-7,12,e==="snow"?9278366:7304316)),u.push(Ln(-10,10,0,7.2,-5.2,-4.7,1711138));for(let p of[-10.4,10])u.push(Ln(p,p+.4,0,9.5,-5.3,-4.6,2764085));u.push(Ln(-10.4,10.4,9.1,9.5,-5.3,-4.6,2764085));let d=[[0,1.25],[-2.6,.88],[2.6,.55]];for(let[p,x]of d)u.push(Ln(p-1.3,p+1.3,0,x,-1.3,1.3,13225170));u.push(Ln(-1.3,1.3,.14,.17,1.3,11.5,10489884));let f=new Le($c(u),new Ye({vertexColors:!0,roughness:.88,metalness:0}));f.castShadow=f.receiveShadow=!0,h.add(f);let m=on(1024,384,(p,x,w)=>{let v=p.createLinearGradient(0,0,x,w);v.addColorStop(0,"#0d1024"),v.addColorStop(.55,"#1b1240"),v.addColorStop(1,"#3a0d2a"),p.fillStyle=v,p.fillRect(0,0,x,w),p.globalAlpha=.18;for(let M=0;M<16;M++)p.fillStyle=M%2?"#ff2d55":"#19e0ff",p.fillRect(M*70-60,0,22,w);p.globalAlpha=1,p.textAlign="center",p.textBaseline="middle",p.font='italic 900 150px "Russo One", "Arial Black", sans-serif';let S=p.createLinearGradient(0,80,0,230);S.addColorStop(0,"#fff"),S.addColorStop(1,"#ffd36b"),p.fillStyle=S,p.fillText("NITRO LIVE",x/2,150),p.font='700 54px "Russo One", "Arial Black", sans-serif',p.fillStyle="#ffcc00",p.fillText("\u{1F3C6}  \u041F\u041E\u0411\u0415\u0414\u0418\u0422\u0415\u041B\u0418 \u0413\u041E\u041D\u041A\u0418  \u{1F3C6}",x/2,262),p.font="600 34px sans-serif",p.fillStyle="rgba(255,255,255,.75)",p.fillText(t?"TikTok LIVE \xB7 @"+t:"TikTok LIVE",x/2,330)},{repeat:!1}),b=new Le(new rn(19.6,7),new Ye({map:m,emissive:16777215,emissiveMap:m,emissiveIntensity:.35,roughness:.6}));b.position.set(0,3.6,-4.68),b.receiveShadow=!0,h.add(b);let g=[["#fff1a8","#d9a520","#8a5a00"],["#ffffff","#c3c8d0","#6b7079"],["#ffd2a8","#c7773a","#6a3510"]];return d.forEach(([p,x],w)=>{let v=on(256,128,(M,A,y)=>{let E=M.createLinearGradient(0,0,0,y);E.addColorStop(0,g[w][0]),E.addColorStop(.5,g[w][1]),E.addColorStop(1,g[w][2]),M.fillStyle=E,M.fillRect(0,0,A,y),M.font='italic 900 104px "Russo One", "Arial Black", sans-serif',M.textAlign="center",M.textBaseline="middle",M.fillStyle="rgba(0,0,0,.35)",M.fillText(String(w+1),A/2+4,y/2+8),M.fillStyle="#fff",M.fillText(String(w+1),A/2,y/2+4)},{repeat:!1}),S=new Le(new rn(2.6,x),new Ye({map:v,metalness:.6,roughness:.3}));S.position.set(p,x/2,1.31),h.add(S)}),{grp:h,steps:d.map(([p,x])=>new L(p,x,0))}}var Vu=class{constructor(e,t=520,n=4){this.track=e,this.cell=n;let i=1/0,s=1/0,a=-1/0,o=-1/0;for(let g=0;g<e.N;g++)i=Math.min(i,e.X[g]),a=Math.max(a,e.X[g]),s=Math.min(s,e.Z[g]),o=Math.max(o,e.Z[g]);this.x0=i-t,this.z0=s-t,this.nx=Math.ceil((a-i+2*t)/n)+1,this.nz=Math.ceil((o-s+2*t)/n)+1,this.cx=(i+a)/2,this.cz=(s+o)/2,this.radius=Math.hypot(a-i,o-s)/2;let c=this.nx*this.nz,l=this.near=new Int32Array(c).fill(-1),h=new Float32Array(c).fill(1e9),u=e.X,d=e.Z,f=(g,p)=>{let x=this.x0+g%this.nx*n,w=this.z0+Math.floor(g/this.nx)*n,v=x-u[p],S=w-d[p];return v*v+S*S};for(let g=0;g<e.N;g++){let p=Math.round((u[g]-this.x0)/n),x=Math.round((d[g]-this.z0)/n);for(let w=-3;w<=3;w++)for(let v=-3;v<=3;v++){let S=p+v,M=x+w;if(S<0||M<0||S>=this.nx||M>=this.nz)continue;let A=M*this.nx+S,y=f(A,g);y<h[A]&&(h[A]=y,l[A]=g)}}let m=this.nx,b=(g,p)=>{let x=l[p];if(x<0)return;let w=f(g,x);w<h[g]&&(h[g]=w,l[g]=x)};for(let g=0;g<2;g++){for(let p=0;p<this.nz;p++)for(let x=0;x<m;x++){let w=p*m+x;x>0&&b(w,w-1),p>0&&(b(w,w-m),x>0&&b(w,w-m-1),x<m-1&&b(w,w-m+1))}for(let p=this.nz-1;p>=0;p--)for(let x=m-1;x>=0;x--){let w=p*m+x;x<m-1&&b(w,w+1),p<this.nz-1&&(b(w,w+m),x<m-1&&b(w,w+m+1),x>0&&b(w,w+m-1))}}this.dist=h,this._p={}}query(e,t,n={}){let i=Math.round((e-this.x0)/this.cell),s=Math.round((t-this.z0)/this.cell);if(i<0||s<0||i>=this.nx||s>=this.nz)return n.dist=Math.max(0,Math.hypot(e-this.cx,t-this.cz)-this.radius)+400,n.i=-1,n.s=0,n.d=0,n;let a=this.near[s*this.nx+i],o=this.track.project(e,t,a,this._p,4);return n.i=o.i,n.s=o.s,n.d=o.d,n.dist=Math.abs(o.d),n}},im={city:{hills:3,mount:60,mountFrom:700,mountTo:1900,valley:60,rough:.2,seed:11},snow:{hills:14,mount:330,mountFrom:140,mountTo:1100,valley:45,rough:1,seed:23},offroad:{hills:18,mount:260,mountFrom:120,mountTo:1e3,valley:38,rough:.9,seed:37}},ol=class{constructor(e,t){this.track=e,this.P=im[t]||im.city,this.loc=t,this.field=new Vu(e),this.N=Yc(this.P.seed);let n=0;for(let i=0;i<e.N;i++)n+=e.Y[i];this.meanY=n/e.N,this._q={}}natural(e,t,n){let i=this.P,s=this.N,a=this.meanY+s.fbm(e/520,t/520,4)*i.hills,o=Kt(i.mountFrom,i.mountTo,n);return o>0&&(a+=o*(s.ridged(e/900+7,t/900-3,5)*.75+s.fbm(e/1600,t/1600,3)*.35+.15)*i.mount),a}height(e,t,n){let i=this.field.query(e,t,this._q),s=this.track,a=i.i>=0?s.halfWidth(i.s):8,o=a+s.runoff+2.5+(i.i>=0?tm(s,i.s,i.d):0),c=this.natural(e,t,i.dist),l;if(i.i<0)l=c;else{let h=s.surfaceY(i.s,Math.max(-a-s.runoff,Math.min(a+s.runoff,i.d))),u=Kt(o,o+this.P.valley,i.dist),d=h-.35-Math.min(1.2,Math.max(0,i.dist-o)*.05);l=d+(c-d)*u,i.dist<o&&(l=h-.35)}return n&&(n.dist=i.dist,n.s=i.s,n.d=i.d,n.i=i.i),l}},sm={city:{tex:["t_grass","b_concrete","t_dirt","t_gravel"],scale:[9,5,8,6],rough:[.95,.85,.95,.9],tint:[[.92,1,.86],[1,1,1],[1,1,1],[1,1,1]]},snow:{tex:["t_snow","t_rock2","t_forest","t_gravel"],scale:[11,14,8,6],rough:[.75,.9,.95,.9],tint:[[1,1,1.02],[.9,.92,.98],[.85,.85,.85],[.95,.95,1]]},offroad:{tex:["t_grass","t_dirt","t_rock2","t_forest"],scale:[9,8,16,8],rough:[.95,.95,.9,.95],tint:[[.9,1.02,.85],[1,.98,.95],[1,1,1],[1,1,1]]}};function rm(r,e,t,n){let i=r.q,s=sm[t]||sm.city,a=n.field,o=i.detail>=1?4:i.detail>=.8?6:8,c=i.detail>=1?256:i.detail>=.8?384:512,l=1024,h=2600,u=Math.floor(a.x0/l)*l,d=Math.floor(a.z0/l)*l,f=Math.ceil((a.x0+a.nx*a.cell)/l)*l,m=Math.ceil((a.z0+a.nz*a.cell)/l)*l,b=u-Math.ceil(h/l)*l,g=d-Math.ceil(h/l)*l,p=f+Math.ceil(h/l)*l,x=m+Math.ceil(h/l)*l,w=[];for(let E=g;E<x;E+=l)for(let R=b;R<p;R+=l)if(R>=u&&R<f&&E>=d&&E<m)for(let P=E;P<E+l;P+=c)for(let D=R;D<R+l;D+=c)w.push([D,P,Math.min(c,R+l-D),Math.min(c,E+l-P)]);else w.push([R,E,l,l]);let v=new Ke;v.name="terrain";let S=b_(r,s,t),M={},A=n.N,y=0;for(let[E,R,P]of w){let D=n.field.query(E+P/2,R+P/2,{}).dist-P*.72,B=P>600?64:D<140?o:D<450?o*2.5:D<1100?32:64,N=Math.round(P/B),k=N+1,ee=new Float32Array(k*k*3),F=new Float32Array(k*k*3),j=new Float32Array(k*k*4),G=new Float32Array((k+2)*(k+2)),U=P/N;for(let Q=-1;Q<=k;Q++)for(let ve=-1;ve<=k;ve++)G[(Q+1)*(k+2)+(ve+1)]=n.height(E+ve*U,R+Q*U);for(let Q=0;Q<k;Q++)for(let ve=0;ve<k;ve++){let Ge=Q*k+ve,Oe=E+ve*U,Ve=R+Q*U,tt=G[(Q+1)*(k+2)+(ve+1)],ze=G[(Q+1)*(k+2)+ve],$e=G[(Q+1)*(k+2)+ve+2],Mt=G[Q*(k+2)+ve+1],Rt=G[(Q+2)*(k+2)+ve+1];ee[Ge*3]=Oe,ee[Ge*3+1]=tt,ee[Ge*3+2]=Ve;let rt=ze-$e,ct=2*U,O=Mt-Rt,dt=Math.hypot(rt,ct,O);rt/=dt,ct/=dt,O/=dt,F[Ge*3]=rt,F[Ge*3+1]=ct,F[Ge*3+2]=O,n.height(Oe,Ve,M);let at=g_(t,ct,tt,M,A,Oe,Ve,n);j.set(at,Ge*4)}let J=[];for(let Q=0;Q<N;Q++)for(let ve=0;ve<N;ve++){let Ge=Q*k+ve,Oe=Ge+1,Ve=Ge+k,tt=Ve+1;J.push(Ge,Ve,Oe,Oe,Ve,tt)}let I=[],V=k*k,ie=[];for(let Q=0;Q<k;Q++)ie.push(Q);for(let Q=1;Q<k;Q++)ie.push(Q*k+k-1);for(let Q=k-2;Q>=0;Q--)ie.push((k-1)*k+Q);for(let Q=k-2;Q>=1;Q--)ie.push(Q*k);let re=new Float32Array(ee.length+ie.length*3),ce=new Float32Array(F.length+ie.length*3),X=new Float32Array(j.length+ie.length*4);re.set(ee),ce.set(F),X.set(j),ie.forEach((Q,ve)=>{let Ge=V+ve;re[Ge*3]=ee[Q*3],re[Ge*3+1]=ee[Q*3+1]-B*.6,re[Ge*3+2]=ee[Q*3+2],ce[Ge*3]=F[Q*3],ce[Ge*3+1]=F[Q*3+1],ce[Ge*3+2]=F[Q*3+2],X.set(j.subarray(Q*4,Q*4+4),Ge*4)});for(let Q=0;Q<ie.length;Q++){let ve=ie[Q],Ge=ie[(Q+1)%ie.length],Oe=V+Q,Ve=V+(Q+1)%ie.length;I.push(ve,Ge,Oe,Ge,Ve,Oe)}let W=new ot;W.setAttribute("position",new Xe(re,3)),W.setAttribute("normal",new Xe(ce,3)),W.setAttribute("splat",new Xe(X,4));let le=J.concat(I);W.setIndex(re.length/3>65535?new hs(le,1):new ls(le,1)),W.computeBoundingSphere(),W.computeBoundingBox();let de=new Le(W,S);de.receiveShadow=B<=o*2.5,de.castShadow=!1,de.matrixAutoUpdate=!1,de.updateMatrix(),v.add(de),y+=le.length/3}return v.userData.tris=y,v}function g_(r,e,t,n,i,s,a,o){let c=1-e,l=i.fbm(s/60,a/60,3),h=i.fbm(s/23+50,a/23,2),u=1-Kt(0,22,n.dist-o.track.halfWidth(n.s||0)-o.track.runoff),d;if(r==="city"){let m=Math.max(u,Kt(.15,.4,l)*.8);d=[1-m,m,Kt(.2,.6,h)*(1-m)*.5,u*.2]}else if(r==="snow"){let m=Kt(.18,.42,c)+Kt(.35,.6,h)*Kt(.08,.2,c);d=[1,Math.min(1,m)*1.4,Kt(.35,.65,l)*.4*(1-m),u*.55]}else{let m=Kt(.2,.45,c)+Kt(.4,.7,h)*Kt(.1,.25,c),b=Kt(120,220,t);d=[1-b*.6,u*.9+Kt(.25,.6,l)*.6,Math.min(1,m+b*.5)*1.3,Kt(-.2,.3,h)*.5*(1-u)]}let f=d[0]+d[1]+d[2]+d[3]||1;return[d[0]/f,d[1]/f,d[2]/f,d[3]/f]}function b_(r,e,t){let n=r.q.normalMaps,i=e.tex.map(o=>Xn(o+"_c",{srgb:!0,gfx:r})),s=n?[Xn(e.tex[0]+"_n",{gfx:r}),Xn(e.tex[2]+"_n",{gfx:r})]:null,a=new Ye({roughness:1,metalness:0});return a.onBeforeCompile=o=>{o.uniforms.tA={value:i[0]},o.uniforms.tB={value:i[1]},o.uniforms.tC={value:i[2]},o.uniforms.tD={value:i[3]},o.uniforms.sc={value:new ut(...e.scale.map(c=>1/c))},o.uniforms.rough4={value:new ut(...e.rough)},o.uniforms.tints={value:e.tint.map(c=>new L(...c))},n&&(o.uniforms.nA={value:s[0]},o.uniforms.nC={value:s[1]}),o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
        normal = normalize(mat3(T, B, normal) * vec3(tn.xy * 0.8, tn.z));`))},a.customProgramCacheKey=()=>"terrain"+t+(n?"n":""),a}var am=Math.PI*2,cl=r=>(r=(r+Math.PI)%am,r<0&&(r+=am),r-Math.PI);function om(r,e,t){if(!r||!r.length)return()=>t;let n=r.map(([d,f])=>[(d%e+e)%e,f]).sort((d,f)=>d[0]-f[0]),i=n.length;if(i===1)return()=>n[0][1];let s=[n[i-1][0]-e,...n.map(d=>d[0]),n[0][0]+e,n[1][0]+e],a=[n[i-1][1],...n.map(d=>d[1]),n[0][1],n[1][1]],o=s.length,c=[],l=[],h=[];for(let d=0;d<o-1;d++)c[d]=s[d+1]-s[d],l[d]=a[d+1]-a[d],h[d]=l[d]/c[d];let u=[h[0]];for(let d=1;d<o-1;d++)if(h[d-1]*h[d]<=0)u[d]=0;else{let f=2*c[d]+c[d-1],m=c[d]+2*c[d-1];u[d]=(f+m)/(f/h[d-1]+m/h[d])}return u[o-1]=h[o-2],d=>{d=(d%e+e)%e;let f=0;for(;f<o-2&&s[f+1]<d;)f++;let m=c[f],b=(d-s[f])/m,g=(1+2*b)*(1-b)*(1-b),p=b*(1-b)*(1-b),x=b*b*(3-2*b),w=b*b*(b-1);return g*a[f]+p*m*u[f]+x*a[f+1]+w*m*u[f+1]}}function cm(r){let e=r.path.map(I=>({...I})),t=e.filter(I=>I.adj);if(t.length===2){let I=r.heading||0,V=0,ie=0;for(let W of e)if(W.s)W.adj&&(W.dir=[Math.sin(I),Math.cos(I)]),V+=Math.sin(I)*W.s,ie+=Math.cos(I)*W.s;else{let le=W.a*Math.PI/180,de=Math.abs(le)*W.r,Q=Math.max(3,Math.round(de));for(let ve=0;ve<Q;ve++)I-=le/Q/2,V+=Math.sin(I)*de/Q,ie+=Math.cos(I)*de/Q,I-=le/Q/2}let[re,ce]=t,X=re.dir[0]*ce.dir[1]-re.dir[1]*ce.dir[0];if(Math.abs(X)>.2){let W=(-V*ce.dir[1]+ie*ce.dir[0])/X,le=(-re.dir[0]*ie+re.dir[1]*V)/X;re.s+=W,ce.s+=le}for(let W of t)W.s<10&&(W.s=10);r.solved=t.map(W=>Math.round(W.s))}let n=[0],i=[0],s=[],a=0,o=0,c=r.heading||0;for(let I of e)if(s.push(n.length-1),I.s){let V=Math.max(1,Math.round(I.s));for(let ie=0;ie<V;ie++)a+=Math.sin(c)*I.s/V,o+=Math.cos(c)*I.s/V,n.push(a),i.push(o)}else{let V=I.a*Math.PI/180,ie=Math.abs(V)*I.r,re=Math.max(3,Math.round(ie));for(let ce=0;ce<re;ce++)c-=V/re/2,a+=Math.sin(c)*ie/re,o+=Math.cos(c)*ie/re,c-=V/re/2,n.push(a),i.push(o)}let l=[0];for(let I=1;I<n.length;I++)l[I]=l[I-1]+Math.hypot(n[I]-n[I-1],i[I]-i[I-1]);let h=l[l.length-1],u=n[n.length-1],d=i[i.length-1];for(let I=0;I<n.length;I++){let V=l[I]/h;n[I]-=u*V,i[I]-=d*V}n.pop(),i.pop();let f=n.length;for(let I=0;I<(r.smooth??6);I++){let V=n.slice(),ie=i.slice();for(let re=0;re<f;re++){let ce=(re-1+f)%f,X=(re+1)%f;n[re]=V[re]*.5+(V[ce]+V[X])*.25,i[re]=ie[re]*.5+(ie[ce]+ie[X])*.25}}let m=[0];for(let I=1;I<=f;I++){let V=I%f;m[I]=m[I-1]+Math.hypot(n[V]-n[I-1],i[V]-i[I-1])}let b=m[f],g=Math.round(b/2),p=g*2,x=b/p,w=new Float32Array(g),v=new Float32Array(g),S=new Float32Array(g),M=new Float32Array(g),A=new Float32Array(g),y=new Float32Array(g),E=new Float32Array(g),R=new Float32Array(g),P=0;for(let I=0;I<g;I++){let V=I*2*x;for(;P<f-1&&m[P+1]<V;)P++;let ie=(V-m[P])/Math.max(1e-6,m[P+1]-m[P]),re=P,ce=(P+1)%f;w[I]=n[re]+(n[ce]-n[re])*ie,v[I]=i[re]+(i[ce]-i[re])*ie}let D=new Float32Array(g);for(let I=0;I<g;I++){let V=(I-1+g)%g,ie=(I+1)%g,re=w[ie]-w[V],ce=v[ie]-v[V],X=Math.hypot(re,ce)||1;M[I]=re/X,A[I]=ce/X,D[I]=Math.atan2(M[I],A[I])}for(let I=0;I<g;I++){let V=(I-1+g)%g,ie=(I+1)%g;y[I]=-cl(D[ie]-D[V])/4}let B=new Float32Array(g);for(let I=0;I<g;I++){let V=0;for(let ie=-6;ie<=6;ie++)V+=y[(I+ie+g)%g];B[I]=V/13}let N=s.map(I=>m[Math.min(I,f)]/x),k=(I,V)=>N[I]+((I+1<N.length?N[I+1]:p)-N[I])*V,ee=om((r.height||[]).map(([I,V])=>[I*p,V]),p,0),F=om(r.widths&&r.widths.map(([I,V])=>[I*p,V]),p,r.width||14),j=(r.jumps||[]).map(I=>({s:k(I.seg,I.at),h:I.h})),G=I=>{let V=0;for(let ie of j){let re=I-ie.s;if(re<-p/2&&(re+=p),re>p/2&&(re-=p),re>-34&&re<=0){let ce=(re+34)/34;V+=ie.h*ce*ce*(3-2*ce)}else if(re>0&&re<7){let ce=re/7;V+=ie.h*(1-ce*ce)}}return V};for(let I=0;I<g;I++)S[I]=ee(I*2)+G(I*2),E[I]=r.widths?F(I*2):r.width||14,R[I]=Math.max(-(r.bankMax||0),Math.min(r.bankMax||0,B[I]*(r.bankK||0)));let U=r.sectors||10,J={id:r.id,def:r,N:g,L:p,X:w,Y:S,Z:v,TX:M,TZ:A,K:B,W:E,B:R,runoff:r.runoff??2,sectors:U,segS:N,jumps:j,zones:(r.zones||[]).map(I=>({...I,from:k(I.seg,I.from),to:k(I.seg,I.to)})),wrapS:I=>(I%p+p)%p,at(I){I=(I%p+p)%p;let V=I/2;return[Math.floor(V)%g,V-Math.floor(V)]},frame(I,V={}){let[ie,re]=J.at(I),ce=(ie+1)%g;V.x=w[ie]+(w[ce]-w[ie])*re,V.z=v[ie]+(v[ce]-v[ie])*re,V.y=S[ie]+(S[ce]-S[ie])*re;let X=M[ie]+(M[ce]-M[ie])*re,W=A[ie]+(A[ce]-A[ie])*re,le=Math.hypot(X,W)||1;return V.tx=X/le,V.tz=W/le,V.nx=-V.tz,V.nz=V.tx,V.bank=R[ie]+(R[ce]-R[ie])*re,V.w=E[ie]+(E[ce]-E[ie])*re,V.k=B[ie]+(B[ce]-B[ie])*re,V.heading=Math.atan2(V.tx,V.tz),V},surfaceY(I,V){let[ie,re]=J.at(I),ce=(ie+1)%g,X=S[ie]+(S[ce]-S[ie])*re,W=R[ie]+(R[ce]-R[ie])*re;return X+V*Math.tan(W)},halfWidth(I){let[V,ie]=J.at(I),re=(V+1)%g;return(E[V]+(E[re]-E[V])*ie)/2},project(I,V,ie=-1,re={},ce=30){let X=1/0,W=0,le=0,de=ze=>{let $e=(ze+1)%g,Mt=w[ze],Rt=v[ze],rt=w[$e]-Mt,ct=v[$e]-Rt,O=((I-Mt)*rt+(V-Rt)*ct)/(rt*rt+ct*ct);O=O<0?0:O>1?1:O;let dt=Mt+rt*O-I,at=Rt+ct*O-V,C=dt*dt+at*at;C<X&&(X=C,W=ze,le=O)};if(ie<0){for(let $e=0;$e<g;$e+=3)de($e);let ze=W;for(let $e=-4;$e<=4;$e++)de((ze+$e+g)%g)}else for(let ze=-ce;ze<=ce;ze++)de((ie+ze+g)%g);let Q=(W+1)%g,ve=w[W]+(w[Q]-w[W])*le,Ge=v[W]+(v[Q]-v[W])*le,Oe=M[W]+(M[Q]-M[W])*le,Ve=A[W]+(A[Q]-A[W])*le,tt=Math.hypot(Oe,Ve)||1;return Oe/=tt,Ve/=tt,re.i=W,re.s=(W+le)*2,re.d=(I-ve)*-Ve+(V-Ge)*Oe,re.dist=Math.sqrt(X),re},zoneAt(I){for(let V of J.zones)if(I>=V.from&&I<=V.to)return V;return null},gridSlot(I){let V=Math.floor(I/2),ie=I%2?1:-1,re=p-12-V*9-I%2*4,ce=J.frame(re),X=ie*Math.min(3.4,ce.w/2-2.2);return{s:re,d:X,x:ce.x+ce.nx*X,z:ce.z+ce.nz*X,yaw:ce.heading}}};return J}var lm={city:{road:"t_asphalt",roadScale:7,roadTint:[.72,.72,.75],shoulder:"b_concrete",shTint:[.62,.62,.64],lines:!0,kerbs:!0,barrier:"wall"},snow:{road:"t_snow",roadScale:6,roadTint:[.88,.91,.97],shoulder:"t_snow",shTint:[1,1,1.02],lines:!1,kerbs:!1,barrier:"snowbank",ruts:[.72,.78,.88]},offroad:{road:"t_gravel",roadScale:5,roadTint:[.92,.84,.72],shoulder:"t_dirt",shTint:[.85,.8,.72],lines:!1,kerbs:!1,barrier:"tyres",ruts:[.78,.7,.6]}};function Pi(r,e,{yOff:t=0,dOffFn:n=null,step:i=1,s0:s=0,s1:a=null}={}){let o=r.N,c={},l=Math.floor(s/2),h=a==null?o:Math.ceil(a/2),u=[];for(let x=l;x<=h;x+=i)u.push(Math.min(x,h));let d=e.length,f=new Float32Array(u.length*d*3),m=new Float32Array(u.length*d*2),b=new Float32Array(u.length*d*3);u.forEach((x,w)=>{let v=x%o*2;r.frame(v,c);let S=c.w/2;for(let M=0;M<d;M++){let A=e[M],y=typeof A=="function"?A(S,v):A,E=r.surfaceY(v,y)+(typeof t=="function"?t(M,y,S,v):t),R=(w*d+M)*3;f[R]=c.x+c.nx*y,f[R+1]=E,f[R+2]=c.z+c.nz*y;let P=Math.cos(c.bank),D=Math.sin(c.bank);b[R]=-c.nx*D,b[R+1]=P,b[R+2]=-c.nz*D,m[(w*d+M)*2]=y,m[(w*d+M)*2+1]=x*2}});let g=[];for(let x=0;x<u.length-1;x++)for(let w=0;w<d-1;w++){let v=x*d+w,S=(x+1)*d+w;g.push(v,v+1,S,v+1,S+1,S)}let p=new ot;return p.setAttribute("position",new Xe(f,3)),p.setAttribute("normal",new Xe(b,3)),p.setAttribute("uv",new Xe(m,2)),p.setIndex(g),p}function hm(r,e,t,n={},i=200){let s=new Ke;for(let a=0;a<r.L;a+=i){let o=Pi(r,e,{...n,s0:a,s1:Math.min(r.L,a+i)});o.computeBoundingSphere();let c=new Le(o,t);c.receiveShadow=!0,c.matrixAutoUpdate=!1,s.add(c)}return s}var Wu=null;function x_(){if(Wu)return Wu;let r=512,e=new Float32Array(r*r);for(let o=0;o<e.length;o++)e[o]=Math.random();let t=(o,c)=>{let l=new Float32Array(r*r);for(let h=0;h<r;h++)for(let u=0;u<r;u++){let d=0,f=0;for(let m=-c;m<=c;m+=Math.max(1,c>>2))d+=o[h*r+(u+m+r)%r]+o[(h+m+r)%r*r+u],f+=2;l[h*r+u]=d/f}return l},n=t(e,6),i=t(t(e,32),32),s=on(r,r,o=>{let c=o.createImageData(r,r);for(let l=0;l<r*r;l++){let h=e[l]-.5,u=e[l]>.93?.18:e[l]<.05?-.12:0,d=.62+h*.22+u+(n[l]-.5)*.35+(i[l]-.5)*.9,f=Math.max(0,Math.min(255,d*118));c.data[l*4]=f,c.data[l*4+1]=f*1.01,c.data[l*4+2]=f*1.05,c.data[l*4+3]=255}o.putImageData(c,0,0)}),a=on(r,r,o=>{let c=o.createImageData(r,r);for(let l=0;l<r;l++)for(let h=0;h<r;h++){let u=l*r+h,d=e[l*r+(h+1)%r]-e[l*r+(h-1+r)%r],f=e[(l+1)%r*r+h]-e[(l-1+r)%r*r+h];c.data[u*4]=128-d*70,c.data[u*4+1]=128-f*70,c.data[u*4+2]=255,c.data[u*4+3]=255}o.putImageData(c,0,0)},{srgb:!1});return Wu={col:s,nrm:a}}function v_(r,e,t){let n=Xn(e.road+"_c",{srgb:!0,gfx:r}),i=r.q.normalMaps?Xn(e.road+"_n",{gfx:r}):null;if(e.lines){let o=x_();n=o.col,i=r.q.normalMaps?o.nrm:null,e={...e,roadScale:3.2,roadTint:[1,1,1]}}let s=new Ye({map:n,normalMap:i,roughness:e.road==="t_asphalt"?.82:.9,metalness:0});i&&s.normalScale.set(.6,.6),s.color.setRGB(...e.roadTint);let a=t.W[0]/2;return s.onBeforeCompile=o=>{o.uniforms.sc={value:1/e.roadScale},o.uniforms.hw={value:a},o.uniforms.rutCol={value:new L(...e.ruts||[0,0,0])},o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
        #endif`)},s.customProgramCacheKey=()=>"road"+e.road+(i?"n":""),s}function um(r,e,t,{hostName:n=""}={}){let i=lm[t]||lm.city,s=new Ke;s.name="road";let a=e.runoff,o=[u=>-u,u=>-u*.66,u=>-u*.33,0,u=>u*.33,u=>u*.66,u=>u],c=v_(r,i,e);s.add(hm(e,o,c));let l=Xn(i.shoulder+"_c",{srgb:!0,gfx:r}),h=new Ye({map:l,roughness:.95});h.color.setRGB(...i.shTint),h.onBeforeCompile=u=>{u.vertexShader=u.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.18;
#endif`)};for(let u of[-1,1]){let d=u<0?[m=>-m-a-1.2,m=>-m-a-.6,m=>-m-a,m=>-m]:[m=>m,m=>m+a,m=>m+a+.6,m=>m+a+1.2],f=u<0?(m=>m===0?-1.4:-.02):(m=>m===3?-1.4:-.02);s.add(hm(e,d,h,{yOff:f}))}return i.kerbs&&s.add(y_(r,e)),s.add(__(r,e)),s.add(S_(r,e,t,n)),s.add(R_(r,e,t,n)),s}function y_(r,e){let t=on(64,128,(l,h,u)=>{l.fillStyle="#d8d8d8",l.fillRect(0,0,h,u),l.fillStyle="#c4161c",l.fillRect(0,0,h,u/2)}),n=new Ye({map:t,roughness:.6});n.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.x, uv.y / 2.4);
#endif`)};let i=new Ke,s=e.N,a=!1,o=0,c=[];for(let l=0;l<=s;l++){let h=Math.abs(e.K[l%s]);!a&&h>1/140?(a=!0,o=l):a&&h<1/200&&(a=!1,l-o>4&&c.push([o-6,l+6]))}for(let[l,h]of c)for(let u of[-1,1]){let d=u<0?[g=>-g-.35,g=>-g+.9]:[g=>g-.9,g=>g+.35],f=Pi(e,d,{s0:l*2,s1:h*2,yOff:(g,p,x)=>Math.abs(p)<x?.03:.012}),m=f.attributes.uv;for(let g=0;g<m.count;g++)m.setX(g,g%2);f.computeBoundingSphere();let b=new Le(f,n);b.receiveShadow=!0,b.matrixAutoUpdate=!1,i.add(b)}return i}function __(r,e){let t=new Ke,n=on(256,64,(l,h,u)=>{for(let f=0;f<u/16;f++)for(let m=0;m<h/16;m++)l.fillStyle=(m+f)%2?"#111":"#eee",l.fillRect(m*16,f*16,16,16)},{repeat:!1}),i=e.halfWidth(0),s=Pi(e,[-i,i],{s0:0,s1:2,yOff:.02}),a=s.attributes.uv;for(let l=0;l<a.count;l++)a.setX(l,l%2),a.setY(l,l<2?0:1);let o=new Le(s,new Ye({map:n,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2}));o.receiveShadow=!0,t.add(o);let c=new Ye({color:14540253,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-2});for(let l=0;l<24;l++){let h=e.gridSlot(l),u=e.frame(h.s),d=e.surfaceY(h.s,h.d)+.018,f=new Le(new rn(2.4,.18),c);f.rotation.set(-Math.PI/2,u.heading,0,"YXZ"),f.position.set(h.x+u.tx*2.9,d,h.z+u.tz*2.9),t.add(f)}return t}function M_(r){let e=[["NITRO","#ff2d55","#fff"],["LIVE RACING","#101018","#ffcc00"],[r?"@"+r:"TikTok LIVE","#111","#19e0ff"],["TURBO GIFT","#ffcc00","#111"],["SPEED ENERGY","#19e0ff","#07080d"],["ROSE MOTORS","#fff","#c4161c"],["PODIUM","#2bd96f","#07080d"],["GP CITY","#8b5cf6","#fff"]];return on(2048,128,(t,n,i)=>{let s=n/e.length;e.forEach(([a,o,c],l)=>{t.fillStyle=o,t.fillRect(l*s,0,s,i),t.fillStyle=c,t.font=`italic 900 ${i*.5}px "Russo One", "Arial Black", sans-serif`,t.textAlign="center",t.textBaseline="middle",t.fillText(a,l*s+s/2,i/2+2,s-20)})})}function S_(r,e,t,n){let i=new Ke,s=e.runoff;if(t==="city"){let a=new Ye({map:Xn("b_concrete_c",{srgb:!0,gfx:r}),roughness:.9,color:14277081});a.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * vec2(0.5, 0.25);
#endif`)};let o=new Ye({map:M_(n),roughness:.55});o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.y / 64.0, uv.x);
#endif`)};for(let c of[-1,1]){let l=p=>c*(p+s),h=Pi(e,[l,l],{yOff:p=>p===0?0:1.05}),u=h.attributes.uv;for(let p=0;p<u.count;p++)u.setX(p,p%2),c>0&&u.setY(p,-u.getY(p));Ba(h,c<0),h.computeVertexNormals(),h.computeBoundingSphere();let d=new Le(h,o);d.receiveShadow=!0,d.castShadow=!0,i.add(d);let f=Pi(e,[p=>c*(p+s),p=>c*(p+s+.55)],{yOff:1.05});Ba(f,c>0),f.computeBoundingSphere();let m=new Le(f,a);m.receiveShadow=!0,i.add(m);let b=Pi(e,[p=>c*(p+s+.55),p=>c*(p+s+.55)],{yOff:p=>p===0?1.05:-1.2});Ba(b,c<0),b.computeVertexNormals(),b.computeBoundingSphere();let g=new Le(b,a);g.castShadow=!0,i.add(g)}i.add(w_(r,e))}else if(t==="snow"){let a=new Ye({map:Xn("t_snow_c",{srgb:!0,gfx:r}),roughness:.85});a.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.15;
#endif`)};for(let o of[-1,1]){let c=[0,.4,.9,1.5,2.3,3.4],l=[0,.55,1.05,1.35,1.2,-.6],h=c.map(f=>m=>o*(m+s+f)),u=Pi(e,h,{yOff:f=>l[f]});Ba(u,o>0),u.computeVertexNormals(),u.computeBoundingSphere();let d=new Le(u,a);d.receiveShadow=!0,d.castShadow=!0,i.add(d)}i.add(T_(r,e,16738816))}else{let a=new Ye({map:Xn("t_dirt_c",{srgb:!0,gfx:r}),roughness:.95,color:13616304});a.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = uv * 0.15;
#endif`)};for(let o of[-1,1]){let c=[0,.5,1.2,2.2,3.4],l=[0,.4,.75,.6,-.8],h=Pi(e,c.map(d=>f=>o*(f+s+d)),{yOff:d=>l[d]});Ba(h,o>0),h.computeVertexNormals(),h.computeBoundingSphere();let u=new Le(h,a);u.receiveShadow=!0,i.add(u)}i.add(E_(r,e))}return i}function Ba(r,e){if(!e)return;let t=r.index.array;for(let n=0;n<t.length;n+=3){let i=t[n+1];t[n+1]=t[n+2],t[n+2]=i}r.index.needsUpdate=!0}function w_(r,e){let t=new Ke,n=e.runoff,i=new Jt(.1,3.2,.1);i.translate(0,1.6+1.05,0);let s=Math.floor(e.L/6)*2,a=new un(i,new Ye({color:10133672,metalness:.8,roughness:.4}),s),o=new Ae,c={},l=0;for(let h=0;h<e.L;h+=6)for(let u of[-1,1]){e.frame(h,c);let d=u*(c.w/2+n+.28);o.makeTranslation(c.x+c.nx*d,e.surfaceY(h,u*(c.w/2+n)),c.z+c.nz*d),a.setMatrixAt(l++,o)}if(a.count=l,a.castShadow=!0,t.add(a),r.q.detail>=.8){let h=on(64,64,(d,f,m)=>{d.clearRect(0,0,f,m),d.strokeStyle="rgba(200,205,210,0.9)",d.lineWidth=2;for(let b=-f;b<f*2;b+=16)d.beginPath(),d.moveTo(b,0),d.lineTo(b+m,m),d.stroke(),d.beginPath(),d.moveTo(b+m,0),d.lineTo(b,m),d.stroke()}),u=new $t({map:h,transparent:!0,alphaTest:.3,side:Pt,depthWrite:!1,fog:!0});u.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
#ifdef USE_MAP
vMapUv = vec2(uv.y / 1.2, uv.x * 2.6);
#endif`)};for(let d of[-1,1]){let f=g=>d*(g+n+.28),m=Pi(e,[f,f],{yOff:g=>g===0?1.05:4.2}),b=m.attributes.uv;for(let g=0;g<b.count;g++)b.setX(g,g%2);m.computeBoundingSphere(),t.add(new Le(m,u))}}return t}function T_(r,e,t){let n=new _i(.06,.06,2.2,6);n.translate(0,1.1,0);let i=new un(n,new Ye({color:t,roughness:.6}),800),s=new Ae,a={},o=0;for(let c=0;c<e.L&&o<800;c+=7){if(e.frame(c,a),Math.abs(a.k)<1/160)continue;let l=a.k>0?-1:1,h=l*(a.w/2+e.runoff+1.3);s.makeTranslation(a.x+a.nx*h,e.surfaceY(c,l*(a.w/2+e.runoff))+.9,a.z+a.nz*h),i.setMatrixAt(o++,s)}return i.count=o,i.castShadow=!0,i}function E_(r,e){let t=new ms(.36,.14,6,12);t.rotateX(Math.PI/2);let n=[];for(let l=0;l<3;l++){let h=t.clone();h.translate(0,.15+l*.28,0),n.push(h)}let i=A_(n),s=new un(i,new Ye({color:1381653,roughness:.85}),1600),a=new Ae,o={},c=0;for(let l=0;l<e.L&&c<1600;l+=1.05){if(e.frame(l,o),Math.abs(o.k)<1/120)continue;let h=o.k>0?-1:1,u=h*(o.w/2+e.runoff+.4);a.makeTranslation(o.x+o.nx*u,e.surfaceY(l,h*(o.w/2+e.runoff)),o.z+o.nz*u),s.setMatrixAt(c++,a)}return s.count=c,s.castShadow=!0,s.receiveShadow=!0,s}function A_(r){let e=0,t=0;for(let h of r)e+=h.attributes.position.count,t+=h.index?h.index.count:h.attributes.position.count;let n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*2),a=new Uint32Array(t),o=0,c=0;for(let h of r){n.set(h.attributes.position.array,o*3),h.attributes.normal&&i.set(h.attributes.normal.array,o*3),h.attributes.uv&&s.set(h.attributes.uv.array,o*2);let u=h.index?h.index.array:[...Array(h.attributes.position.count).keys()];for(let d=0;d<u.length;d++)a[c+d]=u[d]+o;o+=h.attributes.position.count,c+=u.length}let l=new ot;return l.setAttribute("position",new Xe(n,3)),l.setAttribute("normal",new Xe(i,3)),l.setAttribute("uv",new Xe(s,2)),l.setIndex(new Xe(a,1)),l}function R_(r,e,t,n){let i=new Ke;i.name="gantry";let s=e.frame(4),a=s.w/2+e.runoff+.6,o=e.surfaceY(4,0),c=new Ye({color:2764085,metalness:.7,roughness:.35}),l=new Jt(.7,7.5,.7);l.translate(0,3.75,0);for(let b of[-1,1]){let g=new Le(l,c);g.position.set(s.x+s.nx*b*a,e.surfaceY(4,b*(a-.6)),s.z+s.nz*b*a),g.castShadow=!0,i.add(g)}let h=new Le(new Jt(a*2+.7,1.6,.8),c);h.position.set(s.x,o+7.2,s.z),h.rotation.y=s.heading,h.castShadow=!0,i.add(h);let u=on(1024,128,(b,g,p)=>{let x=b.createLinearGradient(0,0,g,0);x.addColorStop(0,"#ff2d55"),x.addColorStop(1,"#ff7a18"),b.fillStyle=x,b.fillRect(0,0,g,p),b.fillStyle="#fff",b.font='italic 900 78px "Russo One", "Arial Black", sans-serif',b.textAlign="center",b.textBaseline="middle",b.fillText("NITRO LIVE  \u2022  START / FINISH",g/2,p/2+4)},{repeat:!1}),d=new Le(new rn(a*2-1,1.25),new Ye({map:u,roughness:.5,emissive:16777215,emissiveMap:u,emissiveIntensity:.25,side:Pt}));d.position.set(s.x-s.tx*.42,o+7.2,s.z-s.tz*.42),d.rotation.y=s.heading+Math.PI,i.add(d);let f=[],m=new Ye({color:723726,roughness:.5});for(let b=0;b<5;b++){let g=(b-2)*1.1,p=new Le(new Jt(.8,1.9,.4),m),x=s.x+s.nx*g-s.tx*.6,w=s.z+s.nz*g-s.tz*.6;p.position.set(x,o+5.2,w),p.rotation.y=s.heading,i.add(p);let v=new Ye({color:2229253,emissive:16718382,emissiveIntensity:0});for(let S=0;S<2;S++){let M=new Le(new da(.26,16),v);M.position.set(x-s.tx*.21,o+5.65-S*.72,w-s.tz*.21),M.rotation.y=s.heading+Math.PI,i.add(M)}f.push(v)}return i.userData.setLights=(b,g)=>{f.forEach((p,x)=>{p.emissive.set(g?2293606:16718382),p.emissiveIntensity=g?4:x<b?5:0,p.color.set(g?405519:x<b?5574676:2229253)})},i.userData.setLights(0,!1),i}var Ha={time:{value:0},snow:{value:0}};var qu=new Map;async function C_(r){if(qu.has(r))return qu.get(r);let e=Ds("assets/props/"+r+".glb").then(t=>{let n=zu(t.scene),i=new Ht;for(let s of n)i.union(s.geometry.boundingBox);return{name:r,parts:n,box:i,height:i.max.y,radius:Math.max(i.max.x-i.min.x,i.max.z-i.min.z)/2}});return qu.set(r,e),e}function P_(r,{leaves:e,snow:t}){let n=r.clone();return e&&(n.alphaTest=.45,n.transparent=!1,n.side=Pt,n.depthWrite=!0),n.onBeforeCompile=i=>{i.uniforms.uTime=Ha.time,i.uniforms.uSnow=Ha.snow,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
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
        }`)},n.customProgramCacheKey=()=>"scn"+(e?"L":"S"),n}var dm=new Ae,Xu=new nn,I_=new L,Ku=class{constructor(e,t,n,{cast:i=!0,snow:s=!1}={}){this.prop=e,this.max=t,this.n=0,this.M=new Float32Array(t*16),this.C=new Float32Array(t*4),this.meshes=e.parts.map(a=>{let o=a.material.alphaTest>0||a.material.transparent||a.material.name==="leaves",c=new un(a.geometry,P_(a.material,{leaves:o,snow:s}),t);return c.count=0,c.frustumCulled=!1,c.castShadow=i,c.receiveShadow=!0,c.instanceMatrix.setUsage(Pn),n.add(c),c})}add(e,t,n,i,s){if(this.n>=this.max)return;dm.makeRotationY(i).scale(I_.set(s,s,s)).setPosition(e,t,n),dm.toArray(this.M,this.n*16);let a=this.prop.radius*s,o=this.prop.height*s;this.C.set([e,t+o*.5,n,Math.max(a,o*.5)],this.n*4),this.n++}cull(e,t,n,i,s){let a=0,o=t.x,c=t.z,l=n*n,h=i*i,u=this.meshes.map(d=>d.instanceMatrix.array);for(let d=0;d<this.n;d++){let f=d*4,m=this.C[f]-o,b=this.C[f+2]-c,g=m*m+b*b;if(!(g>h)&&(Xu.center.set(this.C[f],this.C[f+1],this.C[f+2]),Xu.radius=this.C[f+3],!!e.intersectsSphere(Xu)))if(g<l){for(let p of u)p.set(this.M.subarray(d*16,d*16+16),a*16);a++}else s&&s.push(d,this)}for(let d of this.meshes)d.count=a,d.instanceMatrix.needsUpdate=!0;return a}dispose(e){for(let t of this.meshes)e.remove(t),t.material.dispose(),t.dispose()}},Yu=class{constructor(e,t,n,i){this.props=t,this.max=i;let s=t.length,a=256*s,o=512,c=new tn(a*2,o*2,{samples:0,generateMipmaps:!0,minFilter:fn}),l=new vi;l.environment=e.scene.environment,l.environmentIntensity=e.scene.environmentIntensity||1,l.add(new xs(14674431,3815978,.6));let h=new Ei(16777215,2.2);h.position.set(.4,1,.8),l.add(h);let u=e.renderer,d=u.toneMapping,f=u.getClearColor(new Se),m=u.getClearAlpha();u.toneMapping=dn,u.setRenderTarget(c),u.setClearColor(0,0),u.clear(),t.forEach((x,w)=>{let v=new Ke;for(let y of x.parts){let E=y.material.clone();E.alphaTest=.4,E.transparent=!1,E.side=Pt,v.add(new Le(y.geometry,E))}l.add(v);let S=x.height,M=x.radius*2,A=new ni(-M/2,M/2,S,0,-100,100);A.position.set(0,0,20),A.lookAt(0,0,0),c.viewport.set(w*512,0,512,1024),c.scissor.set(w*512,0,512,1024),c.scissorTest=!0,u.setRenderTarget(c),u.render(l,A),l.remove(v),x.bw=M,x.bh=S}),c.scissorTest=!1,u.setRenderTarget(null),u.setClearColor(f,m),u.toneMapping=d,this.rt=c;let b=new rn(1,1);b.translate(0,.5,0);let g=new vs().copy(b);this.aPos=new Ot(new Float32Array(i*4),4).setUsage(Pn),this.aSize=new Ot(new Float32Array(i*2),2).setUsage(Pn),g.setAttribute("ipos",this.aPos),g.setAttribute("isize",this.aSize),g.instanceCount=0;let p=Ha.snow;this.mat=new Bt({uniforms:Object.assign(Er.clone(be.fog),{atlas:{value:c.texture},cols:{value:s},uSnow:p}),vertexShader:`
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
        }`,fog:!0}),this.mesh=new Le(g,this.mat),this.mesh.frustumCulled=!1,n.add(this.mesh),this.list=[],this.geo=g}begin(){this.list.length=0}push(e,t){this.list.push(e,t)}commit(){let e=Math.min(this.max,this.list.length/2),t=this.aPos.array,n=this.aSize.array;for(let i=0;i<e;i++){let s=this.list[i*2],a=this.list[i*2+1],o=a.M,c=s*16,l=Math.hypot(o[c],o[c+1],o[c+2]);t[i*4]=o[c+12],t[i*4+1]=o[c+13],t[i*4+2]=o[c+14],t[i*4+3]=a.impIndex,n[i*2]=a.prop.bw*l,n[i*2+1]=a.prop.bh*l}this.geo.instanceCount=e,this.aPos.needsUpdate=!0,this.aSize.needsUpdate=!0}dispose(e){e.remove(this.mesh),this.geo.dispose(),this.mat.dispose(),this.rt.dispose()}},fm={offroad:{trees:[["pine",3],["fir",3],["noblefir",2],["birch",1.5],["birch2",1],["maple",1],["oak",1],["deadtree",.4]],small:[["shrub",2],["bush",2],["boulder1",.7],["boulder2",.8],["boulder3",1],["stone1",1.2],["stone2",.8],["log",.6]],density:1,snow:0},snow:{trees:[["fir",4],["noblefir",3],["pine",3],["deadtree",.6],["birch2",.4]],small:[["shrub",2],["boulder1",1],["boulder2",.6],["boulder3",1.2],["stone1",1],["log",.5]],density:.9,snow:1},city:{trees:[["maple",2],["oak",2],["birch",1],["birchgold",1]],small:[["bush",2]],density:.3,snow:0}},za=["office1","office1b","office5","office5b","artdeco","brutal","public1","resid2","resid3","resid4","harlem","lowrise","lowrise2","classic2","commercial","flatcomplex","chicago1","chicago2"],ju=["empire","chrysler","woolworth","metlife","nytimes","sky1","sky2","sky3","sky4"];function pm(r,e){let t=0;for(let[,i]of r)t+=i;let n=e*t;for(let[i,s]of r)if((n-=s)<=0)return i;return r[0][0]}async function mm(r,e,t,n,i){let s=r.q,a=r.scene,o=fm[t]||fm.offroad;Ha.snow.value=o.snow;let c=Yc(99+t.length),l=c.rnd,h=[...new Set([...o.trees.map(F=>F[0]),...o.small.map(F=>F[0]),...t==="city"?[...za,...ju,"jersey"]:[]])],u={},d=0;await Promise.all(h.map(F=>C_(F).then(j=>{u[F]=j,i&&i(++d/h.length)})));let f={},m=(F,j,G)=>f[F]||(f[F]=new Ku(u[F],j,a,{snow:o.snow>0,...G})),b=n.field,g={},p=F=>e.halfWidth(F)+e.runoff,x=b.radius+450,w=Math.round((t==="city"?1100:5200)*s.trees),v=Math.round((t==="city"?250:2400)*s.trees),S=t==="city"?new Set:null,M=new Map,A=(F,j)=>Math.floor(F/8)+","+Math.floor(j/8);t==="city"&&E();let y=(F,j,G)=>{let U=0,J=0;for(;U<j&&J<j*8;){J++;let I,V;if(l()<G){let de=l()*e.L,Q=e.frame(de),ve=l()<.5?-1:1,Ge=p(de)+4+l()**1.6*160;I=Q.x+Q.nx*ve*Ge,V=Q.z+Q.nz*ve*Ge}else{let de=l()*Math.PI*2,Q=Math.sqrt(l())*x;I=b.cx+Math.cos(de)*Q,V=b.cz+Math.sin(de)*Q}let ie=n.height(I,V,g);if(g.i>=0&&(g.dist<p(g.s)+3.5||al(e,g.s,g.d))||M.has(A(I,V)))continue;let re=t==="city"?1:Kt(-.35,.25,c.fbm(I/180,V/180,3));if(l()>re*o.density+.08)continue;let ce=n.height(I+3,V),X=n.height(I,V+3);if(Math.hypot(ce-ie,X-ie)/3>.75)continue;let W=pm(F,l()),le=.75+l()*.5;m(W,j+50).add(I,ie-.25,V,l()*Math.PI*2,le),U++}};y(o.trees,w,t==="city"?.2:.55),y(o.small,v,.7);function E(){let F=(j,G,U,J,I=3)=>{let V=u[j];if(!V)return!1;let ie=(V.box.max.x-V.box.min.x)/2+I,re=(V.box.max.z-V.box.min.z)/2+I,ce=Math.cos(J),X=Math.sin(J),W=[];for(let de of[-1,-.5,0,.5,1])for(let Q of[-1,-.5,0,.5,1])W.push([G+de*ie*ce+Q*re*X,U-de*ie*X+Q*re*ce]);for(let[de,Q]of W)if(n.height(de,Q,g),g.i>=0&&(g.dist<p(g.s)+5.5||al(e,g.s,g.d))||M.has(A(de,Q)))return!1;for(let[de,Q]of W)M.set(A(de,Q),1);for(let de=-1;de<=1;de+=.25)for(let Q=-1;Q<=1;Q+=.25)M.set(A(G+de*ie*ce+Q*re*X,U-de*ie*X+Q*re*ce),1);let le=1/0;for(let[de,Q]of W)le=Math.min(le,n.height(de,Q));return m(j,60,{cast:!0}).add(G,le-.6,U,J,1),!0};for(let j of[-1,1])for(let G=0;G<e.L;G+=6){let U=e.frame(G),J=za[Math.floor(l()*za.length)],I=u[J],V=(I.box.max.z-I.box.min.z)/2,ie=p(G)+9.5+V,re=Math.atan2(U.tx,U.tz)+(j>0?Math.PI/2:-Math.PI/2);F(J,U.x+U.nx*j*ie,U.z+U.nz*j*ie,re+(l()<.5?0:Math.PI),2)&&(G+=(I.box.max.x-I.box.min.x)*.7)}for(let j=0;j<700;j++){let G=l()*Math.PI*2,U=100+Math.sqrt(l())*(b.radius+600),J=b.cx+Math.cos(G)*U,I=b.cz+Math.sin(G)*U,V=Math.round(J/48)*48,ie=Math.round(I/48)*48;F(za[Math.floor(l()*za.length)],V,ie,Math.floor(l()*4)*Math.PI/2,5)}for(let j=0;j<70;j++){let G=j/70*Math.PI*2+l()*.08,U=b.radius+900+l()*1300,J=b.cx+Math.cos(G)*U,I=b.cz+Math.sin(G)*U,V=ju[Math.floor(l()*ju.length)];m(V,30,{cast:!1}).add(J,n.height(J,I)-2,I,l()*Math.PI*2,.7+l()*.5)}for(let j of[-1,1])for(let G=0;G<e.L;G+=13+l()*6){let U=e.frame(G),J=p(G)+4.2,I=U.x+U.nx*j*J,V=U.z+U.nz*j*J;M.has(A(I,V))||(n.height(I,V,g),!(g.dist<p(g.s)+3.2||al(e,g.s,g.d))&&m(pm(o.trees,l()),900).add(I,n.height(I,V)-.2,V,l()*6.28,.6+l()*.25))}}let R=o.trees.map(F=>F[0]).filter(F=>f[F]);R.forEach((F,j)=>{f[F].impIndex=j,f[F].isTree=!0});let P=new Yu(r,R.map(F=>u[F]),a,8e3),D=new Hi,B=new Ae,N=0,k=s.detail>=1.2?260:s.detail>=1?190:s.detail>=.8?130:85,ee=s.dist*.95;return{groups:f,imp:P,props:u,update(F,j,G){if(Ha.time.value+=F,N+=F,!(!G&&N<.2)){N=0,B.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),D.setFromProjectionMatrix(B),P.begin();for(let U of Object.values(f))U.cull(D,j.position,U.isTree?k:ee,ee*(U.isTree?1:U.prop.height>60?3:.8),U.isTree?P:null);P.commit()}},dispose(){for(let F of Object.values(f))F.dispose(a);P.dispose(a)}}}var gm=4,bm=4.2;function L_(){let r=new Ke,e=new Le(new _i(.016,.02,1.25,6),new Ye({color:2236966,metalness:.6,roughness:.4}));e.position.y=.5,e.castShadow=!0,r.add(e);let t=on(128,96,(o,c,l)=>{for(let h=0;h<6;h++)for(let u=0;u<8;u++)o.fillStyle=(u+h)%2?"#111":"#f4f4f4",o.fillRect(u*16,h*16,16,16)},{repeat:!1}),n=new rn(.95,.66,14,6);n.translate(.475,0,0);let i=new Ye({map:t,side:Pt,roughness:.8}),s={value:0};i.onBeforeCompile=o=>{o.uniforms.fTime=s,o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
uniform float fTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        float k = position.x / 0.95;
        transformed.z += (sin(position.x * 7.0 - fTime * 13.0) * 0.09 + sin(position.y * 5.0 + position.x * 3.0 - fTime * 9.0) * 0.03) * k;
        transformed.y -= k * k * 0.08;`)};let a=new Le(n,i);return a.position.y=.8,a.castShadow=!0,r.add(a),r.userData.time=s,r}var ll=class{constructor(e,t){this.grp=new Ke,this.grp.name="marshal",this.track=t,this.wave=0,this.ready=!1,this.gone=!1;let n=t.frame(gm);this.grp.position.set(n.x+n.nx*bm,t.surfaceY(gm,0)+8,n.z+n.nz*bm),this.grp.rotation.y=n.heading+Math.PI,this.toCentre=new L(-n.nx,0,-n.nz),this.flag=L_(),this.grp.add(this.flag),this.a=new L,this.b=new L,this.m=new Ae,this.load(e)}async load(e){let t,n;try{[t,n]=await Promise.all([sl("racergirl"),sl("rider")])}catch{return}if(this.gone)return;let i=Is(t.scene);i.updateMatrixWorld(!0),i.traverse(h=>{h.isSkinnedMesh&&(h.skeleton.update(),h.computeBoundingBox()),h.isMesh&&(h.castShadow=!0,h.frustumCulled=!1)});let s=new Ht().setFromObject(i),a=1.72/Math.max(.1,s.max.y-s.min.y);i.scale.setScalar(a),i.position.y=-s.min.y*a,this.grp.add(i),this.mixer=new ii(i);let o=t.animations.find(h=>/idle/i.test(h.name))||t.animations[0],c=n.animations.filter(h=>h.duration>1)[0];this.idle=o&&this.mixer.clipAction(o),this.cheer=c&&this.mixer.clipAction(Gu(c,n.scene,t.scene)),this.idle&&this.idle.play();let l=h=>{let u=null;return i.traverse(d=>{!u&&d.isBone&&new RegExp(h,"i").test(d.name)&&(u=d)}),u};this.hand=l("R_Hand"),this.fore=l("R_Forearm"),this.ready=!0}update(e){if(this.flag.userData.time.value+=e,!this.ready)return;let t=this.wave>0;if(this.wave>0&&(this.wave-=e),t!==this.waving&&this.cheer){this.waving=t;let n=t?this.cheer:this.idle,i=t?this.idle:this.cheer;n&&(n.reset(),n.play(),n.fadeIn(.35)),i&&i.fadeOut(.35)}if(this.mixer.update(e),this.hand&&this.fore){this.grp.updateMatrixWorld(!0),this.hand.getWorldPosition(this.a),this.fore.getWorldPosition(this.b);let n=this.b.subVectors(this.a,this.b).normalize().multiplyScalar(.7).add({x:0,y:.8,z:0}).normalize(),i=this.toCentre.clone().addScaledVector(n,-this.toCentre.dot(n)).normalize(),s=new L().crossVectors(i,n);this.m.makeBasis(i,n,s).setPosition(this.a),this.m.premultiply(this.grp.matrixWorld.clone().invert()),this.m.decompose(this.flag.position,this.flag.quaternion,this.flag.scale),this.flag.position.addScaledVector(n.transformDirection(this.grp.matrixWorld.clone().invert()),-.35)}else this.flag.position.set(.35,1.2,.2)}dispose(){this.gone=!0,this.mixer&&this.mixer.stopAllAction()}};var xm={city:{id:"city",width:17,runoff:2.5,bankK:0,bankMax:0,sectors:12,path:[{s:260,adj:!0},{r:30,a:90},{s:250},{r:26,a:-90},{s:180},{r:26,a:90},{s:330},{r:120,a:70},{s:150},{r:90,a:20},{s:650},{r:19,a:180},{s:120},{r:24,a:-90},{s:700,adj:!0},{r:45,a:50},{s:70},{r:45,a:-30},{s:90},{r:40,a:70},{s:250}],height:[[0,0],[.12,1],[.25,5],[.36,9],[.47,8],[.58,3],[.7,0],[.8,-2],[.92,-1]],zones:[{seg:14,from:.25,to:.7,type:"tunnel"}]},snow:{id:"snow",width:15,runoff:4,bankK:5,bankMax:.09,sectors:12,path:[{s:250,adj:!0},{r:100,a:60},{s:180},{r:80,a:-50},{s:120},{r:70,a:80},{s:250},{r:110,a:60},{s:200},{r:90,a:-40},{s:150},{r:26,a:150},{s:220},{r:80,a:-50},{s:500},{r:90,a:60},{s:300,adj:!0},{r:55,a:90},{s:230}],height:[[0,0],[.15,6],[.3,16],[.45,28],[.52,32],[.62,24],[.75,12],[.88,2],[.95,0]],jumps:[{seg:14,at:.55,h:2}],zones:[]},offroad:{id:"offroad",width:15,runoff:5,bankK:4,bankMax:.1,sectors:12,path:[{s:200,adj:!0},{r:50,a:70},{s:160},{r:40,a:-90},{s:220},{r:40,a:120},{s:150},{r:45,a:-50},{s:160},{r:50,a:100},{s:260},{r:60,a:50},{s:140},{r:50,a:40},{s:250},{r:60,a:-30},{s:200,adj:!0},{r:50,a:150},{s:180}],height:[[0,0],[.1,6],[.22,18],[.3,26],[.38,24],[.45,8],[.5,0],[.55,2],[.64,14],[.72,16],[.82,9],[.92,2]],jumps:[{seg:4,at:.6,h:3.6},{seg:14,at:.55,h:3.8},{seg:16,at:.45,h:3.2}],zones:[{seg:10,from:.4,to:.62,type:"water"}]}},vm={};function hl(r){return xm[r]||(r="city"),vm[r]||(vm[r]=cm(xm[r]))}var ul=class{constructor(e,t){this.gfx=e,this.loc=t,this.track=hl(t),this.root=new Ke,this.ready=!1}async build(e=()=>{},{hostName:t=""}={}){let n=this.gfx,i=performance.now(),s=async(a,o)=>(e(a),await new Promise(c=>setTimeout(c,0)),o());this.sky=await s(.05,()=>Ap(n,this.loc)),this.loc==="city"?(n.scene.fog.far=n.q.dist*2.6,n.camera.far=6500,n.camera.updateProjectionMatrix()):(n.camera.far=n.q.dist*2.4,n.camera.updateProjectionMatrix()),this.hm=await s(.12,()=>new ol(this.track,this.loc)),this.terrain=await s(.25,()=>rm(n,this.track,this.loc,this.hm)),this.root.add(this.terrain),this.road=await s(.45,()=>um(n,this.track,this.loc,{hostName:t})),this.root.add(this.road),this.gantry=this.road.getObjectByName("gantry"),this.venue=nm(n,this.track,this.loc,{hostName:t}),this.root.add(this.venue),this.podium=this.venue.userData.podium,this.crowd=this.venue.userData.crowd,this.marshal=new ll(n,this.track),this.root.add(this.marshal.grp),n.scene.add(this.root),e(.5),this.scenery=await mm(n,this.track,this.loc,this.hm,a=>e(.5+a*.4)),await Pp(),e(1);try{await n.renderer.compileAsync(n.scene,n.camera)}catch{}return this.ready=!0,this.buildMs=Math.round(performance.now()-i),this}setLights(e,t){this.gantry&&this.gantry.userData.setLights(e,t)}update(e,t,n){if(!this.ready)return;this.scenery.update(e,t),this.marshal.update(e);let i=this.crowd.userData;i.uTime.value+=e,i.uHype.value+=((this.hype||0)-i.uHype.value)*Math.min(1,e*2),n&&this.sky.follow(n)}dispose(){let e=this.gfx.scene;this.scenery&&this.scenery.dispose(),this.marshal&&this.marshal.dispose(),e.remove(this.root),this.root.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose())}),this.sky&&this.sky.dispose()}};var j1=1/60;function Yi(r,e,t={}){if(t.boost=1,t.slow=1,t.flat=0,t.freeze=!1,t.skid=0,t.drunk=0,t.reverse=!1,t.spin=0,t.shield=!1,t.tornado=0,t.ink=!1,t.fog=0,t.rainbow=!1,t.meteor=!1,r)for(let n of r){if(e<n.t0||e>=n.t1)continue;let i=(e-n.t0)/Math.max(.01,n.t1-n.t0);switch(n.k){case"boost":t.boost=Math.max(t.boost,n.v||2);break;case"slow":t.slow=Math.min(t.slow,n.v||.5);break;case"flat":t.flat=n.side||1;break;case"freeze":t.freeze=!0;break;case"skid":t.skid=Math.max(t.skid,Math.min(1,(1-i)*1.4));break;case"drunk":t.drunk=Math.max(t.drunk,Math.min(1,i*6,(1-i)*4));break;case"reverse":t.reverse=!0;break;case"spin":t.spin=Math.max(t.spin,1-i);break;case"shield":t.shield=!0;break;case"tornado":t.tornado=Math.max(t.tornado,i);break;case"ink":t.ink=!0;break;case"fog":t.fog=Math.max(t.fog,Math.min(1,i*5,(1-i)*4));break;case"rainbow":t.rainbow=!0;break;case"meteor":t.meteor=!0;break}}return t}function ym(r,e){let t=r.vmax*e.boost*e.slow;return e.flat&&(t*=.7),(e.freeze||e.tornado)&&(t=3),e.spin&&(t*=.6),t}var _m={};function $u(r,e,t=0){let n=r.frame(e+25,_m),i=n.w/2-2;return Math.max(-i,Math.min(i,Math.sign(n.k)*Math.min(1,Math.abs(n.k)*40)*i*.45+t*i*.5))}function Mm(r,e,t,n,i){if(n<14)return!1;let s=n*n/(2*t.brake)+14;for(let a=4;a<s;a+=6){let o=Math.abs(e.frame(r.s+a,_m).k);if(o<1e-4)continue;let c=Math.sqrt(t.latMax*1.05/o)+2;if(n>Math.sqrt(c*c+2*t.brake*.9*Math.max(0,a-6)))return!0}return!1}function Sm(r,e){let t=Math.min(e.sectors-1,Math.floor(r.s/e.L*e.sectors));return t===(r.sector+1)%e.sectors&&(r.sector=t,t===0)?(r.lap++,"lap"):null}var dl=[{id:"join",title:"\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0433\u043E\u043D\u043A\u0430\u0445",short:"\u0423\u0447\u0430\u0441\u0442\u0438\u0435",icon:"\u{1F94A}",kind:"join",gift:{id:6007,name:"Boxing Gloves"},count:1,desc:"\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u0434\u043E\u0441\u0442\u0443\u043F \u043A \u0438\u0433\u0440\u0435"},{id:"boost2",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD72",short:"\xD72",icon:"\u26A1",kind:"self",fx:"boost",mul:2,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:3},gift:{id:5655,name:"Rose"},count:1},{id:"boost3",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD73",short:"\xD73",icon:"\u{1F525}",kind:"self",fx:"boost",mul:3,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:3},gift:{id:5487,name:"Finger Heart"},count:1},{id:"boost4",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD74",short:"\xD74",icon:"\u{1F680}",kind:"self",fx:"boost",mul:4,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:4},gift:{id:5879,name:"Doughnut"},count:1},{id:"boost5",title:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435 \xD75",short:"\xD75",icon:"\u2604\uFE0F",kind:"self",fx:"boost",mul:5,param:{label:"\u0441\u0435\u043A",min:1,max:30,step:1,def:5},gift:{id:5585,name:"Confetti"},count:1},{id:"shield",title:"\u0429\u0438\u0442 \u043E\u0442 \u043F\u0430\u043A\u043E\u0441\u0442\u0435\u0439",short:"\u0429\u0438\u0442",icon:"\u{1F6E1}\uFE0F",kind:"self",fx:"shield",param:{label:"\u0441\u0435\u043A",min:3,max:60,step:1,def:12},gift:{id:5658,name:"Perfume"},count:1},{id:"teleport",title:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442 \u0432\u043F\u0435\u0440\u0451\u0434",short:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442",icon:"\u2728",kind:"self",fx:"teleport",param:{label:"\u043C",min:50,max:1500,step:50,def:200},gift:{id:5659,name:"Paper Crane"},count:1},{id:"repair",title:"\u0420\u0435\u043C\u043E\u043D\u0442: \u0441\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u043F\u0430\u043A\u043E\u0441\u0442\u0438",short:"\u0420\u0435\u043C\u043E\u043D\u0442",icon:"\u{1F527}",kind:"self",fx:"repair",gift:{id:7934,name:"Heart Me"},count:1},{id:"gold",title:"\u0417\u043E\u043B\u043E\u0442\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0433\u043E\u043D\u043A\u0438",short:"\u0417\u043E\u043B\u043E\u0442\u043E",icon:"\u{1F451}",kind:"self",fx:"gold",gift:{id:6097,name:"Little Crown"},count:1},{id:"rainbow",title:"\u0420\u0430\u0434\u0443\u0436\u043D\u044B\u0439 \u0441\u043B\u0435\u0434",short:"\u0420\u0430\u0434\u0443\u0433\u0430",icon:"\u{1F308}",kind:"self",fx:"rainbow",param:{label:"\u0441\u0435\u043A",min:5,max:120,step:5,def:30},gift:{id:6427,name:"Hat and Mustache"},count:1},{id:"slow",title:"\u0417\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C \u0442\u043E\u0433\u043E, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u0417\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C",icon:"\u{1F40C}",kind:"target",target:"ahead",fx:"slow",param:{label:"\u0441\u0435\u043A",min:1,max:20,step:1,def:4},gift:{id:5269,name:"TikTok"},count:1},{id:"skid",title:"\u0411\u0430\u043D\u0430\u043D\u043E\u0432\u0430\u044F \u043A\u043E\u0436\u0443\u0440\u0430: \u0437\u0430\u043D\u043E\u0441 \u0442\u043E\u043C\u0443, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u0417\u0430\u043D\u043E\u0441",icon:"\u{1F34C}",kind:"target",target:"ahead",fx:"skid",param:{label:"\u0441\u0435\u043A",min:1,max:10,step:1,def:3},gift:{id:59314,name:"Banana Peel"},count:1},{id:"flat",title:"\u041F\u0440\u043E\u043A\u043E\u043B\u043E\u0442\u044C \u0448\u0438\u043D\u0443 \u043B\u0438\u0434\u0435\u0440\u0443",short:"\u041F\u0440\u043E\u043A\u043E\u043B",icon:"\u{1F4CC}",kind:"target",target:"leader",fx:"flat",param:{label:"\u0441\u0435\u043A",min:2,max:30,step:1,def:6},gift:{id:8913,name:"Rosa"},count:1},{id:"rocket",title:"\u0420\u0430\u043A\u0435\u0442\u0430 \u0432 \u043B\u0438\u0434\u0435\u0440\u0430",short:"\u0420\u0430\u043A\u0435\u0442\u0430",icon:"\u{1F4A5}",kind:"target",target:"leader",fx:"spin",param:{label:"\u0441\u0435\u043A",min:1,max:4,step:.5,def:1.6},gift:{id:11574,name:"Gold Medal"},count:1},{id:"ink",title:"\u041A\u043B\u044F\u043A\u0441\u0430 \u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433\u0430 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0432\u0441\u0435\u043C",short:"\u041A\u043B\u044F\u043A\u0441\u0430",icon:"\u{1F419}",kind:"others",fx:"ink",param:{label:"\u0441\u0435\u043A",min:2,max:15,step:1,def:5},gift:{id:14382,name:"Floating Octopus"},count:1},{id:"drunk",title:"\u041D\u0430\u043F\u043E\u0438\u0442\u044C \u0432\u0441\u0435\u0445 (\u043A\u0440\u043E\u043C\u0435 \u0442\u0435\u0431\u044F)",short:"\u041D\u0430\u043F\u043E\u0438\u0442\u044C",icon:"\u{1F37A}",kind:"others",fx:"drunk",param:{label:"\u0441\u0435\u043A",min:3,max:30,step:1,def:8},gift:{id:5509,name:"Sunglasses"},count:1},{id:"fog",title:"\u0413\u0443\u0441\u0442\u043E\u0439 \u0442\u0443\u043C\u0430\u043D \u0432\u0441\u0435\u043C",short:"\u0422\u0443\u043C\u0430\u043D",icon:"\u{1F32B}\uFE0F",kind:"others",fx:"fog",param:{label:"\u0441\u0435\u043A",min:3,max:30,step:1,def:8},gift:{id:14041,name:"Love Rain"},count:1},{id:"freeze",title:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u0438\u0442\u044C \u0432\u0441\u0435\u0445",short:"\u0417\u0430\u043C\u043E\u0440\u043E\u0437\u043A\u0430",icon:"\u{1F9CA}",kind:"others",fx:"freeze",param:{label:"\u0441\u0435\u043A",min:1,max:6,step:.5,def:2},gift:{id:7168,name:"Money Gun"},count:1},{id:"reverse",title:"\u041F\u0435\u0440\u0435\u043F\u0443\u0442\u0430\u0442\u044C \u0440\u0443\u043B\u044C \u0432\u0441\u0435\u043C",short:"\u0420\u0435\u0432\u0435\u0440\u0441",icon:"\u{1F504}",kind:"others",fx:"reverse",param:{label:"\u0441\u0435\u043A",min:2,max:15,step:1,def:5},gift:{id:5897,name:"Swan"},count:1},{id:"swap",title:"\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043C\u0435\u0441\u0442\u0430\u043C\u0438 \u0441 \u0442\u0435\u043C, \u043A\u0442\u043E \u0432\u043F\u0435\u0440\u0435\u0434\u0438",short:"\u041E\u0431\u043C\u0435\u043D",icon:"\u{1F500}",kind:"target",target:"ahead",fx:"swap",gift:{id:5978,name:"Train"},count:1},{id:"tornado",title:"\u0422\u043E\u0440\u043D\u0430\u0434\u043E \u0443\u043D\u043E\u0441\u0438\u0442 \u043B\u0438\u0434\u0435\u0440\u0430 \u043D\u0430\u0437\u0430\u0434",short:"\u0422\u043E\u0440\u043D\u0430\u0434\u043E",icon:"\u{1F32A}\uFE0F",kind:"target",target:"leader",fx:"tornado",param:{label:"\u043C",min:50,max:800,step:50,def:250},gift:{id:11046,name:"Galaxy"},count:1},{id:"meteor",title:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u043D\u044B\u0439 \u0434\u043E\u0436\u0434\u044C: \u0432\u0441\u0435\u0445 \u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u044C",short:"\u041C\u0435\u0442\u0435\u043E\u0440\u0438\u0442\u044B",icon:"\u2604\uFE0F",kind:"others",fx:"meteor",param:{label:"\u0441\u0435\u043A",min:2,max:20,step:1,def:6},gift:{id:6563,name:"Meteor Shower"},count:1},{id:"leader",title:"\u0421\u0440\u0430\u0437\u0443 \u0432 \u043B\u0438\u0434\u0435\u0440\u044B",short:"\u0412 \u043B\u0438\u0434\u0435\u0440\u044B",icon:"\u{1F984}",kind:"self",fx:"toleader",gift:{id:6942,name:"Unicorn Fantasy"},count:1},{id:"fireworks",title:"\u0421\u0430\u043B\u044E\u0442 \u043D\u0430\u0434 \u0442\u0440\u0430\u0441\u0441\u043E\u0439",short:"\u0421\u0430\u043B\u044E\u0442",icon:"\u{1F386}",kind:"world",fx:"fireworks",gift:{id:6090,name:"Fireworks"},count:1}],Fs=Object.fromEntries(dl.map(r=>[r.id,r]));function Ju(r,e){let t=r.param;if(!t)return r.title;let n=e??t.def;return t.label==="\u043C"?`${r.title} \u043D\u0430 ${n} \u043C`:`${r.title} \u043D\u0430 ${n} \u0441\u0435\u043A`}var D_=(()=>{let r=document.createElement("canvas");r.width=r.height=64;let e=r.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.4,"rgba(255,255,255,0.55)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,64,64);let n=new yi(r);return n.colorSpace=vt,n})(),Ns=class{constructor(e,t,{additive:n=!1,size:i=1,map:s=D_}={}){this.max=t,this.n=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.life=new Float32Array(t),this.max0=new Float32Array(t),this.col=new Float32Array(t*4),this.sz=new Float32Array(t),this.grow=new Float32Array(t);let a=new ot;this.aPos=new Xe(this.pos,3).setUsage(Pn),this.aCol=new Xe(this.col,4).setUsage(Pn),this.aSz=new Xe(this.sz,1).setUsage(Pn),a.setAttribute("position",this.aPos),a.setAttribute("color",this.aCol),a.setAttribute("size",this.aSz),this.mat=new Bt({uniforms:{map:{value:s},scale:{value:600}},vertexShader:`attribute float size; attribute vec4 color; varying vec4 vC; uniform float scale;
        void main() { vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * scale / max(1.0, -mv.z); gl_Position = projectionMatrix * mv; }`,fragmentShader:"uniform sampler2D map; varying vec4 vC; void main() { vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC.rgb, vC.a * t.a); }",transparent:!0,depthWrite:!1,blending:n?_r:Vi}),this.pts=new ps(a,this.mat),this.pts.frustumCulled=!1,e.add(this.pts),this.g=a}emit(e,t,n,i,s,a,o,c,l,h,u,d,f){let m=this.n<this.max?this.n++:Math.floor(Math.random()*this.max);this.pos.set([e,t,n],m*3),this.vel.set([i,s,a],m*3),this.life[m]=o,this.max0[m]=o,this.sz[m]=c,this.grow[m]=l,this.col.set([h,u,d,f],m*4)}update(e,t=0,n=1.5){let i=this.n;for(let s=0;s<i;s++){if(this.life[s]-=e,this.life[s]<=0){i--,s!==i&&(this.pos.copyWithin(s*3,i*3,i*3+3),this.vel.copyWithin(s*3,i*3,i*3+3),this.col.copyWithin(s*4,i*4,i*4+4),this.life[s]=this.life[i],this.max0[s]=this.max0[i],this.sz[s]=this.sz[i],this.grow[s]=this.grow[i],s--);continue}let a=Math.exp(-e*n);this.vel[s*3]*=a,this.vel[s*3+1]=this.vel[s*3+1]*a-t*e,this.vel[s*3+2]*=a,this.pos[s*3]+=this.vel[s*3]*e,this.pos[s*3+1]+=this.vel[s*3+1]*e,this.pos[s*3+2]+=this.vel[s*3+2]*e,this.sz[s]+=this.grow[s]*e}this.n=i,this.g.setDrawRange(0,i),this.aPos.needsUpdate=!0,this.aSz.needsUpdate=!0,this.aCol.needsUpdate=!0;for(let s=0;s<i;s++){let a=this.life[s]/this.max0[s];this.col[s*4+3]=Math.min(this.col[s*4+3],a*.9)}}dispose(e){e.remove(this.pts),this.g.dispose(),this.mat.dispose()}},wm={city:{dust:[.72,.72,.74],alpha:.5,always:!1},snow:{dust:[.95,.97,1],alpha:.75,always:!0},offroad:{dust:[.62,.52,.4],alpha:.55,always:!0}},fl=class{constructor(e){this.app=e,this.overlay=document.getElementById("fx"),this.screen={},this.built=!1}build(e,t){this.built&&this.dispose(),this.scene=e,this.smoke=new Ns(e,Math.round(1600*t.particles)),this.glow=new Ns(e,Math.round(900*t.particles),{additive:!0}),this.objs=new Map,this.snowfall=null,this.built=!0}update(e,t,n){if(!this.built||!t||!t.loaded)return;let i=wm[t.loc]||wm.city,s=this.app.gfx.q,a=this.app.gfx.camera.position;for(let o of t.entries.values()){let c=o.vis;if(!c)continue;let l=Math.hypot(c.x-a.x,c.z-a.z);if(l>160)continue;let h=Yi(o.fx,n,o._fx||(o._fx={})),u=[Math.sin(c.yaw),Math.cos(c.yaw)],d=[-u[1],u[0]],f=-2.1,m=c.flags&Fa,p=(c.flags&Cs?0:(i.always?Math.min(1,c.speed/30):0)+(m?1:0))*(l<60?1:.4)*s.particles;if(p>.05&&Math.random()<p*.9)for(let x of[-1,1]){let w=c.x+u[0]*f+d[0]*x*.8,v=c.z+u[1]*f+d[1]*x*.8,S=m&&!i.always?[.85,.85,.87]:i.dust;this.smoke.emit(w,c.y+.25,v,-u[0]*c.speed*.15+(Math.random()-.5)*2,.8+Math.random(),-u[1]*c.speed*.15+(Math.random()-.5)*2,1.2+Math.random()*.8,1.2,3.2,S[0],S[1],S[2],i.alpha)}if(h.boost>1)for(let x of[-1,1])for(let w=0;w<2;w++){let v=c.x+u[0]*(f-.3)+d[0]*x*.35,S=c.z+u[1]*(f-.3)+d[1]*x*.35,M=Math.random();this.glow.emit(v,c.y+.45,S,-u[0]*(6+h.boost*3),.2,-u[1]*(6+h.boost*3),.18+Math.random()*.12,.7+h.boost*.12,-1.5,1,.45+M*.4,.12+(h.boost>3?.6:0),.9)}if(h.flat&&Math.random()<.6&&this.glow.emit(c.x+d[0]*h.flat*.9+u[0]*1.3,c.y+.1,c.z+d[1]*h.flat*.9+u[1]*1.3,(Math.random()-.5)*4-u[0]*5,2+Math.random()*3,(Math.random()-.5)*4-u[1]*5,.35,.25,0,1,.75,.3,1),h.rainbow||o.fx.some(x=>x.k==="rainbow"&&n<x.t1)){let x=n*.8%1,w=new Se().setHSL(x,1,.55);this.glow.emit(c.x-u[0]*2.3,c.y+.5,c.z-u[1]*2.3,0,.1,0,1.4,1.4,.3,w.r,w.g,w.b,.8)}this.effectObjects(o,h,c,n,e)}if(t.loc==="snow"&&s.particles>.3)for(let o=0;o<6*s.particles;o++)this.smoke.emit(a.x+(Math.random()-.5)*60,a.y+14+Math.random()*6,a.z+(Math.random()-.5)*60,(Math.random()-.5)*1.5,-3-Math.random()*2,(Math.random()-.5)*1.5,6,.18,0,1,1,1,.85);this.smoke.update(e,0,1.2),this.glow.update(e,0,3)}effectObjects(e,t,n,i,s){let a=e.slot,o=this.objs.get(a),c={shield:t.shield,ice:t.freeze,tornado:t.tornado};o||(o={},this.objs.set(a,o));for(let[l,h]of Object.entries(c))h&&!o[l]&&(o[l]=this.makeObj(l),this.scene.add(o[l])),!h&&o[l]&&(this.scene.remove(o[l]),o[l].geometry.dispose(),o[l].material.dispose(),o[l]=null),o[l]&&(o[l].position.set(n.x,n.y+(l==="tornado"?0:.9),n.z),o[l].rotation.y=l==="tornado"?i*6:n.yaw,l==="shield"&&(o[l].material.uniforms.t.value=i))}makeObj(e){if(e==="shield"){let n=new Bt({uniforms:{t:{value:0}},transparent:!0,depthWrite:!1,blending:_r,vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float t; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)), 2.5); float w = 0.5+0.5*sin(t*6.0+vN.y*8.0); gl_FragColor = vec4(vec3(0.2,0.8,1.0)*(f*1.6+0.08*w), f*0.9+0.05); }"});return new Le(new Mi(3.1,24,16),n)}if(e==="ice")return new Le(new Jt(2.6,1.9,5.2),new jt({color:12577023,roughness:.08,metalness:0,transmission:0,transparent:!0,opacity:.55,clearcoat:1}));let t=new _i(6,1.2,22,16,6,!0);return t.translate(0,11,0),new Le(t,new $t({color:10134704,transparent:!0,opacity:.35,side:Pt,depthWrite:!1}))}carEffect(e,t,n){let i=n.fx;if(!i)return;let s=Fs[n.action],a=e.you===t.slot,o=n.byName||"";if(i.k==="blocked"){a&&Ct("\u{1F6E1}\uFE0F \u0429\u0438\u0442 \u043E\u0442\u0431\u0438\u043B \u043F\u0430\u043A\u043E\u0441\u0442\u044C!",{kind:"good"});return}if(a&&s){let l=["boost","shield","repair","gold","rainbow","toleader","teleport","swap"].includes(i.k);Ct(`${s.icon} ${s.title}${o?" \u2014 "+o:""}`,{kind:l?"good":"bad",ms:3e3}),this.app.settings.vibrate&&navigator.vibrate&&navigator.vibrate(l?[30]:[60,40,60]),!l&&e.chase&&(e.chase.shake=.8)}let c=t.vis;if(i.k==="spin"||i.k==="swap"||i.k==="toleader"||i.k==="teleport")for(let l=0;l<60;l++){let h=Math.random()*Math.PI*2,u=4+Math.random()*10;this.glow.emit(c.x,c.y+1,c.z,Math.cos(h)*u,Math.random()*8,Math.sin(h)*u,.8,1.2,0,i.k==="spin"?1:.4,i.k==="spin"?.5:.8,i.k==="spin"?.1:1,1)}}fireworks(e){if(!this.built)return;let t=this.app.gfx.camera,n=new L;t.getWorldDirection(n);for(let i=0;i<6;i++){let s=t.position.x+n.x*80+(Math.random()-.5)*80,a=t.position.z+n.z*80+(Math.random()-.5)*80,o=t.position.y+35+Math.random()*25,c=new Se().setHSL(Math.random(),1,.6);setTimeout(()=>{for(let l=0;l<90;l++){let h=Math.random()*2-1,u=Math.random()*6.28,d=14+Math.random()*6,f=Math.sqrt(1-h*h);this.glow.emit(s,o,a,f*Math.cos(u)*d,h*d,f*Math.sin(u)*d,1.6+Math.random(),1.1,-.3,c.r,c.g,c.b,1)}this.app.audio&&this.app.audio.sfx("firework")},i*350)}}screenFx(e,t){let n={ink:e.ink,frost:e.freeze,boostlines:e.boost>1,vignette:e.drunk>0||e.spin>0};for(let[s,a]of Object.entries(n)){if(a&&!this.screen[s]){let o=document.createElement("div");o.className=s,this.overlay.appendChild(o),this.screen[s]=o}if(!a&&this.screen[s]){let o=this.screen[s];this.screen[s]=null,o.style.transition="opacity .8s",o.style.opacity="0",setTimeout(()=>o.remove(),800)}}let i=this.app.gfx.canvas;e.drunk>0?(this.wob=(this.wob||0)+t,i.style.transform=`rotate(${Math.sin(this.wob*1.7)*3*e.drunk}deg) scale(${1+.04*e.drunk})`,i.style.filter=`blur(${(.6+Math.sin(this.wob*3.1)*.5)*e.drunk}px)`):i.style.transform&&(i.style.transform="",i.style.filter="")}flash(){let e=document.createElement("div");e.style.cssText="position:absolute;inset:0;background:#fff;opacity:.5;transition:opacity .5s",this.overlay.appendChild(e),requestAnimationFrame(()=>e.style.opacity="0"),setTimeout(()=>e.remove(),600)}clearScreen(){for(let t of Object.keys(this.screen))this.screen[t]&&(this.screen[t].remove(),this.screen[t]=null);let e=this.app.gfx.canvas;e.style.transform="",e.style.filter=""}dispose(){if(this.built){this.smoke.dispose(this.scene),this.glow.dispose(this.scene);for(let e of this.objs.values())for(let t of Object.values(e))t&&(this.scene.remove(t),t.geometry.dispose(),t.material.dispose());this.objs.clear(),this.built=!1}}};var F_={engine_low:"engine_low.wav",engine_high:"engine_high.wav",skid:"skid.wav",hit:"hit.mp3",crash:"crash.mp3",explosion:"explosion.mp3",splash:"splash.mp3",start:"start.mp3",horn:"horn.mp3",thud:"thud.mp3",pop:"pop.mp3"},Tm={city:{cyl:6,low:900,high:7470,pitch:1,growl:.35,turbo:.12,lp:5200,name:"V6 twin-turbo"},snow:{cyl:4,low:900,high:7470,pitch:1.05,growl:.4,turbo:.18,lp:4200,antilag:!0,name:"flat-4 turbo"},offroad:{cyl:8,low:900,high:7470,pitch:.8,growl:.6,turbo:0,lp:2800,name:"V8"}},pl=class{constructor(){this.ctx=null,this.buf={},this.ready=!1,this.engine=null,this.others=[]}unlock(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=this.ctx=new e({latencyHint:"interactive"});this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=3.5,n.attack.value=.004,n.release.value=.2,this.master.connect(n),n.connect(t.destination),this.engBus=t.createGain(),this.fxBus=t.createGain(),this.musicBus=t.createGain(),this.engBus.connect(this.master),this.fxBus.connect(this.master),this.musicBus.connect(this.master),this.applyVolumes(),lu.on("change",()=>this.applyVolumes());let i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=i.getChannelData(0),a=0;for(let o=0;o<s.length;o++){let c=Math.random()*2-1;a=.97*a+.03*c,s[o]=a*3.2}this.noise=i,this.load(),document.addEventListener("visibilitychange",()=>{this.ctx&&(document.hidden?this.ctx.suspend():this.ctx.resume())})}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(Qe.vol,e,.05),this.engBus.gain.setTargetAtTime(Qe.volEngine,e,.05),this.fxBus.gain.setTargetAtTime(Qe.volFx,e,.05),this.musicBus.gain.setTargetAtTime(Qe.volMusic,e,.05)}async load(){await Promise.all(Object.entries(F_).map(async([e,t])=>{try{let n=await fetch("assets/sfx/"+t).then(i=>i.arrayBuffer());this.buf[e]=await this.ctx.decodeAudioData(n)}catch{}})),this.ready=!0}sfx(e,t=1,n=1){if(!this.ctx||!this.buf[e]){e==="firework"&&this.ctx&&this.firework();return}let i=this.ctx.createBufferSource();i.buffer=this.buf[e],i.playbackRate.value=n;let s=this.ctx.createGain();s.gain.value=t,i.connect(s),s.connect(this.fxBus),i.start()}beep(e=880,t=.18,n=.35){if(!this.ctx)return;let i=this.ctx.currentTime,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="square",s.frequency.value=e;let o=this.ctx.createBiquadFilter();o.type="lowpass",o.frequency.value=2400,a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(n,i+.01),a.gain.setValueAtTime(n,i+t-.03),a.gain.linearRampToValueAtTime(0,i+t),s.connect(o),o.connect(a),a.connect(this.fxBus),s.start(i),s.stop(i+t+.02)}whoosh(e=.5){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noise;let i=this.ctx.createBiquadFilter();i.type="bandpass",i.Q.value=1.2,i.frequency.setValueAtTime(300,t),i.frequency.exponentialRampToValueAtTime(3500,t+.5);let s=this.ctx.createGain();s.gain.setValueAtTime(0,t),s.gain.linearRampToValueAtTime(e,t+.1),s.gain.exponentialRampToValueAtTime(.001,t+.9),n.connect(i),i.connect(s),s.connect(this.fxBus),n.start(t),n.stop(t+1)}firework(){let e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noise;let n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=900;let i=this.ctx.createGain();i.gain.setValueAtTime(.9,e),i.gain.exponentialRampToValueAtTime(.001,e+1.2),t.connect(n),n.connect(i),i.connect(this.fxBus),t.start(e),t.stop(e+1.3)}cheer(e=.4,t=5){if(!this.ctx)return;let n=this.ctx,i=n.sampleRate,s=Math.floor(i*t),a=n.createBuffer(2,s,i);for(let m=0;m<2;m++){let b=a.getChannelData(m);for(let g=0,p=t*38;g<p;g++){let x=Math.floor(Math.random()*s),w=Math.floor(i*(.005+Math.random()*.012)),v=.2+Math.random()*.45,S=w/4;for(let M=0;M<w&&x+M<s;M++)b[x+M]+=(Math.random()*2-1)*v*Math.exp(-M/S)}}let o=n.currentTime,c=n.createGain();c.gain.setValueAtTime(0,o),c.gain.linearRampToValueAtTime(e,o+.35),c.gain.setValueAtTime(e,o+t*.55),c.gain.linearRampToValueAtTime(0,o+t),c.connect(this.fxBus);let l=n.createBufferSource();l.buffer=a;let h=n.createBiquadFilter();h.type="bandpass",h.frequency.value=1700,h.Q.value=.45,l.connect(h),h.connect(c),l.start(o),l.stop(o+t);let u=n.createBufferSource();u.buffer=this.noise,u.loop=!0;let d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=520,d.Q.value=.7;let f=n.createGain();f.gain.setValueAtTime(.12,o),f.gain.linearRampToValueAtTime(.5,o+t*.3),f.gain.linearRampToValueAtTime(.25,o+t),u.connect(d),d.connect(f),f.connect(c),u.start(o),u.stop(o+t)}startEngine(e){if(!this.ctx||!this.ready)return!1;this.stopEngine();let t=this.ctx,n=Tm[e]||Tm.city,i=p=>{let x=t.createBufferSource();x.buffer=p,x.loop=!0;let w=t.createGain();return w.gain.value=0,x.connect(w),x.start(),{s:x,g:w}},s=t.createBiquadFilter();s.type="lowpass",s.frequency.value=n.lp,s.Q.value=.7;let a=i(this.buf.engine_low),o=i(this.buf.engine_high);a.g.connect(s),o.g.connect(s);let c=t.createOscillator();c.type="sawtooth";let l=t.createOscillator();l.type="square";let h=t.createBiquadFilter();h.type="lowpass",h.Q.value=4;let u=t.createGain();u.gain.value=0,c.connect(h),l.connect(h),h.connect(u),u.connect(s),c.start(),l.start();let d=t.createOscillator();d.type="sine";let f=t.createGain();f.gain.value=0,d.connect(f),f.connect(s),d.start();let m=this.buf.skid?i(this.buf.skid):null;m&&m.g.connect(this.engBus);let b=i(this.noise),g=t.createBiquadFilter();return g.type="bandpass",g.frequency.value=700,g.Q.value=.6,b.g.disconnect(),b.s.disconnect(),b.s.connect(g),g.connect(b.g),b.g.connect(this.engBus),s.connect(this.engBus),this.engine={P:n,low:a,high:o,osc:c,osc2:l,gf:h,gg:u,tw:d,tg:f,skid:m,wind:b,lp:s,lastThr:0,boost:0},this.sfx("start",.6),!0}updateEngine(e,t,n,i,s=1,a=!1){let o=this.engine;if(!o)return;let c=this.ctx.currentTime,l=o.P,h=.05,u=Math.max(700,e)*l.pitch,d=Math.max(0,Math.min(1,(u-2200)/2600));o.low.s.playbackRate.setTargetAtTime(Math.max(.7,Math.min(2.6,u/l.low)),c,h),o.high.s.playbackRate.setTargetAtTime(Math.max(.32,Math.min(1.25,u/l.high)),c,h);let f=.55+t*.45;o.low.g.gain.setTargetAtTime((1-d)*.55*f,c,h),o.high.g.gain.setTargetAtTime(d*.62*f,c,h);let m=u/60*l.cyl/2;if(o.osc.frequency.setTargetAtTime(m,c,h),o.osc2.frequency.setTargetAtTime(m*.5,c,h),o.gf.frequency.setTargetAtTime(Math.min(4e3,m*3.2),c,h),o.gg.gain.setTargetAtTime(l.growl*.16*(.35+t*.65),c,h),o.lp.frequency.setTargetAtTime(l.lp*(.6+t*.4)*(s>1?1.4:1),c,.1),l.turbo&&(o.tw.frequency.setTargetAtTime(1800+u*.45,c,h),o.tg.gain.setTargetAtTime(t*l.turbo*.08*Math.min(1,u/4e3),c,.15)),o.lastThr>.7&&t<.2&&u>3800&&(l.turbo&&this.blowoff(l.turbo),l.antilag))for(let b=0;b<3;b++)setTimeout(()=>this.sfx("pop",.35+Math.random()*.3,.8+Math.random()*.5),60+b*(90+Math.random()*80));o.lastThr=t,o.skid&&(o.skid.g.gain.setTargetAtTime(Math.min(.5,Math.max(0,i-2.5)*.08)*(a?.3:1),c,.06),o.skid.s.playbackRate.setTargetAtTime(.9+Math.min(.25,n/200),c,.1)),o.wind.g.gain.setTargetAtTime(Math.min(.5,(n/90)**2*.5)+(s>1?.25:0),c,.2)}blowoff(e){let t=this.ctx.currentTime,n=this.ctx.createBufferSource();n.buffer=this.noise;let i=this.ctx.createBiquadFilter();i.type="highpass",i.frequency.value=2500;let s=this.ctx.createGain();s.gain.setValueAtTime(e*1.2,t),s.gain.exponentialRampToValueAtTime(.001,t+.45),n.connect(i),i.connect(s),s.connect(this.engBus),n.start(t),n.stop(t+.5)}stopEngine(){let e=this.engine;if(!e)return;this.engine=null;let t=this.ctx.currentTime;for(let n of[e.low,e.high,e.skid,e.wind])n&&(n.g.gain.setTargetAtTime(0,t,.1),setTimeout(()=>{try{n.s.stop()}catch{}},400));e.gg.gain.setTargetAtTime(0,t,.1),e.tg.gain.setTargetAtTime(0,t,.1),setTimeout(()=>{try{e.osc.stop(),e.osc2.stop(),e.tw.stop()}catch{}},400)}updateOthers(e,t){if(!this.ctx||!this.ready||!this.buf.engine_high)return;let n=this.ctx,i=n.listener,s=n.currentTime;i.positionX?(i.positionX.setTargetAtTime(t.position.x,s,.05),i.positionY.setTargetAtTime(t.position.y,s,.05),i.positionZ.setTargetAtTime(t.position.z,s,.05)):i.setPosition(t.position.x,t.position.y,t.position.z);let a=t.matrixWorld.elements;for(i.forwardX?(i.forwardX.value=-a[8],i.forwardY.value=-a[9],i.forwardZ.value=-a[10],i.upX.value=a[4],i.upY.value=a[5],i.upZ.value=a[6]):i.setOrientation(-a[8],-a[9],-a[10],a[4],a[5],a[6]);this.others.length<3;){let o=n.createBufferSource();o.buffer=this.buf.engine_high,o.loop=!0;let c=n.createPanner();c.panningModel="equalpower",c.distanceModel="inverse",c.refDistance=8,c.maxDistance=400,c.rolloffFactor=1.2;let l=n.createGain();l.gain.value=0,o.connect(l),l.connect(c),c.connect(this.engBus),o.start(0,Math.random()*3),this.others.push({s:o,p:c,g:l})}this.others.forEach((o,c)=>{let l=e[c];if(!l){o.g.gain.setTargetAtTime(0,s,.2);return}o.p.positionX?(o.p.positionX.setTargetAtTime(l.x,s,.05),o.p.positionY.setTargetAtTime(l.y+.6,s,.05),o.p.positionZ.setTargetAtTime(l.z,s,.05)):o.p.setPosition(l.x,l.y,l.z),o.s.playbackRate.setTargetAtTime(Math.max(.35,Math.min(1.2,(1800+l.speed*70)/7470)),s,.1),o.g.gain.setTargetAtTime(.35,s,.2)})}silenceOthers(){if(this.ctx)for(let e of this.others)e.g.gain.setTargetAtTime(0,this.ctx.currentTime,.2)}};var ml=class{constructor(){this.left=!1,this.right=!1,this.brake=!1,this.joy=0,this.tilt=0,this.tiltZero=null,this.keys=new Set,this.value=0,this.el=null,addEventListener("keydown",e=>{e.target.closest&&e.target.closest("input,textarea")||this.keys.add(e.code)}),addEventListener("keyup",e=>this.keys.delete(e.code)),addEventListener("blur",()=>{this.keys.clear(),this.left=this.right=this.brake=!1})}mount(e){this.unmount();let t=Qe.controls,n=Sn('<div class="controls"></div>');if(t==="joystick"){let i=Sn('<div id="joy"><div class="joyb hidden"></div><div class="joyk hidden"></div></div>'),s=i.children[0],a=i.children[1],o=null,c=0,l=0;i.addEventListener("pointerdown",u=>{o=u.pointerId,c=u.clientX,l=u.clientY,i.setPointerCapture(o),s.classList.remove("hidden"),a.classList.remove("hidden"),s.style.left=a.style.left=c+"px",s.style.top=a.style.top=l+"px"}),i.addEventListener("pointermove",u=>{if(u.pointerId!==o)return;let d=Math.max(-60,Math.min(60,u.clientX-c));this.joy=d/60,a.style.left=c+d+"px"});let h=u=>{u.pointerId===o&&(o=null,this.joy=0,s.classList.add("hidden"),a.classList.add("hidden"))};i.addEventListener("pointerup",h),i.addEventListener("pointercancel",h),n.appendChild(i),n.appendChild(this.button("brake","\u0422\u041E\u0420\u041C\u041E\u0417",u=>this.brake=u))}else t==="tilt"?(n.appendChild(this.button("brake","\u0422\u041E\u0420\u041C\u041E\u0417",i=>this.brake=i)),this.enableTilt()):(n.appendChild(this.button("left","\u25C0",i=>this.left=i)),n.appendChild(this.button("right","\u25B6",i=>this.right=i)),n.appendChild(this.button("brake","\u0422\u041E\u0420\u041C\u041E\u0417",i=>this.brake=i)));e.appendChild(n),this.el=n}button(e,t,n){let i=Sn(`<div class="ctl ${e}">${t}</div>`),s=o=>{o.preventDefault(),i.setPointerCapture&&i.setPointerCapture(o.pointerId),n(!0),i.classList.add("on"),Qe.vibrate&&navigator.vibrate&&navigator.vibrate(8)},a=o=>{o.preventDefault(),n(!1),i.classList.remove("on")};return i.addEventListener("pointerdown",s),i.addEventListener("pointerup",a),i.addEventListener("pointercancel",a),i.addEventListener("lostpointercapture",a),i}async enableTilt(){try{typeof DeviceOrientationEvent<"u"&&DeviceOrientationEvent.requestPermission&&await DeviceOrientationEvent.requestPermission()}catch{}this.tiltOn||(this.tiltOn=!0,addEventListener("deviceorientation",e=>{let n=Math.abs(window.orientation||screen.orientation&&screen.orientation.angle||0)===90?(e.beta||0)*Math.sign(screen.orientation&&screen.orientation.angle||window.orientation||1):e.gamma||0;this.tiltZero==null&&(this.tiltZero=n),this.tilt=Math.max(-1,Math.min(1,(n-this.tiltZero)/25))}))}unmount(){this.el&&(this.el.remove(),this.el=null),this.left=this.right=this.brake=!1,this.joy=0}read(e){let t=this.keys,n=this.left||t.has("ArrowLeft")||t.has("KeyA"),s=(this.right||t.has("ArrowRight")||t.has("KeyD")?1:0)-(n?1:0);Qe.controls==="joystick"&&this.joy&&(s=this.joy),Qe.controls==="tilt"&&this.tiltOn&&(s=Math.abs(this.tilt)>.06?this.tilt:0);let a=s===0?7:Math.sign(s)!==Math.sign(this.value)?9:4.5;return this.value+=(s-this.value)*Math.min(1,e*a),Math.abs(this.value)<.01&&s===0&&(this.value=0),{steer:this.value,brake:this.brake||t.has("Space")||t.has("ArrowDown")||t.has("KeyS")}}};var Em=r=>qn(r&&r.img)||"assets/gift-unknown.svg",gl=r=>r&&(r.ru||r.name)||"",bl=class{constructor(e){this.app=e,this.root=document.getElementById("ui"),this.cur=null,this.el=null}clear(){this.el&&this.el.remove(),this.el=null,this.cur=null,this.app.controls.unmount()}mount(e,t){return this.clear(),this.cur=e,this.el=Sn(t),this.root.appendChild(this.el),this.el}topbar(e=""){return`<div class="topbar"><div class="row">${e}</div><div class="row">
      <button class="iconbtn" data-a="settings" title="\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438">\u2699\uFE0F</button>
      ${this.app.isOp?"":'<button class="iconbtn" data-a="host" title="\u0414\u043B\u044F \u0445\u043E\u0441\u0442\u0430">\u{1F399}\uFE0F</button>'}</div></div>`}wireTop(e){e.querySelectorAll('[data-a="settings"]').forEach(t=>t.onclick=()=>this.settings()),e.querySelectorAll('[data-a="host"]').forEach(t=>t.onclick=()=>this.hostLogin())}liveChip(){let e=this.app.live||{};return this.app.connected?e.state==="connected"?`<span class="chip live"><i class="dot"></i> LIVE @${_e(e.user)}</span>`:'<span class="chip">\u042D\u0444\u0438\u0440 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0451\u043D</span>':'<span class="chip"><i class="dot pulse"></i> \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u0433\u0440\u0435\u2026</span>'}home(){let e=this.app,t=wn[e.lobby?.loc||"city"],n=this.mount("home",`<div class="screen dim">
      ${this.topbar(this.liveChip())}
      <div class="card col">
        <div class="logo" style="text-align:center;margin:4px 0 6px">NITRO<span>LIVE</span></div>
        <div class="small" style="text-align:center">\u0413\u043E\u043D\u043A\u0438 \u043F\u0440\u044F\u043C\u043E \u0432 \u044D\u0444\u0438\u0440\u0435: \u0434\u0430\u0440\u0438 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u2014 \u0443\u0441\u043A\u043E\u0440\u044F\u0439\u0441\u044F \u0438 \u043C\u0435\u0448\u0430\u0439 \u0441\u043E\u043F\u0435\u0440\u043D\u0438\u043A\u0430\u043C</div>
        <div class="loccard"><div class="ic">${t.icon}</div><div><b>${_e(t.title)}</b><div class="small">${_e(t.desc)}</div></div></div>
        <input class="field" id="nick" maxlength="40" placeholder="\u0422\u0432\u043E\u0439 \u043D\u0438\u043A \u0432 TikTok (\u043F\u043E\u0441\u043B\u0435 @)" autocomplete="off" autocapitalize="off" spellcheck="false" value="${_e(qt.get("nick",""))}">
        <button class="btn primary" id="go">\u0418\u0413\u0420\u0410\u0422\u042C</button>
        <div class="small" id="hint" style="text-align:center">\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u2014 \u043F\u043E\u0434\u0430\u0440\u043E\u043A ${e.joinGift?`<b>${_e(gl(e.joinGift))}</b>`:"\xAB\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438\xBB"} \u0432 \u044D\u0444\u0438\u0440\u0435</div>
      </div></div>`);this.wireTop(n);let i=()=>{e.audio.unlock();let s=Pe("#nick",n).value.trim().replace(/^@/,"");if(!s){Ct("\u0412\u043F\u0438\u0448\u0438 \u0441\u0432\u043E\u0439 \u043D\u0438\u043A TikTok",{kind:"bad"});return}qt.set("nick",s),e.login(s)};Pe("#go",n).onclick=i,Pe("#nick",n).addEventListener("keydown",s=>{s.key==="Enter"&&i()})}verify(e){let t=this.app,n=t.joinGift,i=!!e.ticket,s=!!t.rules?.verifyChat,a=this.mount("verify",`<div class="screen dim">
      ${this.topbar(this.liveChip())}
      <div class="card">
        <h2 style="font-size:22px">\u041F\u043E\u0447\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u043E, ${_e(e.typed||"")}!</h2>
        <div class="steps">
          <div class="step ${i?"done":""}" id="stGift"><div class="st">${i?"\u2713":"1"}</div>
            <img class="giftimg" src="${_e(Em(n))}" alt=""><div><b>\u041E\u0442\u043F\u0440\u0430\u0432\u044C ${_e(gl(n)||"\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438")}</b><div class="small">\u0432 \u044D\u0444\u0438\u0440\u0435 ${e.host?"@"+_e(e.host):"\u0441\u0442\u0440\u0438\u043C\u0435\u0440\u0430"} \u2014 \u043E\u0434\u0438\u043D \u0440\u0430\u0437 \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u0444\u0438\u0440${i?" \xB7 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E!":""}</div></div></div>
          ${s?`<div class="step" id="stCode"><div class="st">2</div><div style="flex:1"><b>\u041D\u0430\u043F\u0438\u0448\u0438 \u0432 \u0447\u0430\u0442 \u044D\u0444\u0438\u0440\u0430 \u044D\u0442\u043E\u0442 \u043A\u043E\u0434</b><div class="small">\u0442\u0430\u043A \u043C\u044B \u0443\u0437\u043D\u0430\u0435\u043C, \u0447\u0442\u043E \u044D\u0442\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0442\u044B</div></div><div class="code">${_e(e.code)}</div></div>`:""}
        </div>
        ${e.live?"":'<div class="small" style="margin-bottom:10px">\u23F3 \u0425\u043E\u0441\u0442 \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043B \u044D\u0444\u0438\u0440 \u043A \u0438\u0433\u0440\u0435 \u2014 \u043A\u043E\u0434 \u0441\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442.</div>'}
        <div class="row"><button class="btn ghost" id="back" style="flex:1">\u0414\u0440\u0443\u0433\u043E\u0439 \u043D\u0438\u043A</button></div>
        <div class="small" style="margin-top:10px">\u041C\u043E\u0436\u043D\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043A\u043E\u0434, \u0430 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0442\u043E\u043C \u2014 \u0438\u043B\u0438 \u043D\u0430\u043E\u0431\u043E\u0440\u043E\u0442. \u042D\u043A\u0440\u0430\u043D \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u0441\u0430\u043C.</div>
      </div></div>`);this.wireTop(a),Pe("#back",a).onclick=()=>{t.net.send({t:"logout"}),this.home()}}ticketArrived(){let e=this.el&&this.el.querySelector("#stGift");e&&(e.classList.add("done"),e.querySelector(".st").textContent="\u2713",Ct("\u{1F94A} \u041F\u043E\u0434\u0430\u0440\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0435\u043D \u2014 \u0442\u044B \u0432 \u0438\u0433\u0440\u0435!",{kind:"good"}))}lobby(){let e=this.app,t=e.lobby||{},n=e.you,i=wn[t.loc||"city"],s=this.mount("lobby",`<div class="screen" id="lobby">
      ${this.topbar(this.liveChip())}
      <div class="sheet">
        <div class="waitline" id="wait"></div>
        <div class="tabs"><button class="tab on" data-t="car">\u{1F697} \u041C\u0430\u0448\u0438\u043D\u0430</button><button class="tab" data-t="players">\u{1F465} \u0418\u0433\u0440\u043E\u043A\u0438</button><button class="tab" data-t="gifts">\u{1F381} \u041F\u043E\u0434\u0430\u0440\u043A\u0438</button><button class="tab" data-t="top">\u{1F3C6} \u0414\u0435\u043D\u044C</button></div>
        <div class="pane scroll" id="pane"></div>
      </div></div>`);this.wireTop(s);let a=s.querySelectorAll(".tab");a.forEach(o=>o.onclick=()=>{a.forEach(c=>c.classList.toggle("on",c===o)),this.lobbyTab=o.dataset.t,this.renderLobby()}),this.lobbyTab=this.lobbyTab||"car",a.forEach(o=>o.classList.toggle("on",o.dataset.t===this.lobbyTab)),this.renderLobby()}renderLobby(){if(this.cur!=="lobby")return;let e=this.app,t=e.lobby||{},n=e.you,i=this.el,s=wn[t.loc||"city"],a=(t.players||[]).length,o=n&&!n.ticket;Pe("#wait",i).innerHTML=o?`\u{1F94A} \u041E\u0442\u043F\u0440\u0430\u0432\u044C <b>${_e(gl(e.joinGift))}</b> \u0432 \u044D\u0444\u0438\u0440\u0435, \u0447\u0442\u043E\u0431\u044B \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C`:e.phase==="race"||e.phase==="countdown"||e.phase==="intro"?"\u{1F3C1} \u0418\u0434\u0451\u0442 \u0433\u043E\u043D\u043A\u0430 \u2014 \u0442\u044B \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439! \u0421\u043C\u043E\u0442\u0440\u0438 \u0442\u0440\u0430\u043D\u0441\u043B\u044F\u0446\u0438\u044E":`${s.icon} ${_e(s.title)} \xB7 ${t.laps||3} ${xl(t.laps||3,"\u043A\u0440\u0443\u0433","\u043A\u0440\u0443\u0433\u0430","\u043A\u0440\u0443\u0433\u043E\u0432")} \xB7 ${a} ${xl(a,"\u0438\u0433\u0440\u043E\u043A","\u0438\u0433\u0440\u043E\u043A\u0430","\u0438\u0433\u0440\u043E\u043A\u043E\u0432")} \xB7 <span class="pulse">\u0436\u0434\u0451\u043C \u0441\u0442\u0430\u0440\u0442\u2026</span>`;let c=Pe("#pane",i),l=this.lobbyTab;if(l==="car"){let h=new Set((t.players||[]).filter(f=>!n||f.uid!==n.uid).map(f=>f.paint)),u=n?n.paint:0,d=Math.max(el.length,Math.max(u,...h)+1);c.innerHTML=`<div class="small" style="margin:2px 0 10px">\u0422\u0432\u043E\u0439 \u0446\u0432\u0435\u0442 \u2014 <b>${_e(Yt(u).name)}</b>. \u0417\u0430\u043D\u044F\u0442\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 \u043F\u0440\u0438\u0433\u043B\u0443\u0448\u0435\u043D\u044B.</div>
        <div class="swatches">${Array.from({length:d},(f,m)=>{let b=Yt(m);return`<button class="sw ${m===u?"on":""} ${h.has(m)?"taken":""}" data-p="${m}" title="${_e(b.name)}" style="background:${b.color}"></button>`}).join("")}</div>`,c.querySelectorAll(".sw").forEach(f=>f.onclick=()=>{if(f.classList.contains("taken"))return Ct("\u042D\u0442\u043E\u0442 \u0446\u0432\u0435\u0442 \u0443\u0436\u0435 \u0443 \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430");e.net.send({t:"paint",n:+f.dataset.p})})}else l==="players"?c.innerHTML=`<div class="plist">${(t.players||[]).map(h=>`<div class="pl ${n&&h.uid===n.uid?"me":""}"><img class="av" src="${_e(qn(h.avatar)||"icon.svg")}" alt=""><span class="car" style="background:${Yt(h.paint).color}"></span><span class="nm">${_e(h.name)}</span>${h.ticket?"":'<span class="small">\u0431\u0435\u0437 \u{1F94A}</span>'}</div>`).join("")||'<div class="small">\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u043E\u0433\u043E \u2014 \u043F\u043E\u0437\u043E\u0432\u0438 \u0434\u0440\u0443\u0437\u0435\u0439!</div>'}</div>`:l==="gifts"?c.innerHTML=this.giftList():c.innerHTML=this.dailyList()}giftList(){return`<div class="col" style="gap:6px">${(this.app.gifts||[]).filter(t=>!t.off&&t.gift).map(t=>`<div class="giftrow"><img class="giftimg" src="${_e(Em(t.gift))}" alt=""><div class="gn">${_e(t.icon)} ${_e(t.text)}<div class="small">${_e(gl(t.gift))}</div></div><span class="cnt">\xD7${t.count}</span></div>`).join("")}</div>`}dailyList(){let e=this.app.daily;if(!e||!e.list.length)return'<div class="small">\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0435\u0449\u0451 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043D\u0430\u0431\u0440\u0430\u043B \u043E\u0447\u043A\u043E\u0432. \u041F\u0435\u0440\u0432\u0430\u044F \u0433\u043E\u043D\u043A\u0430 \u2014 \u0442\u0432\u043E\u044F!</div>';let t=this.app.you&&this.app.you.uid;return`<div class="small" style="margin-bottom:6px">\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F \xB7 \u0433\u043E\u043D\u043E\u043A: ${e.races}</div><div class="plist">${e.list.slice(0,50).map((n,i)=>`<div class="pl ${n.uid===t?"me":""}"><span class="pos p${i+1}">${i+1}</span><img class="av" src="${_e(qn(n.avatar)||"icon.svg")}" alt=""><span class="nm">${_e(n.name)}</span><span class="small">\u{1F3C6}${n.wins}</span><span class="pts">${n.points}</span></div>`).join("")}</div>`}hud(e){let t=this.mount("hud",`<div id="hud">
      <div class="tl"><div class="bigpos" id="pos">\u2014</div><span class="hudchip" id="lap"></span><span class="hudchip" id="time">0:00.0</span><div class="fxicons" id="fxi"></div></div>
      <div class="tr" id="lb"></div>
      <canvas id="minimap" width="240" height="240"></canvas>
      <div class="speedo" id="speedo"><div class="v" id="spd">0</div><div class="u">\u041A\u041C/\u0427 \xB7 <span class="g" id="gear">1</span></div><div class="rpm"><i id="rpm"></i></div></div>
      <div id="count"></div>
    </div>`);return e.you!=null?this.app.controls.mount(t):t.querySelector("#speedo").classList.add("hidden"),this.mm=null,t}updateHud(e,t){if(this.cur!=="hud")return;let n=this.el,i=this.app,s=e.you!=null?e.entries.get(e.you):null,a=e.entries.size,o=e.focusEntry(),c=s||o;c&&(Pe("#pos",n).innerHTML=`${c.pos||"\u2014"}<small>/${a}</small>`);let l=s?Math.max(1,Math.min(e.laps,e.local.lap+1)):Math.max(1,Math.min(e.laps,(o?.lap??-1)+1));if(Pe("#lap",n).textContent=`\u041A\u0440\u0443\u0433 ${l}/${e.laps}`,Pe("#time",n).textContent=t>0?Rs(t):"0:00.0",s&&e.veh){let m=e.state;Pe("#spd",n).textContent=Math.round((m.speed||0)*3.6),Pe("#gear",n).textContent=m.rail?"N\u2082O":m.gear,Pe("#rpm",n).style.width=Math.min(100,(m.rpm||0)/e.veh.spec.redline*100)+"%"}let h=[];e.rank.forEach(([m,b,g,p,x],w)=>{let v=e.entries.get(m);v&&(w<5||m===e.you)&&h.push(`<div class="lb ${m===e.you?"me":""}"><b>${w+1}</b><span class="c" style="background:${v.gold?"#d4a22a":Yt(v.paint).color}"></span><span class="n">${_e(v.name)}</span>${g?"\u{1F3C1}":x?'<span class="auto">\u{1F916}</span>':""}</div>`)});let u=Pe("#lb",n),d=h.join("");u._h!==d&&(u.innerHTML=d,u._h=d);let f=s||o;if(f){let m=[];for(let p of f.fx)t<p.t1&&t>=p.t0&&m.push(N_(p,t));let b=Pe("#fxi",n),g=m.join("");b._h!==g&&(b.innerHTML=g,b._h=g)}this.drawMinimap(e)}drawMinimap(e){let t=Pe("#minimap",this.el);if(!t)return;let n=t.getContext("2d"),i=e.track,s=t.width;if(!this.mm||this.mm.id!==i.id){let c=1/0,l=-1/0,h=1/0,u=-1/0;for(let b=0;b<i.N;b++)c=Math.min(c,i.X[b]),l=Math.max(l,i.X[b]),h=Math.min(h,i.Z[b]),u=Math.max(u,i.Z[b]);let d=(s-24)/Math.max(l-c,u-h),f=(b,g)=>[s/2-(b-(c+l)/2)*d,s/2-(g-(h+u)/2)*d],m=new Path2D;for(let b=0;b<=i.N;b+=3){let[g,p]=f(i.X[b%i.N],i.Z[b%i.N]);b?m.lineTo(g,p):m.moveTo(g,p)}m.closePath(),this.mm={id:i.id,P:f,path:m}}n.clearRect(0,0,s,s),n.lineJoin="round",n.strokeStyle="rgba(0,0,0,.55)",n.lineWidth=11,n.stroke(this.mm.path),n.strokeStyle="rgba(255,255,255,.85)",n.lineWidth=5,n.stroke(this.mm.path);let[a,o]=this.mm.P(i.X[0],i.Z[0]);n.fillStyle="#fff",n.fillRect(a-5,o-2,10,4);for(let c of e.entries.values()){if(!c.vis)continue;let[l,h]=this.mm.P(c.vis.x,c.vis.z),u=c.slot===e.you;n.beginPath(),n.arc(l,h,u?8:5.5,0,Math.PI*2),n.fillStyle=c.gold?"#d4a22a":Yt(c.paint).color,n.fill(),n.lineWidth=u?3:1.5,n.strokeStyle=u?"#fff":"rgba(0,0,0,.8)",n.stroke()}}countdown(e){let t=this.el&&this.el.querySelector("#count");t&&(t.innerHTML=e>0?`<div class="lights">${[0,1,2,3,4].map(n=>`<i class="${n<6-e*5/3?"on":""}"></i>`).join("")}</div>`:e===0?'<div class="count"><b>GO!</b></div>':"")}banner(e,t="",n=2400){let i=Sn(`<div class="banner">${_e(e)}${t?`<small>${_e(t)}</small>`:""}</div>`);(this.el||this.root).appendChild(i),setTimeout(()=>i.remove(),n)}results(e){let t=this.app,n=t.you&&t.you.uid,i=this.mount("results",`<div class="screen" id="results">
      ${this.topbar('<span class="chip ok">\u{1F3C1} \u0418\u0442\u043E\u0433\u0438 \u0433\u043E\u043D\u043A\u0438</span>')}
      <div class="sheet"><div class="tabs"><button class="tab on" data-t="race">\u0413\u043E\u043D\u043A\u0430</button><button class="tab" data-t="day">\u{1F3C6} \u0414\u0435\u043D\u044C</button></div>
      <div class="pane scroll" id="pane"></div></div></div>`);this.wireTop(i);let s=Pe("#pane",i),a=o=>{s.innerHTML=o==="race"?`<div class="restable">${e.list.map(c=>`<div class="resrow ${c.uid&&c.uid===n?"me":""}"><span class="pos p${c.pos}">${c.pos}</span><span class="c" style="background:${Yt(c.paint).color}"></span><span class="nm" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${_e(c.name)}${c.bot?" \u{1F916}":""}</span><span class="small">${c.finished?Rs(c.time):"\u043D\u0435 \u0444\u0438\u043D\u0438\u0448\u0438\u0440\u043E\u0432\u0430\u043B"}</span><span class="pts">${c.points?"+"+c.points:""}</span></div>`).join("")}</div>`:this.dailyList()};i.querySelectorAll(".tab").forEach(o=>o.onclick=()=>{i.querySelectorAll(".tab").forEach(c=>c.classList.toggle("on",c===o)),a(o.dataset.t)}),a("race")}settings(){let e=this.app,t=(s,a)=>a.map(([o,c])=>`<option value="${o}" ${String(Qe[s])===String(o)?"selected":""}>${c}</option>`).join(""),n=Sn(`<div class="screen dim" style="z-index:30"><div class="card col scroll" style="max-height:92%">
      <div class="row" style="justify-content:space-between"><h2 style="font-size:22px">\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</h2><button class="iconbtn" id="x">\u2715</button></div>
      <label class="small">\u0413\u0440\u0430\u0444\u0438\u043A\u0430 (\u0441\u0435\u0439\u0447\u0430\u0441: ${_e(Ps[e.gfx.qName].name)}, \u0430\u0432\u0442\u043E \u0434\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u2014 ${_e(Ps[e.gfx.auto].name)})</label>
      <select class="field" id="gfx">${t("gfx",[["auto","\u0410\u0432\u0442\u043E (\u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442\u0441\u044F)"],["low","\u041D\u0438\u0437\u043A\u0430\u044F \u2014 \u0441\u043B\u0430\u0431\u044B\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u044B"],["medium","\u0421\u0440\u0435\u0434\u043D\u044F\u044F"],["high","\u0412\u044B\u0441\u043E\u043A\u0430\u044F"],["ultra","\u0423\u043B\u044C\u0442\u0440\u0430 \u2014 \u043C\u043E\u0449\u043D\u044B\u0439 \u041F\u041A"]])}</select>
      <label class="small">\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u0435: <b id="resv">${Math.round(Qe.res*100)}%</b></label><input class="slider" type="range" id="res" min="0.5" max="1" step="0.05" value="${Qe.res}">
      <label class="switch">\u0422\u0435\u043D\u0438 <input type="checkbox" id="shadows" ${Qe.shadows?"checked":""}></label>
      <label class="small">\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u043A\u0430\u0434\u0440\u043E\u0432</label><select class="field" id="fps">${t("fps",[[30,"30 \u043A\u0430\u0434\u0440\u043E\u0432 \u2014 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u0431\u0430\u0442\u0430\u0440\u0435\u0438"],[60,"60 \u043A\u0430\u0434\u0440\u043E\u0432 \u2014 \u043F\u043B\u0430\u0432\u043D\u043E"],[120,"120 \u043A\u0430\u0434\u0440\u043E\u0432"]])}</select>
      <label class="small">\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435</label><select class="field" id="controls">${t("controls",[["buttons","\u041A\u043D\u043E\u043F\u043A\u0438 \u25C0 \u25B6"],["joystick","\u0414\u0436\u043E\u0439\u0441\u0442\u0438\u043A"],["tilt","\u041D\u0430\u043A\u043B\u043E\u043D \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"]])}</select>
      <label class="small">\u041A\u0430\u043C\u0435\u0440\u0430</label><select class="field" id="cam">${t("cam",[["chase","\u0417\u0430 \u043C\u0430\u0448\u0438\u043D\u043E\u0439"],["far","\u0414\u0430\u043B\u044C\u043D\u044F\u044F"],["hood","\u0421 \u043A\u0430\u043F\u043E\u0442\u0430"]])}</select>
      <label class="small">\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C: <b id="volv">${Math.round(Qe.vol*100)}%</b></label><input class="slider" type="range" id="vol" min="0" max="1" step="0.05" value="${Qe.vol}">
      <label class="small">\u041C\u043E\u0442\u043E\u0440</label><input class="slider" type="range" id="volEngine" min="0" max="1" step="0.05" value="${Qe.volEngine}">
      <label class="small">\u042D\u0444\u0444\u0435\u043A\u0442\u044B</label><input class="slider" type="range" id="volFx" min="0" max="1" step="0.05" value="${Qe.volFx}">
      <label class="small">\u041C\u0443\u0437\u044B\u043A\u0430</label><input class="slider" type="range" id="volMusic" min="0" max="1" step="0.05" value="${Qe.volMusic}">
      <label class="switch">\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F <input type="checkbox" id="vibrate" ${Qe.vibrate?"checked":""}></label>
      <label class="switch">\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C FPS <input type="checkbox" id="showFps" ${Qe.showFps?"checked":""}></label>
      <div class="small">\u0412\u0435\u0440\u0441\u0438\u044F ${_e(e.version||"")}</div>
    </div></div>`);this.root.appendChild(n);let i=s=>n.querySelector(s);i("#x").onclick=()=>n.remove(),n.addEventListener("pointerdown",s=>{s.target===n&&n.remove()}),i("#gfx").onchange=s=>{ci("gfx",s.target.value),e.gfx.setQuality(s.target.value),Ct("\u0413\u0440\u0430\u0444\u0438\u043A\u0430 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u0441\u044F \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E \u043F\u0440\u0438 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043E\u043D\u043A\u0435")},i("#res").oninput=s=>{ci("res",+s.target.value),i("#resv").textContent=Math.round(s.target.value*100)+"%",e.gfx.setQuality(Qe.gfx)},i("#shadows").onchange=s=>{ci("shadows",s.target.checked),e.gfx.setQuality(Qe.gfx)},i("#fps").onchange=s=>ci("fps",+s.target.value),i("#controls").onchange=s=>{ci("controls",s.target.value),this.cur==="hud"&&this.app.controls.mount(this.el)},i("#cam").onchange=s=>{ci("cam",s.target.value),e.race&&e.race.chase&&(e.race.chase.mode=s.target.value)};for(let s of["vol","volEngine","volFx","volMusic"])i("#"+s).oninput=a=>{ci(s,+a.target.value),s==="vol"&&(i("#volv").textContent=Math.round(a.target.value*100)+"%")};i("#vibrate").onchange=s=>ci("vibrate",s.target.checked),i("#showFps").onchange=s=>ci("showFps",s.target.checked)}hostLogin(e=""){let t=this.app;if(this.loginBox&&this.loginBox.isConnected)return;let n="",i=[1,2,3,4,5,6,7,8,9,0].sort(()=>Math.random()-.5),s=Sn(`<div class="screen dim" style="z-index:30"><div class="card" style="width:min(340px,100%)">
      <div class="row" style="justify-content:space-between"><h2 style="font-size:20px">\u0412\u0445\u043E\u0434 \u0434\u043B\u044F \u0445\u043E\u0441\u0442\u0430</h2><button class="iconbtn" id="x">\u2715</button></div>
      <div class="small">\u0412\u0432\u0435\u0434\u0438 \u043F\u0430\u0440\u043E\u043B\u044C. \u041D\u0430 \u044D\u043A\u0440\u0430\u043D\u0435 \u0432\u0438\u0434\u043D\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0442\u043E\u0447\u043A\u0438, \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u043F\u043E\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u044E\u0442\u0441\u044F \u2014 \u0437\u0440\u0438\u0442\u0435\u043B\u0438 \u044D\u0444\u0438\u0440\u0430 \u043D\u0435 \u0443\u0432\u0438\u0434\u044F\u0442 \u043A\u043E\u0434.</div>
      <div class="pin" id="pin">${"<i></i>".repeat(4)}</div>
      <div class="small" id="err" style="text-align:center;color:#ff8aa2;min-height:18px">${_e(e)}</div>
      <div class="keypad">${i.slice(0,9).map(h=>`<button data-d="${h}">${h}</button>`).join("")}<button class="fn" data-f="clr">\u0421\u0442\u0435\u0440\u0435\u0442\u044C</button><button data-d="${i[9]}">${i[9]}</button><button class="fn" data-f="ok">\u0412\u043E\u0439\u0442\u0438</button></div>
      <input type="password" id="kb" inputmode="numeric" autocomplete="off" style="position:absolute;opacity:0;width:1px;height:1px;left:-99px">
    </div></div>`);this.root.appendChild(s);let a=s.querySelector("#pin"),o=()=>{a.innerHTML=Array.from({length:Math.max(4,n.length)},(h,u)=>`<i class="${u<n.length?"f":""}"></i>`).join("")},c=()=>{n&&(t.opLogin(n),n="",o())};s.querySelector("#x").onclick=()=>s.remove(),s.querySelectorAll("[data-d]").forEach(h=>h.addEventListener("pointerdown",u=>{u.preventDefault(),n.length<32&&(n+=h.dataset.d),o()})),s.querySelector('[data-f="clr"]').addEventListener("pointerdown",h=>{h.preventDefault(),n="",o()}),s.querySelector('[data-f="ok"]').addEventListener("pointerdown",h=>{h.preventDefault(),c()});let l=h=>{if(!s.isConnected)return removeEventListener("keydown",l);/^\d$/.test(h.key)?(n+=h.key,o()):h.key==="Backspace"?(n=n.slice(0,-1),o()):h.key==="Enter"?c():h.key==="Escape"&&s.remove()};addEventListener("keydown",l),this.loginBox=s,this.loginErr=h=>{let u=s.querySelector("#err");u&&(u.textContent=h)}}};function N_(r,e){let t=Math.max(0,Math.ceil(r.t1-e)),i={boost:["\u26A1","good","\xD7"+(r.v||2)],shield:["\u{1F6E1}\uFE0F","good"],slow:["\u{1F40C}","bad"],skid:["\u{1F34C}","bad"],flat:["\u{1F4CC}","bad"],spin:["\u{1F4A5}","bad"],ink:["\u{1F419}","bad"],drunk:["\u{1F37A}","bad"],fog:["\u{1F32B}\uFE0F","bad"],freeze:["\u{1F9CA}","bad"],reverse:["\u{1F504}","bad"],tornado:["\u{1F32A}\uFE0F","bad"],meteor:["\u2604\uFE0F","bad"],rainbow:["\u{1F308}","good"],gold:["\u{1F451}","good"]}[r.k];return i?`<span class="fxicon ${i[1]}">${i[0]}${i[2]?" "+i[2]:""}${r.k!=="gold"&&t<100?" "+t+"\u0441":""}</span>`:""}function xl(r,e,t,n){r=Math.abs(r)%100;let i=r%10;return r>10&&r<20?n:i>1&&i<5?t:i===1?e:n}var Am={rose:"\u0440\u043E\u0437\u0430 \u0440\u043E\u0437\u044B",roses:"\u0440\u043E\u0437\u044B",flower:"\u0446\u0432\u0435\u0442\u043E\u043A \u0446\u0432\u0435\u0442\u044B",flowers:"\u0446\u0432\u0435\u0442\u044B",bouquet:"\u0431\u0443\u043A\u0435\u0442",tulip:"\u0442\u044E\u043B\u044C\u043F\u0430\u043D",tulips:"\u0442\u044E\u043B\u044C\u043F\u0430\u043D\u044B",sunflower:"\u043F\u043E\u0434\u0441\u043E\u043B\u043D\u0443\u0445",daisy:"\u0440\u043E\u043C\u0430\u0448\u043A\u0430",lily:"\u043B\u0438\u043B\u0438\u044F",lotus:"\u043B\u043E\u0442\u043E\u0441",blossom:"\u0446\u0432\u0435\u0442\u0435\u043D\u0438\u0435",sakura:"\u0441\u0430\u043A\u0443\u0440\u0430",cherry:"\u0432\u0438\u0448\u043D\u044F \u0447\u0435\u0440\u0435\u0448\u043D\u044F",garden:"\u0441\u0430\u0434",garland:"\u0432\u0435\u043D\u043E\u043A \u0433\u0438\u0440\u043B\u044F\u043D\u0434\u0430",headpiece:"\u0432\u0435\u043D\u043E\u043A \u0443\u043A\u0440\u0430\u0448\u0435\u043D\u0438\u0435",heart:"\u0441\u0435\u0440\u0434\u0446\u0435 \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E",hearts:"\u0441\u0435\u0440\u0434\u0446\u0430",love:"\u043B\u044E\u0431\u043E\u0432\u044C",lovely:"\u043C\u0438\u043B\u044B\u0439",kiss:"\u043F\u043E\u0446\u0435\u043B\u0443\u0439",kisses:"\u043F\u043E\u0446\u0435\u043B\u0443\u0438",hug:"\u043E\u0431\u044A\u044F\u0442\u0438\u044F",hugs:"\u043E\u0431\u044A\u044F\u0442\u0438\u044F",sweet:"\u0441\u043B\u0430\u0434\u043A\u0438\u0439",cute:"\u043C\u0438\u043B\u044B\u0439",romance:"\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430",romantic:"\u0440\u043E\u043C\u0430\u043D\u0442\u0438\u043A\u0430",valentine:"\u0432\u0430\u043B\u0435\u043D\u0442\u0438\u043D\u043A\u0430",couple:"\u043F\u0430\u0440\u0430",ring:"\u043A\u043E\u043B\u044C\u0446\u043E",wedding:"\u0441\u0432\u0430\u0434\u044C\u0431\u0430",proposal:"\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435",cat:"\u043A\u043E\u0442 \u043A\u043E\u0448\u043A\u0430 \u043A\u043E\u0442\u0438\u043A",kitten:"\u043A\u043E\u0442\u0435\u043D\u043E\u043A",kitty:"\u043A\u043E\u0442\u0438\u043A",dog:"\u0441\u043E\u0431\u0430\u043A\u0430 \u043F\u0435\u0441",puppy:"\u0449\u0435\u043D\u043E\u043A",corgi:"\u043A\u043E\u0440\u0433\u0438",wolf:"\u0432\u043E\u043B\u043A",fox:"\u043B\u0438\u0441\u0430 \u043B\u0438\u0441",bear:"\u043C\u0435\u0434\u0432\u0435\u0434\u044C \u043C\u0438\u0448\u043A\u0430",teddy:"\u043F\u043B\u044E\u0448\u0435\u0432\u044B\u0439 \u043C\u0438\u0448\u043A\u0430",panda:"\u043F\u0430\u043D\u0434\u0430",lion:"\u043B\u0435\u0432",tiger:"\u0442\u0438\u0433\u0440",leon:"\u043B\u0435\u0432 \u043B\u0435\u043E\u043D",rabbit:"\u043A\u0440\u043E\u043B\u0438\u043A \u0437\u0430\u044F\u0446",bunny:"\u0437\u0430\u0439\u0447\u0438\u043A \u043A\u0440\u043E\u043B\u0438\u043A",hamster:"\u0445\u043E\u043C\u044F\u043A",mouse:"\u043C\u044B\u0448\u044C",monkey:"\u043E\u0431\u0435\u0437\u044C\u044F\u043D\u0430",horse:"\u043B\u043E\u0448\u0430\u0434\u044C \u043A\u043E\u043D\u044C",unicorn:"\u0435\u0434\u0438\u043D\u043E\u0440\u043E\u0433",pony:"\u043F\u043E\u043D\u0438",dragon:"\u0434\u0440\u0430\u043A\u043E\u043D",phoenix:"\u0444\u0435\u043D\u0438\u043A\u0441",eagle:"\u043E\u0440\u0435\u043B",falcon:"\u0441\u043E\u043A\u043E\u043B",bird:"\u043F\u0442\u0438\u0446\u0430",owl:"\u0441\u043E\u0432\u0430",swan:"\u043B\u0435\u0431\u0435\u0434\u044C",duck:"\u0443\u0442\u043A\u0430",duckling:"\u0443\u0442\u0435\u043D\u043E\u043A",penguin:"\u043F\u0438\u043D\u0433\u0432\u0438\u043D",flamingo:"\u0444\u043B\u0430\u043C\u0438\u043D\u0433\u043E",peacock:"\u043F\u0430\u0432\u043B\u0438\u043D",parrot:"\u043F\u043E\u043F\u0443\u0433\u0430\u0439",butterfly:"\u0431\u0430\u0431\u043E\u0447\u043A\u0430",bee:"\u043F\u0447\u0435\u043B\u0430",fish:"\u0440\u044B\u0431\u0430",whale:"\u043A\u0438\u0442",dolphin:"\u0434\u0435\u043B\u044C\u0444\u0438\u043D",shark:"\u0430\u043A\u0443\u043B\u0430",octopus:"\u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433",turtle:"\u0447\u0435\u0440\u0435\u043F\u0430\u0445\u0430",frog:"\u043B\u044F\u0433\u0443\u0448\u043A\u0430",snake:"\u0437\u043C\u0435\u044F",deer:"\u043E\u043B\u0435\u043D\u044C",reindeer:"\u0441\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043E\u043B\u0435\u043D\u044C",cow:"\u043A\u043E\u0440\u043E\u0432\u0430",pig:"\u0441\u0432\u0438\u043D\u044C\u044F",sheep:"\u043E\u0432\u0446\u0430",goat:"\u043A\u043E\u0437\u0430",chicken:"\u043A\u0443\u0440\u0438\u0446\u0430",koala:"\u043A\u043E\u0430\u043B\u0430",sloth:"\u043B\u0435\u043D\u0438\u0432\u0435\u0446",dino:"\u0434\u0438\u043D\u043E\u0437\u0430\u0432\u0440",dinosaur:"\u0434\u0438\u043D\u043E\u0437\u0430\u0432\u0440",rex:"\u0442\u0438\u0440\u0430\u043D\u043D\u043E\u0437\u0430\u0432\u0440",pegasus:"\u043F\u0435\u0433\u0430\u0441",griffin:"\u0433\u0440\u0438\u0444\u043E\u043D",kraken:"\u043A\u0440\u0430\u043A\u0435\u043D",yeti:"\u0439\u0435\u0442\u0438",capybara:"\u043A\u0430\u043F\u0438\u0431\u0430\u0440\u0430",llama:"\u043B\u0430\u043C\u0430",alpaca:"\u0430\u043B\u044C\u043F\u0430\u043A\u0430",jellyfish:"\u043C\u0435\u0434\u0443\u0437\u0430",seal:"\u0442\u044E\u043B\u0435\u043D\u044C",otter:"\u0432\u044B\u0434\u0440\u0430",star:"\u0437\u0432\u0435\u0437\u0434\u0430 \u0437\u0432\u0435\u0437\u0434\u043E\u0447\u043A\u0430",stars:"\u0437\u0432\u0435\u0437\u0434\u044B",moon:"\u043B\u0443\u043D\u0430",sun:"\u0441\u043E\u043B\u043D\u0446\u0435",sky:"\u043D\u0435\u0431\u043E",cloud:"\u043E\u0431\u043B\u0430\u043A\u043E",clouds:"\u043E\u0431\u043B\u0430\u043A\u0430",rainbow:"\u0440\u0430\u0434\u0443\u0433\u0430",galaxy:"\u0433\u0430\u043B\u0430\u043A\u0442\u0438\u043A\u0430",universe:"\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F",planet:"\u043F\u043B\u0430\u043D\u0435\u0442\u0430",space:"\u043A\u043E\u0441\u043C\u043E\u0441",rocket:"\u0440\u0430\u043A\u0435\u0442\u0430",meteor:"\u043C\u0435\u0442\u0435\u043E\u0440 \u043C\u0435\u0442\u0435\u043E\u0440\u0438\u0442",shower:"\u0434\u043E\u0436\u0434\u044C",rain:"\u0434\u043E\u0436\u0434\u044C",snow:"\u0441\u043D\u0435\u0433",snowflake:"\u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0430",snowman:"\u0441\u043D\u0435\u0433\u043E\u0432\u0438\u043A",ice:"\u043B\u0435\u0434",fire:"\u043E\u0433\u043E\u043D\u044C \u043F\u043B\u0430\u043C\u044F",flame:"\u043F\u043B\u0430\u043C\u044F",thunder:"\u0433\u0440\u043E\u043C",lightning:"\u043C\u043E\u043B\u043D\u0438\u044F",storm:"\u0448\u0442\u043E\u0440\u043C \u0431\u0443\u0440\u044F",wind:"\u0432\u0435\u0442\u0435\u0440",wave:"\u0432\u043E\u043B\u043D\u0430",ocean:"\u043E\u043A\u0435\u0430\u043D",sea:"\u043C\u043E\u0440\u0435",beach:"\u043F\u043B\u044F\u0436",island:"\u043E\u0441\u0442\u0440\u043E\u0432",mountain:"\u0433\u043E\u0440\u0430",volcano:"\u0432\u0443\u043B\u043A\u0430\u043D",forest:"\u043B\u0435\u0441",tree:"\u0434\u0435\u0440\u0435\u0432\u043E \u0435\u043B\u043A\u0430",aurora:"\u0441\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0441\u0438\u044F\u043D\u0438\u0435",car:"\u043C\u0430\u0448\u0438\u043D\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C",sports:"\u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0439",racing:"\u0433\u043E\u043D\u043A\u0430 \u0433\u043E\u043D\u043E\u0447\u043D\u044B\u0439",race:"\u0433\u043E\u043D\u043A\u0430",train:"\u043F\u043E\u0435\u0437\u0434",plane:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",jet:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",airplane:"\u0441\u0430\u043C\u043E\u043B\u0435\u0442",helicopter:"\u0432\u0435\u0440\u0442\u043E\u043B\u0435\u0442",ship:"\u043A\u043E\u0440\u0430\u0431\u043B\u044C",yacht:"\u044F\u0445\u0442\u0430",boat:"\u043B\u043E\u0434\u043A\u0430",bike:"\u0432\u0435\u043B\u043E\u0441\u0438\u043F\u0435\u0434",motorcycle:"\u043C\u043E\u0442\u043E\u0446\u0438\u043A\u043B",bus:"\u0430\u0432\u0442\u043E\u0431\u0443\u0441",truck:"\u0433\u0440\u0443\u0437\u043E\u0432\u0438\u043A",shuttle:"\u0448\u0430\u0442\u0442\u043B",balloon:"\u0448\u0430\u0440\u0438\u043A \u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0448\u0430\u0440",balloons:"\u0448\u0430\u0440\u0438\u043A\u0438",airship:"\u0434\u0438\u0440\u0438\u0436\u0430\u0431\u043B\u044C",ufo:"\u043D\u043B\u043E",crown:"\u043A\u043E\u0440\u043E\u043D\u0430",castle:"\u0437\u0430\u043C\u043E\u043A",palace:"\u0434\u0432\u043E\u0440\u0435\u0446",king:"\u043A\u043E\u0440\u043E\u043B\u044C",queen:"\u043A\u043E\u0440\u043E\u043B\u0435\u0432\u0430",prince:"\u043F\u0440\u0438\u043D\u0446",princess:"\u043F\u0440\u0438\u043D\u0446\u0435\u0441\u0441\u0430",knight:"\u0440\u044B\u0446\u0430\u0440\u044C",sword:"\u043C\u0435\u0447",shield:"\u0449\u0438\u0442",treasure:"\u0441\u043E\u043A\u0440\u043E\u0432\u0438\u0449\u0435",chest:"\u0441\u0443\u043D\u0434\u0443\u043A",gold:"\u0437\u043E\u043B\u043E\u0442\u043E \u0437\u043E\u043B\u043E\u0442\u043E\u0439",golden:"\u0437\u043E\u043B\u043E\u0442\u043E\u0439",silver:"\u0441\u0435\u0440\u0435\u0431\u0440\u043E \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439",diamond:"\u0431\u0440\u0438\u043B\u043B\u0438\u0430\u043D\u0442 \u0430\u043B\u043C\u0430\u0437",diamonds:"\u0431\u0440\u0438\u043B\u043B\u0438\u0430\u043D\u0442\u044B",gem:"\u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C",crystal:"\u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0445\u0440\u0443\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0439",pearl:"\u0436\u0435\u043C\u0447\u0443\u0433",jewel:"\u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u043E\u0441\u0442\u044C",money:"\u0434\u0435\u043D\u044C\u0433\u0438",gun:"\u043F\u0443\u0448\u043A\u0430",coin:"\u043C\u043E\u043D\u0435\u0442\u0430",coins:"\u043C\u043E\u043D\u0435\u0442\u044B",cash:"\u0434\u0435\u043D\u044C\u0433\u0438",lucky:"\u0443\u0434\u0430\u0447\u0430 \u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0439",luck:"\u0443\u0434\u0430\u0447\u0430",box:"\u043A\u043E\u0440\u043E\u0431\u043A\u0430",gift:"\u043F\u043E\u0434\u0430\u0440\u043E\u043A",gifts:"\u043F\u043E\u0434\u0430\u0440\u043A\u0438",present:"\u043F\u043E\u0434\u0430\u0440\u043E\u043A",airdrop:"\u0433\u0440\u0443\u0437",mystery:"\u0442\u0430\u0439\u043D\u0430 \u0437\u0430\u0433\u0430\u0434\u043E\u0447\u043D\u044B\u0439",magic:"\u043C\u0430\u0433\u0438\u044F \u0432\u043E\u043B\u0448\u0435\u0431\u043D\u044B\u0439",wand:"\u043F\u0430\u043B\u043E\u0447\u043A\u0430",potion:"\u0437\u0435\u043B\u044C\u0435",hat:"\u0448\u043B\u044F\u043F\u0430",cowboy:"\u043A\u043E\u0432\u0431\u043E\u0439",pink:"\u0440\u043E\u0437\u043E\u0432\u044B\u0439",blue:"\u0441\u0438\u043D\u0438\u0439 \u0433\u043E\u043B\u0443\u0431\u043E\u0439",red:"\u043A\u0440\u0430\u0441\u043D\u044B\u0439",green:"\u0437\u0435\u043B\u0435\u043D\u044B\u0439",black:"\u0447\u0435\u0440\u043D\u044B\u0439",white:"\u0431\u0435\u043B\u044B\u0439",purple:"\u0444\u0438\u043E\u043B\u0435\u0442\u043E\u0432\u044B\u0439",yellow:"\u0436\u0435\u043B\u0442\u044B\u0439",cake:"\u0442\u043E\u0440\u0442",birthday:"\u0434\u0435\u043D\u044C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",cupcake:"\u043A\u0430\u043F\u043A\u0435\u0439\u043A",donut:"\u043F\u043E\u043D\u0447\u0438\u043A",doughnut:"\u043F\u043E\u043D\u0447\u0438\u043A",cookie:"\u043F\u0435\u0447\u0435\u043D\u044C\u0435",candy:"\u043A\u043E\u043D\u0444\u0435\u0442\u0430",lollipop:"\u043B\u0435\u0434\u0435\u043D\u0435\u0446",chocolate:"\u0448\u043E\u043A\u043E\u043B\u0430\u0434",ice_cream:"\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",icecream:"\u043C\u043E\u0440\u043E\u0436\u0435\u043D\u043E\u0435",cream:"\u043A\u0440\u0435\u043C",coffee:"\u043A\u043E\u0444\u0435",tea:"\u0447\u0430\u0439",milk:"\u043C\u043E\u043B\u043E\u043A\u043E",juice:"\u0441\u043E\u043A",drink:"\u043D\u0430\u043F\u0438\u0442\u043E\u043A",beer:"\u043F\u0438\u0432\u043E",wine:"\u0432\u0438\u043D\u043E",champagne:"\u0448\u0430\u043C\u043F\u0430\u043D\u0441\u043A\u043E\u0435",pizza:"\u043F\u0438\u0446\u0446\u0430",burger:"\u0431\u0443\u0440\u0433\u0435\u0440",fries:"\u043A\u0430\u0440\u0442\u043E\u0448\u043A\u0430 \u0444\u0440\u0438",sushi:"\u0441\u0443\u0448\u0438",ramen:"\u0440\u0430\u043C\u0435\u043D",noodles:"\u043B\u0430\u043F\u0448\u0430",rice:"\u0440\u0438\u0441",bread:"\u0445\u043B\u0435\u0431",watermelon:"\u0430\u0440\u0431\u0443\u0437",apple:"\u044F\u0431\u043B\u043E\u043A\u043E",banana:"\u0431\u0430\u043D\u0430\u043D",strawberry:"\u043A\u043B\u0443\u0431\u043D\u0438\u043A\u0430",peach:"\u043F\u0435\u0440\u0441\u0438\u043A",orange:"\u0430\u043F\u0435\u043B\u044C\u0441\u0438\u043D",lemon:"\u043B\u0438\u043C\u043E\u043D",grape:"\u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434",pineapple:"\u0430\u043D\u0430\u043D\u0430\u0441",avocado:"\u0430\u0432\u043E\u043A\u0430\u0434\u043E",corn:"\u043A\u0443\u043A\u0443\u0440\u0443\u0437\u0430",popcorn:"\u043F\u043E\u043F\u043A\u043E\u0440\u043D",egg:"\u044F\u0439\u0446\u043E",fruit:"\u0444\u0440\u0443\u043A\u0442\u044B",music:"\u043C\u0443\u0437\u044B\u043A\u0430",song:"\u043F\u0435\u0441\u043D\u044F",guitar:"\u0433\u0438\u0442\u0430\u0440\u0430",piano:"\u043F\u0438\u0430\u043D\u0438\u043D\u043E",microphone:"\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",mic:"\u043C\u0438\u043A\u0440\u043E\u0444\u043E\u043D",dj:"\u0434\u0438\u0434\u0436\u0435\u0439",dance:"\u0442\u0430\u043D\u0435\u0446",dancing:"\u0442\u0430\u043D\u0446\u044B",party:"\u0432\u0435\u0447\u0435\u0440\u0438\u043D\u043A\u0430",disco:"\u0434\u0438\u0441\u043A\u043E\u0442\u0435\u043A\u0430",concert:"\u043A\u043E\u043D\u0446\u0435\u0440\u0442",stage:"\u0441\u0446\u0435\u043D\u0430",trophy:"\u0442\u0440\u043E\u0444\u0435\u0439 \u043A\u0443\u0431\u043E\u043A",cup:"\u043A\u0443\u0431\u043E\u043A \u0447\u0430\u0448\u043A\u0430",medal:"\u043C\u0435\u0434\u0430\u043B\u044C",champion:"\u0447\u0435\u043C\u043F\u0438\u043E\u043D",winner:"\u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C",football:"\u0444\u0443\u0442\u0431\u043E\u043B",soccer:"\u0444\u0443\u0442\u0431\u043E\u043B",basketball:"\u0431\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B",baseball:"\u0431\u0435\u0439\u0441\u0431\u043E\u043B",game:"\u0438\u0433\u0440\u0430",gamepad:"\u0433\u0435\u0439\u043C\u043F\u0430\u0434 \u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A",controller:"\u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A",fireworks:"\u0444\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043A \u0441\u0430\u043B\u044E\u0442",firework:"\u0444\u0435\u0439\u0435\u0440\u0432\u0435\u0440\u043A",confetti:"\u043A\u043E\u043D\u0444\u0435\u0442\u0442\u0438",sparkler:"\u0431\u0435\u043D\u0433\u0430\u043B\u044C\u0441\u043A\u0438\u0439 \u043E\u0433\u043E\u043D\u044C",lantern:"\u0444\u043E\u043D\u0430\u0440\u0438\u043A",candle:"\u0441\u0432\u0435\u0447\u0430",lamp:"\u043B\u0430\u043C\u043F\u0430",thumbs:"\u043F\u0430\u043B\u0435\u0446 \u043B\u0430\u0439\u043A",up:"\u0432\u0432\u0435\u0440\u0445",like:"\u043B\u0430\u0439\u043A",ok:"\u043E\u043A",hi:"\u043F\u0440\u0438\u0432\u0435\u0442",hello:"\u043F\u0440\u0438\u0432\u0435\u0442",bye:"\u043F\u043E\u043A\u0430",wow:"\u0432\u0430\u0443",cool:"\u043A\u0440\u0443\u0442\u043E",perfect:"\u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E",good:"\u0445\u043E\u0440\u043E\u0448\u043E",great:"\u043E\u0442\u043B\u0438\u0447\u043D\u043E",nice:"\u043A\u043B\u0430\u0441\u0441",happy:"\u0441\u0447\u0430\u0441\u0442\u043B\u0438\u0432\u044B\u0439",smile:"\u0443\u043B\u044B\u0431\u043A\u0430",laugh:"\u0441\u043C\u0435\u0445",cry:"\u043F\u043B\u0430\u0447",tears:"\u0441\u043B\u0435\u0437\u044B",angry:"\u0437\u043B\u043E\u0439",sad:"\u0433\u0440\u0443\u0441\u0442\u043D\u044B\u0439",clap:"\u0445\u043B\u043E\u043F\u0430\u0442\u044C \u0430\u043F\u043B\u043E\u0434\u0438\u0441\u043C\u0435\u043D\u0442\u044B",applause:"\u0430\u043F\u043B\u043E\u0434\u0438\u0441\u043C\u0435\u043D\u0442\u044B",wink:"\u043F\u043E\u0434\u043C\u0438\u0433\u0438\u0432\u0430\u043D\u0438\u0435",hand:"\u0440\u0443\u043A\u0430",hands:"\u0440\u0443\u043A\u0438",finger:"\u043F\u0430\u043B\u0435\u0446",heart_hands:"\u0441\u0435\u0440\u0434\u0446\u0435 \u0440\u0443\u043A\u0430\u043C\u0438",friend:"\u0434\u0440\u0443\u0433",friends:"\u0434\u0440\u0443\u0437\u044C\u044F",family:"\u0441\u0435\u043C\u044C\u044F",mom:"\u043C\u0430\u043C\u0430",dad:"\u043F\u0430\u043F\u0430",baby:"\u043C\u0430\u043B\u044B\u0448",boy:"\u043C\u0430\u043B\u044C\u0447\u0438\u043A",girl:"\u0434\u0435\u0432\u043E\u0447\u043A\u0430",man:"\u043C\u0443\u0436\u0447\u0438\u043D\u0430",lady:"\u043B\u0435\u0434\u0438",super:"\u0441\u0443\u043F\u0435\u0440",mega:"\u043C\u0435\u0433\u0430",ultra:"\u0443\u043B\u044C\u0442\u0440\u0430",big:"\u0431\u043E\u043B\u044C\u0448\u043E\u0439",little:"\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",small:"\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",mini:"\u043C\u0438\u043D\u0438",giant:"\u0433\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0438\u0439",lion_king:"\u043A\u043E\u0440\u043E\u043B\u044C \u043B\u0435\u0432",glasses:"\u043E\u0447\u043A\u0438",sunglasses:"\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u043E\u0447\u043A\u0438",shoe:"\u0442\u0443\u0444\u043B\u044F",shoes:"\u043E\u0431\u0443\u0432\u044C",dress:"\u043F\u043B\u0430\u0442\u044C\u0435",bag:"\u0441\u0443\u043C\u043A\u0430",perfume:"\u0434\u0443\u0445\u0438",lipstick:"\u043F\u043E\u043C\u0430\u0434\u0430",makeup:"\u043C\u0430\u043A\u0438\u044F\u0436",mirror:"\u0437\u0435\u0440\u043A\u0430\u043B\u043E",comb:"\u0440\u0430\u0441\u0447\u0435\u0441\u043A\u0430",crowned:"\u043A\u043E\u0440\u043E\u043D\u043E\u0432\u0430\u043D\u043D\u044B\u0439",wings:"\u043A\u0440\u044B\u043B\u044C\u044F",wing:"\u043A\u0440\u044B\u043B\u043E",angel:"\u0430\u043D\u0433\u0435\u043B",devil:"\u0434\u044C\u044F\u0432\u043E\u043B",ghost:"\u043F\u0440\u0438\u0437\u0440\u0430\u043A",pumpkin:"\u0442\u044B\u043A\u0432\u0430",halloween:"\u0445\u044D\u043B\u043B\u043E\u0443\u0438\u043D",christmas:"\u0440\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",santa:"\u0441\u0430\u043D\u0442\u0430 \u0434\u0435\u0434 \u043C\u043E\u0440\u043E\u0437",xmas:"\u0440\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u043E",new:"\u043D\u043E\u0432\u044B\u0439",year:"\u0433\u043E\u0434",holiday:"\u043F\u0440\u0430\u0437\u0434\u043D\u0438\u043A",festival:"\u0444\u0435\u0441\u0442\u0438\u0432\u0430\u043B\u044C",carnival:"\u043A\u0430\u0440\u043D\u0430\u0432\u0430\u043B",eid:"\u0438\u0434",ramadan:"\u0440\u0430\u043C\u0430\u0434\u0430\u043D",easter:"\u043F\u0430\u0441\u0445\u0430",house:"\u0434\u043E\u043C",home:"\u0434\u043E\u043C",city:"\u0433\u043E\u0440\u043E\u0434",bridge:"\u043C\u043E\u0441\u0442",tower:"\u0431\u0430\u0448\u043D\u044F",ferris:"\u043A\u043E\u043B\u0435\u0441\u043E \u043E\u0431\u043E\u0437\u0440\u0435\u043D\u0438\u044F",wheel:"\u043A\u043E\u043B\u0435\u0441\u043E",carousel:"\u043A\u0430\u0440\u0443\u0441\u0435\u043B\u044C",swing:"\u043A\u0430\u0447\u0435\u043B\u0438",tent:"\u043F\u0430\u043B\u0430\u0442\u043A\u0430",camping:"\u043A\u0435\u043C\u043F\u0438\u043D\u0433",world:"\u043C\u0438\u0440",earth:"\u0437\u0435\u043C\u043B\u044F",globe:"\u0433\u043B\u043E\u0431\u0443\u0441",journey:"\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",travel:"\u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435",adventure:"\u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435",dream:"\u043C\u0435\u0447\u0442\u0430 \u0441\u043E\u043D",dreams:"\u043C\u0435\u0447\u0442\u044B",wish:"\u0436\u0435\u043B\u0430\u043D\u0438\u0435",hope:"\u043D\u0430\u0434\u0435\u0436\u0434\u0430",peace:"\u043C\u0438\u0440",power:"\u0441\u0438\u043B\u0430",energy:"\u044D\u043D\u0435\u0440\u0433\u0438\u044F",boost:"\u0443\u0441\u043A\u043E\u0440\u0435\u043D\u0438\u0435",level:"\u0443\u0440\u043E\u0432\u0435\u043D\u044C",rising:"\u0432\u043E\u0441\u0445\u043E\u0434\u044F\u0449\u0438\u0439",legend:"\u043B\u0435\u0433\u0435\u043D\u0434\u0430",hero:"\u0433\u0435\u0440\u043E\u0439",warrior:"\u0432\u043E\u0438\u043D",ninja:"\u043D\u0438\u043D\u0434\u0437\u044F",samurai:"\u0441\u0430\u043C\u0443\u0440\u0430\u0439",robot:"\u0440\u043E\u0431\u043E\u0442",alien:"\u043F\u0440\u0438\u0448\u0435\u043B\u0435\u0446",mermaid:"\u0440\u0443\u0441\u0430\u043B\u043A\u0430",fairy:"\u0444\u0435\u044F",wizard:"\u0432\u043E\u043B\u0448\u0435\u0431\u043D\u0438\u043A",witch:"\u0432\u0435\u0434\u044C\u043C\u0430",vampire:"\u0432\u0430\u043C\u043F\u0438\u0440",zombie:"\u0437\u043E\u043C\u0431\u0438",skull:"\u0447\u0435\u0440\u0435\u043F",mask:"\u043C\u0430\u0441\u043A\u0430",crowd:"\u0442\u043E\u043B\u043F\u0430",fans:"\u0444\u0430\u043D\u0430\u0442\u044B",fan:"\u0444\u0430\u043D\u0430\u0442",vip:"\u0432\u0438\u043F",premium:"\u043F\u0440\u0435\u043C\u0438\u0443\u043C",universe_plus:"\u0432\u0441\u0435\u043B\u0435\u043D\u043D\u0430\u044F",paper:"\u0431\u0443\u043C\u0430\u0436\u043D\u044B\u0439",plane_paper:"\u0431\u0443\u043C\u0430\u0436\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u043B\u0435\u0442\u0438\u043A",letter:"\u043F\u0438\u0441\u044C\u043C\u043E",note:"\u0437\u0430\u043F\u0438\u0441\u043A\u0430",photo:"\u0444\u043E\u0442\u043E",camera:"\u043A\u0430\u043C\u0435\u0440\u0430",phone:"\u0442\u0435\u043B\u0435\u0444\u043E\u043D",tv:"\u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440",computer:"\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",clock:"\u0447\u0430\u0441\u044B",watch:"\u0447\u0430\u0441\u044B",key:"\u043A\u043B\u044E\u0447",lock:"\u0437\u0430\u043C\u043E\u043A",bell:"\u043A\u043E\u043B\u043E\u043A\u043E\u043B\u044C\u0447\u0438\u043A",flag:"\u0444\u043B\u0430\u0433",map:"\u043A\u0430\u0440\u0442\u0430",compass:"\u043A\u043E\u043C\u043F\u0430\u0441",anchor:"\u044F\u043A\u043E\u0440\u044C",bubble:"\u043F\u0443\u0437\u044B\u0440\u044C",bubbles:"\u043F\u0443\u0437\u044B\u0440\u0438",slime:"\u0441\u043B\u0430\u0439\u043C",toy:"\u0438\u0433\u0440\u0443\u0448\u043A\u0430",doll:"\u043A\u0443\u043A\u043B\u0430",blocks:"\u043A\u0443\u0431\u0438\u043A\u0438",puzzle:"\u043F\u0430\u0437\u043B",kite:"\u0432\u043E\u0437\u0434\u0443\u0448\u043D\u044B\u0439 \u0437\u043C\u0435\u0439",pinata:"\u043F\u0438\u043D\u044C\u044F\u0442\u0430",sparkle:"\u0431\u043B\u0435\u0441\u043A",shine:"\u0441\u0438\u044F\u043D\u0438\u0435",shining:"\u0441\u0438\u044F\u044E\u0449\u0438\u0439",glow:"\u0441\u0438\u044F\u043D\u0438\u0435",neon:"\u043D\u0435\u043E\u043D",lights:"\u043E\u0433\u043D\u0438"};function Rm(r){let e=[];for(let t of String(r||"").toLowerCase().split(/[^a-z0-9']+/))Am[t]&&e.push(Am[t]);return e.join(" ")}var Cm=null,yl=null,vl=null,_l=r=>String(r||"").toLowerCase().replace(/[^a-zа-яё0-9]+/gi,"");function Or(){return vl||(vl=fetch("assets/giftcatalog.json").then(r=>r.json()).then(r=>{Cm=r,yl=new Map;for(let e of r){for(let t of e.ids||[])yl.set(t,e);e.key=[e.name,e.ru,e.kw||Rm(e.name)].map(_l).join(" ")}return r.sort((e,t)=>(t.cur||0)-(e.cur||0)||e.coins-t.coins),r}).catch(()=>Cm=[]),vl)}function jn(r){if(!r||!yl)return r;let e=(r.ids||[]).map(t=>yl.get(t)).find(Boolean);return e?{...r,img:r.img||e.img,ru:r.ru||e.ru,coins:e.coins}:r}var Ml=r=>qn(r&&r.img)||"assets/gift-unknown.svg",Zu=r=>r&&(r.ru||r.name)||"",Sl=class{constructor(e){this.app=e,this.tab=qt.get("opTab","race"),this.st=null,this.feed=[],this.clean=qt.get("opClean",!1)}mount(){let e=document.getElementById("ui");this.el&&this.el.remove(),this.el=Sn(`<div id="op" class="${this.clean?"clean":""}">
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
        <div class="opbody scroll" id="opBody"></div>
      </div></div>`),e.appendChild(this.el),this.el.querySelectorAll(".optabs .tab").forEach(t=>t.onclick=()=>{this.tab=t.dataset.t,qt.set("opTab",this.tab),this.el.querySelectorAll(".optabs .tab").forEach(n=>n.classList.toggle("on",n===t)),this.render()}),Pe("#cleanBtn",this.el).onclick=()=>{this.clean=!this.clean,qt.set("opClean",this.clean),this.el.classList.toggle("clean",this.clean),setTimeout(()=>this.app.gfx.resize(),50)},Or().then(()=>{this.render(),this.renderGiftsOverlay()}),this.render(),this.renderGiftsOverlay()}unmount(){this.el&&this.el.remove(),this.el=null}op(e,t={}){this.app.net.send({t:"op",a:e,...t})}onState(e){this.st=e,this.tab==="gifts"&&(this.dragging||this.editing)||this.render(),this.renderGiftsOverlay(),this.renderJoin()}onGift(e){let t=jn(e.action?{ids:[e.giftId],name:e.gift}:{ids:[e.giftId],name:e.gift})||{},n=Fs[e.action],i=Pe("#ovFeed",this.el);if(!i)return;let s=Sn(`<div class="toast ${n&&["slow","skid","flat","rocket","ink","drunk","fog","freeze","reverse","tornado","meteor","swap"].includes(n.id)?"bad":"good"}"><img src="${_e(qn(e.img)||Ml(t))}" alt=""><span></span></div>`);for(s.querySelector("span").textContent=`${e.name}: ${Zu(t)||e.gift}${e.count>1?" \xD7"+e.count:""}${n?" \u2192 "+n.short:""}${e.note?" ("+e.note+")":""}`,i.prepend(s);i.children.length>5;)i.lastChild.remove();setTimeout(()=>{s.style.transition="opacity .5s",s.style.opacity="0",setTimeout(()=>s.remove(),500)},6e3),(this.tab==="live"||this.tab==="players")&&this.render()}giftRows(){let e=this.st;return(e&&e.order&&e.order.length?e.order:dl.map(n=>n.id)).map(n=>Fs[n]).filter(Boolean).map(n=>{let i=e&&e.gifts&&e.gifts[n.id]||{},s=i.none?null:jn(i.gift||{ids:[n.gift.id],name:n.gift.name}),a=i.value!=null?i.value:n.param?n.param.def:null;return{a:n,gift:s,count:i.count||n.count||1,value:a,off:!!i.off,c:i}})}renderGiftsOverlay(){let e=this.el&&Pe("#ovGifts",this.el);if(!e)return;let t=this.giftRows().filter(n=>!n.off&&n.gift);e.innerHTML='<h4>\u{1F381} \u041F\u041E\u0414\u0410\u0420\u041A\u0418 \u0412 \u0418\u0413\u0420\u0415</h4><div class="rollwrap"><div class="roll">'+t.map(n=>`<div class="ogr"><img src="${_e(Ml(n.gift))}" alt=""><span class="x">\xD7${n.count}</span><span class="e">${_e(n.a.icon)} ${_e(n.a.id==="join"?"\u0423\u0447\u0430\u0441\u0442\u0438\u0435 \u0432 \u0433\u043E\u043D\u043A\u0435":Ju(n.a,n.value))}</span></div>`).join("")+"</div></div>",requestAnimationFrame(()=>{let n=e.querySelector(".roll"),i=n.scrollHeight-e.querySelector(".rollwrap").clientHeight;e.classList.toggle("scrolling",i>4),e.style.setProperty("--shift",-Math.max(0,i)+"px"),e.style.setProperty("--dur",Math.max(20,t.length*1.6)+"s")})}renderJoin(){let e=this.el&&Pe("#ovJoin",this.el);if(!e)return;let t=this.st||{},n=t.site||t.url||location.host,i=this.giftRows().find(s=>s.a.id==="join");e.innerHTML=`<div class="t">\u{1F3AE} \u0418\u0433\u0440\u0430\u0442\u044C \u0441 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430:</div><div class="u">${_e(String(n).replace(/^https?:\/\//,""))}</div><div class="t" style="display:flex;align-items:center;gap:6px;margin-top:4px">\u0423\u0447\u0430\u0441\u0442\u0438\u0435: <img src="${_e(Ml(i&&i.gift))}" style="width:26px;height:26px" alt=""> ${_e(Zu(i&&i.gift)||"\u0411\u043E\u043A\u0441\u0451\u0440\u0441\u043A\u0438\u0435 \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438")}</div>`}update(e,t){if(!this.el)return;let n=this.app,i=Pe("#ovStand",this.el),s=Pe("#ovTitle",this.el),a="";if(e&&e.rank.length&&(n.phase==="race"||n.phase==="countdown"))a=e.rank.slice(0,12).map(([c,l,h,u,d],f)=>{let m=e.entries.get(c);return m?`<div class="lb"><b>${f+1}</b><span class="c" style="background:${m.gold?"#d4a22a":Yt(m.paint).color}"></span><span class="n">${_e(m.name)}</span>${h?"\u{1F3C1} "+Rs(u):d?'<span class="auto">\u{1F916}</span>':`<span class="small">${Math.max(1,Math.min(e.laps,l+1))}/${e.laps}</span>`}</div>`:""}).join("");else if(n.lobby){let c=n.lobby.players||[];a=`<div class="lb" style="background:rgba(255,45,85,.5)">\u{1F465} \u0412 \u043B\u043E\u0431\u0431\u0438: ${c.length}</div>`+c.slice(0,14).map(l=>`<div class="lb"><span class="c" style="background:${Yt(l.paint).color}"></span><span class="n">${_e(l.name)}</span>${l.ticket?"":'<span class="small">\u0431\u0435\u0437 \u{1F94A}</span>'}</div>`).join("")}i._h!==a&&(i.innerHTML=a,i._h=a);let o="";e&&n.phase==="race"?o=`<span class="hudchip">\u23F1 ${Rs(Math.max(0,t))} \xB7 ${e.laps} ${xl(e.laps,"\u043A\u0440\u0443\u0433","\u043A\u0440\u0443\u0433\u0430","\u043A\u0440\u0443\u0433\u043E\u0432")}</span>`:n.phase==="lobby"&&(o=`<span class="hudchip">${_e(wn[n.lobby?.loc||"city"].icon+" "+wn[n.lobby?.loc||"city"].title)} \xB7 \u0436\u0434\u0451\u043C \u0441\u0442\u0430\u0440\u0442</span>`),s._h!==o&&(s.innerHTML=o,s._h=o)}render(){let e=this.el&&Pe("#opBody",this.el);if(!e)return;let t=this.st;if(!t){e.innerHTML='<div class="small">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026</div>';return}({race:this.tabRace,players:this.tabPlayers,gifts:this.tabGifts,top:this.tabTop,live:this.tabLive}[this.tab]||this.tabRace).call(this,e,t)}tabRace(e,t){let n=this.app,i=t.settings,s=n.race,a=["intro","countdown","race"].includes(t.phase);e.innerHTML=`
      <div class="opsec"><h3>\u041B\u043E\u043A\u0430\u0446\u0438\u044F</h3><div class="locs">${Object.values(wn).map(d=>`<button class="loc ${i.location===d.id?"on":""}" data-loc="${d.id}" ${a?"disabled":""}><span class="i">${d.icon}</span>${_e(d.name)}</button>`).join("")}</div></div>
      <div class="opsec"><h3>\u041A\u0440\u0443\u0433\u043E\u0432: <b id="lapsv">${i.laps}</b></h3><input class="slider" type="range" min="1" max="10" step="1" value="${i.laps}" id="laps">
        <h3 style="margin-top:10px">\u0411\u043E\u0442\u044B: <b id="botsv">${i.bots}</b></h3><input class="slider" type="range" min="0" max="8" step="1" value="${i.bots}" id="bots"></div>
      <div class="opsec col">
        <div class="opstat"><span class="chip">${_e(U_(t.phase))}</span><span class="chip">\u{1F465} ${t.players.filter(d=>d.online).length} \u043E\u043D\u043B\u0430\u0439\u043D</span><span class="chip">\u{1F94A} ${t.players.filter(d=>d.ticket&&d.online).length} \u0441 \u0434\u043E\u0441\u0442\u0443\u043F\u043E\u043C</span></div>
        ${a?'<button class="btn danger" id="end">\u23F9 \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0433\u043E\u043D\u043A\u0443</button>':'<button class="btn primary" id="start">\u25B6 \u0421\u0422\u0410\u0420\u0422 \u0413\u041E\u041D\u041A\u0418</button>'}
        ${t.phase==="results"?'<button class="btn" id="lobby">\u21A9 \u0412 \u043B\u043E\u0431\u0431\u0438</button>':""}
      </div>
      <div class="opsec"><h3>\u041A\u0430\u043C\u0435\u0440\u0430</h3><div class="row" style="flex-wrap:wrap;gap:6px">
        <button class="btn small ${s&&s.camMode==="director"?"gold":""}" data-cam="director">\u{1F3AC} \u0410\u0432\u0442\u043E-\u0440\u0435\u0436\u0438\u0441\u0441\u0451\u0440</button>
        <button class="btn small" data-cam="leader">\u{1F947} \u041B\u0438\u0434\u0435\u0440</button>
        <button class="btn small ${s&&s.camMode==="free"?"gold":""}" data-cam="free">\u{1F54A}\uFE0F \u0421\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u043F\u043E\u043B\u0451\u0442</button></div>
        <div class="small" style="margin:8px 0 4px">\u0421\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0438\u0433\u0440\u043E\u043A\u043E\u043C:</div>
        <div class="col" style="gap:4px">${s?[...s.entries.values()].map(d=>`<button class="oprow" data-follow="${d.slot}" style="border:0;color:inherit;text-align:left"><span class="car" style="background:${Yt(d.paint).color}"></span><span class="nm">${_e(d.name)}${d.bot?" \u{1F916}":""}</span><span class="small">${d.pos?d.pos+" \u043C\u0435\u0441\u0442\u043E":""}</span></button>`).join(""):'<div class="small">\u0412\u043E \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u043D\u043A\u0438 \u0437\u0434\u0435\u0441\u044C \u0441\u043F\u0438\u0441\u043E\u043A \u043C\u0430\u0448\u0438\u043D.</div>'}</div>
        <div class="small" style="margin-top:6px">\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430: W A S D, \u043C\u044B\u0448\u044C (\u0437\u0430\u0436\u0430\u0442\u044C), Q/E \u2014 \u0432\u043D\u0438\u0437/\u0432\u0432\u0435\u0440\u0445, Shift \u2014 \u0431\u044B\u0441\u0442\u0440\u0435\u0435, \u043A\u043E\u043B\u0435\u0441\u043E \u2014 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C. \u041D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435 \u2014 \u0442\u044F\u043D\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C.</div></div>`,e.querySelectorAll("[data-loc]").forEach(d=>d.onclick=()=>this.op("setup",{loc:d.dataset.loc}));let o=Pe("#laps",e),c=Pe("#bots",e);o.oninput=()=>Pe("#lapsv",e).textContent=o.value,o.onchange=()=>this.op("setup",{laps:+o.value}),c.oninput=()=>Pe("#botsv",e).textContent=c.value,c.onchange=()=>this.op("setup",{bots:+c.value});let l=Pe("#start",e);l&&(l.onclick=()=>this.op("start"));let h=Pe("#end",e);h&&(h.onclick=()=>{confirm("\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0433\u043E\u043D\u043A\u0443 \u0441\u0435\u0439\u0447\u0430\u0441? \u0418\u0442\u043E\u0433\u0438 \u043F\u043E\u0441\u0447\u0438\u0442\u0430\u044E\u0442\u0441\u044F \u043F\u043E \u0442\u0435\u043A\u0443\u0449\u0438\u043C \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C.")&&this.op("end")});let u=Pe("#lobby",e);u&&(u.onclick=()=>this.op("lobby")),e.querySelectorAll("[data-cam]").forEach(d=>d.onclick=()=>{let f=this.app.race;if(!f)return Ct("\u041A\u0430\u043C\u0435\u0440\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0433\u043E\u043D\u043A\u0438");let m=d.dataset.cam;m==="leader"?f.setCamera("follow",f.rank.length?f.rank[0][0]:null):f.setCamera(m),this.render()}),e.querySelectorAll("[data-follow]").forEach(d=>d.onclick=()=>{let f=this.app.race;f&&(f.setCamera("follow",+d.dataset.follow),this.render())})}tabPlayers(e,t){let n=[...t.players].sort((i,s)=>s.online-i.online||s.join-i.join);e.innerHTML=`<div class="opsec"><h3>\u0418\u0433\u0440\u043E\u043A\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 (${n.filter(i=>i.online).length})</h3><div class="col" style="gap:4px">${n.map(i=>`<div class="oprow"><img class="av" src="${_e(qn(i.avatar)||"icon.svg")}" alt=""><span class="car" style="background:${Yt(i.paint).color}"></span><span class="nm">${_e(i.name)} <span class="small">@${_e(i.uid)}</span></span>
      <span class="small">${i.online?"\u{1F7E2}":"\u26AA"}${i.ticket?" \u{1F94A}":""}${i.entry!=null?" \u{1F3C1}":""}${i.gifts?" \u{1FA99}"+i.gifts:""}</span>
      ${i.ticket?"":`<button class="mini" data-grant="${_e(i.uid)}" title="\u041F\u0443\u0441\u0442\u0438\u0442\u044C \u0431\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430">\u041F\u0443\u0441\u0442\u0438\u0442\u044C</button>`}
      <button class="mini" data-kick="${_e(i.uid)}">\u041A\u0438\u043A</button><button class="mini red" data-ban="${_e(i.uid)}">${i.banned?"\u0420\u0430\u0437\u0431\u0430\u043D":"\u0411\u0430\u043D"}</button></div>`).join("")||'<div class="small">\u041F\u043E\u043A\u0430 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u0437\u0430\u0448\u0451\u043B \u043D\u0430 \u0441\u0430\u0439\u0442.</div>'}</div></div>
      <div class="opsec"><h3>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u043F\u043E\u0434\u0430\u0440\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u0438\u044F, \u043D\u043E \u043D\u0435 \u0437\u0430\u0448\u043B\u0438 (${t.buyers.length})</h3><div class="col" style="gap:4px">${t.buyers.map(i=>`<div class="oprow"><img class="av" src="${_e(qn(i.avatar)||"icon.svg")}" alt=""><span class="nm">${_e(i.name)} <span class="small">@${_e(i.uid)}</span></span><span class="small">\u{1F94A}\xD7${i.join}</span></div>`).join("")||'<div class="small">\u2014</div>'}</div></div>`,e.querySelectorAll("[data-grant]").forEach(i=>i.onclick=()=>this.op("grant",{uid:i.dataset.grant})),e.querySelectorAll("[data-kick]").forEach(i=>i.onclick=()=>this.op("kick",{uid:i.dataset.kick})),e.querySelectorAll("[data-ban]").forEach(i=>i.onclick=()=>{let s=t.players.find(a=>a.uid===i.dataset.ban);this.op(s&&s.banned?"unban":"ban",{uid:i.dataset.ban})})}tabTop(e){let t=this.app.daily,n=this.app.lastResults;e.innerHTML=`${n?`<div class="opsec"><h3>\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u044F\u044F \u0433\u043E\u043D\u043A\u0430</h3><div class="restable">${n.list.map(i=>`<div class="resrow"><span class="pos p${i.pos}">${i.pos}</span><span class="c" style="background:${Yt(i.paint).color}"></span><span>${_e(i.name)}${i.bot?" \u{1F916}":""}</span><span class="small">${i.finished?Rs(i.time):"\u2014"}</span><span class="pts">${i.points?"+"+i.points:""}</span></div>`).join("")}</div></div>`:""}
      <div class="opsec"><h3>\u0420\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F ${t?"\xB7 \u0433\u043E\u043D\u043E\u043A "+t.races:""}</h3><div class="col" style="gap:4px">${t&&t.list.length?t.list.map((i,s)=>`<div class="oprow"><span class="pos p${s+1}">${s+1}</span><img class="av" src="${_e(qn(i.avatar)||"icon.svg")}" alt=""><span class="nm">${_e(i.name)}</span><span class="small">\u{1F3C6}${i.wins} \xB7 ${i.races} \u0433\u043E\u043D.</span><span class="pts">${i.points}</span></div>`).join(""):'<div class="small">\u041F\u043E\u043A\u0430 \u043F\u0443\u0441\u0442\u043E.</div>'}</div>
      <button class="btn small danger" id="resetDay" style="margin-top:10px">\u041E\u0431\u043D\u0443\u043B\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F</button></div>`,Pe("#resetDay",e).onclick=()=>{confirm("\u0422\u043E\u0447\u043D\u043E \u043E\u0431\u043D\u0443\u043B\u0438\u0442\u044C \u0440\u0435\u0439\u0442\u0438\u043D\u0433 \u0434\u043D\u044F?")&&this.op("resetDay")}}tabLive(e,t){let n=t.settings,i=t.tiktok;e.innerHTML=`
      <div class="opsec col"><h3>\u042D\u0444\u0438\u0440 TikTok</h3>
        <div class="row"><input class="field" id="hostUser" placeholder="\u0422\u0432\u043E\u0439 \u043D\u0438\u043A TikTok" value="${_e(n.hostUser||"")}" autocapitalize="off" spellcheck="false"><button class="btn" id="conn">\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button></div>
        <div class="small">${i.state==="connected"?"\u{1F7E2} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E: "+_e(i.message)+" \xB7 \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439 "+(t.viewers||0):"\u26AA "+_e(i.message||i.state)}</div>
        ${i.state!=="idle"?'<button class="btn small ghost" id="disc">\u041E\u0442\u043A\u043B\u044E\u0447\u0438\u0442\u044C</button>':""}</div>
      <div class="opsec col"><h3>\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0437\u0440\u0438\u0442\u0435\u043B\u0435\u0439</h3><div class="urlbox">${_e(t.site||t.url||location.origin)}</div>
        <div class="small">${t.tunnel?_e(t.tunnel):""}</div><button class="btn small" id="copy">\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button></div>
      <div class="opsec"><h3>\u041F\u0440\u0430\u0432\u0438\u043B\u0430</h3>
        <label class="switch">\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0442\u044C \u043D\u0438\u043A \u043A\u043E\u0434\u043E\u043C \u0432 \u0447\u0430\u0442\u0435 (\u0437\u0430\u0449\u0438\u0442\u0430 \u043E\u0442 \u0447\u0443\u0436\u0438\u0445 \u043D\u0438\u043A\u043E\u0432) <input type="checkbox" id="verifyChat" ${n.verifyChat?"checked":""}></label>
        <label class="switch">\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u2014 \u043D\u0430 \u0432\u0435\u0441\u044C \u044D\u0444\u0438\u0440 (\u0438\u043D\u0430\u0447\u0435 \u043D\u0430 \u043E\u0434\u043D\u0443 \u0433\u043E\u043D\u043A\u0443) <input type="checkbox" id="tmode" ${n.ticketMode==="live"?"checked":""}></label>
        <label class="switch">\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0432\u0445\u043E\u0434 \u0434\u043B\u044F \u0432\u0441\u0435\u0445 (\u0442\u0435\u0441\u0442) <input type="checkbox" id="free" ${n.free?"checked":""}></label>
        <label class="switch">\u0410\u0432\u0442\u043E-\u0441\u0442\u0430\u0440\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0439 \u0433\u043E\u043D\u043A\u0438, \u0441\u0435\u043A (0 = \u0432\u044B\u043A\u043B.) <input type="number" class="field" id="autoNext" min="0" max="300" value="${n.autoNext||0}" style="width:90px;padding:8px"></label>
        <label class="small">\u041E\u0447\u043A\u0438 \u0437\u0430 \u043C\u0435\u0441\u0442\u0430 (\u0447\u0435\u0440\u0435\u0437 \u0437\u0430\u043F\u044F\u0442\u0443\u044E)</label><input class="field" id="points" value="${_e((n.points||[]).join(", "))}"></div>
      <div class="opsec col"><h3>\u041F\u0430\u0440\u043E\u043B\u044C \u0445\u043E\u0441\u0442\u0430</h3><input class="field" type="password" id="pOld" placeholder="\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" autocomplete="off"><input class="field" type="password" id="pNew" placeholder="\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C" autocomplete="off"><button class="btn small" id="pSet">\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C</button></div>
      <div class="opsec col"><h3>\u0421\u0435\u0440\u0432\u0435\u0440 \u043F\u043E\u0434\u043F\u0438\u0441\u0438 TikTok (\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</h3><input class="field" id="euler" placeholder="Euler Stream API key (\u0435\u0441\u043B\u0438 \u0447\u0430\u0441\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \xAB\u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D\xBB)" value="${_e(n.eulerApiKey)}"><button class="btn small" id="eSet">\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043A\u043B\u044E\u0447</button></div>
      <button class="btn ghost" id="logout">\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043C\u0430 \u0445\u043E\u0441\u0442\u0430</button>
      <div class="small" style="margin-top:8px">\u0412\u0435\u0440\u0441\u0438\u044F ${_e(t.version||"")}</div>`,Pe("#conn",e).onclick=()=>this.op("connect",{user:Pe("#hostUser",e).value});let s=Pe("#disc",e);s&&(s.onclick=()=>this.op("disconnect")),Pe("#copy",e).onclick=()=>{navigator.clipboard&&navigator.clipboard.writeText(t.site||t.url||location.origin).then(()=>Ct("\u0421\u0441\u044B\u043B\u043A\u0430 \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0430"))},Pe("#verifyChat",e).onchange=a=>this.op("settings",{verifyChat:a.target.checked}),Pe("#tmode",e).onchange=a=>this.op("settings",{ticketMode:a.target.checked?"live":"race"}),Pe("#free",e).onchange=a=>this.op("settings",{free:a.target.checked}),Pe("#autoNext",e).onchange=a=>this.op("settings",{autoNext:+a.target.value}),Pe("#points",e).onchange=a=>this.op("settings",{points:a.target.value.split(/[,\s]+/).map(Number).filter(o=>o>=0)}),Pe("#pSet",e).onclick=()=>this.op("password",{old:Pe("#pOld",e).value,new:Pe("#pNew",e).value}),Pe("#eSet",e).onclick=()=>this.op("settings",{eulerApiKey:Pe("#euler",e).value.trim()}),Pe("#logout",e).onclick=()=>this.app.opLogout()}tabGifts(e){let t=this.giftRows();e.innerHTML=`<div class="small" style="margin-bottom:8px">\u041D\u0430\u0436\u043C\u0438 \xAB\u041F\u043E\u0434\u0430\u0440\u043E\u043A\xBB, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u043F\u043E\u0434\u0430\u0440\u043E\u043A TikTok. \u0427\u0438\u0441\u043B\u0430: \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0434\u0430\u0440\u043A\u043E\u0432 \u043D\u0443\u0436\u043D\u043E (\xD7) \u0438 \u0441\u0438\u043B\u0430 \u044D\u0444\u0444\u0435\u043A\u0442\u0430. \u0421\u0442\u0440\u043E\u043A\u0438 \u043F\u0435\u0440\u0435\u0442\u0430\u0441\u043A\u0438\u0432\u0430\u0439 \u0437\u0430 \u283F \u2014 \u0432 \u0442\u0430\u043A\u043E\u043C \u043F\u043E\u0440\u044F\u0434\u043A\u0435 \u043E\u043D\u0438 \u043D\u0430 \u043F\u0430\u043D\u0435\u043B\u0438 \u0432 \u044D\u0444\u0438\u0440\u0435.</div>
      <div class="row" style="margin-bottom:8px"><button class="btn small" id="resetAll">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0432\u0441\u0451</button></div>
      <div id="cfg">${t.map(i=>this.cfgRow(i)).join("")}</div>`,Pe("#resetAll",e).onclick=()=>{confirm("\u0412\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435 \u043F\u043E\u0434\u0430\u0440\u043A\u0438 \u0438 \u0447\u0438\u0441\u043B\u0430 \u043F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E?")&&this.op("gifts",{gifts:{},order:[]})};let n=Pe("#cfg",e);n.querySelectorAll(".cfgrow").forEach(i=>this.wireRow(i,t.find(s=>s.a.id===i.dataset.id))),this.wireDrag(n)}cfgRow(e){let t=e.a.param;return`<div class="cfgrow ${e.off?"off":""}" data-id="${e.a.id}">
      <span class="drag">\u283F</span><img class="giftimg" src="${_e(Ml(e.gift))}" alt="">
      <div class="info"><b>${_e(e.a.icon)} ${_e(e.a.id==="join"?e.a.title:Ju(e.a,e.value))}</b><span>${e.gift?_e(Zu(e.gift)):"\u0431\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430 \u2014 \u043D\u0435 \u0441\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442"}</span></div>
      <div class="ctrls">
        <button class="mini" data-pick>\u{1F381} \u041F\u043E\u0434\u0430\u0440\u043E\u043A</button>
        ${e.a.id==="join"?"":`<span class="num"><button data-cd>\u2212</button><input data-count value="${e.count}" inputmode="numeric"><button data-ci>+</button><small>\u0448\u0442.</small></span>`}
        ${t?`<span class="num"><button data-vd>\u2212</button><input data-val value="${e.value}" inputmode="decimal"><button data-vi>+</button><small>${_e(t.label)}</small></span>`:""}
        ${e.a.id==="join"?"":'<button class="mini" data-test>\u0422\u0435\u0441\u0442</button>'}
        <label class="small" style="display:flex;align-items:center;gap:4px"><input type="checkbox" data-on ${e.off?"":"checked"}>\u0432\u043A\u043B</label>
      </div></div>`}sendCfg(e){let t=this.st,n=JSON.parse(JSON.stringify(t.gifts||{}));e(n);let i=t.order&&t.order.length?t.order:dl.map(s=>s.id);t.gifts=n,this.op("gifts",{gifts:n,order:i})}wireRow(e,t){let n=t.a.id,i=t.a.param,s=(l,h)=>this.sendCfg(u=>{u[n]={...u[n]||{},[l]:h}});e.querySelector("[data-pick]").onclick=()=>this.picker(t);let a=e.querySelector("[data-count]");if(a){let l=h=>{h=Math.max(1,Math.min(9999,Math.round(h)||1)),a.value=h,s("count",h)};e.querySelector("[data-cd]").onclick=()=>l(+a.value-1),e.querySelector("[data-ci]").onclick=()=>l(+a.value+1),a.onfocus=()=>this.editing=!0,a.onblur=()=>{this.editing=!1,l(+a.value)}}let o=e.querySelector("[data-val]");if(o&&i){let l=h=>{h=Math.max(i.min,Math.min(i.max,Math.round(h/i.step)*i.step)),o.value=+h.toFixed(2),s("value",+h.toFixed(2))};e.querySelector("[data-vd]").onclick=()=>l(+o.value-i.step),e.querySelector("[data-vi]").onclick=()=>l(+o.value+i.step),o.onfocus=()=>this.editing=!0,o.onblur=()=>{this.editing=!1,l(+o.value)}}let c=e.querySelector("[data-test]");c&&(c.onclick=()=>{this.op("test",{action:n}),Ct("\u0422\u0435\u0441\u0442: "+t.a.title)}),e.querySelector("[data-on]").onchange=l=>s("off",!l.target.checked)}wireDrag(e){e.querySelectorAll(".drag").forEach(t=>{t.addEventListener("pointerdown",n=>{n.preventDefault();let i=t.closest(".cfgrow");this.dragging=!0,i.classList.add("dragging"),t.setPointerCapture(n.pointerId);let s=o=>{let l=[...e.children].filter(u=>u!==i).find(u=>{let d=u.getBoundingClientRect();return o.clientY<d.top+d.height/2});e.insertBefore(i,l||null);let h=e.closest(".scroll");if(h){let u=h.getBoundingClientRect();o.clientY<u.top+30&&(h.scrollTop-=12),o.clientY>u.bottom-30&&(h.scrollTop+=12)}},a=()=>{t.removeEventListener("pointermove",s),t.removeEventListener("pointerup",a),t.removeEventListener("pointercancel",a),i.classList.remove("dragging"),this.dragging=!1;let o=[...e.children].map(c=>c.dataset.id);this.st.order=o,this.op("gifts",{gifts:this.st.gifts||{},order:o}),this.renderGiftsOverlay()};t.addEventListener("pointermove",s),t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a)})})}async picker(e){let t=Sn(`<div class="picker"><div class="pk-box">
      <div class="row" style="justify-content:space-between"><b>\u041F\u043E\u0434\u0430\u0440\u043E\u043A \u0434\u043B\u044F \xAB${_e(e.a.title)}\xBB</b><button class="iconbtn" id="x">\u2715</button></div>
      <input class="field" id="q" placeholder="\u041F\u043E\u0438\u0441\u043A: \u0440\u043E\u0437\u0430, \u043F\u0435\u0440\u0447\u0430\u0442\u043A\u0438, Rose\u2026 \u0438\u043B\u0438 \u0446\u0435\u043D\u0430 (99)" autocomplete="off">
      <div class="row"><button class="btn small" id="def">\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E (${_e(e.a.gift.name)})</button><button class="btn small ghost" id="none">\u0411\u0435\u0437 \u043F\u043E\u0434\u0430\u0440\u043A\u0430</button></div>
      <div class="pk-grid scroll" id="grid"><div class="small">\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043A\u0430\u0442\u0430\u043B\u043E\u0433\u0430\u2026</div></div><div class="small" id="info"></div></div></div>`);document.body.appendChild(t);let n=()=>t.remove();Pe("#x",t).onclick=n,t.addEventListener("pointerdown",h=>{h.target===t&&n()});let i=h=>{this.sendCfg(u=>{let d={...u[e.a.id]||{}};if(delete d.none,delete d.gift,h==="none"?d.none=!0:h&&(d.gift=h),u[e.a.id]=d,h&&h!=="none")for(let[f,m]of Object.entries(u))f!==e.a.id&&m.gift&&(m.gift.ids||[]).some(b=>h.ids.includes(b))&&(delete m.gift,m.none=!0)}),n()};Pe("#def",t).onclick=()=>i(null),Pe("#none",t).onclick=()=>i("none");let s=await Or(),a=Pe("#grid",t),o=Pe("#q",t),c=Pe("#info",t),l=()=>{let h=o.value.trim(),u=_l(h),d=s;if(/^\d+$/.test(h))d=s.filter(f=>String(f.coins)===h||f.ids.includes(+h));else if(u){let f=h.toLowerCase().split(/\s+/).map(_l).filter(Boolean);d=s.filter(m=>f.every(b=>m.key.includes(b)))}a.innerHTML=d.slice(0,240).map(f=>`<button class="pk-tile" data-i="${s.indexOf(f)}"><img src="${_e(f.img)}" alt="" loading="lazy"><span>${_e(f.ru||f.name)}</span><i>\u{1FA99} ${f.coins}</i></button>`).join("")||'<div class="small">\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</div>',c.textContent=`\u041D\u0430\u0439\u0434\u0435\u043D\u043E: ${d.length}`,a.querySelectorAll("[data-i]").forEach(f=>f.onclick=()=>{let m=s[+f.dataset.i];i({ids:m.ids.slice(),name:m.name,ru:m.ru,img:m.img})})};o.addEventListener("input",l),l(),o.focus()}};function U_(r){return{lobby:"\u23F3 \u041B\u043E\u0431\u0431\u0438",intro:"\u{1F3AC} \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0438\u0435",countdown:"\u{1F6A6} \u041E\u0442\u0441\u0447\u0451\u0442",race:"\u{1F3C1} \u0413\u043E\u043D\u043A\u0430 \u0438\u0434\u0451\u0442",results:"\u{1F3C6} \u0418\u0442\u043E\u0433\u0438"}[r]||r}var hi=null,Pm=null,Br=new Set((globalThis.process&&process.env.VEH_NO||"").split(",")),Im=()=>Pm||(Pm=import("./c-QBO2FJDF.js").then(async r=>{hi=r.default,await hi.init()})),Lm={city:{name:"Nissan GT-R R35",mass:1780,comY:.36,cdA:.58,rr:.012,downforce:.9,torque:[[900,330],[2e3,520],[3300,633],[5800,633],[6800,590],[7100,520]],idle:900,redline:7100,gears:[4.056,2.301,1.595,1.248,1.001,.796],final:3.7,shift:.09,eff:.88,front:.4,mu:1.18,muOff:.7,side:1.25,restLen:.22,travel:.12,stiff:42,damp:3.2,comp:2.2,steerLo:.56,steerHi:.06,brakeG:1.25,vmax:87.5,revVmax:9},snow:{name:"Subaru Impreza WRC",mass:1350,comY:.34,cdA:.72,rr:.02,downforce:.5,torque:[[1e3,260],[2e3,460],[3e3,650],[4e3,520],[5e3,430],[5500,390],[6800,300]],idle:1e3,redline:6800,gears:[3.3,2.3,1.8,1.45,1.2,1],final:4.12,shift:.06,eff:.86,front:.5,mu:.62,muOff:.42,side:.9,restLen:.26,travel:.16,stiff:30,damp:2.8,comp:2,steerLo:.62,steerHi:.12,brakeG:.62,vmax:57,revVmax:9},offroad:{name:"GMC Sierra 1500 AT4X",mass:2580,comY:.62,cdA:1.45,rr:.02,downforce:.3,torque:[[700,360],[2e3,520],[4100,624],[5e3,600],[5600,555],[6e3,500]],idle:700,redline:6e3,gears:[4.7,2.99,2.15,1.77,1.52,1.28,1,.85,.69,.64],final:3.23,shift:.22,eff:.84,front:.4,mu:.82,muOff:.66,side:1,restLen:.34,travel:.26,stiff:22,damp:2.4,comp:1.8,steerLo:.6,steerHi:.14,brakeG:.9,vmax:50,revVmax:8}},k_=1.225,$i=9.81,O_=(r,e)=>{let t=r.torque;if(e<=t[0][0])return t[0][1];for(let n=1;n<t.length;n++)if(e<=t[n][0]){let[i,s]=t[n-1],[a,o]=t[n];return s+(o-s)*(e-i)/(a-i)}return t[t.length-1][1]},wl=class{constructor(e){this.track=e,this.world=new hi.World({x:0,y:-$i,z:0}),this.world.timestep=1/60;let t=e.N,n=[],i=u=>e.W[u]/2+e.runoff,s=[-1.25,-1,-.62,-.3,0,.3,.62,1,1.25],a=new Float32Array(t*s.length*3),o=[],c={};for(let u=0;u<t;u++){e.frame(u*2,c);let d=i(u)+2;for(let f=0;f<s.length;f++){let m=s[f]*d,b=(u*s.length+f)*3;a[b]=c.x+c.nx*m,a[b+1]=e.surfaceY(u*2,Math.max(-d+2,Math.min(d-2,m))),a[b+2]=c.z+c.nz*m}}for(let u=0;u<t;u++){let d=(u+1)%t;for(let f=0;f<s.length-1;f++){let m=u*s.length+f,b=d*s.length+f;o.push(m,b,m+1,m+1,b,b+1)}}let l=this.world.createRigidBody(hi.RigidBodyDesc.fixed());this.world.createCollider(hi.ColliderDesc.trimesh(a,new Uint32Array(o)).setFriction(.9).setRestitution(.05),l);let h=4;for(let u=0;u<t;u+=h){let d=u*2+h;e.frame(d,c);let f=h*2+1.6,m=e.halfWidth(d)+e.runoff;for(let b of[-1,1]){let g=b*(m+.6),p=c.x+c.nx*g,x=c.z+c.nz*g,w=e.surfaceY(d,b*m)+1.4,v=Qu(c.heading);this.world.createCollider(hi.ColliderDesc.cuboid(.6,2.4,f/2).setTranslation(p,w,x).setRotation(v).setFriction(.25).setRestitution(.1),l)}}}step(){this.world.step()}dispose(){this.world.free()}},Qu=r=>({x:0,y:Math.sin(r/2),z:0,w:Math.cos(r/2)}),Tl=class{constructor(e,t,n,i){this.tp=e,this.track=e.track,this.spec=Lm[t],this.meta=n;let s=this.spec,a=n.wheels;this.world=e.world;let o=n.size.l,c=n.size.w,l=a.FL.c[2]-a.RL.c[2],h=hi.RigidBodyDesc.dynamic().setCanSleep(!1).setCcdEnabled(!0).setLinearDamping(0).setAngularDamping(.25).setAdditionalMassProperties(s.mass,{x:0,y:0,z:0},{x:s.mass*(1.4**2+o**2)/12*1.2,y:s.mass*(c**2+o**2)/12*1.15,z:s.mass*(c**2+1.2**2)/12*1.6},{x:0,y:0,z:0,w:1});this.body=this.world.createRigidBody(h);let u=Math.min(.55,n.size.h*.35);this.world.createCollider(hi.ColliderDesc.cuboid(c/2-.12,u/2,o/2-.15).setTranslation(0,a.FL.r+u/2-s.comY+.08,0).setDensity(0).setFriction(.3).setRestitution(.05),this.body);let d=this.world.createVehicleController(this.body);d.indexUpAxis=1,d.setIndexForwardAxis=2,this.vc=d,this.keys=["FL","FR","RL","RR"];for(let f of this.keys){let m=a[f];d.addWheel({x:m.c[0],y:m.c[1]-s.comY+s.restLen*.55,z:m.c[2]},{x:0,y:-1,z:0},{x:-1,y:0,z:0},s.restLen,m.r)}for(let f=0;f<4;f++)d.setWheelSuspensionStiffness(f,s.stiff),d.setWheelSuspensionCompression(f,s.comp),d.setWheelSuspensionRelaxation(f,s.damp),d.setWheelMaxSuspensionTravel(f,s.travel),d.setWheelMaxSuspensionForce(f,s.mass*$i*6),d.setWheelFrictionSlip(f,s.mu),d.setWheelSideFrictionStiffness(f,s.side);this.wb=l,this.gear=1,this.rpm=s.idle,this.shiftT=0,this.steer=0,this.clutch=1,this.rail=null,this.air=0,this.off=!1,this.slip=0,this.flipT=0,this.brakeOn=!1,this.fx={},this.reset(i)}reset(e){let t=this.track,n=t.project(e.x,e.z,-1),i=t.surfaceY(n.s,n.d)+this.spec.comY+.12;this.body.setTranslation({x:e.x,y:i,z:e.z},!0),this.body.setRotation(Qu(e.yaw),!0);let s=e.speed||0;this.body.setLinvel({x:Math.sin(e.yaw)*s,y:0,z:Math.cos(e.yaw)*s},!0),this.body.setAngvel({x:0,y:0,z:0},!0),this.i=n.i,this.s=n.s,this.d=n.d,this.rail=null,this.gear=s>20?3:1}get pos(){return this.body.translation()}step(e,t,n,i={}){let s=this.spec,a=1/60,o=this.track,c=Yi(t,n,this.fx),l=this.body,h=this.vc;l.resetForces(!1),l.resetTorques(!1);let u=l.translation(),d=l.rotation(),f=l.linvel(),m=Ga(d,0,0,1),b=Ga(d,0,1,0),g=Ga(d,-1,0,0),p=f.x*m[0]+f.y*m[1]+f.z*m[2],x=f.x*g[0]+f.y*g[1]+f.z*g[2],w=Math.hypot(f.x,f.z),v=Math.atan2(m[0],m[2]),S=o.project(u.x,u.z,this.i,{},40);this.i=S.i,this.s=S.s,this.d=S.d;let M=o.halfWidth(S.s);this.off=Math.abs(S.d)>M+.3;let A=o.zoneAt(S.s);if(c.boost>1&&!c.freeze&&!c.tornado)return this.railStep(e,c,n,w,v);this.rail&&this.leaveRail(w);let y=e.steer||0,E=e.brake?1:0;if(i.autopilot){let K=o.frame(S.s+9+w*.5),se=$u(o,S.s+9+w*.5),ue=Math.atan2(K.x+K.nx*se-u.x,K.z+K.nz*se-u.z);y=Math.max(-1,Math.min(1,-cl(ue-v)*2.4))}c.reverse&&(y=-y),c.drunk&&(y=y*(1-.35*c.drunk)+(Math.sin(n*1.3+3)*.6+Math.sin(n*2.9+1)*.3+Math.sin(n*.55)*.4)*.8*c.drunk),c.flat&&(y+=.16*c.flat);let R=c.drunk?3.5:7;this.steer+=(Math.max(-1,Math.min(1,y))-this.steer)*Math.min(1,a*R);let P=Math.min(1,Math.abs(p)/(s.vmax*.85)),D=s.steerLo+(s.steerHi-s.steerLo)*Math.sqrt(P),B=this.steer*D,N=Math.abs(this.meta.wheels.FL.c[0]-this.meta.wheels.FR.c[0]),k=Math.abs(B)>.001?this.wb/Math.tan(Math.abs(B)):1e9,ee=Math.atan(this.wb/Math.max(.5,k-N/2))*Math.sign(B),F=Math.atan(this.wb/(k+N/2))*Math.sign(B);h.setWheelSteering(0,-(B>0?F:ee)),h.setWheelSteering(1,-(B>0?ee:F));let j=ym({vmax:s.vmax},c)*(this.off?.75:1)*(A&&A.type==="water"?.7:1)*(i.autopilot?.9:1);if(!E&&(i.assist||i.autopilot)&&p>12){let K=s.mu<.8?.82:1,se={brake:s.brakeG*$i*.8*K,latMax:s.mu*$i*(i.autopilot?.95:1.02)*K};Mm({s:S.s},o,se,p,j)&&(E=.7)}(c.freeze||c.tornado)&&(E=1),this.brakeOn=E>0;let G=this.meta.wheels.RL.r,U=()=>s.gears[this.gear-1]*s.final,J=Math.abs(p)/G*60/(2*Math.PI),I=Math.max(s.idle,J*U());this.shiftT>0?this.shiftT-=a:p>.5&&(I>s.redline*.93&&this.gear<s.gears.length?(this.gear++,this.shiftT=s.shift):this.gear>1&&J*s.gears[this.gear-2]*s.final<s.redline*.62&&(this.gear--,this.shiftT=s.shift*.7));let V=!e.brake&&p>-.5?s.launch||s.redline*.5:s.idle;I=Math.max(V,Math.min(s.redline*1.02,J*U()));let ie=E?0:1;(c.freeze||c.tornado)&&(ie=0),p>j&&(ie=0),I>=s.redline&&(ie*=.15),c.slow<1&&(ie*=c.slow);let re=ie*O_(s,I)*U()*s.eff/G;this.shiftT>0&&(re*=.25);let ce=this.off?s.muOff:s.mu;re=Math.min(re,s.mass*$i*ce*.98),this.rpm+=(I+(ie&&J*U()<s.idle*1.5&&p<3?2400:0)-this.rpm)*Math.min(1,a*12);let X=0;e.brake&&!e.hold&&p<.8&&(X=-s.mass*3.5,p<-s.revVmax&&(X=0));let W=s.front,le=X||re;h.setWheelEngineForce(0,le*W/2),h.setWheelEngineForce(1,le*W/2),h.setWheelEngineForce(2,le*(1-W)/2),h.setWheelEngineForce(3,le*(1-W)/2);let de=X?0:E*s.mass*$i*s.brakeG/4*a;for(let K=0;K<4;K++)h.setWheelBrake(K,de);for(let K=0;K<4;K++){let se=ce,ue=s.side;c.flat&&(c.flat>0&&K===1||c.flat<0&&K===0)&&(se*=.45,ue*=.4),c.skid&&K>=2&&(se*=1-.75*c.skid,ue*=1-.85*c.skid),h.setWheelFrictionSlip(K,se),h.setWheelSideFrictionStiffness(K,ue)}let Q=w*w,ve=.5*k_*s.cdA*Q+s.rr*s.mass*$i;A&&A.type==="water"&&(ve+=s.mass*3.5),this.off&&(ve+=s.mass*1.2);let Ge=w>.1?1/w:0;Br.has("drag")||l.addForce({x:-f.x*Ge*ve,y:0,z:-f.z*Ge*ve},!0);let Oe=s.downforce*Q*1.1;Br.has("df")||l.addForce({x:-b[0]*Oe,y:-b[1]*Oe,z:-b[2]*Oe},!0);let Ve=l.angvel(),tt=Ve.x*b[0]+Ve.y*b[1]+Ve.z*b[2],ze=-p*Math.tan(B)/this.wb,$e=s.mu*$i*1.05/Math.max(5,w),Mt=Math.max(-$e,Math.min($e,ze)),Rt=c.skid||c.spin?.1:this.air>.1?0:1,rt=s.mass*(this.meta.size.w**2+this.meta.size.l**2)/12,ct=Mt-tt;if(Br.has("esc")||l.addTorque({x:b[0]*ct*rt*3.2*Rt,y:b[1]*ct*rt*3.2*Rt,z:b[2]*ct*rt*3.2*Rt},!0),!this.air&&w>3&&!Br.has("slip")){let K=(c.skid?.1:1)*(this.track.id==="snow"?.9:2.2)*s.mass;l.addForce({x:-g[0]*x*K,y:0,z:-g[2]*x*K},!0)}let O=o.frame(S.s),dt=B_(O),at=b[1]*dt[2]-b[2]*dt[1],C=b[2]*dt[0]-b[0]*dt[2],_=b[0]*dt[1]-b[1]*dt[0],q=s.mass*(this.air>.2?5:14);Br.has("level")||l.addTorque({x:at*q,y:C*q,z:_*q},!0);let Z=l.angvel(),ne=s.mass*.9;Br.has("roll")||l.addTorque({x:-(Z.x-b[0]*tt)*ne,y:0,z:-(Z.z-b[2]*tt)*ne},!0),c.spin&&l.addTorque({x:0,y:s.mass*18*c.spin,z:0},!0),h.updateVehicle(a),this.world.step();let he=0;for(let K=0;K<4;K++)h.wheelIsInContact(K)&&he++;this.air=he===0?this.air+a:0,this.slip=Math.abs(x),b[1]<.2?this.flipT+=a:this.flipT=Math.max(0,this.flipT-a);let fe=l.translation();if(Math.abs(p)<1.2&&!e.brake&&!c.freeze&&!c.tornado&&!i.frozen?this.stuckT=(this.stuckT||0)+a:this.stuckT=0,this.flipT>1.6||this.stuckT>2.5||fe.y<o.surfaceY(S.s,S.d)-6){this.stuckT=0;let K=o.frame(S.s);this.reset({x:K.x+K.nx*Math.max(-3,Math.min(3,S.d)),z:K.z+K.nz*Math.max(-3,Math.min(3,S.d)),yaw:K.heading,speed:8}),this.flipT=0,this.onReset&&this.onReset()}this.speedF=p}railStep(e,t,n,i,s){let a=this.track,o=1/60,c=this.spec,l=this.body;this.rail||(this.rail={v:Math.max(i,c.vmax*.45),s:this.s,d:this.d,t0:n},l.setBodyType(hi.RigidBodyType.KinematicPositionBased,!0));let h=this.rail,u=c.vmax*t.boost*.92;h.v+=(u-h.v)*Math.min(1,o*1.6),h.s+=h.v*o;let d=a.halfWidth(h.s)-1.6,f=(t.reverse?-1:1)*(e.steer||0);h.d=Math.max(-d,Math.min(d,h.d+f*o*9+($u(a,h.s)-h.d)*o*.6));let m=a.frame(h.s),b=m.x+m.nx*h.d,g=m.z+m.nz*h.d,p=a.surfaceY(h.s,h.d)+c.comY+.1,x=m.heading-f*.12;l.setNextKinematicTranslation({x:b,y:p,z:g}),l.setNextKinematicRotation(Qu(x)),this.steer+=(f-this.steer)*Math.min(1,o*7),this.vc.setWheelSteering(0,-this.steer*.1),this.vc.setWheelSteering(1,-this.steer*.1),this.world.step(),this.i=a.project(b,g,this.i,{},60).i,this.s=h.s%a.L,this.d=h.d,this.railVel={x:m.tx*h.v,z:m.tz*h.v},this.gear=c.gears.length,this.rpm=c.redline*.97,this.air=0,this.off=!1,this.speedF=h.v}leaveRail(e){let t=this.body,n=this.spec,i=this.rail;this.rail=null,t.setBodyType(hi.RigidBodyType.Dynamic,!0);let s=this.track.frame(i.s),a=Math.min(i.v,n.vmax*1.05);t.setLinvel({x:s.tx*a,y:0,z:s.tz*a},!0),t.setAngvel({x:0,y:0,z:0},!0)}state(e={}){let t=this.body,n=t.translation(),i=t.rotation(),s=Ga(i,0,1,0),a=Ga(i,0,0,1),o=this.spec;e.x=n.x-s[0]*o.comY,e.y=n.y-s[1]*o.comY,e.z=n.z-s[2]*o.comY,e.q=i,e.yaw=Math.atan2(a[0],a[2]);let c=this.rail?{x:this.railVel.x,y:0,z:this.railVel.z}:t.linvel();e.vx=c.x,e.vy=c.y||0,e.vz=c.z,e.speed=Math.hypot(c.x,c.z),e.speedF=this.speedF||0,e.steer=this.steer,e.rpm=this.rpm,e.gear=this.gear,e.air=this.air>.08,e.off=this.off,e.slip=this.slip,e.brake=this.brakeOn,e.rail=!!this.rail,e.s=this.s,e.d=this.d,e.i=this.i,e.susp=e.susp||{};for(let l=0;l<4;l++){let h=this.vc.wheelSuspensionLength(l);e.susp[this.keys[l]]=h==null?0:o.restLen*.55-h}return e}dispose(){try{this.world.removeVehicleController(this.vc),this.world.removeRigidBody(this.body)}catch{}}};function Ga(r,e,t,n){let i=r.w*e+r.y*n-r.z*t,s=r.w*t+r.z*e-r.x*n,a=r.w*n+r.x*t-r.y*e,o=-r.x*e-r.y*t-r.z*n;return[i*r.w+o*-r.x+s*-r.z-a*-r.y,s*r.w+o*-r.y+a*-r.x-i*-r.z,a*r.w+o*-r.z+i*-r.y-s*-r.x]}function B_(r){let e=Math.cos(r.bank),t=Math.sin(r.bank);return[-r.nx*t,e,-r.nz*t]}var El=class{constructor(){this.t=null,this.delay=.2,this.jit=.02,this.down=.05,this.age=.05,this.lastArr=0,this.lastSnapT=null}onSnap(e,t,n){if(this.lastSnapT!=null){let s=Math.abs(t-this.lastArr-(e-this.lastSnapT));this.jit=this.jit*.9+Math.min(.5,s)*.1}this.down=this.down*.9+Math.max(0,Math.min(1,t-e))*.1,this.age=this.age*.9+Math.max(0,Math.min(1,n))*.1,this.lastSnapT=e,this.lastArr=t;let i=Math.min(.6,Math.max(.1,this.down+this.age+.07+this.jit*2.5));this.delay+=(i-this.delay)*.05}step(e,t){let n=t-this.delay;if(this.t==null||Math.abs(n-this.t)>1.5)return this.t=n,this.t;let i=n-this.t,s=1+Math.max(-.05,Math.min(.05,i*.5));return this.t+=e*s,this.t}},Al=class{constructor(){this.s=[],this.vis=null}push(e){let t=this.s;if(t.length&&e.t<=t[t.length-1].t){t[t.length-1].t-e.t>3&&(this.s=[e],this.teleported=!0);return}if(t.length){let n=t[t.length-1];Math.hypot(e.x-n.x,e.z-n.z)>Math.max(30,e.speed*(e.t-n.t)*3+10)&&(this.s=[],this.teleported=!0)}this.s.push(e),this.s.length>48&&this.s.shift()}sample(e,t){let n=this.s;if(!n.length)return null;if(e<=n[0].t)return Dm(n[0],t);let i=n.length-1;if(e>=n[i].t){let A=n[i],y=Math.min(.25,e-A.t);return Dm(A,t),t.x+=Math.sin(A.yaw)*A.speed*y,t.z+=Math.cos(A.yaw)*A.speed*y,t.stale=e-A.t,t.acc=n.length>1?(A.speed-n[n.length-2].speed)/Math.max(.02,A.t-n[n.length-2].t):0,t}for(;i>0&&n[i-1].t>e;)i--;let s=n[i-1],a=n[i],o=a.t-s.t,c=(e-s.t)/o,l=2*c*c*c-3*c*c+1,h=c*c*c-2*c*c+c,u=-2*c*c*c+3*c*c,d=c*c*c-c*c,f=Math.sin(s.yaw)*s.speed,m=Math.cos(s.yaw)*s.speed,b=Math.sin(a.yaw)*a.speed,g=Math.cos(a.yaw)*a.speed,p=(a.x-s.x)/o,x=(a.z-s.z)/o,w=f*p+m*x>.5*Math.hypot(f,m)*Math.hypot(p,x),v=w?[f,m]:[p,x],S=w?[b,g]:[p,x];t.x=l*s.x+h*o*v[0]+u*a.x+d*o*S[0],t.z=l*s.z+h*o*v[1]+u*a.z+d*o*S[1],t.y=s.y+(a.y-s.y)*c;let M=a.yaw-s.yaw;return M>Math.PI&&(M-=Math.PI*2),M<-Math.PI&&(M+=Math.PI*2),t.yaw=s.yaw+M*c,t.speed=s.speed+(a.speed-s.speed)*c,t.steer=s.steer+(a.steer-s.steer)*c,t.flags=c<.5?s.flags:a.flags,t.acc=(a.speed-s.speed)/o,t.stale=0,t}};function Dm(r,e){return e.x=r.x,e.y=r.y,e.z=r.z,e.yaw=r.yaw,e.speed=r.speed,e.steer=r.steer,e.flags=r.flags,e.stale=0,e.acc=0,e}function Fm(r,e,t,n){let s=r.speed*e+0*e*e;return Math.max(0,s)/Math.max(.5,1-t*n)}var Ji=new L,Nm=new L,Us=new L,Rl=class{constructor(e){this.cam=e,this.pos=new L,this.look=new L,this.init=!1,this.shake=0,this.fovK=0,this.mode="chase"}update(e,t,{boost:n=1,air:i=!1,portrait:s=!1}={}){let a=this.mode==="far",o=this.mode==="hood",c=o?-.4:(a?11:7.4)+Math.min(3,t.speed*.025)+(s?1.6:0),l=o?1.25:(a?3.9:2.55)+(s?.6:0),h=Math.sin(t.yaw),u=Math.cos(t.yaw);Ji.set(t.x-h*c,t.y+l,t.z-u*c),Us.set(t.x+h*(o?20:6),t.y+(o?1.1:1.05),t.z+u*(o?20:6)),this.init||(this.pos.copy(Ji),this.look.copy(Us),this.init=!0);let d=o?40:9;if(this.pos.x=ji(this.pos.x,Ji.x,d,e),this.pos.z=ji(this.pos.z,Ji.z,d,e),this.pos.y=ji(this.pos.y,Ji.y,i?3:6,e),this.look.x=ji(this.look.x,Us.x,14,e),this.look.z=ji(this.look.z,Us.z,14,e),this.look.y=ji(this.look.y,Us.y,8,e),this.cam.position.copy(this.pos),this.shake>0){this.shake=Math.max(0,this.shake-e*2.5);let b=this.shake*.25;this.cam.position.x+=(Math.random()-.5)*b,this.cam.position.y+=(Math.random()-.5)*b}this.cam.lookAt(this.look);let m=(s?72:60)+Math.min(14,t.speed*.07)+(n>1?8+n*2:0);this.fovK=ji(this.fovK,m,3,e),Math.abs(this.cam.fov-this.fovK)>.05&&(this.cam.fov=this.fovK,this.cam.updateProjectionMatrix())}reset(){this.init=!1}},Cl=class{constructor(e,t){this.cam=e,this.yaw=0,this.pitch=-.2,this.keys=new Set,this.vel=new L,this.on=!1,this.move={x:0,y:0},addEventListener("keydown",i=>{this.on&&!i.target.closest("input,textarea")&&this.keys.add(i.code)}),addEventListener("keyup",i=>this.keys.delete(i.code));let n=null;t.addEventListener("pointerdown",i=>{this.on&&(n={x:i.clientX,y:i.clientY,id:i.pointerId})}),addEventListener("pointermove",i=>{!n||i.pointerId!==n.id||(this.yaw-=(i.clientX-n.x)*.004,this.pitch=Math.max(-1.4,Math.min(1.2,this.pitch-(i.clientY-n.y)*.004)),n.x=i.clientX,n.y=i.clientY)}),addEventListener("pointerup",()=>{n=null}),t.addEventListener("wheel",i=>{this.on&&(this.boost=Math.max(.3,Math.min(6,(this.boost||1)*(i.deltaY>0?.85:1.18))))},{passive:!0})}from(e,t){this.cam.position.copy(e),this.yaw=t,this.pitch=-.25}update(e){let t=this.keys,n=(t.has("ShiftLeft")?90:35)*(this.boost||1),i=(t.has("KeyW")?1:0)-(t.has("KeyS")?1:0)+this.move.y,s=(t.has("KeyD")?1:0)-(t.has("KeyA")?1:0)+this.move.x,a=(t.has("KeyE")||t.has("Space")?1:0)-(t.has("KeyQ")||t.has("ControlLeft")?1:0);Ji.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch)),Nm.set(-Math.cos(this.yaw),0,Math.sin(this.yaw));let o=Us.copy(Ji).multiplyScalar(i*n).addScaledVector(Nm,s*n).add({x:0,y:a*n*.6,z:0});this.vel.lerp(o,1-Math.exp(-e*5)),this.cam.position.addScaledVector(this.vel,e),this.cam.lookAt(Us.copy(this.cam.position).add(Ji))}},Pl=class{constructor(e){this.cam=e,this.a=0}update(e,t,{r:n=7,h:i=2.2,speed:s=.18,lookY:a=.7}={}){this.a+=e*s,this.cam.position.set(t.x+Math.sin(this.a)*n,t.y+i,t.z+Math.cos(this.a)*n),this.cam.lookAt(t.x,t.y+a,t.z)}};var Um=new Ae,z_=new Et,km=new mn(0,0,0,"YXZ"),H_=new L,G_=new L(1,1,1),UT=new L,kT=new L,Il=class{constructor(e,t){this.app=e,this.id=t.id,this.loc=t.loc,this.laps=t.laps,this.track=hl(this.loc),this.goAt=t.goAt,this.countAt=t.countAt,this.introAt=t.introAt,this.you=t.you,this.entries=new Map;for(let n of t.entries)this.addEntry(n);this.play=new El,this.rank=[],this.finished=new Set,this.seq=0,this.sendT=0,this.simT=0,this.acc=0,this.local={s:0,lap:-1,sector:this.track.sectors-1},this.state={},this.sampled={},this.follow=null,this.camMode=e.isOp?"director":"chase",this.dirT=0,t.state&&this.you!=null&&(this.pendingFix={state:t.state})}addEntry(e){let t=new Al;this.entries.set(e.slot,{...e,fx:e.fx||[],trk:t,vis:{x:0,y:0,z:0,yaw:0,speed:0,steer:0,flags:0},spin:0,model:null,pos:0,lap:e.lap??-1,gold:!1,i:-1,shownAt:0})}async load(e){let t=this.app,n=t.gfx,i=await t.ensureWorld(this.loc,a=>e&&e(a*.8));this.world=i;let s=await t.ensureCarAssets(wn[this.loc].car);if(this.assets=s,this.fleet=new il(s,Math.max(4,this.entries.size+2),n.scene),this.you!=null){await Im(),this.phys=new wl(this.track);let a=this.track.gridSlot(this.you);this.veh=new Tl(this.phys,this.loc,s.meta,{x:a.x,z:a.z,yaw:a.yaw}),this.veh.onReset=()=>{t.fx&&t.fx.flash("reset")};let o=this.entries.get(this.you);this.myModel=new Ci(s,o?o.paint:0),n.scene.add(this.myModel.root),this.pendingFix&&this.applyFix(this.pendingFix)}this.chase=new Rl(n.camera),this.chase.mode=t.settings.cam,this.free=t.freeCam||(t.freeCam=new Cl(n.camera,n.canvas)),e&&e(1),this.loaded=!0}raceNow(){return(this.app.net.now()-this.goAt)/1e3}phase(){return this.app.phase}onSnap(e){let t=Tp(e,this._snapCars||(this._snapCars=[]));if(!t)return;let n=0;for(let i of t.cars){let s=this.entries.get(i.slot);if(s){if(i.slot===this.you&&this.veh){s.lastServer=i;continue}s.trk.push({t:i.t,x:i.x,y:i.y,z:i.z,yaw:i.yaw,speed:i.speed,steer:i.steer,flags:i.flags}),i.flags&wp||(n=Math.max(n,t.t-i.t))}}this.play.onSnap(t.t,this.raceNow(),n)}onFix(e){this.veh&&this.applyFix(e)}applyFix(e){let t=e.state;if(this.veh.reset({x:t.x,z:t.z,yaw:t.yaw,speed:Math.hypot(t.vx||0,t.vz||0)}),e.seq!=null&&(this.seq=e.seq),t.lap!=null&&(this.local.lap=t.lap,this.local.sector=t.sector),e.fx){let n=this.entries.get(this.you);n&&(n.fx=e.fx)}this.chase&&e.why==="teleport"&&this.chase.reset(),this.simT=Math.max(this.simT,this.raceNow())}onFx(e){let t=this.entries.get(e.slot);t&&(e.all?t.fx=e.all:e.fx&&t.fx.push(e.fx),e.fx&&e.fx.k==="gold"&&(t.gold=!0),this.app.fx&&this.app.fx.carEffect(this,t,e))}onRank(e){this.rank=e.list,e.list.forEach(([t,n,i,s,a],o)=>{let c=this.entries.get(t);c&&(c.pos=o+1,c.lap=n,c.finished=!!i,c.finishT=s,c.auto=!!a)})}update(e,t){if(!this.loaded)return;let n=this.app,i=n.gfx,s=n.phase,a=this.raceNow(),o=s==="race";if(this.veh){let f=this.entries.get(this.you),m=f?f.fx:[];if(o&&!(f&&f.finished)){this.simT<a-1.5&&(this.simT=a-.25);let p=0,x={assist:n.settings.assist!==!1,autopilot:f&&f.finished};for(;this.simT+1/60<=a+.001&&p<8;)this.veh.step(t,m,this.simT,x),this.simT+=1/60,p++,this.local.s=this.veh.s,Sm(this.local,this.track)==="lap"&&this.local.lap>0&&n.onLocalLap&&n.onLocalLap(this.local.lap);if(this.sendT+=e,this.sendT>=.05){this.sendT=0;let w=this.veh.state(this.state),v=(w.air?Cs:0)|(w.brake?Mp:0)|(w.off?Sp:0)|(w.slip>3?Fa:0);n.net.sendBin(_p(w,this.seq++,this.simT,v))}}else f&&f.finished&&o?this.veh.step({steer:0,brake:0},m,a,{autopilot:!0}):(this.veh.step({steer:0,brake:1,hold:!0},[],0,{}),this.simT=Math.max(0,a));let b=this.veh.state(this.state),g=this.myModel;g.root.position.set(b.x,b.y,b.z),g.root.quaternion.set(b.q.x,b.q.y,b.q.z,b.q.w),g.update(e,b.speedF,this.veh.steer*.5,0,0,b.susp),f&&Object.assign(f.vis,{x:b.x,y:b.y,z:b.z,yaw:b.yaw,speed:b.speed,steer:b.steer,flags:(b.air?Cs:0)|(b.slip>3?Fa:0)})}let c=this.play.step(e,a),l=Math.max(0,a-c),h=i.camera.position,u=[];for(let f of this.entries.values()){if(f.slot===this.you&&this.veh)continue;let m=f.trk.sample(c,this.sampled);m&&(this.predict(f,m,l,e),u.push(f))}u.sort((f,m)=>ed(f.vis,h)-ed(m.vis,h)),this.fleet.begin();let d=n.isOp?3:i.q.lod0?2:0;if(u.forEach((f,m)=>{let b=Math.sqrt(ed(f.vis,h));m<d&&b<40?(f.model||(f.model=new Ci(this.assets,f.paint),f.gold&&f.model.setPaint(f.paint,!0),i.scene.add(f.model.root)),f.model.root.visible=!0,f.model.root.position.set(f.vis.x,f.vis.y,f.vis.z),f.model.root.quaternion.copy(this.orient(f)),f.model.update(e,f.vis.speed,f.vis.steer*.45)):(f.model&&(f.model.root.visible=!1),f.spin+=f.vis.speed/this.assets.meta.wheels.FL.r*e,Um.compose(H_.set(f.vis.x,f.vis.y,f.vis.z),this.orient(f),G_),this.fleet.add(Um,f.paint,f.vis.steer*.45,f.spin,m<i.q.lod1Cars&&b<90?0:1,f.gold))}),this.fleet.commit(),s==="countdown"){let f=Math.max(0,Math.min(5,Math.floor((a+4)/.75)));this.world.setLights(f,!1)}else s==="race"&&a<3?this.world.setLights(0,!0):s==="race"&&this.world.setLights(0,!1);this.updateCamera(e,a),this.world.update(e,i.camera,this.focus||i.camera.position)}predict(e,t,n,i){let s=this.track,a=s.project(t.x,t.z,e.i,{},30);e.i=a.i;let o=Math.min(n,.6),c=s.frame(a.s),l=Fm(t,o,c.k,a.d)*Math.cos(Va(t.yaw-c.heading)),h=s.frame(a.s+l),u=Va(t.yaw-c.heading),d=h.x+h.nx*a.d,f=h.z+h.nz*a.d,m=t.y-s.surfaceY(a.s,a.d)+s.surfaceY(a.s+l,a.d),b=e.vis;if(e.trk.teleported||!e.shownAt)b.x=d,b.y=m,b.z=f,b.yaw=h.heading+u,e.trk.teleported=!1,e.shownAt=1;else{let g=1-Math.exp(-i*12);b.x+=(d-b.x)*g,b.y+=(m-b.y)*g,b.z+=(f-b.z)*g,b.yaw+=Va(h.heading+u-b.yaw)*g}b.speed=t.speed,b.steer=t.steer,b.flags=t.flags}orient(e){let t=this.track,n=t.project(e.vis.x,e.vis.z,e.i,{},20),i=t.frame(n.s),s=t.surfaceY(n.s+2,n.d)-t.surfaceY(n.s-2,n.d),a=-Math.atan2(s,4)*Math.cos(Va(e.vis.yaw-i.heading)),o=e.vis.flags&Cs?.05:0;return km.set(a-o,e.vis.yaw,i.bank*Math.cos(Va(e.vis.yaw-i.heading)),"YXZ"),z_.setFromEuler(km)}focusEntry(){return this.you!=null&&this.veh&&this.camMode==="chase"?this.entries.get(this.you):this.follow!=null&&this.entries.has(this.follow)?this.entries.get(this.follow):(this.rank.length?this.entries.get(this.rank[0][0]):null)||this.entries.values().next().value}updateCamera(e,t){let n=this.app,i=n.gfx,s=i.h>i.w;if(this.camMode==="free"){this.free.on=!0,this.free.update(e),this.focus=i.camera.position;return}this.free.on=!1,this.camMode==="director"&&(this.dirT-=e,(this.dirT<=0||this.follow==null)&&(this.follow=this.pickShot(),this.dirT=7+Math.random()*4,this.chase.reset()));let a=this.focusEntry();if(!a)return;let o=this.you!=null&&a.slot===this.you&&this.veh,c=Yi(a.fx,t,{});this.chase.update(e,a.vis,{boost:c.boost,air:!!(a.vis.flags&Cs),portrait:s}),this.focus=a.vis,o&&this.veh.air>.3&&(this.chase.shake=Math.max(this.chase.shake,.3))}pickShot(){let e=this.rank;if(!e.length)return[...this.entries.keys()][0];let t=e[0][0],n=1/0;for(let i=1;i<Math.min(e.length,8);i++){let s=this.entries.get(e[i-1][0]),a=this.entries.get(e[i][0]);if(!s||!a)continue;let o=Math.hypot(s.vis.x-a.vis.x,s.vis.z-a.vis.z);o<n&&(n=o,t=a.slot)}return n<40&&Math.random()<.7?t:e[Math.random()<.6?0:Math.floor(Math.random()*Math.min(e.length,5))][0]}setCamera(e,t){this.camMode=e,t!=null&&(this.follow=t),this.chase.reset(),e==="free"&&this.free.from(this.app.gfx.camera.position,this.focus&&this.focus.yaw||0)}myPosition(){let e=this.you!=null?this.entries.get(this.you):null;return e?e.pos:0}dispose(){let e=this.app.gfx.scene;this.fleet&&this.fleet.dispose(e);for(let t of this.entries.values())t.model&&(e.remove(t.model.root),t.model.dispose());this.myModel&&(e.remove(this.myModel.root),this.myModel.dispose()),this.veh&&this.veh.dispose(),this.phys&&this.phys.dispose(),this.free&&(this.free.on=!1)}},ed=(r,e)=>(r.x-e.x)**2+(r.z-e.z)**2,Va=r=>(r=(r+Math.PI)%(2*Math.PI),r<0&&(r+=2*Math.PI),r-Math.PI);var Om=[["#ffe27a","#d9a520",16762938],["#ffffff","#b8bec8",14212581],["#ffc79a","#c7773a",13072186]],V_=r=>{r=Math.min(1,Math.max(0,r));let e=1.70158;return 1+(e+1)*(r-1)**3+e*(r-1)**2},td=r=>(r=Math.min(1,Math.max(0,r)),r*r*(3-2*r));function W_(r,e){let t=[[0,0],[.085,0],[.085,.03],[.035,.05],[.022,.16],[.05,.19],[.1,.25],[.12,.36],[.115,.4],[.105,.4],[.105,.37],[0,.3]].map(([s,a])=>new Be(s,a)),n=new Ye({color:r,metalness:1,roughness:.22}),i=new Le(new fa(t,20),n);for(let s of[-1,1]){let a=new Le(new ms(.055,.012,6,12,Math.PI),n);a.position.set(s*.115,.3,0),a.rotation.z=s>0?-Math.PI/2:Math.PI/2,i.add(a)}return i.scale.setScalar(e),i.castShadow=!0,i}function q_(r,e){let[t,n]=Om[e],i=on(512,128,(a,o,c)=>{a.fillStyle="rgba(8,10,20,.78)",a.beginPath(),a.roundRect?a.roundRect(4,14,o-8,c-28,40):a.rect(4,14,o-8,c-28),a.fill();let l=a.createLinearGradient(0,0,0,c);l.addColorStop(0,t),l.addColorStop(1,n),a.fillStyle=l,a.beginPath(),a.arc(64,c/2,44,0,Math.PI*2),a.fill(),a.fillStyle="#1a1206",a.font='900 56px "Russo One", "Arial Black", sans-serif',a.textAlign="center",a.textBaseline="middle",a.fillText(String(e+1),64,c/2+3),a.fillStyle="#fff",a.font='800 46px "Russo One", "Arial Black", sans-serif',a.textAlign="left",a.fillText(r.length>15?r.slice(0,14)+"\u2026":r,124,c/2+3,o-140)},{repeat:!1}),s=new ra(new ur({map:i,transparent:!0,depthWrite:!1}));return s.scale.set(2.6,.65,1),s.renderOrder=5,s}var X_=(()=>{let r=document.createElement("canvas");r.width=r.height=16;let e=r.getContext("2d");e.fillStyle="#fff",e.fillRect(3,5,10,6);let t=new yi(r);return t.colorSpace=vt,t})(),Ll=class{constructor(e,t,n){this.app=e,this.race=t,this.results=n,this.pod=t.world.podium,this.t=0,this.ready=!1,this.gone=!1,this.grp=new Ke,this.pod.grp.add(this.grp),this.mixers=[],this.drivers=[],this.cars=[];let i=e.gfx.scene,s=e.gfx.q;this.confetti=new Ns(i,Math.round(1400*s.particles),{map:X_}),this.foam=new Ns(i,Math.round(700*s.particles)),this.v=new L,this.w=new L,this.load()}async load(){let e;try{e=await rl()}catch{return}if(this.gone)return;let t=this.results.list.slice(0,3),n=this.app.gfx.q;t.forEach((a,o)=>{let c=Yt(a.paint).color,l=Jp(e,{tint:c,clip:o===0?0:2}),h=this.pod.steps[o];l.position.set(h.x,h.y,.15),l.scale.setScalar(.001),l.visible=!1,this.grp.add(l),this.mixers.push(l.userData.mixer);let u=W_(Om[o][2],o===0?1.6:1.15);this.grp.add(u),u.visible=!1;let d=q_(a.name+(a.bot?" \u{1F916}":""),o);if(d.position.set(h.x,h.y+2.95,.2),d.visible=!1,this.grp.add(d),this.drivers.push({d:l,cup:u,tag:d,at:Math.max(this.t,.3)+[2,1.1,.3][o],hand:l.userData.hand("right"),left:l.userData.hand("left"),shown:!1}),this.race.assets){let f=new Ci(this.race.assets,a.paint),m=[[0,.17,7.6,.35],[-7.4,.14,-.6,.55],[7.4,.14,-.6,-.55]][o];f.root.position.set(m[0],m[1],m[2]),f.root.rotation.y=m[3],this.grp.add(f.root),this.cars.push(f)}});let i=Math.max(1,Math.round((n.crowd||.7)*3.4)),s=[[-5.6,5.4],[5.6,5.4],[-10.8,5.8],[10.8,5.8]];for(let a=0;a<Math.min(i,s.length);a++){let o=Zp(e),[c,l]=s[a];o.position.set(c,.14,l),o.rotation.y=Math.atan2(-c,-l),this.grp.add(o),this.mixers.push(o.userData.mixer)}this.ready=!0}update(e,t){this.t+=e;let n=this.t,i=this.pod.grp;if(i.updateMatrixWorld(),this.ready){for(let d of this.mixers)d.update(e);for(let[d,f]of this.drivers.entries()){let m=(n-f.at)/.55;if(m>0&&!f.shown&&(f.shown=!0,f.d.visible=f.tag.visible=f.cup.visible=!0,this.burst(d)),f.shown){let b=Math.max(.001,V_(m));f.d.scale.setScalar(b),f.tag.scale.set(2.6*Math.min(1,b),.65*Math.min(1,b),1)}if(f.hand?(f.hand.getWorldPosition(this.v),this.grp.worldToLocal(this.v),f.cup.position.copy(this.v).add({x:0,y:.02,z:.03})):f.cup.position.set(f.d.position.x+.35,f.d.position.y+1.2,.3),d===0&&f.left&&n>4&&n<13&&Math.random()<.9){f.left.getWorldPosition(this.v);for(let b=0;b<5;b++){let g=Math.sin(n*2.3)*.9+(Math.random()-.5)*.3,p=5+Math.random()*3;this.w.set(Math.sin(g)*p*.6,4+Math.random()*2.5,Math.cos(g)*p).applyQuaternion(i.quaternion),this.foam.emit(this.v.x,this.v.y+.15,this.v.z,this.w.x,this.w.y,this.w.z,1.1+Math.random()*.5,.22,.9,1,.96,.8,.9)}}}for(let d of this.cars)d.update(e,0,0)}if(n>2.6&&Math.random()<.8)for(let d=0;d<3;d++)this.confettiAt((Math.random()-.5)*16,9+Math.random()*3,(Math.random()-.5)*8,0,0);this.confetti.update(e,1.2,2.2),this.foam.update(e,9,.4);let s=t.aspect,a=Math.atan(Math.tan(Ri.degToRad(t.fov)/2)*s),o=!this.app.isOp,c=Math.max(8.5,5.4/Math.tan(a))*(o&&s>=1?1.6:1)*(1.45-.45*td(n/5)),l=-.55+.4*td(n/5)+Math.sin(n*.2)*.42,h=3.4+6*(1-td(n/4.5));this.v.set(Math.sin(l)*c,h,Math.cos(l)*c),i.localToWorld(this.v),this.w.set(0,1.7,0),i.localToWorld(this.w),this.cp=this.cp?this.cp.lerp(this.v,Math.min(1,e*3)):this.v.clone(),t.position.copy(this.cp),t.lookAt(this.w);let u=Math.tan(Ri.degToRad(t.fov)/2);o&&s<1?t.rotateX(-Math.atan(.34*u)):o&&t.rotateY(-Math.atan(.5*u*s))}confettiAt(e,t,n,i,s,a=0){let o=new Se().setHSL(Math.random(),.9,.6);this.v.set(e,t,n),this.pod.grp.localToWorld(this.v),this.confetti.emit(this.v.x,this.v.y,this.v.z,i+(Math.random()-.5)*1.5,s,a+(Math.random()-.5)*1.5,5+Math.random()*3,.12,0,o.r,o.g,o.b,1)}burst(e){let t=e===0?260:90,n=this.app.gfx.q.particles;for(let s=0;s<t*n;s++){let a=s%2?1:-1,o=9+Math.random()*7;this.w.set(-a*(2+Math.random()*4),o,2+Math.random()*3).applyQuaternion(this.pod.grp.quaternion),this.confettiAt(a*10.2,9.6,-4.9,this.w.x,this.w.y,this.w.z)}let i=this.app.audio;i&&(i.cheer&&i.cheer(e===0?.5:.28,e===0?7:3),i.sfx("pop",.5,.7)),e===0&&(this.app.fx.fireworks(),setTimeout(()=>!this.gone&&this.app.fx.fireworks(),2200))}dispose(){this.gone=!0;let e=this.app.gfx.scene;this.pod.grp.remove(this.grp);for(let t of this.cars)t.dispose();this.grp.traverse(t=>{t.isSprite&&(t.material.map.dispose(),t.material.dispose())});for(let t of this.mixers)t.stopAllAction();this.confetti.dispose(e),this.foam.dispose(e)}};function Bm(r){let e=null,t=async()=>{try{let n=await fetch("version.json?t="+Date.now(),{cache:"no-store"});if(!n.ok)return;let i=await n.json();if(e==null){e=i.v;return}i.v!==e&&(await Promise.all((i.files||[]).slice(0,40).map(s=>fetch(s).catch(()=>{}))),r.pendingReload=!0,r.maybeUpdate())}catch{}};t(),setInterval(t,6e4),document.addEventListener("visibilitychange",()=>{document.hidden||t()})}var Wa={bar:Pe("#bootbar"),text:Pe("#boottext"),el:Pe("#boot")},zm=(r,e)=>{Wa.bar.style.width=Math.round(r*100)+"%",e&&(Wa.text.textContent=e)},nd=class{constructor(){xp(),this.settings=Qe,this.gfx=new Kc(Pe("#c")),this.net=yt,this.controls=new ml,this.audio=new pl,this.fx=new fl(this),this.ui=new bl(this),this.host=new Sl(this),this.orbit=new Pl(this.gfx.camera),this.worlds=new Map,this.carAssets=new Map,this.phase="lobby",this.lobby=null,this.you=null,this.race=null,this.isOp=!1,this.connected=!1,this.token=qt.get("token",""),this.opToken=Xc.get("op",""),this.last=performance.now(),this.frameAcc=0,yt.hello=()=>({t:"hello",v:1,token:this.token||void 0,op:this.opToken||void 0}),this.wire();let e=()=>{this.audio.unlock(),vp()};addEventListener("pointerdown",e,{once:!0}),zm(.1,"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u043A \u0438\u0433\u0440\u0435\u2026"),yt.connect(),Or(),requestAnimationFrame(t=>this.frame(t)),Bm(this),"serviceWorker"in navigator&&location.protocol==="https:"&&/github\.io$/.test(location.hostname)&&navigator.serviceWorker.register("sw.js").catch(()=>{}),window.app=this}wire(){yt.on("state",e=>{this.connected=e==="open",e==="offline"&&zm(1,"\u0418\u0433\u0440\u0430 \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 \u0437\u0430\u043F\u0443\u0449\u0435\u043D\u0430 \u0445\u043E\u0441\u0442\u043E\u043C \u2014 \u0437\u0430\u0439\u0434\u0438, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0451\u0442\u0441\u044F \u044D\u0444\u0438\u0440. \u041F\u043E\u0432\u0442\u043E\u0440\u044F\u044E\u2026"),e==="closed"&&this.ui.cur!=="hud"&&Ct("\u0421\u0432\u044F\u0437\u044C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430 \u2014 \u043F\u0435\u0440\u0435\u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u044E\u0441\u044C\u2026")}),yt.on("welcome",e=>{this.version=e.version,this.rules=e.rules,this.live=e.live,this.joinGift=jn(e.rules&&e.rules.joinGift),this.gifts=(e.gifts||[]).map(t=>({...t,gift:jn(t.gift)})),Or().then(()=>{this.joinGift=jn(e.rules&&e.rules.joinGift),this.gifts=(e.gifts||[]).map(t=>({...t,gift:jn(t.gift)}))}),e.proto!==1&&(this.pendingReload=!0),e.op&&(this.isOp=!0,this.showOp()),this.you=e.you,this.isOp||(this.you?this.showLobby():this.ui.home()),this.hideBoot()}),yt.on("lobby",e=>{let t=!this.lobby||this.lobby.loc!==e.loc;this.lobby=e,this.live=e.live,e.you&&(this.you=e.you),t&&this.phase==="lobby"&&this.preloadLobbyWorld(),this.ui.cur==="lobby"&&this.ui.renderLobby(),this.ui.cur==="home"&&t&&this.ui.home(),this.updateShowroom()}),yt.on("auth",e=>{e.stage==="code"?this.ui.verify(e):e.stage==="ok"?(this.token=e.token,qt.set("token",e.token),this.you=e.you,Ct("\u0422\u044B \u0432 \u0438\u0433\u0440\u0435! \u{1F3C1}",{kind:"good"}),this.showLobby()):e.stage==="error"?Ct(e.msg,{kind:"bad",ms:4e3}):e.stage==="out"&&(this.token="",qt.del("token"),this.you=null,this.ui.home())}),yt.on("ticket",()=>{this.ui.cur==="verify"&&this.ui.ticketArrived(),this.you&&(this.you.ticket=!0,this.ui.renderLobby())}),yt.on("race",e=>this.onRace(e)),yt.on("phase",e=>this.onPhase(e)),yt.on("bin",e=>this.race&&this.race.onSnap(e)),yt.on("rank",e=>this.race&&this.race.onRank(e)),yt.on("fx",e=>{this.race&&(e.byName=this.nameOf(e.by),this.race.onFx(e),e.fx&&e.fx.k==="boost"&&e.slot===this.race.you&&this.audio.whoosh(.6))}),yt.on("fix",e=>this.race&&this.race.onFix(e)),yt.on("finish",e=>this.onFinish(e)),yt.on("results",e=>this.onResults(e)),yt.on("daily",e=>{this.daily=e,(this.ui.cur==="lobby"||this.ui.cur==="results")&&this.ui.renderLobby&&this.ui.cur==="lobby"&&this.ui.renderLobby(),this.isOp&&this.host.render()}),yt.on("gift",e=>this.onGift(e.ev)),yt.on("gifts",e=>{this.gifts=e.gifts.map(t=>({...t,gift:jn(t.gift)})),this.joinGift=jn(e.joinGift),this.ui.cur==="lobby"&&this.ui.renderLobby()}),yt.on("world",e=>{e.fx==="fireworks"&&this.fx.fireworks()}),yt.on("toast",e=>Ct(e.msg)),yt.on("kicked",e=>{Ct(e.ban?"\u0425\u043E\u0441\u0442 \u0437\u0430\u043A\u0440\u044B\u043B \u0442\u0435\u0431\u0435 \u0434\u043E\u0441\u0442\u0443\u043F":"\u0425\u043E\u0441\u0442 \u0443\u0431\u0440\u0430\u043B \u0442\u0435\u0431\u044F \u0438\u0437 \u0433\u043E\u043D\u043A\u0438",{kind:"bad",ms:5e3})}),yt.on("opauth",e=>{e.ok?(this.opToken=e.token,Xc.set("op",e.token),this.isOp=!0,this.ui.loginBox&&this.ui.loginBox.remove(),this.showOp(),Ct("\u0420\u0435\u0436\u0438\u043C \u0445\u043E\u0441\u0442\u0430")):e.out?this.opLogout(!0):this.ui.loginErr&&this.ui.loginErr(e.wait?`\u041D\u0435\u0432\u0435\u0440\u043D\u043E. \u041F\u043E\u0434\u043E\u0436\u0434\u0438 ${e.wait} \u0441`:"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C")}),yt.on("opstate",e=>{this.isOp&&(this.opState=e,this.host.onState(e))})}nameOf(e){if(!e)return"";let t=this.race&&[...this.race.entries.values()].find(i=>i.uid===e);if(t)return t.name;let n=this.lobby&&this.lobby.players.find(i=>i.uid===e);return n?n.name:"@"+e}login(e){if(!this.connected)return Ct("\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0438\u0433\u0440\u043E\u0439 \u2014 \u043F\u043E\u0434\u043E\u0436\u0434\u0438 \u0441\u0435\u043A\u0443\u043D\u0434\u0443");yt.send({t:"login",name:e})}opLogin(e){yt.send({t:"oplogin",pass:e})}opLogout(e){yt.send({t:"op",a:"logout"}),Xc.del("op"),this.opToken="",this.isOp=!1,this.host.unmount(),e||Ct("\u0420\u0435\u0436\u0438\u043C \u0445\u043E\u0441\u0442\u0430 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D"),this.you?this.showLobby():this.ui.home()}onGift(e){if(e){if(this.isOp)this.host.onGift(e);else if(this.ui.cur==="hud"||this.ui.cur==="lobby"){let t=Fs[e.action];t&&t.id!=="join"&&e.note!=="\u0433\u043E\u043D\u043A\u0430 \u043D\u0435 \u0438\u0434\u0451\u0442"&&Ct(`${e.name}: ${t.icon} ${t.short}`,{img:e.img||(jn({ids:[e.giftId]})||{}).img,ms:2200})}}}hideBoot(){Wa.el.classList.add("gone"),setTimeout(()=>Wa.el.remove&&(Wa.el.style.display="none"),600)}showLobby(){this.isOp||this.race&&["intro","countdown","race"].includes(this.phase)||(this.ui.lobby(),this.preloadLobbyWorld())}showOp(){this.ui.clear(),this.host.mount(),this.opState&&this.host.onState(this.opState),this.preloadLobbyWorld()}async ensureWorld(e,t){if(this.worlds.has(e)){let s=await this.worlds.get(e);return t&&t(1),s}for(let[s,a]of this.worlds)(await a).dispose(),this.worlds.delete(s);this.fx.dispose();let n=new ul(this.gfx,e),i=n.build(t||(()=>{}),{hostName:this.live&&this.live.user});return this.worlds.set(e,i.then(()=>n)),await i,this.fx.build(this.gfx.scene,this.gfx.q),n}async ensureCarAssets(e){return this.carAssets.has(e)||this.carAssets.set(e,new nl(e).load(this.gfx.q)),this.carAssets.get(e)}async preloadLobbyWorld(){let e=this.lobby&&this.lobby.loc||"city";if(this.showroomLoc===e||this.race)return;this.showroomLoc=e;let t=await this.ensureWorld(e),n=await this.ensureCarAssets(wn[e].car);this.race||this.showroomLoc!==e||(this.world=t,this.assets=n,this.updateShowroom(),setTimeout(()=>!this.race&&rl().catch(()=>{}),4e3))}updateShowroom(){if(!this.world||!this.assets||this.race)return;let e=this.isOp?(this.lobby?.players||[]).slice(0,24):this.you?[this.you]:[];this.showCars=this.showCars||[];let t=e.map(n=>n.uid+":"+n.paint).join(",")+"|"+this.world.loc;if(this.showKey!==t){this.showKey=t;for(let n of this.showCars)this.gfx.scene.remove(n.root),n.dispose();this.showCars=e.map((n,i)=>{let s=new Ci(this.assets,n.paint),a=this.world.track.gridSlot(i);return s.root.position.set(a.x,this.world.track.surfaceY(a.s,a.d),a.z),s.root.rotation.y=a.yaw,this.gfx.scene.add(s.root),s})}}clearShowroom(){for(let e of this.showCars||[])this.gfx.scene.remove(e.root),e.dispose();this.showCars=[],this.showKey=""}async onRace(e){if(this.race&&this.race.id===e.id)return;this.race&&this.endRace(),this.clearShowroom(),this.phase=e.phase;let t=new Il(this,e);this.race=t,this.isOp||this.ui.hud(t);let n=document.createElement("div");if(n.className="waitline",n.style.cssText="position:absolute;left:50%;top:40%;transform:translateX(-50%);background:rgba(8,10,18,.8);padding:10px 16px;border-radius:14px;pointer-events:none",n.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0440\u0430\u0441\u0441\u044B\u2026",document.getElementById("ui").appendChild(n),await t.load(i=>n.textContent="\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u0440\u0430\u0441\u0441\u044B\u2026 "+Math.round(i*100)+"%"),n.remove(),this.race!==t){t.dispose();return}t.you!=null&&this.audio.ready&&this.audio.startEngine(t.loc),As.want=!0,As(!0)}onPhase(e){let t=this.phase;this.phase=e.phase,e.phase==="lobby"&&(this.endRace(),this.showroomLoc=null,this.isOp?this.preloadLobbyWorld():this.showLobby(),this.maybeUpdate()),e.phase==="race"&&t!=="race"&&(this.audio.beep(1320,.5,.4),this.audio.cheer(.22,4.5),this.race&&this.race.world&&(this.race.world.marshal.wave=4),this.ui.countdown&&this.ui.countdown(0),setTimeout(()=>this.ui.countdown&&this.ui.countdown(-1),900)),this.isOp&&this.host.render()}onFinish(e){if(!this.race)return;let t=this.race.you===e.slot;this.race.world&&(this.race.world.marshal.wave=Math.max(this.race.world.marshal.wave,7)),t?(this.ui.banner(e.pos===1?"\u041F\u041E\u0411\u0415\u0414\u0410!":"\u0424\u0418\u041D\u0418\u0428",`${e.pos} \u043C\u0435\u0441\u0442\u043E \xB7 ${e.time.toFixed(2)} \u0441`,3500),this.audio.sfx("horn",.5),this.fx.fireworks()):e.pos<=3&&Ct(`\u{1F3C1} ${e.name} \u2014 ${e.pos} \u043C\u0435\u0441\u0442\u043E!`,{kind:"good"})}onResults(e){this.lastResults=e,this.phase="results",this.audio.stopEngine(),this.audio.silenceOthers(),this.race&&this.showPodium(e),this.isOp?this.host.render():this.ui.results(e)}showPodium(e){let t=this.race;!t||!t.world||!t.world.podium||!e.list.length||(this.podium&&this.podium.dispose(),this.podium=new Ll(this,t,e))}endRace(){this.podium&&(this.podium.dispose(),this.podium=null),this.race&&(this.race.dispose(),this.race=null),this.audio.stopEngine(),this.audio.silenceOthers(),this.fx.clearScreen(),As.want=!1,As(!1),this.world&&this.world.setLights(0,!1)}onLocalLap(e){this.race&&e<this.race.laps&&(this.ui.banner(`\u041A\u0420\u0423\u0413 ${e+1}`,e+1===this.race.laps?"\u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439!":"",1600),this.audio.beep(990,.12,.25))}maybeUpdate(){this.pendingReload&&!this.race&&(qt.set("updatedAt",Date.now()),location.reload())}frame(e){requestAnimationFrame(o=>this.frame(o));let t=e-this.last,n=1e3/(Qe.fps||60);if(t<n-2)return;this.last=e;let i=Math.min(.1,t/1e3),s=this.gfx,a=this.race;if(a&&a.loaded){let o=a.raceNow();if(this.phase==="countdown"){let u=Math.max(0,Math.min(5,Math.floor((this.net.now()-a.countAt)/700)+1));u!==this.lastLight&&(this.lastLight=u,u>0&&this.audio.beep(660,.16,.3),this.ui.cur==="hud"&&this.ui.el&&(this.ui.el.querySelector("#count").innerHTML=`<div class="lights">${[0,1,2,3,4].map(d=>`<i class="${d<u?"on":""}"></i>`).join("")}</div>`))}else this.lastLight=-1;let c=this.controls.read(i);if(a.update(i,c),this.fx.update(i,a,o),a.you!=null&&a.veh){let u=a.entries.get(a.you),d=Yi(u?u.fx:[],o,this._fx||(this._fx={})),f=a.state;if(this.audio.updateEngine(f.rpm,c.brake?0:this.phase==="race"?1:.15,f.speed,f.slip,d.boost,f.off),this.fx.screenFx(d,i),s.scene.fog){let m=s.q.dist;s.scene.fog.far=d.fog?m*(1-.88*d.fog)+40:a.loc==="city"?m*2.6:m*1.02,s.scene.fog.near=d.fog?4:m*.18}}let l=s.camera,h=[...a.entries.values()].filter(u=>u.slot!==a.you&&u.vis).sort((u,d)=>(u.vis.x-l.position.x)**2+(u.vis.z-l.position.z)**2-((d.vis.x-l.position.x)**2+(d.vis.z-l.position.z)**2)).slice(0,3).map(u=>u.vis);this.audio.updateOthers(h,l),this.isOp?this.host.update(a,o):this.ui.updateHud(a,o),this.podium&&this.podium.update(i,s.camera),a.world.hype=this.podium?1:this.phase==="countdown"?.7:this.phase==="race"?o<6?1:.35:.15}else if(this.world&&this.world.ready){let o=this.world.track,c=o.gridSlot(0),l={x:c.x,y:o.surfaceY(c.s,c.d),z:c.z};if(this.isOp){let h=Math.max(1,this.showCars?.length||1),u=o.gridSlot(Math.min(h-1,11)),d=o.frame(u.s-22);this.hostCamT=(this.hostCamT||0)+i;let f=Math.sin(this.hostCamT*.15)*5;s.camera.position.set(d.x+d.nx*f,o.surfaceY(d.s||u.s,0)+11,d.z+d.nz*f);let m=o.frame((c.s+u.s)/2+6);s.camera.lookAt(m.x,o.surfaceY(c.s,0)+.5,m.z)}else this.orbit.update(i,l,{r:7.5,h:2.1,speed:.16,lookY:.6});this.devCam&&(s.camera.position.copy(this.devCam.p),s.camera.lookAt(this.devCam.t)),this.podium&&this.podium.update(i,s.camera),this.world.hype=.1,this.world.update(i,s.camera,l);for(let h of this.showCars||[])h.update(i,0,0);this.isOp&&this.host.update(null,0)}if(s.render(),s.adapt(t),Qe.showFps){this.fpsEl=this.fpsEl||document.body.appendChild(Object.assign(document.createElement("div"),{style:"position:fixed;left:4px;bottom:4px;font:11px monospace;color:#9f9;z-index:99;pointer-events:none"}));let o=s.renderer.info.render;this.fpsEl.textContent=`${s.fps} fps \xB7 ${s.qName} \xB7 x${s.scale.toFixed(2)} \xB7 ${o.calls} calls \xB7 ${o.triangles/1e3|0}k`}else this.fpsEl&&(this.fpsEl.remove(),this.fpsEl=null)}};new nd;
