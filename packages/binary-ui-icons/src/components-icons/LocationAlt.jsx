import React from 'react';
import cardsIconHOC from '../hoc/CardsIconHOC';

export default cardsIconHOC(
  ({ Group, Shape }) => (
    <Group>
      <Shape
        d="M390.009,191.495c1.255,-63.162 -51.057,-133.775 -134.013,-134.014c-78.689,-0.826 -135.017,65.607 -134.014,134.014c1.064,39.843 9.12,49.137 21.014,73.5c9.383,19.22 99.938,178.282 98,178.5c10.048,15.165 19.338,14.246 28,0l99,-176.5c13.465,-25.227 19.975,-37.321 22.013,-75.5l0,0Zm-24.027,1.965c1.03,-51.838 -41.902,-109.79 -109.986,-109.986c-64.58,-0.677 -110.809,53.845 -109.986,109.986c0.874,32.7 7.485,40.328 17.246,60.322c7.701,15.774 83.059,151.507 81.467,151.685c8.247,12.446 15.871,11.692 22.98,0l80.213,-150.043c11.051,-20.704 16.394,-30.629 18.066,-61.964Zm-109.982,-71.965c38.634,0 70,31.366 70,70c0,38.634 -31.366,70 -70,70c-38.634,0 -70,-31.366 -70,-70c0,-38.634 31.366,-70 70,-70Zm0,25c24.836,0 45,20.164 45,45c0,24.836 -20.164,45 -45,45c-24.836,0 -45,-20.164 -45,-45c0,-24.836 20.164,-45 45,-45Z"
      />
    </Group>
  )
);