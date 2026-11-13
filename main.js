'use strict';
const contactEmail = 'dkgnsa171@gmail.com';
document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(contactEmail);
    status.textContent = 'Email address copied to clipboard.';
  } catch {
    status.textContent = `Direct contact: ${contactEmail}`;
  }
});

document.getElementById('brief-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const email = String(data.get('email')).trim();
  const project = String(data.get('project')).trim();
  if (!name || !project) {
    document.getElementById('brief-status').textContent = 'Please provide your name and project details.';
    return;
  }
  const subject = `Engineering Engagement Enquiry from ${name}`;
  const body = `Hello Geeth,\n\n${project}\n\nFrom: ${name}\nContact Email: ${email}`;
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById('brief-status').textContent = 'Email client draft launched. You can also email directly at ' + contactEmail;
});

const projectFilterButtons = document.querySelectorAll('[data-project-filter]');
const projectCards = document.querySelectorAll('[data-status]');
projectFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.projectFilter;
    projectFilterButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    let visible = 0;
    projectCards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.status !== filter;
      if (!card.hidden) visible += 1;
    });
    const labelMap = {
      all: 'all',
      production: 'production web',
      systems: 'systems & security',
      development: 'mobile & pre-release'
    };
    const label = labelMap[filter] || filter;
    document.getElementById('project-filter-status').textContent = filter === 'all' ? `Showing all ${visible} projects.` : `Showing ${visible} ${label} projects.`;
  });
});
