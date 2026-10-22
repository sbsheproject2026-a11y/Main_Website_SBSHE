import{r as e}from"./rolldown-runtime-hePW80VL.js";import{f as t,g as n,l as r,u as i}from"./index-CTUkKMAp.js";import{t as a}from"./PrintService-CqSNp1JN.js";var o=e(n(),1),s=r();function c(){let[e,n]=(0,o.useState)(``),[r,c]=(0,o.useState)(1),[l,u]=(0,o.useState)(10),[d,f]=(0,o.useState)([]),[p,m]=(0,o.useState)(!0),h=t();(0,o.useEffect)(()=>{g()},[]);let g=async()=>{try{m(!0);let e=await a(9);f(e.data||[])}catch(e){console.log(`Study Centre data error:`,e),f([])}finally{m(!1)}},_=(0,o.useMemo)(()=>d.map(e=>({id:e.id,instituteName:e.name||``,contactPerson:e.contactpersonname||``,location:e.address||``,cityName:e.cityName||``,stateName:e.stateName||``,mobileNo:e.mobileNo||``,email:e.email||``,code:e.code||``,authorityLetter:e.authorityLetter||``})),[d]),v=(0,o.useMemo)(()=>{let t=e.toLowerCase().trim();return t?_.filter(e=>[e.instituteName,e.contactPerson,e.location,e.cityName,e.stateName,e.mobileNo,e.email,e.code].some(e=>String(e).toLowerCase().includes(t))):_},[_,e]),y=Math.ceil(v.length/l),b=(r-1)*l,x=Math.min(b+l,v.length),S=v.slice(b,x);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`style`,{children:`

                /* =========================
                   MAIN PAGE
                ========================== */

                .study-page {
                    min-height: 100vh;
                    background:
                        radial-gradient(
                            circle at top left,
                            rgba(1, 80, 124, 0.08),
                            transparent 30%
                        ),
                        linear-gradient(
                            180deg,
                            #f5f8fc 0%,
                            #ffffff 100%
                        );
                    padding: 55px 0 70px;
                }

                /* =========================
                   HEADER
                ========================== */

                .study-header {
                    text-align: center;
                    margin-bottom: 35px;
                }

                .study-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: #01507c;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 2.5px;
                    text-transform: uppercase;
                    margin-bottom: 12px;
                }

                .study-eyebrow::before,
                .study-eyebrow::after {
                    content: "";
                    width: 28px;
                    height: 2px;
                    background: #01507c;
                    border-radius: 5px;
                }

                .study-header h1 {
                    margin: 0;
                    color: #0f172a;
                    font-size: 40px;
                    line-height: 1.2;
                    font-weight: 800;
                    letter-spacing: -0.8px;
                }

                .study-header p {
                    max-width: 680px;
                    margin: 13px auto 0;
                    color: #64748b;
                    font-size: 15px;
                    line-height: 1.8;
                }

                /* =========================
                   SUMMARY
                ========================== */

                .study-summary {
                    display: flex;
                    align-items: center;
                    background: rgba(255, 255, 255, 0.95);
                    border: 1px solid #e5ebf2;
                    border-radius: 18px;
                    padding: 20px 22px;
                    margin-bottom: 18px;
                    box-shadow:
                        0 8px 35px rgba(15, 23, 42, 0.06);
                }

                .study-summary-icon {
                    width: 54px;
                    height: 54px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    color: #01507c;
                    background: linear-gradient(
                        135deg,
                        #e9f5fc,
                        #dceefa
                    );
                    font-size: 21px;
                }

                .study-summary-content {
                    margin-left: 15px;
                }

                .study-summary-content span {
                    display: block;
                    color: #94a3b8;
                    font-size: 12px;
                    font-weight: 600;
                    margin-bottom: 3px;
                }

                .study-summary-content strong {
                    display: block;
                    color: #0f172a;
                    font-size: 24px;
                    font-weight: 800;
                    line-height: 1;
                }

                .study-summary-action {
                    margin-left: auto;
                }

                .register-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    min-height: 42px;
                    padding: 0 18px;
                    border-radius: 9px;
                    color: #fff;
                    background: #01507c;
                    text-decoration: none;
                    font-size: 13px;
                    font-weight: 700;
                    box-shadow:
                        0 7px 18px rgba(1, 80, 124, 0.18);
                    transition: all 0.25s ease;
                }

                .register-btn:hover {
                    color: #fff;
                    text-decoration: none;
                    background: #013e61;
                    transform: translateY(-2px);
                    box-shadow:
                        0 10px 24px rgba(1, 80, 124, 0.25);
                }

                /* =========================
                   TOOLBAR
                ========================== */

                .study-toolbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    background: #fff;
                    border: 1px solid #e5ebf2;
                    border-radius: 16px;
                    padding: 15px 18px;
                    margin-bottom: 18px;
                    box-shadow:
                        0 6px 25px rgba(15, 23, 42, 0.045);
                }

                .entries-control {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: #64748b;
                    font-size: 13px;
                    font-weight: 500;
                }

                .entries-select {
                    width: 72px;
                    height: 39px;
                    border: 1px solid #dbe3ec;
                    border-radius: 8px;
                    background: #fff;
                    color: #334155;
                    font-size: 13px;
                    font-weight: 600;
                    padding: 0 8px;
                    outline: none;
                    cursor: pointer;
                }

                .entries-select:focus {
                    border-color: #01507c;
                    box-shadow:
                        0 0 0 3px rgba(1, 80, 124, 0.08);
                }

                .search-box {
                    position: relative;
                    width: 330px;
                }

                .search-box i {
                    position: absolute;
                    left: 15px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    font-size: 13px;
                    pointer-events: none;
                }

                .search-box input {
                    width: 100%;
                    height: 42px;
                    border: 1px solid #dbe3ec;
                    border-radius: 9px;
                    background: #f8fafc;
                    color: #334155;
                    padding: 0 15px 0 42px;
                    font-size: 13px;
                    outline: none;
                    transition: all 0.2s ease;
                }

                .search-box input::placeholder {
                    color: #a1acba;
                }

                .search-box input:focus {
                    background: #fff;
                    border-color: #01507c;
                    box-shadow:
                        0 0 0 3px rgba(1, 80, 124, 0.08);
                }

                /* =========================
                   TABLE
                ========================== */

                .study-table-card {
                    overflow: hidden;
                    background: #fff;
                    border: 1px solid #e3e9f0;
                    border-radius: 18px;
                    box-shadow:
                        0 10px 40px rgba(15, 23, 42, 0.065);
                }

                .table-responsive {
                    overflow-x: auto;
                }

                .study-table {
                    width: 100%;
                    min-width: 1050px;
                    margin: 0;
                    border-collapse: separate;
                    border-spacing: 0;
                }

                .study-table thead th {
                    border: 0;
                    background: #01507c;
                    color: #fff;
                    padding: 16px 18px;
                    font-size: 11px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.7px;
                    white-space: nowrap;
                }

                .study-table thead th:first-child {
                    width: 80px;
                }

                .study-table tbody td {
                    padding: 18px;
                    color: #475569;
                    font-size: 13px;
                    border-bottom: 1px solid #edf1f5;
                    vertical-align: middle;
                }

                .study-table tbody tr:last-child td {
                    border-bottom: none;
                }

                .study-table tbody tr {
                    transition: all 0.2s ease;
                }

                .study-table tbody tr:hover {
                    background: #f8fbfd;
                }

                /* =========================
                   SERIAL NUMBER
                ========================== */

                .serial-number {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 20px;
                    height: 30px;
                    border-radius: 8px;
                    background: #f1f5f9;
                    color: #64748b;
                    font-size: 11px;
                    font-weight: 800;
                }

                /* =========================
                   CODE
                ========================== */

                .centre-code {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 72px;
                    padding: 7px 10px;
                    border-radius: 7px;
                    background: #eaf4fa;
                    color: #01507c;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.4px;
                }

                /* =========================
                   STUDY CENTRE NAME
                ========================== */

                .institute-box {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    min-width: 250px;
                }

                .institute-icon {
                    width: 44px;
                    height: 44px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 11px;
                    background: #eaf4fa;
                    color: #01507c;
                    font-size: 17px;
                }

                .institute-info {
                    min-width: 0;
                }

                .institute-info strong {
                    display: block;
                    color: #1e293b;
                    font-size: 14px;
                    font-weight: 750;
                    line-height: 1.4;
                }

                .institute-info small {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    margin-top: 5px;
                    color: #16a34a;
                    font-size: 10px;
                    font-weight: 700;
                }

                .institute-info small::before {
                    content: "";
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #22c55e;
                }

                /* =========================
                   CONTACT
                ========================== */

                .contact-box {
                    min-width: 200px;
                }

                .contact-person {
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    color: #334155;
                    font-weight: 700;
                    margin-bottom: 7px;
                }

                .contact-person-icon {
                    width: 29px;
                    height: 29px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #64748b;
                    font-size: 11px;
                }

                .contact-details {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding-left: 38px;
                }

                .contact-details a {
                    color: #64748b;
                    font-size: 11px;
                    text-decoration: none;
                    line-height: 1.4;
                }

                .contact-details a:hover {
                    color: #01507c;
                }

                .contact-details i {
                    width: 15px;
                    color: #94a3b8;
                    margin-right: 4px;
                }

                /* =========================
                   LOCATION
                ========================== */

                .location-box {
                    display: flex;
                    align-items: flex-start;
                    gap: 9px;
                    min-width: 180px;
                    max-width: 280px;
                    color: #475569;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .location-icon {
                    width: 30px;
                    height: 30px;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    background: #fff4e8;
                    color: #ea580c;
                    font-size: 12px;
                }

                .location-content {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }

                .location-address {
                    color: #334155;
                    font-size: 12px;
                    font-weight: 600;

                    /* Address always stays in ONE line */
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 220px;
                }

                .location-place {
                    color: #64748b;
                    font-size: 11px;
                    line-height: 1.4;
                    white-space: nowrap;
                }

                /* =========================
                   AUTHORITY LETTER
                ========================== */

                .authority-letter {
                    text-align: center;
                    min-width: 120px;
                }

                .authority-view-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 7px;
                    min-width: 76px;
                    height: 34px;
                    padding: 0 12px;
                    border: 1px solid #d9e5ed;
                    border-radius: 8px;
                    background: #f8fbfd;
                    color: #01507c;
                    font-size: 11px;
                    font-weight: 800;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .authority-view-btn:hover {
                    color: #ffffff;
                    background: #01507c;
                    border-color: #01507c;
                    text-decoration: none;
                    transform: translateY(-1px);
                    box-shadow:
                        0 5px 13px rgba(1, 80, 124, 0.16);
                }

                .authority-view-btn i {
                    font-size: 12px;
                }

                /* =========================
                   EMPTY STATE
                ========================== */

                .empty-state {
                    text-align: center;
                    padding: 70px 20px !important;
                }

                .empty-icon {
                    width: 70px;
                    height: 70px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 17px;
                    border-radius: 50%;
                    background: #f1f5f9;
                    color: #94a3b8;
                    font-size: 26px;
                }

                .empty-state h5 {
                    margin: 0 0 7px;
                    color: #334155;
                    font-size: 17px;
                    font-weight: 750;
                }

                .empty-state p {
                    margin: 0;
                    color: #94a3b8;
                    font-size: 13px;
                }

                /* =========================
                   LOADING
                ========================== */

                .loading-state {
                    text-align: center;
                    padding: 80px 20px;
                }

                .spinner {
                    width: 42px;
                    height: 42px;
                    margin: 0 auto 15px;
                    border: 3px solid #e2e8f0;
                    border-top-color: #01507c;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                .loading-state span {
                    color: #64748b;
                    font-size: 13px;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                /* =========================
                   PAGINATION
                ========================== */

                .pagination-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 20px;
                    margin-top: 18px;
                    padding: 15px 18px;
                    background: #fff;
                    border: 1px solid #e5ebf2;
                    border-radius: 15px;
                    box-shadow:
                        0 6px 24px rgba(15, 23, 42, 0.04);
                }

                .pagination-info {
                    color: #64748b;
                    font-size: 12px;
                }

                .pagination-info strong {
                    color: #334155;
                    font-weight: 750;
                }

                .pagination-list {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    margin: 0;
                    padding: 0;
                    list-style: none;
                }

                .page-btn {
                    min-width: 35px;
                    height: 35px;
                    padding: 0 9px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid transparent;
                    border-radius: 8px;
                    background: transparent;
                    color: #64748b;
                    font-size: 12px;
                    font-weight: 700;
                    transition: all 0.2s ease;
                }

                .page-btn:hover:not(:disabled) {
                    background: #eaf4fa;
                    color: #01507c;
                }

                .page-btn.active {
                    color: #fff;
                    background: #01507c;
                    box-shadow:
                        0 5px 13px rgba(1, 80, 124, 0.2);
                }

                .page-btn:disabled {
                    color: #cbd5e1;
                    cursor: not-allowed;
                }

                .page-dots {
                    padding: 0 4px;
                    color: #94a3b8;
                }

                /* =========================
                   RESPONSIVE
                ========================== */

                @media (max-width: 767px) {

                    .study-page {
                        padding: 38px 0 50px;
                    }

                    .study-header {
                        margin-bottom: 28px;
                    }

                    .study-header h1 {
                        font-size: 29px;
                    }

                    .study-header p {
                        padding: 0 10px;
                        font-size: 13px;
                        line-height: 1.7;
                    }

                    .study-eyebrow {
                        font-size: 10px;
                        letter-spacing: 1.8px;
                    }

                    .study-eyebrow::before,
                    .study-eyebrow::after {
                        width: 20px;
                    }

                    .study-summary {
                        padding: 16px;
                        border-radius: 14px;
                    }

                    .study-summary-icon {
                        width: 46px;
                        height: 46px;
                        border-radius: 11px;
                    }

                    .study-summary-content strong {
                        font-size: 21px;
                    }

                    .register-btn {
                        min-height: 38px;
                        padding: 0 12px;
                        font-size: 11px;
                    }

                    .study-toolbar {
                        align-items: stretch;
                        flex-direction: column;
                        padding: 14px;
                    }

                    .search-box {
                        width: 100%;
                    }

                    .study-table-card {
                        border-radius: 14px;
                    }

                    .study-table {
                        min-width: 1100px;
                    }

                    .study-table thead th {
                        padding: 13px 12px;
                    }

                    .study-table tbody td {
                        padding: 13px 12px;
                    }

                    .pagination-card {
                        align-items: flex-start;
                        flex-direction: column;
                    }

                    .pagination-list {
                        width: 100%;
                        justify-content: flex-start;
                        flex-wrap: wrap;
                    }
                }

                @media (max-width: 480px) {

                    .study-header h1 {
                        font-size: 25px;
                    }

                    .study-summary {
                        gap: 10px;
                    }

                    .study-summary-content {
                        margin-left: 2px;
                    }

                    .study-summary-action {
                        margin-left: auto;
                    }

                    .register-btn {
                        width: 42px;
                        height: 38px;
                        padding: 0;
                        min-height: 38px;
                    }

                    .register-btn span {
                        display: none;
                    }

                    .pagination-card {
                        padding: 14px;
                    }
                }

            `}),(0,s.jsx)(`div`,{className:`study-page`,children:(0,s.jsxs)(`div`,{className:`container`,children:[(0,s.jsxs)(`div`,{className:`study-header`,children:[(0,s.jsx)(`div`,{className:`study-eyebrow`,children:`Study Centres`}),(0,s.jsx)(`h1`,{children:`Our Study Centres`}),(0,s.jsx)(`p`,{children:`Explore our network of authorised study centres and find institute, contact and location information in one place.`})]}),(0,s.jsxs)(`div`,{className:`study-summary`,children:[(0,s.jsx)(`div`,{className:`study-summary-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-university`})}),(0,s.jsxs)(`div`,{className:`study-summary-content`,children:[(0,s.jsx)(`span`,{children:`Total Study Centres`}),(0,s.jsx)(`strong`,{children:_.length})]}),(0,s.jsx)(`div`,{className:`study-summary-action`,children:(0,s.jsxs)(i,{to:`https://soft.shaheedbhagatsinghhealthandeducation.com/study-centre-apply`,className:`register-btn`,title:`Register Study Centre`,children:[(0,s.jsx)(`i`,{className:`fa fa-plus-circle`}),(0,s.jsx)(`span`,{children:`Register Study Centre`})]})})]}),(0,s.jsxs)(`div`,{className:`study-toolbar`,children:[(0,s.jsxs)(`div`,{className:`entries-control`,children:[(0,s.jsx)(`span`,{children:`Show`}),(0,s.jsxs)(`select`,{className:`entries-select`,value:l,onChange:e=>{u(Number(e.target.value)),c(1)},children:[(0,s.jsx)(`option`,{value:10,children:`10`}),(0,s.jsx)(`option`,{value:25,children:`25`}),(0,s.jsx)(`option`,{value:50,children:`50`}),(0,s.jsx)(`option`,{value:100,children:`100`})]}),(0,s.jsx)(`span`,{children:`entries`})]}),(0,s.jsxs)(`div`,{className:`search-box`,children:[(0,s.jsx)(`i`,{className:`fa fa-search`}),(0,s.jsx)(`input`,{type:`text`,placeholder:`Search by name, contact, email or location...`,value:e,onChange:e=>{n(e.target.value),c(1)}})]})]}),(0,s.jsx)(`div`,{className:`study-table-card`,children:p?(0,s.jsxs)(`div`,{className:`loading-state`,children:[(0,s.jsx)(`div`,{className:`spinner`}),(0,s.jsx)(`span`,{children:`Loading study centres...`})]}):(0,s.jsx)(`div`,{className:`table-responsive`,children:(0,s.jsxs)(`table`,{className:`table study-table`,children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`th`,{children:`Sr. No.`}),(0,s.jsx)(`th`,{children:`Code`}),(0,s.jsx)(`th`,{children:`Study Centre Name`}),(0,s.jsx)(`th`,{children:`Contact Information`}),(0,s.jsx)(`th`,{children:`Location`}),(0,s.jsx)(`th`,{children:`Authority Letter`})]})}),(0,s.jsx)(`tbody`,{children:S.length>0?S.map((e,t)=>(0,s.jsxs)(`tr`,{children:[(0,s.jsx)(`td`,{children:(0,s.jsx)(`span`,{className:`serial-number`,children:b+t+1})}),(0,s.jsx)(`td`,{children:e.code&&(0,s.jsx)(`span`,{className:`centre-code`,children:e.code})}),(0,s.jsx)(`td`,{children:(0,s.jsxs)(`div`,{className:`institute-box`,children:[(0,s.jsx)(`div`,{className:`institute-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-university`})}),(0,s.jsxs)(`div`,{className:`institute-info`,children:[(0,s.jsx)(`strong`,{children:e.instituteName}),(0,s.jsx)(`small`,{children:`Authorised Study Centre`})]})]})}),(0,s.jsx)(`td`,{children:(0,s.jsxs)(`div`,{className:`contact-box`,children:[e.contactPerson&&(0,s.jsxs)(`div`,{className:`contact-person`,children:[(0,s.jsx)(`div`,{className:`contact-person-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-user`})}),(0,s.jsx)(`span`,{children:e.contactPerson})]}),(0,s.jsxs)(`div`,{className:`contact-details`,children:[e.email&&(0,s.jsxs)(`a`,{href:`mailto:${e.email}`,children:[(0,s.jsx)(`i`,{className:`fa fa-envelope`}),e.email]}),e.mobileNo&&(0,s.jsxs)(`a`,{href:`tel:${e.mobileNo}`,children:[(0,s.jsx)(`i`,{className:`fa fa-phone`}),e.mobileNo]})]})]})}),(0,s.jsx)(`td`,{children:(0,s.jsxs)(`div`,{className:`location-box`,children:[(0,s.jsx)(`div`,{className:`location-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-map-marker`})}),(0,s.jsxs)(`div`,{className:`location-content`,children:[e.location&&(0,s.jsx)(`div`,{className:`location-address`,title:e.location,children:e.location}),e.cityName&&(0,s.jsx)(`div`,{className:`location-place`,children:e.cityName}),e.stateName&&(0,s.jsx)(`div`,{className:`location-place`,children:e.stateName})]})]})}),(0,s.jsx)(`td`,{children:(0,s.jsx)(`div`,{className:`authority-letter`,children:(0,s.jsxs)(`a`,{href:`#`,className:`authority-view-btn`,title:`View Authority Letter`,onClick:t=>{t.preventDefault(),h(`/authority-letterPrint-print/${e.id}`)},children:[(0,s.jsx)(`i`,{className:`fa fa-eye`}),(0,s.jsx)(`span`,{children:`View`})]})})})]},`${e.id??`centre`}-${b+t}`)):(0,s.jsx)(`tr`,{children:(0,s.jsxs)(`td`,{colSpan:`6`,className:`empty-state`,children:[(0,s.jsx)(`div`,{className:`empty-icon`,children:(0,s.jsx)(`i`,{className:`fa fa-university`})}),(0,s.jsx)(`h5`,{children:`No Study Centres Found`}),(0,s.jsx)(`p`,{children:e?`Try changing your search keyword.`:`No active study centres are available at the moment.`})]})})})]})})}),!p&&v.length>0&&(0,s.jsxs)(`div`,{className:`pagination-card`,children:[(0,s.jsxs)(`div`,{className:`pagination-info`,children:[`Showing`,` `,(0,s.jsx)(`strong`,{children:b+1}),` `,`to`,` `,(0,s.jsx)(`strong`,{children:x}),` `,`of`,` `,(0,s.jsx)(`strong`,{children:v.length}),` `,`study centres`]}),(0,s.jsxs)(`div`,{className:`pagination-list`,children:[(0,s.jsx)(`button`,{type:`button`,className:`page-btn`,disabled:r===1,onClick:()=>{r>1&&c(e=>e-1)},"aria-label":`Previous page`,children:(0,s.jsx)(`i`,{className:`fa fa-angle-left`})}),(()=>{let e=[];if(y<=7){for(let t=1;t<=y;t++)e.push(t);return e}e.push(1),r>4&&e.push(`...`);let t=Math.max(2,r-1),n=Math.min(y-1,r+1);for(let r=t;r<=n;r++)e.push(r);return r<y-3&&e.push(`...`),e.push(y),e})().map((e,t)=>e===`...`?(0,s.jsx)(`span`,{className:`page-dots`,children:`...`},`dots-${t}`):(0,s.jsx)(`button`,{type:`button`,className:`page-btn ${r===e?`active`:``}`,onClick:()=>c(e),children:e},e)),(0,s.jsx)(`button`,{type:`button`,className:`page-btn`,disabled:r===y,onClick:()=>{r<y&&c(e=>e+1)},"aria-label":`Next page`,children:(0,s.jsx)(`i`,{className:`fa fa-angle-right`})})]})]})]})})]})}export{c as default};