import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,d as n,g as r,l as i}from"./index-CTUkKMAp.js";var a=e(r(),1),o=i();function s(){let e=n().state?.id,[r,i]=(0,a.useState)([]),[s,c]=(0,a.useState)(!1),[l,u]=(0,a.useState)(``),[d,f]=(0,a.useState)(``),[p,m]=(0,a.useState)(``),[h,g]=(0,a.useState)(1),[_,v]=(0,a.useState)(10);(0,a.useEffect)(()=>{e&&b(e)},[e]);let y=[89,127],b=async e=>{try{let n=(await t(e)||[]).filter(e=>{let t=e.isActive===1||e.isActive===!0;return e.studyModeId===null||e.studyModeId===void 0||e.studyModeId===``?!1:t&&y.includes(Number(e.studyModeId))});i(n),g(1)}catch(e){console.log(`Course Error:`,e),i([])}},x=()=>{l&&URL.revokeObjectURL(l),c(!1),u(``),f(``)},S=r.filter(e=>{let t=p.toLowerCase().trim();return String(e.code??``).toLowerCase().includes(t)||String(e.name??``).toLowerCase().includes(t)||String(e.nameHindi??``).toLowerCase().includes(t)||String(e.durationName??``).toLowerCase().includes(t)}),C=Math.ceil(S.length/_),w=(h-1)*_,T=Math.min(w+_,S.length),E=S.slice(w,T);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(`div`,{className:`container-fluid py-5 course-section`,children:[(0,o.jsxs)(`div`,{className:`container pt-4 pb-4`,children:[(0,o.jsxs)(`div`,{className:`text-center mb-5`,children:[(0,o.jsxs)(`div`,{className:`course-label`,children:[(0,o.jsx)(`span`,{}),`COURSES`,(0,o.jsx)(`span`,{})]}),(0,o.jsx)(`h1`,{className:`course-heading`,children:`Course Details`}),(0,o.jsx)(`p`,{className:`course-subtitle`,children:`Explore our courses, durations, subjects and study materials`})]}),(0,o.jsxs)(`div`,{className:`course-controls mb-4`,children:[(0,o.jsxs)(`div`,{className:`entries-control`,children:[(0,o.jsx)(`span`,{children:`Show`}),(0,o.jsxs)(`select`,{className:`entries-select`,value:_,onChange:e=>{v(Number(e.target.value)),g(1)},children:[(0,o.jsx)(`option`,{value:10,children:`10`}),(0,o.jsx)(`option`,{value:25,children:`25`}),(0,o.jsx)(`option`,{value:50,children:`50`}),(0,o.jsx)(`option`,{value:100,children:`100`})]}),(0,o.jsx)(`span`,{children:`entries`})]}),(0,o.jsxs)(`div`,{className:`search-box`,children:[(0,o.jsx)(`i`,{className:`fa fa-search`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Search courses...`,value:p,onChange:e=>{m(e.target.value),g(1)}})]})]}),(0,o.jsx)(`div`,{className:`course-table-wrapper`,children:(0,o.jsx)(`div`,{className:`table-responsive`,children:(0,o.jsxs)(`table`,{className:`course-table`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{width:`70`,children:`Sr No`}),(0,o.jsx)(`th`,{children:`Course Code`}),(0,o.jsx)(`th`,{children:`Course Name`}),(0,o.jsx)(`th`,{children:`Duration`}),(0,o.jsx)(`th`,{children:`Eligbilty`})]})}),(0,o.jsx)(`tbody`,{children:E.length>0?E.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{children:(0,o.jsx)(`span`,{className:`serial-number`,children:w+t+1})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(`span`,{className:`course-code`,children:e.code||`-`})}),(0,o.jsxs)(`td`,{children:[(0,o.jsx)(`div`,{className:`course-name`,children:e.name||`-`}),e.nameHindi&&(0,o.jsx)(`div`,{style:{fontSize:`11px`,color:`#999`,marginTop:`3px`},children:e.nameHindi})]}),(0,o.jsx)(`td`,{children:(0,o.jsxs)(`span`,{className:`duration-badge`,children:[(0,o.jsx)(`i`,{className:`fa fa-clock-o mr-1`}),e.durationName||`-`]})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(`div`,{className:`course-overview`,children:e.eligbilty?(0,o.jsx)(`span`,{className:`eligibility-text`,children:e.eligbilty}):(0,o.jsx)(`span`,{className:`eligibility-empty`,children:`—`})})})]},e.id)):(0,o.jsx)(`tr`,{children:(0,o.jsx)(`td`,{colSpan:`8`,className:`no-course`,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`i`,{className:`fa fa-search`}),(0,o.jsx)(`h5`,{children:`No Courses Found`}),(0,o.jsx)(`p`,{children:`Try searching with a different keyword.`})]})})})})]})})}),(0,o.jsxs)(`div`,{className:`course-bottom`,children:[(0,o.jsxs)(`div`,{className:`record-info`,children:[`Showing`,` `,(0,o.jsx)(`strong`,{children:S.length>0?w+1:0}),` `,`to`,` `,(0,o.jsx)(`strong`,{children:T}),` `,`of`,` `,(0,o.jsx)(`strong`,{children:S.length}),` `,`entries`]}),(0,o.jsx)(`nav`,{children:(0,o.jsxs)(`ul`,{className:`course-pagination`,children:[(0,o.jsx)(`li`,{children:(0,o.jsxs)(`button`,{className:h===1?`disabled`:``,onClick:()=>{h>1&&g(h-1)},disabled:h===1,children:[(0,o.jsx)(`i`,{className:`fa fa-angle-left`}),(0,o.jsx)(`span`,{children:`Previous`})]})}),Array.from({length:C},(e,t)=>t+1).map(e=>(0,o.jsx)(`li`,{children:(0,o.jsx)(`button`,{className:h===e?`active`:``,onClick:()=>g(e),children:e})},e)),(0,o.jsx)(`li`,{children:(0,o.jsxs)(`button`,{className:h===C?`disabled`:``,onClick:()=>{h<C&&g(h+1)},disabled:C===0||h===C,children:[(0,o.jsx)(`span`,{children:`Next`}),(0,o.jsx)(`i`,{className:`fa fa-angle-right`})]})})]})})]})]}),(0,o.jsx)(`style`,{children:`

                    .course-overview {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
}

.eligibility-text {
    display: inline-block;
    padding: 5px 12px;
    background: #eef2ff;
    color: #4338ca;
    border: 1px solid #c7d2fe;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: .3px;
    white-space: nowrap;
}

.eligibility-empty {
    color: #cbd5e1;
    font-size: 14px;
}
                        .course-section {
                            background: #f8f9fc;
                        }

                        .course-label {
                            color: #01507c;
                            font-size: 14px;
                            font-weight: 700;
                            letter-spacing: 4px;
                            text-transform: uppercase;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            margin-bottom: 12px;
                        }

                        .course-label span {
                            width: 28px;
                            height: 3px;
                            background: #01507c;
                            border-radius: 10px;
                        }

                        .course-heading {
                            font-size: 36px;
                            font-weight: 700;
                            color: #222;
                            margin-bottom: 8px;
                        }

                        .course-subtitle {
                            color: #777;
                            font-size: 15px;
                            margin: 0;
                        }

                        .course-controls {
                            background: #fff;
                            padding: 18px 20px;
                            border-radius: 10px;
                            border: 1px solid #eee;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            box-shadow: 0 3px 15px rgba(0, 0, 0, .04);
                        }

                        .entries-control {
                            display: flex;
                            align-items: center;
                            gap: 8px;
                            color: #666;
                            font-size: 14px;
                        }

                        .entries-select {
                            width: 75px;
                            height: 38px;
                            border: 1px solid #ddd;
                            border-radius: 6px;
                            padding: 0 8px;
                            color: #444;
                            background: #fff;
                        }

                        .search-box {
                            width: 280px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            border: 1px solid #ddd;
                            border-radius: 7px;
                            background: #fff;
                            padding: 0 12px;
                        }

                        .search-box i {
                            color: #999;
                            margin-right: 9px;
                        }

                        .search-box input {
                            border: none;
                            outline: none;
                            width: 100%;
                            font-size: 14px;
                            color: #444;
                        }

                        .course-table-wrapper {
                            background: #fff;
                            border-radius: 12px;
                            border: 1px solid #eee;
                            overflow: hidden;
                            box-shadow: 0 5px 25px rgba(0, 0, 0, .06);
                        }

                        .course-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 0;
                            min-width: 1050px;
                        }

                        .course-table thead th {
                            background: #01507c;
                            color: #fff;
                            font-size: 13px;
                            font-weight: 600;
                            padding: 15px 13px;
                            border: none;
                            white-space: nowrap;
                        }

                        .course-table tbody td {
                            padding: 15px 13px;
                            border-bottom: 1px solid #eee;
                            vertical-align: middle;
                            font-size: 13px;
                            color: #555;
                        }

                        .course-table tbody tr {
                            transition: .2s ease;
                        }

                        .course-table tbody tr:hover {
                            background: #f8fbff;
                        }

                        .course-table tbody tr:last-child td {
                            border-bottom: none;
                        }

                        .serial-number {
                            width: 30px;
                            height: 30px;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            background: #eef5ff;
                            color: #01507c;
                            border-radius: 50%;
                            font-size: 12px;
                            font-weight: 600;
                        }

                        .course-code {
                            background: #f3f5f8;
                            color: #555;
                            padding: 5px 9px;
                            border-radius: 5px;
                            font-size: 11px;
                            font-weight: 600;
                            white-space: nowrap;
                        }

                        .course-name {
                            width: 220px;
                            color: #222;
                            font-weight: 600;
                            line-height: 1.5;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }

                        .duration-badge {
                            display: inline-block;
                            background: #fff5e9;
                            color: #e88a00;
                            padding: 6px 9px;
                            border-radius: 5px;
                            font-size: 11px;
                            font-weight: 600;
                            white-space: nowrap;
                        }

                        .course-overview {
                            width: 260px;
                            line-height: 1.5;
                            color: #777;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                        }

                        .no-course {
                            padding: 60px 20px !important;
                            text-align: center;
                        }

                        .no-course i {
                            font-size: 35px;
                            color: #bbb;
                            margin-bottom: 12px;
                        }

                        .no-course h5 {
                            color: #555;
                            margin-bottom: 5px;
                        }

                        .no-course p {
                            color: #999;
                            margin: 0;
                            font-size: 13px;
                        }

                        .course-bottom {
                            margin-top: 20px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                        }

                        .record-info {
                            color: #888;
                            font-size: 13px;
                        }

                        .record-info strong {
                            color: #444;
                        }

                        .course-pagination {
                            list-style: none;
                            display: flex;
                            align-items: center;
                            margin: 0;
                            padding: 0;
                            gap: 5px;
                        }

                        .course-pagination button {
                            min-width: 34px;
                            height: 34px;
                            border: 1px solid #ddd;
                            background: #fff;
                            color: #555;
                            border-radius: 5px;
                            font-size: 12px;
                            padding: 0 9px;
                            cursor: pointer;
                            transition: .2s ease;
                        }

                        .course-pagination button:hover:not(.disabled) {
                            background: #eef5ff;
                            border-color: #01507c;
                            color: #01507c;
                        }

                        .course-pagination button.active {
                            background: #01507c;
                            border-color: #01507c;
                            color: #fff;
                        }

                        .course-pagination button.disabled {
                            opacity: .45;
                            cursor: not-allowed;
                        }

                        @media (max-width: 991px) {
                            .course-heading {
                                font-size: 32px;
                            }

                            .course-controls {
                                padding: 15px;
                            }
                        }

                        @media (max-width: 767px) {
                            .course-section {
                                padding-top: 35px !important;
                                padding-bottom: 35px !important;
                            }

                            .course-heading {
                                font-size: 27px;
                            }

                            .course-subtitle {
                                font-size: 13px;
                            }

                            .course-label {
                                font-size: 11px;
                                letter-spacing: 3px;
                            }

                            .course-controls {
                                flex-direction: column;
                                align-items: stretch;
                                gap: 15px;
                            }

                            .entries-control {
                                justify-content: center;
                            }

                            .search-box {
                                width: 100%;
                            }

                            .course-table-wrapper {
                                border-radius: 8px;
                            }

                            .course-bottom {
                                flex-direction: column;
                                gap: 18px;
                                align-items: center;
                            }

                            .record-info {
                                text-align: center;
                            }

                            .course-pagination {
                                justify-content: center;
                                flex-wrap: wrap;
                            }

                            .course-pagination button {
                                height: 32px;
                                min-width: 32px;
                            }
                        }

                        @media (max-width: 480px) {
                            .course-heading {
                                font-size: 24px;
                            }

                            .course-label {
                                font-size: 10px;
                            }

                            .course-pagination button span {
                                display: none;
                            }

                            .course-pagination button {
                                padding: 0 8px;
                            }
                        }
                    `})]}),s&&(0,o.jsx)(`div`,{className:`modal show d-block`,style:{backgroundColor:`rgba(0,0,0,0.6)`},children:(0,o.jsx)(`div`,{className:`modal-dialog modal-xl modal-dialog-centered`,children:(0,o.jsxs)(`div`,{className:`modal-content`,children:[(0,o.jsxs)(`div`,{className:`modal-header`,children:[(0,o.jsx)(`h5`,{className:`modal-title`,children:`Study Material File`}),(0,o.jsx)(`button`,{type:`button`,className:`btn btn-info`,onClick:x,children:`Close`})]}),(0,o.jsx)(`div`,{className:`modal-body text-center`,children:d===`application/pdf`?(0,o.jsx)(`iframe`,{src:`${l}#toolbar=0`,title:`PDF`,style:{width:`100%`,height:`75vh`,border:`none`}}):d.startsWith(`image/`)?(0,o.jsx)(`img`,{src:l,alt:`Course`,style:{maxWidth:`100%`,maxHeight:`75vh`}}):(0,o.jsx)(`p`,{children:`File format not supported.`})})]})})})]})}export{s as default};