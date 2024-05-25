const menuLinks = [
    { text: "about", href: "/about" },
    { text: "catalog", href: "/catalog" },
    { text: "orders", href: "/orders" },
    { text: "account", href: "/account" },
  ];
  
  const mainEl = document.querySelector("main");
  
  mainEl.style.background = "var(--main-bg)";
  
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  
  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");
  
  topMenuEl.style.height = "100%";
  
  topMenuEl.style.background = "var(--top-menu-bg)";
  
  topMenuEl.classList.add("flex-around");
  
  menuLinks.forEach((linkObj) => {
  
    const aEl = document.createElement("a");
    
    aEl.setAttribute("href", linkObj.href);
  
    aEl.textContent = linkObj.text;
   
    topMenuEl.append(aEl);
  });