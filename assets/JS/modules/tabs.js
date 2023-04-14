const tabs = ({tabsSelector, tabsContentSelector, activeClass}) => {
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);

    tabs.forEach((tab, i) => {

        tab.addEventListener('click', (e) => {
            tabs.forEach((tab) => {
                tab.classList.remove('active');
            });
            e.target.classList.add('active');
            
          tabsContent.forEach((content) => {
              content.style.display = 'none';
          })
          tabsContent[i].style.display = 'block';
        });
    });
};

export default tabs;