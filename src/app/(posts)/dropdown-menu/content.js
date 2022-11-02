export const css = `.menu-item {
  position: relative;
}

.sub-menu {
  display: none;

  position: absolute;
}

.menu-item-has-children[aria-expanded=true] .sub-menu {
  display: block;
}`;

export const html = `<header data-dropdown=".menu-item-has-children">
  <ul class="dropdown-menu">
    <li class="menu-item">
      <a href="/">Home</a>
    </li>
    <li class="menu-item menu-item-has-children">
      <a href="/classes">Classes</a>
      <ul class="sub-menu">
        <li class="menu-item">
          <a href="/class-type-i/">Class Type I</a>
        </li>
        <li class="menu-item">
          <a href="/class-type-ii/">Class Type II</a>
        </li>
        <li class="menu-item">
          <a href="/class-type-iii/">Class Type III</a>
        </li>
      </ul>
    </li>
    <li class="menu-item">
      <a href="/pricing/">Pricing</a>
    </li>
    <li class="menu-item">
      <a href="/policies-rules/">Policies and Rules</a>
    </li>
  </ul>
</header>`;

export const javascript = {
  dropdowns: `function Dropdowns() {
  const dropdowns = document.querySelectorAll("[data-dropdown]");
  if (!dropdowns) return;
  dropdowns.forEach(Dropdown);
}`,
  dropdown: `function Dropdown(wrapper) {
  const elSelector = wrapper.dataset.dropdown;
  const elements = wrapper.querySelectorAll(elSelector);
  elements.forEach(DropdownElement);
}`,
  dropdownElement: `function DropdownElement(el) {
  const subMenu = el.querySelector("ul");
  if (!subMenu) return;
  const subMenuId = \`submenu-\${el.id}\` || \`submenu-\${Math.random()}\`;
  subMenu.id = subMenuId;
  el.setAttribute("aria-controls", subMenuId);

  let open = false;
  const link = el.querySelector("a");

  const onLinkClick = (e) => e.preventDefault();
  const closeSubMenu = () => updateOpen(false);
  const openSubMenu = () => updateOpen(true);

  function onLinkTouch(e) {
    e.preventDefault();
    updateOpen(!open);
  }

  function onElMouseenter() {
    openSubMenu();
    el.classList.add("has-hover");
  }

  function onElMouseleave() {
    closeSubMenu();
    el.classList.remove("has-hover");
  }

  function updateOpen(state) {
    open = state;
    el.setAttribute("aria-expanded", open);
  }

  el.addEventListener("mouseenter", onElMouseenter);
  el.addEventListener("mouseleave", onElMouseleave);
  link.addEventListener("click", onLinkClick);
  link.addEventListener("touchend", onLinkTouch);

  el.addEventListener("focusin", () => {
    openSubMenu();
    el.classList.add("has-focus");
  });

  el.addEventListener("focusout", (e) => {
    if (el.contains(e.relatedTarget)) return;
    closeSubMenu();
    el.classList.remove("has-focus");
  });
}`,
};

export const title = "How To Build a Dropdown Menu with Vanilla JavaScript";
