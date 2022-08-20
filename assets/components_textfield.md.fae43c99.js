import{_ as c,r as l,o,c as i,b as u,d as t,w as s,e as a}from"./app.462c4cb7.js";const h={};function _(r,p){const d=l("m-text-field");return o(),i(d)}var n=c(h,[["render",_]]);const g=a('<h1 id="textfield" tabindex="-1">TextField <a class="header-anchor" href="#textfield" aria-hidden="true">#</a></h1><p>The <code>m-text-field</code> fields components are used for collecting user provided information.</p><h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h1><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">Default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><br>',6),k=a(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-text-field</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="placeholder-color" tabindex="-1">Placeholder color <a class="header-anchor" href="#placeholder-color" aria-hidden="true">#</a></h3><br>`,3),m=a(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-text-field</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Placeholder<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholderColor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>red<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="disabled" tabindex="-1">Disabled <a class="header-anchor" href="#disabled" aria-hidden="true">#</a></h3><br>`,3),f=a(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-text-field</span> <span class="token attr-name">disabled</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="error" tabindex="-1">Error <a class="header-anchor" href="#error" aria-hidden="true">#</a></h3><br>`,3),b=a(`<div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>m-text-field</span> <span class="token attr-name">error</span> <span class="token attr-name">errorMessage</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>User or password wrong!<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>placeholder</td><td>string</td><td></td><td>Sets the input\u2019s placeholder text</td></tr><tr><td>label</td><td>string</td><td></td><td>Replaces the default label</td></tr><tr><td>count</td><td>boolean</td><td></td><td>Show count of the text</td></tr><tr><td>maxLength</td><td>number</td><td></td><td>Set how many words can be use in the text field</td></tr><tr><td>icon</td><td>string</td><td></td><td>Use icon in the text field</td></tr><tr><td>mask</td><td>string</td><td></td><td>Set mask to text field</td></tr><tr><td>placeholderColor</td><td>string</td><td></td><td>Set color to placeholder text</td></tr><tr><td>disabled</td><td>boolean</td><td>false</td><td>Disable text input</td></tr><tr><td>error</td><td>boolean</td><td>false</td><td>Set if input is error</td></tr><tr><td>errorMessage</td><td>string</td><td></td><td>Set error message</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td>blur</td><td>Event</td><td>Emitted when the input is blurred</td></tr><tr><td>change</td><td>any</td><td>Emitted when the input is changed by user interaction</td></tr><tr><td>focus</td><td>Event</td><td>Emitted when component is focused</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Parameters</th><th>Description</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table>`,7),T='{"title":"TextField","description":"","frontmatter":{},"headers":[{"level":2,"title":"Examples","slug":"examples"},{"level":3,"title":"Default","slug":"default"},{"level":3,"title":"Placeholder color","slug":"placeholder-color"},{"level":3,"title":"Disabled","slug":"disabled"},{"level":3,"title":"Error","slug":"error"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Slots","slug":"slots"}],"relativePath":"components/textfield.md"}',x={},S=Object.assign(x,{__name:"textfield",setup(r){return(p,d)=>{const e=l("DemoContainer");return o(),u("div",null,[g,t(e,null,{default:s(()=>[t(n)]),_:1}),k,t(e,null,{default:s(()=>[t(n,{placeholder:"Placeholder",placeholderColor:"red"})]),_:1}),m,t(e,null,{default:s(()=>[t(n,{disabled:"",placeholder:"Disabled"})]),_:1}),f,t(e,null,{default:s(()=>[t(n,{error:"",errorMessage:"User or password wrong!"})]),_:1}),b])}}});export{T as __pageData,S as default};