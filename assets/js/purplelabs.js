const tabCompany = document.querySelector('.tab__company');
const tabService = document.querySelector('.tab__service');
const tabMember = document.querySelector('.tab__member');

const sectionCompany = document.querySelector('.company');
const sectionGoal = document.querySelector('.goal');
const sectionService = document.querySelector('.service');
// const sectionComment = document.querySelector('.comment');
const sectionMember = document.querySelector('.member');
const sectionBottomImageContainer = document.querySelector('.bottom-image-container');

function selectTab(tab, isSelected) {
  tab.style.opacity = isSelected ? 1 : 0.2;
  tab.style.color = isSelected ? '#663399' : '#333333';
  tab.style['border-bottom'] = isSelected ? '3px solid #663399' : null;
}

function clickCompany() {
  selectTab(tabCompany, true);
  selectTab(tabService, false);
  selectTab(tabMember, false);
  sectionCompany.style.display = '';
  sectionGoal.style.display = '';
  sectionService.style.display = 'none';
  // sectionComment.style.display = 'none';
  sectionMember.style.display = 'none';
  sectionBottomImageContainer.style.display = '';
}

function clickService() {
  selectTab(tabCompany, false);
  selectTab(tabService, true);
  selectTab(tabMember, false);
  sectionCompany.style.display = 'none';
  sectionGoal.style.display = 'none';
  sectionService.style.display = '';
  // sectionComment.style.display = 'none';
  sectionMember.style.display = 'none';
  sectionBottomImageContainer.style.display = 'none';
}

function clickMember() {
  selectTab(tabCompany, false);
  selectTab(tabService, false);
  selectTab(tabMember, true);
  sectionCompany.style.display = 'none';
  sectionGoal.style.display = 'none';
  sectionService.style.display = 'none';
  // sectionComment.style = null;
  sectionMember.style.display = '';
  sectionBottomImageContainer.style.display = 'none';
}

tabCompany.addEventListener('click', clickCompany);
tabService.addEventListener('click', clickService);
tabMember.addEventListener('click', clickMember);

clickCompany();