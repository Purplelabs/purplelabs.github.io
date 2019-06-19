const tabCompany = document.querySelector('.tab__company');
const tabService = document.querySelector('.tab__service');
const tabMember = document.querySelector('.tab__member');

const sectionCompany = document.querySelector('.company');
const sectionGoal = document.querySelector('.goal');
const sectionService = document.querySelector('.service');
// const sectionComment = document.querySelector('.comment');
const sectionMember = document.querySelector('.member');
const sectionBottomImageContainer = document.querySelector('.bottom-image-container');

const selectTab = (tab, isSelected) => {
  tab.style.opacity = isSelected ? 1 : 0.2;
  tab.style.color = isSelected ? '#663399' : '#333333';
  tab.style['border-bottom'] = isSelected ? '3px solid #663399' : null;
}

const clickCompany = () => {
  selectTab(tabCompany, true);
  selectTab(tabService, false);
  selectTab(tabMember, false);
  sectionCompany.style = null;
  sectionGoal.style = null;
  sectionService.style.display = 'none';
  // sectionComment.style.display = 'none';
  sectionMember.style.display = 'none';
  sectionBottomImageContainer.style = null;
};

const clickService = () => {
  selectTab(tabCompany, false);
  selectTab(tabService, true);
  selectTab(tabMember, false);
  sectionCompany.style.display = 'none';
  sectionGoal.style.display = 'none';
  sectionService.style = null;
  // sectionComment.style.display = 'none';
  sectionMember.style.display = 'none';
  sectionBottomImageContainer.style.display = 'none';
};

const clickMember = () => {
  selectTab(tabCompany, false);
  selectTab(tabService, false);
  selectTab(tabMember, true);
  sectionCompany.style.display = 'none';
  sectionGoal.style.display = 'none';
  sectionService.style.display = 'none';
  // sectionComment.style = null;
  sectionMember.style = null;
  sectionBottomImageContainer.style.display = 'none';
};

tabCompany.addEventListener('click', clickCompany);
tabService.addEventListener('click', clickService);
tabMember.addEventListener('click', clickMember);

clickCompany();