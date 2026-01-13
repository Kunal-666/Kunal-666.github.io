import{j as e,L as i,p as a}from"./index-kyPVxjxT.js";function d(){const s=a.slice(0,2);return e.jsxs("section",{id:"projects",className:"py-20 sm:py-24 md:py-28 px-6 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white",children:"Selected Projects"}),e.jsx("p",{className:"text-gray-400 mt-3 sm:mt-4 max-w-2xl text-sm sm:text-base leading-relaxed",children:"A quick preview of systems I’ve built — focused on CMS architecture, dashboards, and real-world workflows."})]}),e.jsx(i,{to:"/projects",className:`\r
            inline-flex items-center justify-center\r
            px-5 py-2.5 rounded-lg\r
            border border-white/15\r
            bg-white/[0.04]\r
            text-white text-sm font-medium\r
            hover:bg-white/[0.08]\r
            transition\r
          `,children:"View all projects →"})]}),e.jsx("div",{className:"space-y-12 sm:space-y-14",children:s.map((r,t)=>e.jsx(l,{project:r,reverse:t%2!==0},r.title))})]})}function l({project:s,reverse:r}){return e.jsxs("div",{className:"grid md:grid-cols-2 gap-10 md:gap-14 items-center",children:[e.jsxs("div",{className:r?"md:order-2":"md:order-1",children:[e.jsx("h3",{className:"text-xl sm:text-2xl font-semibold text-white",children:s.title}),e.jsx("p",{className:"text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base",children:s.description}),s.highlights&&e.jsx("ul",{className:"mt-4 space-y-2 text-sm text-gray-300 list-disc list-inside",children:s.highlights.slice(0,3).map(t=>e.jsx("li",{children:t},t))}),e.jsx("div",{className:"flex flex-wrap gap-2.5 mt-5 sm:mt-6",children:s.tech.slice(0,8).map(t=>e.jsx("span",{className:`\r
                px-3 py-1\r
                text-xs sm:text-sm\r
                border border-white/15\r
                rounded-md\r
                bg-black/40\r
                text-gray-200\r
              `,children:t},t))}),e.jsxs("div",{className:"flex gap-6 mt-5 sm:mt-6 text-sm",children:[s.github&&e.jsx("a",{href:s.github,target:"_blank",rel:"noreferrer",className:"underline text-white/70 hover:text-white transition",children:"GitHub"}),s.live&&e.jsx("a",{href:s.image,target:"_blank",rel:"noreferrer",className:"underline text-white/70 hover:text-white transition",children:"Live Demo"})]})]}),e.jsx("div",{className:`
          group rounded-2xl border border-white/10
          bg-white/[0.03] backdrop-blur
          h-44 sm:h-56 md:h-64
          overflow-hidden relative
          transition
          hover:border-white/20
          ${r?"md:order-1":"md:order-2"}
        `,style:{backgroundImage:`url(${s.image})`,backgroundSize:"cover",backgroundPosition:"center"},children:e.jsx("div",{className:"absolute inset-0 bg-black/35 group-hover:bg-black/15 transition"})})]})}export{d as default};
