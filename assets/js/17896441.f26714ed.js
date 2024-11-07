"use strict";(self.webpackChunktechwave_docs=self.webpackChunktechwave_docs||[]).push([[401],{1243:(e,t,s)=>{s.d(t,{A:()=>p});s(6540);var n=s(4164),a=s(7559),i=s(4718),o=s(9169),l=s(8774),r=s(1312),c=s(6025),d=s(4848);function m(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const u={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,c.Ay)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.A,{"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(m,{className:u.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(l.A,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function v(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function p(){const e=(0,i.OF)(),t=(0,o.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,r.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(v,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},8632:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var n=s(6540),a=s(1003),i=s(9532),o=s(4848);const l=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,o.jsx)(l.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,o.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(4164),u=s(4581),h=s(6929);function b(){const{metadata:e}=c();return(0,o.jsx)(h.A,{previous:e.previous,next:e.next})}var x=s(1878),v=s(4267),p=s(7559),g=s(1312),j=s(8774);const f={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function A(e){let{permalink:t,label:s,count:n,description:a}=e;return(0,o.jsxs)(j.A,{href:t,title:a,className:(0,m.A)(f.tag,n?f.tagWithCount:f.tagRegular),children:[s,n&&(0,o.jsx)("span",{children:n})]})}const _={tags:"tags_jXut",tag:"tag_QGVx"};function N(e){let{tags:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(g.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,m.A)(_.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,o.jsx)("li",{className:_.tag,children:(0,o.jsx)(A,{...e})},e.permalink)))})]})}var C=s(2153);function L(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,l=!!(t||s||n);return i||l?(0,o.jsxs)("footer",{className:(0,m.A)(p.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,o.jsx)("div",{className:(0,m.A)("row margin-top--sm",p.G.docs.docFooterTagsRow),children:(0,o.jsx)("div",{className:"col",children:(0,o.jsx)(N,{tags:a})})}),l&&(0,o.jsx)(C.A,{className:(0,m.A)("margin-top--sm",p.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var T=s(1422),k=s(5195);const M={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function w(e){let{collapsed:t,...s}=e;return(0,o.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",M.tocCollapsibleButton,!t&&M.tocCollapsibleButtonExpanded,s.className),children:(0,o.jsx)(g.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const B={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function I(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:l}=(0,T.u)({initialState:!0});return(0,o.jsxs)("div",{className:(0,m.A)(B.tocCollapsible,!i&&B.tocCollapsibleExpanded,s),children:[(0,o.jsx)(w,{collapsed:i,onClick:l}),(0,o.jsx)(T.N,{lazy:!0,className:B.tocCollapsibleContent,collapsed:i,children:(0,o.jsx)(k.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const V={tocMobile:"tocMobile_ITEo"};function H(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(I,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(p.G.docs.docTocMobile,V.tocMobile)})}var y=s(7763);function E(){const{toc:e,frontMatter:t}=c();return(0,o.jsx)(y.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:p.G.docs.docTocDesktop})}var G=s(1107),P=s(2125);function F(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,o.jsxs)("div",{className:(0,m.A)(p.G.docs.docMarkdown,"markdown"),children:[s&&(0,o.jsx)("header",{children:(0,o.jsx)(G.A,{as:"h1",children:s})}),(0,o.jsx)(P.A,{children:t})]})}var R=s(1243),D=s(6896);const S={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function U(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,u.l)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,o.jsx)(H,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,o.jsx)(E,{})}}(),{metadata:n}=c();return(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&S.docItemCol),children:[(0,o.jsx)(D.A,{metadata:n}),(0,o.jsx)(x.A,{}),(0,o.jsxs)("div",{className:S.docItemContainer,children:[(0,o.jsxs)("article",{children:[(0,o.jsx)(R.A,{}),(0,o.jsx)(v.A,{}),s.mobile,(0,o.jsx)(F,{children:t}),(0,o.jsx)(L,{})]}),(0,o.jsx)(b,{})]})]}),s.desktop&&(0,o.jsx)("div",{className:"col col--3",children:s.desktop})]})}function O(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,o.jsx)(r,{content:e.content,children:(0,o.jsxs)(a.e3,{className:t,children:[(0,o.jsx)(d,{}),(0,o.jsx)(U,{children:(0,o.jsx)(s,{})})]})})}},6929:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(1312),a=s(4164),i=s(8774),o=s(4848);function l(e){const{permalink:t,title:s,subLabel:n,isNext:l}=e;return(0,o.jsxs)(i.A,{className:(0,a.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,o.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,o.jsx)("div",{className:"pagination-nav__label",children:s})]})}function r(e){const{previous:t,next:s}=e;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,o.jsx)(l,{...t,subLabel:(0,o.jsx)(n.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,o.jsx)(l,{...s,subLabel:(0,o.jsx)(n.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,s)=>{s.d(t,{A:()=>r});s(6540);var n=s(4164),a=s(1312),i=s(7559),o=s(3025),l=s(4848);function r(e){let{className:t}=e;const s=(0,o.r)();return s.badge?(0,l.jsx)("span",{className:(0,n.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},1878:(e,t,s)=>{s.d(t,{A:()=>v});s(6540);var n=s(4164),a=s(4586),i=s(8774),o=s(1312),l=s(4070),r=s(7559),c=s(3886),d=s(3025),m=s(4848);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,m.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=u[e.versionMetadata.banner];return(0,m.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,m.jsx)(o.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,m.jsx)("b",{children:(0,m.jsx)(i.A,{to:s,onClick:n,children:(0,m.jsx)(o.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.A)(),{pluginId:o}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,c.g1)(o),{latestDocSuggestion:u,latestVersionSuggestion:x}=(0,l.HW)(o),v=u??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,m.jsxs)("div",{className:(0,n.A)(t,r.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,m.jsx)("div",{children:(0,m.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,m.jsx)("div",{className:"margin-top--md",children:(0,m.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,m.jsx)(x,{className:t,versionMetadata:s}):null}}}]);