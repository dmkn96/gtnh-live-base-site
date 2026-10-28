var Kn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},jn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Al=0,Zo=1,wl=2;var Jo=1,Il=2,mn=3,Cn=0,Dt=1,gn=2,Dn=0,di=1,$o=2,Ko=3,jo=4,Rl=5,qn=100,Cl=101,Pl=102,Ll=103,Dl=104,Nl=200,Ul=201,Ol=202,Fl=203,Nr=204,Ur=205,Bl=206,zl=207,Vl=208,kl=209,Hl=210,Gl=211,Wl=212,Xl=213,Yl=214,aa=0,oa=1,ca=2,fi=3,la=4,ha=5,ua=6,da=7,Qo=0,ql=1,Zl=2,Nn=0,Jl=1,$l=2,Kl=3,fa=4,jl=5,Ql=6,eh=7;var ec=300,vi=301,yi=302,pa=303,ma=304,Zs=306,Or=1e3,Yn=1001,Fr=1002,At=1003,th=1004;var Mi=1005;var sn=1006,ga=1007;var Qn=1008;var cn=1009,tc=1010,nc=1011,as=1012,_a=1013,ei=1014,ln=1015,os=1016,xa=1017,va=1018,cs=1020,ic=35902,sc=35899,rc=1021,ac=1022,Kt=1023,Zi=1026,ls=1027,ya=1028,Ma=1029,oc=1030,ba=1031;var Sa=1033,Js=33776,$s=33777,Ks=33778,js=33779,Ea=35840,Ta=35841,Aa=35842,wa=35843,Ia=36196,Ra=37492,Ca=37496,Pa=37808,La=37809,Da=37810,Na=37811,Ua=37812,Oa=37813,Fa=37814,Ba=37815,za=37816,Va=37817,ka=37818,Ha=37819,Ga=37820,Wa=37821,Xa=36492,Ya=36494,qa=36495,Za=36283,Ja=36284,$a=36285,Ka=36286;var Ts=2300,Br=2301,Lr=2302,zo=2400,Vo=2401,ko=2402;var nh=3200,ih=3201;var cc=0,sh=1,Un="",yt="srgb",pi="srgb-linear",As="linear",Je="srgb";var hi=7680;var Ho=519,rh=512,ah=513,oh=514,lc=515,ch=516,lh=517,hh=518,uh=519,Go=35044;var hc="300 es",nn=2e3,ws=2001;var fn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jc=1234567,Yi=Math.PI/180,Ji=180/Math.PI;function hs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function uc(i,e){return(i%e+e)%e}function yu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Mu(i,e,t){return i!==e?(t-i)/(e-i):0}function Es(i,e,t){return(1-t)*i+t*e}function bu(i,e,t,n){return Es(i,e,1-Math.exp(-t*n))}function Su(i,e=1){return e-Math.abs(uc(i,e*2)-e)}function Eu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Au(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wu(i,e){return i+Math.random()*(e-i)}function Iu(i){return i*(.5-Math.random())}function Ru(i){i!==void 0&&(jc=i);let e=jc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cu(i){return i*Yi}function Pu(i){return i*Ji}function Lu(i){return(i&i-1)===0&&i!==0}function Du(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Uu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var dc={DEG2RAD:Yi,RAD2DEG:Ji,generateUUID:hs,clamp:ze,euclideanModulo:uc,mapLinear:yu,inverseLerp:Mu,lerp:Es,damp:bu,pingpong:Su,smoothstep:Eu,smootherstep:Tu,randInt:Au,randFloat:wu,randFloatSpread:Iu,seededRandom:Ru,degToRad:Cu,radToDeg:Pu,isPowerOfTwo:Lu,ceilPowerOfTwo:Du,floorPowerOfTwo:Nu,setQuaternionFromProperEuler:Uu,normalize:Ct,denormalize:Xi},Ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*x,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){let R=Math.sqrt(E),w=Math.atan2(R,d*A);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}let S=o*A;if(l=l*m+f*S,c=c*m+p*S,h=h*m+g*S,u=u*m+x*S,m===1-o){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*f,e[t+1]=l*g+h*f+c*u-o*p,e[t+2]=c*g+h*p+o*f-l*u,e[t+3]=h*g-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new L,Qc=new wt,Ne=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],x=s[0],m=s[3],d=s[6],A=s[1],E=s[4],S=s[7],R=s[2],w=s[5],C=s[8];return r[0]=a*x+o*A+l*R,r[3]=a*m+o*E+l*w,r[6]=a*d+o*S+l*C,r[1]=c*x+h*A+u*R,r[4]=c*m+h*E+u*w,r[7]=c*d+h*S+u*C,r[2]=f*x+p*A+g*R,r[5]=f*m+p*E+g*w,r[8]=f*d+p*S+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=t*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(go.makeScale(e,t)),this}rotate(e){return this.premultiply(go.makeRotation(-e)),this}translate(e,t){return this.premultiply(go.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},go=new Ne;function fc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function $i(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dh(){let i=$i("canvas");return i.style.display="block",i}var el={};function Ki(i){i in el||(el[i]=!0,console.warn(i))}function fh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var tl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ou(){let i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=qi(s.r),s.g=qi(s.g),s.b=qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?As:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ki("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:e,whitePoint:n,transfer:As,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}var Ge=Ou();function Rn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Pi,zr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Pi===void 0&&(Pi=$i("canvas")),Pi.width=e.width,Pi.height=e.height;let s=Pi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Pi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=$i("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Rn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Rn(t[n]/255)*255):t[n]=Rn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Fu=0,ji=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=hs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(_o(s[a].image)):r.push(_o(s[a]))}else r=_o(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function _o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Bu=0,xo=new L,Lt=class i extends fn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=sn,a=Qn,o=Kt,l=cn,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bu++}),this.uuid=hs(),this.name="",this.source=new ji(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ce(0,0),this.repeat=new Ce(1,1),this.center=new Ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xo).x}get height(){return this.source.getSize(xo).y}get depth(){return this.source.getSize(xo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ec)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=ec;Lt.DEFAULT_ANISOTROPY=1;var ht=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(p+1)/2,R=(d+1)/2,w=(h+f)/4,C=(u+x)/4,O=(g+m)/4;return E>S&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=C/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=O/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=O/r),this.set(n,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-x)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Vr=class extends fn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Lt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ji(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Vr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Is=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var kr=class extends Lt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=At,this.minFilter=At,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qt):Qt.fromBufferAttribute(r,a),Qt.applyMatrix4(e.matrixWorld),this.expandByPoint(Qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(e.matrixWorld),this.union(cr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qt),Qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_s),lr.subVectors(this.max,_s),Li.subVectors(e.a,_s),Di.subVectors(e.b,_s),Ni.subVectors(e.c,_s),Vn.subVectors(Di,Li),kn.subVectors(Ni,Di),ai.subVectors(Li,Ni);let t=[0,-Vn.z,Vn.y,0,-kn.z,kn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,kn.z,0,-kn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-kn.y,kn.x,0,-ai.y,ai.x,0];return!vo(t,Li,Di,Ni,lr)||(t=[1,0,0,0,1,0,0,0,1],!vo(t,Li,Di,Ni,lr))?!1:(hr.crossVectors(Vn,kn),t=[hr.x,hr.y,hr.z],vo(t,Li,Di,Ni,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Sn=[new L,new L,new L,new L,new L,new L,new L,new L],Qt=new L,cr=new $t,Li=new L,Di=new L,Ni=new L,Vn=new L,kn=new L,ai=new L,_s=new L,lr=new L,hr=new L,oi=new L;function vo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);let o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var zu=new $t,xs=new L,yo=new L,Pn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):zu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);let t=xs.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(xs,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(yo)),this.expandByPoint(xs.copy(e.center).sub(yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},En=new L,Mo=new L,ur=new L,Hn=new L,bo=new L,dr=new L,So=new L,Zn=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Mo.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(Mo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(ur),o=Hn.dot(this.direction),l=-Hn.dot(ur),c=Hn.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Mo).addScaledVector(ur,f),p}intersectSphere(e,t){En.subVectors(e.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){bo.subVectors(t,e),dr.subVectors(n,e),So.crossVectors(bo,dr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);let l=o*this.direction.dot(dr.crossVectors(Hn,dr));if(l<0)return null;let c=o*this.direction.dot(bo.cross(Hn));if(c<0||l+c>a)return null;let h=-o*Hn.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,g,x,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ui.setFromMatrixColumn(e,0).length(),r=1/Ui.setFromMatrixColumn(e,1).length(),a=1/Ui.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,p=l*u,g=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=f-x*u}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vu,e,ku)}lookAt(e,t,n){let s=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Gn.crossVectors(n,Ht),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Gn.crossVectors(n,Ht)),Gn.normalize(),fr.crossVectors(Ht,Gn),s[0]=Gn.x,s[4]=fr.x,s[8]=Ht.x,s[1]=Gn.y,s[5]=fr.y,s[9]=Ht.y,s[2]=Gn.z,s[6]=fr.z,s[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],x=n[6],m=n[10],d=n[14],A=n[3],E=n[7],S=n[11],R=n[15],w=s[0],C=s[4],O=s[8],M=s[12],y=s[1],P=s[5],z=s[9],H=s[13],Y=s[2],J=s[6],X=s[10],ne=s[14],V=s[3],ae=s[7],he=s[11],Se=s[15];return r[0]=a*w+o*y+l*Y+c*V,r[4]=a*C+o*P+l*J+c*ae,r[8]=a*O+o*z+l*X+c*he,r[12]=a*M+o*H+l*ne+c*Se,r[1]=h*w+u*y+f*Y+p*V,r[5]=h*C+u*P+f*J+p*ae,r[9]=h*O+u*z+f*X+p*he,r[13]=h*M+u*H+f*ne+p*Se,r[2]=g*w+x*y+m*Y+d*V,r[6]=g*C+x*P+m*J+d*ae,r[10]=g*O+x*z+m*X+d*he,r[14]=g*M+x*H+m*ne+d*Se,r[3]=A*w+E*y+S*Y+R*V,r[7]=A*C+E*P+S*J+R*ae,r[11]=A*O+E*z+S*X+R*he,r[15]=A*M+E*H+S*ne+R*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+x*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-t*l*u+t*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],A=u*m*c-x*f*c+x*l*p-o*m*p-u*l*d+o*f*d,E=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,S=h*x*c-g*u*c+g*o*p-a*x*p-h*o*d+a*u*d,R=g*u*l-h*x*l-g*o*f+a*x*f+h*o*m-a*u*m,w=t*A+n*E+s*S+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/w;return e[0]=A*C,e[1]=(x*f*r-u*m*r-x*s*p+n*m*p+u*s*d-n*f*d)*C,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*d+n*l*d)*C,e[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*C,e[4]=E*C,e[5]=(h*m*r-g*f*r+g*s*p-t*m*p-h*s*d+t*f*d)*C,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*C,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*p+t*l*p)*C,e[8]=S*C,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*d-t*u*d)*C,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*d+t*o*d)*C,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*C,e[12]=R*C,e[13]=(h*x*s-g*u*s+g*n*f-t*x*f-h*n*m+t*u*m)*C,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*f+t*o*f)*C,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,x=a*h,m=a*u,d=o*u,A=l*c,E=l*h,S=l*u,R=n.x,w=n.y,C=n.z;return s[0]=(1-(x+d))*R,s[1]=(p+S)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(f+d))*w,s[6]=(m+A)*w,s[7]=0,s[8]=(g+E)*C,s[9]=(m-A)*C,s[10]=(1-(f+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ui.set(s[0],s[1],s[2]).length(),a=Ui.set(s[4],s[5],s[6]).length(),o=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],en.copy(this);let c=1/r,h=1/a,u=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===nn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ws)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=nn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===nn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ws)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ui=new L,en=new Ke,Vu=new L(0,0,0),ku=new L(1,1,1),Gn=new L,fr=new L,Ht=new L,il=new Ke,sl=new wt,rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return il.makeRotationFromQuaternion(e),this.setFromRotationMatrix(il,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rn.DEFAULT_ORDER="XYZ";var Qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hu=0,rl=new L,Oi=new wt,Tn=new Ke,pr=new L,vs=new L,Gu=new L,Wu=new wt,al=new L(1,0,0),ol=new L(0,1,0),cl=new L(0,0,1),ll={type:"added"},Xu={type:"removed"},Fi={type:"childadded",child:null},Eo={type:"childremoved",child:null},Mt=class i extends fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new rn,n=new wt,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ne}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(e,t){return Oi.setFromAxisAngle(e,t),this.quaternion.premultiply(Oi),this}rotateX(e){return this.rotateOnAxis(al,e)}rotateY(e){return this.rotateOnAxis(ol,e)}rotateZ(e){return this.rotateOnAxis(cl,e)}translateOnAxis(e,t){return rl.copy(e).applyQuaternion(this.quaternion),this.position.add(rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(al,e)}translateY(e){return this.translateOnAxis(ol,e)}translateZ(e){return this.translateOnAxis(cl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pr.copy(e):pr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(vs,pr,this.up):Tn.lookAt(pr,vs,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Tn),this.quaternion.premultiply(Oi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xu),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ll),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Wu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=new L,An=new L,To=new L,wn=new L,Bi=new L,zi=new L,hl=new L,Ao=new L,wo=new L,Io=new L,Ro=new ht,Co=new ht,Po=new ht,In=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),An.subVectors(n,t),To.subVectors(e,t);let a=tn.dot(tn),o=tn.dot(An),l=tn.dot(To),c=An.dot(An),h=An.dot(To),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(a,wn.y),l.addScaledVector(o,wn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,t),Co.fromBufferAttribute(e,n),Po.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ro,r.x),a.addScaledVector(Co,r.y),a.addScaledVector(Po,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),An.subVectors(e,t),tn.cross(An).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),tn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Bi.subVectors(s,n),zi.subVectors(r,n),Ao.subVectors(e,n);let l=Bi.dot(Ao),c=zi.dot(Ao);if(l<=0&&c<=0)return t.copy(n);wo.subVectors(e,s);let h=Bi.dot(wo),u=zi.dot(wo);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Bi,a);Io.subVectors(e,r);let p=Bi.dot(Io),g=zi.dot(Io);if(g>=0&&p<=g)return t.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(zi,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return hl.subVectors(r,s),o=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(hl,o);let d=1/(m+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Bi,a).addScaledVector(zi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function Lo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=uc(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Lo(a,r,e+1/3),this.g=Lo(a,r,e),this.b=Lo(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){let n=ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rn(e.r),this.g=Rn(e.g),this.b=Rn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Ge.workingToColorSpace(Et.copy(this),e),Math.round(ze(Et.r*255,0,255))*65536+Math.round(ze(Et.g*255,0,255))*256+Math.round(ze(Et.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Et.copy(this),t);let n=Et.r,s=Et.g,r=Et.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=yt){Ge.workingToColorSpace(Et.copy(this),e);let t=Et.r,n=Et.g,s=Et.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Wn),this.setHSL(Wn.h+e,Wn.s+t,Wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wn),e.getHSL(mr);let n=Es(Wn.h,mr.h,t),s=Es(Wn.s,mr.s,t),r=Es(Wn.l,mr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Et=new Fe;Fe.NAMES=ph;var Yu=0,Ln=class extends fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=hs(),this.name="",this.type="Material",this.blending=di,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nr,this.blendDst=Ur,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ho&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Rs=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var ft=new L,gr=new Ce,qu=0,Ot=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Go,this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix3(e),this.setXY(t,gr.x,gr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Go&&(e.usage=this.usage),e}};var Cs=class extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ps=class extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Pt=class extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}},Zu=0,Zt=new Ke,Do=new Mt,Vi=new L,Gt=new $t,ys=new $t,xt=new L,an=class i extends fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fc(e)?Ps:Cs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vi).negate(),this.translate(Vi.x,Vi.y,Vi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Gt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Gt.min,ys.min),Gt.expandByPoint(xt),xt.addVectors(Gt.max,ys.max),Gt.expandByPoint(xt)):(Gt.expandByPoint(ys.min),Gt.expandByPoint(ys.max))}Gt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xt.fromBufferAttribute(o,c),l&&(Vi.fromBufferAttribute(e,c),xt.add(Vi)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<n.count;O++)o[O]=new L,l[O]=new L;let c=new L,h=new L,u=new L,f=new Ce,p=new Ce,g=new Ce,x=new L,m=new L;function d(O,M,y){c.fromBufferAttribute(n,O),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),f.fromBufferAttribute(r,O),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[O].add(x),o[M].add(x),o[y].add(x),l[O].add(m),l[M].add(m),l[y].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let O=0,M=A.length;O<M;++O){let y=A[O],P=y.start,z=y.count;for(let H=P,Y=P+z;H<Y;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}let E=new L,S=new L,R=new L,w=new L;function C(O){R.fromBufferAttribute(s,O),w.copy(R);let M=o[O];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(w,M);let P=S.dot(l[O])<0?-1:1;a.setXYZW(O,E.x,E.y,E.z,P)}for(let O=0,M=A.length;O<M;++O){let y=A[O],P=y.start,z=y.count;for(let H=P,Y=P+z;H<Y;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ul=new Ke,ci=new Zn,_r=new Pn,dl=new L,xr=new L,vr=new L,yr=new L,No=new L,Mr=new L,fl=new L,br=new L,Ft=class extends Mt{constructor(e=new an,t=new Rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(No.fromBufferAttribute(u,e),a?Mr.addScaledVector(No,h):Mr.addScaledVector(No.sub(t),h))}t.add(Mr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(r),ci.copy(e.ray).recast(e.near),!(_r.containsPoint(ci.origin)===!1&&(ci.intersectSphere(_r,dl)===null||ci.origin.distanceToSquared(dl)>(e.far-e.near)**2))&&(ul.copy(r).invert(),ci.copy(e.ray).applyMatrix4(ul),!(n.boundingBox!==null&&ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=E;S<R;S+=3){let w=o.getX(S),C=o.getX(S+1),O=o.getX(S+2);s=Sr(this,d,e,n,c,h,u,w,C,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let A=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=Sr(this,a,e,n,c,h,u,A,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let m=f[g],d=a[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=A,R=E;S<R;S+=3){let w=S,C=S+1,O=S+2;s=Sr(this,d,e,n,c,h,u,w,C,O),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){let A=m,E=m+1,S=m+2;s=Sr(this,a,e,n,c,h,u,A,E,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Ju(i,e,t,n,s,r,a,o){let l;if(e.side===Dt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Cn,o),l===null)return null;br.copy(o),br.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(br);return c<t.near||c>t.far?null:{distance:c,point:br.clone(),object:i}}function Sr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,xr),i.getVertexPosition(l,vr),i.getVertexPosition(c,yr);let h=Ju(i,e,t,n,xr,vr,yr,fl);if(h){let u=new L;In.getBarycoord(fl,xr,vr,yr,u),s&&(h.uv=In.getInterpolatedAttribute(s,o,l,c,u,new Ce)),r&&(h.uv1=In.getInterpolatedAttribute(r,o,l,c,u,new Ce)),a&&(h.normal=In.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};In.getNormal(xr,vr,yr,f.normal),h.face=f,h.barycoord=u}return h}var Wt=class i extends an{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(u,2));function g(x,m,d,A,E,S,R,w,C,O,M){let y=S/C,P=R/O,z=S/2,H=R/2,Y=w/2,J=C+1,X=O+1,ne=0,V=0,ae=new L;for(let he=0;he<X;he++){let Se=he*P-H;for(let Ve=0;Ve<J;Ve++){let tt=Ve*y-z;ae[x]=tt*A,ae[m]=Se*E,ae[d]=Y,c.push(ae.x,ae.y,ae.z),ae[x]=0,ae[m]=0,ae[d]=w>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Ve/C),u.push(1-he/O),ne+=1}}for(let he=0;he<O;he++)for(let Se=0;Se<C;Se++){let Ve=f+Se+J*he,tt=f+Se+J*(he+1),rt=f+(Se+1)+J*(he+1),Xe=f+(Se+1)+J*he;l.push(Ve,tt,Xe),l.push(tt,rt,Xe),V+=6}o.addGroup(p,V,M),p+=V,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function bi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function It(i){let e={};for(let t=0;t<i.length;t++){let n=bi(i[t]);for(let s in n)e[s]=n[s]}return e}function $u(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var mh={clone:bi,merge:It},Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,on=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bi(e.uniforms),this.uniformsGroups=$u(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ls=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new L,pl=new Ce,ml=new Ce,Tt=class extends Ls{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ji*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ji*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,pl,ml),t.subVectors(ml,pl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ki=-90,Hi=1,Hr=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Tt(ki,Hi,e,t);s.layers=this.layers,this.add(s);let r=new Tt(ki,Hi,e,t);r.layers=this.layers,this.add(r);let a=new Tt(ki,Hi,e,t);a.layers=this.layers,this.add(a);let o=new Tt(ki,Hi,e,t);o.layers=this.layers,this.add(o);let l=new Tt(ki,Hi,e,t);l.layers=this.layers,this.add(l);let c=new Tt(ki,Hi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ds=class extends Lt{constructor(e=[],t=vi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gr=class extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ds(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wt(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:bi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:Dn});r.uniforms.tEquirect.value=t;let a=new Ft(s,r),o=t.minFilter;return t.minFilter===Qn&&(t.minFilter=sn),new Hr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ui=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ui;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ns=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Wr=class extends Lt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=At,h=At,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Us=class extends Ot{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gi=new Ke,gl=new Ke,Er=[],_l=new $t,ed=new Ke,Ms=new Ft,bs=new Pn,Os=class extends Ft{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Us(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ed)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $t),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),_l.copy(e.boundingBox).applyMatrix4(Gi),this.boundingBox.union(_l)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gi),bs.copy(e.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(bs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bs.copy(this.boundingSphere),bs.applyMatrix4(n),e.ray.intersectsSphere(bs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),gl.multiplyMatrices(n,Gi),Ms.matrixWorld=gl,Ms.raycast(e,Er);for(let a=0,o=Er.length;a<o;a++){let l=Er[a];l.instanceId=r,l.object=this,t.push(l)}Er.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Us(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Wr(new Float32Array(s*this.count),s,this.count,ya,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Uo=new L,td=new L,nd=new Ne,Jt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Uo.subVectors(n,t).cross(td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Uo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nd.getNormalMatrix(e),s=this.coplanarPoint(Uo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},li=new Pn,id=new Ce(.5,.5),Tr=new L,ts=class{constructor(e=new Jt,t=new Jt,n=new Jt,s=new Jt,r=new Jt,a=new Jt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],g=r[8],x=r[9],m=r[10],d=r[11],A=r[12],E=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-a,p-h,d-g,R-A).normalize(),s[1].setComponents(c+a,p+h,d+g,R+A).normalize(),s[2].setComponents(c+o,p+u,d+x,R+E).normalize(),s[3].setComponents(c-o,p-u,d-x,R-E).normalize(),n)s[4].setComponents(l,f,m,S).normalize(),s[5].setComponents(c-l,p-f,d-m,R-S).normalize();else if(s[4].setComponents(c-l,p-f,d-m,R-S).normalize(),t===nn)s[5].setComponents(c+l,p+f,d+m,R+S).normalize();else if(t===ws)s[5].setComponents(l,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(e){li.center.set(0,0,0);let t=id.distanceTo(e.center);return li.radius=.7071067811865476+t,li.applyMatrix4(e.matrixWorld),this.intersectsSphere(li)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Tr.x=s.normal.x>0?e.max.x:e.min.x,Tr.y=s.normal.y>0?e.max.y:e.min.y,Tr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var mi=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Xr=new L,Yr=new L,xl=new Ke,Ss=new Zn,Ar=new Pn,Oo=new L,vl=new L,qr=class extends Mt{constructor(e=new an,t=new mi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Xr.fromBufferAttribute(t,s-1),Yr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Xr.distanceTo(Yr);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;xl.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(xl);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let d=h.getX(x),A=h.getX(x+1),E=wr(this,e,Ss,l,d,A,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),d=wr(this,e,Ss,l,x,m,g-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){let d=wr(this,e,Ss,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){let x=wr(this,e,Ss,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wr(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Xr.fromBufferAttribute(o,s),Yr.fromBufferAttribute(o,r),t.distanceSqToSegment(Xr,Yr,Oo,vl)>n)return;Oo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oo);if(!(c<e.near||c>e.far))return{distance:c,point:vl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var yl=new L,Ml=new L,ns=class extends qr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)yl.fromBufferAttribute(t,s),Ml.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+yl.distanceTo(Ml);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fs=class extends Lt{constructor(e,t,n=ei,s,r,a,o=At,l=At,c,h=Zi,u=1){if(h!==Zi&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ji(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Bs=class extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ir=new L,Rr=new L,Fo=new L,Cr=new In,zs=class extends an{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Yi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:x,b:m,c:d}=Cr;if(x.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),Cr.getNormal(Fo),u[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let A=0;A<3;A++){let E=(A+1)%3,S=u[A],R=u[E],w=Cr[h[A]],C=Cr[h[E]],O=`${S}_${R}`,M=`${R}_${S}`;M in f&&f[M]?(Fo.dot(f[M].normal)<=r&&(p.push(w.x,w.y,w.z),p.push(C.x,C.y,C.z)),f[M]=null):O in f||(f[O]={index0:c[A],index1:c[E],normal:Fo.clone()})}}for(let g in f)if(f[g]){let{index0:x,index1:m}=f[g];Ir.fromBufferAttribute(o,x),Rr.fromBufferAttribute(o,m),p.push(Ir.x,Ir.y,Ir.z),p.push(Rr.x,Rr.y,Rr.z)}this.setAttribute("position",new Pt(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};var gi=class i extends an{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let d=0;d<h;d++){let A=d*f-a;for(let E=0;E<c;E++){let S=E*u-r;g.push(S,-A,0),x.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<o;A++){let E=A+c*d,S=A+c*(d+1),R=A+1+c*(d+1),w=A+1+c*d;p.push(E,S,w),p.push(S,R,w)}this.setIndex(p),this.setAttribute("position",new Pt(g,3)),this.setAttribute("normal",new Pt(x,3)),this.setAttribute("uv",new Pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var _i=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new Ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Zr=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jr=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Pr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},$r=class extends xi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zo,endingEnd:zo}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vo:r=e,o=2*t-n;break;case ko:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vo:a=e,l=2*n-t;break;case ko:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,d=-f*m+2*f*x-f*g,A=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,E=(-1-p)*m+(1.5+p)*x+.5*g,S=p*m-p*x;for(let R=0;R!==o;++R)r[R]=d*a[h+R]+A*a[c+R]+E*a[l+R]+S*a[u+R];return r}},Kr=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},jr=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Xt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new jr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $r(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ts:t=this.InterpolantFactoryMethodDiscrete;break;case Br:t=this.InterpolantFactoryMethodLinear;break;case Lr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ts;case this.InterpolantFactoryMethodLinear:return Br;case this.InterpolantFactoryMethodSmooth:return Lr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&sd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Lr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,f=u-n,p=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[f+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Xt.prototype.ValueTypeName="";Xt.prototype.TimeBufferType=Float32Array;Xt.prototype.ValueBufferType=Float32Array;Xt.prototype.DefaultInterpolation=Br;var Jn=class extends Xt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="bool";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=Ts;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="color";var ea=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};ea.prototype.ValueTypeName="number";var ta=class extends xi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)wt.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ta(this.times,this.values,this.getValueSize(),e)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var $n=class extends Xt{constructor(e,t,n){super(e,t,n)}};$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=Ts;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;var na=class extends Xt{constructor(e,t,n,s){super(e,t,n,s)}};na.prototype.ValueTypeName="vector";var Dr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ia=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},gh=new ia,is=class{constructor(e){this.manager=e!==void 0?e:gh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};is.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wi=new WeakMap,sa=class extends is{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Dr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Wi.get(a);u===void 0&&(u=[],Wi.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=$i("img");function l(){h(),t&&t(this);let u=Wi.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onLoad&&p.onLoad(this)}Wi.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Dr.remove(`image:${e}`);let f=Wi.get(this)||[];for(let p=0;p<f.length;p++){let g=f[p];g.onError&&g.onError(u)}Wi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Dr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ks=class extends is{constructor(e){super(e)}load(e,t,n,s){let r=new Lt,a=new sa(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hs=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gs=class extends Hs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bo=new Ke,bl=new L,Sl=new L,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ce(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new Ce(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(bl),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ws=class extends Ls{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xo=class extends Wo{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ss=class extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Xo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var ra=class extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var mc="\\[\\]\\.:\\/",rd=new RegExp("["+mc+"]","g"),gc="[^"+mc+"]",ad="[^"+mc.replace("\\.","")+"]",od=/((?:WC+[\/:])*)/.source.replace("WC",gc),cd=/(WCOD+)?/.source.replace("WCOD",ad),ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",gc),hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",gc),ud=new RegExp("^"+od+cd+ld+hd+"$"),dd=["material","materials","bones","map"],Yo=class{constructor(e,t,n){let s=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},st=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rd,"")}static parseTrackName(e){let t=ud.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);dd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};st.Composite=Yo;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var x_=new Float32Array(1);var El=new Ke,Xs=class{constructor(e,t,n=0,s=1/0){this.ray=new Zn(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return El.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(El),this}intersectObject(e,t=!0,n=[]){return qo(e,this,n,t),n.sort(Tl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qo(e[s],this,n,t);return n.sort(Tl),n}};function Tl(i,e){return i.distance-e.distance}function qo(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qo(r[a],e,t,!0)}}var rs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ze(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ze(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ys=class extends ns{constructor(e=10,t=10,n=4473924,s=8947848){n=new Fe(n),s=new Fe(s);let r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=t;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);let x=f===r?n:s;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}let h=new an;h.setAttribute("position",new Pt(l,3)),h.setAttribute("color",new Pt(c,3));let u=new mi({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}};var qs=class extends fn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function _c(i,e,t,n){let s=fd(n);switch(t){case rc:return i*e;case ya:return i*e/s.components*s.byteLength;case Ma:return i*e/s.components*s.byteLength;case oc:return i*e*2/s.components*s.byteLength;case ba:return i*e*2/s.components*s.byteLength;case ac:return i*e*3/s.components*s.byteLength;case Kt:return i*e*4/s.components*s.byteLength;case Sa:return i*e*4/s.components*s.byteLength;case Js:case $s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ks:case js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:case wa:return Math.max(i,16)*Math.max(e,8)/4;case Ea:case Aa:return Math.max(i,8)*Math.max(e,8)/2;case Ia:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Na:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ba:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Va:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xa:case Ya:case qa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Za:case Ja:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case Ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fd(i){switch(i){case cn:case tc:return{byteLength:1,components:1};case as:case nc:case os:return{byteLength:2,components:1};case xa:case va:return{byteLength:2,components:4};case ei:case _a:case ln:return{byteLength:4,components:1};case ic:case sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Vh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function md(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){let g=u[f],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var gd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_d=`#ifdef USE_ALPHAHASH
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
#endif`,xd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bd=`#ifdef USE_AOMAP
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
#endif`,Sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ed=`#ifdef USE_BATCHING
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
#endif`,Td=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Id=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Rd=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zd=`#define PI 3.141592653589793
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
} // validated`,Vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,Hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",qd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,rf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cf=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,_f=`#if defined( RE_IndirectDiffuse )
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
#endif`,xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ef=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Af=`#if defined( USE_POINTS_UV )
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
#endif`,wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,If=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zf=`#ifdef USE_NORMALMAP
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
#endif`,Vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rp=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,op=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_p=`uniform sampler2D t2D;
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
}`,xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,Sp=`#if DEPTH_PACKING == 3200
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
}`,Ep=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Np=`#define MATCAP
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
}`,Up=`#define MATCAP
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
}`,Op=`#define NORMAL
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
}`,Fp=`#define NORMAL
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
}`,Bp=`#define PHONG
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
}`,zp=`#define PHONG
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
}`,Vp=`#define STANDARD
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
}`,kp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Gp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,Zp=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:gd,alphahash_pars_fragment:_d,alphamap_fragment:xd,alphamap_pars_fragment:vd,alphatest_fragment:yd,alphatest_pars_fragment:Md,aomap_fragment:bd,aomap_pars_fragment:Sd,batching_pars_vertex:Ed,batching_vertex:Td,begin_vertex:Ad,beginnormal_vertex:wd,bsdfs:Id,iridescence_fragment:Rd,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Pd,clipping_planes_pars_fragment:Ld,clipping_planes_pars_vertex:Dd,clipping_planes_vertex:Nd,color_fragment:Ud,color_pars_fragment:Od,color_pars_vertex:Fd,color_vertex:Bd,common:zd,cube_uv_reflection_fragment:Vd,defaultnormal_vertex:kd,displacementmap_pars_vertex:Hd,displacementmap_vertex:Gd,emissivemap_fragment:Wd,emissivemap_pars_fragment:Xd,colorspace_fragment:Yd,colorspace_pars_fragment:qd,envmap_fragment:Zd,envmap_common_pars_fragment:Jd,envmap_pars_fragment:$d,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:lf,envmap_vertex:jd,fog_vertex:Qd,fog_pars_vertex:ef,fog_fragment:tf,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:rf,lights_lambert_fragment:af,lights_lambert_pars_fragment:of,lights_pars_begin:cf,lights_toon_fragment:hf,lights_toon_pars_fragment:uf,lights_phong_fragment:df,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:_f,lights_fragment_end:xf,logdepthbuf_fragment:vf,logdepthbuf_pars_fragment:yf,logdepthbuf_pars_vertex:Mf,logdepthbuf_vertex:bf,map_fragment:Sf,map_pars_fragment:Ef,map_particle_fragment:Tf,map_particle_pars_fragment:Af,metalnessmap_fragment:wf,metalnessmap_pars_fragment:If,morphinstance_vertex:Rf,morphcolor_vertex:Cf,morphnormal_vertex:Pf,morphtarget_pars_vertex:Lf,morphtarget_vertex:Df,normal_fragment_begin:Nf,normal_fragment_maps:Uf,normal_pars_fragment:Of,normal_pars_vertex:Ff,normal_vertex:Bf,normalmap_pars_fragment:zf,clearcoat_normal_fragment_begin:Vf,clearcoat_normal_fragment_maps:kf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Gf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:Yf,project_vertex:qf,dithering_fragment:Zf,dithering_pars_fragment:Jf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:jf,shadowmap_pars_vertex:Qf,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:np,skinning_pars_vertex:ip,skinning_vertex:sp,skinnormal_vertex:rp,specularmap_fragment:ap,specularmap_pars_fragment:op,tonemapping_fragment:cp,tonemapping_pars_fragment:lp,transmission_fragment:hp,transmission_pars_fragment:up,uv_pars_fragment:dp,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:_p,backgroundCube_vert:xp,backgroundCube_frag:vp,cube_vert:yp,cube_frag:Mp,depth_vert:bp,depth_frag:Sp,distanceRGBA_vert:Ep,distanceRGBA_frag:Tp,equirect_vert:Ap,equirect_frag:wp,linedashed_vert:Ip,linedashed_frag:Rp,meshbasic_vert:Cp,meshbasic_frag:Pp,meshlambert_vert:Lp,meshlambert_frag:Dp,meshmatcap_vert:Np,meshmatcap_frag:Up,meshnormal_vert:Op,meshnormal_frag:Fp,meshphong_vert:Bp,meshphong_frag:zp,meshphysical_vert:Vp,meshphysical_frag:kp,meshtoon_vert:Hp,meshtoon_frag:Gp,points_vert:Wp,points_frag:Xp,shadow_vert:Yp,shadow_frag:qp,sprite_vert:Zp,sprite_frag:Jp},re={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},_n={basic:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:It([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:It([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:It([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:It([re.points,re.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:It([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:It([re.common,re.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:It([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:It([re.sprite,re.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:It([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:It([re.lights,re.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};_n.physical={uniforms:It([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var ja={r:0,b:0,g:0},Si=new rn,$p=new Ke;function Kp(i,e,t,n,s,r,a){let o=new Fe(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1,R=g(E);R===null?d(o,l):R&&R.isColor&&(d(R,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let R=g(S);R&&(R.isCubeTexture||R.mapping===Zs)?(h===void 0&&(h=new Ft(new Wt(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:bi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,C,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Si.copy(S.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(Si)),h.material.toneMapped=Ge.getTransfer(R.colorSpace)!==Je,(u!==R||f!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Ft(new gi(2,2),new on({name:"BackgroundMaterial",uniforms:bi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(R.colorSpace)!==Je,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||f!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,f=R.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(ja,pc(i)),n.buffers.color.setClear(ja.r,ja.g,ja.b,S,a)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,S=1){o.set(E),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(o,l)},render:x,addToRenderList:m,dispose:A}}function jp(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(y,P,z,H,Y){let J=!1,X=u(H,z,P);r!==X&&(r=X,c(r.object)),J=p(y,H,z,Y),J&&g(y,H,z,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(y,P,z,H),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,P,z){let H=z.wireframe===!0,Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let J=Y[P.id];J===void 0&&(J={},Y[P.id]=J);let X=J[H];return X===void 0&&(X=f(l()),J[H]=X),X}function f(y){let P=[],z=[],H=[];for(let Y=0;Y<t;Y++)P[Y]=0,z[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,P,z,H){let Y=r.attributes,J=P.attributes,X=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let he=Y[V],Se=J[V];if(Se===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor)),he===void 0||he.attribute!==Se||Se&&he.data!==Se.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function g(y,P,z,H){let Y={},J=P.attributes,X=0,ne=z.getAttributes();for(let V in ne)if(ne[V].location>=0){let he=J[V];he===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(he=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(he=y.instanceColor));let Se={};Se.attribute=he,he&&he.data&&(Se.data=he.data),Y[V]=Se,X++}r.attributes=Y,r.attributesNum=X,r.index=H}function x(){let y=r.newAttributes;for(let P=0,z=y.length;P<z;P++)y[P]=0}function m(y){d(y,0)}function d(y,P){let z=r.newAttributes,H=r.enabledAttributes,Y=r.attributeDivisors;z[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),Y[y]!==P&&(i.vertexAttribDivisor(y,P),Y[y]=P)}function A(){let y=r.newAttributes,P=r.enabledAttributes;for(let z=0,H=P.length;z<H;z++)P[z]!==y[z]&&(i.disableVertexAttribArray(z),P[z]=0)}function E(y,P,z,H,Y,J,X){X===!0?i.vertexAttribIPointer(y,P,z,Y,J):i.vertexAttribPointer(y,P,z,H,Y,J)}function S(y,P,z,H){x();let Y=H.attributes,J=z.getAttributes(),X=P.defaultAttributeValues;for(let ne in J){let V=J[ne];if(V.location>=0){let ae=Y[ne];if(ae===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),ae!==void 0){let he=ae.normalized,Se=ae.itemSize,Ve=e.get(ae);if(Ve===void 0)continue;let tt=Ve.buffer,rt=Ve.type,Xe=Ve.bytesPerElement,q=rt===i.INT||rt===i.UNSIGNED_INT||ae.gpuType===_a;if(ae.isInterleavedBufferAttribute){let K=ae.data,fe=K.stride,Pe=ae.offset;if(K.isInstancedInterleavedBuffer){for(let be=0;be<V.locationSize;be++)d(V.location+be,K.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let be=0;be<V.locationSize;be++)m(V.location+be);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let be=0;be<V.locationSize;be++)E(V.location+be,Se/V.locationSize,rt,he,fe*Xe,(Pe+Se/V.locationSize*be)*Xe,q)}else{if(ae.isInstancedBufferAttribute){for(let K=0;K<V.locationSize;K++)d(V.location+K,ae.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let K=0;K<V.locationSize;K++)m(V.location+K);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let K=0;K<V.locationSize;K++)E(V.location+K,Se/V.locationSize,rt,he,Se*Xe,Se/V.locationSize*K*Xe,q)}}else if(X!==void 0){let he=X[ne];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(V.location,he);break;case 3:i.vertexAttrib3fv(V.location,he);break;case 4:i.vertexAttrib4fv(V.location,he);break;default:i.vertexAttrib1fv(V.location,he)}}}}A()}function R(){O();for(let y in n){let P=n[y];for(let z in P){let H=P[z];for(let Y in H)h(H[Y].object),delete H[Y];delete P[z]}delete n[y]}}function w(y){if(n[y.id]===void 0)return;let P=n[y.id];for(let z in P){let H=P[z];for(let Y in H)h(H[Y].object),delete H[Y];delete P[z]}delete n[y.id]}function C(y){for(let P in n){let z=n[P];if(z[y.id]===void 0)continue;let H=z[y.id];for(let Y in H)h(H[Y].object),delete H[Y];delete z[y.id]}}function O(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Qp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,f){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function em(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Kt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let O=C===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==cn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ln&&!O)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:w}}function tm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Jt,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let A=r?0:n,E=A*4,S=d.clippingState||null;l.value=S,S=h(g,f,E,p);for(let R=0;R!==E;++R)S[R]=t[R];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let d=p+x*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==x;++E,S+=4)a.copy(u[E]).applyMatrix4(A,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nm(i){let e=new WeakMap;function t(a,o){return o===pa?a.mapping=vi:o===ma&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pa||o===ma)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gr(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ds=4,_h=[.125,.215,.35,.446,.526,.582],Ai=20,xc=new Ws,xh=new Fe,vc=null,yc=0,Mc=0,bc=!1,Ti=(1+Math.sqrt(5))/2,us=1/Ti,vh=[new L(-Ti,us,0),new L(Ti,us,0),new L(-us,0,Ti),new L(us,0,Ti),new L(0,Ti,-us),new L(0,Ti,us),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],im=new L,to=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=im}=r;vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vc,yc,Mc),this._renderer.xr.enabled=bc,e.scissorTest=!1,Qa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:os,format:Kt,colorSpace:pi,depthBuffer:!1},s=yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sm(r)),this._blurMaterial=rm(r,e,t)}return s}_compileMaterial(e){let t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,xc)}_sceneToCubeUV(e,t,n,s,r){let l=new Tt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(xh),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new Rs({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),m=new Ft(new Wt,x),d=!1,A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,d=!0):(x.color.copy(xh),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let R=this._cubeSize;Qa(s,S*R,E>2?R:0,R,R),u.setRenderTarget(s),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=f,e.background=A}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===vi||e.mapping===yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ft(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Qa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,xc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vh[(s-r-1)%vh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ft(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let d=[],A=0;for(let C=0;C<Ai;++C){let O=C/x,M=Math.exp(-O*O/2);d.push(M),C===0?A+=M:C<m&&(A+=2*M)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:E}=this;f.dTheta.value=g,f.mipInt.value=E-n;let S=this._sizeLods[s],R=3*S*(s>E-ds?s-E+ds:0),w=4*(this._cubeSize-S);Qa(t,R,w,3*S,2*S),l.setRenderTarget(t),l.render(u,xc)}};function sm(i){let e=[],t=[],n=[],s=i,r=i-ds+1+_h.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-ds?l=_h[a-i+ds-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,d=1,A=new Float32Array(x*g*p),E=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){let C=w%3*2/3-1,O=w>2?0:-1,M=[C,O,0,C+2/3,O,0,C+2/3,O+1,0,C,O,0,C+2/3,O+1,0,C,O+1,0];A.set(M,x*g*w),E.set(f,m*g*w);let y=[w,w,w,w,w,w];S.set(y,d*g*w)}let R=new an;R.setAttribute("position",new Ot(A,x)),R.setAttribute("uv",new Ot(E,m)),R.setAttribute("faceIndex",new Ot(S,d)),e.push(R),s>ds&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function yh(i,e,t){let n=new pn(i,e,t);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function rm(i,e,t){let n=new Float32Array(Ai),s=new L(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Mh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function bh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function am(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===pa||l===ma,h=l===vi||l===yi;if(c||h){let u=e.get(o),f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new to(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new to(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function om(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function cm(i,e,t,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){let f=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let A=p.array;x=p.version;for(let E=0,S=A.length;E<S;E+=3){let R=A[E+0],w=A[E+1],C=A[E+2];f.push(R,w,w,C,C,R)}}else if(g!==void 0){let A=g.array;x=g.version;for(let E=0,S=A.length/3-1;E<S;E+=3){let R=E+0,w=E+1,C=E+2;f.push(R,w,w,C,C,R)}}else return;let m=new(fc(f)?Ps:Cs)(f,1);m.version=x;let d=r.get(u);d&&e.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function lm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function u(f,p,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,x,0,g);let d=0;for(let A=0;A<g;A++)d+=p[A]*x[A];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function hm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function um(i,e,t){let n=new WeakMap,s=new ht;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],A=o.morphAttributes.color||[],E=0;p===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*R*4*u),C=new Is(w,S,R,u);C.type=ln,C.needsUpdate=!0;let O=E*4;for(let y=0;y<u;y++){let P=m[y],z=d[y],H=A[y],Y=S*R*4*y;for(let J=0;J<P.count;J++){let X=J*O;p===!0&&(s.fromBufferAttribute(P,J),w[Y+X+0]=s.x,w[Y+X+1]=s.y,w[Y+X+2]=s.z,w[Y+X+3]=0),g===!0&&(s.fromBufferAttribute(z,J),w[Y+X+4]=s.x,w[Y+X+5]=s.y,w[Y+X+6]=s.z,w[Y+X+7]=0),x===!0&&(s.fromBufferAttribute(H,J),w[Y+X+8]=s.x,w[Y+X+9]=s.y,w[Y+X+10]=s.z,w[Y+X+11]=H.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Ce(S,R)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function dm(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var kh=new Lt,Sh=new Fs(1,1),Hh=new Is,Gh=new kr,Wh=new Ds,Eh=[],Th=[],Ah=new Float32Array(16),wh=new Float32Array(9),Ih=new Float32Array(4);function ps(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Eh[s];if(r===void 0&&(r=new Float32Array(s),Eh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function io(i,e){let t=Th[e];t===void 0&&(t=new Int32Array(e),Th[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function _m(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ih.set(n),i.uniformMatrix2fv(this.addr,!1,Ih),mt(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;wh.set(n),i.uniformMatrix3fv(this.addr,!1,wh),mt(t,n)}}function vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ah.set(n),i.uniformMatrix4fv(this.addr,!1,Ah),mt(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function Sm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function Em(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Im(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=lc,r=Sh):r=kh,t.setTexture2D(e||r,s)}function Rm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Gh,s)}function Cm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wh,s)}function Pm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hh,s)}function Lm(i){switch(i){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return xm;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return bm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Im;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Cm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(i,e){i.uniform1fv(this.addr,e)}function Nm(i,e){let t=ps(e,this.size,2);i.uniform2fv(this.addr,t)}function Um(i,e){let t=ps(e,this.size,3);i.uniform3fv(this.addr,t)}function Om(i,e){let t=ps(e,this.size,4);i.uniform4fv(this.addr,t)}function Fm(i,e){let t=ps(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bm(i,e){let t=ps(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zm(i,e){let t=ps(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vm(i,e){i.uniform1iv(this.addr,e)}function km(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Gm(i,e){i.uniform4iv(this.addr,e)}function Wm(i,e){i.uniform1uiv(this.addr,e)}function Xm(i,e){i.uniform2uiv(this.addr,e)}function Ym(i,e){i.uniform3uiv(this.addr,e)}function qm(i,e){i.uniform4uiv(this.addr,e)}function Zm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||kh,r[a])}function Jm(i,e,t){let n=this.cache,s=e.length,r=io(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Gh,r[a])}function $m(i,e,t){let n=this.cache,s=e.length,r=io(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Wh,r[a])}function Km(i,e,t){let n=this.cache,s=e.length,r=io(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Hh,r[a])}function jm(i){switch(i){case 5126:return Dm;case 35664:return Nm;case 35665:return Um;case 35666:return Om;case 35674:return Fm;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Vm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Gm;case 5125:return Wm;case 36294:return Xm;case 36295:return Ym;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return $m;case 36289:case 36303:case 36311:case 36292:return Km}}var Ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}},Tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jm(t.type)}},Ac=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Sc=/(\w+)(\])?(\[|\.)?/g;function Rh(i,e){i.seq.push(e),i.map[e.id]=e}function Qm(i,e,t){let n=i.name,s=n.length;for(Sc.lastIndex=0;;){let r=Sc.exec(n),a=Sc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Rh(t,c===void 0?new Ec(o,i,e):new Tc(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Ac(o),Rh(t,u)),t=u}}}var fs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Qm(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var eg=37297,tg=0;function ng(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Ph=new Ne;function ig(i){Ge._getMatrix(Ph,Ge.workingColorSpace,i);let e=`mat3( ${Ph.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case As:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Lh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+ng(i.getShaderSource(e),o)}else return r}function sg(i,e){let t=ig(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rg(i,e){let t;switch(e){case Jl:t="Linear";break;case $l:t="Reinhard";break;case Kl:t="Cineon";break;case fa:t="ACESFilmic";break;case Ql:t="AgX";break;case eh:t="Neutral";break;case jl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var eo=new L;function ag(){Ge.getLuminanceCoefficients(eo);let i=eo.x.toFixed(4),e=eo.y.toFixed(4),t=eo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function cg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Dh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(i){return i.replace(hg,dg)}var ug=new Map;function dg(i,e){let t=Be[e];if(t===void 0){let n=ug.get(e);if(n!==void 0)t=Be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wc(t)}var fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uh(i){return i.replace(fg,pg)}function pg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function gg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case vi:case yi:e="ENVMAP_TYPE_CUBE";break;case Zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _g(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:e="ENVMAP_MODE_REFRACTION";break}return e}function xg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Zl:e="ENVMAP_BLENDING_ADD";break}return e}function vg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=mg(t),c=gg(t),h=_g(t),u=xg(t),f=vg(t),p=og(t),g=cg(r),x=s.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qs).join(`
`),d.length>0&&(d+=`
`)):(m=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),d=[Oh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Be.tonemapping_pars_fragment:"",t.toneMapping!==Nn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,sg("linearToOutputTexel",t.outputColorSpace),ag(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=wc(a),a=Dh(a,t),a=Nh(a,t),o=wc(o),o=Dh(o,t),o=Nh(o,t),a=Uh(a),o=Uh(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=A+m+a,S=A+d+o,R=Ch(s,s.VERTEX_SHADER,E),w=Ch(s,s.FRAGMENT_SHADER,S);s.attachShader(x,R),s.attachShader(x,w),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){let z=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(R)||"",Y=s.getShaderInfoLog(w)||"",J=z.trim(),X=H.trim(),ne=Y.trim(),V=!0,ae=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,R,w);else{let he=Lh(s,R,"vertex"),Se=Lh(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+J+`
`+he+`
`+Se)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(X===""||ne==="")&&(ae=!1);ae&&(P.diagnostics={runnable:V,programLog:J,vertexShader:{log:X,prefix:m},fragmentShader:{log:ne,prefix:d}})}s.deleteShader(R),s.deleteShader(w),O=new fs(s,x),M=lg(s,x)}let O;this.getUniforms=function(){return O===void 0&&C(this),O};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(x,eg)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=w,this}var Mg=0,Ic=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Rc(e),t.set(e,n)),n}},Rc=class{constructor(e){this.id=Mg++,this.code=e,this.usedTimes=0}};function bg(i,e,t,n,s,r,a){let o=new Qi,l=new Ic,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,P,z,H){let Y=z.fog,J=H.geometry,X=M.isMeshStandardMaterial?z.environment:null,ne=(M.isMeshStandardMaterial?t:e).get(M.envMap||X),V=ne&&ne.mapping===Zs?ne.image.height:null,ae=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let he=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Se=he!==void 0?he.length:0,Ve=0;J.morphAttributes.position!==void 0&&(Ve=1),J.morphAttributes.normal!==void 0&&(Ve=2),J.morphAttributes.color!==void 0&&(Ve=3);let tt,rt,Xe,q;if(ae){let Ye=_n[ae];tt=Ye.vertexShader,rt=Ye.fragmentShader}else tt=M.vertexShader,rt=M.fragmentShader,l.update(M),Xe=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);let K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Pe=H.isInstancedMesh===!0,be=H.isBatchedMesh===!0,He=!!M.map,bt=!!M.matcap,T=!!ne,at=!!M.aoMap,De=!!M.lightMap,Ie=!!M.bumpMap,ge=!!M.normalMap,ot=!!M.displacementMap,_e=!!M.emissiveMap,Oe=!!M.metalnessMap,_t=!!M.roughnessMap,dt=M.anisotropy>0,b=M.clearcoat>0,_=M.dispersion>0,U=M.iridescence>0,W=M.sheen>0,$=M.transmission>0,k=dt&&!!M.anisotropyMap,Me=b&&!!M.clearcoatMap,ie=b&&!!M.clearcoatNormalMap,xe=b&&!!M.clearcoatRoughnessMap,ve=U&&!!M.iridescenceMap,ee=U&&!!M.iridescenceThicknessMap,le=W&&!!M.sheenColorMap,we=W&&!!M.sheenRoughnessMap,ye=!!M.specularMap,oe=!!M.specularColorMap,Ue=!!M.specularIntensityMap,I=$&&!!M.transmissionMap,te=$&&!!M.thicknessMap,se=!!M.gradientMap,de=!!M.alphaMap,j=M.alphaTest>0,Z=!!M.alphaHash,me=!!M.extensions,Le=Nn;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=i.toneMapping);let nt={shaderID:ae,shaderType:M.type,shaderName:M.name,vertexShader:tt,fragmentShader:rt,defines:M.defines,customVertexShaderID:Xe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:be,batchingColor:be&&H._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&H.instanceColor!==null,instancingMorph:Pe&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pi,alphaToCoverage:!!M.alphaToCoverage,map:He,matcap:bt,envMap:T,envMapMode:T&&ne.mapping,envMapCubeUVHeight:V,aoMap:at,lightMap:De,bumpMap:Ie,normalMap:ge,displacementMap:f&&ot,emissiveMap:_e,normalMapObjectSpace:ge&&M.normalMapType===sh,normalMapTangentSpace:ge&&M.normalMapType===cc,metalnessMap:Oe,roughnessMap:_t,anisotropy:dt,anisotropyMap:k,clearcoat:b,clearcoatMap:Me,clearcoatNormalMap:ie,clearcoatRoughnessMap:xe,dispersion:_,iridescence:U,iridescenceMap:ve,iridescenceThicknessMap:ee,sheen:W,sheenColorMap:le,sheenRoughnessMap:we,specularMap:ye,specularColorMap:oe,specularIntensityMap:Ue,transmission:$,transmissionMap:I,thicknessMap:te,gradientMap:se,opaque:M.transparent===!1&&M.blending===di&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:j,alphaHash:Z,combine:M.combine,mapUv:He&&x(M.map.channel),aoMapUv:at&&x(M.aoMap.channel),lightMapUv:De&&x(M.lightMap.channel),bumpMapUv:Ie&&x(M.bumpMap.channel),normalMapUv:ge&&x(M.normalMap.channel),displacementMapUv:ot&&x(M.displacementMap.channel),emissiveMapUv:_e&&x(M.emissiveMap.channel),metalnessMapUv:Oe&&x(M.metalnessMap.channel),roughnessMapUv:_t&&x(M.roughnessMap.channel),anisotropyMapUv:k&&x(M.anisotropyMap.channel),clearcoatMapUv:Me&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:le&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&x(M.sheenRoughnessMap.channel),specularMapUv:ye&&x(M.specularMap.channel),specularColorMapUv:oe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ue&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:te&&x(M.thicknessMap.channel),alphaMapUv:de&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(ge||dt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(He||de),fog:!!Y,useFog:M.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:fe,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ve,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:He&&M.map.isVideoTexture===!0&&Ge.getTransfer(M.map.colorSpace)===Je,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(M.emissiveMap.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===gn,flipSided:M.side===Dt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:me&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&M.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)y.push(P),y.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(A(y,M),E(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function A(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function E(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){let y=g[M.type],P;if(y){let z=_n[y];P=mh.clone(z.uniforms)}else P=M.uniforms;return P}function R(M,y){let P;for(let z=0,H=h.length;z<H;z++){let Y=h[z];if(Y.cacheKey===y){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new yg(i,y,M,r),h.push(P)),P}function w(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:h,dispose:O}}function Sg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,f,p,g,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function o(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(u,f,p,g,x,m){let d=a(u,f,p,g,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(u,f){t.length>1&&t.sort(u||Eg),n.length>1&&n.sort(f||Fh),s.length>1&&s.sort(f||Fh)}function h(){for(let u=e,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Tg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Bh,i.set(n,[a])):s>=r.length?(a=new Bh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ag(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Fe};break;case"SpotLight":t={position:new L,direction:new L,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function wg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ig=0;function Rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i){let e=new Ag,t=wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Ke,a=new Ke;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,A=0,E=0,S=0,R=0,w=0,C=0;c.sort(Rg);for(let M=0,y=c.length;M<y;M++){let P=c[M],z=P.color,H=P.intensity,Y=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*H,u+=z.g*H,f+=z.b*H;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],H);C++}else if(P.isDirectionalLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,V=t.get(P);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=P.shadow.matrix,A++}n.directional[p]=X,p++}else if(P.isSpotLight){let X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(z).multiplyScalar(H),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;let ne=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,ne.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[x]=ne.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=J,S++}x++}else if(P.isRectAreaLight){let X=e.get(P);X.color.copy(z).multiplyScalar(H),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){let X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let ne=P.shadow,V=t.get(P);V.shadowIntensity=ne.intensity,V.shadowBias=ne.bias,V.shadowNormalBias=ne.normalBias,V.shadowRadius=ne.radius,V.shadowMapSize=ne.mapSize,V.shadowCameraNear=ne.camera.near,V.shadowCameraFar=ne.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(H),X.groundColor.copy(P.groundColor).multiplyScalar(H),n.hemi[d]=X,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==x||O.rectAreaLength!==m||O.hemiLength!==d||O.numDirectionalShadows!==A||O.numPointShadows!==E||O.numSpotShadows!==S||O.numSpotMaps!==R||O.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,O.directionalLength=p,O.pointLength=g,O.spotLength=x,O.rectAreaLength=m,O.hemiLength=d,O.numDirectionalShadows=A,O.numPointShadows=E,O.numSpotShadows=S,O.numSpotMaps=R,O.numLightProbes=C,n.version=Ig++)}function l(c,h){let u=0,f=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let d=0,A=c.length;d<A;d++){let E=c[d];if(E.isDirectionalLight){let S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){let S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function zh(i){let e=new Cg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new zh(i),e.set(s,[o])):r>=a.length?(o=new zh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
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
}`;function Ng(i,e,t){let n=new ts,s=new Ce,r=new Ce,a=new ht,o=new Zr({depthPacking:ih}),l=new Jr,c={},h=t.maxTextureSize,u={[Cn]:Dt,[Dt]:Cn,[gn]:gn},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ce},radius:{value:4}},vertexShader:Lg,fragmentShader:Dg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new an;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ft(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let d=this.type;this.render=function(w,C,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let M=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let H=d!==mn&&this.type===mn,Y=d===mn&&this.type!==mn;for(let J=0,X=w.length;J<X;J++){let ne=w[J],V=ne.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ae=V.getFrameExtents();if(s.multiply(ae),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ae.x),s.x=r.x*ae.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ae.y),s.y=r.y*ae.y,V.mapSize.y=r.y)),V.map===null||H===!0||Y===!0){let Se=this.type!==mn?{minFilter:At,magFilter:At}:{};V.map!==null&&V.map.dispose(),V.map=new pn(s.x,s.y,Se),V.map.texture.name=ne.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let he=V.getViewportCount();for(let Se=0;Se<he;Se++){let Ve=V.getViewport(Se);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),z.viewport(a),V.updateMatrices(ne,Se),n=V.getFrustum(),S(C,O,V.camera,ne,this.type)}V.isPointLightShadow!==!0&&this.type===mn&&A(V,O),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,P)};function A(w,C){let O=e.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new pn(s.x,s.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,O,f,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,O,p,x,null)}function E(w,C,O,M){let y=null,P=O.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)y=P;else if(y=O.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=y.uuid,H=C.uuid,Y=c[z];Y===void 0&&(Y={},c[z]=Y);let J=Y[H];J===void 0&&(J=y.clone(),Y[H]=J,C.addEventListener("dispose",R)),y=J}if(y.visible=C.visible,y.wireframe=C.wireframe,M===mn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let z=i.properties.get(y);z.light=O}return y}function S(w,C,O,M,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===mn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,w.matrixWorld);let H=e.update(w),Y=w.material;if(Array.isArray(Y)){let J=H.groups;for(let X=0,ne=J.length;X<ne;X++){let V=J[X],ae=Y[V.materialIndex];if(ae&&ae.visible){let he=E(w,ae,M,y);w.onBeforeShadow(i,w,C,O,H,he,V),i.renderBufferDirect(O,null,H,he,w,V),w.onAfterShadow(i,w,C,O,H,he,V)}}}else if(Y.visible){let J=E(w,Y,M,y);w.onBeforeShadow(i,w,C,O,H,J,null),i.renderBufferDirect(O,null,H,J,w,null),w.onAfterShadow(i,w,C,O,H,J,null)}}let z=w.children;for(let H=0,Y=z.length;H<Y;H++)S(z[H],C,O,M,y)}function R(w){w.target.removeEventListener("dispose",R);for(let O in c){let M=c[O],y=w.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var Ug={[aa]:oa,[ca]:ua,[la]:da,[fi]:ha,[oa]:aa,[ua]:ca,[da]:la,[ha]:fi};function Og(i,e){function t(){let I=!1,te=new ht,se=null,de=new ht(0,0,0,0);return{setMask:function(j){se!==j&&!I&&(i.colorMask(j,j,j,j),se=j)},setLocked:function(j){I=j},setClear:function(j,Z,me,Le,nt){nt===!0&&(j*=Le,Z*=Le,me*=Le),te.set(j,Z,me,Le),de.equals(te)===!1&&(i.clearColor(j,Z,me,Le),de.copy(te))},reset:function(){I=!1,se=null,de.set(-1,0,0,0)}}}function n(){let I=!1,te=!1,se=null,de=null,j=null;return{setReversed:function(Z){if(te!==Z){let me=e.get("EXT_clip_control");Z?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),te=Z;let Le=j;j=null,this.setClear(Le)}},getReversed:function(){return te},setTest:function(Z){Z?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Z){se!==Z&&!I&&(i.depthMask(Z),se=Z)},setFunc:function(Z){if(te&&(Z=Ug[Z]),de!==Z){switch(Z){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case fi:i.depthFunc(i.LEQUAL);break;case la:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Z}},setLocked:function(Z){I=Z},setClear:function(Z){j!==Z&&(te&&(Z=1-Z),i.clearDepth(Z),j=Z)},reset:function(){I=!1,se=null,de=null,j=null,te=!1}}}function s(){let I=!1,te=null,se=null,de=null,j=null,Z=null,me=null,Le=null,nt=null;return{setTest:function(Ye){I||(Ye?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(Ye){te!==Ye&&!I&&(i.stencilMask(Ye),te=Ye)},setFunc:function(Ye,bn,dn){(se!==Ye||de!==bn||j!==dn)&&(i.stencilFunc(Ye,bn,dn),se=Ye,de=bn,j=dn)},setOp:function(Ye,bn,dn){(Z!==Ye||me!==bn||Le!==dn)&&(i.stencilOp(Ye,bn,dn),Z=Ye,me=bn,Le=dn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){nt!==Ye&&(i.clearStencil(Ye),nt=Ye)},reset:function(){I=!1,te=null,se=null,de=null,j=null,Z=null,me=null,Le=null,nt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,E=null,S=null,R=null,w=null,C=new Fe(0,0,0),O=0,M=!1,y=null,P=null,z=null,H=null,Y=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ne=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=ne>=1):V.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=ne>=2);let ae=null,he={},Se=i.getParameter(i.SCISSOR_BOX),Ve=i.getParameter(i.VIEWPORT),tt=new ht().fromArray(Se),rt=new ht().fromArray(Ve);function Xe(I,te,se,de){let j=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<se;me++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(te+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return Z}let q={};q[i.TEXTURE_2D]=Xe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Xe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Xe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Xe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(fi),Ie(!1),ge(Zo),K(i.CULL_FACE),at(Dn);function K(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function fe(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Pe(I,te){return u[I]!==te?(i.bindFramebuffer(I,te),u[I]=te,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=te),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=te),!0):!1}function be(I,te){let se=p,de=!1;if(I){se=f.get(te),se===void 0&&(se=[],f.set(te,se));let j=I.textures;if(se.length!==j.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,me=j.length;Z<me;Z++)se[Z]=i.COLOR_ATTACHMENT0+Z;se.length=j.length,de=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,de=!0);de&&i.drawBuffers(se)}function He(I){return g!==I?(i.useProgram(I),g=I,!0):!1}let bt={[qn]:i.FUNC_ADD,[Cl]:i.FUNC_SUBTRACT,[Pl]:i.FUNC_REVERSE_SUBTRACT};bt[Ll]=i.MIN,bt[Dl]=i.MAX;let T={[Nl]:i.ZERO,[Ul]:i.ONE,[Ol]:i.SRC_COLOR,[Nr]:i.SRC_ALPHA,[Hl]:i.SRC_ALPHA_SATURATE,[Vl]:i.DST_COLOR,[Bl]:i.DST_ALPHA,[Fl]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[kl]:i.ONE_MINUS_DST_COLOR,[zl]:i.ONE_MINUS_DST_ALPHA,[Gl]:i.CONSTANT_COLOR,[Wl]:i.ONE_MINUS_CONSTANT_COLOR,[Xl]:i.CONSTANT_ALPHA,[Yl]:i.ONE_MINUS_CONSTANT_ALPHA};function at(I,te,se,de,j,Z,me,Le,nt,Ye){if(I===Dn){x===!0&&(fe(i.BLEND),x=!1);return}if(x===!1&&(K(i.BLEND),x=!0),I!==Rl){if(I!==m||Ye!==M){if((d!==qn||S!==qn)&&(i.blendEquation(i.FUNC_ADD),d=qn,S=qn),Ye)switch(I){case di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFunc(i.ONE,i.ONE);break;case Ko:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case $o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ko:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}A=null,E=null,R=null,w=null,C.set(0,0,0),O=0,m=I,M=Ye}return}j=j||te,Z=Z||se,me=me||de,(te!==d||j!==S)&&(i.blendEquationSeparate(bt[te],bt[j]),d=te,S=j),(se!==A||de!==E||Z!==R||me!==w)&&(i.blendFuncSeparate(T[se],T[de],T[Z],T[me]),A=se,E=de,R=Z,w=me),(Le.equals(C)===!1||nt!==O)&&(i.blendColor(Le.r,Le.g,Le.b,nt),C.copy(Le),O=nt),m=I,M=!1}function De(I,te){I.side===gn?fe(i.CULL_FACE):K(i.CULL_FACE);let se=I.side===Dt;te&&(se=!se),Ie(se),I.blending===di&&I.transparent===!1?at(Dn):at(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let de=I.stencilWrite;o.setTest(de),de&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),_e(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ge(I){I!==Al?(K(i.CULL_FACE),I!==P&&(I===Zo?i.cullFace(i.BACK):I===wl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),P=I}function ot(I){I!==z&&(X&&i.lineWidth(I),z=I)}function _e(I,te,se){I?(K(i.POLYGON_OFFSET_FILL),(H!==te||Y!==se)&&(i.polygonOffset(te,se),H=te,Y=se)):fe(i.POLYGON_OFFSET_FILL)}function Oe(I){I?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function _t(I){I===void 0&&(I=i.TEXTURE0+J-1),ae!==I&&(i.activeTexture(I),ae=I)}function dt(I,te,se){se===void 0&&(ae===null?se=i.TEXTURE0+J-1:se=ae);let de=he[se];de===void 0&&(de={type:void 0,texture:void 0},he[se]=de),(de.type!==I||de.texture!==te)&&(ae!==se&&(i.activeTexture(se),ae=se),i.bindTexture(I,te||q[I]),de.type=I,de.texture=te)}function b(){let I=he[ae];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function W(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function le(I){tt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),tt.copy(I))}function we(I){rt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),rt.copy(I))}function ye(I,te){let se=c.get(te);se===void 0&&(se=new WeakMap,c.set(te,se));let de=se.get(I);de===void 0&&(de=i.getUniformBlockIndex(te,I.name),se.set(I,de))}function oe(I,te){let de=c.get(te).get(I);l.get(te)!==de&&(i.uniformBlockBinding(te,de,I.__bindingPointIndex),l.set(te,de))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,he={},u={},f=new WeakMap,p=[],g=null,x=!1,m=null,d=null,A=null,E=null,S=null,R=null,w=null,C=new Fe(0,0,0),O=0,M=!1,y=null,P=null,z=null,H=null,Y=null,tt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:fe,bindFramebuffer:Pe,drawBuffers:be,useProgram:He,setBlending:at,setMaterial:De,setFlipSided:Ie,setCullFace:ge,setLineWidth:ot,setPolygonOffset:_e,setScissorTest:Oe,activeTexture:_t,bindTexture:dt,unbindTexture:b,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:ve,texImage3D:ee,updateUBOMapping:ye,uniformBlockBinding:oe,texStorage2D:ie,texStorage3D:xe,texSubImage2D:W,texSubImage3D:$,compressedTexSubImage2D:k,compressedTexSubImage3D:Me,scissor:le,viewport:we,reset:Ue}}function Fg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ce,h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):$i("canvas")}function x(b,_,U){let W=1,$=dt(b);if(($.width>U||$.height>U)&&(W=U/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let k=Math.floor(W*$.width),Me=Math.floor(W*$.height);u===void 0&&(u=g(k,Me));let ie=_?g(k,Me):u;return ie.width=k,ie.height=Me,ie.getContext("2d").drawImage(b,0,0,k,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+k+"x"+Me+")."),ie}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),b;return b}function m(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,U,W,$=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let k=_;if(_===i.RED&&(U===i.FLOAT&&(k=i.R32F),U===i.HALF_FLOAT&&(k=i.R16F),U===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(k=i.R8UI),U===i.UNSIGNED_SHORT&&(k=i.R16UI),U===i.UNSIGNED_INT&&(k=i.R32UI),U===i.BYTE&&(k=i.R8I),U===i.SHORT&&(k=i.R16I),U===i.INT&&(k=i.R32I)),_===i.RG&&(U===i.FLOAT&&(k=i.RG32F),U===i.HALF_FLOAT&&(k=i.RG16F),U===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(k=i.RG8UI),U===i.UNSIGNED_SHORT&&(k=i.RG16UI),U===i.UNSIGNED_INT&&(k=i.RG32UI),U===i.BYTE&&(k=i.RG8I),U===i.SHORT&&(k=i.RG16I),U===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(k=i.RGB8UI),U===i.UNSIGNED_SHORT&&(k=i.RGB16UI),U===i.UNSIGNED_INT&&(k=i.RGB32UI),U===i.BYTE&&(k=i.RGB8I),U===i.SHORT&&(k=i.RGB16I),U===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),U===i.UNSIGNED_INT&&(k=i.RGBA32UI),U===i.BYTE&&(k=i.RGBA8I),U===i.SHORT&&(k=i.RGBA16I),U===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){let Me=$?As:Ge.getTransfer(W);U===i.FLOAT&&(k=i.RGBA32F),U===i.HALF_FLOAT&&(k=i.RGBA16F),U===i.UNSIGNED_BYTE&&(k=Me===Je?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function S(b,_){let U;return b?_===null||_===ei||_===cs?U=i.DEPTH24_STENCIL8:_===ln?U=i.DEPTH32F_STENCIL8:_===as&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===cs?U=i.DEPTH_COMPONENT24:_===ln?U=i.DEPTH_COMPONENT32F:_===as&&(U=i.DEPTH_COMPONENT16),U}function R(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function w(b){let _=b.target;_.removeEventListener("dispose",w),O(_),_.isVideoTexture&&h.delete(_)}function C(b){let _=b.target;_.removeEventListener("dispose",C),y(_)}function O(b){let _=n.get(b);if(_.__webglInit===void 0)return;let U=b.source,W=f.get(U);if(W){let $=W[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&M(b),Object.keys(W).length===0&&f.delete(U)}n.remove(b)}function M(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let U=b.source,W=f.get(U);delete W[_.__cacheKey],a.memory.textures--}function y(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let $=0;$<_.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[W][$]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let U=b.textures;for(let W=0,$=U.length;W<$;W++){let k=n.get(U[W]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(U[W])}n.remove(b)}let P=0;function z(){P=0}function H(){let b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function Y(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function J(b,_){let U=n.get(b);if(b.isVideoTexture&&Oe(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,b,_);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function X(b,_){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){q(U,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function ne(b,_){let U=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){q(U,b,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function V(b,_){let U=n.get(b);if(b.version>0&&U.__version!==b.version){K(U,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}let ae={[Or]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},he={[At]:i.NEAREST,[th]:i.NEAREST_MIPMAP_NEAREST,[Mi]:i.NEAREST_MIPMAP_LINEAR,[sn]:i.LINEAR,[ga]:i.LINEAR_MIPMAP_NEAREST,[Qn]:i.LINEAR_MIPMAP_LINEAR},Se={[rh]:i.NEVER,[uh]:i.ALWAYS,[ah]:i.LESS,[lc]:i.LEQUAL,[oh]:i.EQUAL,[hh]:i.GEQUAL,[ch]:i.GREATER,[lh]:i.NOTEQUAL};function Ve(b,_){if(_.type===ln&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===ga||_.magFilter===Mi||_.magFilter===Qn||_.minFilter===sn||_.minFilter===ga||_.minFilter===Mi||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ae[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ae[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ae[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,he[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Se[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==Mi&&_.minFilter!==Qn||_.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function tt(b,_){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",w));let W=_.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let k=Y(_);if(k!==b.__cacheKey){$[k]===void 0&&($[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[k].usedTimes++;let Me=$[b.__cacheKey];Me!==void 0&&($[b.__cacheKey].usedTimes--,Me.usedTimes===0&&M(_)),b.__cacheKey=k,b.__webglTexture=$[k].texture}return U}function rt(b,_,U){return Math.floor(Math.floor(b/U)/_)}function Xe(b,_,U,W){let k=b.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,W,_.data);else{k.sort((ee,le)=>ee.start-le.start);let Me=0;for(let ee=1;ee<k.length;ee++){let le=k[Me],we=k[ee],ye=le.start+le.count,oe=rt(we.start,_.width,4),Ue=rt(le.start,_.width,4);we.start<=ye+1&&oe===Ue&&rt(we.start+we.count-1,_.width,4)===oe?le.count=Math.max(le.count,we.start+we.count-le.start):(++Me,k[Me]=we)}k.length=Me+1;let ie=i.getParameter(i.UNPACK_ROW_LENGTH),xe=i.getParameter(i.UNPACK_SKIP_PIXELS),ve=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ee=0,le=k.length;ee<le;ee++){let we=k[ee],ye=Math.floor(we.start/4),oe=Math.ceil(we.count/4),Ue=ye%_.width,I=Math.floor(ye/_.width),te=oe,se=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Ue,I,te,se,U,W,_.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ie),i.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function q(b,_,U){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let $=tt(b,_),k=_.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+U);let Me=n.get(k);if(k.version!==Me.__version||$===!0){t.activeTexture(i.TEXTURE0+U);let ie=Ge.getPrimaries(Ge.workingColorSpace),xe=_.colorSpace===Un?null:Ge.getPrimaries(_.colorSpace),ve=_.colorSpace===Un||ie===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let ee=x(_.image,!1,s.maxTextureSize);ee=_t(_,ee);let le=r.convert(_.format,_.colorSpace),we=r.convert(_.type),ye=E(_.internalFormat,le,we,_.colorSpace,_.isVideoTexture);Ve(W,_);let oe,Ue=_.mipmaps,I=_.isVideoTexture!==!0,te=Me.__version===void 0||$===!0,se=k.dataReady,de=R(_,ee);if(_.isDepthTexture)ye=S(_.format===ls,_.type),te&&(I?t.texStorage2D(i.TEXTURE_2D,1,ye,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,we,null));else if(_.isDataTexture)if(Ue.length>0){I&&te&&t.texStorage2D(i.TEXTURE_2D,de,ye,Ue[0].width,Ue[0].height);for(let j=0,Z=Ue.length;j<Z;j++)oe=Ue[j],I?se&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,le,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,ye,oe.width,oe.height,0,le,we,oe.data);_.generateMipmaps=!1}else I?(te&&t.texStorage2D(i.TEXTURE_2D,de,ye,ee.width,ee.height),se&&Xe(_,ee,le,we)):t.texImage2D(i.TEXTURE_2D,0,ye,ee.width,ee.height,0,le,we,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ye,Ue[0].width,Ue[0].height,ee.depth);for(let j=0,Z=Ue.length;j<Z;j++)if(oe=Ue[j],_.format!==Kt)if(le!==null)if(I){if(se)if(_.layerUpdates.size>0){let me=_c(oe.width,oe.height,_.format,_.type);for(let Le of _.layerUpdates){let nt=oe.data.subarray(Le*me/oe.data.BYTES_PER_ELEMENT,(Le+1)*me/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,Le,oe.width,oe.height,1,le,nt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,le,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,ye,oe.width,oe.height,ee.depth,0,oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,oe.width,oe.height,ee.depth,le,we,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,ye,oe.width,oe.height,ee.depth,0,le,we,oe.data)}else{I&&te&&t.texStorage2D(i.TEXTURE_2D,de,ye,Ue[0].width,Ue[0].height);for(let j=0,Z=Ue.length;j<Z;j++)oe=Ue[j],_.format!==Kt?le!==null?I?se&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,j,ye,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe.width,oe.height,le,we,oe.data):t.texImage2D(i.TEXTURE_2D,j,ye,oe.width,oe.height,0,le,we,oe.data)}else if(_.isDataArrayTexture)if(I){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,ye,ee.width,ee.height,ee.depth),se)if(_.layerUpdates.size>0){let j=_c(ee.width,ee.height,_.format,_.type);for(let Z of _.layerUpdates){let me=ee.data.subarray(Z*j/ee.data.BYTES_PER_ELEMENT,(Z+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,le,we,me)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(_.isData3DTexture)I?(te&&t.texStorage3D(i.TEXTURE_3D,de,ye,ee.width,ee.height,ee.depth),se&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ee.width,ee.height,ee.depth,0,le,we,ee.data);else if(_.isFramebufferTexture){if(te)if(I)t.texStorage2D(i.TEXTURE_2D,de,ye,ee.width,ee.height);else{let j=ee.width,Z=ee.height;for(let me=0;me<de;me++)t.texImage2D(i.TEXTURE_2D,me,ye,j,Z,0,le,we,null),j>>=1,Z>>=1}}else if(Ue.length>0){if(I&&te){let j=dt(Ue[0]);t.texStorage2D(i.TEXTURE_2D,de,ye,j.width,j.height)}for(let j=0,Z=Ue.length;j<Z;j++)oe=Ue[j],I?se&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,le,we,oe):t.texImage2D(i.TEXTURE_2D,j,ye,le,we,oe);_.generateMipmaps=!1}else if(I){if(te){let j=dt(ee);t.texStorage2D(i.TEXTURE_2D,de,ye,j.width,j.height)}se&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,we,ee)}else t.texImage2D(i.TEXTURE_2D,0,ye,le,we,ee);m(_)&&d(W),Me.__version=k.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function K(b,_,U){if(_.image.length!==6)return;let W=tt(b,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+U);let k=n.get($);if($.version!==k.__version||W===!0){t.activeTexture(i.TEXTURE0+U);let Me=Ge.getPrimaries(Ge.workingColorSpace),ie=_.colorSpace===Un?null:Ge.getPrimaries(_.colorSpace),xe=_.colorSpace===Un||Me===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ve=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!ve&&!ee?le[Z]=x(_.image[Z],!0,s.maxCubemapSize):le[Z]=ee?_.image[Z].image:_.image[Z],le[Z]=_t(_,le[Z]);let we=le[0],ye=r.convert(_.format,_.colorSpace),oe=r.convert(_.type),Ue=E(_.internalFormat,ye,oe,_.colorSpace),I=_.isVideoTexture!==!0,te=k.__version===void 0||W===!0,se=$.dataReady,de=R(_,we);Ve(i.TEXTURE_CUBE_MAP,_);let j;if(ve){I&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,we.width,we.height);for(let Z=0;Z<6;Z++){j=le[Z].mipmaps;for(let me=0;me<j.length;me++){let Le=j[me];_.format!==Kt?ye!==null?I?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Le.width,Le.height,ye,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,0,0,Le.width,Le.height,ye,oe,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me,Ue,Le.width,Le.height,0,ye,oe,Le.data)}}}else{if(j=_.mipmaps,I&&te){j.length>0&&de++;let Z=dt(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Ue,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){I?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,ye,oe,le[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,le[Z].width,le[Z].height,0,ye,oe,le[Z].data);for(let me=0;me<j.length;me++){let nt=j[me].image[Z].image;I?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,nt.width,nt.height,ye,oe,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,nt.width,nt.height,0,ye,oe,nt.data)}}else{I?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ye,oe,le[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ue,ye,oe,le[Z]);for(let me=0;me<j.length;me++){let Le=j[me];I?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,0,0,ye,oe,Le.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,me+1,Ue,ye,oe,Le.image[Z])}}}m(_)&&d(i.TEXTURE_CUBE_MAP),k.__version=$.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function fe(b,_,U,W,$,k){let Me=r.convert(U.format,U.colorSpace),ie=r.convert(U.type),xe=E(U.internalFormat,Me,ie,U.colorSpace),ve=n.get(_),ee=n.get(U);if(ee.__renderTarget=_,!ve.__hasExternalTextures){let le=Math.max(1,_.width>>k),we=Math.max(1,_.height>>k);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,k,xe,le,we,_.depth,0,Me,ie,null):t.texImage2D($,k,xe,le,we,0,Me,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,ee.__webglTexture,0,ot(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,ee.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(b,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let W=_.depthTexture,$=W&&W.isDepthTexture?W.type:null,k=S(_.stencilBuffer,$),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=ot(_);_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,k,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,b)}else{let W=_.textures;for(let $=0;$<W.length;$++){let k=W[$],Me=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),xe=E(k.internalFormat,Me,ie,k.colorSpace),ve=ot(_);U&&_e(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,xe,_.width,_.height):_e(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,xe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,xe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(_.depthTexture);W.__renderTarget=_,(!W.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);let $=W.__webglTexture,k=ot(_);if(_.depthTexture.format===Zi)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===ls)_e(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function He(b){let _=n.get(b),U=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let W=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=W}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");let W=b.texture.mipmaps;W&&W.length>0?be(_.__webglFramebuffer[0],b):be(_.__webglFramebuffer,b)}else if(U){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),Pe(_.__webglDepthbuffer[W],b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}else{let W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pe(_.__webglDepthbuffer,b,!1);else{let $=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function bt(b,_,U){let W=n.get(b);_!==void 0&&fe(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&He(b)}function T(b){let _=b.texture,U=n.get(b),W=n.get(_);b.addEventListener("dispose",C);let $=b.textures,k=b.isWebGLCubeRenderTarget===!0,Me=$.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,a.memory.textures++),k){U.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ie]=[];for(let xe=0;xe<_.mipmaps.length;xe++)U.__webglFramebuffer[ie][xe]=i.createFramebuffer()}else U.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ie=0;ie<_.mipmaps.length;ie++)U.__webglFramebuffer[ie]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ie=0,xe=$.length;ie<xe;ie++){let ve=n.get($[ie]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&_e(b)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ie=0;ie<$.length;ie++){let xe=$[ie];U.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ie]);let ve=r.convert(xe.format,xe.colorSpace),ee=r.convert(xe.type),le=E(xe.internalFormat,ve,ee,xe.colorSpace,b.isXRRenderTarget===!0),we=ot(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,U.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(i.TEXTURE_CUBE_MAP,_);for(let ie=0;ie<6;ie++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)fe(U.__webglFramebuffer[ie][xe],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,xe);else fe(U.__webglFramebuffer[ie],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ie=0,xe=$.length;ie<xe;ie++){let ve=$[ie],ee=n.get(ve),le=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),Ve(le,ve),fe(U.__webglFramebuffer,b,ve,i.COLOR_ATTACHMENT0+ie,le,0),m(ve)&&d(le)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ie=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,W.__webglTexture),Ve(ie,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)fe(U.__webglFramebuffer[xe],b,_,i.COLOR_ATTACHMENT0,ie,xe);else fe(U.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ie,0);m(_)&&d(ie),t.unbindTexture()}b.depthBuffer&&He(b)}function at(b){let _=b.textures;for(let U=0,W=_.length;U<W;U++){let $=_[U];if(m($)){let k=A(b),Me=n.get($).__webglTexture;t.bindTexture(k,Me),d(k),t.unbindTexture()}}}let De=[],Ie=[];function ge(b){if(b.samples>0){if(_e(b)===!1){let _=b.textures,U=b.width,W=b.height,$=i.COLOR_BUFFER_BIT,k=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(b),ie=_.length>1;if(ie)for(let ve=0;ve<_.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let xe=b.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ve=0;ve<_.length;ve++){if(b.resolveDepthBuffer&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let ee=n.get(_[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,W,0,0,U,W,$,i.NEAREST),l===!0&&(De.length=0,Ie.length=0,De.push(i.COLOR_ATTACHMENT0+ve),b.depthBuffer&&b.resolveDepthBuffer===!1&&(De.push(k),Ie.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ie)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ve=0;ve<_.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ve]);let ee=n.get(_[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ot(b){return Math.min(s.maxSamples,b.samples)}function _e(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Oe(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function _t(b,_){let U=b.colorSpace,W=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==pi&&U!==Un&&(Ge.getTransfer(U)===Je?(W!==Kt||$!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=z,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=ne,this.setTextureCube=V,this.rebindTextures=bt,this.setupRenderTarget=T,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_e}function Bg(i,e){function t(n,s=Un){let r,a=Ge.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===xa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ic)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tc)return i.BYTE;if(n===nc)return i.SHORT;if(n===as)return i.UNSIGNED_SHORT;if(n===_a)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===os)return i.HALF_FLOAT;if(n===rc)return i.ALPHA;if(n===ac)return i.RGB;if(n===Kt)return i.RGBA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===ls)return i.DEPTH_STENCIL;if(n===ya)return i.RED;if(n===Ma)return i.RED_INTEGER;if(n===oc)return i.RG;if(n===ba)return i.RG_INTEGER;if(n===Sa)return i.RGBA_INTEGER;if(n===Js||n===$s||n===Ks||n===js)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Aa||n===wa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Aa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ia||n===Ra||n===Ca)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ia||n===Ra)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===La||n===Da||n===Na||n===Ua||n===Oa||n===Fa||n===Ba||n===za||n===Va||n===ka||n===Ha||n===Ga||n===Wa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===La)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Da)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xa||n===Ya||n===qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xa)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ya)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Za||n===Ja||n===$a||n===Ka)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Za)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var zg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vg=`
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

}`,Cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Bs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new on({vertexShader:zg,fragmentShader:Vg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ft(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pc=class extends fn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,x=typeof XRWebGLBinding<"u",m=new Cc,d={},A=t.getContextAttributes(),E=null,S=null,R=[],w=[],C=new Ce,O=null,M=new Tt;M.viewport=new ht;let y=new Tt;y.viewport=new ht;let P=[M,y],z=new ra,H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=R[q];return K===void 0&&(K=new es,R[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=R[q];return K===void 0&&(K=new es,R[q]=K),K.getGripSpace()},this.getHand=function(q){let K=R[q];return K===void 0&&(K=new es,R[q]=K),K.getHandSpace()};function J(q){let K=w.indexOf(q.inputSource);if(K===-1)return;let fe=R[K];fe!==void 0&&(fe.update(q.inputSource,q.frame,c||a),fe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ne);for(let q=0;q<R.length;q++){let K=w[q];K!==null&&(w[q]=null,R[q].disconnect(K))}H=null,Y=null,m.reset();for(let q in d)delete d[q];e.setRenderTarget(E),p=null,f=null,u=null,s=null,S=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(O),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Pe=null,be=null;A.depth&&(be=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=A.stencil?ls:Zi,Pe=A.stencil?cs:ei);let He={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(He),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new pn(f.textureWidth,f.textureHeight,{format:Kt,type:cn,depthTexture:new Fs(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let fe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,fe),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new pn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(q){for(let K=0;K<q.removed.length;K++){let fe=q.removed[K],Pe=w.indexOf(fe);Pe>=0&&(w[Pe]=null,R[Pe].disconnect(fe))}for(let K=0;K<q.added.length;K++){let fe=q.added[K],Pe=w.indexOf(fe);if(Pe===-1){for(let He=0;He<R.length;He++)if(He>=w.length){w.push(fe),Pe=He;break}else if(w[He]===null){w[He]=fe,Pe=He;break}if(Pe===-1)break}let be=R[Pe];be&&be.connect(fe)}}let V=new L,ae=new L;function he(q,K,fe){V.setFromMatrixPosition(K.matrixWorld),ae.setFromMatrixPosition(fe.matrixWorld);let Pe=V.distanceTo(ae),be=K.projectionMatrix.elements,He=fe.projectionMatrix.elements,bt=be[14]/(be[10]-1),T=be[14]/(be[10]+1),at=(be[9]+1)/be[5],De=(be[9]-1)/be[5],Ie=(be[8]-1)/be[0],ge=(He[8]+1)/He[0],ot=bt*Ie,_e=bt*ge,Oe=Pe/(-Ie+ge),_t=Oe*-Ie;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_t),q.translateZ(Oe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),be[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let dt=bt+Oe,b=T+Oe,_=ot-_t,U=_e+(Pe-_t),W=at*T/b*dt,$=De*T/b*dt;q.projectionMatrix.makePerspective(_,U,W,$,dt,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Se(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let K=q.near,fe=q.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),z.near=y.near=M.near=K,z.far=y.far=M.far=fe,(H!==z.near||Y!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),H=z.near,Y=z.far),z.layers.mask=q.layers.mask|6,M.layers.mask=z.layers.mask&3,y.layers.mask=z.layers.mask&5;let Pe=q.parent,be=z.cameras;Se(z,Pe);for(let He=0;He<be.length;He++)Se(be[He],Pe);be.length===2?he(z,M,y):z.projectionMatrix.copy(M.projectionMatrix),Ve(q,z,Pe)};function Ve(q,K,fe){fe===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(fe.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ji*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(q){return d[q]};let tt=null;function rt(q,K){if(h=K.getViewerPose(c||a),g=K,h!==null){let fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Pe=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,Pe=!0);for(let T=0;T<fe.length;T++){let at=fe[T],De=null;if(p!==null)De=p.getViewport(at);else{let ge=u.getViewSubImage(f,at);De=ge.viewport,T===0&&(e.setRenderTargetTextures(S,ge.colorTexture,ge.depthStencilTexture),e.setRenderTarget(S))}let Ie=P[T];Ie===void 0&&(Ie=new Tt,Ie.layers.enable(T),Ie.viewport=new ht,P[T]=Ie),Ie.matrix.fromArray(at.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(at.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(De.x,De.y,De.width,De.height),T===0&&(z.matrix.copy(Ie.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pe===!0&&z.cameras.push(Ie)}let be=s.enabledFeatures;if(be&&be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let T=u.getDepthInformation(fe[0]);T&&T.isValid&&T.texture&&m.init(T,s.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let T=0;T<fe.length;T++){let at=fe[T].camera;if(at){let De=d[at];De||(De=new Bs,d[at]=De);let Ie=u.getCameraImage(at);De.sourceTexture=Ie}}}}for(let fe=0;fe<R.length;fe++){let Pe=w[fe],be=R[fe];Pe!==null&&be!==void 0&&be.update(Pe,K,c||a)}tt&&tt(q,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}let Xe=new Vh;Xe.setAnimationLoop(rt),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}},Ei=new rn,kg=new Ke;function Hg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,pc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),x(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,A,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Dt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Dt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),E=A.envMap,S=A.envMapRotation;E&&(m.envMap.value=E,Ei.copy(S),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ei)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Dt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Gg(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){let S=E.program;n.uniformBlockBinding(A,S)}function c(A,E){let S=s[A.id];S===void 0&&(g(A),S=h(A),s[A.id]=S,A.addEventListener("dispose",m));let R=E.program;n.updateUBOMapping(A,R);let w=e.render.frame;r[A.id]!==w&&(f(A),r[A.id]=w)}function h(A){let E=u();A.__bindingPointIndex=E;let S=i.createBuffer(),R=A.__size,w=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){let E=s[A.id],S=A.uniforms,R=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,C=S.length;w<C;w++){let O=Array.isArray(S[w])?S[w]:[S[w]];for(let M=0,y=O.length;M<y;M++){let P=O[M];if(p(P,w,M,R)===!0){let z=P.__offset,H=Array.isArray(P.value)?P.value:[P.value],Y=0;for(let J=0;J<H.length;J++){let X=H[J],ne=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,z+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,E,S,R){let w=A.value,C=E+"_"+S;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{let O=R[C];if(typeof w=="number"||typeof w=="boolean"){if(O!==w)return R[C]=w,!0}else if(O.equals(w)===!1)return O.copy(w),!0}return!1}function g(A){let E=A.uniforms,S=0,R=16;for(let C=0,O=E.length;C<O;C++){let M=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,P=M.length;y<P;y++){let z=M[y],H=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,J=H.length;Y<J;Y++){let X=H[Y],ne=x(X),V=S%R,ae=V%ne.boundary,he=V+ae;S+=ae,he!==0&&R-he<ne.storage&&(S+=R-he),z.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ne.storage}}}let w=S%R;return w>0&&(S+=R-w),A.__size=S,A.__cache={},this}function x(A){let E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){let E=A.target;E.removeEventListener("dispose",m);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function d(){for(let A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var no=class{constructor(e={}){let{canvas:t=dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,d=null,A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,R=!1;this._outputColorSpace=yt;let w=0,C=0,O=null,M=-1,y=null,P=new ht,z=new ht,H=null,Y=new Fe(0),J=0,X=t.width,ne=t.height,V=1,ae=null,he=null,Se=new ht(0,0,X,ne),Ve=new ht(0,0,X,ne),tt=!1,rt=new ts,Xe=!1,q=!1,K=new Ke,fe=new L,Pe=new ht,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function bt(){return O===null?V:1}let T=n;function at(v,D){return t.getContext(v,D)}try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",j,!1),T===null){let D="webgl2";if(T=at(D,v),T===null)throw at(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let De,Ie,ge,ot,_e,Oe,_t,dt,b,_,U,W,$,k,Me,ie,xe,ve,ee,le,we,ye,oe,Ue;function I(){De=new om(T),De.init(),ye=new Bg(T,De),Ie=new em(T,De,e,ye),ge=new Og(T,De),Ie.reversedDepthBuffer&&f&&ge.buffers.depth.setReversed(!0),ot=new hm(T),_e=new Sg,Oe=new Fg(T,De,ge,_e,Ie,ye,ot),_t=new nm(S),dt=new am(S),b=new md(T),oe=new jp(T,b),_=new cm(T,b,ot,oe),U=new dm(T,_,b,ot),ee=new um(T,Ie,Oe),ie=new tm(_e),W=new bg(S,_t,dt,De,Ie,oe,ie),$=new Hg(S,_e),k=new Tg,Me=new Pg(De),ve=new Kp(S,_t,dt,ge,U,p,l),xe=new Ng(S,U,Ie),Ue=new Gg(T,ot,Ie,ge),le=new Qp(T,De,ot),we=new lm(T,De,ot),ot.programs=W.programs,S.capabilities=Ie,S.extensions=De,S.properties=_e,S.renderLists=k,S.shadowMap=xe,S.state=ge,S.info=ot}I();let te=new Pc(S,T);this.xr=te,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=De.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=De.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(X,ne,!1))},this.getSize=function(v){return v.set(X,ne)},this.setSize=function(v,D,F=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=v,ne=D,t.width=Math.floor(v*V),t.height=Math.floor(D*V),F===!0&&(t.style.width=v+"px",t.style.height=D+"px"),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(X*V,ne*V).floor()},this.setDrawingBufferSize=function(v,D,F){X=v,ne=D,V=F,t.width=Math.floor(v*F),t.height=Math.floor(D*F),this.setViewport(0,0,v,D)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,D,F,B){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,D,F,B),ge.viewport(P.copy(Se).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,D,F,B){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,D,F,B),ge.scissor(z.copy(Ve).multiplyScalar(V).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(v){ge.setScissorTest(tt=v)},this.setOpaqueSort=function(v){ae=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,F=!0){let B=0;if(v){let N=!1;if(O!==null){let Q=O.texture.format;N=Q===Sa||Q===ba||Q===Ma}if(N){let Q=O.texture.type,ce=Q===cn||Q===ei||Q===as||Q===cs||Q===xa||Q===va,pe=ve.getClearColor(),ue=ve.getClearAlpha(),Ae=pe.r,Re=pe.g,Ee=pe.b;ce?(g[0]=Ae,g[1]=Re,g[2]=Ee,g[3]=ue,T.clearBufferuiv(T.COLOR,0,g)):(x[0]=Ae,x[1]=Re,x[2]=Ee,x[3]=ue,T.clearBufferiv(T.COLOR,0,x))}else B|=T.COLOR_BUFFER_BIT}D&&(B|=T.DEPTH_BUFFER_BIT),F&&(B|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",j,!1),ve.dispose(),k.dispose(),Me.dispose(),_e.dispose(),_t.dispose(),dt.dispose(),U.dispose(),oe.dispose(),Ue.dispose(),W.dispose(),te.dispose(),te.removeEventListener("sessionstart",dn),te.removeEventListener("sessionend",Yc),si.stop()};function se(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let v=ot.autoReset,D=xe.enabled,F=xe.autoUpdate,B=xe.needsUpdate,N=xe.type;I(),ot.autoReset=v,xe.enabled=D,xe.autoUpdate=F,xe.needsUpdate=B,xe.type=N}function j(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Z(v){let D=v.target;D.removeEventListener("dispose",Z),me(D)}function me(v){Le(v),_e.remove(v)}function Le(v){let D=_e.get(v).programs;D!==void 0&&(D.forEach(function(F){W.releaseProgram(F)}),v.isShaderMaterial&&W.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,F,B,N,Q){D===null&&(D=be);let ce=N.isMesh&&N.matrixWorld.determinant()<0,pe=pu(v,D,F,B,N);ge.setMaterial(B,ce);let ue=F.index,Ae=1;if(B.wireframe===!0){if(ue=_.getWireframeAttribute(F),ue===void 0)return;Ae=2}let Re=F.drawRange,Ee=F.attributes.position,ke=Re.start*Ae,$e=(Re.start+Re.count)*Ae;Q!==null&&(ke=Math.max(ke,Q.start*Ae),$e=Math.min($e,(Q.start+Q.count)*Ae)),ue!==null?(ke=Math.max(ke,0),$e=Math.min($e,ue.count)):Ee!=null&&(ke=Math.max(ke,0),$e=Math.min($e,Ee.count));let ut=$e-ke;if(ut<0||ut===1/0)return;oe.setup(N,B,pe,F,ue);let it,Qe=le;if(ue!==null&&(it=b.get(ue),Qe=we,Qe.setIndex(it)),N.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*bt()),Qe.setMode(T.LINES)):Qe.setMode(T.TRIANGLES);else if(N.isLine){let Te=B.linewidth;Te===void 0&&(Te=1),ge.setLineWidth(Te*bt()),N.isLineSegments?Qe.setMode(T.LINES):N.isLineLoop?Qe.setMode(T.LINE_LOOP):Qe.setMode(T.LINE_STRIP)}else N.isPoints?Qe.setMode(T.POINTS):N.isSprite&&Qe.setMode(T.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ki("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qe.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))Qe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Te=N._multiDrawStarts,ct=N._multiDrawCounts,We=N._multiDrawCount,Vt=ue?b.get(ue).bytesPerElement:1,Ci=_e.get(B).currentProgram.getUniforms();for(let kt=0;kt<We;kt++)Ci.setValue(T,"_gl_DrawID",kt),Qe.render(Te[kt]/Vt,ct[kt])}else if(N.isInstancedMesh)Qe.renderInstances(ke,ut,N.count);else if(F.isInstancedBufferGeometry){let Te=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ct=Math.min(F.instanceCount,Te);Qe.renderInstances(ke,ut,ct)}else Qe.render(ke,ut)};function nt(v,D,F){v.transparent===!0&&v.side===gn&&v.forceSinglePass===!1?(v.side=Dt,v.needsUpdate=!0,or(v,D,F),v.side=Cn,v.needsUpdate=!0,or(v,D,F),v.side=gn):or(v,D,F)}this.compile=function(v,D,F=null){F===null&&(F=v),d=Me.get(F),d.init(D),E.push(d),F.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),v!==F&&v.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();let B=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){let pe=Q[ce];nt(pe,F,N),B.add(pe)}else nt(Q,F,N),B.add(Q)}),d=E.pop(),B},this.compileAsync=function(v,D,F=null){let B=this.compile(v,D,F);return new Promise(N=>{function Q(){if(B.forEach(function(ce){_e.get(ce).currentProgram.isReady()&&B.delete(ce)}),B.size===0){N(v);return}setTimeout(Q,10)}De.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ye=null;function bn(v){Ye&&Ye(v)}function dn(){si.stop()}function Yc(){si.start()}let si=new Vh;si.setAnimationLoop(bn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(v){Ye=v,te.setAnimationLoop(v),v===null?si.stop():si.start()},te.addEventListener("sessionstart",dn),te.addEventListener("sessionend",Yc),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(D),D=te.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,D,O),d=Me.get(v,E.length),d.init(D),E.push(d),K.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),rt.setFromProjectionMatrix(K,nn,D.reversedDepth),q=this.localClippingEnabled,Xe=ie.init(this.clippingPlanes,q),m=k.get(v,A.length),m.init(),A.push(m),te.enabled===!0&&te.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&fo(Q,D,-1/0,S.sortObjects)}fo(v,D,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ae,he),He=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,He&&ve.addToRenderList(m,v),this.info.render.frame++,Xe===!0&&ie.beginShadows();let F=d.state.shadowsArray;xe.render(F,v,D),Xe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=m.opaque,N=m.transmissive;if(d.setupLights(),D.isArrayCamera){let Q=D.cameras;if(N.length>0)for(let ce=0,pe=Q.length;ce<pe;ce++){let ue=Q[ce];Zc(B,N,v,ue)}He&&ve.render(v);for(let ce=0,pe=Q.length;ce<pe;ce++){let ue=Q[ce];qc(m,v,ue,ue.viewport)}}else N.length>0&&Zc(B,N,v,D),He&&ve.render(v),qc(m,v,D);O!==null&&C===0&&(Oe.updateMultisampleRenderTarget(O),Oe.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(S,v,D),oe.resetDefaultState(),M=-1,y=null,E.pop(),E.length>0?(d=E[E.length-1],Xe===!0&&ie.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function fo(v,D,F,B){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)F=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||rt.intersectsSprite(v)){B&&Pe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);let ce=U.update(v),pe=v.material;pe.visible&&m.push(v,ce,pe,F,Pe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||rt.intersectsObject(v))){let ce=U.update(v),pe=v.material;if(B&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pe.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Pe.copy(ce.boundingSphere.center)),Pe.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(pe)){let ue=ce.groups;for(let Ae=0,Re=ue.length;Ae<Re;Ae++){let Ee=ue[Ae],ke=pe[Ee.materialIndex];ke&&ke.visible&&m.push(v,ce,ke,F,Pe.z,Ee)}}else pe.visible&&m.push(v,ce,pe,F,Pe.z,null)}}let Q=v.children;for(let ce=0,pe=Q.length;ce<pe;ce++)fo(Q[ce],D,F,B)}function qc(v,D,F,B){let N=v.opaque,Q=v.transmissive,ce=v.transparent;d.setupLightsView(F),Xe===!0&&ie.setGlobalState(S.clippingPlanes,F),B&&ge.viewport(P.copy(B)),N.length>0&&ar(N,D,F),Q.length>0&&ar(Q,D,F),ce.length>0&&ar(ce,D,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Zc(v,D,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new pn(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?os:cn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ge.workingColorSpace}));let Q=d.state.transmissionRenderTarget[B.id],ce=B.viewport||P;Q.setSize(ce.z*S.transmissionResolutionScale,ce.w*S.transmissionResolutionScale);let pe=S.getRenderTarget(),ue=S.getActiveCubeFace(),Ae=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(Y),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),He&&ve.render(F);let Re=S.toneMapping;S.toneMapping=Nn;let Ee=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),Xe===!0&&ie.setGlobalState(S.clippingPlanes,B),ar(v,F,B),Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q),De.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let $e=0,ut=D.length;$e<ut;$e++){let it=D[$e],Qe=it.object,Te=it.geometry,ct=it.material,We=it.group;if(ct.side===gn&&Qe.layers.test(B.layers)){let Vt=ct.side;ct.side=Dt,ct.needsUpdate=!0,Jc(Qe,F,B,Te,ct,We),ct.side=Vt,ct.needsUpdate=!0,ke=!0}}ke===!0&&(Oe.updateMultisampleRenderTarget(Q),Oe.updateRenderTargetMipmap(Q))}S.setRenderTarget(pe,ue,Ae),S.setClearColor(Y,J),Ee!==void 0&&(B.viewport=Ee),S.toneMapping=Re}function ar(v,D,F){let B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,Q=v.length;N<Q;N++){let ce=v[N],pe=ce.object,ue=ce.geometry,Ae=ce.group,Re=ce.material;Re.allowOverride===!0&&B!==null&&(Re=B),pe.layers.test(F.layers)&&Jc(pe,D,F,ue,Re,Ae)}}function Jc(v,D,F,B,N,Q){v.onBeforeRender(S,D,F,B,N,Q),v.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,D,F,B,v,Q),N.transparent===!0&&N.side===gn&&N.forceSinglePass===!1?(N.side=Dt,N.needsUpdate=!0,S.renderBufferDirect(F,D,B,N,v,Q),N.side=Cn,N.needsUpdate=!0,S.renderBufferDirect(F,D,B,N,v,Q),N.side=gn):S.renderBufferDirect(F,D,B,N,v,Q),v.onAfterRender(S,D,F,B,N,Q)}function or(v,D,F){D.isScene!==!0&&(D=be);let B=_e.get(v),N=d.state.lights,Q=d.state.shadowsArray,ce=N.state.version,pe=W.getParameters(v,N.state,Q,D,F),ue=W.getProgramCacheKey(pe),Ae=B.programs;B.environment=v.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(v.isMeshStandardMaterial?dt:_t).get(v.envMap||B.environment),B.envMapRotation=B.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",Z),Ae=new Map,B.programs=Ae);let Re=Ae.get(ue);if(Re!==void 0){if(B.currentProgram===Re&&B.lightsStateVersion===ce)return Kc(v,pe),Re}else pe.uniforms=W.getUniforms(v),v.onBeforeCompile(pe,S),Re=W.acquireProgram(pe,ue),Ae.set(ue,Re),B.uniforms=pe.uniforms;let Ee=B.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ee.clippingPlanes=ie.uniform),Kc(v,pe),B.needsLights=gu(v),B.lightsStateVersion=ce,B.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=Re,B.uniformsList=null,Re}function $c(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=fs.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Kc(v,D){let F=_e.get(v);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function pu(v,D,F,B,N){D.isScene!==!0&&(D=be),Oe.resetTextureUnits();let Q=D.fog,ce=B.isMeshStandardMaterial?D.environment:null,pe=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pi,ue=(B.isMeshStandardMaterial?dt:_t).get(B.envMap||ce),Ae=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Re=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ee=!!F.morphAttributes.position,ke=!!F.morphAttributes.normal,$e=!!F.morphAttributes.color,ut=Nn;B.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(ut=S.toneMapping);let it=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=it!==void 0?it.length:0,Te=_e.get(B),ct=d.state.lights;if(Xe===!0&&(q===!0||v!==y)){let Rt=v===y&&B.id===M;ie.setState(B,v,Rt)}let We=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==ct.state.version||Te.outputColorSpace!==pe||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==ue||B.fog===!0&&Te.fog!==Q||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ie.numPlanes||Te.numIntersection!==ie.numIntersection)||Te.vertexAlphas!==Ae||Te.vertexTangents!==Re||Te.morphTargets!==Ee||Te.morphNormals!==ke||Te.morphColors!==$e||Te.toneMapping!==ut||Te.morphTargetsCount!==Qe)&&(We=!0):(We=!0,Te.__version=B.version);let Vt=Te.currentProgram;We===!0&&(Vt=or(B,D,N));let Ci=!1,kt=!1,gs=!1,lt=Vt.getUniforms(),Yt=Te.uniforms;if(ge.useProgram(Vt.program)&&(Ci=!0,kt=!0,gs=!0),B.id!==M&&(M=B.id,kt=!0),Ci||y!==v){ge.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),lt.setValue(T,"projectionMatrix",v.projectionMatrix),lt.setValue(T,"viewMatrix",v.matrixWorldInverse);let Ut=lt.map.cameraPosition;Ut!==void 0&&Ut.setValue(T,fe.setFromMatrixPosition(v.matrixWorld)),Ie.logarithmicDepthBuffer&&lt.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&lt.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,kt=!0,gs=!0)}if(N.isSkinnedMesh){lt.setOptional(T,N,"bindMatrix"),lt.setOptional(T,N,"bindMatrixInverse");let Rt=N.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),lt.setValue(T,"boneTexture",Rt.boneTexture,Oe))}N.isBatchedMesh&&(lt.setOptional(T,N,"batchingTexture"),lt.setValue(T,"batchingTexture",N._matricesTexture,Oe),lt.setOptional(T,N,"batchingIdTexture"),lt.setValue(T,"batchingIdTexture",N._indirectTexture,Oe),lt.setOptional(T,N,"batchingColorTexture"),N._colorsTexture!==null&&lt.setValue(T,"batchingColorTexture",N._colorsTexture,Oe));let qt=F.morphAttributes;if((qt.position!==void 0||qt.normal!==void 0||qt.color!==void 0)&&ee.update(N,F,Vt),(kt||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,lt.setValue(T,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Yt.envMap.value=ue,Yt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(Yt.envMapIntensity.value=D.environmentIntensity),kt&&(lt.setValue(T,"toneMappingExposure",S.toneMappingExposure),Te.needsLights&&mu(Yt,gs),Q&&B.fog===!0&&$.refreshFogUniforms(Yt,Q),$.refreshMaterialUniforms(Yt,B,V,ne,d.state.transmissionRenderTarget[v.id]),fs.upload(T,$c(Te),Yt,Oe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(fs.upload(T,$c(Te),Yt,Oe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&lt.setValue(T,"center",N.center),lt.setValue(T,"modelViewMatrix",N.modelViewMatrix),lt.setValue(T,"normalMatrix",N.normalMatrix),lt.setValue(T,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Rt=B.uniformsGroups;for(let Ut=0,po=Rt.length;Ut<po;Ut++){let ri=Rt[Ut];Ue.update(ri,Vt),Ue.bind(ri,Vt)}}return Vt}function mu(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function gu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,D,F){let B=_e.get(v);B.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),_e.get(v.texture).__webglTexture=D,_e.get(v.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:F,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let F=_e.get(v);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0};let _u=T.createFramebuffer();this.setRenderTarget=function(v,D=0,F=0){O=v,w=D,C=F;let B=!0,N=null,Q=!1,ce=!1;if(v){let ue=_e.get(v);if(ue.__useDefaultFramebuffer!==void 0)ge.bindFramebuffer(T.FRAMEBUFFER,null),B=!1;else if(ue.__webglFramebuffer===void 0)Oe.setupRenderTarget(v);else if(ue.__hasExternalTextures)Oe.rebindTextures(v,_e.get(v.texture).__webglTexture,_e.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ee=v.depthTexture;if(ue.__boundDepthTexture!==Ee){if(Ee!==null&&_e.has(Ee)&&(v.width!==Ee.image.width||v.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Oe.setupDepthRenderbuffer(v)}}let Ae=v.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);let Re=_e.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?N=Re[D][F]:N=Re[D],Q=!0):v.samples>0&&Oe.useMultisampledRTT(v)===!1?N=_e.get(v).__webglMultisampledFramebuffer:Array.isArray(Re)?N=Re[F]:N=Re,P.copy(v.viewport),z.copy(v.scissor),H=v.scissorTest}else P.copy(Se).multiplyScalar(V).floor(),z.copy(Ve).multiplyScalar(V).floor(),H=tt;if(F!==0&&(N=_u),ge.bindFramebuffer(T.FRAMEBUFFER,N)&&B&&ge.drawBuffers(v,N),ge.viewport(P),ge.scissor(z),ge.setScissorTest(H),Q){let ue=_e.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+D,ue.__webglTexture,F)}else if(ce){let ue=D;for(let Ae=0;Ae<v.textures.length;Ae++){let Re=_e.get(v.textures[Ae]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+Ae,Re.__webglTexture,F,ue)}}else if(v!==null&&F!==0){let ue=_e.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ue.__webglTexture,F)}M=-1},this.readRenderTargetPixels=function(v,D,F,B,N,Q,ce,pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue){ge.bindFramebuffer(T.FRAMEBUFFER,ue);try{let Ae=v.textures[pe],Re=Ae.format,Ee=Ae.type;if(!Ie.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-B&&F>=0&&F<=v.height-N&&(v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(D,F,B,N,ye.convert(Re),ye.convert(Ee),Q))}finally{let Ae=O!==null?_e.get(O).__webglFramebuffer:null;ge.bindFramebuffer(T.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(v,D,F,B,N,Q,ce,pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=_e.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue)if(D>=0&&D<=v.width-B&&F>=0&&F<=v.height-N){ge.bindFramebuffer(T.FRAMEBUFFER,ue);let Ae=v.textures[pe],Re=Ae.format,Ee=Ae.type;if(!Ie.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,ke),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),v.textures.length>1&&T.readBuffer(T.COLOR_ATTACHMENT0+pe),T.readPixels(D,F,B,N,ye.convert(Re),ye.convert(Ee),0);let $e=O!==null?_e.get(O).__webglFramebuffer:null;ge.bindFramebuffer(T.FRAMEBUFFER,$e);let ut=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await fh(T,ut,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,ke),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(ke),T.deleteSync(ut),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,F=0){let B=Math.pow(2,-F),N=Math.floor(v.image.width*B),Q=Math.floor(v.image.height*B),ce=D!==null?D.x:0,pe=D!==null?D.y:0;Oe.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,F,0,0,ce,pe,N,Q),ge.unbindTexture()};let xu=T.createFramebuffer(),vu=T.createFramebuffer();this.copyTextureToTexture=function(v,D,F=null,B=null,N=0,Q=null){Q===null&&(N!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ce,pe,ue,Ae,Re,Ee,ke,$e,ut,it=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(F!==null)ce=F.max.x-F.min.x,pe=F.max.y-F.min.y,ue=F.isBox3?F.max.z-F.min.z:1,Ae=F.min.x,Re=F.min.y,Ee=F.isBox3?F.min.z:0;else{let qt=Math.pow(2,-N);ce=Math.floor(it.width*qt),pe=Math.floor(it.height*qt),v.isDataArrayTexture?ue=it.depth:v.isData3DTexture?ue=Math.floor(it.depth*qt):ue=1,Ae=0,Re=0,Ee=0}B!==null?(ke=B.x,$e=B.y,ut=B.z):(ke=0,$e=0,ut=0);let Qe=ye.convert(D.format),Te=ye.convert(D.type),ct;D.isData3DTexture?(Oe.setTexture3D(D,0),ct=T.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Oe.setTexture2DArray(D,0),ct=T.TEXTURE_2D_ARRAY):(Oe.setTexture2D(D,0),ct=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,D.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,D.unpackAlignment);let We=T.getParameter(T.UNPACK_ROW_LENGTH),Vt=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ci=T.getParameter(T.UNPACK_SKIP_PIXELS),kt=T.getParameter(T.UNPACK_SKIP_ROWS),gs=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,it.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,it.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ae),T.pixelStorei(T.UNPACK_SKIP_ROWS,Re),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ee);let lt=v.isDataArrayTexture||v.isData3DTexture,Yt=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let qt=_e.get(v),Rt=_e.get(D),Ut=_e.get(qt.__renderTarget),po=_e.get(Rt.__renderTarget);ge.bindFramebuffer(T.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ge.bindFramebuffer(T.DRAW_FRAMEBUFFER,po.__webglFramebuffer);for(let ri=0;ri<ue;ri++)lt&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(v).__webglTexture,N,Ee+ri),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,_e.get(D).__webglTexture,Q,ut+ri)),T.blitFramebuffer(Ae,Re,ce,pe,ke,$e,ce,pe,T.DEPTH_BUFFER_BIT,T.NEAREST);ge.bindFramebuffer(T.READ_FRAMEBUFFER,null),ge.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||_e.has(v)){let qt=_e.get(v),Rt=_e.get(D);ge.bindFramebuffer(T.READ_FRAMEBUFFER,xu),ge.bindFramebuffer(T.DRAW_FRAMEBUFFER,vu);for(let Ut=0;Ut<ue;Ut++)lt?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,qt.__webglTexture,N,Ee+Ut):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,qt.__webglTexture,N),Yt?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Rt.__webglTexture,Q,ut+Ut):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Rt.__webglTexture,Q),N!==0?T.blitFramebuffer(Ae,Re,ce,pe,ke,$e,ce,pe,T.COLOR_BUFFER_BIT,T.NEAREST):Yt?T.copyTexSubImage3D(ct,Q,ke,$e,ut+Ut,Ae,Re,ce,pe):T.copyTexSubImage2D(ct,Q,ke,$e,Ae,Re,ce,pe);ge.bindFramebuffer(T.READ_FRAMEBUFFER,null),ge.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else Yt?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(ct,Q,ke,$e,ut,ce,pe,ue,Qe,Te,it.data):D.isCompressedArrayTexture?T.compressedTexSubImage3D(ct,Q,ke,$e,ut,ce,pe,ue,Qe,it.data):T.texSubImage3D(ct,Q,ke,$e,ut,ce,pe,ue,Qe,Te,it):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,ke,$e,ce,pe,Qe,Te,it.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,ke,$e,it.width,it.height,Qe,it.data):T.texSubImage2D(T.TEXTURE_2D,Q,ke,$e,ce,pe,Qe,Te,it);T.pixelStorei(T.UNPACK_ROW_LENGTH,We),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Vt),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ci),T.pixelStorei(T.UNPACK_SKIP_ROWS,kt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,gs),Q===0&&D.generateMipmaps&&T.generateMipmap(ct),ge.unbindTexture()},this.initRenderTarget=function(v){_e.get(v).__webglFramebuffer===void 0&&Oe.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Oe.setTextureCube(v,0):v.isData3DTexture?Oe.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Oe.setTexture2DArray(v,0):Oe.setTexture2D(v,0),ge.unbindTexture()},this.resetState=function(){w=0,C=0,O=null,ge.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var Yh={type:"change"},Nc={type:"start"},Zh={type:"end"},so=new Zn,qh=new Jt,Wg=Math.cos(70*dc.DEG2RAD),gt=new L,Bt=2*Math.PI,je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Dc=1e-6,ro=class extends qs{constructor(e,t=null){super(e,t),this.state=je.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Kn.ROTATE,MIDDLE:Kn.DOLLY,RIGHT:Kn.PAN},this.touches={ONE:jn.ROTATE,TWO:jn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new wt,this._lastTargetPosition=new L,this._quat=new wt().setFromUnitVectors(e.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rs,this._sphericalDelta=new rs,this._scale=1,this._panOffset=new L,this._rotateStart=new Ce,this._rotateEnd=new Ce,this._rotateDelta=new Ce,this._panStart=new Ce,this._panEnd=new Ce,this._panDelta=new Ce,this._dollyStart=new Ce,this._dollyEnd=new Ce,this._dollyDelta=new Ce,this._dollyDirection=new L,this._mouse=new Ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Yg.bind(this),this._onPointerDown=Xg.bind(this),this._onPointerUp=qg.bind(this),this._onContextMenu=e_.bind(this),this._onMouseWheel=$g.bind(this),this._onKeyDown=Kg.bind(this),this._onTouchStart=jg.bind(this),this._onTouchMove=Qg.bind(this),this._onMouseDown=Zg.bind(this),this._onMouseMove=Jg.bind(this),this._interceptControlDown=t_.bind(this),this._interceptControlUp=n_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yh),this.update(),this.state=je.NONE}update(e=null){let t=this.object.position;gt.copy(t).sub(this.target),gt.applyQuaternion(this._quat),this._spherical.setFromVector3(gt),this.autoRotate&&this.state===je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),s<-Math.PI?s+=Bt:s>Math.PI&&(s-=Bt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(gt.setFromSpherical(this._spherical),gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=gt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(so.origin.copy(this.object.position),so.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(so.direction))<Wg?this.object.lookAt(this.target):(qh.setFromNormalAndCoplanarPoint(this.object.up,this.target),so.intersectPlane(qh,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Dc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Dc||this._lastTargetPosition.distanceToSquared(this.target)>Dc?(this.dispatchEvent(Yh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){gt.setFromMatrixColumn(t,0),gt.multiplyScalar(-e),this._panOffset.add(gt)}_panUp(e,t){this.screenSpacePanning===!0?gt.setFromMatrixColumn(t,1):(gt.setFromMatrixColumn(t,0),gt.crossVectors(this.object.up,gt)),gt.multiplyScalar(e),this._panOffset.add(gt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;gt.copy(s).sub(this.target);let r=gt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Xg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Yg(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function qg(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Zh),this.state=je.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Zg(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Kn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=je.DOLLY;break;case Kn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}break;case Kn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=je.PAN}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Nc)}function Jg(i){switch(this.state){case je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function $g(i){this.enabled===!1||this.enableZoom===!1||this.state!==je.NONE||(i.preventDefault(),this.dispatchEvent(Nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Zh))}function Kg(i){this.enabled!==!1&&this._handleKeyDown(i)}function jg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case jn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=je.TOUCH_ROTATE;break;case jn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=je.TOUCH_PAN;break;default:this.state=je.NONE}break;case 2:switch(this.touches.TWO){case jn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=je.TOUCH_DOLLY_PAN;break;case jn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=je.TOUCH_DOLLY_ROTATE;break;default:this.state=je.NONE}break;default:this.state=je.NONE}this.state!==je.NONE&&this.dispatchEvent(Nc)}function Qg(i){switch(this._trackPointer(i),this.state){case je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=je.NONE}}function e_(i){this.enabled!==!1&&i.preventDefault()}function t_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Jh=["assets/textures/gt/basicmachines/alloy_smelter/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/arc_furnace/OVERLAY_BOTTOM.png","assets/textures/gt/basicmachines/arc_furnace/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/arc_furnace/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/assembler/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/assembler/OVERLAY_TOP.png","assets/textures/gt/basicmachines/autoclave/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/autoclave/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/autoclave/OVERLAY_TOP.png","assets/textures/gt/basicmachines/bender/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/canner/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/centrifuge/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/centrifuge/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/centrifuge/OVERLAY_TOP.png","assets/textures/gt/basicmachines/chemical_bath/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/chemical_bath/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/chemical_reactor/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/circuitassembler/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/circuitassembler/OVERLAY_TOP.png","assets/textures/gt/basicmachines/compressor/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/compressor/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/compressor/OVERLAY_TOP.png","assets/textures/gt/basicmachines/cutter/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/distillery/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/distillery/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/electric_furnace/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/electrolyzer/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/electrolyzer/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/extractor/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/extractor/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/extractor/OVERLAY_TOP.png","assets/textures/gt/basicmachines/extruder/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/extruder/OVERLAY_TOP.png","assets/textures/gt/basicmachines/fermenter/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/fermenter/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/fluid_canner/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/fluid_canner/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/fluid_extractor/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/fluid_extractor/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/fluid_extractor/OVERLAY_TOP.png","assets/textures/gt/basicmachines/fluid_heater/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/fluid_heater/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/fluid_heater/OVERLAY_TOP.png","assets/textures/gt/basicmachines/fluid_solidifier/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/laser_engraver/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/lathe/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/macerator/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/macerator/OVERLAY_TOP.png","assets/textures/gt/basicmachines/mixer/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/mixer/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/mixer/OVERLAY_TOP.png","assets/textures/gt/basicmachines/ore_washer/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/ore_washer/OVERLAY_SIDE.png","assets/textures/gt/basicmachines/polarizer/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/polarizer/OVERLAY_TOP.png","assets/textures/gt/basicmachines/printer/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/pump/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/pump/OVERLAY_TOP.png","assets/textures/gt/basicmachines/sifter/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/sifter/OVERLAY_TOP.png","assets/textures/gt/basicmachines/thermal_centrifuge/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/unboxinator/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/wiremill/OVERLAY_FRONT.png","assets/textures/gt/basicmachines/wiremill/OVERLAY_TOP.png","assets/textures/gt/iconsets/COKE_OVEN_CASING.png","assets/textures/gt/iconsets/COKE_OVEN_OVERLAY_INACTIVE.png","assets/textures/gt/iconsets/MACHINE_BRONZEBRICKS_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_BRONZEBRICKS_SIDE.png","assets/textures/gt/iconsets/MACHINE_BRONZEBRICKS_TOP.png","assets/textures/gt/iconsets/MACHINE_BRONZE_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_BRONZE_SIDE.png","assets/textures/gt/iconsets/MACHINE_BRONZE_TOP.png","assets/textures/gt/iconsets/MACHINE_CASING_BRICKEDBLASTFURNACE_INACTIVE.png","assets/textures/gt/iconsets/MACHINE_CASING_CABLE.png","assets/textures/gt/iconsets/MACHINE_CASING_DENSEBRICKS.png","assets/textures/gt/iconsets/MACHINE_CASING_SOLID_STEEL.png","assets/textures/gt/iconsets/MACHINE_CASING_TANK.png","assets/textures/gt/iconsets/MACHINE_EV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_EV_SIDE.png","assets/textures/gt/iconsets/MACHINE_EV_TOP.png","assets/textures/gt/iconsets/MACHINE_HV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_HV_SIDE.png","assets/textures/gt/iconsets/MACHINE_HV_TOP.png","assets/textures/gt/iconsets/MACHINE_IV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_IV_SIDE.png","assets/textures/gt/iconsets/MACHINE_IV_TOP.png","assets/textures/gt/iconsets/MACHINE_LV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_LV_SIDE.png","assets/textures/gt/iconsets/MACHINE_LV_TOP.png","assets/textures/gt/iconsets/MACHINE_LuV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_LuV_SIDE.png","assets/textures/gt/iconsets/MACHINE_LuV_TOP.png","assets/textures/gt/iconsets/MACHINE_MAX_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_MAX_SIDE.png","assets/textures/gt/iconsets/MACHINE_MAX_TOP.png","assets/textures/gt/iconsets/MACHINE_MV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_MV_SIDE.png","assets/textures/gt/iconsets/MACHINE_MV_TOP.png","assets/textures/gt/iconsets/MACHINE_STEELBRICKS_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_STEELBRICKS_SIDE.png","assets/textures/gt/iconsets/MACHINE_STEELBRICKS_TOP.png","assets/textures/gt/iconsets/MACHINE_STEEL_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_STEEL_SIDE.png","assets/textures/gt/iconsets/MACHINE_STEEL_TOP.png","assets/textures/gt/iconsets/MACHINE_UEV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UEV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UEV_TOP.png","assets/textures/gt/iconsets/MACHINE_UHV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UHV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UHV_TOP.png","assets/textures/gt/iconsets/MACHINE_UIV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UIV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UIV_TOP.png","assets/textures/gt/iconsets/MACHINE_ULV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_ULV_SIDE.png","assets/textures/gt/iconsets/MACHINE_ULV_TOP.png","assets/textures/gt/iconsets/MACHINE_UMV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UMV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UMV_TOP.png","assets/textures/gt/iconsets/MACHINE_UV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UV_TOP.png","assets/textures/gt/iconsets/MACHINE_UXV_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_UXV_SIDE.png","assets/textures/gt/iconsets/MACHINE_UXV_TOP.png","assets/textures/gt/iconsets/MACHINE_ZPM_BOTTOM.png","assets/textures/gt/iconsets/MACHINE_ZPM_SIDE.png","assets/textures/gt/iconsets/MACHINE_ZPM_TOP.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_ALLOY_SMELTER.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_CENTRIFUGE.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_COMPRESSOR.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_EXTRACTOR.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_FORGE_HAMMER.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_FURNACE.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_HAMMER.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_MACERATOR.png","assets/textures/gt/iconsets/OVERLAY_FRONT_STEAM_WASHER.png","assets/textures/gt/iconsets/OVERLAY_PIPE.png","assets/textures/gt/iconsets/OVERLAY_PIPE_IN.png","assets/textures/gt/iconsets/OVERLAY_PIPE_OUT.png","assets/textures/gt/iconsets/OVERLAY_SIDE_STEAM_COMPRESSOR.png","assets/textures/gt/iconsets/OVERLAY_SIDE_STEAM_EXTRACTOR.png","assets/textures/gt/iconsets/OVERLAY_TOP_STEAM_COMPRESSOR.png","assets/textures/gt/iconsets/OVERLAY_TOP_STEAM_EXTRACTOR.png","assets/textures/gt/iconsets/OVERLAY_TOP_STEAM_MACERATOR.png","assets/textures/gt/iconsets/STEAM_TURBINE_SIDE.png","assets/textures/gt/materialicons/NONE/pipeSide.png","assets/textures/gt/materialicons/NONE/wire.png"];var er=new Set(Jh),Uc="assets/textures/gt/",hn=i=>Uc+"iconsets/"+i+".png",s_=[[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]],r_=[[/alloy.*smelt/i,"alloy_smelter"],[/assembling|assembler/i,"assembler"],[/autoclave/i,"autoclave"],[/bender/i,"bender"],[/centrifuge/i,"centrifuge"],[/chemical bath/i,"chemical_bath"],[/chemical reactor/i,"chemical_reactor"],[/compressor/i,"compressor"],[/cutting|cutter/i,"cutter"],[/distill/i,"distillery"],[/electroly/i,"electrolyzer"],[/fluid extrac/i,"fluid_extractor"],[/fluid heater/i,"fluid_heater"],[/fluid solid/i,"fluid_solidifier"],[/extractor/i,"extractor"],[/extruder/i,"extruder"],[/fermenter/i,"fermenter"],[/forming.*press/i,"forming_press"],[/lathe/i,"lathe"],[/macerator|pulverizer/i,"macerator"],[/mixer/i,"mixer"],[/ore.*wash/i,"ore_washer"],[/polariz/i,"polarizer"],[/sifter/i,"sifter"],[/wire.*mill/i,"wiremill"],[/furnace|oven/i,"electric_furnace"]],ao=class{constructor(e){this.onLoad=e,this.loader=new ks,this.textures=new Map,this.materials=new Map,this.loaded=0,this.failed=0}texture(e){if(!e||!er.has(e))return null;if(!this.textures.has(e)){let t=this.loader.load("./"+e,()=>{this.loaded++,this.onLoad()},void 0,()=>{this.failed++,this.onLoad()});t.colorSpace=yt,t.magFilter=At,t.minFilter=Mi,t.anisotropy=4,this.textures.set(e,t)}return this.textures.get(e)}material(e,t=!1){let n=(t?"overlay:":"base:")+e;return this.materials.has(n)||this.materials.set(n,new _i({map:this.texture(e),roughness:.88,metalness:.08,alphaTest:t?.15:0,polygonOffset:t,polygonOffsetFactor:t?-1:0,polygonOffsetUnits:t?-1:0})),this.materials.get(n)}profile(e){let t=e.label||"",n=e.machine_id,s=e.tier==="Steam"?/high pressure|steel|hp /i.test(t)?"STEEL":"BRONZE":e.tier;er.has(hn("MACHINE_"+s+"_SIDE"))||(s="LV");let r=hn("MACHINE_"+s+"_SIDE"),a=hn("MACHINE_"+s+"_TOP"),o=hn("MACHINE_"+s+"_BOTTOM"),l=null,c=null,h=null,u=null,f=!0;if(n===236||n===237)r=a=o=hn("COKE_OVEN_CASING"),l=hn(n===236?"COKE_OVEN_OVERLAY_INACTIVE":"OVERLAY_PIPE_IN"),f=n!==236;else if(n===140)r=a=o=hn("MACHINE_CASING_DENSEBRICKS"),l=hn("MACHINE_CASING_BRICKEDBLASTFURNACE_INACTIVE"),f=!1;else if(/steam turbine/i.test(t))l=hn("STEAM_TURBINE_SIDE");else if(/hatch|\bbus\b/i.test(t))l=hn(/output/i.test(t)?"OVERLAY_PIPE_OUT":"OVERLAY_PIPE_IN");else{let g=r_.find(([x])=>x.test(t))?.[1];if(g){f=!1;for(let x of["FRONT","SIDE","TOP","BOTTOM"]){let m=Uc+"basicmachines/"+g+"/OVERLAY_"+x+".png",d=hn("OVERLAY_"+x+"_STEAM_"+g.toUpperCase()),A=e.tier==="Steam"&&er.has(d)?d:m;er.has(A)&&(x==="FRONT"&&(l=A),x==="SIDE"&&(c=A),x==="TOP"&&(h=A),x==="BOTTOM"&&(u=A))}}}let p=[r,r,a,o,r,r];return{key:p.join("|"),materials:p.map(g=>this.material(g)),front:l,sideOverlay:c,topOverlay:h,bottomOverlay:u,approximate:f}}overlayEntries(e,t){if(e.facing===void 0)return[];let n=[];return s_.forEach((s,r)=>{let a=r===e.facing?t.front:r===0?t.bottomOverlay:r===1?t.topOverlay:t.sideOverlay;a&&er.has(a)&&n.push({o:e,path:a,dx:s[0]*.454,dy:s[1]*.454,dz:s[2]*.454,sx:.9,sy:.9,sz:1,rotation:new wt().setFromUnitVectors(new L(0,0,1),new L(...s))})}),n}pipeMaterial(e){return this.material(Uc+"materialicons/NONE/"+(e.kind==="cable"?"wire":"pipeSide")+".png")}pipeColor(e){if(e.kind==="cable"&&/cable/i.test(e.label))return"#5c625d";for(let[t,n]of[[/bronze/i,"#d6a158"],[/copper|red alloy/i,"#dd9272"],[/brass/i,"#c4ad63"],[/tin/i,"#c4d1da"],[/steel|iron/i,"#acbbc1"],[/lead/i,"#9694ba"],[/plastic|poly/i,"#e4e1d1"]])if(t.test(e.label))return n;return"#aabdc0"}stats(){return{requested:this.textures.size,loaded:this.loaded,failed:this.failed}}};var tr={added:"#a7e77c",changed:"#f0bd63",removed:"#ee857b"},wi={added:"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E",changed:"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043E",removed:"\u0423\u0434\u0430\u043B\u0435\u043D\u043E"},a_=i=>[i.dimension,i.x,i.y,i.z].join(":");function Oc(i){let e=new Map;for(let n of i){let s=a_(n);e.has(s)||e.set(s,[]),e.get(s).push(n)}let t=[];for(let n of e.values()){let s=new Map;for(let a of n)s.has(a.start)||s.set(a.start,[]),s.get(a.start).push(a);let r=n.filter(a=>a.end===null||a.end>a.start);for(let a of r){if(a.start>0){let o=n.find(h=>h!==a&&h.end===a.start&&h.start<a.start),l=o?"changed":"added",c="";o&&(o.machine_id!==a.machine_id||o.kind!==a.kind?c="\u0417\u0430\u043C\u0435\u043D\u0430 \u0431\u043B\u043E\u043A\u0430":o.facing!==a.facing?c="\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 / \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 \u0441\u043D\u0438\u043C\u043A\u043E\u043C":o.connections!==a.connections?c="\u0421\u043E\u0435\u0434\u0438\u043D\u0435\u043D\u0438\u044F / \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u0438\u0435 \u0441\u043D\u0438\u043C\u043A\u043E\u043C":c="\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u044B \u0431\u043B\u043E\u043A\u0430"),t.push({tick:a.start,kind:l,object:a,previous:o,approximate:a.observed,reason:c})}a.end!==null&&a.end>0&&!s.get(a.end)?.some(o=>o!==a&&(o.end===null||o.end>o.start))&&t.push({tick:a.end,kind:"removed",object:a,approximate:!0,reason:"\u041E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u043E \u043F\u0440\u0438 \u0441\u0432\u0435\u0440\u043A\u0435"})}}return t.sort((n,s)=>n.tick-s.tick||n.kind.localeCompare(s.kind))}function $h(i){let e=[];for(let t of i){let n=e.at(-1);(!n||n.tick!==t.tick)&&(n={tick:t.tick,changes:[],added:0,changed:0,removed:0},e.push(n)),n.changes.push(t),n[t.kind]++}return e}function Kh(i,e,t=100){let n=new Map;for(let s of i){let r=Math.min(t-1,Math.floor(s.tick/Math.max(1,e)*t));n.has(r)||n.set(r,{index:r,groups:[],added:0,changed:0,removed:0});let a=n.get(r);a.groups.push(s);for(let o of Object.keys(tr))a[o]+=s[o]}return[...n.values()]}var oo={ids:{"12698":"\u0412\u0435\u0442\u0440\u044F\u043D\u0430\u044F \u043C\u0435\u043B\u044C\u043D\u0438\u0446\u0430","2741":"\u0422\u043E\u0440\u0433\u043E\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u0430\u0442","28001":"\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043A\u0443\u043B\u044C\u0442\u0443\u0440","31040":"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A \u0434\u043B\u044F \u043F\u0430\u0440\u0430","31041":"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C","31046":"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0432\u0445\u043E\u0434\u043D\u0430\u044F \u0448\u0438\u043D\u0430","31047":"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0432\u044B\u0445\u043E\u0434\u043D\u0430\u044F \u0448\u0438\u043D\u0430","31078":"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440","31082":"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u0444\u0430\u0431\u0440\u0438\u043A\u0430","31083":"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442","31085":"\u0412\u043E\u0434\u044F\u043D\u0430\u044F \u043F\u043E\u043C\u043F\u0430","31086":"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043D\u0430\u044F \u043F\u0435\u0447\u044C","31087":"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C","50":"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A","60":"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A","818":"\u0420\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440"},materials:{absorbsallradiation:"\u041F\u043E\u0433\u043B\u043E\u0449\u0430\u0435\u0442 \u043B\u044E\u0431\u043E\u0435 \u0438\u0437\u043B\u0443\u0447\u0435\u043D\u0438\u0435",abyssalalloy:"\u0421\u043F\u043B\u0430\u0432 \u0431\u0435\u0437\u0434\u043D\u044B",acceleratesthemassfabricator:"\u0423\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",aceticanhydride:"\u0423\u043A\u0441\u0443\u0441\u043D\u044B\u0439 \u0430\u043D\u0433\u0438\u0434\u0440\u0438\u0434",advancednitinol:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u043D\u0438\u0442\u0438\u043D\u043E\u043B",alburnite:"\u0410\u043B\u044C\u0431\u0443\u0440\u043D\u0438\u0442",almandine:"\u0410\u043B\u044C\u043C\u0430\u043D\u0434\u0438\u043D",alumina:"\u0413\u043B\u0438\u043D\u043E\u0437\u0451\u043C",aluminium:"\u0410\u043B\u044E\u043C\u0438\u043D\u0438\u0439",americium:"\u0410\u043C\u0435\u0440\u0438\u0446\u0438\u0439",ammonia:"\u0410\u043C\u043C\u0438\u0430\u043A",ammonium:"\u0410\u043C\u043C\u043E\u043D\u0438\u0439",ammoniumbifluoride:"\u0413\u0438\u0434\u0440\u043E\u0444\u0442\u043E\u0440\u0438\u0434 \u0430\u043C\u043C\u043E\u043D\u0438\u044F",ammoniumnitrate:"\u041D\u0438\u0442\u0440\u0430\u0442 \u0430\u043C\u043C\u043E\u043D\u0438\u044F",ammoniumtetrafluoroberyllate:"\u0422\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u043E\u0431\u0435\u0440\u0438\u043B\u043B\u0430\u0442 \u0430\u043C\u043C\u043E\u043D\u0438\u044F",ancientgranite:"\u0414\u0440\u0435\u0432\u043D\u0438\u0439 \u0433\u0440\u0430\u043D\u0438\u0442",antimony:"\u0421\u0443\u0440\u044C\u043C\u0430",arcanite:"\u0410\u0440\u043A\u0430\u043D\u0438\u0442",argon:"\u0410\u0440\u0433\u043E\u043D",arsenic:"\u041C\u044B\u0448\u044C\u044F\u043A",astraltitanium:"\u0410\u0441\u0442\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D",atearintothespacebeyondspace:"\u0420\u0430\u0437\u0440\u044B\u0432 \u0432 \u0438\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u0437\u0430 \u043F\u0440\u0435\u0434\u0435\u043B\u0430\u043C\u0438 \u043D\u0430\u0448\u0435\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",babbitalloy:"\u0411\u0430\u0431\u0431\u0438\u0442",barium:"\u0411\u0430\u0440\u0438\u0439",beryllium:"\u0411\u0435\u0440\u0438\u043B\u043B\u0438\u0439",berylliumfluoride:"\u0424\u0442\u043E\u0440\u0438\u0434 \u0431\u0435\u0440\u0438\u043B\u043B\u0438\u044F",berylliumhydroxide:"\u0413\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0431\u0435\u0440\u0438\u043B\u043B\u0438\u044F",bismuth:"\u0412\u0438\u0441\u043C\u0443\u0442",blackbodynaquadriasupersolid:"\u041D\u0430\u043A\u0432\u0430\u0434\u0440\u0438\u0435\u0432\u043E\u0435 \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0447\u0451\u0440\u043D\u043E\u0435 \u0442\u0435\u043B\u043E",blackmetal:"\u0427\u0451\u0440\u043D\u044B\u0439 \u043C\u0435\u0442\u0430\u043B\u043B",blacksteel:"\u0427\u0451\u0440\u043D\u0430\u044F \u0441\u0442\u0430\u043B\u044C",blacktitanium:"\u0427\u0451\u0440\u043D\u044B\u0439 \u0442\u0438\u0442\u0430\u043D",blizzpowder:"\u0411\u0443\u0440\u0430\u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u0440\u043E\u0448\u043E\u043A",blizzrod:"\u0421\u0442\u0435\u0440\u0436\u0435\u043D\u044C \u0431\u0443\u0440\u0430\u043D\u0430",bloodsteel:"\u041A\u0440\u043E\u0432\u0430\u0432\u0430\u044F \u0441\u0442\u0430\u043B\u044C",boron:"\u0411\u043E\u0440",botmium:"\u0411\u043E\u0442\u043C\u0438\u0439",brine:"\u0420\u0430\u0441\u0441\u043E\u043B",bromine:"\u0411\u0440\u043E\u043C",bronze:"\u0411\u0440\u043E\u043D\u0437\u0430",burntreactorfueli:"\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0435 \u0442\u043E\u043F\u043B\u0438\u0432\u043E \u0416\u0424\u0422\u0420 I",burntreactorfuelii:"\u041E\u0442\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u043E\u0435 \u0442\u043E\u043F\u043B\u0438\u0432\u043E \u0416\u0424\u0422\u0420 II",cadmium:"\u041A\u0430\u0434\u043C\u0438\u0439",caesium:"\u0426\u0435\u0437\u0438\u0439",calcium:"\u041A\u0430\u043B\u044C\u0446\u0438\u0439",calciumcarbonate:"\u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0442 \u043A\u0430\u043B\u044C\u0446\u0438\u044F",calciumsulfategypsum:"\u0421\u0443\u043B\u044C\u0444\u0430\u0442 \u043A\u0430\u043B\u044C\u0446\u0438\u044F (\u0433\u0438\u043F\u0441)",californium:"\u041A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u0439",carbon:"\u0423\u0433\u043B\u0435\u0440\u043E\u0434",carbondioxide:"\u0423\u0433\u043B\u0435\u043A\u0438\u0441\u043B\u044B\u0439 \u0433\u0430\u0437",carbonmonoxide:"\u0423\u0433\u0430\u0440\u043D\u044B\u0439 \u0433\u0430\u0437",castiron:"\u0427\u0443\u0433\u0443\u043D",celestialtungsten:"\u041D\u0435\u0431\u0435\u0441\u043D\u044B\u0439 \u0432\u043E\u043B\u044C\u0444\u0440\u0430\u043C",cerite:"\u0426\u0435\u0440\u0438\u0442",cerium:"\u0426\u0435\u0440\u0438\u0439",chalcopyrite:"\u0425\u0430\u043B\u044C\u043A\u043E\u043F\u0438\u0440\u0438\u0442",chlorine:"\u0425\u043B\u043E\u0440",chloroaceticacid:"\u041C\u043E\u043D\u043E\u0445\u043B\u043E\u0440\u0443\u043A\u0441\u0443\u0441\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",chloroaceticmixture:"\u041C\u043E\u043D\u043E\u0445\u043B\u043E\u0440\u0443\u043A\u0441\u0443\u0441\u043D\u0430\u044F \u0441\u043C\u0435\u0441\u044C",chromaticglass:"\u0425\u0440\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0441\u0442\u0435\u043A\u043B\u043E",chrome:"\u0425\u0440\u043E\u043C",clay:"\u0413\u043B\u0438\u043D\u0430",cobalt:"\u041A\u043E\u0431\u0430\u043B\u044C\u0442",comancheite:"\u041A\u043E\u043C\u0430\u043D\u0447\u0435\u0438\u0442",completeandselectiveadhesionevenwhentornordamaged:"\u041F\u043E\u043B\u043D\u0430\u044F \u0438 \u0432\u044B\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u0441\u043A\u043B\u0435\u0438\u0432\u0430\u043D\u0438\u0435, \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u044B\u0432\u0435 \u0438\u043B\u0438 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",cookedzrcl4:"\u041F\u0440\u043E\u043A\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u0442\u0435\u0442\u0440\u0430\u0445\u043B\u043E\u0440\u0438\u0434 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u044F",copper:"\u041C\u0435\u0434\u044C",copperiisulfate:"\u0421\u0443\u043B\u044C\u0444\u0430\u0442 \u043C\u0435\u0434\u0438 II",copperiisulfatepentahydrate:"\u041F\u0435\u043D\u0442\u0430\u0433\u0438\u0434\u0440\u0430\u0442 \u0441\u0443\u043B\u044C\u0444\u0430\u0442\u0430 \u043C\u0435\u0434\u0438 II",crocoite:"\u041A\u0440\u043E\u043A\u043E\u0438\u0442",cryotheumdust:"\u041F\u044B\u043B\u044C \u043A\u0440\u0438\u043E\u0442\u0435\u0443\u043C\u0430",curium:"\u041A\u044E\u0440\u0438\u0439",cyanoaceticacid:"\u0426\u0438\u0430\u043D\u0443\u043A\u0441\u0443\u0441\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",cyanoacrylatepolymer:"\u0426\u0438\u0430\u043D\u043E\u0430\u043A\u0440\u0438\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u043E\u043B\u0438\u043C\u0435\u0440",decayedradium226:"\u0420\u0430\u0441\u043F\u0430\u0432\u0448\u0438\u0439\u0441\u044F \u0440\u0430\u0434\u0438\u0439-226",desc:"\u041E\u0445\u043B\u0430\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u043A\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u0441\u043B\u0438\u0442\u043E\u043A",dichloroaceticacid:"\u0414\u0438\u0445\u043B\u043E\u0440\u0443\u043A\u0441\u0443\u0441\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",diracsmistake:"\u041E\u0448\u0438\u0431\u043A\u0430 \u0414\u0438\u0440\u0430\u043A\u0430",dragonblood:"\u0414\u0440\u0430\u043A\u043E\u043D\u044C\u044F \u043A\u0440\u043E\u0432\u044C",driedearth:"\u0421\u0443\u0445\u0430\u044F \u0437\u0435\u043C\u043B\u044F",dysprosium:"\u0414\u0438\u0441\u043F\u0440\u043E\u0437\u0438\u0439",eglinsteel:"\u042D\u0433\u043B\u0438\u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u043B\u044C",eglinsteelbasecompound:"\u041E\u0441\u043D\u043E\u0432\u0430 \u044D\u0433\u043B\u0438\u043D\u043E\u0432\u043E\u0439 \u0441\u0442\u0430\u043B\u0438",enderpearl:"\u0416\u0435\u043C\u0447\u0443\u0433 \u042D\u043D\u0434\u0435\u0440\u0430",energycrystal:"\u042D\u043D\u0435\u0440\u0433\u043E\u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B",erbium:"\u042D\u0440\u0431\u0438\u0439",ethylcyanoacetate:"\u042D\u0442\u0438\u043B\u0446\u0438\u0430\u043D\u043E\u0430\u0446\u0435\u0442\u0430\u0442",ethylcyanoacrylatesuperglue:"\u042D\u0442\u0438\u043B\u0446\u0438\u0430\u043D\u043E\u0430\u043A\u0440\u0438\u043B\u0430\u0442 (\u0421\u0443\u043F\u0435\u0440 \u043A\u043B\u0435\u0439)",europium:"\u0415\u0432\u0440\u043E\u043F\u0438\u0439",everlastingandeverpresent:"\u0412\u0435\u0447\u043D\u044B\u0439 \u0438 \u0432\u0435\u0437\u0434\u0435\u0441\u0443\u0449\u0438\u0439",expandsandattenuatessimultaneously:"\u0420\u0430\u0441\u0448\u0438\u0440\u044F\u0435\u0442\u0441\u044F \u0438 \u0441\u0443\u0436\u0430\u0435\u0442\u0441\u044F \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E",fabricofplanarcoalescence:"\u0422\u043A\u0430\u043D\u044C \u043F\u043B\u0430\u043D\u0430\u0440\u043D\u043E\u0433\u043E \u0441\u043B\u0438\u044F\u043D\u0438\u044F",fermium:"\u0424\u0435\u0440\u043C\u0438\u0439",flavortext:"\u0412\u0441\u0451 \u043C\u043E\u0433\u043B\u043E \u0431\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E!",fleshofamainsequencestar:"\u041F\u043B\u043E\u0442\u044C \u0437\u0432\u0435\u0437\u0434\u044B \u0433\u043B\u0430\u0432\u043D\u043E\u0439 \u043F\u043E\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",florencite:"\u0424\u043B\u043E\u0440\u0435\u043D\u0441\u0438\u0442",flowslikeafluidandreflectsnothingperfectabsorptionandtransfer:"\u0422\u0435\u0447\u0435\u0442 \u043A\u0430\u043A \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u044C \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043E\u0442\u0440\u0430\u0436\u0430\u0435\u0442, \u0438\u0434\u0435\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u0433\u043B\u043E\u0449\u0430\u044F \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E.",fluorcaphite:"\u0424\u0442\u043E\u0440\u043A\u0430\u0444\u0438\u0442",fluorine:"\u0424\u0442\u043E\u0440",force:"\u0424\u043E\u0440\u0441",forgedtobeindestructibleprobably:"\u0421\u043E\u0437\u0434\u0430\u043D, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u0442\u044C \u043D\u0435\u0440\u0430\u0437\u0440\u0443\u0448\u0438\u043C\u044B\u043C... \u043D\u0443, \u043D\u0430\u0432\u0435\u0440\u043D\u043E\u0435",formaldehydecatalyst:"\u0424\u043E\u0440\u043C\u0430\u043B\u044C\u0434\u0435\u0433\u0438\u0434\u043D\u044B\u0439 \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440",gadolinium:"\u0413\u0430\u0434\u043E\u043B\u0438\u043D\u0438\u0439",galena:"\u0413\u0430\u043B\u0435\u043D\u0438\u0442",gallium:"\u0413\u0430\u043B\u043B\u0438\u0439",geikielite:"\u0413\u0435\u0439\u043A\u0435\u043B\u0438\u0442",germanium:"\u0413\u0435\u0440\u043C\u0430\u043D\u0438\u0439",glowstone:"\u0421\u0432\u0435\u0442\u044F\u0449\u0438\u0439\u0441\u044F \u043A\u0430\u043C\u0435\u043D\u044C",gold:"\u0417\u043E\u043B\u043E\u0442\u043E",greenockite:"\u0413\u0440\u0438\u043D\u043E\u043A\u0438\u0442",grisium:"\u0413\u0440\u0438\u0437\u0438\u0439",grossular:"\u0413\u0440\u043E\u0441\u0441\u0443\u043B\u044F\u0440",hafnium:"\u0413\u0430\u0444\u043D\u0438\u0439",hastelloyx:"\u0425\u0430\u0441\u0442\u0435\u043B\u043B\u043E\u0439-X",heartofadeadstar:"\u0421\u0435\u0440\u0434\u0446\u0435 \u043C\u0451\u0440\u0442\u0432\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B",helium:"\u0413\u0435\u043B\u0438\u0439",hibonite:"\u0425\u0438\u0431\u043E\u043D\u0438\u0442",highpressure:"\u0412\u044B\u0441\u043E\u043A\u043E\u0435 \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u0435",holmium:"\u0413\u043E\u043B\u044C\u043C\u0438\u0439",honeaite:"\u0425\u043E\u043D\u0435\u0430\u0438\u0442",hydratedlime:"\u0413\u0430\u0448\u0451\u043D\u0430\u044F \u0438\u0437\u0432\u0435\u0441\u0442\u044C",hydrogen:"\u0412\u043E\u0434\u043E\u0440\u043E\u0434",hydrogenchloride:"\u0425\u043B\u043E\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434",hydrogenchloridemix:"\u0425\u043B\u043E\u0440\u043E\u0432\u043E\u0434\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0441\u043C\u0435\u0441\u044C",hydrogencyanide:"\u0421\u0438\u043D\u0438\u043B\u044C\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",hydroxide:"\u0413\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434-\u0440\u0430\u0434\u0438\u043A\u0430\u043B",hyperbolicelbowgrease:"\u0413\u0438\u043F\u0435\u0440\u0431\u043E\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0443\u0441\u0435\u0440\u0434\u0438\u0435",hyperstableselfhealingadhesive:"\u0421\u0432\u0435\u0440\u0445\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043A\u043B\u0435\u0439",hypogen:"\u0413\u0438\u043F\u043E\u0433\u0435\u043D",incoloy020:"\u0418\u043D\u043A\u043E\u043B\u043E\u0439-020",inconel625:"\u0418\u043D\u043A\u043E\u043D\u0435\u043B\u044C-625",inconel690:"\u0418\u043D\u043A\u043E\u043D\u0435\u043B\u044C-690",inconel792:"\u0418\u043D\u043A\u043E\u043D\u0435\u043B\u044C-792",indalloy140:"\u0418\u043D\u0434\u0438\u0435\u0432\u044B\u0439 \u0441\u043F\u043B\u0430\u0432 140",indium:"\u0418\u043D\u0434\u0438\u0439",infusedair:"\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0432\u043E\u0437\u0434\u0443\u0445\u0430",infusedearth:"\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0437\u0435\u043C\u043B\u0438",infusedentropy:"\u042D\u043D\u0442\u0440\u043E\u043F\u0438\u0439\u043D\u044B\u0439 \u043A\u0440\u0438\u0441\u0442\u0430\u043B\u043B",infusedfire:"\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u043E\u0433\u043D\u044F",infusedorder:"\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u043F\u043E\u0440\u044F\u0434\u043A\u0430",infusedwater:"\u041A\u0440\u0438\u0441\u0442\u0430\u043B\u043B \u0432\u043E\u0434\u044B",insanityandwillpowergivenform:"\u0411\u0435\u0437\u0443\u043C\u0438\u0435 \u0438 \u0432\u043E\u043B\u044F, \u043E\u0431\u0440\u0435\u0442\u0448\u0438\u0435 \u0444\u043E\u0440\u043C\u0443",invar:"\u0418\u043D\u0432\u0430\u0440",iodine:"\u0419\u043E\u0434",irarsite:"\u0418\u0440\u0430\u0440\u0441\u0438\u0442",iridium:"\u0418\u0440\u0438\u0434\u0438\u0439",iron:"\u0416\u0435\u043B\u0435\u0437\u043E",itcouldhavebeengreat:"\u0412\u0441\u0451 \u043C\u043E\u0433\u043B\u043E \u0431\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u043C\u0435\u0447\u0430\u0442\u0435\u043B\u044C\u043D\u043E!",kanthal:"\u041A\u0430\u043D\u0442\u0430\u043B",kashinite:"\u041A\u0430\u0448\u0438\u043D\u0438\u0442",koboldite:"\u041A\u043E\u0431\u043E\u043B\u044C\u0434\u0438\u0442",krypton:"\u041A\u0440\u0438\u043F\u0442\u043E\u043D",lafiumcompound:"\u041B\u0430\u0444\u0438\u0443\u043C\u043D\u0430\u044F \u0441\u043C\u0435\u0441\u044C",lafossaite:"\u041B\u0430\u0444\u043E\u0441\u0441\u0430\u0438\u0442",lanthanum:"\u041B\u0430\u043D\u0442\u0430\u043D",laurenium:"\u041B\u0430\u0443\u0440\u0435\u043D\u0438\u0439",lautarite:"\u041B\u0430\u0443\u0442\u0430\u0440\u0438\u0442",layerofsedimentshieldingapainfulabyss:"\u0421\u043B\u043E\u0439 \u043E\u0441\u0430\u0434\u043E\u0447\u043D\u044B\u0445 \u043F\u043E\u0440\u043E\u0434, \u0441\u043A\u0440\u044B\u0432\u0430\u044E\u0449\u0438\u0439 \u043C\u0443\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u0443\u044E \u0431\u0435\u0437\u0434\u043D\u0443",lead:"\u0421\u0432\u0438\u043D\u0435\u0446",lepersonnite:"\u041B\u0435\u043F\u0435\u0440\u0441\u043E\u043D\u043D\u0438\u0442",lftrfuel1:"\u0416\u0424\u0422\u0420 \u0442\u043E\u043F\u043B\u0438\u0432\u043E I",lftrfuel2:"\u0416\u0424\u0422\u0420 \u0442\u043E\u043F\u043B\u0438\u0432\u043E II",lftrfuel3:"\u0416\u0424\u0422\u0420 \u0442\u043E\u043F\u043B\u0438\u0432\u043E III",lftrfuelbase:"\u0422\u043E\u043F\u043B\u0438\u0432\u043D\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430 \u0416\u0424\u0422\u0420",lithium:"\u041B\u0438\u0442\u0438\u0439",lithium7:"\u041B\u0438\u0442\u0438\u0439-7",lithiumcarbonate:"\u041A\u0430\u0440\u0431\u043E\u043D\u0430\u0442 \u043B\u0438\u0442\u0438\u044F",lithiumfluoride:"\u0424\u0442\u043E\u0440\u0438\u0434 \u043B\u0438\u0442\u0438\u044F",lithiumhydroperoxide:"\u0413\u0438\u0434\u0440\u043E\u043F\u0435\u0440\u043E\u043A\u0441\u0438\u0434 \u043B\u0438\u0442\u0438\u044F",lithiumhydroxide:"\u0413\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u043B\u0438\u0442\u0438\u044F",lithiumperoxide:"\u041F\u0435\u0440\u043E\u043A\u0441\u0438\u0434 \u043B\u0438\u0442\u0438\u044F",lithiumtetrafluoroberyllatefuelcompound:"\u0422\u043E\u043F\u043B\u0438\u0432\u043D\u0430\u044F \u0441\u043C\u0435\u0441\u044C \u0442\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u043E\u0431\u0435\u0440\u0438\u043B\u043B\u0430\u0442\u0430 \u043B\u0438\u0442\u0438\u044F",lutetium:"\u041B\u044E\u0442\u0435\u0446\u0438\u0439",magic:"\u041C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0435\u0442\u0430\u043B\u043B",magnesium:"\u041C\u0430\u0433\u043D\u0438\u0439",magneticmonopolematter:"\u041C\u0430\u0442\u0435\u0440\u0438\u044F \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0445 \u043C\u043E\u043D\u043E\u043F\u043E\u043B\u0435\u0439",manganese:"\u041C\u0430\u0440\u0433\u0430\u043D\u0435\u0446",maragingsteel250:"\u041C\u0430\u0440\u0442\u0435\u043D\u0441\u0438\u0442\u043D\u043E\u0441\u0442\u0430\u0440\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C 250",maragingsteel300:"\u041C\u0430\u0440\u0442\u0435\u043D\u0441\u0438\u0442\u043D\u043E\u0441\u0442\u0430\u0440\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C 300",maragingsteel350:"\u041C\u0430\u0440\u0442\u0435\u043D\u0441\u0438\u0442\u043D\u043E\u0441\u0442\u0430\u0440\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C 350",material:"\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B",matterbeyondstructure:"\u041C\u0430\u0442\u0435\u0440\u0438\u044F \u0432\u043D\u0435 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u044B",meatraw:"\u0421\u044B\u0440\u043E\u0435 \u043C\u044F\u0441\u043E",mercury:"\u0420\u0442\u0443\u0442\u044C",miessiite:"\u041C\u0438\u0435\u0441\u0441\u0438\u0438\u0442",molybdenum:"\u041C\u043E\u043B\u0438\u0431\u0434\u0435\u043D",monazite:"\u041C\u043E\u043D\u0430\u0446\u0438\u0442",mutatedlivingsolder:"\u041C\u0443\u0442\u0438\u0440\u043E\u0432\u0430\u0432\u0448\u0438\u0439 \u0436\u0438\u0432\u043E\u0439 \u043F\u0440\u0438\u043F\u043E\u0439",name:"\u0421\u0432\u0435\u0440\u0445\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0441\u0430\u043C\u043E\u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0430\u0432\u043B\u0438\u0432\u0430\u044E\u0449\u0438\u0439\u0441\u044F \u043A\u043B\u0435\u0439",naquadah:"\u041D\u0430\u043A\u0432\u0430\u0434\u0430\u0445",naquadahenriched:"\u041E\u0431\u043E\u0433\u0430\u0449\u0451\u043D\u043D\u044B\u0439 \u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445",naquadria:"\u041D\u0430\u043A\u0432\u0430\u0434\u0440\u0438\u044F",neodymium:"\u041D\u0435\u043E\u0434\u0438\u043C",neon:"\u041D\u0435\u043E\u043D",neptunium:"\u041D\u0435\u043F\u0442\u0443\u043D\u0438\u0439",neptuniumhexafluoride:"\u0413\u0435\u043A\u0441\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u043D\u0435\u043F\u0442\u0443\u043D\u0438\u044F",netherquartz:"\u041A\u0432\u0430\u0440\u0446",newname:"\u041F\u043E\u043B\u0438\u044D\u0442\u0438\u043B\u0435\u043D",nichrome:"\u041D\u0438\u0445\u0440\u043E\u043C",nichromite:"\u041D\u0438\u0445\u0440\u043E\u043C\u0438\u0442",nickel:"\u041D\u0438\u043A\u0435\u043B\u044C",niobium:"\u041D\u0438\u043E\u0431\u0438\u0439",niobiumcarbide:"\u041A\u0430\u0440\u0431\u0438\u0434 \u043D\u0438\u043E\u0431\u0438\u044F",nitinol60:"\u041D\u0438\u0442\u0438\u043D\u043E\u043B 60",nitrogen:"\u0410\u0437\u043E\u0442",octiron:"\u041E\u043A\u0442\u0438\u0440\u043E\u043D",organicfertilizer:"\u041E\u0440\u0433\u0430\u043D\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u0435",osmiridium:"\u041E\u0441\u043C\u0438\u0440\u0438\u0434\u0438\u0439",osmium:"\u041E\u0441\u043C\u0438\u0439",oxygen:"\u041A\u0438\u0441\u043B\u043E\u0440\u043E\u0434",palladium:"\u041F\u0430\u043B\u043B\u0430\u0434\u0438\u0439",pbi:"\u041F\u0411\u0418",pentlandite:"\u041F\u0435\u043D\u0442\u043B\u0430\u043D\u0434\u0438\u0442",perfectedelectrograviticvalve:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043F\u0430\u043D",perfectedenergyconduit:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u044D\u043D\u0435\u0440\u0433\u043E\u043A\u043E\u043D\u0434\u0443\u0438\u0442",perfectedshielding:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u044D\u043A\u0440\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",perfectedwaveguide:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0434",perroudite:"\u041F\u0435\u0440\u0440\u0443\u0434\u0438\u0442",phosphorus:"\u0424\u043E\u0441\u0444\u043E\u0440",phthalicanhydride:"\u0424\u0442\u0430\u043B\u0435\u0432\u044B\u0439 \u0430\u043D\u0433\u0438\u0434\u0440\u0438\u0434",pickupanaquadahingot:"\u041E\u0445\u043B\u0430\u0434\u0438\u0442\u0435 \u0440\u0430\u0441\u043A\u0430\u043B\u0451\u043D\u043D\u044B\u0439 \u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u0441\u043B\u0438\u0442\u043E\u043A",plastic:"\u041F\u043E\u043B\u0438\u044D\u0442\u0438\u043B\u0435\u043D",platinum:"\u041F\u043B\u0430\u0442\u0438\u043D\u0430",plutonium238:"\u041F\u043B\u0443\u0442\u043E\u043D\u0438\u0439-238",plutonium241:"\u041F\u043B\u0443\u0442\u043E\u043D\u0438\u0439-241",polonium:"\u041F\u043E\u043B\u043E\u043D\u0438\u0439",polycrase:"\u041F\u043E\u043B\u0438\u043A\u0440\u0430\u0437",polytetrafluoroethylene:"\u041F\u043E\u043B\u0438\u0442\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u044D\u0442\u0438\u043B\u0435\u043D",potassium:"\u041A\u0430\u043B\u0438\u0439",potassiumnitrate:"\u041D\u0438\u0442\u0440\u0430\u0442 \u043A\u0430\u043B\u0438\u044F",potin:"\u041F\u043E\u0442\u0438\u043D",praseodymium:"\u041F\u0440\u0430\u0437\u0435\u043E\u0434\u0438\u043C",primitiveelectrograviticvalve:"\u041F\u0440\u0438\u043C\u0438\u0442\u0438\u0432\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043F\u0430\u043D",primitiveenergyconduit:"\u041F\u0440\u0438\u043C\u0438\u0442\u0438\u0432\u043D\u044B\u0439 \u044D\u043D\u0435\u0440\u0433\u043E\u043A\u043E\u043D\u0434\u0443\u0438\u0442",primitiveshielding:"\u041F\u0440\u0438\u043C\u0438\u0442\u0438\u0432\u043D\u043E\u0435 \u044D\u043A\u0440\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",primitivewaveguide:"\u041F\u0440\u0438\u043C\u0438\u0442\u0438\u0432\u043D\u044B\u0439 \u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0434",pristineelectrograviticvalve:"\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0433\u0440\u0430\u0432\u0438\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u043F\u0430\u043D",pristineenergyconduit:"\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u044D\u043D\u0435\u0440\u0433\u043E\u043A\u043E\u043D\u0434\u0443\u0438\u0442",pristineshielding:"\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u043E\u0435 \u044D\u043A\u0440\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",pristinewaveguide:"\u0411\u0435\u0437\u0443\u043F\u0440\u0435\u0447\u043D\u044B\u0439 \u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0434",promethium:"\u041F\u0440\u043E\u043C\u0435\u0442\u0438\u0439",protactinium:"\u041F\u0440\u043E\u0442\u0430\u043A\u0442\u0438\u043D\u0438\u0439",ptfe:"\u041F\u0422\u0424\u042D",pvc:"\u041F\u0412\u0425",pyrope:"\u041F\u0438\u0440\u043E\u043F",pyrotheumdust:"\u041F\u044B\u043B\u044C \u043F\u0438\u0440\u043E\u0442\u0435\u0443\u043C\u0430",quantum:"\u041A\u0432\u0430\u043D\u0442\u0443\u043C",radioactivemineralmix:"\u0420\u0430\u0434\u0438\u043E\u0430\u043A\u0442\u0438\u0432\u043D\u0430\u044F \u043C\u0438\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u043C\u0435\u0441\u044C",radium:"\u0420\u0430\u0434\u0438\u0439",radon:"\u0420\u0430\u0434\u043E\u043D",rareearthi:"\u0420\u0435\u0434\u043A\u043E\u0437\u0435\u043C\u0435\u043B\u044C\u043D\u0430\u044F (I)",rareearthii:"\u0420\u0435\u0434\u043A\u043E\u0437\u0435\u043C\u0435\u043B\u044C\u043D\u0430\u044F (II)",rareearthiii:"\u0420\u0435\u0434\u043A\u043E\u0437\u0435\u043C\u0435\u043B\u044C\u043D\u0430\u044F (III)",realityitselfdistilledintophysicalform:"\u0421\u0430\u043C\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u0432\u043E\u043F\u043B\u043E\u0449\u0451\u043D\u043D\u0430\u044F \u0432 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0444\u043E\u0440\u043C\u0435",redstone:"\u041A\u0440\u0430\u0441\u043D\u044B\u0439 \u043A\u0430\u043C\u0435\u043D\u044C",refinedfieldmanipulator:"\u0418\u0437\u044B\u0441\u043A\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438",refinedresonancechamber:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0440\u0435\u0437\u043E\u043D\u0430\u043D\u0441\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430",refinedsensorarray:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432",refinedwavefocus:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0444\u043E\u043A\u0443\u0441 \u0432\u043E\u043B\u043D\u044B",reinforcedfieldmanipulator:"\u0423\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438",reinforcedresonancechamber:"\u0423\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u0430\u044F \u0440\u0435\u0437\u043E\u043D\u0430\u043D\u0441\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430",reinforcedsensorarray:"\u0423\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432",reinforcedwavefocus:"\u0423\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u0444\u043E\u043A\u0443\u0441 \u0432\u043E\u043B\u043D\u044B",resplendentfieldmanipulator:"\u0412\u0435\u043B\u0438\u043A\u043E\u043B\u0435\u043F\u043D\u044B\u0439 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438",resplendentresonancechamber:"\u0421\u0438\u044F\u044E\u0449\u0430\u044F \u0440\u0435\u0437\u043E\u043D\u0430\u043D\u0441\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430",resplendentsensorarray:"\u0421\u0438\u044F\u044E\u0449\u0438\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432",resplendentwavefocus:"\u0421\u0438\u044F\u044E\u0449\u0438\u0439 \u0444\u043E\u043A\u0443\u0441 \u0432\u043E\u043B\u043D\u044B",rhenium:"\u0420\u0435\u043D\u0438\u0439",rhodium:"\u0420\u043E\u0434\u0438\u0439",rhugnor:"\u0420\u0443\u0433\u043D\u043E\u0440",roughfieldmanipulator:"\u0413\u0440\u0443\u0431\u044B\u0439 \u043C\u0430\u043D\u0438\u043F\u0443\u043B\u044F\u0442\u043E\u0440 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438",roughresonancechamber:"\u0413\u0440\u0443\u0431\u0430\u044F \u0440\u0435\u0437\u043E\u043D\u0430\u043D\u0441\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430",roughsensorarray:"\u0413\u0440\u0443\u0431\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0434\u0430\u0442\u0447\u0438\u043A\u043E\u0432",roughwavefocus:"\u0413\u0440\u0443\u0431\u044B\u0439 \u0444\u043E\u043A\u0443\u0441 \u0432\u043E\u043B\u043D\u044B",rubidium:"\u0420\u0443\u0431\u0438\u0434\u0438\u0439",runite:"\u0420\u0443\u043D\u0438\u0442",ruthenium:"\u0420\u0443\u0442\u0435\u043D\u0438\u0439",saltwater:"\u0421\u043E\u043B\u0451\u043D\u0430\u044F \u0432\u043E\u0434\u0430",samarium:"\u0421\u0430\u043C\u0430\u0440\u0438\u0439",scandium:"\u0421\u043A\u0430\u043D\u0434\u0438\u0439",seleniousacid:"\u0421\u0435\u043B\u0435\u043D\u0438\u0441\u0442\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",selenium:"\u0421\u0435\u043B\u0435\u043D",seleniumdioxide:"\u0414\u0438\u043E\u043A\u0441\u0438\u0434 \u0441\u0435\u043B\u0435\u043D\u0430",seleniumhexafluoride:"\u0413\u0435\u043A\u0441\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0441\u0435\u043B\u0435\u043D\u0430",shadowofadeadstar:"\u0422\u0435\u043D\u044C \u043C\u0451\u0440\u0442\u0432\u043E\u0439 \u0437\u0432\u0435\u0437\u0434\u044B",silicon:"\u041A\u0440\u0435\u043C\u043D\u0438\u0439",siliconcarbide:"\u041A\u0430\u0440\u0431\u0438\u0434 \u043A\u0440\u0435\u043C\u043D\u0438\u044F",silicondioxide:"\u0414\u0438\u043E\u043A\u0441\u0438\u0434 \u043A\u0440\u0435\u043C\u043D\u0438\u044F",silver:"\u0421\u0435\u0440\u0435\u0431\u0440\u043E",sodium:"\u041D\u0430\u0442\u0440\u0438\u0439",sodiumchloride:"\u0425\u043B\u043E\u0440\u0438\u0434 \u043D\u0430\u0442\u0440\u0438\u044F",sodiumcyanide:"\u0426\u0438\u0430\u043D\u0438\u0434 \u043D\u0430\u0442\u0440\u0438\u044F",sodiumfluoride:"\u0424\u0442\u043E\u0440\u0438\u0434 \u043D\u0430\u0442\u0440\u0438\u044F",sodiumnitrate:"\u041D\u0438\u0442\u0440\u0430\u0442 \u043D\u0430\u0442\u0440\u0438\u044F",solarsaltcold:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0441\u043E\u043B\u044C (\u043E\u0445\u043B\u0430\u0436\u0434\u0451\u043D\u043D\u0430\u044F)",solarsalthot:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0441\u043E\u043B\u044C (\u0440\u0430\u0441\u043A\u0430\u043B\u0451\u043D\u043D\u0430\u044F)",solidacidcatalystmixture:"\u0421\u043C\u0435\u0441\u044C \u0434\u043B\u044F \u0442\u0432\u0451\u0440\u0434\u043E\u0433\u043E \u043A\u0438\u0441\u043B\u043E\u0442\u043D\u043E\u0433\u043E \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u0430",soulsand:"\u041F\u0435\u0441\u043E\u043A \u0434\u0443\u0448",spatiallyincomprehensible:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u043D\u0435\u043F\u043E\u0441\u0442\u0438\u0436\u0438\u043C\u043E",spessartine:"\u0421\u043F\u0435\u0441\u0441\u0430\u0440\u0442\u0438\u043D",sphalerite:"\u0421\u0444\u0430\u043B\u0435\u0440\u0438\u0442",staballoy:"\u0421\u0442\u0430\u0431\u0430\u043B\u043B\u043E\u0439",stabilisedcoreofadeadstar:"\u0421\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0431\u0430\u0440\u0438\u043E\u043D\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u044F",stablemoltensaltbase:"\u0420\u0430\u0441\u043F\u043B\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0441\u043E\u043B\u0435\u0432\u0430\u044F \u043E\u0441\u043D\u043E\u0432\u0430",stainlesssteel:"\u041D\u0435\u0440\u0436\u0430\u0432\u0435\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u043B\u044C",steel:"\u0421\u0442\u0430\u043B\u044C",stellite:"\u0421\u0442\u0435\u043B\u043B\u0438\u0442",sticky:"\u041B\u0438\u043F\u043A\u0438\u0439",stone:"\u041A\u0430\u043C\u0435\u043D\u044C",strontium:"\u0421\u0442\u0440\u043E\u043D\u0446\u0438\u0439",strontiumhydroxide:"\u0413\u0438\u0434\u0440\u043E\u043A\u0441\u0438\u0434 \u0441\u0442\u0440\u043E\u043D\u0446\u0438\u044F",strontiumoxide:"\u041E\u043A\u0441\u0438\u0434 \u0441\u0442\u0440\u043E\u043D\u0446\u0438\u044F",sulfur:"\u0421\u0435\u0440\u0430",superconductorrareearthcomposite:"\u0421\u0432\u0435\u0440\u0445\u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0439 \u0440\u0435\u0434\u043A\u043E\u0437\u0435\u043C\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442",talonite:"\u0422\u0430\u043B\u043E\u043D\u0438\u0442",tantalloy60:"\u0422\u0430\u043D\u0442\u0430\u043B\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0430\u0432-60",tantalloy61:"\u0422\u0430\u043D\u0442\u0430\u043B\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0430\u0432-61",tantalum:"\u0422\u0430\u043D\u0442\u0430\u043B",tantalumcarbide:"\u041A\u0430\u0440\u0431\u0438\u0434 \u0442\u0430\u043D\u0442\u0430\u043B\u0430",technetium:"\u0422\u0435\u0445\u043D\u0435\u0446\u0438\u0439",technetiumhexafluoride:"\u0413\u0435\u043A\u0441\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0442\u0435\u0445\u043D\u0435\u0446\u0438\u044F",tellurium:"\u0422\u0435\u043B\u043B\u0443\u0440",terbium:"\u0422\u0435\u0440\u0431\u0438\u0439",thallium:"\u0422\u0430\u043B\u043B\u0438\u0439",thaumium:"\u0422\u0430\u0443\u043C-\u043C\u0435\u0442\u0430\u043B\u043B",thefuryoftheuniverseinthepalmofyourhand:"\u0412\u0441\u044F \u043C\u043E\u0449\u044C \u0432\u0441\u0435\u043B\u0435\u043D\u043D\u043E\u0439 \u0432 \u0442\u0432\u043E\u0435\u0439 \u0440\u0443\u043A\u0435.",thisiswhattheymakechickennuggetsoutof:"\u0412\u043E\u0442 \u0438\u0437 \u0447\u0435\u0433\u043E \u0434\u0435\u043B\u0430\u044E\u0442 \u043A\u0443\u0440\u0438\u043D\u044B\u0435 \u043D\u0430\u0433\u0433\u0435\u0442\u0441\u044B",thorium:"\u0422\u043E\u0440\u0438\u0439",thorium232:"\u0422\u043E\u0440\u0438\u0439-232",thoriumhexafluoride:"\u0413\u0435\u043A\u0441\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0442\u043E\u0440\u0438\u044F",thoriumtetrafluoride:"\u0422\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0442\u043E\u0440\u0438\u044F",thulium:"\u0422\u0443\u043B\u0438\u0439",tin:"\u041E\u043B\u043E\u0432\u043E",titanite:"\u0422\u0438\u0442\u0430\u043D\u0438\u0442",titanium:"\u0422\u0438\u0442\u0430\u043D",titansteel:"\u0422\u0438\u0442\u0430\u043D\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u043B\u044C",tooltip:"\u041F\u043E\u043B\u043D\u0430\u044F \u0438 \u0432\u044B\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u0441\u043A\u043B\u0435\u0438\u0432\u0430\u043D\u0438\u0435, \u0434\u0430\u0436\u0435 \u043F\u0440\u0438 \u0440\u0430\u0437\u0440\u044B\u0432\u0435 \u0438\u043B\u0438 \u043F\u043E\u0432\u0440\u0435\u0436\u0434\u0435\u043D\u0438\u0438",trichloroaceticacid:"\u0422\u0440\u0438\u0445\u043B\u043E\u0440\u0443\u043A\u0441\u0443\u0441\u043D\u0430\u044F \u043A\u0438\u0441\u043B\u043E\u0442\u0430",trinium:"\u0422\u0440\u0438\u043D\u0438\u0439",triniumnaquadahalloy:"\u0422\u0440\u0438\u043D\u0438\u0439-\u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0430\u0432",triniumnaquadahcarbonite:"\u0422\u0440\u0438\u043D\u0438\u0439-\u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u043A\u0430\u0440\u0431\u043E\u043D\u0438\u0442",triniumtitaniumalloy:"\u0422\u0440\u0438\u043D\u0438\u0439-\u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0441\u043F\u043B\u0430\u0432",tumbaga:"\u0422\u0443\u043C\u0431\u0430\u0433\u0430",tumbagamix:"\u0421\u043C\u0435\u0441\u044C \u0442\u0443\u043C\u0431\u0430\u0433\u0430",tungsten:"\u0412\u043E\u043B\u044C\u0444\u0440\u0430\u043C",tungstencarbide:"\u041A\u0430\u0440\u0431\u0438\u0434 \u0432\u043E\u043B\u044C\u0444\u0440\u0430\u043C\u0430",tungstensteel:"\u0412\u043E\u043B\u044C\u0444\u0440\u0430\u043C\u043E\u0432\u0430\u044F \u0441\u0442\u0430\u043B\u044C",tungstentitaniumcarbide:"\u0412\u043E\u043B\u044C\u0444\u0440\u0430\u043C-\u0442\u0438\u0442\u0430\u043D\u0430\u043D\u043E\u0432\u044B\u0439 \u043A\u0430\u0440\u0431\u0438\u0434",universallyusablematter:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0442\u0435\u0440\u0438\u044F",uranium:"\u0423\u0440\u0430\u043D",uranium232:"\u0423\u0440\u0430\u043D-232",uranium233:"\u0423\u0440\u0430\u043D-233",uranium235:"\u0423\u0440\u0430\u043D-235",uraniumhexafluoride:"\u0413\u0435\u043A\u0441\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0443\u0440\u0430\u043D\u0430",uraniumtetrafluoride:"\u0422\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0443\u0440\u0430\u043D\u0430",vanadium:"\u0412\u0430\u043D\u0430\u0434\u0438\u0439",water:"\u0412\u043E\u0434\u0430",watertightsteel:"\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0439\u043A\u0430\u044F \u0441\u0442\u0430\u043B\u044C",wooden:"\u0414\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u0430\u044F",woodsglass:"\u0421\u0442\u0435\u043A\u043B\u043E \u0412\u0443\u0434\u0430",xenon:"\u041A\u0441\u0435\u043D\u043E\u043D",xenotime:"\u041A\u0441\u0435\u043D\u043E\u0442\u0438\u043C",ytterbium:"\u0418\u0442\u0442\u0435\u0440\u0431\u0438\u0439",yttriaite:"\u0418\u0442\u0442\u0440\u0438\u0430\u0438\u0442",yttrialite:"\u0418\u0442\u0442\u0440\u0438\u0430\u043B\u0438\u0442",yttrium:"\u0418\u0442\u0442\u0440\u0438\u0439",yttrocerite:"\u0418\u0442\u0442\u0440\u043E\u0446\u0435\u0440\u0438\u0442",zeron100:"\u0417\u0435\u0440\u043E\u043D-100",zeroresistancetoelectricalandquantumflowregardlessoftemperature:"\u041D\u0443\u043B\u0435\u0432\u043E\u0435 \u0441\u043E\u043F\u0440\u043E\u0442\u0438\u0432\u043B\u0435\u043D\u0438\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u043E\u043C\u0443 \u0438 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u043E\u043C\u0443 \u043F\u043E\u0442\u043E\u043A\u0443, \u043D\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E \u043E\u0442 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u044B",zimbabweite:"\u0417\u0438\u043C\u0431\u0430\u0431\u0432\u0435\u0438\u0442",zinc:"\u0426\u0438\u043D\u043A",zircon:"\u0426\u0438\u0440\u043A\u043E\u043D",zirconium:"\u0426\u0438\u0440\u043A\u043E\u043D\u0438\u0439",zirconiumcarbide:"\u041A\u0430\u0440\u0431\u0438\u0434 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u044F",zirconiumtetrafluoride:"\u0422\u0435\u0442\u0440\u0430\u0444\u0442\u043E\u0440\u0438\u0434 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u044F",zirconolite:"\u0426\u0438\u0440\u043A\u043E\u043D\u043E\u043B\u0438\u0442",zircophyllite:"\u0426\u0438\u0440\u043A\u043E\u0444\u0438\u043B\u043B\u0438\u0442",zirkelite:"\u0426\u0438\u0440\u043A\u0435\u043B\u0438\u0442",zrcl4:"\u0422\u0435\u0442\u0440\u0430\u0445\u043B\u043E\u0440\u0438\u0434 \u0446\u0438\u0440\u043A\u043E\u043D\u0438\u044F"},names:{"1voltsolarpanel":"1-\u0432\u043E\u043B\u044C\u0442\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",absolutebaryonicperfectionpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0441\u0443\u0431\u0430\u0442\u043E\u043C\u043D\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0432\u043E\u0434\u044B",acceleratedbiologicalcoordinator:"\u0423\u0441\u043A\u043E\u0440\u0435\u043D\u043D\u044B\u0439 \u0431\u0438\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u043E\u0440",activetransformer:"\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u043E\u0440\u043C\u0430\u0442\u043E\u0440",adeptmagicenergyabsorber:"\u041F\u043E\u0433\u043B\u043E\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u0430\u0434\u0435\u043F\u0442\u043E\u0432",adeptmagicenergyconverter:"\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u0430\u0434\u0435\u043F\u0442\u043E\u0432",advancedalloysmelter:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C",advancedalloysmelterii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C II",advancedalloysmelteriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C III",advancedalloysmelteriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C IV",advancedamplifabricator:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440",advancedamplifabricatorii:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440 II",advancedamplifabricatoriii:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440 III",advancedamplifabricatoriv:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440 IV",advancedarcfurnace:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",advancedarcfurnaceii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",advancedarcfurnaceiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C III",advancedarcfurnaceiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C IV",advancedassemblingmachine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",advancedassemblingmachineii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",advancedassemblingmachineiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 III",advancedassemblingmachineiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 IV",advancedautoclave:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",advancedautoclaveii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 II",advancedautoclaveiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 III",advancedautoclaveiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 IV",advancedbendingmachine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",advancedbendingmachineii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",advancedbendingmachineiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A III",advancedbendingmachineiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A IV",advancedbrewery:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",advancedbreweryii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",advancedbreweryiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 III",advancedbreweryiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 IV",advancedcanningmachine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",advancedcanningmachineii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C II",advancedcanningmachineiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C III",advancedcanningmachineiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C IV",advancedcentrifuge:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",advancedchemicalbath:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430",advancedchemicalbathii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430 II",advancedchemicalbathiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430 III",advancedchemicalbathiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430 IV",advancedchemicalreactor:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",advancedchemicalreactorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 II",advancedchemicalreactoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 III",advancedchemicalreactoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 IV",advancedcircuitassembler:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C",advancedcircuitassemblerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C II",advancedcircuitassembleriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C III",advancedcircuitassembleriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C IV",advancedcombustiongenerator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F",advancedcompressor:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",advancedcompressorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440 II",advancedcompressoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440 III",advancedconcretebackfiller:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0431\u0435\u0442\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",advancedcuttingmachine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",advancedcuttingmachineii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",advancedcuttingmachineiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A III",advancedcuttingmachineiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A IV",advanceddataaccesshatch:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0434\u0430\u043D\u043D\u044B\u043C",advanceddistillery:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440",advanceddistilleryii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440 II",advanceddistilleryiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440 III",advanceddistilleryiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440 IV",advancedelectricfurnace:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C",advancedelectricfurnaceii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C II",advancedelectricfurnaceiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C III",advancedelectricjukebox:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C",advancedelectricjukeboxii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C II",advancedelectricoven:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0445\u043E\u0432\u043A\u0430",advancedelectricovenii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0445\u043E\u0432\u043A\u0430 II",advancedelectricoveniii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0445\u043E\u0432\u043A\u0430 III",advancedelectricoveniv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0445\u043E\u0432\u043A\u0430 IV",advancedelectrolyzer:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440",advancedelectrolyzerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440 II",advancedelectrolyzeriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440 III",advancedelectromagneticseparator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",advancedelectromagneticseparatorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 II",advancedelectromagneticseparatoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 III",advancedelectromagneticseparatoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 IV",advancedextractor:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",advancedextractorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",advancedextractoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 III",advancedextruder:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440",advancedextruderii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440 II",advancedextruderiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440 III",advancedextruderiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440 IV",advancedfermenter:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440",advancedfermenterii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 II",advancedfermenteriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 III",advancedfermenteriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 IV",advancedfluidcanner:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",advancedfluidextractor:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",advancedfluidextractorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",advancedfluidextractoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 III",advancedfluidextractoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 IV",advancedfluidheater:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",advancedfluidheaterii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C II",advancedfluidheateriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C III",advancedfluidheateriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C IV",advancedfluidsolidifier:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",advancedfluidsolidifierii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C II",advancedfluidsolidifieriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C III",advancedfluidsolidifieriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C IV",advancedforgehammer:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",advancedforgehammerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 II",advancedforgehammeriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 III",advancedforgehammeriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 IV",advancedformingpress:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441",advancedformingpressii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441 II",advancedformingpressiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441 III",advancedformingpressiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441 IV",advancedgasturbine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",advancedlathe:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",advancedlatheii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",advancedlatheiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A III",advancedlatheiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A IV",advancedmacerator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",advancedmaglevpylon:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0438\u043B\u043E\u043D \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u043E\u0439 \u043B\u0435\u0432\u0438\u0442\u0430\u0446\u0438\u0438",advancedmaglevpylonii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0438\u043B\u043E\u043D \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u043E\u0439 \u043B\u0435\u0432\u0438\u0442\u0430\u0446\u0438\u0438 II",advancedmaglevpyloniii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0438\u043B\u043E\u043D \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u043E\u0439 \u043B\u0435\u0432\u0438\u0442\u0430\u0446\u0438\u0438 III",advancedmassfabricator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",advancedmassfabricatorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 II",advancedmassfabricatoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 III",advancedmassfabricatoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 IV",advancedmicrowave:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",advancedmicrowaveii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",advancedmicrowaveiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C III",advancedmicrowaveiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C IV",advancedminer:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0448\u0430\u0445\u0442\u0451\u0440",advancedmixer:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",advancedmixerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440 II",advancedmixeriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440 III",advancedmixeriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440 IV",advancedmonsterrepellator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432",advancedmonsterrepellatorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 II",advancedmonsterrepellatoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 III",advancedmonsterrepellatoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 IV",advancedmonsterrepellatorv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 V",advancedmonsterrepellatorvi:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 VI",advancedmonsterrepellatorvii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432 VII",advancedorewashingplant:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",advancedorewashingplantii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",advancedorewashingplantiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 III",advancedpackager:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",advancedpackagerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A II",advancedpackageriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A III",advancedplasmaarcfurnace:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",advancedplasmaarcfurnaceii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",advancedplasmaarcfurnaceiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C III",advancedplasmaarcfurnaceiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C IV",advancedpolarizer:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440",advancedpolarizerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440 II",advancedpolarizeriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440 III",advancedpolarizeriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440 IV",advancedprecisionlaserengraver:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A",advancedprecisionlaserengraverii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A II",advancedprecisionlaserengraveriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A III",advancedprecisionlaserengraveriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A IV",advancedprinter:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",advancedprinterii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 II",advancedprinteriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 III",advancedprinteriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 IV",advancedprinterv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 V",advancedprintervi:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 VI",advancedprintervii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440 VII",advancedpump:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u043E\u043C\u043F\u0430",advancedrecycler:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",advancedrecyclerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 II",advancedrecycleriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 III",advancedreplicator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440",advancedreplicatorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440 II",advancedreplicatoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440 III",advancedreplicatoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440 IV",advancedscanner:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440",advancedscannerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440 II",advancedscanneriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440 III",advancedscanneriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440 IV",advancedseismicprospectorev:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0439\u0441\u043C\u043E\u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A EV",advancedseismicprospectorhv:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0439\u0441\u043C\u043E\u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A HV",advancedseismicprospectorlv:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0439\u0441\u043C\u043E\u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A LV",advancedseismicprospectormv:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u0439\u0441\u043C\u043E\u0440\u0430\u0437\u0432\u0435\u0434\u0447\u0438\u043A MV",advancedsiftingmachine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C",advancedsiftingmachineii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C II",advancedsiftingmachineiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C III",advancedsiftingmachineiv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C IV",advancedsolarboiler:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",advancedsolarpanel:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",advancedsolarpanelii:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C II",advancedsolarpaneliii:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C III",advancedsolarpaneliv:"\u0423\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C IV",advancedsteamturbine:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u043F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",advancedthermalcentrifuge:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",advancedthermalcentrifugeii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430 II",advancedthermalcentrifugeiii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430 III",advancedunpackager:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",advancedunpackagerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A II",advancedunpackageriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A III",advancedwiremill:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D",advancedwiremillii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D II",advancedwiremilliii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D III",advancedwiremilliv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D IV",advancedworldaccelerator:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C",advancedworldacceleratorii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C II",advancedworldacceleratoriii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C III",advancedworldacceleratoriv:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C IV",algaefarm:"\u0424\u0435\u0440\u043C\u0430 \u0432\u043E\u0434\u043E\u0440\u043E\u0441\u043B\u0435\u0439",antimatterhatch:"\u0428\u043B\u044E\u0437 \u0430\u043D\u0442\u0438\u043C\u0430\u0442\u0435\u0440\u0438\u0438",assemblyline:"\u0421\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F",automaintenancehatch:"\u041F\u043E\u043B\u0443-\u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043B\u044E\u043A \u0442\u0435\u0445\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F",automatabledataaccesshatch:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0434\u0430\u043D\u043D\u044B\u043C",autotapingmaintenancehatch:"\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043B\u044E\u043A \u0442\u0435\u0445\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F",basicalloysmelter:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C",basicamplifabricator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440",basicarcfurnace:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",basicassemblingmachine:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",basicautoclave:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",basicbendingmachine:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",basicbrewery:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",basiccanningmachine:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",basiccentrifuge:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",basicchemicalbath:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430",basicchemicalreactor:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",basiccircuitassembler:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C",basiccombustiongenerator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F",basiccompressor:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",basiccuttingmachine:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",basicdistillery:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440",basicelectricfurnace:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C",basicelectricjukebox:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0438\u0433\u0440\u044B\u0432\u0430\u0442\u0435\u043B\u044C",basicelectricoven:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0445\u043E\u0432\u043A\u0430",basicelectrolyzer:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440",basicelectromagneticseparator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",basicextractor:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",basicextruder:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440",basicfermenter:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440",basicfluidcanner:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",basicfluidextractor:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",basicfluidheater:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",basicfluidsolidifier:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",basicforgehammer:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",basicformingpress:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441",basicgasturbine:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",basiclathe:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",basicmacerator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",basicmassfabricator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",basicmicrowave:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",basicminer:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0448\u0430\u0445\u0442\u0451\u0440",basicmixer:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",basicmonsterrepellator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043E\u0442\u043F\u0443\u0433\u0438\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u043D\u0441\u0442\u0440\u043E\u0432",basicorewashingplant:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",basicpackager:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0443\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",basicplasmaarcfurnace:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",basicpolarizer:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440",basicprecisionlaserengraver:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A",basicprinter:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0440\u0438\u043D\u0442\u0435\u0440",basicpump:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u043E\u043C\u043F\u0430",basicrecycler:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",basicreplicator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440",basicscanner:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440",basicsiftingmachine:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C",basicsolarpanel:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",basicsteamturbine:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u043F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",basicthermalcentrifuge:"\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",basicunpackager:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u0440\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",basicwiremill:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D",basicworldaccelerator:"\u0411\u0430\u0437\u043E\u0432\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C",beamcrafter:"\u041B\u0443\u0447\u0435\u0432\u043E\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A",beammirror:"\u041B\u0443\u0447\u0435\u0432\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E",beamsplitter:"\u041B\u0443\u0447\u0435\u0432\u043E\u0439 \u0440\u0430\u0437\u0432\u0435\u0442\u0432\u0438\u0442\u0435\u043B\u044C",beamstabilizer:"\u041B\u0443\u0447\u0435\u0432\u043E\u0439 \u0441\u0442\u0430\u0431\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",bigbarrelbrewery:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",biochamber:"\u0411\u0438\u043E\u043A\u0430\u043C\u0435\u0440\u0430",blackholeutilityhatch:"\u0421\u0435\u0440\u0432\u0438\u0441\u043D\u044B\u0439 \u043B\u044E\u043A \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B",blendomatic9001:"\u0420\u0443\u0434-\u043E-\u0414\u0440\u043E\u0431 9001",boldarnator:"\u0411\u043E\u043B\u0434\u0430\u0440\u043D\u0430\u0442\u043E\u0440",boseeinsteincondensatehatch:"\u0428\u043B\u044E\u0437 \u043A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u0430 \u0411\u043E\u0437\u0435-\u042D\u0439\u043D\u0448\u0442\u0435\u0439\u043D\u0430",boxinator:"\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",brickedblastfurnace:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u0430\u044F \u0434\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0447\u044C",brickedbronzehull:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441",brickedcastironhull:"\u0427\u0443\u0433\u0443\u043D\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441",bronzehull:"\u0411\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u043A\u043E\u0440\u043F\u0443\u0441",bulkcatalysthousing:"\u041E\u0431\u044A\u0451\u043C\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043A\u0430\u0442\u0430\u043B\u0438\u0437\u0430\u0442\u043E\u0440\u043E\u0432",capacitorhatch:"\u041A\u043E\u043D\u0434\u0435\u043D\u0441\u0430\u0442\u043E\u0440\u043D\u044B\u0439 \u0448\u043B\u044E\u0437",charcoalpileigniter:"\u0417\u0430\u043F\u0430\u043B \u0443\u0433\u043E\u043B\u044C\u043D\u043E\u0439 \u044F\u043C\u044B",circuitassemblyline:"\u0421\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C",clarifierpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0433\u0440\u0443\u0431\u043E\u0439 \u0444\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u0438 \u0432\u043E\u0434\u044B",cleanroomcontroller:"\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u043B\u0435\u0440 \u0447\u0438\u0441\u0442\u043E\u0439 \u043A\u043E\u043C\u043D\u0430\u0442\u044B",cloudcomputationclienthatch:"\u041A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u0448\u043B\u044E\u0437 \u043E\u0431\u043B\u0430\u0447\u043D\u044B\u0445 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0439",cloudcomputationserverhatch:"\u0421\u0435\u0440\u0432\u0435\u0440\u043D\u044B\u0439 \u0448\u043B\u044E\u0437 \u043E\u0431\u043B\u0430\u0447\u043D\u044B\u0445 \u0432\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0439",cokeoven:"\u041A\u043E\u043A\u0441\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",cokeovenhatch:"\u041B\u044E\u043A \u043A\u043E\u043A\u0441\u043E\u0432\u043E\u0439 \u043F\u0435\u0447\u0438",componentassemblyline:"\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F",computerrack:"\u0421\u0442\u043E\u0439\u043A\u0430 \u043A\u0432\u0430\u043D\u0442\u043E\u0432\u043E\u0433\u043E \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0430",concretebackfiller:"\u0411\u0435\u0442\u043E\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",coolanttower:"\u0413\u0440\u0430\u0434\u0438\u0440\u043D\u044F",coolingtower:"\u0413\u0440\u0430\u0434\u0438\u0440\u043D\u044F",craftinginputbufferme:"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u0431\u0443\u0444\u0435\u0440 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F (\u041C\u042D)",craftinginputbusme:"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F (\u041C\u042D)",craftinginputproxy:"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u043F\u0440\u043E\u043A\u0441\u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F",cryogenicfreezer:"\u041A\u0440\u0438\u043E\u0433\u0435\u043D\u043D\u044B\u0439 \u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u043A",dataaccesshatch:"\u0428\u043B\u044E\u0437 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u043A \u0434\u0430\u043D\u043D\u044B\u043C",databank:"\u0411\u0430\u043D\u043A \u0434\u0430\u043D\u043D\u044B\u0445",debugdatahatch:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u043E\u043F\u0442\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u044A\u0451\u043C",debugfluidtank:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440",debuginputbus:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0432\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A",debuginputhatch:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0432\u0445\u043E\u0434\u043D\u043E\u0439 \u0448\u043B\u044E\u0437",debugpollutiongenerator:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u0433\u0440\u044F\u0437\u043D\u0435\u043D\u0438\u044F",debugpowergenerator:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",debugstructurewriter:"\u041E\u0442\u043B\u0430\u0434\u043E\u0447\u043D\u044B\u0439 \u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0437\u0430\u043F\u0438\u0441\u0438 \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440",decaywarehouse:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0434\u0438\u043E\u0438\u0437\u043E\u0442\u043E\u043F\u043D\u043E\u0435 \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435",deepearthheatingpump:"\u0413\u0435\u043E\u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u043D\u0430\u0441\u043E\u0441",degassercontrolhatch:"\u041B\u044E\u043A \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0434\u0435\u0433\u0430\u0437\u0430\u0442\u043E\u0440\u043E\u043C",density2:"\u041F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u044C^2",dimensionallytranscendentplasmaforge:"\u041F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u0435\u043D\u043D\u043E-\u0442\u0440\u0430\u043D\u0441\u0446\u0435\u043D\u0434\u0435\u043D\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u043A\u0443\u0437\u043D\u0438\u0446\u0430",dissectionapparatus:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",distillationtower:"\u0420\u0435\u043A\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043D\u0430",dronecentre:"\u0414\u0440\u043E\u043D-\u0441\u0442\u0430\u043D\u0446\u0438\u044F",dronedownlinkmodule:"\u041C\u043E\u0434\u0443\u043B\u044F \u0441\u0432\u044F\u0437\u0438 \u0441 \u0434\u0440\u043E\u043D\u043E\u043C",electricblastfurnace:"\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0447\u044C",electricimplosioncompressor:"\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043C\u043F\u043B\u043E\u0437\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",electrodedetectorhatch:"\u041B\u044E\u043A \u0434\u0435\u0442\u0435\u043A\u0442\u043E\u0440\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0434\u043E\u0432",electrodehatch:"\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0434\u043E\u0432",electromagnethousing:"\u041E\u0442\u0441\u0435\u043A \u0434\u043B\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043E\u0432",electronexcitementprocessor:"\u042D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C",elitealloysmelter:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C",elitealloysmelterii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C II",eliteamplifabricator:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440",eliteamplifabricatorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0444\u0430\u0431\u0440\u0438\u043A\u0430\u0442\u043E\u0440 II",elitearcfurnace:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",elitearcfurnaceii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",eliteassemblingmachine:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",eliteassemblingmachineii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",eliteautoclave:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",eliteautoclaveii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 II",elitebendingmachine:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",elitebendingmachineii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",elitebrewery:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",elitebreweryii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",elitecanningmachine:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",elitecanningmachineii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C II",elitecentrifuge:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",elitecentrifugeii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430 II",elitechemicalbath:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430",elitechemicalbathii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430 II",elitechemicalreactor:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",elitechemicalreactorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440 II",elitecircuitassembler:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C V",elitecircuitassemblerii:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C VI",elitecompressor:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",elitecompressorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440 II",elitecuttingmachine:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",elitecuttingmachineii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",elitedistillery:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440",elitedistilleryii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0434\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440 II",eliteelectricfurnace:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C",eliteelectricfurnaceii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043F\u0435\u0447\u044C II",eliteelectrolyzer:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440",eliteelectrolyzerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440 II",eliteelectromagneticseparator:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",eliteelectromagneticseparatorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u0430\u0433\u043D\u0438\u0442\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 II",eliteextractor:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",eliteextractorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",eliteextruder:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440",eliteextruderii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440 II",elitefermenter:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440",elitefermenterii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 II",elitefluidcanner:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",elitefluidcannerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C II",elitefluidextractor:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",elitefluidextractorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",elitefluidheater:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",elitefluidheaterii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C II",elitefluidsolidifier:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",elitefluidsolidifierii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C II",eliteforgehammer:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",eliteforgehammerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 II",eliteformingpress:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441",eliteformingpressii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441 II",elitelathe:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",elitelatheii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",elitemassfabricator:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",elitemassfabricatorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 II",elitemicrowave:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",elitemicrowaveii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",elitemixer:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",elitemixerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440 II",eliteorewashingplant:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",eliteorewashingplantii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",eliteplasmaarcfurnace:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",eliteplasmaarcfurnaceii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C II",elitepolarizer:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440",elitepolarizerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u043E\u043B\u044F\u0440\u0438\u0437\u0430\u0442\u043E\u0440 II",eliteprecisionlaserengraver:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A",eliteprecisionlaserengraverii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0442\u043E\u0447\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A II",elitepulverizer:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",elitepulverizerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C II",eliterecycler:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",eliterecyclerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 II",elitereplicator:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440",elitereplicatorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0440\u0435\u043F\u043B\u0438\u043A\u0430\u0442\u043E\u0440 II",elitescanner:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440",elitescannerii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u0441\u043A\u0430\u043D\u0435\u0440 II",elitesiftingmachine:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C",elitesiftingmachineii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C II",elitesolarpanel:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",elitesolarpanelii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C II",elitethermalcentrifuge:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",elitethermalcentrifugeii:"\u042D\u043B\u0438\u0442\u043D\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430 II",elitewiremill:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D",elitewiremillii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D II",eliteworldaccelerator:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C",eliteworldacceleratorii:"\u042D\u043B\u0438\u0442\u043D\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C II",endothermicfridge:"\u042D\u043D\u0434\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A",energyinfuser:"\u041D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C \u044D\u043D\u0435\u0440\u0433\u0438\u0438",entropicprocessor:"\u042D\u043D\u0442\u0440\u043E\u043F\u0438\u0439\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0440",epicalloyintegrator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 \u0441\u043F\u043B\u0430\u0432\u043E\u0432",epicalloyintegratorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 \u0441\u043F\u043B\u0430\u0432\u043E\u0432 II",epicalloyintegratoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 \u0441\u043F\u043B\u0430\u0432\u043E\u0432 III",epicalloyintegratoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 \u0441\u043F\u043B\u0430\u0432\u043E\u0432 IV",epicamplicreator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043C\u043F\u043B\u0438\u0440\u0435\u0430\u043A\u0442\u043E\u0440",epicamplicreatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043C\u043F\u043B\u0438\u0440\u0435\u0430\u043A\u0442\u043E\u0440 II",epicamplicreatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043C\u043F\u043B\u0438\u0440\u0435\u0430\u043A\u0442\u043E\u0440 III",epicamplicreatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u043C\u043F\u043B\u0438\u0440\u0435\u0430\u043A\u0442\u043E\u0440 IV",epicassemblyconstructor:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0431\u043E\u0440\u043A\u0438",epicassemblyconstructorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0431\u043E\u0440\u043A\u0438 II",epicassemblyconstructoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0431\u043E\u0440\u043A\u0438 III",epicassemblyconstructoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0431\u043E\u0440\u043A\u0438 IV",epicatomstimulator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440",epicatomstimulatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 II",epicatomstimulatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 III",epicatomstimulatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 IV",epicbendingunit:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A",epicbendingunitii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A II",epicbendingunitiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A III",epicbendingunitiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A IV",epicbrewrusher:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",epicbrewrusherii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",epicbrewrusheriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 III",epicbrewrusheriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 IV",epiccanoperator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",epiccanoperatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C II",epiccanoperatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C III",epiccanoperatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C IV",epicchemicaldunktron:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0430\u043D\u043A\u0442\u0440\u043E\u043D",epicchemicaldunktronii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0430\u043D\u043A\u0442\u0440\u043E\u043D II",epicchemicaldunktroniii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0430\u043D\u043A\u0442\u0440\u043E\u043D III",epicchemicaldunktroniv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0430\u043D\u043A\u0442\u0440\u043E\u043D IV",epicchemicalperformer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0444\u043E\u0440\u0430\u0442\u043E\u0440",epicchemicalperformerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0444\u043E\u0440\u0430\u0442\u043E\u0440 II",epicchemicalperformeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0444\u043E\u0440\u0430\u0442\u043E\u0440 III",epicchemicalperformeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0444\u043E\u0440\u0430\u0442\u043E\u0440 IV",epiccircuitarchitect:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C",epiccircuitarchitectii:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C II",epiccircuitarchitectiii:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C III",epiccircuitarchitectiv:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C IV",epiccircuitarchitectv:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C V",epicelectronmicroscope:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F",epicelectronmicroscopeii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F II",epicelectronmicroscopeiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F III",epicelectronmicroscopeiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F IV",epicelementalcomposer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440",epicelementalcomposerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 II",epicelementalcomposeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 III",epicelementalcomposeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 IV",epicexactphotoncannon:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0442\u043E\u043D\u043D\u0430\u044F \u043F\u0443\u0448\u043A\u0430",epicexactphotoncannonii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0442\u043E\u043D\u043D\u0430\u044F \u043F\u0443\u0448\u043A\u0430 II",epicexactphotoncannoniii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0442\u043E\u043D\u043D\u0430\u044F \u043F\u0443\u0448\u043A\u0430 III",epicexactphotoncannoniv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0442\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0442\u043E\u043D\u043D\u0430\u044F \u043F\u0443\u0448\u043A\u0430 IV",epicexistenceinitiator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",epicexistenceinitiatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 II",epicexistenceinitiatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 III",epicexistenceinitiatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 IV",epicextractinator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",epicextractinatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",epicextractinatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 III",epicextractinatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 IV",epicfermentationhastener:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440",epicfermentationhastenerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 II",epicfermentationhasteneriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 III",epicfermentationhasteneriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440 IV",epicfirecyclone:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D",epicfirecycloneii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D II",epicfirecycloneiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D III",epicfirecycloneiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D IV",epicfluidpetrificator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",epicfluidpetrificatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C II",epicfluidpetrificatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C III",epicfluidpetrificatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C IV",epicfractionsplitter:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u0439",epicfractionsplitterii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u0439 II",epicfractionsplitteriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u0439 III",epicfractionsplitteriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u0439 IV",epicheatinfuser:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",epicheatinfuserii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C II",epicheatinfuseriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C III",epicheatinfuseriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C IV",epicimpactmodulator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",epicimpactmodulatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 II",epicimpactmodulatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 III",epicimpactmodulatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 IV",epicionizer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440",epicionizerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440 II",epicionizeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440 III",epicionizeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440 IV",epicliquefyingsucker:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",epicliquefyingsuckerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 II",epicliquefyingsuckeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 III",epicliquefyingsuckeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 IV",epicliquidcanactuator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",epicliquidcanactuatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C II",epicliquidcanactuatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C III",epicliquidcanactuatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C IV",epicmagnetarseparator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u0433\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",epicmagnetarseparatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u0433\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 II",epicmagnetarseparatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u0433\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 III",epicmagnetarseparatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043C\u0430\u0433\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440 IV",epicmagnetisminducer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0434\u0443\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C\u0430",epicmagnetisminducerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0434\u0443\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C\u0430 II",epicmagnetisminduceriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0434\u0443\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C\u0430 III",epicmagnetisminduceriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u043D\u0434\u0443\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C\u0430 IV",epicmatterconstrictor:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0436\u0438\u043C\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0438",epicmatterconstrictorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0436\u0438\u043C\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0438 II",epicmatterconstrictoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0436\u0438\u043C\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0438 III",epicmatterconstrictoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0441\u0436\u0438\u043C\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0438 IV",epicmatterorganizer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",epicmatterorganizerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 II",epicmatterorganizeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 III",epicmatterorganizeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438 IV",epicmoleculartornado:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0442\u043E\u0440\u043D\u0430\u0434\u043E",epicmoleculartornadoii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0442\u043E\u0440\u043D\u0430\u0434\u043E II",epicmoleculartornadoiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0442\u043E\u0440\u043D\u0430\u0434\u043E III",epicmoleculartornadoiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0442\u043E\u0440\u043D\u0430\u0434\u043E IV",epicobjectdivider:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",epicobjectdividerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 II",epicobjectdivideriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 III",epicobjectdivideriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432 IV",epicorewashingmachine:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",epicorewashingmachineii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 II",epicorewashingmachineiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 III",epicorewashingmachineiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 IV",epicplasmadischargeheater:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",epicplasmadischargeheaterii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C II",epicplasmadischargeheateriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C III",epicplasmadischargeheateriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C IV",epicpressurecooker:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",epicpressurecookerii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 II",epicpressurecookeriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 III",epicpressurecookeriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432 IV",epicpulsationfilter:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440",epicpulsationfilterii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 II",epicpulsationfilteriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 III",epicpulsationfilteriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440 IV",epicscrapomatic:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",epicscrapomaticii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 II",epicscrapomaticiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 III",epicscrapomaticiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440 IV",epicshapedriver:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440",epicshapedriverii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 II",epicshapedriveriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 III",epicshapedriveriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440 IV",epicshapeeliminator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",epicshapeeliminatorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C II",epicshapeeliminatoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C III",epicshapeeliminatoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C IV",epicshortcircuitheater:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u044F",epicshortcircuitheaterii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u044F II",epicshortcircuitheateriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C III",epicshortcircuitheateriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C IV",epicsurfaceshifter:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C",epicsurfaceshifterii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C II",epicsurfaceshifteriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C III",epicsurfaceshifteriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C IV",epicturnomatic:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",epicturnomaticii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A II",epicturnomaticiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A III",epicturnomaticiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A IV",epicufoengine:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u041D\u041B\u041E",epicufoengineii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u041D\u041B\u041E II",epicufoengineiii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u041D\u041B\u041E III",epicufoengineiv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u041D\u041B\u041E IV",epicwiretransfigurator:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043E\u0440",epicwiretransfiguratorii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043E\u0440 II",epicwiretransfiguratoriii:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043E\u0440 III",epicwiretransfiguratoriv:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043E\u0440 IV",evmicrowaveenergytransmitter:"EV \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",exofoundry:"\u042D\u043A\u0437\u043E-\u043B\u0438\u0442\u0435\u0439\u043D\u044B\u0439 \u0437\u0430\u0432\u043E\u0434",exothermichearth:"\u042D\u043A\u0437\u043E\u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0433\u043E\u0440\u043D",extendedmegaultimatebuckconverter:"UXV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",extremecombustionengine:"\u042D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F",extremeheatexchanger:"\u042D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0442\u0435\u043F\u043B\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A",extremelyultimatebuckconverter:"UEV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",extrememusicmixer:"\u042D\u043A\u0441\u0442\u0440\u0435\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0443\u0437\u044B\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u043C\u0438\u043A\u0448\u0435\u0440",extremetemperaturefluctuationpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0446\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0442\u0435\u0440\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0432\u043E\u0434\u044B",eyeofharmony:"\u041E\u043A\u043E \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0438",filteredbeamoutputhatch:"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A \u0444\u0438\u043B\u044C\u0442\u0440\u0443\u0435\u043C\u043E\u0433\u043E \u043F\u0443\u0447\u043A\u0430",flocculationpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0444\u043B\u043E\u043A\u043A\u0443\u043B\u044F\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0432\u043E\u0434\u044B",flotationcellregulator:"\u0420\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440 \u0444\u043B\u043E\u0442\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u043A\u0430\u043C\u0435\u0440\u044B",fluiddrillingrig:"\u0411\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0435\u0439",fluiddrillingrigii:"\u0411\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0435\u0439 II",fluiddrillingrigiii:"\u0411\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0435\u0439 III",fluiddrillingrigiv:"\u0411\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0435\u0439 IV",fluidshaper:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",forgeofthegods:"\u041A\u0443\u0437\u043D\u0438\u0446\u0430 \u0411\u043E\u0433\u043E\u0432",fullboardimmersiondevice:"\u0423\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u043E \u0434\u043B\u044F \u043F\u043E\u0433\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0439 \u043F\u043B\u0430\u0442\u044B",giantoutputhatch:"\u0413\u0438\u0433\u0430\u043D\u0442\u0441\u043A\u0438\u0439 \u0432\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0448\u043B\u044E\u0437",goodminer:"\u0425\u043E\u0440\u043E\u0448\u0438\u0439 \u0448\u0430\u0445\u0442\u0451\u0440",goodpump:"\u0425\u043E\u0440\u043E\u0448\u0430\u044F \u043F\u043E\u043C\u043F\u0430",grandmastermagicenergyabsorber:"\u041F\u043E\u0433\u043B\u043E\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u0433\u0440\u043E\u0441\u0441\u043C\u0435\u0439\u0441\u0442\u0435\u0440\u043E\u0432",heatsensorhatch:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u0434\u0430\u0442\u0447\u0438\u043A",helioflarepowerforge:"\u0413\u0435\u043B\u0438\u043E\u0432\u0441\u043F\u044B\u0432\u0448\u043A\u043E\u0432\u0430\u044F \u043A\u0443\u0437\u043D\u044F",heliofluxmeltingcore:"\u0413\u0435\u043B\u0438\u043E\u043F\u043E\u0442\u043E\u0447\u043D\u043E\u0435 \u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u044F\u0434\u0440\u043E",heliofusionexoticizer:"\u042D\u043A\u0437\u043E\u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u0433\u0435\u043B\u0438\u043E\u043F\u043E\u0442\u043E\u043A\u0430",heliothermalplasmafabricator:"\u0413\u0435\u043B\u0438\u043E\u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C \u043F\u043B\u0430\u0437\u043C\u044B",highenergylaserpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0432\u044B\u0441\u043E\u043A\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u043E\u0439 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0432\u043E\u0434\u044B",highlyultimatebuckconverter:"UHV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",highpressuresteamalloysmelter:"\u0421\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",highpressuresteamcompressor:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",highpressuresteamextractor:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",highpressuresteamforgehammer:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442 \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",highpressuresteamfurnace:"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",highpressuresteammacerator:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C \u0432\u044B\u0441\u043E\u043A\u043E\u0433\u043E \u0434\u0430\u0432\u043B\u0435\u043D\u0438\u044F",hotisostaticpressurizationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0433\u043E\u0440\u044F\u0447\u0435\u0439 \u0438\u0437\u043E\u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u043E\u043F\u0440\u0435\u0441\u0441\u043E\u0432\u043A\u0438",humongousinputhatch:"\u041E\u0433\u0440\u043E\u043C\u043D\u044B\u0439 \u0432\u0445\u043E\u0434\u043D\u043E\u0439 \u0448\u043B\u044E\u0437",hvmicrowaveenergytransmitter:"HV \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",hyperintensitylaserengraver:"\u0421\u0432\u0435\u0440\u0445-\u0438\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u044B\u0439 \u043B\u0430\u0437\u0435\u0440\u043D\u044B\u0439 \u0433\u0440\u0430\u0432\u0438\u0440\u043E\u0432\u0449\u0438\u043A",implosioncompressor:"\u0418\u043C\u043F\u043B\u043E\u0437\u0438\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",industrialarcfurnace:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0434\u0443\u0433\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",industrialautoclave:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",industrialbendingmachine:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",industrialcentrifuge:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",industrialchemicalbath:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0432\u0430\u043D\u043D\u0430",industrialcokeoven:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u043A\u043E\u043A\u0441\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",industrialcuttingfactory:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0440\u0435\u0436\u0443\u0449\u0438\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",industrialelectrolyzer:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440",industrialextrusionmachine:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0443\u0434\u0435\u0440",industrialformingpress:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u043E\u0432\u043E\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0441\u0441",industrialmacerationstack:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",industrialmixingmachine:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0441\u0435\u0440",industrialprecisionlathe:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u0435\u0446\u0438\u0437\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",industrialsledgehammer:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",industrialwirefactory:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0444\u0430\u0431\u0440\u0438\u043A\u0430 \u043F\u0440\u043E\u0432\u043E\u0434\u043E\u0432",infinitefluiddrillingrig:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0435\u0439",infiniteitemchest:"\u0411\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u044B\u0439 \u0441\u0443\u043D\u0434\u0443\u043A",insanebuckconverter:"IV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",insanelyultimatebuckconverter:"UIV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",instantfluidcanner:"\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",integratedorefactory:"\u0424\u0430\u0431\u0440\u0438\u043A\u0430 \u043F\u043E\u043B\u043D\u043E\u0439 \u0440\u0443\u0434\u043E\u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0438",ivmicrowaveenergytransmitter:"IV \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",largebronzeboiler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u0440\u043E\u043D\u0437\u043E\u0432\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",largechemicalreactor:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",largecoalboiler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",largecombustionengine:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F",largeelectriccompressor:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",largefluidextractor:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",largegasturbine:"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",largehadroncollider:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0430\u0434\u0440\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043B\u043B\u0430\u0439\u0434\u0435\u0440",largeheatexchanger:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0442\u0435\u043F\u043B\u043E\u043E\u0431\u043C\u0435\u043D\u043D\u0438\u043A",largemolecularassembler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A",largenaquadahreactor:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",largeneutralizationengine:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043D\u0435\u0439\u0442\u0440\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440",largeplasmaturbine:"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",largesifter:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043F\u0440\u043E\u0441\u0435\u0438\u0432\u0430\u0442\u0435\u043B\u044C",largesteamturbine:"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u043F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",largesteelboiler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",largesupercriticalsteamturbine:"\u0411\u043E\u043B\u044C\u0448\u0430\u044F \u0441\u0432\u0435\u0440\u0445\u043A\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",largethermalrefinery:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u0430\u044F \u0442\u0435\u0440\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",largetitaniumboiler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0442\u0438\u0442\u0430\u043D\u043E\u0432\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",largetungstensteelboiler:"\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u0431\u043E\u0439\u043B\u0435\u0440 \u0438\u0437 \u0432\u043E\u043B\u044C\u0444\u0440\u0430\u043C\u043E\u0432\u043E\u0439 \u0441\u0442\u0430\u043B\u0438",laservacuummirror:"\u041B\u0430\u0437\u0435\u0440\u043D\u043E\u0435 \u0432\u0430\u043A\u0443\u0443\u043C\u043D\u043E\u0435 \u0437\u0435\u0440\u043A\u0430\u043B\u043E",laservacuumpipe:"\u041B\u0430\u0437\u0435\u0440\u043D\u0430\u044F \u0432\u0430\u043A\u0443\u0443\u043C\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430",latex:"\u041B.\u0410.\u0422.\u042D.\u041A.\u0421.",legendarycircuitarchitect:"MAX \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C",legendarylasersourcehatch:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0439 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A \u043B\u0430\u0437\u0435\u0440\u0430",legendarylasertargethatch:"\u041B\u0435\u0433\u0435\u043D\u0434\u0430\u0440\u043D\u044B\u0439 \u043F\u0440\u0438\u0451\u043C\u043D\u0438\u043A \u043B\u0430\u0437\u0435\u0440\u0430",lenshousing:"\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043B\u0438\u043D\u0437",lensindicatorhatch:"\u0418\u043D\u0434\u0438\u043A\u0430\u0442\u043E\u0440 \u043B\u0438\u043D\u0437",lightningrod:"\u041C\u043E\u043B\u043D\u0438\u0435\u043E\u0442\u0432\u043E\u0434",lightningrodii:"\u041C\u043E\u043B\u043D\u0438\u0435\u043E\u0442\u0432\u043E\u0434 II",lightningrodiii:"\u041C\u043E\u043B\u043D\u0438\u0435\u043E\u0442\u0432\u043E\u0434 III",linkedinputbus:"\u0421\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0439 \u0432\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A",longdistancefluidpipeline:"\u0422\u0440\u0443\u0431\u043E\u043F\u0440\u043E\u0432\u043E\u0434 \u0434\u043B\u044F \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438 \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0435\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",longdistanceitempipeline:"\u0422\u0440\u0443\u0431\u043E\u043F\u0440\u043E\u0432\u043E\u0434 \u0434\u043B\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432 \u043D\u0430 \u0434\u0430\u043B\u044C\u043D\u0435\u0435 \u0440\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435",ludicrousbuckconverter:"LuV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",luvmicrowaveenergytransmitter:"LuV \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",magneticfluxexhibitor:"\u0413\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0438\u0442\u043D\u043E\u0433\u043E \u043F\u043E\u0442\u043E\u043A\u0430",maintenancehatch:"\u041B\u044E\u043A \u0442\u0435\u0445\u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u044F",masssolidifier:"\u041C\u0430\u0441\u0441\u043E\u0432\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",mastermagicenergyabsorber:"\u041F\u043E\u0433\u043B\u043E\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432",mastermagicenergyconverter:"\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u043C\u0430\u0441\u0442\u0435\u0440\u043E\u0432",megaalloyblastsmelter:"\u041C\u0435\u0433\u0430 \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u0434\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0447\u044C",megachemicalreactor:"\u041C\u0435\u0433\u0430 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",megadistillationtower:"\u041C\u0435\u0433\u0430 \u0440\u0435\u043A\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043B\u043E\u043D\u043D\u0430",megaoilcracker:"\u041C\u0435\u0433\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u0440\u0435\u043A\u0438\u043D\u0433\u0430 \u043D\u0435\u0444\u0442\u0438",megaultimatebuckconverter:"UMV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",microwavegrinder:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",miniaturewormholegenerator:"\u041C\u0438\u043D\u0438\u0430\u0442\u044E\u0440\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0447\u0435\u0440\u0432\u043E\u0442\u043E\u0447\u0438\u043D",modificationtable:"\u0421\u0442\u043E\u043B \u043C\u043E\u0434\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438",molecularcyclone:"\u041C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D",molecularseparator:"\u041C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",moleculartransformer:"\u041C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",multismelter:"\u041C\u0443\u043B\u044C\u0442\u0438\u043F\u0435\u0447\u044C",nameremover:"\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0439",nanitecontainmentbus:"\u0425\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 \u043D\u0430\u043D\u0438\u0442\u043E\u0432",nanochipassemblycomplex:"\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441 \u0441\u0431\u043E\u0440\u043A\u0438 \u043D\u0430\u043D\u043E\u0447\u0438\u043F\u043E\u0432",nanochipassemblymatrix:"\u0421\u0431\u043E\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0442\u0440\u0438\u0446\u0430 \u043D\u0430\u043D\u043E\u0447\u0438\u043F\u043E\u0432",nanoforge:"\u041D\u0430\u043D\u043E \u043A\u0443\u0437\u043D\u0438\u0446\u0430",nanometerencasementwrapper:"\u0423\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A \u0432 \u043D\u0430\u043D\u043E\u043C\u0435\u0442\u0440\u043E\u0432\u0443\u044E \u043E\u0431\u043E\u043B\u043E\u0447\u043A\u0443",nanopartsplitter:"\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043D\u0430\u043D\u043E\u0447\u0430\u0441\u0442\u0438\u0446",nanoprecisioncuttingchamber:"\u041A\u0430\u043C\u0435\u0440\u0430 \u0434\u043B\u044F \u043D\u0430\u043D\u043E\u0442\u043E\u0447\u043D\u043E\u0439 \u0440\u0435\u0437\u043A\u0438",nanoprecisionwiretracer:"\u041D\u0430\u043D\u043E\u043F\u0440\u0435\u0446\u0438\u0437\u0438\u043E\u043D\u043D\u044B\u0439 \u0442\u0440\u0430\u0441\u0441\u0438\u0440\u043E\u0432\u0449\u0438\u043A \u0434\u043E\u0440\u043E\u0436\u0435\u043A",naquadahfuelrefinery:"\u041D\u0430\u043A\u0432\u0430\u0434\u0430\u0445\u043E\u0432\u044B\u0439 \u0442\u043E\u043F\u043B\u0438\u0432\u043D\u044B\u0439 \u0437\u0430\u0432\u043E\u0434",neutronactivator:"\u041D\u0435\u0439\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u0430\u043A\u0442\u0438\u0432\u0430\u0442\u043E\u0440",neutroniumcompressor:"\u041D\u0435\u0439\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",neutronsensor:"\u0421\u0435\u043D\u0441\u043E\u0440 \u043D\u0435\u0439\u0442\u0440\u043E\u043D\u043E\u0432",novicemagicenergyabsorber:"\u041F\u043E\u0433\u043B\u043E\u0442\u0438\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432",novicemagicenergyconverter:"\u041F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438 \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432",nuclearsaltprocessingplant:"\u0417\u0430\u0432\u043E\u0434 \u043F\u043E \u043F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u043A\u0435 \u044F\u0434\u0435\u0440\u043D\u043E\u0439 \u0441\u043E\u043B\u0438",objectholder:"\u0414\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044C \u043E\u0431\u0440\u0430\u0437\u0446\u043E\u0432",oilcrackingunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043A\u0440\u0435\u043A\u0438\u043D\u0433\u0430 \u043D\u0435\u0444\u0442\u0438",opticalfibercable:"\u041E\u043F\u0442\u043E\u0432\u043E\u043B\u043E\u043A\u043E\u043D\u043D\u044B\u0439 \u043A\u0430\u0431\u0435\u043B\u044C",opticallyoptimizedorganizer:"\u041E\u043F\u0442\u0438\u0447\u0435\u0441\u043A\u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440",oredrillingplant:"\u0420\u0443\u0434\u043D\u0430\u044F \u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430",oredrillingplantii:"\u0420\u0443\u0434\u043D\u0430\u044F \u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 II",oredrillingplantiii:"\u0420\u0443\u0434\u043D\u0430\u044F \u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 III",oredrillingplantiv:"\u0420\u0443\u0434\u043D\u0430\u044F \u0431\u0443\u0440\u043E\u0432\u0430\u044F \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 IV",orewashingplant:"\u0420\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",outputbusme:"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u043B\u044E\u043A (\u041C\u042D)",outputhatchme:"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0448\u043B\u044E\u0437 (\u041C\u042D)",ownerdetector:"\u0414\u0435\u0442\u0435\u043A\u0442\u043E\u0440 \u0432\u043B\u0430\u0434\u0435\u043B\u044C\u0446\u0430",ozonationpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u0447\u0438\u0441\u0442\u043A\u0438 \u0432\u043E\u0434\u044B \u043E\u0437\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435\u043C",pcbfactory:"\u0417\u0430\u0432\u043E\u0434 \u043F\u0435\u0447\u0430\u0442\u043D\u044B\u0445 \u043F\u043B\u0430\u0442",pseudostableblackholecontainmentfield:"\u0421\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0449\u0435\u0435 \u043F\u043E\u043B\u0435 \u043F\u0441\u0435\u0432\u0434\u043E\u0441\u0442\u0430\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0447\u0451\u0440\u043D\u043E\u0439 \u0434\u044B\u0440\u044B",pyrolyseoven:"\u041F\u0438\u0440\u043E\u043B\u0438\u0437\u043D\u0430\u044F \u043F\u0435\u0447\u044C",quantumcomputer:"\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",quantumforcetransformer:"\u041A\u0432\u0430\u043D\u0442\u043E\u0432\u044B\u0439 \u0441\u0438\u043B\u043E\u0432\u043E\u0439 \u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",quickfluidcanner:"\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",reinforcedlavaboiler:"\u0423\u043A\u0440\u0435\u043F\u043B\u0451\u043D\u043D\u044B\u0439 \u043B\u0430\u0432\u043E\u0432\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",repurposedlaundrywasheri360:"\u041F\u0435\u0440\u0435\u043F\u0440\u043E\u0444\u0438\u043B\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0438\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430 I-360",researchstation:"\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F",residualdecontaminantdegasserpurificationunit:"\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E\u0439 \u0434\u0435\u0433\u0430\u0437\u0430\u0446\u0438\u0438 \u0438 \u0434\u0435\u043A\u043E\u043D\u0442\u0430\u043C\u0438\u043D\u0430\u0446\u0438\u0438 \u0432\u043E\u0434\u044B",simplesolarboiler:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u0432\u043E\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",singularitycompressor:"\u0421\u0438\u043D\u0433\u0443\u043B\u044F\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",smallcoalboiler:"\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439 \u0443\u0433\u043E\u043B\u044C\u043D\u044B\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",solarfactory:"\u0421\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u0444\u0430\u0431\u0440\u0438\u043A\u0430",spinmatron2737:"\u0421\u043F\u0438\u043D\u043C\u0430\u0442\u0440\u043E\u043D-2737",steamalloysmelter:"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0441\u043F\u043B\u0430\u0432\u043E\u043F\u043B\u0430\u0432\u0438\u043B\u044C\u043D\u0430\u044F \u043F\u0435\u0447\u044C",steamcompressor:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440",steamextractor:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",steamforgehammer:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",steamfurnace:"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C",steamgrinder:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",steammacerator:"\u041F\u0430\u0440\u043E\u0432\u043E\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",steamsquasher:"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0434\u0430\u0432\u0438\u043B\u043A\u0430",steelhull:"\u0421\u0442\u0430\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u0440\u043F\u0443\u0441",superconductivestrandsplitter:"\u0420\u0430\u0437\u0432\u0435\u0442\u0432\u0438\u0442\u0435\u043B\u044C \u0436\u0438\u043B \u0441\u0432\u0435\u0440\u0445\u043F\u0440\u043E\u0432\u043E\u0434\u043D\u0438\u043A\u043E\u0432",teleporter:"\u0422\u0435\u043B\u0435\u043F\u043E\u0440\u0442",teslatower:"\u0411\u0430\u0448\u043D\u044F \u0442\u0435\u0441\u043B\u044B",testfactoryhatch:"\u0422\u0435\u0441\u0442\u043E\u0432\u044B\u0439 \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u043E\u0439 \u0448\u043B\u044E\u0437",testfactorypipe:"\u0422\u0435\u0441\u0442\u043E\u0432\u0430\u044F \u0437\u0430\u0432\u043E\u0434\u0441\u043A\u0430\u044F \u0442\u0440\u0443\u0431\u0430",theoblitterator:"\u0423\u043D\u0438\u0447\u0442\u043E\u0436\u0438\u0442\u0435\u043B\u044C",thermalboiler:"\u0422\u0435\u043F\u043B\u043E\u0432\u043E\u0439 \u0431\u043E\u0439\u043B\u0435\u0440",thoriumhightemperaturereactor:"\u0422\u043E\u0440\u0438\u0443\u043C\u043D\u044B\u0439 \u0432\u044B\u0441\u043E\u043A\u043E\u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043D\u044B\u0439 \u0440\u0435\u0430\u043A\u0442\u043E\u0440",toxicresiduesensorhatch:"\u0421\u0435\u043D\u0441\u043E\u0440 \u0442\u043E\u043A\u0441\u0438\u0447\u043D\u044B\u0445 \u043E\u0442\u0445\u043E\u0434\u043E\u0432",transcendentplasmamixer:"\u0422\u0440\u0430\u043D\u0441\u0446\u0435\u043D\u0434\u0435\u043D\u0442\u043D\u044B\u0439 \u043F\u043B\u0430\u0437\u043C\u0430 \u043C\u0438\u043A\u0441\u0435\u0440",treegrowthsimulator:"\u0421\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440 \u0440\u043E\u0441\u0442\u0430 \u0434\u0435\u0440\u0435\u0432\u044C\u0435\u0432",turbocanpro:"\u041F\u0440\u043E\u043C\u044B\u0448\u043B\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",turbocentrifuge:"\u0422\u0443\u0440\u0431\u043E \u0446\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430",turbocombustiongenerator:"\u0422\u0443\u0440\u0431\u043E \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0435\u0433\u043E \u0441\u0433\u043E\u0440\u0430\u043D\u0438\u044F",turbofluidcanner:"\u0422\u0443\u0440\u0431\u043E \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",turbogasturbine:"\u0422\u0443\u0440\u0431\u043E\u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",turbogasturbineii:"\u0422\u0443\u0440\u0431\u043E\u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430 II",turbogasturbineiii:"\u0422\u0443\u0440\u0431\u043E\u0433\u0430\u0437\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430 III",turbosteamturbine:"\u0422\u0443\u0440\u0431\u043E\u043F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430",ultimatealloyintegrator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0442\u043E\u0440 \u0441\u043F\u043B\u0430\u0432\u043E\u0432",ultimateamplicreator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043C\u043F\u043B\u0438\u0440\u0435\u0430\u043A\u0442\u043E\u0440",ultimateassemblyconstructor:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0442\u043E\u0440 \u0441\u0431\u043E\u0440\u043A\u0438",ultimateatomstimulator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u0442\u043E\u043C\u043D\u044B\u0439 \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440",ultimatebendingunit:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0433\u0438\u0431\u043E\u0447\u043D\u044B\u0439 \u0431\u043B\u043E\u043A",ultimatebrewrusher:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u0432\u0430\u0440\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",ultimatecanoperator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",ultimatechemicaldunktron:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0430\u043D\u043A\u0442\u0440\u043E\u043D",ultimatechemicalperformer:"\u042D\u043F\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u043F\u0435\u0440\u0444\u043E\u0440\u0430\u0442\u043E\u0440",ultimatecircuitarchitect:"\u041F\u0440\u043E\u0434\u0432\u0438\u043D\u0443\u0442\u044B\u0439 \u0441\u0431\u043E\u0440\u0449\u0438\u043A \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u0441\u0445\u0435\u043C VII",ultimateelectronmicroscope:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u044B\u0439 \u043C\u0438\u043A\u0440\u043E\u0441\u043A\u043E\u043F",ultimateelementalcomposer:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u0440\u043D\u044B\u0439 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440",ultimateexactphotoncannon:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u0442\u043E\u0447\u043D\u0430\u044F \u0444\u043E\u0442\u043E\u043D\u043D\u0430\u044F \u043F\u0443\u0448\u043A\u0430",ultimateexistenceinitiator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",ultimateextractinator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",ultimatefermentationhastener:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0435\u0440",ultimatefirecyclone:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043E\u0433\u043D\u0435\u043D\u043D\u044B\u0439 \u0446\u0438\u043A\u043B\u043E\u043D",ultimatefluidpetrificator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043E\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435\u043B\u044C",ultimatefractionsplitter:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u0444\u0440\u0430\u043A\u0446\u0438\u0439",ultimateheatinfuser:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",ultimateimpactmodulator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043A\u0443\u0437\u043D\u0435\u0447\u043D\u044B\u0439 \u043C\u043E\u043B\u043E\u0442",ultimateionizer:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0438\u043E\u043D\u0438\u0437\u0430\u0442\u043E\u0440",ultimateliquefyingsucker:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",ultimateliquidcanactuator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0439 \u043D\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C",ultimatemagnetarseparator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0433\u043D\u0435\u0442\u0430\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0430\u0440\u0430\u0442\u043E\u0440",ultimatemagnetisminducer:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0438\u043D\u0434\u0443\u043A\u0442\u043E\u0440 \u043C\u0430\u0433\u043D\u0435\u0442\u0438\u0437\u043C\u0430",ultimatematterconstrictor:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0436\u0438\u043C\u0430\u0442\u0435\u043B\u044C \u043C\u0430\u0442\u0435\u0440\u0438\u0438",ultimatematterorganizer:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440 \u043C\u0430\u0442\u0435\u0440\u0438\u0438",ultimatemoleculartornado:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E\u0435 \u043C\u043E\u043B\u0435\u043A\u0443\u043B\u044F\u0440\u043D\u043E\u0435 \u0442\u043E\u0440\u043D\u0430\u0434\u043E",ultimateobjectdivider:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u0435\u043B\u044C \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432",ultimateorewashingmachine:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u0440\u0443\u0434\u043E\u043F\u0440\u043E\u043C\u044B\u0432\u043E\u0447\u043D\u0430\u044F \u043C\u0430\u0448\u0438\u043D\u0430",ultimateplasmadischargeheater:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0437\u043C\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C",ultimatepocketsun:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u043B\u0430\u0437\u043C\u0430 \u0433\u0435\u043D\u0435\u0440\u0430\u0442\u043E\u0440",ultimatepowerbuckconverter:"UV \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C",ultimatepressurecooker:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u0432\u0442\u043E\u043A\u043B\u0430\u0432",ultimatepulsationfilter:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u043B\u044C\u0441\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0444\u0438\u043B\u044C\u0442\u0440",ultimatescrapomatic:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0443\u0442\u0438\u043B\u0438\u0437\u0430\u0442\u043E\u0440",ultimateshapedriver:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0449\u0438\u0439 \u0434\u0440\u0430\u0439\u0432\u0435\u0440",ultimateshapeeliminator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",ultimateshortcircuitheater:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043D\u0430\u0433\u0440\u0435\u0432\u0430\u0442\u0435\u043B\u044C \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u0437\u0430\u043C\u044B\u043A\u0430\u043D\u0438\u044F",ultimatesolarpanel:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0430\u044F \u043F\u0430\u043D\u0435\u043B\u044C",ultimatesurfaceshifter:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u043E\u0441\u0442\u043D\u044B\u0439 \u0441\u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C",ultimatetimeanomaly:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043C\u0438\u0440\u043E\u0432\u043E\u0439 \u0443\u0441\u043A\u043E\u0440\u0438\u0442\u0435\u043B\u044C",ultimateturnomatic:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u0442\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A",ultimateufoengine:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u0430\u044F \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u041D\u041B\u041E",ultimatewiretransfigurator:"\u0421\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u0447\u043D\u044B\u0439 \u0442\u0440\u0430\u043D\u0441\u0444\u0438\u0433\u0443\u0440\u0430\u0442\u043E\u0440",ultrahighenergyetchingarray:"\u041C\u0430\u0441\u0441\u0438\u0432 \u0441\u0432\u0435\u0440\u0445\u0432\u044B\u0441\u043E\u043A\u043E\u044D\u043D\u0435\u0440\u0433\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0442\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F",unboxinator:"\u0420\u0430\u0441\u043F\u0430\u043A\u043E\u0432\u0449\u0438\u043A",uncertaintyresolution:"\u0420\u0435\u0448\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",uncertaintyresolver:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",uncertaintyresolverx:"\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435\u043B\u044C \u043D\u0435\u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u043D\u043E\u0441\u0442\u0438",universalchemicalfuelengine:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0432\u0438\u0433\u0430\u0442\u0435\u043B\u044C \u043D\u0430 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u043C \u0442\u043E\u043F\u043B\u0438\u0432\u0435",universalmacerator:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C",universalpulverizer:"\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u044B\u0439 \u0438\u0437\u043C\u0435\u043B\u044C\u0447\u0438\u0442\u0435\u043B\u044C",uvmicrowaveenergytransmitter:"UV \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",vacuumconveyorinput:"\u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043A\u0443\u0443\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440",vacuumconveyoroutput:"\u0412\u044B\u0445\u043E\u0434\u043D\u043E\u0439 \u0432\u0430\u043A\u0443\u0443\u043C\u043D\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440",vacuumconveyorpipe:"\u0422\u0440\u0443\u0431\u0430 \u0432\u0430\u043A\u0443\u0443\u043C\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u0432\u0435\u0439\u0435\u0440\u0430",vacuumextractor:"\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u044B\u0439 \u044D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440",vacuumfreezer:"\u0412\u0430\u043A\u0443\u0443\u043C\u043D\u044B\u0439 \u043C\u043E\u0440\u043E\u0437\u0438\u043B\u044C\u043D\u0438\u043A",voidbus:"\u041F\u0443\u0441\u0442\u043E\u0442\u043D\u044B\u0439 \u043B\u044E\u043A",voidhatch:"\u041F\u0443\u0441\u0442\u043E\u0442\u043D\u044B\u0439 \u0448\u043B\u044E\u0437",voidmineri:"\u041F\u0443\u0441\u0442\u043E\u0442\u043D\u044B\u0439 \u0448\u0430\u0445\u0442\u0451\u0440 I",voidminerii:"\u041F\u0443\u0441\u0442\u043E\u0442\u043D\u044B\u0439 \u0448\u0430\u0445\u0442\u0451\u0440 II",voidmineriii:"\u041F\u0443\u0441\u0442\u043E\u0442\u043D\u044B\u0439 \u0448\u0430\u0445\u0442\u0451\u0440 III",waterpump:"\u0412\u043E\u0434\u044F\u043D\u0430\u044F \u043F\u043E\u043C\u043F\u0430",waterpurificationplant:"\u0412\u043E\u0434\u043E\u043E\u0447\u0438\u0441\u0442\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F",windmill:"\u041C\u0435\u043B\u044C\u043D\u0438\u0446\u0430",zhuhaifishingport:"\u0420\u044B\u0431\u043E\u043B\u043E\u0432\u043D\u0430\u044F \u0441\u0442\u0430\u043D\u0446\u0438\u044F \u0427\u0436\u0443\u0445\u0430\u0439",zpmmicrowaveenergytransmitter:"ZPM \u041F\u0435\u0440\u0435\u0434\u0430\u0442\u0447\u0438\u043A \u043C\u0438\u043A\u0440\u043E\u0432\u043E\u043B\u043D\u043E\u0432\u043E\u0439 \u044D\u043D\u0435\u0440\u0433\u0438\u0438",zpmvoltagebuckconverter:"ZPM \u042D\u043D\u0435\u0440\u0433\u043E\u043F\u0440\u0435\u043E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"}};var jh=i=>String(i).replace(/§./g,"").toLowerCase().replace(/[^a-z0-9]/g,""),Fc=i=>({Stone:"\u041A\u0430\u043C\u0435\u043D\u044C",Steam:"\u041F\u0430\u0440",Unknown:""})[i]??i,c_={Tiny:"\u041A\u0440\u043E\u0448\u0435\u0447\u043D\u0430\u044F",Small:"\u041C\u0430\u043B\u0430\u044F",Large:"\u0411\u043E\u043B\u044C\u0448\u0430\u044F",Huge:"\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F",Quadruple:"\u0427\u0435\u0442\u0432\u0435\u0440\u043D\u0430\u044F",Nonuple:"\u0414\u0435\u0432\u044F\u0442\u0435\u0440\u043D\u0430\u044F"};function Ii(i){let e=oo.ids[i.machine_id]||oo.names[jh(i.label)];if(e)return e;if(i.kind!=="machine"){let t=i.label.match(/^(?:(Tiny|Small|Large|Huge|Quadruple|Nonuple)\s+)?(?:(\d+)x\s+)?(.*?)\s+(Fluid Pipe|Item Pipe|Cable|Wire)$/i),n=t?oo.materials[jh(t[3].replace(/^Restrictive\s+/i,""))]:null,s={cable:/wire/i.test(i.label)?"\u041F\u0440\u043E\u0432\u043E\u0434":"\u041A\u0430\u0431\u0435\u043B\u044C",fluid:"\u0416\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430",item:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430",pipe:"\u0422\u0440\u0443\u0431\u0430"}[i.kind]||"\u0422\u0440\u0443\u0431\u0430",r=t&&t[1]?c_[t[1]]:null;return[r?r+" "+s.toLowerCase():s,n?.toLowerCase(),t?.[2]?t[2]+"\xD7":null].filter(Boolean).join(" \xB7 ")}for(let[t,n]of[[/coke.*hatch/i,"\u041B\u044E\u043A \u043A\u043E\u043A\u0441\u043E\u0432\u043E\u0439 \u043F\u0435\u0447\u0438"],[/coke.*oven/i,"\u041A\u043E\u043A\u0441\u043E\u0432\u0430\u044F \u043F\u0435\u0447\u044C"],[/steam turbine/i,"\u041F\u0430\u0440\u043E\u0432\u0430\u044F \u0442\u0443\u0440\u0431\u0438\u043D\u0430"],[/bricked.*blast/i,"\u0414\u043E\u043C\u0435\u043D\u043D\u0430\u044F \u043F\u0435\u0447\u044C"],[/macerator|pulverizer/i,"\u0414\u0440\u043E\u0431\u0438\u0442\u0435\u043B\u044C"],[/electroly/i,"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u0451\u0440"],[/centrifuge/i,"\u0426\u0435\u043D\u0442\u0440\u0438\u0444\u0443\u0433\u0430"],[/lathe/i,"\u0422\u043E\u043A\u0430\u0440\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A"],[/distill/i,"\u0414\u0438\u0441\u0442\u0438\u043B\u043B\u044F\u0442\u043E\u0440"],[/assembling|assembler/i,"\u0421\u0431\u043E\u0440\u043E\u0447\u043D\u044B\u0439 \u0441\u0442\u0430\u043D\u043E\u043A"],[/compressor/i,"\u041A\u043E\u043C\u043F\u0440\u0435\u0441\u0441\u043E\u0440"],[/extractor/i,"\u042D\u043A\u0441\u0442\u0440\u0430\u043A\u0442\u043E\u0440"],[/pump/i,"\u041D\u0430\u0441\u043E\u0441"],[/tank/i,"\u0420\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440"],[/hatch/i,"\u041B\u044E\u043A"],[/\bbus\b/i,"\u0428\u0438\u043D\u0430"]])if(t.test(i.label))return n;return"\u041C\u0435\u0445\u0430\u043D\u0438\u0437\u043C \u2116"+i.machine_id}function nr(i){if(i.kind!=="machine")return"";for(let[e,t]of[[/hatch|\bbus\b/i,""],[/coke.*oven/i,"\u041F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442 \u043A\u043E\u043A\u0441."],[/steam turbine/i,"\u0412\u044B\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u044D\u043D\u0435\u0440\u0433\u0438\u044E."],[/bricked.*blast/i,"\u0412\u044B\u043F\u043B\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u0442\u0430\u043B\u044C."],[/electroly/i,"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0435\u0442 \u0432\u0435\u0449\u0435\u0441\u0442\u0432\u0430 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043B\u0438\u0437\u043E\u043C."],[/centrifuge/i,"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0435\u0442 \u0441\u043C\u0435\u0441\u0438."],[/macerator|pulverizer/i,"\u0418\u0437\u043C\u0435\u043B\u044C\u0447\u0430\u0435\u0442 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B."],[/alloy.*smelt/i,"\u0412\u044B\u043F\u043B\u0430\u0432\u043B\u044F\u0435\u0442 \u0441\u043F\u043B\u0430\u0432\u044B."],[/fluid solid/i,"\u041E\u0442\u043B\u0438\u0432\u0430\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0438."],[/fluid extractor/i,"\u0418\u0437\u0432\u043B\u0435\u043A\u0430\u0435\u0442 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438."],[/chemical reactor/i,"\u041F\u0440\u043E\u0432\u043E\u0434\u0438\u0442 \u0445\u0438\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0430\u043A\u0446\u0438\u0438."],[/lathe/i,"\u0412\u044B\u0442\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0434\u0435\u0442\u0430\u043B\u0438."],[/bending|bender/i,"\u0418\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043F\u043B\u0430\u0441\u0442\u0438\u043D\u044B."],[/cutting|cutter/i,"\u0420\u0435\u0436\u0435\u0442 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B."],[/wire.*mill/i,"\u0418\u0437\u0433\u043E\u0442\u0430\u0432\u043B\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0432\u043E\u043B\u043E\u043A\u0443."],[/distill/i,"\u0420\u0430\u0437\u0434\u0435\u043B\u044F\u0435\u0442 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438."],[/assembler|assembling/i,"\u0421\u043E\u0431\u0438\u0440\u0430\u0435\u0442 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B."],[/pump/i,"\u041F\u0435\u0440\u0435\u043A\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0436\u0438\u0434\u043A\u043E\u0441\u0442\u0438."]])if(e.test(i.label))return t;return""}var G=i=>document.getElementById(i),iu={Stone:"#a3a099",Steam:"#d9a16a",ULV:"#bd9177",LV:"#b8e788",MV:"#e4c972",HV:"#e48d74",EV:"#bb9ad8",IV:"#8caadf",LuV:"#dd93c6",ZPM:"#a5dde0",UV:"#e1d8c4",UHV:"#f3b6a1",Unknown:"#869e8a"},l_={machine:"\u041C\u0430\u0448\u0438\u043D\u044B",cable:"\u041A\u0430\u0431\u0435\u043B\u0438",fluid:"\u0416\u0438\u0434\u043A\u043E\u0441\u0442\u043D\u044B\u0435 \u0442\u0440\u0443\u0431\u044B",item:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u043D\u044B\u0435 \u0442\u0440\u0443\u0431\u044B",pipe:"\u041F\u0440\u043E\u0447\u0438\u0435 \u0442\u0440\u0443\u0431\u044B"},su={machine:"#b8e788",cable:"#ddaa6c",fluid:"#76b6d2",item:"#b69bce",pipe:"#7f9e94"},ru={0:"\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u043C\u0438\u0440","-1":"\u041D\u0438\u0436\u043D\u0438\u0439 \u043C\u0438\u0440",1:"\u041A\u0440\u0430\u0439",7:"\u0421\u0443\u043C\u0435\u0440\u0435\u0447\u043D\u044B\u0439 \u043B\u0435\u0441"},qe,vt,Nt,zt,xn,un,Ri,lo=[],ho=[],On=[],vn=0,et=0,Ze=0,jt=!1,ir=0,au=-1,yn=!0,Qh,Hc=[],ii=[],ni=null,ou=0,Mn=new Set,Bn=new Set,eu=new Xs,zc=new Ce(2,2),tu=new Ke,Vc=[[0,-1,0],[0,1,0],[0,0,-1],[0,0,1],[-1,0,0],[1,0,0]],Gc,sr;function cu(){let i=new Date(qe.updated_at),e=Date.now()-i.getTime()>2*36e5,t={timeZone:"Asia/Seoul",hour:"2-digit",minute:"2-digit"};G("update").textContent="\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u043E "+new Intl.DateTimeFormat("ru-RU",t).format(i),G("update").title=i.toLocaleString("ru-RU",{timeZone:"Asia/Seoul"})+" \xB7 \u0421\u0435\u0443\u043B \xB7 \u0432\u0440\u0435\u043C\u044F \u0441\u0435\u0440\u0432\u0435\u0440\u043D\u043E\u0433\u043E \u0441\u043D\u0438\u043C\u043A\u0430",G("status-led").classList.remove("stale","ready"),G("status-led").classList.add(e?"stale":"ready")}function nu(){clearTimeout(Gc),sr?.abort(),sr=null}async function Wc(){if(document.hidden)return;let i=new AbortController;sr=i;let e=setTimeout(()=>i.abort(),15e3);try{let t=await fetch("./data.json?check="+Date.now(),{cache:"no-store",signal:i.signal});if(!t.ok)throw Error("model-unavailable");let n=await t.json();if(n.schema!==1||!Array.isArray(n.objects))throw Error("model-schema");if(n.content_hash!==qe.content_hash){let s=Ze===et&&!jt,r=new Set(qe.objects.map(c=>c.tier)),a=new Set(qe.objects.map(c=>c.kind)),o=new Set(Mn),l=new Set(Bn);qe=n,et=qe.objects.reduce((c,h)=>Math.max(c,h.start,h.end||0),0),Ze=s?et:Math.min(Ze,et),Hc=Oc(qe.objects),ni=null,G("time").max=Math.max(1,et),G("time").value=Ze,G("play").disabled=!et,G("duration").textContent=zn(et),G("dimension").replaceChildren();for(let c of qe.dimensions.length?qe.dimensions:[0]){let h=document.createElement("option");h.value=c,h.textContent=ru[c]||"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 "+c,G("dimension").append(h)}qe.dimensions.includes(vn)||(vn=qe.dimensions[0]??0),G("dimension").value=vn,G("dimension-field").hidden=qe.dimensions.length<2,Mn.clear(),Bn.clear(),G("tiers").replaceChildren(),G("kinds").replaceChildren(),du();for(let[c,h,u,f]of[["tiers",r,o,Mn],["kinds",a,l,Bn]])for(let p of G(c).querySelectorAll(".filter"))h.has(p.dataset.value)&&!u.has(p.dataset.value)&&(p.querySelector("input").checked=!1,f.delete(p.dataset.value));G("object-detail").hidden=!0,G("tooltip").hidden=!0,uo(),Fn(),cu()}}catch{document.hidden||(G("status-led").classList.remove("ready"),G("status-led").classList.add("stale"),G("update").title="\u041F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430. \u041F\u043E\u043A\u0430\u0437\u0430\u043D \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0439 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A.")}finally{clearTimeout(e),sr===i&&(sr=null,document.hidden||(Gc=setTimeout(Wc,6e4)))}}function zn(i){let e=Math.max(0,Math.floor(i/20));return[Math.floor(e/3600),Math.floor(e/60)%60,e%60].map(t=>String(t).padStart(2,"0")).join(":")}function Bc(i){return String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function kc(i){G("error").textContent=i,G("error").hidden=!1}function h_(){let i=G("scene");vt=new no({antialias:!0,alpha:!0,powerPreference:"low-power"}),vt.setPixelRatio(Math.min(devicePixelRatio,2)),vt.setClearColor(1318936,0),vt.outputColorSpace=yt,vt.toneMapping=fa,i.appendChild(vt.domElement),vt.setSize(i.clientWidth,i.clientHeight),xn=new Ns,Ri=new ao(()=>{yn=!0}),Nt=new Tt(42,i.clientWidth/i.clientHeight,.1,1e4),Nt.position.set(28,28,36),zt=new ro(Nt,vt.domElement),zt.enableDamping=!1,zt.target.set(0,0,0),zt.maxPolarAngle=Math.PI*.95,zt.addEventListener("change",()=>{yn=!0}),xn.add(new Gs(14938844,3492923,2.7));let e=new ss(16771269,3.2);e.position.set(-25,55,30),xn.add(e);let t=new ss(9352671,1.6);t.position.set(30,10,-20),xn.add(t),un=new Ys(64,64,5268807,3427127),un.material.transparent=!0,un.material.opacity=.3,un.visible=!0,xn.add(un),Qh=new ResizeObserver(()=>{let s=i.clientWidth,r=i.clientHeight,a=Nt.aspect;vt.setSize(s,r),Nt.aspect=s/r,Nt.updateProjectionMatrix(),qe&&Math.abs(a-Nt.aspect)>.2&&rr(),yn=!0}),Qh.observe(i),new ResizeObserver(()=>{G("scene").parentElement.style.setProperty("--timeline-height",document.querySelector(".timeline").offsetHeight+"px")}).observe(document.querySelector(".timeline")),vt.domElement.addEventListener("webglcontextlost",s=>{s.preventDefault(),kc("WebGL \u043F\u043E\u0442\u0435\u0440\u044F\u043B \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442. \u041F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u0447\u0442\u043E\u0431\u044B \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043C\u043E\u0434\u0435\u043B\u044C.")}),vt.domElement.addEventListener("pointermove",s=>{let r=i.getBoundingClientRect();zc.set((s.clientX-r.left)/r.width*2-1,-(s.clientY-r.top)/r.height*2+1),m_(s.clientX-r.left,s.clientY-r.top)}),vt.domElement.addEventListener("pointerleave",()=>{G("tooltip").hidden=!0});let n=null;vt.domElement.addEventListener("pointerdown",s=>{n={x:s.clientX,y:s.clientY,button:s.button}}),vt.domElement.addEventListener("pointerup",s=>{if(!n||n.button!==0||Math.hypot(s.clientX-n.x,s.clientY-n.y)>6)return;if(n=null,G("sidebar").classList.contains("open")){co(!1);return}let r=i.getBoundingClientRect();zc.set((s.clientX-r.left)/r.width*2-1,-(s.clientY-r.top)/r.height*2+1);let a=lu();a?uu(a):G("object-detail").hidden=!0}),zt.addEventListener("start",()=>{G("tooltip").hidden=!0}),requestAnimationFrame(fu)}function u_(){for(let i of[...lo,...ho])if(xn.remove(i),i.geometry.dispose(),!i.userData.sharedMaterial)for(let e of Array.isArray(i.material)?i.material:[i.material])e.dispose();lo=[],ho=[]}function ms(i,e,t={}){if(!i.length)return;let{materials:n,...s}=t,r=new Os(e(),n||new _i({roughness:.66,metalness:.28,...s}),i.length);r.userData.sharedMaterial=!!n,r.userData.entries=i,i.forEach((a,o)=>{let{o:l,dx:c=0,dy:h=0,dz:u=0,sx:f=1,sy:p=1,sz:g=1,rotation:x=new wt}=a;tu.compose(new L(l.x+c,l.y+h,l.z+u),x,new L(f,p,g)),r.setMatrixAt(o,tu),r.setColorAt(o,new Fe(a.color||(l.kind==="machine"?iu[l.tier]||"#92a780":su[l.kind])))}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),xn.add(r),lo.push(r)}function Fn(){if(!xn||!qe)return;let i=qe.objects.filter(c=>c.dimension===vn&&c.start<=Ze&&(c.end===null||Ze<c.end));On=i.filter(c=>Mn.has(c.tier)&&Bn.has(c.kind)),G("machine-count").textContent=On.filter(c=>c.kind==="machine").length,G("pipe-count").textContent=On.filter(c=>c.kind!=="machine").length,G("visible-count").textContent=`${On.length.toLocaleString("ru-RU")} \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432`;for(let c of document.querySelectorAll(".filter[data-filter]")){let{filter:h,value:u}=c.dataset;c.querySelector(".count").textContent=i.filter(f=>f[h]===u).length}u_();let e=[],t=[],n=[],s=new Map,r=new Map,a=new Map,o=G("textures-toggle").checked;function l(c,h,u,f){c.has(h)||c.set(h,{entries:[],materials:f}),c.get(h).entries.push(u)}for(let c of On)if(c.kind==="machine"){if(o){let h=Ri.profile(c);l(s,h.key,{o:c,sx:.9,sy:.9,sz:.9,color:"#ffffff"},h.materials);for(let u of Ri.overlayEntries(c,h))l(r,u.path,{...u,color:"#ffffff"},Ri.material(u.path,!0))}else if(e.push({o:c,sx:.9,sy:.9,sz:.9}),c.facing!==void 0){let h=Vc[c.facing];n.push({o:c,dx:h[0]*.457,dy:h[1]*.457,dz:h[2]*.457,sx:h[0]?.035:.42,sy:h[1]?.035:.42,sz:h[2]?.035:.42})}}else{let h=[{o:c,sx:.26,sy:.26,sz:.26}];if(c.connections!==void 0&&Vc.forEach((u,f)=>{c.connections&1<<f&&h.push({o:c,dx:u[0]*.27,dy:u[1]*.27,dz:u[2]*.27,sx:u[0]?.46:.24,sy:u[1]?.46:.24,sz:u[2]?.46:.24})}),o)for(let u of h)l(a,c.kind==="cable"?"wire":"pipe",{...u,color:Ri.pipeColor(c)},Ri.pipeMaterial(c));else t.push(...h)}ms(e,()=>new Wt(1,1,1)),ms(t,()=>new Wt(1,1,1)),ms(n,()=>new Wt(1,1,1),{color:2438700,metalness:.6});for(let c of s.values())ms(c.entries,()=>new Wt(1,1,1),{materials:c.materials});for(let c of r.values())ms(c.entries,()=>new gi(1,1),{materials:c.materials});for(let c of a.values())ms(c.entries,()=>new Wt(1,1,1),{materials:c.materials});f_(),G("empty").hidden=On.length>0,G("current-time").textContent=zn(Ze),G("timeline-state").textContent=et===0?"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A":Ze>=et?"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435":jt?"\u0412\u043E\u0441\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435":"\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 \u0438\u0441\u0442\u043E\u0440\u0438\u0438",G("play").textContent=jt?"\u2161":"\u25B6",G("play").setAttribute("aria-label",jt?"\u041F\u0440\u0438\u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E":"\u0417\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0438\u0441\u0442\u043E\u0440\u0438\u044E"),G("activity-cursor").style.left=Ze/Math.max(1,et)*100+"%",G("previous-event").disabled=Ze<=0,G("next-event").disabled=!ii.some(c=>c.tick>Ze),au=Math.floor(Ze),ou=performance.now(),yn=!0}function d_(){if(ni&&ni.tick===Math.floor(Ze))return ni;let i=ii.findLast(e=>e.tick<=Ze);return i&&Ze-i.tick<=1200?i:null}function f_(){if(!G("highlight-toggle").checked||!ni&&!jt&&Ze>=et)return;let i=d_();if(i)for(let e of i.changes.slice(0,300)){let t=e.object,n=new Wt(1.04,1.04,1.04),s=new zs(n);n.dispose();let r=new ns(s,new mi({color:tr[e.kind],transparent:!0,opacity:.9,depthTest:!1}));r.position.set(t.x,t.y,t.z),r.renderOrder=10,xn.add(r),ho.push(r)}}function ti(i,e=null,t=!1){Ze=Math.min(et,Math.max(0,i)),jt=!1,ni=e,G("time").value=Ze,G("object-detail").hidden=!0,t?Xc(e):G("activity-detail").hidden=!0,Fn()}function p_(i){let e=i.facing!==void 0?new L(...Vc[i.facing]).multiplyScalar(5).add(new L(2,3,1)):Nt.position.clone().sub(zt.target).normalize().multiplyScalar(7);zt.target.set(i.x,i.y,i.z),Nt.position.copy(zt.target).add(e),zt.update(),yn=!0}function Xc(i){let e=G("activity-detail"),t=G("activity-detail-list");if(e.hidden=!1,t.replaceChildren(),G("notice").hidden=!0,G("activity-detail-title").textContent=i?zn(i.tick):"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A",G("activity-detail-summary").textContent=i?Object.keys(wi).filter(r=>i[r]).map(r=>`${wi[r]}: ${i[r]}`).join(" \xB7 "):"\u0411\u0430\u0437\u0430 \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043F\u0438\u0441\u0438.",i)for(let r of i.changes.slice(0,30)){let a=r.object,o=document.createElement("li"),l=document.createElement("button");if(l.type="button",l.className="activity-item",l.style.color=tr[r.kind],l.textContent={added:"+ ",changed:"\u21BB ",removed:"\u2212 "}[r.kind]+(r.previous&&r.previous.machine_id!==a.machine_id?Ii(r.previous)+" \u2192 ":"")+Ii(a),l.setAttribute("aria-label",wi[r.kind]+": "+Ii(a)),r.approximate){let c=document.createElement("small");c.textContent="\u2248",c.title="\u0412\u0440\u0435\u043C\u044F \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0435\u043D\u0438\u044F \u043D\u0430 \u0441\u043D\u0438\u043C\u043A\u0435",l.append(c)}l.onclick=()=>{p_(a),uu(a)},o.append(l),t.append(o)}let n=i&&i.changes.length>30?`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043F\u0435\u0440\u0432\u044B\u0435 30 \u0438\u0437 ${i.changes.length}. `:"",s=i?.changes.some(r=>r.approximate);G("activity-detail-note").textContent=n+(s?"\u2248 \u0412\u0440\u0435\u043C\u044F \u043F\u043E \u0441\u043D\u0438\u043C\u043A\u0443.":""),G("activity-detail-note").hidden=!G("activity-detail-note").textContent}function uo(){let i=Hc.filter(r=>r.object.dimension===vn&&Mn.has(r.object.tier)&&Bn.has(r.object.kind));ii=$h(i),ni=null,G("activity-detail").hidden=!0;for(let r of Object.keys(wi))G("activity-"+r+"-count").textContent=i.filter(a=>a.kind===r).length;let e=G("activity-bars");e.replaceChildren();let t=qe.objects.filter(r=>r.dimension===vn&&r.start===0&&(r.end===null||r.end>0)&&Mn.has(r.tier)&&Bn.has(r.kind)).length;if(t){let r=document.createElement("button");r.className="activity-bin activity-initial",r.title=`\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A: ${t} \u043E\u0431\u044A\u0435\u043A\u0442\u043E\u0432. \u0412\u0440\u0435\u043C\u044F \u0441\u0442\u0440\u043E\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u043D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u043E.`,r.setAttribute("aria-label",r.title),r.onclick=()=>{ti(0),Xc(null)},e.append(r)}let n=Kh(ii,et,100),s=Math.max(1,...n.map(r=>r.added+r.changed+r.removed));for(let r of n){let a=document.createElement("button");a.type="button",a.className="activity-bin",a.style.left=r.index+"%",a.style.width="1%",a.title=`${zn(r.groups[0].tick)} \xB7 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E ${r.added}, \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043E ${r.changed}, \u0443\u0434\u0430\u043B\u0435\u043D\u043E ${r.removed}`,a.setAttribute("aria-label",a.title);let o=r.added+r.changed+r.removed,l=25+75*Math.log1p(o)/Math.log1p(s),c=Object.keys(wi).reduce((h,u)=>h+Math.log1p(r[u]),0);for(let h of Object.keys(wi)){if(!r[h])continue;let u=document.createElement("span");u.className="activity-stack",u.dataset.kind=h,u.style.background=tr[h],u.style.height=Math.log1p(r[h])/c*l+"%",a.append(u)}a.onclick=h=>{let u=(h.clientX-G("activity-strip").getBoundingClientRect().left)/G("activity-strip").clientWidth,f=Math.max(0,Math.min(et,u*et)),p=r.groups.reduce((g,x)=>Math.abs(x.tick-f)<Math.abs(g.tick-f)?x:g,r.groups[0]);ti(p.tick,p,!0)},e.append(a)}G("activity-help").textContent=i.length?"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439.":"\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439 \u043F\u043E\u043A\u0430 \u043D\u0435\u0442."}function rr(i=!1){let e=On.length?On:qe.objects.filter(l=>l.dimension===vn),t=new $t;for(let l of e)t.expandByPoint(new L(l.x,l.y,l.z));t.isEmpty()&&t.set(new L(-5,0,-5),new L(5,5,5));let n=t.getCenter(new L),s=t.getSize(new L),r=Math.max(s.x,s.y,s.z,8),a=r*1.35/Math.min(Nt.aspect,1.6);zt.target.copy(n),Nt.position.copy(n).add(i?new L(.001,a,0):new L(a*.72,a*.6,a*.82)),Nt.far=Math.max(2e3,a*12),Nt.updateProjectionMatrix(),zt.minDistance=.5,zt.maxDistance=Math.max(400,a*5),zt.update(),un.position.set(Math.round(n.x),t.min.y-.55,Math.round(n.z));let o=Math.max(1,Math.ceil(r/48));un.scale.set(o,1,o),yn=!0}function lu(){eu.setFromCamera(zc,Nt);let i=eu.intersectObjects(lo,!1)[0];return i?.object.userData.entries[i.instanceId]?.o}function hu(i){let e=i.end!==null&&Ze>=i.end?"\u0423\u0434\u0430\u043B\u0451\u043D \u2248 "+zn(i.end):i.start===0&&i.observed?"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439 \u0441\u043D\u0438\u043C\u043E\u043A":(i.observed?"\u0421\u043D\u0438\u043C\u043E\u043A ":"\u0421 ")+zn(i.start);return[Fc(i.tier),e].filter(Boolean).join(" \xB7 ")}function m_(i,e){let t=lu(),n=G("tooltip");if(vt.domElement.style.cursor=t?"pointer":"grab",!t){n.hidden=!0;return}let s=nr(t);n.innerHTML=`<strong>${Bc(Ii(t))}</strong>`+(s?`<div class="tooltip-purpose">${Bc(s)}</div>`:"")+`<div class="tooltip-meta">${Bc(hu(t))}</div>`,n.hidden=!1,n.style.left=Math.max(8,Math.min(i+16,G("scene").clientWidth-n.offsetWidth-12))+"px",n.style.top=Math.max(8,Math.min(e+16,G("scene").clientHeight-n.offsetHeight-12))+"px"}function uu(i){G("activity-detail").hidden=!0,G("tooltip").hidden=!0,G("object-detail").hidden=!1,G("object-more").open=!1,G("object-name").textContent=Ii(i),G("object-purpose").textContent=nr(i),G("object-purpose").hidden=!nr(i),G("object-meta").textContent=hu(i);let e=G("object-facts");e.replaceChildren();let t=[["\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B",[i.x,i.y,i.z].join(", ")]];i.facing!==void 0&&t.push(["\u041D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",["\u0412\u043D\u0438\u0437","\u0412\u0432\u0435\u0440\u0445","\u0421\u0435\u0432\u0435\u0440","\u042E\u0433","\u0417\u0430\u043F\u0430\u0434","\u0412\u043E\u0441\u0442\u043E\u043A"][i.facing]]),t.push([i.observed?"\u0412\u043F\u0435\u0440\u0432\u044B\u0435 \u043D\u0430 \u0441\u043D\u0438\u043C\u043A\u0435":"\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D",i.start===0&&i.observed?"\u0414\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0437\u0430\u043F\u0438\u0441\u0438":zn(i.start)]),i.end!==null&&t.push(["\u0423\u0434\u0430\u043B\u0451\u043D","\u2248 "+zn(i.end)]);for(let[n,s]of t){let r=document.createElement("dt"),a=document.createElement("dd");r.textContent=n,a.textContent=s,e.append(r,a)}}function co(i){let e=G("sidebar").classList.contains("open");G("sidebar").classList.toggle("open",i),G("sidebar").inert=!i,G("panel-toggle").setAttribute("aria-expanded",String(i)),!i&&e&&G("sidebar").contains(document.activeElement)&&G("panel-toggle").focus()}function du(){let i=new Set(qe.objects.map(t=>t.tier));["Stone","Steam","ULV","LV","MV","HV","EV","IV","LuV","ZPM","UV","UHV","UEV","UIV","UMV","UXV","MAX","Unknown"].filter(t=>i.has(t)).forEach(t=>Mn.add(t)),qe.objects.forEach(t=>Bn.add(t.kind));function e(t,n,s,r,a,o){let l=document.createElement("label");l.className="filter",l.dataset.filter=n,l.dataset.value=s,l.style.setProperty("--color",a);let c=document.createElement("input");c.type="checkbox",c.checked=!0,c.setAttribute("aria-label",r),c.addEventListener("change",()=>{c.checked?o.add(s):o.delete(s),uo(),Fn()});let h=document.createElement("span");h.className="swatch";let u=document.createElement("span");u.textContent=r;let f=document.createElement("span");f.className="count",l.append(c,h,u,f),G(t).append(l)}for(let t of Mn)e("tiers","tier",t,t==="Unknown"?"\u0414\u0440\u0443\u0433\u0438\u0435":Fc(t),iu[t]||"#a0b28c",Mn);for(let[t,n]of Object.entries(l_))Bn.has(t)&&e("kinds","kind",t,n,su[t],Bn);for(let t of["tiers","kinds"])G(t+"-all").onclick=()=>{G(t).querySelectorAll("input").forEach(n=>{n.checked||(n.checked=!0,n.dispatchEvent(new Event("change")))})}}function g_(){G("fit").onclick=()=>rr(),G("top-view").onclick=()=>rr(!0),G("grid-toggle").onclick=()=>{un.visible=!un.visible,G("grid-toggle").classList.toggle("active",un.visible),G("grid-toggle").setAttribute("aria-pressed",String(un.visible)),yn=!0},G("panel-toggle").onclick=()=>co(!G("sidebar").classList.contains("open")),G("panel-close").onclick=()=>co(!1),G("object-close").onclick=()=>{G("object-detail").hidden=!0},document.addEventListener("keydown",i=>{i.key==="Escape"&&(co(!1),G("object-detail").hidden=!0,G("activity-detail").hidden=!0,G("timeline-more").open=!1)}),G("dimension").onchange=i=>{vn=Number(i.target.value),uo(),Fn(),rr()},G("time").oninput=i=>ti(Number(i.target.value)),G("play").onclick=()=>{et&&(Ze>=et&&(Ze=0),ni=null,G("activity-detail").hidden=!0,jt=!jt,Fn())},G("latest").onclick=()=>ti(et),G("jump-form").onsubmit=i=>{i.preventDefault();let e=G("jump-time").value;if(!/^\d+:[0-5]\d:[0-5]\d$/.test(e))return;let[t,n,s]=e.split(":").map(Number);ti((t*3600+n*60+s)*20),G("timeline-more").open=!1},G("previous-event").onclick=()=>{let i=ii.findLast(e=>e.tick<Ze);i?ti(i.tick,i,!0):(ti(0),Xc(null))},G("next-event").onclick=()=>{let i=ii.find(e=>e.tick>Ze);i&&ti(i.tick,i,!0)},G("activity-close").onclick=()=>{G("activity-detail").hidden=!0},G("highlight-toggle").onchange=()=>Fn(),G("textures-toggle").onchange=()=>Fn(),document.addEventListener("visibilitychange",()=>{ir=0,yn=!0,nu(),document.hidden||setTimeout(Wc,0)}),window.addEventListener("pagehide",nu)}function fu(i){if(requestAnimationFrame(fu),document.hidden){ir=0;return}let e=ir?Math.min((i-ir)/1e3,.2):0;ir=i,jt&&(Ze=Math.min(et,Ze+e*Math.max(et/70,20)*Number(G("speed").value)),G("time").value=Math.round(Ze),Ze>=et&&(jt=!1),(!jt||i-ou>=80&&Math.floor(Ze)!==au)&&Fn()),yn&&(vt.render(xn,Nt),yn=!1)}async function __(){try{let i=await fetch("./data.json",{cache:"no-cache"});if(!i.ok)throw Error("data");if(qe=await i.json(),qe.schema!==1||!Array.isArray(qe.objects))throw Error("schema")}catch{kc("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0431\u0430\u0437\u0443. \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443.");return}et=qe.objects.reduce((i,e)=>Math.max(i,e.start,e.end||0),0),Ze=et,Hc=Oc(qe.objects),G("time").max=Math.max(1,et),G("time").value=et,G("play").disabled=!et,G("duration").textContent=zn(et),G("dimension").replaceChildren();for(let i of qe.dimensions.length?qe.dimensions:[0]){let e=document.createElement("option");e.value=i,e.textContent=ru[i]||"\u0418\u0437\u043C\u0435\u0440\u0435\u043D\u0438\u0435 "+i,G("dimension").append(e)}vn=Number(G("dimension").value),G("dimension-field").hidden=qe.dimensions.length<2,cu(),qe.status==="awaiting-audit"&&(G("notice").hidden=!1,G("notice").textContent="\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0435\u0449\u0451 \u043D\u0435 \u0441\u043E\u0431\u0438\u0440\u0430\u0435\u0442\u0441\u044F.");for(let i of["\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u043C\u0430\u0448\u0438\u043D\u044B, \u0442\u0440\u0443\u0431\u044B \u0438 \u043A\u0430\u0431\u0435\u043B\u0438 \u0432 \u0447\u0430\u043D\u043A\u0430\u0445 \u0441 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 Server Utilities.","\u041E\u0431\u043B\u0430\u0441\u0442\u044C \u0438 \u0431\u043B\u043E\u043A\u0438 \u0441\u0432\u0435\u0440\u044F\u044E\u0442\u0441\u044F \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C \u0440\u0430\u0437 \u0432 \u0447\u0430\u0441.","\u041A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u044B \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435; \u0441\u0430\u0439\u0442 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u044B\u0439."]){let e=document.createElement("li");e.textContent=i,G("limits").append(e)}du();try{h_(),g_(),uo(),Fn(),rr()}catch(i){kc("3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E. \u0412\u043A\u043B\u044E\u0447\u0438\u0442\u0435 WebGL \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435."),console.error(i)}window.liveBaseState=()=>({visible:On.length,total:qe.objects.length,dimension:vn,time:Ze,playing:jt,webgl:!!vt,tiers:[...Mn],textured:G("textures-toggle").checked,textureStats:Ri?.stats(),activity:ii.reduce((i,e)=>({added:i.added+e.added,changed:i.changed+e.changed,removed:i.removed+e.removed}),{added:0,changed:0,removed:0}),highlighted:ho.length}),window.liveBaseActivity=()=>ii.map(i=>({tick:i.tick,added:i.added,changed:i.changed,removed:i.removed})),window.liveBaseNames=()=>qe.objects.map(i=>({id:i.machine_id,name:Ii(i),purpose:nr(i)})),vt&&(Gc=setTimeout(Wc,6e4))}__();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
