import{r as e}from"./rolldown-runtime-hePW80VL.js";import{t}from"./api-C6mtWg-S.js";import{_ as n,d as r,s as i,u as a}from"./index-Dlx9wpcq.js";var o=e(n(),1),s=a();function c(){let[e,n]=(0,o.useState)([]),a=(0,o.useRef)(null),c=(0,o.useRef)(!1);(0,o.useEffect)(()=>{l()},[]);let l=async()=>{try{let e=(await i(13)||[]).filter(e=>e.isActive===1||e.isActive===!0);n(e)}catch(e){console.log(`Programme Error:`,e),n([])}},u=e.length>0?[...e,...e,...e]:[];(0,o.useEffect)(()=>{if(e.length===0)return;let t=setInterval(()=>{if(!c.current&&a.current){let t=a.current,n=t.querySelector(`.programme-slide`);if(!n)return;let r=n.offsetWidth+20,i=r*e.length,o=t.scrollLeft+r;o>=i*2?(t.style.scrollBehavior=`auto`,t.scrollLeft=o-i,setTimeout(()=>{t.style.scrollBehavior=`smooth`},50)):t.scrollTo({left:o,behavior:`smooth`})}},3e3);return()=>clearInterval(t)},[e]);let d=e=>e?e.startsWith(`http`)?e:`${t}${e.startsWith(`/`)?``:`/`}${e}`:null,f=t=>{if(a.current){let n=a.current,r=n.querySelector(`.programme-slide`);if(!r)return;let i=r.offsetWidth+20,o=i*e.length,s=n.scrollLeft+(t===`right`?i:-i);s<0?(n.style.scrollBehavior=`auto`,n.scrollLeft=o+s,setTimeout(()=>{n.style.scrollBehavior=`smooth`},50)):s>=o*2?(n.style.scrollBehavior=`auto`,n.scrollLeft=s-o,setTimeout(()=>{n.style.scrollBehavior=`smooth`},50)):n.scrollTo({left:s,behavior:`smooth`})}};return(0,s.jsxs)(s.Fragment,{children:[e.length>0&&(0,s.jsxs)(`section`,{className:`programme-section`,children:[(0,s.jsxs)(`div`,{className:`programme-section-header`,children:[(0,s.jsxs)(`div`,{className:`programme-section-label`,children:[(0,s.jsx)(`span`,{className:`programme-label-line`}),(0,s.jsx)(`span`,{children:`Schools of Studies`})]}),(0,s.jsx)(`h2`,{className:`programme-section-title`,children:`Explore Our Programmes`}),(0,s.jsx)(`p`,{className:`programme-section-subtitle`,children:`Discover professional programmes designed to build practical knowledge and support your career goals.`})]}),(0,s.jsxs)(`div`,{className:`programme-slider-wrapper`,onMouseEnter:()=>{c.current=!0},onMouseLeave:()=>{c.current=!1},onTouchStart:()=>{c.current=!0},onTouchEnd:()=>{c.current=!1},children:[(0,s.jsx)(`button`,{className:`slider-nav-btn prev`,onClick:()=>f(`left`),"aria-label":`Previous`,children:(0,s.jsx)(`i`,{className:`fas fa-chevron-left`})}),(0,s.jsx)(`div`,{className:`programme-slider-container`,ref:a,children:(0,s.jsx)(`div`,{className:`programme-track`,children:u.map((e,t)=>{let n=d(e.filePath),i=n?`https://wsrv.nl/?url=${encodeURIComponent(n)}&w=600&output=webp&q=80`:null;return(0,s.jsx)(`div`,{className:`programme-slide`,children:(0,s.jsxs)(`div`,{className:`programme-card`,children:[(0,s.jsxs)(`div`,{className:`programme-image`,children:[e.filePath?(0,s.jsx)(`img`,{src:i,alt:e.name,loading:`lazy`}):(0,s.jsx)(`div`,{className:`programme-placeholder`}),(0,s.jsx)(`div`,{className:`programme-image-overlay`})]}),(0,s.jsxs)(`div`,{className:`programme-content`,children:[(0,s.jsx)(`div`,{className:`programme-card-line`,children:(0,s.jsx)(`span`,{})}),(0,s.jsx)(r,{to:`/course-details/${e.slug}`,state:{id:e.id},className:`programme-name`,children:e.name}),(0,s.jsx)(`p`,{className:`programme-description`,children:e.description||`Explore professional courses and develop practical skills for your career.`}),(0,s.jsx)(`div`,{className:`programme-card-footer`,children:(0,s.jsxs)(r,{to:`/course-details/${e.slug}`,state:{id:e.id},className:`programme-link`,children:[(0,s.jsx)(`span`,{children:`Explore Courses`}),(0,s.jsx)(`span`,{className:`programme-link-icon`,children:(0,s.jsx)(`i`,{className:`fas fa-arrow-right`,"aria-hidden":`true`})})]})})]})]})},`${e.id}-${t}`)})})}),(0,s.jsx)(`button`,{className:`slider-nav-btn next`,onClick:()=>f(`right`),"aria-label":`Next`,children:(0,s.jsx)(`i`,{className:`fas fa-chevron-right`})})]})]}),(0,s.jsx)(`style`,{children:`
                .programme-section { width: 100%; padding: 70px 0 75px; background: linear-gradient(180deg, #ffffff 0%, #f7fbfd 100%); position: relative; overflow: hidden; }
                .programme-section-header { width: 100%; max-width: 800px; margin: 0 auto 38px; padding: 0 15px; text-align: center; position: relative; z-index: 2; }
                .programme-section-label { display: flex; align-items: center; justify-content: center; gap: 9px; margin-bottom: 10px; color: #07567f; font-size: 11px; font-weight: 800; letter-spacing: 2.5px; text-transform: uppercase; }
                .programme-label-line { width: 30px; height: 3px; border-radius: 20px; background: #ffd33d; }
                .programme-section-title { margin: 0; color: #063d59; font-size: 34px; line-height: 1.25; font-weight: 800; }
                .programme-section-subtitle { max-width: 650px; margin: 12px auto 0; color: #687780; font-size: 14px; line-height: 1.75; }

                .programme-slider-wrapper { position: relative; width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 20px; z-index: 2; }
                
                .programme-slider-container { 
                    width: 100%; 
                    overflow-x: auto; 
                    scroll-snap-type: x mandatory; 
                    scrollbar-width: none; 
                    -ms-overflow-style: none; 
                    padding: 10px 0 25px;
                    scroll-behavior: smooth;
                }
                .programme-slider-container::-webkit-scrollbar { display: none; }

                .programme-track { 
                    display: flex; 
                    gap: 20px; 
                    padding: 0 5px; 
                }

                .programme-slide { 
                    flex: 0 0 calc(33.333% - 13.33px); 
                    scroll-snap-align: start; 
                }

                .programme-card { width: 100%; height: 100%; min-height: 445px; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(1, 80, 124, 0.09); box-shadow: 0 8px 28px rgba(6, 42, 60, 0.08); transition: transform 0.35s ease, box-shadow 0.35s ease; display: flex; flex-direction: column; position: relative; }
                .programme-card:hover { transform: translateY(-8px); box-shadow: 0 18px 42px rgba(1, 80, 124, 0.16); }
                
                /* ✅ IMAGE FIX */
                .programme-image { 
                    width: 100%; 
                    height: 220px; 
                    flex-shrink: 0; 
                    position: relative; 
                    overflow: hidden; 
                    background: #f0f4f7; 
                }
                .programme-image img { 
                    width: 100%; 
                    height: 100%; 
                    display: block; 
                    object-fit: cover; 
                    object-position: center; 
                    transition: transform 0.6s ease; 
                }
                .programme-card:hover .programme-image img { transform: scale(1.07); }
                
                .programme-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(6,42,60,0.48) 100%); }
                .programme-content { flex: 1; display: flex; flex-direction: column; padding: 20px 21px 21px; }
                .programme-card-line { width: 100%; height: 3px; margin-bottom: 13px; }
                .programme-card-line span { display: block; width: 42px; height: 3px; background: #ffd33d; border-radius: 20px; transition: width 0.35s ease; }
                .programme-card:hover .programme-card-line span { width: 70px; }

                /* ✅ TITLE (programme-name) HOVER FIX */
                .programme-name { 
                    display: block; 
                    color: #063d59; 
                    text-decoration: none; 
                    font-size: 19px; 
                    line-height: 1.4; 
                    font-weight: 800; 
                    margin: 0 0 10px; 
                    min-height: 53px; 
                    transition: color 0.25s ease; /* Added Smooth Transition */
                }
                .programme-name:hover {
                    color: #07567f; /* Color change on hover */
                    text-decoration: none;
                }

                .programme-description { color: #68747b; font-size: 13px; line-height: 1.7; margin: 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; min-height: 66px; }
                .programme-card-footer { margin-top: auto; padding-top: 20px; border-top: 1px solid #edf1f3; }
                
                /* ✅ EXPLORE COURSES HOVER FIX */
                .programme-link { 
                    display: inline-flex; 
                    align-items: center; 
                    gap: 9px; 
                    color: #07567f; 
                    text-decoration: none; 
                    font-size: 12px; 
                    font-weight: 800; 
                    transition: color 0.25s ease; /* Added Smooth Transition */
                }
                .programme-link:hover { 
                    color: #e2a900; /* Yellow color on hover */
                    text-decoration: none; 
                }
                .programme-link-icon { width: 27px; height: 27px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: #eaf4f8; color: #07567f; transition: all 0.25s ease; }
                .programme-link:hover .programme-link-icon { background: #07567f; color: #ffffff; transform: translateX(4px); }

                .slider-nav-btn { position: absolute; top: 50%; transform: translateY(-50%); width: 45px; height: 45px; border-radius: 50%; background: #ffffff; color: #07567f; border: 1px solid rgba(1, 80, 124, 0.15); box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: all 0.2s ease; }
                .slider-nav-btn:hover { background: #07567f; color: #ffffff; }
                .slider-nav-btn.prev { left: -15px; }
                .slider-nav-btn.next { right: -15px; }

                @media (max-width: 991px) {
                    .programme-slide { flex: 0 0 calc(50% - 10px); } 
                    .slider-nav-btn { display: none; }
                }
                @media (max-width: 767px) {
                    .programme-slide { flex: 0 0 100%; } 
                    .programme-track { gap: 15px; }
                    .programme-card { min-height: 415px; }
                }
                `})]})}export{c as default};