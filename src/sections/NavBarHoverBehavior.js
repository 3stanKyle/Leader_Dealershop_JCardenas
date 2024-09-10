document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item-with-dropdown');
    const overlay = document.querySelector('.nav-overlay');
    let activeItem = null;
    let timeoutId = null;
  
    function activateDropdown(item) {
      if (activeItem) {
        deactivateDropdown(activeItem);
      }
      item.classList.add('active');
      overlay.classList.add('active');
      activeItem = item;
    }
  
    function deactivateDropdown(item) {
      item.classList.remove('active');
      overlay.classList.remove('active');
      activeItem = null;
    }
  
    navItems.forEach(item => {
      const dropdown = item.querySelector('.nav-dropdown');
  
      item.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
        activateDropdown(item);
      });
  
      item.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          if (activeItem === item) {
            deactivateDropdown(item);
          }
        }, 300); // 300ms delay before closing
      });
  
      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeoutId);
      });
  
      dropdown.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
          if (activeItem === item) {
            deactivateDropdown(item);
          }
        }, 300); // 300ms delay before closing
      });
    });
  
    overlay.addEventListener('click', () => {
      if (activeItem) {
        deactivateDropdown(activeItem);
      }
    });
  });