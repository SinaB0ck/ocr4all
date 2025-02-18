import{_ as o,o as r,c as a,j as t,a as l,t as n,ag as s}from"./chunks/framework.lTm5q8ku.js";const c="/images/user-guide/project_start_and_overview/project_overview_settings.jpg",p="/images/user-guide/project_start_and_overview/data_conversion_request.png",d="/images/user-guide/project_start_and_overview/overview.png",_=JSON.parse('{"title":"Project Start and Overview","description":"","frontmatter":{"title":"Project Start and Overview"},"headers":[],"relativePath":"guide/user-guide/project-start-and-overview.md","filePath":"guide/user-guide/project-start-and-overview.md","lastUpdated":1739887318000}'),u={name:"guide/user-guide/project-start-and-overview.md"},g={id:"frontmatter-title",tabindex:"-1"};function h(i,e,f,m,w,v){return r(),a("div",null,[t("h1",g,[l(n(i.$frontmatter.title)+" ",1),e[0]||(e[0]=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1))]),e[1]||(e[1]=s('<p><strong>Start Docker:</strong></p><ul><li>Linux: Docker will start automatically after the computer starts</li><li>Docker for Windows: start Docker by clicking on the Docker icon (in ‘Programs’) – wait until “Docker is running” pops up</li><li>Docker Toolbox: open the Docker QuickStart terminal and wait until “Docker is configured to use default machine…” pops up</li></ul><p><strong>Start OCR4all:</strong></p><ul><li>Linux: open the terminal, type in <code>docker start -ia ocr4all</code>, press &#39;enter&#39; and wait for the server to start</li><li>Windows 10 (Home, Pro, Enterprise, Education): open Windows PowerShell, type in <code>docker start -ia ocr4all</code>, press &#39;enter&#39; and wait for the server to start</li><li>Older Versions of Windows (with Docker Toolbox): open the Docker QuickStart terminal and wait until “Docker is configured to use default machine…” pops up</li></ul><p>After this initial installation, you will be able to easily access OCR4all in your browser, respectively under:</p><ul><li>Linux, Docker for Windows, macOS: <code>http://localhost:1476/ocr4all/</code></li><li>Docker Toolbox: <code>http://192.168.99.100:1476/ocr4all/</code></li></ul><p>Once OCR4all has been opened in a browser, the user will automatically land on the &#39;Project Overview&#39; starting page. From there, they will be able to access several features:</p><ul><li>&#39;<strong>Settings</strong>&#39;: This feature allows for selecting the book set to be worked on, which can be chosen from the dropdown menu found under ‘Project selection’ – the title having been previously saved as a folder under ocr4all/data/book title (see 1.2). Additionally, the ‘gray’ setting must be selected under the menu point ‘Project image type’.</li></ul><p><img src="'+c+'" alt="Abb2.jpg"></p><p>fig. 2: Project Overview settings.</p><ul><li><p>Following this initial set up, click on ‘load project’ in order for the book in question to be uploaded to the OCR4all platform. Seeing as OCR4all only accepts certain file designations and formats (i.e. 0001.png etc.), a data conversion might be requested which can be directly carried out in OCR4all (fig. 3).</p></li><li><p>It is irrelevant whether a PDF or individual images were placed in the &#39;input&#39; folder. If possible, however, single images are usually preferred.</p></li></ul><p><img src="'+p+'" alt="Abb3.png"></p><p>fig. 3. Data conversion request (i.g. PDF in &#39;input&#39; folder).</p><ul><li><p>In OCR4all, all data generated during the workflow and for its functioning are saved in a single PAGE XML file per scan page and are no longer kept in the form of many individual files. If project data from previous versions is still available, it is now possible to convert the project automatically into the structure required by OCR4all.</p></li><li><p>The feature &quot;Overview&quot; provides the user with a tabular presentation of the project’s ongoing progress (fig. 4). Each row corresponds to an individual book page, labelled by a page identifier (far left column). The following columns illustrate, from left to right, the workflow’s progression. Once a particular step has been executed, it will appear as completed (green check mark) in that work stage’s specific column.</p></li></ul><p><img src="'+d+'" alt="Abb4.png"></p><p>fig. 4: Overview.</p><ul><li><p>Clicking on an individual page’s identifier enables the user to check on the state of that specific page’s processing, as well as on the data generated by it, at any time during the workflow. To this effect, please use the ‘images’ column, as well as the subsequent options: ‘original’, ‘binary’, ‘gray’ and ‘noise removal’.</p></li><li><p>With the button &quot;Export GT&quot; (top right) all data created in the course of the project can be exported and packed as a zip folder within &#39;data&#39;.</p></li></ul>',17))])}const k=o(u,[["render",h]]);export{_ as __pageData,k as default};
