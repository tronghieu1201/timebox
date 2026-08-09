/* Timebox 3D navigation — Three.js + GSAP */
(()=>{var Gh=Object.freeze([{id:"family",label:"Gia \u0111\xECnh",description:"Nh\u1EEFng kho\u1EA3nh kh\u1EAFc b\xECnh y\xEAn c\xF9ng gia \u0111\xECnh.",iconClass:"fas fa-house-user",color:"#ff4d8d",orbitSpeed:.72,orbit:0,phase:.2},{id:"thoughts",label:"L\u0103ng k\xEDnh c\u1EE7a Hi\u1EBFu",description:"Nh\xECn th\u1EBF gi\u1EDBi qua nh\u1EEFng suy ngh\u0129 r\u1EA5t ri\xEAng.",iconClass:"fas fa-eye",color:"#8b5cf6",orbitSpeed:.83,orbit:1,phase:1.1},{id:"keepsakes",label:"T\u1EA1m l\u01B0u t\u1EA1m gi\u1EEF",description:"M\u1ED9t kho\u1EA3ng nh\u1ECF d\xE0nh cho \u0111i\u1EC1u ch\u01B0a mu\u1ED1n qu\xEAn.",iconClass:"fas fa-infinity",color:"#14b8a6",orbitSpeed:.91,orbit:2,phase:2.1},{id:"friends",label:"Nh\u1EEFng th\u1EB1ng c\u1ED1t \u0111\u1ED9t",description:"Tu\u1ED5i tr\u1EBB, t\xECnh b\u1EA1n v\xE0 nh\u1EEFng l\u1EA7n c\u01B0\u1EDDi h\u1EBFt c\u1EE1.",iconClass:"fas fa-users",color:"#38bdf8",orbitSpeed:1.02,orbit:0,phase:3.15},{id:"campus",label:"Sinh vi\xEAn",description:"Nh\u1EADt k\xFD c\u1EE7a nh\u1EEFng th\xE1ng ng\xE0y tr\xEAn gi\u1EA3ng \u0111\u01B0\u1EDDng.",iconClass:"fas fa-graduation-cap",color:"#cbd5e1",orbitSpeed:1.11,orbit:1,phase:4.05},{id:"cooking",label:"N\u1EA5u \u0103n",description:"Nh\u1EEFng b\u1EEFa c\u01A1m gi\u1EA3n d\u1ECB v\xE0 \u0111\u1EA7y c\xE2u chuy\u1EC7n.",iconClass:"fas fa-utensils",color:"#fb923c",orbitSpeed:.78,orbit:2,phase:5.15},{id:"upload",label:"Upload",description:"G\u1EEDi th\xEAm m\u1ED9t t\u1EA5m \u1EA3nh v\xE0o d\xF2ng k\xFD \u1EE9c.",iconClass:"fas fa-upload",color:"#60a5fa",orbitSpeed:.96,orbit:0,phase:5.85},{id:"feedback",label:"Feedback",description:"\u0110\u1EC3 l\u1EA1i m\u1ED9t suy ngh\u0129 d\xE0nh cho Timebox.",iconClass:"fas fa-comment-dots",color:"#f8fafc",orbitSpeed:1.16,orbit:1,phase:6.55}]),Wh=Object.freeze([{radiusX:5.1,radiusZ:3.35,tiltX:-.2,tiltZ:.08,color:"#526174"},{radiusX:6.15,radiusZ:4,tiltX:.22,tiltZ:-.1,color:"#5b6470"},{radiusX:7.1,radiusZ:4.65,tiltX:-.08,tiltZ:.18,color:"#4b5b6b"}]),Xh=Object.freeze({earthRadius:2.05,autoRotateSpeed:.055,focusDuration:1.05,cameraZ:15.5,cameraFocusZ:13.9,resumeDelay:3200,dragSensitivity:.0062});var xu=0,rc=1,vu=2;var ac=1,yu=2,kn=3,ti=0,ve=1,vn=2,ii=0,_n=1,zr=2,oc=3,lc=4,Mu=5,xi=100,Su=101,bu=102,Tu=103,Eu=104,wu=200,Au=201,Cu=202,Ru=203,Ua=204,Na=205,Pu=206,Iu=207,Du=208,Lu=209,Uu=210,Nu=211,Fu=212,Ou=213,Bu=214,so=0,ro=1,ao=2,Gi=3,oo=4,lo=5,co=6,ho=7,cc=0,zu=1,ku=2,si=0,Vu=1,Hu=2,Gu=3,uo=4,Wu=5,Xu=6,qu=7;var hc=300,$i=301,Ji=302,fo=303,po=304,kr=306,Fn=1e3,Nn=1001,Fa=1002,xn=1003,Yu=1004;var Vr=1005;var Rn=1006,mo=1007;var bi=1008;var In=1009,uc=1010,dc=1011,Hs=1012,go=1013,Ti=1014,Vn=1015,Gs=1016,_o=1017,xo=1018,Ws=1020,fc=35902,pc=1021,mc=1022,yn=1023,Rs=1026,Xs=1027,gc=1028,vo=1029,_c=1030,yo=1031;var Mo=1033,Hr=33776,Gr=33777,Wr=33778,Xr=33779,So=35840,bo=35841,To=35842,Eo=35843,wo=36196,Ao=37492,Co=37496,Ro=37808,Po=37809,Io=37810,Do=37811,Lo=37812,Uo=37813,No=37814,Fo=37815,Oo=37816,Bo=37817,zo=37818,ko=37819,Vo=37820,Ho=37821,qr=36492,Go=36494,Wo=36495,xc=36283,Xo=36284,qo=36285,Yo=36286;var xr=2300,Oa=2301,Da=2302,$l=2400,Jl=2401,Kl=2402;var Zu=3200,$u=3201;var vc=0,Ju=1,Dn="",Se="srgb",Wi="srgb-linear",vr="linear",Zt="srgb";var Hi=7680;var Ql=519,Ku=512,Qu=513,ju=514,yc=515,td=516,ed=517,nd=518,id=519,jl=35044;var Mc="300 es",Cn=2e3,yr=2001;var ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qh=1234567,gr=Math.PI/180,Ps=180/Math.PI;function qs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[s&255]+Fe[s>>8&255]+Fe[s>>16&255]+Fe[s>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function zt(s,t,e){return Math.max(t,Math.min(e,s))}function Sc(s,t){return(s%t+t)%t}function tp(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function ep(s,t,e){return s!==t?(e-s)/(t-s):0}function _r(s,t,e){return(1-e)*s+e*t}function np(s,t,e,n){return _r(s,t,1-Math.exp(-e*n))}function ip(s,t=1){return t-Math.abs(Sc(s,t*2)-t)}function sp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function rp(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ap(s,t){return s+Math.floor(Math.random()*(t-s+1))}function op(s,t){return s+Math.random()*(t-s)}function lp(s){return s*(.5-Math.random())}function cp(s){s!==void 0&&(qh=s);let t=qh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(s){return s*gr}function up(s){return s*Ps}function dp(s){return(s&s-1)===0&&s!==0}function fp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function pp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function mp(s,t,e,n,i){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),d=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*_,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*_,o*c);break;case"ZYZ":s.set(l*_,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function As(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function We(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Ei={DEG2RAD:gr,RAD2DEG:Ps,generateUUID:qs,clamp:zt,euclideanModulo:Sc,mapLinear:tp,inverseLerp:ep,lerp:_r,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:ap,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:fp,floorPowerOfTwo:pp,setQuaternionFromProperEuler:mp,normalize:We,denormalize:As},kt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ni=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a+0],p=r[a+1],_=r[a+2],g=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=d,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(u!==g||l!==d||c!==p||h!==_){let m=1-o,f=l*d+c*p+h*_+u*g,M=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){let E=Math.sqrt(S),w=Math.atan2(E,f*M);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}let x=o*M;if(l=l*m+d*x,c=c*m+p*x,h=h*m+_*x,u=u*m+g*x,m===1-o){let E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*p-c*d,t[e+1]=l*_+h*d+c*u-o*p,t[e+2]=c*_+h*p+o*d-l*u,t[e+3]=h*_-o*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u+d*p*_;break;case"YZX":this._x=d*h*u+c*p*_,this._y=c*p*u+d*h*_,this._z=c*h*_-d*p*u,this._w=c*h*u-d*p*_;break;case"XZY":this._x=d*h*u-c*p*_,this._y=c*p*u-d*h*_,this._z=c*h*_+d*p*u,this._w=c*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),h=2*(o*e-r*i),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wl=new N,Yh=new ni,Ut=class s{constructor(t,e,n,i,r,a,o,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c)}set(t,e,n,i,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],g=i[0],m=i[3],f=i[6],M=i[1],S=i[4],x=i[7],E=i[2],w=i[5],C=i[8];return r[0]=a*g+o*M+l*E,r[3]=a*m+o*S+l*w,r[6]=a*f+o*x+l*C,r[1]=c*g+h*M+u*E,r[4]=c*m+h*S+u*w,r[7]=c*f+h*x+u*C,r[2]=d*g+p*M+_*E,r[5]=d*m+p*S+_*w,r[8]=d*f+p*x+_*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,_=e*u+n*d+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-o*e)*g,t[6]=p*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Al.makeScale(t,e)),this}rotate(t){return this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ut;function bc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sd(){let s=Is("canvas");return s.style.display="block",s}var Zh={};function Xi(s){s in Zh||(Zh[s]=!0,console.warn(s))}function rd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var $h=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jh=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gp(){let s={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Zt&&(i.r=jn(i.r),i.g=jn(i.g),i.b=jn(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Zt&&(i.r=Cs(i.r),i.g=Cs(i.g),i.b=Cs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?vr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Xi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Xi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Wi]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Se},outputColorSpaceConfig:{drawingBufferColorSpace:Se}},[Se]:{primaries:t,whitePoint:n,transfer:Zt,toXYZ:$h,fromXYZ:Jh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Se}}}),s}var Wt=gp();function jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Cs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ps,Ba=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ps===void 0&&(ps=Is("canvas")),ps.width=t.width,ps.height=t.height;let i=ps.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ps}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Is("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(jn(e[n]/255)*255):e[n]=jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_p=0,Ds=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=qs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Cl(i[a].image)):r.push(Cl(i[a]))}else r=Cl(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xp=0,Rl=new N,qe=class s extends ei{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Nn,i=Nn,r=Rn,a=bi,o=yn,l=In,c=s.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=qs(),this.name="",this.source=new Ds(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Fn:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Fn:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=hc;qe.DEFAULT_ANISOTROPY=1;var he=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],_=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(p+1)/2,E=(f+1)/2,w=(h+d)/4,C=(u+g)/4,R=(_+m)/4;return S>x&&S>E?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=w/n,r=C/n):x>E?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=w/i,r=R/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=C/r,i=R/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},za=class extends ei{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);let i={width:t,height:e,depth:n.depth},r=new qe(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ds(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},On=class extends za{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mr=class extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ka=class extends qe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,En):En.fromBufferAttribute(r,a),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ha.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox)),ha.applyMatrix4(t.matrixWorld),this.union(ha)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),ua.subVectors(this.max,ur),ms.subVectors(t.a,ur),gs.subVectors(t.b,ur),_s.subVectors(t.c,ur),ui.subVectors(gs,ms),di.subVectors(_s,gs),Bi.subVectors(ms,_s);let e=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Bi.z,Bi.y,ui.z,0,-ui.x,di.z,0,-di.x,Bi.z,0,-Bi.x,-ui.y,ui.x,0,-di.y,di.x,0,-Bi.y,Bi.x,0];return!Pl(e,ms,gs,_s,ua)||(e=[1,0,0,0,1,0,0,0,1],!Pl(e,ms,gs,_s,ua))?!1:(da.crossVectors(ui,di),e=[da.x,da.y,da.z],Pl(e,ms,gs,_s,ua))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new N,new N,new N,new N,new N,new N,new N,new N],En=new N,ha=new vi,ms=new N,gs=new N,_s=new N,ui=new N,di=new N,Bi=new N,ur=new N,ua=new N,da=new N,zi=new N;function Pl(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);let o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),l=t.dot(zi),c=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vp=new vi,dr=new N,Il=new N,yi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vp.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(dr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(Il)),this.expandByPoint(dr.copy(t.center).sub(Il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},$n=new N,Dl=new N,fa=new N,fi=new N,Ll=new N,pa=new N,Ul=new N,qi=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=$n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($n.copy(this.origin).addScaledVector(this.direction,e),$n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dl.copy(t).add(e).multiplyScalar(.5),fa.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Dl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(fa),o=fi.dot(this.direction),l=-fi.dot(fa),c=fi.lengthSq(),h=Math.abs(1-a*a),u,d,p,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let g=1/h;u*=g,d*=g,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Dl).addScaledVector(fa,d),p}intersectSphere(t,e){$n.subVectors(t.center,this.origin);let n=$n.dot(this.direction),i=$n.dot($n)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(o=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,$n)!==null}intersectTriangle(t,e,n,i,r){Ll.subVectors(e,t),pa.subVectors(n,t),Ul.crossVectors(Ll,pa);let a=this.direction.dot(Ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fi.subVectors(this.origin,t);let l=o*this.direction.dot(pa.crossVectors(fi,pa));if(l<0)return null;let c=o*this.direction.dot(Ll.cross(fi));if(c<0||l+c>a)return null;let h=-o*fi.dot(Ul);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ae=class s{constructor(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,m)}set(t,e,n,i,r,a,o,l,c,h,u,d,p,_,g,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/xs.setFromMatrixColumn(t,0).length(),r=1/xs.setFromMatrixColumn(t,1).length(),a=1/xs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+p*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d+g*o,e[4]=_*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,_=c*h,g=c*u;e[0]=d-g*o,e[4]=-a*u,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*h,p=a*u,_=o*h,g=o*u;e[0]=l*h,e[4]=_*c-p,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=p*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=g-d*u,e[8]=_*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+_,e[10]=d-g*u}else if(t.order==="XZY"){let d=a*l,p=a*c,_=o*l,g=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=a*h,e[9]=p*u-_,e[2]=_*u-p,e[6]=o*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,Mp)}lookAt(t,e,n){let i=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),pi.crossVectors(n,ln),pi.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),pi.crossVectors(n,ln)),pi.normalize(),ma.crossVectors(ln,pi),i[0]=pi.x,i[4]=ma.x,i[8]=ln.x,i[1]=pi.y,i[5]=ma.y,i[9]=ln.y,i[2]=pi.z,i[6]=ma.z,i[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],g=n[6],m=n[10],f=n[14],M=n[3],S=n[7],x=n[11],E=n[15],w=i[0],C=i[4],R=i[8],v=i[12],T=i[1],P=i[5],H=i[9],O=i[13],k=i[2],Y=i[6],G=i[10],$=i[14],V=i[3],st=i[7],at=i[11],gt=i[15];return r[0]=a*w+o*T+l*k+c*V,r[4]=a*C+o*P+l*Y+c*st,r[8]=a*R+o*H+l*G+c*at,r[12]=a*v+o*O+l*$+c*gt,r[1]=h*w+u*T+d*k+p*V,r[5]=h*C+u*P+d*Y+p*st,r[9]=h*R+u*H+d*G+p*at,r[13]=h*v+u*O+d*$+p*gt,r[2]=_*w+g*T+m*k+f*V,r[6]=_*C+g*P+m*Y+f*st,r[10]=_*R+g*H+m*G+f*at,r[14]=_*v+g*O+m*$+f*gt,r[3]=M*w+S*T+x*k+E*V,r[7]=M*C+S*P+x*Y+E*st,r[11]=M*R+S*H+x*G+E*at,r[15]=M*v+S*O+x*$+E*gt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],_=t[3],g=t[7],m=t[11],f=t[15];return _*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+g*(+e*l*p-e*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-e*l*u+e*o*d+i*a*u-n*a*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],_=t[12],g=t[13],m=t[14],f=t[15],M=u*m*c-g*d*c+g*l*p-o*m*p-u*l*f+o*d*f,S=_*d*c-h*m*c-_*l*p+a*m*p+h*l*f-a*d*f,x=h*g*c-_*u*c+_*o*p-a*g*p-h*o*f+a*u*f,E=_*u*l-h*g*l-_*o*d+a*g*d+h*o*m-a*u*m,w=e*M+n*S+i*x+r*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return t[0]=M*C,t[1]=(g*d*r-u*m*r-g*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(o*m*r-g*l*r+g*i*c-n*m*c-o*i*f+n*l*f)*C,t[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*C,t[4]=S*C,t[5]=(h*m*r-_*d*r+_*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(_*l*r-a*m*r-_*i*c+e*m*c+a*i*f-e*l*f)*C,t[7]=(a*d*r-h*l*r+h*i*c-e*d*c-a*i*p+e*l*p)*C,t[8]=x*C,t[9]=(_*u*r-h*g*r-_*n*p+e*g*p+h*n*f-e*u*f)*C,t[10]=(a*g*r-_*o*r+_*n*c-e*g*c-a*n*f+e*o*f)*C,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*C,t[12]=E*C,t[13]=(h*g*i-_*u*i+_*n*d-e*g*d-h*n*m+e*u*m)*C,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*C,t[15]=(a*u*i-h*o*i+h*n*l-e*u*l-a*n*d+e*o*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,_=r*u,g=a*h,m=a*u,f=o*u,M=l*c,S=l*h,x=l*u,E=n.x,w=n.y,C=n.z;return i[0]=(1-(g+f))*E,i[1]=(p+x)*E,i[2]=(_-S)*E,i[3]=0,i[4]=(p-x)*w,i[5]=(1-(d+f))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(_+S)*C,i[9]=(m-M)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=xs.set(i[0],i[1],i[2]).length(),a=xs.set(i[4],i[5],i[6]).length(),o=xs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],wn.copy(this);let c=1/r,h=1/a,u=1/o;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,e.setFromRotationMatrix(wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=Cn,l=!1){let c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i),_,g;if(l)_=r/(a-r),g=a*r/(a-r);else if(o===Cn)_=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===yr)_=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Cn,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),p=-(n+i)/(n-i),_,g;if(l)_=1/(a-r),g=a/(a-r);else if(o===Cn)_=-2/(a-r),g=-(a+r)/(a-r);else if(o===yr)_=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},xs=new N,wn=new ae,yp=new N(0,0,0),Mp=new N(1,1,1),pi=new N,ma=new N,ln=new N,Kh=new ae,Qh=new ni,Qe=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qe.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sp=0,jh=new N,vs=new ni,Jn=new ae,ga=new N,fr=new N,bp=new N,Tp=new ni,tu=new N(1,0,0),eu=new N(0,1,0),nu=new N(0,0,1),iu={type:"added"},Ep={type:"removed"},ys={type:"childadded",child:null},Nl={type:"childremoved",child:null},Pe=class s extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=qs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new N,e=new Qe,n=new ni,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ae},normalMatrix:{value:new Ut}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(fr,ga,this.up):Jn.lookAt(ga,fr,this.up),this.quaternion.setFromRotationMatrix(Jn),i&&(Jn.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Jn),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(iu),ys.child=t,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(iu),ys.child=t,this.dispatchEvent(ys),ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Tp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var An=new N,Kn=new N,Fl=new N,Qn=new N,Ms=new N,Ss=new N,su=new N,Ol=new N,Bl=new N,zl=new N,kl=new he,Vl=new he,Hl=new he,_i=class s{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),An.subVectors(t,e),i.cross(An);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){An.subVectors(i,e),Kn.subVectors(n,e),Fl.subVectors(t,e);let a=An.dot(An),o=An.dot(Kn),l=An.dot(Fl),c=Kn.dot(Kn),h=Kn.dot(Fl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,i,r,a,o,l){return this.getBarycoord(t,e,n,i,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,a){return kl.setScalar(0),Vl.setScalar(0),Hl.setScalar(0),kl.fromBufferAttribute(t,e),Vl.fromBufferAttribute(t,n),Hl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(kl,r.x),a.addScaledVector(Vl,r.y),a.addScaledVector(Hl,r.z),a}static isFrontFacing(t,e,n,i){return An.subVectors(n,e),Kn.subVectors(t,e),An.cross(Kn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),An.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;Ms.subVectors(i,n),Ss.subVectors(r,n),Ol.subVectors(t,n);let l=Ms.dot(Ol),c=Ss.dot(Ol);if(l<=0&&c<=0)return e.copy(n);Bl.subVectors(t,i);let h=Ms.dot(Bl),u=Ss.dot(Bl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ms,a);zl.subVectors(t,r);let p=Ms.dot(zl),_=Ss.dot(zl);if(_>=0&&p<=_)return e.copy(r);let g=p*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Ss,o);let m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return su.subVectors(r,i),o=(u-h)/(u-h+(p-_)),e.copy(i).addScaledVector(su,o);let f=1/(m+g+d);return a=g*f,o=d*f,e.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Gl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Lt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Se){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Sc(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Gl(a,r,t+1/3),this.g=Gl(a,r,t),this.b=Gl(a,r,t-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(t,e=Se){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Se){let n=ad[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=Cs(t.r),this.g=Cs(t.g),this.b=Cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Se){return Wt.workingToColorSpace(Oe.copy(this),t),Math.round(zt(Oe.r*255,0,255))*65536+Math.round(zt(Oe.g*255,0,255))*256+Math.round(zt(Oe.b*255,0,255))}getHexString(t=Se){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(Oe.copy(this),e);let n=Oe.r,i=Oe.g,r=Oe.b,a=Math.max(n,i,r),o=Math.min(n,i,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=Se){Wt.workingToColorSpace(Oe.copy(this),t);let e=Oe.r,n=Oe.g,i=Oe.b;return t!==Se?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(_a);let n=_r(mi.h,_a.h,e),i=_r(mi.s,_a.s,e),r=_r(mi.l,_a.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Oe=new Lt;Lt.NAMES=ad;var wp=0,Bn=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=qs(),this.name="",this.type="Material",this.blending=_n,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Na,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Gi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_n&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Na&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},zn=class extends Bn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Me=new N,xa=new kt,Ap=0,Xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ap++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)xa.fromBufferAttribute(this,e),xa.applyMatrix3(t),this.setXY(e,xa.x,xa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=As(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),i=We(i,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}};var Sr=class extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var br=class extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var be=class extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Cp=0,gn=new ae,Wl=new Pe,bs=new N,cn=new vi,pr=new vi,Re=new N,Ie=class s extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=qs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bc(t)?br:Sr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ut().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return Wl.lookAt(t),Wl.updateMatrix(),this.applyMatrix4(Wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(cn.min,pr.min),cn.expandByPoint(Re),Re.addVectors(cn.max,pr.max),cn.expandByPoint(Re)):(cn.expandByPoint(pr.min),cn.expandByPoint(pr.max))}cn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(t,c),Re.add(bs)),i=Math.max(i,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new N,l[R]=new N;let c=new N,h=new N,u=new N,d=new kt,p=new kt,_=new kt,g=new N,m=new N;function f(R,v,T){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,T),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,v),_.fromBufferAttribute(r,T),h.sub(c),u.sub(c),p.sub(d),_.sub(d);let P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(P),o[R].add(g),o[v].add(g),o[T].add(g),l[R].add(m),l[v].add(m),l[T].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,v=M.length;R<v;++R){let T=M[R],P=T.start,H=T.count;for(let O=P,k=P+H;O<k;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let S=new N,x=new N,E=new N,w=new N;function C(R){E.fromBufferAttribute(i,R),w.copy(E);let v=o[R];S.copy(v),S.sub(E.multiplyScalar(E.dot(v))).normalize(),x.crossVectors(w,v);let P=x.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,v=M.length;R<v;++R){let T=M[R],P=T.start,H=T.count;for(let O=P,k=P+H;O<k;O+=3)C(t.getX(O+0)),C(t.getX(O+1)),C(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,p=t.count;d<p;d+=3){let _=t.getX(d+0),g=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),p=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?p=l[g]*o.data.stride+o.offset:p=l[g]*h;for(let f=0;f<h;f++)d[_++]=c[p++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ru=new ae,ki=new qi,va=new yi,au=new N,ya=new N,Ma=new N,Sa=new N,Xl=new N,ba=new N,ou=new N,Ta=new N,Qt=class extends Pe{constructor(t=new Ie,e=new zn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ba.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Xl.fromBufferAttribute(u,t),a?ba.addScaledVector(Xl,h):ba.addScaledVector(Xl.sub(e),h))}e.add(ba)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(va.containsPoint(ki.origin)===!1&&(ki.intersectSphere(va,au)===null||ki.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(ru.copy(r).invert(),ki.copy(t.ray).applyMatrix4(ru),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,E=S;x<E;x+=3){let w=o.getX(x),C=o.getX(x+1),R=o.getX(x+2);i=Ea(this,f,t,n,c,h,u,w,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let M=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);i=Ea(this,a,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){let m=d[_],f=a[m.materialIndex],M=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,E=S;x<E;x+=3){let w=x,C=x+1,R=x+2;i=Ea(this,f,t,n,c,h,u,w,C,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=_,f=g;m<f;m+=3){let M=m,S=m+1,x=m+2;i=Ea(this,a,t,n,c,h,u,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Rp(s,t,e,n,i,r,a,o){let l;if(t.side===ve?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,t.side===ti,o),l===null)return null;Ta.copy(o),Ta.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ta);return c<e.near||c>e.far?null:{distance:c,point:Ta.clone(),object:s}}function Ea(s,t,e,n,i,r,a,o,l,c){s.getVertexPosition(o,ya),s.getVertexPosition(l,Ma),s.getVertexPosition(c,Sa);let h=Rp(s,t,e,n,ya,Ma,Sa,ou);if(h){let u=new N;_i.getBarycoord(ou,ya,Ma,Sa,u),i&&(h.uv=_i.getInterpolatedAttribute(i,o,l,c,u,new kt)),r&&(h.uv1=_i.getInterpolatedAttribute(r,o,l,c,u,new kt)),a&&(h.normal=_i.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new N,materialIndex:0};_i.getNormal(ya,Ma,Sa,d.normal),h.face=d,h.barycoord=u}return h}var Us=class s extends Ie{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(h,3)),this.setAttribute("uv",new be(u,2));function _(g,m,f,M,S,x,E,w,C,R,v){let T=x/C,P=E/R,H=x/2,O=E/2,k=w/2,Y=C+1,G=R+1,$=0,V=0,st=new N;for(let at=0;at<G;at++){let gt=at*P-O;for(let Rt=0;Rt<Y;Rt++){let Jt=Rt*T-H;st[g]=Jt*M,st[m]=gt*S,st[f]=k,c.push(st.x,st.y,st.z),st[g]=0,st[m]=0,st[f]=w>0?1:-1,h.push(st.x,st.y,st.z),u.push(Rt/C),u.push(1-at/R),$+=1}}for(let at=0;at<R;at++)for(let gt=0;gt<C;gt++){let Rt=d+gt+Y*at,Jt=d+gt+Y*(at+1),Bt=d+(gt+1)+Y*(at+1),W=d+(gt+1)+Y*at;l.push(Rt,Jt,W),l.push(Jt,Bt,W),V+=6}o.addGroup(p,V,v),p+=V,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ki(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ke(s){let t={};for(let e=0;e<s.length;e++){let n=Ki(s[e]);for(let i in n)t[i]=n[i]}return t}function Pp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tc(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}var od={clone:Ki,merge:ke},Ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ye=class extends Bn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ip,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Tr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gi=new N,lu=new kt,cu=new kt,Be=class extends Tr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ps*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(gi.x,gi.y).multiplyScalar(-t/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-t/gi.z)}getViewSize(t,e){return this.getViewBounds(t,lu,cu),e.subVectors(cu,lu)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ts=-90,Es=1,Va=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(Ts,Es,t,e);i.layers=this.layers,this.add(i);let r=new Be(Ts,Es,t,e);r.layers=this.layers,this.add(r);let a=new Be(Ts,Es,t,e);a.layers=this.layers,this.add(a);let o=new Be(Ts,Es,t,e);o.layers=this.layers,this.add(o);let l=new Be(Ts,Es,t,e);l.layers=this.layers,this.add(l);let c=new Be(Ts,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Er=class extends qe{constructor(t=[],e=$i,n,i,r,a,o,l,c,h){super(t,e,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ha=class extends On{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Er(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Us(5,5,5),r=new Ye({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ve,blending:ii});r.uniforms.tEquirect.value=e;let a=new Qt(i,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=Rn),new Va(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},ze=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lp={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lp)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var wr=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var ql=new N,Up=new N,Np=new Ut,Un=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ql.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ql),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Np.getNormalMatrix(t),i=this.coplanarPoint(ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Vi=new yi,Fp=new kt(.5,.5),wa=new N,Fs=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,r=new Un,a=new Un){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],g=r[9],m=r[10],f=r[11],M=r[12],S=r[13],x=r[14],E=r[15];if(i[0].setComponents(c-a,p-h,f-_,E-M).normalize(),i[1].setComponents(c+a,p+h,f+_,E+M).normalize(),i[2].setComponents(c+o,p+u,f+g,E+S).normalize(),i[3].setComponents(c-o,p-u,f-g,E-S).normalize(),n)i[4].setComponents(l,d,m,x).normalize(),i[5].setComponents(c-l,p-d,f-m,E-x).normalize();else if(i[4].setComponents(c-l,p-d,f-m,E-x).normalize(),e===Cn)i[5].setComponents(c+l,p+d,f+m,E+x).normalize();else if(e===yr)i[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=Fp.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wa.x=i.normal.x>0?t.max.x:t.min.x,wa.y=i.normal.y>0?t.max.y:t.min.y,wa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Os=class extends Bn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new N,Wa=new N,hu=new ae,mr=new qi,Aa=new yi,Yl=new N,uu=new N,Xa=class extends Pe{constructor(t=new Ie,e=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ga.fromBufferAttribute(e,i-1),Wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new be(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=r,t.ray.intersectsSphere(Aa)===!1)return;hu.copy(i).invert(),mr.copy(t.ray).applyMatrix4(hu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){let f=h.getX(g),M=h.getX(g+1),S=Ca(this,t,mr,l,f,M,g);S&&e.push(S)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(p),f=Ca(this,t,mr,l,g,m,_-1);f&&e.push(f)}}else{let p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=p,m=_-1;g<m;g+=c){let f=Ca(this,t,mr,l,g,g+1,g);f&&e.push(f)}if(this.isLineLoop){let g=Ca(this,t,mr,l,_-1,p,_-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ca(s,t,e,n,i,r,a){let o=s.geometry.attributes.position;if(Ga.fromBufferAttribute(o,i),Wa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,Wa,Yl,uu)>n)return;Yl.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Yl);if(!(c<t.near||c>t.far))return{distance:c,point:uu.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Ar=class extends Xa{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Bs=class extends Bn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},du=new ae,tc=new qi,Ra=new yi,Pa=new N,Cr=class extends Pe{constructor(t=new Ie,e=new Bs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ra.copy(n.boundingSphere),Ra.applyMatrix4(i),Ra.radius+=r,t.ray.intersectsSphere(Ra)===!1)return;du.copy(i).invert(),tc.copy(t.ray).applyMatrix4(du);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=d,g=p;_<g;_++){let m=c.getX(_);Pa.fromBufferAttribute(u,m),fu(Pa,m,l,i,t,e,this)}}else{let d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,g=p;_<g;_++)Pa.fromBufferAttribute(u,_),fu(Pa,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function fu(s,t,e,n,i,r,a){let o=tc.distanceSqToPoint(s);if(o<e){let l=new N;tc.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Rr=class extends qe{constructor(t,e,n,i,r,a,o,l,c){super(t,e,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pr=class extends qe{constructor(t,e,n=Ti,i,r,a,o=xn,l=xn,c,h=Rs,u=1){if(h!==Rs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ds(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}};var Ir=class s extends Ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=t/o,d=e/l,p=[],_=[],g=[],m=[];for(let f=0;f<h;f++){let M=f*d-a;for(let S=0;S<c;S++){let x=S*u-r;_.push(x,-M,0),g.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let S=M+c*f,x=M+c*(f+1),E=M+1+c*(f+1),w=M+1+c*f;p.push(S,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},zs=class s extends Ie{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],l=[],c=[],h=[],u=t,d=(e-t)/i,p=new N,_=new kt;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){let f=r+m/n*a;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/e+1)/2,_.y=(p.y/e+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){let m=g*(n+1);for(let f=0;f<n;f++){let M=f+m,S=M,x=M+n+1,E=M+n+2,w=M+1;o.push(S,x,w),o.push(x,E,w)}}this.setIndex(o),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(c,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var je=class s extends Ie{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new N,d=new N,p=[],_=[],g=[],m=[];for(let f=0;f<=n;f++){let M=[],S=f/n,x=0;f===0&&a===0?x=.5/e:f===n&&l===Math.PI&&(x=-.5/e);for(let E=0;E<=e;E++){let w=E/e;u.x=-t*Math.cos(i+w*r)*Math.sin(a+S*o),u.y=t*Math.cos(a+S*o),u.z=t*Math.sin(i+w*r)*Math.sin(a+S*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(w+x,1-S),M.push(c++)}h.push(M)}for(let f=0;f<n;f++)for(let M=0;M<e;M++){let S=h[f][M+1],x=h[f][M],E=h[f+1][M],w=h[f+1][M+1];(f!==0||a>0)&&p.push(S,x,w),(f!==n-1||l<Math.PI)&&p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new be(_,3)),this.setAttribute("normal",new be(g,3)),this.setAttribute("uv",new be(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ks=class s extends Ie{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],l=[],c=[],h=new N,u=new N,d=new N;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){let g=_/i*r,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(g),u.y=(t+e*Math.cos(m))*Math.sin(g),u.z=e*Math.sin(m),o.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){let g=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,M=(i+1)*p+_;a.push(g,m,M),a.push(m,f,M)}this.setIndex(a),this.setAttribute("position",new be(o,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Pn=class extends Bn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dr=class extends Pn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var qa=class extends Bn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ya=class extends Bn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ia(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Op(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Yi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Za=class extends Yi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jl:r=t,o=2*e-n;break;case Kl:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Jl:a=t,l=2*n-e;break;case Kl:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,f=-d*m+2*d*g-d*_,M=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,S=(-1-p)*m+(1.5+p)*g+.5*_,x=p*m-p*g;for(let E=0;E!==o;++E)r[E]=f*a[h+E]+M*a[c+E]+S*a[l+E]+x*a[u+E];return r}},$a=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ja=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},hn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ia(e,this.TimeBufferType),this.values=Ia(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ia(t.times,Array),values:Ia(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Za(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Da:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Da}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&Op(i))for(let o=0,l=i.length;o!==l;++o){let c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Da,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(i)l=!0;else{let u=o*n,d=u-n,p=u+n;for(let _=0;_!==n;++_){let g=e[u+_];if(g!==e[d+_]||g!==e[p+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,d=a*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Oa;var Mi=class extends hn{constructor(t,e,n){super(t,e,n)}};Mi.prototype.ValueTypeName="bool";Mi.prototype.ValueBufferType=Array;Mi.prototype.DefaultInterpolation=xr;Mi.prototype.InterpolantFactoryMethodLinear=void 0;Mi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Ka.prototype.ValueTypeName="color";var Qa=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};Qa.prototype.ValueTypeName="number";var ja=class extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e),c=t*o;for(let h=c+o;c!==h;c+=4)ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},Lr=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ja(this.times,this.values,this.getValueSize(),t)}};Lr.prototype.ValueTypeName="quaternion";Lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends hn{constructor(t,e,n){super(t,e,n)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=xr;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends hn{constructor(t,e,n,i){super(t,e,n,i)}};to.prototype.ValueTypeName="vector";var La={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},eo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],_=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ld=new eo,Vs=class{constructor(t){this.manager=t!==void 0?t:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Vs.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=new WeakMap,no=class extends Vs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=La.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let u=ws.get(a);u===void 0&&(u=[],ws.set(a,u)),u.push({onLoad:e,onError:i})}return a}let o=Is("img");function l(){h(),e&&e(this);let u=ws.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}ws.delete(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),La.remove(`image:${t}`);let d=ws.get(this)||[];for(let p=0;p<d.length;p++){let _=d[p];_.onError&&_.onError(u)}ws.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),La.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Zi=class extends Vs{constructor(t){super(t)}load(t,e,n,i){let r=new qe,a=new no(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Ur=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Zl=new ae,pu=new N,mu=new N,ec=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fs,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(pu),mu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mu),e.updateMatrixWorld(),Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nr=class extends Tr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},nc=class extends ec{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fr=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new nc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Or=class extends Ur{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var io=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ec="\\[\\]\\.:\\/",Bp=new RegExp("["+Ec+"]","g"),wc="[^"+Ec+"]",zp="[^"+Ec.replace("\\.","")+"]",kp=/((?:WC+[\/:])*)/.source.replace("WC",wc),Vp=/(WCOD+)?/.source.replace("WCOD",zp),Hp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),Wp=new RegExp("^"+kp+Vp+Hp+Gp+"$"),Xp=["material","materials","bones","map"],ic=class{constructor(t,e,n){let i=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bp,"")}static parseTrackName(t){let e=Wp.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Xp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[i];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=ic;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var my=new Float32Array(1);var gu=new ae,Br=class{constructor(t,e,n=0,i=1/0){this.ray=new qi(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,n=[]){return sc(t,this,n,e),n.sort(_u),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)sc(t[i],this,n,e);return n.sort(_u),n}};function _u(s,t){return s.distance-t.distance}function sc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)sc(r[a],t,e,!0)}}function Ac(s,t,e,n){let i=qp(n);switch(e){case pc:return s*t;case gc:return s*t/i.components*i.byteLength;case vo:return s*t/i.components*i.byteLength;case _c:return s*t*2/i.components*i.byteLength;case yo:return s*t*2/i.components*i.byteLength;case mc:return s*t*3/i.components*i.byteLength;case yn:return s*t*4/i.components*i.byteLength;case Mo:return s*t*4/i.components*i.byteLength;case Hr:case Gr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bo:case Eo:return Math.max(s,16)*Math.max(t,8)/4;case So:case To:return Math.max(s,8)*Math.max(t,8)/2;case wo:case Ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ho:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qr:case Go:case Wo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case xc:case Xo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case qo:case Yo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function qp(s){switch(s){case In:case uc:return{byteLength:1,components:1};case Hs:case dc:case Gs:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case Ti:case go:case Vn:return{byteLength:4,components:1};case fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"179"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="179");function Dd(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Zp(s){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){let _=u[d],g=u[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){let g=u[p];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(s.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jp=`#ifdef USE_ALPHAHASH
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
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
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
#endif`,nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,im=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lm=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_m=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xm=`#define PI 3.141592653589793
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
} // validated`,vm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
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
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fm=`#ifdef USE_GRADIENTMAP
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
}`,Om=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,km=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Vm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Ym=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Zm=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ig=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sg=`#if defined( USE_POINTS_UV )
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
#endif`,rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ag=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_g=`#ifdef USE_NORMALMAP
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
#endif`,xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Ug=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Fg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Og=`#ifdef USE_SKINNING
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
#endif`,Bg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Zg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t_=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,n_=`#define DISTANCE
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
}`,i_=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,s_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`uniform float scale;
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
}`,o_=`uniform vec3 diffuse;
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
}`,l_=`#include <common>
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
}`,c_=`uniform vec3 diffuse;
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
}`,h_=`#define LAMBERT
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
}`,u_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,d_=`#define MATCAP
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
}`,f_=`#define MATCAP
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
}`,p_=`#define NORMAL
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
}`,m_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
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
}`,__=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,x_=`#define STANDARD
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
}`,v_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,y_=`#define TOON
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
}`,M_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,S_=`uniform float size;
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
}`,b_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,w_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,Ft={alphahash_fragment:$p,alphahash_pars_fragment:Jp,alphamap_fragment:Kp,alphamap_pars_fragment:Qp,alphatest_fragment:jp,alphatest_pars_fragment:tm,aomap_fragment:em,aomap_pars_fragment:nm,batching_pars_vertex:im,batching_vertex:sm,begin_vertex:rm,beginnormal_vertex:am,bsdfs:om,iridescence_fragment:lm,bumpmap_pars_fragment:cm,clipping_planes_fragment:hm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:dm,clipping_planes_vertex:fm,color_fragment:pm,color_pars_fragment:mm,color_pars_vertex:gm,color_vertex:_m,common:xm,cube_uv_reflection_fragment:vm,defaultnormal_vertex:ym,displacementmap_pars_vertex:Mm,displacementmap_vertex:Sm,emissivemap_fragment:bm,emissivemap_pars_fragment:Tm,colorspace_fragment:Em,colorspace_pars_fragment:wm,envmap_fragment:Am,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Rm,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Vm,envmap_vertex:Im,fog_vertex:Dm,fog_pars_vertex:Lm,fog_fragment:Um,fog_pars_fragment:Nm,gradientmap_pars_fragment:Fm,lightmap_pars_fragment:Om,lights_lambert_fragment:Bm,lights_lambert_pars_fragment:zm,lights_pars_begin:km,lights_toon_fragment:Hm,lights_toon_pars_fragment:Gm,lights_phong_fragment:Wm,lights_phong_pars_fragment:Xm,lights_physical_fragment:qm,lights_physical_pars_fragment:Ym,lights_fragment_begin:Zm,lights_fragment_maps:$m,lights_fragment_end:Jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:Qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:tg,map_fragment:eg,map_pars_fragment:ng,map_particle_fragment:ig,map_particle_pars_fragment:sg,metalnessmap_fragment:rg,metalnessmap_pars_fragment:ag,morphinstance_vertex:og,morphcolor_vertex:lg,morphnormal_vertex:cg,morphtarget_pars_vertex:hg,morphtarget_vertex:ug,normal_fragment_begin:dg,normal_fragment_maps:fg,normal_pars_fragment:pg,normal_pars_vertex:mg,normal_vertex:gg,normalmap_pars_fragment:_g,clearcoat_normal_fragment_begin:xg,clearcoat_normal_fragment_maps:vg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Mg,opaque_fragment:Sg,packing:bg,premultiplied_alpha_fragment:Tg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Ag,roughnessmap_fragment:Cg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Pg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Dg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ug,skinning_pars_vertex:Ng,skinning_vertex:Fg,skinnormal_vertex:Og,specularmap_fragment:Bg,specularmap_pars_fragment:zg,tonemapping_fragment:kg,tonemapping_pars_fragment:Vg,transmission_fragment:Hg,transmission_pars_fragment:Gg,uv_pars_fragment:Wg,uv_pars_vertex:Xg,uv_vertex:qg,worldpos_vertex:Yg,background_vert:Zg,background_frag:$g,backgroundCube_vert:Jg,backgroundCube_frag:Kg,cube_vert:Qg,cube_frag:jg,depth_vert:t_,depth_frag:e_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:s_,equirect_frag:r_,linedashed_vert:a_,linedashed_frag:o_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:h_,meshlambert_frag:u_,meshmatcap_vert:d_,meshmatcap_frag:f_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:x_,meshphysical_frag:v_,meshtoon_vert:y_,meshtoon_frag:M_,points_vert:S_,points_frag:b_,shadow_vert:T_,shadow_frag:E_,sprite_vert:w_,sprite_frag:A_},rt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Hn={basic:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:ke([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:ke([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:ke([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:ke([rt.points,rt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:ke([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:ke([rt.common,rt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:ke([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:ke([rt.sprite,rt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:ke([rt.common,rt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:ke([rt.lights,rt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Hn.physical={uniforms:ke([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};var Zo={r:0,b:0,g:0},Qi=new Qe,C_=new ae;function R_(s,t,e,n,i,r,a){let o=new Lt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?e:t).get(x)),x}function g(S){let x=!1,E=_(S);E===null?f(o,l):E&&E.isColor&&(f(E,1),x=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){let E=_(x);E&&(E.isCubeTexture||E.mapping===kr)?(h===void 0&&(h=new Qt(new Us(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:Ki(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Qi.copy(x.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(C_.makeRotationFromEuler(Qi)),h.material.toneMapped=Wt.getTransfer(E.colorSpace)!==Zt,(u!==E||d!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qt(new Ir(2,2),new Ye({name:"BackgroundMaterial",uniforms:Ki(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(E.colorSpace)!==Zt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,x){S.getRGB(Zo,Tc(s)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,x,a)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:g,addToRenderList:m,dispose:M}}function P_(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(T,P,H,O,k){let Y=!1,G=u(O,H,P);r!==G&&(r=G,c(r.object)),Y=p(T,O,H,k),Y&&_(T,O,H,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,x(T,P,H,O),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(T){return s.bindVertexArray(T)}function h(T){return s.deleteVertexArray(T)}function u(T,P,H){let O=H.wireframe===!0,k=n[T.id];k===void 0&&(k={},n[T.id]=k);let Y=k[P.id];Y===void 0&&(Y={},k[P.id]=Y);let G=Y[O];return G===void 0&&(G=d(l()),Y[O]=G),G}function d(T){let P=[],H=[],O=[];for(let k=0;k<e;k++)P[k]=0,H[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:O,object:T,attributes:{},index:null}}function p(T,P,H,O){let k=r.attributes,Y=P.attributes,G=0,$=H.getAttributes();for(let V in $)if($[V].location>=0){let at=k[V],gt=Y[V];if(gt===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(gt=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(gt=T.instanceColor)),at===void 0||at.attribute!==gt||gt&&at.data!==gt.data)return!0;G++}return r.attributesNum!==G||r.index!==O}function _(T,P,H,O){let k={},Y=P.attributes,G=0,$=H.getAttributes();for(let V in $)if($[V].location>=0){let at=Y[V];at===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(at=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(at=T.instanceColor));let gt={};gt.attribute=at,at&&at.data&&(gt.data=at.data),k[V]=gt,G++}r.attributes=k,r.attributesNum=G,r.index=O}function g(){let T=r.newAttributes;for(let P=0,H=T.length;P<H;P++)T[P]=0}function m(T){f(T,0)}function f(T,P){let H=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;H[T]=1,O[T]===0&&(s.enableVertexAttribArray(T),O[T]=1),k[T]!==P&&(s.vertexAttribDivisor(T,P),k[T]=P)}function M(){let T=r.newAttributes,P=r.enabledAttributes;for(let H=0,O=P.length;H<O;H++)P[H]!==T[H]&&(s.disableVertexAttribArray(H),P[H]=0)}function S(T,P,H,O,k,Y,G){G===!0?s.vertexAttribIPointer(T,P,H,k,Y):s.vertexAttribPointer(T,P,H,O,k,Y)}function x(T,P,H,O){g();let k=O.attributes,Y=H.getAttributes(),G=P.defaultAttributeValues;for(let $ in Y){let V=Y[$];if(V.location>=0){let st=k[$];if(st===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(st=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(st=T.instanceColor)),st!==void 0){let at=st.normalized,gt=st.itemSize,Rt=t.get(st);if(Rt===void 0)continue;let Jt=Rt.buffer,Bt=Rt.type,W=Rt.bytesPerElement,ot=Bt===s.INT||Bt===s.UNSIGNED_INT||st.gpuType===go;if(st.isInterleavedBufferAttribute){let nt=st.data,Et=nt.stride,wt=st.offset;if(nt.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)f(V.location+It,nt.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let It=0;It<V.locationSize;It++)m(V.location+It);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let It=0;It<V.locationSize;It++)S(V.location+It,gt/V.locationSize,Bt,at,Et*W,(wt+gt/V.locationSize*It)*W,ot)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<V.locationSize;nt++)f(V.location+nt,st.meshPerAttribute);T.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<V.locationSize;nt++)m(V.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Jt);for(let nt=0;nt<V.locationSize;nt++)S(V.location+nt,gt/V.locationSize,Bt,at,gt*W,gt/V.locationSize*nt*W,ot)}}else if(G!==void 0){let at=G[$];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(V.location,at);break;case 3:s.vertexAttrib3fv(V.location,at);break;case 4:s.vertexAttrib4fv(V.location,at);break;default:s.vertexAttrib1fv(V.location,at)}}}}M()}function E(){R();for(let T in n){let P=n[T];for(let H in P){let O=P[H];for(let k in O)h(O[k].object),delete O[k];delete P[H]}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let H in P){let O=P[H];for(let k in O)h(O[k].object),delete O[k];delete P[H]}delete n[T.id]}function C(T){for(let P in n){let H=n[P];if(H[T.id]===void 0)continue;let O=H[T.id];for(let k in O)h(O[k].object),delete O[k];delete H[T.id]}}function R(){v(),a=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function I_(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];e.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D_(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let R=C===Gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Vn&&!R)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function L_(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Un,o=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,S=M*4,x=f.clippingState||null;l.value=x,x=h(_,d,S,p);for(let E=0;E!==S;++E)x[E]=e[E];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,_){let g=u!==null?u.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let f=p+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,x=p;S!==g;++S,x+=4)a.copy(u[S]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function U_(s){let t=new WeakMap;function e(a,o){return o===fo?a.mapping=$i:o===po&&(a.mapping=Ji),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===fo||o===po)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ha(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Zs=4,cd=[.125,.215,.35,.446,.526,.582],es=20,Cc=new Nr,hd=new Lt,Rc=null,Pc=0,Ic=0,Dc=!1,ts=(1+Math.sqrt(5))/2,Ys=1/ts,ud=[new N(-ts,Ys,0),new N(ts,Ys,0),new N(-Ys,0,ts),new N(Ys,0,ts),new N(0,ts,-Ys),new N(0,ts,Ys),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],N_=new N,Ko=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=N_}=r;Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rc,Pc,Ic),this._renderer.xr.enabled=Dc,t.scissorTest=!1,$o(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Gs,format:yn,colorSpace:Wi,depthBuffer:!1},i=dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(r)),this._blurMaterial=O_(r,t,e)}return i}_compileMaterial(t){let e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Cc)}_sceneToCubeUV(t,e,n,i,r){let l=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(hd),u.toneMapping=si,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));let g=new zn({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),m=new Qt(new Us,g),f=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,f=!0):(g.color.copy(hd),f=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let E=this._cubeSize;$o(i,x*E,S>2?E:0,E,E),u.setRenderTarget(i),f&&u.render(m,l),u.render(t,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$i||t.mapping===Ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=i?this._cubemapMaterial:this._equirectMaterial,a=new Qt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;$o(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Cc)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ud[(i-r-1)%ud.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Qt(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*es-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):es;m>es&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${es}`);let f=[],M=0;for(let C=0;C<es;++C){let R=C/g,v=Math.exp(-R*R/2);f.push(v),C===0?M+=v:C<m&&(M+=2*v)}for(let C=0;C<f.length;C++)f[C]=f[C]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-n;let x=this._sizeLods[i],E=3*x*(i>S-Zs?i-S+Zs:0),w=4*(this._cubeSize-x);$o(e,E,w,3*x,2*x),l.setRenderTarget(e),l.render(u,Cc)}};function F_(s){let t=[],e=[],n=[],i=s,r=s-Zs+1+cd.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let l=1/o;a>s-Zs?l=cd[a-s+Zs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,g=3,m=2,f=1,M=new Float32Array(g*_*p),S=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,R=w>2?0:-1,v=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];M.set(v,g*_*w),S.set(d,m*_*w);let T=[w,w,w,w,w,w];x.set(T,f*_*w)}let E=new Ie;E.setAttribute("position",new Xe(M,g)),E.setAttribute("uv",new Xe(S,m)),E.setAttribute("faceIndex",new Xe(x,f)),t.push(E),i>Zs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dd(s,t,e){let n=new On(s,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function O_(s,t,e){let n=new Float32Array(es),i=new N(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function fd(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hc(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function pd(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Hc(){return`

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
	`}function B_(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===fo||l===po,h=l===$i||l===Ji;if(c||h){let u=t.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new Ko(s)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ko(s)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function z_(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Xi("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function k_(s,t,e,n){let i={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,_=u.attributes.position,g=0;if(p!==null){let M=p.array;g=p.version;for(let S=0,x=M.length;S<x;S+=3){let E=M[S+0],w=M[S+1],C=M[S+2];d.push(E,w,w,C,C,E)}}else if(_!==void 0){let M=_.array;g=_.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let E=S+0,w=S+1,C=S+2;d.push(E,w,w,C,C,E)}}else return;let m=new(bc(d)?br:Sr)(d,1);m.version=g;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function V_(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),e.update(p,n,1)}function c(d,p,_){_!==0&&(s.drawElementsInstanced(n,p,r,d*a,_),e.update(p,n,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];e.update(m,n,1)}function u(d,p,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,_);let f=0;for(let M=0;M<_;M++)f+=p[M]*g[M];e.update(f,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function H_(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function G_(s,t,e){let n=new WeakMap,i=new he;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],S=0;p===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=o.attributes.position.count*S,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let w=new Float32Array(x*E*4*u),C=new Mr(w,x,E,u);C.type=Vn,C.needsUpdate=!0;let R=S*4;for(let T=0;T<u;T++){let P=m[T],H=f[T],O=M[T],k=x*E*4*T;for(let Y=0;Y<P.count;Y++){let G=Y*R;p===!0&&(i.fromBufferAttribute(P,Y),w[k+G+0]=i.x,w[k+G+1]=i.y,w[k+G+2]=i.z,w[k+G+3]=0),_===!0&&(i.fromBufferAttribute(H,Y),w[k+G+4]=i.x,w[k+G+5]=i.y,w[k+G+6]=i.z,w[k+G+7]=0),g===!0&&(i.fromBufferAttribute(O,Y),w[k+G+8]=i.x,w[k+G+9]=i.y,w[k+G+10]=i.z,w[k+G+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new kt(x,E)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function W_(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Ld=new qe,md=new Pr(1,1),Ud=new Mr,Nd=new ka,Fd=new Er,gd=[],_d=[],xd=new Float32Array(16),vd=new Float32Array(9),yd=new Float32Array(4);function Js(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=gd[i];if(r===void 0&&(r=new Float32Array(i),gd[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ee(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function we(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function tl(s,t){let e=_d[t];e===void 0&&(e=new Int32Array(t),_d[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function X_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function q_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2fv(this.addr,t),we(e,t)}}function Y_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;s.uniform3fv(this.addr,t),we(e,t)}}function Z_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4fv(this.addr,t),we(e,t)}}function $_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;yd.set(n),s.uniformMatrix2fv(this.addr,!1,yd),we(e,n)}}function J_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;vd.set(n),s.uniformMatrix3fv(this.addr,!1,vd),we(e,n)}}function K_(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(Ee(e,n))return;xd.set(n),s.uniformMatrix4fv(this.addr,!1,xd),we(e,n)}}function Q_(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function j_(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2iv(this.addr,t),we(e,t)}}function t0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3iv(this.addr,t),we(e,t)}}function e0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4iv(this.addr,t),we(e,t)}}function n0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function i0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;s.uniform2uiv(this.addr,t),we(e,t)}}function s0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;s.uniform3uiv(this.addr,t),we(e,t)}}function r0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;s.uniform4uiv(this.addr,t),we(e,t)}}function a0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(md.compareFunction=yc,r=md):r=Ld,e.setTexture2D(t||r,i)}function o0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Nd,i)}function l0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fd,i)}function c0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ud,i)}function h0(s){switch(s){case 5126:return X_;case 35664:return q_;case 35665:return Y_;case 35666:return Z_;case 35674:return $_;case 35675:return J_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return j_;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}function u0(s,t){s.uniform1fv(this.addr,t)}function d0(s,t){let e=Js(t,this.size,2);s.uniform2fv(this.addr,e)}function f0(s,t){let e=Js(t,this.size,3);s.uniform3fv(this.addr,e)}function p0(s,t){let e=Js(t,this.size,4);s.uniform4fv(this.addr,e)}function m0(s,t){let e=Js(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function g0(s,t){let e=Js(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _0(s,t){let e=Js(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function x0(s,t){s.uniform1iv(this.addr,t)}function v0(s,t){s.uniform2iv(this.addr,t)}function y0(s,t){s.uniform3iv(this.addr,t)}function M0(s,t){s.uniform4iv(this.addr,t)}function S0(s,t){s.uniform1uiv(this.addr,t)}function b0(s,t){s.uniform2uiv(this.addr,t)}function T0(s,t){s.uniform3uiv(this.addr,t)}function E0(s,t){s.uniform4uiv(this.addr,t)}function w0(s,t,e){let n=this.cache,i=t.length,r=tl(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ld,r[a])}function A0(s,t,e){let n=this.cache,i=t.length,r=tl(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Nd,r[a])}function C0(s,t,e){let n=this.cache,i=t.length,r=tl(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Fd,r[a])}function R0(s,t,e){let n=this.cache,i=t.length,r=tl(e,i);Ee(n,r)||(s.uniform1iv(this.addr,r),we(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ud,r[a])}function P0(s){switch(s){case 5126:return u0;case 35664:return d0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return x0;case 35667:case 35671:return v0;case 35668:case 35672:return y0;case 35669:case 35673:return M0;case 5125:return S0;case 36294:return b0;case 36295:return T0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return w0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return C0;case 36289:case 36303:case 36311:case 36292:return R0}}var Uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=h0(e.type)}},Nc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=P0(e.type)}},Fc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function Md(s,t){s.seq.push(t),s.map[t.id]=t}function I0(s,t,e){let n=s.name,i=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),a=Lc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Md(e,c===void 0?new Uc(o,s,t):new Nc(o,s,t));break}else{let u=e.map[o];u===void 0&&(u=new Fc(o),Md(e,u)),e=u}}}var $s=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);I0(r,a,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Sd(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var D0=37297,L0=0;function U0(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var bd=new Ut;function N0(s){Wt._getMatrix(bd,Wt.workingColorSpace,s);let t=`mat3( ${bd.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(s)){case vr:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Td(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+U0(s.getShaderSource(t),o)}else return r}function F0(s,t){let e=N0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function O0(s,t){let e;switch(t){case Vu:e="Linear";break;case Hu:e="Reinhard";break;case Gu:e="Cineon";break;case uo:e="ACESFilmic";break;case Xu:e="AgX";break;case qu:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Jo=new N;function B0(){Wt.getLuminanceCoefficients(Jo);let s=Jo.x.toFixed(4),t=Jo.y.toFixed(4),e=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function k0(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function V0(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Yr(s){return s!==""}function Ed(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var H0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(s){return s.replace(H0,W0)}var G0=new Map;function W0(s,t){let e=Ft[t];if(e===void 0){let n=G0.get(t);if(n!==void 0)e=Ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Oc(e)}var X0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(s){return s.replace(X0,q0)}function q0(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function Z0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $i:case Ji:t="ENVMAP_TYPE_CUBE";break;case kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ji:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case cc:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case ku:t="ENVMAP_BLENDING_ADD";break}return t}function K0(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Q0(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Y0(e),c=Z0(e),h=$0(e),u=J0(e),d=K0(e),p=z0(e),_=k0(r),g=i.createProgram(),m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[Cd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?Ft.tonemapping_pars_fragment:"",e.toneMapping!==si?O0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.colorspace_pars_fragment,F0("linearToOutputTexel",e.outputColorSpace),B0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Oc(a),a=Ed(a,e),a=wd(a,e),o=Oc(o),o=Ed(o,e),o=wd(o,e),a=Ad(a),o=Ad(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=M+m+a,x=M+f+o,E=Sd(i,i.VERTEX_SHADER,S),w=Sd(i,i.FRAGMENT_SHADER,x);i.attachShader(g,E),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(P){if(s.debug.checkShaderErrors){let H=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(E)||"",k=i.getShaderInfoLog(w)||"",Y=H.trim(),G=O.trim(),$=k.trim(),V=!0,st=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,E,w);else{let at=Td(i,E,"vertex"),gt=Td(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+at+`
`+gt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(G===""||$==="")&&(st=!1);st&&(P.diagnostics={runnable:V,programLog:Y,vertexShader:{log:G,prefix:m},fragmentShader:{log:$,prefix:f}})}i.deleteShader(E),i.deleteShader(w),R=new $s(i,g),v=V0(i,g)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let v;this.getAttributes=function(){return v===void 0&&C(this),v};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,D0)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=L0++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}var j0=0,Bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zc(t),e.set(t,n)),n}},zc=class{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}};function tx(s,t,e,n,i,r,a){let o=new Ls,l=new Bc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,P,H,O){let k=H.fog,Y=O.geometry,G=v.isMeshStandardMaterial?H.environment:null,$=(v.isMeshStandardMaterial?e:t).get(v.envMap||G),V=$&&$.mapping===kr?$.image.height:null,st=_[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));let at=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gt=at!==void 0?at.length:0,Rt=0;Y.morphAttributes.position!==void 0&&(Rt=1),Y.morphAttributes.normal!==void 0&&(Rt=2),Y.morphAttributes.color!==void 0&&(Rt=3);let Jt,Bt,W,ot;if(st){let Yt=Hn[st];Jt=Yt.vertexShader,Bt=Yt.fragmentShader}else Jt=v.vertexShader,Bt=v.fragmentShader,l.update(v),W=l.getVertexShaderID(v),ot=l.getFragmentShaderID(v);let nt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,It=O.isBatchedMesh===!0,_e=!!v.map,Gt=!!v.matcap,I=!!$,ee=!!v.aoMap,bt=!!v.lightMap,qt=!!v.bumpMap,Mt=!!v.normalMap,re=!!v.displacementMap,ft=!!v.emissiveMap,Ot=!!v.metalnessMap,Ce=!!v.roughnessMap,xe=v.anisotropy>0,A=v.clearcoat>0,y=v.dispersion>0,F=v.iridescence>0,q=v.sheen>0,J=v.transmission>0,X=xe&&!!v.anisotropyMap,yt=A&&!!v.clearcoatMap,et=A&&!!v.clearcoatNormalMap,_t=A&&!!v.clearcoatRoughnessMap,xt=F&&!!v.iridescenceMap,j=F&&!!v.iridescenceThicknessMap,ht=q&&!!v.sheenColorMap,Ct=q&&!!v.sheenRoughnessMap,vt=!!v.specularMap,lt=!!v.specularColorMap,Nt=!!v.specularIntensityMap,D=J&&!!v.transmissionMap,tt=J&&!!v.thicknessMap,it=!!v.gradientMap,dt=!!v.alphaMap,K=v.alphaTest>0,Z=!!v.alphaHash,mt=!!v.extensions,Dt=si;v.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Dt=s.toneMapping);let ne={shaderID:st,shaderType:v.type,shaderName:v.name,vertexShader:Jt,fragmentShader:Bt,defines:v.defines,customVertexShaderID:W,customFragmentShaderID:ot,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:It,batchingColor:It&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Wi,alphaToCoverage:!!v.alphaToCoverage,map:_e,matcap:Gt,envMap:I,envMapMode:I&&$.mapping,envMapCubeUVHeight:V,aoMap:ee,lightMap:bt,bumpMap:qt,normalMap:Mt,displacementMap:d&&re,emissiveMap:ft,normalMapObjectSpace:Mt&&v.normalMapType===Ju,normalMapTangentSpace:Mt&&v.normalMapType===vc,metalnessMap:Ot,roughnessMap:Ce,anisotropy:xe,anisotropyMap:X,clearcoat:A,clearcoatMap:yt,clearcoatNormalMap:et,clearcoatRoughnessMap:_t,dispersion:y,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:j,sheen:q,sheenColorMap:ht,sheenRoughnessMap:Ct,specularMap:vt,specularColorMap:lt,specularIntensityMap:Nt,transmission:J,transmissionMap:D,thicknessMap:tt,gradientMap:it,opaque:v.transparent===!1&&v.blending===_n&&v.alphaToCoverage===!1,alphaMap:dt,alphaTest:K,alphaHash:Z,combine:v.combine,mapUv:_e&&g(v.map.channel),aoMapUv:ee&&g(v.aoMap.channel),lightMapUv:bt&&g(v.lightMap.channel),bumpMapUv:qt&&g(v.bumpMap.channel),normalMapUv:Mt&&g(v.normalMap.channel),displacementMapUv:re&&g(v.displacementMap.channel),emissiveMapUv:ft&&g(v.emissiveMap.channel),metalnessMapUv:Ot&&g(v.metalnessMap.channel),roughnessMapUv:Ce&&g(v.roughnessMap.channel),anisotropyMapUv:X&&g(v.anisotropyMap.channel),clearcoatMapUv:yt&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:et&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:j&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&g(v.sheenRoughnessMap.channel),specularMapUv:vt&&g(v.specularMap.channel),specularColorMapUv:lt&&g(v.specularColorMap.channel),specularIntensityMapUv:Nt&&g(v.specularIntensityMap.channel),transmissionMapUv:D&&g(v.transmissionMap.channel),thicknessMapUv:tt&&g(v.thicknessMap.channel),alphaMapUv:dt&&g(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Mt||xe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(_e||dt),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Et,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Rt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,decodeVideoTexture:_e&&v.map.isVideoTexture===!0&&Wt.getTransfer(v.map.colorSpace)===Zt,decodeVideoTextureEmissive:ft&&v.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(v.emissiveMap.colorSpace)===Zt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===vn,flipSided:v.side===ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:mt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&v.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function f(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let P in v.defines)T.push(P),T.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(T,v),S(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function M(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),T.gradientMap&&o.enable(22),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),v.push(o.mask)}function x(v){let T=_[v.type],P;if(T){let H=Hn[T];P=od.clone(H.uniforms)}else P=v.uniforms;return P}function E(v,T){let P;for(let H=0,O=h.length;H<O;H++){let k=h[H];if(k.cacheKey===T){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Q0(s,T,v,r),h.push(P)),P}function w(v){if(--v.usedTimes===0){let T=h.indexOf(v);h[T]=h[h.length-1],h.pop(),v.destroy()}}function C(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:R}}function ex(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function nx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Rd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pd(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(u,d,p,_,g,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=g,f.group=m),t++,f}function o(u,d,p,_,g,m){let f=a(u,d,p,_,g,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,_,g,m){let f=a(u,d,p,_,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||nx),n.length>1&&n.sort(d||Rd),i.length>1&&i.sort(d||Rd)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function ix(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Pd,s.set(n,[a])):i>=r.length?(a=new Pd,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function sx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Lt};break;case"SpotLight":e={position:new N,direction:new N,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function rx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var ax=0;function ox(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function lx(s){let t=new sx,e=rx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,r=new ae,a=new ae;function o(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let p=0,_=0,g=0,m=0,f=0,M=0,S=0,x=0,E=0,w=0,C=0;c.sort(ox);for(let v=0,T=c.length;v<T;v++){let P=c[v],H=P.color,O=P.intensity,k=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=H.r*O,u+=H.g*O,d+=H.b*O;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],O);C++}else if(P.isDirectionalLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=P.shadow.matrix,M++}n.directional[p]=G,p++}else if(P.isSpotLight){let G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(O),G.distance=k,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[g]=G;let $=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,$.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=$.matrix,P.castShadow){let V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,n.spotShadow[g]=V,n.spotShadowMap[g]=Y,x++}g++}else if(P.isRectAreaLight){let G=t.get(P);G.color.copy(H).multiplyScalar(O),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=G,m++}else if(P.isPointLight){let G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let $=P.shadow,V=e.get(P);V.shadowIntensity=$.intensity,V.shadowBias=$.bias,V.shadowNormalBias=$.normalBias,V.shadowRadius=$.radius,V.shadowMapSize=$.mapSize,V.shadowCameraNear=$.camera.near,V.shadowCameraFar=$.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=G,_++}else if(P.isHemisphereLight){let G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(O),G.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=G,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==E||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+E-w,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,R.directionalLength=p,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=E,R.numLightProbes=C,n.version=ax++)}function l(c,h){let u=0,d=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){let S=c[f];if(S.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(S.isSpotLight){let x=n.spot[p];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Id(s){let t=new lx(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function cx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new Id(s),t.set(i,[o])):r>=a.length?(o=new Id(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
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
}`;function dx(s,t,e){let n=new Fs,i=new kt,r=new kt,a=new he,o=new qa({depthPacking:$u}),l=new Ya,c={},h=e.maxTextureSize,u={[ti]:ve,[ve]:ti,[vn]:vn},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:hx,fragmentShader:ux}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let _=new Ie;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Qt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(w,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let v=s.getRenderTarget(),T=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),H=s.state;H.setBlending(ii),H.buffers.depth.getReversed()?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let O=f!==kn&&this.type===kn,k=f===kn&&this.type!==kn;for(let Y=0,G=w.length;Y<G;Y++){let $=w[Y],V=$.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let st=V.getFrameExtents();if(i.multiply(st),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,V.mapSize.y=r.y)),V.map===null||O===!0||k===!0){let gt=this.type!==kn?{minFilter:xn,magFilter:xn}:{};V.map!==null&&V.map.dispose(),V.map=new On(i.x,i.y,gt),V.map.texture.name=$.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let at=V.getViewportCount();for(let gt=0;gt<at;gt++){let Rt=V.getViewport(gt);a.set(r.x*Rt.x,r.y*Rt.y,r.x*Rt.z,r.y*Rt.w),H.viewport(a),V.updateMatrices($,gt),n=V.getFrustum(),x(C,R,V.camera,$,this.type)}V.isPointLightShadow!==!0&&this.type===kn&&M(V,R),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(v,T,P)};function M(w,C){let R=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new On(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(C,null,R,d,g,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(C,null,R,p,g,null)}function S(w,C,R,v){let T=null,P=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=T.uuid,O=C.uuid,k=c[H];k===void 0&&(k={},c[H]=k);let Y=k[O];Y===void 0&&(Y=T.clone(),k[O]=Y,C.addEventListener("dispose",E)),T=Y}if(T.visible=C.visible,T.wireframe=C.wireframe,v===kn?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:u[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let H=s.properties.get(T);H.light=R}return T}function x(w,C,R,v,T){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&T===kn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let O=t.update(w),k=w.material;if(Array.isArray(k)){let Y=O.groups;for(let G=0,$=Y.length;G<$;G++){let V=Y[G],st=k[V.materialIndex];if(st&&st.visible){let at=S(w,st,v,T);w.onBeforeShadow(s,w,C,R,O,at,V),s.renderBufferDirect(R,null,O,at,w,V),w.onAfterShadow(s,w,C,R,O,at,V)}}}else if(k.visible){let Y=S(w,k,v,T);w.onBeforeShadow(s,w,C,R,O,Y,null),s.renderBufferDirect(R,null,O,Y,w,null),w.onAfterShadow(s,w,C,R,O,Y,null)}}let H=w.children;for(let O=0,k=H.length;O<k;O++)x(H[O],C,R,v,T)}function E(w){w.target.removeEventListener("dispose",E);for(let R in c){let v=c[R],T=w.target.uuid;T in v&&(v[T].dispose(),delete v[T])}}}var fx={[so]:ro,[ao]:co,[oo]:ho,[Gi]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:Gi};function px(s,t){function e(){let D=!1,tt=new he,it=null,dt=new he(0,0,0,0);return{setMask:function(K){it!==K&&!D&&(s.colorMask(K,K,K,K),it=K)},setLocked:function(K){D=K},setClear:function(K,Z,mt,Dt,ne){ne===!0&&(K*=Dt,Z*=Dt,mt*=Dt),tt.set(K,Z,mt,Dt),dt.equals(tt)===!1&&(s.clearColor(K,Z,mt,Dt),dt.copy(tt))},reset:function(){D=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let D=!1,tt=!1,it=null,dt=null,K=null;return{setReversed:function(Z){if(tt!==Z){let mt=t.get("EXT_clip_control");Z?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),tt=Z;let Dt=K;K=null,this.setClear(Dt)}},getReversed:function(){return tt},setTest:function(Z){Z?nt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Z){it!==Z&&!D&&(s.depthMask(Z),it=Z)},setFunc:function(Z){if(tt&&(Z=fx[Z]),dt!==Z){switch(Z){case so:s.depthFunc(s.NEVER);break;case ro:s.depthFunc(s.ALWAYS);break;case ao:s.depthFunc(s.LESS);break;case Gi:s.depthFunc(s.LEQUAL);break;case oo:s.depthFunc(s.EQUAL);break;case lo:s.depthFunc(s.GEQUAL);break;case co:s.depthFunc(s.GREATER);break;case ho:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Z}},setLocked:function(Z){D=Z},setClear:function(Z){K!==Z&&(tt&&(Z=1-Z),s.clearDepth(Z),K=Z)},reset:function(){D=!1,it=null,dt=null,K=null,tt=!1}}}function i(){let D=!1,tt=null,it=null,dt=null,K=null,Z=null,mt=null,Dt=null,ne=null;return{setTest:function(Yt){D||(Yt?nt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Yt){tt!==Yt&&!D&&(s.stencilMask(Yt),tt=Yt)},setFunc:function(Yt,Yn,Ln){(it!==Yt||dt!==Yn||K!==Ln)&&(s.stencilFunc(Yt,Yn,Ln),it=Yt,dt=Yn,K=Ln)},setOp:function(Yt,Yn,Ln){(Z!==Yt||mt!==Yn||Dt!==Ln)&&(s.stencilOp(Yt,Yn,Ln),Z=Yt,mt=Yn,Dt=Ln)},setLocked:function(Yt){D=Yt},setClear:function(Yt){ne!==Yt&&(s.clearStencil(Yt),ne=Yt)},reset:function(){D=!1,tt=null,it=null,dt=null,K=null,Z=null,mt=null,Dt=null,ne=null}}}let r=new e,a=new n,o=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,S=null,x=null,E=null,w=null,C=new Lt(0,0,0),R=0,v=!1,T=null,P=null,H=null,O=null,k=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,$=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=$>=1):V.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=$>=2);let st=null,at={},gt=s.getParameter(s.SCISSOR_BOX),Rt=s.getParameter(s.VIEWPORT),Jt=new he().fromArray(gt),Bt=new he().fromArray(Rt);function W(D,tt,it,dt){let K=new Uint8Array(4),Z=s.createTexture();s.bindTexture(D,Z),s.texParameteri(D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(D,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let mt=0;mt<it;mt++)D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY?s.texImage3D(tt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,K):s.texImage2D(tt+mt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,K);return Z}let ot={};ot[s.TEXTURE_2D]=W(s.TEXTURE_2D,s.TEXTURE_2D,1),ot[s.TEXTURE_CUBE_MAP]=W(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[s.TEXTURE_2D_ARRAY]=W(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ot[s.TEXTURE_3D]=W(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),nt(s.DEPTH_TEST),a.setFunc(Gi),qt(!1),Mt(rc),nt(s.CULL_FACE),ee(ii);function nt(D){h[D]!==!0&&(s.enable(D),h[D]=!0)}function Et(D){h[D]!==!1&&(s.disable(D),h[D]=!1)}function wt(D,tt){return u[D]!==tt?(s.bindFramebuffer(D,tt),u[D]=tt,D===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=tt),D===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=tt),!0):!1}function It(D,tt){let it=p,dt=!1;if(D){it=d.get(tt),it===void 0&&(it=[],d.set(tt,it));let K=D.textures;if(it.length!==K.length||it[0]!==s.COLOR_ATTACHMENT0){for(let Z=0,mt=K.length;Z<mt;Z++)it[Z]=s.COLOR_ATTACHMENT0+Z;it.length=K.length,dt=!0}}else it[0]!==s.BACK&&(it[0]=s.BACK,dt=!0);dt&&s.drawBuffers(it)}function _e(D){return _!==D?(s.useProgram(D),_=D,!0):!1}let Gt={[xi]:s.FUNC_ADD,[Su]:s.FUNC_SUBTRACT,[bu]:s.FUNC_REVERSE_SUBTRACT};Gt[Tu]=s.MIN,Gt[Eu]=s.MAX;let I={[wu]:s.ZERO,[Au]:s.ONE,[Cu]:s.SRC_COLOR,[Ua]:s.SRC_ALPHA,[Uu]:s.SRC_ALPHA_SATURATE,[Du]:s.DST_COLOR,[Pu]:s.DST_ALPHA,[Ru]:s.ONE_MINUS_SRC_COLOR,[Na]:s.ONE_MINUS_SRC_ALPHA,[Lu]:s.ONE_MINUS_DST_COLOR,[Iu]:s.ONE_MINUS_DST_ALPHA,[Nu]:s.CONSTANT_COLOR,[Fu]:s.ONE_MINUS_CONSTANT_COLOR,[Ou]:s.CONSTANT_ALPHA,[Bu]:s.ONE_MINUS_CONSTANT_ALPHA};function ee(D,tt,it,dt,K,Z,mt,Dt,ne,Yt){if(D===ii){g===!0&&(Et(s.BLEND),g=!1);return}if(g===!1&&(nt(s.BLEND),g=!0),D!==Mu){if(D!==m||Yt!==v){if((f!==xi||x!==xi)&&(s.blendEquation(s.FUNC_ADD),f=xi,x=xi),Yt)switch(D){case _n:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFunc(s.ONE,s.ONE);break;case oc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case _n:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case oc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,E=null,w=null,C.set(0,0,0),R=0,m=D,v=Yt}return}K=K||tt,Z=Z||it,mt=mt||dt,(tt!==f||K!==x)&&(s.blendEquationSeparate(Gt[tt],Gt[K]),f=tt,x=K),(it!==M||dt!==S||Z!==E||mt!==w)&&(s.blendFuncSeparate(I[it],I[dt],I[Z],I[mt]),M=it,S=dt,E=Z,w=mt),(Dt.equals(C)===!1||ne!==R)&&(s.blendColor(Dt.r,Dt.g,Dt.b,ne),C.copy(Dt),R=ne),m=D,v=!1}function bt(D,tt){D.side===vn?Et(s.CULL_FACE):nt(s.CULL_FACE);let it=D.side===ve;tt&&(it=!it),qt(it),D.blending===_n&&D.transparent===!1?ee(ii):ee(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let dt=D.stencilWrite;o.setTest(dt),dt&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ft(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(D){T!==D&&(D?s.frontFace(s.CW):s.frontFace(s.CCW),T=D)}function Mt(D){D!==xu?(nt(s.CULL_FACE),D!==P&&(D===rc?s.cullFace(s.BACK):D===vu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),P=D}function re(D){D!==H&&(G&&s.lineWidth(D),H=D)}function ft(D,tt,it){D?(nt(s.POLYGON_OFFSET_FILL),(O!==tt||k!==it)&&(s.polygonOffset(tt,it),O=tt,k=it)):Et(s.POLYGON_OFFSET_FILL)}function Ot(D){D?nt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function Ce(D){D===void 0&&(D=s.TEXTURE0+Y-1),st!==D&&(s.activeTexture(D),st=D)}function xe(D,tt,it){it===void 0&&(st===null?it=s.TEXTURE0+Y-1:it=st);let dt=at[it];dt===void 0&&(dt={type:void 0,texture:void 0},at[it]=dt),(dt.type!==D||dt.texture!==tt)&&(st!==it&&(s.activeTexture(it),st=it),s.bindTexture(D,tt||ot[D]),dt.type=D,dt.texture=tt)}function A(){let D=at[st];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{s.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{s.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function yt(){try{s.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{s.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{s.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{s.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{s.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(D){Jt.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),Jt.copy(D))}function Ct(D){Bt.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function vt(D,tt){let it=c.get(tt);it===void 0&&(it=new WeakMap,c.set(tt,it));let dt=it.get(D);dt===void 0&&(dt=s.getUniformBlockIndex(tt,D.name),it.set(D,dt))}function lt(D,tt){let dt=c.get(tt).get(D);l.get(tt)!==dt&&(s.uniformBlockBinding(tt,dt,D.__bindingPointIndex),l.set(tt,dt))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,at={},u={},d=new WeakMap,p=[],_=null,g=!1,m=null,f=null,M=null,S=null,x=null,E=null,w=null,C=new Lt(0,0,0),R=0,v=!1,T=null,P=null,H=null,O=null,k=null,Jt.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:nt,disable:Et,bindFramebuffer:wt,drawBuffers:It,useProgram:_e,setBlending:ee,setMaterial:bt,setFlipSided:qt,setCullFace:Mt,setLineWidth:re,setPolygonOffset:ft,setScissorTest:Ot,activeTexture:Ce,bindTexture:xe,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:xt,texImage3D:j,updateUBOMapping:vt,uniformBlockBinding:lt,texStorage2D:et,texStorage3D:_t,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:yt,scissor:ht,viewport:Ct,reset:Nt}}function mx(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new kt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,y){return p?new OffscreenCanvas(A,y):Is("canvas")}function g(A,y,F){let q=1,J=xe(A);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(q*J.width),yt=Math.floor(q*J.height);u===void 0&&(u=_(X,yt));let et=y?_(X,yt):u;return et.width=X,et.height=yt,et.getContext("2d").drawImage(A,0,0,X,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+yt+")."),et}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){s.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(A,y,F,q,J=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===s.RED&&(F===s.FLOAT&&(X=s.R32F),F===s.HALF_FLOAT&&(X=s.R16F),F===s.UNSIGNED_BYTE&&(X=s.R8)),y===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.R8UI),F===s.UNSIGNED_SHORT&&(X=s.R16UI),F===s.UNSIGNED_INT&&(X=s.R32UI),F===s.BYTE&&(X=s.R8I),F===s.SHORT&&(X=s.R16I),F===s.INT&&(X=s.R32I)),y===s.RG&&(F===s.FLOAT&&(X=s.RG32F),F===s.HALF_FLOAT&&(X=s.RG16F),F===s.UNSIGNED_BYTE&&(X=s.RG8)),y===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RG8UI),F===s.UNSIGNED_SHORT&&(X=s.RG16UI),F===s.UNSIGNED_INT&&(X=s.RG32UI),F===s.BYTE&&(X=s.RG8I),F===s.SHORT&&(X=s.RG16I),F===s.INT&&(X=s.RG32I)),y===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGB8UI),F===s.UNSIGNED_SHORT&&(X=s.RGB16UI),F===s.UNSIGNED_INT&&(X=s.RGB32UI),F===s.BYTE&&(X=s.RGB8I),F===s.SHORT&&(X=s.RGB16I),F===s.INT&&(X=s.RGB32I)),y===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),F===s.UNSIGNED_INT&&(X=s.RGBA32UI),F===s.BYTE&&(X=s.RGBA8I),F===s.SHORT&&(X=s.RGBA16I),F===s.INT&&(X=s.RGBA32I)),y===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),y===s.RGBA){let yt=J?vr:Wt.getTransfer(q);F===s.FLOAT&&(X=s.RGBA32F),F===s.HALF_FLOAT&&(X=s.RGBA16F),F===s.UNSIGNED_BYTE&&(X=yt===Zt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(A,y){let F;return A?y===null||y===Ti||y===Ws?F=s.DEPTH24_STENCIL8:y===Vn?F=s.DEPTH32F_STENCIL8:y===Hs&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ti||y===Ws?F=s.DEPTH_COMPONENT24:y===Vn?F=s.DEPTH_COMPONENT32F:y===Hs&&(F=s.DEPTH_COMPONENT16),F}function E(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==xn&&A.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function w(A){let y=A.target;y.removeEventListener("dispose",w),R(y),y.isVideoTexture&&h.delete(y)}function C(A){let y=A.target;y.removeEventListener("dispose",C),T(y)}function R(A){let y=n.get(A);if(y.__webglInit===void 0)return;let F=A.source,q=d.get(F);if(q){let J=q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&v(A),Object.keys(q).length===0&&d.delete(F)}n.remove(A)}function v(A){let y=n.get(A);s.deleteTexture(y.__webglTexture);let F=A.source,q=d.get(F);delete q[y.__cacheKey],a.memory.textures--}function T(A){let y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let J=0;J<y.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(y.__webglFramebuffer[q][J]);else s.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)s.deleteFramebuffer(y.__webglFramebuffer[q]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let F=A.textures;for(let q=0,J=F.length;q<J;q++){let X=n.get(F[q]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(A)}let P=0;function H(){P=0}function O(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function k(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function Y(A,y){let F=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,A,y);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+y)}function G(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ot(F,A,y);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+y)}function $(A,y){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){ot(F,A,y);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+y)}function V(A,y){let F=n.get(A);if(A.version>0&&F.__version!==A.version){nt(F,A,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+y)}let st={[Fn]:s.REPEAT,[Nn]:s.CLAMP_TO_EDGE,[Fa]:s.MIRRORED_REPEAT},at={[xn]:s.NEAREST,[Yu]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Rn]:s.LINEAR,[mo]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},gt={[Ku]:s.NEVER,[id]:s.ALWAYS,[Qu]:s.LESS,[yc]:s.LEQUAL,[ju]:s.EQUAL,[nd]:s.GEQUAL,[td]:s.GREATER,[ed]:s.NOTEQUAL};function Rt(A,y){if(y.type===Vn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===mo||y.magFilter===Vr||y.magFilter===bi||y.minFilter===Rn||y.minFilter===mo||y.minFilter===Vr||y.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,st[y.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,st[y.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,st[y.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,at[y.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,at[y.minFilter]),y.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===xn||y.minFilter!==Vr&&y.minFilter!==bi||y.type===Vn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Jt(A,y){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",w));let q=y.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let X=k(y);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[X].usedTimes++;let yt=J[A.__cacheKey];yt!==void 0&&(J[A.__cacheKey].usedTimes--,yt.usedTimes===0&&v(y)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return F}function Bt(A,y,F){return Math.floor(Math.floor(A/F)/y)}function W(A,y,F,q){let X=A.updateRanges;if(X.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,F,q,y.data);else{X.sort((j,ht)=>j.start-ht.start);let yt=0;for(let j=1;j<X.length;j++){let ht=X[yt],Ct=X[j],vt=ht.start+ht.count,lt=Bt(Ct.start,y.width,4),Nt=Bt(ht.start,y.width,4);Ct.start<=vt+1&&lt===Nt&&Bt(Ct.start+Ct.count-1,y.width,4)===lt?ht.count=Math.max(ht.count,Ct.start+Ct.count-ht.start):(++yt,X[yt]=Ct)}X.length=yt+1;let et=s.getParameter(s.UNPACK_ROW_LENGTH),_t=s.getParameter(s.UNPACK_SKIP_PIXELS),xt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let j=0,ht=X.length;j<ht;j++){let Ct=X[j],vt=Math.floor(Ct.start/4),lt=Math.ceil(Ct.count/4),Nt=vt%y.width,D=Math.floor(vt/y.width),tt=lt,it=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Nt),s.pixelStorei(s.UNPACK_SKIP_ROWS,D),e.texSubImage2D(s.TEXTURE_2D,0,Nt,D,tt,it,F,q,y.data)}A.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,et),s.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),s.pixelStorei(s.UNPACK_SKIP_ROWS,xt)}}function ot(A,y,F){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let J=Jt(A,y),X=y.source;e.bindTexture(q,A.__webglTexture,s.TEXTURE0+F);let yt=n.get(X);if(X.version!==yt.__version||J===!0){e.activeTexture(s.TEXTURE0+F);let et=Wt.getPrimaries(Wt.workingColorSpace),_t=y.colorSpace===Dn?null:Wt.getPrimaries(y.colorSpace),xt=y.colorSpace===Dn||et===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let j=g(y.image,!1,i.maxTextureSize);j=Ce(y,j);let ht=r.convert(y.format,y.colorSpace),Ct=r.convert(y.type),vt=S(y.internalFormat,ht,Ct,y.colorSpace,y.isVideoTexture);Rt(q,y);let lt,Nt=y.mipmaps,D=y.isVideoTexture!==!0,tt=yt.__version===void 0||J===!0,it=X.dataReady,dt=E(y,j);if(y.isDepthTexture)vt=x(y.format===Xs,y.type),tt&&(D?e.texStorage2D(s.TEXTURE_2D,1,vt,j.width,j.height):e.texImage2D(s.TEXTURE_2D,0,vt,j.width,j.height,0,ht,Ct,null));else if(y.isDataTexture)if(Nt.length>0){D&&tt&&e.texStorage2D(s.TEXTURE_2D,dt,vt,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)lt=Nt[K],D?it&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ht,Ct,lt.data):e.texImage2D(s.TEXTURE_2D,K,vt,lt.width,lt.height,0,ht,Ct,lt.data);y.generateMipmaps=!1}else D?(tt&&e.texStorage2D(s.TEXTURE_2D,dt,vt,j.width,j.height),it&&W(y,j,ht,Ct)):e.texImage2D(s.TEXTURE_2D,0,vt,j.width,j.height,0,ht,Ct,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){D&&tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,vt,Nt[0].width,Nt[0].height,j.depth);for(let K=0,Z=Nt.length;K<Z;K++)if(lt=Nt[K],y.format!==yn)if(ht!==null)if(D){if(it)if(y.layerUpdates.size>0){let mt=Ac(lt.width,lt.height,y.format,y.type);for(let Dt of y.layerUpdates){let ne=lt.data.subarray(Dt*mt/lt.data.BYTES_PER_ELEMENT,(Dt+1)*mt/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Dt,lt.width,lt.height,1,ht,ne)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,j.depth,ht,lt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,vt,lt.width,lt.height,j.depth,0,lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?it&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,lt.width,lt.height,j.depth,ht,Ct,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,vt,lt.width,lt.height,j.depth,0,ht,Ct,lt.data)}else{D&&tt&&e.texStorage2D(s.TEXTURE_2D,dt,vt,Nt[0].width,Nt[0].height);for(let K=0,Z=Nt.length;K<Z;K++)lt=Nt[K],y.format!==yn?ht!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ht,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,K,vt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?it&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,lt.width,lt.height,ht,Ct,lt.data):e.texImage2D(s.TEXTURE_2D,K,vt,lt.width,lt.height,0,ht,Ct,lt.data)}else if(y.isDataArrayTexture)if(D){if(tt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,dt,vt,j.width,j.height,j.depth),it)if(y.layerUpdates.size>0){let K=Ac(j.width,j.height,y.format,y.type);for(let Z of y.layerUpdates){let mt=j.data.subarray(Z*K/j.data.BYTES_PER_ELEMENT,(Z+1)*K/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,j.width,j.height,1,ht,Ct,mt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ht,Ct,j.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,vt,j.width,j.height,j.depth,0,ht,Ct,j.data);else if(y.isData3DTexture)D?(tt&&e.texStorage3D(s.TEXTURE_3D,dt,vt,j.width,j.height,j.depth),it&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ht,Ct,j.data)):e.texImage3D(s.TEXTURE_3D,0,vt,j.width,j.height,j.depth,0,ht,Ct,j.data);else if(y.isFramebufferTexture){if(tt)if(D)e.texStorage2D(s.TEXTURE_2D,dt,vt,j.width,j.height);else{let K=j.width,Z=j.height;for(let mt=0;mt<dt;mt++)e.texImage2D(s.TEXTURE_2D,mt,vt,K,Z,0,ht,Ct,null),K>>=1,Z>>=1}}else if(Nt.length>0){if(D&&tt){let K=xe(Nt[0]);e.texStorage2D(s.TEXTURE_2D,dt,vt,K.width,K.height)}for(let K=0,Z=Nt.length;K<Z;K++)lt=Nt[K],D?it&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,ht,Ct,lt):e.texImage2D(s.TEXTURE_2D,K,vt,ht,Ct,lt);y.generateMipmaps=!1}else if(D){if(tt){let K=xe(j);e.texStorage2D(s.TEXTURE_2D,dt,vt,K.width,K.height)}it&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ht,Ct,j)}else e.texImage2D(s.TEXTURE_2D,0,vt,ht,Ct,j);m(y)&&f(q),yt.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function nt(A,y,F){if(y.image.length!==6)return;let q=Jt(A,y),J=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);let X=n.get(J);if(J.version!==X.__version||q===!0){e.activeTexture(s.TEXTURE0+F);let yt=Wt.getPrimaries(Wt.workingColorSpace),et=y.colorSpace===Dn?null:Wt.getPrimaries(y.colorSpace),_t=y.colorSpace===Dn||yt===et?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let xt=y.isCompressedTexture||y.image[0].isCompressedTexture,j=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let Z=0;Z<6;Z++)!xt&&!j?ht[Z]=g(y.image[Z],!0,i.maxCubemapSize):ht[Z]=j?y.image[Z].image:y.image[Z],ht[Z]=Ce(y,ht[Z]);let Ct=ht[0],vt=r.convert(y.format,y.colorSpace),lt=r.convert(y.type),Nt=S(y.internalFormat,vt,lt,y.colorSpace),D=y.isVideoTexture!==!0,tt=X.__version===void 0||q===!0,it=J.dataReady,dt=E(y,Ct);Rt(s.TEXTURE_CUBE_MAP,y);let K;if(xt){D&&tt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Nt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){K=ht[Z].mipmaps;for(let mt=0;mt<K.length;mt++){let Dt=K[mt];y.format!==yn?vt!==null?D?it&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,Dt.width,Dt.height,vt,Dt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Nt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,0,0,Dt.width,Dt.height,vt,lt,Dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt,Nt,Dt.width,Dt.height,0,vt,lt,Dt.data)}}}else{if(K=y.mipmaps,D&&tt){K.length>0&&dt++;let Z=xe(ht[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,dt,Nt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(j){D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ht[Z].width,ht[Z].height,vt,lt,ht[Z].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,ht[Z].width,ht[Z].height,0,vt,lt,ht[Z].data);for(let mt=0;mt<K.length;mt++){let ne=K[mt].image[Z].image;D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,ne.width,ne.height,vt,lt,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Nt,ne.width,ne.height,0,vt,lt,ne.data)}}else{D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,vt,lt,ht[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Nt,vt,lt,ht[Z]);for(let mt=0;mt<K.length;mt++){let Dt=K[mt];D?it&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,0,0,vt,lt,Dt.image[Z]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,mt+1,Nt,vt,lt,Dt.image[Z])}}}m(y)&&f(s.TEXTURE_CUBE_MAP),X.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Et(A,y,F,q,J,X){let yt=r.convert(F.format,F.colorSpace),et=r.convert(F.type),_t=S(F.internalFormat,yt,et,F.colorSpace),xt=n.get(y),j=n.get(F);if(j.__renderTarget=y,!xt.__hasExternalTextures){let ht=Math.max(1,y.width>>X),Ct=Math.max(1,y.height>>X);J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?e.texImage3D(J,X,_t,ht,Ct,y.depth,0,yt,et,null):e.texImage2D(J,X,_t,ht,Ct,0,yt,et,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ft(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,J,j.__webglTexture,0,re(y)):(J===s.TEXTURE_2D||J>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,J,j.__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(A,y,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),y.depthBuffer){let q=y.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=x(y.stencilBuffer,J),yt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=re(y);ft(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,X,y.width,y.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,X,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,X,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,A)}else{let q=y.textures;for(let J=0;J<q.length;J++){let X=q[J],yt=r.convert(X.format,X.colorSpace),et=r.convert(X.type),_t=S(X.internalFormat,yt,et,X.colorSpace),xt=re(y);F&&ft(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,_t,y.width,y.height):ft(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,_t,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,_t,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function It(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(y.depthTexture);q.__renderTarget=y,(!q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);let J=q.__webglTexture,X=re(y);if(y.depthTexture.format===Rs)ft(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,J,0);else if(y.depthTexture.format===Xs)ft(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function _e(A){let y=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=A.texture.mipmaps;q&&q.length>0?It(y.__webglFramebuffer[0],A):It(y.__webglFramebuffer,A)}else if(F){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),wt(y.__webglDepthbuffer[q],A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),wt(y.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,X)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Gt(A,y,F){let q=n.get(A);y!==void 0&&Et(q.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&_e(A)}function I(A){let y=A.texture,F=n.get(A),q=n.get(y);A.addEventListener("dispose",C);let J=A.textures,X=A.isWebGLCubeRenderTarget===!0,yt=J.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[et]=[];for(let _t=0;_t<y.mipmaps.length;_t++)F.__webglFramebuffer[et][_t]=s.createFramebuffer()}else F.__webglFramebuffer[et]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let et=0;et<y.mipmaps.length;et++)F.__webglFramebuffer[et]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(yt)for(let et=0,_t=J.length;et<_t;et++){let xt=n.get(J[et]);xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture(),a.memory.textures++)}if(A.samples>0&&ft(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let et=0;et<J.length;et++){let _t=J[et];F.__webglColorRenderbuffer[et]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[et]);let xt=r.convert(_t.format,_t.colorSpace),j=r.convert(_t.type),ht=S(_t.internalFormat,xt,j,_t.colorSpace,A.isXRRenderTarget===!0),Ct=re(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,ht,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,F.__webglColorRenderbuffer[et])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),wt(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Rt(s.TEXTURE_CUBE_MAP,y);for(let et=0;et<6;et++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Et(F.__webglFramebuffer[et][_t],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,_t);else Et(F.__webglFramebuffer[et],A,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0);m(y)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let et=0,_t=J.length;et<_t;et++){let xt=J[et],j=n.get(xt),ht=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ht=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,j.__webglTexture),Rt(ht,xt),Et(F.__webglFramebuffer,A,xt,s.COLOR_ATTACHMENT0+et,ht,0),m(xt)&&f(ht)}e.unbindTexture()}else{let et=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(et=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(et,q.__webglTexture),Rt(et,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Et(F.__webglFramebuffer[_t],A,y,s.COLOR_ATTACHMENT0,et,_t);else Et(F.__webglFramebuffer,A,y,s.COLOR_ATTACHMENT0,et,0);m(y)&&f(et),e.unbindTexture()}A.depthBuffer&&_e(A)}function ee(A){let y=A.textures;for(let F=0,q=y.length;F<q;F++){let J=y[F];if(m(J)){let X=M(A),yt=n.get(J).__webglTexture;e.bindTexture(X,yt),f(X),e.unbindTexture()}}}let bt=[],qt=[];function Mt(A){if(A.samples>0){if(ft(A)===!1){let y=A.textures,F=A.width,q=A.height,J=s.COLOR_BUFFER_BIT,X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(A),et=y.length>1;if(et)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let _t=A.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=s.STENCIL_BUFFER_BIT)),et){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let j=n.get(y[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,j,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,J,s.NEAREST),l===!0&&(bt.length=0,qt.length=0,bt.push(s.COLOR_ATTACHMENT0+xt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(bt.push(X),qt.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,qt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),et)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let j=n.get(y[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,j,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function re(A){return Math.min(i.maxSamples,A.samples)}function ft(A){let y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ot(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ce(A,y){let F=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Wi&&F!==Dn&&(Wt.getTransfer(F)===Zt?(q!==yn||J!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),y}function xe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=H,this.setTexture2D=Y,this.setTexture2DArray=G,this.setTexture3D=$,this.setTextureCube=V,this.rebindTextures=Gt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Mt,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ft}function gx(s,t){function e(n,i=Dn){let r,a=Wt.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===_o)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===uc)return s.BYTE;if(n===dc)return s.SHORT;if(n===Hs)return s.UNSIGNED_SHORT;if(n===go)return s.INT;if(n===Ti)return s.UNSIGNED_INT;if(n===Vn)return s.FLOAT;if(n===Gs)return s.HALF_FLOAT;if(n===pc)return s.ALPHA;if(n===mc)return s.RGB;if(n===yn)return s.RGBA;if(n===Rs)return s.DEPTH_COMPONENT;if(n===Xs)return s.DEPTH_STENCIL;if(n===gc)return s.RED;if(n===vo)return s.RED_INTEGER;if(n===_c)return s.RG;if(n===yo)return s.RG_INTEGER;if(n===Mo)return s.RGBA_INTEGER;if(n===Hr||n===Gr||n===Wr||n===Xr)if(a===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===bo||n===To||n===Eo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===Co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return a===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Co)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ro||n===Po||n===Io||n===Do||n===Lo||n===Uo||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ro)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Po)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===No)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ko)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ho)return a===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===Go||n===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return a===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xc||n===Xo||n===qo||n===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Qo=class extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}},_x=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xx=`
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

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ye({vertexShader:_x,fragmentShader:xx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vc=class extends ei{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,_=null,g=new kc,m={},f=e.getContextAttributes(),M=null,S=null,x=[],E=[],w=new kt,C=null,R=new Be;R.viewport=new he;let v=new Be;v.viewport=new he;let T=[R,v],P=new io,H=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ot=x[W];return ot===void 0&&(ot=new Ns,x[W]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(W){let ot=x[W];return ot===void 0&&(ot=new Ns,x[W]=ot),ot.getGripSpace()},this.getHand=function(W){let ot=x[W];return ot===void 0&&(ot=new Ns,x[W]=ot),ot.getHandSpace()};function k(W){let ot=E.indexOf(W.inputSource);if(ot===-1)return;let nt=x[ot];nt!==void 0&&(nt.update(W.inputSource,W.frame,c||a),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",G);for(let W=0;W<x.length;W++){let ot=E[W];ot!==null&&(E[W]=null,x[W].disconnect(ot))}H=null,O=null,g.reset();for(let W in m)delete m[W];t.setRenderTarget(M),p=null,d=null,u=null,i=null,S=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(w),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(i,e)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,Et=null,wt=null;f.depth&&(wt=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=f.stencil?Xs:Rs,Et=f.stencil?Ws:Ti);let It={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=u.createProjectionLayer(It),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new On(d.textureWidth,d.textureHeight,{format:yn,type:In,depthTexture:new Pr(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let nt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new On(p.framebufferWidth,p.framebufferHeight,{format:yn,type:In,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let ot=0;ot<W.removed.length;ot++){let nt=W.removed[ot],Et=E.indexOf(nt);Et>=0&&(E[Et]=null,x[Et].disconnect(nt))}for(let ot=0;ot<W.added.length;ot++){let nt=W.added[ot],Et=E.indexOf(nt);if(Et===-1){for(let It=0;It<x.length;It++)if(It>=E.length){E.push(nt),Et=It;break}else if(E[It]===null){E[It]=nt,Et=It;break}if(Et===-1)break}let wt=x[Et];wt&&wt.connect(nt)}}let $=new N,V=new N;function st(W,ot,nt){$.setFromMatrixPosition(ot.matrixWorld),V.setFromMatrixPosition(nt.matrixWorld);let Et=$.distanceTo(V),wt=ot.projectionMatrix.elements,It=nt.projectionMatrix.elements,_e=wt[14]/(wt[10]-1),Gt=wt[14]/(wt[10]+1),I=(wt[9]+1)/wt[5],ee=(wt[9]-1)/wt[5],bt=(wt[8]-1)/wt[0],qt=(It[8]+1)/It[0],Mt=_e*bt,re=_e*qt,ft=Et/(-bt+qt),Ot=ft*-bt;if(ot.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ot),W.translateZ(ft),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),wt[10]===-1)W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{let Ce=_e+ft,xe=Gt+ft,A=Mt-Ot,y=re+(Et-Ot),F=I*Gt/xe*Ce,q=ee*Gt/xe*Ce;W.projectionMatrix.makePerspective(A,y,F,q,Ce,xe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function at(W,ot){ot===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ot.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ot=W.near,nt=W.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(nt=g.depthFar)),P.near=v.near=R.near=ot,P.far=v.far=R.far=nt,(H!==P.near||O!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),H=P.near,O=P.far),P.layers.mask=W.layers.mask|6,R.layers.mask=P.layers.mask&3,v.layers.mask=P.layers.mask&5;let Et=W.parent,wt=P.cameras;at(P,Et);for(let It=0;It<wt.length;It++)at(wt[It],Et);wt.length===2?st(P,R,v):P.projectionMatrix.copy(R.projectionMatrix),gt(W,P,Et)};function gt(W,ot,nt){nt===null?W.matrix.copy(ot.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(ot.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ot.projectionMatrix),W.projectionMatrixInverse.copy(ot.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ps*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(P)},this.getCameraTexture=function(W){return m[W]};let Rt=null;function Jt(W,ot){if(h=ot.getViewerPose(c||a),_=ot,h!==null){let nt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Et=!1;nt.length!==P.cameras.length&&(P.cameras.length=0,Et=!0);for(let Gt=0;Gt<nt.length;Gt++){let I=nt[Gt],ee=null;if(p!==null)ee=p.getViewport(I);else{let qt=u.getViewSubImage(d,I);ee=qt.viewport,Gt===0&&(t.setRenderTargetTextures(S,qt.colorTexture,qt.depthStencilTexture),t.setRenderTarget(S))}let bt=T[Gt];bt===void 0&&(bt=new Be,bt.layers.enable(Gt),bt.viewport=new he,T[Gt]=bt),bt.matrix.fromArray(I.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(I.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(ee.x,ee.y,ee.width,ee.height),Gt===0&&(P.matrix.copy(bt.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Et===!0&&P.cameras.push(bt)}let wt=i.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){let Gt=u.getDepthInformation(nt[0]);Gt&&Gt.isValid&&Gt.texture&&g.init(Gt,i.renderState)}if(wt&&wt.includes("camera-access")&&(t.state.unbindTexture(),u))for(let Gt=0;Gt<nt.length;Gt++){let I=nt[Gt].camera;if(I){let ee=m[I];ee||(ee=new Qo,m[I]=ee);let bt=u.getCameraImage(I);ee.sourceTexture=bt}}}for(let nt=0;nt<x.length;nt++){let Et=E[nt],wt=x[nt];Et!==null&&wt!==void 0&&wt.update(Et,ot,c||a)}Rt&&Rt(W,ot),ot.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ot}),_=null}let Bt=new Dd;Bt.setAnimationLoop(Jt),this.setAnimationLoop=function(W){Rt=W},this.dispose=function(){}}},ji=new Qe,vx=new ae;function yx(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Tc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,M,S,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===ve&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===ve&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,ji.copy(x),ji.x*=-1,ji.y*=-1,ji.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(vx.makeRotationFromEuler(ji)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ve&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Mx(s,t,e,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(_(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let E=S.program;n.updateUBOMapping(M,E);let w=t.render.frame;r[M.id]!==w&&(d(M),r[M.id]=w)}function h(M){let S=u();M.__bindingPointIndex=S;let x=s.createBuffer(),E=M.__size,w=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,E,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let S=i[M.id],x=M.uniforms,E=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let w=0,C=x.length;w<C;w++){let R=Array.isArray(x[w])?x[w]:[x[w]];for(let v=0,T=R.length;v<T;v++){let P=R[v];if(p(P,w,v,E)===!0){let H=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],k=0;for(let Y=0;Y<O.length;Y++){let G=O[Y],$=g(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,H+k,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(M,S,x,E){let w=M.value,C=S+"_"+x;if(E[C]===void 0)return typeof w=="number"||typeof w=="boolean"?E[C]=w:E[C]=w.clone(),!0;{let R=E[C];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return E[C]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(M){let S=M.uniforms,x=0,E=16;for(let C=0,R=S.length;C<R;C++){let v=Array.isArray(S[C])?S[C]:[S[C]];for(let T=0,P=v.length;T<P;T++){let H=v[T],O=Array.isArray(H.value)?H.value:[H.value];for(let k=0,Y=O.length;k<Y;k++){let G=O[k],$=g(G),V=x%E,st=V%$.boundary,at=V+st;x+=st,at!==0&&E-at<$.storage&&(x+=E-at),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=$.storage}}}let w=x%E;return w>0&&(x+=E-w),M.__size=x,M.__cache={},this}function g(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let x=a.indexOf(S.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(let M in i)s.deleteBuffer(i[M]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}var jo=class{constructor(t={}){let{canvas:e=sd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=new Uint32Array(4),g=new Int32Array(4),m=null,f=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,E=!1;this._outputColorSpace=Se;let w=0,C=0,R=null,v=-1,T=null,P=new he,H=new he,O=null,k=new Lt(0),Y=0,G=e.width,$=e.height,V=1,st=null,at=null,gt=new he(0,0,G,$),Rt=new he(0,0,G,$),Jt=!1,Bt=new Fs,W=!1,ot=!1,nt=new ae,Et=new N,wt=new he,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Gt(){return R===null?V:1}let I=n;function ee(b,L){return e.getContext(b,L)}try{let b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"179"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",K,!1),I===null){let L="webgl2";if(I=ee(L,b),I===null)throw ee(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let bt,qt,Mt,re,ft,Ot,Ce,xe,A,y,F,q,J,X,yt,et,_t,xt,j,ht,Ct,vt,lt,Nt;function D(){bt=new z_(I),bt.init(),vt=new gx(I,bt),qt=new D_(I,bt,t,vt),Mt=new px(I,bt),qt.reversedDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),re=new H_(I),ft=new ex,Ot=new mx(I,bt,Mt,ft,qt,vt,re),Ce=new U_(x),xe=new B_(x),A=new Zp(I),lt=new P_(I,A),y=new k_(I,A,re,lt),F=new W_(I,y,A,re),j=new G_(I,qt,Ot),et=new L_(ft),q=new tx(x,Ce,xe,bt,qt,lt,et),J=new yx(x,ft),X=new ix,yt=new cx(bt),xt=new R_(x,Ce,xe,Mt,F,p,l),_t=new dx(x,F,qt),Nt=new Mx(I,re,qt,Mt),ht=new I_(I,bt,re),Ct=new V_(I,bt,re),re.programs=q.programs,x.capabilities=qt,x.extensions=bt,x.properties=ft,x.renderLists=X,x.shadowMap=_t,x.state=Mt,x.info=re}D();let tt=new Vc(x,I);this.xr=tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let b=bt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=bt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(G,$,!1))},this.getSize=function(b){return b.set(G,$)},this.setSize=function(b,L,B=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,$=L,e.width=Math.floor(b*V),e.height=Math.floor(L*V),B===!0&&(e.style.width=b+"px",e.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(G*V,$*V).floor()},this.setDrawingBufferSize=function(b,L,B){G=b,$=L,V=B,e.width=Math.floor(b*B),e.height=Math.floor(L*B),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(gt)},this.setViewport=function(b,L,B,z){b.isVector4?gt.set(b.x,b.y,b.z,b.w):gt.set(b,L,B,z),Mt.viewport(P.copy(gt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,L,B,z){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,L,B,z),Mt.scissor(H.copy(Rt).multiplyScalar(V).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(b){Mt.setScissorTest(Jt=b)},this.setOpaqueSort=function(b){st=b},this.setTransparentSort=function(b){at=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(b=!0,L=!0,B=!0){let z=0;if(b){let U=!1;if(R!==null){let Q=R.texture.format;U=Q===Mo||Q===yo||Q===vo}if(U){let Q=R.texture.type,ct=Q===In||Q===Ti||Q===Hs||Q===Ws||Q===_o||Q===xo,pt=xt.getClearColor(),ut=xt.getClearAlpha(),At=pt.r,Pt=pt.g,St=pt.b;ct?(_[0]=At,_[1]=Pt,_[2]=St,_[3]=ut,I.clearBufferuiv(I.COLOR,0,_)):(g[0]=At,g[1]=Pt,g[2]=St,g[3]=ut,I.clearBufferiv(I.COLOR,0,g))}else z|=I.COLOR_BUFFER_BIT}L&&(z|=I.DEPTH_BUFFER_BIT),B&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",K,!1),xt.dispose(),X.dispose(),yt.dispose(),ft.dispose(),Ce.dispose(),xe.dispose(),F.dispose(),lt.dispose(),Nt.dispose(),q.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Ln),tt.removeEventListener("sessionend",Oh),Fi.stop()};function it(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=re.autoReset,L=_t.enabled,B=_t.autoUpdate,z=_t.needsUpdate,U=_t.type;D(),re.autoReset=b,_t.enabled=L,_t.autoUpdate=B,_t.needsUpdate=z,_t.type=U}function K(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Z(b){let L=b.target;L.removeEventListener("dispose",Z),mt(L)}function mt(b){Dt(b),ft.remove(b)}function Dt(b){let L=ft.get(b).programs;L!==void 0&&(L.forEach(function(B){q.releaseProgram(B)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,B,z,U,Q){L===null&&(L=It);let ct=U.isMesh&&U.matrixWorld.determinant()<0,pt=Zf(b,L,B,z,U);Mt.setMaterial(z,ct);let ut=B.index,At=1;if(z.wireframe===!0){if(ut=y.getWireframeAttribute(B),ut===void 0)return;At=2}let Pt=B.drawRange,St=B.attributes.position,Vt=Pt.start*At,$t=(Pt.start+Pt.count)*At;Q!==null&&(Vt=Math.max(Vt,Q.start*At),$t=Math.min($t,(Q.start+Q.count)*At)),ut!==null?(Vt=Math.max(Vt,0),$t=Math.min($t,ut.count)):St!=null&&(Vt=Math.max(Vt,0),$t=Math.min($t,St.count));let fe=$t-Vt;if(fe<0||fe===1/0)return;lt.setup(U,z,pt,B,ut);let ie,Kt=ht;if(ut!==null&&(ie=A.get(ut),Kt=Ct,Kt.setIndex(ie)),U.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*Gt()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(U.isLine){let Tt=z.linewidth;Tt===void 0&&(Tt=1),Mt.setLineWidth(Tt*Gt()),U.isLineSegments?Kt.setMode(I.LINES):U.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else U.isPoints?Kt.setMode(I.POINTS):U.isSprite&&Kt.setMode(I.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Xi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Tt=U._multiDrawStarts,le=U._multiDrawCounts,Xt=U._multiDrawCount,an=ut?A.get(ut).bytesPerElement:1,fs=ft.get(z).currentProgram.getUniforms();for(let on=0;on<Xt;on++)fs.setValue(I,"_gl_DrawID",on),Kt.render(Tt[on]/an,le[on])}else if(U.isInstancedMesh)Kt.renderInstances(Vt,fe,U.count);else if(B.isInstancedBufferGeometry){let Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,le=Math.min(B.instanceCount,Tt);Kt.renderInstances(Vt,fe,le)}else Kt.render(Vt,fe)};function ne(b,L,B){b.transparent===!0&&b.side===vn&&b.forceSinglePass===!1?(b.side=ve,b.needsUpdate=!0,ca(b,L,B),b.side=ti,b.needsUpdate=!0,ca(b,L,B),b.side=vn):ca(b,L,B)}this.compile=function(b,L,B=null){B===null&&(B=b),f=yt.get(B),f.init(L),S.push(f),B.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==B&&b.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let z=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Q=U.material;if(Q)if(Array.isArray(Q))for(let ct=0;ct<Q.length;ct++){let pt=Q[ct];ne(pt,B,U),z.add(pt)}else ne(Q,B,U),z.add(Q)}),f=S.pop(),z},this.compileAsync=function(b,L,B=null){let z=this.compile(b,L,B);return new Promise(U=>{function Q(){if(z.forEach(function(ct){ft.get(ct).currentProgram.isReady()&&z.delete(ct)}),z.size===0){U(b);return}setTimeout(Q,10)}bt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yt=null;function Yn(b){Yt&&Yt(b)}function Ln(){Fi.stop()}function Oh(){Fi.start()}let Fi=new Dd;Fi.setAnimationLoop(Yn),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(b){Yt=b,tt.setAnimationLoop(b),b===null?Fi.stop():Fi.start()},tt.addEventListener("sessionstart",Ln),tt.addEventListener("sessionend",Oh),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(L),L=tt.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,L,R),f=yt.get(b,S.length),f.init(L),S.push(f),nt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Bt.setFromProjectionMatrix(nt,Cn,L.reversedDepth),ot=this.localClippingEnabled,W=et.init(this.clippingPlanes,ot),m=X.get(b,M.length),m.init(),M.push(m),tt.enabled===!0&&tt.isPresenting===!0){let Q=x.xr.getDepthSensingMesh();Q!==null&&Tl(Q,L,-1/0,x.sortObjects)}Tl(b,L,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(st,at),_e=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,_e&&xt.addToRenderList(m,b),this.info.render.frame++,W===!0&&et.beginShadows();let B=f.state.shadowsArray;_t.render(B,b,L),W===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,U=m.transmissive;if(f.setupLights(),L.isArrayCamera){let Q=L.cameras;if(U.length>0)for(let ct=0,pt=Q.length;ct<pt;ct++){let ut=Q[ct];zh(z,U,b,ut)}_e&&xt.render(b);for(let ct=0,pt=Q.length;ct<pt;ct++){let ut=Q[ct];Bh(m,b,ut,ut.viewport)}}else U.length>0&&zh(z,U,b,L),_e&&xt.render(b),Bh(m,b,L);R!==null&&C===0&&(Ot.updateMultisampleRenderTarget(R),Ot.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,L),lt.resetDefaultState(),v=-1,T=null,S.pop(),S.length>0?(f=S[S.length-1],W===!0&&et.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Tl(b,L,B,z){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)B=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Bt.intersectsSprite(b)){z&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(nt);let ct=F.update(b),pt=b.material;pt.visible&&m.push(b,ct,pt,B,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Bt.intersectsObject(b))){let ct=F.update(b),pt=b.material;if(z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),wt.copy(ct.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(nt)),Array.isArray(pt)){let ut=ct.groups;for(let At=0,Pt=ut.length;At<Pt;At++){let St=ut[At],Vt=pt[St.materialIndex];Vt&&Vt.visible&&m.push(b,ct,Vt,B,wt.z,St)}}else pt.visible&&m.push(b,ct,pt,B,wt.z,null)}}let Q=b.children;for(let ct=0,pt=Q.length;ct<pt;ct++)Tl(Q[ct],L,B,z)}function Bh(b,L,B,z){let U=b.opaque,Q=b.transmissive,ct=b.transparent;f.setupLightsView(B),W===!0&&et.setGlobalState(x.clippingPlanes,B),z&&Mt.viewport(P.copy(z)),U.length>0&&la(U,L,B),Q.length>0&&la(Q,L,B),ct.length>0&&la(ct,L,B),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function zh(b,L,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new On(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float")?Gs:In,minFilter:bi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));let Q=f.state.transmissionRenderTarget[z.id],ct=z.viewport||P;Q.setSize(ct.z*x.transmissionResolutionScale,ct.w*x.transmissionResolutionScale);let pt=x.getRenderTarget(),ut=x.getActiveCubeFace(),At=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(k),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),_e&&xt.render(B);let Pt=x.toneMapping;x.toneMapping=si;let St=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),W===!0&&et.setGlobalState(x.clippingPlanes,z),la(b,B,z),Ot.updateMultisampleRenderTarget(Q),Ot.updateRenderTargetMipmap(Q),bt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let $t=0,fe=L.length;$t<fe;$t++){let ie=L[$t],Kt=ie.object,Tt=ie.geometry,le=ie.material,Xt=ie.group;if(le.side===vn&&Kt.layers.test(z.layers)){let an=le.side;le.side=ve,le.needsUpdate=!0,kh(Kt,B,z,Tt,le,Xt),le.side=an,le.needsUpdate=!0,Vt=!0}}Vt===!0&&(Ot.updateMultisampleRenderTarget(Q),Ot.updateRenderTargetMipmap(Q))}x.setRenderTarget(pt,ut,At),x.setClearColor(k,Y),St!==void 0&&(z.viewport=St),x.toneMapping=Pt}function la(b,L,B){let z=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=b.length;U<Q;U++){let ct=b[U],pt=ct.object,ut=ct.geometry,At=ct.group,Pt=ct.material;Pt.allowOverride===!0&&z!==null&&(Pt=z),pt.layers.test(B.layers)&&kh(pt,L,B,ut,Pt,At)}}function kh(b,L,B,z,U,Q){b.onBeforeRender(x,L,B,z,U,Q),b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,L,B,z,b,Q),U.transparent===!0&&U.side===vn&&U.forceSinglePass===!1?(U.side=ve,U.needsUpdate=!0,x.renderBufferDirect(B,L,z,U,b,Q),U.side=ti,U.needsUpdate=!0,x.renderBufferDirect(B,L,z,U,b,Q),U.side=vn):x.renderBufferDirect(B,L,z,U,b,Q),b.onAfterRender(x,L,B,z,U,Q)}function ca(b,L,B){L.isScene!==!0&&(L=It);let z=ft.get(b),U=f.state.lights,Q=f.state.shadowsArray,ct=U.state.version,pt=q.getParameters(b,U.state,Q,L,B),ut=q.getProgramCacheKey(pt),At=z.programs;z.environment=b.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(b.isMeshStandardMaterial?xe:Ce).get(b.envMap||z.environment),z.envMapRotation=z.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",Z),At=new Map,z.programs=At);let Pt=At.get(ut);if(Pt!==void 0){if(z.currentProgram===Pt&&z.lightsStateVersion===ct)return Hh(b,pt),Pt}else pt.uniforms=q.getUniforms(b),b.onBeforeCompile(pt,x),Pt=q.acquireProgram(pt,ut),At.set(ut,Pt),z.uniforms=pt.uniforms;let St=z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=et.uniform),Hh(b,pt),z.needsLights=Jf(b),z.lightsStateVersion=ct,z.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Pt,z.uniformsList=null,Pt}function Vh(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=$s.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function Hh(b,L){let B=ft.get(b);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Zf(b,L,B,z,U){L.isScene!==!0&&(L=It),Ot.resetTextureUnits();let Q=L.fog,ct=z.isMeshStandardMaterial?L.environment:null,pt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Wi,ut=(z.isMeshStandardMaterial?xe:Ce).get(z.envMap||ct),At=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Pt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),St=!!B.morphAttributes.position,Vt=!!B.morphAttributes.normal,$t=!!B.morphAttributes.color,fe=si;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=x.toneMapping);let ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Kt=ie!==void 0?ie.length:0,Tt=ft.get(z),le=f.state.lights;if(W===!0&&(ot===!0||b!==T)){let Ge=b===T&&z.id===v;et.setState(z,b,Ge)}let Xt=!1;z.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==le.state.version||Tt.outputColorSpace!==pt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==ut||z.fog===!0&&Tt.fog!==Q||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==At||Tt.vertexTangents!==Pt||Tt.morphTargets!==St||Tt.morphNormals!==Vt||Tt.morphColors!==$t||Tt.toneMapping!==fe||Tt.morphTargetsCount!==Kt)&&(Xt=!0):(Xt=!0,Tt.__version=z.version);let an=Tt.currentProgram;Xt===!0&&(an=ca(z,L,U));let fs=!1,on=!1,hr=!1,ce=an.getUniforms(),pn=Tt.uniforms;if(Mt.useProgram(an.program)&&(fs=!0,on=!0,hr=!0),z.id!==v&&(v=z.id,on=!0),fs||T!==b){Mt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ce.setValue(I,"projectionMatrix",b.projectionMatrix),ce.setValue(I,"viewMatrix",b.matrixWorldInverse);let Ke=ce.map.cameraPosition;Ke!==void 0&&Ke.setValue(I,Et.setFromMatrixPosition(b.matrixWorld)),qt.logarithmicDepthBuffer&&ce.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ce.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),T!==b&&(T=b,on=!0,hr=!0)}if(U.isSkinnedMesh){ce.setOptional(I,U,"bindMatrix"),ce.setOptional(I,U,"bindMatrixInverse");let Ge=U.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),ce.setValue(I,"boneTexture",Ge.boneTexture,Ot))}U.isBatchedMesh&&(ce.setOptional(I,U,"batchingTexture"),ce.setValue(I,"batchingTexture",U._matricesTexture,Ot),ce.setOptional(I,U,"batchingIdTexture"),ce.setValue(I,"batchingIdTexture",U._indirectTexture,Ot),ce.setOptional(I,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(I,"batchingColorTexture",U._colorsTexture,Ot));let mn=B.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&j.update(U,B,an),(on||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,ce.setValue(I,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(pn.envMap.value=ut,pn.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&L.environment!==null&&(pn.envMapIntensity.value=L.environmentIntensity),on&&(ce.setValue(I,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&$f(pn,hr),Q&&z.fog===!0&&J.refreshFogUniforms(pn,Q),J.refreshMaterialUniforms(pn,z,V,$,f.state.transmissionRenderTarget[b.id]),$s.upload(I,Vh(Tt),pn,Ot)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($s.upload(I,Vh(Tt),pn,Ot),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ce.setValue(I,"center",U.center),ce.setValue(I,"modelViewMatrix",U.modelViewMatrix),ce.setValue(I,"normalMatrix",U.normalMatrix),ce.setValue(I,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Ge=z.uniformsGroups;for(let Ke=0,El=Ge.length;Ke<El;Ke++){let Oi=Ge[Ke];Nt.update(Oi,an),Nt.bind(Oi,an)}}return an}function $f(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function Jf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,L,B){let z=ft.get(b);z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),ft.get(b.texture).__webglTexture=L,ft.get(b.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:B,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,L){let B=ft.get(b);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};let Kf=I.createFramebuffer();this.setRenderTarget=function(b,L=0,B=0){R=b,w=L,C=B;let z=!0,U=null,Q=!1,ct=!1;if(b){let ut=ft.get(b);if(ut.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(I.FRAMEBUFFER,null),z=!1;else if(ut.__webglFramebuffer===void 0)Ot.setupRenderTarget(b);else if(ut.__hasExternalTextures)Ot.rebindTextures(b,ft.get(b.texture).__webglTexture,ft.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let St=b.depthTexture;if(ut.__boundDepthTexture!==St){if(St!==null&&ft.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(b)}}let At=b.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);let Pt=ft.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pt[L])?U=Pt[L][B]:U=Pt[L],Q=!0):b.samples>0&&Ot.useMultisampledRTT(b)===!1?U=ft.get(b).__webglMultisampledFramebuffer:Array.isArray(Pt)?U=Pt[B]:U=Pt,P.copy(b.viewport),H.copy(b.scissor),O=b.scissorTest}else P.copy(gt).multiplyScalar(V).floor(),H.copy(Rt).multiplyScalar(V).floor(),O=Jt;if(B!==0&&(U=Kf),Mt.bindFramebuffer(I.FRAMEBUFFER,U)&&z&&Mt.drawBuffers(b,U),Mt.viewport(P),Mt.scissor(H),Mt.setScissorTest(O),Q){let ut=ft.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,B)}else if(ct){let ut=L;for(let At=0;At<b.textures.length;At++){let Pt=ft.get(b.textures[At]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+At,Pt.__webglTexture,B,ut)}}else if(b!==null&&B!==0){let ut=ft.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ut.__webglTexture,B)}v=-1},this.readRenderTargetPixels=function(b,L,B,z,U,Q,ct,pt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut){Mt.bindFramebuffer(I.FRAMEBUFFER,ut);try{let At=b.textures[pt],Pt=At.format,St=At.type;if(!qt.textureFormatReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-z&&B>=0&&B<=b.height-U&&(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),I.readPixels(L,B,z,U,vt.convert(Pt),vt.convert(St),Q))}finally{let At=R!==null?ft.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,L,B,z,U,Q,ct,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=ft.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ct!==void 0&&(ut=ut[ct]),ut)if(L>=0&&L<=b.width-z&&B>=0&&B<=b.height-U){Mt.bindFramebuffer(I.FRAMEBUFFER,ut);let At=b.textures[pt],Pt=At.format,St=At.type;if(!qt.textureFormatReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Vt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pt),I.readPixels(L,B,z,U,vt.convert(Pt),vt.convert(St),0);let $t=R!==null?ft.get(R).__webglFramebuffer:null;Mt.bindFramebuffer(I.FRAMEBUFFER,$t);let fe=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await rd(I,fe,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Vt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Vt),I.deleteSync(fe),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,L=null,B=0){let z=Math.pow(2,-B),U=Math.floor(b.image.width*z),Q=Math.floor(b.image.height*z),ct=L!==null?L.x:0,pt=L!==null?L.y:0;Ot.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,B,0,0,ct,pt,U,Q),Mt.unbindTexture()};let Qf=I.createFramebuffer(),jf=I.createFramebuffer();this.copyTextureToTexture=function(b,L,B=null,z=null,U=0,Q=null){Q===null&&(U!==0?(Xi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let ct,pt,ut,At,Pt,St,Vt,$t,fe,ie=b.isCompressedTexture?b.mipmaps[Q]:b.image;if(B!==null)ct=B.max.x-B.min.x,pt=B.max.y-B.min.y,ut=B.isBox3?B.max.z-B.min.z:1,At=B.min.x,Pt=B.min.y,St=B.isBox3?B.min.z:0;else{let mn=Math.pow(2,-U);ct=Math.floor(ie.width*mn),pt=Math.floor(ie.height*mn),b.isDataArrayTexture?ut=ie.depth:b.isData3DTexture?ut=Math.floor(ie.depth*mn):ut=1,At=0,Pt=0,St=0}z!==null?(Vt=z.x,$t=z.y,fe=z.z):(Vt=0,$t=0,fe=0);let Kt=vt.convert(L.format),Tt=vt.convert(L.type),le;L.isData3DTexture?(Ot.setTexture3D(L,0),le=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ot.setTexture2DArray(L,0),le=I.TEXTURE_2D_ARRAY):(Ot.setTexture2D(L,0),le=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let Xt=I.getParameter(I.UNPACK_ROW_LENGTH),an=I.getParameter(I.UNPACK_IMAGE_HEIGHT),fs=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),hr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,At),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St);let ce=b.isDataArrayTexture||b.isData3DTexture,pn=L.isDataArrayTexture||L.isData3DTexture;if(b.isDepthTexture){let mn=ft.get(b),Ge=ft.get(L),Ke=ft.get(mn.__renderTarget),El=ft.get(Ge.__renderTarget);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Ke.__webglFramebuffer),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,El.__webglFramebuffer);for(let Oi=0;Oi<ut;Oi++)ce&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.get(b).__webglTexture,U,St+Oi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ft.get(L).__webglTexture,Q,fe+Oi)),I.blitFramebuffer(At,Pt,ct,pt,Vt,$t,ct,pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||ft.has(b)){let mn=ft.get(b),Ge=ft.get(L);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,Qf),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,jf);for(let Ke=0;Ke<ut;Ke++)ce?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,U,St+Ke):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,U),pn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ge.__webglTexture,Q,fe+Ke):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ge.__webglTexture,Q),U!==0?I.blitFramebuffer(At,Pt,ct,pt,Vt,$t,ct,pt,I.COLOR_BUFFER_BIT,I.NEAREST):pn?I.copyTexSubImage3D(le,Q,Vt,$t,fe+Ke,At,Pt,ct,pt):I.copyTexSubImage2D(le,Q,Vt,$t,At,Pt,ct,pt);Mt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else pn?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(le,Q,Vt,$t,fe,ct,pt,ut,Kt,Tt,ie.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(le,Q,Vt,$t,fe,ct,pt,ut,Kt,ie.data):I.texSubImage3D(le,Q,Vt,$t,fe,ct,pt,ut,Kt,Tt,ie):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Vt,$t,ct,pt,Kt,Tt,ie.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Vt,$t,ie.width,ie.height,Kt,ie.data):I.texSubImage2D(I.TEXTURE_2D,Q,Vt,$t,ct,pt,Kt,Tt,ie);I.pixelStorei(I.UNPACK_ROW_LENGTH,Xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,an),I.pixelStorei(I.UNPACK_SKIP_PIXELS,fs),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hr),Q===0&&L.generateMipmaps&&I.generateMipmap(le),Mt.unbindTexture()},this.copyTextureToTexture3D=function(b,L,B=null,z=null,U=0){return Xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,B,z,U)},this.initRenderTarget=function(b){ft.get(b).__webglFramebuffer===void 0&&Ot.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ot.setTextureCube(b,0):b.isData3DTexture?Ot.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ot.setTexture2DArray(b,0):Ot.setTexture2D(b,0),Mt.unbindTexture()},this.resetState=function(){w=0,C=0,R=null,Mt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}};function Ks(s,t,{color:e=!1,anisotropy:n=1}={}){return new Promise((i,r)=>{s.load(t,a=>{e&&(a.colorSpace=Se),a.anisotropy=n,a.wrapS=Fn,a.needsUpdate=!0,i(a)},void 0,r)})}function Sx(s,t){s.onBeforeCompile=e=>{e.uniforms.sunDirectionWorld={value:t},e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vEarthWorldNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vEarthWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 sunDirectionWorld;
varying vec3 vEarthWorldNormal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float earthSunDot = dot(normalize(vEarthWorldNormal), normalize(sunDirectionWorld));
         float earthNightMask = 1.0 - smoothstep(-0.18, 0.2, earthSunDot);
         totalEmissiveRadiance *= earthNightMask;`),s.userData.shader=e},s.customProgramCacheKey=()=>"timebox-earth-day-night-v2"}function bx(s,t,e){let n=new je(s*1.035,e?64:128,e?48:96),i=new Ye({uniforms:{sunDirectionWorld:{value:t}},vertexShader:`
      uniform vec3 sunDirectionWorld;
      varying float vFresnel;
      varying float vSunAmount;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDirection = normalize(-mvPosition.xyz);
        vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
        vFresnel = pow(1.0 - clamp(abs(dot(viewNormal, viewDirection)), 0.0, 1.0), 4.4);
        vSunAmount = smoothstep(-0.12, 0.55, dot(worldNormal, normalize(sunDirectionWorld)));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      varying float vFresnel;
      varying float vSunAmount;
      void main() {
        float alpha = vFresnel * mix(0.035, 0.19, vSunAmount);
        vec3 atmosphereColor = mix(vec3(0.18, 0.34, 0.56), vec3(0.34, 0.62, 0.92), vSunAmount);
        gl_FragColor = vec4(atmosphereColor, alpha);
      }
    `,side:ve,transparent:!0,blending:zr,depthWrite:!1,toneMapped:!1});return{mesh:new Qt(n,i),geometry:n,material:i}}var nl=class{constructor({radius:t,assetBase:e,sunDirection:n,anisotropy:i=1,lowPower:r=!1,onCriticalError:a}){this.group=new ze,this.axialGroup=new ze,this.axialGroup.rotation.z=Ei.degToRad(-23.4),this.group.add(this.axialGroup),this.radius=t,this.disposables=[],this.textures=[],this.disposed=!1;let o=128,l=128,c=new je(t,o,l),h=new Dr({color:7373722,roughness:.78,metalness:0,clearcoat:.025,clearcoatRoughness:.82,specularIntensity:.38,emissive:new Lt(16762759),emissiveIntensity:.72});Sx(h,n),this.surface=new Qt(c,h),this.axialGroup.add(this.surface),this.disposables.push(c,h);let u=new Zi;Promise.all([Ks(u,`${e}/earth_day.webp`,{color:!0,anisotropy:i}),Ks(u,`${e}/earth_night.webp`,{color:!0,anisotropy:i}),Ks(u,`${e}/earth_normal.png`,{anisotropy:i}),Ks(u,`${e}/earth_roughness.png`,{anisotropy:i}),Ks(u,`${e}/earth_specular.png`,{anisotropy:i})]).then(([g,m,f,M,S])=>{if(this.disposed){[g,m,f,M,S].forEach(x=>x.dispose());return}this.textures.push(g,m,f,M,S),h.map=g,h.emissiveMap=m,h.normalMap=f,h.normalScale.set(.08,.08),h.roughnessMap=M,h.specularIntensityMap=S,h.color.set(16777215),h.needsUpdate=!0,this.group.userData.mapsReady=!0}).catch(g=>{this.group.userData.textureFallback=!0,a&&a(g)});let d=new je(t*1.012,r?64:128,r?48:96),p=new Pn({color:16054007,roughness:1,metalness:0,transparent:!0,opacity:r?.42:.54,alphaTest:.025,depthWrite:!1});this.clouds=new Qt(d,p),this.axialGroup.add(this.clouds),this.disposables.push(d,p),Ks(u,`${e}/earth_clouds.webp`,{anisotropy:i}).then(g=>{if(this.disposed){g.dispose();return}this.textures.push(g),p.alphaMap=g,p.needsUpdate=!0}).catch(()=>{this.clouds.visible=!1});let _=bx(t,n,r);this.atmosphere=_.mesh,this.group.add(this.atmosphere),this.disposables.push(_.geometry,_.material)}update(t,e){e||(this.surface.rotation.y+=t*.018,this.clouds.rotation.y+=t*.013)}dispose(){this.disposed=!0,this.textures.forEach(t=>t.dispose()),this.disposables.forEach(t=>t&&t.dispose&&t.dispose()),this.group.clear()}};function ri(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Wd(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var sn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},oh,Le,oe,Sn=1e8,te=1/Sn,Jc=Math.PI*2,Tx=Jc/4,Ex=0,Xd=Math.sqrt,wx=Math.cos,Ax=Math.sin,Ae=function(t){return typeof t=="string"},pe=function(t){return typeof t=="function"},oi=function(t){return typeof t=="number"},dl=function(t){return typeof t>"u"},Xn=function(t){return typeof t=="object"},nn=function(t){return t!==!1},lh=function(){return typeof window<"u"},il=function(t){return pe(t)||Ae(t)},qd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ve=Array.isArray,Kc=/(?:-?\.?\d|\.)+/gi,ch=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hh=/[+-]=-?[.\d]+/,Yd=/[^,'"\[\]\s]+/gi,Cx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ue,Gn,Qc,uh,dn={},ol={},Zd,$d=function(t){return(ol=tr(t,dn))&&He},fl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},jr=function(t,e){return!e&&console.warn(t)},Jd=function(t,e){return t&&(dn[t]=e)&&ol&&(ol[t]=e)||dn},ta=function(){return 0},Rx={suppressEvents:!0,isStart:!0,kill:!1},sl={suppressEvents:!0,kill:!1},Px={suppressEvents:!0},dh={},Ai=[],jc={},Kd,tn={},Wc={},Od=30,rl=[],fh="",ph=function(t){var e=t[0],n,i;if(Xn(e)||pe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=rl.length;i--&&!rl[i].targetTest(e););n=rl[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new xh(t[i],n)))||t.splice(i,1);return t},Ci=function(t){return t._gsap||ph(bn(t))[0]._gsap},mh=function(t,e,n){return(n=t[e])&&pe(n)?t[e]():dl(n)&&t.getAttribute&&t.getAttribute(e)||n},Ze=function(t,e){return(t=t.split(",")).forEach(e)||t},me=function(t){return Math.round(t*1e5)/1e5||0},Te=function(t){return Math.round(t*1e7)/1e7||0},as=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Ix=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ll=function(){var t=Ai.length,e=Ai.slice(0),n,i;for(jc={},Ai.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},gh=function(t){return!!(t._initted||t._startAt||t.add)},Qd=function(t,e,n,i){Ai.length&&!Le&&ll(),t.render(e,n,i||!!(Le&&e<0&&gh(t))),Ai.length&&!Le&&ll()},jd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Yd).length<2?e:Ae(t)?t.trim():t},tf=function(t){return t},fn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Dx=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},tr=function(t,e){for(var n in e)t[n]=e[n];return t},Bd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Xn(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},cl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Jr=function(t){var e=t.parent||ue,n=t.keyframes?Dx(Ve(t.keyframes)):fn;if(nn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Lx=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ef=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(r)for(o=e[r];a&&a[r]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},pl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,a=e._next;r?r._next=a:t[n]===e&&(t[n]=a),a?a._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Ri=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ns=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Ux=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},th=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(sl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Nx=function s(t){return!t||t._ts&&s(t.parent)},zd=function(t){return t._repeat?er(t._tTime,t=t.duration()+t._rDelay)*t:0},er=function(t,e){var n=Math.floor(t=Te(t/e));return t&&n===t?n-1:n},hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ml=function(t){return t._end=Te(t._start+(t._tDur/Math.abs(t._ts||t._rts||te)||0))},gl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Te(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ml(t),n._dirty||ns(n,t)),t},nf=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=hl(t.rawTime(),e),(!e._dur||ia(0,e.totalDuration(),n)-e._tTime>te)&&e.render(n,!0)),ns(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-te}},Wn=function(t,e,n,i){return e.parent&&Ri(e),e._start=Te((oi(n)?n:n||t!==ue?Mn(t,n,e):t._time)+e._delay),e._end=Te(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ef(t,e,"_first","_last",t._sort?"_start":0),eh(e)||(t._recent=e),i||nf(t,e),t._ts<0&&gl(t,t._tTime),t},sf=function(t,e){return(dn.ScrollTrigger||fl("scrollTrigger",e))&&dn.ScrollTrigger.create(e,t)},rf=function(t,e,n,i,r){if(Mh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Kd!==en.frame)return Ai.push(t),t._lazy=[r,i],1},Fx=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},eh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ox=function(t,e,n,i){var r=t.ratio,a=e<0||!e&&(!t._start&&Fx(t)&&!(!t._initted&&eh(t))||(t._ts<0||t._dp._ts<0)&&!eh(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=ia(0,t._tDur,e),h=er(l,o),t._yoyo&&h&1&&(a=1-a),h!==er(t._tTime,o)&&(r=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==r||Le||i||t._zTime===te||!e&&t._zTime){if(!t._initted&&rf(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?te:0),n||(n=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&th(t,e,n,!0),t._onUpdate&&!n&&un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ri(t,1),!n&&!Le&&(un(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Bx=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},nr=function(t,e,n,i){var r=t._repeat,a=Te(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=r?r<0?1e10:Te(a*(r+1)+t._rDelay*r):a,o>0&&!i&&gl(t,t._tTime=t._tDur*o),t.parent&&ml(t),n||ns(t.parent,t),t},kd=function(t){return t instanceof De?ns(t):nr(t,t._dur)},zx={_start:0,endTime:ta,totalDuration:ta},Mn=function s(t,e,n){var i=t.labels,r=t._recent||zx,a=t.duration()>=Sn?r.endTime(!1):t._dur,o,l,c;return Ae(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?r:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ve(n)?n[0]:n).totalDuration()),o>1?s(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Kr=function(t,e,n){var i=oi(e[1]),r=(i?2:1)+(t<2?0:1),a=e[r],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=nn(l.vars.inherit)&&l.parent;a.immediateRender=nn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[r-1]}return new ye(e[0],a,e[r+1])},Pi=function(t,e){return t||t===0?e(t):e},ia=function(t,e,n){return n<t?t:n>e?e:n},Ue=function(t,e){return!Ae(t)||!(e=Cx.exec(t))?"":e[1]},kx=function(t,e,n){return Pi(n,function(i){return ia(t,e,i)})},nh=[].slice,af=function(t,e){return t&&Xn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Xn(t[0]))&&!t.nodeType&&t!==Gn},Vx=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ae(i)&&!e||af(i,1)?(r=n).push.apply(r,bn(i)):n.push(i)})||n},bn=function(t,e,n){return oe&&!e&&oe.selector?oe.selector(t):Ae(t)&&!n&&(Qc||!ir())?nh.call((e||uh).querySelectorAll(t),0):Ve(t)?Vx(t,n):af(t)?nh.call(t,0):t?[t]:[]},ih=function(t){return t=bn(t)[0]||jr("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return bn(e,n.querySelectorAll?n:n===t?jr("Invalid scope")||uh.createElement("div"):t)}},of=function(t){return t.sort(function(){return .5-Math.random()})},lf=function(t){if(pe(t))return t;var e=Xn(t)?t:{each:t},n=is(e.ease),i=e.from||0,r=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,h=i,u=i;return Ae(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(h=i[0],u=i[1]),function(d,p,_){var g=(_||e).length,m=a[g],f,M,S,x,E,w,C,R,v;if(!m){if(v=e.grid==="auto"?0:(e.grid||[1,Sn])[1],!v){for(C=-Sn;C<(C=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=a[g]=[],f=l?Math.min(v,g)*h-.5:i%v,M=v===Sn?0:l?g*u/v-.5:i/v|0,C=0,R=Sn,w=0;w<g;w++)S=w%v-f,x=M-(w/v|0),m[w]=E=c?Math.abs(c==="y"?x:S):Xd(S*S+x*x),E>C&&(C=E),E<R&&(R=E);i==="random"&&of(m),m.max=C-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Ue(e.amount||e.each)||0,n=n&&g<0?_f(n):n}return g=(m[d]-m.min)/m.max||0,Te(m.b+(n?n(g):g)*m.v)+m.u}},sh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Te(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(oi(n)?0:Ue(n))}},cf=function(t,e){var n=Ve(t),i,r;return!n&&Xn(t)&&(i=n=t.radius||Sn,t.values?(t=bn(t.values),(r=!oi(t[0]))&&(i*=i)):t=sh(t.increment)),Pi(e,n?pe(t)?function(a){return r=t(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),l=parseFloat(r?a.y:0),c=Sn,h=0,u=t.length,d,p;u--;)r?(d=t[u].x-o,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-o),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:a,r||h===a||oi(a)?h:h+Ue(a)}:sh(t))},hf=function(t,e,n,i){return Pi(Ve(t)?!e:n===!0?!!(n=0):!i,function(){return Ve(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Hx=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,a){return a(r)},i)}},Gx=function(t,e){return function(n){return t(parseFloat(n))+(e||Ue(n))}},Wx=function(t,e,n){return df(t,e,0,1,n)},uf=function(t,e,n){return Pi(n,function(i){return t[~~e(i)]})},Xx=function s(t,e,n){var i=e-t;return Ve(t)?uf(t,s(0,t.length),e):Pi(n,function(r){return(i+(r-t)%i)%i+t})},qx=function s(t,e,n){var i=e-t,r=i*2;return Ve(t)?uf(t,s(0,t.length-1),e):Pi(n,function(a){return a=(r+(a-t)%r)%r||0,t+(a>i?r-a:a)})},sr=function(t){for(var e=0,n="",i,r,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",r=t.substr(i+7,a-i-7).match(o?Yd:Kc),n+=t.substr(e,i-e)+hf(o?r:+r[0],o?0:+r[1],+r[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},df=function(t,e,n,i,r){var a=e-t,o=i-n;return Pi(r,function(l){return n+((l-t)/a*o||0)})},Yx=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var a=Ae(t),o={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ve(t)&&!Ve(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},n=e}else i||(t=tr(Ve(t)?[]:{},t));if(!h){for(l in e)vh.call(o,t,l,"get",e[l]);r=function(_){return Th(_,o)||(a?t.p:t)}}}return Pi(n,r)},Vd=function(t,e,n){var i=t.labels,r=Sn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&r>(o=Math.abs(o))&&(l=a,r=o);return l},un=function(t,e,n){var i=t.vars,r=i[e],a=oe,o=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ai.length&&ll(),o&&(oe=o),h=l?r.apply(c,l):r.call(c),oe=a,h},Zr=function(t){return Ri(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&un(t,"onInterrupt"),t},Qs,ff=[],pf=function(t){if(t)if(t=!t.name&&t.default||t,lh()||t.headless){var e=t.name,n=pe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:ta,render:Th,add:vh,kill:cv,modifier:lv,rawVars:0},a={targetTest:0,get:0,getSetter:_l,aliases:{},register:0};if(ir(),t!==i){if(tn[e])return;fn(i,fn(cl(t,r),a)),tr(i.prototype,tr(r,cl(t,a))),tn[i.prop=e]=i,t.targetTest&&(rl.push(i),dh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Jd(e,i),t.register&&t.register(He,i,$e)}else ff.push(t)},jt=255,$r={aqua:[0,jt,jt],lime:[0,jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,jt],navy:[0,0,128],white:[jt,jt,jt],olive:[128,128,0],yellow:[jt,jt,0],orange:[jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[jt,0,0],pink:[jt,192,203],cyan:[0,jt,jt],transparent:[jt,jt,jt,0]},Xc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*jt+.5|0},mf=function(t,e,n){var i=t?oi(t)?[t>>16,t>>8&jt,t&jt]:0:$r.black,r,a,o,l,c,h,u,d,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),$r[t])i=$r[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+r+r+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&jt,i&jt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&jt,t&jt]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(Kc),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(c+1):h+c-h*c,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=Xc(l+1/3,r,a),i[1]=Xc(l,r,a),i[2]=Xc(l-1/3,r,a);else if(~t.indexOf("="))return i=t.match(ch),n&&i.length<4&&(i[3]=1),i}else i=t.match(Kc)||$r.transparent;i=i.map(Number)}return e&&!_&&(r=i[0]/jt,a=i[1]/jt,o=i[2]/jt,u=Math.max(r,a,o),d=Math.min(r,a,o),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(a-o)/p+(a<o?6:0):u===a?(o-r)/p+2:(r-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},gf=function(t){var e=[],n=[],i=-1;return t.split(ai).forEach(function(r){var a=r.match(rs)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Hd=function(t,e,n){var i="",r=(t+i).match(ai),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=mf(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=gf(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ai,"1").split(rs),u=c.length-1;o<u;o++)i+=c[o]+(~l.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ai),u=c.length-1;o<u;o++)i+=c[o]+r[o];return i+c[u]},ai=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in $r)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Zx=/hsl[a]?\(/,_h=function(t){var e=t.join(" "),n;if(ai.lastIndex=0,ai.test(e))return n=Zx.test(e),t[1]=Hd(t[1],n),t[0]=Hd(t[0],n,gf(t[1])),!0},ea,en=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,a=r,o=[],l,c,h,u,d,p,_=function g(m){var f=s()-i,M=m===!0,S,x,E,w;if((f>t||f<0)&&(n+=f-e),i+=f,E=i-n,S=E-a,(S>0||M)&&(w=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,a+=S+(S>=r?4:r-S),x=1),M||(l=c(g)),x)for(p=0;p<o.length;p++)o[p](E,d,w,m)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Zd&&(!Qc&&lh()&&(Gn=Qc=window,uh=Gn.document||{},dn.gsap=He,(Gn.gsapVersions||(Gn.gsapVersions=[])).push(He.version),$d(ol||Gn.GreenSockGlobals||!Gn.gsap&&Gn||{}),ff.forEach(pf)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},ea=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ea=0,c=ta},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){r=1e3/(m||240),a=u.time*1e3+r},add:function(m,f,M){var S=f?function(x,E,w,C){m(x,E,w,C),u.remove(S)}:m;return u.remove(m),o[M?"unshift":"push"](S),ir(),S},remove:function(m,f){~(f=o.indexOf(m))&&o.splice(f,1)&&p>=f&&p--},_listeners:o},u}(),ir=function(){return!ea&&en.wake()},Ht={},$x=/^[\d.\-M][\d.\-,\s]/,Jx=/["']/g,Kx=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,a=n.length,o,l,c;r<a;r++)l=n[r],o=r!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Jx,"").trim():+c,i=l.substr(o+1).trim();return e},Qx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},jx=function(t){var e=(t+"").split("("),n=Ht[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Kx(e[1])]:Qx(t).split(",").map(jd)):Ht._CE&&$x.test(t)?Ht._CE("",t):n},_f=function(t){return function(e){return 1-t(1-e)}},xf=function s(t,e){for(var n=t._first,i;n;)n instanceof De?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},is=function(t,e){return t&&(pe(t)?t:Ht[t]||jx(t))||e},os=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},a;return Ze(t,function(o){Ht[o]=dn[o]=r,Ht[a=o.toLowerCase()]=n;for(var l in r)Ht[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ht[o+"."+l]=r[l]}),r},vf=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},qc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),a=r/Jc*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ax((h-a)*r)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:vf(o);return r=Jc/r,l.config=function(c,h){return s(t,c,h)},l},Yc=function s(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:vf(n);return i.config=function(r){return s(t,r)},i};Ze("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;os(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Ht.Linear.easeNone=Ht.none=Ht.Linear.easeIn;os("Elastic",qc("in"),qc("out"),qc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(o){return o<e?s*o*o:o<n?s*Math.pow(o-1.5/t,2)+.75:o<i?s*(o-=2.25/t)*o+.9375:s*Math.pow(o-2.625/t,2)+.984375};os("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);os("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});os("Circ",function(s){return-(Xd(1-s*s)-1)});os("Sine",function(s){return s===1?1:-wx(s*Tx)+1});os("Back",Yc("in"),Yc("out"),Yc());Ht.SteppedEase=Ht.steps=dn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,a=1-te;return function(o){return((i*ia(0,a,o)|0)+r)*n}}};js.ease=Ht["quad.out"];Ze("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return fh+=s+","+s+"Params,"});var xh=function(t,e){this.id=Ex++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:mh,this.set=e?e.getSetter:_l},na=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,nr(this,+e.duration,1,1),this.data=e.data,oe&&(this._ctx=oe,oe.data.push(this)),ea||en.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(ir(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(gl(this,n),!r._dp||r.parent||nf(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Wn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===te||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Qd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+zd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+zd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?er(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-te?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-te?0:this._rts,this.totalTime(ia(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ml(this),Ux(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ir(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==te&&(this._tTime-=te)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Wn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(nn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?hl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Px);var i=Le;return Le=n,gh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Mn(this,n),nn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,nn(i)),this._dur||(this._zTime=-te),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-te:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-te,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-te)},t.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(r){var a=pe(n)?n:tf,o=function(){var c=i.then;i.then=null,pe(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),r(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Zr(this)},s}();fn(na.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-te,_prom:0,_ps:!1,_rts:1});var De=function(s){Wd(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=nn(n.sortChildren),ue&&Wn(n.parent||ue,ri(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&sf(ri(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,a){return Kr(0,arguments,this),this},e.from=function(i,r,a){return Kr(1,arguments,this),this},e.fromTo=function(i,r,a,o){return Kr(2,arguments,this),this},e.set=function(i,r,a){return r.duration=0,r.parent=this,Jr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ye(i,r,Mn(this,a),1),this},e.call=function(i,r,a){return Wn(this,ye.delayedCall(0,i,r),a)},e.staggerTo=function(i,r,a,o,l,c,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ye(i,a,Mn(this,l)),this},e.staggerFrom=function(i,r,a,o,l,c,h){return a.runBackwards=1,Jr(a).immediateRender=nn(a.immediateRender),this.staggerTo(i,r,a,o,l,c,h)},e.staggerFromTo=function(i,r,a,o,l,c,h,u){return o.startAt=a,Jr(o).immediateRender=nn(o.immediateRender),this.staggerTo(i,r,o,l,c,h,u)},e.render=function(i,r,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Te(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,_,g,m,f,M,S,x,E,w,C;if(this!==ue&&h>l&&i>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,i+=this._time-o),d=h,x=this._start,S=this._ts,f=!S,u&&(c||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(d=Te(h%m),h===l?(g=this._repeat,d=c):(E=Te(h/m),g=~~E,g&&g===E&&(d=c,g--),d>c&&(d=c)),E=er(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),w&&g&1&&(d=c-d,C=1),g!==E&&!this._lock){var R=w&&E&1,v=R===(w&&g&1);if(g<E&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(C?0:Te(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&un(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;xf(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Bx(this,Te(o),Te(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!r&&!E&&(un(this,"onStart"),this._tTime!==h))return this;if(d>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,a),d!==this._time||!this._ts&&!f){M=0,_&&(h+=this._zTime=-te);break}}p=_}else{p=this._last;for(var T=i<0?i:d;p;){if(_=p._prev,(p._act||T<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,r,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,r,a||Le&&gh(p)),d!==this._time||!this._ts&&!f){M=0,_&&(h+=this._zTime=T?-te:te);break}}p=_}}if(M&&!r&&(this.pause(),M.render(d>=o?0:-te)._zTime=d>=o?1:-1,this._ts))return this._start=x,ml(this),this.render(i,r,a);this._onUpdate&&!r&&un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ri(this,1),!r&&!(i<0&&!o)&&(h||o||!l)&&(un(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var a=this;if(oi(r)||(r=Mn(this,r,i)),!(i instanceof na)){if(Ve(i))return i.forEach(function(o){return a.add(o,r)}),this;if(Ae(i))return this.addLabel(i,r);if(pe(i))i=ye.delayedCall(0,i);else return this}return this!==i?Wn(this,i,r):this},e.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-Sn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ye?r&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,a)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},e.remove=function(i){return Ae(i)?this.removeLabel(i):pe(i)?this.killTweensOf(i):(i.parent===this&&pl(this,i),i===this._recent&&(this._recent=this._last),ns(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Te(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Mn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,a){var o=ye.delayedCall(0,r||ta,a);return o.data="isPause",this._hasPause=1,Wn(this,o,Mn(this,i))},e.removePause=function(i){var r=this._first;for(i=Mn(this,i);r;)r._start===i&&r.data==="isPause"&&Ri(r),r=r._next},e.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)wi!==o[l]&&o[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var a=[],o=bn(i),l=this._first,c=oi(r),h;l;)l instanceof ye?Ix(l._targets,o)&&(c?(!wi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&a.push(l):(h=l.getTweensOf(o,r)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(i,r){r=r||{};var a=this,o=Mn(a,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,_=ye.to(a,fn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||te,onStart:function(){if(a.pause(),!p){var m=r.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&nr(_,m,0,1).render(_._time,!0,!0),p=1}h&&h.apply(_,u||[])}},r));return d?_.render(0):_},e.tweenFromTo=function(i,r,a){return this.tweenTo(r,fn({startAt:{time:Mn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Mn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Mn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+te)},e.shiftChildren=function(i,r,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(c in l)l[c]>=a&&(l[c]+=i);return ns(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ns(this)},e.totalDuration=function(i){var r=0,a=this,o=a._last,l=Sn,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Wn(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>r&&o._ts&&(r=o._end),o=c;nr(a,a===ue&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ue._ts&&(Qd(ue,hl(i,ue)),Kd=en.frame),en.frame>=Od){Od+=sn.autoSleep||120;var r=ue._first;if((!r||!r._ts)&&sn.autoSleep&&en._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||en.sleep()}}},t}(na);fn(De.prototype,{_lock:0,_hasPause:0,_forcing:0});var tv=function(t,e,n,i,r,a,o){var l=new $e(this._pt,t,e,0,1,bh,null,r),c=0,h=0,u,d,p,_,g,m,f,M;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=sr(i)),a&&(M=[n,i],a(M,t,e),n=M[0],i=M[1]),d=n.match(Gc)||[];u=Gc.exec(i);)_=u[0],g=i.substring(c,u.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?as(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(hh.test(i)||f)&&(l.e=0),this._pt=l,l},vh=function(t,e,n,i,r,a,o,l,c,h){pe(i)&&(i=i(r||0,t,a));var u=t[e],d=n!=="get"?n:pe(u)?c?t[e.indexOf("set")||!pe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=pe(u)?c?rv:Sf:Sh,_;if(Ae(i)&&(~i.indexOf("random(")&&(i=sr(i)),i.charAt(1)==="="&&(_=as(d,i)+(Ue(d)||0),(_||_===0)&&(i=_))),!h||d!==i||rh)return!isNaN(d*i)&&i!==""?(_=new $e(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?ov:bf,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!u&&!(e in t)&&fl(e,i),tv.call(this,t,e,d,i,p,l||sn.stringFilter,c))},ev=function(t,e,n,i,r){if(pe(t)&&(t=Qr(t,r,e,n,i)),!Xn(t)||t.style&&t.nodeType||Ve(t)||qd(t))return Ae(t)?Qr(t,r,e,n,i):t;var a={},o;for(o in t)a[o]=Qr(t[o],r,e,n,i);return a},yh=function(t,e,n,i,r,a){var o,l,c,h;if(tn[t]&&(o=new tn[t]).init(r,o.rawVars?e[t]:ev(e[t],i,r,a,n),n,i,a)!==!1&&(n._pt=l=new $e(n._pt,r,t,0,1,o.render,o,0,o.priority),n!==Qs))for(c=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)c[o._props[h]]=l;return o},wi,rh,Mh=function s(t,e,n){var i=t.vars,r=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,f=t.parent,M=f&&f.data==="nested"?f.vars.targets:m,S=t._overwrite==="auto"&&!oh,x=t.timeline,E,w,C,R,v,T,P,H,O,k,Y,G,$;if(x&&(!d||!r)&&(r="none"),t._ease=is(r,js.ease),t._yEase=u?_f(is(u===!0?r:u,js.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(H=m[0]?Ci(m[0]).harness:0,G=H&&i[H.prop],E=cl(i,dh),g&&(g._zTime<0&&g.progress(1),e<0&&h&&o&&!p?g.render(-1,!0):g.revert(h&&_?sl:Rx),g._lazy=0),a){if(Ri(t._startAt=ye.set(m,fn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!g&&nn(l),startAt:null,delay:0,onUpdate:c&&function(){return un(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!o&&!p)&&t._startAt.revert(sl),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(o=!1),C=fn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&nn(l),immediateRender:o,stagger:0,parent:f},E),G&&(C[H.prop]=G),Ri(t._startAt=ye.set(m,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(sl):t._startAt.render(-1,!0)),t._zTime=e,!o)s(t._startAt,te,te);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&nn(l)||l&&!_,w=0;w<m.length;w++){if(v=m[w],P=v._gsap||ph(m)[w]._gsap,t._ptLookup[w]=k={},jc[P.id]&&Ai.length&&ll(),Y=M===m?w:M.indexOf(v),H&&(O=new H).init(v,G||E,t,Y,M)!==!1&&(t._pt=R=new $e(t._pt,v,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(V){k[V]=R}),O.priority&&(T=1)),!H||G)for(C in E)tn[C]&&(O=yh(C,E,t,Y,v,M))?O.priority&&(T=1):k[C]=R=vh.call(t,v,C,"get",E[C],Y,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(v,t._op[w]),S&&t._pt&&(wi=t,ue.killTweensOf(v,k,t.globalTime(e)),$=!t.parent,wi=0),t._pt&&l&&(jc[P.id]=1)}T&&Eh(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!$,d&&e<=0&&x.render(Sn,!0,!0)},nv=function(t,e,n,i,r,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return rh=1,t.vars[e]="+=0",Mh(t,o),rh=0,l?jr(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=me(n)+Ue(u.e)),u.b&&(u.b=h.s+Ue(u.b))},iv=function(t,e){var n=t[0]?Ci(t[0]).harness:0,i=n&&n.aliases,r,a,o,l;if(!i)return e;r=tr({},e);for(a in i)if(a in r)for(l=i[a].split(","),o=l.length;o--;)r[l[o]]=r[a];return r},sv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",a,o;if(Ve(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:r})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:r})},Qr=function(t,e,n,i,r){return pe(t)?t.call(e,n,i,r):Ae(t)&&~t.indexOf("random(")?sr(t):t},yf=fh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Mf={};Ze(yf+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Mf[s]=1});var ye=function(s){Wd(t,s);function t(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:Jr(i))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,M=i.parent||ue,S=(Ve(n)||qd(n)?oi(n[0]):"length"in i)?[n]:bn(n),x,E,w,C,R,v,T,P;if(o._targets=S.length?ph(S):jr("GSAP target "+n+" not found. https://gsap.com",!sn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||d||il(c)||il(h)){if(i=o.vars,x=o.timeline=new De({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:S}),x.kill(),x.parent=x._dp=ri(o),x._start=0,d||il(c)||il(h)){if(C=S.length,T=d&&lf(d),Xn(d))for(R in d)~yf.indexOf(R)&&(P||(P={}),P[R]=d[R]);for(E=0;E<C;E++)w=cl(i,Mf),w.stagger=0,f&&(w.yoyoEase=f),P&&tr(w,P),v=S[E],w.duration=+Qr(c,ri(o),E,v,S),w.delay=(+Qr(h,ri(o),E,v,S)||0)-o._delay,!d&&C===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),x.to(v,w,T?T(E,v,S):0),x._ease=Ht.none;x.duration()?c=h=0:o.timeline=0}else if(_){Jr(fn(x.vars.defaults,{ease:"none"})),x._ease=is(_.ease||i.ease||"none");var H=0,O,k,Y;if(Ve(_))_.forEach(function(G){return x.to(S,G,">")}),x.duration();else{w={};for(R in _)R==="ease"||R==="easeEach"||sv(R,_[R],w,_.easeEach);for(R in w)for(O=w[R].sort(function(G,$){return G.t-$.t}),H=0,E=0;E<O.length;E++)k=O[E],Y={ease:k.e,duration:(k.t-(E?O[E-1].t:0))/100*c},Y[R]=k.v,x.to(S,Y,H),H+=Y.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!oh&&(wi=ri(o),ue.killTweensOf(S),wi=0),Wn(M,ri(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!c&&!_&&o._start===Te(M._time)&&nn(u)&&Nx(ri(o))&&M.data!=="nested")&&(o._tTime=-te,o.render(Math.max(0,-h)||0)),m&&sf(ri(o),m),o}var e=t.prototype;return e.render=function(i,r,a){var o=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-te&&!h?l:i<te?0:i,d,p,_,g,m,f,M,S,x;if(!c)Ox(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,a);if(d=Te(u%g),u===l?(_=this._repeat,d=c):(m=Te(u/g),_=~~m,_&&_===m?(d=c,_--):d>c&&(d=c)),f=this._yoyo&&_&1,f&&(x=this._yEase,d=c-d),m=er(this._tTime,g),d===o&&!a&&this._initted&&_===m)return this._tTime=u,this;_!==m&&(S&&this._yEase&&xf(S,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(Te(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(rf(this,h?i:d,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,a)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!o&&u&&!r&&!m&&(un(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;S&&S.render(i<0?i:S._dur*S._ease(d/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&th(this,i,r,a),un(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&un(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&th(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ri(this,1),!r&&!(h&&!o)&&(u||o||f)&&(un(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,a,o,l){ea||en.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Mh(this,c),h=this._ease(c/this._dur),nv(this,i,r,a,o,h,c,l)?this.resetTo(i,r,a,o,1):(gl(this,0),this.parent||ef(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Le),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,wi&&wi.vars.overwrite!==!0)._first||Zr(this),this.parent&&a!==this.timeline.totalDuration()&&nr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?bn(i):o,c=this._ptLookup,h=this._pt,u,d,p,_,g,m,f;if((!r||r==="all")&&Lx(o,l))return r==="all"&&(this._pt=0),Zr(this);for(u=this._op=this._op||[],r!=="all"&&(Ae(r)&&(g={},Ze(r,function(M){return g[M]=1}),r=g),r=iv(o,r)),f=o.length;f--;)if(~l.indexOf(o[f])){d=c[f],r==="all"?(u[f]=r,_=d,p={}):(p=u[f]=u[f]||{},_=r);for(g in _)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&pl(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&h&&Zr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return Kr(1,arguments)},t.delayedCall=function(i,r,a,o){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,r,a){return Kr(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,a){return ue.killTweensOf(i,r,a)},t}(na);fn(ye.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ze("staggerTo,staggerFrom,staggerFromTo",function(s){ye[s]=function(){var t=new De,e=nh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Sh=function(t,e,n){return t[e]=n},Sf=function(t,e,n){return t[e](n)},rv=function(t,e,n,i){return t[e](i.fp,n)},av=function(t,e,n){return t.setAttribute(e,n)},_l=function(t,e){return pe(t[e])?Sf:dl(t[e])&&t.setAttribute?av:Sh},bf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},ov=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},bh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Th=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},lv=function(t,e,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(t,e,n),r=a},cv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?pl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},hv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Eh=function(t){for(var e=t._pt,n,i,r,a;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=r},$e=function(){function s(e,n,i,r,a,o,l,c,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||bf,this.d=l||this,this.set=c||Sh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=hv,this.m=n,this.mt=r,this.tween=i},s}();Ze(fh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return dh[s]=1});dn.TweenMax=dn.TweenLite=ye;dn.TimelineLite=dn.TimelineMax=De;ue=new De({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});sn.stringFilter=_h;var ss=[],al={},uv=[],Gd=0,dv=0,Zc=function(t){return(al[t]||uv).map(function(e){return e()})},ah=function(){var t=Date.now(),e=[];t-Gd>2&&(Zc("matchMediaInit"),ss.forEach(function(n){var i=n.queries,r=n.conditions,a,o,l,c;for(o in i)a=Gn.matchMedia(i[o]).matches,a&&(l=1),a!==r[o]&&(r[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Zc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gd=t,Zc("matchMedia"))},Tf=function(){function s(e,n){this.selector=n&&ih(n),this.data=[],this._r=[],this.isReverted=!1,this.id=dv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){pe(n)&&(r=i,i=n,n=pe);var a=this,o=function(){var c=oe,h=a.selector,u;return c&&c!==a&&c.data.push(a),r&&(a.selector=ih(r)),oe=a,u=i.apply(a,arguments),pe(u)&&a._r.push(u),oe=c,a.selector=h,a.isReverted=!1,u};return a.last=o,n===pe?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=oe;oe=null,n(this),oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ye&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof De?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ye)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=ss.length;a--;)ss[a].id===this.id&&ss.splice(a,1)},t.revert=function(n){this.kill(n||{})},s}(),fv=function(){function s(e){this.contexts=[],this.scope=e,oe&&oe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Xn(n)||(n={matches:n});var a=new Tf(0,r||this.scope),o=a.conditions={},l,c,h;oe&&!a.selector&&(a.selector=oe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?h=1:(l=Gn.matchMedia(n[c]),l&&(ss.indexOf(a)<0&&ss.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(ah):l.addEventListener("change",ah)));return h&&i(a,function(u){return a.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return pf(i)})},timeline:function(t){return new De(t)},getTweensOf:function(t,e){return ue.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ae(t)&&(t=bn(t)[0]);var r=Ci(t||{}).get,a=n?tf:jd;return n==="native"&&(n=""),t&&(e?a((tn[e]&&tn[e].get||r)(t,e,n,i)):function(o,l,c){return a((tn[o]&&tn[o].get||r)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=bn(t),t.length>1){var i=t.map(function(h){return He.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var a=tn[e],o=Ci(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;Qs._pt=0,u.init(t,n?h+n:h,Qs,0,[t]),u.render(1,u),Qs._pt&&Th(1,Qs)}:o.set(t,l);return a?c:function(h){return c(t,l,n?h+n:h,o,1)}},quickTo:function(t,e,n){var i,r=He.to(t,fn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,h){return r.resetTo(e,l,c,h)};return a.tween=r,a},isTweening:function(t){return ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=is(t.ease,js.ease)),Bd(js,t||{})},config:function(t){return Bd(sn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!dn[o]&&jr(e+" effect requires "+o+" plugin.")}),Wc[e]=function(o,l,c){return n(bn(o),fn(l||{},r),c)},a&&(De.prototype[e]=function(o,l,c){return this.add(Wc[e](o,Xn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Ht[t]=is(e)},parseEase:function(t,e){return arguments.length?is(t,e):Ht},getById:function(t){return ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new De(t),i,r;for(n.smoothChildTiming=nn(t.smoothChildTiming),ue.remove(n),n._dp=0,n._time=n._tTime=ue._time,i=ue._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ye&&i.vars.onComplete===i._targets[0]))&&Wn(n,i,i._start-i._delay),i=r;return Wn(ue,n,0),n},context:function(t,e){return t?new Tf(t,e):oe},matchMedia:function(t){return new fv(t)},matchMediaRefresh:function(){return ss.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ah()},addEventListener:function(t,e){var n=al[t]||(al[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=al[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Xx,wrapYoyo:qx,distribute:lf,random:hf,snap:cf,normalize:Wx,getUnit:Ue,clamp:kx,splitColor:mf,toArray:bn,selector:ih,mapRange:df,pipe:Hx,unitize:Gx,interpolate:Yx,shuffle:of},install:$d,effects:Wc,ticker:en,updateRoot:De.updateRoot,plugins:tn,globalTimeline:ue,core:{PropTween:$e,globals:Jd,Tween:ye,Timeline:De,Animation:na,getCache:Ci,_removeLinkedListItem:pl,reverting:function(){return Le},context:function(t){return t&&oe&&(oe.data.push(t),t._ctx=oe),oe},suppressOverwrites:function(t){return oh=t}}};Ze("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return ul[s]=ye[s]});en.add(De.updateRoot);Qs=ul.to({},{duration:0});var pv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},mv=function(t,e){var n=t._targets,i,r,a;for(i in e)for(r=n.length;r--;)a=t._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=pv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[r],i))},$c=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var l,c;if(Ae(r)&&(l={},Ze(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}mv(o,r)}}}},He=ul.registerPlugin({name:"attr",init:function(t,e,n,i,r){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,r,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},$c("roundProps",sh),$c("modifiers"),$c("snap",cf))||ul;ye.version=De.version=He.version="3.13.0";Zd=1;lh()&&ir();var gv=Ht.Power0,_v=Ht.Power1,xv=Ht.Power2,vv=Ht.Power3,yv=Ht.Power4,Mv=Ht.Linear,Sv=Ht.Quad,bv=Ht.Cubic,Tv=Ht.Quart,Ev=Ht.Quint,wv=Ht.Strong,Av=Ht.Elastic,Cv=Ht.Back,Rv=Ht.SteppedEase,Pv=Ht.Bounce,Iv=Ht.Sine,Dv=Ht.Expo,Lv=Ht.Circ;var Ef,Ii,ar,Ih,us,Uv,wf,Dh,Nv=function(){return typeof window<"u"},ci={},hs=180/Math.PI,or=Math.PI/180,rr=Math.atan2,Af=1e8,Lh=/([A-Z])/g,Fv=/(left|right|width|margin|padding|x)/i,Ov=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ah=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Bv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},zv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},kv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Nf=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Ff=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vv=function(t,e,n){return t.style[e]=n},Hv=function(t,e,n){return t.style.setProperty(e,n)},Gv=function(t,e,n){return t._gsap[e]=n},Wv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Xv=function(t,e,n,i,r){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},qv=function(t,e,n,i,r){var a=t._gsap;a[e]=n,a.renderTransform(r,a)},de="transform",rn=de+"Origin",Yv=function s(t,e){var n=this,i=this.target,r=i.style,a=i._gsap;if(t in ci&&r){if(this.tfm=this.tfm||{},t!=="transform")t=qn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=li(i,o)}):this.tfm[t]=a.x?a[t]:li(i,t),t===rn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return s.call(n,o,e)});if(this.props.indexOf(de)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(rn,e,"")),t=de}(r||e)&&this.props.push(t,e,r[t])},Of=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Zv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,a;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Lh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Dh(),(!r||!r.isStart)&&!n[de]&&(Of(n),i.zOrigin&&n[rn]&&(n[rn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Bf=function(t,e){var n={target:t,props:[],revert:Zv,save:Yv};return t._gsap||He.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},zf,Ch=function(t,e){var n=Ii.createElementNS?Ii.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ii.createElement(t);return n&&n.style?n:Ii.createElement(t)},Tn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Lh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,lr(e)||e,1)||""},Cf="O,Moz,ms,Ms,Webkit".split(","),lr=function(t,e,n){var i=e||us,r=i.style,a=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Cf[a]+t in r););return a<0?null:(a===3?"ms":a>=0?Cf[a]:"")+t},Rh=function(){Nv()&&window.document&&(Ef=window,Ii=Ef.document,ar=Ii.documentElement,us=Ch("div")||{style:{}},Uv=Ch("div"),de=lr(de),rn=de+"Origin",us.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zf=!!lr("perspective"),Dh=He.core.reverting,Ih=1)},Rf=function(t){var e=t.ownerSVGElement,n=Ch("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ar.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ar.removeChild(n),r},Pf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},kf=function(t){var e,n;try{e=t.getBBox()}catch{e=Rf(t),n=1}return e&&(e.width||e.height)||n||(e=Rf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Pf(t,["x","cx","x1"])||0,y:+Pf(t,["y","cy","y1"])||0,width:0,height:0}:e},Vf=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&kf(t))},ds=function(t,e){if(e){var n=t.style,i;e in ci&&e!==rn&&(e=de),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Lh,"-$1").toLowerCase())):n.removeAttribute(e)}},Di=function(t,e,n,i,r,a){var o=new $e(t._pt,e,n,0,1,a?Ff:Nf);return t._pt=o,o.b=i,o.e=r,t._props.push(n),o},If={deg:1,rad:1,turn:1},$v={grid:1,flex:1},Li=function s(t,e,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=us.style,l=Fv.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",_,g,m,f;if(i===a||!r||If[i]||If[a])return r;if(a!=="px"&&!d&&(r=s(t,e,n,"px")),f=t.getCTM&&Vf(t),(p||a==="%")&&(ci[e]||~e.indexOf("adius")))return _=f?t.getBBox()[l?"width":"height"]:t[h],me(p?r/_*u:r/100*_);if(o[l?"width":"height"]=u+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ii||!g.appendChild)&&(g=Ii.body),m=g._gsap,m&&p&&m.width&&l&&m.time===en.time&&!m.uncache)return me(r/m.width*u);if(p&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,_=t[h],M?t.style[e]=M:ds(t,e)}else(p||a==="%")&&!$v[Tn(g,"display")]&&(o.position=Tn(t,"position")),g===t&&(o.position="static"),g.appendChild(us),_=us[h],g.removeChild(us),o.position="absolute";return l&&p&&(m=Ci(g),m.time=en.time,m.width=g[h]),me(d?_*r/u:_&&r?u/_*r:0)},li=function(t,e,n,i){var r;return Ih||Rh(),e in qn&&e!=="transform"&&(e=qn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ci[e]&&e!=="transform"?(r=aa(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:vl(Tn(t,rn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=xl[e]&&xl[e](t,e,n)||Tn(t,e)||mh(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Li(t,e,r,n)+n:r},Jv=function(t,e,n,i){if(!n||n==="none"){var r=lr(e,t,1),a=r&&Tn(t,r,1);a&&a!==n?(e=r,n=a):e==="borderColor"&&(n=Tn(t,"borderTopColor"))}var o=new $e(this._pt,t.style,e,0,1,bh),l=0,c=0,h,u,d,p,_,g,m,f,M,S,x,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Tn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Tn(t,e)||i,g?t.style[e]=g:ds(t,e)),h=[n,i],_h(h),n=h[0],i=h[1],d=n.match(rs)||[],E=i.match(rs)||[],E.length){for(;u=rs.exec(i);)m=u[0],M=i.substring(l,u.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=d[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=as(p,m)+x),f=parseFloat(m),S=m.substr((f+"").length),l=rs.lastIndex-S.length,S||(S=S||sn.units[e]||x,l===i.length&&(i+=S,o.e+=S)),x!==S&&(p=Li(t,e,g,S)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:f-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Ff:Nf;return hh.test(i)&&(o.e=0),this._pt=o,o},Df={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Df[n]||n,e[1]=Df[i]||i,e.join(" ")},Qv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,a=n._gsap,o,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)o=r[c],ci[o]&&(l=1,o=o==="transformOrigin"?rn:de),ds(n,o);l&&(ds(n,de),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",aa(n,1),a.uncache=1,Of(i)))}},xl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var a=t._pt=new $e(t._pt,e,n,0,0,Qv);return a.u=i,a.pr=-10,a.tween=r,t._props.push(n),1}}},ra=[1,0,0,1,0,0],Hf={},Gf=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Lf=function(t){var e=Tn(t,de);return Gf(e)?ra:e.substr(7).match(ch).map(me)},Uh=function(t,e){var n=t._gsap||Ci(t),i=t.style,r=Lf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ra:r):(r===ra&&!t.offsetParent&&t!==ar&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ar.appendChild(t)),r=Lf(t),l?i.display=l:ds(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ar.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Ph=function(t,e,n,i,r,a){var o=t._gsap,l=r||Uh(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=l[0],_=l[1],g=l[2],m=l[3],f=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,E=parseFloat(S[1])||0,w,C,R,v;n?l!==ra&&(C=p*m-_*g)&&(R=x*(m/C)+E*(-g/C)+(g*M-m*f)/C,v=x*(-_/C)+E*(p/C)-(p*M-_*f)/C,x=R,E=v):(w=kf(t),x=w.x+(~S[0].indexOf("%")?x/100*w.width:x),E=w.y+(~(S[1]||S[0]).indexOf("%")?E/100*w.height:E)),i||i!==!1&&o.smooth?(f=x-c,M=E-h,o.xOffset=u+(f*p+M*g)-f,o.yOffset=d+(f*_+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=E,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[rn]="0px 0px",a&&(Di(a,o,"xOrigin",c,x),Di(a,o,"yOrigin",h,E),Di(a,o,"xOffset",u,o.xOffset),Di(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+E)},aa=function(t,e){var n=t._gsap||new xh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Tn(t,rn)||"0",h,u,d,p,_,g,m,f,M,S,x,E,w,C,R,v,T,P,H,O,k,Y,G,$,V,st,at,gt,Rt,Jt,Bt,W;return h=u=d=g=m=f=M=S=x=0,p=_=1,n.svg=!!(t.getCTM&&Vf(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[de]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[de]!=="none"?l[de]:"")),i.scale=i.rotate=i.translate="none"),C=Uh(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),Ph(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,C)),E=n.xOrigin||0,w=n.yOrigin||0,C!==ra&&(P=C[0],H=C[1],O=C[2],k=C[3],h=Y=C[4],u=G=C[5],C.length===6?(p=Math.sqrt(P*P+H*H),_=Math.sqrt(k*k+O*O),g=P||H?rr(H,P)*hs:0,M=O||k?rr(O,k)*hs+g:0,M&&(_*=Math.abs(Math.cos(M*or))),n.svg&&(h-=E-(E*P+w*O),u-=w-(E*H+w*k))):(W=C[6],Jt=C[7],at=C[8],gt=C[9],Rt=C[10],Bt=C[11],h=C[12],u=C[13],d=C[14],R=rr(W,Rt),m=R*hs,R&&(v=Math.cos(-R),T=Math.sin(-R),$=Y*v+at*T,V=G*v+gt*T,st=W*v+Rt*T,at=Y*-T+at*v,gt=G*-T+gt*v,Rt=W*-T+Rt*v,Bt=Jt*-T+Bt*v,Y=$,G=V,W=st),R=rr(-O,Rt),f=R*hs,R&&(v=Math.cos(-R),T=Math.sin(-R),$=P*v-at*T,V=H*v-gt*T,st=O*v-Rt*T,Bt=k*T+Bt*v,P=$,H=V,O=st),R=rr(H,P),g=R*hs,R&&(v=Math.cos(R),T=Math.sin(R),$=P*v+H*T,V=Y*v+G*T,H=H*v-P*T,G=G*v-Y*T,P=$,Y=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=me(Math.sqrt(P*P+H*H+O*O)),_=me(Math.sqrt(G*G+W*W)),R=rr(Y,G),M=Math.abs(R)>2e-4?R*hs:0,x=Bt?1/(Bt<0?-Bt:Bt):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Gf(Tn(t,de)),$&&t.setAttribute("transform",$))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(p*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=me(p),n.scaleY=me(_),n.rotation=me(g)+o,n.rotationX=me(m)+o,n.rotationY=me(f)+o,n.skewX=M+o,n.skewY=S+o,n.transformPerspective=x+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[rn]=vl(c)),n.xOffset=n.yOffset=0,n.force3D=sn.force3D,n.renderTransform=n.svg?ty:zf?Wf:jv,n.uncache=0,n},vl=function(t){return(t=t.split(" "))[0]+" "+t[1]},wh=function(t,e,n){var i=Ue(e);return me(parseFloat(e)+parseFloat(Li(t,"x",n+"px",i)))+i},jv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Wf(t,e)},ls="0deg",sa="0px",cs=") ",Wf=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,f=n.force3D,M=n.target,S=n.zOrigin,x="",E=f==="auto"&&t&&t!==1||f===!0;if(S&&(u!==ls||h!==ls)){var w=parseFloat(h)*or,C=Math.sin(w),R=Math.cos(w),v;w=parseFloat(u)*or,v=Math.cos(w),a=wh(M,a,C*v*-S),o=wh(M,o,-Math.sin(w)*-S),l=wh(M,l,R*v*-S+S)}m!==sa&&(x+="perspective("+m+cs),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(E||a!==sa||o!==sa||l!==sa)&&(x+=l!==sa||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+cs),c!==ls&&(x+="rotate("+c+cs),h!==ls&&(x+="rotateY("+h+cs),u!==ls&&(x+="rotateX("+u+cs),(d!==ls||p!==ls)&&(x+="skew("+d+", "+p+cs),(_!==1||g!==1)&&(x+="scale("+_+", "+g+cs),M.style[de]=x||"translate(0, 0)"},ty=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,f=n.yOffset,M=n.forceCSS,S=parseFloat(a),x=parseFloat(o),E,w,C,R,v;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=or,c*=or,E=Math.cos(l)*u,w=Math.sin(l)*u,C=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(h*=or,v=Math.tan(c-h),v=Math.sqrt(1+v*v),C*=v,R*=v,h&&(v=Math.tan(h),v=Math.sqrt(1+v*v),E*=v,w*=v)),E=me(E),w=me(w),C=me(C),R=me(R)):(E=u,R=d,w=C=0),(S&&!~(a+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(S=Li(p,"x",a,"px"),x=Li(p,"y",o,"px")),(_||g||m||f)&&(S=me(S+_-(_*E+g*C)+m),x=me(x+g-(_*w+g*R)+f)),(i||r)&&(v=p.getBBox(),S=me(S+i/100*v.width),x=me(x+r/100*v.height)),v="matrix("+E+","+w+","+C+","+R+","+S+","+x+")",p.setAttribute("transform",v),M&&(p.style[de]=v)},ey=function(t,e,n,i,r){var a=360,o=Ae(r),l=parseFloat(r)*(o&&~r.indexOf("rad")?hs:1),c=l-i,h=i+c+"deg",u,d;return o&&(u=r.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*Af)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*Af)%a-~~(c/a)*a)),t._pt=d=new $e(t._pt,e,n,i,c,Bv),d.e=h,d.u="deg",t._props.push(n),d},Uf=function(t,e){for(var n in e)t[n]=e[n];return t},ny=function(t,e,n){var i=Uf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,h,u,d,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[de]=e,o=aa(n,1),ds(n,de),n.setAttribute("transform",c)):(c=getComputedStyle(n)[de],a[de]=e,o=aa(n,1),a[de]=c);for(l in ci)c=i[l],h=o[l],c!==h&&r.indexOf(l)<0&&(p=Ue(c),_=Ue(h),u=p!==_?Li(n,l,c,_):parseFloat(c),d=parseFloat(h),t._pt=new $e(t._pt,o,l,u,d-u,Ah),t._pt.u=_||0,t._props.push(l));Uf(o,i)};Ze("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",a=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(o){return t<2?s+o:"border"+o+s});xl[t>1?"border"+s:s]=function(o,l,c,h,u){var d,p;if(arguments.length<4)return d=a.map(function(_){return li(o,_,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},a.forEach(function(_,g){return p[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,p,u)}});var Nh={name:"css",register:Rh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var a=this._props,o=t.style,l=n.vars.startAt,c,h,u,d,p,_,g,m,f,M,S,x,E,w,C,R;Ih||Rh(),this.styles=this.styles||Bf(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(tn[g]&&yh(g,e,n,i,t,r)))){if(p=typeof h,_=xl[g],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=sr(h)),_)_(this,t,g,h,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",ai.lastIndex=0,ai.test(c)||(m=Ue(c),f=Ue(h)),f?m!==f&&(c=Li(t,g,c,f)+f):m&&(h+=m),this.add(o,"setProperty",c,h,i,r,0,0,g),a.push(g),R.push(g,0,o[g]);else if(p!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],Ae(c)&&~c.indexOf("random(")&&(c=sr(c)),Ue(c+"")||c==="auto"||(c+=sn.units[g]||Ue(li(t,g))||""),(c+"").charAt(1)==="="&&(c=li(t,g))):c=li(t,g),d=parseFloat(c),M=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in qn&&(g==="autoAlpha"&&(d===1&&li(t,"visibility")==="hidden"&&u&&(d=0),R.push("visibility",0,o.visibility),Di(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=qn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ci,S){if(this.styles.save(g),p==="string"&&h.substring(0,6)==="var(--"&&(h=Tn(t,h.substring(4,h.indexOf(")"))),u=parseFloat(h)),x||(E=t._gsap,E.renderTransform&&!e.parseTransform||aa(t,e.parseTransform),w=e.smoothOrigin!==!1&&E.smooth,x=this._pt=new $e(this._pt,o,de,0,1,E.renderTransform,E,0,-1),x.dep=1),g==="scale")this._pt=new $e(this._pt,E,"scaleY",E.scaleY,(M?as(E.scaleY,M+u):u)-E.scaleY||0,Ah),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(rn,0,o[rn]),h=Kv(h),E.svg?Ph(t,h,0,w,0,this):(f=parseFloat(h.split(" ")[2])||0,f!==E.zOrigin&&Di(this,E,"zOrigin",E.zOrigin,f),Di(this,o,g,vl(c),vl(h)));continue}else if(g==="svgOrigin"){Ph(t,h,1,w,0,this);continue}else if(g in Hf){ey(this,E,g,d,M?as(d,M+h):h);continue}else if(g==="smoothOrigin"){Di(this,E,"smooth",E.smooth,h);continue}else if(g==="force3D"){E[g]=h;continue}else if(g==="transform"){ny(this,h,t);continue}}else g in o||(g=lr(g)||g);if(S||(u||u===0)&&(d||d===0)&&!Ov.test(h)&&g in o)m=(c+"").substr((d+"").length),u||(u=0),f=Ue(h)||(g in sn.units?sn.units[g]:m),m!==f&&(d=Li(t,g,c,f)),this._pt=new $e(this._pt,S?E:o,g,d,(M?as(d,M+u):u)-d,!S&&(f==="px"||g==="zIndex")&&e.autoRound!==!1?kv:Ah),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=zv);else if(g in o)Jv.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,r);else if(g!=="parseTransform"){fl(g,h);continue}S||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}C&&Eh(this)},render:function(t,e){if(e.tween._time||!Dh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:li,aliases:qn,getSetter:function(t,e,n){var i=qn[e];return i&&i.indexOf(",")<0&&(e=i),e in ci&&e!==rn&&(t._gsap.x||li(t,"x"))?n&&wf===n?e==="scale"?Wv:Gv:(wf=n||{})&&(e==="scale"?Xv:qv):t.style&&!dl(t.style[e])?Vv:~e.indexOf("-")?Hv:_l(t,e)},core:{_removeProperty:ds,_getMatrix:Uh}};He.utils.checkPrefix=lr;He.core.getStyleSaver=Bf;(function(s,t,e,n){var i=Ze(s+","+t+","+e,function(r){ci[r]=1});Ze(t,function(r){sn.units[r]="deg",Hf[r]=1}),qn[i[13]]=s+","+t,Ze(n,function(r){var a=r.split(":");qn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ze("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){sn.units[s]="px"});He.registerPlugin(Nh);var Je=He.registerPlugin(Nh)||He,kb=Je.core.Tween;var iy=new N(-5,3.2,7).normalize(),Xf=Object.freeze({family:{radius:.38,seed:17,style:"warm-rock",bumpScale:.038},thoughts:{radius:.42,seed:31,style:"gas-giant",bumpScale:.012},keepsakes:{radius:.35,seed:47,style:"teal-stone",bumpScale:.032},friends:{radius:.39,seed:61,style:"blue-world",bumpScale:.03},campus:{radius:.34,seed:79,style:"cold-world",bumpScale:.034},cooking:{radius:.4,seed:97,style:"volcanic",bumpScale:.048},upload:{radius:.37,seed:113,style:"ice-world",bumpScale:.044},feedback:{radius:.33,seed:137,style:"cratered",bumpScale:.052}});function ge(s,t=0,e=1){return Math.max(t,Math.min(e,s))}function cr(s,t,e){return s+(t-s)*e}function Ne(s,t,e){return[Math.round(cr(s[0],t[0],e)),Math.round(cr(s[1],t[1],e)),Math.round(cr(s[2],t[2],e))]}function Ui(s,t,e){let n=Math.imul(s,374761393)^Math.imul(t,668265263)^Math.imul(e,1442695041);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967295}function Ni(s){return s*s*(3-2*s)}function sy(s,t,e,n){let i=s*n,r=t*n*.5,a=Math.floor(i),o=Math.floor(r),l=(a+1)%n,c=(a%n+n)%n,h=Ni(i-a),u=Ni(r-o),d=cr(Ui(c,o,e),Ui(l,o,e),h),p=cr(Ui(c,o+1,e),Ui(l,o+1,e),h);return cr(d,p,u)}function oa(s,t,e,n=5){let i=0,r=.55,a=0,o=4;for(let l=0;l<n;l+=1)i+=sy(s,t,e+l*19,o)*r,a+=r,r*=.5,o*=2;return i/a}function Fh(s,t,e){return 1-Math.abs(oa(s,t,e,5)*2-1)}function ry(s,t){let e=[];for(let n=0;n<t;n+=1)e.push({u:Ui(n,s,s+3),v:.08+Ui(n+7,s,s+11)*.84,radius:.012+Ui(n+13,s,s+19)*.045});return e}function ay(s,t,e){let n=0,i=0;return e.forEach(r=>{let a=Math.min(Math.abs(s-r.u),1-Math.abs(s-r.u)),o=t-r.v,l=Math.hypot(a,o)/r.radius;l<1&&(n=Math.max(n,1-Ni(l))),l>=.82&&l<1.24&&(i=Math.max(i,1-Math.abs(l-1.02)/.22))}),{depression:n,rim:i}}function hi(s,t,e,n=!1){let i=document.createElement("canvas");i.width=s,i.height=t;let r=i.getContext("2d"),a=r.createImageData(s,t);a.data.set(e),r.putImageData(a,0,0);let o=new Rr(i);return o.wrapS=Fn,o.wrapT=Nn,o.colorSpace=n?Se:Dn,o.needsUpdate=!0,o}function oy(s,t){let e=t?256:512,n=e/2,i=new Uint8ClampedArray(e*n*4),r=new Uint8ClampedArray(e*n*4),a=new Uint8ClampedArray(e*n*4),o=new Uint8ClampedArray(e*n*4),l=s.style==="cratered"?ry(s.seed,26):[],c=!1;for(let h=0;h<n;h+=1){let u=h/(n-1),d=Math.abs(u-.5)*2;for(let p=0;p<e;p+=1){let _=p/(e-1),g=oa(_,u,s.seed,5),m=oa(_,u,s.seed+41,6),f=Fh(_,u,s.seed+83),M,S=g,x=205,E=[0,0,0];if(s.style==="warm-rock"){let R=Ni(ge((g-.38)*3.4)),v=ge(g*.68+m*.32);M=Ne([79,53,35],[181,116,55],v),M=Ne(M,[208,151,78],R*.28),S=g*.72+m*.28,x=Math.round(196+m*38);let T=Ui(p,h,s.seed+151);R>.42&&T>.992&&d<.84&&(E=[255,171,83],c=!0)}else if(s.style==="gas-giant"){let R=Math.sin(u*Math.PI*28+g*8+Math.sin(_*Math.PI*6)*.8)*.5+.5,v=ge(f*.72+R*.38);M=Ne([48,55,91],[104,92,133],v),M=Ne(M,[59,91,123],ge(m*.8)),S=.44+v*.18,x=Math.round(194+v*34)}else if(s.style==="teal-stone"){let R=ge(g*.78+f*.32);M=Ne([28,68,66],[71,133,118],R),M=Ne(M,[113,133,112],ge((m-.62)*2)),S=g*.62+f*.38,x=Math.round(205+m*32)}else if(s.style==="blue-world"){let R=Ni(ge((g-.48)*4.2));M=Ne([23,50,72],[46,91,118],m),M=Ne(M,[91,119,125],R*.5),S=g*.7+m*.3,x=Math.round(182+R*42)}else if(s.style==="cold-world"){let R=ge(g*.74+f*.3);M=Ne([30,39,48],[85,99,107],R),M=Ne(M,[119,130,132],ge((m-.68)*2.2)),S=g*.6+f*.4,x=Math.round(198+m*38)}else if(s.style==="volcanic"){let R=Ni(ge((f-.86)*9)),v=ge(g*.64+m*.36);M=Ne([38,25,22],[104,52,31],v),M=Ne(M,[143,65,30],R*.34),S=ge(g*.72+m*.3-R*.28),x=Math.round(218+m*25),R>.72&&(E=[255,Math.round(72+R*82),22],c=!0)}else if(s.style==="ice-world"){let R=Ni(ge((f-.88)*10)),v=ge(g*.56+m*.44);M=Ne([95,139,158],[184,206,211],v),M=Ne(M,[48,96,126],R*.8),S=ge(.54+m*.28-R*.34),x=Math.round(151+m*56)}else{let R=ay(_,u,l),v=ge(g*.58+m*.42);M=Ne([55,57,58],[134,130,119],v),M=Ne(M,[169,157,128],ge((g-.72)*2.8)*.36),S=ge(g*.62+m*.3-R.depression*.36+R.rim*.24),x=Math.round(215+m*28)}let w=(h*e+p)*4;i[w]=M[0],i[w+1]=M[1],i[w+2]=M[2],i[w+3]=255;let C=Math.round(ge(S)*255);r[w]=C,r[w+1]=C,r[w+2]=C,r[w+3]=255,a[w]=x,a[w+1]=x,a[w+2]=x,a[w+3]=255,o[w]=E[0],o[w+1]=E[1],o[w+2]=E[2],o[w+3]=255}}return{albedo:hi(e,n,i,!0),bump:hi(e,n,r),roughness:hi(e,n,a),emissive:c?hi(e,n,o,!0):null}}function ly(s,t){let e=t?256:512,n=e/2,i=new Uint8ClampedArray(e*n*4);for(let r=0;r<n;r+=1){let a=r/(n-1);for(let o=0;o<e;o+=1){let l=o/(e-1),c=oa(l,a,s,6),h=Fh(l,a,s+43),u=Math.round(Ni(ge((c*.75+h*.25-.58)*3.8))*205),d=(r*e+o)*4;i[d]=u,i[d+1]=u,i[d+2]=u,i[d+3]=255}}return hi(e,n,i)}function cy(s,t){let e=t?128:256,n=new Uint8ClampedArray(e*e*4),i=new Uint8ClampedArray(e*e*4),r=new Uint8ClampedArray(e*e*4),a=new Uint8ClampedArray(e*e*4);for(let o=0;o<e;o+=1){let l=o/(e-1);for(let c=0;c<e;c+=1){let h=c/(e-1),u=oa(h,l,s,6),d=Fh(h,l,s+67),p=ge(u*.68+d*.32),_=Ne([71,63,53],[139,124,101],p),g=Math.round(ge((u-.18)*1.35)*(178+d*67)),m=(o*e+c)*4;n[m]=_[0],n[m+1]=_[1],n[m+2]=_[2],n[m+3]=255;let f=Math.round(p*255);i[m]=f,i[m+1]=f,i[m+2]=f,i[m+3]=255;let M=Math.round(218+u*35);r[m]=M,r[m+1]=M,r[m+2]=M,r[m+3]=255,a[m]=g,a[m+1]=g,a[m+2]=g,a[m+3]=255}}return{albedo:hi(e,e,n,!0),bump:hi(e,e,i),roughness:hi(e,e,r),alpha:hi(e,e,a)}}function hy(s){s.onBeforeCompile=t=>{t.uniforms.navigationSunDirection={value:iy},t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vNavigationWorldNormal;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vNavigationWorldNormal = normalize(mat3(modelMatrix) * objectNormal);`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 navigationSunDirection;
varying vec3 vNavigationWorldNormal;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
         float navigationNight = 1.0 - smoothstep(-0.16, 0.22, dot(normalize(vNavigationWorldNormal), navigationSunDirection));
         totalEmissiveRadiance *= navigationNight;`)},s.customProgramCacheKey=()=>"timebox-miniature-world-night-v1"}function uy(s,t,e=.09){let n=new je(s*1.035,64,64),i=new Ye({uniforms:{atmosphereColor:{value:new Lt(t)},atmosphereIntensity:{value:e}},vertexShader:`
      varying float vWorldFresnel;
      void main() {
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        vec3 viewNormal = normalize(normalMatrix * normal);
        vec3 viewDirection = normalize(-viewPosition.xyz);
        vWorldFresnel = pow(1.0 - clamp(abs(dot(viewNormal, viewDirection)), 0.0, 1.0), 4.2);
        gl_Position = projectionMatrix * viewPosition;
      }
    `,fragmentShader:`
      uniform vec3 atmosphereColor;
      uniform float atmosphereIntensity;
      varying float vWorldFresnel;
      void main() {
        gl_FragColor = vec4(atmosphereColor, vWorldFresnel * atmosphereIntensity);
      }
    `,side:ve,transparent:!0,depthWrite:!1,blending:_n,toneMapped:!1});return{mesh:new Qt(n,i),geometry:n,material:i}}var yl=class{constructor(t,e=!1){this.item=t,this.spec=Xf[t.id]||Xf.feedback,this.group=new ze,this.depthGroup=new ze,this.model=new ze,this.group.add(this.depthGroup),this.depthGroup.add(this.model),this.group.userData.navigationNode=this,this.hovered=!1,this.active=!1,this.lowPower=e,this.baseScale=e?.94:1,this.disposables=[],this.textures=[],this.moons=[],this.rings=[],this.createWorld(),this.model.scale.setScalar(this.baseScale)}track(...t){t.forEach(e=>{e&&this.disposables.push(e)})}createWorld(){let{radius:t,seed:e,style:n,bumpScale:i}=this.spec,r=oy(this.spec,this.lowPower);this.textures.push(r.albedo,r.bump,r.roughness),r.emissive&&this.textures.push(r.emissive);let a=new je(t,64,64),o=new Pn({map:r.albedo,bumpMap:r.bump,bumpScale:i,roughnessMap:r.roughness,roughness:n==="ice-world"?.72:.88,metalness:0,emissive:r.emissive?16777215:1053464,emissiveMap:r.emissive,emissiveIntensity:n==="volcanic"?.42:n==="warm-rock"?.18:.035});n==="warm-rock"&&hy(o),this.surfaceMaterial=o,this.baseEmissiveIntensity=o.emissiveIntensity,this.surface=new Qt(a,o),this.model.add(this.surface),this.track(a,o),n==="warm-rock"?(this.addCloudLayer(15915189,e+181,.31),this.addAtmosphere(13998691,.075)):n==="gas-giant"?(this.addCloudLayer(12105164,e+181,.2),this.addAtmosphere(7438506,.095)):n==="teal-stone"?(this.addCrossedRings(),this.addAtmosphere(6069137,.055)):n==="blue-world"?(this.addMoons(),this.addAtmosphere(5933220,.06)):n==="cold-world"?(this.addSilverRing(),this.addAtmosphere(6655138,.07)):n==="volcanic"?this.addAtmosphere(10702382,.045):n==="ice-world"?(this.addAtmosphere(8566984,.085),this.addAuroraBands()):n==="cratered"&&(this.addAtmosphere(10196616,.035),this.addSignalWaves())}addCloudLayer(t,e,n){let i=ly(e,this.lowPower),r=new je(this.spec.radius*1.014,64,64),a=new Pn({color:t,alphaMap:i,transparent:!0,opacity:n,roughness:1,metalness:0,alphaTest:.02,depthWrite:!1});this.clouds=new Qt(r,a),this.model.add(this.clouds),this.textures.push(i),this.track(r,a)}addAtmosphere(t,e){let n=uy(this.spec.radius,t,e);this.atmosphere=n.mesh,this.atmosphereMaterial=n.material,this.baseAtmosphereIntensity=e,this.model.add(n.mesh),this.track(n.geometry,n.material)}createRingMaterial(t,e,n={}){let i=new Pn({color:t,map:n.albedo||null,bumpMap:n.bump||null,bumpScale:n.bump?.012:0,roughnessMap:n.roughness||null,alphaMap:n.alpha||null,roughness:.96,metalness:.02,transparent:!0,opacity:e,side:vn,depthWrite:!1});return this.track(i),i}addCrossedRings(){let t=cy(this.spec.seed+211,this.lowPower);this.textures.push(t.albedo,t.bump,t.roughness,t.alpha);let e=this.createRingMaterial(12826268,.62,t),n=i=>{let r=new zs(this.spec.radius*1.34,this.spec.radius*1.62,96,4),a=new Qt(r,e);a.rotation.set(1.18,.18,i),this.model.add(a),this.rings.push(a),this.track(r)};n(.48),n(-.48)}addSilverRing(){let t=new zs(this.spec.radius*1.38,this.spec.radius*1.62,96,4),e=this.createRingMaterial(10922149,.64),n=new Qt(t,e);n.rotation.set(1.3,.12,-.18),this.model.add(n),this.rings.push(n),this.track(t)}addMoons(){let t=new je(this.spec.radius*.19,24,24),e=new Pn({map:this.textures[0],bumpMap:this.textures[1],bumpScale:.018,color:11052448,roughness:.94,metalness:0});this.track(t,e),[{distance:this.spec.radius*1.62,speed:.32,inclination:.24,phase:.6},{distance:this.spec.radius*1.95,speed:-.24,inclination:-.32,phase:3.4}].forEach(n=>{let i=new Qt(t,e);i.position.set(Math.cos(n.phase)*n.distance,Math.sin(n.phase)*n.distance*n.inclination,Math.sin(n.phase)*n.distance*.72),this.model.add(i),this.moons.push({mesh:i,...n})})}addAuroraBands(){let t=new zn({color:7714736,transparent:!0,opacity:.08,blending:_n,depthWrite:!1,toneMapped:!1});this.track(t),[-1,1].forEach(e=>{let n=new ks(this.spec.radius*.54,this.spec.radius*.018,8,72),i=new Qt(n,t);i.position.y=e*this.spec.radius*.72,i.rotation.x=Math.PI/2,this.model.add(i),this.rings.push(i),this.track(n)})}addSignalWaves(){let t=new zn({color:12893609,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1});this.track(t);for(let e=0;e<2;e+=1){let n=new ks(this.spec.radius*(1.18+e*.16),.006,6,64),i=new Qt(n,t.clone());i.rotation.x=Math.PI/2,i.userData.waveOffset=e*Math.PI,this.model.add(i),this.signalWaves=this.signalWaves||[],this.signalWaves.push(i),this.track(n,i.material)}}setHovered(t){this.hovered=t,this.updateState()}setActive(t){this.active=t,this.updateState()}updateState(){let t=this.hovered||this.active,e=this.active?1.19:this.hovered?1.07:1,n=this.baseScale*e;Je.to(this.model.scale,{x:n,y:n,z:n,duration:.42,ease:"power3.out",overwrite:!0}),Je.to(this.surfaceMaterial,{emissiveIntensity:this.baseEmissiveIntensity+(t?.055:0),duration:.3,overwrite:!0}),this.atmosphereMaterial&&Je.to(this.atmosphereMaterial.uniforms.atmosphereIntensity,{value:this.baseAtmosphereIntensity+(t?.025:0),duration:.3,overwrite:!0})}update(t,e,n){this.depthGroup.scale.setScalar(.94+e*.06);let i=performance.now()*.001;this.signalWaves&&this.signalWaves.forEach(r=>{let a=n?.5:Math.sin(i*3.2+r.userData.waveOffset)*.5+.5;r.material.opacity=this.hovered?.035+a*.075:0,r.scale.setScalar(.96+a*.12)}),!n&&(this.surface.rotation.y+=t*(this.spec.style==="gas-giant"?.08:.055),this.clouds&&(this.clouds.rotation.y+=t*.036),this.rings.forEach((r,a)=>{r.rotation.z+=t*(a%2===0?.012:-.009)}),this.moons.forEach(r=>{let a=i*r.speed+r.phase;r.mesh.position.set(Math.cos(a)*r.distance,Math.sin(a)*r.distance*r.inclination,Math.sin(a)*r.distance*.72),r.mesh.rotation.y+=t*.18}))}dispose(){Je.killTweensOf(this.model.scale),this.surfaceMaterial&&Je.killTweensOf(this.surfaceMaterial),this.atmosphereMaterial&&Je.killTweensOf(this.atmosphereMaterial.uniforms.atmosphereIntensity),new Set(this.textures).forEach(t=>{t.dispose(),t.image=null}),new Set(this.disposables).forEach(t=>t.dispose()),this.model.clear(),this.depthGroup.clear(),this.group.clear(),delete this.group.userData.navigationNode,this.textures.length=0,this.disposables.length=0,this.moons.length=0,this.rings.length=0,this.signalWaves&&(this.signalWaves.length=0),this.surface=null,this.surfaceMaterial=null,this.clouds=null,this.atmosphere=null,this.atmosphereMaterial=null}};function dy(s){return Math.atan2(Math.sin(s),Math.cos(s))}var Ml=class{constructor({scene:t,camera:e,stage:n,nodeLayer:i,items:r,orbits:a,settings:o,reducedMotion:l,lowPower:c,onExplore:h,onSelect:u}){this.scene=t,this.camera=e,this.stage=n,this.nodeLayer=i,this.items=r,this.orbits=a,this.settings=o,this.reducedMotion=l,this.lowPower=c,this.onExplore=h,this.onSelect=u,this.system=new ze,this.nodes=[],this.domButtons=[],this.isDragging=!1,this.dragMoved=!1,this.hoverCount=0,this.pointerHoveredIndex=-1,this.focusedIndex=-1,this.pressedNodeIndex=-1,this.resumeAt=0,this.activeIndex=-1,this.pointerStartX=0,this.rotationStart=0,this.parallaxTarget=new kt,this.pointerNdc=new kt,this.raycaster=new Br,this.earthOcclusionRadius=o.earthRadius,this.scene.add(this.system),this.createOrbits(),this.createNodes(),this.bindEvents()}createOrbits(){this.orbits.forEach(t=>{let e=[],n=new Qe(t.tiltX,0,t.tiltZ);for(let o=0;o<=180;o+=1){let l=o/180*Math.PI*2;e.push(new N(Math.cos(l)*t.radiusX,0,Math.sin(l)*t.radiusZ).applyEuler(n))}let i=new Ie().setFromPoints(e),r=new Os({color:t.color,transparent:!0,opacity:.085,blending:_n,depthTest:!0,depthWrite:!1}),a=new Ar(i,r);this.system.add(a),this.nodes.push({orbitLine:a,disposables:[i,r]})}),this.nodes=[]}createNodes(){this.items.forEach((t,e)=>{let n=this.orbits[t.orbit],i=new Qe(n.tiltX,0,n.tiltZ),r=new N(Math.cos(t.phase)*n.radiusX,0,Math.sin(t.phase)*n.radiusZ).applyEuler(i),a=new yl(t,this.lowPower);a.group.position.copy(r),this.system.add(a.group);let o=document.createElement("button");o.type="button",o.className="space-node",o.setAttribute("aria-label",t.label),o.setAttribute("aria-pressed","false"),o.style.setProperty("--node-color",t.color),o.innerHTML=`
        <span class="space-node__core" aria-hidden="true"><i class="${t.iconClass}"></i></span>
        <span class="space-node__label">${t.label}</span>
      `,this.nodeLayer.appendChild(o),a.surface.userData.navigationIndex=e;let l=()=>{this.focusedIndex=e,this.syncHoverState()},c=()=>{this.focusedIndex===e&&(this.focusedIndex=-1),this.syncHoverState(),this.resumeAt=performance.now()+this.settings.resumeDelay},h=()=>{this.dragMoved||(this.activeIndex===e?this.onExplore(t):this.focus(e))},u=d=>{d.key==="ArrowRight"||d.key==="ArrowDown"?(d.preventDefault(),this.focus(this.getAdjacentFocusableIndex(e,1),!0)):(d.key==="ArrowLeft"||d.key==="ArrowUp")&&(d.preventDefault(),this.focus(this.getAdjacentFocusableIndex(e,-1),!0))};o.addEventListener("focus",l),o.addEventListener("blur",c),o.addEventListener("click",h),o.addEventListener("keydown",u),this.nodes.push({node:a,button:o,item:t,position:r,orbit:n,orbitEuler:i,angle:t.phase,angularSpeed:.016*(t.orbitSpeed||1),listeners:{focus:l,blur:c,click:h,keydown:u},occluded:!1,mobileHidden:!1}),this.domButtons.push(o)})}isInterfaceTarget(t){return!!t?.closest?.(".space-info")}pickNodeIndex(t){if(this.isInterfaceTarget(t.target))return-1;let e=this.stage.getBoundingClientRect();if(e.width<=0||e.height<=0||t.clientX<e.left||t.clientX>e.right||t.clientY<e.top||t.clientY>e.bottom)return-1;this.pointerNdc.set((t.clientX-e.left)/e.width*2-1,-((t.clientY-e.top)/e.height)*2+1),this.camera.updateMatrixWorld(),this.system.updateMatrixWorld(!0),this.raycaster.setFromCamera(this.pointerNdc,this.camera);let i=this.raycaster.intersectObjects(this.nodes.map(r=>r.node.surface),!1).find(r=>{let a=r.object.userData.navigationIndex,o=this.nodes[a];return o&&!o.mobileHidden&&!this.isOccludedByEarth(r.point)});return i?i.object.userData.navigationIndex:-1}syncHoverState(){let t=!1;this.nodes.forEach((e,n)=>{let i=n===this.pointerHoveredIndex||n===this.focusedIndex;e.node.setHovered(i),e.button.classList.toggle("is-hovered",i),t||(t=i)}),this.hoverCount=t?1:0,this.stage.classList.toggle("has-node-hover",this.pointerHoveredIndex>=0)}setPointerHoveredIndex(t){this.pointerHoveredIndex!==t&&(this.pointerHoveredIndex=t,this.syncHoverState())}activateIndex(t){let e=this.nodes[t];e&&(this.activeIndex===t?this.onExplore(e.item):this.focus(t))}getAdjacentFocusableIndex(t,e){for(let n=1;n<=this.nodes.length;n+=1){let i=(t+e*n+this.nodes.length)%this.nodes.length,r=this.nodes[i];if(r&&!r.occluded&&!r.mobileHidden)return i}return t}bindEvents(){this.handlePointerDown=e=>{e.button!==void 0&&e.button!==0||this.isInterfaceTarget(e.target)||(this.isDragging=!0,this.dragMoved=!1,this.pressedNodeIndex=this.pickNodeIndex(e),this.setPointerHoveredIndex(this.pressedNodeIndex),this.pointerStartX=e.clientX,this.rotationStart=this.system.rotation.y,this.stage.classList.add("is-dragging"),Je.killTweensOf(this.system.rotation),this.stage.setPointerCapture&&this.stage.setPointerCapture(e.pointerId))},this.handlePointerMove=e=>{let n=this.stage.getBoundingClientRect();if(this.reducedMotion||this.parallaxTarget.set(((e.clientX-n.left)/n.width-.5)*.42,-((e.clientY-n.top)/n.height-.5)*.24),!this.isDragging){this.setPointerHoveredIndex(this.pickNodeIndex(e));return}let i=e.clientX-this.pointerStartX;Math.abs(i)>5&&(this.dragMoved=!0,this.setPointerHoveredIndex(-1)),this.system.rotation.y=this.rotationStart+i*this.settings.dragSensitivity};let t=(e,n)=>{if(!this.isDragging)return;let i=n&&!this.dragMoved?this.pickNodeIndex(e):-1,r=i===this.pressedNodeIndex?i:-1;this.isDragging=!1,this.stage.classList.remove("is-dragging"),this.resumeAt=performance.now()+this.settings.resumeDelay,this.stage.releasePointerCapture&&this.stage.hasPointerCapture(e.pointerId)&&this.stage.releasePointerCapture(e.pointerId),this.pressedNodeIndex=-1,this.setPointerHoveredIndex(i),r>=0&&this.activateIndex(r),window.setTimeout(()=>{this.dragMoved=!1},0)};this.handlePointerUp=e=>t(e,!0),this.handlePointerCancel=e=>t(e,!1),this.handlePointerLeave=()=>{this.isDragging||this.setPointerHoveredIndex(-1)},this.handleStageKeydown=e=>{e.key==="Escape"&&this.activeIndex>=0&&this.clearSelection()},this.stage.addEventListener("pointerdown",this.handlePointerDown),this.stage.addEventListener("pointermove",this.handlePointerMove),this.stage.addEventListener("pointerup",this.handlePointerUp),this.stage.addEventListener("pointercancel",this.handlePointerCancel),this.stage.addEventListener("pointerleave",this.handlePointerLeave),this.stage.addEventListener("keydown",this.handleStageKeydown)}focus(t,e=!1){let n=this.nodes[t];if(!n)return;this.nodes.forEach((o,l)=>{let c=l===t;o.node.setActive(c),o.button.classList.toggle("is-active",c),o.button.setAttribute("aria-pressed",c?"true":"false")}),this.activeIndex=t;let i=Math.atan2(n.position.x,n.position.z),r=dy(-i-this.system.rotation.y),a=this.system.rotation.y+r;this.resumeAt=Number.POSITIVE_INFINITY,this.reducedMotion?(this.system.rotation.y=a,this.camera.position.z=this.settings.cameraFocusZ):(Je.to(this.system.rotation,{y:a,duration:this.settings.focusDuration,ease:"expo.inOut",overwrite:!0}),Je.to(this.camera.position,{z:this.settings.cameraFocusZ,duration:this.settings.focusDuration,ease:"power3.inOut",overwrite:!0})),this.onSelect(n.item),e&&n.button.focus({preventScroll:!0})}clearSelection(){this.nodes.forEach(t=>{t.node.setActive(!1),t.button.classList.remove("is-active"),t.button.setAttribute("aria-pressed","false")}),this.activeIndex=-1,this.resumeAt=performance.now()+this.settings.resumeDelay,this.onSelect(null),Je.to(this.camera.position,{z:this.settings.cameraZ,duration:this.reducedMotion?0:.7,ease:"power3.out",overwrite:!0})}update(t,e,n){!this.reducedMotion&&!this.isDragging&&this.hoverCount===0&&this.activeIndex<0&&e>=this.resumeAt&&(this.system.rotation.y+=t*this.settings.autoRotateSpeed,this.nodes.forEach(o=>{o.angle+=t*o.angularSpeed,o.position.set(Math.cos(o.angle)*o.orbit.radiusX,0,Math.sin(o.angle)*o.orbit.radiusZ).applyEuler(o.orbitEuler),o.node.group.position.copy(o.position)})),this.camera.position.x+=(this.parallaxTarget.x-this.camera.position.x)*Math.min(1,t*2.5),this.camera.position.y+=(this.parallaxTarget.y-this.camera.position.y)*Math.min(1,t*2.5),this.camera.lookAt(0,0,0);let r=new N,a=new N;this.nodes.forEach((o,l)=>{o.node.group.getWorldPosition(a);let c=Ei.clamp((a.z+5.2)/10.4,0,1);o.node.update(t,c,this.reducedMotion),r.copy(a).project(this.camera);let h=(r.x*.5+.5)*n.width,u=(-r.y*.5+.5)*n.height,d=(.9+c*.1)*(n.mobile?.92:1),p=.56+c*.44,_=this.isOccludedByEarth(a),g=n.mobile&&c<.3&&l!==this.activeIndex;o.occluded=_,o.mobileHidden=g,o.button.style.setProperty("--screen-x",`${h}px`),o.button.style.setProperty("--screen-y",`${u}px`),o.button.style.setProperty("--depth-scale",d.toFixed(3)),o.button.style.setProperty("--depth-opacity",p.toFixed(3)),o.button.style.zIndex=String(20+Math.round(c*50)),o.button.classList.toggle("is-occluded",_),o.button.classList.toggle("is-behind",c<.42),o.button.classList.toggle("is-mobile-hidden",g)})}setScale(t){this.system.scale.setScalar(t)}setEarthOcclusionRadius(t){this.earthOcclusionRadius=t}isOccludedByEarth(t){let e=t.clone().sub(this.camera.position),n=e.length();if(n<=0)return!1;let i=e.multiplyScalar(1/n),r=-this.camera.position.dot(i);return r<=0||r>=n?!1:this.camera.position.clone().addScaledVector(i,r).lengthSq()<this.earthOcclusionRadius*this.earthOcclusionRadius}destroy(){Je.killTweensOf(this.system.rotation),Je.killTweensOf(this.camera.position),this.stage.removeEventListener("pointerdown",this.handlePointerDown),this.stage.removeEventListener("pointermove",this.handlePointerMove),this.stage.removeEventListener("pointerup",this.handlePointerUp),this.stage.removeEventListener("pointercancel",this.handlePointerCancel),this.stage.removeEventListener("pointerleave",this.handlePointerLeave),this.stage.removeEventListener("keydown",this.handleStageKeydown),this.stage.classList.remove("has-node-hover","is-dragging"),this.nodes.forEach(t=>{let{button:e,listeners:n,node:i}=t;e.removeEventListener("focus",n.focus),e.removeEventListener("blur",n.blur),e.removeEventListener("click",n.click),e.removeEventListener("keydown",n.keydown),e.remove(),i.dispose()}),this.system.traverse(t=>{t.isLine&&(t.geometry.dispose(),t.material.dispose())}),this.scene.remove(this.system),this.system.clear()}};var Sl=class{constructor(t,e){this.onExplore=e,this.element=document.createElement("aside"),this.element.className="space-info",this.element.setAttribute("aria-hidden","true"),this.element.inert=!0,this.element.innerHTML=`
      <div class="space-info__eyebrow">\u0110ang ch\u1ECDn</div>
      <div class="space-info__heading">
        <span class="space-info__icon" aria-hidden="true"><i></i></span>
        <h2 class="space-info__title"></h2>
      </div>
      <p class="space-info__description"></p>
      <button class="space-info__explore" type="button">
        <span>Kh\xE1m ph\xE1</span>
        <i class="fas fa-arrow-right" aria-hidden="true"></i>
      </button>
    `,t.appendChild(this.element),this.icon=this.element.querySelector(".space-info__icon i"),this.title=this.element.querySelector(".space-info__title"),this.description=this.element.querySelector(".space-info__description"),this.exploreButton=this.element.querySelector(".space-info__explore"),this.handleExplore=()=>this.item&&this.onExplore(this.item),this.exploreButton.addEventListener("click",this.handleExplore)}show(t){this.item=t,this.element.style.setProperty("--active-color",t.color),this.icon.className=t.iconClass,this.title.textContent=t.label,this.description.textContent=t.description,this.exploreButton.setAttribute("aria-label",`Kh\xE1m ph\xE1 ${t.label}`),this.element.classList.add("is-open"),this.element.setAttribute("aria-hidden","false"),this.element.inert=!1}hide(){this.item=null,this.element.classList.remove("is-open"),this.element.setAttribute("aria-hidden","true"),this.element.inert=!0}destroy(){this.exploreButton.removeEventListener("click",this.handleExplore),this.element.remove()}};function fy(){try{let s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}function qf({count:s,spread:t,depthStart:e,depthRange:n,size:i,opacity:r,color:a,seed:o}){let l=new Float32Array(s*3),c=o,h=()=>(c=c*16807%2147483647,(c-1)/2147483646);for(let _=0;_<s;_+=1)l[_*3]=(h()-.5)*t,l[_*3+1]=(h()-.5)*t*.6,l[_*3+2]=e-h()*n;let u=new Ie;u.setAttribute("position",new Xe(l,3));let d=new Bs({color:a,size:i,transparent:!0,opacity:r,sizeAttenuation:!0,depthTest:!0,depthWrite:!1,toneMapped:!1}),p=new Cr(u,d);return p.renderOrder=-20,{points:p,geometry:u,material:d}}var bl=class{constructor({root:t,items:e,orbits:n,settings:i}){if(!t||!fy())throw new Error("WebGL is not available");this.root=t,this.stage=t.querySelector("[data-space-stage]"),this.nodeLayer=t.querySelector("[data-space-nodes]"),this.homeView=t.closest(".spa-view"),this.settings=i,this.assetBase="./images/space",this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.reducedMotion=this.reducedMotionQuery.matches,this.lowPower=!!(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4||navigator.deviceMemory&&navigator.deviceMemory<=4),this.running=!1,this.frameId=0,this.lastFrame=performance.now(),this.backgroundTexture=null,this.scene=new wr,this.camera=new Be(40,1,.1,90),this.camera.position.set(0,0,i.cameraZ),this.renderer=new jo({antialias:!this.lowPower,alpha:!1,powerPreference:this.lowPower?"low-power":"high-performance"}),this.renderer.setClearColor(66053,1),this.renderer.outputColorSpace=Se,this.renderer.toneMapping=uo,this.renderer.toneMappingExposure=.92,this.renderer.domElement.className="space-navigation__canvas",this.renderer.domElement.setAttribute("aria-hidden","true"),this.stage.prepend(this.renderer.domElement);let r=new Or(7570331,.065);this.sunDirection=new N(-5,3.2,7).normalize();let a=new Fr(16774367,3.05);a.position.copy(this.sunDirection).multiplyScalar(10),a.target.position.set(0,0,0),this.scene.add(r,a,a.target),this.createDeepSpaceBackground(),this.starLayers=[qf({count:this.lowPower?120:340,spread:42,depthStart:-7,depthRange:14,size:.035,opacity:.42,color:15265268,seed:9471}),qf({count:this.lowPower?190:620,spread:62,depthStart:-18,depthRange:35,size:.075,opacity:.24,color:12042703,seed:1201})],this.starLayers.forEach(o=>this.scene.add(o.points)),this.earth=new nl({radius:i.earthRadius,assetBase:this.assetBase,sunDirection:this.sunDirection,anisotropy:Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),lowPower:this.lowPower,onCriticalError:()=>this.activateFallback("earth-textures")}),this.scene.add(this.earth.group),this.infoPanel=new Sl(this.stage,o=>this.explore(o)),this.navigation=new Ml({scene:this.scene,camera:this.camera,stage:this.stage,nodeLayer:this.nodeLayer,items:e,orbits:n,settings:i,reducedMotion:this.reducedMotion,lowPower:this.lowPower,onExplore:o=>this.explore(o),onSelect:o=>o?this.infoPanel.show(o):this.infoPanel.hide()}),this.handleResize=()=>this.resize(),this.handleMotionChange=o=>{this.reducedMotion=o.matches,this.navigation.reducedMotion=o.matches,o.matches&&(this.navigation.resumeAt=Number.POSITIVE_INFINITY)},this.handleVisibility=()=>this.syncRunningState(),this.handleBeforeUnload=()=>this.destroy({preserveLayout:!0}),this.resizeObserver=new ResizeObserver(this.handleResize),this.resizeObserver.observe(this.stage),this.viewObserver=new MutationObserver(this.handleVisibility),this.homeView&&this.viewObserver.observe(this.homeView,{attributes:!0,attributeFilter:["class"]}),this.reducedMotionQuery.addEventListener("change",this.handleMotionChange),document.addEventListener("visibilitychange",this.handleVisibility),window.addEventListener("beforeunload",this.handleBeforeUnload,{once:!0}),this.root.classList.add("is-webgl-ready"),this.resize(),document.body.classList.add("space-navigation-ready"),this.syncRunningState()}createDeepSpaceBackground(){let t=new je(48,this.lowPower?36:64,this.lowPower?24:40),e=new zn({color:2764081,side:ve,depthTest:!1,depthWrite:!1,fog:!1});this.backgroundSphere=new Qt(t,e),this.backgroundSphere.rotation.y=Math.PI*.64,this.backgroundSphere.renderOrder=-100,this.backgroundGeometry=t,this.backgroundMaterial=e,this.scene.add(this.backgroundSphere),new Zi().load(`${this.assetBase}/milky_way.webp`,i=>{if(this.destroyed){i.dispose();return}i.colorSpace=Se,i.wrapS=Fn,e.map=i,e.color.set(8488331),e.needsUpdate=!0,this.backgroundTexture=i},void 0,()=>this.activateFallback("deep-space-texture"))}activateFallback(t){this.assetFailed||this.destroyed||(this.assetFailed=t,this.running=!1,cancelAnimationFrame(this.frameId),this.root.classList.remove("is-webgl-ready"),this.root.classList.add("is-unavailable"),document.body.classList.remove("space-navigation-ready"))}explore(t){window.dispatchEvent(new window.CustomEvent("timebox:navigate",{detail:{id:t.id}}))}resize(){let t=this.stage.getBoundingClientRect(),e=Math.max(1,t.width),n=Math.max(1,t.height),i=e<640,r=e>=640&&e<980;this.viewport={width:e,height:n,mobile:i,tablet:r},this.camera.aspect=e/n,this.camera.fov=i?45:r?43:40,this.camera.updateProjectionMatrix();let a=this.lowPower||i?1.35:1.8;this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,a)),this.renderer.setSize(e,n,!1);let o=Math.tan(Ei.degToRad(this.camera.fov*.5))*this.settings.cameraZ*this.camera.aspect,l=Ei.clamp(o/7.75,.4,1),c=i?Math.min(.67,l+.22):r?Math.min(.84,l+.16):1;this.earth.group.scale.setScalar(c),this.navigation.setScale(l),this.navigation.setEarthOcclusionRadius(this.settings.earthRadius*c*1.015)}syncRunningState(){let t=!this.homeView||!this.homeView.classList.contains("is-hidden"),e=!this.assetFailed&&!document.hidden&&t;document.body.classList.toggle("space-nav-home-visible",t),e&&!this.running?(this.running=!0,this.lastFrame=performance.now(),this.frameId=requestAnimationFrame(n=>this.render(n))):!e&&this.running&&(this.running=!1,cancelAnimationFrame(this.frameId))}render(t){if(!this.running)return;let e=Math.min(.05,Math.max(0,(t-this.lastFrame)/1e3));this.lastFrame=t,this.earth.update(e,this.reducedMotion),this.navigation.update(e,t,this.viewport),this.starLayers[0].points.position.set(-this.camera.position.x*.12,-this.camera.position.y*.12,0),this.starLayers[1].points.position.set(-this.camera.position.x*.035,-this.camera.position.y*.035,0),this.backgroundSphere.position.set(this.camera.position.x*.012,this.camera.position.y*.012,0),this.renderer.render(this.scene,this.camera),this.frameId=requestAnimationFrame(n=>this.render(n))}destroy({preserveLayout:t=!1}={}){this.destroyed||(this.destroyed=!0,this.running=!1,cancelAnimationFrame(this.frameId),this.resizeObserver.disconnect(),this.viewObserver.disconnect(),this.reducedMotionQuery.removeEventListener("change",this.handleMotionChange),document.removeEventListener("visibilitychange",this.handleVisibility),window.removeEventListener("beforeunload",this.handleBeforeUnload),this.navigation.destroy(),this.infoPanel.destroy(),this.earth.dispose(),this.starLayers.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.backgroundTexture&&this.backgroundTexture.dispose(),this.backgroundGeometry.dispose(),this.backgroundMaterial.dispose(),this.scene.clear(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),document.body.classList.remove("space-navigation-ready"),t||document.body.classList.remove("space-nav-home-visible"))}};function Yf(){let s=document.querySelector("[data-space-navigation]");if(s)try{window.__timeboxSpaceNavigation=new bl({root:s,items:Gh,orbits:Wh,settings:Xh})}catch(t){s.classList.add("is-unavailable");let e=s.querySelector(".space-navigation__hint");e&&(e.textContent="Kh\xF4ng th\u1EC3 kh\u1EDFi t\u1EA1o kh\xF4ng gian 3D tr\xEAn thi\u1EBFt b\u1ECB n\xE0y."),console.warn("[Timebox] WebGL navigation unavailable:",t)}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Yf,{once:!0}):Yf();})();
//# sourceMappingURL=space-navigation.bundle.js.map
