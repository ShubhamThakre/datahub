(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5977],{4137:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4733:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(4137)),l=["components"],i={title:"Removing Metadata from DataHub",sidebar_label:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md"},u="Removing Metadata from DataHub",c={unversionedId:"docs/how/delete-metadata",id:"docs/how/delete-metadata",isDocsHomePage:!1,title:"Removing Metadata from DataHub",description:"There are a two ways to delete data from DataHub.",source:"@site/genDocs/docs/how/delete-metadata.md",sourceDirName:"docs/how",slug:"/how/delete-metadata",permalink:"/docs/how/delete-metadata",editUrl:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md",version:"current",frontMatter:{title:"Removing Metadata from DataHub",sidebar_label:"Removing Metadata from DataHub",slug:"/how/delete-metadata",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/docs/how/delete-metadata.md"},sidebar:"overviewSidebar",previous:{title:"How to Extract Logs from DataHub Containers",permalink:"/docs/how/extract-container-logs"},next:{title:"React Analytics",permalink:"/docs/datahub-web-react/src/app/analytics"}},d=[{value:"Configuring DataHub CLI",id:"configuring-datahub-cli",children:[]},{value:"Delete By Urn",id:"delete-by-urn",children:[]},{value:"Rollback Ingestion Batch Run",id:"rollback-ingestion-batch-run",children:[]}],s={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"removing-metadata-from-datahub"},"Removing Metadata from DataHub"),(0,o.kt)("p",null,"There are a two ways to delete data from DataHub."),(0,o.kt)("h2",{id:"configuring-datahub-cli"},"Configuring DataHub CLI"),(0,o.kt)("p",null,"The CLI will point to localhost DataHub by default. Running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub init\n")),(0,o.kt)("p",null,"will allow you to customize the datahub instance you are communicating with."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: Provide your GMS instance's host when the prompt asks you for the DataHub host.")),(0,o.kt)("p",null,"Alternatively, you can set the following env variables if you don't want to use a config file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"DATAHUB_SKIP_CONFIG=True\nDATAHUB_GMS_HOST=http://localhost:8080\nDATAHUB_GMS_TOKEN=\n")),(0,o.kt)("p",null,"The env variables take precendence over what is in the config."),(0,o.kt)("h2",{id:"delete-by-urn"},"Delete By Urn"),(0,o.kt)("p",null,"To delete all the data related to a single entity, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'datahub delete --urn "<my urn>"\n')),(0,o.kt)("p",null,"You can optionally add ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," to skip confirmations"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: make sure you surround your urn with quotes! If you do not include the quotes, your terminal may misinterpret the command.")),(0,o.kt)("h2",{id:"rollback-ingestion-batch-run"},"Rollback Ingestion Batch Run"),(0,o.kt)("p",null,"Whenever you run ",(0,o.kt)("inlineCode",{parentName:"p"},"datahub ingest -c ..."),", all the metadata ingested with that run will have the same run id."),(0,o.kt)("p",null,"To view the ids of the most recent set of ingestion batches, execute"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub ingest list-runs\n")),(0,o.kt)("p",null,"That will print out a table of all the runs. Once you have an idea of which run you want to roll back, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub ingest show --run-id <run-id>\n")),(0,o.kt)("p",null,"to see more info of the run."),(0,o.kt)("p",null,"Finally, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"datahub ingest rollback --run-id <run-id>\n")),(0,o.kt)("p",null,"To rollback all aspects added with this run and all entities created by this run."))}p.isMDXComponent=!0}}]);