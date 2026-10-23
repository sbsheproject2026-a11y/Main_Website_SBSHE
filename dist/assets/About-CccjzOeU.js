import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{_ as n,d as r,f as i,l as a,o,u as s}from"./index-Dlx9wpcq.js";var c=e(n(),1),l=s();function u(){let e=i().state?.id,[n,s]=(0,c.useState)([]),[u,d]=(0,c.useState)(!0),[f,p]=(0,c.useState)([]);(0,c.useEffect)(()=>{e?h(e):d(!1),m()},[e]);let m=async()=>{try{let e=[...await o(0,128)||[]].filter(e=>e.isActive===1).sort((e,t)=>{let n=e.srNo,r=t.srNo,i=n==null,a=r==null;return i&&a?0:i?1:a?-1:Number(n)-Number(r)});p(e)}catch(e){console.log(`Menu data error:`,e),p([])}},h=async e=>{try{d(!0);let t=[...await a(e)||[]].filter(e=>e.isActive===1).sort((e,t)=>{let n=e.srNo,r=t.srNo,i=n==null,a=r==null;return i&&a?0:i?1:a?-1:Number(n)-Number(r)});s(t)}catch(e){console.log(`Page data error:`,e),s([])}finally{d(!1)}};return e?u?(0,l.jsxs)(`div`,{className:`about-loading`,children:[(0,l.jsx)(`div`,{className:`about-loader`}),(0,l.jsx)(`span`,{children:`Loading...`})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`section`,{className:`about-section`,children:[(0,l.jsx)(`div`,{className:`about-bg-shape about-shape-one`}),(0,l.jsx)(`div`,{className:`about-bg-shape about-shape-two`}),(0,l.jsx)(`div`,{className:`container`,children:(0,l.jsxs)(`div`,{className:`row`,children:[(0,l.jsx)(`div`,{className:`col-lg-9 col-md-8 mb-4`,children:!n||n.length===0?(0,l.jsx)(`div`,{className:`about-card`,style:{padding:`40px`,textAlign:`center`},children:(0,l.jsx)(`h4`,{style:{color:`#555`},children:`No content available for this page.`})}):n.map((e,n)=>{let r=e.productCategoryDocuments?.[0],i=r?.fileupload||``,a=i?i.startsWith(`http`)?i:`${t}${i.startsWith(`/`)?``:`/`}${i}`:``,o=a&&/\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?$/i.test(a);return(0,l.jsxs)(`div`,{className:`about-card`,children:[o&&(0,l.jsx)(`div`,{className:`about-visual`,children:(0,l.jsx)(`div`,{className:`about-image-box`,children:(0,l.jsx)(`div`,{className:`image-inner`,children:(0,l.jsx)(`img`,{src:a,alt:r?.altTag||e.name||`About Us`,className:`about-main-image`,loading:`lazy`,onError:e=>{e.target.style.display=`none`}})})})}),(0,l.jsxs)(`div`,{className:`about-content`,children:[(0,l.jsxs)(`h1`,{className:`about-title`,children:[e.shortDescription,` `,e.name]}),(0,l.jsxs)(`div`,{className:`title-line`,children:[(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{}),(0,l.jsx)(`span`,{})]}),e.shortDescription&&(0,l.jsx)(`div`,{className:`about-short-intro`,children:e.shortDescription}),(0,l.jsx)(`div`,{className:`about-description`,dangerouslySetInnerHTML:{__html:e.descrption||``}}),(0,l.jsx)(`div`,{className:`about-bottom-line`,children:(0,l.jsx)(`span`,{})})]})]},e.id??n)})}),(0,l.jsx)(`div`,{className:`col-lg-3 col-md-4 mb-4`,children:(0,l.jsxs)(`div`,{className:`about-sidebar`,children:[(0,l.jsxs)(`h3`,{className:`sidebar-title`,children:[(0,l.jsx)(`i`,{className:`bi bi-list-ul`}),` About Us`]}),(0,l.jsx)(`ul`,{className:`sidebar-list`,children:f.length>0?f.map(t=>(0,l.jsx)(`li`,{children:(0,l.jsx)(r,{to:`/about/${t.slug}`,state:{id:t.id,pageTitle:t.name},className:`sidebar-link ${e===t.id?`active`:``}`,children:t.name})},t.id)):(0,l.jsx)(`li`,{className:`text-muted p-3`,children:`No menu available`})})]})})]})})]}),(0,l.jsx)(`style`,{children:`
                    .about-section { position: relative; min-height: 650px; padding: 80px 0; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 50%, #fff8f2 100%); overflow: hidden; }
                    .about-bg-shape { position: absolute; border-radius: 50%; pointer-events: none; }
                    .about-shape-one { width: 420px; height: 420px; top: -180px; left: -160px; background: rgba(255, 102, 0, 0.055); }
                    .about-shape-two { width: 500px; height: 500px; right: -240px; bottom: -260px; background: rgba(245, 166, 35, 0.06); }
                    
                    .about-sidebar { background: #ffffff; border-radius: 16px; padding: 20px 0; box-shadow: 0 10px 30px rgba(0,0,0,0.05); border: 1px solid rgba(0,0,0,0.05); position: sticky; top: 20px; }
                    .sidebar-title { font-size: 18px; font-weight: 700; color: #1c2430; padding: 0 20px 15px; margin: 0; border-bottom: 2px solid #f0f0f0; display: flex; align-items: center; gap: 8px; }
                    .sidebar-title i { color: #ff6600; }
                    .sidebar-list { list-style: none; padding: 0; margin: 0; }
                    .sidebar-link { display: block; padding: 12px 20px; color: #555; font-weight: 500; font-size: 14px; text-decoration: none; border-left: 3px solid transparent; transition: all 0.2s ease; }
                    .sidebar-link:hover { background: #f8f9fa; color: #ff6600; }
                    .sidebar-link.active { background: #fff5f0; color: #ff6600; border-left-color: #ff6600; font-weight: 600; }
                    
                    .about-card { position: relative; z-index: 2; width: 100%; background: rgba(255, 255, 255, 0.96); border: 1px solid rgba(0, 0, 0, 0.055); border-radius: 20px; box-shadow: 0 15px 50px rgba(20, 30, 50, 0.08); overflow: hidden; margin-bottom: 30px; }
                    .about-card:last-child { margin-bottom: 0; }
                    
                    /* ✅ Inline styles hataye taaki CSS class properly kaam kare */
                    .about-visual { width: 100%; height: 100%; padding: 30px; display: flex; align-items: center; justify-content: center; background: linear-gradient(145deg, #fff7ef, #ffffff); border-bottom: 1px solid #eee; }
                    .about-image-box { position: relative; width: 100%; max-width: 100%; padding: 8px; display: flex; justify-content: center; }
                    .image-inner { position: relative; z-index: 2; width: 100%; height: auto; max-height: 450px; background: #ffffff; border-radius: 16px; display: flex; align-items: center; justify-content: center; overflow: hidden; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); border: 1px solid rgba(255, 102, 0, 0.08); padding: 10px; }
                    .about-main-image { width: 100%; height: auto; max-height: 430px; display: block; object-fit: contain; object-position: center; border-radius: 10px; transition: transform 0.5s ease; }
                    .about-image-box:hover .about-main-image { transform: scale(1.02); }
                    
                    .about-content { padding: 40px; }
                    .about-title { margin: 0; max-width: 800px; color: #1c2430; font-size: 30px; font-weight: 750; line-height: 1.2; letter-spacing: -0.8px; }
                    .title-line { display: flex; align-items: center; gap: 5px; margin: 15px 0 20px; }
                    .title-line span { display: block; height: 4px; border-radius: 5px; background: #ff6600; }
                    .title-line span:nth-child(1) { width: 42px; } .title-line span:nth-child(2) { width: 18px; opacity: 0.55; } .title-line span:nth-child(3) { width: 7px; opacity: 0.3; }
                    .about-short-intro { color: #3c4653; font-size: 16px; font-weight: 600; line-height: 1.75; margin-bottom: 18px; }
                    .about-description { color: #68717d; font-size: 15px; line-height: 1.9; }
                    .about-description p { margin-bottom: 14px; } .about-description strong { color: #303944; }
                    .about-description ul, .about-description ol { padding-left: 22px; margin-bottom: 18px; } .about-description li { margin-bottom: 8px; }
                    .about-bottom-line { margin-top: 25px; width: 100%; height: 1px; background: #e8ebef; position: relative; }
                    .about-bottom-line span { position: absolute; left: 0; top: -1px; width: 65px; height: 3px; background: #ff6600; border-radius: 5px; }

                    .about-loading { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; color: #68717d; background: #f8fafc; }
                    .about-loader { width: 38px; height: 38px; border: 3px solid #eee; border-top-color: #ff6600; border-radius: 50%; animation: aboutSpin 0.8s linear infinite; }
                    .about-not-found { min-height: 500px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #f8fafc; text-align: center; padding: 30px; }
                    .not-found-icon { width: 70px; height: 70px; border-radius: 50%; background: #fff1e8; color: #ff6600; display: flex; align-items: center; justify-content: center; font-size: 30px; margin-bottom: 18px; }
                    .about-not-found h4 { color: #222; font-weight: 700; margin-bottom: 7px; }
                    .about-not-found p { color: #777; margin: 0; }
                    @keyframes aboutSpin { to { transform: rotate(360deg); } }
                    
                    @media (max-width: 991px) { 
                        .about-section { padding: 50px 0; } 
                        .about-sidebar { position: relative; top: 0; margin-top: 20px; }
                        .about-content { padding: 30px; } 
                        .about-title { font-size: 26px; } 
                        .about-visual { padding: 20px; }
                    }
                    @media (max-width: 767px) { 
                        .about-section { padding: 30px 0; } 
                        .image-inner { max-height: 300px; }
                        .about-main-image { max-height: 280px; }
                        .about-content { padding: 25px 20px; } 
                        .about-title { font-size: 22px; } 
                        .about-short-intro { font-size: 15px; } 
                        .about-description { font-size: 14px; } 
                    }
                `})]}):(0,l.jsxs)(`div`,{className:`about-not-found`,children:[(0,l.jsx)(`div`,{className:`not-found-icon`,children:(0,l.jsx)(`i`,{className:`bi bi-info-circle`,"aria-hidden":`true`})}),(0,l.jsx)(`h4`,{children:`Please select a menu`}),(0,l.jsx)(`p`,{children:`Select a page from the sidebar to view content.`})]})}export{u as default};