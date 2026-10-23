import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,a as n,f as r,u as i}from"./index-Dlx9wpcq.js";var a=e(t(),1),o=i();function s(){let e=r().state?.id,[t,i]=(0,a.useState)([]),[s,c]=(0,a.useState)(``),[l,u]=(0,a.useState)(1),[d,f]=(0,a.useState)(10),p=`https://soft.shaheedbhagatsinghhealthandeducation.com/new-student-apply`;(0,a.useEffect)(()=>{e&&h(e)},[e]);let m=[88,127],h=async e=>{try{let t=(await n(e)||[]).filter(e=>{let t=e.isActive===1||e.isActive===!0;return e.studyModeId===null||e.studyModeId===void 0||e.studyModeId===``?!1:t&&m.includes(Number(e.studyModeId))});i(t),console.log(`Course Data`,t),u(1)}catch(e){console.log(`Course Error:`,e),i([])}},g=(e,t)=>{if(!e){window.location.href=p;return}window.location.href=`${p}`},_=t.filter(e=>{let t=s.toLowerCase().trim();return String(e.code??``).toLowerCase().includes(t)||String(e.name??``).toLowerCase().includes(t)||String(e.nameHindi??``).toLowerCase().includes(t)||String(e.durationName??``).toLowerCase().includes(t)}),v=Math.ceil(_.length/d),y=(l-1)*d,b=Math.min(y+d,_.length),x=_.slice(y,b);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(`div`,{className:`container-fluid py-5 course-section`,children:[(0,o.jsxs)(`div`,{className:`container pt-4 pb-4`,children:[(0,o.jsxs)(`div`,{className:`text-center mb-5`,children:[(0,o.jsxs)(`div`,{className:`course-label`,children:[(0,o.jsx)(`span`,{}),`Online COURSES`,(0,o.jsx)(`span`,{})]}),(0,o.jsx)(`h1`,{className:`course-heading`,children:`Online Course Details`})]}),(0,o.jsxs)(`div`,{className:`course-controls mb-4`,children:[(0,o.jsxs)(`div`,{className:`entries-control`,children:[(0,o.jsx)(`span`,{children:`Show`}),(0,o.jsxs)(`select`,{className:`entries-select`,value:d,onChange:e=>{f(Number(e.target.value)),u(1)},children:[(0,o.jsx)(`option`,{value:10,children:`10`}),(0,o.jsx)(`option`,{value:25,children:`25`}),(0,o.jsx)(`option`,{value:50,children:`50`}),(0,o.jsx)(`option`,{value:100,children:`100`})]}),(0,o.jsx)(`span`,{children:`entries`})]}),(0,o.jsxs)(`div`,{className:`search-box`,children:[(0,o.jsx)(`i`,{className:`fa fa-search`}),(0,o.jsx)(`input`,{type:`text`,placeholder:`Search courses...`,value:s,onChange:e=>{c(e.target.value),u(1)}})]})]}),(0,o.jsx)(`div`,{className:`course-table-wrapper`,children:(0,o.jsx)(`div`,{className:`table-responsive`,children:(0,o.jsxs)(`table`,{className:`course-table`,children:[(0,o.jsx)(`thead`,{children:(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`th`,{width:`70`,children:`Sr No`}),(0,o.jsx)(`th`,{children:`Course Code`}),(0,o.jsx)(`th`,{children:`Course Name`}),(0,o.jsx)(`th`,{children:`Duration`}),(0,o.jsx)(`th`,{children:`Eligibility`}),(0,o.jsx)(`th`,{children:`Course Fee`}),(0,o.jsx)(`th`,{width:`150`,children:`Apply Now`})]})}),(0,o.jsx)(`tbody`,{children:x.length>0?x.map((e,t)=>(0,o.jsxs)(`tr`,{children:[(0,o.jsx)(`td`,{children:(0,o.jsx)(`span`,{className:`serial-number`,children:y+t+1})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(`span`,{className:`course-code`,children:e.code||`-`})}),(0,o.jsx)(`td`,{children:(0,o.jsx)(`div`,{className:`course-name`,children:e.name||`-`})}),(0,o.jsx)(`td`,{children:(0,o.jsxs)(`span`,{className:`duration-badge`,children:[(0,o.jsx)(`i`,{className:`fa fa-clock-o mr-1`}),e.durationName||`-`]})}),(0,o.jsx)(`td`,{children:e.eligbilty?(0,o.jsx)(`div`,{className:`elig-wrap`,children:e.eligbilty.split(/[/,|]/).map(e=>e.trim()).filter(Boolean).map((e,t)=>(0,o.jsxs)(`span`,{className:`elig-chip`,children:[e,(0,o.jsx)(`i`,{className:`fa fa-check-circle`})]},t))}):(0,o.jsx)(`span`,{className:`elig-empty`,children:`—`})}),(0,o.jsx)(`td`,{children:(()=>{let t=(e.productAmounts||[]).filter(e=>Number(e.amountTypeId)===113);return t.length===0?(0,o.jsx)(`span`,{className:`fee-empty`,children:`—`}):(0,o.jsx)(`div`,{className:`fee-list`,children:t.map((e,t)=>(0,o.jsxs)(`div`,{className:`fee-card`,children:[(0,o.jsx)(`div`,{className:`fee-icon`,children:(0,o.jsx)(`i`,{className:`fa fa-inr`})}),(0,o.jsx)(`div`,{className:`fee-info`,children:(0,o.jsx)(`div`,{className:`fee-amount-row`,children:(0,o.jsxs)(`span`,{className:`fee-amount`,children:[`₹`,Number(e.amount||0).toLocaleString(`en-IN`),` `,`+ GST`]})})})]},e.id??t))})})()}),(0,o.jsx)(`td`,{children:(0,o.jsx)(`button`,{type:`button`,className:`apply-now-btn`,onClick:()=>g(e.studyModeId,e.id),children:(0,o.jsx)(`span`,{children:`Apply Now`})})})]},e.id)):(0,o.jsx)(`tr`,{children:(0,o.jsx)(`td`,{colSpan:`7`,className:`no-course`,children:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`i`,{className:`fa fa-search`}),(0,o.jsx)(`h5`,{children:`No Courses Found`}),(0,o.jsx)(`p`,{children:`Try searching with a different keyword.`})]})})})})]})})}),(0,o.jsxs)(`div`,{className:`course-bottom`,children:[(0,o.jsxs)(`div`,{className:`record-info`,children:[`Showing`,` `,(0,o.jsx)(`strong`,{children:_.length>0?y+1:0}),` `,`to `,(0,o.jsx)(`strong`,{children:b}),` of`,` `,(0,o.jsx)(`strong`,{children:_.length}),` entries`]}),(0,o.jsx)(`nav`,{children:(0,o.jsxs)(`ul`,{className:`course-pagination`,children:[(0,o.jsx)(`li`,{children:(0,o.jsxs)(`button`,{className:l===1?`disabled`:``,onClick:()=>{l>1&&u(l-1)},disabled:l===1,children:[(0,o.jsx)(`i`,{className:`fa fa-angle-left`}),(0,o.jsx)(`span`,{children:`Previous`})]})}),Array.from({length:v},(e,t)=>t+1).map(e=>(0,o.jsx)(`li`,{children:(0,o.jsx)(`button`,{className:l===e?`active`:``,onClick:()=>u(e),children:e})},e)),(0,o.jsx)(`li`,{children:(0,o.jsxs)(`button`,{className:l===v?`disabled`:``,onClick:()=>{l<v&&u(l+1)},disabled:v===0||l===v,children:[(0,o.jsx)(`span`,{children:`Next`}),(0,o.jsx)(`i`,{className:`fa fa-angle-right`})]})})]})})]})]}),(0,o.jsx)(`style`,{children:`
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

                        .table-responsive {
                            overflow-x: auto;
                        }

                        .course-table {
                            width: 100%;
                            border-collapse: collapse;
                            margin: 0;
                            min-width: 1250px;
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
                            width: 200px;
                            color: #222;
                            font-weight: 600;
                            line-height: 1.5;
                            word-break: break-word;
                            overflow-wrap: anywhere;
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

                        /* ============ ELIGIBILITY ============ */
                        .elig-wrap {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 4px;
                            max-width: 150px;
                        }

                        .elig-chip {
                            display: inline-flex;
                            align-items: center;
                            gap: 5px;
                            padding: 4px 10px;
                            background: linear-gradient(135deg, #eef5ff, #e0edff);
                            color: #01507c;
                            border: 1px solid #cfe3ff;
                            border-radius: 6px;
                            font-size: 11px;
                            font-weight: 700;
                            letter-spacing: .3px;
                            white-space: nowrap;
                            transition: .2s ease;
                        }

                        .elig-chip i {
                            font-size: 10px;
                            color: #1e88e5;
                        }

                        .elig-empty {
                            color: #cbd5e1;
                            font-size: 13px;
                        }

                        /* ============ COURSE FEE ============ */
                        .fee-list {
                            display: flex;
                            flex-direction: column;
                            gap: 8px;
                            width: 180px;
                        }

                        .fee-card {
                            display: flex;
                            align-items: center;
                            gap: 12px;
                            padding: 10px 14px 10px 10px;
                            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                            border: 1px solid #bae6fd;
                            border-radius: 12px;
                            position: relative;
                            overflow: hidden;
                            transition: .25s ease;
                        }

                        .fee-card::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 0;
                            bottom: 0;
                            width: 4px;
                            background: linear-gradient(180deg, #01507c, #1e88e5);
                        }

                        .fee-card:hover {
                            transform: translateY(-2px);
                            box-shadow: 0 6px 18px rgba(1, 80, 124, 0.18);
                            border-color: #7dd3fc;
                        }

                        .fee-icon {
                            width: 36px;
                            height: 36px;
                            flex-shrink: 0;
                            border-radius: 9px;
                            background: linear-gradient(135deg, #01507c, #1e88e5);
                            color: #fff;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 15px;
                            box-shadow: 0 3px 8px rgba(1, 80, 124, 0.3);
                        }

                        .fee-info {
                            display: flex;
                            flex-direction: column;
                            gap: 4px;
                            min-width: 0;
                            flex: 1;
                        }

                        .fee-name {
                            font-size: 10px;
                            color: #0369a1;
                            font-weight: 700;
                            text-transform: uppercase;
                            letter-spacing: .5px;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .fee-amount-row {
                            display: flex;
                            align-items: baseline;
                            gap: 8px;
                            flex-wrap: wrap;
                        }

                        .fee-amount {
                            font-size: 14px;
                            font-weight: 800;
                            color: #01507c;
                            letter-spacing: -.3px;
                            line-height: 1;
                        }

                        .fee-gst {
                            display: inline-block;
                            font-size: 10px;
                            font-weight: 700;
                            color: #0369a1;
                            background: #cceeff;
                            padding: 3px 7px;
                            border-radius: 4px;
                            letter-spacing: .4px;
                            text-transform: uppercase;
                            line-height: 1;
                            white-space: nowrap;
                        }

                        .fee-empty {
                            color: #cbd5e1;
                            font-size: 13px;
                        }

                        /* ============ APPLY NOW BUTTON ============ */
                        .apply-now-btn {
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            gap: 8px;
                            padding: 11px 20px;
                            background: linear-gradient(135deg, #01507c 0%, #1e88e5 100%);
                            color: #fff;
                            border: none;
                            border-radius: 10px;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: .5px;
                            cursor: pointer;
                            white-space: nowrap;
                            font-family: inherit;
                            text-transform: uppercase;
                            box-shadow:
                                0 6px 16px rgba(1, 80, 124, 0.3),
                                inset 0 1px 0 rgba(255, 255, 255, 0.2);
                            transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
                            position: relative;
                            overflow: hidden;
                        }

                        .apply-now-btn::before {
                            content: "";
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            width: 0;
                            height: 0;
                            background: rgba(255, 255, 255, 0.25);
                            border-radius: 50%;
                            transform: translate(-50%, -50%);
                            transition: width .5s ease, height .5s ease;
                        }

                        .apply-now-btn:hover::before {
                            width: 300px;
                            height: 300px;
                        }

                        .apply-now-btn:hover {
                            transform: translateY(-3px);
                            box-shadow:
                                0 12px 24px rgba(1, 80, 124, 0.4),
                                inset 0 1px 0 rgba(255, 255, 255, 0.3);
                            background: linear-gradient(135deg, #003d5f 0%, #01507c 100%);
                        }

                        .apply-now-btn:active {
                            transform: translateY(-1px);
                            box-shadow: 0 4px 10px rgba(1, 80, 124, 0.3);
                        }

                        .apply-now-btn i {
                            font-size: 13px;
                            position: relative;
                            z-index: 1;
                        }

                        .apply-now-btn span {
                            position: relative;
                            z-index: 1;
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
                    `})]})})}export{s as default};