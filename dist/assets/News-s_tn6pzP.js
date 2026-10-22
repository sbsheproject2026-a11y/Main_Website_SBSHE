import{r as e}from"./rolldown-runtime-hePW80VL.js";import{c as t,g as n,l as r,m as i}from"./index-CTUkKMAp.js";var a=e(n(),1),o=r();function s(){let[e,n]=(0,a.useState)(``),[r,s]=(0,a.useState)(1),[c,l]=(0,a.useState)(10),[u]=i(),[d,f]=(0,a.useState)([]),p=u.get(`type`);(0,a.useEffect)(()=>{m(p)},[p]);let m=async e=>{if(e)try{let n=e===`news`?16:e===`event`?17:null;if(!n)return;let r=await t(n);f((r||[]).filter(e=>e.is_active===!0)),s(1)}catch(e){console.log(`News/Event data error:`,e),f([])}},h=d.map(e=>({id:e.id,title:e.name||``,type:e.menu_name||``,date:e.date?e.date.split(`-`).reverse().join(`-`):``,description:e.description||``})).filter(t=>{let n=e.toLowerCase().trim();return t.title.toLowerCase().includes(n)||t.type.toLowerCase().includes(n)||t.date.toLowerCase().includes(n)||t.description.toLowerCase().includes(n)}),g=Math.ceil(h.length/c),_=(r-1)*c,v=Math.min(_+c,h.length),y=h.slice(_,v);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`style`,{children:`
                .news-section {
                    background: #f8f9fc;
                }

                .news-heading-line {
                    width: 45px;
                    height: 3px;
                    background: #f5a623;
                    display: inline-block;
                    margin-right: 10px;
                    vertical-align: middle;
                }

                .news-subtitle {
                    letter-spacing: 4px;
                    font-weight: 600;
                }

                .news-controls {
                    background: #ffffff;
                    border: 1px solid #edf0f5;
                    border-radius: 12px;
                    padding: 15px 20px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
                }

                .news-search {
                    max-width: 280px;
                    position: relative;
                }

                .news-search input {
                    border-radius: 8px !important;
                    padding-left: 40px;
                    height: 42px;
                    border: 1px solid #e1e5eb;
                }

                .news-search-icon {
                    position: absolute;
                    left: 14px;
                    top: 12px;
                    color: #999;
                    z-index: 2;
                }

                .news-record-select {
                    width: 80px !important;
                    height: 40px;
                    border-radius: 7px !important;
                    border: 1px solid #e1e5eb;
                }

                .news-table-card {
                    background: #ffffff;
                    border-radius: 14px;
                    overflow: hidden;
                    border: 1px solid #edf0f5;
                    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.06);
                }

                .news-table {
                    margin-bottom: 0;
                }

                .news-table thead th {
                    background: #01507c;
                    color: #ffffff;
                    border: none;
                    padding: 16px 14px;
                    font-size: 13px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .news-table tbody td {
                    padding: 16px 14px;
                    vertical-align: middle;
                    color: #555;
                    font-size: 14px;
                    border-color: #edf0f5;
                }

                .news-table tbody tr {
                    transition: all 0.2s ease;
                }

                .news-table tbody tr:hover {
                    background: #f8fbff;
                }

                .news-sr {
                    width: 70px;
                    color: #999 !important;
                    font-weight: 600;
                }

                .news-title {
                    color: #222 !important;
                    font-weight: 600;
                    min-width: 180px;
                }

                .news-date {
                    white-space: nowrap;
                    color: #666 !important;
                }

                .news-description {
                    min-width: 320px;
                    max-width: 500px;
                    line-height: 1.6;
                    color: #777 !important;
                }

                .news-type-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 11px;
                    font-weight: 600;
                    white-space: nowrap;
                }

                .news-type-event {
                    background: #e7f8ef;
                    color: #198754;
                }

                .news-type-news {
                    background: #e8f1ff;
                    color: #01507c;
                }

                .blink-badge {
                    animation: blinkBadge 1.5s ease-in-out infinite;
                }

                @keyframes blinkBadge {
                    0% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.55;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .news-empty {
                    padding: 50px 20px !important;
                    color: #999 !important;
                }

                .news-empty-icon {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: #f1f5fa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 15px;
                    font-size: 25px;
                }

                .news-pagination-wrapper {
                    background: #ffffff;
                    border: 1px solid #edf0f5;
                    border-radius: 12px;
                    padding: 15px 20px;
                    margin-top: 20px;
                }

                .news-pagination .page-link {
                    border: none;
                    margin: 0 3px;
                    border-radius: 7px !important;
                    color: #555;
                    min-width: 38px;
                    height: 38px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 13px;
                    transition: all 0.2s ease;
                }

                .news-pagination .page-link:hover {
                    background: #eaf2ff;
                    color: #01507c;
                }

                .news-pagination .page-item.active .page-link {
                    background: #01507c;
                    color: #ffffff;
                    box-shadow: 0 4px 10px rgba(13, 110, 253, 0.25);
                }

                .news-pagination .page-item.disabled .page-link {
                    color: #bbb;
                    background: #f5f5f5;
                }

                @media (max-width: 767px) {
                    .news-section {
                        padding-top: 40px !important;
                        padding-bottom: 40px !important;
                    }

                    .news-section .container {
                        padding-left: 15px;
                        padding-right: 15px;
                    }

                    .news-heading {
                        font-size: 28px;
                    }

                    .news-subtitle {
                        font-size: 13px;
                        letter-spacing: 2px !important;
                    }

                    .news-controls {
                        padding: 15px;
                    }

                    .news-controls-left {
                        margin-bottom: 15px;
                    }

                    .news-search {
                        max-width: 100%;
                        width: 100%;
                    }

                    .news-search input {
                        width: 100%;
                    }

                    .news-table-card {
                        border-radius: 10px;
                    }

                    .news-table thead th {
                        padding: 12px 10px;
                        font-size: 12px;
                    }

                    .news-table tbody td {
                        padding: 13px 10px;
                        font-size: 13px;
                    }

                    .news-description {
                        min-width: 260px;
                        max-width: 300px;
                    }

                    .news-pagination-wrapper {
                        padding: 15px;
                    }

                    .news-pagination {
                        margin-top: 15px;
                        justify-content: flex-start !important;
                        flex-wrap: wrap;
                    }

                    .news-pagination .page-link {
                        min-width: 34px;
                        height: 34px;
                        font-size: 12px;
                        margin: 2px;
                    }
                }

                @media (max-width: 480px) {
                    .news-heading {
                        font-size: 24px;
                    }

                    .news-record-text {
                        font-size: 13px;
                    }

                    .news-description {
                        min-width: 230px;
                    }
                }
            `}),(0,o.jsx)(`div`,{className:`container-fluid news-section py-5`,children:(0,o.jsxs)(`div`,{className:`container pt-4 pb-4`,children:[(0,o.jsxs)(`div`,{className:`text-center mb-5`,children:[(0,o.jsxs)(`h5`,{className:`text-primary text-uppercase mb-3 news-subtitle`,children:[(0,o.jsx)(`span`,{className:`news-heading-line`}),p]}),(0,o.jsxs)(`h1`,{className:`news-heading text-capitalize mb-0`,children:[`Latest `,p]}),(0,o.jsx)(`p`,{className:`text-muted mt-3 mb-0`,children:`Stay updated with our latest announcements, news and events.`})]}),(0,o.jsx)(`div`,{className:`news-controls mb-4`,children:(0,o.jsxs)(`div`,{className:`row align-items-center`,children:[(0,o.jsx)(`div`,{className:`col-md-6 news-controls-left`,children:(0,o.jsxs)(`div`,{className:`d-flex align-items-center`,children:[(0,o.jsx)(`span`,{className:`text-muted news-record-text mr-2`,children:`Show`}),(0,o.jsxs)(`select`,{className:`form-control news-record-select`,value:c,onChange:e=>{l(Number(e.target.value)),s(1)},children:[(0,o.jsx)(`option`,{value:10,children:`10`}),(0,o.jsx)(`option`,{value:25,children:`25`}),(0,o.jsx)(`option`,{value:50,children:`50`}),(0,o.jsx)(`option`,{value:100,children:`100`})]}),(0,o.jsx)(`span`,{className:`text-muted news-record-text ml-2`,children:`entries`})]})}),(0,o.jsx)(`div`,{className:`col-md-6`,children:(0,o.jsx)(`div`,{className:`d-flex justify-content-md-end`,children:(0,o.jsxs)(`div`,{className:`news-search`,children:[(0,o.jsx)(`i`,{className:`fa fa-search news-search-icon`}),(0,o.jsx)(`input`,{type:`text`,className:`form-control`,placeholder:`Search news or events...`,value:e,onChange:e=>{n(e.target.value),s(1)}})]})})})]})}),(0,o.jsx)(`div`,{className:`news-table-card`,children:(0,o.jsx)(`div`,{className:`table-responsive`,children:(0,o.jsxs)(`table`,{className:`table news-table`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{children:`#`}),(0,o.jsx)(`th`,{children:`Title`}),(0,o.jsx)(`th`,{children:`Type`}),(0,o.jsx)(`th`,{children:`Date`}),(0,o.jsx)(`th`,{children:`Description`})]})}),(0,o.jsx)(`tbody`,{children:y.length>0?y.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{className:`news-sr`,children:_+t+1}),(0,o.jsx)(`td`,{className:`news-title`,children:e.title}),(0,o.jsx)(`td`,{children:(0,o.jsxs)(`span`,{className:`news-type-badge blink-badge ${e.type===`Event`?`news-type-event`:`news-type-news`}`,children:[(0,o.jsx)(`i`,{className:e.type===`Event`?`fa fa-calendar`:`fa fa-newspaper-o`}),e.type]})}),(0,o.jsxs)(`td`,{className:`news-date`,children:[(0,o.jsx)(`i`,{className:`fa fa-calendar text-primary mr-2`}),e.date]}),(0,o.jsx)(`td`,{className:`news-description`,children:e.description||`—`})]},e.id)):(0,o.jsx)(`tr`,{children:(0,o.jsxs)(`td`,{colSpan:`5`,className:`text-center news-empty`,children:[(0,o.jsx)(`div`,{className:`news-empty-icon`,children:(0,o.jsx)(`i`,{className:`fa fa-newspaper-o`})}),(0,o.jsx)(`h6`,{className:`text-dark`,children:`No News or Events Found`}),(0,o.jsx)(`small`,{children:`Try changing your search keyword.`})]})})})]})})}),(0,o.jsx)(`div`,{className:`news-pagination-wrapper`,children:(0,o.jsxs)(`div`,{className:`row align-items-center`,children:[(0,o.jsx)(`div`,{className:`col-md-6 mb-3 mb-md-0`,children:(0,o.jsxs)(`span`,{className:`text-muted small`,children:[`Showing`,` `,(0,o.jsx)(`strong`,{children:h.length>0?_+1:0}),` `,`to`,` `,(0,o.jsx)(`strong`,{children:v}),` `,`of`,` `,(0,o.jsx)(`strong`,{children:h.length}),` `,`entries`]})}),(0,o.jsx)(`div`,{className:`col-md-6`,children:(0,o.jsx)(`nav`,{children:(0,o.jsxs)(`ul`,{className:`pagination news-pagination justify-content-md-end mb-0`,children:[(0,o.jsx)(`li`,{className:`page-item ${r===1?`disabled`:``}`,children:(0,o.jsxs)(`button`,{className:`page-link`,onClick:()=>{r>1&&s(r-1)},disabled:r===1,children:[(0,o.jsx)(`i`,{className:`fa fa-angle-left mr-1`}),`Prev`]})}),Array.from({length:g},(e,t)=>t+1).map(e=>(0,o.jsx)(`li`,{className:`page-item ${r===e?`active`:``}`,children:(0,o.jsx)(`button`,{className:`page-link`,onClick:()=>s(e),children:e})},e)),(0,o.jsx)(`li`,{className:`page-item ${r===g?`disabled`:``}`,children:(0,o.jsxs)(`button`,{className:`page-link`,onClick:()=>{r<g&&s(r+1)},disabled:r===g,children:[`Next`,(0,o.jsx)(`i`,{className:`fa fa-angle-right ml-1`})]})})]})})})]})})]})})]})}export{s as default};