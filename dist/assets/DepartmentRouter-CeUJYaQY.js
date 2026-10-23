import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{_ as n,c as r,d as i,f as a,i as o,l as s,m as c,o as l,r as u,u as d}from"./index-Dlx9wpcq.js";var f=e(n(),1),p=d(),m=2097152,h=[`image/jpeg`,`image/jpg`,`image/png`,`application/pdf`],g=[`.jpg`,`.jpeg`,`.png`,`.pdf`];function _(){let[e,t]=(0,f.useState)(!1),[n,i]=(0,f.useState)(``),[a,s]=(0,f.useState)(`apply`),[c,l]=(0,f.useState)(!1),[d,_]=(0,f.useState)([]),[v,y]=(0,f.useState)(``),[b,x]=(0,f.useState)(null),[S,C]=(0,f.useState)(``),[w,T]=(0,f.useState)(!1),[E,D]=(0,f.useState)({}),[O,k]=(0,f.useState)(``),[A,j]=(0,f.useState)({userTypeId:``,fullName:``,mobile:``,email:``,address:``,letterHead:null,allDocuments:null,centreReg:``,subject:``,infoRequired:``,declare:!1}),M=e=>{let{id:t,value:n,type:r,checked:i,files:a}=e.target;if(t===`mobile`){let e=n.replace(/\D/g,``).slice(0,10);j({...A,mobile:e}),e.length>0&&e.length<10?D({...E,mobile:`Mobile number must be 10 digits`}):D({...E,mobile:``});return}if(t===`email`){j({...A,email:n}),n.length>0?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)?D({...E,email:``}):D({...E,email:`Please enter a valid email address`}):D({...E,email:``});return}if(r===`file`){let e=a[0],n=t;if(!e){j({...A,[n]:null}),D({...E,[n]:`Please select a file`});return}let r=`.`+e.name.split(`.`).pop().toLowerCase();if(!(h.includes(e.type)||g.includes(r))){j({...A,[n]:null}),D({...E,[n]:`Only JPG, PNG, or PDF files are allowed`});return}if(e.size>m){j({...A,[n]:null}),D({...E,[n]:`File size must be less than 2 MB`});return}j({...A,[n]:e}),D({...E,[n]:``});return}j(r===`checkbox`?{...A,[t]:i}:{...A,[t]:n})},N=e=>{j({...A,[e]:null}),D({...E,[e]:``});let t=document.getElementById(e);t&&(t.value=``)},P=e=>{j({...A,[e]:null});let t=document.getElementById(e);t&&(t.value=``),setTimeout(()=>{document.getElementById(e)?.click()},50)};(0,f.useEffect)(()=>{F()},[]);let F=async()=>{try{let e=await r(37);_(e.data||[])}catch(e){console.log(e)}},I=e=>{j({...A,userTypeId:e.target.value})},L=d.find(e=>String(e.id||e.Id)===String(A.userTypeId)),R=L&&(L.name||L.Name)||``,z=R.toLowerCase(),B=z.includes(`government`)||z.includes(`private`),V=z.includes(`student`),H=z.includes(`study`)||z.includes(`centre`)||z.includes(`center`),U=()=>{let e={};return A.userTypeId||(e.userTypeId=`Please select applicant type`),A.fullName.trim()||(e.fullName=`Full name is required`),A.mobile?/^[0-9]{10}$/.test(A.mobile)||(e.mobile=`Mobile number must be exactly 10 digits`):e.mobile=`Mobile number is required`,A.email?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(A.email)||(e.email=`Please enter a valid email address`):e.email=`Email is required`,A.address.trim()||(e.address=`Address is required`),A.subject.trim()||(e.subject=`Subject is required`),A.infoRequired.trim()||(e.infoRequired=`Information required field cannot be empty`),B&&(A.letterHead||(e.letterHead=`Letter Head is required`),A.allDocuments||(e.allDocuments=`All Documents are required`)),(V||H)&&(A.allDocuments||(e.allDocuments=`All Documents are required`)),H&&!A.centreReg.trim()&&(e.centreReg=`Centre registration number is required`),A.declare||(e.declare=`Please accept the declaration`),e},W=async e=>{e.preventDefault(),k(``),D({});let n=U();if(Object.keys(n).length>0){D(n);let e=Object.keys(n).length;k(`❌ Application rejected. Please fix ${e} error${e>1?`s`:``} below and try again.`),document.querySelector(`.rti-body`)?.scrollIntoView({behavior:`smooth`,block:`start`});return}D({}),k(``),l(!0);try{let e={...A,userTypeId:A.userTypeId,userTypeName:R},n=await u(e);n.success?(i(n.trackingId||n.message),t(!0),setTimeout(()=>{j({userTypeId:``,fullName:``,mobile:``,email:``,address:``,letterHead:null,allDocuments:null,centreReg:``,subject:``,infoRequired:``,declare:!1}),D({}),k(``),t(!1)},8e3)):k(n.message||`Something went wrong`)}catch(e){k(e?.response?.data?.message||`Network error. Please try again.`)}finally{l(!1)}},G=async e=>{if(e.preventDefault(),C(``),x(null),!v.trim()){C(`Please enter your Tracking ID or Mobile Number / Email.`);return}T(!0);try{let e=await o(v.trim()),t=e?.data?.data||e?.data||[];Array.isArray(t)&&t.length>0?x(t):t&&typeof t==`object`&&t.trackingId?x([t]):C(`❌ Application not found. Please check your input.`)}catch(e){C(e?.response?.data?.message||`❌ Application not found. Please check your Tracking ID / Mobile / Email.`)}finally{T(!1)}},K=e=>{let t=(e||``).toLowerCase();return t.includes(`approved`)||t.includes(`confirm`)?`approved`:t.includes(`progress`)?`inprogress`:t.includes(`reject`)?`rejected`:`pending`},q=e=>e?new Date(e).toLocaleString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):`-`,J=(e,t,n,r=!1)=>{let i=A[e],a=E[n||e];return(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[t,` `,(0,p.jsx)(`span`,{children:`*`})]}),!i&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`input`,{type:`file`,id:e,onChange:M,accept:`.jpg,.jpeg,.png,.pdf`,className:a?`error`:``}),a&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,a]}),r&&!a&&(0,p.jsx)(`div`,{className:`upload-note`,children:`📎 JPG, PNG ya PDF (max 2MB)`}),r&&!a&&(0,p.jsxs)(`div`,{className:`info-message`,children:[(0,p.jsx)(`span`,{className:`icon`,children:`ℹ️`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`strong`,{children:`Note:`}),` Sabhi documents ko ek hi`,` `,(0,p.jsx)(`strong`,{children:`PDF file`}),` me convert karke upload karein.`]})]})]}),i&&(0,p.jsxs)(`div`,{className:`file-preview`,children:[(0,p.jsxs)(`div`,{className:`file-info`,children:[(0,p.jsx)(`i`,{className:`bi bi-file-earmark-pdf file-icon`}),(0,p.jsxs)(`div`,{className:`file-details`,children:[(0,p.jsx)(`span`,{className:`file-name`,children:i.name}),(0,p.jsxs)(`span`,{className:`file-size`,children:[(i.size/1024).toFixed(1),` KB`]})]})]}),(0,p.jsxs)(`div`,{className:`file-actions`,children:[(0,p.jsxs)(`button`,{type:`button`,className:`btn-change`,onClick:()=>P(e),children:[(0,p.jsx)(`i`,{className:`bi bi-arrow-repeat`}),` Change`]}),(0,p.jsxs)(`button`,{type:`button`,className:`btn-remove`,onClick:()=>N(e),children:[(0,p.jsx)(`i`,{className:`bi bi-x-lg`}),` Remove`]})]})]})]})};return(0,p.jsxs)(`div`,{className:`rti-container`,children:[(0,p.jsx)(`style`,{children:`
        .rti-container {
          max-width: 700px; margin: 30px auto;
          background: #fff; border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          overflow: hidden; font-family: 'Segoe UI', Arial, sans-serif;
        }
        .rti-container * { box-sizing: border-box; }

        .rti-container .rti-header {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: #fff; padding: 25px; text-align: center;
        }
        .rti-container .rti-header h1 {
          font-size: 24px; margin: 0 0 5px 0; color: #fff;
        }
        .rti-container .rti-header p {
          font-size: 14px; opacity: 0.9; margin: 0; color: #fff;
        }

        .rti-container .tabs {
          display: flex; background: #f8fafc;
          border-bottom: 1.5px solid #e2e8f0;
        }
        .rti-container .tab {
          flex: 1; padding: 14px 10px; text-align: center;
          font-size: 14px; font-weight: 600; color: #64748b;
          cursor: pointer; transition: 0.3s;
          border-bottom: 3px solid transparent;
          background: transparent;
          border-top: none; border-left: none; border-right: none;
          font-family: inherit;
        }
        .rti-container .tab:hover { color: #1e3a8a; background: #f1f5f9; }
        .rti-container .tab.active {
          color: #1e3a8a; background: #fff;
          border-bottom-color: #3b82f6;
        }

        .rti-container .rti-body { padding: 30px; }

        .rti-container .form-group { margin-bottom: 20px; }
        .rti-container .form-group label {
          display: block; font-weight: 600; margin-bottom: 8px;
          color: #1e293b; font-size: 14px;
        }
        .rti-container .form-group label span { color: #dc2626; }

        .rti-container .form-group input,
        .rti-container .form-group select,
        .rti-container .form-group textarea {
          width: 100%; padding: 12px 14px;
          border: 1.5px solid #cbd5e1; border-radius: 8px;
          font-size: 15px; transition: 0.3s;
          outline: none; font-family: inherit;
          background: #fff; color: #1e293b;
        }
        .rti-container .form-group input:focus,
        .rti-container .form-group select:focus,
        .rti-container .form-group textarea:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.15);
        }
        .rti-container .form-group textarea {
          resize: vertical; min-height: 100px;
        }
        .rti-container .form-group input[type="file"] {
          padding: 10px 14px; cursor: pointer;
        }

        .rti-container .form-group input.error,
        .rti-container .form-group select.error,
        .rti-container .form-group textarea.error {
          border-color: #dc2626; background: #fef2f2;
        }
        .rti-container .error-text {
          color: #dc2626; font-size: 12.5px;
          margin-top: 5px; font-weight: 500;
        }

        /* Submit error box */
        .rti-container .submit-error-box {
          background: #fef2f2;
          border: 1.5px solid #dc2626;
          border-left: 5px solid #dc2626;
          color: #991b1b;
          padding: 14px 18px; border-radius: 8px;
          margin-bottom: 20px; font-size: 14px;
          font-weight: 600; display: flex;
          align-items: flex-start; gap: 10px;
          animation: shake 0.4s ease;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .rti-container .submit-error-box .icon {
          font-size: 18px; flex-shrink: 0;
        }

        /* File preview */
        .rti-container .file-preview {
          display: flex; justify-content: space-between;
          align-items: center; gap: 12px;
          padding: 12px 16px;
          background: #f0fdf4;
          border: 1.5px solid #86efac;
          border-radius: 8px; flex-wrap: wrap;
        }
        .rti-container .file-preview .file-info {
          display: flex; align-items: center;
          gap: 10px; flex: 1; min-width: 0;
        }
        .rti-container .file-preview .file-icon {
          font-size: 24px; color: #16a34a; flex-shrink: 0;
        }
        .rti-container .file-preview .file-details {
          display: flex; flex-direction: column;
          gap: 2px; min-width: 0;
        }
        .rti-container .file-preview .file-name {
          color: #166534; font-weight: 600;
          font-size: 13.5px; word-break: break-word;
        }
        .rti-container .file-preview .file-size {
          color: #64748b; font-size: 12px;
        }
        .rti-container .file-preview .file-actions {
          display: flex; gap: 8px; flex-shrink: 0;
        }
        .rti-container .file-preview .btn-change,
        .rti-container .file-preview .btn-remove {
          padding: 6px 12px; border-radius: 6px;
          font-size: 12px; font-weight: 600;
          cursor: pointer; border: 1.5px solid transparent;
          display: inline-flex; align-items: center;
          gap: 4px; transition: all 0.2s ease;
          font-family: inherit;
        }
        .rti-container .file-preview .btn-change {
          background: #eff6ff; color: #2563eb;
          border-color: #93c5fd;
        }
        .rti-container .file-preview .btn-change:hover {
          background: #2563eb; color: #fff;
        }
        .rti-container .file-preview .btn-remove {
          background: #fef2f2; color: #dc2626;
          border-color: #fca5a5;
        }
        .rti-container .file-preview .btn-remove:hover {
          background: #dc2626; color: #fff;
        }

        .rti-container .fee-box {
          background: #f1f5f9;
          border-left: 5px solid #3b82f6;
          padding: 15px 20px; border-radius: 8px;
          margin: 20px 0; display: none;
        }
        .rti-container .fee-box.show { display: block; }
        .rti-container .fee-box h3 {
          color: #1e293b; font-size: 16px; margin: 0 0 5px 0;
        }
        .rti-container .fee-box .amount {
          font-size: 28px; font-weight: bold; color: #16a34a;
        }
        .rti-container .fee-box .free {
          font-size: 22px; font-weight: bold; color: #16a34a;
        }
        .rti-container .fee-note {
          font-size: 13px; color: #64748b; margin-top: 5px;
        }

        .rti-container .btn-submit {
          width: 100%; padding: 14px;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          color: #fff; border: none; border-radius: 8px;
          font-size: 16px; font-weight: 600;
          cursor: pointer; transition: 0.3s; font-family: inherit;
        }
        .rti-container .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(59,130,246,0.4);
        }
        .rti-container .btn-submit:disabled {
          background: #94a3b8; cursor: not-allowed; transform: none;
        }

        .rti-container .success-msg {
          background: #dcfce7; color: #166534;
          padding: 20px; border-radius: 8px;
          margin-top: 20px; text-align: center; font-weight: 600;
        }
        .rti-container .success-msg .tracking-box {
          background: #fff; border: 1.5px solid #86efac;
          padding: 12px 18px; border-radius: 8px;
          margin-top: 12px; font-family: 'Courier New', monospace;
          font-size: 16px; color: #15803d;
          letter-spacing: 1px; display: inline-block;
        }
        .rti-container .success-msg .hint {
          font-size: 12.5px; color: #166534;
          margin-top: 10px; font-weight: 500;
        }

        .rti-container .upload-note {
          font-size: 12px; color: #64748b; margin-top: 4px;
        }

        .rti-container .info-message {
          background: #eff6ff;
          border-left: 5px solid #3b82f6;
          padding: 12px 16px; border-radius: 8px;
          margin-top: 8px; font-size: 13px; color: #1e40af;
          display: flex; align-items: flex-start;
          gap: 8px; line-height: 1.5;
        }
        .rti-container .info-message .icon {
          font-size: 16px; flex-shrink: 0; margin-top: 1px;
        }

        .rti-container .check-desc {
          font-size: 14px; color: #64748b;
          margin-bottom: 20px; line-height: 1.6;
        }
        .rti-container .error-msg {
          background: #fef2f2;
          border-left: 5px solid #dc2626;
          color: #991b1b;
          padding: 12px 16px; border-radius: 8px;
          font-size: 13.5px; margin-top: 15px;
        }

        .rti-container .status-card {
          background: #f8fafc;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px; padding: 20px;
          margin-top: 20px; animation: fadeIn 0.4s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .rti-container .status-card .status-header {
          display: flex; justify-content: space-between;
          align-items: center; padding-bottom: 14px;
          border-bottom: 1px dashed #cbd5e1;
          margin-bottom: 16px; flex-wrap: wrap; gap: 8px;
        }
        .rti-container .status-card .status-header h3 {
          font-size: 16px; color: #1e3a8a; margin: 0;
        }
        .rti-container .status-badge {
          padding: 5px 14px; border-radius: 20px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.3px;
        }
        .rti-container .status-badge.inprogress {
          background: #fef3c7; color: #92400e; border: 1px solid #fcd34d;
        }
        .rti-container .status-badge.approved {
          background: #dcfce7; color: #15803d; border: 1px solid #86efac;
        }
        .rti-container .status-badge.pending {
          background: #dbeafe; color: #1e40af; border: 1px solid #93c5fd;
        }
        .rti-container .status-badge.rejected {
          background: #fee2e2; color: #991b1b; border: 1px solid #fca5a5;
        }

        .rti-container .status-row {
          display: flex; justify-content: space-between;
          padding: 10px 0; font-size: 14px;
          border-bottom: 1px solid #f1f5f9; gap: 10px;
        }
        .rti-container .status-row:last-child { border-bottom: none; }
        .rti-container .status-row .key {
          color: #64748b; font-weight: 500; flex-shrink: 0;
        }
        .rti-container .status-row .val {
          color: #1e293b; font-weight: 600;
          text-align: right; max-width: 65%;
          word-break: break-word;
        }
        .rti-container .status-note {
          background: #eff6ff;
          border-left: 4px solid #3b82f6;
          padding: 12px 14px; border-radius: 6px;
          margin-top: 14px; font-size: 13px;
          color: #1e40af; line-height: 1.5;
        }

        .rti-container .rti-file-link {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 6px;
          background: #eff6ff; color: #2563eb;
          font-size: 12px; font-weight: 600;
          text-decoration: none;
          transition: all .2s ease; cursor: pointer;
        }
        .rti-container .rti-file-link:hover {
          background: #2563eb; color: #fff;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .rti-container { margin: 15px; border-radius: 10px; }
          .rti-container .rti-body { padding: 20px; }
          .rti-container .rti-header h1 { font-size: 20px; }
          .rti-container .tab { font-size: 13px; padding: 12px 8px; }
          .rti-container .status-row .val { max-width: 55%; }
          .rti-container .file-preview {
            flex-direction: column; align-items: stretch;
          }
          .rti-container .file-preview .file-actions {
            width: 100%; justify-content: flex-end;
          }
        }
      `}),(0,p.jsxs)(`div`,{className:`rti-header`,children:[(0,p.jsx)(`h1`,{children:`📄 RTI Application Portal`}),(0,p.jsx)(`p`,{children:`Right to Information Act, 2005`})]}),(0,p.jsxs)(`div`,{className:`tabs`,children:[(0,p.jsx)(`button`,{className:`tab ${a===`apply`?`active`:``}`,onClick:()=>s(`apply`),children:`📝 Apply RTI`}),(0,p.jsx)(`button`,{className:`tab ${a===`check`?`active`:``}`,onClick:()=>s(`check`),children:`🔍 Check Status`})]}),(0,p.jsxs)(`div`,{className:`rti-body`,children:[a===`apply`&&(0,p.jsx)(p.Fragment,{children:e?(0,p.jsxs)(`div`,{className:`success-msg`,children:[`✅ Your RTI application has been submitted successfully!`,(0,p.jsxs)(`div`,{className:`tracking-box`,children:[`Tracking ID: `,n]}),(0,p.jsx)(`div`,{className:`hint`,children:`⚠️ Please save this Tracking ID to check your application status later.`})]}):(0,p.jsxs)(`form`,{onSubmit:W,children:[O&&(0,p.jsxs)(`div`,{className:`submit-error-box`,children:[(0,p.jsx)(`span`,{className:`icon`,children:`⚠️`}),(0,p.jsx)(`span`,{children:O})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Applicant Type `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsxs)(`select`,{id:`userTypeId`,value:A.userTypeId,onChange:I,className:E.userTypeId?`error`:``,required:!0,children:[(0,p.jsx)(`option`,{value:``,children:`-- Select Applicant Type --`}),d.map(e=>(0,p.jsx)(`option`,{value:e.id||e.Id,children:e.name||e.Name},e.id||e.Id))]}),E.userTypeId&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.userTypeId]})]}),(0,p.jsxs)(`div`,{className:`fee-box ${A.userTypeId?`show`:``}`,children:[(0,p.jsx)(`h3`,{children:`Applicable Fee`}),(0,p.jsxs)(`div`,{children:[B&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`free`,children:`FREE`}),(0,p.jsx)(`div`,{className:`fee-note`,children:`Government / Private departments are exempted from any charges.`})]}),V&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`amount`,children:`₹49`}),(0,p.jsx)(`div`,{className:`fee-note`,children:`Student RTI applications are charged ₹49 as service fee.`})]}),H&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`span`,{className:`amount`,children:`₹49`}),(0,p.jsx)(`div`,{className:`fee-note`,children:`Study Centre RTI applications are charged ₹49 as service fee.`})]})]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Full Name `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`text`,id:`fullName`,value:A.fullName,onChange:M,className:E.fullName?`error`:``,placeholder:`Enter your full name`,required:!0}),E.fullName&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.fullName]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Mobile Number `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`tel`,id:`mobile`,value:A.mobile,onChange:M,maxLength:10,inputMode:`numeric`,pattern:`[0-9]{10}`,className:E.mobile?`error`:``,placeholder:`10-digit mobile number`,required:!0}),E.mobile&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.mobile]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Email Address `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`email`,id:`email`,value:A.email,onChange:M,className:E.email?`error`:``,placeholder:`example@email.com`,required:!0}),E.email&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.email]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Full Address `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`textarea`,{id:`address`,value:A.address,onChange:M,className:E.address?`error`:``,placeholder:`Enter your complete address with PIN code`,required:!0}),E.address&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.address]})]}),B&&(0,p.jsxs)(p.Fragment,{children:[J(`letterHead`,`Upload Letter Head`,`letterHead`,!0),J(`allDocuments`,`Upload All Documents`,`allDocuments`,!0)]}),V&&(0,p.jsx)(p.Fragment,{children:J(`allDocuments`,`Upload All Documents`,`allDocuments`,!0)}),H&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Study Centre Registration Number `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`text`,id:`centreReg`,value:A.centreReg,onChange:M,className:E.centreReg?`error`:``,placeholder:`Enter centre registration number`,required:!0}),E.centreReg&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.centreReg]})]}),J(`allDocuments`,`Upload All Documents`,`allDocuments`,!0)]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Subject `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`text`,id:`subject`,value:A.subject,onChange:M,className:E.subject?`error`:``,placeholder:`Brief subject of your RTI application`,required:!0}),E.subject&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.subject]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Information Required `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`textarea`,{id:`infoRequired`,value:A.infoRequired,onChange:M,className:E.infoRequired?`error`:``,placeholder:`Write in detail what information you need...`,required:!0}),E.infoRequired&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.infoRequired]})]}),(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,fontWeight:`normal`,cursor:`pointer`},children:[(0,p.jsx)(`input`,{type:`checkbox`,id:`declare`,checked:A.declare,onChange:M,style:{width:`auto`,margin:0},required:!0}),`I hereby declare that the information provided is true and correct.`]}),E.declare&&(0,p.jsxs)(`div`,{className:`error-text`,children:[`⚠ `,E.declare]})]}),(0,p.jsx)(`button`,{type:`submit`,className:`btn-submit`,disabled:c,children:c?`Submitting...`:`Submit RTI Application`})]})}),a===`check`&&(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`p`,{className:`check-desc`,children:[`Apni RTI application ka status check karne ke liye apna`,` `,(0,p.jsx)(`strong`,{children:`Tracking ID`}),` ya `,(0,p.jsx)(`strong`,{children:`Mobile Number / Email`}),` `,`daalein.`]}),(0,p.jsxs)(`form`,{onSubmit:G,children:[(0,p.jsxs)(`div`,{className:`form-group`,children:[(0,p.jsxs)(`label`,{children:[`Tracking ID / Mobile Number / Email `,(0,p.jsx)(`span`,{children:`*`})]}),(0,p.jsx)(`input`,{type:`text`,value:v,onChange:e=>y(e.target.value),placeholder:`E.g., RTI0002 or 7656755566 or example@email.com`,required:!0})]}),(0,p.jsx)(`button`,{type:`submit`,className:`btn-submit`,disabled:w,children:w?`Searching...`:`🔍 Check Status`})]}),S&&(0,p.jsx)(`div`,{className:`error-msg`,children:S}),b&&Array.isArray(b)&&b.map((e,t)=>{let n=K(e.statusName);return(0,p.jsxs)(`div`,{className:`status-card`,children:[(0,p.jsxs)(`div`,{className:`status-header`,children:[(0,p.jsx)(`h3`,{children:`📋 Application Details`}),e.statusName&&(0,p.jsx)(`span`,{className:`status-badge ${n}`,children:e.statusName})]}),e.trackingId&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Tracking ID`}),(0,p.jsx)(`span`,{className:`val`,children:e.trackingId})]}),e.name&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Applicant Name`}),(0,p.jsx)(`span`,{className:`val`,children:e.name})]}),e.mobileNo&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Mobile Number`}),(0,p.jsx)(`span`,{className:`val`,children:e.mobileNo})]}),e.email&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Email`}),(0,p.jsx)(`span`,{className:`val`,children:e.email})]}),e.address&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Address`}),(0,p.jsx)(`span`,{className:`val`,children:e.address})]}),e.applicantType&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Applicant Type`}),(0,p.jsx)(`span`,{className:`val`,children:e.applicantType})]}),e.subject&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Subject`}),(0,p.jsx)(`span`,{className:`val`,children:e.subject})]}),e.infoRequired&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Information Required`}),(0,p.jsx)(`span`,{className:`val`,children:e.infoRequired})]}),e.remarks&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Remarks`}),(0,p.jsx)(`span`,{className:`val`,children:e.remarks})]}),e.code&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Centre Reg No`}),(0,p.jsx)(`span`,{className:`val`,children:e.code})]}),e.createdAt&&(0,p.jsxs)(`div`,{className:`status-row`,children:[(0,p.jsx)(`span`,{className:`key`,children:`Applied On`}),(0,p.jsx)(`span`,{className:`val`,children:q(e.createdAt)})]}),(e.filePath||e.filePath1)&&(0,p.jsxs)(`div`,{className:`status-note`,children:[(0,p.jsx)(`strong`,{children:`Documents:`}),(0,p.jsxs)(`div`,{style:{marginTop:8,display:`flex`,gap:8,flexWrap:`wrap`},children:[e.filePath1&&(0,p.jsxs)(`a`,{href:`https://api.shaheedbhagatsinghhealthandeducation.com/Uploads//Uploads/${e.filePath1}`,target:`_blank`,rel:`noopener noreferrer`,className:`rti-file-link`,children:[(0,p.jsx)(`i`,{className:`bi bi-file-earmark-pdf`}),`Letter Head`]}),e.filePath&&(0,p.jsxs)(`a`,{href:`https://api.shaheedbhagatsinghhealthandeducation.com/Uploads//Uploads/${e.filePath}`,target:`_blank`,rel:`noopener noreferrer`,className:`rti-file-link`,children:[(0,p.jsx)(`i`,{className:`bi bi-file-earmark-pdf`}),`Documents`]})]})]})]},e.id||t)})]})]})]})}function v(){let{slug:e}=c(),n=a().state?.id,[r,o]=(0,f.useState)([]),[u,d]=(0,f.useState)(!0),[m,h]=(0,f.useState)([]);(0,f.useEffect)(()=>{_(),g(),n&&_(n)},[n]);let g=async()=>{try{let e=[...await l(0,130)||[]].filter(e=>e.isActive===1).sort((e,t)=>{let n=e.srNo,r=t.srNo,i=n==null,a=r==null;return i&&a?0:i?1:a?-1:Number(n)-Number(r)});h(e)}catch(e){console.log(`Menu data error:`,e),h([])}},_=async()=>{try{if(d(!0),!n){o([]);return}let e=[...await s(n)||[]].filter(e=>e.isActive===1).sort((e,t)=>{let n=e.srNo,r=t.srNo,i=n==null,a=r==null;return i&&a?0:i?1:a?-1:Number(n)-Number(r)});o(e)}catch(e){console.log(`Page data error:`,e),o([])}finally{d(!1)}};return u?(0,p.jsxs)(`div`,{className:`cms-loading`,children:[(0,p.jsx)(`div`,{className:`cms-loader`}),(0,p.jsx)(`span`,{children:`Loading content...`})]}):!r||r.length===0?(0,p.jsxs)(`div`,{className:`cms-not-found`,children:[(0,p.jsx)(`div`,{className:`cms-not-found-icon`,children:(0,p.jsx)(`i`,{className:`bi bi-file-earmark-x`,"aria-hidden":`true`})}),(0,p.jsx)(`h4`,{children:`Content Not Found`}),(0,p.jsx)(`p`,{children:`The requested content is not available.`})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`section`,{className:`cms-section`,children:[(0,p.jsx)(`div`,{className:`cms-bg-shape cms-shape-one`}),(0,p.jsx)(`div`,{className:`cms-bg-shape cms-shape-two`}),(0,p.jsx)(`div`,{className:`container`,children:(0,p.jsxs)(`div`,{className:`row`,children:[(0,p.jsx)(`div`,{className:`col-lg-9 col-md-8 mb-4`,children:r.map((e,n)=>{let r=e.productCategoryDocuments?.[0],i=r?.fileupload||``,a=i?i.startsWith(`http`)?i:`${t}${i.startsWith(`/`)?``:`/`}${i}`:``,o=a&&/\.(jpeg|jpg|gif|png|webp|svg)$/i.test(a),s=a?`https://wsrv.nl/?url=${encodeURIComponent(a)}&w=800&output=webp&q=80`:``;return n%2,(0,p.jsxs)(`div`,{className:`cms-card`,children:[(0,p.jsxs)(`div`,{className:`cms-card-header`,children:[(0,p.jsx)(`div`,{className:`cms-card-number`,children:(n+1).toString().padStart(2,`0`)}),(0,p.jsxs)(`div`,{className:`cms-card-title-wrap`,children:[(0,p.jsx)(`h2`,{className:`cms-card-title`,children:e.name}),e.short_intro&&(0,p.jsx)(`p`,{className:`cms-card-subtitle`,children:e.shortDescription})]})]}),(0,p.jsx)(`div`,{className:`cms-card-body`,children:(0,p.jsxs)(`div`,{className:`row g-0 align-items-start ${o&&n%2==1?`flex-lg-row-reverse`:``}`,children:[o&&(0,p.jsx)(`div`,{className:`col-lg-5`,children:(0,p.jsx)(`div`,{className:`cms-image-wrap`,children:(0,p.jsx)(`img`,{src:s,alt:r?.altTag||e.name||`Content`,className:`cms-image`,loading:`lazy`,width:`600`,height:`400`})})}),(0,p.jsx)(`div`,{className:o?`col-lg-7`:`col-lg-12`,children:(0,p.jsx)(`div`,{className:`cms-content ${o?`cms-content-with-image`:``}`,children:(0,p.jsx)(`div`,{className:`cms-rich-text`,dangerouslySetInnerHTML:{__html:e.descrption||``}})})})]})})]},e.id??n)})}),(0,p.jsx)(`div`,{className:`col-lg-3 col-md-4 mb-4`,children:(0,p.jsxs)(`div`,{className:`about-sidebar`,children:[(0,p.jsxs)(`h3`,{className:`sidebar-title`,children:[(0,p.jsx)(`i`,{className:`bi bi-building`}),` Department`]}),(0,p.jsx)(`ul`,{className:`sidebar-list`,children:m.length>0?m.map(e=>(0,p.jsx)(`li`,{children:(0,p.jsx)(i,{to:`/department/${e.slug}`,state:{id:e.id,pageTitle:e.name},className:`sidebar-link ${n===e.id?`active`:``}`,children:e.name})},e.id)):(0,p.jsx)(`li`,{className:`text-muted p-3`,children:`No menu available`})})]})})]})})]}),(0,p.jsx)(`style`,{children:`
                /* Aapka original CSS (Sidebar CSS added) */
                .cms-section { position: relative; min-height: 100vh; padding: 70px 0 90px; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%); overflow: hidden; }
                .cms-bg-shape { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(2px); }
                .cms-shape-one { width: 450px; height: 450px; top: -200px; left: -180px; background: rgba(255, 102, 0, 0.06); }
                .cms-shape-two { width: 520px; height: 520px; right: -250px; bottom: -270px; background: rgba(245, 166, 35, 0.07); }
                .cms-page-header { text-align: center; margin-bottom: 45px; position: relative; z-index: 2; }
                .cms-page-header-line { width: 60px; height: 4px; background: linear-gradient(90deg, #ff6600, #f5a623); border-radius: 5px; margin: 0 auto 22px; }
                .cms-page-main-title { font-size: 34px; font-weight: 800; color: #1c2430; margin: 0; letter-spacing: -0.8px; line-height: 1.25; max-width: 900px; margin-left: auto; margin-right: auto; }
                .cms-page-header-underline { width: 100px; height: 3px; background: #ff6600; border-radius: 5px; margin: 18px auto 0; opacity: 0.5; }
                
                .cms-card { position: relative; z-index: 2; background: #ffffff; border: 1px solid rgba(0, 0, 0, 0.06); border-radius: 20px; box-shadow: 0 15px 45px rgba(20, 30, 50, 0.07); overflow: hidden; margin-bottom: 35px; transition: all 0.3s ease; }
                .cms-card:hover { box-shadow: 0 25px 60px rgba(20, 30, 50, 0.10); transform: translateY(-2px); }
                .cms-card:last-child { margin-bottom: 0; }
                .cms-card-header { display: flex; align-items: flex-start; gap: 18px; padding: 28px 35px 22px; border-bottom: 1px solid #eef1f5; background: linear-gradient(135deg, #fffaf5 0%, #ffffff 100%); }
                .cms-card-number { min-width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #ff6600, #f5a623); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; letter-spacing: 0.5px; box-shadow: 0 6px 16px rgba(255, 102, 0, 0.25); flex-shrink: 0; }
                .cms-card-title-wrap { flex: 1; min-width: 0; }
                .cms-card-title { margin: 0; color: #1c2430; font-size: 22px; font-weight: 750; line-height: 1.35; letter-spacing: -0.3px; }
                .cms-card-subtitle { margin: 8px 0 0; color: #8b95a7; font-size: 14px; font-weight: 500; line-height: 1.6; }
                .cms-card-body { padding: 0; }
                .cms-image-wrap { padding: 30px 20px 30px 35px; display: flex; align-items: center; justify-content: center; }
                .cms-image { width: 100%; max-width: 380px; height: auto; max-height: 400px; object-fit: contain; border-radius: 14px; box-shadow: 0 12px 35px rgba(0, 0, 0, 0.10); border: 1px solid #eef1f5; }
                .cms-content { padding: 30px 35px 35px; }
                .cms-content-with-image { padding-left: 10px; }
                .cms-rich-text { color: #4b5563; font-size: 15px; line-height: 1.85; word-wrap: break-word; }
                .cms-rich-text h1, .cms-rich-text h2, .cms-rich-text h3, .cms-rich-text h4, .cms-rich-text h5 { color: #1c2430; font-weight: 750; line-height: 1.35; margin-top: 26px; margin-bottom: 14px; letter-spacing: -0.3px; }
                .cms-rich-text h1 { font-size: 26px; }
                .cms-rich-text h2 { font-size: 21px; padding-bottom: 8px; border-bottom: 2px solid #ff6600; display: inline-block; padding-right: 25px; }
                .cms-rich-text h3 { font-size: 18px; color: #2d3748; }
                .cms-rich-text h4 { font-size: 16px; color: #2d3748; }
                .cms-rich-text h5 { font-size: 15px; color: #4b5563; }
                .cms-rich-text h1:first-child, .cms-rich-text h2:first-child, .cms-rich-text h3:first-child { margin-top: 0; }
                .cms-rich-text p { margin-bottom: 14px; color: #4b5563; }
                .cms-rich-text strong, .cms-rich-text b { color: #1c2430; font-weight: 700; }
                .cms-rich-text em, .cms-rich-text i { color: #ff6600; font-style: italic; }
                .cms-rich-text a { color: #ff6600; text-decoration: none; font-weight: 600; border-bottom: 1px solid rgba(255, 102, 0, 0.3); transition: all 0.2s ease; }
                .cms-rich-text a:hover { color: #e65c00; border-bottom-color: #e65c00; }
                .cms-rich-text ul, .cms-rich-text ol { padding-left: 24px; margin-bottom: 18px; }
                .cms-rich-text li { margin-bottom: 8px; line-height: 1.75; color: #4b5563; }
                .cms-rich-text ul li::marker { color: #ff6600; font-size: 18px; }
                .cms-rich-text ol li::marker { color: #ff6600; font-weight: 700; }
                .cms-rich-text table { width: 100%; border-collapse: collapse; margin: 20px 0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05); font-size: 14px; }
                .cms-rich-text table thead { background: linear-gradient(135deg, #ff6600, #f5a623); }
                .cms-rich-text table th { color: #fff; padding: 13px 15px; text-align: left; font-weight: 700; font-size: 13px; letter-spacing: 0.3px; text-transform: uppercase; }
                .cms-rich-text table td { padding: 12px 15px; border-bottom: 1px solid #f0f2f6; color: #4b5563; vertical-align: top; }
                .cms-rich-text table tbody tr:nth-child(even) { background: #fafbfc; }
                .cms-rich-text table tbody tr:hover { background: #fff8f2; }
                .cms-rich-text table tbody tr:last-child td { border-bottom: none; }
                .cms-rich-text blockquote { border-left: 4px solid #ff6600; background: #fff8f2; padding: 15px 20px; margin: 20px 0; border-radius: 0 10px 10px 0; color: #4b5563; font-style: italic; }
                .cms-rich-text hr { border: none; border-top: 2px solid #eef1f5; margin: 30px 0; }
                .cms-rich-text img { max-width: 100%; height: auto; border-radius: 10px; margin: 15px 0; box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); }
                .cms-rich-text code { background: #fff4ea; color: #ff6600; padding: 2px 8px; border-radius: 5px; font-size: 13px; font-family: 'Courier New', monospace; }
                
                .cms-loading { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; color: #68717d; background: #f8fafc; }
                .cms-loader { width: 42px; height: 42px; border: 3px solid #f0f0f0; border-top-color: #ff6600; border-radius: 50%; animation: cmsSpin 0.8s linear infinite; }
                @keyframes cmsSpin { to { transform: rotate(360deg); } }
                .cms-not-found { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; text-align: center; padding: 30px; }
                .cms-not-found-icon { width: 80px; height: 80px; border-radius: 50%; background: #fff1e8; color: #ff6600; display: flex; align-items: center; justify-content: center; font-size: 34px; margin-bottom: 20px; }
                .cms-not-found h4 { color: #1c2430; font-weight: 700; margin-bottom: 8px; font-size: 22px; }
                .cms-not-found p { color: #8b95a7; margin: 0; font-size: 15px; }

                /* ✅ NAYA CSS: SIDEBAR KE LIYE */
                .about-sidebar { 
                    background: #ffffff; 
                    border-radius: 16px; 
                    padding: 20px 0; 
                    box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
                    border: 1px solid rgba(0,0,0,0.05); 
                    position: sticky; 
                    top: 100px; 
                }
                .sidebar-title { 
                    font-size: 18px; 
                    font-weight: 700; 
                    color: #1c2430; 
                    padding: 0 20px 15px; 
                    margin: 0; 
                    border-bottom: 2px solid #f0f0f0; 
                    display: flex; 
                    align-items: center; 
                    gap: 8px; 
                }
                .sidebar-title i { color: #ff6600; }
                .sidebar-list { list-style: none; padding: 0; margin: 0; }
                .sidebar-link { 
                    display: block; 
                    padding: 12px 20px; 
                    color: #555; 
                    font-weight: 500; 
                    font-size: 14px; 
                    text-decoration: none; 
                    border-left: 3px solid transparent; 
                    transition: all 0.2s ease; 
                }
                .sidebar-link:hover { background: #f8f9fa; color: #ff6600; }
                .sidebar-link.active { 
                    background: #fff5f0; 
                    color: #ff6600; 
                    border-left-color: #ff6600; 
                    font-weight: 600; 
                }

                /* RESPONSIVE */
                @media (max-width: 991px) { 
                    .cms-section { padding: 50px 0 60px; } 
                    .cms-page-main-title { font-size: 28px; } 
                    .cms-card-header { padding: 22px 25px 18px; } 
                    .cms-card-title { font-size: 19px; } 
                    .cms-card-number { min-width: 42px; height: 42px; font-size: 14px; } 
                    .cms-content { padding: 25px 25px 30px; } 
                    .cms-content-with-image { padding-left: 25px; } 
                    .cms-image-wrap { padding: 25px 25px 10px; } 
                    .cms-image { max-width: 100%; max-height: 320px; } 
                    
                    .about-sidebar { position: relative; top: 0; margin-top: 20px; }
                }
                @media (max-width: 767px) { 
                    .cms-section { padding: 35px 0 45px; } 
                    .cms-page-header { margin-bottom: 35px; } 
                    .cms-page-main-title { font-size: 23px; } 
                    .cms-card { border-radius: 16px; margin-bottom: 25px; } 
                    .cms-card-header { padding: 18px 20px 15px; gap: 13px; } 
                    .cms-card-number { min-width: 38px; height: 38px; font-size: 13px; border-radius: 10px; } 
                    .cms-card-title { font-size: 17px; } 
                    .cms-card-subtitle { font-size: 13px; } 
                    .cms-content { padding: 20px 20px 25px; } 
                    .cms-content-with-image { padding-left: 20px; } 
                    .cms-image-wrap { padding: 20px 20px 5px; } 
                    .cms-image { max-height: 260px; border-radius: 12px; } 
                    .cms-rich-text { font-size: 14px; line-height: 1.75; } 
                    .cms-rich-text h2 { font-size: 18px; } 
                    .cms-rich-text h3 { font-size: 16px; } 
                    .cms-rich-text table { font-size: 13px; } 
                    .cms-rich-text table th, .cms-rich-text table td { padding: 10px 12px; } 
                }
                @media (max-width: 480px) { 
                    .cms-section { padding: 25px 0 35px; } 
                    .cms-page-main-title { font-size: 20px; } 
                    .cms-card-header { padding: 16px 16px 13px; gap: 11px; } 
                    .cms-card-number { min-width: 34px; height: 34px; font-size: 12px; } 
                    .cms-card-title { font-size: 16px; } 
                    .cms-content { padding: 18px 16px 22px; } 
                    .cms-content-with-image { padding-left: 16px; } 
                    .cms-image-wrap { padding: 16px 16px 5px; } 
                    .cms-rich-text { font-size: 13px; line-height: 1.7; } 
                    .cms-rich-text h2 { font-size: 16px; } 
                    .cms-rich-text h3 { font-size: 15px; } 
                    .cms-rich-text table { font-size: 12px; } 
                    .cms-rich-text table th, .cms-rich-text table td { padding: 8px 10px; } 
                }
                `})]})}function y(){let{slug:e}=c();return e===`right-to-information-rti`?(0,p.jsx)(_,{}):(0,p.jsx)(v,{})}export{y as default};