/* Copyright (c) 2018 UnitedBlades Inc. All rights reserved. */
!function(global){"use strict";var Op=Object.prototype;var hasOwn=Op.hasOwnProperty;var undefined;var $Symbol=typeof Symbol==="function"?Symbol:{};var iteratorSymbol=$Symbol.iterator||"@@iterator";var asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator";var toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";var inModule=typeof module==="object";var runtime=global.regeneratorRuntime;if(runtime){if(inModule){module.exports=runtime}return}runtime=global.regeneratorRuntime=inModule?module.exports:{};function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator;var generator=Object.create(protoGenerator.prototype);var context=new Context(tryLocsList||[]);generator._invoke=makeInvokeMethod(innerFn,self,context);return generator}runtime.wrap=wrap;function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}var GenStateSuspendedStart="suspendedStart";var GenStateSuspendedYield="suspendedYield";var GenStateExecuting="executing";var GenStateCompleted="completed";var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this};var getProto=Object.getPrototypeOf;var NativeIteratorPrototype=getProto&&getProto(getProto(values([])));if(NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)){IteratorPrototype=NativeIteratorPrototype}var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype;GeneratorFunctionPrototype.constructor=GeneratorFunction;GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction";function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}runtime.isGeneratorFunction=function(genFun){var ctor=typeof genFun==="function"&&genFun.constructor;return ctor?ctor===GeneratorFunction||(ctor.displayName||ctor.name)==="GeneratorFunction":false};runtime.mark=function(genFun){if(Object.setPrototypeOf){Object.setPrototypeOf(genFun,GeneratorFunctionPrototype)}else{genFun.__proto__=GeneratorFunctionPrototype;if(!(toStringTagSymbol in genFun)){genFun[toStringTagSymbol]="GeneratorFunction"}}genFun.prototype=Object.create(Gp);return genFun};runtime.awrap=function(arg){return{__await:arg}};function AsyncIterator(generator){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if(record.type==="throw"){reject(record.arg)}else{var result=record.arg;var value=result.value;if(value&&typeof value==="object"&&hasOwn.call(value,"__await")){return Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)})}return Promise.resolve(value).then(function(unwrapped){result.value=unwrapped;resolve(result)},reject)}}var previousPromise;function enqueue(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){invoke(method,arg,resolve,reject)})}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}this._invoke=enqueue}defineIteratorMethods(AsyncIterator.prototype);AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this};runtime.AsyncIterator=AsyncIterator;runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})};function makeInvokeMethod(innerFn,self,context){var state=GenStateSuspendedStart;return function invoke(method,arg){if(state===GenStateExecuting){throw new Error("Generator is already running")}if(state===GenStateCompleted){if(method==="throw"){throw arg}return doneResult()}context.method=method;context.arg=arg;while(true){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if(context.method==="next"){context.sent=context._sent=context.arg}else if(context.method==="throw"){if(state===GenStateSuspendedStart){state=GenStateCompleted;throw context.arg}context.dispatchException(context.arg)}else if(context.method==="return"){context.abrupt("return",context.arg)}state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if(record.type==="normal"){state=context.done?GenStateCompleted:GenStateSuspendedYield;if(record.arg===ContinueSentinel){continue}return{value:record.arg,done:context.done}}else if(record.type==="throw"){state=GenStateCompleted;context.method="throw";context.arg=record.arg}}}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){context.delegate=null;if(context.method==="throw"){if(delegate.iterator.return){context.method="return";context.arg=undefined;maybeInvokeDelegate(delegate,context);if(context.method==="throw"){return ContinueSentinel}}context.method="throw";context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if(record.type==="throw"){context.method="throw";context.arg=record.arg;context.delegate=null;return ContinueSentinel}var info=record.arg;if(!info){context.method="throw";context.arg=new TypeError("iterator result is not an object");context.delegate=null;return ContinueSentinel}if(info.done){context[delegate.resultName]=info.value;context.next=delegate.nextLoc;if(context.method!=="return"){context.method="next";context.arg=undefined}}else{return info}context.delegate=null;return ContinueSentinel}defineIteratorMethods(Gp);Gp[toStringTagSymbol]="Generator";Gp[iteratorSymbol]=function(){return this};Gp.toString=function(){return"[object Generator]"};function pushTryEntry(locs){var entry={tryLoc:locs[0]};if(1 in locs){entry.catchLoc=locs[1]}if(2 in locs){entry.finallyLoc=locs[2];entry.afterLoc=locs[3]}this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal";delete record.arg;entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}];tryLocsList.forEach(pushTryEntry,this);this.reset(true)}runtime.keys=function(object){var keys=[];for(var key in object){keys.push(key)}keys.reverse();return function next(){while(keys.length){var key=keys.pop();if(key in object){next.value=key;next.done=false;return next}}next.done=true;return next}};function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod){return iteratorMethod.call(iterable)}if(typeof iterable.next==="function"){return iterable}if(!isNaN(iterable.length)){var i=-1,next=function next(){while(++i<iterable.length){if(hasOwn.call(iterable,i)){next.value=iterable[i];next.done=false;return next}}next.value=undefined;next.done=true;return next};return next.next=next}}return{next:doneResult}}runtime.values=values;function doneResult(){return{value:undefined,done:true}}Context.prototype={constructor:Context,reset:function(skipTempReset){this.prev=0;this.next=0;this.sent=this._sent=undefined;this.done=false;this.delegate=null;this.method="next";this.arg=undefined;this.tryEntries.forEach(resetTryEntry);if(!skipTempReset){for(var name in this){if(name.charAt(0)==="t"&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))){this[name]=undefined}}}},stop:function(){this.done=true;var rootEntry=this.tryEntries[0];var rootRecord=rootEntry.completion;if(rootRecord.type==="throw"){throw rootRecord.arg}return this.rval},dispatchException:function(exception){if(this.done){throw exception}var context=this;function handle(loc,caught){record.type="throw";record.arg=exception;context.next=loc;if(caught){context.method="next";context.arg=undefined}return!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];var record=entry.completion;if(entry.tryLoc==="root"){return handle("end")}if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc");var hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}else if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else if(hasCatch){if(this.prev<entry.catchLoc){return handle(entry.catchLoc,true)}}else if(hasFinally){if(this.prev<entry.finallyLoc){return handle(entry.finallyLoc)}}else{throw new Error("try statement without catch or finally")}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}if(finallyEntry&&(type==="break"||type==="continue")&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc){finallyEntry=null}var record=finallyEntry?finallyEntry.completion:{};record.type=type;record.arg=arg;if(finallyEntry){this.method="next";this.next=finallyEntry.finallyLoc;return ContinueSentinel}return this.complete(record)},complete:function(record,afterLoc){if(record.type==="throw"){throw record.arg}if(record.type==="break"||record.type==="continue"){this.next=record.arg}else if(record.type==="return"){this.rval=this.arg=record.arg;this.method="return";this.next="end"}else if(record.type==="normal"&&afterLoc){this.next=afterLoc}return ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc){this.complete(entry.completion,entry.afterLoc);resetTryEntry(entry);return ContinueSentinel}}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if(record.type==="throw"){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc};if(this.method==="next"){this.arg=undefined}return ContinueSentinel}}}(function(){return this}()||Function("return this")());"use strict";(function(){var __alist_adsv=function __alist_adsv(){var config={baseUrl:"https://drrcckbju3nd0.cloudfront.net",apiver:"v0",wsid:"alistcloud-container-{sid}"};var struct={sid:0,cbf:"__alist_adsv.display",async:false,sdkver:"0.1.0",t:"json"};var getWorkSpaceDoc=function getWorkSpaceDoc(sid){var wsClassId=config.wsid.replace("{sid}",sid);return document.getElementsByClassName(wsClassId)[0]};var jsonToQueryString=function jsonToQueryString(j){var result="";var length=Object.keys(j).length;var count=0;for(k in j){count++;result+=String(k)+"="+String(j[k]);if(count!==length){result+="&"}}return result};var resizeIframe=function resizeIframe(obj){obj.style.height=obj.contentWindow.document.body.scrollHeight+"px";obj.style.width=obj.contentWindow.document.body.scrollWidth+"px"};var pushLog=function pushLog(name,queryStringObj){var a=document.createElement("img");try{tm=top.innerWidth;wi=top}catch(e){wi=window}queryStringObj.loc=encodeURIComponent(wi.location.href);queryStringObj.ref=encodeURIComponent(wi.document.referrer);queryStringObj.w=wi.innerWidth;queryStringObj.h=wi.innerHeight;queryStringObj.c=Math.floor(Math.random()*1e12);var queryString=jsonToQueryString(queryStringObj);if(queryString!==""){queryString="?"+queryString}a.src=config.baseUrl+"/m/"+name+queryString;a.width="1";a.height="1";a.style.cssText="display: none;";document.body.appendChild(a)};var init=function init(datas){try{var cpy=JSON.parse(JSON.stringify(struct));if(datas.sid){cpy.sid=datas.sid}if(datas.async===true){cpy.async=true}if(datas.baseUrl){config.baseUrl=datas.baseUrl}try{tm=top.innerWidth;wi=top}catch(e){wi=window}var s=document.createElement("script");var src=config.baseUrl+"/"+config.apiver+"/serving"+"?sid="+String(cpy.sid)+"&cbf="+String(cpy.cbf)+"&async="+String(cpy.async)+"&sdkver="+String(cpy.sdkver)+"&w="+String(wi.innerWidth)+"&h="+String(wi.innerHeight)+"&targetid="+String(config.wsid.replace("{sid}",cpy.sid))+"&c="+String(Math.floor(Math.random()*1e12));if(datas.async===true){s.async=true}s.src=src;if(datas.t=="write"){src+="&t=write"}if(cpy.async){var w=getWorkSpaceDoc(cpy.sid);w.appendChild(s)}else{var r="<script"+' src="'+src+'"></'+"script>";document.write(r)}}catch(e){console.warn(e)}};var display=function display(datas){var qs={};qs.sid=datas.sid;qs.adid=datas.adid;qs.async=datas.async;qs.sdkver=datas.sdkver;var w=getWorkSpaceDoc(datas.sid);if(datas.async===true){var a=document.createElement("iframe");a.setAttribute("style","position: relative; border:none;padding:0;margin:0;display:inline-block;");a.setAttribute("marginwidth",0);a.setAttribute("marginheight",0);a.setAttribute("allowtransparency","false");a.setAttribute("vspace",0);a.setAttribute("hspace",0);a.setAttribute("frameborder",0);a.setAttribute("scrolling","no");a.setAttribute("width",datas.w);a.setAttribute("height",datas.h);w.appendChild(a);a.contentWindow.document.open();a.contentWindow.document.write('<html><head></head><body style="padding:0px;margin:0px;border:none;">'+datas.script+"</body></html>");a.contentWindow.document.close()}else{document.write(datas.script)}if(0<datas.adid){pushLog("imp",qs)}};var push=function push(action,sid,adid){var qs={};qs.sid=sid;qs.adid=adid;pushLog(action,qs)};return{init:init,display:display,push:push,func:{resizeIframe:resizeIframe}}};if(window.__alist_adsv===undefined){window.__alist_adsv=__alist_adsv()}})();