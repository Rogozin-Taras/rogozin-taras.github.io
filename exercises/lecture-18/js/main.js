'use strict';

// Example profile data
const profiles = [
  {
    pictureUrl: "img/adna_mask.jpg",
    name: "Edna Mask",
    jobTitle: "Software Engineer",
    description: "Experienced in developing scalable web applications.",
  },
  {
    pictureUrl: "img/peter_cat.jpg",
    name: "Peter Cat",
    jobTitle: "Product Manager",
    description: "Guides product vision, strategy, and success.",
  },
  {
    pictureUrl: "img/grace_picasso.jpg",
    name: "Grace Picasso",
    jobTitle: "UX Designer",
    description: "Passionate about creating user-friendly designs.",
  },
];

const profileContainer = document.querySelector('.profile-cards-container');
const template = document.getElementById('profile-card-template');

profiles.forEach(profile => {
    const cardClone = template.content.cloneNode(true);
   
    cardClone.querySelector('.profile-picture').src = profile.pictureUrl;
    cardClone.querySelector('.profile-title').textContent = profile.name;
    cardClone.querySelector('.profile-job-title').textContent = profile.jobTitle;
    cardClone.querySelector('.profile-description').textContent = profile.description;

    profileContainer.appendChild(cardClone);
});